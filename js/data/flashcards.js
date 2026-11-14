/**
 * Baralhos de Flashcards Inteligentes para Vestibular
 * Fórmulas, macetes, conceitos fundamentais, obras da FUVEST 2027 e repertórios.
 */
const initialFlashcards = [
  // FÍSICA
  {
    id: "fc_1",
    category: "Física",
    front: "Qual é a fórmula da 1ª Lei de Ohm e as fórmulas da Potência Elétrica dissipada por efeito Joule?",
    back: "• 1ª Lei de Ohm: U = R · i (ou V = R · i)\n• Potência Elétrica:\n  P = U · i\n  P = R · i²\n  P = U² / R\n(Macete: 'Piu', 'Pri²' e 'Puru')",
    difficulty: "Fácil"
  },
  {
    id: "fc_2",
    category: "Física",
    front: "Qual é a Equação Fundamental da Ondulatória e o que acontece na Refração?",
    back: "• v = λ · f (Velocidade = comprimento de onda × frequência)\n• Na REFRAÇÃO de uma onda: a FREQUÊNCIA (f) NUNCA se altera (depende apenas da fonte geradora).\nSe v muda no novo meio, λ muda na mesma proporção.",
    difficulty: "Médio"
  },
  {
    id: "fc_3",
    category: "Física",
    front: "Como calcular a Energia Cinética e a Energia Potencial Gravitacional?",
    back: "• Energia Cinética: Ec = (m · v²) / 2\n• Energia Potencial Gravitacional: Epg = m · g · h\n• Energia Mecânica Total: Em = Ec + Ep",
    difficulty: "Fácil"
  },
  {
    id: "fc_4",
    category: "Física",
    front: "Qual a diferença entre Calor Sensível e Calor Latente?",
    back: "• Calor Sensível: Altera a temperatura sem mudar o estado físico.\n  Q = m · c · ΔT ('Que macete')\n• Calor Latente: Muda o estado físico com temperatura constante.\n  Q = m · L ('Que moleza')",
    difficulty: "Fácil"
  },

  // MATEMÁTICA
  {
    id: "fc_5",
    category: "Matemática",
    front: "Quais são as coordenadas do Vértice da Parábola y = ax² + bx + c?",
    back: "• X do vértice: X_v = -b / (2a)\n• Y do vértice: Y_v = -Δ / (4a), onde Δ = b² - 4ac.\n(Dica ENEM: Y_v indica o valor MÁXIMO ou MÍNIMO atingido pela função, enquanto X_v indica o ponto em que isso ocorre)",
    difficulty: "Médio"
  },
  {
    id: "fc_6",
    category: "Matemática",
    front: "Fórmulas de Área e Volume da Esfera e Cilindro:",
    back: "• Cilindro:\n  Área da base = π · r²\n  Volume = π · r² · h\n• Esfera:\n  Área da superfície = 4 · π · r²\n  Volume = (4/3) · π · r³",
    difficulty: "Médio"
  },
  {
    id: "fc_7",
    category: "Matemática",
    front: "O que é Escala cartográfica e como converter áreas e volumes?",
    back: "• Escala Linear: E = D_mapa / D_real\n• Escala de Área: E² = Área_mapa / Área_real\n• Escala de Volume: E³ = Volume_mapa / Volume_real\n(Muito cobrado no ENEM!)",
    difficulty: "Difícil"
  },

  // QUÍMICA
  {
    id: "fc_8",
    category: "Química",
    front: "Como identificar as principais funções oxigenadas: Álcool, Enol, Fenol, Aldeído, Cetona e Éster?",
    back: "• Álcool: -OH ligado a carbono saturado (sp³)\n• Enol: -OH ligado a carbono com dupla ligação\n• Fenol: -OH ligado diretamente a anel aromático benzeno\n• Aldeído: C=O na ponta da cadeia (-CHO)\n• Cetona: C=O entre dois carbonos (R-CO-R')\n• Éster: R-COO-R' (derivado de ácido carboxílico + álcool)",
    difficulty: "Médio"
  },
  {
    id: "fc_9",
    category: "Química",
    front: "Qual o Princípio de Le Chatelier e o efeito de temperatura e pressão no equilíbrio?",
    back: "Quando uma perturbação externa atua sobre um sistema em equilíbrio, ele se desloca para atenuar essa perturbação.\n• Aumento de Temperatura: desloca para o lado ENDOTÉRMICO (+ΔH).\n• Aumento de Pressão: desloca para o lado de MENOR volume gasoso (menos mols de gás).",
    difficulty: "Médio"
  },

  // BIOLOGIA
  {
    id: "fc_10",
    category: "Biologia",
    front: "Diferença crucial entre Vacina e Soro na imunologia:",
    back: "• VACINA (Prevenção / Ativa):\n  Contém ANTÍGENOS atenuados/inativados. O próprio organismo da pessoa produz anticorpos e células de memória duradoura.\n• SORO (Tratamento emergencial / Passiva):\n  Contém ANTICORPOS prontos (ex: soro antiofídico). Ação imediata, mas temporária (não gera memória).",
    difficulty: "Fácil"
  },
  {
    id: "fc_11",
    category: "Biologia",
    front: "O que é Eutrofização de ambientes aquáticos e suas etapas?",
    back: "1. Excesso de nutrientes (fósforo e nitrogênio de esgoto/adubo) na água.\n2. Proliferação excessiva de algas na superfície (bloqueio da luz solar).\n3. Morte da vegetação aquática de fundo por falta de fotossíntese.\n4. Proliferação de bactérias decompositoras aeróbias que consomem todo o O2 dissolvido.\n5. Morte em massa de peixes por asfixia (anóxia).",
    difficulty: "Médio"
  },

  // LITERATURA FUVEST 2027
  {
    id: "fc_12",
    category: "Literatura",
    front: "Qual a tese central de 'Opúsculo Humanitário' (Nísia Floresta) na FUVEST 2027?",
    back: "A ignorância em que a mulher é mantida pelo patriarcado é a causa primária do atraso moral e social do Brasil.\nNísia defende a educação científica, moral e crítica para as mulheres, em contraposição à pedagogia fútil e ornamental do Império.",
    difficulty: "Médio"
  },
  {
    id: "fc_13",
    category: "Literatura",
    front: "O que simboliza a barata e a epifania de G. H. em 'A Paixão segundo G. H.' (Clarice Lispector)?",
    back: "A barata simboliza a matéria viva primordial, atemporal e neutra (além do bem e do mal).\nAo esmagar o inseto no quarto limpo de Janair e prová-lo, G. H. experimenta a despersonalização: perde suas máscaras e certezas burguesas, dissolvendo seu ego civil na vida cósmica.",
    difficulty: "Difícil"
  },
  {
    id: "fc_14",
    category: "Literatura",
    front: "O que significa 'Escrevivência' em Conceição Evaristo ('Canção para Ninar Menino Grande')?",
    back: "Conceito criado pela autora que funde 'escrever' + 'viver' + 'se ver'.\nÉ a literatura nascida das vivências, memórias, corpos e saberes ancestrais das mulheres negras brasileiras, desafiando a visão hegemônica colonial da casa-grande.",
    difficulty: "Médio"
  },
  {
    id: "fc_15",
    category: "Literatura",
    front: "Qual a ambiguidade central em 'A Visão das Plantas' (Djaimilia Pereira de Almeida)?",
    back: "O capitão Celestino, ex-traficante cruel de escravizados, passa a cuidar com extrema ternura de um jardim na velhice.\nA obra investiga como a barbárie humana e a delicadeza coexistem, e como a natureza vegetal acolhe a todos com silêncio e indiferença moral.",
    difficulty: "Difícil"
  },

  // FILOSOFIA & SOCIOLOGIA
  {
    id: "fc_16",
    category: "Filosofia",
    front: "Qual a diferença de Estado de Natureza entre Thomas Hobbes e Jean-Jacques Rousseau?",
    back: "• HOBBES: 'O homem é o lobo do homem'. No estado de natureza reina a guerra de todos contra todos por medo e egoísmo. O Estado (Leviatã) deve ser forte e centralizado para garantir a ordem.\n• ROUSSEAU: 'O homem nasce bom, mas a sociedade o corrompe'. O estado de natureza era de paz e liberdade; a propriedade privada introduziu as desigualdades e a opressão.",
    difficulty: "Médio"
  },
  {
    id: "fc_17",
    category: "Filosofia",
    front: "O que é a 'Sociedade do Cansaço' segundo o filósofo Byung-Chul Han?",
    back: "A passagem da sociedade disciplinar (da proibição) para a sociedade de desempenho (da positividade e do 'eu posso').\nO indivíduo contemporâneo explora a si mesmo acreditando exercer sua liberdade, o que resulta em colapso psíquico, ansiedade crônica e burnout.",
    difficulty: "Médio"
  }
];
