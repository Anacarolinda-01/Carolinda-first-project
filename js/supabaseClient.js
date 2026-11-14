/**
 * BrilhaVest - Módulo de Persistência e Sincronização com Supabase
 * Gerencia Autenticação, Perfil, Questões, Simulados, Raio-X, Leituras FUVEST 2027, Flashcards e Redações
 */

const SUPABASE_CONFIG_STORAGE_KEY = 'brilhavest_supabase_config';

// Credenciais oficiais do projeto Supabase configuradas por padrão
const DEFAULT_SUPABASE_CONFIG = {
  url: 'https://hkgtqmlbbfdcysxazlcx.supabase.co',
  anonKey: 'sb_publishable_bMDva8BgSlsP75Vz1SLG-Q_idpPRhFJ'
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
// INTERFACE DE USUÁRIO: MODAL DE LOGIN, CADASTRO E CONFIGURAÇÃO SUPABASE
// =============================================================================

window.openAuthModal = function(defaultTab = 'account') {
  const modal = document.getElementById('supabase-auth-modal');
  if (!modal) return;
  modal.classList.remove('hidden');

  if (!SupabaseManager.isConfigured && defaultTab === 'account') {
    switchAuthModalTab('config');
  } else {
    switchAuthModalTab(defaultTab);
  }
  updateAuthUI();
};

window.closeAuthModal = function() {
  const modal = document.getElementById('supabase-auth-modal');
  if (modal) modal.classList.add('hidden');
};

window.switchAuthModalTab = function(tab) {
  const tabAccount = document.getElementById('auth-tab-account');
  const tabConfig = document.getElementById('auth-tab-config');
  const btnAccount = document.getElementById('btn-auth-tab-account');
  const btnConfig = document.getElementById('btn-auth-tab-config');

  if (tab === 'account') {
    if (tabAccount) tabAccount.classList.remove('hidden');
    if (tabConfig) tabConfig.classList.add('hidden');
    if (btnAccount) btnAccount.className = 'flex-1 py-2 text-xs font-bold rounded-lg bg-indigo-600 text-white shadow-sm transition';
    if (btnConfig) btnConfig.className = 'flex-1 py-2 text-xs font-bold rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition';
  } else {
    if (tabAccount) tabAccount.classList.add('hidden');
    if (tabConfig) tabConfig.classList.remove('hidden');
    if (btnConfig) btnConfig.className = 'flex-1 py-2 text-xs font-bold rounded-lg bg-indigo-600 text-white shadow-sm transition';
    if (btnAccount) btnAccount.className = 'flex-1 py-2 text-xs font-bold rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition';
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

function translateAuthError(err) {
  if (!err) return 'Ocorreu um erro inesperado. Tente novamente.';
  const msg = (err.message || String(err)).toLowerCase();

  if (msg.includes('invalid login credentials') || msg.includes('invalid credentials')) {
    return 'E-mail ou senha incorretos. Por favor, verifique os dados digitados.';
  }
  if (msg.includes('user already registered') || msg.includes('already exists')) {
    return 'Este e-mail já está cadastrado. Clique em "Fazer Login" abaixo.';
  }
  if (msg.includes('password should be at least') || msg.includes('weak_password')) {
    return 'A senha precisa ter no mínimo 6 caracteres.';
  }
  if (msg.includes('email not confirmed')) {
    return 'E-mail ainda não confirmado. Verifique a caixa de entrada/spam ou desative a confirmação no painel Supabase.';
  }
  if (msg.includes('rate limit') || msg.includes('too many requests')) {
    return 'Muitas tentativas em pouco tempo. Aguarde alguns instantes e tente novamente.';
  }
  if (msg.includes('invalid format') || msg.includes('unable to validate email')) {
    return 'Formato de e-mail inválido. Digite um e-mail válido (ex: seuemail@exemplo.com).';
  }
  return err.message || 'Erro ao processar autenticação no Supabase.';
}

window.toggleAuthMode = function(mode) {
  SupabaseManager.authMode = mode;
  const signupFields = document.getElementById('auth-signup-extra-fields');
  const submitBtn = document.getElementById('auth-submit-btn');
  const modeToggleText = document.getElementById('auth-mode-toggle-container');
  const passwordContainer = document.getElementById('auth-password')?.closest('div.relative')?.parentElement;
  const feedbackEl = document.getElementById('auth-form-feedback');
  if (feedbackEl) feedbackEl.classList.add('hidden');

  if (mode === 'signup') {
    if (signupFields) signupFields.classList.remove('hidden');
    if (passwordContainer) passwordContainer.classList.remove('hidden');
    if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-user-plus mr-1.5"></i> Criar Conta e Sincronizar';
    if (modeToggleText) {
      modeToggleText.innerHTML = `Já possui uma conta? <button type="button" onclick="toggleAuthMode('login')" class="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Fazer Login</button>`;
    }
  } else if (mode === 'reset') {
    if (signupFields) signupFields.classList.add('hidden');
    if (passwordContainer) passwordContainer.classList.add('hidden');
    if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane mr-1.5"></i> Enviar Link de Recuperação';
    if (modeToggleText) {
      modeToggleText.innerHTML = `Lembrou sua senha? <button type="button" onclick="toggleAuthMode('login')" class="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Voltar ao Login</button>`;
    }
  } else {
    if (signupFields) signupFields.classList.add('hidden');
    if (passwordContainer) passwordContainer.classList.remove('hidden');
    if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket mr-1.5"></i> Entrar na Conta';
    if (modeToggleText) {
      modeToggleText.innerHTML = `Ainda não tem conta? <button type="button" onclick="toggleAuthMode('signup')" class="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Criar Conta Gratuita</button>`;
    }
  }
};

window.handleSaveSupabaseConfig = async function(e) {
  if (e) e.preventDefault();
  const url = document.getElementById('supabase-config-url')?.value.trim() || '';
  const anonKey = document.getElementById('supabase-config-key')?.value.trim() || '';
  const feedbackEl = document.getElementById('supabase-config-feedback');

  if (!url || !anonKey) {
    if (feedbackEl) {
      feedbackEl.className = 'text-xs font-semibold text-rose-600 mt-2';
      feedbackEl.innerText = 'Preencha tanto a Project URL quanto a Anon Public Key do seu projeto Supabase.';
    }
    return;
  }

  localStorage.setItem(SUPABASE_CONFIG_STORAGE_KEY, JSON.stringify({ url, anonKey }));
  await initSupabase();

  if (SupabaseManager.isConfigured) {
    if (feedbackEl) {
      feedbackEl.className = 'text-xs font-semibold text-emerald-600 mt-2';
      feedbackEl.innerText = 'Conectado ao Supabase com sucesso! Agora você já pode criar sua conta ou fazer login.';
    }
    setTimeout(() => switchAuthModalTab('account'), 800);
  } else {
    if (feedbackEl) {
      feedbackEl.className = 'text-xs font-semibold text-rose-600 mt-2';
      feedbackEl.innerText = 'Não foi possível inicializar o cliente Supabase. Verifique a URL e a chave informadas.';
    }
  }
};

window.handleAuthSubmit = async function(e) {
  if (e) e.preventDefault();
  const feedbackEl = document.getElementById('auth-form-feedback');

  if (!SupabaseManager.isConfigured || !SupabaseManager.client) {
    if (feedbackEl) {
      feedbackEl.className = 'p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 font-medium';
      feedbackEl.innerText = 'Configure primeiro a URL e a Anon Key do seu projeto Supabase na aba "Configurar Banco".';
      feedbackEl.classList.remove('hidden');
    }
    return;
  }

  const email = document.getElementById('auth-email')?.value.trim() || '';
  const password = document.getElementById('auth-password')?.value || '';
  const displayName = document.getElementById('auth-display-name')?.value.trim() || '';
  const targetCourse = document.getElementById('auth-target-course')?.value.trim() || '';

  if (!email) {
    if (feedbackEl) {
      feedbackEl.className = 'p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium';
      feedbackEl.innerText = 'Por favor, informe seu endereço de e-mail.';
      feedbackEl.classList.remove('hidden');
    }
    return;
  }

  const submitBtn = document.getElementById('auth-submit-btn');
  if (submitBtn) submitBtn.disabled = true;

  try {
    // MODO RECUPERAÇÃO DE SENHA
    if (SupabaseManager.authMode === 'reset') {
      const { error } = await SupabaseManager.client.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.href
      });
      if (error) throw error;

      if (feedbackEl) {
        feedbackEl.className = 'p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium';
        feedbackEl.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5"></i> Link de recuperação enviado! Verifique sua caixa de entrada e siga as instruções.';
        feedbackEl.classList.remove('hidden');
      }
      return;
    }

    if (!password) {
      if (feedbackEl) {
        feedbackEl.className = 'p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium';
        feedbackEl.innerText = 'Por favor, digite sua senha.';
        feedbackEl.classList.remove('hidden');
      }
      return;
    }

    // MODO CADASTRO
    if (SupabaseManager.authMode === 'signup') {
      const { data, error } = await SupabaseManager.client.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: displayName || email.split('@')[0],
            target_course: targetCourse || null
          }
        }
      });

      if (error) throw error;

      if (data?.user && !data.session) {
        if (feedbackEl) {
          feedbackEl.className = 'p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium';
          feedbackEl.innerText = 'Cadastro realizado! Verifique a caixa de entrada do seu e-mail para confirmar a conta (ou desative "Confirm email" no painel Auth do Supabase para login direto).';
          feedbackEl.classList.remove('hidden');
        }
      } else if (data?.user) {
        SupabaseManager.user = data.user;
        await pushLocalDataToSupabase();
        await pullAllDataFromSupabase();
        if (feedbackEl) feedbackEl.classList.add('hidden');
        closeAuthModal();
      }
    } else {
      // MODO LOGIN
      const { data, error } = await SupabaseManager.client.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      if (data?.user) {
        SupabaseManager.user = data.user;
        await pushLocalDataToSupabase();
        await pullAllDataFromSupabase();
        if (feedbackEl) feedbackEl.classList.add('hidden');
        closeAuthModal();
      }
    }
  } catch (err) {
    if (feedbackEl) {
      feedbackEl.className = 'p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium';
      feedbackEl.innerText = translateAuthError(err);
      feedbackEl.classList.remove('hidden');
    }
  } finally {
    if (submitBtn) submitBtn.disabled = false;
    updateAuthUI();
  }
};

window.handleManualCloudSync = async function() {
  if (!SupabaseManager.client || !SupabaseManager.user) return;
  await pushLocalDataToSupabase();
  await pullAllDataFromSupabase();
};

window.handleSignOut = async function() {
  if (!SupabaseManager.client) return;
  await SupabaseManager.client.auth.signOut();
  SupabaseManager.user = null;
  SupabaseManager.profile = null;
  updateAuthUI();
};

function updateAuthUI() {
  const navBtnText = document.getElementById('nav-auth-btn-text');
  const navStatusDot = document.getElementById('nav-auth-status-dot');
  const loggedOutView = document.getElementById('auth-logged-out-view');
  const loggedInView = document.getElementById('auth-logged-in-view');
  const userNameEl = document.getElementById('auth-profile-name');
  const userEmailEl = document.getElementById('auth-profile-email');
  const userCourseEl = document.getElementById('auth-profile-course');
  const syncStatusEl = document.getElementById('auth-sync-status-badge');

  if (SupabaseManager.user) {
    const name = SupabaseManager.profile?.display_name ||
                 SupabaseManager.user.user_metadata?.display_name ||
                 SupabaseManager.user.email?.split('@')[0] ||
                 'Estudante';

    if (navBtnText) navBtnText.innerText = name;
    if (navStatusDot) {
      navStatusDot.className = SupabaseManager.isSyncing
        ? 'w-2 h-2 rounded-full bg-amber-400 animate-ping'
        : 'w-2 h-2 rounded-full bg-emerald-500';
    }

    if (loggedOutView) loggedOutView.classList.add('hidden');
    if (loggedInView) loggedInView.classList.remove('hidden');

    if (userNameEl) userNameEl.innerText = name;
    if (userEmailEl) userEmailEl.innerText = SupabaseManager.user.email || '';
    if (userCourseEl) {
      const course = SupabaseManager.profile?.target_course || SupabaseManager.user.user_metadata?.target_course;
      userCourseEl.innerText = course ? `Meta: ${course}` : 'Meta: FUVEST & ENEM';
    }

    if (syncStatusEl) {
      if (SupabaseManager.isSyncing) {
        syncStatusEl.innerHTML = '<i class="fa-solid fa-rotate fa-spin mr-1"></i> Sincronizando com Supabase...';
      } else if (SupabaseManager.lastSyncAt) {
        const timeStr = SupabaseManager.lastSyncAt.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        syncStatusEl.innerHTML = `<i class="fa-solid fa-cloud-arrow-up text-emerald-500 mr-1"></i> Sincronizado na nuvem às ${timeStr}`;
      } else {
        syncStatusEl.innerHTML = '<i class="fa-solid fa-cloud text-emerald-500 mr-1"></i> Conectado ao Supabase';
      }
    }
  } else {
    if (navBtnText) navBtnText.innerText = SupabaseManager.isConfigured ? 'Entrar' : 'Nuvem';
    if (navStatusDot) {
      navStatusDot.className = SupabaseManager.isConfigured
        ? 'w-2 h-2 rounded-full bg-indigo-400'
        : 'w-2 h-2 rounded-full bg-slate-400';
    }

    if (loggedOutView) loggedOutView.classList.remove('hidden');
    if (loggedInView) loggedInView.classList.add('hidden');
  }
}
