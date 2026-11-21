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
      fuvestNote: "Histórico: 1º ano com 2 propostas de gênero textual (Opção 1: Texto dissertativo-argumentativo tradicional / Opção 2: Carta a um personagem hipotético)",
      hasEnemProposal: true
    },
    {
      year: 2025,
      enem: "Perspectivas acerca do envelhecimento na sociedade brasileira",
      fuvest: "As relações sociais por meio da solidariedade",
      hasEnemProposal: true
    },
    {
      year: 2024,
      enem: "Desafios para a valorização da herança africana no Brasil",
      fuvest: "Educação básica e formação profissional: entre a multitarefa e a reflexão",
      hasEnemProposal: true
    },
    {
      year: 2023,
      enem: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil",
      fuvest: "Refugiados ambientais e vulnerabilidade social",
      hasEnemProposal: true
    },
    {
      year: 2022,
      enem: "Desafios para a valorização de comunidades e povos tradicionais no Brasil",
      fuvest: "As diferentes faces do riso",
      hasEnemProposal: true
    },
    {
      year: 2021,
      enem: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil",
      fuvest: "O mundo contemporâneo está fora da ordem?",
      hasEnemProposal: true
    },
    {
      year: 2020,
      enem: "O estigma associado às doenças mentais na sociedade brasileira",
      fuvest: "O papel da ciência no mundo contemporâneo",
      hasEnemProposal: true
    },
    {
      year: 2019,
      enem: "Democratização do acesso ao cinema no Brasil",
      fuvest: "De que maneira o passado contribui para a compreensão do presente?",
      hasEnemProposal: true
    },
    {
      year: 2018,
      enem: "Manipulação do comportamento do usuário pelo controle de dados na internet",
      fuvest: "Devem existir limites para a arte?",
      hasEnemProposal: true
    }
  ],

  // Banco de Propostas Oficiais do ENEM Completas (com textos motivadores e imagens oficiais escaneadas)
  enemProposals: {
    2026: {
      year: 2026,
      theme: "A valorização do Sistema Único de Saúde (SUS) como direito universal",
      thematicAxis: "Saúde Pública, Cidadania e Direitos Sociais",
      image: "img/redacao/enem_proposta_2026.png",
      pdfPage: 9,
      instructions: [
        "O rascunho da redação deve ser feito no espaço apropriado.",
        "O texto definitivo deve ser escrito à tinta, na folha própria, em até 30 linhas.",
        "A redação que apresentar cópia dos textos da Proposta de Redação terá o número de linhas copiadas desconsiderado.",
        "Receberá nota zero a redação com até 7 linhas, que fugir ao tema, que não atender ao tipo dissertativo-argumentativo ou que apresentar parte desconectada."
      ],
      texts: [
        {
          label: "Texto 1",
          source: "BRASIL. Constituição Federal, 1988 (Art. 196 e 198).",
          content: "Art. 196. A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.\n[...]\nArt. 198. As ações e serviços públicos de saúde integram uma rede regionalizada e hierarquizada e constituem um sistema único, organizado de acordo com as seguintes diretrizes: I – descentralização, com direção única em cada esfera de governo; II – atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais; III – participação da comunidade."
        },
        {
          label: "Texto 2",
          source: "PAIM, Jairnilson S. O que é o SUS. Rio de Janeiro: Fiocruz, 2009.",
          content: "A proposta do SUS está vinculada a uma ideia central: todas as pessoas têm direito à saúde. Esse direito está ligado à condição de cidadania. Não depende do 'mérito' de pagar previdência social, nem de provar condição de pobreza, nem do poder aquisitivo, muito menos da caridade. Com base na concepção de seguridade social, o SUS supõe uma sociedade solidária e democrática, movida por valores de igualdade e de equidade, sem discriminações ou privilégios."
        },
        {
          label: "Texto 3",
          source: "PORTAL Brasil em Mapas / Ministério da Saúde (Dados por UF em 2024).",
          content: "Porcentagem da população que utilizou exclusivamente o SUS, por UF, em 2024: 84% da população brasileira é exclusivamente usuária do SUS (a outra parte é beneficiária de plano de saúde e o utiliza ocasionalmente). Nas regiões Norte e Nordeste, a dependência exclusiva atinge patamares ainda mais elevados: RR (95%), AC (94%), MA (92%), AP (91%), TO (91%), RO (89%), PA (88%), PB (88%), AL (87%), BA (87%), PI (87%), SE (84%), PE (83%), CE (83%), AM (82%), MT (81%), RN (81%), SC (77%), RS (76%), MS (75%), PR (72%), GO (72%), MG (71%), ES (65%), RJ (65%), DF (65%) e SP (59%)."
        },
        {
          label: "Texto 4",
          source: "MOURA, Jackson de. 31 anos do SUS: atendimento universal ganha maior relevância após pandemia. Governo do Ceará, 2026.",
          content: "O sistema público nacional de saúde, criado efetivamente pela Lei Orgânica da Saúde n. 8 080, de 19 de setembro de 1990, atua desde o tratamento de diversas doenças e o fornecimento de medicamentos da atenção primária a casos de alta complexidade. O SUS é referência mundial pela atuação no enfrentamento de HIV/aids, tuberculose, hepatites e hanseníase. O Brasil também é exemplo por ter o maior sistema público de transplantes de órgãos e tecidos.\n\n5 razões fundamentais para defender o SUS: 1. Vacinação em massa; 2. Transplantes gratuitos; 3. Tratamentos de alta complexidade; 4. Vigilância sanitária preventiva; 5. Vigilância epidemiológica."
        },
        {
          label: "Texto 5",
          source: "PEIXOTO, Roberto. Brasil reduz em 72% mortalidade de crianças menores de cinco anos desde 1990, aponta relatório da ONU. G1, 2026.",
          content: "Em 1990, a cada mil crianças nascidas no Brasil, 25 morriam antes de completar 28 dias de vida. Em 2024, esse número caiu para sete a cada mil, uma redução expressiva de 72% na mortalidade neonatal em três décadas e meia. Por trás dessa conquista histórica, há a consolidação de políticas públicas implementadas e ampliadas a partir dos anos 1990, como a Estratégia Saúde da Família, o Programa de Agentes Comunitários de Saúde, a expansão capilar da atenção primária no SUS e as campanhas nacionais de incentivo à vacinação e ao aleitamento materno."
        }
      ]
    },

    2025: {
      year: 2025,
      theme: "Perspectivas acerca do envelhecimento na sociedade brasileira",
      thematicAxis: "Demografia, Direitos Humanos e Longevidade",
      image: "img/redacao/enem_proposta_2025.png",
      pdfPage: 8,
      instructions: [
        "O rascunho da redação deve ser feito no espaço apropriado.",
        "O texto definitivo deve ser escrito à tinta, na folha própria, em até 30 linhas.",
        "A redação que apresentar cópia dos textos da Proposta de Redação terá o número de linhas copiadas desconsiderado.",
        "Receberá nota zero a redação com até 7 linhas, que fugir ao tema, que não atender ao tipo dissertativo-argumentativo ou que apresentar parte desconectada."
      ],
      texts: [
        {
          label: "Texto I",
          source: "GOMES, I.; BRITTO, V. Censo Demográfico 2022. IBGE, 2025.",
          content: "Em 2022, o total de pessoas com 65 anos de idade ou mais no país chegou a 10,9% da população, com alta de 57,4% frente a 2010, quando esse contingente era 7,4%. 'O Estatuto do Idoso define como idoso a pessoa de 60 anos ou mais. O corte de 65 anos ou mais foi utilizado nessa análise para manter comparabilidade internacional com pesquisas de mercado de trabalho', justifica a gerência do IBGE. O aumento contínuo de pessoas com 65+ anos e a diminuição da parcela de até 14 anos no mesmo período (de 24,1% para 19,8%) evidenciam o franco processo de transição demográfica e envelhecimento da população brasileira."
        },
        {
          label: "Texto II",
          source: "Campanha Institucional / Senado Federal, 2025.",
          content: "Um movimento na internet, contrário ao pictograma tradicional com a bengala encurvada para representar os idosos, iniciou uma campanha para modificar essa imagem estigmatizante. A empreitada coletiva culminou na elaboração de um novo desenho: uma figura ereta e altiva, acompanhada da inscrição '60+'."
        },
        {
          label: "Texto III",
          source: "Rita Lee & Fernanda Montenegro. Revista Rascunho, 2025.",
          content: "A velhice é tempo de se retratar consigo mesma, de falar da doença, da sexualidade, do tédio e da liberdade de não se encaixar mais nas expectativas sociais. 'A velhice não é doença. É destino', escreve Rita Lee. Mas ela mesma demonstra que esse destino não é sinônimo de mero encaminhamento para o fim — é campo fértil de novas escolhas, inclusive a de desafiar estereótipos reservados para essa fase da vida.\nA consagrada atriz Fernanda Montenegro, aos 95 anos, oferece em suas memórias uma síntese luminosa desse gesto de habitar o tempo com dignidade: 'A velhice é o tempo em que a vida já foi vivida e, por isso mesmo, pode finalmente ser olhada de frente, sem o pânico do ineditismo'."
        },
        {
          label: "Texto IV",
          source: "G1 / IBGE (Infográfico: Idosos são os principais mantenedores dos lares), 2025.",
          content: "Um novo estereótipo surge: o 'velho ativo', saudável e com recursos pressiona o 'velho inativo', doente e vulnerável. Nem todos os idosos têm recursos à disposição para aderir a essa corrida de consumo.\nDistribuição da renda na faixa de 65 a 74 anos:\n• 38% são a principal renda do lar (mas contam com outras rendas na família);\n• 28% sustentam a casa sozinhos;\n• 34% contribuem para as despesas da casa, mas não são os mantenedores principais."
        },
        {
          label: "Texto V",
          source: "LISPECTOR, Clarice. Onde estivestes de noite. Rio de Janeiro: Francisco Alves, 1974.",
          content: "Dona Maria Rita era tão antiga que na casa da filha estavam habituados a ela como a um móvel velho. Ela não era novidade para ninguém. Mas nunca lhe passara pela cabeça que era uma solitária. Só que não tinha nada para fazer. Era um lazer forçado que em certos momentos se tornava lancinante: nada tinha a fazer no mundo. Senão viver como um gato, como um cachorro. Seu ideal era ser dama de companhia de alguma senhora, mas isso nem se usava mais e mesmo ninguém acreditaria nos seus fortes setenta e sete anos, pensariam que era uma fraca. Não fazia nada, fazia só isso: ser velha. Às vezes ficava deprimida: achava que não servia a nada, não servia sequer a Deus."
        },
        {
          label: "Texto VI",
          source: "Documentário 'Quantos dias. Quantas noites'. G1, 2025.",
          content: "Quem tem direito de viver mais? O documentário busca investigar quem, afinal, tem direito a uma longevidade digna no Brasil. 'São inúmeros os marcadores sociais que definem quem vai viver e quem vai sucumbir diante de uma realidade imposta por um sistema bastante perverso', afirma o diretor. 'O envelhecimento leva a maioria das pessoas a um declínio funcional. Mas, se você chega aos 75 tendo acumulado desigualdades históricas, principalmente pelo racismo estrutural, é muito difícil sobreviver com qualidade de vida', complementa um médico gerontólogo."
        }
      ]
    },

    2024: {
      year: 2024,
      theme: "Desafios para a valorização da herança africana no Brasil",
      thematicAxis: "Cultura, Identidade e Combate ao Racismo Estrutural",
      image: "img/redacao/enem_proposta_2024.png",
      pdfPage: 7,
      instructions: [
        "O rascunho da redação deve ser feito no espaço apropriado.",
        "O texto definitivo deve ser escrito à tinta preta, na folha própria, em até 30 linhas.",
        "A redação que apresentar cópia dos textos da Proposta terá as linhas desconsideradas.",
        "Receberá nota zero a redação com até 7 linhas, fuga ao tema ou desconexão deliberada."
      ],
      texts: [
        {
          label: "Texto I",
          source: "HOUAISS, A.; VILLAR, M. S. Dicionário Houaiss da língua portuguesa. Objetiva, 2009.",
          content: "Herança – o legado de crenças, conhecimentos, técnicas, costumes, tradições, transmitido por um grupo social de geração para geração; cultura."
        },
        {
          label: "Texto II",
          source: "OLIVEIRA, E. D. A epistemologia da ancestralidade. Revista Entrelugares, 2009.",
          content: "As culturas africanas e afro-brasileiras foram relegadas ao campo do folclore com o propósito de confiná-las ao gueto fossilizado da memória. Folclorizar, nesse caso, é reduzir uma cultura a um conjunto de representações estereotipadas, via de regra, alheias ao contexto que produziu essa cultura."
        },
        {
          label: "Texto III",
          source: "PAULINO, Rosana. Ainda a lamentar. In: GONÇALVES, Ana Maria. Um defeito de cor. Record, 2024.",
          content: "Capítulo Oito: 'Quando não souberes para onde ir, olha para trás e saiba pelo menos de onde vens.' (Provérbio ancestral africano)."
        },
        {
          label: "Texto IV",
          source: "História afro-brasileira nas escolas: professoras comentam avanços e dificuldades. Jornal Unesp, 2024.",
          content: "As aulas sobre escravidão eram motivo de vergonha para uma professora quando ela estudava em uma escola municipal na zona sul de São Paulo. 'Era o meu pior momento na escola', lembra a ex-aluna. Naquela época, a história da população negra no Brasil era reduzida ao horror do período escravocrata. Não se falava na escola sobre temas como a história e a rica cultura afro-brasileira, muito menos sobre as grandes personalidades negras do país, como Luiz Gama e Carolina Maria de Jesus. Agora, os livros infantis levados para as turmas têm protagonistas pretos. A valorização da beleza do cabelo crespo e o combate ao racismo fazem parte do dia a dia pedagógico da escola."
        },
        {
          label: "Texto V",
          source: "G.R.E.S. Estação Primeira de Mangueira (Samba-enredo campeão de 2019: Histórias para ninar gente grande).",
          content: "Brasil, meu nego / Deixa eu te contar / A história que a história não conta / O avesso do mesmo lugar / Na luta é que a gente se encontra / Brasil, meu dengo / A Mangueira chegou / Com versos que o livro apagou / Desde 1500 tem mais invasão do que descobrimento / Tem sangue retinto pisado / Atrás do herói emoldurado / Mulheres, tamoios, mulatos / Eu quero um país que não está no retrato / Brasil, o teu nome é Dandara / E a tua cara é de cariri / Não veio do céu / Nem das mãos de Isabel / A liberdade é um dragão no mar de Aracati / Salve os caboclos de julho / Quem foi de aço nos anos de chumbo / Brasil, chegou a vez / De ouvir as Marias, Mahins, Marielles, malês."
        },
        {
          label: "Texto VI",
          source: "Alunos de escola municipal conhecem pontos do Rio que retratam relação com a África. O Globo, 2024. Foto: Brenno Carvalho.",
          content: "Alunos admiram o mural e grafite de Zumbi dos Palmares na Pedra do Sal, marco da Pequena África e da herança afro-brasileira no Rio de Janeiro."
        }
      ]
    },

    2023: {
      year: 2023,
      theme: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil",
      thematicAxis: "Gênero, Divisão do Trabalho e Justiça Social",
      image: "img/redacao/enem_proposta_2023.png",
      pdfPage: 6,
      instructions: [
        "O rascunho deve ser feito no espaço apropriado e o texto definitivo em até 30 linhas à tinta preta.",
        "Linhas copiadas dos textos motivadores são desconsideradas na contagem.",
        "Nota zero para texto com até 7 linhas, fuga ao tema ou proposta desconectada."
      ],
      texts: [
        {
          label: "Texto I",
          source: "Oxfam Brasil (Documento informativo: Tempo de Cuidar), 2023.",
          content: "O trabalho de cuidado não remunerado e mal pago e a crise global da desigualdade. O trabalho de cuidado é essencial para nossas sociedades e para a economia. Ele inclui o trabalho de cuidar de crianças, idosos e pessoas com doenças e deficiências físicas e mentais, bem como o trabalho doméstico diário que inclui cozinhar, limpar, lavar, consertar coisas e buscar água e lenha. Se ninguém investisse tempo, esforços e recursos nessas tarefas diárias essenciais, comunidades, locais de trabalho e economias inteiras ficariam estagnados. Em todo o mundo, o trabalho de cuidado não remunerado e mal pago é desproporcionalmente assumido por mulheres e meninas em situação de pobreza. As mulheres são responsáveis por mais de três quartos do cuidado não remunerado e compõem dois terços da força de trabalho envolvida em atividades de cuidado remuneradas."
        },
        {
          label: "Texto II",
          source: "IBGE - Pnad contínua anual (Brasil - 2019).",
          content: "Média de horas dedicadas pelas pessoas de 14 anos ou mais aos afazeres domésticos e/ou tarefas de cuidado de pessoas, por sexo no Brasil (2019):\n• Homens: 11,0 horas semanais\n• Mulheres: 21,4 horas semanais (uma sobrecarga de quase o dobro de horas sobre o público feminino)."
        },
        {
          label: "Texto III",
          source: "Instituto de Pesquisa Econômica Aplicada (IPEA), 2023.",
          content: "A sociedade brasileira tem passado por inúmeras transformações sociais ao longo das últimas décadas. Entre elas, as percepções sociais a respeito dos valores e das convenções de gênero e a forma como mulheres têm se inserido na sociedade. Algumas permanências, porém, chamam a atenção, como a delegação quase que exclusiva às famílias – e, nestas, às mulheres – de atividades relacionadas à reprodução da vida e da sociedade, usualmente nominadas trabalho de cuidado."
        },
        {
          label: "Texto IV",
          source: "Revista Pesquisa FAPESP (Capa: Desafios do Cuidado), 2023.",
          content: "Aumenta o número de pessoas que demandam serviços de assistência, obrigando os países a repensar seus sistemas públicos de atenção; no Brasil, o protagonismo continua majoritariamente familiar e delegado às mulheres."
        }
      ]
    },

    2022: {
      year: 2022,
      theme: "Desafios para a valorização de comunidades e povos tradicionais no Brasil",
      thematicAxis: "Povos Tradicionais, Meio Ambiente e Diversidade Cultural",
      image: "img/redacao/enem_proposta_2022.png",
      pdfPage: 5,
      instructions: [
        "O rascunho deve ser feito no espaço apropriado e o texto definitivo em até 30 linhas à tinta preta.",
        "Linhas copiadas serão desconsideradas.",
        "Nota zero para menos de 8 linhas, fuga ao tema ou desconexão."
      ],
      texts: [
        {
          label: "Texto I",
          source: "G1 / Universidade de Brasília (UnB), 2022.",
          content: "Você sabe quais são as comunidades e os povos tradicionais brasileiros? Talvez indígenas e quilombolas sejam os primeiros que passam pela cabeça, mas, na verdade, além deles, existem 26 reconhecidos oficialmente e muitos outros que ainda não foram incluídos na legislação. São pescadores artesanais, quebradeiras de coco babaçu, apanhadores de flores sempre-vivas, caatingueiros, extrativistas, para citar alguns, todos considerados culturalmente diferenciados, capazes de se reconhecerem entre si. Para uma pesquisadora da UnB, essas populações consideram a terra como uma mãe, e há uma relação de reciprocidade com a natureza: 'elas cuidam dela, tirando apenas o suficiente para viver bem e respeitando o tempo de regeneração da própria natureza'."
        },
        {
          label: "Texto II",
          source: "Ministério Público Federal / G1 (Infográfico dos Povos Tradicionais), 2019.",
          content: "Povos tradicionais do Brasil e estados com maior concentração de famílias:\n• Indígenas: AM (43.264), MS (21.507), RR (15.316)\n• Quilombolas: BA (43.009), MA (39.316), PA (15.282)\n• Pescadores artesanais: PA (40.123), MA (33.085), BA (30.920)\n• Ribeirinhos: PA (50.314), AM (16.507), BA (9.670)\n• Extrativistas: PA (11.826), AM (9.772), MA (7.190)\n• Ciganos: BA (1.538), GO (643), MG (556)\n• Povos de terreiro: BA (1.883), PI (856), CE (603)."
        },
        {
          label: "Texto III",
          source: "Ministério do Desenvolvimento Social (MDS) / Decreto nº 6.040, de 7 de fevereiro de 2007.",
          content: "O MDS preside, desde 2007, a Comissão Nacional de Desenvolvimento Sustentável dos Povos e Comunidades Tradicionais (CNPCT), criada em 2006. Fruto dos trabalhos da comissão, foi instituída a Política Nacional de Desenvolvimento Sustentável dos Povos e Comunidades Tradicionais (PNPCT), no contexto de busca de reconhecimento e preservação de outras formas de organização social por parte do Estado brasileiro."
        },
        {
          label: "Texto IV",
          source: "Carta da Amazônia 2021 (COP26 - Conferência das Nações Unidas sobre Mudanças Climáticas).",
          content: "Não podia ser mais estratégico para nós, Povos Indígenas, Populações e Comunidades Tradicionais brasileiras, reafirmarmos a defesa da sociobiodiversidade amazônica neste momento em que o mundo volta a debater a crise climática na COP26. Nossos territórios protegidos e direitos respeitados são as reivindicações dos movimentos sociais e ambientais brasileiros. Não compactuamos com estratégias baseadas somente na lógica do mercado que ameaçam nossos direitos. Propomos a experiência das nossas sociedades e culturas históricas, construídas com base em saberes tradicionais e harmônicos de viver e produzir."
        }
      ]
    },

    2021: {
      year: 2021,
      theme: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil",
      thematicAxis: "Cidadania, Direitos Fundamentais e Identidade Civil",
      image: "img/redacao/enem_proposta_2021.png",
      pdfPage: 4,
      instructions: [
        "O texto definitivo deve ser escrito à tinta preta, na folha própria, em até 30 linhas.",
        "Cópia de textos motivadores desconsiderada.",
        "Nota zero para menos de 8 linhas, fuga ao gênero ou desrespeito à proposta."
      ],
      texts: [
        {
          label: "Texto I",
          source: "ESCÓSSIA, F. M. Invisíveis: uma etnografia sobre identidade, direitos e cidadania nas trajetórias de brasileiros sem documento. FGV, 2019.",
          content: "Toda sexta-feira, o ônibus azul e branco estacionado no pátio da Vara da Infância e da Juventude, na Praça Onze, Centro do Rio, sacoleja com o entra e sai de gente a partir das 9h. Do lado de fora, nunca menos de 50 pessoas, todas pobres ou muito pobres, quase todas negras, cercam o veículo, perguntam, sentam e levantam, perguntam de novo e esperam sem reclamar o tempo que for preciso. Adultos, velhos e crianças estão ali para conseguir o que, no Brasil, é oficialmente reconhecido como o primeiro documento da vida – a certidão de nascimento. Ao longo do discurso desses entrevistados, fica clara a forma como os usuários se definem: 'zero à esquerda', 'cachorro', 'um nada', 'pessoa que não existe', entre outras expressões que conformam a ideia da pessoa sem registro de nascimento sobre si mesma como alguém sem valor, cuja existência nunca foi oficialmente reconhecida pelo Estado."
        },
        {
          label: "Texto II",
          source: "IBGE (Dados de 2015) / Estúdio R7 & Lei nº 9.534 de 1997.",
          content: "A Lei Nº 9 534 de 1997 tornou o registro de nascimento gratuito no Brasil. Só que o problema persiste, mostrando que essa exclusão é complexa e não se explica apenas pela dificuldade financeira em pagar pelo registro. Estimativa do número de pessoas sem registro de nascimento no Brasil: Sudeste (1,15 milhão), Nordeste (828 mil), Sul (399 mil), Norte (320 mil), Centro-Oeste (243 mil) — totalizando quase 3 milhões de cidadãos invisíveis ao poder público."
        },
        {
          label: "Texto III",
          source: "Senado Federal, 2021.",
          content: "A certidão de nascimento é o primeiro e o mais importante documento do cidadão. Com ele, a pessoa existe oficialmente para o Estado e a sociedade. Só de posse da certidão é possível retirar outros documentos civis, como a carteira de trabalho, a carteira de identidade, o título de eleitor e o Cadastro de Pessoa Física (CPF). Além disso, para matricular uma criança na escola e ter acesso a benefícios sociais, a apresentação do documento é obrigatória."
        },
        {
          label: "Texto IV",
          source: "Defensoria Pública da União / Defensorias Estaduais (ANADEP), 2021.",
          content: "Campanha Institucional: 'ONDE EXISTEM PESSOAS, NÓS ENXERGAMOS CIDADÃOS. Defensoras e Defensores Públicos pelo direito à documentação pessoal.'"
        }
      ]
    },

    2020: {
      year: 2020,
      theme: "O estigma associado às doenças mentais na sociedade brasileira",
      thematicAxis: "Saúde Mental, Preconceito e Dignidade Humana",
      image: "img/redacao/enem_proposta_2020.png",
      pdfPage: 3,
      instructions: [
        "O texto definitivo deve ser escrito à tinta em até 30 linhas.",
        "Cópias do caderno serão desconsideradas.",
        "Nota zero para menos de 8 linhas ou fuga total ao tema."
      ],
      texts: [
        {
          label: "Texto I",
          source: "Secretaria da Saúde do Estado do Paraná (SESA-PR), 2020.",
          content: "A maior parte das pessoas, quando ouve falar em 'saúde mental', pensa em 'doença mental'. Mas a saúde mental implica muito mais que a ausência de doenças mentais. Pessoas mentalmente saudáveis compreendem que ninguém é perfeito, que todos possuem limites e que não se pode ser tudo para todos. Elas vivenciam diariamente uma série de emoções como alegria, amor, satisfação, tristeza, raiva e frustração. São capazes de enfrentar os desafios e as mudanças da vida cotidiana com equilíbrio e sabem procurar ajuda quando têm dificuldade em lidar com conflitos, perturbações, traumas ou transições importantes nos diferentes ciclos da vida. Todas as pessoas podem apresentar sinais de sofrimento psíquico em alguma fase da vida."
        },
        {
          label: "Texto II",
          source: "Associação Brasileira de Transtornos Afetivos (ABRATA), 2020.",
          content: "A origem da palavra 'estigma' aponta para marcas ou cicatrizes deixadas por feridas. Por extensão, em um período que remonta à Grécia Antiga, passou a designar também as marcas feitas com ferro em brasa em criminosos, escravos e outras pessoas que se desejava separar da sociedade 'correta' e 'honrada'. Essa mesma palavra muitas vezes está presente no universo das doenças psiquiátricas. No lugar da marca de ferro, relegamos preconceito, falta de informação e tratamentos precários a pessoas que sofrem de depressão, ansiedade, transtorno bipolar e outros transtornos mentais graves.\nAchar que a manifestação de um transtorno mental é 'frescura' está relacionado a um ideal de felicidade que não é igual para todo mundo. Redes sociais mostram uma face cruel, validando a vida perfeita onde tudo deve ser exibido em seu melhor ângulo. Fora dos holofotes da internet, transtornos mentais mostram-se muito mais presentes."
        },
        {
          label: "Texto III",
          source: "Organização Mundial da Saúde (OMS) / Zenklub, 2020.",
          content: "SOCORRO, BRASIL! Dados alarmantes divulgados pela OMS:\n• Mais de 11,5 milhões de brasileiros têm depressão;\n• O Brasil é o país mais depressivo da América Latina;\n• 322 milhões de pessoas vivem com depressão no mundo;\n• A depressão é a 2ª maior causa de afastamento de trabalho no mundo e a doença mais incapacitante;\n• O número de mulheres afetadas pela depressão é 30% mais elevado que o dos homens;\n• 1 trilhão de dólares é a perda econômica mundial gerada pelas consequências dos transtornos mentais;\n• Centro de Valorização da Vida (CVV): 188 (ligação gratuita para apoio emocional)."
        }
      ]
    },

    2019: {
      year: 2019,
      theme: "Democratização do acesso ao cinema no Brasil",
      thematicAxis: "Cultura, Lazer e Desigualdades Espaciais",
      image: "img/redacao/enem_proposta_2019.png",
      pdfPage: 2,
      instructions: [
        "Texto definitivo em até 30 linhas à tinta preta.",
        "Linhas copiadas da proposta são desconsideradas.",
        "Nota zero para menos de 8 linhas, fuga ao tema ou desconexão proposital."
      ],
      texts: [
        {
          label: "Texto I",
          source: "BERNARDET, Jean-Claude. O que é Cinema. São Paulo: Brasiliense, 1993.",
          content: "No dia da primeira exibição pública de cinema — 28 de dezembro de 1895, em Paris —, um homem de teatro que trabalhava com mágicas, Georges Méliès, foi falar com Lumière, um dos inventores do cinema; queria adquirir um aparelho, e Lumière desencorajou-o, disse-lhe que o 'Cinematógrapho' não tinha o menor futuro como espetáculo, era um instrumento científico para reproduzir o movimento e só poderia servir para pesquisas. Mesmo que o público, no início, se divertisse com ele, seria uma novidade de vida breve, logo cansaria. Lumière enganou-se. Como essa estranha máquina de austeros cientistas virou uma máquina de contar estórias para enormes plateias, de geração em geração, durante já quase um século?"
        },
        {
          label: "Texto II",
          source: "GUTFREIND, C. F. O filme e a representação do real. E-Compós, 2006.",
          content: "Edgar Morin define o cinema como uma máquina que registra a existência e a restitui como tal, porém levando em consideração o indivíduo, ou seja, o cinema seria um meio de transpor para a tela o universo pessoal, solicitando a participação do espectador."
        },
        {
          label: "Texto III",
          source: "Meio & Mensagem (Pesquisa sobre o consumo de cinema no Brasil), 2019.",
          content: "Da Telona para as Telinhas:\n• Apenas 17% da população brasileira frequenta salas de cinema no total;\n• 88% dos telespectadores assistem a filmes na TV regularmente;\n• 19% dos telespectadores de filmes na TV vão ao cinema;\n• 95% dos que foram ao cinema assistem a filmes na TV;\n• O interesse por filmes no Brasil cresceu 43% nos últimos cinco anos."
        },
        {
          label: "Texto IV",
          source: "Agência Nacional do Cinema (Ancine) / Programa Cinema Perto de Você, 2019.",
          content: "O Brasil já teve um parque exibidor vigoroso e descentralizado: quase 3 300 salas em 1975, uma para cada 30 000 habitantes, 80% em cidades do interior. Desde então, o país mudou. Quase 120 milhões de pessoas a mais passaram a viver nas cidades. A urbanização acelerada, a falta de investimentos em infraestrutura urbana, a baixa capitalização das empresas exibidoras e as mudanças tecnológicas alteraram a geografia do cinema. Em 1997, chegamos a pouco mais de 1 000 salas. Com a expansão dos shopping centers, a exibição se reorganizou e duplicou até as atuais 2 200 salas. Esse crescimento, porém, além de insuficiente (o Brasil é apenas o 60º país na relação habitantes por sala), ocorreu de forma concentrada. Foram privilegiadas as áreas de alta renda das grandes cidades. Populações inteiras foram excluídas do universo do cinema: o Norte e o Nordeste, as periferias urbanas e as cidades pequenas e médias do interior."
        }
      ]
    },

    2018: {
      year: 2018,
      theme: "Manipulação do comportamento do usuário pelo controle de dados na internet",
      thematicAxis: "Tecnologia, Privacidade e Autonomia do Indivíduo",
      image: "img/redacao/enem_proposta_2018.png",
      pdfPage: 1,
      instructions: [
        "Texto definitivo em até 30 linhas à tinta.",
        "Linhas copiadas da proposta são desconsideradas.",
        "Nota zero para menos de 8 linhas, fuga temática ou desconexão."
      ],
      texts: [
        {
          label: "Texto I",
          source: "VERDÚ, Daniel. O gosto na era do algoritmo. El País, 2018.",
          content: "Às segundas-feiras pela manhã, os usuários de um serviço de música digital recebem uma lista personalizada de músicas que lhes permite descobrir novidades. Assim como os sistemas de outros aplicativos e redes sociais, este cérebro artificial consegue traçar um retrato automatizado do gosto de seus assinantes e constrói uma máquina de sugestões que não costuma falhar. O sistema se baseia em um algoritmo cuja evolução e usos aplicados ao consumo cultural são infinitos. De fato, plataformas de streaming começam a desenhar suas séries rastreando o banco de dados gerado pelos movimentos dos usuários. O algoritmo constrói assim um universo complacente com o gosto do consumidor, que avança sempre a lugares reconhecíveis. Dessa forma, a filtragem de informação feita pelas redes ou buscadores molda nossa maneira de pensar. Esse é o problema principal: a ilusão de liberdade de escolha gerada pelos algoritmos."
        },
        {
          label: "Texto II",
          source: "PEPE ESCOBAR. A silenciosa ditadura do algoritmo. Outras Palavras, 2017.",
          content: "Nos sistemas dos gigantes da internet, a filtragem de dados é transferida para um exército de moderadores em empresas localizadas do Oriente Médio ao Sul da Ásia, que têm um papel no controle daquilo que deve ser eliminado da rede a partir de sinalizações. Mas a informação é então processada por um algoritmo, que tem a decisão final. Os algoritmos são literais. Em poucas palavras, são uma opinião embrulhada em código. E estamos caminhando para um estágio em que é a máquina que decide qual notícia deve ou não ser lida."
        },
        {
          label: "Texto III",
          source: "IBGE (Pesquisa Nacional por Amostra de Domicílios - Internet no Brasil em 2016).",
          content: "Utilização da Internet no Brasil em 2016:\n• 64,7% das pessoas de 10 anos ou mais utilizaram a internet (63,8% homens e 65,5% mulheres);\n• Cerca de 85% dos jovens de 18 a 24 anos e 25% dos idosos de 60 anos ou mais utilizaram a rede.\nFinalidade principal do acesso:\n• 94,2% enviar ou receber mensagens de texto, voz ou imagens (aplicativos de mensagens);\n• 76,4% assistir a vídeos, inclusive filmes e séries;\n• 73,3% chamadas de voz ou vídeo;\n• 69,3% enviar ou receber e-mails."
        },
        {
          label: "Texto IV",
          source: "CHATFIELD, Tom. Como a internet influencia secretamente nossas escolhas. BBC, 2017.",
          content: "Mudanças sutis nas informações às quais somos expostos podem transformar nosso comportamento. As redes têm selecionado as notícias sob títulos chamativos como 'trending topics' ou critérios como 'relevância'. Mas nós praticamente não sabemos como isso tudo é filtrado. Quanto mais informações tivermos na ponta dos dedos, melhor equipados estamos para tomar decisões. No entanto, surgem tensões fundamentais: entre conveniência e deliberação; entre o que o usuário deseja e o que é melhor para ele; entre transparência e o lado comercial. Quanto mais os sistemas souberem sobre você em comparação ao que você sabe sobre eles, há mais riscos de suas escolhas se tornarem apenas reações a 'cutucadas' invisíveis. O que está em jogo não é tanto 'homem versus máquina', mas sim a disputa 'decisão informada versus obediência influenciada'."
        }
      ]
    }
  },

  // Temas apostas e práticos para treino direto no laboratório
  practicePrompts: [
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2026,
      title: "A valorização do Sistema Único de Saúde (SUS) como direito universal",
      tip: "Tema oficial ENEM 2026! Articule o Art. 196 da CF/88 (Saúde como direito de todos e dever do Estado), o princípio da equidade e a proposta de intervenção com os 5 elementos."
    },
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2025,
      title: "Perspectivas acerca do envelhecimento na sociedade brasileira",
      tip: "Tema oficial ENEM 2025! Discuta a transição demográfica do Censo 2022, o etarismo, a sustentabilidade da previdência e o Estatuto da Pessoa Idosa."
    },
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2024,
      title: "Desafios para a valorização da herança africana no Brasil",
      tip: "Tema oficial ENEM 2024! Aborde o resgate da ancestralidade, a superação da folclorização, a implementação plena da Lei 10.639 e o combate ao racismo estrutural."
    },
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2023,
      title: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil",
      tip: "Tema oficial ENEM 2023! Aborde a dupla jornada feminina, a divisão sexual desigual do trabalho e a urgência de uma Política Nacional de Cuidados e creches públicas."
    },
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2022,
      title: "Desafios para a valorização de comunidades e povos tradicionais no Brasil",
      tip: "Tema oficial ENEM 2022! Destaque a preservação ambiental praticada por povos originários e tradicionais, a demarcação de terras e o Decreto 6.040 (PNPCT)."
    },
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2021,
      title: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil",
      tip: "Tema oficial ENEM 2021! Conecte a certidão de nascimento ao conceito de Cidadão de Papel (Gilberto Dimenstein) e à chave mestra para vacinação, escola e benefícios sociais."
    },
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2020,
      title: "O estigma associado às doenças mentais na sociedade brasileira",
      tip: "Tema oficial ENEM 2020! Problematize a herança histórica do estigma (Grécia Antiga), a pressão das redes sociais por felicidade ilusória e o papel vital do CVV e CAPS."
    },
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2019,
      title: "Democratização do acesso ao cinema no Brasil",
      tip: "Tema oficial ENEM 2019! Aborde a concentração das salas em shoppings de elite, a elitização dos ingressos e o cinema como ferramenta de cidadania e ampliação do capital cultural (Bourdieu)."
    },
    {
      banca: "ENEM",
      format: "ENEM",
      year: 2018,
      title: "Manipulação do comportamento do usuário pelo controle de dados na internet",
      tip: "Tema oficial ENEM 2018! Discuta as bolhas algorítmicas, a ilusão de livre arbítrio, o Marco Civil da Internet / LGPD e a mercantilização da atenção pelo capitalismo de vigilância."
    },
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
      banca: "FUVEST",
      format: "FUVEST_DISSERTATIVA",
      year: 2025,
      title: "As relações sociais por meio da solidariedade",
      tip: "Tema oficial FUVEST 2025! Explore as tensões entre individualismo contemporâneo, empatia ativa e laços comunitários sob a ótica sociológica."
    },
    {
      banca: "FUVEST",
      format: "FUVEST_DISSERTATIVA",
      year: 2024,
      title: "Educação básica e formação profissional: entre a multitarefa e a reflexão",
      tip: "Tema oficial FUVEST 2024! Dialogue com Byung-Chul Han e a dispersão cognitiva da era digital contra a profundidade crítica."
    }
  ]
};
