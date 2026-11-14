/**
 * Módulo de Redação ENEM vs FUVEST
 * Comparativos, esqueletos, competências, repertórios contemporâneos e temas anteriores atualizados.
 */
const redacaoData = {
  comparison: {
    enem: {
      title: "ENEM (Exame Nacional do Ensino Médio)",
      themeStyle: "Problema social, político ou cultural concreto e contemporâneo do Brasil.",
      titleRule: "Opcional (se colocado, conta como linha escrita, mas não ganha pontos extras).",
      conclusionStyle: "Obrigatória Proposta de Intervenção Detalhada (Competência 5).",
      interventionElements: [
        "1. Agente (Quem executa: Governo, MEC, Mídia, Família, Escolas, ONGs)",
        "2. Ação (O que será feito: verbo no infinitivo ou futuro)",
        "3. Meio / Modo (Como será viabilizado: 'por intermédio de...', 'mediante...')",
        "4. Efeito / Finalidade (Para que finalidade: 'a fim de...', 'com o fito de...')",
        "5. Detalhamento (Explicação adicional de um dos 4 elementos anteriores)"
      ],
      criteria: [
        { name: "Competência 1", desc: "Domínio da norma culta da língua escrita (máx. 2 desvios leves e 1 falha de estrutura sintática)." },
        { name: "Competência 2", desc: "Compreensão da proposta, aplicação de repertório sociocultural legitimado e não tangenciamento do tema." },
        { name: "Competência 3", desc: "Seleção, relação, organização e interpretação de informações e argumentos em defesa de um ponto de vista (projeto de texto)." },
        { name: "Competência 4", desc: "Mecanismos linguísticos de coesão interparágrafos e intraparágrafos (conectivos diversificados e sem repetições)." },
        { name: "Competência 5", desc: "Elaboração de proposta de intervenção social com os 5 elementos e respeito irrestrito aos Direitos Humanos." }
      ]
    },
    fuvest: {
      title: "FUVEST (Vestibular da Universidade de São Paulo)",
      themeStyle: "Tema reflexivo, filosófico, abstrato ou ensaístico sobre a condição humana e a sociedade.",
      titleRule: "OBRIGATÓRIO na FUVEST (avaliado com rigor; deve sintetizar a tese de modo criativo).",
      conclusionStyle: "NÃO exige proposta de intervenção! Conclusão deve ser reflexiva, sintetizando os argumentos e ampliando o debate.",
      warning: "CUIDADO: Propostas simplórias de intervenção no estilo ENEM na FUVEST costumam ser penalizadas por soarem ingênuas diante de temas complexos.",
      criteria: [
        { name: "Quesito A: Tema e Tipologia", desc: "Capacidade de apreender a complexidade da coletânea, formular uma tese autoral e sustentá-la sem reducionismos." },
        { name: "Quesito B: Coerência e Argumentação", desc: "Densidade de ideias, progressão lógica, capacidade crítica e capacidade de articulação entre premissas e conclusões." },
        { name: "Quesito C: Coesão e Expressão", desc: "Precisão vocabular, variedade sintática, elegância estilística e domínio gramatical sem fórmulas prontas ou clichês." }
      ]
    }
  },

  skeletons: [
    {
      type: "ENEM",
      title: "Esqueleto Modelo ENEM (Nota 1000)",
      description: "Estrutura clássica de 4 parágrafos com projeto de texto estratégico e 5 elementos na intervenção.",
      structure: [
        {
          part: "1. Introdução (6 a 7 linhas)",
          guidance: "Apresente um repertório contextualizador (filosófico, histórico ou literário) + conecte ao tema central + declare a Tese com dois argumentos claros (D1 e D2).",
          template: "Na obra '[Obra/Pensador]', discute-se que [ideia central do repertório]. De maneira análoga, no Brasil contemporâneo, observa-se que [reafirmação do tema do ENEM]. Com efeito, tal conjuntura perversa persiste devido não só a(o) [Argumento 1 - causa estrutural], mas também a(o) [Argumento 2 - negligência institucional/social]."
        },
        {
          part: "2. Desenvolvimento 1 (7 a 8 linhas)",
          guidance: "Tópico frasal de abertura + repertório de autoridade que valida o D1 + explicação crítica + desfecho conectivo.",
          template: "Em primeiro lugar, cabe pontuar que a(o) [Argumento 1] intensifica esse entrave. Segundo o sociólogo [Nome], [conceito ou frase célebre]. Sob essa ótica, percebe-se que [explicação detalhada de como isso acontece na realidade brasileira]. Logo, é inaceitável que [consequência negativa observada no cotidiano]."
        },
        {
          part: "3. Desenvolvimento 2 (7 a 8 linhas)",
          guidance: "Conectivo de soma/continuidade ('Ademais', 'Outrossim') + Tópico frasal do D2 + repertório de contraste ou legislação + aprofundamento crítico.",
          template: "Ademais, a [Argumento 2] atua como catalisador desse cenário nocivo. Consoante o filósofo [Nome], [conceito aplicável]. Isso se evidencia quando [fato concreto da realidade nacional]. Dessa forma, perpetua-se um ciclo vicioso no qual [impacto sofrido pela população vulnerável]."
        },
        {
          part: "4. Conclusão Interventiva (7 a 8 linhas)",
          guidance: "Conectivo conclusivo + retomada da tese + Proposta de intervenção completa com os 5 elementos obrigatórios + fechamento com o repertório da introdução.",
          template: "Portanto, medidas são urgentes para mitigar os impactos de [tema]. Cabe, dessarte, ao [AGENTE: Ministério X / Governo Federal], [AÇÃO: implementar uma política nacional de Y], [MEIO/MODO: por intermédio de repasses orçamentários e parcerias públicas], [DETALHAMENTO: com fiscalização contínua dos órgãos de controle], [EFEITO: a fim de garantir a plena efetivação da cidadania]. Somente assim, o Brasil poderá superar a distopia apontada por [Repertório da Introdução]."
        }
      ]
    },
    {
      type: "FUVEST",
      title: "Esqueleto Ensaístico FUVEST",
      description: "Estrutura densa, reflexiva e autoral. Menos dependente de conectivos padronizados e mais orientada à profundidade filosófica.",
      structure: [
        {
          part: "Título (Obrigatório)",
          guidance: "Curto, provocativo ou irônico, que sintetize o núcleo da sua reflexão (Ex: 'A ilusão da velocidade', 'Entre a memória e o esquecimento').",
          template: "[Título Reflexivo e Criativo]"
        },
        {
          part: "1. Introdução Problemática",
          guidance: "Não defina o óbvio. Problematize as tensões implícitas nos textos da coletânea e estabeleça uma tese dialética que questione o senso comum.",
          template: "Ao examinar as contradições da contemporaneidade em torno de [tema], evidencia-se uma cisão entre [ideal pretendido] e [realidade vivenciada]. Longe de constituir um fenômeno isolado, essa dinâmica reflete [tese filosófica/social], exigindo uma reflexão crítica que ultrapasse a superficialidade dos consensos estabelecidos."
        },
        {
          part: "2. Desenvolvimento Dialético (Tese e Antítese)",
          guidance: "Explore a complexidade do problema. Mostre como as forças sociais, históricas ou culturais operam em contradição.",
          template: "Por um lado, sustenta-se habitualmente que [visão convencional da sociedade]. No entanto, sob o prisma de [pensador ou reflexão conceitual], tal postura desvela uma armadilha ideológica: ao [análise aprofundada], perpetua-se [crítica contundente]. Assim, o que se apresenta como liberdade converte-se em nova modalidade de assujeitamento."
        },
        {
          part: "3. Desenvolvimento Síntese / Aprofundamento",
          guidance: "Traga uma dimensão ontológica, literária ou histórica que eleve a discussão a um plano mais amplo da condição humana.",
          template: "Nesse horizonte, a questão transcende o âmbito estritamente [institucional/político] e atinge a própria constituição da subjetividade humana. Como nos lembra a literatura em [exemplo de obra literária ou conceito artístico], o homem contemporâneo encontra-se diante de [tensão fundamental]. A incapacidade de lidar com essa fratura resulta em [consequência existencial/coletiva]."
        },
        {
          part: "4. Conclusão Reflexiva",
          guidance: "NUNCA termine com receitas mágicas ('o governo deve fazer campanhas'). Retome a linha de pensamento, feche a costura dos argumentos e aponte para um horizonte de lucidez.",
          template: "Depreende-se, portanto, que [retomada da tese sob nova formulação]. Enquanto persistir a recusa em encarar [conflito central], as tentativas de conciliação permanecerão ilusórias. Reconhecer essa complexidade não é capitular diante do desânimo, mas dar o primeiro passo indispensável para que o pensamento crítico não se curve à conveniência das respostas fáceis."
        }
      ]
    }
  ],

  repertorios: [
    {
      category: "Filosofia Contemporânea",
      author: "Byung-Chul Han",
      concept: "Sociedade do Cansaço e Autoexploração",
      quote: "O sujeito de desempenho está livre da instância de domínio externa que o obrigava a trabalhar. Mas ele é vítima da sua própria exigência de rendimento.",
      application: "Ideal para discussões sobre burnout, hiperconectividade, redes sociais, ansiedade entre os jovens e a ilusão da liberdade no capitalismo tardio."
    },
    {
      category: "Pensamento Indígena & Ecologia",
      author: "Ailton Krenak",
      concept: "Ideias para Adiar o Fim do Mundo",
      quote: "A modernidade separou a humanidade da natureza como se fôssemos seres apartados da Terra. Esquecemos que os rios e as montanhas são nossos parentes.",
      application: "Fundamental para temas de crise climática, queimadas, devastação ambiental, transição energética e respeito aos povos originários."
    },
    {
      category: "Sociologia & Literatura",
      author: "Chimamanda Ngozi Adichie",
      concept: "O Perigo da História Única",
      quote: "O problema dos estereótipos não é que sejam mentirosos, mas que são incompletos. Eles fazem com que uma história se torne a única história.",
      application: "Perfeito para temas de preconceito racial, desigualdades de gênero, representatividade cultural e estereótipos midiáticos."
    },
    {
      category: "Filosofia Política",
      author: "Hannah Arendt",
      concept: "A Banalidade do Mal e a Perda da Alteridade",
      quote: "A triste verdade é que a maior parte do mal é feita por pessoas que nunca se decidiram a ser boas ou más.",
      application: "Excelente para temas que envolvam desumanização, indiferença coletiva diante da violência, fake news e conformismo social burocrático."
    },
    {
      category: "Sociologia",
      author: "Zygmunt Bauman",
      concept: "Modernidade Líquida e Consumismo",
      quote: "Vivemos tempos líquidos: nada é para durar, tudo se transforma em consumo passageiro.",
      application: "Excelente para temas ligados à saúde mental, relações efêmeras na era digital, descartabilidade e obsolescência planejada."
    },
    {
      category: "Sociologia Francesa",
      author: "Pierre Bourdieu",
      concept: "Capital Cultural e Violência Simbólica",
      quote: "A violência simbólica é aquela que se exerce com a cumplicidade involuntária de quem a sofre.",
      application: "Excelente para redações sobre disparidades educacionais, preconceito linguístico, padrões de beleza e reprodução das elites."
    },
    {
      category: "Legislação Brasileira",
      author: "Constituição Cidadã de 1988",
      concept: "Artigo 6º (Direitos Sociais) e Artigo 225 (Meio Ambiente)",
      quote: "São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança...",
      application: "A base jurídica padrão ouro no ENEM para apontar a lacuna entre a garantia constitucional na lei e a ineficiência do Estado na prática."
    },
    {
      category: "Sociologia Brasileira",
      author: "Gilberto Dimenstein",
      concept: "O Cidadão de Papel",
      quote: "No Brasil, temos cidadãos de papel, para quem os direitos existem na Constituição, mas não chegam à vida real.",
      application: "Perfeito para denunciar o abismo entre o texto legal e a vulnerabilidade social dos cidadãos brasileiros."
    }
  ],

  pastThemes: [
    { year: 2026, enem: "Desafios para o enfrentamento da crise climática e da transição energética justa no Brasil", fuvest: "O valor da lentidão, do silêncio e da contemplação no mundo da hiperaceleração" },
    { year: 2025, enem: "Perspectivas e desafios para a preservação da biodiversidade e segurança hídrica no Brasil", fuvest: "A tensão entre a verdade factual e a conveniência narrativa na contemporaneidade" },
    { year: 2024, enem: "Desafios para a valorização da herança africana no Brasil", fuvest: "A pertinência da esperança em um mundo em crise" },
    { year: 2023, enem: "Invisibilidade do trabalho de cuidado realizado pela mulher no Brasil", fuvest: "Refúgio e hospitalidade em tempos de incerteza" },
    { year: 2022, enem: "Desafios para a valorização de comunidades e povos tradicionais no Brasil", fuvest: "As diferentes faces do riso na sociedade contemporânea" },
    { year: 2021, enem: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil", fuvest: "O papel da ciência no mundo contemporâneo" },
    { year: 2020, enem: "O estigma associado às doenças mentais na sociedade brasileira", fuvest: "O mundo contemporâneo está fora de ordem?" },
    { year: 2019, enem: "Democratização do acesso ao cinema no Brasil", fuvest: "A importância do passado para a compreensão do presente" },
    { year: 2018, enem: "Manipulação do comportamento do usuário pelo controle de dados na internet", fuvest: "Devem existir limites para a arte?" }
  ],

  // Temas apostas para treino direto no laboratório
  practicePrompts: [
    {
      banca: "ENEM",
      title: "Impactos das apostas esportivas online ('bets') e a saúde financeira dos jovens brasileiros",
      tip: "Aborde o endividamento familiar, a ludopatia, a publicidade agressiva com influenciadores e a regulação estatal."
    },
    {
      banca: "ENEM",
      title: "Desafios da inteligência artificial e da desinformação na democracia brasileira",
      tip: "Relacione alfabetização midiática, 'deepfakes', polarização social e o papel do Marco Civil da Internet."
    },
    {
      banca: "FUVEST",
      title: "A mercantilização da intimidade e a espetacularização do sofrimento humano",
      tip: "Ensaio reflexivo: dialogue com Guy Debord ('Sociedade do Espetáculo') e a busca incessante por engajamento digital."
    },
    {
      banca: "FUVEST",
      title: "O esquecimento como direito ou como ameaça à memória coletiva?",
      tip: "Problematize o apagamento histórico de violências estatais em contraste com o direito individual ao esquecimento na internet."
    }
  ]
};
