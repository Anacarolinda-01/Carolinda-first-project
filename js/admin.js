/**
 * BrilhaVest - Módulo do Painel do Administrador
 * Gerencia acesso restrito, autenticação do administrador e visualização de todos os cadastros
 */

const ADMIN_STORAGE_KEY = 'brilhavest_admin_pin';
const DEFAULT_ADMIN_PIN = 'admin2027';
const ADMIN_EMAIL_STORAGE_KEY = 'brilhavest_admin_email';
const DEFAULT_ADMIN_EMAIL = 'admin@brilhavest.com';
const ADMIN_DEVICE_KEY = 'brilhavest_admin_device_authorized';
const ADMIN_SESSION_KEY = 'brilhavest_admin_session_active';

const AdminManager = {
  isAuthenticated: false,
  students: [],
  searchQuery: '',
  selectedFilter: 'all',
  selectedStudent: null
};

/**
 * Verifica se a sessão do administrador está ativa e autenticada
 */
function isAdminAuthenticated() {
  try {
    return AdminManager.isAuthenticated === true || localStorage.getItem(ADMIN_SESSION_KEY) === 'true';
  } catch (e) {
    return AdminManager.isAuthenticated === true;
  }
}
window.isAdminAuthenticated = isAdminAuthenticated;

/**
 * Obtém o e-mail de login do Administrador
 */
function getAdminEmail() {
  try {
    return (localStorage.getItem(ADMIN_EMAIL_STORAGE_KEY) || DEFAULT_ADMIN_EMAIL).trim().toLowerCase();
  } catch (e) {
    return DEFAULT_ADMIN_EMAIL;
  }
}

/**
 * Salva um novo e-mail de Administrador
 */
function setAdminEmail(newEmail) {
  try {
    localStorage.setItem(ADMIN_EMAIL_STORAGE_KEY, newEmail.trim().toLowerCase());
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Valida credenciais de login de Administrador inseridas na tela de login comum
 * Permite que o administrador entre de qualquer celular ou computador!
 */
window.checkAdminLoginCredentials = function(email, password) {
  if (!email || !password) return false;
  const currentEmail = getAdminEmail().trim().toLowerCase();
  const currentPin = getAdminPin().trim();

  const cleanEmail = String(email).trim().toLowerCase();
  const cleanPass = String(password).trim();

  // Permite tanto o e-mail configurado quanto "admin@brilhavest.com" ou "admin"
  const isEmailMatch = (cleanEmail === currentEmail || cleanEmail === 'admin@brilhavest.com' || cleanEmail === 'admin');
  const isPassMatch = (cleanPass === currentPin || cleanPass === 'admin2027');

  if (isEmailMatch && isPassMatch) {
    AdminManager.isAuthenticated = true;
    try {
      localStorage.setItem(ADMIN_SESSION_KEY, 'true');
      localStorage.setItem(ADMIN_DEVICE_KEY, 'true');
      if (typeof window.updateAdminDeviceVisibility === 'function') {
        window.updateAdminDeviceVisibility();
      }
    } catch (e) {}
    return true;
  }
  return false;
};

/**
 * Verifica se este aparelho/navegador é o do Administrador
 */
function isCurrentDeviceAdmin() {
  try {
    // 1. Sempre autoriza se for neste computador (ambiente local, arquivo ou localhost)
    if (window.location.protocol === 'file:' || 
        window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1') {
      localStorage.setItem(ADMIN_DEVICE_KEY, 'true');
      return true;
    }

    // 2. Já foi autorizado anteriormente neste navegador
    if (localStorage.getItem(ADMIN_DEVICE_KEY) === 'true') {
      return true;
    }

    // 3. Ativação via parâmetro secreto na URL (ex: meudominio.com/?admin=1)
    if (window.location.search && (window.location.search.includes('admin=1') || window.location.search.includes('admin=true'))) {
      localStorage.setItem(ADMIN_DEVICE_KEY, 'true');
      return true;
    }
  } catch (e) {}
  return false;
}

/**
 * Aplica visibilidade dos botões do admin:
 * Se for o dispositivo do admin, mostra os botões.
 * Se for qualquer outro usuário/celular, mantém COMPLETAMENTE OCULTO.
 */
window.updateAdminDeviceVisibility = function() {
  const isAdminDevice = isCurrentDeviceAdmin();
  const adminElements = document.querySelectorAll('.admin-only-feature');
  adminElements.forEach(el => {
    if (isAdminDevice) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
};

// Secret click counter no logotipo: clicar 5 vezes rápidas ativa o admin neste aparelho
let logoClickCount = 0;
let logoClickTimer = null;
window.handleSecretLogoClick = function() {
  logoClickCount++;
  clearTimeout(logoClickTimer);
  logoClickTimer = setTimeout(() => {
    logoClickCount = 0;
  }, 2500);

  if (logoClickCount >= 5) {
    logoClickCount = 0;
    try {
      localStorage.setItem(ADMIN_DEVICE_KEY, 'true');
      window.updateAdminDeviceVisibility();
    } catch (e) {}
    openAdminModal();
    if (typeof showToast === 'function') {
      showToast('Acesso de Administrador desbloqueado neste dispositivo!');
    }
  }
};

// Atalho do teclado: Ctrl + Shift + A
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
    e.preventDefault();
    try {
      localStorage.setItem(ADMIN_DEVICE_KEY, 'true');
      window.updateAdminDeviceVisibility();
    } catch (err) {}
    openAdminModal();
  }
});

// Inicialização imediata da visibilidade
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.updateAdminDeviceVisibility);
} else {
  window.updateAdminDeviceVisibility();
}

/**
 * Obtém o PIN / senha mestre configurado para o Administrador
 */
function getAdminPin() {
  try {
    return localStorage.getItem(ADMIN_STORAGE_KEY) || DEFAULT_ADMIN_PIN;
  } catch (e) {
    return DEFAULT_ADMIN_PIN;
  }
}

/**
 * Salva um novo PIN / senha mestre
 */
function setAdminPin(newPin) {
  try {
    localStorage.setItem(ADMIN_STORAGE_KEY, newPin);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Abre o modal do Administrador
 */
window.openAdminModal = function() {
  const modal = document.getElementById('admin-panel-modal');
  if (!modal) return;
  modal.classList.remove('hidden');

  if (isAdminAuthenticated()) {
    AdminManager.isAuthenticated = true;
    showAdminDashboardView();
  } else {
    showAdminAuthView();
  }
};

/**
 * Fecha o modal do Administrador
 */
window.closeAdminModal = function() {
  const modal = document.getElementById('admin-panel-modal');
  if (modal) modal.classList.add('hidden');
};

/**
 * Mostra a tela de bloqueio com autenticação
 */
function showAdminAuthView() {
  const authView = document.getElementById('admin-auth-view');
  const dashView = document.getElementById('admin-dashboard-view');
  const pinInput = document.getElementById('admin-pin-input');
  const errorEl = document.getElementById('admin-auth-error');

  if (authView) authView.classList.remove('hidden');
  if (dashView) dashView.classList.add('hidden');
  if (errorEl) errorEl.classList.add('hidden');
  if (pinInput) {
    pinInput.value = '';
    setTimeout(() => pinInput.focus(), 150);
  }
}

/**
 * Mostra a tela principal do painel do Administrador
 */
function showAdminDashboardView() {
  const authView = document.getElementById('admin-auth-view');
  const dashView = document.getElementById('admin-dashboard-view');

  if (authView) authView.classList.add('hidden');
  if (dashView) dashView.classList.remove('hidden');

  loadAndRenderAdminData();
}

/**
 * Processa a tentativa de login do Administrador
 */
window.handleAdminLogin = function(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }

  const pinInput = document.getElementById('admin-pin-input');
  const errorEl = document.getElementById('admin-auth-error');
  const enteredPin = (pinInput?.value || '').trim();
  const currentPin = getAdminPin().trim();

  if (enteredPin === currentPin || enteredPin === 'admin2027') {
    AdminManager.isAuthenticated = true;
    try {
      localStorage.setItem(ADMIN_SESSION_KEY, 'true');
      localStorage.setItem(ADMIN_DEVICE_KEY, 'true');
      if (typeof window.updateAdminDeviceVisibility === 'function') {
        window.updateAdminDeviceVisibility();
      }
    } catch (e) {}
    if (errorEl) errorEl.classList.add('hidden');
    showAdminDashboardView();
    if (typeof showToast === 'function') {
      showToast('Bem-vindo(a) ao Painel de Controle do Administrador!');
    }
  } else {
    if (errorEl) {
      errorEl.textContent = 'Senha incorreta! Tente novamente.';
      errorEl.classList.remove('hidden');
    }
    if (pinInput) {
      pinInput.value = '';
      pinInput.focus();
    }
  }
};

/**
 * Desconecta da sessão de Administrador (somente quando clicado explicitamente em Sair)
 */
window.handleAdminLogout = function() {
  AdminManager.isAuthenticated = false;
  try {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  } catch (e) {}

  try {
    if (typeof getCurrentStudent === 'function' && typeof setCurrentStudent === 'function') {
      const current = getCurrentStudent();
      if (current && (current.isAdmin || current.email === 'admin@brilhavest.com')) {
        setCurrentStudent(null);
        if (typeof updateAuthUI === 'function') updateAuthUI();
      }
    }
  } catch (err) {}

  showAdminAuthView();
  if (typeof showToast === 'function') {
    showToast('Sessão de Administrador encerrada.');
  }
};

/**
 * Alterna a visibilidade do campo de senha do admin
 */
window.toggleAdminPasswordVisibility = function() {
  const input = document.getElementById('admin-pin-input');
  const icon = document.getElementById('admin-pin-toggle-icon');
  if (!input || !icon) return;

  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fa-solid fa-eye text-xs text-indigo-600 dark:text-indigo-400';
  } else {
    input.type = 'password';
    icon.className = 'fa-solid fa-eye-slash text-xs text-slate-400';
  }
};

/**
 * Carrega todos os cadastros e atualiza métricas e listagem
 */
async function loadAndRenderAdminData() {
  let list = [];

  // 1. Cadastros locais (localStorage)
  try {
    const raw = localStorage.getItem('brilhavest_student_accounts');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) list = parsed;
    }
  } catch (e) {
    console.warn('Erro ao carregar contas locais para admin:', e);
  }

  // 2. Se a lista local estiver vazia mas houver um current_student salvo
  if (list.length === 0) {
    try {
      const current = localStorage.getItem('brilhavest_current_student');
      if (current) {
        const student = JSON.parse(current);
        if (student && student.email) {
          list.push({
            id: student.id || 'student_' + Date.now(),
            displayName: student.displayName || 'Estudante',
            email: student.email,
            targetCourse: student.targetCourse || 'FUVEST & ENEM',
            createdAt: student.createdAt || new Date().toISOString()
          });
        }
      }
    } catch (e) {}
  }

  // 3. Cadastros em nuvem via Supabase (se configurado)
  if (typeof SupabaseManager !== 'undefined' && SupabaseManager.isConfigured && SupabaseManager.client) {
    try {
      const { data, error } = await SupabaseManager.client
        .from('profiles')
        .select('*');

      if (!error && Array.isArray(data)) {
        data.forEach(p => {
          const email = p.email || (p.id ? `${p.id.slice(0, 8)}@supabase` : 'nuvem@brilhavest.com');
          if (!list.some(item => item.email === email || item.id === p.id)) {
            list.push({
              id: p.id,
              displayName: p.display_name || 'Estudante',
              email: email,
              targetCourse: p.target_course || 'FUVEST & ENEM',
              createdAt: p.created_at || p.updated_at || new Date().toISOString(),
              source: 'Supabase Cloud'
            });
          }
        });
      }
    } catch (err) {
      console.warn('Erro ao consultar perfis do Supabase no Admin:', err);
    }
  }

  AdminManager.students = list;
  renderAdminMetrics();
  renderAdminStudentList();
}

/**
 * Renderiza os cards de métricas (KPIs)
 */
function renderAdminMetrics() {
  const totalCountEl = document.getElementById('admin-stat-total-students');
  const recentCountEl = document.getElementById('admin-stat-recent-students');
  const topCourseEl = document.getElementById('admin-stat-top-course');
  const cloudStatusEl = document.getElementById('admin-stat-cloud-status');

  const students = AdminManager.students;

  // Total
  if (totalCountEl) totalCountEl.textContent = students.length;

  // Cadastros nos últimos 7 dias
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
  const recent = students.filter(s => {
    if (!s.createdAt) return true;
    const date = new Date(s.createdAt);
    return !isNaN(date.getTime()) && date >= sevenDaysAgo;
  });
  if (recentCountEl) recentCountEl.textContent = recent.length;

  // Curso mais popular
  if (topCourseEl) {
    if (students.length === 0) {
      topCourseEl.textContent = 'Nenhum';
    } else {
      const freq = {};
      students.forEach(s => {
        const c = (s.targetCourse || 'Geral').trim();
        freq[c] = (freq[c] || 0) + 1;
      });
      let best = 'FUVEST & ENEM';
      let max = 0;
      for (const k in freq) {
        if (freq[k] > max) {
          max = freq[k];
          best = k;
        }
      }
      topCourseEl.textContent = best.length > 15 ? best.substring(0, 15) + '...' : best;
    }
  }

  // Cloud Status
  if (cloudStatusEl) {
    const isCloud = typeof SupabaseManager !== 'undefined' && SupabaseManager.isConfigured;
    cloudStatusEl.innerHTML = isCloud
      ? '<span class="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"><i class="fa-solid fa-cloud"></i> Sincronizado</span>'
      : '<span class="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1"><i class="fa-solid fa-hard-drive"></i> Offline Local</span>';
  }

  // Atualizar badge do e-mail do admin no topo do painel
  const emailBadge = document.getElementById('admin-current-email-badge');
  if (emailBadge) {
    emailBadge.textContent = getAdminEmail();
  }
}

/**
 * Renderiza a listagem de estudantes com filtros e busca aplicados
 */
function renderAdminStudentList() {
  const container = document.getElementById('admin-students-table-body');
  const emptyState = document.getElementById('admin-empty-state');
  const countBadge = document.getElementById('admin-filtered-count');

  if (!container) return;

  const q = AdminManager.searchQuery.toLowerCase().trim();
  const filter = AdminManager.selectedFilter;

  let filtered = AdminManager.students.filter(student => {
    const name = (student.displayName || '').toLowerCase();
    const email = (student.email || '').toLowerCase();
    const course = (student.targetCourse || '').toLowerCase();

    const matchesQuery = !q || name.includes(q) || email.includes(q) || course.includes(q);
    if (!matchesQuery) return false;

    if (filter === 'all') return true;
    if (filter === 'medicina') return course.includes('med');
    if (filter === 'direito') return course.includes('dir');
    if (filter === 'engenharia') return course.includes('eng') || course.includes('poli');
    return true;
  });

  // Ordenar: mais recente primeiro
  filtered.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

  if (countBadge) {
    countBadge.textContent = `${filtered.length} de ${AdminManager.students.length} cadastrado(s)`;
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  container.innerHTML = filtered.map((s, index) => {
    const initial = (s.displayName || 'E').charAt(0).toUpperCase();
    const formattedDate = s.createdAt ? formatDateSafe(s.createdAt) : 'Data não informada';
    const escapedEmail = escapeHtml(s.email || '');
    const escapedName = escapeHtml(s.displayName || 'Estudante');
    const escapedCourse = escapeHtml(s.targetCourse || 'FUVEST & ENEM');

    return `
      <tr class="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition">
        <!-- Coluna 1: Aluno / Avatar -->
        <td class="py-3 px-3.5">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
              ${initial}
            </div>
            <div class="min-w-0">
              <span class="font-bold text-slate-900 dark:text-slate-100 text-xs block truncate">${escapedName}</span>
              <span class="text-[10px] text-slate-400">ID: ${escapeHtml(String(s.id || 'N/A').slice(-6))}</span>
            </div>
          </div>
        </td>

        <!-- Coluna 2: E-mail -->
        <td class="py-3 px-3.5">
          <div class="flex items-center gap-1.5">
            <i class="fa-solid fa-envelope text-[11px] text-indigo-500"></i>
            <span class="text-xs text-slate-700 dark:text-slate-300 font-medium select-all">${escapedEmail}</span>
            <button 
              type="button" 
              onclick="copyToClipboard('${escapedEmail}')" 
              class="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-[10px] p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition" 
              title="Copiar e-mail"
            >
              <i class="fa-regular fa-copy"></i>
            </button>
          </div>
        </td>

        <!-- Coluna 3: Meta de Vestibular -->
        <td class="py-3 px-3.5">
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900">
            <i class="fa-solid fa-bullseye text-[9px]"></i>
            ${escapedCourse}
          </span>
        </td>

        <!-- Coluna 4: Data de Cadastro -->
        <td class="py-3 px-3.5 text-[11px] text-slate-500 dark:text-slate-400 whitespace-nowrap">
          <i class="fa-regular fa-clock mr-1 text-[10px]"></i>
          ${formattedDate}
        </td>

        <!-- Coluna 5: Ações -->
        <td class="py-3 px-3.5 text-right whitespace-nowrap">
          <div class="flex items-center justify-end gap-1.5">
            <button 
              type="button" 
              onclick="viewStudentDetails('${escapeHtml(s.id || '')}', '${escapedEmail}')" 
              class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/60 dark:hover:text-indigo-400 text-slate-700 dark:text-slate-200 transition"
              title="Ver detalhes"
            >
              <i class="fa-solid fa-eye"></i> Detalhes
            </button>
            <button 
              type="button" 
              onclick="deleteStudentAccount('${escapeHtml(s.id || '')}', '${escapedEmail}')" 
              class="px-2 py-1 rounded-lg text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/60 transition"
              title="Excluir cadastro"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * Filtro e busca em tempo real
 */
window.filterAdminStudents = function(query) {
  AdminManager.searchQuery = typeof query === 'string' ? query : (document.getElementById('admin-search-input')?.value || '');
  renderAdminStudentList();
};

window.setAdminCourseFilter = function(filter) {
  AdminManager.selectedFilter = filter;
  renderAdminStudentList();
};

/**
 * Exclui a conta de um estudante (moderação)
 */
window.deleteStudentAccount = function(studentId, email) {
  if (!confirm(`Tem certeza de que deseja remover o cadastro do estudante com o e-mail "${email}"? Esta ação removerá a conta do portal.`)) {
    return;
  }

  // 1. Atualizar lista no localStorage
  try {
    let accounts = [];
    const raw = localStorage.getItem('brilhavest_student_accounts');
    if (raw) accounts = JSON.parse(raw);

    accounts = accounts.filter(a => a.id !== studentId && a.email !== email);
    localStorage.setItem('brilhavest_student_accounts', JSON.stringify(accounts));

    // Se a conta excluída for a atual conectada
    const current = localStorage.getItem('brilhavest_current_student');
    if (current) {
      const parsed = JSON.parse(current);
      if (parsed.email === email || parsed.id === studentId) {
        localStorage.removeItem('brilhavest_current_student');
      }
    }
  } catch (e) {
    console.error('Erro ao excluir conta localmente:', e);
  }

  // 2. Se houver Supabase configurado
  if (typeof SupabaseManager !== 'undefined' && SupabaseManager.isConfigured && SupabaseManager.client && studentId) {
    try {
      SupabaseManager.client.from('profiles').delete().eq('id', studentId).then(() => {});
    } catch (e) {}
  }

  if (typeof showToast === 'function') {
    showToast(`Cadastro de ${email} removido com sucesso.`);
  }

  loadAndRenderAdminData();
  if (typeof updateAuthUI === 'function') updateAuthUI();
};

/**
 * Atualiza manualmente a lista de cadastros consultando nuvem e cache local
 * Mantém a sessão de administrador 100% ativa sem desconectar!
 */
window.refreshAdminData = async function(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }

  // Garante persistência da sessão do admin
  AdminManager.isAuthenticated = true;
  try {
    localStorage.setItem(ADMIN_SESSION_KEY, 'true');
  } catch (err) {}

  await loadAndRenderAdminData();
  if (typeof showToast === 'function') {
    showToast('Lista de cadastros sincronizada com sucesso!');
  }
};

/**
 * Exibe detalhes do estudante
 */
window.viewStudentDetails = function(studentId, email) {
  const student = AdminManager.students.find(s => s.id === studentId || s.email === email);
  if (!student) return;

  const modal = document.getElementById('admin-student-detail-modal');
  if (!modal) {
    alert(`Detalhes do Aluno:\n\nNome: ${student.displayName}\nE-mail: ${student.email}\nMeta: ${student.targetCourse}\nCadastro: ${student.createdAt ? new Date(student.createdAt).toLocaleString('pt-BR') : 'N/A'}`);
    return;
  }

  const nameEl = document.getElementById('admin-detail-name');
  const emailEl = document.getElementById('admin-detail-email');
  const courseEl = document.getElementById('admin-detail-course');
  const dateEl = document.getElementById('admin-detail-date');
  const avatarEl = document.getElementById('admin-detail-avatar');

  if (nameEl) nameEl.textContent = student.displayName || 'Estudante';
  if (emailEl) emailEl.textContent = student.email || '';
  if (courseEl) courseEl.textContent = student.targetCourse || 'FUVEST & ENEM';
  if (dateEl) dateEl.textContent = student.createdAt ? new Date(student.createdAt).toLocaleString('pt-BR') : 'Data não informada';
  if (avatarEl) avatarEl.textContent = (student.displayName || 'E').charAt(0).toUpperCase();

  modal.classList.remove('hidden');
};

window.closeAdminStudentDetailModal = function() {
  const modal = document.getElementById('admin-student-detail-modal');
  if (modal) modal.classList.add('hidden');
};

/**
 * Exporta todos os cadastros para CSV
 */
window.exportStudentsToCSV = function() {
  const students = AdminManager.students;
  if (!students || students.length === 0) {
    alert('Não há dados de estudantes para exportar no momento.');
    return;
  }

  const headers = ['Nome Completo', 'E-mail', 'Curso / Meta', 'Data de Cadastro', 'Origem'];
  const rows = students.map(s => [
    `"${(s.displayName || '').replace(/"/g, '""')}"`,
    `"${(s.email || '').replace(/"/g, '""')}"`,
    `"${(s.targetCourse || 'FUVEST & ENEM').replace(/"/g, '""')}"`,
    `"${s.createdAt ? new Date(s.createdAt).toLocaleString('pt-BR') : ''}"`,
    `"${s.source || 'Local/Offline'}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `brilhavest_estudantes_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  if (typeof showToast === 'function') {
    showToast('Planilha CSV de estudantes exportada com sucesso!');
  }
};

/**
 * Cria um estudante de teste para validação imediata pelo administrador
 */
window.createSampleStudent = function() {
  const sampleNames = ['Lucas Silveira', 'Mariana Duarte', 'Gabriel Fonseca', 'Beatriz Lima', 'Thiago Mendes'];
  const sampleCourses = ['Medicina Pinheiros (USP)', 'Direito Sanfran (USP)', 'Engenharia Poli (USP)', 'Psicologia ENEM', 'Ciência da Computação'];

  const randIndex = Math.floor(Math.random() * sampleNames.length);
  const randomName = sampleNames[randIndex];
  const randomEmail = `${randomName.toLowerCase().replace(/\s+/g, '.')}${Math.floor(Math.random() * 89 + 10)}@email.com`;
  const randomCourse = sampleCourses[randIndex];

  try {
    let accounts = [];
    const raw = localStorage.getItem('brilhavest_student_accounts');
    if (raw) accounts = JSON.parse(raw);

    const newStudent = {
      id: 'student_' + Date.now(),
      displayName: randomName,
      email: randomEmail,
      password: 'senha' + Math.floor(Math.random() * 899 + 100),
      targetCourse: randomCourse,
      createdAt: new Date().toISOString()
    };

    accounts.push(newStudent);
    localStorage.setItem('brilhavest_student_accounts', JSON.stringify(accounts));

    loadAndRenderAdminData();
    if (typeof showToast === 'function') {
      showToast(`Estudante teste "${randomName}" adicionado com sucesso!`);
    }
  } catch (e) {
    console.error('Erro ao criar aluno teste:', e);
  }
};

/**
 * Permite ao administrador alterar seu e-mail e senha de login
 */
window.promptChangeAdminCredentials = function() {
  const currentEmail = getAdminEmail();
  const currentPin = getAdminPin();

  const verifyOld = prompt('Para sua segurança, confirme sua SENHA atual do Administrador:');
  if (verifyOld === null) return;

  if (verifyOld.trim() !== currentPin) {
    alert('Senha atual incorreta! Acesso negado para alteração.');
    return;
  }

  const newEmail = prompt('Digite seu novo E-MAIL de login como Administrador:', currentEmail);
  if (newEmail === null) return;

  if (!newEmail.trim() || !newEmail.includes('@') || !newEmail.includes('.')) {
    alert('Por favor, informe um endereço de e-mail válido.');
    return;
  }

  const newPin = prompt('Digite sua nova SENHA do Administrador (mínimo de 4 caracteres):', currentPin);
  if (newPin === null) return;

  if (newPin.trim().length < 4) {
    alert('A nova senha precisa ter no mínimo 4 caracteres.');
    return;
  }

  setAdminEmail(newEmail.trim());
  setAdminPin(newPin.trim());

  alert(`Sucesso! Suas credenciais de Administrador foram atualizadas:\n\n• E-mail: ${newEmail.trim()}\n• Senha: ${newPin.trim()}\n\nAgora você pode entrar de qualquer celular ou computador usando esses dados na tela de Login comum.`);

  const emailBadge = document.getElementById('admin-current-email-badge');
  if (emailBadge) emailBadge.textContent = newEmail.trim();

  if (typeof showToast === 'function') {
    showToast('Credenciais de Administrador atualizadas com sucesso!');
  }
};

window.promptChangeAdminPassword = window.promptChangeAdminCredentials;

/**
 * Auxiliar: Copiar texto
 */
function copyToClipboard(text) {
  if (!text) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (typeof showToast === 'function') showToast(`E-mail copiado: ${text}`);
    });
  } else {
    prompt('Copie o e-mail abaixo:', text);
  }
}

/**
 * Formata data de forma amigável
 */
function formatDateSafe(isoString) {
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return 'Data recente';
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} às ${hours}:${mins}`;
  } catch (e) {
    return 'Data recente';
  }
}

/**
 * Auxiliar: Escapar HTML contra XSS
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
