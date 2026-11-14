-- =============================================================================
-- BRILHAVEST (FUVEST & ENEM) - ESTRUTURA DE BANCO DE DADOS SUPABASE (PostgreSQL)
-- =============================================================================
-- Instruções:
-- 1. Acesse o painel do seu projeto no Supabase (https://supabase.com/dashboard)
-- 2. No menu lateral, clique em "SQL Editor" -> "New query"
-- 3. Cole todo este script e clique em "Run" (ou Ctrl+Enter)
-- =============================================================================

-- Extensão para geração de UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- -----------------------------------------------------------------------------
-- 1. TABELA: profiles (Perfil e Preferências do Estudante - 1:1 com auth.users)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  target_exam TEXT NOT NULL DEFAULT 'ambos' CHECK (target_exam IN ('enem', 'fuvest', 'ambos')),
  target_course TEXT,
  theme_preference TEXT NOT NULL DEFAULT 'light' CHECK (theme_preference IN ('light', 'dark')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Trigger para criar automaticamente o perfil quando um usuário se cadastrar no Supabase Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, target_course)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'target_course', NULL)
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- -----------------------------------------------------------------------------
-- 2. TABELA: question_attempts (Histórico Granular de Questões Resolvidas)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.question_attempts (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  discipline TEXT NOT NULL,
  selected_option INTEGER,
  is_correct BOOLEAN NOT NULL,
  mode TEXT NOT NULL DEFAULT 'practice' CHECK (mode IN ('practice', 'exam')),
  answered_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_question_attempts_user_date 
  ON public.question_attempts (user_id, answered_at DESC);

CREATE INDEX IF NOT EXISTS idx_question_attempts_user_discipline 
  ON public.question_attempts (user_id, discipline);

-- -----------------------------------------------------------------------------
-- 3. TABELA: exam_sessions (Histórico de Simulados Concluídos)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.exam_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  exam_type TEXT NOT NULL,
  score INTEGER NOT NULL CHECK (score >= 0),
  total_questions INTEGER NOT NULL CHECK (total_questions > 0),
  time_spent_seconds INTEGER NOT NULL DEFAULT 0,
  answers_snapshot JSONB DEFAULT '{}'::jsonb,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_exam_sessions_user_date 
  ON public.exam_sessions (user_id, completed_at DESC);

-- -----------------------------------------------------------------------------
-- 4. TABELA: checklist_progress (Progresso no Raio-X Ranqueado)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.checklist_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL,
  theory_completed BOOLEAN NOT NULL DEFAULT false,
  exercises_completed BOOLEAN NOT NULL DEFAULT false,
  review_completed BOOLEAN NOT NULL DEFAULT false,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_checklist_user_topic UNIQUE (user_id, topic_id)
);

CREATE INDEX IF NOT EXISTS idx_checklist_progress_user 
  ON public.checklist_progress (user_id);

-- -----------------------------------------------------------------------------
-- 5. TABELA: book_progress (Leituras Obrigatórias FUVEST 2027)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.book_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  book_id TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT false,
  personal_notes TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_book_user UNIQUE (user_id, book_id)
);

CREATE INDEX IF NOT EXISTS idx_book_progress_user 
  ON public.book_progress (user_id);

-- -----------------------------------------------------------------------------
-- 6. TABELA: custom_flashcards (Flashcards Criados pelo Estudante)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.custom_flashcards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  card_key TEXT NOT NULL,
  front TEXT NOT NULL,
  back TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Geral',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_custom_flashcard_key UNIQUE (user_id, card_key)
);

CREATE INDEX IF NOT EXISTS idx_custom_flashcards_user 
  ON public.custom_flashcards (user_id);

-- -----------------------------------------------------------------------------
-- 7. TABELA: flashcard_progress (Domínio de Flashcards - "Já Dominei")
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.flashcard_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  card_id TEXT NOT NULL,
  is_learned BOOLEAN NOT NULL DEFAULT true,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_flashcard_user_card UNIQUE (user_id, card_id)
);

CREATE INDEX IF NOT EXISTS idx_flashcard_progress_user 
  ON public.flashcard_progress (user_id);

-- -----------------------------------------------------------------------------
-- 8. TABELA: essays (Redações e Rascunhos do Laboratório)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.essays (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  draft_key TEXT NOT NULL DEFAULT 'active_draft',
  title TEXT DEFAULT '',
  theme_title TEXT DEFAULT '',
  exam_type TEXT NOT NULL DEFAULT 'ENEM' CHECK (exam_type IN ('ENEM', 'FUVEST')),
  content TEXT NOT NULL DEFAULT '',
  word_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'submitted')),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_essay_user_draft_key UNIQUE (user_id, draft_key)
);

CREATE INDEX IF NOT EXISTS idx_essays_user 
  ON public.essays (user_id, updated_at DESC);

-- =============================================================================
-- SEGURANÇA: ROW LEVEL SECURITY (RLS) EM TODAS AS TABELAS
-- Garante que cada estudante acesse e modifique exclusivamente seus próprios dados
-- =============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.checklist_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.book_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.custom_flashcards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.flashcard_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.essays ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles
DROP POLICY IF EXISTS "Usuários gerenciam próprio perfil" ON public.profiles;
CREATE POLICY "Usuários gerenciam próprio perfil"
  ON public.profiles FOR ALL
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Políticas para question_attempts
DROP POLICY IF EXISTS "Usuários gerenciam próprias tentativas de questões" ON public.question_attempts;
CREATE POLICY "Usuários gerenciam próprias tentativas de questões"
  ON public.question_attempts FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Políticas para exam_sessions
DROP POLICY IF EXISTS "Usuários gerenciam próprios simulados" ON public.exam_sessions;
CREATE POLICY "Usuários gerenciam próprios simulados"
  ON public.exam_sessions FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Políticas para checklist_progress
DROP POLICY IF EXISTS "Usuários gerenciam próprio checklist" ON public.checklist_progress;
CREATE POLICY "Usuários gerenciam próprio checklist"
  ON public.checklist_progress FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Políticas para book_progress
DROP POLICY IF EXISTS "Usuários gerenciam próprio progresso de leitura" ON public.book_progress;
CREATE POLICY "Usuários gerenciam próprio progresso de leitura"
  ON public.book_progress FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Políticas para custom_flashcards
DROP POLICY IF EXISTS "Usuários gerenciam próprios flashcards customizados" ON public.custom_flashcards;
CREATE POLICY "Usuários gerenciam próprios flashcards customizados"
  ON public.custom_flashcards FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Políticas para flashcard_progress
DROP POLICY IF EXISTS "Usuários gerenciam próprio progresso de flashcards" ON public.flashcard_progress;
CREATE POLICY "Usuários gerenciam próprio progresso de flashcards"
  ON public.flashcard_progress FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Políticas para essays
DROP POLICY IF EXISTS "Usuários gerenciam próprias redações" ON public.essays;
CREATE POLICY "Usuários gerenciam próprias redações"
  ON public.essays FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
