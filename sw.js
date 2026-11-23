/**
 * Service Worker do BrilhaVest - PWA Offline, Cache & Notificações Push / Diárias
 * Versão: 4.2.0
 */

const CACHE_NAME = 'brilhavest-cache-v4.2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/styles.css',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './js/app.js',
  './js/supabaseClient.js',
  './js/admin.js',
  './js/data/questions_matematica.js',
  './js/data/questions_natureza.js',
  './js/data/questions_humanas.js',
  './js/data/questions_linguagens.js',
  './js/data/questions.js',
  './js/data/books.js',
  './js/data/redacao.js',
  './js/data/checklist.js',
  './js/data/flashcards.js'
];

// Instalação: baixa e armazena os recursos essenciais em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Ativação: remove caches antigos imediatamente
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[SW] Removendo cache antigo:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Interceptação de requisições: Network-First com fallback para cache offline
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Não interceptar requisições para o Supabase ou autenticação (devem ir sempre pela rede)
  if (requestUrl.hostname.includes('supabase.co')) {
    return;
  }

  // 1. Navegação / HTML: Network-First com fallback para cache (garante atualizações imediatas no celular!)
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          }
          return networkResponse;
        })
        .catch(() => caches.match('./index.html') || caches.match(event.request))
    );
    return;
  }

  // 2. Recursos estáticos GET (JS, CSS, Imagens): Network-First para refletir alterações sem travar em cache antigo
  if (event.request.method === 'GET') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
  }
});

// ==========================================
// PUSH NOTIFICATIONS & MOTIVATIONAL ALERTS
// ==========================================

// Evento disparado quando o app envia mensagem direta para o Service Worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, options } = event.data;
    self.registration.showNotification(title, options);
  }
});

// Evento de Push do servidor
self.addEventListener('push', (event) => {
  let data = {
    title: 'BrilhaVest - Você é Capaz! 🎓',
    body: 'Sentimos sua falta! Pequenos passos diários constroem aprovações gigantescas. Bora estudar um pouco hoje?',
    url: './index.html?tab=questions'
  };

  if (event.data) {
    try {
      data = Object.assign(data, event.data.json());
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png',
    vibrate: [200, 100, 200, 100, 200],
    tag: 'brilhavest-daily-motivation',
    renotify: true,
    data: {
      url: data.url || './index.html?tab=questions'
    },
    actions: [
      { action: 'study', title: '🚀 Estudar Agora' },
      { action: 'close', title: 'Depois' }
    ]
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

// Clique na Notificação: abre ou foca no BrilhaVest
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'close') {
    return;
  }

  const targetUrl = (event.notification.data && event.notification.data.url) 
    ? event.notification.data.url 
    : './index.html?tab=questions';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Se o app já estiver aberto em alguma aba, foca nela
      for (const client of clientList) {
        if ('focus' in client) {
          if ('navigate' in client) {
            client.navigate(targetUrl);
          }
          return client.focus();
        }
      }
      // Se não estiver aberto, abre uma nova janela
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
