/**
 * Service Worker do BrilhaVest - PWA Offline & Cache
 * Versão: 2.1.0
 */

const CACHE_NAME = 'brilhavest-cache-v2.1';

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

// Ativação: remove caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Interceptação de requisições: Stale-While-Revalidate para ativos e Network-First para APIs
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Não interceptar requisições para o Supabase ou autenticação (devem ir sempre pela rede)
  if (requestUrl.hostname.includes('supabase.co')) {
    return;
  }

  // Requisições GET normais do app
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Se encontrou em cache, retorna e atualiza em segundo plano (Stale-While-Revalidate)
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Se falhar a rede, não tem problema, o cache já serviu a resposta
        });

        return cachedResponse || fetchPromise;
      })
    );
  }
});
