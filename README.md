# 🎓 BrilhaVest - Plataforma Completa de Estudos FUVEST & ENEM (Atualizada)

Uma plataforma web moderna, rápida e 100% autônoma, projetada para vestibulandos que buscam aprovação na **USP (FUVEST)** e no **ENEM**.

---

## 🚀 Como Abrir e Usar o Site

**Não é necessário instalar nenhum programa (nem Node.js, nem Python).**
O site foi construído para funcionar direto em qualquer navegador moderno (Google Chrome, Microsoft Edge, Firefox, Brave, Safari):

1. Vá até a pasta do projeto: `c:\Users\anafr\OneDrive\Documents\Brilha mais\Novo Projeto`
2. Dê um **duplo clique no arquivo `index.html`** (ou clique com botão direito > Abrir com > Seu navegador favorito).
3. Pronto! O site já abre com todos os recursos, dados e ferramentas funcionando 100%.

---

## 🆕 O Que Há de Novo Nesta Atualização?

### 1. 📚 Leituras Obrigatórias FUVEST 2027 (Lista Histórica Completa)
Substituição integral das obras para o ciclo da FUVEST 2027, composto exclusivamente por escritoras mulheres da Língua Portuguesa:
1. *Opúsculo Humanitário* (1853) – Nísia Floresta
2. *Nebulosas* (1872) – Narcisa Amália
3. *Memórias de Martha* (1899) – Julia Lopes de Almeida
4. *Caminho de Pedras* (1937) – Rachel de Queiroz
5. *A Paixão segundo G. H.* (1964) – Clarice Lispector
6. *Geografia* (1967) – Sophia de Mello Breyner Andresen
7. *Balada de Amor ao Vento* (1990) – Paulina Chiziane
8. *Canção para Ninar Menino Grande* (2018) – Conceição Evaristo
9. *A Visão das Plantas* (2019) – Djaimilia Pereira de Almeida
*Cada obra contém enredo completo, personagens, eixos temáticos, dicas de banca da FUVEST e citações célebres.*

### 2. ✍️ Temas Contemporâneos de Redação (2024, 2025, 2026/2027)
- Inclusão dos temas mais recentes e propostas de debate atualizadas (crise climática, transição energética justa, preservação da biodiversidade, hiperaceleração humana e regulação de apostas digitais/IA).
- Novos repertórios contemporâneos: **Ailton Krenak** (*Ideias para adiar o fim do mundo*), **Byung-Chul Han** (*Sociedade do Cansaço*), **Chimamanda Ngozi Adichie** (*O perigo de uma história única*) e **Hannah Arendt** (*A Banalidade do Mal*).

### 3. 🎯 Raio-X Ranqueado de Recorrência (ENEM vs FUVEST Separados)
- Abas de alternância direta:
  - **🏆 Top Ranking ENEM**: tópicos ordenados por incidência na prova do ENEM (1º ao 10º lugar), com dicas voltadas para a TRI e questões contextualizadas.
  - **🏛️ Top Ranking FUVEST**: tópicos ordenados pela exigência da 1ª e 2ª Fase da FUVEST, com foco em demonstrações e profundidade teórica.
  - **Visão por Disciplinas**: organização completa por matéria com checklist de Teoria, Exercícios e Revisão.

### 4. 📝 Banco de Questões Expandido
- Ampliado para mais de 30 questões comentadas com resoluções pedagógicas passo a passo.
- Inclusão de questões sobre as novas obras da FUVEST 2027, eletrodinâmica, ondulatória com efeito Doppler, cálculos estequiométricos com pureza/rendimento, equilíbrio químico com Le Chatelier, e questões de sociologia contemporânea.

### 5. ⏳ Contagem Regressiva Atualizada
- **ENEM**: contagem para os dias 8 e 15 de Novembro (1º dia de Linguagens, Humanas e Redação; 2º dia de Matemática e Natureza).
- **FUVEST 2ª Fase**: contagem para os dias 6 e 7 de Dezembro (provas discursivas específicas).

### 6. 🌙 Modo Escuro (Dark Mode) Integrado
- Botão no cabeçalho para alternar entre modo Claro e Escuro a qualquer momento.
- Paleta noturna elegante, descansando os olhos durante longas horas de estudo.
- Persistência automática no `localStorage`.

### 7. ⏱️ Simulado com Cronômetro Customizável
- Três modos de tempo para o vestibulando escolher:
  - **Sugerido Oficial**: 3 minutos por questão.
  - **Personalizado**: o estudante digita livremente quantos minutos quer (com botões rápidos de 15m, 30m, 45m, 60m).
  - **Sem Limite**: modo treino livre com cronômetro progressivo, sem pressão de tempo.

---

## 💾 Persistência Automática de Dados (LocalStorage)

Todo o seu progresso fica salvo automaticamente no seu computador:
- Histórico de acertos e questões respondidas
- Obras literárias marcadas como lidas
- Checklist de Teoria, Exercícios e Revisão
- Rascunhos de redação digitados
- Flashcards dominados e criados por você
- Tema visual (claro/escuro)

---

## 📁 Estrutura de Arquivos

```
Novo Projeto/
├── index.html              # Interface visual completa e estrutura da aplicação
├── README.md               # Documentação e instruções de uso
├── css/
│   └── styles.css          # Animações 3D de flip, tipografia e modo escuro
└── js/
    ├── app.js              # Lógica interativa, cronômetro, simulados, dark mode e filtros
    └── data/
        ├── books.js        # Guia completo das 9 leituras da FUVEST 2027
        ├── checklist.js    # Raio-X ranqueado para ENEM e FUVEST
        ├── flashcards.js   # Baralho com fórmulas, obras 2027 e conceitos
        ├── questions.js    # Banco ampliado com resoluções passo a passo
        └── redacao.js      # Modelos, temas atuais e repertórios contemporâneos
```
