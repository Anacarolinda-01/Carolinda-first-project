/**
 * BrilhaVest - Módulo de Persistência e Sincronização com Supabase
 * Gerencia Autenticação, Perfil, Questões, Simulados, Raio-X, Leituras FUVEST 2027, Flashcards e Redações
 */

const SUPABASE_CONFIG_STORAGE_KEY = 'brilhavest_supabase_config';

// Credenciais centrais do Supabase (codificadas em Base64 para não expor texto plano no repositório)
const DEFAULT_SUPABASE_CONFIG = {
  url: typeof atob !== 'undefined' ? atob('aHR0cHM6Ly9oa2d0cW1sYmJmZGN5c3hhemxjeC5zdXBhYmFzZS5jbw==') : 'https://hkgtqmlbbfdcysxazlcx.supabase.co',
  anonKey: typeof atob !== 'undefined' ? atob('c2JfcHVibGlzaGFibGVfYk1EdmE4QmdTbHNQNzVWejFTTEctUV9pZHBQUmhGSg==') : 'sb_publishable_bMDva8BgSlsP75Vz1SLG-Q_idpPRhFJ'
};

const SupabaseManager = {
  client: null,
  user: null,
  profile: null,
  isConfigured: false,
  isSyncing: false,
  lastSyncAt: null,
  authMode: 'login', // 'login' | 'signup'
  essaySyncTimeout: null
};

/**
 * Obtém as credenciais do Supabase (do código ou salvas pelo usuário no navegador)
 */
function getSupabaseCredentials() {
  // Se as credenciais estiverem pré-configuradas no código, use-as diretamente
  if (DEFAULT_SUPABASE_CONFIG.url && DEFAULT_SUPABASE_CONFIG.anonKey) {
    return {
      url: DEFAULT_SUPABASE_CONFIG.url.trim(),
      anonKey: DEFAULT_SUPABASE_CONFIG.anonKey.trim()
    };
  }
  try {
    const saved = localStorage.getItem(SUPABASE_CONFIG_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.url && parsed.anonKey) {
        return { url: parsed.url.trim(), anonKey: parsed.anonKey.trim() };
      }
    }
  } catch (e) {
    console.warn('Erro ao ler configuração do Supabase:', e);
  }
  return {
    url: (DEFAULT_SUPABASE_CONFIG.url || '').trim(),
    anonKey: (DEFAULT_SUPABASE_CONFIG.anonKey || '').trim()
  };
}

/**
 * Inicializa o cliente Supabase e monitora sessão de autenticação
 */
async function initSupabase() {
  const { url, anonKey } = getSupabaseCredentials();

  // Preencher inputs de configuração caso o modal exista
  const urlInput = document.getElementById('supabase-config-url');
  const keyInput = document.getElementById('supabase-config-key');
  if (urlInput && url) urlInput.value = url;
  if (keyInput && anonKey) keyInput.value = anonKey;

  if (!url || !anonKey || !window.supabase) {
    SupabaseManager.isConfigured = false;
    SupabaseManager.client = null;
    SupabaseManager.user = null;
    updateAuthUI();
    return;
  }

  try {
    SupabaseManager.client = window.supabase.createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true
      }
    });
    SupabaseManager.isConfigured = true;

    // Verificar sessão ativa
    const { data: { session }, error } = await SupabaseManager.client.auth.getSession();
    if (!error && session?.user) {
      SupabaseManager.user = session.user;
      await pullAllDataFromSupabase();
    }

    // Escutar mudanças de login/logout em tempo real
    SupabaseManager.client.auth.onAuthStateChange(async (event, session) => {
      const previousUser = SupabaseManager.user;
      SupabaseManager.user = session?.user || null;

      if (event === 'SIGNED_IN' && SupabaseManager.user && (!previousUser || previousUser.id !== SupabaseManager.user.id)) {
        await pushLocalDataToSupabase();
        await pullAllDataFromSupabase();
      } else if (event === 'SIGNED_OUT') {
        SupabaseManager.profile = null;
      }
      updateAuthUI();
    });

    updateAuthUI();
  } catch (err) {
    console.error('Erro ao inicializar cliente Supabase:', err);
    SupabaseManager.isConfigured = false;
    updateAuthUI();
  }
}

/**
 *Garante que o registro na tabela `profiles` exista para o usuário autenticado
 */
async function ensureProfileExists() {
  if (!SupabaseManager.client || !SupabaseManager.user) return null;
  const userId = SupabaseManager.user.id;

  const { data: existing, error: fetchErr } = await SupabaseManager.client
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle();

  if (!fetchErr && existing) {
    SupabaseManager.profile = existing;
    return existing;
  }

  const displayName = SupabaseManager.user.user_metadata?.display_name ||
                      SupabaseManager.user.email?.split('@')[0] ||
                      'Estudante';
  const targetCourse = SupabaseManager.user.user_metadata?.target_course || null;

  const newProfile = {
    id: userId,
    display_name: displayName,
    target_exam: 'ambos',
    target_course: targetCourse,
    theme_preference: AppState.theme || 'light',
    updated_at: new Date().toISOString()
  };

  const { data: created, error: insertErr } = await SupabaseManager.client
    .from('profiles')
    .upsert(newProfile, { onConflict: 'id' })
    .select()
    .maybeSingle();

  if (!insertErr && created) {
    SupabaseManager.profile = created;
  }
  return created;
}

/**
 * Baixa todos os dados persistidos do estudante no Supabase e atualiza o AppState
 */
async function pullAllDataFromSupabase() {
  if (!SupabaseManager.client || !SupabaseManager.user) return;

  try {
    SupabaseManager.isSyncing = true;
    updateAuthUI();

    const userId = SupabaseManager.user.id;
    await ensureProfileExists();

    // Executar buscas em paralelo para máxima velocidade
    const [
      attemptsRes,
      checklistRes,
      booksRes,
      customCardsRes,
      cardProgressRes,
      essayRes
    ] = await Promise.all([
      SupabaseManager.client
        .from('question_attempts')
        .select('question_id, discipline, selected_option, is_correct, mode, answered_at')
        .eq('user_id', userId)
        .order('answered_at', { ascending: true }),
      SupabaseManager.client
        .from('checklist_progress')
        .select('topic_id, theory_completed, exercises_completed, review_completed')
        .eq('user_id', userId),
      SupabaseManager.client
        .from('book_progress')
        .select('book_id, is_read, personal_notes')
        .eq('user_id', userId),
      SupabaseManager.client
        .from('custom_flashcards')
        .select('card_key, front, back, category')
        .eq('user_id', userId),
      SupabaseManager.client
        .from('flashcard_progress')
        .select('card_id, is_learned')
        .eq('user_id', userId),
      SupabaseManager.client
        .from('essays')
        .select('title, content, exam_type, updated_at')
        .eq('user_id', userId)
        .eq('draft_key', 'active_draft')
        .maybeSingle()
    ]);

    // 1. Aplicar Tema do Perfil se disponível
    if (SupabaseManager.profile?.theme_preference) {
      applyTheme(SupabaseManager.profile.theme_preference === 'dark', false);
    }

    // 2. Histórico de Questões (Merge Inteligente para não perder dados offline)
    if (!attemptsRes.error && Array.isArray(attemptsRes.data)) {
      const existingHistory = AppState.stats?.history || [];
      const cloudHistory = attemptsRes.data.map(row => ({
        id: row.question_id,
        selected: row.selected_option,
        isCorrect: row.is_correct,
        timestamp: row.answered_at
      }));
      // Combinar histórico mantendo entradas únicas por questão e data
      const combinedMap = new Map();
      existingHistory.forEach(h => combinedMap.set(`${h.id}_${h.timestamp}`, h));
      cloudHistory.forEach(h => combinedMap.set(`${h.id}_${h.timestamp}`, h));
      const mergedHistory = Array.from(combinedMap.values());
      const correctCount = mergedHistory.filter(h => h.isCorrect).length;
      AppState.stats = {
        answered: mergedHistory.length,
        correct: correctCount,
        history: mergedHistory
      };
    }

    // 3. Checklist Raio-X (União booleana: preserva o que já foi marcado localmente ou na nuvem)
    if (!checklistRes.error && Array.isArray(checklistRes.data)) {
      checklistRes.data.forEach(row => {
        const current = AppState.checklist[row.topic_id] || { theory: false, exercises: false, review: false };
        AppState.checklist[row.topic_id] = {
          theory: current.theory || !!row.theory_completed,
          exercises: current.exercises || !!row.exercises_completed,
          review: current.review || !!row.review_completed
        };
      });
    }

    // 4. Obras FUVEST 2027 Lidas (União de status de leitura)
    if (!booksRes.error && Array.isArray(booksRes.data)) {
      booksRes.data.forEach(row => {
        if (row.is_read) {
          AppState.readBooks[row.book_id] = true;
        }
      });
    }

    // 5. Flashcards Customizados
    if (!customCardsRes.error && Array.isArray(customCardsRes.data)) {
      const cloudCustomCards = customCardsRes.data.map(row => ({
        id: row.card_key,
        front: row.front,
        back: row.back,
        category: row.category,
        difficulty: 'Médio',
        isCustom: true
      }));
      const existingCustomMap = new Map();
      AppState.flashcardDeck.cards.filter(c => c.isCustom).forEach(c => existingCustomMap.set(c.id, c));
      cloudCustomCards.forEach(c => existingCustomMap.set(c.id, c));
      AppState.flashcardDeck.cards = [...initialFlashcards, ...Array.from(existingCustomMap.values())];
    }

    // 6. Progresso de Flashcards Dominados
    if (!cardProgressRes.error && Array.isArray(cardProgressRes.data)) {
      const learnedSet = new Set(AppState.flashcardDeck.learnedIds);
      cardProgressRes.data.forEach(row => {
        if (row.is_learned) {
          learnedSet.add(row.card_id);
        } else {
          learnedSet.delete(row.card_id);
        }
      });
      AppState.flashcardDeck.learnedIds = Array.from(learnedSet);
    }

    // 7. Rascunho de Redação
    if (!essayRes.error && essayRes.data) {
      if (essayRes.data.content || essayRes.data.title) {
        AppState.essayDraft = {
          title: essayRes.data.title || '',
          text: essayRes.data.content || '',
          type: essayRes.data.exam_type || 'ENEM'
        };
        const essayInput = document.getElementById('essay-textarea');
        const essayTitle = document.getElementById('essay-title');
        const essayType = document.getElementById('essay-type-select');
        if (essayInput) essayInput.value = AppState.essayDraft.text;
        if (essayTitle) essayTitle.value = AppState.essayDraft.title;
        if (essayType) essayType.value = AppState.essayDraft.type;
        if (typeof updateEssayCounters === 'function') updateEssayCounters();
      }
    }

    // Persistir estado mesclado no LocalStorage e atualizar UI
    saveToLocalStorage();
    SupabaseManager.lastSyncAt = new Date();
    refreshAllUIComponents();
  } catch (err) {
    console.error('Erro ao buscar dados do Supabase:', err);
  } finally {
    SupabaseManager.isSyncing = false;
    updateAuthUI();
  }
}

/**
 * Envia o progresso local existente (LocalStorage) para o Supabase ao fazer login ou sincronizar manualmente
 */
async function pushLocalDataToSupabase() {
  if (!SupabaseManager.client || !SupabaseManager.user) return;

  try {
    SupabaseManager.isSyncing = true;
    updateAuthUI();

    const userId = SupabaseManager.user.id;
    await ensureProfileExists();

    // 1. Sincronizar Checklist
    const checklistEntries = Object.entries(AppState.checklist || {});
    if (checklistEntries.length > 0) {
      const rows = checklistEntries.map(([topicId, state]) => ({
        user_id: userId,
        topic_id: topicId,
        theory_completed: !!state.theory,
        exercises_completed: !!state.exercises,
        review_completed: !!state.review,
        updated_at: new Date().toISOString()
      }));
      await SupabaseManager.client
        .from('checklist_progress')
        .upsert(rows, { onConflict: 'user_id,topic_id' });
    }

    // 2. Sincronizar Obras FUVEST 2027 Lidas
    const bookEntries = Object.entries(AppState.readBooks || {});
    if (bookEntries.length > 0) {
      const rows = bookEntries.map(([bookId, isRead]) => ({
        user_id: userId,
        book_id: bookId,
        is_read: !!isRead,
        updated_at: new Date().toISOString()
      }));
      await SupabaseManager.client
        .from('book_progress')
        .upsert(rows, { onConflict: 'user_id,book_id' });
    }

    // 3. Sincronizar Flashcards Customizados
    const customCards = (AppState.flashcardDeck.cards || []).filter(c => c.isCustom);
    if (customCards.length > 0) {
      const rows = customCards.map(c => ({
        user_id: userId,
        card_key: String(c.id),
        front: c.front,
        back: c.back,
        category: c.category || 'Geral'
      }));
      await SupabaseManager.client
        .from('custom_flashcards')
        .upsert(rows, { onConflict: 'user_id,card_key' });
    }

    // 4. Sincronizar Flashcards Dominados
    const learnedIds = AppState.flashcardDeck.learnedIds || [];
    if (learnedIds.length > 0) {
      const rows = learnedIds.map(cardId => ({
        user_id: userId,
        card_id: String(cardId),
        is_learned: true,
        updated_at: new Date().toISOString()
      }));
      await SupabaseManager.client
        .from('flashcard_progress')
        .upsert(rows, { onConflict: 'user_id,card_id' });
    }

    // 5. Sincronizar Rascunho de Redação
    if (AppState.essayDraft && (AppState.essayDraft.text || AppState.essayDraft.title)) {
      await syncEssayDraftToSupabase(AppState.essayDraft);
    }

    SupabaseManager.lastSyncAt = new Date();
  } catch (err) {
    console.error('Erro ao enviar dados locais para o Supabase:', err);
  } finally {
    SupabaseManager.isSyncing = false;
    updateAuthUI();
  }
}

// =============================================================================
// HOOKS DE PERSISTÊNCIA EM TEMPO REAL POR AÇÃO DO ESTUDANTE
// =============================================================================

async function syncThemeToSupabase(theme) {
  if (!SupabaseManager.client || !SupabaseManager.user) return;
  try {
    await SupabaseManager.client
      .from('profiles')
      .update({ theme_preference: theme, updated_at: new Date().toISOString() })
      .eq('id', SupabaseManager.user.id);
  } catch (e) {
    console.warn('Falha ao sincronizar tema no Supabase:', e);
  }
}

async function syncQuestionAttemptToSupabase(question, selectedOption, isCorrect, mode = 'practice') {
  if (!SupabaseManager.client || !SupabaseManager.user || !question) return;
  try {
    await SupabaseManager.client
      .from('question_attempts')
      .insert({
        user_id: SupabaseManager.user.id,
        question_id: String(question.id),
        discipline: question.subject || 'Geral',
        selected_option: selectedOption,
        is_correct: !!isCorrect,
        mode: mode,
        answered_at: new Date().toISOString()
      });
    SupabaseManager.lastSyncAt = new Date();
    updateAuthUI();
  } catch (e) {
    console.warn('Falha ao salvar resolução de questão no Supabase:', e);
  }
}

async function syncExamSessionToSupabase(examType, score, totalQuestions, timeSpentSeconds, answersSnapshot) {
  if (!SupabaseManager.client || !SupabaseManager.user) return;
  try {
    await SupabaseManager.client
      .from('exam_sessions')
      .insert({
        user_id: SupabaseManager.user.id,
        exam_type: examType || 'MISTO',
        score: score,
        total_questions: totalQuestions,
        time_spent_seconds: timeSpentSeconds || 0,
        answers_snapshot: answersSnapshot || {},
        completed_at: new Date().toISOString()
      });
    SupabaseManager.lastSyncAt = new Date();
    updateAuthUI();
  } catch (e) {
    console.warn('Falha ao salvar sessão de simulado no Supabase:', e);
  }
}

async function syncChecklistTopicToSupabase(topicId, topicState) {
  if (!SupabaseManager.client || !SupabaseManager.user) return;
  try {
    await SupabaseManager.client
      .from('checklist_progress')
      .upsert({
        user_id: SupabaseManager.user.id,
        topic_id: String(topicId),
        theory_completed: !!topicState.theory,
        exercises_completed: !!topicState.exercises,
        review_completed: !!topicState.review,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,topic_id' });
    SupabaseManager.lastSyncAt = new Date();
    updateAuthUI();
  } catch (e) {
    console.warn('Falha ao sincronizar tópico do Raio-X no Supabase:', e);
  }
}

async function syncBookProgressToSupabase(bookId, isRead) {
  if (!SupabaseManager.client || !SupabaseManager.user) return;
  try {
    await SupabaseManager.client
      .from('book_progress')
      .upsert({
        user_id: SupabaseManager.user.id,
        book_id: String(bookId),
        is_read: !!isRead,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,book_id' });
    SupabaseManager.lastSyncAt = new Date();
    updateAuthUI();
  } catch (e) {
    console.warn('Falha ao sincronizar leitura da FUVEST 2027 no Supabase:', e);
  }
}

async function syncCustomFlashcardToSupabase(card) {
  if (!SupabaseManager.client || !SupabaseManager.user || !card) return;
  try {
    await SupabaseManager.client
      .from('custom_flashcards')
      .upsert({
        user_id: SupabaseManager.user.id,
        card_key: String(card.id),
        front: card.front,
        back: card.back,
        category: card.category || 'Geral'
      }, { onConflict: 'user_id,card_key' });
    SupabaseManager.lastSyncAt = new Date();
    updateAuthUI();
  } catch (e) {
    console.warn('Falha ao salvar flashcard customizado no Supabase:', e);
  }
}

async function syncFlashcardLearnedToSupabase(cardId, isLearned) {
  if (!SupabaseManager.client || !SupabaseManager.user) return;
  try {
    await SupabaseManager.client
      .from('flashcard_progress')
      .upsert({
        user_id: SupabaseManager.user.id,
        card_id: String(cardId),
        is_learned: !!isLearned,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,card_id' });
    SupabaseManager.lastSyncAt = new Date();
    updateAuthUI();
  } catch (e) {
    console.warn('Falha ao salvar progresso do flashcard no Supabase:', e);
  }
}

function scheduleEssaySync(draft) {
  if (!SupabaseManager.client || !SupabaseManager.user) return;
  if (SupabaseManager.essaySyncTimeout) clearTimeout(SupabaseManager.essaySyncTimeout);
  SupabaseManager.essaySyncTimeout = setTimeout(() => {
    syncEssayDraftToSupabase(draft);
  }, 1200);
}

async function syncEssayDraftToSupabase(draft) {
  if (!SupabaseManager.client || !SupabaseManager.user || !draft) return;
  try {
    const text = draft.text || '';
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    await SupabaseManager.client
      .from('essays')
      .upsert({
        user_id: SupabaseManager.user.id,
        draft_key: 'active_draft',
        title: draft.title || '',
        exam_type: draft.type === 'FUVEST' ? 'FUVEST' : 'ENEM',
        content: text,
        word_count: words,
        status: 'draft',
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,draft_key' });
    SupabaseManager.lastSyncAt = new Date();
    updateAuthUI();
  } catch (e) {
    console.warn('Falha ao sincronizar redação no Supabase:', e);
  }
}

function refreshAllUIComponents() {
  if (typeof updateGlobalBadges === 'function') updateGlobalBadges();
  if (typeof renderPracticeQuestions === 'function') renderPracticeQuestions();
  if (typeof renderBooks === 'function') renderBooks();
  if (typeof renderChecklist === 'function') renderChecklist();
  if (typeof renderCurrentFlashcard === 'function') renderCurrentFlashcard();
}

// =============================================================================
// GERENCIADOR DE CONTAS DE ESTUDANTE (OFFLINE-FIRST & LOCALSTORAGE)
// =============================================================================

const STUDENT_ACCOUNTS_KEY = 'brilhavest_student_accounts';
const CURRENT_STUDENT_KEY = 'brilhavest_current_student';

function getLocalStudentAccounts() {
  try {
    const raw = localStorage.getItem(STUDENT_ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveLocalStudentAccounts(accounts) {
  try {
    localStorage.setItem(STUDENT_ACCOUNTS_KEY, JSON.stringify(accounts));
  } catch (e) {}
}

function getCurrentStudent() {
  try {
    const raw = localStorage.getItem(CURRENT_STUDENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setCurrentStudent(student) {
  try {
    if (student) {
      localStorage.setItem(CURRENT_STUDENT_KEY, JSON.stringify(student));
    } else {
      localStorage.removeItem(CURRENT_STUDENT_KEY);
    }
  } catch (e) {}
}

// =============================================================================
// INTERFACE DE USUÁRIO: MODAL DE CONTA DO ESTUDANTE
// =============================================================================

window.handleHeaderAccountClick = function() {
  const current = getCurrentStudent() || (SupabaseManager.user ? {
    displayName: SupabaseManager.profile?.display_name || SupabaseManager.user.user_metadata?.display_name || SupabaseManager.user.email?.split('@')[0] || 'Estudante',
    email: SupabaseManager.user.email,
    targetCourse: SupabaseManager.profile?.target_course || SupabaseManager.user.user_metadata?.target_course || 'FUVEST & ENEM'
  } : null);

  const modal = document.getElementById('supabase-auth-modal');
  if (!modal) return;
  modal.classList.remove('hidden');

  if (current) {
    updateAuthUI();
  } else {
    toggleAuthMode('signup');
  }
};

window.openAuthModal = function(initialMode = 'signup') {
  const modal = document.getElementById('supabase-auth-modal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const current = getCurrentStudent();
  if (initialMode === 'signup' || initialMode === 'login' || initialMode === 'reset') {
    toggleAuthMode(initialMode);
  } else if (current) {
    updateAuthUI();
  } else {
    toggleAuthMode('signup');
  }
};

window.closeAuthModal = function() {
  const modal = document.getElementById('supabase-auth-modal');
  if (modal) modal.classList.add('hidden');
};

window.switchAuthModalTab = function(tab) {
  if (tab === 'signup' || tab === 'login') {
    toggleAuthMode(tab);
  }
};

window.handleCreateAnotherAccount = function() {
  setCurrentStudent(null);
  if (SupabaseManager.client) {
    try { SupabaseManager.client.auth.signOut(); } catch (e) {}
  }
  SupabaseManager.user = null;
  SupabaseManager.profile = null;
  toggleAuthMode('signup');
  updateAuthUI();
  if (typeof showToast === 'function') {
    showToast('Pronto! Agora você pode criar uma nova conta de estudante.');
  }
};

window.togglePasswordVisibility = function() {
  const passwordInput = document.getElementById('auth-password');
  const icon = document.getElementById('auth-password-toggle-icon');
  if (!passwordInput || !icon) return;

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.className = 'fa-solid fa-eye text-xs text-indigo-600 dark:text-indigo-400';
  } else {
    passwordInput.type = 'password';
    icon.className = 'fa-solid fa-eye-slash text-xs text-slate-400';
  }
};

window.toggleAuthMode = function(mode) {
  SupabaseManager.authMode = mode;
  const modalTitle = document.getElementById('auth-modal-title');
  const modalSubtitle = document.getElementById('auth-modal-subtitle');
  const signupFields = document.getElementById('auth-signup-extra-fields');
  const submitBtn = document.getElementById('auth-submit-btn');
  const modeToggleText = document.getElementById('auth-mode-toggle-container');
  const forgotLink = document.getElementById('auth-forgot-password-link');
  const passwordLabel = document.getElementById('auth-password-label');
  const tabBtnSignup = document.getElementById('auth-tab-btn-signup');
  const tabBtnLogin = document.getElementById('auth-tab-btn-login');
  const tabsContainer = document.getElementById('auth-tabs-container');
  const loggedOutView = document.getElementById('auth-logged-out-view');
  const loggedInView = document.getElementById('auth-logged-in-view');
  const feedbackEl = document.getElementById('auth-form-feedback');

  if (feedbackEl) feedbackEl.classList.add('hidden');
  if (tabsContainer) tabsContainer.classList.remove('hidden');
  if (loggedOutView) loggedOutView.classList.remove('hidden');
  if (loggedInView) loggedInView.classList.add('hidden');

  if (mode === 'signup') {
    if (modalTitle) modalTitle.innerText = 'Criar Conta do Estudante';
    if (modalSubtitle) modalSubtitle.innerText = 'Cadastre-se para acompanhar sua jornada rumo à aprovação';
    if (signupFields) signupFields.classList.remove('hidden');
    if (forgotLink) forgotLink.classList.add('hidden');
    if (passwordLabel) passwordLabel.innerHTML = '<i class="fa-solid fa-lock mr-1 text-indigo-500"></i> Criar uma Senha';
    if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-user-plus mr-1.5"></i> Criar Minha Conta de Estudante';
    if (modeToggleText) {
      modeToggleText.innerHTML = `Já possui uma conta? <button type="button" onclick="toggleAuthMode('login')" class="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Fazer Login</button>`;
    }
    if (tabBtnSignup) tabBtnSignup.className = 'flex-1 py-2 text-xs font-bold rounded-lg transition bg-indigo-600 text-white shadow-sm flex items-center justify-center gap-1.5';
    if (tabBtnLogin) tabBtnLogin.className = 'flex-1 py-2 text-xs font-bold rounded-lg transition text-slate-600 dark:text-slate-300 hover:text-indigo-600 flex items-center justify-center gap-1.5';
  } else if (mode === 'reset') {
    if (modalTitle) modalTitle.innerText = 'Recuperar Senha';
    if (modalSubtitle) modalSubtitle.innerText = 'Digite seu e-mail e sua nova senha para redefinir';
    if (signupFields) signupFields.classList.add('hidden');
    if (forgotLink) forgotLink.classList.add('hidden');
    if (passwordLabel) passwordLabel.innerHTML = '<i class="fa-solid fa-key mr-1 text-indigo-500"></i> Nova Senha';
    if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-key mr-1.5"></i> Redefinir Minha Senha';
    if (modeToggleText) {
      modeToggleText.innerHTML = `Lembrou sua senha? <button type="button" onclick="toggleAuthMode('login')" class="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Voltar ao Login</button>`;
    }
    if (tabBtnSignup) tabBtnSignup.className = 'flex-1 py-2 text-xs font-bold rounded-lg transition text-slate-600 dark:text-slate-300 hover:text-indigo-600 flex items-center justify-center gap-1.5';
    if (tabBtnLogin) tabBtnLogin.className = 'flex-1 py-2 text-xs font-bold rounded-lg transition text-slate-600 dark:text-slate-300 hover:text-indigo-600 flex items-center justify-center gap-1.5';
  } else {
    // LOGIN
    if (modalTitle) modalTitle.innerText = 'Entrar na Conta';
    if (modalSubtitle) modalSubtitle.innerText = 'Acesse seu perfil de estudante e histórico de estudos';
    if (signupFields) signupFields.classList.add('hidden');
    if (forgotLink) forgotLink.classList.remove('hidden');
    if (passwordLabel) passwordLabel.innerHTML = '<i class="fa-solid fa-lock mr-1 text-indigo-500"></i> Senha';
    if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket mr-1.5"></i> Entrar na Conta';
    if (modeToggleText) {
      modeToggleText.innerHTML = `Ainda não tem conta? <button type="button" onclick="toggleAuthMode('signup')" class="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Criar Conta Gratuita</button>`;
    }
    if (tabBtnLogin) tabBtnLogin.className = 'flex-1 py-2 text-xs font-bold rounded-lg transition bg-indigo-600 text-white shadow-sm flex items-center justify-center gap-1.5';
    if (tabBtnSignup) tabBtnSignup.className = 'flex-1 py-2 text-xs font-bold rounded-lg transition text-slate-600 dark:text-slate-300 hover:text-indigo-600 flex items-center justify-center gap-1.5';
  }
};

window.handleAuthSubmit = async function(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }
  const feedbackEl = document.getElementById('auth-form-feedback');
  const emailInput = document.getElementById('auth-email');
  const passwordInput = document.getElementById('auth-password');
  const nameInput = document.getElementById('auth-display-name');
  const courseInput = document.getElementById('auth-target-course');

  const email = (emailInput?.value || '').trim().toLowerCase();
  const password = passwordInput?.value || '';
  const displayName = (nameInput?.value || '').trim();
  const targetCourse = (courseInput?.value || '').trim();

  const showFeedback = (msg, isSuccess = false) => {
    if (!feedbackEl) return;
    feedbackEl.className = isSuccess
      ? 'p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 font-medium'
      : 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 font-medium';
    feedbackEl.innerHTML = isSuccess
      ? `<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5"></i> ${msg}`
      : `<i class="fa-solid fa-circle-exclamation text-rose-600 mr-1.5"></i> ${msg}`;
    feedbackEl.classList.remove('hidden');
  };

  if (!email) {
    showFeedback('Por favor, informe seu endereço de e-mail.');
    emailInput?.focus();
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    showFeedback('Por favor, digite um endereço de e-mail válido.');
    emailInput?.focus();
    return;
  }

  if (!password || password.length < 6) {
    showFeedback('A senha precisa ter no mínimo 6 caracteres.');
    passwordInput?.focus();
    return;
  }

  const submitBtn = document.getElementById('auth-submit-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-70', 'cursor-not-allowed');
  }

  try {
    // 0. VERIFICAÇÃO UNIVERSAL DE ADMINISTRADOR
    // Permite entrar como Admin em QUALQUER aparelho, seja na aba "Criar Conta" ou "Já Tenho Conta"
    if (typeof checkAdminLoginCredentials === 'function' && checkAdminLoginCredentials(email, password)) {
      if (emailInput) emailInput.value = '';
      if (passwordInput) passwordInput.value = '';
      if (nameInput) nameInput.value = '';
      if (courseInput) courseInput.value = '';
      if (feedbackEl) feedbackEl.classList.add('hidden');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
      }
      closeAuthModal();
      openAdminModal();
      if (typeof showToast === 'function') {
        showToast('👑 Bem-vindo(a), Administrador! Modo de gestão ativado neste aparelho.');
      }
      return;
    }

    const accounts = getLocalStudentAccounts();

    // 1. MODO RECUPERAÇÃO DE SENHA
    if (SupabaseManager.authMode === 'reset') {
      const accIndex = accounts.findIndex(a => a.email === email);
      if (accIndex === -1) {
        showFeedback('Nenhuma conta de estudante encontrada com este e-mail.');
        return;
      }

      accounts[accIndex].password = password;
      accounts[accIndex].updatedAt = new Date().toISOString();
      saveLocalStudentAccounts(accounts);

      showFeedback('Senha redefinida com sucesso! Você já pode entrar.', true);
      setTimeout(() => toggleAuthMode('login'), 1200);
      return;
    }

    // 2. MODO CADASTRO
    if (SupabaseManager.authMode === 'signup') {
      const exists = accounts.find(a => a.email === email);
      if (exists) {
        showFeedback('Este e-mail já está cadastrado. Clique em "Já Tenho Conta" acima para entrar.');
        return;
      }

      const finalName = displayName || email.split('@')[0];
      const finalCourse = targetCourse || 'FUVEST & ENEM';

      const newStudent = {
        id: 'student_' + Date.now(),
        email: email,
        password: password,
        displayName: finalName,
        targetCourse: finalCourse,
        createdAt: new Date().toISOString()
      };

      accounts.push(newStudent);
      saveLocalStudentAccounts(accounts);
      setCurrentStudent(newStudent);

      // Limpar campos
      if (emailInput) emailInput.value = '';
      if (passwordInput) passwordInput.value = '';
      if (nameInput) nameInput.value = '';
      if (courseInput) courseInput.value = '';

      // Sincronização em segundo plano com Supabase se estiver configurado
      if (SupabaseManager.isConfigured && SupabaseManager.client) {
        try {
          const { data } = await SupabaseManager.client.auth.signUp({
            email,
            password,
            options: {
              data: { display_name: finalName, target_course: finalCourse }
            }
          });
          if (data?.user) {
            SupabaseManager.user = data.user;
          }
          const userId = data?.user?.id || newStudent.id;
          try {
            await SupabaseManager.client.from('profiles').upsert({
              id: userId,
              display_name: finalName,
              email: email,
              target_course: finalCourse,
              target_exam: 'ambos',
              updated_at: new Date().toISOString()
            }, { onConflict: 'id' });
          } catch (profileErr) {
            console.warn('Gravação do perfil no Supabase:', profileErr);
          }
        } catch (e) {
          console.warn('Supabase sync silencioso:', e);
        }
      }

      if (feedbackEl) feedbackEl.classList.add('hidden');
      updateAuthUI();
      closeAuthModal();

      if (typeof showToast === 'function') {
        showToast(`🎉 Bem-vindo(a), ${finalName}! Sua conta de estudante foi criada.`);
      }
      return;
    }

    // 3. MODO LOGIN
    const student = accounts.find(a => a.email === email && a.password === password);
    if (student) {
      setCurrentStudent(student);

      // Limpar campos
      if (emailInput) emailInput.value = '';
      if (passwordInput) passwordInput.value = '';

      // Sincronização em segundo plano com Supabase se estiver configurado
      if (SupabaseManager.isConfigured && SupabaseManager.client) {
        try {
          const { data } = await SupabaseManager.client.auth.signInWithPassword({ email, password });
          if (data?.user) {
            SupabaseManager.user = data.user;
            await pullAllDataFromSupabase();
          }
        } catch (e) {
          console.warn('Supabase signin silencioso:', e);
        }
      }

      if (feedbackEl) feedbackEl.classList.add('hidden');
      updateAuthUI();
      closeAuthModal();

      if (typeof showToast === 'function') {
        showToast(`Olá novamente, ${student.displayName}!`);
      }
      return;
    }

    // Se não encontrou no local mas o Supabase estiver configurado
    if (SupabaseManager.isConfigured && SupabaseManager.client) {
      try {
        const { data, error } = await SupabaseManager.client.auth.signInWithPassword({ email, password });
        if (!error && data?.user) {
          SupabaseManager.user = data.user;
          const fallbackStudent = {
            id: data.user.id,
            email: data.user.email,
            displayName: data.user.user_metadata?.display_name || email.split('@')[0],
            targetCourse: data.user.user_metadata?.target_course || 'FUVEST & ENEM'
          };
          setCurrentStudent(fallbackStudent);
          await pullAllDataFromSupabase();
          if (feedbackEl) feedbackEl.classList.add('hidden');
          updateAuthUI();
          closeAuthModal();
          return;
        }
      } catch (err) {}
    }

    showFeedback('E-mail ou senha incorretos. Por favor, verifique os dados digitados.');
  } catch (err) {
    showFeedback('Ocorreu um erro ao processar. Tente novamente.');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
    }
    updateAuthUI();
  }
};

window.handleEditProfilePrompt = function() {
  const current = getCurrentStudent();
  if (!current) return;

  const newName = prompt('Atualizar seu Nome ou Apelido:', current.displayName || '');
  if (newName === null) return;

  const newCourse = prompt('Atualizar Curso / Meta de Vestibular:', current.targetCourse || '');
  if (newCourse === null) return;

  current.displayName = newName.trim() || current.displayName;
  current.targetCourse = newCourse.trim() || current.targetCourse;

  const accounts = getLocalStudentAccounts();
  const idx = accounts.findIndex(a => a.email === current.email);
  if (idx !== -1) {
    accounts[idx].displayName = current.displayName;
    accounts[idx].targetCourse = current.targetCourse;
    saveLocalStudentAccounts(accounts);
  }

  setCurrentStudent(current);
  updateAuthUI();
  if (typeof showToast === 'function') {
    showToast('Perfil de estudante atualizado com sucesso!');
  }
};

window.handleManualCloudSync = async function() {
  if (SupabaseManager.client && SupabaseManager.user) {
    await pushLocalDataToSupabase();
    await pullAllDataFromSupabase();
  } else if (typeof showToast === 'function') {
    showToast('Dados salvos com sucesso no seu dispositivo!');
  }
};

window.handleSignOut = async function() {
  setCurrentStudent(null);
  if (SupabaseManager.client) {
    try {
      await SupabaseManager.client.auth.signOut();
    } catch (e) {}
  }
  SupabaseManager.user = null;
  SupabaseManager.profile = null;
  updateAuthUI();
  if (typeof showToast === 'function') {
    showToast('Você saiu da sua conta.');
  }
};

function updateAuthUI() {
  const navBtnText = document.getElementById('nav-auth-btn-text');
  const navStatusDot = document.getElementById('nav-auth-status-dot');
  const navAuthIcon = document.getElementById('nav-auth-icon');
  const loggedOutView = document.getElementById('auth-logged-out-view');
  const loggedInView = document.getElementById('auth-logged-in-view');
  const userNameEl = document.getElementById('auth-profile-name');
  const userEmailEl = document.getElementById('auth-profile-email');
  const userCourseEl = document.getElementById('auth-profile-course');
  const userAvatarEl = document.getElementById('auth-profile-avatar');

  // Stats elements
  const statQuestionsEl = document.getElementById('auth-stat-questions');
  const statAccuracyEl = document.getElementById('auth-stat-accuracy');
  const statBooksEl = document.getElementById('auth-stat-books');

  const currentStudent = getCurrentStudent() || (SupabaseManager.user ? {
    displayName: SupabaseManager.profile?.display_name || SupabaseManager.user.user_metadata?.display_name || SupabaseManager.user.email?.split('@')[0] || 'Estudante',
    email: SupabaseManager.user.email,
    targetCourse: SupabaseManager.profile?.target_course || SupabaseManager.user.user_metadata?.target_course || 'FUVEST & ENEM'
  } : null);

  const tabsContainer = document.getElementById('auth-tabs-container');

  if (currentStudent) {
    const name = currentStudent.displayName || 'Estudante';
    const email = currentStudent.email || '';
    const course = currentStudent.targetCourse || 'FUVEST & ENEM';

    if (navBtnText) navBtnText.innerText = name.split(' ')[0];
    if (navStatusDot) navStatusDot.className = 'w-2 h-2 rounded-full bg-emerald-500';
    if (navAuthIcon) navAuthIcon.className = 'fa-solid fa-user-graduate text-emerald-600 dark:text-emerald-400';

    if (tabsContainer) tabsContainer.classList.add('hidden');
    if (loggedOutView) loggedOutView.classList.add('hidden');
    if (loggedInView) loggedInView.classList.remove('hidden');

    if (userNameEl) userNameEl.innerText = name;
    if (userEmailEl) userEmailEl.innerText = email;
    if (userCourseEl) userCourseEl.innerText = `🎯 Meta: ${course}`;
    if (userAvatarEl) userAvatarEl.innerText = name.charAt(0).toUpperCase() || 'E';

    // Atualizar estatísticas se AppState estiver disponível
    if (typeof AppState !== 'undefined') {
      const answered = AppState.stats?.answered || 0;
      const correct = AppState.stats?.correct || 0;
      const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
      const booksRead = Object.values(AppState.readBooks || {}).filter(Boolean).length;

      if (statQuestionsEl) statQuestionsEl.innerText = String(answered);
      if (statAccuracyEl) statAccuracyEl.innerText = `${accuracy}%`;
      if (statBooksEl) statBooksEl.innerText = `${booksRead}/9`;
    }
  } else {
    if (navBtnText) navBtnText.innerText = 'Criar Conta / Entrar';
    if (navStatusDot) navStatusDot.className = 'w-2 h-2 rounded-full bg-indigo-500';
    if (navAuthIcon) navAuthIcon.className = 'fa-solid fa-user-graduate text-indigo-600 dark:text-indigo-400';

    if (tabsContainer) tabsContainer.classList.remove('hidden');
    if (loggedOutView) loggedOutView.classList.remove('hidden');
    if (loggedInView) loggedInView.classList.add('hidden');
  }
}
