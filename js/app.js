/**
 * BrilhaVest - FUVEST & ENEM
 * Aplicação interativa de estudos para vestibulandos com persistência em LocalStorage
 */

// Estado global da aplicação
const AppState = {
  activeTab: 'dashboard',
  theme: 'light',
  stats: {
    answered: 0,
    correct: 0,
    history: []
  },
  checklist: {}, // { [topicId]: { theory: false, exercises: false, review: false } }
  checklistView: 'all', // 'all', 'enem', 'fuvest'
  checklistDiscipline: 'Todas',
  readBooks: {}, // { [bookId]: true }
  flashcardDeck: {
    cards: [],
    currentIndex: 0,
    filterCategory: 'Todas',
    isFlipped: false,
    learnedIds: []
  },
  examMode: {
    active: false,
    questions: [],
    currentIndex: 0,
    userAnswers: {}, // { [qId]: optionIndex }
    timerMode: 'auto', // 'auto', 'custom', 'none'
    customMinutes: 30,
    timeRemaining: 0,
    timerInterval: null,
    isFinished: false
  },
  practice: {
    filterVestibular: 'Todos',
    filterSubject: 'Todas',
    filterDifficulty: 'Todas',
    searchQuery: '',
    currentPage: 1,
    pageSize: 8,
    selectedAnswers: {}, // { [qId]: optionIndex }
    revealed: {} // { [qId]: true }
  },
  essayDraft: {
    topic: '',
    title: '',
    text: '',
    type: 'ENEM'
  }
};

// Armazenamento Local
const STORAGE_KEY = 'brilhavest_storage_v2';

function saveToLocalStorage() {
  try {
    const payload = {
      stats: AppState.stats,
      checklist: AppState.checklist,
      readBooks: AppState.readBooks,
      flashcardStats: {
        learnedIds: AppState.flashcardDeck.learnedIds,
        customCards: AppState.flashcardDeck.cards.filter(c => c.isCustom)
      },
      essayDraft: AppState.essayDraft
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.error("Erro ao salvar no LocalStorage", e);
  }
}

function loadFromLocalStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('brilhavest_storage_v1');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.stats) AppState.stats = data.stats;
      if (data.checklist) AppState.checklist = data.checklist;
      if (data.readBooks) AppState.readBooks = data.readBooks;
      if (data.essayDraft) {
        AppState.essayDraft = {
          topic: data.essayDraft.topic || '',
          title: data.essayDraft.title || '',
          text: data.essayDraft.text || '',
          type: data.essayDraft.type || 'ENEM'
        };
      }
      if (data.flashcardStats) {
        AppState.flashcardDeck.learnedIds = data.flashcardStats.learnedIds || [];
        const customCards = data.flashcardStats.customCards || [];
        AppState.flashcardDeck.cards = [...initialFlashcards, ...customCards];
      } else {
        AppState.flashcardDeck.cards = [...initialFlashcards];
      }
      return;
    }
  } catch (e) {
    console.warn("Nenhum dado prévio ou erro ao carregar LocalStorage", e);
  }
  AppState.flashcardDeck.cards = [...initialFlashcards];
}

// Inicialização Geral
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadFromLocalStorage();
  initNavigation();
  initDashboard();
  initQuestions();
  initBooks();
  initRedacao();
  initChecklist();
  initFlashcards();
  initModalsDismissal();
  updateGlobalBadges();
  initPWA();
  initMotivationAndNotifications();
  if (typeof initSupabase === 'function') {
    initSupabase();
  }
});

// ==========================================
// PWA (PROGRESSIVE WEB APP) & OFFLINE CACHE
// ==========================================
let deferredPWAInstallPrompt = null;

function initPWA() {
  // 1. Registro do Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('[PWA] Service Worker registrado com sucesso:', reg.scope);
        })
        .catch((err) => {
          console.warn('[PWA] Falha ao registrar Service Worker:', err);
        });
    });
  }

  // 2. Intercepta o evento de instalação do PWA para exibir o botão customizado
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPWAInstallPrompt = e;
    const btnInstall = document.getElementById('btn-install-pwa');
    if (btnInstall) {
      btnInstall.classList.remove('hidden');
      btnInstall.classList.add('flex');
    }
  });

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] BrilhaVest instalado com sucesso!');
    deferredPWAInstallPrompt = null;
    const btnInstall = document.getElementById('btn-install-pwa');
    if (btnInstall) {
      btnInstall.classList.add('hidden');
      btnInstall.classList.remove('flex');
    }
  });

  // 3. Monitoramento de conexão online/offline
  window.addEventListener('offline', () => {
    const banner = document.getElementById('pwa-offline-banner');
    if (banner) banner.classList.remove('hidden');
  });

  window.addEventListener('online', () => {
    const banner = document.getElementById('pwa-offline-banner');
    if (banner) banner.classList.add('hidden');
    if (typeof handleManualCloudSync === 'function') {
      handleManualCloudSync();
    }
  });

  if (!navigator.onLine) {
    const banner = document.getElementById('pwa-offline-banner');
    if (banner) banner.classList.remove('hidden');
  }
}

window.triggerPWAInstall = async function() {
  if (!deferredPWAInstallPrompt) {
    alert("Para instalar no iPhone/iPad: toque no botão Compartilhar do Safari e selecione 'Adicionar à Tela de Início'.\n\nNo Android/Chrome: clique nos 3 pontinhos e selecione 'Instalar aplicativo'.");
    return;
  }
  deferredPWAInstallPrompt.prompt();
  const { outcome } = await deferredPWAInstallPrompt.userChoice;
  console.log('[PWA] Escolha do usuário:', outcome);
  deferredPWAInstallPrompt = null;
  const btnInstall = document.getElementById('btn-install-pwa');
  if (btnInstall) {
    btnInstall.classList.add('hidden');
    btnInstall.classList.remove('flex');
  }
};

// ==========================================
// MODO ESCURO (DARK MODE)
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem('brilhavest_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  applyTheme(isDark, false);
}

window.toggleDarkMode = function() {
  const isCurrentlyDark = document.documentElement.classList.contains('dark');
  applyTheme(!isCurrentlyDark, true);
};

function applyTheme(isDark, syncCloud = true) {
  const icon = document.getElementById('theme-toggle-icon');
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('brilhavest_theme', 'dark');
    AppState.theme = 'dark';
    if (icon) {
      icon.className = 'fa-solid fa-sun text-amber-400 text-sm';
    }
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('brilhavest_theme', 'light');
    AppState.theme = 'light';
    if (icon) {
      icon.className = 'fa-solid fa-moon text-slate-600 text-sm';
    }
  }
  if (syncCloud && typeof syncThemeToSupabase === 'function') {
    syncThemeToSupabase(AppState.theme);
  }
}

// Fechar modais ao clicar no fundo escurecido ou apertar ESC
function initModalsDismissal() {
  const bookModal = document.getElementById('book-detail-modal');
  if (bookModal) {
    bookModal.addEventListener('click', (e) => {
      if (e.target === bookModal) closeBookModal();
    });
  }

  const fcModal = document.getElementById('add-flashcard-modal');
  if (fcModal) {
    fcModal.addEventListener('click', (e) => {
      if (e.target === fcModal) closeAddFlashcardModal();
    });
  }

  const authModal = document.getElementById('supabase-auth-modal');
  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal && typeof closeAuthModal === 'function') closeAuthModal();
    });
  }

  const countdownModal = document.getElementById('countdown-settings-modal');
  if (countdownModal) {
    countdownModal.addEventListener('click', (e) => {
      if (e.target === countdownModal && typeof closeCountdownSettingsModal === 'function') closeCountdownSettingsModal();
    });
  }

  const settingsModal = document.getElementById('settings-modal');
  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal && typeof closeSettingsModal === 'function') closeSettingsModal();
    });
  }

  const adminModal = document.getElementById('admin-panel-modal');
  if (adminModal) {
    adminModal.addEventListener('click', (e) => {
      if (e.target === adminModal && typeof closeAdminModal === 'function') closeAdminModal();
    });
  }

  const adminDetailModal = document.getElementById('admin-student-detail-modal');
  if (adminDetailModal) {
    adminDetailModal.addEventListener('click', (e) => {
      if (e.target === adminDetailModal && typeof closeAdminStudentDetailModal === 'function') closeAdminStudentDetailModal();
    });
  }

  // Atalho da tecla ESC para fechar qualquer modal ou menu lateral ativo
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (typeof closeSideMenu === 'function') closeSideMenu();
      if (typeof closeAuthModal === 'function') closeAuthModal();
      if (typeof closeBookModal === 'function') closeBookModal();
      if (typeof closeAddFlashcardModal === 'function') closeAddFlashcardModal();
      if (typeof closeCountdownSettingsModal === 'function') closeCountdownSettingsModal();
      if (typeof closeSettingsModal === 'function') closeSettingsModal();
      if (typeof closeAdminStudentDetailModal === 'function') closeAdminStudentDetailModal();
      if (typeof closeAdminModal === 'function') closeAdminModal();
    }
  });
}

// =============================================================================
// MENU LATERAL RETRÁTIL (DRAWER 3 TRAÇOS / PONTINHOS)
// =============================================================================

window.openSideMenu = function() {
  const drawer = document.getElementById('side-menu-drawer');
  const backdrop = document.getElementById('side-menu-backdrop');
  const panel = document.getElementById('side-menu-panel');
  if (!drawer || !backdrop || !panel) return;

  // Atualizar dados do usuário no menu lateral
  const nameEl = document.getElementById('side-menu-user-name');
  const subtitleEl = document.getElementById('side-menu-user-subtitle');
  const avatarEl = document.getElementById('side-menu-user-avatar');

  const student = (typeof getCurrentStudent === 'function' ? getCurrentStudent() : null) || 
                  (typeof SupabaseManager !== 'undefined' && SupabaseManager.user ? {
                    displayName: SupabaseManager.profile?.display_name || SupabaseManager.user.user_metadata?.display_name || SupabaseManager.user.email?.split('@')[0] || 'Estudante',
                    targetCourse: SupabaseManager.profile?.target_course || SupabaseManager.user.user_metadata?.target_course || 'FUVEST & ENEM'
                  } : null);

  if (student) {
    if (nameEl) nameEl.textContent = student.displayName || 'Estudante';
    if (subtitleEl) subtitleEl.textContent = `🎯 ${student.targetCourse || 'FUVEST & ENEM'}`;
    if (avatarEl) avatarEl.textContent = (student.displayName || 'E').charAt(0).toUpperCase();
  } else {
    if (nameEl) nameEl.textContent = 'Olá, Vestibulando!';
    if (subtitleEl) subtitleEl.textContent = 'Clique para criar conta ou entrar';
    if (avatarEl) avatarEl.textContent = 'V';
  }

  drawer.classList.remove('pointer-events-none');
  backdrop.classList.add('opacity-100');
  panel.classList.remove('-translate-x-full');
};

window.closeSideMenu = function() {
  const drawer = document.getElementById('side-menu-drawer');
  const backdrop = document.getElementById('side-menu-backdrop');
  const panel = document.getElementById('side-menu-panel');
  if (!drawer || !backdrop || !panel) return;

  drawer.classList.add('pointer-events-none');
  panel.classList.add('-translate-x-full');
  backdrop.classList.remove('opacity-100');
};

// Navegação entre Abas
function initNavigation() {
  const navButtons = document.querySelectorAll('[data-tab-target]');
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-tab-target');
      switchTab(target);
    });
  });
}

window.switchTab = function(tabId) {
  AppState.activeTab = tabId;

  // Atualizar visual da barra de navegação
  document.querySelectorAll('[data-tab-target]').forEach(b => {
    const isTarget = b.getAttribute('data-tab-target') === tabId;
    if (isTarget) {
      b.classList.remove('text-slate-600', 'hover:text-indigo-600', 'border-transparent');
      b.classList.add('text-indigo-600', 'border-indigo-600', 'font-semibold');
    } else {
      b.classList.remove('text-indigo-600', 'border-indigo-600', 'font-semibold');
      b.classList.add('text-slate-600', 'hover:text-indigo-600', 'border-transparent');
    }
  });

  // Alternar seções de conteúdo
  document.querySelectorAll('.tab-section').forEach(sec => {
    sec.classList.add('hidden');
  });

  const activeSection = document.getElementById(`tab-${tabId}`);
  if (activeSection) {
    activeSection.classList.remove('hidden');
    activeSection.classList.add('fade-in');
  }

  // Ações de refresh específicas por aba
  if (tabId === 'dashboard') updateDashboardMetrics();
  if (tabId === 'checklist') renderChecklist();
  if (tabId === 'questions') renderPracticeQuestions();
  if (tabId === 'books') renderBooks();

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ==========================================
// 1. DASHBOARD E CONTAGEM REGRESSIVA PRECISA & PERSONALIZÁVEL
// ==========================================
const COUNTDOWN_STORAGE_KEY = 'brilhavest_countdown_v2';

function getDefaultCountdownSettings() {
  const now = new Date();
  const currentYear = now.getFullYear();

  // Projeção padrão: se já passou do período de novembro/dezembro, mira o ano seguinte
  const enemTargetYear = (now.getMonth() > 10 || (now.getMonth() === 10 && now.getDate() > 15)) 
    ? currentYear + 1 
    : currentYear;

  const fuvestTargetYear = (now.getMonth() === 11 && now.getDate() > 7) 
    ? currentYear + 1 
    : currentYear;

  return {
    enem: {
      label: 'ENEM',
      title: `ENEM (8 e 15 de Novembro de ${enemTargetYear})`,
      desc: '1º Dia: 8 de Nov (Linguagens, Humanas e Redação) • 2º Dia: 15 de Nov (Matemática e Natureza)',
      dateTime: `${enemTargetYear}-11-08T13:00`
    },
    fuvest: {
      label: 'FUVEST',
      title: `FUVEST 2ª Fase (6 e 7 de Dezembro de ${fuvestTargetYear})`,
      desc: '1ª Fase em Novembro • 2ª Fase: 6 e 7 de Dezembro (Provas Dissertativas Específicas)',
      dateTime: `${fuvestTargetYear}-12-06T13:00`
    }
  };
}

function loadCountdownSettings() {
  try {
    const saved = localStorage.getItem(COUNTDOWN_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.enem && parsed.fuvest && parsed.enem.dateTime && parsed.fuvest.dateTime) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Erro ao ler configurações da contagem regressiva:", e);
  }
  return getDefaultCountdownSettings();
}

function saveCountdownSettingsToStorage(settings) {
  try {
    localStorage.setItem(COUNTDOWN_STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.warn("Erro ao salvar contagem regressiva:", e);
  }
}

function initDashboard() {
  AppState.countdownSettings = loadCountdownSettings();
  updateCountdown();
  // Atualiza a cada 1 segundo para relógio digital vivo com segundos correndo
  setInterval(updateCountdown, 1000);
  updateDashboardMetrics();
}

function updateCountdown() {
  const now = new Date().getTime();
  const settings = AppState.countdownSettings || loadCountdownSettings();
  AppState.countdownSettings = settings;

  // Atualizar cabeçalhos e descrições dos cards
  const elEnemTitle = document.getElementById('countdown-enem-title');
  const elEnemDesc = document.getElementById('countdown-enem-desc');
  const elEnemLabel = document.getElementById('countdown-enem-label');
  if (elEnemTitle && settings.enem.title) elEnemTitle.innerText = settings.enem.title;
  if (elEnemDesc && settings.enem.desc) elEnemDesc.innerText = settings.enem.desc;
  if (elEnemLabel && settings.enem.label) elEnemLabel.innerText = settings.enem.label;

  const elFuvestTitle = document.getElementById('countdown-fuvest-title');
  const elFuvestDesc = document.getElementById('countdown-fuvest-desc');
  const elFuvestLabel = document.getElementById('countdown-fuvest-label');
  if (elFuvestTitle && settings.fuvest.title) elFuvestTitle.innerText = settings.fuvest.title;
  if (elFuvestDesc && settings.fuvest.desc) elFuvestDesc.innerText = settings.fuvest.desc;
  if (elFuvestLabel && settings.fuvest.label) elFuvestLabel.innerText = settings.fuvest.label;

  // Cálculos ENEM
  const enemTarget = new Date(settings.enem.dateTime).getTime();
  const enemDiff = enemTarget - now;
  renderCountdownDigits('enem', enemDiff);

  // Cálculos FUVEST
  const fuvestTarget = new Date(settings.fuvest.dateTime).getTime();
  const fuvestDiff = fuvestTarget - now;
  renderCountdownDigits('fuvest', fuvestDiff);
}

function renderCountdownDigits(prefix, diff) {
  const elD = document.getElementById(`countdown-${prefix}-d`);
  const elH = document.getElementById(`countdown-${prefix}-h`);
  const elM = document.getElementById(`countdown-${prefix}-m`);
  const elS = document.getElementById(`countdown-${prefix}-s`);
  if (!elD || !elH || !elM || !elS) return;

  if (isNaN(diff) || diff <= 0) {
    elD.innerText = '00';
    elH.innerText = '00';
    elM.innerText = '00';
    elS.innerText = '00';
    return;
  }

  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / (3600 * 24));
  const hours = Math.floor((totalSec % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  elD.innerText = days < 10 ? `0${days}` : String(days);
  elH.innerText = String(hours).padStart(2, '0');
  elM.innerText = String(minutes).padStart(2, '0');
  elS.innerText = String(seconds).padStart(2, '0');
}

window.openCountdownSettingsModal = function() {
  const modal = document.getElementById('countdown-settings-modal');
  if (!modal) return;
  const settings = AppState.countdownSettings || loadCountdownSettings();

  const inEnemTitle = document.getElementById('cfg-enem-title');
  const inEnemDate = document.getElementById('cfg-enem-date');
  const inEnemDesc = document.getElementById('cfg-enem-desc');
  if (inEnemTitle) inEnemTitle.value = settings.enem.title || '';
  if (inEnemDate) inEnemDate.value = settings.enem.dateTime ? settings.enem.dateTime.slice(0, 16) : '';
  if (inEnemDesc) inEnemDesc.value = settings.enem.desc || '';

  const inFuvestTitle = document.getElementById('cfg-fuvest-title');
  const inFuvestDate = document.getElementById('cfg-fuvest-date');
  const inFuvestDesc = document.getElementById('cfg-fuvest-desc');
  if (inFuvestTitle) inFuvestTitle.value = settings.fuvest.title || '';
  if (inFuvestDate) inFuvestDate.value = settings.fuvest.dateTime ? settings.fuvest.dateTime.slice(0, 16) : '';
  if (inFuvestDesc) inFuvestDesc.value = settings.fuvest.desc || '';

  modal.classList.remove('hidden');
};

window.closeCountdownSettingsModal = function() {
  const modal = document.getElementById('countdown-settings-modal');
  if (modal) modal.classList.add('hidden');
};

window.setCountdownPresetYear = function(year) {
  const inEnemTitle = document.getElementById('cfg-enem-title');
  const inEnemDate = document.getElementById('cfg-enem-date');
  const inEnemDesc = document.getElementById('cfg-enem-desc');

  const inFuvestTitle = document.getElementById('cfg-fuvest-title');
  const inFuvestDate = document.getElementById('cfg-fuvest-date');
  const inFuvestDesc = document.getElementById('cfg-fuvest-desc');

  if (inEnemTitle) inEnemTitle.value = `ENEM (8 e 15 de Novembro de ${year})`;
  if (inEnemDate) inEnemDate.value = `${year}-11-08T13:00`;
  if (inEnemDesc) inEnemDesc.value = '1º Dia: 8 de Nov (Linguagens, Humanas e Redação) • 2º Dia: 15 de Nov (Matemática e Natureza)';

  if (inFuvestTitle) inFuvestTitle.value = `FUVEST 2ª Fase (6 e 7 de Dezembro de ${year})`;
  if (inFuvestDate) inFuvestDate.value = `${year}-12-06T13:00`;
  if (inFuvestDesc) inFuvestDesc.value = '1ª Fase em Novembro • 2ª Fase: 6 e 7 de Dezembro (Provas Dissertativas Específicas)';
};

window.handleSaveCountdownSettings = function(e) {
  if (e) e.preventDefault();
  const settings = {
    enem: {
      label: 'ENEM',
      title: document.getElementById('cfg-enem-title')?.value.trim() || 'ENEM',
      dateTime: document.getElementById('cfg-enem-date')?.value || `${new Date().getFullYear()}-11-08T13:00`,
      desc: document.getElementById('cfg-enem-desc')?.value.trim() || ''
    },
    fuvest: {
      label: 'FUVEST',
      title: document.getElementById('cfg-fuvest-title')?.value.trim() || 'FUVEST',
      dateTime: document.getElementById('cfg-fuvest-date')?.value || `${new Date().getFullYear()}-12-06T13:00`,
      desc: document.getElementById('cfg-fuvest-desc')?.value.trim() || ''
    }
  };

  AppState.countdownSettings = settings;
  saveCountdownSettingsToStorage(settings);
  updateCountdown();
  closeCountdownSettingsModal();
};

window.resetCountdownSettings = function() {
  const defaults = getDefaultCountdownSettings();
  AppState.countdownSettings = defaults;
  saveCountdownSettingsToStorage(defaults);
  openCountdownSettingsModal();
  updateCountdown();
};

function updateDashboardMetrics() {
  const answered = AppState.stats.answered || 0;
  const correct = AppState.stats.correct || 0;
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

  // Checklist completado
  let totalTopics = 0;
  let finishedTheory = 0;
  checklistData.forEach(d => {
    d.topics.forEach(t => {
      totalTopics++;
      if (AppState.checklist[t.id]?.theory) finishedTheory++;
    });
  });
  const checklistPercent = totalTopics > 0 ? Math.round((finishedTheory / totalTopics) * 100) : 0;

  // Livros lidos (9 da FUVEST 2027)
  const readBooksCount = Object.keys(AppState.readBooks).filter(k => AppState.readBooks[k]).length;

  // Flashcards dominados
  const learnedCardsCount = AppState.flashcardDeck.learnedIds.length;

  // Atualizar DOM do Dashboard
  const elAccuracy = document.getElementById('metric-accuracy');
  const elAnswered = document.getElementById('metric-answered');
  const elChecklistPercent = document.getElementById('metric-checklist-percent');
  const elReadBooks = document.getElementById('metric-books-read');
  const elLearnedCards = document.getElementById('metric-flashcards-learned');

  if (elAccuracy) elAccuracy.innerText = `${accuracy}%`;
  if (elAnswered) elAnswered.innerText = answered;
  if (elChecklistPercent) elChecklistPercent.innerText = `${checklistPercent}%`;
  if (elReadBooks) elReadBooks.innerText = `${readBooksCount} / ${booksData.length}`;
  if (elLearnedCards) elLearnedCards.innerText = learnedCardsCount;
}

function updateGlobalBadges() {
  updateDashboardMetrics();
}

// ==========================================
// 2. MÓDULO DE QUESTÕES & SIMULADOS
// ==========================================
function initQuestions() {
  // Filtros de Prática
  const vestFilter = document.getElementById('filter-vestibular');
  const subjFilter = document.getElementById('filter-subject');
  const diffFilter = document.getElementById('filter-difficulty');
  const searchInput = document.getElementById('search-question-input');

  if (vestFilter) {
    vestFilter.addEventListener('change', (e) => {
      AppState.practice.filterVestibular = e.target.value;
      AppState.practice.currentPage = 1;
      renderPracticeQuestions();
    });
  }
  if (subjFilter) {
    subjFilter.addEventListener('change', (e) => {
      AppState.practice.filterSubject = e.target.value;
      AppState.practice.currentPage = 1;
      renderPracticeQuestions();
    });
  }
  if (diffFilter) {
    diffFilter.addEventListener('change', (e) => {
      AppState.practice.filterDifficulty = e.target.value;
      AppState.practice.currentPage = 1;
      renderPracticeQuestions();
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.practice.searchQuery = e.target.value.toLowerCase().trim();
      AppState.practice.currentPage = 1;
      renderPracticeQuestions();
    });
  }

  // Botões de alternância de modo (Prática vs Simulado)
  const btnPracticeMode = document.getElementById('btn-mode-practice');
  const btnExamMode = document.getElementById('btn-mode-exam');

  if (btnPracticeMode && btnExamMode) {
    btnPracticeMode.addEventListener('click', () => {
      document.getElementById('questions-practice-view').classList.remove('hidden');
      document.getElementById('questions-exam-view').classList.add('hidden');
      btnPracticeMode.classList.add('bg-indigo-600', 'text-white');
      btnPracticeMode.classList.remove('bg-white', 'text-slate-700');
      btnExamMode.classList.add('bg-white', 'text-slate-700');
      btnExamMode.classList.remove('bg-indigo-600', 'text-white');
    });

    btnExamMode.addEventListener('click', () => {
      document.getElementById('questions-practice-view').classList.add('hidden');
      document.getElementById('questions-exam-view').classList.remove('hidden');
      btnExamMode.classList.add('bg-indigo-600', 'text-white');
      btnExamMode.classList.remove('bg-white', 'text-slate-700');
      btnPracticeMode.classList.add('bg-white', 'text-slate-700');
      btnPracticeMode.classList.remove('bg-indigo-600', 'text-white');
      setupExamSetupScreen();
    });
  }

  renderPracticeQuestions();
}

function getFilteredQuestions() {
  const query = (AppState.practice.searchQuery || '').toLowerCase();
  return questionsData.filter(q => {
    const matchVest = AppState.practice.filterVestibular === 'Todos' || q.vestibular === AppState.practice.filterVestibular;
    const matchSubj = AppState.practice.filterSubject === 'Todas' || q.subject === AppState.practice.filterSubject;
    const matchDiff = AppState.practice.filterDifficulty === 'Todas' || q.difficulty === AppState.practice.filterDifficulty;
    
    let matchSearch = true;
    if (query) {
      const fullText = `${q.enunciation || ''} ${q.topic || ''} ${q.subject || ''} ${q.vestibular || ''} ${(q.options || []).join(' ')} ${q.imageCaption || ''}`.toLowerCase();
      matchSearch = fullText.includes(query);
    }

    return matchVest && matchSubj && matchDiff && matchSearch;
  });
}

function renderQuestionVisual(q) {
  if (q.diagramSvg) {
    return `
      <div class="my-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center overflow-x-auto text-slate-800 dark:text-slate-100 shadow-inner">
        <div class="max-w-full flex items-center justify-center">
          ${q.diagramSvg}
        </div>
        ${q.imageCaption ? `<span class="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center font-medium"><i class="fa-solid fa-chart-simple mr-1 text-indigo-500"></i>${q.imageCaption}</span>` : ''}
      </div>
    `;
  } else if (q.imageUrl) {
    return `
      <div class="my-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
        <img src="${q.imageUrl}" alt="${q.imageCaption || 'Figura de apoio'}" class="max-h-72 object-contain rounded-xl shadow-sm" loading="lazy">
        ${q.imageCaption ? `<span class="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center font-medium"><i class="fa-regular fa-image mr-1 text-indigo-500"></i>${q.imageCaption}</span>` : ''}
      </div>
    `;
  }
  return '';
}

function renderPracticeQuestions() {
  const container = document.getElementById('questions-list');
  if (!container) return;

  const filtered = getFilteredQuestions();
  const totalQuestions = filtered.length;
  const pageSize = AppState.practice.pageSize || 8;
  const totalPages = Math.ceil(totalQuestions / pageSize) || 1;

  if (AppState.practice.currentPage > totalPages) {
    AppState.practice.currentPage = totalPages;
  }
  if (AppState.practice.currentPage < 1) {
    AppState.practice.currentPage = 1;
  }
  const currentPage = AppState.practice.currentPage;

  const countBadge = document.getElementById('questions-count-badge');
  if (countBadge) {
    countBadge.innerText = `${totalQuestions} questões encontradas`;
  }

  const paginationContainer = document.getElementById('questions-pagination-container');
  const paginationInfo = document.getElementById('pagination-info');
  const paginationButtons = document.getElementById('pagination-buttons');

  if (totalQuestions === 0) {
    container.innerHTML = `
      <div class="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        <i class="fa-solid fa-filter-circle-xmark text-4xl text-slate-300 dark:text-slate-600 mb-3"></i>
        <h4 class="text-lg font-semibold text-slate-700 dark:text-slate-200">Nenhuma questão encontrada com esses filtros</h4>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Tente ajustar a busca ou selecionar "Todos" nos seletores acima.</p>
      </div>
    `;
    if (paginationContainer) paginationContainer.classList.add('hidden');
    return;
  }

  if (paginationContainer) paginationContainer.classList.remove('hidden');

  const start = (currentPage - 1) * pageSize;
  const end = Math.min(start + pageSize, totalQuestions);
  const pagedQuestions = filtered.slice(start, end);

  // Renderizar paginação no footer
  if (paginationInfo) {
    paginationInfo.innerHTML = `Mostrando <strong class="text-slate-800 dark:text-slate-100">${start + 1}–${end}</strong> de <strong class="text-indigo-600 dark:text-indigo-400">${totalQuestions}</strong> questões (Página <strong>${currentPage}</strong> de <strong>${totalPages}</strong>)`;
  }

  if (paginationButtons) {
    const pagesToDisplay = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pagesToDisplay.push(i);
    } else {
      pagesToDisplay.push(1);
      if (currentPage > 3) pagesToDisplay.push('...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pagesToDisplay.push(i);
      }
      if (currentPage < totalPages - 2) pagesToDisplay.push('...');
      pagesToDisplay.push(totalPages);
    }

    let buttonsHtml = `
      <button 
        onclick="changeQuestionPage(-1)" 
        ${currentPage === 1 ? 'disabled' : ''}
        class="px-3 py-1.5 rounded-lg text-xs font-semibold border ${
          currentPage === 1 
            ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400 dark:border-slate-800' 
            : 'border-slate-200 hover:border-indigo-500 hover:text-indigo-600 text-slate-700 dark:border-slate-700 dark:text-slate-200'
        } transition flex items-center gap-1"
      >
        <i class="fa-solid fa-chevron-left text-[10px]"></i> Anterior
      </button>
    `;

    pagesToDisplay.forEach(p => {
      if (p === '...') {
        buttonsHtml += `<span class="px-2 text-xs text-slate-400">...</span>`;
      } else {
        const isCurrent = p === currentPage;
        buttonsHtml += `
          <button 
            onclick="goToQuestionPage(${p})" 
            class="w-8 h-8 rounded-lg text-xs font-bold transition ${
              isCurrent 
                ? 'bg-indigo-600 text-white shadow-sm' 
                : 'border border-slate-200 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200'
            }"
          >
            ${p}
          </button>
        `;
      }
    });

    buttonsHtml += `
      <button 
        onclick="changeQuestionPage(1)" 
        ${currentPage === totalPages ? 'disabled' : ''}
        class="px-3 py-1.5 rounded-lg text-xs font-semibold border ${
          currentPage === totalPages 
            ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400 dark:border-slate-800' 
            : 'border-slate-200 hover:border-indigo-500 hover:text-indigo-600 text-slate-700 dark:border-slate-700 dark:text-slate-200'
        } transition flex items-center gap-1"
      >
        Próxima <i class="fa-solid fa-chevron-right text-[10px]"></i>
      </button>
    `;

    paginationButtons.innerHTML = buttonsHtml;
  }

  const letters = ['A', 'B', 'C', 'D', 'E'];

  container.innerHTML = pagedQuestions.map((q) => {
    const isRevealed = AppState.practice.revealed[q.id];
    const userSelected = AppState.practice.selectedAnswers[q.id];

    const vestBadgeBg = q.vestibular === 'ENEM' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200' : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200';
    const diffBadgeBg = q.difficulty === 'Fácil' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : q.difficulty === 'Médio' ? 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300' : 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300';

    return `
      <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 mb-6 transition-card" id="q-card-${q.id}">
        <!-- Cabeçalho da Questão -->
        <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-md text-xs font-bold border ${vestBadgeBg}">${q.vestibular} ${q.year}</span>
            <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">${q.subject}</span>
            <span class="text-xs text-slate-400 font-mono">• ${q.topic}</span>
          </div>
          <span class="px-2 py-0.5 rounded text-xs font-semibold ${diffBadgeBg}">${q.difficulty}</span>
        </div>

        <!-- Enunciado -->
        <div class="text-slate-800 dark:text-slate-100 leading-relaxed mb-4 font-normal text-base whitespace-pre-line">
          ${q.enunciation}
        </div>

        <!-- Gráficos / Ilustrações / Imagens de Apoio -->
        ${renderQuestionVisual(q)}

        <!-- Alternativas -->
        <div class="space-y-3 mb-6" id="q-options-${q.id}">
          ${q.options.map((opt, optIndex) => {
            let optionStyles = "border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200";
            let indicator = `<span class="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center mr-3 shrink-0">${letters[optIndex]}</span>`;

            if (isRevealed) {
              if (optIndex === q.correct) {
                optionStyles = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-medium";
                indicator = `<span class="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center mr-3 shrink-0"><i class="fa-solid fa-check"></i></span>`;
              } else if (userSelected === optIndex && optIndex !== q.correct) {
                optionStyles = "border-rose-400 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200";
                indicator = `<span class="w-7 h-7 rounded-full bg-rose-500 text-white font-bold text-xs flex items-center justify-center mr-3 shrink-0"><i class="fa-solid fa-xmark"></i></span>`;
              } else {
                optionStyles = "border-slate-200 dark:border-slate-800 opacity-60 text-slate-500 dark:text-slate-400";
              }
            } else if (userSelected === optIndex) {
              optionStyles = "border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/70 text-indigo-900 dark:text-indigo-200 font-medium";
              indicator = `<span class="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mr-3 shrink-0">${letters[optIndex]}</span>`;
            }

            return `
              <div 
                onclick="${isRevealed ? '' : `selectPracticeOption('${q.id}', ${optIndex})`}"
                class="flex items-start p-3.5 rounded-xl border transition-all cursor-pointer ${optionStyles}"
              >
                ${indicator}
                <div class="text-sm pt-0.5 leading-snug">${opt}</div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Ação e Gabarito -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div>
            ${!isRevealed ? `
              <button 
                onclick="submitPracticeQuestion('${q.id}')"
                class="px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm inline-flex items-center gap-2"
              >
                <i class="fa-solid fa-paper-plane text-xs"></i>
                Confirmar Resposta
              </button>
            ` : `
              <span class="text-sm font-medium ${userSelected === q.correct ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'} flex items-center gap-1.5">
                <i class="fa-solid ${userSelected === q.correct ? 'fa-circle-check text-emerald-500' : 'fa-circle-xmark text-rose-500'}"></i>
                ${userSelected === q.correct ? 'Parabéns, você acertou!' : `Você marcou a alternativa ${letters[userSelected] || 'nenhuma'}. A correta é a ${letters[q.correct]}.`}
              </span>
            `}
          </div>

          ${isRevealed ? `
            <button 
              onclick="toggleExplanation('${q.id}')"
              class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 transition"
            >
              <i class="fa-solid fa-lightbulb"></i>
              Ver Resolução Comentada
            </button>
          ` : ''}
        </div>

        <!-- Bloco de Explicação -->
        <div id="explanation-${q.id}" class="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 leading-relaxed hidden">
          <div class="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap text-indigo-600 dark:text-indigo-400"></i>
            Resolução Pedagógica Detalhada:
          </div>
          <p class="whitespace-pre-line text-slate-600 dark:text-slate-300">${q.explanation}</p>
        </div>
      </div>
    `;
  }).join('');
}

window.goToQuestionPage = function(page) {
  AppState.practice.currentPage = page;
  renderPracticeQuestions();
  const target = document.getElementById('questions-practice-view');
  if (target) {
    const yOffset = -70;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

window.changeQuestionPage = function(delta) {
  goToQuestionPage(AppState.practice.currentPage + delta);
};

window.selectPracticeOption = function(qId, optIndex) {
  AppState.practice.selectedAnswers[qId] = optIndex;
  renderPracticeQuestions();
};

window.submitPracticeQuestion = function(qId) {
  const selected = AppState.practice.selectedAnswers[qId];
  if (selected === undefined) {
    alert("Por favor, selecione uma das alternativas antes de confirmar!");
    return;
  }

  const question = questionsData.find(q => q.id === qId);
  if (!question) return;

  AppState.practice.revealed[qId] = true;
  AppState.stats.answered += 1;
  const isCorrect = selected === question.correct;
  if (isCorrect) AppState.stats.correct += 1;

  AppState.stats.history.push({
    id: qId,
    selected: selected,
    isCorrect: isCorrect,
    timestamp: new Date().toISOString()
  });

  saveToLocalStorage();
  if (typeof syncQuestionAttemptToSupabase === 'function') {
    syncQuestionAttemptToSupabase(question, selected, isCorrect, 'practice');
  }
  updateGlobalBadges();
  renderPracticeQuestions();

  setTimeout(() => {
    const expl = document.getElementById(`explanation-${qId}`);
    if (expl) expl.classList.remove('hidden');
  }, 100);
};

window.toggleExplanation = function(qId) {
  const expl = document.getElementById(`explanation-${qId}`);
  if (expl) expl.classList.toggle('hidden');
};

// ==========================================
// MODO SIMULADO CRONOMETRADO COM TEMPO PERSONALIZADO
// ==========================================
function setupExamSetupScreen() {
  const container = document.getElementById('exam-active-container');
  const setupScreen = document.getElementById('exam-setup-container');
  const resultScreen = document.getElementById('exam-result-container');

  if (container) container.classList.add('hidden');
  if (resultScreen) resultScreen.classList.add('hidden');
  if (setupScreen) setupScreen.classList.remove('hidden');
}

window.setTimerMode = function(mode) {
  AppState.examMode.timerMode = mode;

  const btnAuto = document.getElementById('btn-timer-mode-auto');
  const btnCustom = document.getElementById('btn-timer-mode-custom');
  const btnNone = document.getElementById('btn-timer-mode-none');
  const customContainer = document.getElementById('exam-custom-time-container');

  [btnAuto, btnCustom, btnNone].forEach(b => {
    if (b) {
      b.className = "py-2.5 px-3 rounded-xl border text-xs font-semibold text-center border-slate-200 bg-white text-slate-700 hover:border-indigo-400";
    }
  });

  if (mode === 'auto') {
    if (btnAuto) btnAuto.className = "py-2.5 px-3 rounded-xl border text-xs font-bold text-center border-indigo-600 bg-indigo-50 text-indigo-700";
    if (customContainer) customContainer.classList.add('hidden');
  } else if (mode === 'custom') {
    if (btnCustom) btnCustom.className = "py-2.5 px-3 rounded-xl border text-xs font-bold text-center border-indigo-600 bg-indigo-50 text-indigo-700";
    if (customContainer) customContainer.classList.remove('hidden');
  } else if (mode === 'none') {
    if (btnNone) btnNone.className = "py-2.5 px-3 rounded-xl border text-xs font-bold text-center border-indigo-600 bg-indigo-50 text-indigo-700";
    if (customContainer) customContainer.classList.add('hidden');
  }
};

window.setCustomMinutes = function(mins) {
  const input = document.getElementById('exam-custom-minutes-input');
  if (input) input.value = mins;
  AppState.examMode.customMinutes = mins;
};

window.startExam = function() {
  const examType = document.getElementById('exam-select-type').value;
  const examCount = parseInt(document.getElementById('exam-select-count').value, 10);

  let pool = [...questionsData];
  if (examType !== 'MISTO') {
    pool = pool.filter(q => q.vestibular === examType);
  }

  // Embaralhar
  pool = pool.sort(() => 0.5 - Math.random());
  const selectedQuestions = pool.slice(0, Math.min(examCount, pool.length));

  AppState.examMode.active = true;
  AppState.examMode.examType = examType;
  AppState.examMode.startedAt = Date.now();
  AppState.examMode.questions = selectedQuestions;
  AppState.examMode.currentIndex = 0;
  AppState.examMode.userAnswers = {};
  AppState.examMode.isFinished = false;

  // Cálculo do tempo
  if (AppState.examMode.timerMode === 'auto') {
    const timePerQuestion = 3; // 3 min por questão
    AppState.examMode.timeRemaining = selectedQuestions.length * timePerQuestion * 60;
  } else if (AppState.examMode.timerMode === 'custom') {
    const customMins = parseInt(document.getElementById('exam-custom-minutes-input')?.value || '30', 10);
    AppState.examMode.customMinutes = customMins;
    AppState.examMode.timeRemaining = customMins * 60;
  } else {
    // Sem limite de tempo
    AppState.examMode.timeRemaining = -1;
  }

  document.getElementById('exam-setup-container').classList.add('hidden');
  document.getElementById('exam-active-container').classList.remove('hidden');

  startExamTimer();
  renderExamQuestion();
};

function startExamTimer() {
  if (AppState.examMode.timerInterval) clearInterval(AppState.examMode.timerInterval);

  const timerEl = document.getElementById('exam-timer-display');
  let elapsedSeconds = 0;

  // Modo Sem Limite (cronômetro progressivo)
  if (AppState.examMode.timeRemaining === -1) {
    if (timerEl) timerEl.innerText = "Livre: 00:00";
    AppState.examMode.timerInterval = setInterval(() => {
      elapsedSeconds++;
      const m = Math.floor(elapsedSeconds / 60);
      const s = elapsedSeconds % 60;
      if (timerEl) {
        timerEl.innerText = `Livre: ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        timerEl.classList.remove('text-rose-600', 'font-extrabold');
      }
    }, 1000);
    return;
  }

  // Modo Contagem Regressiva
  AppState.examMode.timerInterval = setInterval(() => {
    if (AppState.examMode.timeRemaining <= 0) {
      clearInterval(AppState.examMode.timerInterval);
      finishExam(true);
      return;
    }

    AppState.examMode.timeRemaining--;
    const minutes = Math.floor(AppState.examMode.timeRemaining / 60);
    const seconds = AppState.examMode.timeRemaining % 60;
    if (timerEl) {
      timerEl.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      if (AppState.examMode.timeRemaining < 300) { // menos de 5 min
        timerEl.classList.add('text-rose-600', 'font-extrabold');
      } else {
        timerEl.classList.remove('text-rose-600', 'font-extrabold');
      }
    }
  }, 1000);
}

function renderExamQuestion() {
  const { questions, currentIndex, userAnswers } = AppState.examMode;
  const currentQ = questions[currentIndex];
  if (!currentQ) return;

  const container = document.getElementById('exam-question-body');
  const letters = ['A', 'B', 'C', 'D', 'E'];

  document.getElementById('exam-progress-text').innerText = `Questão ${currentIndex + 1} de ${questions.length}`;

  const vestBadgeBg = currentQ.vestibular === 'ENEM' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800';

  container.innerHTML = `
    <div class="mb-4 flex items-center gap-2">
      <span class="px-2.5 py-1 rounded text-xs font-bold ${vestBadgeBg}">${currentQ.vestibular} ${currentQ.year}</span>
      <span class="px-2.5 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">${currentQ.subject}</span>
      <span class="text-xs text-slate-400 font-mono">• ${currentQ.topic}</span>
    </div>
    
    <div class="text-slate-800 dark:text-slate-100 leading-relaxed mb-4 font-normal text-base whitespace-pre-line">
      ${currentQ.enunciation}
    </div>

    <!-- Gráficos / Ilustrações / Imagens de Apoio -->
    ${renderQuestionVisual(currentQ)}

    <div class="space-y-3 mb-6">
      ${currentQ.options.map((opt, optIndex) => {
        const isSelected = userAnswers[currentQ.id] === optIndex;
        return `
          <div 
            onclick="selectExamOption('${currentQ.id}', ${optIndex})"
            class="flex items-start p-3.5 rounded-xl border transition-all cursor-pointer ${
              isSelected ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 font-medium' : 'border-slate-200 hover:border-indigo-300 text-slate-700'
            }"
          >
            <span class="w-7 h-7 rounded-full ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'} font-bold text-xs flex items-center justify-center mr-3 shrink-0">
              ${letters[optIndex]}
            </span>
            <div class="text-sm pt-0.5">${opt}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Atualizar estado dos botões Anterior/Próximo
  const btnPrev = document.getElementById('btn-exam-prev');
  const btnNext = document.getElementById('btn-exam-next');
  if (btnPrev) btnPrev.disabled = currentIndex === 0;
  if (btnNext) {
    if (currentIndex === questions.length - 1) {
      btnNext.innerHTML = 'Finalizar Simulado <i class="fa-solid fa-flag-checkered ml-1"></i>';
      btnNext.className = "px-5 py-2.5 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm";
    } else {
      btnNext.innerHTML = 'Próxima <i class="fa-solid fa-arrow-right ml-1"></i>';
      btnNext.className = "px-5 py-2.5 rounded-xl font-bold text-sm bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm";
    }
  }

  renderExamMap();
}

function renderExamMap() {
  const mapContainer = document.getElementById('exam-bullets-nav');
  if (!mapContainer) return;

  const { questions, currentIndex, userAnswers } = AppState.examMode;

  mapContainer.innerHTML = questions.map((q, idx) => {
    const isAnswered = userAnswers[q.id] !== undefined;
    const isCurrent = currentIndex === idx;

    let style = "bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200";
    if (isAnswered) style = "bg-indigo-100 text-indigo-800 border-indigo-300 font-bold";
    if (isCurrent) style = "ring-2 ring-indigo-600 bg-indigo-600 text-white font-bold";

    return `
      <button 
        onclick="jumpToExamQuestion(${idx})"
        class="w-8 h-8 rounded-lg text-xs border flex items-center justify-center transition-all ${style}"
      >
        ${idx + 1}
      </button>
    `;
  }).join('');
}

window.selectExamOption = function(qId, optIndex) {
  AppState.examMode.userAnswers[qId] = optIndex;
  renderExamQuestion();
};

window.jumpToExamQuestion = function(index) {
  AppState.examMode.currentIndex = index;
  renderExamQuestion();
};

window.examNext = function() {
  const { currentIndex, questions } = AppState.examMode;
  if (currentIndex < questions.length - 1) {
    AppState.examMode.currentIndex++;
    renderExamQuestion();
  } else {
    finishExam(false);
  }
};

window.examPrev = function() {
  const { currentIndex } = AppState.examMode;
  if (currentIndex > 0) {
    AppState.examMode.currentIndex--;
    renderExamQuestion();
  }
};

window.finishExam = function(timeout = false) {
  if (AppState.examMode.timerInterval) clearInterval(AppState.examMode.timerInterval);

  AppState.examMode.isFinished = true;
  const { questions, userAnswers } = AppState.examMode;

  let correctCount = 0;
  questions.forEach(q => {
    const answeredOpt = userAnswers[q.id];
    if (answeredOpt !== undefined) {
      AppState.stats.answered++;
      const isRight = answeredOpt === q.correct;
      if (isRight) {
        correctCount++;
        AppState.stats.correct++;
      }
      AppState.stats.history.push({
        id: q.id,
        selected: answeredOpt,
        isCorrect: isRight,
        timestamp: new Date().toISOString()
      });
      if (typeof syncQuestionAttemptToSupabase === 'function') {
        syncQuestionAttemptToSupabase(q, answeredOpt, isRight, 'exam');
      }
    }
  });

  const timeSpentSeconds = AppState.examMode.startedAt
    ? Math.max(1, Math.round((Date.now() - AppState.examMode.startedAt) / 1000))
    : 0;

  if (typeof syncExamSessionToSupabase === 'function') {
    syncExamSessionToSupabase(
      AppState.examMode.examType || 'MISTO',
      correctCount,
      questions.length,
      timeSpentSeconds,
      userAnswers
    );
  }

  saveToLocalStorage();
  updateGlobalBadges();

  // Exibir tela de resultados
  document.getElementById('exam-active-container').classList.add('hidden');
  const resultScreen = document.getElementById('exam-result-container');
  resultScreen.classList.remove('hidden');

  const percent = Math.round((correctCount / questions.length) * 100);
  document.getElementById('exam-result-score').innerText = `${correctCount} / ${questions.length}`;
  document.getElementById('exam-result-percent').innerText = `${percent}% de acerto`;

  const feedbackText = document.getElementById('exam-result-feedback');
  if (percent >= 80) {
    feedbackText.innerText = "Excelente desempenho! Você demonstrou alto domínio dos conteúdos e ótimo ritmo de resolução.";
  } else if (percent >= 50) {
    feedbackText.innerText = "Bom resultado! Identifique os pontos onde houve dúvida para revisar no Raio-X e nos Flashcards.";
  } else {
    feedbackText.innerText = "Continue firme! Use as resoluções comentadas abaixo para entender as pegadinhas e fixar a teoria.";
  }

  // Gabarito do Simulado
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const reviewContainer = document.getElementById('exam-review-list');
  reviewContainer.innerHTML = questions.map((q, idx) => {
    const userOpt = userAnswers[q.id];
    const isCorrect = userOpt === q.correct;
    return `
      <div class="p-4 rounded-xl border ${isCorrect ? 'border-emerald-200 bg-emerald-50/40' : 'border-rose-200 bg-rose-50/40'} text-sm mb-3">
        <div class="flex items-center justify-between mb-2">
          <span class="font-bold text-slate-800">Questão ${idx + 1} (${q.vestibular} - ${q.subject})</span>
          <span class="font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}">
            ${isCorrect ? '<i class="fa-solid fa-check mr-1"></i> Acertou' : '<i class="fa-solid fa-xmark mr-1"></i> Errou'}
          </span>
        </div>
        <p class="text-slate-600 dark:text-slate-300 text-xs mb-2 line-clamp-3">${q.enunciation}</p>
        ${q.diagramSvg || q.imageUrl ? `<div class="my-2 max-w-md">${renderQuestionVisual(q)}</div>` : ''}
        <div class="text-xs text-slate-700 dark:text-slate-300">
          Sua resposta: <strong>${userOpt !== undefined ? letters[userOpt] : 'Em branco'}</strong> | 
          Gabarito: <strong class="text-emerald-700">${letters[q.correct]}</strong>
        </div>
        <div class="mt-2 text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
          <span class="font-bold text-indigo-700">Explicação:</span> ${q.explanation}
        </div>
      </div>
    `;
  }).join('');
};

window.restartExamSetup = function() {
  setupExamSetupScreen();
};

// ==========================================
// 3. GUIA DAS OBRAS OBRIGATÓRIAS FUVEST 2027
// ==========================================
function initBooks() {
  renderBooks();
  renderBooksComparative();
  renderBooksTimeline();
  renderBooksChecklist();
}

let activeBooksSubview = 'cards';

window.switchBooksSubview = function(subview) {
  activeBooksSubview = subview;
  const subviews = ['cards', 'comparisons', 'timeline', 'method', 'checklist'];
  
  subviews.forEach(s => {
    const el = document.getElementById(`books-subview-${s}`);
    const btn = document.getElementById(`btn-bview-${s}`);
    if (el) {
      if (s === subview) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
    if (btn) {
      if (s === subview) {
        btn.className = "px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm";
      } else {
        btn.className = "px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400";
      }
    }
  });
};

function renderBooks() {
  const container = document.getElementById('books-grid');
  if (!container) return;

  container.innerHTML = booksData.map(book => {
    const isRead = !!AppState.readBooks[book.id];
    const topCharacters = (book.characters || []).slice(0, 3);
    const remainingChars = (book.characters || []).length - 3;

    return `
      <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col justify-between transition-card">
        <div>
          <!-- Header com status de leitura -->
          <div class="flex items-start justify-between gap-3 mb-3">
            <div>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
                ${book.genreFocus || book.period}
              </span>
              <h3 class="text-xl font-serif font-bold text-slate-900 dark:text-slate-100 mt-2">${book.title}</h3>
              <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">${book.author} (${book.yearOfPub})</p>
            </div>
            <button 
              onclick="toggleBookRead('${book.id}')"
              title="${isRead ? 'Marcar como não lida' : 'Marcar como lida'}"
              class="w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                isRead ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200 dark:shadow-none' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600'
              }"
            >
              <i class="fa-solid fa-check text-sm"></i>
            </button>
          </div>

          <!-- Preview dos Personagens -->
          ${topCharacters.length > 0 ? `
            <div class="flex flex-wrap items-center gap-1.5 my-3">
              <span class="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mr-1 flex items-center gap-1">
                <i class="fa-solid fa-users text-[10px]"></i> Personagens:
              </span>
              ${topCharacters.map(c => `
                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  ${c.name.split(' (')[0].split(' /')[0]}
                </span>
              `).join('')}
              ${remainingChars > 0 ? `
                <span class="px-1.5 py-0.5 rounded-md text-[10px] font-bold text-slate-400">
                  +${remainingChars}
                </span>
              ` : ''}
            </div>
          ` : ''}

          <!-- Resumo -->
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
            ${book.summary}
          </p>

          <!-- Citação marcante -->
          <blockquote class="italic text-[11px] text-slate-500 dark:text-slate-400 border-l-2 border-indigo-400 dark:border-indigo-500 pl-3 my-3">
            ${book.quote}
          </blockquote>
        </div>

        <div class="pt-4 border-t border-slate-100 dark:border-slate-800 mt-2">
          <button 
            onclick="openBookModal('${book.id}')"
            class="w-full py-2.5 rounded-xl text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-book-open-reader"></i>
            Ver Análise Completa & Personagens
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderBooksComparative() {
  const axesContainer = document.getElementById('books-cross-axes-grid');
  const compListContainer = document.getElementById('books-comparisons-list');
  const tableBody = document.getElementById('books-comparison-tbody');

  if (axesContainer && typeof booksComparisons !== 'undefined') {
    axesContainer.innerHTML = booksComparisons.crossCuttingAxes.map(axis => `
      <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
          <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100">${axis.title}</h4>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">${axis.description}</p>
        <div class="flex flex-wrap gap-1.5">
          ${axis.books.map(b => `
            <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
              <i class="fa-solid fa-book text-[9px] mr-1"></i> ${b}
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  if (compListContainer && typeof booksComparisons !== 'undefined') {
    compListContainer.innerHTML = booksComparisons.comparativeEssays.map(comp => `
      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100 dark:border-slate-800">
          <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <i class="fa-solid ${comp.icon} text-indigo-600 dark:text-indigo-400"></i>
            ${comp.title}
          </h4>
          <span class="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 w-fit">
            ${comp.pair}
          </span>
        </div>
        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          ${comp.analysis}
        </p>
      </div>
    `).join('');
  }

  if (tableBody && typeof booksComparisons !== 'undefined') {
    tableBody.innerHTML = booksComparisons.comparativeTable.map(row => `
      <tr class="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition">
        <td class="py-3 px-4 text-xs font-bold text-slate-900 dark:text-slate-100">${row.book}</td>
        <td class="py-3 px-4 text-xs text-slate-600 dark:text-slate-300">${row.author} (${row.year})</td>
        <td class="py-3 px-4 text-xs"><span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">${row.genre}</span></td>
        <td class="py-3 px-4 text-xs text-slate-700 dark:text-slate-300 font-medium">${row.centralTheme}</td>
        <td class="py-3 px-4 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">${row.focus}</td>
      </tr>
    `).join('');
  }
}

function renderBooksTimeline() {
  const container = document.getElementById('books-timeline-container');
  if (!container || typeof booksTimeline === 'undefined') return;

  container.innerHTML = booksTimeline.map((item, idx) => `
    <div class="relative group">
      <!-- Marcador no ponto da linha -->
      <div class="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600"></div>
      
      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 transition">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
          <span class="text-xs font-black px-2.5 py-0.5 rounded-md bg-indigo-600 text-white">
            ${item.year}
          </span>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
            ${item.author}
          </span>
        </div>
        <h4 class="text-base font-serif font-bold text-slate-900 dark:text-slate-100 mt-1">${item.book}</h4>
        <p class="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
          <strong class="text-indigo-700 dark:text-indigo-300">Ponto de atenção:</strong> ${item.note}
        </p>
      </div>
    </div>
  `).join('');
}

function renderBooksChecklist() {
  const container = document.getElementById('books-checklist-container');
  const progressEl = document.getElementById('books-chk-progress');
  if (!container || typeof booksChecklistData === 'undefined') return;

  const saved = JSON.parse(localStorage.getItem('brilhavest_books_checklist') || '{}');
  const total = booksChecklistData.length;
  let completed = 0;

  container.innerHTML = booksChecklistData.map(item => {
    const isChecked = !!saved[item.id];
    if (isChecked) completed++;

    return `
      <div 
        onclick="toggleBookChecklistItem('${item.id}')"
        class="p-3.5 rounded-2xl border transition cursor-pointer flex items-start gap-3 ${
          isChecked 
            ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800' 
            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-indigo-300'
        }"
      >
        <button class="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 text-xs transition ${
          isChecked ? 'bg-emerald-600 text-white' : 'border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
        }">
          <i class="fa-solid fa-check text-[10px] ${isChecked ? 'opacity-100' : 'opacity-0'}"></i>
        </button>
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider ${isChecked ? 'text-emerald-700 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-400'} block mb-0.5">
            ${item.book}
          </span>
          <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed ${isChecked ? 'line-through opacity-80' : ''}">
            ${item.text}
          </p>
        </div>
      </div>
    `;
  }).join('');

  if (progressEl) {
    progressEl.textContent = `${completed} de ${total} dominados`;
  }
}

window.toggleBookChecklistItem = function(itemId) {
  const saved = JSON.parse(localStorage.getItem('brilhavest_books_checklist') || '{}');
  saved[itemId] = !saved[itemId];
  localStorage.setItem('brilhavest_books_checklist', JSON.stringify(saved));
  renderBooksChecklist();
};

window.toggleBookRead = function(bookId) {
  AppState.readBooks[bookId] = !AppState.readBooks[bookId];
  saveToLocalStorage();
  if (typeof syncBookProgressToSupabase === 'function') {
    syncBookProgressToSupabase(bookId, AppState.readBooks[bookId]);
  }
  updateGlobalBadges();
  renderBooks();
};

window.openBookModal = function(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  const isRead = !!AppState.readBooks[book.id];
  const modal = document.getElementById('book-detail-modal');
  const modalContent = document.getElementById('book-modal-content');

  modalContent.innerHTML = `
    <!-- Topo do Modal -->
    <div class="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-4">
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-1.5">
          <span class="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
            ${book.genreFocus || book.period}
          </span>
          <button 
            onclick="toggleBookRead('${book.id}'); openBookModal('${book.id}');"
            class="px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              isRead 
                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 border border-slate-200 dark:border-slate-700'
            }"
          >
            <i class="fa-solid ${isRead ? 'fa-circle-check text-emerald-600' : 'fa-circle text-slate-400'}"></i>
            <span>${isRead ? 'Obra Lida' : 'Marcar como Lida'}</span>
          </button>
        </div>
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100">${book.title} (${book.yearOfPub})</h2>
        <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">Autora: <strong class="text-slate-800 dark:text-slate-200">${book.author}</strong></p>
      </div>
      <button onclick="closeBookModal()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-sm shrink-0 transition">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <!-- Corpo com Rolagem e Conteúdo Aprofundado -->
    <div class="py-5 space-y-6 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
      
      <!-- Citação Chave em Destaque -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-indigo-50/80 to-purple-50/60 dark:from-slate-800 dark:to-slate-850 border border-indigo-100 dark:border-slate-700">
        <div class="flex items-start gap-3">
          <i class="fa-solid fa-quote-left text-indigo-500 dark:text-indigo-400 text-lg mt-0.5 shrink-0"></i>
          <div>
            <p class="text-xs md:text-sm italic font-serif text-indigo-950 dark:text-indigo-200 leading-relaxed">${book.quote}</p>
            <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mt-1 block">— Passagem emblemática da obra</span>
          </div>
        </div>
      </div>

      <!-- Contexto & Autora -->
      ${book.contextoAutora ? `
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <h4 class="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-landmark text-indigo-600"></i> Contexto Histórico & Autora
          </h4>
          <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${book.contextoAutora}</p>
        </div>
      ` : ''}

      <!-- Subseções Temáticas Detalhadas -->
      ${book.thematicSections && book.thematicSections.length > 0 ? `
        <div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-3 flex items-center gap-2">
            <i class="fa-solid fa-scroll text-indigo-600 dark:text-indigo-400"></i> Análise Temática Detalhada
          </h4>
          <div class="space-y-3">
            ${book.thematicSections.map(sec => `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <h5 class="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-1.5">${sec.title}</h5>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${sec.content}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Galeria Completa de Personagens & Figuras Narrativas -->
      <div>
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide flex items-center gap-2">
            <i class="fa-solid fa-users text-indigo-600 dark:text-indigo-400"></i> Personagens & Figuras do Suplemento (${book.characters.length})
          </h4>
          <span class="text-[11px] font-semibold text-slate-500">Funções interpretativas e conflitos</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          ${book.characters.map(c => `
            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-indigo-300 transition">
              <div class="flex items-center justify-between gap-2 mb-1.5 pb-1.5 border-b border-slate-100 dark:border-slate-700">
                <span class="font-bold text-xs text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <i class="fa-solid fa-user text-indigo-500 text-[11px]"></i>
                  ${c.name}
                </span>
                ${c.role ? `
                  <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 shrink-0">
                    ${c.role}
                  </span>
                ` : ''}
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${c.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Símbolos Centrais da Obra -->
      ${book.symbols && book.symbols.length > 0 ? `
        <div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-gem text-indigo-600 dark:text-indigo-400"></i> Símbolos & Imagens Estruturantes
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${book.symbols.map(s => `
              <div class="p-3 rounded-xl bg-purple-50/60 dark:bg-slate-800 border border-purple-100 dark:border-slate-700 text-xs">
                <strong class="text-purple-900 dark:text-purple-300 block mb-0.5">${s.name}:</strong>
                <span class="text-slate-600 dark:text-slate-300 leading-relaxed">${s.desc}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Ideias-Chave da Obra -->
      ${book.ideiasChave && book.ideiasChave.length > 0 ? `
        <div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-2 flex items-center gap-2">
            <i class="fa-solid fa-tags text-indigo-600 dark:text-indigo-400"></i> Ideias-Chave
          </h4>
          <div class="flex flex-wrap gap-2">
            ${book.ideiasChave.map(tag => `
              <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                # ${tag}
              </span>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- O que a Prova Pode Cobrar -->
      <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60">
        <h4 class="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide mb-1.5 flex items-center gap-2">
          <i class="fa-solid fa-bullseye text-amber-600 dark:text-amber-400"></i> O que a Prova da FUVEST Pode Cobrar
        </h4>
        <p class="text-xs text-amber-950 dark:text-amber-200 leading-relaxed">${book.fuvestTips}</p>
      </div>

      <!-- Interpretação Crítica Oficial -->
      ${book.interpretacao ? `
        <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
          <h4 class="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wide mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-brain text-emerald-600 dark:text-emerald-400"></i> Interpretação Crítica Sintética
          </h4>
          <p class="text-xs text-emerald-950 dark:text-emerald-200 leading-relaxed">${book.interpretacao}</p>
        </div>
      ` : ''}

    </div>
  `;

  modal.classList.remove('hidden');
};

window.closeBookModal = function() {
  const modal = document.getElementById('book-detail-modal');
  if (modal) modal.classList.add('hidden');
};

// ==========================================
// 4. MÓDULO DE REDAÇÃO (ENEM vs FUVEST)
// ==========================================
function initRedacao() {
  const essayTopic = document.getElementById('essay-topic');
  const essayInput = document.getElementById('essay-textarea');
  const essayTitle = document.getElementById('essay-title');
  const essayType = document.getElementById('essay-type-select');

  // Carregar rascunho anterior
  if (essayTopic && AppState.essayDraft.topic) essayTopic.value = AppState.essayDraft.topic;
  if (essayInput && AppState.essayDraft.text) essayInput.value = AppState.essayDraft.text;
  if (essayTitle && AppState.essayDraft.title) essayTitle.value = AppState.essayDraft.title;
  if (essayType && AppState.essayDraft.type) essayType.value = AppState.essayDraft.type;

  updateEssayCounters();

  if (essayTopic) {
    essayTopic.addEventListener('input', () => {
      AppState.essayDraft.topic = essayTopic.value;
      saveToLocalStorage();
      if (typeof scheduleEssaySync === 'function') scheduleEssaySync(AppState.essayDraft);

      // Sincroniza seletor de propostas para [custom] se o usuário estiver digitando livremente
      const selector = document.getElementById('essay-prompt-selector');
      if (selector) {
        const isOfficial = redacaoData.practicePrompts?.some(p => p.title === essayTopic.value);
        if (!isOfficial && essayTopic.value.trim() !== '') {
          selector.value = 'custom';
        } else if (essayTopic.value.trim() === '') {
          selector.value = '';
        }
      }
    });
  }

  if (essayInput) {
    essayInput.addEventListener('input', () => {
      AppState.essayDraft.text = essayInput.value;
      updateEssayCounters();
      saveToLocalStorage();
      if (typeof scheduleEssaySync === 'function') scheduleEssaySync(AppState.essayDraft);
    });
  }

  if (essayTitle) {
    essayTitle.addEventListener('input', () => {
      AppState.essayDraft.title = essayTitle.value;
      saveToLocalStorage();
      if (typeof scheduleEssaySync === 'function') scheduleEssaySync(AppState.essayDraft);
    });
  }

  if (essayType) {
    essayType.addEventListener('change', () => {
      AppState.essayDraft.type = essayType.value;
      saveToLocalStorage();
      if (typeof scheduleEssaySync === 'function') scheduleEssaySync(AppState.essayDraft);
      toggleEssayTypeGuidance();
    });
  }

  renderRepertorios();
  renderPastThemes();
  populateEssayPromptSelector();
  toggleEssayTypeGuidance();

  if (AppState.essayDraft?.topic) {
    updateEnemProposalLabBanner(AppState.essayDraft.topic);
  }
  const topicInput = document.getElementById('essay-topic');
  if (topicInput) {
    topicInput.addEventListener('input', () => {
      updateEnemProposalLabBanner(topicInput.value);
    });
  }
}

function updateEssayCounters() {
  const text = AppState.essayDraft.text || '';
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  
  const explicitLines = text.split('\n');
  let lineCount = 0;
  explicitLines.forEach(l => {
    lineCount += Math.max(1, Math.ceil(l.length / 75));
  });
  if (text.trim() === '') lineCount = 0;

  const elWords = document.getElementById('essay-word-count');
  const elLines = document.getElementById('essay-line-count');
  const elStatus = document.getElementById('essay-line-status');

  if (elWords) elWords.innerText = `${words} palavras`;
  if (elLines) elLines.innerText = `${lineCount} / 30 linhas`;

  if (elStatus) {
    if (lineCount < 7) {
      elStatus.innerText = "Insuficiente (< 7 linhas desclassifica no ENEM)";
      elStatus.className = "text-xs font-semibold text-rose-600";
    } else if (lineCount <= 20) {
      elStatus.innerText = "Em desenvolvimento (busque entre 25 e 30 linhas)";
      elStatus.className = "text-xs font-medium text-amber-600";
    } else if (lineCount <= 30) {
      elStatus.innerText = "Extensão ideal para vestibular (25 a 30 linhas)";
      elStatus.className = "text-xs font-semibold text-emerald-600";
    } else {
      elStatus.innerText = "Ultrapassou o limite máximo de 30 linhas!";
      elStatus.className = "text-xs font-bold text-rose-600";
    }
  }
}

function toggleEssayTypeGuidance() {
  const type = document.getElementById('essay-type-select')?.value || 'ENEM';
  const noticeEl = document.getElementById('essay-fuvest-title-notice');
  const titleInput = document.getElementById('essay-title');
  if (!noticeEl) return;

  if (type === 'FUVEST_DISSERTATIVA' || type === 'FUVEST') {
    noticeEl.classList.remove('hidden');
    noticeEl.className = "mb-4 p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-950 dark:text-indigo-200 flex items-start gap-2.5";
    noticeEl.innerHTML = `
      <i class="fa-solid fa-feather text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0 text-sm"></i>
      <div>
        <strong>FUVEST - Opção 1 (Dissertativo-Argumentativo):</strong> 
        O <strong>título é OBRIGATÓRIO</strong> nesta opção e avaliado com rigor pela banca da USP! Desenvolva um ensaio reflexivo dialético de 4 parágrafos, sem receitas simplórias de intervenção.
      </div>
    `;
    if (titleInput) titleInput.placeholder = "Título OBRIGATÓRIO da dissertação FUVEST (Criativo, sintético e provocativo)...";
  } else if (type === 'FUVEST_GENERO') {
    noticeEl.classList.remove('hidden');
    noticeEl.className = "mb-4 p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-xs text-purple-950 dark:text-purple-200 flex items-start gap-2.5";
    noticeEl.innerHTML = `
      <i class="fa-solid fa-envelope-open-text text-purple-600 dark:text-purple-400 mt-0.5 shrink-0 text-sm"></i>
      <div>
        <strong>FUVEST - Opção 2 (Qualquer Gênero Textual):</strong> 
        A banca permite optar por <strong>outro gênero textual</strong> determinado na proposta (ex: carta argumentativa a personagem hipotético/autoridades, crônica, manifesto). Atente-se às marcas do gênero: vocativo, interlocução constante, tom de voz e situação comunicativa!
      </div>
    `;
    if (titleInput) titleInput.placeholder = "Cabeçalho / Assunto / Título conforme convenções do gênero textual pedido...";
  } else {
    // Padrão ENEM
    noticeEl.classList.remove('hidden');
    noticeEl.className = "mb-4 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2.5";
    noticeEl.innerHTML = `
      <i class="fa-solid fa-circle-check text-amber-600 dark:text-amber-400 mt-0.5 shrink-0 text-sm"></i>
      <div>
        <strong>Padrão ENEM:</strong> Título é facultativo (não pontua). Garanta o projeto de texto estratégico (D1 e D2) e a <strong>Proposta de Intervenção completa com os 5 elementos</strong> obrigatórios na conclusão (Competência 5).
      </div>
    `;
    if (titleInput) titleInput.placeholder = "Título opcional no ENEM (se colocado, conta como linha escrita)...";
  }
}

function renderRepertorios() {
  const container = document.getElementById('repertorios-list');
  if (!container) return;

  container.innerHTML = redacaoData.repertorios.map(r => `
    <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm transition-card">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-bold text-indigo-700 uppercase tracking-wider">${r.category}</span>
        <span class="text-xs text-slate-500 font-medium">${r.author}</span>
      </div>
      <h4 class="text-sm font-bold text-slate-900 mb-1">${r.concept}</h4>
      <p class="text-xs italic text-slate-600 mb-3 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
        "${r.quote}"
      </p>
      <div class="text-xs text-slate-600 leading-relaxed">
        <span class="font-semibold text-slate-800">Como aplicar:</span> ${r.application}
      </div>
    </div>
  `).join('');
}

function renderPastThemes() {
  const tableBody = document.getElementById('past-themes-tbody');
  if (!tableBody) return;

  tableBody.innerHTML = redacaoData.pastThemes.map(t => {
    const isNew = t.year === 2026;
    const yearBadge = isNew
      ? `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-rose-500 text-white shadow-sm shadow-rose-200 animate-pulse">2026 <i class="fa-solid fa-sparkles text-[10px]"></i></span>`
      : `<span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-bold">${t.year}</span>`;

    const fuvestExtra = t.fuvestNote
      ? `<div class="mt-2 p-2 rounded-lg bg-amber-50 border border-amber-200/90 text-[11px] text-amber-900 leading-snug flex items-start gap-1.5">
           <i class="fa-solid fa-circle-info text-amber-600 mt-0.5 shrink-0"></i>
           <span><strong>Novidade da Banca:</strong> ${t.fuvestNote}</span>
         </div>`
      : '';

    // Ações FUVEST: se for 2026, mostra botões para as 2 opções
    const fuvestActions = isNew
      ? `<div class="mt-2 flex flex-wrap gap-1.5">
           <button 
             onclick="applyThemeToLab('${t.fuvest.replace(/'/g, "\\'")} (Opção 1: Dissertativo-Argumentativo)', 'FUVEST_DISSERTATIVA')"
             class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition"
           >
             <i class="fa-solid fa-feather"></i> Opção 1: Dissertação
           </button>
           <button 
             onclick="applyThemeToLab('${t.fuvest.replace(/'/g, "\\'")} (Opção 2: Carta a Personagem)', 'FUVEST_GENERO')"
             class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition"
           >
             <i class="fa-solid fa-envelope-open-text"></i> Opção 2: Carta (Gênero)
           </button>
         </div>`
      : `<button 
           onclick="applyThemeToLab('${t.fuvest.replace(/'/g, "\\'")}', 'FUVEST_DISSERTATIVA')"
           class="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition"
         >
           <i class="fa-solid fa-pen-nib"></i> Treinar na FUVEST
         </button>`;

    const hasProposal = Boolean(redacaoData.enemProposals?.[t.year]);
    const enemProposalButton = hasProposal
      ? `<button 
           type="button"
           onclick="openEnemProposalModal(${t.year})"
           title="Ver proposta oficial completa do ENEM ${t.year} com textos motivadores e caderno original"
           class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 transition shadow-sm"
         >
           <i class="fa-solid fa-file-lines text-blue-600 dark:text-blue-400"></i> Proposta Completa
         </button>`
      : '';

    return `
      <tr class="border-b border-slate-100 dark:border-slate-800/80 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition">
        <td class="py-3.5 px-4 text-xs font-bold text-slate-900 dark:text-slate-100 align-top">${yearBadge}</td>
        <td class="py-3.5 px-4 text-xs text-slate-800 dark:text-slate-200 align-top">
          <div class="font-semibold leading-relaxed text-slate-900 dark:text-slate-100">${t.enem}</div>
          <div class="mt-2 flex flex-wrap items-center gap-1.5">
            ${enemProposalButton}
            <button 
              type="button"
              onclick="applyThemeToLab('${t.enem.replace(/'/g, "\\'")}', 'ENEM')"
              title="Carregar este tema no laboratório de redação"
              class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900/60 border border-amber-200 dark:border-amber-800 transition shadow-sm"
            >
              <i class="fa-solid fa-pen-nib text-amber-600 dark:text-amber-400"></i> Treinar no ENEM
            </button>
          </div>
        </td>
        <td class="py-3.5 px-4 text-xs text-slate-800 dark:text-slate-200 align-top">
          <div class="font-medium leading-relaxed">${t.fuvest}</div>
          ${fuvestExtra}
          ${fuvestActions}
        </td>
      </tr>
    `;
  }).join('');
}

function populateEssayPromptSelector() {
  const selector = document.getElementById('essay-prompt-selector');
  if (!selector || !redacaoData.practicePrompts) return;

  // Manter opções default (incluindo opção para digitar qualquer tema livre)
  selector.innerHTML = `
    <option value="">Selecione um tema oficial do ENEM ou FUVEST...</option>
    <option value="custom">✍️ [Tema Livre] Digitar qualquer outro tema que eu quiser...</option>
  `;

  const optGroupFuvest = document.createElement('optgroup');
  optGroupFuvest.label = "FUVEST (Temas Oficiais - Opção 1 e Opção 2)";

  const optGroupEnem = document.createElement('optgroup');
  optGroupEnem.label = "ENEM (Temas Oficiais)";

  redacaoData.practicePrompts.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.title;
    opt.dataset.banca = p.banca;
    opt.dataset.format = p.format || (p.banca === 'FUVEST' ? 'FUVEST_DISSERTATIVA' : 'ENEM');
    opt.dataset.tip = p.tip || '';
    opt.textContent = `[${p.banca} ${p.year}] ${p.title}`;
    if (p.banca === 'FUVEST') {
      optGroupFuvest.appendChild(opt);
    } else {
      optGroupEnem.appendChild(opt);
    }
  });

  selector.appendChild(optGroupFuvest);
  selector.appendChild(optGroupEnem);

  // Sincroniza valor atual com o rascunho salvo
  if (AppState.essayDraft.topic) {
    const match = redacaoData.practicePrompts.some(p => p.title === AppState.essayDraft.topic);
    if (!match && AppState.essayDraft.topic.trim() !== '') {
      selector.value = 'custom';
    } else if (match) {
      selector.value = AppState.essayDraft.topic;
    }
  }
}

window.onSelectPracticePrompt = function(selectedTitle) {
  if (!selectedTitle) return;

  // Se o aluno escolheu a opção de digitar seu próprio tema livre
  if (selectedTitle === 'custom') {
    const topicInput = document.getElementById('essay-topic');
    if (topicInput) {
      topicInput.focus();
      topicInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      topicInput.classList.add('ring-2', 'ring-indigo-500');
      setTimeout(() => topicInput.classList.remove('ring-2', 'ring-indigo-500'), 1500);
    }
    return;
  }

  const promptItem = redacaoData.practicePrompts?.find(p => p.title === selectedTitle);
  if (promptItem) {
    applyThemeToLab(promptItem.title, promptItem.format || promptItem.banca, promptItem.tip);
  }
};

window.applyThemeToLab = function(themeTitle, examType, customTip = null) {
  const essayTopic = document.getElementById('essay-topic');
  const essayTypeSelect = document.getElementById('essay-type-select');
  const essayTextarea = document.getElementById('essay-textarea');
  const promptSelector = document.getElementById('essay-prompt-selector');

  let normalizedType = examType || 'ENEM';
  if (normalizedType === 'FUVEST') normalizedType = 'FUVEST_DISSERTATIVA';

  if (essayTopic) essayTopic.value = themeTitle;
  if (promptSelector) {
    const match = Array.from(promptSelector.options).some(o => o.value === themeTitle);
    promptSelector.value = match ? themeTitle : 'custom';
  }
  if (essayTypeSelect) {
    essayTypeSelect.value = normalizedType;
    toggleEssayTypeGuidance();
  }

  AppState.essayDraft.topic = themeTitle;
  AppState.essayDraft.type = normalizedType;
  saveToLocalStorage();

  // Atualiza banner de textos motivadores se for ENEM
  updateEnemProposalLabBanner(themeTitle);

  // Scroll suave para o laboratório de redação
  const labElement = document.getElementById('essay-textarea');
  if (labElement) {
    labElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    labElement.focus();
  }

  const tipText = customTip ? `\n\n💡 Dica da banca:\n${customTip}` : '';
  const labelType = normalizedType === 'FUVEST_GENERO' 
    ? 'FUVEST (Opção 2: Gênero Textual)' 
    : (normalizedType === 'FUVEST_DISSERTATIVA' ? 'FUVEST (Opção 1: Dissertativo-Argumentativo)' : 'ENEM');

  if (typeof showToast === 'function') {
    showToast(`Tema carregado: "${themeTitle}" (${labelType})`);
  } else {
    alert(`Tema carregado no Laboratório de Redação!\n\n📋 Tema: "${themeTitle}"\n📐 Formato: ${labelType}.${tipText}`);
  }
};

// ==========================================
// CONTROLADOR: PROPOSTAS OFICIAIS DO ENEM (2018 - 2026)
// ==========================================
let currentViewedEnemYear = 2026;
let currentLabEnemYear = null;

function findEnemProposalByTheme(theme) {
  if (!theme || !redacaoData?.enemProposals) return null;
  const clean = String(theme).toLowerCase().trim();
  for (const year in redacaoData.enemProposals) {
    const prop = redacaoData.enemProposals[year];
    const cleanProp = prop.theme.toLowerCase().trim();
    if (cleanProp === clean || clean.includes(cleanProp) || cleanProp.includes(clean)) {
      return prop;
    }
  }
  return null;
}

function updateEnemProposalLabBanner(themeTitle) {
  const banner = document.getElementById('essay-enem-proposal-banner');
  const bannerTitle = document.getElementById('essay-enem-banner-title');
  if (!banner) return;

  const prop = findEnemProposalByTheme(themeTitle);
  if (prop) {
    currentLabEnemYear = prop.year;
    if (bannerTitle) bannerTitle.textContent = `Proposta Oficial ENEM ${prop.year} Vinculada: "${prop.theme}"`;
    banner.classList.remove('hidden');
  } else {
    currentLabEnemYear = null;
    banner.classList.add('hidden');
  }
}

window.openCurrentEnemProposalFromLab = function() {
  if (currentLabEnemYear) {
    openEnemProposalModal(currentLabEnemYear);
  }
};

window.openEnemProposalModal = function(year) {
  const proposal = redacaoData.enemProposals?.[year];
  if (!proposal) return;

  currentViewedEnemYear = year;

  const modal = document.getElementById('enem-proposal-modal');
  if (!modal) return;

  const yearBadge = document.getElementById('enem-proposal-modal-year-badge');
  const axisBadge = document.getElementById('enem-proposal-modal-axis-badge');
  const titleEl = document.getElementById('enem-proposal-modal-title');
  const themeHighlight = document.getElementById('enem-proposal-theme-highlight');
  const imgEl = document.getElementById('enem-proposal-img');
  const openImgBtn = document.getElementById('enem-proposal-open-img-btn');
  const instructionsList = document.getElementById('enem-proposal-instructions-list');
  const textsContainer = document.getElementById('enem-proposal-texts-container');

  if (yearBadge) yearBadge.textContent = `ENEM ${proposal.year}`;
  if (axisBadge) axisBadge.textContent = proposal.thematicAxis || 'Eixo Temático';
  if (titleEl) titleEl.textContent = `"${proposal.theme}"`;
  if (themeHighlight) themeHighlight.textContent = `"${proposal.theme}"`;

  if (imgEl) {
    imgEl.src = proposal.image;
    imgEl.alt = `Caderno Oficial da Proposta de Redação do ENEM ${proposal.year}`;
  }
  if (openImgBtn) {
    openImgBtn.href = proposal.image;
  }

  if (instructionsList && proposal.instructions) {
    instructionsList.innerHTML = proposal.instructions.map(inst => `<li>${inst}</li>`).join('');
  }

  if (textsContainer && proposal.texts) {
    textsContainer.innerHTML = proposal.texts.map(t => `
      <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm">
        <div class="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100 dark:border-slate-700/60">
          <span class="px-2.5 py-0.5 rounded-lg text-xs font-black bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            ${t.label}
          </span>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 italic text-right truncate max-w-[260px]" title="${t.source}">
            ${t.source}
          </span>
        </div>
        <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line font-serif">
          ${t.content}
        </p>
      </div>
    `).join('');
  }

  switchEnemProposalTab('image');
  modal.classList.remove('hidden');
};

window.closeEnemProposalModal = function() {
  const modal = document.getElementById('enem-proposal-modal');
  if (modal) modal.classList.add('hidden');
};

window.switchEnemProposalTab = function(tab) {
  const viewImg = document.getElementById('enem-proposal-view-image');
  const viewTexts = document.getElementById('enem-proposal-view-texts');
  const btnImg = document.getElementById('tab-btn-enem-image');
  const btnTexts = document.getElementById('tab-btn-enem-texts');

  if (tab === 'image') {
    if (viewImg) viewImg.classList.remove('hidden');
    if (viewTexts) viewTexts.classList.add('hidden');
    if (btnImg) {
      btnImg.className = "px-3 py-1.5 rounded-lg font-bold bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm transition flex items-center gap-1.5";
    }
    if (btnTexts) {
      btnTexts.className = "px-3 py-1.5 rounded-lg font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1.5";
    }
  } else {
    if (viewImg) viewImg.classList.add('hidden');
    if (viewTexts) viewTexts.classList.remove('hidden');
    if (btnImg) {
      btnImg.className = "px-3 py-1.5 rounded-lg font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1.5";
    }
    if (btnTexts) {
      btnTexts.className = "px-3 py-1.5 rounded-lg font-bold bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm transition flex items-center gap-1.5";
    }
  }
};

window.trainCurrentProposalInLab = function() {
  const proposal = redacaoData.enemProposals?.[currentViewedEnemYear];
  if (!proposal) return;
  closeEnemProposalModal();
  applyThemeToLab(proposal.theme, 'ENEM');
};

// ==========================================
// 5. CRONOGRAMA & RAIO-X RANQUEADO (ENEM vs FUVEST)
// ==========================================
function initChecklist() {
  renderChecklist();
}

window.setChecklistView = function(view) {
  AppState.checklistView = view;
  const btnAll = document.getElementById('btn-chk-all');
  const btnEnem = document.getElementById('btn-chk-enem');
  const btnFuvest = document.getElementById('btn-chk-fuvest');

  [btnAll, btnEnem, btnFuvest].forEach(b => {
    if (b) {
      b.className = "px-3.5 py-2 rounded-lg text-slate-700 hover:text-indigo-600 transition flex items-center gap-1.5 font-bold";
    }
  });

  if (view === 'all' && btnAll) btnAll.className = "px-3.5 py-2 rounded-lg bg-indigo-600 text-white transition flex items-center gap-1.5 font-bold";
  if (view === 'enem' && btnEnem) btnEnem.className = "px-3.5 py-2 rounded-lg bg-amber-500 text-white transition flex items-center gap-1.5 font-bold shadow-sm";
  if (view === 'fuvest' && btnFuvest) btnFuvest.className = "px-3.5 py-2 rounded-lg bg-indigo-600 text-white transition flex items-center gap-1.5 font-bold shadow-sm";

  renderChecklist();
};

window.filterChecklistByDiscipline = function(disc) {
  AppState.checklistDiscipline = disc;
  renderChecklist();
};

function renderChecklist() {
  const container = document.getElementById('checklist-container');
  if (!container) return;

  const view = AppState.checklistView; // 'all', 'enem', 'fuvest'
  const filterDisc = AppState.checklistDiscipline; // 'Todas', 'Matemática', etc.

  // Filtro por disciplina base
  let filteredData = checklistData;
  if (filterDisc !== 'Todas') {
    filteredData = checklistData.filter(d => d.discipline === filterDisc);
  }

  // MODO 1: RANKING EXCLUSIVO ENEM
  if (view === 'enem') {
    let allTopics = [];
    filteredData.forEach(d => {
      d.topics.forEach(t => {
        allTopics.push({ ...t, disciplineName: d.discipline, disciplineColor: d.color, disciplineIcon: d.icon });
      });
    });
    // Ordenar por ranking ENEM
    allTopics.sort((a, b) => (a.enemRank || 99) - (b.enemRank || 99));

    container.innerHTML = `
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 mb-6">
        <div class="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
          <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl">
            <i class="fa-solid fa-fire"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900">Top Temas Mais Recorrentes no ENEM</h3>
            <p class="text-xs text-slate-500">Ordenados pelo índice histórico de frequência nas provas do ENEM</p>
          </div>
        </div>

        <div class="divide-y divide-slate-100">
          ${allTopics.map(t => renderChecklistTopicItem(t, 'enem')).join('')}
        </div>
      </div>
    `;
    return;
  }

  // MODO 2: RANKING EXCLUSIVO FUVEST
  if (view === 'fuvest') {
    let allTopics = [];
    filteredData.forEach(d => {
      d.topics.forEach(t => {
        allTopics.push({ ...t, disciplineName: d.discipline, disciplineColor: d.color, disciplineIcon: d.icon });
      });
    });
    // Ordenar por ranking FUVEST
    allTopics.sort((a, b) => (a.fuvestRank || 99) - (b.fuvestRank || 99));

    container.innerHTML = `
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 mb-6">
        <div class="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
          <div class="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl">
            <i class="fa-solid fa-landmark"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-900">Top Temas Mais Recorrentes na FUVEST (USP)</h3>
            <p class="text-xs text-slate-500">Ordenados pela exigência e recorrência nas 1ª e 2ª Fases da FUVEST</p>
          </div>
        </div>

        <div class="divide-y divide-slate-100">
          ${allTopics.map(t => renderChecklistTopicItem(t, 'fuvest')).join('')}
        </div>
      </div>
    `;
    return;
  }

  // MODO 3: VISÃO POR DISCIPLINAS COMPLETA
  container.innerHTML = filteredData.map(discipline => {
    let discTopics = discipline.topics.length;
    let discDone = 0;
    discipline.topics.forEach(t => {
      if (AppState.checklist[t.id]?.theory && AppState.checklist[t.id]?.exercises) {
        discDone++;
      }
    });
    const discPercent = discTopics > 0 ? Math.round((discDone / discTopics) * 100) : 0;

    return `
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
        <!-- Cabeçalho da Disciplina -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg">
              <i class="fa-solid ${discipline.icon}"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900">${discipline.discipline}</h3>
              <p class="text-xs text-slate-500">${discipline.topics.length} conteúdos essenciais mapeados</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-32 bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div class="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" style="width: ${discPercent}%"></div>
            </div>
            <span class="text-xs font-bold text-slate-700">${discPercent}%</span>
          </div>
        </div>

        <!-- Lista de Tópicos -->
        <div class="divide-y divide-slate-100">
          ${discipline.topics.map(t => renderChecklistTopicItem(t, 'all')).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderChecklistTopicItem(t, viewMode) {
  const state = AppState.checklist[t.id] || { theory: false, exercises: false, review: false };

  let rankBadge = '';
  if (viewMode === 'enem') {
    const medal = t.enemRank === 1 ? '🥇' : t.enemRank === 2 ? '🥈' : t.enemRank === 3 ? '🥉' : `#${t.enemRank}`;
    rankBadge = `<span class="px-2.5 py-1 rounded-md text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-200 mr-2">${medal} ENEM</span>`;
  } else if (viewMode === 'fuvest') {
    const medal = t.fuvestRank === 1 ? '🥇' : t.fuvestRank === 2 ? '🥈' : t.fuvestRank === 3 ? '🥉' : `#${t.fuvestRank}`;
    rankBadge = `<span class="px-2.5 py-1 rounded-md text-xs font-extrabold bg-indigo-100 text-indigo-900 border border-indigo-200 mr-2">${medal} FUVEST</span>`;
  } else {
    // Modo all: mostra ambos
    rankBadge = `
      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">ENEM #${t.enemRank || '-'}</span>
      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 ml-1">FUVEST #${t.fuvestRank || '-'}</span>
    `;
  }

  const tipText = viewMode === 'fuvest' ? (t.fuvestTip || t.focus) : viewMode === 'enem' ? (t.enemTip || t.focus) : t.focus;

  return `
    <div class="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${rankBadge}
          <span class="text-sm font-semibold text-slate-800">${t.title}</span>
          ${t.disciplineName ? `<span class="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">• ${t.disciplineName}</span>` : ''}
        </div>
        <p class="text-xs text-slate-500 mt-0.5">${tipText}</p>
      </div>

      <!-- Checkboxes de Estudo -->
      <div class="flex items-center gap-4 shrink-0 text-xs">
        <label class="flex items-center gap-1.5 cursor-pointer text-slate-600 select-none">
          <input 
            type="checkbox" 
            ${state.theory ? 'checked' : ''} 
            onchange="toggleChecklistTopic('${t.id}', 'theory')"
            class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
          >
          <span>Teoria</span>
        </label>

        <label class="flex items-center gap-1.5 cursor-pointer text-slate-600 select-none">
          <input 
            type="checkbox" 
            ${state.exercises ? 'checked' : ''} 
            onchange="toggleChecklistTopic('${t.id}', 'exercises')"
            class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
          >
          <span>Exercícios</span>
        </label>

        <label class="flex items-center gap-1.5 cursor-pointer text-slate-600 select-none">
          <input 
            type="checkbox" 
            ${state.review ? 'checked' : ''} 
            onchange="toggleChecklistTopic('${t.id}', 'review')"
            class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
          >
          <span>Revisado</span>
        </label>
      </div>
    </div>
  `;
}

window.toggleChecklistTopic = function(topicId, step) {
  if (!AppState.checklist[topicId]) {
    AppState.checklist[topicId] = { theory: false, exercises: false, review: false };
  }
  AppState.checklist[topicId][step] = !AppState.checklist[topicId][step];
  saveToLocalStorage();
  if (typeof syncChecklistTopicToSupabase === 'function') {
    syncChecklistTopicToSupabase(topicId, AppState.checklist[topicId]);
  }
  updateGlobalBadges();
  renderChecklist();
};

// ==========================================
// 6. FLASHCARDS INTELIGENTES
// ==========================================
function initFlashcards() {
  const catFilter = document.getElementById('flashcard-category-filter');
  if (catFilter) {
    catFilter.addEventListener('change', (e) => {
      AppState.flashcardDeck.filterCategory = e.target.value;
      AppState.flashcardDeck.currentIndex = 0;
      AppState.flashcardDeck.isFlipped = false;
      renderCurrentFlashcard();
    });
  }

  renderCurrentFlashcard();
}

function getFilteredFlashcards() {
  const cat = AppState.flashcardDeck.filterCategory;
  if (cat === 'Todas') return AppState.flashcardDeck.cards;
  return AppState.flashcardDeck.cards.filter(c => c.category === cat);
}

function renderCurrentFlashcard() {
  const cards = getFilteredFlashcards();
  const index = AppState.flashcardDeck.currentIndex;
  const card = cards[index];

  const frontEl = document.getElementById('flashcard-front-content');
  const backEl = document.getElementById('flashcard-back-content');
  const catBadge = document.getElementById('flashcard-cat-badge');
  const progressBadge = document.getElementById('flashcard-progress-badge');
  const innerCard = document.getElementById('flashcard-inner');

  // Reset flip
  if (innerCard) {
    innerCard.classList.remove('is-flipped');
    AppState.flashcardDeck.isFlipped = false;
  }

  if (!card) {
    if (frontEl) frontEl.innerHTML = `<div class="p-8 text-center text-slate-500">Nenhum flashcard disponível nesta categoria.</div>`;
    return;
  }

  if (catBadge) catBadge.innerText = card.category;
  if (progressBadge) progressBadge.innerText = `Card ${index + 1} de ${cards.length}`;

  if (frontEl) {
    frontEl.innerHTML = `
      <div class="h-full flex flex-col justify-between p-8 text-center">
        <div class="text-xs uppercase tracking-wider font-bold text-indigo-500">Pergunta / Conceito</div>
        <div class="text-xl md:text-2xl font-semibold text-slate-800 leading-snug my-auto">
          ${card.front}
        </div>
        <div class="text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <i class="fa-solid fa-arrows-rotate"></i> Clique para revelar a resposta
        </div>
      </div>
    `;
  }

  if (backEl) {
    backEl.innerHTML = `
      <div class="h-full flex flex-col justify-between p-8 text-center bg-indigo-900 text-white rounded-2xl shadow-lg">
        <div class="text-xs uppercase tracking-wider font-bold text-indigo-300">Resposta & Macete</div>
        <div class="text-base md:text-lg font-medium text-indigo-50 leading-relaxed my-auto whitespace-pre-line text-left bg-indigo-950/40 p-4 rounded-xl border border-indigo-700/50">
          ${card.back}
        </div>
        <div class="text-xs text-indigo-300 flex items-center justify-center gap-1.5">
          <i class="fa-solid fa-arrows-rotate"></i> Clique para virar de volta
        </div>
      </div>
    `;
  }
}

window.flipFlashcard = function() {
  const innerCard = document.getElementById('flashcard-inner');
  if (innerCard) {
    innerCard.classList.toggle('is-flipped');
    AppState.flashcardDeck.isFlipped = !AppState.flashcardDeck.isFlipped;
  }
};

window.nextFlashcard = function() {
  const cards = getFilteredFlashcards();
  if (AppState.flashcardDeck.currentIndex < cards.length - 1) {
    AppState.flashcardDeck.currentIndex++;
  } else {
    AppState.flashcardDeck.currentIndex = 0;
  }
  renderCurrentFlashcard();
};

window.prevFlashcard = function() {
  const cards = getFilteredFlashcards();
  if (AppState.flashcardDeck.currentIndex > 0) {
    AppState.flashcardDeck.currentIndex--;
  } else {
    AppState.flashcardDeck.currentIndex = cards.length - 1;
  }
  renderCurrentFlashcard();
};

window.markCardLearned = function(isLearned) {
  const cards = getFilteredFlashcards();
  const card = cards[AppState.flashcardDeck.currentIndex];
  if (!card) return;

  if (isLearned) {
    if (!AppState.flashcardDeck.learnedIds.includes(card.id)) {
      AppState.flashcardDeck.learnedIds.push(card.id);
    }
  } else {
    AppState.flashcardDeck.learnedIds = AppState.flashcardDeck.learnedIds.filter(id => id !== card.id);
  }

  saveToLocalStorage();
  if (typeof syncFlashcardLearnedToSupabase === 'function') {
    syncFlashcardLearnedToSupabase(card.id, isLearned);
  }
  updateGlobalBadges();
  window.nextFlashcard();
};

window.openAddFlashcardModal = function() {
  const modal = document.getElementById('add-flashcard-modal');
  if (modal) modal.classList.remove('hidden');
};

window.closeAddFlashcardModal = function() {
  const modal = document.getElementById('add-flashcard-modal');
  if (modal) modal.classList.add('hidden');
};

window.saveNewFlashcard = function() {
  const cat = document.getElementById('new-fc-category').value;
  const front = document.getElementById('new-fc-front').value.trim();
  const back = document.getElementById('new-fc-back').value.trim();

  if (!front || !back) {
    alert("Por favor, preencha a pergunta e a resposta do flashcard.");
    return;
  }

  const newCard = {
    id: `custom_${Date.now()}`,
    category: cat,
    front: front,
    back: back,
    difficulty: "Médio",
    isCustom: true
  };

  AppState.flashcardDeck.cards.push(newCard);
  saveToLocalStorage();
  if (typeof syncCustomFlashcardToSupabase === 'function') {
    syncCustomFlashcardToSupabase(newCard);
  }
  closeAddFlashcardModal();

  // Limpar formulário
  document.getElementById('new-fc-front').value = '';
  document.getElementById('new-fc-back').value = '';

  renderCurrentFlashcard();
  alert("Flashcard criado com sucesso!");
};

// ==========================================
// 8. NOTIFICAÇÕES MOTIVACIONAIS & PWA PUSH
// ==========================================

const MOTIVATIONAL_QUOTES = [
  "Você é muito mais capaz do que imagina! 15 minutinhos de treino hoje te deixam um passo mais perto da sua vaga.",
  "A constância vence o talento quando o talento não é constante. Um dia de cada vez, você vai conquistar a sua aprovação!",
  "Não deixe a insegurança falar mais alto: cada questão errada no treino é um erro a menos no dia oficial da prova!",
  "A sua vaga na USP ou na Federal está sendo construída agora mesmo. Respire fundo, resolva algumas questões e brilhe!",
  "Sentiu cansaço? É super normal. Faça apenas 5 flashcards ou leia 1 repertório hoje. O importante é manter a chama acesa!",
  "Acredite no seu potencial: redação e simulados são habilidades que se desenvolvem com treino. Você consegue!",
  "Você não precisa ser perfeito todos os dias, só precisa não desistir. Cada esforço silencioso de hoje será recompensado!",
  "Confie na sua preparação! O segredo dos grandes aprovados foi continuar caminhando mesmo nos dias difíceis."
];

function initMotivationAndNotifications() {
  updateDailyMotivationQuote();
  checkInactivityAndEncourage();
  autoPromptNotificationPermission();
}

function updateDailyMotivationQuote() {
  const quoteEl = document.getElementById('motivational-quote-text');
  if (!quoteEl) return;

  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % MOTIVATIONAL_QUOTES.length;
  quoteEl.textContent = `"${MOTIVATIONAL_QUOTES[dayIndex]}"`;
}

/**
 * Pergunta automaticamente se o usuário deseja ativar as notificações ao abrir o site
 */
async function autoPromptNotificationPermission() {
  if (!('Notification' in window)) return;

  // Se já foi concedida ou bloqueada pelo navegador, não precisa perguntar novamente
  if (Notification.permission === 'granted' || Notification.permission === 'denied') {
    return;
  }

  // Aguarda 1 segundo após o carregamento da página para exibir o pedido
  setTimeout(async () => {
    try {
      // Tenta disparar o diálogo nativo do navegador
      const perm = await Notification.requestPermission();
      if (perm === 'granted') {
        triggerLocalPushNotification(
          "BrilhaVest: Notificações Ativadas! 🎉",
          "Muito bem! Você receberá lembretes diários e mensagens motivacionais para conquistar a sua aprovação.",
          "welcome-notif"
        );
        return;
      }
    } catch (e) {
      // Navegadores que exigem interação explícita do usuário (ex: Safari iOS / Chrome mobile)
    }

    // Se o navegador não disparou o diálogo nativo ou aguarda gesto, exibe o banner flutuante
    if (Notification.permission === 'default') {
      const banner = document.getElementById('notification-auto-prompt-banner');
      if (banner) {
        banner.classList.remove('hidden');
      }
    }
  }, 1000);
}

window.acceptNotificationPermission = async function() {
  const banner = document.getElementById('notification-auto-prompt-banner');
  if (banner) banner.classList.add('hidden');

  if (!('Notification' in window)) return;

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      triggerLocalPushNotification(
        "BrilhaVest: Notificações Ativadas! 🎉",
        "Muito bem! Agora você receberá frases de incentivo e lembretes diários para não deixar a peteca cair nos estudos.",
        "welcome-notif"
      );
    }
  } catch (err) {
    console.error("Erro ao solicitar permissão de notificações:", err);
  }
};

window.dismissNotificationPrompt = function() {
  const banner = document.getElementById('notification-auto-prompt-banner');
  if (banner) banner.classList.add('hidden');
};

function checkInactivityAndEncourage() {
  const LAST_ACTIVE_KEY = 'brilhavest_last_active_timestamp';
  const lastActiveStr = localStorage.getItem(LAST_ACTIVE_KEY);
  const now = Date.now();

  if (lastActiveStr) {
    const lastActive = parseInt(lastActiveStr, 10);
    const hoursElapsed = (now - lastActive) / (1000 * 60 * 60);

    // Se passou mais de 24 horas desde o último acesso, envia lembrete acolhedor
    if (hoursElapsed >= 24) {
      const motivationalMsg = "Sentimos sua falta ontem! 🌟 Lembre-se: você é plenamente capaz de conquistar a sua vaga. Que tal resolver 5 questõezinhas hoje para manter o ritmo?";
      
      if ('Notification' in window && Notification.permission === 'granted') {
        triggerLocalPushNotification("BrilhaVest: Você é Capaz! 🚀", motivationalMsg, "daily-inactivity-reminder");
      }
    }
  }

  // Registra o momento atual como último acesso
  localStorage.setItem(LAST_ACTIVE_KEY, now.toString());
}

window.toggleNotificationPermission = async function() {
  if (!('Notification' in window)) {
    alert("Seu navegador atual não suporta notificações de sistema. Você pode instalar o app como PWA para receber alertas!");
    return;
  }

  if (Notification.permission === 'granted') {
    alert("Os lembretes diários já estão ativados no seu dispositivo! Você receberá incentivos e avisos para manter sua constância de estudos.");
    return;
  }

  if (Notification.permission === 'denied') {
    alert("As notificações estão bloqueadas nas configurações do seu navegador. Para receber os incentivos diários, clique no ícone de configurações/cadeado na barra de endereços e autorize as Notificações.");
    return;
  }

  try {
    const permission = await Notification.requestPermission();
    updateNotificationUI();

    if (permission === 'granted') {
      triggerLocalPushNotification(
        "BrilhaVest: Lembretes Ativados! 🎉",
        "Muito bem! Agora você receberá frases de incentivo e lembretes diários para não deixar a peteca cair nos estudos.",
        "welcome-notif"
      );
    }
  } catch (err) {
    console.error("Erro ao solicitar permissão de notificações:", err);
  }
};

window.sendSampleMotivationNotification = function() {
  const randomQuote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];

  if (!('Notification' in window)) {
    alert(`💡 Frase Motivacional do Dia:\n\n"${randomQuote}"`);
    return;
  }

  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(perm => {
      updateNotificationUI();
      if (perm === 'granted') {
        triggerLocalPushNotification("BrilhaVest: Motivação para Você! ✨", randomQuote, "test-motivation");
      } else {
        alert(`💡 Frase Motivacional do Dia:\n\n"${randomQuote}"\n\n(Dica: ative as notificações para receber direto na sua tela!)`);
      }
    });
    return;
  }

  triggerLocalPushNotification("BrilhaVest: Motivação para Você! ✨", randomQuote, "test-motivation");
};

function triggerLocalPushNotification(title, body, tag = 'brilhavest-reminder') {
  const options = {
    body: body,
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-192.png',
    tag: tag,
    vibrate: [200, 100, 200],
    data: { url: './?tab=questions' }
  };

  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.ready.then(reg => {
      reg.showNotification(title, options);
    }).catch(() => {
      new Notification(title, options);
    });
  } else if ('Notification' in window && Notification.permission === 'granted') {
    try {
      new Notification(title, options);
    } catch (e) {
      console.warn("Falha ao instanciar Notification diretamente:", e);
    }
  }
}

// =============================================================================
// MODAL DE CONFIGURAÇÕES & PERFIL DO ESTUDANTE
// =============================================================================

window.openSettingsModal = function() {
  const modal = document.getElementById('settings-modal');
  if (!modal) return;

  updateSettingsModalUI();
  modal.classList.remove('hidden');
};

window.closeSettingsModal = function() {
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.add('hidden');
};

window.updateSettingsModalUI = function() {
  // 1. Atualizar Seção do Usuário
  const loggedInDiv = document.getElementById('settings-user-logged-in');
  const loggedOutDiv = document.getElementById('settings-user-logged-out');
  const authBadge = document.getElementById('settings-auth-badge');
  const avatarEl = document.getElementById('settings-user-avatar');
  const nameEl = document.getElementById('settings-user-name');
  const emailEl = document.getElementById('settings-user-email');
  const editName = document.getElementById('settings-edit-name');
  const editCourse = document.getElementById('settings-edit-course');

  const student = (typeof getCurrentStudent === 'function' ? getCurrentStudent() : null) || 
                  (typeof SupabaseManager !== 'undefined' && SupabaseManager.user ? {
                    displayName: SupabaseManager.profile?.display_name || SupabaseManager.user.user_metadata?.display_name || SupabaseManager.user.email?.split('@')[0] || 'Estudante',
                    email: SupabaseManager.user.email,
                    targetCourse: SupabaseManager.profile?.target_course || SupabaseManager.user.user_metadata?.target_course || 'FUVEST & ENEM'
                  } : null);

  if (student) {
    if (loggedInDiv) loggedInDiv.classList.remove('hidden');
    if (loggedOutDiv) loggedOutDiv.classList.add('hidden');
    if (authBadge) {
      authBadge.textContent = 'Conta Conectada';
      authBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800';
    }
    if (avatarEl) avatarEl.textContent = (student.displayName || 'E').charAt(0).toUpperCase();
    if (nameEl) nameEl.textContent = student.displayName || 'Estudante';
    if (emailEl) emailEl.textContent = student.email || '';
    if (editName) editName.value = student.displayName || '';
    if (editCourse) editCourse.value = student.targetCourse || 'FUVEST & ENEM';
  } else {
    if (loggedInDiv) loggedInDiv.classList.add('hidden');
    if (loggedOutDiv) loggedOutDiv.classList.remove('hidden');
    if (authBadge) {
      authBadge.textContent = 'Visitante (Offline)';
      authBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300';
    }
  }

  // 2. Atualizar Seção de Notificações
  const notifBadge = document.getElementById('settings-notif-status-badge');
  const notifBtn = document.getElementById('settings-btn-enable-notif');
  const notifBtnText = document.getElementById('settings-btn-notif-text');

  if (!('Notification' in window)) {
    if (notifBadge) {
      notifBadge.textContent = 'Não Suportado';
      notifBadge.className = 'px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500';
    }
    if (notifBtn) notifBtn.disabled = true;
    return;
  }

  const perm = Notification.permission;
  if (perm === 'granted') {
    if (notifBadge) {
      notifBadge.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-500 mr-1"></i> Ativadas';
      notifBadge.className = 'px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800';
    }
    if (notifBtnText) notifBtnText.textContent = 'Notificações Já Ativadas';
    if (notifBtn) notifBtn.className = 'px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5';
  } else if (perm === 'denied') {
    if (notifBadge) {
      notifBadge.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-500 mr-1"></i> Bloqueadas no Navegador';
      notifBadge.className = 'px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800';
    }
    if (notifBtnText) notifBtnText.textContent = 'Permitir no Navegador';
    if (notifBtn) notifBtn.className = 'px-3.5 py-2 rounded-xl bg-slate-500 hover:bg-slate-600 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5';
  } else {
    if (notifBadge) {
      notifBadge.innerHTML = '<i class="fa-solid fa-bell text-amber-500 mr-1"></i> Desativadas';
      notifBadge.className = 'px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800';
    }
    if (notifBtnText) notifBtnText.textContent = 'Ativar Notificações';
    if (notifBtn) notifBtn.className = 'px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5';
  }
};

window.enableNotificationsFromSettings = async function() {
  if (!('Notification' in window)) {
    alert('Seu navegador não oferece suporte nativo a notificações de sistema.');
    return;
  }

  if (Notification.permission === 'granted') {
    if (typeof showToast === 'function') {
      showToast('Suas notificações já estão ativadas e funcionando!');
    } else {
      alert('Suas notificações já estão ativadas e funcionando!');
    }
    return;
  }

  if (Notification.permission === 'denied') {
    alert('As notificações foram bloqueadas nas permissões do seu navegador. Para ativá-las, clique no ícone de configurações ao lado da barra de endereço e autorize as notificações.');
    return;
  }

  try {
    const permission = await Notification.requestPermission();
    updateSettingsModalUI();
    if (permission === 'granted') {
      triggerLocalPushNotification(
        "BrilhaVest: Notificações Ativadas! 🎉",
        "Muito bem! Agora você receberá frases de incentivo e lembretes diários para não deixar a peteca cair nos estudos.",
        "welcome-notif"
      );
      if (typeof showToast === 'function') {
        showToast('Notificações ativadas com sucesso!');
      }
    }
  } catch (err) {
    console.error('Erro ao solicitar permissão de notificações:', err);
  }
};

window.saveSettingsProfile = function() {
  const editName = document.getElementById('settings-edit-name')?.value.trim();
  const editCourse = document.getElementById('settings-edit-course')?.value.trim();
  const current = typeof getCurrentStudent === 'function' ? getCurrentStudent() : null;

  if (!current) {
    if (typeof showToast === 'function') {
      showToast('Faça login ou crie uma conta para salvar dados do perfil.');
    }
    return;
  }

  if (editName) current.displayName = editName;
  if (editCourse) current.targetCourse = editCourse;

  if (typeof setCurrentStudent === 'function') {
    setCurrentStudent(current);
  }

  if (typeof getLocalStudentAccounts === 'function' && typeof saveLocalStudentAccounts === 'function') {
    const accounts = getLocalStudentAccounts();
    const idx = accounts.findIndex(a => a.email === current.email);
    if (idx !== -1) {
      accounts[idx].displayName = current.displayName;
      accounts[idx].targetCourse = current.targetCourse;
      saveLocalStudentAccounts(accounts);
    }
  }

  if (typeof updateAuthUI === 'function') updateAuthUI();
  updateSettingsModalUI();
  if (typeof showToast === 'function') {
    showToast('Perfil de estudante salvo com sucesso!');
  }
};

window.handleSignOutFromSettings = function() {
  if (typeof handleSignOut === 'function') {
    handleSignOut();
  }
  updateSettingsModalUI();
};

window.openAuthModalFromSettings = function(mode) {
  closeSettingsModal();
  if (typeof openAuthModal === 'function') {
    openAuthModal(mode);
  }
};
