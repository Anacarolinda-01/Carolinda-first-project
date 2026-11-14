/**
 * Banco de Questões de LINGUAGENS, CÓDIGOS & LITERATURA
 * Total: 105 questões completas cobrindo todo o edital ENEM, FUVEST, UNICAMP e UNESP.
 * Contempla interpretação textual, gêneros, variação linguística, literatura geral e análise aprofundada das 9 Obras FUVEST 2027.
 */
const questionsLinguagens = [
  // ==========================================
  // BLOCO 1: INTERPRETAÇÃO TEXTUAL, GÊNEROS & LINGUÍSTICA (35 QUESTÕES)
  // ==========================================
  {
    id: "ling_gen_q1",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Funções da Linguagem (Metalinguagem e Poética)",
    difficulty: "Médio",
    enunciation: "Leia atentamente os versos do poema 'Catar Feijão', de João Cabral de Melo Neto:\n\n'Catar feijão se faz com os riscos:/ joga-se os grãos na pedra da mesa/ e lavam-se as pedras ou o que não presta./ Ora, nesse catar feijão entra um risco:/ o de que entre os grãos pesados entre/ um grão imponderável, o de um pedregulho.../ Certa palavra que parece de som igual/ mas de peso diferente:/ esse o grão que o poema rejeita.'\n\nNesses versos, o poeta compara o ato doméstico de catar feijão ao ofício artesanal e rigoroso da criação poética. A função da linguagem predominante nesse trecho é a:",
    options: [
      "Função fática, pois visa testar o canal auditivo de comunicação com o leitor.",
      "Função metalinguística (aliada à função poética), na qual o próprio código linguístico e o processo de seleção das palavras do poema são utilizados para explicar o fazer poético.",
      "Função emotiva pura, centrada exclusivamente na expressão de angústias sentimentais confessionais.",
      "Função apelativa ou conativa, destinada a convencer o leitor a comprar determinada marca de feijão.",
      "Função referencial, cujo único propósito é ensinar uma receita culinária caseira."
    ],
    correct: 1,
    explanation: "A função metalinguística ocorre quando a mensagem tem como foco o próprio código linguístico (a língua falando da própria língua, ou a poesia refletindo sobre o processo de fazer poesia). No poema cabralino, o ato de escrever é desmitificado como um trabalho minucioso de eliminação de excessos verbais, utilizando a poesia para discutir a feitura do poema. Alternativa B."
  },
  {
    id: "ling_gen_q2",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Variação Linguística e Preconceito Linguístico",
    difficulty: "Fácil",
    enunciation: "Leia a estrofe de 'Samba do Arnesto', de Adoniran Barbosa:\n\n'O Arnesto nos convidô prum samba, ele mora no Brás/ Nós fumo e não encontremo ninguém/ Nós vortemo com uma baita duma reiva/ Da outra veiz nós num vai mais/ Nós num semo tatu!'\n\nSob a ótica da sociolinguística moderna e das diretrizes curriculares do ENEM, o uso de construções como 'nós fumo', 'nós vortemo' e 'nós num vai mais' deve ser compreendido como:",
    options: [
      "Um erro gramatical grosseiro de falantes que demonstram incapacidade cognitiva de raciocinar.",
      "Uma manifestação legítima de variação linguística diastrática e regional típica do falar popular paulistano da época, perfeitamente compreensível e dotada de coerência interna e expressividade artística.",
      "Uma corruptela linguística que deve ser banida e punida pelos livros didáticos escolares.",
      "Um dialeto arcaico trazido diretamente de Portugal sem alterações.",
      "Uma tentativa fracassada de imitar a norma-padrão culta em ocasiões solenes."
    ],
    correct: 1,
    explanation: "A sociolinguística (com teóricos como Marcos Bagno) ensina que não existem variedades linguísticas intrinsecamente superiores ou inferiores, mas variedades adequadas a diferentes contextos sócio-históricos e situacionais. Adoniran Barbosa imortalizou a fala dos trabalhadores imigrantes e periféricos de São Paulo, revelando riqueza poética e identidade cultural que o conceito elitista de 'preconceito linguístico' tenta desqualificar. Alternativa B."
  },
  {
    id: "ling_gen_q3",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Figuras de Linguagem (Metáfora, Metonímia e Antítese)",
    difficulty: "Médio",
    enunciation: "Analise as figuras de linguagem presentes no célebre soneto camoniano:\n\n'Amor é fogo que arde sem se ver;\nÉ ferida que dói e não se sente;\nÉ um contentamento descontente;\nDor que desatina sem doer;'\n\nNos dois primeiros quartetos, a aproximação de conceitos semanticamente opostos que coexistem de forma aparentemente contraditória e inconciliável ('dói e não se sente', 'contentamento descontente', 'dor que desatina sem doer') configura a figura de pensamento denominada:",
    options: [
      "Metonímia.",
      "Paradoxo (ou oxímoro).",
      "Hipérbole.",
      "Eufemismo.",
      "Pleonasmo vicioso."
    ],
    correct: 1,
    explanation: "Enquanto a antítese é a aproximação de termos contrários sem eliminar a lógica (ex: 'o dia e a noite se sucedem'), o PARADOXO (ou oxímoro) vai além: ele une ideias opostas que se excluem mutuamente na mesma frase, desafiando a lógica estrita para expressar a natureza inexplicável, misteriosa e contraditória do sentimento amoroso petrarquiano e camoniano. Alternativa B."
  },
  {
    id: "ling_gen_q4",
    vestibular: "ENEM",
    year: 2023,
    subject: "Linguagens",
    topic: "Gêneros Textuais (A Crônica Literária)",
    difficulty: "Fácil",
    enunciation: "A crônica é um dos gêneros mais populares da imprensa e da literatura brasileira (brilhantemente cultivada por autores como Machado de Assis, Rubem Braga, Fernando Sabino e Clarice Lispector). Entre as principais marcas estruturais e temáticas da crônica, destaca-se:",
    options: [
      "A linguagem técnica hermética voltada exclusivamente para tratados científicos da área biológica.",
      "O ponto de partida em flagrantes corriqueiros e episódios banais do cotidiano urbano, narrados com leveza, humor sutil ou lirismo reflexivo e publicados com frequência em jornais e revistas.",
      "A estrutura rígida de um texto teatral épico com coro grego em verso decassílabo.",
      "A ausência completa de qualquer subjetividade ou ponto de vista do cronista.",
      "O uso obrigatório de vocabulário arcaico em latim medieval."
    ],
    correct: 1,
    explanation: "A crônica jornalístico-literária nasce da observação poética e bem-humorada das pequenas cenas do dia a dia da cidade (uma conversa no ponto de ônibus, a flor que nasce no asfalto, a chuva repentina). Com linguagem acessível e tom intimista de conversa com o leitor, ela transfigura o efêmero em matéria de profunda reflexão humana. Alternativa B."
  },
  {
    id: "ling_gen_q5",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Linguagens",
    topic: "Intertextualidade e Paródia",
    difficulty: "Médio",
    enunciation: "Leia e compare os dois trechos poéticos:\n\nTexto I (Gonçalves Dias, 'Canção do Exílio', 1843):\n'Minha terra tem palmeiras,/ Onde canta o Sabiá;/ As aves, que aqui gorjeiam,/ Não gorjeiam como lá.'\n\nTexto II (Oswald de Andrade, 'Canto de Regresso à Pátria', 1925):\n'Minha terra tem palmares/ Onde gorjeia o mar/ Os passarinhos daqui/ Não cantam como os de lá.'\n\nNo poema de Oswald de Andrade, a substituição deliberada da palavra 'palmeiras' (símbolo romântico idealizado da natureza intocada) por 'palmares' estabelece um processo intertextual de:",
    options: [
      "Cópia servil e plágio involuntário sem inovação.",
      "Paródia modernista crítica e transgressora, que ressignifica o poema canônico de Gonçalves Dias para inserir a memória histórica da resistência negra do Quilombo dos Palmares e desconstruir o ufanismo romântico ingênuo.",
      "Tradução literal de uma cantiga de amor provençal.",
      "Erro ortográfico decorrente da pressa do autor modernista.",
      "Homenagem passiva ao nacionalismo ufanista da corte de D. Pedro II."
    ],
    correct: 1,
    explanation: "A antropofagia modernista de 1922 operava deglutindo a tradição para reinventá-la criticamente: ao trocar o lírico 'palmeiras' pelo político e histórico 'palmares' (referência a Zumbi e ao maior quilombo colonial), Oswald de Andrade subverte a nostalgia romântica idealizadora do século XIX, inserindo a luta, o trabalho escravo e as tensões reais da formação social brasileira. Alternativa B."
  },
  {
    id: "ling_gen_q6",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Coesão Textual e Operadores Argumentativos",
    difficulty: "Médio",
    enunciation: "Considere o período: 'O candidato preparou-se intensamente ao longo de todo o ano letivo, comparecendo a todos os simulados; todavia, a ansiedade excessiva no dia da prova prejudicou o seu ritmo de resolução.'\n\nO conectivo 'todavia' introduz no período uma oração que estabelece com a anterior uma relação semântica de:",
    options: [
      "Consequência lógica imediata.",
      "Adversidade (oposição / contraste entre a preparação dedicada e o resultado afetado pelo nervosismo).",
      "Explicação ou causa determinante.",
      "Condição hipotética provável.",
      "Conclusão encadeada."
    ],
    correct: 1,
    explanation: "A conjunção coordenativa adversativa 'todavia' (assim como 'mas', 'porém', 'contudo', 'entretanto', 'no entanto') atua como operador discursivo que contrapõe dois enunciados, introduzindo um argumento que quebra a expectativa gerada pela oração anterior (a expectativa positiva de quem estudou muito contra a frustração causada pelo nervosismo). Alternativa B."
  },
  {
    id: "ling_gen_q7",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Linguística (Ambiguidade e Polissemia)",
    difficulty: "Fácil",
    enunciation: "Em enunciados publicitários ou humorísticos, o uso intencional da polissemia (a propriedade de uma mesma palavra assumir múltiplos significados dependendo do contexto) é frequentemente explorado para produzir duplo sentido e persuasão. Na frase de uma campanha de doação de sangue: 'Seja um tipo inesquecível: doe sangue!', o vocábulo 'tipo' funciona polissemicamente fazendo referência simultânea a:",
    options: [
      "Uma marca de automóvel e um modelo de calçado esportivo.",
      "Uma pessoa com caráter exemplar/marcante e à classificação dos grupos sanguíneos humanos (tipo sanguíneo A, B, AB ou O).",
      "Uma fonte tipográfica de jornal e um caractere de computador.",
      "Uma espécie vegetal em extinção e uma variedade de solo.",
      "Um prato típico regional e um ingrediente químico."
    ],
    correct: 1,
    explanation: "A publicidade explora com maestria a polissemia da palavra 'tipo': na linguagem coloquial, 'tipo' significa um indivíduo especial, digno de admiração ('você é um tipo bacana'); no âmbito médico-hematológico, designa o grupo sanguíneo do doador (tipo A, B, O), estimulando a empatia cívica com inteligência expressiva. Alternativa B."
  },
  {
    id: "ling_gen_q8",
    vestibular: "ENEM",
    year: 2023,
    subject: "Linguagens",
    topic: "Gêneros Textuais (Campanhas Comunitárias e Publicidade Institucional)",
    difficulty: "Fácil",
    enunciation: "Em cartazes e peças publicitárias de campanhas institucionais de saúde pública (como vacinação contra a gripe ou prevenção contra a dengue), a linguagem empregada caracteriza-se pelo predomínio de verbos no modo imperativo ('Vacine-se!', 'Elimine os focos de água parada!', 'Proteja sua família!'). Esse recurso linguístico tem a finalidade discursiva primordial de:",
    options: [
      "Narrar uma crônica fictícia sobre a vida de mosquitos.",
      "Atuar sobre o comportamento do leitor/interlocutor (função conativa ou apelativa), incitando-o a adotar uma atitude preventiva concreta de interesse coletivo.",
      "Expressar apenas a opinião poética pessoal do desenhista da propaganda.",
      "Descrever minuciosamente o genoma molecular do vírus causador da doença.",
      "Estabelecer uma dúvida cética sobre a eficácia de medicamentos."
    ],
    correct: 1,
    explanation: "O modo imperativo é a marca gramatical distintiva da função conativa (ou apelativa) da linguagem, centrada no receptor. Nas campanhas públicas de conscientização social, os comandos e conselhos buscam engajar diretamente o cidadão na mudança de conduta sanitária em favor do bem comum. Alternativa B."
  },
  {
    id: "ling_gen_q9",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Linguagens",
    topic: "Análise do Discurso (Ironia e Crítica Social)",
    difficulty: "Médio",
    enunciation: "A ironia é um recurso discursivo e estilístico no qual o enunciador diz formalmente o contrário daquilo que realmente pretende dar a entender, contando com a cumplicidade interpretativa do leitor para decifrar a crítica subjacente. No conto machadiano ou em charges políticas contemporâneas, a ironia cumpre a função de:",
    options: [
      "Enganar o leitor fazendo com que ele acredite cegamente nas palavras literais do texto.",
      "Desmascarar hipocrisias morais, convenções sociais burguesas e discursos oficiais autoritários por meio do distanciamento crítico e do humor sutil.",
      "Demonstrar a falta de vocabulário do narrador.",
      "Elogiar efusivamente as autoridades políticas governantes.",
      "Simplificar o texto para crianças em fase de alfabetização inicial."
    ],
    correct: 1,
    explanation: "A ironia, em especial a célebre 'ironia machadiana' de Machado de Assis, é uma sofisticada arma de desnudamento social: ao fingir concordar com o cinismo das personagens aristocráticas ou da mediocridade provinciana, o narrador expõe a baixeza de seus interesses egoístas e a falsidade dos discursos hegemônicos. Alternativa B."
  },
  {
    id: "ling_gen_q10",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Figuras de Linguagem (Metonímia e Sinestesia)",
    difficulty: "Fácil",
    enunciation: "Na frase literária: 'O poeta saboreava o perfume doce da primavera que entrava pela janela aberta', a expressão 'perfume doce' mescla sensações físicas pertencentes a dois órgãos sensoriais humanos distintos (o olfato, associado ao perfume, e o paladar, associado ao doce). Essa figura de linguagem denomina-se:",
    options: [
      "Metáfora pura.",
      "Sinestesia.",
      "Catacrese.",
      "Hipérbato.",
      "Polissíndeto."
    ],
    correct: 1,
    explanation: "A SINESTESIA é o recurso estilístico que consiste na fusão e cruzamento deliberado de sensações oriundas de campos sensoriais diferentes (visão, audição, tato, olfato e paladar) na mesma expressão poética (ex: 'voz aveludada' = audição + tato; 'perfume doce' = olfato + paladar; 'olhar frio' = visão + tato). Foi amplamente explorada pelos poetas simbolistas. Alternativa B."
  },
  {
    id: "ling_gen_q11",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Tipologia Textual (Texto Dissertativo-Argumentativo)",
    difficulty: "Fácil",
    enunciation: "O gênero dissertativo-argumentativo, exigido na redação oficial do ENEM e presente em editoriais de jornais de referência, estrutura-se fundamentalmente em torno de:",
    options: [
      "Uma sequência cronológica de ações fictícias com personagens, clímax e desfecho dramático.",
      "A defesa de um ponto de vista crítico (tese central) apoiada em uma cadeia lógica de argumentos consistentes, dados estatísticos e repertórios socioculturais legítimos, culminando em uma proposta de intervenção social ou conclusão reflexiva.",
      "Instruções e comandos em tópicos para montagem de móveis de madeira.",
      "Rimas métricas decassílabas sem compromisso com a argumentação racional.",
      "A enumeração de itens comerciais para compra em feiras livres."
    ],
    correct: 1,
    explanation: "A tipologia dissertativo-argumentativa articula razão, retórica e cidadania: o autor deve posicionar-se claramente perante um problema social complexo (tese), sustentar sua posição com argumentos sólidos de autoridade, causa-efeito e comprovação histórica, e apresentar propostas de solução viáveis e respeitadoras dos direitos humanos. Alternativa B."
  },
  {
    id: "ling_gen_q12",
    vestibular: "UNESP",
    year: 2024,
    subject: "Linguagens",
    topic: "Variação Linguística (Diacrônica e Gírias Históricas)",
    difficulty: "Fácil",
    enunciation: "Palavras e expressões como 'vossemecê' (que evoluiu historicamente para 'vossa mercê', 'você' e, na oralidade e internet contemporânea, para 'cê' e 'vc') ilustram o fenômeno linguístico denominado:",
    options: [
      "Variação diatópica (geográfica/regional).",
      "Variação diacrônica (temporal ou histórica), que demonstra a transformação viva e natural das línguas humanas ao longo dos séculos.",
      "Variação diafásica exclusiva de tribunais de júri.",
      "Gíria técnica de marinheiros do século XVI.",
      "Incorreção fonética incurável."
    ],
    correct: 1,
    explanation: "A variação diacrônica (do grego dia = através de; chronos = tempo) estuda as mutações morfológicas, semânticas e fonéticas que a língua experimenta no decorrer do tempo. As línguas vivas nunca são estáticas: simplificam pronúncias, acolhem neologismos e deixam cair em desuso arcaísmos conforme mudam as necessidades comunicativas dos falantes. Alternativa B."
  },
  {
    id: "ling_gen_q13",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Linguagens",
    topic: "Coesão Referencial (Anáfora e Catáfora)",
    difficulty: "Médio",
    enunciation: "Analise o uso dos pronomes demonstrativos nos dois períodos a seguir:\n\n1. 'A preservação ambiental e o crescimento econômico desordenado continuam em rota de colisão; ESTE destrói ecossistemas, enquanto AQUELA garante a sobrevivência das futuras gerações.'\n2. 'O presidente fez ESTA declaração enfática à imprensa: o Brasil não tolerará violações à soberania nacional.'\n\nNos períodos 1 e 2, os pronomes destacados desempenham, respectivamente, funções de coesão referencial do tipo:",
    options: [
      "Catáfora no período 1 e anáfora no período 2.",
      "Anáfora no período 1 (retomando termos já ditos: 'este' refere-se ao termo mais próximo 'crescimento desordenado', e 'aquela' ao mais distante 'preservação') e Catáfora no período 2 (antecipando uma informação que ainda será explicitada a seguir).",
      "Ambos são exclusivamente pronomes reflexivos indefinidos.",
      "Ambos exercem papel puramente decorativo sem função de coesão.",
      "Catáfora em ambos os períodos."
    ],
    correct: 1,
    explanation: "A coesão anafórica recupera termos citados anteriormente no texto (evitando repetições desnecessárias, onde 'este' retoma o último citado e 'aquele' o primeiro). A coesão catafórica projeta a atenção do leitor para a frente, anunciando um conteúdo que virá logo em seguida (como a declaração introduzida por 'esta:'). Alternativa B."
  },
  {
    id: "ling_gen_q14",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Artes Visuais e Linguagem Não Verbal",
    difficulty: "Fácil",
    enunciation: "Em charges editoriais e tirinhas de jornais (como as tiras de Mafalda, de Quino, ou de Armandinho, de Alexandre Beck), a construção de sentido crítico resulta da integração entre:",
    options: [
      "Apenas o texto escrito, sendo os desenhos meras ilustrações decorativas dispensáveis.",
      "A linguagem verbal (falas nos balões) e a linguagem não verbal (expressões faciais dos personagens, enquadramento visual, gestos e elementos imagéticos do cenário), que atuam de forma sinérgica e indissociável para produzir a ironia e a crítica sociopolítica.",
      "Tratados formais de anatomia biológica sem texto.",
      "Traduções automáticas de dicionários enciclopédicos.",
      "Apenas manchas de tinta abstrata sem temática social."
    ],
    correct: 1,
    explanation: "As charges e tirinhas constituem gêneros híbridos multimodais: o humor ou a crítica social contundente nascem do choque entre o que o personagem diz e o que sua expressão corporal, o olhar do interlocutor ou o detalhe silencioso do desenho revelam, exigindo do leitor leitura atenta tanto dos códigos verbais quanto visuais. Alternativa B."
  },
  {
    id: "ling_gen_q15",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Linguagens",
    topic: "Linguística (Polidez e Níveis de Formalidade)",
    difficulty: "Fácil",
    enunciation: "A escolha do registro linguístico (formal culto versus coloquial informal) depende diretamente da situação comunicativa, dos interlocutores envolvidos e do suporte do texto. A utilização de gírias e abreviações da internet é perfeitamente adequada em:",
    options: [
      "Uma petição inicial endereçada por um advogado a um juiz do Supremo Tribunal Federal.",
      "Uma redação dissertativo-argumentativa do vestibular ENEM.",
      "Uma mensagem instantânea de bate-papo informal em aplicativo de celular trocada entre amigos de infância.",
      "Um laudo pericial médico de autópsia hospitalar.",
      "Uma ata oficial de posse de um reitor universitário."
    ],
    correct: 2,
    explanation: "O conceito de adequação linguística preconiza que não existe linguagem 'errada' em abstrato, mas linguagens inadequadas ao contexto pragmático: o registro coloquial e o internetês são perfeitamente adequados na comunicação espontânea cotidiana entre amigos, ao passo que contextos institucionais e acadêmicos exigem a norma-padrão culta da língua. Alternativa C."
  },
  {
    id: "ling_gen_q16",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Figuras de Linguagem (Personificação e Hipérbole)",
    difficulty: "Fácil",
    enunciation: "Nos versos: 'A cidade dormia sob o manto pesado da noite fria, enquanto o vento sussurrava segredos antigos às árvores desfolhadas', o poeta atribui ações e sentimentos humanos ('dormia', 'sussurrava segredos') a elementos inanimados da natureza. Essa figura de linguagem é denominada:",
    options: [
      "Metonímia.",
      "Prosopopeia (ou personificação).",
      "Hipérbole.",
      "Eufemismo.",
      "Pleonasmo."
    ],
    correct: 1,
    explanation: "A PROSOPOPEIA (ou personificação) é a figura de linguagem que atribui propriedades, sensações, sentimentos, intenções ou comportamentos exclusivamente próprios de seres humanos a animais irracionais, seres inanimados ou ideias abstratas (como o vento sussurrar ou a cidade dormir). Alternativa B."
  },
  {
    id: "ling_gen_q17",
    vestibular: "ENEM",
    year: 2023,
    subject: "Linguagens",
    topic: "Estratégias Argumentativas (Argumento de Autoridade)",
    difficulty: "Fácil",
    enunciation: "Ao redigir um ensaio argumentativo sobre a crise climática global, o autor cita textualmente as conclusões do relatório científico do Painel Intergovernamental sobre Mudanças Climáticas da ONU (IPCC) para comprovar a urgência da redução das emissões de gases do efeito estufa. O recurso argumentativo empregado denomina-se:",
    options: [
      "Argumento por senso comum ingênuo.",
      "Argumento de autoridade (recurso em que se invoca a voz de especialistas renomados ou instituições científicas consagradas para conferir credibilidade e força probatória à tese defendida).",
      "Falácia do apelo à força física.",
      "Argumento ad hominem de desqualificação pessoal.",
      "Argumentação circular sem fundamentação factual."
    ],
    correct: 1,
    explanation: "O argumento de autoridade baseia-se no prestígio, no saber especializado e no reconhecimento científico de um especialista, pensador ou instituição respeitada para blindar e referendar a tese do autor perante o leitor, diferenciando-se da mera opinião vazia ou do senso comum infundado. Alternativa B."
  },
  {
    id: "ling_gen_q18",
    vestibular: "UNESP",
    year: 2024,
    subject: "Linguagens",
    topic: "Semântica (Denotação e Conotação)",
    difficulty: "Fácil",
    enunciation: "Diz-se que uma palavra ou expressão está empregada em sentido CONOTATIVO (figurado) quando:",
    options: [
      "Apresenta seu significado literal, exato, dicionarizado e unívoco, sem espaço para interpretações poéticas.",
      "Assume um sentido subjetivo, metafórico, simbólico e dependente do contexto literário ou emocional criado no texto.",
      "É escrita com letras maiúsculas em documentos cartoriais.",
      "Está traduzida diretamente para a língua inglesa.",
      "É exclusiva de fórmulas matemáticas."
    ],
    correct: 1,
    explanation: "A linguagem DENOTATIVA (D de Dicionário) é objetiva, literal e neutra (típica de notícias, manuais de instrução e artigos científicos). A linguagem CONOTATIVA (C de Criatividade/Coração) é poética, polissêmica e figurada, gerando novas camadas de sentido simbólico na mente do leitor. Alternativa B."
  },
  {
    id: "ling_gen_q19",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Linguagens",
    topic: "Sintaxe e Expressividade (Voz Passiva e Omissão do Agente)",
    difficulty: "Médio",
    enunciation: "Em manchetes jornalísticas de acidentes ecológicos ou violência policial, a opção pela voz passiva sintética ou analítica com omissão deliberada do agente (ex: 'Rios são contaminados por lama tóxica' ou 'Jovem é baleado em operação na favela') atende frequentemente ao objetivo ideológico de:",
    options: [
      "Exaltar detalhadamente o heroísmo dos causadores da ação.",
      "Minimizar ou ocultar a responsabilidade direta dos agentes causadores do dano (empresas mineradoras ou agentes estatais), deslocando o foco da notícia exclusivamente para a vítima e despersonalizando a culpa social.",
      "Cumprir uma regra rígida de etiqueta da corte imperial.",
      "Corrigir um suposto erro fonético do jornalismo impresso.",
      "Eliminar a necessidade de publicar fotografias da ocorrência."
    ],
    correct: 1,
    explanation: "A análise crítica do discurso demonstra que a gramática nunca é inocente: ao empregar a voz passiva sem agente da passiva ('foi destruído', 'foi atingido'), o veículo de comunicação despolitiza o fato, transformando uma violência cometida por sujeitos concretos em um evento quase fatalista da natureza ou sem culpados explícitos. Alternativa B."
  },
  {
    id: "ling_gen_q20",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Gêneros Textuais (O Editorial Jornalístico)",
    difficulty: "Fácil",
    enunciation: "Em um jornal de grande circulação, o texto de gênero 'Editorial' diferencia-se de uma reportagem factual pelo fato de:",
    options: [
      "Ser assinado por um leitor anônimo revoltado com o trânsito da cidade.",
      "Expressar a opinião institucional oficial, a linha política e a postura ideológica da empresa proprietária do jornal perante um assunto relevante da atualidade, sem levar a assinatura de um repórter individual.",
      "Apresentar exclusivamente piadas e tirinhas humorísticas no caderno de domingo.",
      "Noticiar apenas o boletim meteorológico e as cotações de câmbio.",
      "Ser um texto redigido em versos rimados por correspondentes estrangeiros."
    ],
    correct: 1,
    explanation: "Enquanto as matérias jornalísticas de capa buscam a apuração factual dos eventos, o EDITORIAL é o espaço formal onde o órgão de imprensa assume publicamente sua voz corporativa e seus julgamentos de valor sobre os temas em debate na sociedade, orientando o leitor sobre a posição do jornal. Alternativa B."
  },
  {
    id: "ling_gen_q21",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Linguagens",
    topic: "Literatura e Música Popular Brasileira (A Canção como Poesia)",
    difficulty: "Fácil",
    enunciation: "Durante os anos da Ditadura Militar brasileira (1964–1985), compositores da Música Popular Brasileira (como Chico Buarque, Gilberto Gil, Caetano Veloso e Milton Nascimento) contornavam a rigorosa censura prévia policial fazendo uso virtuoso de:",
    options: [
      "Músicas instrumentais sem nenhum som ou harmonia.",
      "Metáforas engenhosas, paráfrases religiosas, jogos de palavras e duplo sentido poético em suas letras (como em 'Cálice' e 'Apesar de Você'), permitindo que mensagens contundentes de protesto e esperança democrática chegassem ao grande público.",
      "Canções com letras de apoio incondicional aos generais governantes.",
      "Panfletos impressos em latim eclesiástico distribuídos em quarteis.",
      "Traduções automáticas de marchas militares prussianas."
    ],
    correct: 1,
    explanation: "A censura do regime autoritário era enfrentada pela criatividade estética dos letristas: em 'Cálice' ('Pai, afasta de mim esse cálice/ De vinho tinto de sangue'), o trocadilho fonético com 'cale-se' desafiava a opressão da mordaça; em 'Apesar de Você', o otimismo popular profetizava a volta da liberdade civil ('amanhã vai ser outro dia'). Alternativa B."
  },
  {
    id: "ling_gen_q22",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Figuras de Linguagem (Eufemismo e Hipérbole)",
    difficulty: "Fácil",
    enunciation: "Quando um indivíduo afirma em uma conversa fúnebre que um ente querido 'partiu para o andar de cima' ou 'virou uma estrelinha no céu' para não pronunciar diretamente a palavra 'morreu', ele está fazendo uso da figura de linguagem denominada:",
    options: [
      "Hipérbole.",
      "Eufemismo.",
      "Ironia sarcástica.",
      "Pleonasmo.",
      "Anacoluto."
    ],
    correct: 1,
    explanation: "O EUFEMISMO é o recurso expressivo que consiste em suavizar, atenuar ou contornar uma palavra, notícia ou ideia considerada excessivamente chocante, rude, dolorosa ou desagradável (como a morte, a demissão ou doenças graves). Alternativa B."
  },
  {
    id: "ling_gen_q23",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Coerência Textual e Quebra de Expectativa",
    difficulty: "Fácil",
    enunciation: "Em textos cômicos e piadas inteligentes, a produção do efeito de riso (o efeito humorístico) decorre fundamentalmente da:",
    options: [
      "Repetição monótona e previsível de dados enciclopédicos óbvios.",
      "Construção de uma linha de raciocínio aparentemente lógica que é abruptamente interrompida no final por uma quebra de expectativa surpreendente ou desfecho inusitado.",
      "Ausência de pontuação no texto.",
      "Utilização exclusiva de vocabulário científico medieval.",
      "Declaração formal de seriedade do autor."
    ],
    correct: 1,
    explanation: "A teoria do humor apoia-se no conceito de incongruência e quebra de expectativa: o narrador conduz o leitor a prever um desfecho convencional coerente com a situação inicial e, no último instante (punchline), introduz uma virada inesperada que desarticula o sentido prévio, provocando o riso pela surpresa intelectual. Alternativa B."
  },
  {
    id: "ling_gen_q24",
    vestibular: "UNESP",
    year: 2023,
    subject: "Linguagens",
    topic: "Linguística (Função Fática da Linguagem)",
    difficulty: "Fácil",
    enunciation: "Expressões corriqueiras utilizadas em telefonemas e diálogos presenciais, tais como 'Alô?', 'Está me ouvindo?', 'Certo?', 'Pois é...' ou 'Veja bem...', nas quais as palavras têm a finalidade básica de iniciar, prolongar, verificar ou interromper o contato comunicativo pelo canal de transmissão, exemplificam a:",
    options: [
      "Função emotiva da linguagem.",
      "Função fática da linguagem.",
      "Função poética da linguagem.",
      "Função metalinguística pura.",
      "Função referencial enciclopédica."
    ],
    correct: 1,
    explanation: "A função fática tem como foco o CANAL de comunicação (o meio físico e a conexão psicológica entre emissor e receptor). Seu propósito não é transmitir informações novas ou profundas, mas testar se a mensagem está chegando e manter o circuito comunicativo aberto e ativo. Alternativa B."
  },
  {
    id: "ling_gen_q25",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Intertextualidade Explícita e Implícita",
    difficulty: "Médio",
    enunciation: "A intertextualidade — o diálogo sutil ou direto que um texto estabelece com outros textos já existentes na tradição cultural — é classificada como IMPLÍCITA quando:",
    options: [
      "O autor cita o nome do autor original e a página do livro entre aspas e com notas de rodapé de padrão ABNT.",
      "Não há menção direta ou citação explícita à fonte original, exigindo do leitor repertório cultural prévio e perspicácia para reconhecer alusões, ecos temáticos ou estruturas emprestadas de obras anteriores.",
      "O texto foi escrito por inteligência artificial em computador quântico.",
      "O texto é uma bula farmacêutica obrigatória por lei.",
      "O livro original foi totalmente queimado e esquecido no mundo."
    ],
    correct: 1,
    explanation: "Na intertextualidade explícita, a referência é direta e transparente (citações bibliográficas, resenhas acadêmicas). Na intertextualidade implícita, a referência é camuflada ou alusiva: o autor não avisa quem está homenageando ou criticando, cabendo ao leitor perspicaz ativar sua bagagem de leitura para fruir a camada mais profunda de significado. Alternativa B."
  },
  {
    id: "ling_gen_q26",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Semântica (Antonímia e Sinonímia)",
    difficulty: "Fácil",
    enunciation: "Na construção da coesão lexical de um parágrafo argumentativo, a substituição criteriosa de uma palavra repetida por um sinônimo contextual adequado permite:",
    options: [
      "Distorcer propositalmente a verdade dos fatos noticiados.",
      "Evitar o empobrecimento estilístico provocado pela repetição vocabular viciosa, enriquecendo o texto e mantendo a continuidade do tema abordado.",
      "Eliminar a necessidade de colocar ponto final nas frases.",
      "Tornar o texto incompreensível para o leitor comum.",
      "Modificar o gênero textual de crônica para poema lírico."
    ],
    correct: 1,
    explanation: "A sinonímia e o uso de hiperônimos (termos mais abrangentes) são recursos vitais de coesão referencial por reiteração lexical: garantem a progressão temática fluida e elegante da redação sem cansar o avaliador com a repetição monótona do mesmo substantivo a cada duas linhas. Alternativa B."
  },
  {
    id: "ling_gen_q27",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Linguagens",
    topic: "Linguagem e Cidadania (O Papel Social da Língua)",
    difficulty: "Fácil",
    enunciation: "A garantia de acesso universal à leitura e à escrita em padrões funcionais (alfabetização e letramento) é considerada pelos organismos internacionais de direitos humanos (como a UNESCO) um pilar indispensável para a cidadania plena porque possibilita ao indivíduo:",
    options: [
      "Compreender criticamente a sociedade em que vive, participar dos debates democráticos, reivindicar seus direitos legais perante o Estado e ter autonomia no mundo do trabalho e da cultura.",
      "Decorar regras gramaticais sem entender o sentido das leis que o regem.",
      "Apenas assinar o próprio nome na certidão de casamento civil.",
      "Votar obrigatoriamente sem questionar as promessas de candidatos políticos.",
      "Submeter-se passivamente a qualquer ordem patronal sem reclamar."
    ],
    correct: 0,
    explanation: "O letramento vai muito além de decodificar letras: ele emancipa o ser humano, permitindo-lhe interpretar criticamente contratos, notícias, bulas e leis, capacitando-o a lutar contra injustiças e a exercer plenamente sua soberania cívica e capacidade criativa no mundo moderno. Alternativa A."
  },
  {
    id: "ling_gen_q28",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Linguagens",
    topic: "Figuras de Sintaxe (Hipérbato e Anacoluto)",
    difficulty: "Médio",
    enunciation: "No verso de abertura do Hino Nacional Brasileiro: 'Ouviram do Ipiranga as margens plácidas/ De um povo heroico o brado retumbante', a ordem direta natural dos termos da oração (Sujeito + Verbo + Objeto Direto) encontra-se invertida. Essa alteração expressiva da ordem sintática usual é denominada:",
    options: [
      "Pleonasmo enfático.",
      "Hipérbato (ou inversão sintática).",
      "Anáfora poética.",
      "Assíndeto narrativo.",
      "Polissíndeto lírico."
    ],
    correct: 1,
    explanation: "O HIPÉRBATO é a figura de sintaxe que consiste na inversão proposital da ordem canônica dos termos da oração por motivos métricos, rítmicos ou de ênfase expressiva. Na ordem direta, o Hino Nacional seria redigido: 'As margens plácidas do Ipiranga ouviram o brado retumbante de um povo heroico'. Alternativa B."
  },
  {
    id: "ling_gen_q29",
    vestibular: "ENEM",
    year: 2023,
    subject: "Linguagens",
    topic: "Linguagem e Tecnologias da Informação (Hipertexto e Leitura Não Linear)",
    difficulty: "Fácil",
    enunciation: "A navegação em páginas da web introduziu uma modalidade inovadora de leitura baseada no 'hipertexto'. A principal inovação cognitiva e estrutural do hipertexto em comparação ao livro impresso tradicional reside no fato de que:",
    options: [
      "O hipertexto proíbe qualquer tipo de reflexão pessoal do leitor.",
      "Permite uma leitura multilinear, interativa e aberta, na qual o próprio leitor constrói seu trajeto ao clicar em links, imagens, vídeos e referências cruzadas conectadas em rede.",
      "Não contém palavras e expressa-se apenas por códigos binários matemáticos.",
      "Exige a leitura estrita e sequencial da primeira à última linha sem interrupções.",
      "Elimina a necessidade de energia elétrica para funcionar."
    ],
    correct: 1,
    explanation: "O hipertexto quebra a linearidade da página de papel: ao clicar em hiperlinks embutidos, o leitor salta entre textos, vídeos, podcasts e gráficos, tornando-se coautor ativo da montagem de seu próprio percurso de aprendizagem e leitura na rede cibernética. Alternativa B."
  },
  {
    id: "ling_gen_q30",
    vestibular: "UNESP",
    year: 2024,
    subject: "Linguagens",
    topic: "Semântica e Pragmática (Pressupostos e Subentendidos)",
    difficulty: "Médio",
    enunciation: "Na frase: 'Maria finalmente parou de fumar após o nascimento do filho', o verbo 'parou' veicula uma informação pressuposta de que:",
    options: [
      "Maria nunca colocou um cigarro na boca durante a juventude.",
      "Maria fumava regularmente antes do nascimento do filho.",
      "O filho de Maria já é médico pneumologista formado.",
      "Fumar não prejudica a saúde dos pulmões.",
      "Maria nunca teve filhos biológicos."
    ],
    correct: 1,
    explanation: "Os pressupostos linguísticos são informações implícitas que decorrem necessariamente de marcas gramaticais ou lexicais presentes na própria frase (verbos de mudança de estado como 'parar', 'começar', advérbios como 'finalmente' ou 'ainda'). Para que alguém possa 'parar' de praticar uma ação, é condição logicamente mandatória que praticasse essa ação anteriormente. Alternativa B."
  },
  {
    id: "ling_gen_q31",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Figuras de Linguagem (Pleonasmo e Hipérbole)",
    difficulty: "Fácil",
    enunciation: "Na linguagem cotidiana e poética, frases como 'Estou morrendo de sede!' ou 'Já te avisei um milhão de vezes sobre isso!' utilizam o exagero intencional e desmedido de uma ideia com o propósito de conferir maior expressividade ao enunciado. Essa figura de linguagem é a:",
    options: [
      "Eufemismo atenuador.",
      "Hipérbole.",
      "Catacrese anatômica.",
      "Metonímia quantitativa.",
      "Ironia fina."
    ],
    correct: 1,
    explanation: "A HIPÉRBOLE é a figura de pensamento que opera por meio do exagero deliberado e desproporcional da realidade (afirmar que chorou 'rios de lágrimas' ou esperar por 'séculos'), amplificando a intensidade da emoção ou sensação comunicada sem intenção de enganar literalmente o ouvinte. Alternativa B."
  },
  {
    id: "ling_gen_q32",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Gêneros Textuais (O Relato de Memórias)",
    difficulty: "Fácil",
    enunciation: "O gênero memorialístico (memórias literárias e autobiografias de escritores, como em Graciliano Ramos ou Conceição Evaristo) caracteriza-se pela recuperação de episódios do passado a partir da perspectiva subjetiva do narrador em primeira pessoa. Esse gênero destaca-se por:",
    options: [
      "Apresentar uma reconstituição impessoal de fatos históricos desprovida de qualquer emoção individual.",
      "Articular a memória afetiva íntima com a crônica social e histórica de uma época, refletindo sobre as vivências que moldaram a identidade do sujeito que rememora.",
      "Ser um manual estrito de receitas farmacêuticas tradicionais.",
      "Fazer previsões futuristas sobre a colonização de Marte.",
      "Descrever exclusivamente a vida biológica de animais exóticos."
    ],
    correct: 1,
    explanation: "A escrita de memórias é uma ponte entre o íntimo e o coletivo: ao puxar os fios da lembrança da infância, da casa materna e dos amores perdidos, o memorialista recria a atmosfera material, linguística e moral de todo um tempo histórico que se foi, enriquecendo o patrimônio cultural de uma sociedade. Alternativa B."
  },
  {
    id: "ling_gen_q33",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Linguagens",
    topic: "Análise do Discurso (O Papel dos Adjetivos Valorativos)",
    difficulty: "Médio",
    enunciation: "Em notícias e reportagens que pretendem aparentar neutralidade informativa, a escolha de adjetivos e advérbios modalizadores (como 'medida desastrosa', 'reforma inútil' ou 'infelizmente') revela que:",
    options: [
      "O texto é uma transcrição matemática perfeitamente desprovida de subjetividade.",
      "O enunciador emite julgamentos de valor implícitos, orientando a interpretação do leitor e revelando a não neutralidade de todo ato de linguagem.",
      "O redator cometeu uma infração às regras de ortografia vigente.",
      "A notícia foi redigida por uma criança de escola primária.",
      "Todos os leitores concordam obrigatoriamente com o autor."
    ],
    correct: 1,
    explanation: "A análise discursiva comprova que a linguagem é sempre axiológica (carregada de valores): adjetivos avaliativos e advérbios modalizadores funcionam como 'pistas linguísticas' que traem a posição ideológica do locutor, demonstrando que a objetividade absoluta no jornalismo é um mito. Alternativa B."
  },
  {
    id: "ling_gen_q34",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Linguagens",
    topic: "Figuras de Linguagem (Catacrese)",
    difficulty: "Fácil",
    enunciation: "Expressões consagradas na língua como 'a asa da xícara', 'o dente de alho', 'a perna da mesa' ou 'a maçã do rosto' exemplificam o emprego da catacrese, que ocorre quando:",
    options: [
      "O autor deseja enganar propositalmente o interlocutor.",
      "Utiliza-se metaforicamente uma palavra fora de seu sentido original para nomear um objeto por falta de um termo específico próprio consagrado na língua.",
      "Se cometem erros crônicos de ortografia em vestibulares oficiais.",
      "Apenas poetas românticos traduzem termos do latim clássico.",
      "Palavras estrangeiras são banidas da gramática."
    ],
    correct: 1,
    explanation: "A CATACRESE é uma metáfora que se desgastou e cristalizou pelo uso cotidiano: por não existir um termo específico para a haste de segurar a xícara ou o suporte de sustentação da mesa, a comunidade linguística empresta termos anatômicos ('asa', 'perna', 'dente', 'boca do estômago') para preencher a lacuna lexical. Alternativa B."
  },
  {
    id: "ling_gen_q35",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Linguagem e Inclusão Social (A Língua Brasileira de Sinais - LIBRAS)",
    difficulty: "Fácil",
    enunciation: "Reconhecida oficialmente pela Lei Federal nº 10.436/2002 como meio legal de comunicação e expressão da comunidade surda no Brasil, a Língua Brasileira de Sinais (LIBRAS) é caracterizada pela linguística como uma língua:",
    options: [
      "Composta por gestos miméticos simples sem gramática própria, subordinada totalmente à língua portuguesa escrita.",
      "Natural e autônoma, dotada de sistema linguístico próprio com regras fonológicas (parâmetros de configuração de mão, ponto de articulação e movimento), morfológicas e sintáticas completas.",
      "Universal e idêntica em todos os países do mundo sem variações.",
      "Exclusiva de ambientes hospitalares para tratamento fonoaudiológico.",
      "Proibida em repartições públicas e escolas regulares de ensino."
    ],
    correct: 1,
    explanation: "A LIBRAS não é mímica nem código artificial: é uma língua visual-espacial viva e completa com estrutura gramatical autônoma em relação ao português oral, permitindo a expressão de conceitos abstratos, sentimentos, filosofia e ciências, sendo um direito fundamental de cidadania e identidade da comunidade surda brasileira. Alternativa B."
  },
  // ==========================================
  // BLOCO 2: LITERATURA BRASILEIRA & PORTUGUESA GERAL (35 QUESTÕES)
  // ==========================================
  {
    id: "ling_lit_q1",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Classicismo Português (Camões e 'Os Lusíadas')",
    difficulty: "Médio",
    enunciation: "Publicado em 1572 por Luís Vaz de Camões, o poema épico 'Os Lusíadas' celebra as navegações portuguesas no século XVI (notadamente a viagem pioneira de Vasco da Gama às Índias contornando o Cabo das Tormentas). No episódio de despedida da armada na praia de Belém (Canto IV), a voz crítica e dissonante que condena a ambição desmedida do império ultramarino e prevê desgraças e mortes no mar é personificada na figura do:",
    options: [
      "Gigante Adamastor.",
      "Velho do Restelo.",
      "Deus Baco enfurecido.",
      "Rei D. Sebastião.",
      "Cavaleiro Magriço."
    ],
    correct: 1,
    explanation: "O Velho do Restelo é a personificação clássica da prudência conservadora e da advertência moral contra a 'glória de mandar' e a 'vã cobiça'. Ele se levanta em meio ao povo na praia para denunciar que as conquistas ultramarinas trariam o despovoamento do reino, a ruína agrícola e a perda trágica de vidas de jovens portugueses nos oceanos. Alternativa B."
  },
  {
    id: "ling_lit_q2",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Barroco Brasileiro (Gregório de Matos e o 'Boca do Inferno')",
    difficulty: "Médio",
    enunciation: "O poeta barroco Gregório de Matos Guerra (1636–1696), apelidado de 'Boca do Inferno' na Salvador colonial do século XVII, produziu uma obra poética multifacetada dividida em poesia lírica, sacra e satírica. Em sua vertente satírica, o poeta notabilizou-se por:",
    options: [
      "Elogiar subservientemente a honestidade de todos os governadores e bispos portugueses.",
      "Desferir críticas mordazes, corrosivas e sem pudores contra a corrupção das autoridades coloniais, a cupidez do clero venal, a hipocrisia social e a miscigenação na Bahia.",
      "Escrever exclusivamente poemas sobre a fauna amazônica em linguagem indígena.",
      "Defender o retorno imediato à Idade Média feudal.",
      "Criar o romance policial moderno no Brasil."
    ],
    correct: 1,
    explanation: "Gregório de Matos inaugurou a veia satírica e iconoclasta da literatura brasileira: em sonetos e décimas em linguagem crua e engenhosa, fustigou a venalidade dos governadores gerais, a avareza dos padres, a decadência moral da aristocracia e a miscigenação social da Cidade da Bahia ('Triste Bahia! ó quão dessemelhante...'). Alternativa B."
  },
  {
    id: "ling_lit_q3",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Barroco e Oratória (Padre Antônio Vieira e o 'Sermão da Sexagésima')",
    difficulty: "Difícil",
    enunciation: "Proferido em 1655 na Capela Real de Lisboa, o célebre 'Sermão da Sexagésima', do Padre Antônio Vieira, constitui uma brilhante reflexão metalinguística sobre a própria arte da oratória sagrada baseada na parábola evangélica do semeador ('O semeador saiu a semear a sua semente'). Nesse sermão, Vieira combate frontalmente o estilo barroco 'cultista' dos pregadores da época, afirmando que para a palavra de Deus frutificar nos corações é necessário:",
    options: [
      "Usar palavras difíceis, trocadilhos vazios e labirintos verbais obscuros.",
      "Seguir o rigor do conceptismo (o jogo dialético das ideias e conceitos), unindo a clareza e a coerência lógica do discurso à correspondência moral entre o que o pregador prega e aquilo que ele pratica no dia a dia.",
      "Cobrar indulgências em ouro dos fiéis após cada oração.",
      "Pregar exclusivamente em latim arcaico sem tradução.",
      "Proibir a leitura da Bíblia pelos cidadãos comuns."
    ],
    correct: 1,
    explanation: "Vieira critica impiedosamente os pregadores 'gongóricos' que desfilam vaidades e charadas linguísticas estéreis no púlpito: 'Fazer uma árvore de palavras não é pregar, é pintar'. Para Vieira, o verdadeiro sermão deve ter alma e substância argumentativa (conceptismo), movendo a vontade e a conduta dos ouvintes pela força moral dos conceitos. Alternativa B."
  },
  {
    id: "ling_lit_q4",
    vestibular: "ENEM",
    year: 2023,
    subject: "Linguagens",
    topic: "Arcadismo Brasileiro (Neoclassicismo e os Preceitos Latinos)",
    difficulty: "Fácil",
    enunciation: "Desenvolvido em Minas Gerais no século XVIII em pleno ciclo do ouro, o Arcadismo (Neoclassicismo) refletiu a busca de simplicidade, harmonia e racionalidade inspirada na Antiguidade Greco-Latina. Os poetas árcades (como Cláudio Manuel da Costa e Tomás Antônio Gonzaga) adotavam pseudônimos pastoris e cultivavam lemas poéticos latinos tais como o 'fugere urbem' e o 'locus amoenus', que significam, respectivamente:",
    options: [
      "Aproveitar o dia intensamente e temer a morte eterna.",
      "A fuga da cidade poluída e barulhenta e o refúgio em um lugar aprazível, bucólico e calmo em contato com a natureza.",
      "A celebração da riqueza em ouro e o luxo aristocrático nos palácios.",
      "A condenação de qualquer sentimento amoroso entre pastores.",
      "A submissão absoluta às ordens da Inquisição espanhola."
    ],
    correct: 1,
    explanation: "Os poetas árcades rejeitaram os excessos retóricos e o pessimismo angustiado do Barroco: preconizavam o 'fugere urbem' (escapar do caos e da ganância urbana das vilas mineradoras), a 'aurea mediocritas' (a vida simples na medida áurea, sem excesso de luxo nem miséria) e o 'locus amoenus' (o refúgio campestre sereno onde os pastores entoavam versos às suas amadas). Alternativa B."
  },
  {
    id: "ling_lit_q5",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Romantismo Brasileiro (1ª Geração: Gonçalves Dias)",
    difficulty: "Médio",
    enunciation: "A Primeira Geração da poesia romântica brasileira, consolidada após a Independência política de 1822 e liderada por Gonçalves Dias, assumiu o projeto estético e ideológico de construir uma identidade literária autenticamente nacional. Para alcançar esse objetivo, os poetas dessa geração elegeram como herói mítico da nacionalidade:",
    options: [
      "O imigrante europeu assalariado das lavouras de café.",
      "O indígena nativo, retratado de forma idealizada como o nobre guerreiro cavalheiresco e símbolo maior da pureza das origens brasileiras (o indianismo romântico).",
      "O soldado da Guarda Nacional dos grandes latifúndios.",
      "O imperador D. Pedro I como cavaleiro andante medieval.",
      "O bandeirante paulista caçador de escravizados."
    ],
    correct: 1,
    explanation: "Como o Brasil não possuía cavalaria medieval nem deuses mitológicos greco-romanos para ancorar sua epopeia nacional, os poetas da 1ª geração romântica (como Gonçalves Dias em 'I-Juca Pirama' e José de Alencar em 'O Guarani') idealizaram o indígena como o equivalente brasileiro do cavaleiro medieval: destemido, honrado e em perfeita comunhão com a exuberante natureza da terra. Alternativa B."
  },
  {
    id: "ling_lit_q6",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Romantismo Brasileiro (2ª Geração: O Mal do Século de Álvares de Azevedo)",
    difficulty: "Fácil",
    enunciation: "A Segunda Geração da poesia romântica brasileira (o Ultrarromantismo ou geração 'Mal do Século', inspirada no lorde inglês George Byron e no romance 'Os Sofrimentos do Jovem Werther', de Goethe) teve como expoente máximo o jovem escritor Álvares de Azevedo (autor de 'Lira dos Vinte Anos' e 'Noite na Taverna'). Essa geração poética caracterizou-se pelo:",
    options: [
      "Engajamento político direto na luta pela industrialização do país.",
      "Subjetivismo exacerbado, pessimismo, tédio da existência (spleen), atração pela noite, pelo mistério e pela morbidez, e a idealização da morte prematura como único alívio para as dores do amor inalcançável.",
      "Culto do equilíbrio clássico racional e dos versos alexandrinos perfeitos.",
      "Realismo científico centrado na biologia e na seleção natural.",
      "Otimismo ufanista que celebrava o progresso das cidades."
    ],
    correct: 1,
    explanation: "Os poetas ultrarromânticos viveram a desilusão do idealismo romântico: marcados pela tuberculose e pela solidão dos internatos, mergulharam na melancolia boêmia, na necrofilia poética, na fantasia e no desejo obsessivo de morrer jovem ('Se eu morresse amanhã, viria ao menos/ Fechar meus olhos minha triste mãe...'). Alternativa B."
  },
  {
    id: "ling_lit_q7",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Linguagens",
    topic: "Romantismo Brasileiro (3ª Geração: O Condoreirismo de Castro Alves)",
    difficulty: "Fácil",
    enunciation: "A Terceira Geração romântica (o Condoreirismo), simbolizada pela figura majestosa do pássaro condor que sobrevoa as cordilheiras dos Andes com visão ampla dos horizontes, teve em Antônio de Castro Alves (1847–1871, o 'Poeta dos Escravos') sua voz mais poderosa. Em clássicos como 'O Navio Negreiro' e 'Vozes d'África', a poesia de Castro Alves destaca-se pelo:",
    options: [
      "Intimismo fúnebre desconectado dos problemas políticos do país.",
      "Tom oratório e grandiloquente de protesto indignado, que coloca a arte a serviço da denúncia veemente do horror da escravidão africana e da defesa da causa abolicionista e republicana.",
      "Elogio submisso aos capitães de navios mercantes negreiros.",
      "Uso de versos curtos humorísticos sobre a rotina da corte.",
      "Desprezo pelos direitos humanos universais."
    ],
    correct: 1,
    explanation: "Castro Alves revolucionou o romantismo brasileiro ao descer da torre de marfim dos lamentos individuais para erguer a voz nas tribunas em defesa dos oprimidos. Em 'O Navio Negreiro', utiliza recursos oratórios de alta voltagem épico-dramática para retratar a tragédia do tráfico negreiro ('Senhor Deus dos desgraçados!/ Dizei-me vós, Senhor Deus!/ Se é loucura... se é verdade/ Tanto horror perante os céus?!'). Alternativa B."
  },
  {
    id: "ling_lit_q8",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Realismo Brasileiro (Machado de Assis e as 'Memórias Póstumas de Brás Cubas')",
    difficulty: "Médio",
    enunciation: "Publicado em 1881, o romance 'Memórias Póstumas de Brás Cubas', de Machado de Assis, inaugurou o Realismo no Brasil e operou uma profunda revolução estética na ficção em língua portuguesa. A inovação estrutural primordial do romance reside na escolha do narrador:",
    options: [
      "Um narrador onisciente e piedoso que perdoa os pecados de todas as personagens.",
      "Um 'defunto autor' (que escreve suas memórias após a própria morte, do túmulo), o que lhe confere liberdade absoluta para desdenhar das convenções burguesas, fazer digressões metalinguísticas irônicas e expor sem pudores a desfaçatez, o tédio e a hipocrisia de sua própria classe social dominante.",
      "Um indígena heroico que relata a conquista da terra virgem.",
      "Uma jovem virgem romântica que morre por amor não correspondido.",
      "Um operário que organiza uma greve fabril socialista."
    ],
    correct: 1,
    explanation: "Como adverte o próprio narrador no prólogo 'Ao Leitor': 'eu não sou propriamente um autor defunto, mas um defunto autor, para quem a campa foi outro berço'. Livre das pressões da opinião pública terrena e da necessidade de agradar vivos, Brás Cubas disseca o parasitismo da elite senhorial do século XIX e termina sua vida com um balanço amargamente negativo e cínico: 'não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria'. Alternativa B."
  },
  {
    id: "ling_lit_q9",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Realismo Brasileiro (Machado de Assis e 'Dom Casmurro')",
    difficulty: "Médio",
    enunciation: "No romance 'Dom Casmurro' (1899), a narrativa da suposta traição conjugal entre Capitu e Escobar é conduzida em primeira pessoa pelo narrador Bento Santiago ('Bentinho', o Casmurro solitário). A moderna crítica literária machadiana adverte que o leitor atento não deve tomar o adultério como fato indubitável porque Bentinho é um narrador:",
    options: [
      "Totalmente isento, neutro e imparcial, que baseia sua história em provas fotográficas inquestionáveis.",
      "Não confiável e profundamente parcial, corroído pelo ciúme doentio, pela imaginação obsessiva e pela necessidade psicológica de justificar perante a si mesmo o abandono e o exílio impostos à esposa e ao filho Ezequiel.",
      "Fictício criado por José de Alencar para exaltar a moral cristã.",
      "Que confessa ter inventado todas as personagens durante um delírio febril.",
      "Estrangeiro que não dominava a língua portuguesa falada no Rio de Janeiro."
    ],
    correct: 1,
    explanation: "A genialidade de Machado de Assis em 'Dom Casmurro' reside justamente na ambiguidade insolúvel: tudo o que sabemos sobre os 'olhos de ressaca' e a alegada traição de Capitu nos é contado exclusivamente pelo filtro envenenado e melancólico do próprio acusador na velhice, transformando o romance em um monumental tribunal psicológico sobre a obsessão e os limites da verdade subjetiva. Alternativa B."
  },
  {
    id: "ling_lit_q10",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Linguagens",
    topic: "Naturalismo Brasileiro (Aluísio Azevedo e 'O Cortiço')",
    difficulty: "Médio",
    enunciation: "Publicado em 1890, o romance naturalista 'O Cortiço', de Aluísio Azevedo, reflete a influência direta do determinismo biológico e social e do positivismo de Hippolyte Taine (segundo o qual o homem é determinado pela raça, pelo meio e pelo momento histórico). Na construção estética do romance, essa concepção manifesta-se através do:",
    options: [
      "Espiritualismo místico de personagens que levitam por milagre divino.",
      "Zoomorfismo (ou animalização) dos comportamentos dos moradores do cortiço, comparados frequentemente a animais movidos por instintos sexuais e de sobrevivência básica, e na personificação da própria estalagem coletiva como um organismo vivo gigantesco que corrompe quem nela penetra (como o português Jerônimo).",
      "Elogio à monarquia e à pureza das elites aristocráticas coloniais.",
      "Uso de versos livres surrealistas sem enredo romanesco.",
      "Narrativa em que todos os conflitos são solucionados por acordos sindicais pacíficos."
    ],
    correct: 1,
    explanation: "No Naturalismo, o ser humano é visto como um animal condicionado por suas pulsões biológicas e pelo meio ambiente promíscuo. Em 'O Cortiço', a habitação coletiva ferve como um formigueiro humano ('nascia de um chão lodoso e de uma poça de lama'), onde o trabalhador honesto Jerônimo sucumbe ao calor tropical, à cachaça e à sensualidade instintiva da mulata Rita Baiana, degradando-se física e moralmente. Alternativa B."
  },
  {
    id: "ling_lit_q11",
    vestibular: "ENEM",
    year: 2023,
    subject: "Linguagens",
    topic: "Parnasianismo Brasileiro (A Estética da Arte pela Arte)",
    difficulty: "Fácil",
    enunciation: "O Parnasianismo, que dominou a poesia brasileira oficial no final do século XIX e início do século XX (tendo como tríade célebre Olavo Bilac, Raimundo Correia e Alberto de Oliveira), caracterizou-se pela:",
    options: [
      "Defesa do verso livre, da linguagem coloquial da rua e da temática social revolucionária.",
      "Doutrina da 'arte pela arte', culto fanático da perfeição formal (métrica decassílaba e alexandrina rigorosa, rimas ricas e raras), impassibilidade emocional (recusa ao sentimentalismo romântico) e valorização de temas mitológicos e objetos clássicos (como vasos gregos).",
      "Rejeição de qualquer norma gramatical em prol da oralidade indígena.",
      "Poesia mística e religiosa cristã sobre a salvação das almas no purgatório.",
      "Combate militante contra a abolição da escravidão."
    ],
    correct: 1,
    explanation: "Os poetas parnasianos viam-se como lapidários e ourives da palavra: em poemas como 'Profissão de Fé', de Olavo Bilac, o fazer poético é comparado ao trabalho paciente do escultor que talha o mármore ou lapida o ouro ('Invejo o ourives quando escrevo:/ Trato o verso, lavro e esmaltro...'). A poesia parnasiana privilegia a forma impecável, a erudição vocabular e a contenção dos sentimentos. Alternativa B."
  },
  {
    id: "ling_lit_q12",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Simbolismo Brasileiro (Cruz e Sousa e a Poesia da Transcendência)",
    difficulty: "Médio",
    enunciation: "Em 1893, o poeta negro catarinense João da Cruz e Sousa (1861–1898, o 'Cisne Negro') publicou 'Broquéis' e 'Missal', inaugurando o Simbolismo no Brasil. A poesia de Cruz e Sousa é marcada pela constante tensão entre o sofrimento terreno (agravado pelo preconceito racial de sua época) e o anseio de transcendência espiritual, expressa estilisticamente através de:",
    options: [
      "Uma linguagem crua e jornalística desprovida de qualquer musicalidade.",
      "Musicalidade obsessiva dos versos (aliterações e assonâncias), sinestesias, símbolos cósmicos, maiúsculas alegorizantes e a onipresença cromática da cor branca (o luar, a neve, a névoa, o marfim e as brancuras astrais) como busca da pureza incorpórea.",
      "Celebração cega do capitalismo fabril britânico.",
      "Poemas em tópicos instrutivos sobre a agricultura.",
      "Crítica satírica e bem-humorada aos políticos do império."
    ],
    correct: 1,
    explanation: "Cruz e Sousa levou o simbolismo brasileiro às maiores alturas líricas: seus versos são cânticos etéreos de busca da luz metafísica ('Ó Formas alvas, brancas, Formas claras/ De luares, de neves, de neblinas...'). A cor branca simboliza a desmaterialização da dor do corpo e a aspiração ao absoluto cósmico, sublimando as amarguras de uma existência marcada pela discriminação racial e pela pobreza. Alternativa B."
  },
  {
    id: "ling_lit_q13",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Pré-Modernismo (Euclides da Cunha e 'Os Sertões')",
    difficulty: "Médio",
    enunciation: "Publicado em 1902, o livro-reportagem monumental 'Os Sertões', de Euclides da Cunha, divide-se em três partes simétricas ('A Terra', 'O Homem' e 'A Luta') para documentar o massacre do arraial messiânico de Canudos no sertão baiano pelo Exército republicano em 1897. Na segunda parte ('O Homem'), Euclides cunha a célebre definição de que 'o sertanejo é, antes de tudo, um forte'. Essa caracterização visa ressaltar:",
    options: [
      "A beleza plástica atlética do sertanejo sem imperfeições físicas.",
      "A extraordinária capacidade de resistência física e psicológica do habitante do semiárido, que, apesar de sua aparência inicial curvada e desengonçada na calmaria, transmuda-se em um guerreiro resiliente e heróico quando desafiado pela dureza da seca ou pela violência da luta armada.",
      "A facilidade do sertanejo em viver nos grandes centros urbanos do litoral.",
      "O domínio do sertanejo sobre as finanças bancárias internacionais.",
      "A vitória definitiva e rápida de Antônio Conselheiro sobre a República."
    ],
    correct: 1,
    explanation: "Euclides rompe com a visão pejorativa das elites litorâneas que viam o sertanejo como um ser degenerado: ele descreve o vaqueiro nordestino como um homem adaptado de forma assombrosa ao meio árido hostil ('um Hércules-Quasímodo'), denunciando no final do livro que a expedição militar do governo cometeu um 'crime' hediondo e covarde ao degolar e bombardear até o extermínio uma população faminta e indefesa. Alternativa B."
  },
  {
    id: "ling_lit_q14",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Linguagens",
    topic: "Pré-Modernismo (Lima Barreto e o 'Triste Fim de Policarpo Quaresma')",
    difficulty: "Fácil",
    enunciation: "Em 'Triste Fim de Policarpo Quaresma' (1915), o escritor carioca Lima Barreto cria a inesquecível figura do major Policarpo Quaresma, um nacionalista ingênuo e apaixonado pelo Brasil que envia um requerimento formal à Câmara dos Deputados propondo que o idioma oficial do país passe a ser a língua tupi. A trajetória quixotesca de Quaresma revela:",
    options: [
      "O sucesso imediato de todas as reformas agrárias e industriais propostas pelo major.",
      "A denúncia mordaz da burocracia estatal cínica, da hipocrisia das elites oligárquicas e do autoritarismo violento da República da Espada sob o marechal Floriano Peixoto, culminando na prisão arbitrária e no fuzilamento injusto do herói idealista.",
      "A conversão do Brasil em uma colônia submissa da França.",
      "O triunfo do casamento por amor entre Quaresma e Olga.",
      "A restauração vitoriosa do imperador D. Pedro II no trono imperial."
    ],
    correct: 1,
    explanation: "Lima Barreto constrói uma sátira comovente do ufanismo cego: Quaresma ama seu país em três momentos (na cultura propondo o tupi e o folclore; na agricultura cultivando o sítio do Sossego; e na política defendendo a República contra a Revolta da Armada). Em todas as tentativas, choca-se contra a incompetência, o clientelismo e o terror militar do marechal de ferro Floriano Peixoto, acabando executado como traidor da pátria que tanto amou. Alternativa B."
  },
  {
    id: "ling_lit_q15",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Modernismo Brasileiro (A Semana de Arte Moderna de 1922)",
    difficulty: "Fácil",
    enunciation: "Realizada entre 13 e 18 de fevereiro de 1922 no Teatro Municipal de São Paulo, a Semana de Arte Moderna marcou a emergência das vanguardas modernistas no Brasil. O projeto estético revolucionário liderado por artistas e intelectuais como Mário de Andrade, Oswald de Andrade, Anita Malfatti e Heitor Villa-Lobos tinha como objetivo central:",
    options: [
      "Copiar fielmente os sonetos parnasianos e as telas renascentistas italianas.",
      "Romper com o academicismo passadista, com a submissão servil aos modelos estéticos europeus e com a rigidez parnasiana, propondo a liberdade formal (verso livre, prosa poética), o abrasileiramento da língua e a valorização das raízes populares da cultura brasileira.",
      "Banir a pintura a óleo e proibir qualquer tipo de música instrumental no país.",
      "Defender o retorno à monarquia bragantina colonial.",
      "Exigir que todos os romances fossem escritos exclusivamente em francês."
    ],
    correct: 1,
    explanation: "O Modernismo de 22 operou um terremoto cultural nas artes plásticas, na música e na literatura: sob o influxo das vanguardas europeias (futurismo, cubismo, expressionismo), os modernistas deglutiram essas técnicas para construir uma arte genuinamente brasileira, proclamando a independência estética cem anos após a independência política de 1822. Alternativa B."
  },
  {
    id: "ling_lit_q16",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Modernismo (1ª Fase: O Manifesto Antropófago de Oswald de Andrade)",
    difficulty: "Médio",
    enunciation: "Publicado em maio de 1928 na 'Revista de Antropofagia' por Oswald de Andrade (acompanhado pelo quadro 'Abaporu' de Tarsila do Amaral), o 'Manifesto Antropófago' propôs a metáfora radical da antropofagia cultural como modelo de criação estética brasileira. O conceito de Antropofagia oswaldiana preconiza que o artista brasileiro deve:",
    options: [
      "Isolar-se completamente do resto do mundo, rejeitando qualquer livro ou influência vinda do exterior.",
      "Devorar e digerir criticamente a cultura estrangeira colonizadora, assimilando suas inovações e mesclando-as com os elementos da identidade e da sabedoria indígena e popular local para produzir uma arte brasileira original e descolonizada ('Tupi or not tupi: that is the question').",
      "Praticar o canibalismo literal nas aldeias da Amazônia.",
      "Adotar o idioma inglês como língua literária obrigatória.",
      "Restabelecer a submissão cultural integral ao cânone barroco português."
    ],
    correct: 1,
    explanation: "Inspirado no ritual sagrado dos índios tupinambás (que devoravam os guerreiros inimigos mais valentes para absorver sua força e coragem), Oswald propõe a antropofagia como estratégia pós-colonial: o Brasil não deve nem copiar passivamente a Europa nem se fechar em um nacionalismo ingênuo de avestruz; deve 'engolir' a cultura de ponta ocidental, reelaborá-la sob a perspectiva tropical dos povos originários e devolver ao mundo uma arte transgressora. Alternativa B."
  },
  {
    id: "ling_lit_q17",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Modernismo (1ª Fase: Mário de Andrade e 'Macunaíma')",
    difficulty: "Médio",
    enunciation: "Subtitulada pelo autor como uma 'rapsódia', a obra-prima 'Macunaíma' (1928), de Mário de Andrade, consagrou-se como a narrativa síntese da busca da identidade cultural do Brasil. O protagonista Macunaíma é caracterizado como 'o herói de nossa gente' e 'o herói sem nenhum caráter'. O atributo 'sem nenhum caráter' empregado por Mário de Andrade tem o sentido de indicar que:",
    options: [
      "Macunaíma é um bandido sanguinário que comete crimes hediondos por prazer.",
      "A identidade e o caráter cultural do povo brasileiro ainda não estavam petrificados ou consolidados em um formato rígido definitivo, encontrando-se em formação fluida através da mistura contraditória das matrizes indígena, africana e europeia.",
      "O herói foi criado por inteligência artificial.",
      "O livro é um manual didático de gramática normativa de Lisboa.",
      "O autor pretendia ofender publicamente todos os cidadãos brasileiros."
    ],
    correct: 1,
    explanation: "Mário de Andrade desmistifica o conceito moralista da palavra 'caráter': Macunaíma não é desonesto no sentido burguês, mas 'sem caráter' porque a nação brasileira, jovem e multifacetada, é dotada de plasticidade e maleabilidade psicológica, transitando livremente entre a floresta mítica e a metrópole paulistana, entre o tupi, o nagô e a fala coloquial das ruas. Alternativa B."
  },
  {
    id: "ling_lit_q18",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Modernismo (2ª Fase: Carlos Drummond de Andrade e a Poesia Social)",
    difficulty: "Médio",
    enunciation: "Leia atentamente os versos de 'O Sentimento do Mundo' (1940), de Carlos Drummond de Andrade:\n\n'Tenho apenas duas mãos/ e o sentimento do mundo,/ mas estou cheio de escravos,/ minhas lembranças escorrem/ e o corpo pede balanço/ na fumaça espalhada./ Tenho apenas duas mãos.../ Mas não me conformo:/ a noite é escura mas nós caminhamos/ de mãos dadas.'\n\nNesses versos, escritos no contexto sombrio da Segunda Guerra Mundial e da Ditadura do Estado Novo no Brasil, o eu lírico drummondiano expressa:",
    options: [
      "Uma fuga alienada para o mundo dos sonhos românticos sem interesse pela história.",
      "O choque ético e a angústia solidária do poeta diante da opressão e do sofrimento coletivo da humanidade, superando o isolamento individualista em prol da esperança e da comunhão fraterna com os outros homens ('de mãos dadas').",
      "O entusiasmo festivo com as armas e com a violência militar dos tanques.",
      "A crença cega de que a tecnologia digital resolverá todos os problemas existenciais.",
      "A defesa da censura prévia governamental aos jornais."
    ],
    correct: 1,
    explanation: "Em 'Sentimento do Mundo' e 'A Rosa do Povo' (1945), Drummond alcança o ápice de sua fase de engajamento político e social: o poeta cosmopolita e lúcido não aceita a barbárie do fascismo e da guerra; reconhece a fragilidade de suas 'duas mãos' desarmadas, mas transforma a poesia em instrumento de resistência moral e solidariedade militante em favor da dignidade humana. Alternativa B."
  },
  {
    id: "ling_lit_q19",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Modernismo (2ª Fase: Graciliano Ramos e 'Vidas Secas')",
    difficulty: "Médio",
    enunciation: "No romance 'Vidas Secas' (1938), Graciliano Ramos constrói a saga da família de retirantes sertanejos formada por Fabiano, Sinhá Vitória, os dois meninos e a cachorra Baleia, expulsos pela seca impiedosa. A prosa de Graciliano é notabilizada pela contenção verbal rigorosa, refletindo estilisticamente a própria condição das personagens, que se caracteriza pela:",
    options: [
      "Oratória eloquente e discursos acadêmicos floreados nos comícios políticos.",
      "Incomunicabilidade, penúria linguística e quase mudez, na qual o vaqueiro Fabiano, subjugado pelo latifundiário e pelo soldado amarelo, mal articula palavras humanas e reconhece em si mesmo uma condição sub-humana próxima à dos bichos ('Você é um bicho, Fabiano').",
      "Riqueza financeira que lhes permite comprar terras irrigadas no litoral.",
      "Vida alegre e despreocupada nas festas de salão aristocráticas.",
      "Total indiferença em relação ao sofrimento da cachorra Baleia."
    ],
    correct: 1,
    explanation: "Em 'Vidas Secas', a forma estética mimetiza a tragédia social: as frases são secas, enxutas e sem adjetivação inútil, como a terra rachada da caatinga. A mudez e a dificuldade de expressão verbal de Fabiano e Sinhá Vitória não decorrem de deficiência natural, mas da opressão social brutal que lhes nega a plena humanidade, ao passo que a cachorra Baleia é humanizada em seus sonhos poéticos de um mundo repleto de preás gordos. Alternativa B."
  },
  {
    id: "ling_lit_q20",
    vestibular: "ENEM",
    year: 2023,
    subject: "Linguagens",
    topic: "Modernismo (2ª Fase: Jorge Amado e 'Capitães da Areia')",
    difficulty: "Fácil",
    enunciation: "Em 'Capitães da Areia' (1937), Jorge Amado retrata o cotidiano de um grupo de meninos de rua abandonados que vivem em um trapiche abandonado nas praias de Salvador, liderados pelo jovem Pedro Bala. A narrativa de Jorge Amado distingue-se por:",
    options: [
      "Criminalizar impiedosamente as crianças de rua e defender seu encarceramento perpétuo.",
      "Humanizar os menores marginalizados, denunciando o abandono estatal e o preconceito social da burguesia baiana e mostrando que os atos infracionais decorriam da fome, da miséria e da falta de afeto e oportunidades.",
      "Escrever um romance pastoral barroco com pastores e ovelhas.",
      "Defender a expulsão de todos os negros da cidade de Salvador.",
      "Negar a existência de desigualdade social no Brasil colonial."
    ],
    correct: 1,
    explanation: "Jorge Amado aliou lirismo romântico a forte engajamento social comunista da década de 1930: os 'Capitães da Areia' (como Pedro Bala, Professor, Sem-Pernas, Volta Seca e Dora) são retratados em sua dor, lealdade, desejos de liberdade e solidariedade, expondo a violência de uma sociedade hipócrita que preferia enclausurar os meninos no Reformatório correcional a garantir-lhes dignidade e cidadania. Alternativa B."
  },
  {
    id: "ling_lit_q21",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Modernismo (3ª Fase: Guimarães Rosa e 'Grande Sertão: Veredas')",
    difficulty: "Difícil",
    enunciation: "Publicado em 1956, o romance monumental 'Grande Sertão: Veredas', de João Guimarães Rosa, é estruturado como um longo e ininterrupto monólogo oral do ex-jagunço Riobaldo Tatarana para um interlocutor silencioso da cidade (o 'doutor'). A transcendência filosófica e estética da obra manifesta-se através:",
    options: [
      "De uma cópia realista fotográfica da fala dos camponeses sem inovação linguística.",
      "Da reinvenção prodigiosa da língua portuguesa por meio de neologismos, arcaísmos, sintaxe poética e metafísica sertaneja, onde o espaço geográfico das veredas transforma-se em labirinto universal da alma humana ('O sertão está em toda parte', 'O sertão é o mundo'), marcado pelo pacto com o diabo e pelo amor inominável por Diadorim.",
      "De uma narrativa policial tradicional com detetive britânico desvendando crimes.",
      "Da descrição burocrática de leis de trânsito rural.",
      "De um tratado teológico que prova a inexistência do amor humano."
    ],
    correct: 1,
    explanation: "Guimarães Rosa operou a maior revolução estilística da prosa brasileira do século XX: em um fluxo oral denso e vertiginoso, funde a fala rude do sertanejo mineiro ao grego clássico e ao latim para debater os grandes enigmas da condição humana: o bem e o mal, a existência real ou imaginária do demônio ('o diabo na rua, no meio do redemunho...'), a coragem e a dor do amor secreto e sublime por Diadorim. Alternativa B."
  },
  {
    id: "ling_lit_q22",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Modernismo (3ª Fase: João Cabral de Melo Neto e 'Morte e Vida Severina')",
    difficulty: "Fácil",
    enunciation: "O clássico 'Morte e Vida Severina' (1955), subtitulado por João Cabral de Melo Neto como 'Auto de Natal Pernambucano', acompanha a peregrinação do retirante Severino, que foge da seca da caatinga sertaneja em direção ao litoral do Recife em busca de trabalho e sobrevivência. No clímax da narrativa, à beira do rio Capibaribe, Severino desiste de cometer o suicídio ao presenciar:",
    options: [
      "O recebimento de uma grande herança em barras de ouro de um coronel.",
      "O nascimento humilde e milagroso de uma nova criança (o filho do mestre carpina José), que reafirma a vitória teimosa e renovada da VIDA contra a omnipresença da morte na miséria ('E não há melhor resposta/ que o espetáculo da vida:/ vê-la desfiar seu fio...').",
      "A chegada de tropas do Exército para socorrê-lo em ambulâncias modernas.",
      "A chuva torrencial milagrosa que cobre todo o sertão de verde.",
      "A entrega de passagens de avião para emigrar para os Estados Unidos."
    ],
    correct: 1,
    explanation: "João Cabral estrutura o poema na tradição dos autos medievais de Natal: após percorrer uma via-crúcis onde só encontra cortejos fúnebres e enterros de 'severinos' que morrem da mesma morte de velhice aos trinta anos, o retirante contempla no mangue o parto humilde de um recém-nascido. A fragilidade e a força indômita do bebê que chora operam a epifania final: a vida, teimosa como uma semente, explode e responde ao desespero. Alternativa B."
  },
  {
    id: "ling_lit_q23",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Modernismo (3ª Fase: Clarice Lispector e a Epifania Existencial)",
    difficulty: "Médio",
    enunciation: "A literatura de Clarice Lispector (autora de 'Perto do Coração Selvagem', 'Laços de Família' e 'A Hora da Estrela') rompeu com a cronologia factual exterior para mergulhar no tempo psicológico interior das personagens. Um traço distintivo fundamental da narrativa clariceana é o instante da 'EPIFANIA', conceituado como:",
    options: [
      "O momento em que um fantasma surge na sala de visitas assustando as visitas.",
      "Um choque existencial ou revelação súbita e desestabilizadora despertada por um evento aparentemente insignificante e banal do cotidiano (como o encontro com um cego mascando chicletes, uma barata que sai do armário ou o ovo na mesa), que rompe a casca protetora da vida burguesa e escancara a nudez crua e assustadora do ser.",
      "Uma festa de aniversário luxuosa onde todos os convidados cantam felizes.",
      "A vitória do herói em um duelo de espadas contra o vilão.",
      "A assinatura formal de um tratado de paz comercial entre nações."
    ],
    correct: 1,
    explanation: "A epifania em Clarice Lispector é a iluminação súbita que desmascara as convenções sociais e familiares: uma faísca corriqueira (um cego, uma rosa, uma barata) desencadeia uma vertigem metafísica que dilacera a identidade acomodada da personagem, obrigando-a a confrontar o mistério vertiginoso da própria existência e a matéria viva do mundo. Alternativa B."
  },
  {
    id: "ling_lit_q24",
    vestibular: "ENEM",
    year: 2023,
    subject: "Linguagens",
    topic: "Modernismo (3ª Fase: Clarice Lispector e 'A Hora da Estrela')",
    difficulty: "Médio",
    enunciation: "No último livro publicado em vida por Clarice Lispector, 'A Hora da Estrela' (1977), a história da jovem retirante alagoana Macabéa (datilógrafa órfã, subnutrida e desprovida de atrativos materiais na periferia do Rio de Janeiro) é narrada por um escritor fictício criado por Clarice: Rodrigo S.M. A escolha de interpôr esse narrador masculino burguês cumpre a função de:",
    options: [
      "Zombar impiedosamente da miséria nordestina de forma preconceituosa.",
      "Expor o doloroso dilema ético e estético do ato da escrita: a consciência culpada do intelectual de classe média que tenta traduzir em palavras a fome e a invisibilidade social de uma criatura que ele mal compreende, transformando a narrativa em uma reflexão metalinguística sobre a alteridade e a injustiça social.",
      "Celebrar a chegada triunfal de Macabéa como atriz famosa de cinema.",
      "Escrever uma cartilha de treinamento para datilógrafos profissionais.",
      "Evitar qualquer menção à solidão urbana."
    ],
    correct: 1,
    explanation: "Rodrigo S.M. sofre para escrever a história de Macabéa: ele hesita, adia o início da narrativa, fuma incessantemente e questiona sua própria legitimidade burguesa para narrar a dor daquela que só come cachorros-quentes e bebe refrigerante. Macabéa é 'incompetente para a vida', e sua 'hora da estrela' só chega ironicamente no instante trágico de seu atropelamento por um Mercedes amarelo reluzente, quando ela finalmente é vista e deita-se no asfalto como uma estrela de cinema. Alternativa B."
  },
  {
    id: "ling_lit_q25",
    vestibular: "UNESP",
    year: 2024,
    subject: "Linguagens",
    topic: "Literatura Contemporânea (Conceição Evaristo e a 'Escrevivência')",
    difficulty: "Fácil",
    enunciation: "A escritora afro-brasileira Conceição Evaristo cunhou o seminal conceito teórico-literário de 'Escrevivência' para definir a sua práxis poética e ficcional (presente em obras consagradas como 'Ponciá Vicêncio', 'Olhos d'Água' e 'Insubmissas Lágrimas de Mulheres'). A escrevivência pode ser sintetizada como:",
    options: [
      "A redação automatizada de textos comerciais por meio de inteligência artificial.",
      "Uma escrita literária visceralmente enraizada nas vivências corporais, ancestrais, históricas e cotidianas de mulheres negras, faveladas e subalternizadas, na qual a memória pessoal e coletiva se entrelaçam para dar voz àqueles que historicamente foram silenciados ('A nossa escrevivência não é para adormecer os da casa-grande, e sim para acordá-los de seus sonos injustos').",
      "A cópia de romances bucólicos da corte de Luís XIV.",
      "Uma técnica de caligrafia medieval executada em couro de cabra.",
      "Poesia sem nenhuma relação com a realidade social brasileira."
    ],
    correct: 1,
    explanation: "A escrevivência (fusão das palavras ESCREVER e VIVER) é a afirmação do protagonismo da mulher negra como sujeito de sua própria narrativa: nasce da memória das mães lavadeiras, da labuta nas favelas, da solidão e da resistência diaspórica, quebrando a tradição hegemônica branca que tratava as pessoas negras apenas como objetos exóticos ou subordinados no texto alheio. Alternativa B."
  },
  {
    id: "ling_lit_q26",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Romantismo em Prosa (José de Alencar e 'Senhora')",
    difficulty: "Médio",
    enunciation: "No romance urbano 'Senhora' (1875), de José de Alencar, a protagonista Aurélia Camargo, após herdar uma fortuna colossal de seu avô, utiliza seu poder econômico para 'comprar' como noivo por cem contos de réis o homem que outrora a havia preterido por um dote mais rico: Fernando Seixas. Na estrutura temática da obra, esse enredo consubstancia uma contundente crítica a:",
    options: [
      "A decadência da agricultura canavieira no Nordeste colonial.",
      "A mercantilização do sacramento do casamento na sociedade burguesa do Rio de Janeiro do século XIX, onde os sentimentos amorosos eram subordinados ao cinismo das convenções financeiras e à caça dotes.",
      "A expulsão dos jesuítas das missões do sul.",
      "A falta de bancos públicos para conceder empréstimos aos pobres.",
      "O uso de roupas de seda pelas damas da corte."
    ],
    correct: 1,
    explanation: "Em 'Senhora', Alencar divide a narrativa em quatro partes com termos comerciais explícitos: 'O Preço', 'Quitação', 'Posse' e 'Resgate'. Aurélia humilha seu marido no quarto nupcial expondo a baixeza de sua ambição pecuniária, convertendo o casamento burguês em uma transação financeira desprovida de amor até que Seixas consiga devolver o dinheiro e reconquistar sua honra. Alternativa B."
  },
  {
    id: "ling_lit_q27",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Modernismo Brasileiro (Manuel Bandeira e o Desbunde Poético)",
    difficulty: "Fácil",
    enunciation: "No poema 'Poética' (1925), Manuel Bandeira proclama a liberdade modernista contra o engessamento acadêmico:\n\n'Estou farto do lirismo comedido/ Do lirismo bem-comportado/ Do lirismo funcionário público com livro de ponto expediente protocolo e manifestações de apreço ao sr. diretor./ Quero antes o lirismo dos loucos/ O lirismo dos bêbados/ O lirismo difícil e pungente dos bêbados.../ Abaixo os puristas!'\n\nA atitude estética defendida por Bandeira nesse manifesto poético expressa:",
    options: [
      "A defesa da censura gramatical e das rimas parnasianas perfeitas.",
      "A ruptura com o lirismo domesticado, burocrático e convencional, reivindicando uma poesia espontânea, visceral, apaixonada e livre de todas as amarras métricas e moralistas da tradição beletrista.",
      "A exigência de que todos os poemas fossem escritos em latim eclesiástico.",
      "A condenação da loucura e da embriaguez criativa.",
      "O apoio à literatura oficial chancelada pela Academia Brasileira de Letras da época."
    ],
    correct: 1,
    explanation: "Manuel Bandeira é o poeta da ternura, da autoironia e da transgressão libertária: em 'Poética', ele dispara contra o lirismo domesticado das repartições públicas e proclama o direito modernista de escrever com todas as palavras da vida, acolhendo o erro fértil, o cotidiano despretensioso e a intensidade das paixões sem freios puristas. Alternativa B."
  },
  {
    id: "ling_lit_q28",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Linguagens",
    topic: "Literatura Portuguesa (Eça de Queirós e o Realismo)",
    difficulty: "Médio",
    enunciation: "Expoente máximo do Realismo em Portugal, Eça de Queirós (1845–1900) publicou em 1875 o romance escandaloso 'O Crime do Padre Amaro' e, em 1888, a sua obra-prima 'Os Maias'. Em seus romances, Eça desfere uma sátira implacável contra os três pilares da decadência da sociedade portuguesa oitocentista:",
    options: [
      "Os operários de fábrica, os marinheiros de barco a vapor e os artistas de circo.",
      "O clero católico hipócrita e corrupto, a burguesia lisboeta provinciana e fútil e a aristocracia parasita ociosa desprovida de qualquer projeto para o país.",
      "Os navegadores renascentistas e os reis godos medievais.",
      "As universidades públicas e os hospitais psiquiátricos modernos.",
      "Os soldados que combatiam nas guerras da África."
    ],
    correct: 1,
    explanation: "Na Geração de 70 (ao lado de Antero de Quental), Eça utilizou a prosa realista com ironia devastadora para dissecar as chagas de Portugal: o celibato hipócrita e a devassidão da Igreja (Amélia e Amaro), o romantismo cafona e o bacharelismo vazio de Lisboa e a tragédia do incesto inconsciente na família Maia (Carlos e Maria Eduarda), reflexo de uma nação estagnada em sonhos do passado. Alternativa B."
  },
  {
    id: "ling_lit_q29",
    vestibular: "ENEM",
    year: 2023,
    subject: "Linguagens",
    topic: "Teatro Brasileiro (O Auto da Compadecida de Ariano Suassuna)",
    difficulty: "Fácil",
    enunciation: "A peça teatral 'Auto da Compadecida' (1955), do dramaturgo paraibano Ariano Suassuna (fundador do Movimento Armorial), funde a tradição do teatro medieval ibérico (como os autos de Gil Vicente) com a rica literatura de cordel e o romanceiro popular do sertão nordestino. As façanhas e trapaças do anti-herói pobre João Grilo para escapar da morte e enganar o padeiro e o bispo o caracterizam tipicamente como:",
    options: [
      "Um vilão perverso desprovido de qualquer empatia popular.",
      "A clássica figura do 'amarelo' e do pícaro sertanejo, que se vale da inteligência vivaz, da esperteza e do humor como únicas armas de sobrevivência para desafiar a opressão dos poderosos e a própria morte.",
      "Um guerreiro medieval montado em cavalo branco com armadura de prata.",
      "Um latifundiário milionário que compra a absolvição dos pecados.",
      "Um fantasma assustador sem falas de texto."
    ],
    correct: 1,
    explanation: "João Grilo é o pícaro nordestino por excelência: despossuído de terras, dinheiro ou poder político, sua única riqueza é a esperteza da palavra e a capacidade de dar nós cegos na arrogância dos poderosos (o clero avarento e o coronel valentão), conquistando no Julgamento Final a intercessão complacente e maternal da própria Virgem Maria (Nossa Senhora da Compadecida). Alternativa B."
  },
  {
    id: "ling_lit_q30",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Linguagens",
    topic: "Modernismo Poético (Cecília Meireles e o Lirismo Atemporal)",
    difficulty: "Médio",
    enunciation: "A poesia de Cecília Meireles (como em 'Viagem' e 'Romanceiro da Inconfidência') distingue-se no panorama da Geração de 1930 pela busca da musicalidade sutil, da leveza e do despojamento metafísico. Um dos temas mais recorrentes e marcantes de seu lirismo meditativo é:",
    options: [
      "O elogio triunfal da durabilidade inabalável das construções de concreto armado.",
      "A consciência pungente da fugacidade e da efemeridade do tempo (a transitoriedade de todas as coisas vivas, da beleza, dos sentimentos e da própria vida, simbolizada no vento, na água e na fumaça que passam).",
      "A descrição detalhada de armas de fogo e canhões de guerra.",
      "A convocação das massas operárias para o comício partidário.",
      "A defesa do retorno à escravidão colonial."
    ],
    correct: 1,
    explanation: "A lírica ceciliana é marcada por uma profunda sensibilidade melancólica perante a transitoriedade do instante ('Motivo': 'Eu canto porque o instante existe/ e a minha vida está completa./ Não sou alegre nem sou triste:/ sou poeta'). Seus versos tocam com extrema delicadeza a fragilidade da matéria e a permanência perene da arte no fluxo movediço das horas. Alternativa B."
  },
  {
    id: "ling_lit_q31",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Teatro Português (Gil Vicente e o Humanismo)",
    difficulty: "Fácil",
    enunciation: "Pai do teatro português no início do século XVI, Gil Vicente celebrizou-se por seus autos de moralidade e farsas populares (como o 'Auto da Barca do Inferno', 1517), encenados na corte para divertir e educar moralmente a nobreza e o povo. A célebre divisa em latim que resumia a proposta satírica do teatro vicentino era 'ridendo castigat mores', que significa:",
    options: [
      "'A guerra justifica todas as violências.'",
      "'Rindo, corrigem-se os costumes' (criticar e castigar as hipocrisias, vícios e pecados sociais por meio do riso, da caricatura e do humor inteligente).",
      "'Chorando, esquece-se o passado.'",
      "'Apenas os ricos alcançam a salvação divina.'",
      "'Proibido rir nos templos religiosos.'"
    ],
    correct: 1,
    explanation: "Gil Vicente não poupava nenhuma classe social em sua barca: desfilam para o julgamento o Fidalgo presunçoso, o Frade mundano acompanhado de sua amante, o Juiz corrupto, o Agiota usurário e o Sapateiro trapaceiro. Todos são condenados à Barca do Inferno pelo Diabo, enquanto apenas o Parvo (pela sua ingenuidade inocente) e os Quatro Cavaleiros cruzados sobem a bordo da Barca da Glória rumo ao Paraíso. Alternativa B."
  },
  {
    id: "ling_lit_q32",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Modernismo (2ª Fase: Vinicius de Moraes e a Poesia do Amor)",
    difficulty: "Fácil",
    enunciation: "No imortal 'Soneto de Fidelidade' (1946), Vinicius de Moraes sintetiza a sua visão lírica do amor em dois versos finais que se tornaram proverbiais em toda a cultura brasileira:\n\n'Eu possa me dizer do amor (que tive):\nQue não seja imortal, posto que é chama\nMas que seja infinito enquanto dure.'\n\nEssa célebre antítese poética ('não seja imortal... mas que seja infinito enquanto dure') concebe o sentimento amoroso como:",
    options: [
      "Uma obrigação burocrática eterna sem paixão nem desejo carnal.",
      "Uma vivência que, embora não seja eterna no tempo cronológico (pois as paixões humanas podem findar), é vivida com tamanha plenitude, fervor e intensidade no presente que se torna infinita em seu próprio instante de existência.",
      "Um pacto financeiro irrevogável assinado perante testemunhas de cartório.",
      "Um sentimento frio que deve ser evitado pelos poetas modernos.",
      "Uma ilusão que dura rigorosamente menos de um segundo."
    ],
    correct: 1,
    explanation: "Vinicius de Moraes humanizou a poesia do amor: o amor não necessita da promessa abstrata da imortalidade após a morte; enquanto ele arde e existe como chama acesa entre duas pessoas, sua intensidade é total, sublime e inesgotável, condensando toda a infinitude no fugaz instante do abraço e da comunhão. Alternativa B."
  },
  {
    id: "ling_lit_q33",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Linguagens",
    topic: "Modernismo (3ª Fase: Clarice Lispector e 'Laços de Família')",
    difficulty: "Médio",
    enunciation: "No célebre conto 'Amor', da coletânea 'Laços de Família' (1960) de Clarice Lispector, a dona de casa burguesa Ana vive uma rotina serena e protegida cuidando dos filhos e do lar. Ao entrar em um bonde e avistar um homem cego mascando chicletes na rua, Ana é acometida por uma vertigem avassaladora que quebra a ordem plácida de sua existência. O cego funciona na narrativa clariceana como:",
    options: [
      "Um assaltante que rouba a bolsa de compras de Ana.",
      "O detonador epifânico que arranca Ana de sua bolha de segurança doméstica alienada, confrontando-a com a matéria crua, cega e vulnerável da vida e despertando nela uma perigosa compaixão cósmica por todas as coisas vivas.",
      "Um parente distante que ela não via desde a infância.",
      "Um mágico que hipnotiza todos os passageiros do bonde.",
      "Um médico oftalmologista que lhe receita óculos escuros."
    ],
    correct: 1,
    explanation: "Ver o cego mastigando chicletes no escuro do meio-dia quebra a lógica arrumada da casa de Ana: 'o cego mascava chicletes na escuridão'. Desse vislumbre nasce a epifania de 'Amor' — o amor como uma náusea perigosa, uma abertura assustadora para o abismo da vida que Ana posteriormente precisará abafar e recalcar ao voltar para o jantar com o marido e as crianças. Alternativa B."
  },
  {
    id: "ling_lit_q34",
    vestibular: "ENEM",
    year: 2024,
    subject: "Linguagens",
    topic: "Literatura Contemporânea (Itamar Vieira Junior e 'Torto Arado')",
    difficulty: "Fácil",
    enunciation: "Sucesso estrondoso de crítica e público vencedor dos prêmios Jabuti e Oceanos, o romance 'Torto Arado' (2019), do escritor baiano Itamar Vieira Junior, acompanha a trajetória das irmãs Bibiana e Belonísia no sertão da Chapada Diamantina. A força sociopolítica do romance apoia-se principalmente na denúncia de:",
    options: [
      "Guerras futuristas com inteligência artificial no espaço sideral.",
      "A sobrevivência secular de relações de trabalho análogas à escravidão no meio rural brasileiro contemporâneo, no qual trabalhadores negros quilombolas labutam de sol a sol na fazenda sem receber salário em dinheiro nem direito de construir casas de alvenaria em terras que sempre foram suas.",
      "A vida pacífica e rica de magnatas do petróleo em iates luxuosos.",
      "A invasão de piratas holandeses no litoral de Salvador.",
      "A total igualdade de condições entre fazendeiros e trabalhadores rurais."
    ],
    correct: 1,
    explanation: "'Torto Arado' dá voz e dignidade aos trabalhadores de Água Negra: as personagens trabalham sob o sistema da servidão por moradia (podem plantar para comer, mas devem dias de serviço gratuito ao patrão e são proibidas de plantar árvores frutíferas ou erguer casas de tijolo para não criar raízes de posse). O romance resgata a religiosidade ancestral do Jarê e a luta quilombola pelo direito sagrado à terra. Alternativa B."
  },
  {
    id: "ling_lit_q35",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Linguagens",
    topic: "Realismo Brasileiro (Machado de Assis e 'Quincas Borba')",
    difficulty: "Médio",
    enunciation: "No romance 'Quincas Borba' (1891), o filósofo louco Quincas Borba desenvolve a teoria filosófica paródica do 'Humanitismo', cujo princípio nuclear é sintetizado no aforismo cruel: 'Ao vencedor, as batatas!'. Na narrativa machadiana, essa parábola dos dois homens famintos disputando um campo de batatas tem o propósito de satirizar:",
    options: [
      "A agricultura familiar de subsistência no interior paulista.",
      "As teorias deterministas, o darwinismo social e o positivismo do século XIX, demonstrando ironicamente como a sociedade burguesa reveste o egoísmo predador, a guerra de todos contra todos e a eliminação impiedosa dos mais fracos sob uma pretensa roupagem de filosofia científica e progresso da humanidade.",
      "O amor romântico idealizado entre Romeu e Julieta.",
      "A culinária típica das tavernas de marinheiros.",
      "A proibição do consumo de tubérculos no Rio de Janeiro."
    ],
    correct: 1,
    explanation: "Na fábula das batatas, se as duas tribos dividissem o alimento igualmente, ambas morreriam de inanição; a guerra permite que uma tribo extermine a outra e sacie a fome: 'Ao vencido, o ódio ou a compaixão; ao vencedor, as batatas!'. Com essa caricatura feroz do darwinismo social spenceriano, Machado zomba do cinismo com que as elites celebram a vitória dos fortes e o esmagamento dos desvalidos como uma lei natural e nobre do progresso humano. Alternativa B."
  },
  // ==========================================
  // BLOCO 3: AS 9 OBRAS OBRIGATÓRIAS DA FUVEST 2027 (35 QUESTÕES)
  // ==========================================
  // --- LIVRO 1: OPÚSCULO HUMANITÁRIO (1853) - NÍSIA FLORESTA ---
  {
    id: "ling_fuv_q1",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Opúsculo Humanitário - Nísia Floresta)",
    difficulty: "Médio",
    enunciation: "Em 'Opúsculo Humanitário' (1853), a pioneira escritora e educadora potiguar Nísia Floresta realiza uma vigorosa crítica ao modelo pedagógico imposto às mulheres no Brasil do século XIX. A tese central sustentada por Nísia Floresta ao longo do ensaio afirma que:",
    options: [
      "As mulheres devem permanecer exclusivamente restritas aos afazeres domésticos e à costura sem instrução intelectual.",
      "A opressão feminina e a submissão das mulheres decorrem da deliberada e histórica negação de uma educação científica, filosófica e emancipatória, que lhes era negada pelo patriarcado para perpetuar a dominação dos homens.",
      "A educação deve ser privilégio exclusivo dos monges beneditinos da corte.",
      "O ensino secundário deve ser proibido para qualquer pessoa do sexo feminino.",
      "A mulher só deve ler livros religiosos de orações em latim."
    ],
    correct: 1,
    explanation: "Em 'Opúsculo Humanitário', Nísia Floresta demonstra que a suposta 'inferioridade intelectual' das mulheres não é uma condição natural biológica, mas uma construção política e social: a sociedade patriarcal oitocentista instruía as meninas apenas em frivolidades (bordado, piano e etiqueta de salão) para torná-las adereços dóceis do lar, privando a nação brasileira de metade de sua capacidade pensante. Alternativa B."
  },
  {
    id: "ling_fuv_q2",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Opúsculo Humanitário - Nísia Floresta)",
    difficulty: "Médio",
    enunciation: "Ao analisar a influência do filósofo iluminista francês Jean-Jacques Rousseau (especialmente em 'Emílio, ou Da Educação') sobre a formação feminina, Nísia Floresta em 'Opúsculo Humanitário':",
    options: [
      "Concorda integralmente com Rousseau de que a mulher nasceu apenas para servir e agradar ao homem (a personagem Sofia).",
      "Critica contundentemente a contradição de Rousseau, que defendeu a liberdade política universal para os homens, mas reservou às mulheres uma educação subalterna e dependente da vontade masculina.",
      "Considera Rousseau o maior líder feminista da história ocidental.",
      "Defende que as mulheres devem viver no estado de natureza sem cidades.",
      "Afirma que o livro de Rousseau deve ser queimado em praça pública."
    ],
    correct: 1,
    explanation: "Nísia Floresta desmascara as contradições do Iluminismo europeu: aponta que Rousseau, apesar de pregar a igualdade democrática contra o absolutismo, reduziu a educação da mulher (Sofia) à condição de mera coadjuvante passiva destinada a cuidar do repouso e do conforto do homem (Emílio), denunciando esse duplo padrão machista. Alternativa B."
  },
  {
    id: "ling_fuv_q3",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Opúsculo Humanitário - Nísia Floresta)",
    difficulty: "Médio",
    enunciation: "No projeto pedagógico e civilizatório defendido em 'Opúsculo Humanitário', Nísia Floresta vincula a emancipação intelectual e moral das mulheres ao próprio destino político do Brasil. Essa relação estabelece-se pelo fato de que:",
    options: [
      "Uma pátria só pode atingir o verdadeiro progresso moral, civilizatório e democrático se educar dignamente suas mulheres, pois sendo elas as primeiras educadoras dos cidadãos e das futuras gerações, a sua ignorância acorrenta todo o país ao atraso.",
      "As mulheres devem formar regimentos militares exclusivos para conquistar novos territórios na bacia do Prata.",
      "A emancipação feminina provocará a decadência do comércio agrícola.",
      "A instrução científica é desnecessária para o desenvolvimento da pátria.",
      "O país deve transferir o parlamento imperial para a Europa."
    ],
    correct: 0,
    explanation: "Para Nísia Floresta, a libertação feminina não é um capricho individual, mas uma questão de soberania e dignidade nacional: mantendo a mulher ignorante e infantilizada, o Brasil perpetua a brutalidade e o atraso colonial; ao emancipar a inteligência feminina, a sociedade eleva a qualidade moral de toda a cidadania. Alternativa A."
  },
  {
    id: "ling_fuv_q4",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Opúsculo Humanitário - Nísia Floresta)",
    difficulty: "Fácil",
    enunciation: "Considerada a precursora do feminismo no Brasil e pioneira na imprensa e na docência feminina, Nísia Floresta colocou suas teses teóricas em prática ao fundar no Rio de Janeiro o:",
    options: [
      "Colégio Augusto, pioneiro por oferecer às jovens meninas o mesmo currículo rigoroso de ciências, línguas vivas, história e matemática destinado aos rapazes.",
      "Primeiro convento de clausura estrita das Américas.",
      "Sindicato dos operários fabris da tecelagem.",
      "Teatro de ópera lírica da corte.",
      "Clube de caça e pesca do Vale do Paraíba."
    ],
    correct: 0,
    explanation: "Inconformada com os colégios da época que ensinavam apenas prendas domésticas, Nísia Floresta fundou em 1838 o Colégio Augusto no Rio de Janeiro, onde lecionava gramática, literatura, línguas modernas, geografia e ciências para meninas, enfrentando forte resistência conservadora da sociedade patriarcal. Alternativa A."
  },

  // --- LIVRO 2: NEBULOSAS (1872) - NARCISA AMÁLIA ---
  {
    id: "ling_fuv_q5",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Nebulosas - Narcisa Amália)",
    difficulty: "Médio",
    enunciation: "Publicado em 1872 no Rio de Janeiro, o livro de poemas 'Nebulosas', de Narcisa Amália (1852–1924), causou enorme impacto e recebeu entusiásticos elogios públicos de Machado de Assis e do imperador D. Pedro II. A poesia de Narcisa Amália singulariza-se no panorama do Romantismo tardio brasileiro porque:",
    options: [
      "Abandona completamente os versos para adotar tratados de economia política em prosa.",
      "Articula a delicadeza lírica dos afetos e da melancolia feminina com um veemente e corajoso engajamento cívico abolicionista, republicano e de denúncia da opressão contra as mulheres e os escravizados.",
      "Defende o retorno do Brasil ao status de colônia subordinada a Portugal.",
      "Apoia a perpetuação da escravidão nas fazendas de café do Vale do Paraíba.",
      "Recusa qualquer tipo de métrica rimada em prol de manifestos futuristas."
    ],
    correct: 1,
    explanation: "Narcisa Amália rompeu as barreiras impostas às mulheres escritoras de seu tempo (relegadas a temas exclusivamente confessionais e açucarados): em 'Nebulosas', ela ergue sua voz lírica em defesa dos escravizados ('Ode ao Vinte e Oito de Setembro'), canta a fraternidade humana, combate o machismo que silencia a sensibilidade feminina e afirma o protagonismo da mulher pensante. Alternativa B."
  },
  {
    id: "ling_fuv_q6",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Nebulosas - Narcisa Amália)",
    difficulty: "Médio",
    enunciation: "No poema abolicionista 'Ode ao Vinte e Oito de Setembro' (referência direta à promulgação da Lei do Ventre Livre em 1871), presente em 'Nebulosas', Narcisa Amália expressa uma postura lírico-política que:",
    options: [
      "Comemora a libertação dos filhos de escravizadas, mas alerta que a verdadeira justiça só será consumada com a abolição total, irrestrita e imediata do cativeiro de todos os escravizados adultos no país.",
      "Condena qualquer lei que pretenda limitar o poder dos senhores de escravizados.",
      "Exige que as crianças libertas sejam deportadas imediatamente para a Europa.",
      "Celebra a monarquia como a salvadora do povo sem a necessidade de lutas sociais.",
      "Despreza a dor das mães escravizadas nos engenhos."
    ],
    correct: 0,
    explanation: "Com sensibilidade aguçada de mulher e cidadã, Narcisa Amália aplaude o avanço parcial da Lei do Ventre Livre, mas denuncia a crueldade de manter os pais em cativeiro enquanto o bebê é teoricamente 'livre' nos braços de uma mãe escravizada, exigindo a extinção completa e definitiva da vergonha nacional da escravidão. Alternativa A."
  },
  {
    id: "ling_fuv_q7",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Nebulosas - Narcisa Amália)",
    difficulty: "Médio",
    enunciation: "O título da obra 'Nebulosas' funciona como uma poderosa metáfora poética e astronômica da condição da própria mulher e da escritora no século XIX. Essa metáfora alude ao fato de que as nebulosas são:",
    options: [
      "Nuvens de chuva ácida que destroem as cidades industriais.",
      "Aglomerados cósmicos de poeira e gás difusos no céu que, embora vistos da Terra como manchas opacas e misteriosas, abrigam em seu seio o berçário de novas estrelas e a luz criadora do universo, assim como a alma da mulher abafada pelo patriarcado guardava uma imensa força criativa e espiritual oculta.",
      "Satélites artificiais criados para telecomunicações de guerra.",
      "Cometas que causam destruição geológica.",
      "Ilusões de ótica que desaparecem com a luz do dia."
    ],
    correct: 1,
    explanation: "Na cosmologia lírica de Narcisa Amália, a mulher da época era como uma 'nebulosa': vista com preconceito pelo olhar opressor como algo vago, frágil e sem forma definida; todavia, encerrava dentro de si a densidade luminosa de sóis em gestação, pronta para brilhar com esplendor assim que as amarras do preconceito fossem desfeitas. Alternativa B."
  },
  {
    id: "ling_fuv_q8",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Nebulosas - Narcisa Amália)",
    difficulty: "Fácil",
    enunciation: "Além de poetisa consagrada, Narcisa Amália de Campos foi pioneira na imprensa fluminense atuando como jornalista combativa e fundando o periódico 'Gazeta de Resende'. Essa atuação pública corajosa fez com que ela enfrentasse:",
    options: [
      "Aprovação unânime e financiamento ilimitado de todas as oligarquias cafeeiras conservadoras.",
      "O preconceito virulento, a incompreensão social, perseguições e a solidão impostos a mulheres que ousavam exercer profissões intelectuais fora do ambiente doméstico.",
      "A deportação forçada para a ilha de Fernando de Noronha.",
      "A perda do domínio da língua portuguesa escrita.",
      "A proibição papal de publicar novos versos em latim."
    ],
    correct: 1,
    explanation: "Narcisa Amália pagou um preço pessoal altíssimo por sua autonomia intelectual: em uma sociedade provinciana patriarcal, a mulher que escrevia para jornais e opinava sobre política era estigmatizada como rebelde e desregrada. Apesar disso, manteve-se fiel à sua vocação cívica e à dignidade da escrita feminina. Alternativa B."
  },

  // --- LIVRO 3: MEMÓRIAS DE MARTHA (1899) - JULIA LOPES DE ALMEIDA ---
  {
    id: "ling_fuv_q9",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Memórias de Martha - Julia Lopes de Almeida)",
    difficulty: "Médio",
    enunciation: "Publicado em folhetim em 1888 e em livro em 1899, o romance 'Memórias de Martha', de Julia Lopes de Almeida (uma das idealizadoras excluídas da Academia Brasileira de Letras por ser mulher), é estruturado sob a forma de romance de formação (Bildungsroman) feminino em primeira pessoa. A trajetória de Martha transcorre em um cenário urbano marcante do Rio de Janeiro da virada do século XIX para o XX, que é:",
    options: [
      "Um palacete aristocrático no bairro de Botafogo isolado dos pobres.",
      "Um cortiço popular superpovoado ('a estalagem'), onde a protagonista convive com as dificuldades materiais da classe trabalhadora, a violência doméstica contra mulheres e as aspirações de dignidade e educação.",
      "Uma fazenda escravocrata de café no interior de Minas Gerais.",
      "Um convento de freiras carmelitas no sertão baiano.",
      "Um navio de imigrantes italianos atravessando o Atlântico."
    ],
    correct: 1,
    explanation: "Diferente da visão determinista e animalesca de 'O Cortiço' de Aluísio Azevedo, Julia Lopes de Almeida retrata a vida na habitação coletiva através da sensibilidade perspicaz da jovem Martha. O cortiço em 'Memórias de Martha' é um microcosmo das tensões de classe e de gênero no Rio de Janeiro pós-abolição, onde a protagonista observa a luta cotidiana de costureiras, lavadeiras e crianças pobres. Alternativa B."
  },
  {
    id: "ling_fuv_q10",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Memórias de Martha - Julia Lopes de Almeida)",
    difficulty: "Médio",
    enunciation: "Em 'Memórias de Martha', a relação de Martha com sua mãe doente e submissa e o contraste com outras figuras femininas da estalagem revelam a consciência crítica da protagonista em relação ao casamento. Para Martha, o casamento convencional burguês de sua época representava frequentemente:",
    options: [
      "A única e perfeita realização sublime e espiritual da existência feminina.",
      "Uma transação econômica humilhante e uma servidão forçada, na qual a mulher sem profissão nem independência financeira tornava-se prisioneira do arbítrio, dos vícios e da violência do marido, impulsionando Martha a buscar na instrução formal e no trabalho autônomo o caminho de sua libertação.",
      "Uma obrigação militar outorgada pela Constituição de 1891.",
      "Um ritual pagão proibido pela Igreja Católica.",
      "Uma união baseada na igualdade salarial plena entre homem e mulher."
    ],
    correct: 1,
    explanation: "O romance formula uma poderosa crítica protofeminista: Martha recusa a rota convencional que confinava a mulher pobre ao destino de casar-se por conveniência com qualquer pretendente para não morrer de fome. Ao estudar avidamente e sonhar em ser professora e escritora, Martha afirma a dignidade do trabalho feminino autônomo como antídoto contra a tutela masculina opressora. Alternativa B."
  },
  {
    id: "ling_fuv_q11",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Memórias de Martha - Julia Lopes de Almeida)",
    difficulty: "Médio",
    enunciation: "A prosa de Julia Lopes de Almeida em 'Memórias de Martha' transita com maestria entre o Realismo e o Naturalismo de sua época. Essa confluência estética expressa-se através de:",
    options: [
      "Uma descrição científica fria que trata todas as pessoas como bactérias em laboratório.",
      "Uma aguda observação realista das contradições sociais e hipocrisias da sociedade carioca aliada a uma profunda sensibilidade psicológica e ética, que foge do determinismo brutal para reconhecer a capacidade de resistência e superação moral de seus personagens.",
      "Poemas ultrarromânticos sobre o mal do século intercalados nos capítulos.",
      "A ausência completa de personagens femininas na trama.",
      "Uma narrativa escrita no dialeto dos pescadores açorianos."
    ],
    correct: 1,
    explanation: "Embora partilhe do olhar minucioso para o meio social e a precariedade dos cortiços (típico do Naturalismo), Julia Lopes recusa a desumanização mecânica das classes subalternas: constrói personagens dotadas de interioridade rica, afetos autênticos e dilemas morais complexos, consolidando uma obra realista de alto refinamento estético. Alternativa B."
  },
  {
    id: "ling_fuv_q12",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Memórias de Martha - Julia Lopes de Almeida)",
    difficulty: "Fácil",
    enunciation: "No desfecho de 'Memórias de Martha', a conquista da formação educacional e a perspectiva do magistério para a protagonista simbolizam:",
    options: [
      "O fracasso total de seus sonhos e a volta ao cortiço em condições de indigência.",
      "A emancipação pelo saber: a possibilidade real de a mulher ditar os rumos de sua própria vida por meio da profissão e do sustento próprio, abrindo caminhos para as futuras gerações femininas.",
      "O enriquecimento súbito por meio de um bilhete premiado de loteria federal.",
      "A renúncia à vida laica para entrar em um mosteiro na Europa.",
      "O casamento apressado com um fazendeiro de escravizados do interior."
    ],
    correct: 1,
    explanation: "O final de 'Memórias de Martha' é uma afirmação esperançosa e madura: ao tornar-se professora pública, Martha rompe o ciclo de miséria e dependência do cortiço não por milagre romântico ou casamento com príncipe rico, mas pelo fruto de seu esforço intelectual, coroando o romance como um clássico da emancipação feminina brasileira. Alternativa B."
  },

  // --- LIVRO 4: CAMINHO DE PEDRAS (1937) - RACHEL DE QUEIROZ ---
  {
    id: "ling_fuv_q13",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Caminho de Pedras - Rachel de Queiroz)",
    difficulty: "Médio",
    enunciation: "Publicado em 1937 por Rachel de Queiroz (autora cearense consagrada por 'O Quinze'), o romance 'Caminho de Pedras' destaca-se no romance social de 30 por sua temática política contundente. A narrativa ambienta-se em Fortaleza durante a década de 1930 e acompanha:",
    options: [
      "A rotina de festas aristocráticas nos iates do litoral cearense.",
      "A formação e o cotidiano de uma célula de militantes comunistas e operários de esquerda, os conflitos ideológicos, a paixão proibida entre Noemi e Roberto e a dura repressão policial do Estado Novo getulista que desarticula o movimento.",
      "A travessia dos bandeirantes paulistas em busca de índios para apresamento.",
      "A invasão holandesa de Maurício de Nassau no Nordeste açucareiro.",
      "A construção de Brasília no cerrado com operários candangos."
    ],
    correct: 1,
    explanation: "'Caminho de Pedras' é um dos mais importantes romances políticos da literatura brasileira: retrata a atmosfera clandestina, os debates teóricos em quartos modestos, as panfletagens operárias e as prisões políticas arbitrárias em Fortaleza sob a mão pesada da polícia política da Era Vargas (a mesma que mandou queimar o livro em praça pública em Salvador logo após o golpe do Estado Novo em 1937). Alternativa B."
  },
  {
    id: "ling_fuv_q14",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Caminho de Pedras - Rachel de Queiroz)",
    difficulty: "Médio",
    enunciation: "A protagonista feminina de 'Caminho de Pedras', Noemi, rompe com o casamento burguês asfixiante e sem amor com o marido alienado João Jacques para viver sua paixão com o militante operário Roberto e engajar-se na causa dos trabalhadores. Essa escolha corajosa cobra de Noemi um preço doloroso, que se manifesta na:",
    options: [
      "Perda de sua guarda do filho pequeno (Gaviãozinho) e no preconceito hipócrita da moralidade provinciana, associados à tragédia da morte da criança por doença enquanto o pai a mantém afastada da mãe.",
      "Herança milionária deixada pelo sogro.",
      "Viagem de lua de mel para Paris em navio de luxo.",
      "Indiferença de todos os vizinhos do bairro.",
      "Eleição de Noemi como deputada federal governista."
    ],
    correct: 0,
    explanation: "O 'caminho de pedras' percorrido por Noemi é literal e metafórico: ao desafiar a instituição do casamento tradicional e abraçar o partido e o amante proletário, a sociedade machista e moralista a castiga arrancando-lhe o filho. A morte do menino de meningite, enquanto Roberto está encarcerado nos presídios políticos do governo, sela a dimensão trágica do romance. Alternativa A."
  },
  {
    id: "ling_fuv_q15",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Caminho de Pedras - Rachel de Queiroz)",
    difficulty: "Médio",
    enunciation: "Em 'Caminho de Pedras', Rachel de Queiroz não constrói os militantes comunistas como heróis infalíveis de panfleto propagandístico, mas sim como seres humanos reais, contraditórios e cheios de dúvidas existenciais. Isso se evidencia através de personagens como:",
    options: [
      "Monges medievais que fazem votos de voto perpétuo.",
      "O tipógrafo Roberto e o intelectual José Ferreira, que debatem a disciplina rígida do partido, o desespero financeiro da clandestinidade, o medo da tortura policial e as tensões entre o sacrifício individual e a utopia da revolução coletiva.",
      "Capitães de cavalaria do exército napoleônico.",
      "Fazendeiros milionários que doam todas as suas terras voluntariamente aos colonos.",
      "Médicos que descobrem a cura da tuberculose por telepatia."
    ],
    correct: 1,
    explanation: "Rachel de Queiroz (que foi militante comunista e depois afastou-se das imposições stalinistas da direção do PCB) imprime ao livro uma honestidade cortante: os camaradas passam fome, sofrem com a desconfiança de traições internas, sentem o peso da solidão e vacilam diante do terror do cárcere, humanizando comoventemente a luta operária. Alternativa B."
  },
  {
    id: "ling_fuv_q16",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Caminho de Pedras - Rachel de Queiroz)",
    difficulty: "Fácil",
    enunciation: "O estilo literário de Rachel de Queiroz em 'Caminho de Pedras' caracteriza-se pela:",
    options: [
      "Prolixidade barroca com vocabulário arcaico em latim.",
      "Linguagem direta, enxuta, clara e despojada de afetações sentimentais, com diálogos vivos de ritmo cinematográfico e expressividade tipicamente nordestina.",
      "Métrica parnasiana com rimas obrigatórias no fim de cada linha.",
      "Fuga para a fantasia mágica e contos de fadas com dragões.",
      "Ausência de pontuação em um único parágrafo ininterrupto."
    ],
    correct: 1,
    explanation: "Rachel de Queiroz é uma das mestras da prosa enxuta da Geração de 30: seu texto é econômico, firme, sem sentimentalismos piegas ou adjetivos excessivos. O ritmo da narrativa é ágil e as falas captam com perfeição o coloquialismo cearense e a urgência dos momentos de perseguição política. Alternativa B."
  },

  // --- LIVRO 5: A PAIXÃO SEGUNDO G. H. (1964) - CLARICE LISPECTOR ---
  {
    id: "ling_fuv_q17",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (A Paixão Segundo G. H. - Clarice Lispector)",
    difficulty: "Difícil",
    enunciation: "Obra máxima da vertente ontológica e metafísica de Clarice Lispector, 'A Paixão Segundo G. H.' (1964) é estruturada como o longo monólogo reflexivo de uma mulher burguesa bem-sucedida da zona sul carioca (a escultora G.H.). O evento deflagrador que precipita a desintegração total de sua identidade social arrumada e o início de sua 'paixão' (martírio e travessia mística) ocorre quando ela:",
    options: [
      "Perde toda a sua fortuna na quebra da Bolsa de Valores de Nova York.",
      "Entra no quarto de empregada recém-desocupado por Janair para limpá-lo e depara-se, no interior de um guarda-roupa escuro, com uma enorme barata viva, cuja carcaça ela esmaga na porta e cuja massa branca viscosa acaba por provar com a boca.",
      "Recebe a visita inesperada de um amor de adolescência que volta da Europa.",
      "Sofre um acidente de automóvel na saída de uma galeria de arte.",
      "Decide abandonar a cidade para viver como eremita no deserto do Saara."
    ],
    correct: 1,
    explanation: "O confronto de G.H. com a barata no quarto árido e despojado de Janair (a empregada invisibilizada que desenhara a carvão na parede os contornos de um homem, uma mulher e um cão) desmorona a estética burguesa e o verniz civilizatório de G.H. O inseto ancestral milenar, cru e imundo, personifica a matéria viva nua e o ser pré-humano desprovido de linguagem ou moral. Alternativa B."
  },
  {
    id: "ling_fuv_q18",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (A Paixão Segundo G. H. - Clarice Lispector)",
    difficulty: "Difícil",
    enunciation: "O ato culminante de G.H. colocar na boca uma porção da matéria branca e viva que escorre do corpo esmagado da barata possui uma profunda carga simbólica e filosófica na narrativa clariceana, representando:",
    options: [
      "Um ato de loucura patológica provocado por envenenamento químico alimentar.",
      "Uma comunhão profana e eucaristia cósmica: a despersonalização e o desnudamento radical do ego burguês, no qual G.H. abre mão de sua humanidade artificial e de seus nomes para fundir-se com a matéria indiferenciada do mundo vivo e com o neutro sagrado ('o Deus da matéria viva').",
      "Uma tentativa médica de imunização biológica contra pragas urbanas.",
      "A comprovação científica da superioridade da raça humana sobre os artrópodes.",
      "A vingança sádica de uma patroa contra a memória de sua ex-empregada."
    ],
    correct: 1,
    explanation: "Deglutir a massa da barata é o rito de passagem mais audacioso da literatura ocidental: G.H. come o tabu, o imundo e o inominável para despir-se da arrogância humana que tudo cataloga e julga. Ao engolir a matéria viva neutra da barata, ela comunga com a pura existência destituída de sentido antropomórfico, alcançando a 'graça' da entrega total ao real ('O mundo não depende de mim... A vida é se ser'). Alternativa B."
  },
  {
    id: "ling_fuv_q19",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (A Paixão Segundo G. H. - Clarice Lispector)",
    difficulty: "Médio",
    enunciation: "Na arquitetura formal de 'A Paixão Segundo G. H.', Clarice Lispector utiliza um recurso estilístico e estrutural singular na passagem entre os capítulos, caracterizado pelo fato de que:",
    options: [
      "Todos os capítulos terminam com sonetos alexandrinos em rima emparelhada.",
      "Cada capítulo inicia-se exatamente com as mesmas palavras, frases ou travessões que encerraram o capítulo anterior, criando um encadeamento rítmico contínuo e circular semelhante ao fluxo ininterrupto de uma respiração ou de uma oração meditativa.",
      "Os capítulos são numerados em algarismos maias decrescentes.",
      "A autora intercala notícias policiais reais de jornais da época.",
      "Cada capítulo é escrito em um idioma diferente da Europa."
    ],
    correct: 1,
    explanation: "Essa costura estilística inovadora (anáfora estrutural intercapitular) traduz a natureza do fluxo de consciência: o pensamento não dá saltos em blocos fechados; ele se enovela e se desdobra em ondas sucessivas de busca e rememoração, onde o fim de uma intuição é o ponto de partida da intuição seguinte, conferindo à obra um andamento litúrgico e hipnótico. Alternativa B."
  },
  {
    id: "ling_fuv_q20",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (A Paixão Segundo G. H. - Clarice Lispector)",
    difficulty: "Médio",
    enunciation: "A presença espectral da empregada doméstica Janair, que embora ausente deixou desenhadas a carvão as silhuetas humanas e do cão na parede caiada do quartinho dos fundos, insere em 'A Paixão Segundo G. H.' uma dimensão crítica social sutil, pois Janair:",
    options: [
      "Era uma artista plástica premiada na Europa disfarçada de faxineira.",
      "Desmascara o colonialismo das relações de classe no apartamento burguês de G.H.: ao desenhar os donos da casa como figuras aprisionadas em um minúsculo quarto de serviço despojado, Janair inverte o olhar do poder, obrigando a patroa a contemplar seu próprio vazio existencial.",
      "Volta no final para roubar as joias de ouro de G.H.",
      "Deixa uma carta pedindo aumento salarial ao sindicato.",
      "É presa pela polícia acusada de conspiração armada."
    ],
    correct: 1,
    explanation: "Janair é a alteridade que desassossega: G.H. esperava encontrar o quartinho dos fundos imundo e subserviente aos seus caprichos, mas encontra-o limpo como um minarete, banhado por sol escaldante, com o carvão na parede denunciando a presença soberana e altiva de uma mulher negra que nunca se deixou domesticar pela patroa. Alternativa B."
  },

  // --- LIVRO 6: GEOGRAFIA (1967) - SOPHIA DE MELLO BREYNER ANDRESEN ---
  {
    id: "ling_fuv_q21",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Geografia - Sophia de Mello Breyner Andresen)",
    difficulty: "Médio",
    enunciation: "Publicado em 1967, o livro de poemas 'Geografia', da poetisa portuguesa Sophia de Mello Breyner Andresen (1919–2004, primeira mulher a receber o prestigiado Prêmio Camões em 1999), constrói um percurso lírico que transcende a mera descrição física da paisagem. Na poética de Sophia, o conceito de 'Geografia' deve ser entendido como:",
    options: [
      "Um atlas cartográfico em versos para ensinar topografia aos militares portugueses.",
      "Uma cartografia cívica, existencial e luminosa: a busca de correspondência entre o espaço concreto habitado (as praias do Atlântico, as ilhas gregas de Creta e Rodes, a luz do Mediterrâneo e a noite opressiva de Portugal) e o imperativo moral de inteireza, justiça, liberdade e dignidade humana.",
      "A celebração ufanista das guerras imperiais de ocupação em Angola e Moçambique.",
      "Uma coletânea de orações católicas dogmáticas sobre o inferno dantesco.",
      "Um tratado de biologia marinha sobre a pesca de bacalhau."
    ],
    correct: 1,
    explanation: "Em Sophia de Mello Breyner, a poesia é indissociável da clareza cívica e da verdade dos elementos naturais: o mar não é refúgio de alienação, mas símbolo de pureza e amplidão; a Grécia antiga personifica a harmonia do homem livre com a polis e a luz do meio-dia; e a 'geografia' traçada pelo livro denuncia a asfixia cinzenta do Portugal amordaçado pelo salazarismo. Alternativa B."
  },
  {
    id: "ling_fuv_q22",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Geografia - Sophia de Mello Breyner Andresen)",
    difficulty: "Médio",
    enunciation: "Escrito e publicado no contexto da ditadura do Estado Novo salazarista em Portugal e da sangrenta Guerra Colonial em África, o poema 'Brasil 63' e outros versos de denúncia em 'Geografia' revelam a postura da poetisa diante do poder autoritário através de uma:",
    options: [
      "Adesão entusiástica e apoio subserviente à propaganda governamental do regime salazarista.",
      "Poesia lírica de resistência cívica intransigente, que repudia o medo, a censura, a tortura dos prisioneiros políticos da PIDE e o patriotismo ufanista podre ('Vemos, ouvimos e lemos/ Não podemos calar!'), afirmando que o poeta tem o dever ético de dizer a verdade das coisas.",
      "Fuga para mosteiros budistas do Himalaia sem contato com o Ocidente.",
      "Defesa do retorno de D. Sebastião como rei guerreiro medieval.",
      "Rejeição de qualquer sentimento de compaixão pelos oprimidos."
    ],
    correct: 1,
    explanation: "Sophia foi uma das vozes mais corajosas da oposição democrática portuguesa: seus poemas cívicos ressoavam como clarinadas de indignação contra a mediocridade hipócrita e violenta da ditadura de Salazar e Marcelo Caetano. Para ela, cantar a beleza do mar e das flores exige, sob pena de infâmia poética, denunciar a mordaça imposta ao povo e as mortes injustas nas frentes de batalha. Alternativa B."
  },
  {
    id: "ling_fuv_q23",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Geografia - Sophia de Mello Breyner Andresen)",
    difficulty: "Médio",
    enunciation: "O fascínio de Sophia de Mello Breyner Andresen pela Grécia Antiga, pelo Mar Egeu e pela luz mediterrânica (presente em poemas dedicados a Delfos, Creta e Atenas em 'Geografia') fundamenta-se na busca estética por um modelo de:",
    options: [
      "Caos surrealista desprovido de qualquer racionalidade ou forma.",
      "Equilíbrio clássico, clareza solar, limpidez geométrica e concisão verbal, onde as palavras poéticas tocam a nudez da matéria (a cal branca, o mármore, a onda, a oliveira) despidas de qualquer afetação barroca ou sentimentalismo piegas.",
      "Culto aos sacrifícios de sangue da mitologia nórdica.",
      "Rimas forçadas e acrósticos de salão de corte renascentista.",
      "Poesia romântica fúnebre centrada na loucura e na necrofilia."
    ],
    correct: 1,
    explanation: "A poesia de Sophia tem o rigor límpido de uma coluna dórica grega: busca a precisão cristalina dos nomes ('uma rosa é uma rosa'), o fulgor transparente da luz do meio-dia que não admite penumbras enganadoras e a harmonia primordial entre a palavra limpa e as coisas reais do mundo. Alternativa B."
  },
  {
    id: "ling_fuv_q24",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Geografia - Sophia de Mello Breyner Andresen)",
    difficulty: "Fácil",
    enunciation: "O elemento natural do MAR é onipresente em toda a lírica de Sophia de Mello Breyner Andresen e atua em 'Geografia' como:",
    options: [
      "Um depósito de lixo industrial sem valor poético.",
      "Um arquétipo sagrado de liberdade, pureza, infinito, movimento incessante e despojamento moral ('Quando eu morrer voltarei para buscar/ Os instantes que não vivi junto do mar...'), em oposição à asfixia cinzenta e estagnada das salas e convenções urbanas fechadas.",
      "Uma barreira intransponível que aprisiona os homens na ignorância.",
      "Uma poça de lama pútrida como nos cortiços naturalistas.",
      "Um cenário fictício criado por computação gráfica."
    ],
    correct: 1,
    explanation: "Nascida no Porto e criada nas praias da Granja contemplando o Atlântico aberto, Sophia fez do Mar sua pátria espiritual e sua bússola ontológica: o mar é a medida da amplidão humana, o sopro vivo do vento e a força livre que não aceita tiranias nem corrupções burguesas. Alternativa B."
  },

  // --- LIVRO 7: BALADA DE AMOR AO VENTO (1990) - PAULINA CHIZIANE ---
  {
    id: "ling_fuv_q25",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Balada de Amor ao Vento - Paulina Chiziane)",
    difficulty: "Médio",
    enunciation: "Publicado em 1990, 'Balada de Amor ao Vento' consagrou a escritora moçambicana Paulina Chiziane (primeira mulher africana a receber o Prêmio Camões em 2021) como a pioneira do romance em Moçambique. A narrativa acompanha a trágica e lírica história de amor entre a jovem camponesa Sarnau e o príncipe Mwando na província de Gaza, expondo o drama da mulher africana aprisionada entre:",
    options: [
      "As ordens de generais romanos e os deuses do Olimpo grego.",
      "O peso esmagador das tradições patriarcais ancestrais ronga (a exigência do lobolo/dote matrimonial, a poligamia compulsória, a subserviência ao marido e a obrigação de gerar filhos homens) e a violência da dominação colonialista portuguesa cristã assimilacionista.",
      "A vida moderna em arranha-céus de Nova York e o cinema de Hollywood.",
      "A disputa entre fábricas têxteis da Revolução Industrial inglesa.",
      "A ausência total de sentimentos amorosos no continente africano."
    ],
    correct: 1,
    explanation: "Paulina Chiziane inaugura a literatura de autoria feminina em Moçambique desnudando a dupla opressão que esmaga a mulher negra moçambicana: de um lado, as tradições tribais patriarcais que mercantilizam seu corpo através do 'lobolo' (onde a noiva é trocada por bois e dinheiro e deve submeter-se aos caprichos das coesposas e do marido polígamo); de outro, o colonialismo português racista e a hipocrisia das missões católicas. Alternativa B."
  },
  {
    id: "ling_fuv_q26",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Balada de Amor ao Vento - Paulina Chiziane)",
    difficulty: "Médio",
    enunciation: "Na tradição cultural dos povos do sul de Moçambique retratada em 'Balada de Amor ao Vento', o costume ancestral do LOBOLO consiste em:",
    options: [
      "Um campeonato esportivo de canoagem nos rios Zambeze e Limpopo.",
      "Uma aliança matrimonial e social na qual a família do noivo entrega gado (bois) e quantias em dinheiro à família da noiva como contrapartida e compensação pela transferência de sua capacidade de trabalho e reprodutiva para a linhagem do marido, convertendo-se frequentemente em instrumento de subjugação da mulher.",
      "Uma dança mística realizada apenas por guerreiros idosos nas noites de eclipse.",
      "A divisão igualitária das terras comunais entre todos os jovens recém-casados.",
      "A ordenação sacerdotal de mulheres na Igreja Anglicana."
    ],
    correct: 1,
    explanation: "O lobolo é uma das instituições mais complexas e debatidas da cultura moçambicana: se tradicionalmente representava um pacto sagrado de honra e união entre linhagens familiares, Chiziane denuncia que na prática histórica ele transformou a mulher em propriedade comprada ('se paguei por você, você é minha serva'), gerando sofrimento e submissão quando a esposa é estéril ou não gera filhos do sexo masculino. Alternativa B."
  },
  {
    id: "ling_fuv_q27",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Balada de Amor ao Vento - Paulina Chiziane)",
    difficulty: "Médio",
    enunciation: "O estilo narrativo de Paulina Chiziane em 'Balada de Amor ao Vento' distingue-se pela profunda oralidade de sua prosa lírica. Esse tom poético singular manifesta-se através de:",
    options: [
      "Frases curtas em estilo telegráfico sem metáforas.",
      "Um ritmo cadenciado de canto épico e balada memorialística popular, no qual a voz de Sarnau incorpora provérbios tradicionais, metáforas telúricas ligadas à terra, aos rios e ao vento, e a respiração da milenar contação de histórias africana (os contadores orais da fogueira).",
      "Termos exclusivos da informática moderna em inglês.",
      "Um tratado de botânica em latim sem emoção humana.",
      "Diálogos em versos parnasianos de métrica alexandrina."
    ],
    correct: 1,
    explanation: "Chiziane recusa o modelo europeu convencional de romance frio: sua escrita pulsa com a oralidade do 'bantu': o amor, as dores do parto, as traições de Mwando e o vento que tudo leva são cantados como uma lamentação de korá ou balada tribal, fazendo da literatura um monumento de resgate da voz viva das mulheres contadoras de Moçambique. Alternativa B."
  },
  {
    id: "ling_fuv_q28",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Balada de Amor ao Vento - Paulina Chiziane)",
    difficulty: "Fácil",
    enunciation: "No percurso dramático de Sarnau em 'Balada de Amor ao Vento', após ser rejeitada e trocada por Mwando pelo casamento nobre lobolado com Phati, e após sofrer as humilhações de ser uma esposa infértil em outros lares, Sarnau emerge no final da obra como:",
    options: [
      "Uma rainha absolutista que comanda frotas navais na Europa.",
      "Uma mulher madura, resiliente e sobrevivente, que enfrentou as tempestades da paixão e do vento ('amor ao vento') e conquistou a consciência de sua dignidade própria e autonomia além das correntes masculinas.",
      "Uma suicida que se afoga no oceano de forma covarde.",
      "Uma escravizada vendida para as minas de diamantes da África do Sul.",
      "Uma freira que renuncia a qualquer contato com o povo moçambicano."
    ],
    correct: 1,
    explanation: "Sarnau é o arquétipo da mulher africana inquebrantável: ela ama, chora, erra, cai nas armadilhas do patriarcado e do dote, mas levanta-se soberana como a terra fértil após a tempestade. O vento que soprou suas ilusões de juventude também a lapidou como uma mulher sábia que não aceita mais ser objeto no jogo dos homens. Alternativa B."
  },

  // --- LIVRO 8: CANÇÃO PARA NINAR MENINO GRANDE (2018) - CONCEIÇÃO EVARISTO ---
  {
    id: "ling_fuv_q29",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Canção para Ninar Menino Grande - Conceição Evaristo)",
    difficulty: "Médio",
    enunciation: "Publicado em 2018 por Conceição Evaristo, o romance-mosaico 'Canção para Ninar Menino Grande' mergulha nas complexidades da afetividade, da sexualidade e das relações amorosas na diáspora negra. A narrativa é construída em torno da figura do personagem masculino Fio Jasmim, que é caracterizado como:",
    options: [
      "Um guerreiro tribal africano medieval intocado pelo tempo histórico.",
      "Um homem negro sedutor, maquinista de trem, que vagueia por trilhos e estações relacionando-se amorosamente com diversas mulheres negras (Juventina, Pérola Maria, Maria-Nova, Inalda), encarnando as contradições da masculinidade negra subalternizada, dividida entre o encanto erótico, a imaturidade afetiva de 'menino grande' e a incapacidade de construir compromissos duradouros.",
      "Um fazendeiro latifundiário milionário que explora lavradores rurais.",
      "Um imperador romano que comanda legiões militares.",
      "Um padre franciscano recluso em votos perpétuos de silêncio."
    ],
    correct: 1,
    explanation: "Fio Jasmim personifica a contradição do homem negro que precisa ser 'ninado': seduz e abandona, é doce e fugidio, forte na labuta operária da ferrovia, mas emocionalmente infantilizado e despreparado para o amor responsável, deixando atrás de si um rastro de solidão e dor nas mulheres que o acolheram com fervor. Alternativa B."
  },
  {
    id: "ling_fuv_q30",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Canção para Ninar Menino Grande - Conceição Evaristo)",
    difficulty: "Médio",
    enunciation: "Embora Fio Jasmim seja o eixo masculino catalisador das tramas em 'Canção para Ninar Menino Grande', o verdadeiro centro de gravidade ético, afetivo e de força do romance reside nas:",
    options: [
      "Corporações ferroviárias britânicas e nos lucros do café.",
      "Vozes, histórias e vivências plurais das mulheres negras com quem Fio se relaciona, retratadas em suas dores, carências, desejos eróticos insubmissos, solidão afetiva (a solidão da mulher negra) e impressionante rede ancestral de acolhimento e solidariedade mútua.",
      "Leis tributárias aprovadas pelo Ministério da Fazenda.",
      "Disputas políticas entre generais do Exército.",
      "Crônicas da corte de Luís XV na França."
    ],
    correct: 1,
    explanation: "Conceição Evaristo desconstrói o protagonismo masculino: o foco não é o macho sedutor em si, mas a riqueza de subjetividade de cada uma das mulheres por ele atravessadas. Elas não são meras vítimas passivas; são mulheres de carne, osso e sonho, que enfrentam o racismo estrutural e a solidão do preterimento afetivo tecendo redes de amparo e afetos ancestrais que superam o abandono. Alternativa B."
  },
  {
    id: "ling_fuv_q31",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Canção para Ninar Menino Grande - Conceição Evaristo)",
    difficulty: "Médio",
    enunciation: "Na prosa poética de 'Canção para Ninar Menino Grande', a imagem dos TRILHOS DO TREM por onde viaja o maquinista Fio Jasmim atua como uma poderosa metáfora de:",
    options: [
      "A industrialização ecológica perfeita de países europeus.",
      "O deslocamento contínuo, a fuga dos compromissos e a fragmentação das relações afetivas na diáspora negra, conectando e desconectando vidas e destinos ao longo das estações da vida sem jamais fixar morada emocional permanente.",
      "A vitória do modelo de transporte rodoviário do governo JK.",
      "O esgotamento definitivo das jazidas de carvão mineral de Santa Catarina.",
      "O isolamento total do sertão sem nenhuma ligação com o litoral."
    ],
    correct: 1,
    explanation: "O trem e os trilhos em Conceição Evaristo simbolizam o movimento pendular da diáspora: Fio chega sobre os trilhos trazendo o apito do trem e o calor dos braços abertos, mas parte logo em seguida deixando para trás a saudade e as cinzas da fogueira, metáfora da instabilidade forçada imposta historicamente às famílias negras desde a escravidão. Alternativa B."
  },
  {
    id: "ling_fuv_q32",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (Canção para Ninar Menino Grande - Conceição Evaristo)",
    difficulty: "Fácil",
    enunciation: "A escrevivência praticada por Conceição Evaristo em 'Canção para Ninar Menino Grande' revela uma profunda sensibilidade para abordar temas da intimidade afro-brasileira com delicadeza lírica e contundência social, desmistificando o estereótipo racista de que:",
    options: [
      "A população negra é desprovida de história e de capacidade de amar, demonstrando a riqueza do erotismo, da ternura, dos dilemas psicológicos e da complexidade existencial dos corpos negros.",
      "As mulheres brancas da elite nunca tiveram acesso ao ensino superior.",
      "O transporte ferroviário é o mais eficiente para cargas pesadas.",
      "A literatura brasileira deve ser escrita apenas por autores de outros continentes.",
      "O sofrimento humano pode ser totalmente extinto por fórmulas matemáticas."
    ],
    correct: 0,
    explanation: "Historicamente, o racismo retirou da população negra a humanidade em sua dimensão mais íntima (tratando os corpos negros apenas como força bruta de trabalho braçal ou fetiche hipersexualizado). Conceição Evaristo devolve a esses sujeitos o direito à delicadeza do ninar, ao poema de amor, à lágrima de desamor e à plenitude da experiência afetiva humana. Alternativa A."
  },

  // --- LIVRO 9: A VISÃO DAS PLANTAS (2019) - DJAIMILIA PEREIRA DE ALMEIDA ---
  {
    id: "ling_fuv_q33",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (A Visão das Plantas - Djaimilia Pereira de Almeida)",
    difficulty: "Difícil",
    enunciation: "Publicado em 2019 pela escritora luso-angolana Djaimilia Pereira de Almeida, o romance lírico 'A Visão das Plantas' constrói uma narrativa perturbadora em torno do personagem Capitão Celestino. Após passar a vida adulta como capitão de um navio negreiro traficando milhares de pessoas escravizadas através do Atlântico, Celestino retorna na velhice à sua casa em Portugal e dedica-se obsessivamente a:",
    options: [
      "Fundar uma fábrica de armas de fogo para apoiar guerras na Ásia.",
      "Cuidar com infinita ternura, zelo minucioso e devoção silenciosa de um jardim exuberante de plantas e flores ao redor de sua mansão, criando um abismo ético e perturbador entre a brutalidade monstruosa de seu passado de torturas e assassinatos no porão negreiro e a delicadeza de seu amor pelas flores.",
      "Escrever um livro de memórias ufanistas distribuído em escolas públicas.",
      "Gastar toda a sua fortuna construindo catedrais góticas no campo.",
      "Fazer discursos abolicionistas nas tribunas do parlamento de Lisboa."
    ],
    correct: 1,
    explanation: "Djaimilia Pereira de Almeida constrói uma das obras-primas da literatura pós-colonial contemporânea ao recusar o maniqueísmo fácil: o Capitão Celestino é um carrasco desumano que acumulou riqueza transportando corpos escravizados sob chibatadas e no mar, e esse mesmo homem, carcomido pela velhice e pela decrepitude, ajoelha-se no chão para afagar com ternura as pétalas de uma dália, confrontando o leitor com a convivência horripilante entre a violência colonial e a beleza estética. Alternativa B."
  },
  {
    id: "ling_fuv_q34",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (A Visão das Plantas - Djaimilia Pereira de Almeida)",
    difficulty: "Difícil",
    enunciation: "No romance 'A Visão das Plantas', as plantas do jardim do Capitão Celestino exercem um papel metafórico e filosófico central que dá título à obra ('a visão das plantas'). As plantas são testemunhas singulares porque:",
    options: [
      "São plantas carnívoras que devoram o capitão durante a noite de tempestade.",
      "São seres vivos desprovidos de olhos humanos e de julgamento moral: não conhecem o passado abominável do capitão nem o culpam ou perdoam por seus crimes, acolhendo em silêncio o cuidado de suas mãos assassinas sem preconceito nem compaixão, em uma indiferença vegetal sublime que expõe a solidão e a culpa inconfessa do velho marinheiro.",
      "Falam em voz alta à noite repetindo os nomes dos escravizados mortos no navio.",
      "Foram trazidas de outro planeta por viajantes espaciais futuristas.",
      "Morrem todas imediatamente assim que o capitão pisa no solo português."
    ],
    correct: 1,
    explanation: "O olhar vegetal é o contraponto do tribunal moral humano: as flores não julgam, não perdoam nem condenam; apenas crescem, desabrocham e morrem sob a rega de quem delas cuida. Diante da mudez absoluta do jardim, a monstruosidade histórica do tráfico negreiro fica ainda mais nua e assustadora, desnudando a memória colonial como uma chaga aberta e sem redenção fácil. Alternativa B."
  },
  {
    id: "ling_fuv_q35",
    vestibular: "FUVEST",
    year: 2027,
    subject: "Linguagens",
    topic: "Obras FUVEST 2027 (A Visão das Plantas e Diálogos Literários)",
    difficulty: "Médio",
    enunciation: "Comparando a temática do colonialismo e da memória da violência nas obras obrigatórias da FUVEST 2027 'A Visão das Plantas' (Djaimilia Pereira de Almeida) e 'Canção para Ninar Menino Grande' (Conceição Evaristo), constata-se que ambas as autoras contemporâneas convergem ao:",
    options: [
      "Celebrar a expansão colonial ultramarina como a maior glória moral dos povos ocidentais.",
      "Deslocar o foco da historiografia hegemônica colonial para interrogar as marcas profundas, os traumas, as ambiguidades, as fraturas afetivas e os fantasmas silenciosos que a escravidão e o tráfico transatlântico legaram aos corpos e à imaginação no mundo contemporâneo.",
      "Defender o retorno voluntário de todos os brasileiros e portugueses para a vida rural colonial.",
      "Propor a censura de todas as obras escritas antes do século XXI.",
      "Afirmar que a literatura não deve tratar de temas relacionados à raça ou à dor."
    ],
    correct: 1,
    explanation: "Tanto Djaimilia Pereira de Almeida (desde a perspectiva da metrópole assombrada pelo algoz negreiro idoso em seu jardim) quanto Conceição Evaristo (desde a escrevivência de corpos negros periféricos que carregam no afeto e na carne os ecos da senzala e da diáspora) utilizam a mais alta voltagem lírica da língua portuguesa para revolver as feridas abertas da violência colonial, convocando o leitor a um acerto de contas ético indispensável para a construção de um futuro com justiça. Alternativa B."
  }
];
