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
      dualOptionSystem: "NOVIDADE REVOLUCIONÁRIA: A FUVEST agora disponibiliza 2 opções de proposta para o candidato escolher na hora da prova!",
      option1: "Opção 1: Texto Dissertativo-Argumentativo (o clássico ensaio reflexivo-filosófico com tese, fundamentação crítica e título obrigatório).",
      option2: "Opção 2: Qualquer Gênero Textual proposto pela banca (como carta aberta ou a personagem hipotético, crônica reflexiva, manifesto, ensaio de opinião, etc.).",
      themeStyle: "Tema reflexivo, filosófico, ético ou existencial sobre o ser humano e a vida em sociedade.",
      titleRule: "No dissertativo-argumentativo, o título é OBRIGATÓRIO e avaliado com rigor. Nos outros gêneros, siga as convenções do gênero proposto (ex: cabeçalho/assunto em cartas).",
      conclusionStyle: "NÃO exige proposta de intervenção no estilo ENEM! A conclusão deve ser reflexiva, sintetizando a discussão ou provocando o interlocutor.",
      warning: "ATENÇÃO: Caso escolha a Opção 2 (Gênero Textual), obedeça estritamente às marcas discursivas exigidas (locutor, interlocutor, vocativo, nível de linguagem e propósito comunicativo).",
      criteria: [
        { name: "Quesito A: Tema e Tipologia/Gênero", desc: "Apreensão integral da proposta e cumprimento rigoroso das regras do gênero escolhido (seja dissertação ou outro gênero textual)." },
        { name: "Quesito B: Coerência e Argumentação", desc: "Densidade de ideias, progressão lógica, consistência dos argumentos e profundidade crítica sem superficialidades." },
        { name: "Quesito C: Coesão e Expressão", desc: "Precisão vocabular, variedade sintática, adequação do registro ao gênero escolhido e elegância estilística autoral." }
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
      title: "Esqueleto FUVEST - Opção 1: Dissertativo-Argumentativo (Ensaio)",
      description: "Estrutura densa, reflexiva e autoral. Título obrigatório e desenvolvimento dialético de ideias.",
      structure: [
        {
          part: "Título (OBRIGATÓRIO)",
          guidance: "Curto, provocativo, irônico ou conceitual. Deve sintetizar sua tese de maneira criativa (Ex: 'A Ilusão da Conciliação', 'O Silêncio dos Justos').",
          template: "[Título Reflexivo e Criativo]"
        },
        {
          part: "1. Introdução Problemática",
          guidance: "Problematize a questão filosófica trazida pela coletânea. Estabeleça uma tese dialética que confronte o senso comum.",
          template: "Ao examinar as tensões da contemporaneidade em torno de [tema central], evidencia-se uma profunda cisão entre [ideal pretendido pela sociedade] e [realidade vivenciada pelos indivíduos]. Longe de constituir um fenômeno isolado, essa dinâmica desvela [tese filosófica/social], exigindo uma reflexão crítica que ultrapasse a superficialidade dos consensos pré-fabricados."
        },
        {
          part: "2. Desenvolvimento Dialético (Tese e Antítese)",
          guidance: "Explore as contradições do tema. Mostre como forças históricas ou culturais operam em conflito.",
          template: "Por um lado, sustenta-se habitualmente que [visão convencional da sociedade]. No entanto, sob o prisma de [pensador ou reflexão conceitual], tal postura desvela uma armadilha ideológica: ao [análise aprofundada], perpetua-se [crítica contundente]. Assim, o que se apresenta à primeira vista como harmonia converte-se em dissimulação da violência cotidiana."
        },
        {
          part: "3. Desenvolvimento Síntese / Aprofundamento",
          guidance: "Traga uma dimensão ontológica, literária ou humana que eleve a reflexão.",
          template: "Nesse horizonte, a questão transcende o plano estritamente [jurídico/institucional] e atinge a própria constituição da subjetividade humana. Como ilustra [exemplo de obra literária ou conceito histórico], o homem contemporâneo depara-se com [conflito existencial profundo]. A recusa em reconhecer essa fratura perpetua o ciclo de alienação coletiva."
        },
        {
          part: "4. Conclusão Reflexiva",
          guidance: "NUNCA faça proposta interventiva rasa no estilo ENEM ('o governo deve fiscalizar'). Feche com lucidez filosófica.",
          template: "Depreende-se, portanto, que [retomada da tese sob nova formulação]. Enquanto persistir a recusa em encarar [conflito central], as promessas de conciliação permanecerão ilusórias. Reconhecer essa complexidade não é capitular diante do desânimo, mas dar o passo indispensável para que o pensamento não se curve à conveniência das respostas fáceis."
        }
      ]
    },
    {
      type: "FUVEST_GENERO",
      title: "Esqueleto FUVEST - Opção 2: Qualquer Gênero Textual (Ex: Carta)",
      description: "Estrutura para quando a banca solicitar outro gênero (como carta a personagem hipotético, crônica, manifesto ou artigo).",
      structure: [
        {
          part: "1. Cabeçalho & Vocativo do Interlocutor",
          guidance: "Defina claramente a situação comunicativa solicitada na proposta: para quem você escreve e de onde você fala.",
          template: "[Local e Data (se cabível)] / Prezado(a) [Nome do Personagem ou Interlocutor Solicitado na Proposta],"
        },
        {
          part: "2. Ponto de Partida Discursivo & Contextualização",
          guidance: "Apresente o motivo do contato estabelecendo de imediato a conexão com o tema provocador da FUVEST.",
          template: "Escrevo-lhe estas linhas movido pela inquietação que sua trajetória/postura desperta em mim diante do dilema de [tema da proposta]. Sei que, em seu contexto, [menção ao dilema do interlocutor], mas não posso calar-me perante a urgência de refletirmos juntos sobre [tese ou questionamento central]."
        },
        {
          part: "3. Argumentação Embutida no Gênero (Corpo do Texto)",
          guidance: "Desenvolva argumentos sólidos mantendo a voz do gênero (diálogo, provocação, empatia ou confronto respeitoso).",
          template: "Veja bem: quando você decidiu [ação do personagem/interlocutor], talvez não tenha ponderado que [argumento crítico 1]. Sob a perspectiva da nossa história, [repertório filosófico/literário aplicado ao diálogo]. Não se trata de julgá-lo com leviandade, mas de compreender que [argumento 2 e reflexão ética]."
        },
        {
          part: "4. Desfecho Discursivo & Despedida Adequada",
          guidance: "Feche com uma reflexão provocativa ao interlocutor e subscreva com a assinatura exigida (ou pseudônimo, se a banca pedir).",
          template: "Espero que estas palavras encontrem em seu espírito a coragem para encarar a verdade de [conclusão reflexiva]. Despeço-me na esperança de que o tempo lhe traga a lucidez que o momento exigiu. Atenciosamente, [Assinatura conforme orientações da prova]."
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
    {
      year: 2026,
      enem: "A valorização do Sistema Único de Saúde (SUS) como direito universal",
      fuvest: "O perdão é um ato que pode ser condicionado ou limitado?",
      fuvestNote: "Histórico: 1º ano com 2 propostas de gênero textual (Opção 1: Texto dissertativo-argumentativo tradicional / Opção 2: Carta a um personagem hipotético)"
    },
    {
      year: 2025,
      enem: "Perspectivas acerca do envelhecimento na sociedade brasileira",
      fuvest: "As relações sociais por meio da solidariedade"
    },
    {
      year: 2024,
      enem: "Desafios para a valorização da herança africana no Brasil",
      fuvest: "Educação básica e formação profissional: entre a multitarefa e a reflexão"
    },
    {
      year: 2023,
      enem: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil",
      fuvest: "Refugiados ambientais e vulnerabilidade social"
    },
    {
      year: 2022,
      enem: "Desafios para a valorização de comunidades e povos tradicionais no Brasil",
      fuvest: "As diferentes faces do riso"
    },
    {
      year: 2021,
      enem: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil",
      fuvest: "O mundo contemporâneo está fora da ordem?"
    },
    {
      year: 2020,
      enem: "O estigma associado às doenças mentais na sociedade brasileira",
      fuvest: "O papel da ciência no mundo contemporâneo"
    },
    {
      year: 2019,
      enem: "Democratização do acesso ao cinema no Brasil",
      fuvest: "De que maneira o passado contribui para a compreensão do presente?"
    },
    {
      year: 2018,
      enem: "Manipulação do comportamento do usuário pelo controle de dados na internet",
      fuvest: "Devem existir limites para a arte?"
    }
  ],

  // Temas apostas e práticos para treino direto no laboratório
  practicePrompts: [
    {
      banca: "FUVEST",
      format: "FUVEST_DISSERTATIVA",
      year: 2026,
      title: "O perdão é um ato que pode ser condicionado ou limitado? (Opção 1: Dissertativo-Argumentativo)",
      tip: "Tema oficial FUVEST 2026 - Opção 1! Ensaio dissertativo-argumentativo clássico com título obrigatório, reflexão filosófica profunda e sem fórmulas prontas de intervenção."
    },
    {
      banca: "FUVEST",
      format: "FUVEST_GENERO",
      year: 2026,
      title: "O perdão é um ato que pode ser condicionado ou limitado? (Opção 2: Carta a Personagem Hipotético)",
      tip: "Tema oficial FUVEST 2026 - Opção 2! Gênero Carta Argumentativa dirigida a um personagem hipotético. Observe vocativo, interlocução constante, marcas do gênero epistolar e reflexão ética sobre os limites do perdão."
    },
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2026,
      title: "A valorização do Sistema Único de Saúde (SUS) como direito universal",
      tip: "Tema oficial ENEM 2026! Articule o Art. 196 da CF/88 (Saúde como direito de todos e dever do Estado), o princípio da equidade e a proposta de intervenção."
    },
    {
      banca: "FUVEST",
      format: "FUVEST_DISSERTATIVA",
      year: 2025,
      title: "As relações sociais por meio da solidariedade",
      tip: "Tema oficial FUVEST 2025! Explore as tensões entre individualismo contemporâneo, empatia ativa e laços comunitários sob a ótica sociológica."
    },
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2025,
      title: "Perspectivas acerca do envelhecimento na sociedade brasileira",
      tip: "Tema oficial ENEM 2025! Discuta a transição demográfica, o etarismo, a sustentabilidade da previdência e o Estatuto da Pessoa Idosa."
    },
    {
      banca: "FUVEST",
      format: "FUVEST_DISSERTATIVA",
      year: 2024,
      title: "Educação básica e formação profissional: entre a multitarefa e a reflexão",
      tip: "Tema oficial FUVEST 2024! Dialogue com Byung-Chul Han e a dispersão cognitiva da era digital contra a profundidade crítica."
    },
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2023,
      title: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil",
      tip: "Tema oficial ENEM 2023! Aborde a dupla jornada, a divisão sexual do trabalho e a falta de creches e políticas de apoio."
    }
  ]
};
