/**
 * Guia de Literatura FUVEST 2027 — Obras Obrigatórias
 * Fonte Oficial: Guia de Literatura FUVEST 2027 & Suplemento de Personagens
 * 
 * Contém:
 * - 9 Obras detalhadas (Resumo, Contexto, Subseções Temáticas, Suplemento de Personagens,
 *   Símbolos, O que a prova pode cobrar, Interpretação e Ideias-chave)
 * - Eixos Transversais e Comparações detalhadas entre as obras
 * - Tabela Comparativa Geral
 * - Linha do Tempo de Publicação (1853 a 2019) com pontos de atenção
 * - Checklist de Revisão das 9 obras
 * - Método Estrutural para Responder Questões Discursivas da 2ª Fase FUVEST
 */

const booksData = [
  {
    id: "opusculo-humanitario",
    title: "Opúsculo Humanitário",
    author: "Nísia Floresta",
    yearOfPub: 1853,
    period: "Pensamento Social & Feminismo Oitocentista (Séc. XIX)",
    genreFocus: "Ensaio; educação feminina",
    badgeColor: "amber",
    summary: "Publicado em 1853 sob o pseudônimo de Nísia Floresta Brasileira Augusta, 'Opúsculo Humanitário' é um ensaio pioneiro e combativo sobre a emancipação feminina e a educação no Brasil imperial. A autora critica ferozmente a pedagogia superficial destinada às mulheres de sua época, limitada a prendas domésticas, piano e adorno social para agradar aos maridos. Inspirada pelo ideário positivista e humanitário, Nísia defende que a decadência moral e política do Brasil decorre da ignorância em que as mulheres são mantidas, sustentando que a educação científica, moral e crítica da mulher é o motor indispensável para o verdadeiro progresso da humanidade.",
    contextoAutora: "Nísia Floresta (Dionísia Gonçalves Pinto) foi uma intelectual brasileira pioneira na defesa da educação das mulheres. A obra foi publicada em uma sociedade patriarcal, escravocrata e marcada por acesso limitado à instrução.",
    thematicSections: [
      {
        title: "Resumo Detalhado & Natureza da Obra",
        content: "O livro não apresenta uma trama com protagonista e desfecho: é composto por reflexões e argumentos sobre a condição das mulheres e a importância da educação. Nísia critica a instrução restrita das mulheres, frequentemente direcionada apenas às tarefas domésticas e ao papel de esposa e mãe. Defende que a mulher não deve ser considerada intelectualmente inferior: a falta de oportunidades não pode ser usada como prova de incapacidade."
      },
      {
        title: "Educação como Transformação",
        content: "A instrução permite desenvolver raciocínio, senso crítico, autonomia intelectual e participação social. A autora relaciona a educação feminina ao progresso coletivo: formar mulheres também influencia a formação das futuras gerações e o desenvolvimento da nação."
      },
      {
        title: "Crítica ao Patriarcado",
        content: "A obra questiona a concentração de autoridade e poder nos homens e a expectativa de que mulheres apenas obedeçam. Há uma contradição social profunda: espera-se que mulheres eduquem crianças, mas não se lhes oferece formação adequada para esse papel e para seu desenvolvimento individual."
      }
    ],
    characters: [
      {
        name: "Nísia Floresta / Voz Ensaística",
        role: "Voz Argumentativa e Intelectual",
        desc: "Não é uma personagem ficcional. A voz argumentativa da autora organiza a reflexão, denuncia desigualdades educacionais e defende que a educação das mulheres é parte essencial do progresso social."
      },
      {
        name: "A Mulher Brasileira",
        role: "Figura Social Coletiva Central",
        desc: "Tratada como sujeito que tem sido historicamente excluído da educação e da vida pública. Não representa uma pessoa específica, mas uma condição coletiva que a autora quer transformar."
      },
      {
        name: "A Criança e o Estudante",
        role: "Símbolos da Pedagogia Renovadora",
        desc: "Figuras recorrentes no debate pedagógico: simbolizam a responsabilidade social da educação e a necessidade urgente de práticas menos autoritárias e mais humanizadoras."
      },
      {
        name: "Sociedade e Educadores",
        role: "Instituições Questionadas",
        desc: "Aparecem como agentes e instituições a serem questionados ou reformados, especialmente quando perpetuam preconceitos, violência pedagógica e desigualdade de gênero."
      }
    ],
    symbols: [
      { name: "Prendas Domésticas e Piano", desc: "Símbolos da falsa educação alienante da elite imperial, voltada a produzir adornos de salão." },
      { name: "A Ciência e a Razão", desc: "Instrumentos universais de emancipação e de regeneração cívica da nação brasileira." }
    ],
    ideiasChave: [
      "Educação feminina",
      "Igualdade intelectual",
      "Progresso nacional",
      "Crítica ao patriarcado",
      "Autonomia moral",
      "Formação das futuras gerações"
    ],
    fuvestTips: "O caráter argumentativo do ensaio; educação como emancipação; crítica à desigualdade estrutural; relação direta entre desenvolvimento individual e progresso social; contexto do Brasil Imperial (séc. XIX); distinção entre instrução emancipatória e adestramento doméstico.",
    interpretacao: "A desigualdade não se sustenta em uma incapacidade natural, mas na exclusão histórica das mulheres dos espaços de conhecimento. Educação é instrumento de emancipação individual e transformação coletiva.",
    quote: "'A ignorância em que a mulher tem sido conservada pela tirania do homem é a causa primária de todos os males morais e sociais que afligem a humanidade.'"
  },
  {
    id: "nebulosas",
    title: "Nebulosas",
    author: "Narcisa Amália",
    yearOfPub: 1872,
    period: "Romantismo - 3ª Geração / Condoreirismo Lírico (1872)",
    genreFocus: "Poesia; lirismo e crítica social",
    badgeColor: "rose",
    summary: "Publicado em 1872, 'Nebulosas' é o livro de estreia de Narcisa Amália, primeira jornalista profissional do Brasil, saudado entusiasticamente por Machado de Assis e Castro Alves. A obra conjuga a lírica confessional da dor íntima com a poesia cívica de combate social. Dividida em seções que alternam o sentimento da natureza tropical, o lamento amoroso e a indignação política, a poeta ergue uma voz autônoma contra a escravidão, o preconceito de gênero, a guerra e a desilusão existencial.",
    contextoAutora: "Narcisa Amália foi poetisa e jornalista brasileira. Sua atuação literária é de enorme relevância em um ambiente intelectual predominantemente masculino. A coletânea dialoga com o lirismo romântico e com as grandes questões sociais do Império.",
    thematicSections: [
      {
        title: "Resumo e Forma Literária",
        content: "Nebulosas é uma coletânea de 44 poemas, e não um romance contínuo. Não há personagens fixos nem enredo único. Cada poema constrói uma voz, imagens e reflexões. Atenção crucial para a prova: o eu lírico — voz que fala no poema — não deve ser automaticamente confundido com a biografia da autora."
      },
      {
        title: "Natureza e Sentimento",
        content: "Paisagens, céu, noite, luz, tempestade e outros elementos naturais espelham emoções. A natureza não é apenas cenário decorativo: expressa tristeza, esperança, solidão, liberdade, angústia e o desejo de transformação."
      },
      {
        title: "Melancolia e Crítica Social",
        content: "A poesia romântica valoriza a intensidade sentimental e a interioridade. A obra também dialoga com preocupações sociais e políticas de sua época, incluindo liberdade e injustiça. A poesia ultrapassa o âmbito pessoal e assume uma dimensão de denúncia combativa."
      },
      {
        title: "A Condição Feminina",
        content: "A escrita e a presença pública de uma mulher constituem afirmação em uma época de severas restrições. A produção intelectual feminina enfrentava preconceitos profundos e expectativas sociais asfixiantes."
      }
    ],
    characters: [
      {
        name: "Eu Lírico",
        role: "Voz Poética Central",
        desc: "Expressa subjetividade, melancolia, aspirações, indignação e contemplação. Em vários poemas, essa voz é feminina; articula dor pessoal e protesto cívico."
      },
      {
        name: "A Mulher / A Poeta",
        role: "Sujeito de Criação e Reflexão",
        desc: "Surge como sujeito autônomo que expõe a dificuldade da mulher em ocupar o espaço literário e intelectual em uma sociedade patriarcal que silencia sua voz."
      },
      {
        name: "O Africano e o Poeta",
        role: "Figura do Poema Homônimo",
        desc: "Fundamental para a leitura abolicionista da obra: coloca a tragédia da escravidão e a dignidade humana do cativo no centro da denúncia lírica."
      },
      {
        name: "Júlia e Augusta",
        role: "Contrastes de Modelos Femininos",
        desc: "Duas figuras nomeadas em poema específico que contrastam comportamentos e expectativas sobre a mulher; devem ser interpretadas a partir do poema, e não como personagens de enredo."
      },
      {
        name: "Figuras Personificadas (Esperança, Tristeza etc.)",
        role: "Dramatizações de Estados da Alma",
        desc: "Sentimentos e abstrações que ganham presença corpórea nos versos, funcionando como recursos de dramatização do estado emocional e das ideias políticas."
      }
    ],
    symbols: [
      { name: "Nebulosas (Nuvens Celestiais)", desc: "Metáfora da dor, incerteza existencial e lágrimas que encobrem o horizonte da mulher e da nação." },
      { name: "Tempestade e Céu Tropical", desc: "Manifestação das paixões indomáveis e das comoções sociais abolicionistas." }
    ],
    ideiasChave: [
      "Subjetividade e lirismo",
      "Natureza como imagem emocional",
      "Abolicionismo e liberdade",
      "Condição feminina oitocentista",
      "Engajamento cívico",
      "Metáforas e musicalidade"
    ],
    fuvestTips: "Interpretação do eu lírico; atenção aos poemas 'Invocação', 'O africano e o poeta', 'Visão' e 'Júlia e Augusta'; relação entre natureza e sentimentos íntimos; características da 3ª geração romântica (condoreira); poesia lírica como crítica social e debates históricos sobre a liberdade.",
    interpretacao: "A poesia articula subjetividade e consciência social. Sentimentos individuais podem e devem dialogar com injustiça, liberdade e conflitos históricos, recusando o isolamento alienado.",
    quote: "'Deixai-me em paz chorar! Não vedes como / A dor me curva a fronte desmaiada? / Eu trago a alma em lágrimas desfeita, / No mar das desilusões naufragada!'"
  },
  {
    id: "memorias-de-martha",
    title: "Memórias de Martha",
    author: "Júlia Lopes de Almeida",
    yearOfPub: 1899,
    period: "Realismo / Naturalismo sob Ótica Feminina (1899)",
    genreFocus: "Romance; pobreza e formação",
    badgeColor: "emerald",
    summary: "Publicado em folhetim no jornal 'A Tribuna' (1888) e editado em livro em 1899, é o romance de estreia de Júlia Lopes de Almeida. Narrado em primeira pessoa em tom memorialista, conta a infância e juventude de Martha em um cortiço miserável do Rio de Janeiro pós-Guerra do Paraguai. Diante da orfandade precoce, da miséria e do alcoolismo no meio popular, Martha recusa a fatalidade da degradação moral típica do Naturalismo determinista, conquistando a sobrevivência, a instrução e a independência por meio do trabalho e do magistério.",
    contextoAutora: "Júlia Lopes de Almeida foi uma das escritoras mais lidas e prestigiadas da Belle Époque brasileira. O romance aborda formação, desigualdade social e condição feminina, com aguçada observação crítica da realidade.",
    thematicSections: [
      {
        title: "Resumo Detalhado & Perspectiva Memorialista",
        content: "Martha relembra sua vida desde a infância, marcada por pobreza e privações no cortiço. A narrativa em tom memorialístico acompanha como a origem social e a falta de recursos materiais afetam oportunidades, acesso à educação e a forma como a protagonista é rotulada. O passado é apresentado pela perspectiva de quem o revisita madura, permitindo acompanhar os fatos e sua interpretação crítica."
      },
      {
        title: "Pobreza e Oportunidades",
        content: "A pobreza interfere no cotidiano, no acesso à educação, cultura, moradia digna e perspectivas de futuro. Não é apenas um problema moral ou individual: revela desigualdades estruturais profundas que condicionam a existência humana."
      },
      {
        title: "Educação e Formação",
        content: "A educação oferece novas perspectivas e pode ampliar a autonomia feminina, mas o caminho é dificultado por barreiras materiais e de classe. O esforço pessoal e a meritocracia isolada não eliminam todas as desigualdades estruturais."
      },
      {
        title: "Gênero e Sociedade",
        content: "A trajetória revela as limitações impostas às mulheres e as severas expectativas sociais da época. Pobreza e condição feminina se combinam, intensificando a vulnerabilidade aos abusos e ao preconceito."
      }
    ],
    characters: [
      {
        name: "Martha (Filha)",
        role: "Narradora e Protagonista",
        desc: "Cresce em situação de extrema pobreza no cortiço carioca. Vê na educação a via de autonomia e ascensão. Seu olhar reflexivo também revela contradições e conflitos com o meio social."
      },
      {
        name: "Mãe de Martha",
        role: "Costureira Viúva e Mártir",
        desc: "Sustenta a filha com sacrifício heroico. Representa a luta cotidiana das mulheres pobres, o cuidado materno incondicional e a constante preocupação com a reputação e o futuro da jovem."
      },
      {
        name: "Dona Aninha / A Mestra",
        role: "Professora e Mentora Emancipatória",
        desc: "Reconhece o talento e a capacidade intelectual de Martha, incentivando-a a prosseguir nos estudos até se formar professora. É a figura de apoio e oportunidade decisiva na trama."
      },
      {
        name: "Luís",
        role: "O Amor Idealizado",
        desc: "Jovem por quem Martha se encanta durante as férias. Representa o amor romântico idealizado e a intransponível distância entre desejo, convenções sociais e diferenças de classe."
      },
      {
        name: "Miranda",
        role: "Marido de Martha",
        desc: "Homem ligado à mãe de Martha com quem a protagonista se casa. O matrimônio oferece promessa de estabilidade e segurança material, mas não corresponde à realização afetiva que ela desejava."
      },
      {
        name: "A Ilhoa e seus Filhos (Carolina, Maneco, Rita e Lucas)",
        role: "Vizinhos do Cortiço",
        desc: "Família que expõe a dureza da vida popular urbana e o ambiente de violência, privação e promiscuidade que Martha observa com lucidez e tenta superar."
      },
      {
        name: "Lucinda",
        role: "Contraste de Classe Social",
        desc: "Filha de uma freguesa rica de sua mãe. A emblemática cena do espelho e o contraste entre as duas meninas ajudam a evidenciar o abismo e a humilhação das diferenças de classe."
      },
      {
        name: "Mathilde",
        role: "Colega de Escola",
        desc: "Sua trajetória escolar e o tratamento excludente que recebe no colégio evidenciam os preconceitos sociais e raciais entranhados na sociedade brasileira de fins do século XIX."
      },
      {
        name: "Clara Silvestre",
        role: "Colega que Abandona a Escola",
        desc: "O reencontro posterior com Martha permite comparar os destinos divergentes de mulheres pobres quando privadas do amparo da educação formal."
      }
    ],
    symbols: [
      { name: "O Espelho (Cena com Lucinda)", desc: "Revelação dolorosa da disparidade de classe e da autopercepção da menina pobre perante a burguesa." },
      { name: "O Diploma de Professora", desc: "A conquista palpável da autonomia e da soberania moral contra o determinismo do cortiço." }
    ],
    ideiasChave: [
      "Pobreza e desigualdade estrutural",
      "Educação e formação individual",
      "Memória e perspectiva narrativa",
      "Gênero e expectativas sociais",
      "Crítica ao determinismo mecanicista",
      "Realismo empático"
    ],
    fuvestTips: "Trajetória individual em confronto com o contexto social; a pobreza como condicionante (sem transformar Martha em fera animalesca, contraponto a Aluísio Azevedo); papel libertador da educação e seus limites materiais; a cena do espelho com Lucinda; preconceitos raciais e de classe na escola com Mathilde.",
    interpretacao: "A formação humana não depende exclusivamente das escolhas pessoais: condições materiais determinam oportunidades reais. A educação amplia possibilidades, mas desigualdades estruturais persistem.",
    quote: "'A miséria não apaga a beleza das almas nobres; no lodo daquele pátio, entre gritos e farrapos, aprendi que a dignidade é a única riqueza que ninguém pode nos roubar.'"
  },
  {
    id: "caminho-de-pedras",
    title: "Caminho de pedras",
    author: "Rachel de Queiroz",
    yearOfPub: 1937,
    period: "Modernismo - 2ª Fase / Romance Proletário e Social de 30 (1937)",
    genreFocus: "Romance; política e autonomia",
    badgeColor: "red",
    summary: "Publicado no tenso ano de 1937, 'Caminho de pedras' retrata Fortaleza sob a agitação dos movimentos operários e a perseguição aos militantes de esquerda às vésperas do Estado Novo. Noemi, casada com um burocrata desiludido, apaixona-se por Roberto, militante comunista. Ao romper o casamento para assumir a militância, enfrenta isolamento, a separação dolorosa do filho e a prisão de Roberto, trilhando um árduo caminho de pedras de sacrifício ideológico e crescimento pessoal.",
    contextoAutora: "Rachel de Queiroz foi pioneira do Modernismo social brasileiro de 30. A obra situa-se no contexto de intensa agitação política em Fortaleza, greves proletárias e a ascensão de regimes autoritários.",
    thematicSections: [
      {
        title: "Resumo Detalhado: Política e Vida Privada",
        content: "A narrativa articula política e esfera privada. Personagens envolvidos com ideias revolucionárias e transformações sociais enfrentam conflitos íntimos intensos. A militância envolve ideais, expectativas, disputas e repressão policial; as convicções interferem diretamente nas relações familiares e nos projetos individuais."
      },
      {
        title: "Política e Militância Concreta",
        content: "A política não é abstração teórica: afeta escolhas diárias, vínculos afetivos e a rotina de subsistência. O livro permite observar tensões internas dentro das células partidárias entre o compromisso ideológico e a experiência concreta da classe operária."
      },
      {
        title: "Liberdade Feminina e Ruptura",
        content: "Noemi desafia as expectativas morais sobre comportamento, casamento e maternidade da Fortaleza provinciana. A narrativa questiona se a liberdade pregada no campo político revolucionário é verdadeiramente respeitada nas relações interpessoais privadas."
      },
      {
        title: "Amor, Conflito e Indivíduo Coletivo",
        content: "Sentimentos amorosos coexistem com divergências ideológicas e responsabilidades pesadas. Discute como alguém pode se dedicar a uma causa coletiva sem anular suas necessidades e contradições pessoais."
      }
    ],
    characters: [
      {
        name: "Noemi",
        role: "Protagonista / Mulher em Busca de Autonomia",
        desc: "Casada e mãe, envolve-se com a militância e apaixona-se por Roberto. Busca uma vida autêntica que faça sentido para si, enfrentando condenação social, perda da guarda do filho e isolamento. Central para discutir o custo social da ruptura feminina."
      },
      {
        name: "Roberto",
        role: "Jornalista e Militante Comunista",
        desc: "Retorna a Fortaleza para estruturar a atividade política do partido. Aproxima Noemi da militância e vive um romance com ela; enfrenta conflitos entre intelectuais e operários antes de ser preso pela polícia."
      },
      {
        name: "João Jaques",
        role: "Marido de Noemi / Ex-Militante Desiludido",
        desc: "Sua relação com Noemi é marcada por desgaste afetivo e desilusão cívica. A separação envolve ressentimento, orgulho ferido e a disputa pelo vínculo com o filho."
      },
      {
        name: "Guri",
        role: "Filho de Noemi e João Jaques",
        desc: "Presença decisiva no conflito dramático; encarna o laço de maternidade e as consequências dolorosas impostas pelas escolhas políticas e circunstâncias da repressão."
      },
      {
        name: "Filipe",
        role: "Militante e Amigo de Roberto",
        desc: "Ajuda a expor os debates ideológicos internos do movimento e o papel contraditório dos intelectuais pequeno-burgueses na organização partidária."
      },
      {
        name: "Vinte-e-Um",
        role: "Operário Questionador",
        desc: "Trabalhador gráfico que confronta Roberto, evidenciando o abismo entre a teoria política dos intelectuais e a vivência prática e sofrida dos operários de fábrica."
      },
      {
        name: "Rufino",
        role: "Operário Conciliador",
        desc: "Intervém nos conflitos internos e ajuda a equilibrar as tensões e vaidades dentro do grupo clandestino."
      },
      {
        name: "Angelita e Assis",
        role: "Casal de Militantes em Contraste",
        desc: "Angelita é combatente ativa e convicta; seu marido Assis está amargurado e desiludido com a política. O casal retrata persistência x desencanto."
      },
      {
        name: "Guiomar",
        role: "Amiga e Colega de Trabalho de Noemi",
        desc: "Ligada ao cotidiano laboral e às relações sociais ordinárias da protagonista fora do círculo revolucionário."
      },
      {
        name: "Benevides",
        role: "Chefe de Noemi no Emprego",
        desc: "A relação profissional e o preconceito patronal mostram como a conduta privada da mulher que rompe o casamento é sumariamente julgada e punida pela sociedade."
      }
    ],
    symbols: [
      { name: "O Caminho de Pedras", desc: "A aspereza da luta revolucionária e da emancipação feminina: doloroso, árduo, mas inescapável." },
      { name: "O Panfleto Clandestino", desc: "A palavra como risco de vida, confronto contra o Estado autoritário e instrumento de coesão." }
    ],
    ideiasChave: [
      "Ideologia e prática política",
      "Liberdade feminina e patriarcado",
      "Amor e compromisso",
      "Repressão do Estado Novo",
      "Conflito indivíduo x coletividade",
      "Tensões entre operários e intelectuais"
    ],
    fuvestTips: "Contradição entre discurso político libertário e práticas machistas no cotidiano; a posição autônoma de Noemi perante o casamento e a militância; visão crítica e sem idealizações dos movimentos de esquerda nos anos 30; a presença dolorosa de Guri e o sacrifício da maternidade.",
    interpretacao: "Transformações sociais precisam alcançar não apenas a esfera pública e partidária, mas também as relações pessoais, os comportamentos íntimos e as estruturas de poder cotidianas.",
    quote: "'Não era um caminho macio, nem coberto de flores. Era um caminho áspero, de pedras pontiagudas que rasgavam os pés, mas era o único caminho que valia a pena andar.'"
  },
  {
    id: "a-paixao-segundo-gh",
    title: "A paixão segundo G. H.",
    author: "Clarice Lispector",
    yearOfPub: 1964,
    period: "Modernismo - 3ª Fase / Romance Existencialista & Epifania (1964)",
    genreFocus: "Romance introspectivo; existência",
    badgeColor: "purple",
    summary: "Obra-prima de Clarice Lispector, o romance narra a experiência ontológica e vertiginosa da escultora burguesa G. H. em sua cobertura no Rio de Janeiro. Ao decidir arrumar o quarto da empregada Janair, recém-demitida, G. H. depara-se com um ambiente impecável e com desenhos a carvão na parede. No guarda-roupa, ao se assustar com uma barata milenar, esmaga o inseto na porta e vivencia uma profunda despersonalização, despojando-se de suas certezas sociais e morais até o gesto limite de provar a matéria branca do inseto.",
    contextoAutora: "Publicado em 1964, no ano do golpe militar. G. H., narradora em primeira pessoa, é uma escultora abastada da zona sul carioca. O romance prioriza a radicalidade da experiência interior e ontológica sobre qualquer ação externa.",
    thematicSections: [
      {
        title: "Início: A Entrada no Quarto",
        content: "G. H. decide arrumar o quarto da empregada Janair, que acabou de deixar o emprego. Espera encontrar sujeira e desordem típicas do preconceito de classe, mas depara-se com um cômodo limpo, solar e quase monástico. A descoberta desconcerta suas expectativas e perturba a imagem que tinha de Janair e de si mesma."
      },
      {
        title: "Alteridade e o Desenho a Carvão",
        content: "Janair, embora ausente fisicamente, tem presença simbólica esmagadora. Na parede caiada, desenhou a carvão um homem, uma mulher e um cachorro. G. H. compreende que Janair a observava e julgava: o quarto confronta a patroa com uma alteridade que recusa suas categorias burguesas."
      },
      {
        title: "O Confronto com a Barata",
        content: "Ao abrir o guarda-roupa escuro, G. H. topa com uma barata ancestral que a encara. O animal encarna uma existência pura que escapa às noções humanas de beleza, civilização, pecado e controle, deflagrando repulsa e fascínio arcaico."
      },
      {
        title: "Crise de Identidade e Matéria Viva",
        content: "G. H. questiona quem é, o que sustenta sua casca social e a insuficiência da linguagem humana perante o inefável. Ao tocar e provar a matéria viva do inseto, desmorona sua identidade civilizada para integrar-se ao 'neutro vivo' do cosmos."
      }
    ],
    characters: [
      {
        name: "G. H.",
        role: "Narradora-Protagonista / Escultora Burguesa",
        desc: "Vive em crise existencial após adentrar o quarto de Janair e esmagar a barata. Sofre o desmantelamento de suas certezas sobre humanidade, classe social, beleza e linguagem."
      },
      {
        name: "Janair",
        role: "Ex-Empregada Doméstica Ausente",
        desc: "Sua ausência física e os murais desenhados a carvão desestabilizam G. H., forçando a patroa a confrontar a invisibilidade social e seus próprios preconceitos de classe."
      },
      {
        name: "A Barata",
        role: "Símbolo da Existência Bruta e Matéria Neutra",
        desc: "Animal real e catalisador metafísico. Representa a vida crua, anterior às classificações morais da cultura humana; provoca repulsa, choque místico e despersonalização."
      },
      {
        name: "'Você' / Interlocutor Imaginado",
        role: "Apoio Simbólico e Mão Estendida",
        desc: "Pessoa a quem G. H. se dirige durante todo o relato, funcionando como âncora simbólica para tentar verbalizar uma experiência que ultrapassa os limites da linguagem."
      },
      {
        name: "Figuras do Passado de G. H.",
        role: "Lembranças Secundárias",
        desc: "Amantes e referências sociais que aparecem em flashes de memória; mostram como a vida pregressa de G. H. era construída sobre convenções vazias."
      }
    ],
    symbols: [
      { name: "O Quarto de Empregada", desc: "Espaço de revelação e de inversão da dominação social; território sagrado e ascético." },
      { name: "A Escultura", desc: "A busca humana de dar forma estética e domesticar a matéria viva incognoscível." },
      { name: "A Massa Branca da Barata", desc: "A matéria elementar, neutra e viva do cosmos que dissolve a ilusão do ego civilizado." }
    ],
    ideiasChave: [
      "Despersonalização e ruína do ego",
      "Alteridade social (Janair)",
      "A barata como matéria bruta pré-humana",
      "Crise e impotência da linguagem",
      "Monólogo interior e fluxo de consciência",
      "Mística profana e o neutro vivo"
    ],
    fuvestTips: "O simbolismo da barata; o papel revelador de Janair e de seus desenhos a carvão; o espaço do quarto como território do Outro; a crise da linguagem ('estou tentando entender'); a diferença entre ação exterior e abalo ontológico interior; estrutura narrativa aberta e circular.",
    interpretacao: "A experiência desmonta a identidade social de G. H. e a confronta com uma existência que ela não consegue controlar, julgar ou domesticar. A barata desencadeia a ruptura definitiva com as categorias e certezas humanas.",
    quote: "'O mundo não dependia de mim — esta era a confiança a que eu chegara: o mundo independia de mim, e eu não compreendia o que via porque o mundo não era humano, e nós somos apenas humanos.'"
  },
  {
    id: "geografia",
    title: "Geografia",
    author: "Sophia de Mello Breyner Andresen",
    yearOfPub: 1967,
    period: "Poesia Portuguesa Contemporânea / Modernismo Tardio (1967)",
    genreFocus: "Poesia; espaço e natureza",
    badgeColor: "blue",
    summary: "Publicado em 1967 durante o salazarismo em Portugal, 'Geografia' reúne poemas límpidos e rigorosos. Dividido em coordenadas geográficas reais e simbólicas — Mar Mediterrâneo, Grécia mítica, praias portuguesas, África e cidades brasileiras (Rio, Salvador, Brasília) —, constrói uma poética do espaço fundada nos elementos primordiais (luz, cal, sal, mar) e na exigência irrevogável de liberdade, justiça e integridade contra toda tirania.",
    contextoAutora: "Sophia de Mello Breyner Andresen foi uma das maiores poetisas de Portugal. 'Geografia' é um livro de poemas sem trama contínua; exige atenção cuidadosa às imagens, espaços, voz poética e às relações éticas entre o sujeito e o mundo.",
    thematicSections: [
      {
        title: "O Significado do Título 'Geografia'",
        content: "Ultrapassa o sentido de mero mapeamento ou estudo físico de lugares: o espaço é experiência humana, memória histórica, identidade cívica e percepção ética. A paisagem exterior dialoga permanentemente com uma geografia moral interior."
      },
      {
        title: "O Mar e a Memória",
        content: "O mar sugere liberdade, infinitude, movimento purificador, origem da vida e mistério. Carrega também dimensão histórica ligada à tradição marítima portuguesa — sem jamais cair na glorificação imperialista cega ou acrítica das navegações."
      },
      {
        title: "Natureza, Harmonia e Ordem Própria",
        content: "A natureza possui uma ordem e integridade próprias que contrastam com a artificialidade e a hipocrisia do poder autoritário. A busca de harmonia clássica expressa a necessidade imperativa de recuperar a dignidade humana essencial."
      },
      {
        title: "Espaço, Memória e Resistência Cívica",
        content: "Os lugares guardam memórias, pertencimento e passagem do tempo. Sob a ditadura de Salazar, o poema funciona como resistência luminosa contra o silêncio, a violência colonial e o medo."
      }
    ],
    characters: [
      {
        name: "Eu Lírico",
        role: "Voz Poética Contemplativa e Ética",
        desc: "Observa lugares, ruínas, praias e acontecimentos com limpidez helênica. A busca por clareza estética e justiça política se expressa na relação íntima com os elementos puros do cosmos."
      },
      {
        name: "Mulher / Sujeito Poético",
        role: "Ponto de Vista Situado",
        desc: "Em vários poemas, a voz feminina recorda, testemunha e se posiciona firmemente contra o autoritarismo, articulando memória e contemplação viva."
      },
      {
        name: "Electra",
        role: "Figura Trágica da Mitologia Grega",
        desc: "Evocada no poema para dialogar com a tragédia clássica, o destino, a memória familiar e a exigência de justiça que desafia os tiranos."
      },
      {
        name: "Antinoos",
        role: "Figura Histórica da Antiguidade",
        desc: "Ligado ao imperador romano Adriano, encarna a beleza corporal, o luto da perda e a permanência perene da memória através da criação artística."
      },
      {
        name: "Helena Lanari e Manuel Bandeira",
        role: "Diálogos e Homenagens Literárias",
        desc: "Referências a amizades e poetas da língua portuguesa, especialmente em suas viagens ao Brasil, revelando afinidades afetivas e estéticas."
      },
      {
        name: "Lorca e Outras Figuras Culturais",
        role: "Mártires da Liberdade e da Criação",
        desc: "Evocações a poetas assassinados por regimes fascistas; carregam o peso da memória, da violência política e da crítica intransigente à opressão."
      }
    ],
    symbols: [
      { name: "O Mar e o Salitre", desc: "A medida da pureza moral e da liberdade sem fronteiras que lava a corrupção humana." },
      { name: "A Cal Branca e a Luz", desc: "Símbolos da verdade transparente e da lucidez perante a história opressiva." }
    ],
    ideiasChave: [
      "Geografia interior e exterior",
      "O mar como pureza e memória",
      "Classicismo helênico e contenção",
      "Resistência ao salazarismo",
      "Espaço e tempo no Brasil e Portugal",
      "Harmonia ética e recusa da opressão"
    ],
    fuvestTips: "Como ler os poemas (identificar voz, espaço, elementos naturais e símbolos); relação entre natureza e sociedade; o mar e as ambiguidades da história ultramarina; diálogo clássico (Electra, Grécia) com a denúncia política moderna; a visão poética sobre o Brasil (Brasília, Rio, Bahia).",
    interpretacao: "A paisagem em Sophia não é mero cartão-postal. Ela revela aspectos fundamentais da existência, da memória, da dignidade ética e da busca inegociável por uma relação íntegra com a verdade e com a liberdade.",
    quote: "'Porque os outros se mascaram mas tu não / Porque os outros usam a virtude / Para comprar o que não tem perdão. / Porque os outros têm medo mas tu não... / Vemos, ouvimos e lemos: não podemos ignorar!'"
  },
  {
    id: "balada-de-amor-ao-vento",
    title: "Balada de amor ao vento",
    author: "Paulina Chiziane",
    yearOfPub: 1990,
    period: "Literatura Africana em Língua Portuguesa / Moçambique (1990)",
    genreFocus: "Romance; tradição e gênero",
    badgeColor: "orange",
    summary: "Marco histórico das letras africanas, foi o primeiro romance publicado por uma mulher em Moçambique. Ambientado na região do rio Save durante o domínio colonial português e nos albores da independência, narra a trajetória pungente da jovem tsonga Sarnau e sua paixão proibida por Mwando. Sarnau é rejeitada e entregue em lobolo (dote nupcial tradicional) a um monarca polígamo arrogante, suportando rivalidades entre coesposas, violência e desterro, enquanto Mwando enfrenta o trabalho forçado (chibalo) dos colonizadores brancos. Uma saga épica e lírica sobre a condição da mulher submetida tanto às amarras do patriarcado tribal quanto ao jugo da dominação colonial.",
    contextoAutora: "Paulina Chiziane foi a primeira mulher a publicar um romance em Moçambique e vencedora do Prêmio Camões. A obra aborda relações sociais, costumes ancestrais, o estatuto da mulher e as contradições do colonialismo.",
    thematicSections: [
      {
        title: "Resumo Detalhado: Amor e Conflitos Estruturais",
        content: "Sarnau vive uma história de amor com Mwando às margens do Save. A relação é atravessada por barreiras culturais, familiares e econômicas. O amor não floresce em liberdade plena: tradições e exigências materiais de gado influenciam destinos. A vacilação de Mwando gera sofrimento e expõe a desigualdade de responsabilidades afetivas."
      },
      {
        title: "Casamento, Tradições e o Lobolo",
        content: "O matrimônio tradicional envolve alianças de clãs e interesses econômicos muito além do sentimento amoroso. Práticas tradicionais fornecem pertencimento comunitário, mas restringem severamente a liberdade e os direitos das mulheres."
      },
      {
        title: "Patriarcado e Poligamia",
        content: "A sociedade retratada concede aos homens ampla soberania sexual e social, enquanto mulheres enfrentam cobranças inflexíveis de obediência, fidelidade e fecundidade ininterrupta. Sarnau é punida quando seus filhos perecem e é subjugada na casa do rei."
      },
      {
        title: "Autonomia, Tradição e Transformação",
        content: "O romance vai muito além de um idílio romântico: mostra como Sarnau reconstrói sua independência. A autora critica práticas que sustentam opressões sem adotar um olhar colonizado ou simplista de repúdio à cultura moçambicana."
      }
    ],
    characters: [
      {
        name: "Sarnau",
        role: "Protagonista e Narradora",
        desc: "Centro interpretativo da obra. Vive a paixão, a rejeição e as violências de gênero na estrutura poligâmica e patriarcal, construindo uma trajetória dolorosa de sobrevivência e busca de soberania pessoal."
      },
      {
        name: "Mwando",
        role: "Primeiro Amor de Sarnau",
        desc: "Homem dividido entre o sentimento sincero, as promessas não cumpridas, a formação nas missões cristãs e o pesadelo do trabalho forçado colonial (chibalo)."
      },
      {
        name: "Nguila",
        role: "Marido de Sarnau e Monarca Tribal",
        desc: "Figura de autoridade despótica. Sua relação com Sarnau explicita a mercantilização da mulher no casamento polígamo e os limites brutais impostos à autonomia feminina."
      },
      {
        name: "Sumbi",
        role: "Esposa de Mwando",
        desc: "Mulher com quem Mwando se casa posteriormente; sua presença adensa o drama afetivo e expõe as instabilidades emocionais do protagonista."
      },
      {
        name: "Phati",
        role: "Esposa Veterana de Nguila",
        desc: "Figura chave na casa polígama; participa ativamente das disputas de poder, rivalidades e tensões que encurralam Sarnau no harém."
      },
      {
        name: "Rindau",
        role: "Irmã de Sarnau",
        desc: "Ajuda a situar a protagonista em sua teia de parentesco familiar e nos deveres comunitários da linhagem tsonga."
      },
      {
        name: "Eni",
        role: "Amiga de Sarnau",
        desc: "Oferece cumplicidade, escuta e sustentação afetiva nos momentos de maior desespero e solidão da protagonista."
      },
      {
        name: "João, Zucula e Phati (Filha)",
        role: "Filhos de Sarnau",
        desc: "Personagens vinculados às diferentes etapas da vida de Sarnau; encarnam as dores da maternidade estigmatizada e as decisões familiares."
      },
      {
        name: "Rungo",
        role: "Pai de Mwando",
        desc: "Representa a autoridade paterna tradicional, as exigências de gado e a formação moral do jovem no meio banto."
      },
      {
        name: "Januário",
        role: "Curandeiro Tradicional",
        desc: "Vinculado ao universo dos saberes e rituais mágicos de cura, adivinhação e purificação da tradição ancestral."
      },
      {
        name: "Padre Ferreira e Salomão",
        role: "Igreja e Educação Colonial",
        desc: "Representam a presença eclesiástica católica e a catequese europeia que fratura a identidade cultural moçambicana."
      },
      {
        name: "Khedzi, Khelu e Nhambi",
        role: "Comunidade Aldeã Secundária",
        desc: "Personagens da aldeia que ampliam o tecido social e os costumes coletivos às margens do rio Save."
      }
    ],
    symbols: [
      { name: "O Vento da Savana", desc: "O amor e o destino feminino que sopram livres e imprevisíveis, derrubando estruturas rígidas." },
      { name: "O Rio Save", desc: "Espaço de travessia, fronteira entre clãs e testemunha das dores dos amantes." },
      { name: "O Gado do Lobolo", desc: "A moeda viva da tradição que transforma o casamento em transação de honra e submissão." }
    ],
    ideiasChave: [
      "Patriarcado e poligamia",
      "O lobolo e suas contradições",
      "Trabalho forçado colonial (chibalo)",
      "Autonomia e resiliência feminina",
      "Oralidade tradicional moçambicana",
      "Amor versus convenções de clã"
    ],
    fuvestTips: "A relação complexa entre Sarnau e Mwando (amor e desequilíbrio de poder); o casamento polígamo e as tensões na casa de Nguila; a crítica ao patriarcado tradicional combinada à denúncia da violência colonial portuguesa (chibalo); cuidado para não simplificar a sociedade moçambicana com preconceitos ocidentais.",
    interpretacao: "A trajetória de Sarnau evidencia que o amor é condicionado por estruturas tradicionais e coloniais que restringem a liberdade da mulher. A obra valoriza a maturidade, a resiliência e a conquista da autonomia.",
    quote: "'O amor de mulher é como o vento: ninguém vê de onde ele vem nem para onde vai, mas quando sopra forte, derruba até os embondeiros mais antigos da savana.'"
  },
  {
    id: "cancao-para-ninar-menino-grande",
    title: "Canção para ninar menino grande",
    author: "Conceição Evaristo",
    yearOfPub: 2018,
    period: "Literatura Brasileira Contemporânea / Escrevivência (2018)",
    genreFocus: "Narrativa literária; masculinidade e afetos",
    badgeColor: "indigo",
    summary: "Concebido sob o consagrado conceito de 'escrevivência' de Conceição Evaristo, o romance gira em torno de Fio Jasmim, maquinista de trem ferroviário negro e sedutor, e da extensa ciranda de mulheres negras que cruzam sua trajetória afetiva pelas cidades e estações de Minas Gerais e Rio de Janeiro (Pérola Maria, Juventina, Adelaide, Regina, entre outras). A obra desconstrói com sutileza magistral o mito da masculinidade negra patriarcal — o 'menino grande' mimado, vaidoso e insaciável que coleciona conquistas sem assumir compromissos emocionais duradouros —, deslocando o foco narrativo para a voz, a sexualidade, o erotismo, os silêncios e a sororidade curativa das mulheres que rompem a solidão e assumem o comando de suas próprias vidas.",
    contextoAutora: "Conceição Evaristo é escritora contemporânea consagrada e criadora do conceito de 'escrevivência'. Sua obra focaliza a memória, as experiências de mulheres negras, a ancestralidade e a resistência das periferias.",
    thematicSections: [
      {
        title: "Resumo Detalhado: A Teia de Fio Jasmim",
        content: "A narrativa apresenta Fio Jasmim, ferroviário negro cujas escolhas afetivas envolvem diversas mulheres e geram consequências que ultrapassam o romance passageiro. O livro questiona atitudes masculinas naturalizadas e os impactos do abandono sobre famílias e mulheres."
      },
      {
        title: "Masculinidade e Paternidade Problemática",
        content: "A obra problematiza um modelo patriarcal que valoriza a conquista sexual e a fuga de compromissos afetivos. Esse padrão de irresponsabilidade masculina é tolerado pela sociedade, enquanto as mulheres sofrem julgamentos severos. Ser pai exige cuidado, presença e responsabilidade que Fio recusa."
      },
      {
        title: "Mulheres e Protagonismo Próprio",
        content: "As mulheres da vida de Fio não são meros acessórios ou 'amantes': cada uma tem desejos, projetos, trabalho e sofrimentos próprios. A narrativa desloca o centro de gravidade para a experiência de quem sustenta as consequências do abandono."
      },
      {
        title: "O Significado do Título 'Menino Grande'",
        content: "Contrapõe o crescimento físico do homem adulto ao seu subdesenvolvimento emocional e afetivo. A canção de ninar evoca o aconchego maternal, questionando por que as mulheres precisam cuidar e perdoar eternamente os homens infantilizados."
      }
    ],
    characters: [
      {
        name: "Fio Jasmim",
        role: "Protagonista Masculino / Ferroviário",
        desc: "Casado com Pérola, mantém relações com várias mulheres. Sua trajetória permite discutir masculinidade patriarcal, feridas do racismo, busca por autoafirmação, afeto e abandono."
      },
      {
        name: "Pérola Maria",
        role: "Esposa de Fio",
        desc: "Mãe dos filhos legítimos de Fio. Sua relação evidencia o peso do casamento formal, os conflitos da fidelidade e o alto custo suportado pela mulher nas escolhas do companheiro."
      },
      {
        name: "Juventina Maria Perpétua (Tina)",
        role: "Amante Histórica e Centro de Vozes",
        desc: "Amante duradoura de Fio e personagem central na narrativa. Sua história e voz são fundamentais para organizar as vivências femininas e criticar os padrões afetivos machistas."
      },
      {
        name: "Neide Paranhos da Silva",
        role: "Maternidade Solo e Autônoma",
        desc: "Mulher que decide ter um filho de Fio e criá-lo sem depender do casamento ou da aprovação masculina, encarnando uma postura de soberania que rompe tradições."
      },
      {
        name: "Angelina Devaneia da Cruz",
        role: "Enfermeira Apaixonada",
        desc: "Vive uma relação com Fio marcada por dedicação e vulnerabilidade, sofrendo as dores agudas do esquecimento e do abandono afetivo."
      },
      {
        name: "Aurora Correa Liberto",
        role: "Mulher de Espírito Livre",
        desc: "Ligada à natureza exuberante e aos banhos no rio; sua vivência com Fio mostra como o laço com o maquinista altera e desafia sua própria autoestima."
      },
      {
        name: "Antonieta Véritas da Silva",
        role: "A Desilusão do Amor Romântico",
        desc: "Mulher que sonha com um amor sublime; sua trajetória com Fio expõe a armadilha da idealização amorosa feminina confrontada com a leviandade do homem."
      },
      {
        name: "Dolores dos Santos",
        role: "Mulher Independente",
        desc: "Trabalhadora de uma joalheria; traz para o romance a perspectiva do trabalho autônomo, dignidade econômica e gestão soberana dos afetos."
      },
      {
        name: "Dalva Amorato / Dalva Ruiva",
        role: "Sobrevivência e Escolhas Difíceis",
        desc: "Marcada por separações e dilemas de sobrevivência material; sua história revela as duras estratégias de vida das mulheres trabalhadoras."
      },
      {
        name: "Eleonora Distinta de Sá e Nina",
        role: "Afeto Fraterno e Homoafetividade",
        desc: "Eleonora é amiga fraterna de Fio; sua vida amorosa com a namorada Nina expande a pluralidade das vivências afetivas e sexuais femininas fora do padrão heteronormativo."
      },
      {
        name: "Narradora Coletiva",
        role: "A Voz da Escrevivência",
        desc: "Recolhe, tece e vocaliza as memórias dessas mulheres, deslocando o foco de Fio para a solidariedade e o protagonismo feminino."
      },
      {
        name: "Máximo Jasmim e Dona Celeste",
        role: "Pai e Ex-Professora de Fio",
        desc: "Máximo transmite a herança dos modelos de masculinidade tradicional; Dona Celeste representa uma referência de sua formação inicial."
      },
      {
        name: "Os Filhos (Jazmizinho e Setimazinha)",
        role: "A Paternidade Fragmentada",
        desc: "Filhos gerados com diferentes mulheres que materializam a fragmentação e a ausência do cuidado paterno de Fio."
      }
    ],
    symbols: [
      { name: "O Trem e os Trilhos", desc: "A mobilidade de Fio que conecta cidades, permitindo-lhe colecionar amores sem criar raízes." },
      { name: "A Canção de Ninar", desc: "O cuidado ancestral que acalenta a dor feminina e desnuda o eterno 'menino grande' patriarcal." }
    ],
    ideiasChave: [
      "Escrevivência e memória afro-brasileira",
      "Masculinidade tóxica e infantilizada",
      "Paternidade e responsabilidade pelo cuidado",
      "Pluralidade e autonomia das mulheres negras",
      "Solidão afetiva e redes de acolhimento",
      "Erotismo e soberania do corpo"
    ],
    fuvestTips: "Desconstrução do mito do sedutor negro pela voz das mulheres; o significado do título 'Canção para ninar menino grande'; a questão da paternidade ausente; a autonomia de Neide Paranhos; a complexidade da masculinidade de Fio (fruto também do racismo, mas sem justificar sua irresponsabilidade afetiva).",
    interpretacao: "A obra questiona com veemência a masculinidade que separa liberdade de responsabilidade afetiva. Mostra como comportamentos masculinos tolerados socialmente geram cicatrizes profundas nas mulheres e nos filhos.",
    quote: "'A nossa escrevivência não é para adormecer os da casa-grande, e sim para acordá-los de seus sonos injustos. É o canto de quem aprendeu a ninar a própria coragem.'"
  },
  {
    id: "a-visao-das-plantas",
    title: "A visão das plantas",
    author: "Djaimilia Pereira de Almeida",
    yearOfPub: 2019,
    period: "Literatura Luso-Angolana Contemporânea (2019)",
    genreFocus: "Narrativa curta; colonialismo e memória",
    badgeColor: "teal",
    summary: "Inspirada em uma breve anotação histórica sobre o infame capitão de navio negreiro Celestino, a escritora luso-angolana Djaimilia Pereira de Almeida narra a velhice sombria desse homem cruel que, após uma vida inteira cometendo atrocidades no tráfico transatlântico de escravizados, refugia-se em uma quinta decadente em Portugal. Ali, nos seus últimos anos, o antigo carrasco dedica-se de modo obsessivo e terno a cuidar de um jardim botânico exuberante. O romance investiga com maestria a ambiguidade da culpa, a desumanização colonial e o silêncio indiferente da natureza, que acolhe tanto monstros quanto santos sem fazer julgamentos morais.",
    contextoAutora: "Djaimilia Pereira de Almeida nasceu em Angola e cresceu em Portugal. A obra aborda um homem ligado ao passado colonial e ao tráfico de escravizados, entrelaçando memória histórica, velhice e o reino vegetal.",
    thematicSections: [
      {
        title: "Resumo Detalhado: O Carrasco no Jardim",
        content: "A narrativa acompanha Celestino, homem idoso cujo passado esteve visceralmente atado à violência colonial e ao tráfico de pessoas escravizadas. Na velhice, vive recolhido em sua quinta portuguesa cuidando de um jardim de rara beleza. O passado violento não é lembrança neutra: integra a identidade do personagem e a história que o livro confronta."
      },
      {
        title: "O Passado de Violência Colonial",
        content: "Celestino foi agente direto de estruturas de exploração inominável no oceano. Seu passado é culpa individual, mas insere-se num sistema colonial que destruiu povos, nações e gerações inteiras para enriquecer as metrópoles europeias."
      },
      {
        title: "Velhice, Tempo e a Morte Próxima",
        content: "O envelhecimento, a perda de forças e a proximidade da morte obrigam Celestino a olhar sua trajetória. O tempo coloca a pergunta incômoda: o que permanece das ações humanas quando a vida se esvai?"
      },
      {
        title: "O Jardim e os Limites da Mudança",
        content: "Cuidar de plantas exige paciência, zelo e respeito a ciclos biológicos — um contraste desconcertante com o domínio brutal dos navios negreiros. O contato com a terra pode sugerir transformação interior, mas não redime nem absolve o carrasco. O cuidado com flores apaga a violência? Danos históricos podem ser desfeitos por boas ações tardias?"
      }
    ],
    characters: [
      {
        name: "Celestino",
        role: "Protagonista / Ex-Capitão Negreiro",
        desc: "Homem idoso com passado de extrema violência colonial no tráfico transatlântico de escravizados. Na velhice, dedica-se obsessivamente ao jardim; encarna a tensão entre crueldade pretérita e zelo presente sem jamais obter redenção fácil."
      },
      {
        name: "Padre Alfredo",
        role: "A Igreja e a Cobrança de Confissão",
        desc: "Figura religiosa da freguesia que visita o velho capitão buscando arrancar confissão e penitência formal, tentando enquadrar a culpa histórica em categorias morais convencionais."
      },
      {
        name: "Manuel",
        role: "O Jovem Acompanhante",
        desc: "Jovem que convive com Celestino, auxilia na quinta e o leva a passeios, sendo sua principal ponte humana com o mundo exterior e com o presente."
      },
      {
        name: "Bentes",
        role: "Conhecido do Padre",
        desc: "Personagem secundário da aldeia que compõe o circuito de conversas e julgamentos sociais sobre a velhice e a fortuna do capitão."
      },
      {
        name: "Luzia, Pedro e Raul",
        role: "Crianças da Vizinhança",
        desc: "Meninos que se aproximam da quinta e escutam narrativas do velho. A inocência infantil contrasta frontalmente com as memórias de barbárie colonial do anfitrião."
      },
      {
        name: "As Vítimas do Passado / Figuras do Navio",
        role: "Presenças Silenciosas da Memória",
        desc: "As milhares de vidas negras sacrificadas nos porões. Mesmo sem nomes individuais, são essenciais para a leitura ética: seu sangue não pode ser apagado pelo perfume do jardim."
      }
    ],
    symbols: [
      { name: "O Jardim", desc: "Símbolo de cuidado, fragilidade, vida e morte; paciência que contrasta com o domínio violento do passado colonial." },
      { name: "As Plantas", desc: "A existência pura além do julgamento moral humano: bebem a água oferecida pelo monstro com a mesma serenidade." },
      { name: "O Tempo e a Velhice", desc: "A irreversibilidade das ações humanas e a impotência da reparação tardia." }
    ],
    ideiasChave: [
      "Colonialismo e escravidão",
      "Responsabilidade histórica e culpa",
      "Memória individual versus memória coletiva",
      "Velhice, finitude e morte",
      "A impassibilidade moral da natureza",
      "Limites éticos da redenção e do perdão"
    ],
    fuvestTips: "O passado de violência colonial de Celestino versus seu presente de jardinagem; o contraste brutal entre a brutalidade nos navios e a delicadeza com as plantas; o jardim não como redenção, mas como tensão ética; a natureza que não julga nem absolve; a responsabilidade histórica de Portugal na escravidão.",
    interpretacao: "O jardim representa uma possibilidade humana de cuidado e transformação, mas não apaga a violência hedionda do passado. A obra tensiona mudança pessoal, memória histórica e danos que jamais podem ser simplesmente desfeitos.",
    quote: "'As plantas não sabem que ele foi um carrasco. Elas abrem suas pétalas para a mesma luz que iluminava os grilhões nos porões. A terra recebe com a mesma doçura o sangue dos inocentes e o adubo dos tiranos.'"
  }
];

// ==========================================
// EIXOS TRANSVERSAIS & COMPARAÇÕES ENTRE AS OBRAS (SEÇÃO 10)
// ==========================================

const booksComparisons = {
  crossCuttingAxes: [
    {
      title: "Educação e Emancipação",
      books: ["Opúsculo Humanitário", "Memórias de Martha"],
      description: "Ambas investigam a instrução como via indispensável para a dignidade da mulher, contrapondo o ensaio argumentativo à narrativa de formação realista."
    },
    {
      title: "Liberdade e Crítica Social",
      books: ["Nebulosas", "Caminho de pedras"],
      description: "Articulam a indignação cívica perante injustiças sociais (escravidão e exploração operária) e a busca feminina por autonomia nas esferas pública e privada."
    },
    {
      title: "Existência, Natureza e Identidade",
      books: ["A paixão segundo G. H.", "Geografia"],
      description: "Investigam a relação do ser com o espaço e a matéria cósmica: a vertigem ontológica da barata em Clarice e a poética límpida da paisagem moral em Sophia."
    },
    {
      title: "Patriarcado, Memória e Colonialismo",
      books: ["Balada de amor ao vento", "Canção para ninar menino grande", "A visão das plantas"],
      description: "Três narrativas que desmontam as estruturas de dominação (poligamia tribal, masculinidade negra infantilizada e a violência do tráfico negreiro imperial)."
    }
  ],

  comparativeEssays: [
    {
      title: "1. Educação e Emancipação Feminina",
      pair: "Opúsculo Humanitário × Memórias de Martha",
      icon: "fa-graduation-cap",
      analysis: "Nísia Floresta discute a educação das mulheres de maneira argumentativa e ensaística, desconstruindo preconceitos patriarcais do Segundo Reinado. Júlia Lopes de Almeida, por sua vez, demonstra as mesmas questões de formação e desigualdade material na trajetória viva de Martha, uma menina pobre no cortiço carioca. Enquanto uma obra defende ideias no plano teórico e pedagógico, a outra permite observar como essas barreiras e preconceitos se manifestam na experiência cotidiana da mulher."
    },
    {
      title: "2. Patriarcado e Relações de Gênero",
      pair: "Caminho de pedras × Balada de amor ao vento × Canção para ninar menino grande",
      icon: "fa-venus-mars",
      analysis: "As três obras analisam como as estruturas sociais e culturais interferem violentamente na vida afetiva e na liberdade individual das mulheres. Rachel de Queiroz articula militância política, casamento burguês e os custos da ruptura feminina em Fortaleza; Paulina Chiziane aborda tradição tribal, mercantilização do lobolo e poligamia em Moçambique; e Conceição Evaristo problematiza a masculinidade tolerada, o mito da sedução sem compromisso, a paternidade ausente e o poder das redes de acolhimento feminino."
    },
    {
      title: "3. Natureza e Existência",
      pair: "Geografia × A paixão segundo G. H. × A visão das plantas",
      icon: "fa-leaf",
      analysis: "Sophia de Mello Breyner valoriza a natureza, a contemplação dos elementos puros (mar, luz, cal) e a harmonia ética; Clarice Lispector trabalha a matéria viva bruta da barata desencadeando uma vertiginosa crise existencial e ontológica; Djaimilia Pereira de Almeida relaciona natureza, memória colonial e a ambiguidade moral do cuidado no jardim. A natureza pode ser fonte de contemplação lúcida, catalisador de colapso do ego ou testemunha muda que não julga os pecados dos homens."
    },
    {
      title: "4. Memória e Identidade",
      pair: "Memórias de Martha × A paixão segundo G. H. × A visão das plantas",
      icon: "fa-clock-rotate-left",
      analysis: "Martha revisita sua formação e os preconceitos do cortiço por meio da escrita memorialista; G. H. vivencia o desmoronamento de sua identidade civilizada ao adentrar o território do Outro; e Celestino confronta seu passado hediondo de negreiro a partir da fragilidade da velhice. As três obras revelam como o passado e as marcas históricas participam ativamente da construção ou desconstrução do sujeito contemporâneo."
    },
    {
      title: "5. Literatura e Crítica Social",
      pair: "Nebulosas × Opúsculo Humanitário × Caminho de pedras",
      icon: "fa-bullhorn",
      analysis: "As três autoras ultrapassam o plano estritamente individual ou decorativo da arte: a poesia de Narcisa Amália denuncia a escravidão e o silenciamento feminino; o ensaio de Nísia Floresta combate o modelo pedagógico patriarcal; e o romance de Rachel de Queiroz retrata a luta de classes, as prisões políticas e a opressão moral cotidiana."
    }
  ],

  comparativeTable: [
    { book: "Opúsculo Humanitário", author: "Nísia Floresta", year: 1853, genre: "Ensaio", centralTheme: "Educação feminina", focus: "Emancipação e progresso cívico" },
    { book: "Nebulosas", author: "Narcisa Amália", year: 1872, genre: "Poesia", centralTheme: "Sentimentos e questões sociais", focus: "Lirismo e crítica abolicionista" },
    { book: "Memórias de Martha", author: "Júlia Lopes de Almeida", year: 1899, genre: "Romance", centralTheme: "Desigualdade e formação", focus: "Pobreza, mérito e educação" },
    { book: "Caminho de pedras", author: "Rachel de Queiroz", year: 1937, genre: "Romance", centralTheme: "Política e liberdade", focus: "Conflitos individuais e coletivos" },
    { book: "A paixão segundo G. H.", author: "Clarice Lispector", year: 1964, genre: "Romance", centralTheme: "Existência e identidade", focus: "Transformação ontológica interior" },
    { book: "Geografia", author: "Sophia de Mello Breyner", year: 1967, genre: "Poesia", centralTheme: "Natureza e humanidade", focus: "Espaço, beleza, memória e ética" },
    { book: "Balada de amor ao vento", author: "Paulina Chiziane", year: 1990, genre: "Romance", centralTheme: "Amor e patriarcado", focus: "Autonomia feminina e tradição" },
    { book: "Canção para ninar menino grande", author: "Conceição Evaristo", year: 2018, genre: "Narrativa", centralTheme: "Masculinidade e afetos", focus: "Responsabilidade emocional e vozes negras" },
    { book: "A visão das plantas", author: "Djaimilia Pereira de Almeida", year: 2019, genre: "Narrativa curta", centralTheme: "Colonialismo e memória", focus: "Violência histórica e cuidado no jardim" }
  ]
};

// ==========================================
// LINHA DO TEMPO DE PUBLICAÇÃO (SEÇÃO 11)
// ==========================================

const booksTimeline = [
  { year: 1853, book: "Opúsculo Humanitário", author: "Nísia Floresta", note: "Educação feminina no Brasil imperial do século XIX." },
  { year: 1872, book: "Nebulosas", author: "Narcisa Amália", note: "Romantismo tardio, lírica amorosa e combate abolicionista condoreiro." },
  { year: 1899, book: "Memórias de Martha", author: "Júlia Lopes de Almeida", note: "Realismo social da Belle Époque e formação da mulher pobre no cortiço." },
  { year: 1937, book: "Caminho de pedras", author: "Rachel de Queiroz", note: "Modernismo de 30, agitação operária e repressão política às vésperas do Estado Novo." },
  { year: 1964, book: "A paixão segundo G. H.", author: "Clarice Lispector", note: "Modernismo de 45, introspecção radical, crise existencial e despersonalização." },
  { year: 1967, book: "Geografia", author: "Sophia de Mello Breyner", note: "Poesia portuguesa moderna, resistência ética ao salazarismo e poética do mar." },
  { year: 1990, book: "Balada de amor ao vento", author: "Paulina Chiziane", note: "Literatura africana em língua portuguesa (Moçambique), poligamia e descolonização." },
  { year: 2018, book: "Canção para ninar menino grande", author: "Conceição Evaristo", note: "Literatura afro-brasileira contemporânea, masculinidades e escrevivência." },
  { year: 2019, book: "A visão das plantas", author: "Djaimilia Pereira de Almeida", note: "Literatura pós-colonial luso-angolana, memória do tráfico negreiro e reflexão sobre a culpa." }
];

// ==========================================
// CHECKLIST DE REVISÃO LITERÁRIA (SEÇÃO 12)
// ==========================================

const booksChecklistData = [
  { id: "chk-lit-1", book: "Opúsculo Humanitário", text: "Consigo explicar a defesa da educação feminina e os argumentos de Nísia Floresta contra o patriarcado imperial." },
  { id: "chk-lit-2", book: "Nebulosas", text: "Interpreto o eu lírico feminino, as imagens poéticas da natureza e as denúncias cívicas e abolicionistas de Narcisa Amália." },
  { id: "chk-lit-3", book: "Memórias de Martha", text: "Conheço a trajetória de Martha no cortiço, a influência de sua mãe e a relação entre pobreza estrutural e educação." },
  { id: "chk-lit-4", book: "Caminho de pedras", text: "Compreendo os conflitos entre militância política, vida privada e a busca de autonomia feminina de Noemi em Fortaleza." },
  { id: "chk-lit-5", book: "A paixão segundo G. H.", text: "Sei explicar o episódio da barata, o papel revelador de Janair, o quarto ascético e a crise ontológica de G. H." },
  { id: "chk-lit-6", book: "Geografia", text: "Interpreto os poemas de Sophia, os símbolos da natureza e do mar, e a dimensão ética contra o salazarismo." },
  { id: "chk-lit-7", book: "Balada de amor ao vento", text: "Compreendo a saga de Sarnau, a vacilação de Mwando, a prática do lobolo, a poligamia e a opressão colonial em Moçambique." },
  { id: "chk-lit-8", book: "Canção para ninar menino grande", text: "Compreendo Fio Jasmim, a crítica à masculinidade infantilizada, a paternidade ausente e o protagonismo das mulheres." },
  { id: "chk-lit-9", book: "A visão das plantas", text: "Compreendo Celestino, a violência histórica do tráfico negreiro e o significado ambíguo do jardim na velhice." },
  { id: "chk-lit-10", book: "Comparações entre Obras", text: "Consigo comparar pelo menos duas obras da lista articulando seus temas sem confundir os contextos históricos." },
  { id: "chk-lit-11", book: "Análise de Trecho", text: "Consigo analisar um trecho literário dado na prova e fundamentar a interpretação com elementos textuais rigorosos." }
];

// ==========================================
// MÉTODO DISCURSIVO PARA A 2ª FASE FUVEST (SEÇÃO 13)
// ==========================================

const booksDiscursiveMethod = {
  ruleTitle: "Estrutura Simples, Clara e Fundamentada para Questões Discursivas",
  steps: [
    { step: 1, label: "1. Responda diretamente ao comando", desc: "Abra sua resposta de forma clara e assertiva, respondendo sem rodeios exatamente o que foi perguntado pela banca." },
    { step: 2, label: "2. Explique a ideia central", desc: "Apresente o conceito literário, histórico ou ético que sustenta a sua interpretação crítica." },
    { step: 3, label: "3. Relacione a um elemento específico", desc: "Conecte a explicação a um acontecimento, personagem, símbolo, metáfora ou trecho citado na prova." },
    { step: 4, label: "4. Conclua com o significado na obra", desc: "Finalize indicando o impacto desse elemento dentro do projeto literário e da crítica social da autora." }
  ],
  sampleQuestion: "Exemplo Prático de Resposta Nota Máxima (Segunda Fase):",
  samplePrompt: "Analise como a trajetória da protagonista Noemi em 'Caminho de pedras' expõe as contradições entre os discursos políticos libertários e a realidade das relações de gênero.",
  sampleAnswer: "A obra evidencia a desigualdade de gênero por meio da maneira como Noemi enfrenta as expectativas sociais provincianas de Fortaleza ao romper o casamento para militar no partido. Essa situação demonstra que, embora os companheiros defendessem a revolução e a libertação dos trabalhadores na esfera pública, sua liberdade feminina continuou condicionada por preconceitos tradicionais que julgavam sua moral privada e dificultavam seu vínculo com o filho Guri. Assim, o conflito individual de Noemi ultrapassa a esfera sentimental e consolida uma crítica contundente à incapacidade dos movimentos de transformar as estruturas de poder cotidianas."
};
