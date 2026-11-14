/**
 * Guia Completo das Leituras Obrigatórias da FUVEST 2027
 * Lista histórica composta exclusivamente por escritoras mulheres da Língua Portuguesa.
 * Análises aprofundadas, enredo, personagens, eixos temáticos e dicas de prova.
 */
const booksData = [
  {
    id: "opusculo-humanitario",
    title: "Opúsculo Humanitário",
    author: "Nísia Floresta",
    yearOfPub: 1853,
    period: "Pensamento Social & Feminismo Oitocentista (Séc. XIX)",
    badgeColor: "amber",
    summary: "Publicado em 1853 sob o pseudônimo de Nísia Floresta Brasileira Augusta, 'Opúsculo Humanitário' é um ensaio pioneiro e combativo sobre a emancipação feminina e a educação no Brasil imperial. A autora critica ferozmente a pedagogia superficial destinada às mulheres de sua época, limitada a prendas domésticas, piano e adorno social para agradar aos maridos. Inspirada pelo ideário positivista e humanitário, Nísia defende que a decadência moral e política do Brasil decorre da ignorância em que as mulheres são mantidas, sustentando que a educação científica, moral e crítica da mulher é o motor indispensável para o verdadeiro progresso da humanidade.",
    keyThemes: [
      "Educação feminina emancipatória: crítica veemente à educação frívola e ornamental imposta pelo patriarcado às mulheres da elite.",
      "Pioneirismo feminista brasileiro: defesa de que a mulher possui a mesma capacidade intelectual e moral que o homem.",
      "Crítica social ao Segundo Reinado: ataque ao diletantismo dos legisladores e à hipocrisia das elites escravocratas.",
      "Humanitarismo e Positivismo ético: influência da ciência e do altruísmo como forças de regeneração cívica e universal."
    ],
    characters: [
      { name: "A Voz Ensaística (Nísia Floresta)", desc: "Narradora-ensaísta culta, indignada e lúcida; articula referências históricas, filosóficas e bíblicas para desmascarar a opressão masculina." }
    ],
    fuvestTips: "A FUVEST valoriza muito a estrutura argumentativa do ensaio: observe como Nísia desconstrói os argumentos biológicos e religiosos que justificavam a submissão feminina. Fique atento às comparações históricas que ela faz com civilizações antigas e com a Europa, e ao vínculo direto que estabelece entre ignorância feminina e atraso da nação.",
    quote: "'A ignorância em que a mulher tem sido conservada pela tirania do homem é a causa primária de todos os males morais e sociais que afligem a humanidade.'"
  },
  {
    id: "nebulosas",
    title: "Nebulosas",
    author: "Narcisa Amália",
    yearOfPub: 1872,
    period: "Romantismo - 3ª Geração / Condoreirismo Lírico (1872)",
    badgeColor: "rose",
    summary: "Publicado em 1872, 'Nebulosas' é o livro de estreia de Narcisa Amália, primeira jornalista profissional do Brasil, saudado entusiasticamente por Machado de Assis e Castro Alves. A obra conjuga a lírica confessional da dor íntima com a poesia cívica de combate social. Dividida em seções que alternam o sentimento da natureza tropical, o lamento amoroso e a indignação política, a poeta ergue uma voz autônoma contra a escravidão, o preconceito de gênero, a guerra e a desilusão existencial.",
    keyThemes: [
      "Abolicionismo e denúncia cívica: versos condoreiros que clamam pela libertação imediata dos escravizados e deploram a barbárie do cativeiro.",
      "Voz lírica feminina autônoma: recusa da submissão passiva romântica, afirmando a mulher como sujeito que pensa, sofre e combate.",
      "A natureza tropical e o sentimento de desterro: a paisagem brasileira como refúgio melancólico diante da hostilidade social.",
      "A dor existencial e as ilusões desfeitas: o título 'Nebulosas' remete às nuvens de incerteza, lágrimas e sonhos frustrados pela realidade."
    ],
    characters: [
      { name: "O Eu Lírico", desc: "Voz feminina lúcida, corajosa e sofrida; transita da intimidade ferida pelo desencanto ao brado público por justiça e liberdade." }
    ],
    fuvestTips: "A FUVEST adora comparar a dicção romântica de Narcisa Amália com a de poetas masculinos como Castro Alves e Fagundes Varela. Atente para a forma como ela transforma o sofrimento feminino individual em bandeira coletiva de solidariedade aos oprimidos e aos escravizados.",
    quote: "'Deixai-me em paz chorar! Não vedes como / A dor me curva a fronte desmaiada? / Eu trago a alma em lágrimas desfeita, / No mar das desilusões naufragada!'"
  },
  {
    id: "memorias-de-martha",
    title: "Memórias de Martha",
    author: "Julia Lopes de Almeida",
    yearOfPub: 1899,
    period: "Realismo / Naturalismo sob Ótica Feminina (1899)",
    badgeColor: "emerald",
    summary: "Publicado em folhetim no jornal 'A Tribuna' (1888) e editado em livro em 1899, é o romance de estreia de Julia Lopes de Almeida, cofundadora velada da Academia Brasileira de Letras. Narrado em primeira pessoa em tom memorialista, conta a infância e juventude de Martha em um cortiço miserável do Rio de Janeiro após a Guerra do Paraguai. Diante da orfandade precoce, da miséria e do alcoolismo dos vizinhos, Martha recusa a fatalidade da degradação moral típica do Naturalismo determinista, conquistando a sobrevivência, a instrução e a independência por meio do trabalho honesto e da literatura.",
    keyThemes: [
      "O cortiço visto por dentro: contraponto humanizado ao 'O Cortiço' de Aluísio Azevedo — enquanto Azevedo animaliza os moradores, Julia ressalta a dignidade e o afeto das mulheres pobres.",
      "Superação do determinismo biológico: Martha contraria a tese determinista de que o meio corrompe fatalmente o indivíduo, graças à força moral e à educação.",
      "A solidariedade entre mulheres trabalhadoras: a lavadeira, a costureira e a professora como esteios de afeto e sustentação mútua no cortiço.",
      "Memória e escrita feminina: o ato de recordar e escrever como forma de reivindicar a própria história de luta."
    ],
    characters: [
      { name: "Martha", desc: "Narradora-protagonista sensível e resiliente; cresce no cortiço, perde os pais cedo e resiste à prostituição e ao casamento de conveniência." },
      { name: "Dona Maria", desc: "Mãe carinhosa e abnegada de Martha, costureira tuberculosa que se esgota para proteger a filha." },
      { name: "Seu Amâncio", desc: "Pai de Martha, veterano mutilado e amargurado da Guerra do Paraguai, vítima do abandono do Estado e do alcoolismo." }
    ],
    fuvestTips: "Ponto-chave para a FUVEST: a comparação direta entre 'Memórias de Martha' e 'O Cortiço' (Aluísio Azevedo). Enquanto Azevedo adota a perspectiva externa, cientificista e zombeteira do narrador burguês, Julia Lopes adota a primeira pessoa de uma mulher que vive a precariedade, recusando o preconceito de classe.",
    quote: "'A miséria não apaga a beleza das almas nobres; no lodo daquele pátio, entre gritos e farrapos, aprendi que a dignidade é a única riqueza que ninguém pode nos roubar.'"
  },
  {
    id: "caminho-de-pedras",
    title: "Caminho de Pedras",
    author: "Rachel de Queiroz",
    yearOfPub: 1937,
    period: "Modernismo - 2ª Fase / Romance Proletário e Social de 30 (1937)",
    badgeColor: "red",
    summary: "Publicado no tenso ano do golpe do Estado Novo (1937), 'Caminho de Pedras' retrata a Fortaleza dos anos 1930 sob a agitação dos movimentos operários e a violenta perseguição policial aos militantes de esquerda. A protagonista Noemi, casada com um marido enfadonho e conservador, apaixona-se por Roberto, líder comunista e operário de gráfica. Ao romper o casamento para viver seu amor e assumir a militância, Noemi enfrenta o ostracismo moral da sociedade cearense, a perda do filho e a prisão política de Roberto, trilhando um doloroso 'caminho de pedras' de sacrifício ideológico.",
    keyThemes: [
      "Militância política e repressão policial: a organização dos sindicatos urbanos, a clandestinidade e as prisões arbitrárias no Nordeste dos anos 30.",
      "A emancipação feminina contra a moral patriarcal: Noemi desafia a instituição do casamento sagrado, assumindo sua sexualidade e suas convicções políticas.",
      "A solidão e o custo humano da revolução: a tensão entre o dever revolucionário coletivo e os afetos individuais mais íntimos.",
      "Realismo seco e direto: linguagem direta, concisa e desprovida de sentimentalismo, marca da prosa consagrada de Rachel de Queiroz."
    ],
    characters: [
      { name: "Noemi", desc: "Mulher culta e insatisfeita que abandona a segurança doméstica burguesa para mergulhar no amor e na luta política comunista." },
      { name: "Roberto", desc: "Militante comunista íntegro e disciplinado, tipógrafo operário que coloca a causa partidária acima da própria segurança." },
      { name: "João Jaques", desc: "Marido pequeno-burguês, burocrata medíocre e conformista de Noemi, incapaz de compreender os anseios da esposa." },
      { name: "Gavião (Zé de Castro)", desc: "Companheiro de partido combativo que expressa a lealdade proletária diante da repressão estatal." }
    ],
    fuvestTips: "A FUVEST explora a condição da mulher na vanguarda política do romance de 30: Noemi não é mera companheira passiva do herói revolucionário, mas um indivíduo complexo que toma as rédeas de seu destino. Note também o contraste entre a Fortaleza provinciana e os ecos dos conflitos ideológicos globais (fascismo vs comunismo).",
    quote: "'Não era um caminho macio, nem coberto de flores. Era um caminho áspero, de pedras pontiagudas que rasgavam os pés, mas era o único caminho que valia a pena andar.'"
  },
  {
    id: "a-paixao-segundo-gh",
    title: "A Paixão segundo G. H.",
    author: "Clarice Lispector",
    yearOfPub: 1964,
    period: "Modernismo - 3ª Fase / Romance Existencialista & Epifania (1964)",
    badgeColor: "purple",
    summary: "Obra-prima de Clarice Lispector, o romance narra a experiência ontológica e vertiginosa da escultora burguesa G. H. em sua luxuosa cobertura no Rio de Janeiro. Ao decidir arrumar o quarto da empregada Janair, recém-demitida, G. H. espera encontrar desordem e sujeira, mas depara-se com um ambiente impecável, solar e com desenhos a carvão de contornos africanos na parede. No guarda-roupa, ao se assustar com uma barata milenar, G. H. esmaga o inseto na porta e, em um transe místico e horrorizado, experimenta o desmoronamento completo de sua identidade social, culminando no gesto ritualístico de provar a massa branca que sai do ventre da barata para unir-se à matéria viva primordial.",
    keyThemes: [
      "Despersonalização e ruína do ego burguês: a perda gradual das máscaras sociais, da vaidade e das certezas que constituíam a cidadã G. H.",
      "A barata como ser vivo primitivo: o confronto com o outro absoluto e o neutro da matéria biológica que transcende o bem e o mal.",
      "A tensão de classe velada: a presença silenciosa de Janair (a empregada negra ausente) cujo quarto limpo e desenho invertem a relação de poder e expõem o vazio da patroa.",
      "A insuficiência da linguagem: o esforço angustiado da narradora para traduzir em palavras uma vivência inefável ('estou procurando, estou tentando entender')."
    ],
    characters: [
      { name: "G. H.", desc: "Escultora abastada da elite carioca que vivia em harmonia com sua imagem social até sofrer o choque epifânico da desconstrução existencial." },
      { name: "Janair", desc: "A ex-empregada doméstica que não aparece fisicamente, mas cuja presença no quarto revela a muralha invisível entre classes sociais no Brasil." },
      { name: "A Barata", desc: "Inseto milenar que catalisa a crise mística de G. H., símbolo da vida crua, atemporal e indestrutível." }
    ],
    fuvestTips: "Atenção máxima da FUVEST na relação entre linguagem e mística profana clariceana: as reticências e os travessões ligando os capítulos (o romance termina como começa: '...'). Não ignore a dimensão social do quarto de Janair: a epifania de G. H. nasce de uma intrusão no território da trabalhadora que ela nunca enxergou de fato.",
    quote: "'O mundo não dependia de mim — esta era a confiança a que eu chegara: o mundo independia de mim, e eu não compreendia o que via porque o mundo não era humano, e nós somos apenas humanos.'"
  },
  {
    id: "geografia",
    title: "Geografia",
    author: "Sophia de Mello Breyner Andresen",
    yearOfPub: 1967,
    period: "Poesia Portuguesa Contemporânea / Modernismo Tardio (1967)",
    badgeColor: "blue",
    summary: "Publicado em 1967, em pleno regime ditatorial salazarista em Portugal, 'Geografia' reúne poemas luminosos e límpidos de uma das maiores vozes da língua portuguesa. Dividido em coordenadas geográficas reais e simbólicas — com poemas dedicados ao Mar Mediterrâneo, à Grécia mítica, a Portugal, à África e a cidades brasileiras como Rio de Janeiro, Salvador e Brasília —, o livro constrói uma poética do espaço fundada na luz, no vento, na água e na exigência irrevogável de justiça, dignidade e liberdade contra toda tirania.",
    keyThemes: [
      "Poética dos elementos primordiais: o mar, a cal, o salitre, a praia e a luz como símbolos de verdade ética e clareza moral.",
      "Geografia mítica e histórica: o diálogo profundo com a Grécia homérica e com os espaços de navegação da língua portuguesa.",
      "Resistência política ao Salazarismo: a poesia como 'arma contra a escuridão', recusando o medo e a alienação em favor da inteireza da vida cívica.",
      "O olhar deslumbrado e crítico sobre o Brasil: poemas inspirados em sua viagem ao Brasil na década de 1960, celebrando a exuberância natural e alertando para as desigualdades."
    ],
    characters: [
      { name: "O Eu Lírico", desc: "Voz poética aristocrática no rigor e democrática no compromisso humano; busca a limpidez da palavra exata e a integridade do cosmos." }
    ],
    fuvestTips: "A FUVEST destaca a sobriedade clássica e a contenção verbal de Sophia. Repare como em 'Geografia' a paisagem nunca é mero ornamento postal: o espaço físico é sempre uma tomada de posição ética perante a história humana e contra o autoritarismo.",
    quote: "'Porque os outros se mascaram mas tu não / Porque os outros usam a virtude / Para comprar o que não tem perdão. / Porque os outros têm medo mas tu não... / Vemos, ouvimos e lemos: não podemos ignorar!'"
  },
  {
    id: "balada-de-amor-ao-vento",
    title: "Balada de Amor ao Vento",
    author: "Paulina Chiziane",
    yearOfPub: 1990,
    period: "Literatura Africana em Língua Portuguesa / Moçambique (1990)",
    badgeColor: "orange",
    summary: "Marco histórico das letras africanas, foi o primeiro romance publicado por uma mulher em Moçambique. Ambientado na região do rio Save durante o domínio colonial português e nos albores da independência, narra a trajetória pungente da jovem tsonga Sarnau e sua paixão proibida por Mwando. Sarnau é rejeitada e entregue em lobolo (dote nupcial tradicional) a um monarca polígamo arrogante, suportando rivalidades entre coesposas, violência e desterro, enquanto Mwando enfrenta o trabalho forçado (chibalo) dos colonizadores brancos. Uma saga épica e lírica sobre a condição da mulher submetida tanto às amarras do patriarcado tribal quanto ao jugo da dominação colonial.",
    keyThemes: [
      "Dupla opressão feminina: a mulher africana esmagada simultaneamente pelo patriarcado tradicional (poligamia, lobolo, esterilidade punida) e pelo colonialismo europeu racista.",
      "Oralidade e lírica tradicional: incorporação magistral de provérbios, cânticos e mitologias dos povos do sul de Moçambique na prosa portuguesa.",
      "A violência colonial do chibalo: denúncia explícita do trabalho escravo imposto pela administração portuguesa aos homens negros moçambicanos.",
      "Resiliência e solidariedade: a capacidade de Sarnau de reescrever seu destino e manter viva a chama de sua autonomia afetiva apesar das tempestades da vida."
    ],
    characters: [
      { name: "Sarnau", desc: "Heroína trágica e corajosa; questiona as leis tribais que vendem seu corpo e resiste às humilhações com dignidade inquebrantável." },
      { name: "Mwando", desc: "Primeiro amor de Sarnau, homem vacilante que cai em desgraça diante da Igreja católica e sofre os horrores do trabalho forçado colonial." },
      { name: "Rei Nguila", desc: "Soberano autoritário que compra Sarnau como esposa troféu, símbolo da opressão machista tradicional ancorada na riqueza do gado." }
    ],
    fuvestTips: "A FUVEST explora a crítica corrosiva de Chiziane à prática do lobolo quando mercantilizada, bem como a denúncia da hipocrisia das missões religiosas coloniais que prometiam salvação mas colaboravam com a exploração do povo moçambicano.",
    quote: "'O amor de mulher é como o vento: ninguém vê de onde ele vem nem para onde vai, mas quando sopra forte, derruba até os embondeiros mais antigos da savana.'"
  },
  {
    id: "cancao-para-ninar-menino-grande",
    title: "Canção para Ninar Menino Grande",
    author: "Conceição Evaristo",
    yearOfPub: 2018,
    period: "Literatura Brasileira Contemporânea / Escrevivência (2018)",
    badgeColor: "indigo",
    summary: "Concebido sob o consagrado conceito de 'escrevivência' de Conceição Evaristo, o romance gira em torno da figura de Fio Jasmim, maquinista de trem negro e sedutor, e da teia de mulheres negras que cruzam sua trajetória afetiva (Pérola Maria, Juventina, Regina, Joana, entre outras). O livro desconstrói com aguda sutileza a masculinidade negra patriarcal — o 'menino grande' mimado e insaciável que coleciona paixões sem assumir compromissos —, deslocando o foco narrativo para a voz, os desejos, os silêncios, a sexualidade e a irmandade das mulheres que resistem à solidão e à invisibilidade social.",
    keyThemes: [
      "A Escrevivência: escrita visceral nascida da experiência coletiva, do corpo e da memória das mulheres afro-brasileiras.",
      "Desconstrução da masculinidade tóxica: o homem negro infantilizado pelas estruturas patriarcais ('menino grande'), incapaz de sustentar o afeto.",
      "A solidão da mulher negra e o erotismo: celebração da sexualidade, do prazer e da beleza das mulheres negras contra os estereótipos de subserviência.",
      "Ancestralidade e redes de afeto: a cumplicidade feminina intergeracional que cura feridas emocionais e acolhe os frutos do abandono."
    ],
    characters: [
      { name: "Fio Jasmim", desc: "Maquinista charmoso, ferroviário galanteador que transita pelas estações colhendo amores efêmeros sem criar raízes." },
      { name: "Pérola Maria", desc: "Mulher apaixonada e lúcida; vivencia o encanto e o desencanto com Fio Jasmim, transformando dor em soberania emocional." },
      { name: "Juventina", desc: "Matriarca altiva e acolhedora, guardiã da memória das ervas, dos partos e do consolo às outras companheiras." }
    ],
    fuvestTips: "Ponto nevrálgico para a prova: atente para o jogo polifônico das narradoras e para a recusa de culpabilizar exclusivamente o homem negro sem antes expor as feridas históricas do racismo que fraturaram os laços familiares da população afrodescendente.",
    quote: "'A nossa escrevivência não é para adormecer os da casa-grande, e sim para acordá-los de seus sonos injustos. É o canto de quem aprendeu a ninar a própria coragem.'"
  },
  {
    id: "a-visao-das-plantas",
    title: "A Visão das Plantas",
    author: "Djaimilia Pereira de Almeida",
    yearOfPub: 2019,
    period: "Literatura Luso-Angolana Contemporânea (2019)",
    badgeColor: "teal",
    summary: "Inspirada em uma breve anotação histórica sobre o infame capitão de navio negreiro Celestino, a escritora luso-angolana Djaimilia Pereira de Almeida narra a velhice sombria desse homem cruel que, após uma vida inteira cometendo atrocidades no tráfico transatlântico de escravizados, refugia-se em uma quinta decadente em Portugal. Ali, nos seus últimos anos, o antigo carrasco dedica-se de modo obsessivo e terno a cuidar de um jardim botânico exuberante. O romance investiga com maestria a ambiguidade da culpa, a desumanização colonial e o silêncio indiferente da natureza, que acolhe tanto monstros quanto santos sem fazer julgamentos morais.",
    keyThemes: [
      "A banalidade do mal e a violência do tráfico negreiro: os ecos indeléveis da escravidão que mancham a história de Portugal.",
      "A ambiguidade da redenção: a perplexidade moral de um homem monstruoso capaz de gestos de delicadeza infinita com as flores de seu canteiro.",
      "A natureza indiferente ('A visão das plantas'): o jardim botânico como testemunha silenciosa que não julga, apenas cresce, floresce e apodrece sobre os pecados humanos.",
      "Prosa lírica, precisa e lacunar: frases curtas e densas que sugerem o horror dos porões sem precisar transformá-lo em espetáculo vulgar."
    ],
    characters: [
      { name: "Capitão Celestino", desc: "Ex-traficante de seres humanos, velho decrépito que vive assombrado por seus crimes e busca consolo na botânica do seu jardim." },
      { name: "As Plantas / O Jardim", desc: "Verdadeiro protagonista metafórico; representam a pureza insensível do mundo vegetal diante das tragédias morais da humanidade." },
      { name: "A População da Aldeia", desc: "Comunidade portuguesa provinciana que oscila entre o horror ao passado do capitão e a curiosidade pela beleza do seu horto." }
    ],
    fuvestTips: "A FUVEST adora questionar o leitor sobre os limites da empatia e da justiça histórica: cuidar de um jardim apaga as vidas dizimadas no oceano? Observe a ironia sutil da narradora sobre a falsa civilidade europeia que enriqueceu à custa da barbárie ultramarina.",
    quote: "'As plantas não sabem que ele foi um carrasco. Elas abrem suas pétalas para a mesma luz que iluminava os grilhões nos porões. A terra recebe com a mesma doçura o sangue dos inocentes e o adubo dos tiranos.'"
  }
];
