/**
 * Banco de Questões de CIÊNCIAS HUMANAS (História, Geografia, Filosofia e Sociologia)
 * Total: 105 questões completas cobrindo todo o edital ENEM, FUVEST, UNICAMP e UNESP.
 * Equipado com gráficos temáticos, pirâmides etárias, climogramas e charges/ilustrações conceituais.
 */
const questionsHumanas = [
  // ==========================================
  // BLOCO 1: HISTÓRIA (35 QUESTÕES)
  // ==========================================
  {
    id: "hum_his_q1",
    vestibular: "ENEM",
    year: 2024,
    subject: "História",
    topic: "Brasil Colônia (Economia Açucareira e Escravidão)",
    difficulty: "Fácil",
    enunciation: "Durante os séculos XVI e XVII no Brasil Colônia, o modelo produtivo do açúcar no Nordeste baseou-se no tripé da grande propriedade monocultora voltada para o mercado externo e apoiada na mão de obra de pessoas escravizadas africanas (o sistema de plantation). Esse arranjo socioeconômico caracterizou-se por:",
    options: [
      "Uma sociedade aberta com grande mobilidade social e predomínio do trabalho assalariado.",
      "Uma estrutura patriarcal, aristocrática e altamente polarizada entre senhores de engenho e escravizados.",
      "A ocupação equilibrada do interior por meio da industrialização têxtil precoce.",
      "A distribuição equitativa das terras através de minifúndios de policultura familiar.",
      "A submissão voluntária das comunidades indígenas sem conflitos armados."
    ],
    correct: 1,
    explanation: "A sociedade açucareira colonial era profundamente patriarcal (centrada na autoridade absoluta do senhor de engenho na Casa-Grande) e hierarquizada, com baixíssima mobilidade social e dependência estrutural do trabalho compulsório violento dos escravizados africanos na Senzala e nos canaviais. Alternativa B."
  },
  {
    id: "hum_his_q2",
    vestibular: "FUVEST",
    year: 2024,
    subject: "História",
    topic: "Idade Média (Feudalismo e Sociedade Estamental)",
    difficulty: "Médio",
    enunciation: "Na Europa ocidental medieval (séculos IX a XI), a ordem social era concebida teologicamente como uma divisão harmônica e imutável de três ordens ou estamentos: 'os que rezam' (oratores, o clero), 'os que guerreiam' (bellatores, a nobreza feudal) e 'os que trabalham' (laboratores, os camponeses e servos da gleba). Essa visão de mundo tinha como função primordial:",
    options: [
      "Promover a igualdade jurídica e a ascensão dos servos ao sacerdócio.",
      "Legitimar a dominação da nobreza e do clero como uma expressão da própria vontade divina, justificando a servidão camponesa e a cobrança de tributos feudais.",
      "Estimular o comércio marítimo com as cidades italianas.",
      "Incentivar rebeliões populares contra os senhores feudais.",
      "Estabelecer a democracia representativa nas aldeias comunais."
    ],
    correct: 1,
    explanation: "A teoria das três ordens, formulada por bispos e teólogos da Igreja Católica medieval (como Adalberão de Laon), servia como poderoso instrumento ideológico para naturalizar e santificar as brutais desigualdades materiais da sociedade feudal, ensinando que cada indivíduo deveria aceitar passivamente sua posição estamental como cumprimento dos desígnios de Deus. Alternativa B."
  },
  {
    id: "hum_his_q3",
    vestibular: "ENEM",
    year: 2024,
    subject: "História",
    topic: "Brasil Império (Segundo Reinado e Guerra do Paraguai)",
    difficulty: "Médio",
    enunciation: "A Guerra da Tríplice Aliança contra o Paraguai (1864–1870) foi o mais sangrento conflito armado da história da América do Sul. Para o Império do Brasil, uma das consequências sociais e políticas mais profundas do desfecho dessa guerra foi:",
    options: [
      "O fortalecimento inabalável da monarquia e o adiamento indefinido da abolição da escravidão.",
      "A ascensão do Exército brasileiro como uma corporação profissional politizada com ideais positivistas, que passou a questionar a monarquia e a escravidão.",
      "A imediata emancipação de todos os indígenas das províncias do Sul.",
      "A anexação definitiva de todo o território paraguaio ao território brasileiro.",
      "A ruptura diplomática do Brasil com a Inglaterra e com a Argentina."
    ],
    correct: 1,
    explanation: "A Guerra do Paraguai transformou o Exército de uma força dispersa e subordinada à Guarda Nacional aristocrática em uma corporação unida, profissional e consciente de seu protagonismo. Muitos oficiais voltaram do fronte adeptos do positivismo de Comte e abolicionistas convictos (após lutarem lado a lado com os soldados negros 'Voluntários da Pátria'), tornando-se os principais articuladores da queda do Império em 1889. Alternativa B."
  },
  {
    id: "hum_his_q4",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "História",
    topic: "História Geral (Revolução Francesa de 1789)",
    difficulty: "Fácil",
    enunciation: "Aprovada em agosto de 1789 pela Assembleia Nacional Constituinte na França revolucionária, a 'Declaração dos Direitos do Homem e do Cidadão' tornou-se um marco universal da modernidade política ao consagrar princípios iluministas como:",
    options: [
      "A restauração do absolutismo monárquico de direito divino.",
      "A liberdade individual, a igualdade de todos perante a lei e o direito inalienável à propriedade e à resistência contra a opressão.",
      "A proibição definitiva da propriedade privada em prol do comunismo agrário.",
      "A submissão do Estado à autoridade do Papa e da Inquisição.",
      "O voto censitário exclusivo para a nobreza de sangue."
    ],
    correct: 1,
    explanation: "Sintetizando os ideais burgueses e iluministas (Locke, Rousseau e Voltaire), o documento estabeleceu que os seres humanos nascem e permanecem livres e iguais em direitos, destruindo os privilégios jurídicos estamentais do Antigo Regime e afirmando que a soberania emana da nação, e não do monarca. Alternativa B."
  },
  {
    id: "hum_his_q5",
    vestibular: "ENEM",
    year: 2023,
    subject: "História",
    topic: "Brasil República (A República Oligárquica e o Coronelismo)",
    difficulty: "Fácil",
    enunciation: "Durante a chamada Primeira República no Brasil (1889–1930), a sustentação política do poder das oligarquias agrárias baseava-se no coronelismo no âmbito local e na 'Política dos Governadores' no âmbito federal. No cotidiano eleitoral dos municípios do interior, o mecanismo de controle e coação de eleitores exercido pelos coronéis era conhecido como:",
    options: [
      "Voto universal secreto.",
      "Voto de cabresto.",
      "Plebiscito popular direto.",
      "Voto censitário por renda de ouro.",
      "Recall parlamentar."
    ],
    correct: 1,
    explanation: "O 'voto de cabresto' era a prática fraudulenta e coercitiva por meio da qual os grandes latifundiários locais ('coronéis') forçavam agregados, meeiros e dependentes a votar nos candidatos da sua chapa, aproveitando-se de que o voto era aberto e público (segundo a Constituição de 1891), sob ameaças de violência física ou promessas de favores clientelistas. Alternativa B."
  },
  {
    id: "hum_his_q6",
    vestibular: "FUVEST",
    year: 2024,
    subject: "História",
    topic: "Idade Antiga (Democracia Ateniense)",
    difficulty: "Médio",
    enunciation: "No apogeu da pólis de Atenas no século V a.C. (o Século de Péricles), a democracia ateniense apresentava características singulares que a diferenciavam substancialmente das democracias representativas contemporâneas. Uma dessas características essenciais era o fato de ser uma:",
    options: [
      "Democracia representativa indireta, com eleições periódicas de deputados profissionais.",
      "Democracia direta, na qual os cidadãos deliberavam pessoalmente na Ágora (Eclésia), mas restrita e excludente, pois mulheres, escravizados e estrangeiros (metecos) não eram considerados cidadãos.",
      "Democracia universal que concedia cidadania plena a todos os habitantes da Ática, incluindo os escravizados.",
      "Monarquia parlamentarista inspirada no modelo espartano.",
      "Teocracia controlada pelo oráculo de Delfos."
    ],
    correct: 1,
    explanation: "A democracia ateniense era DIRETA (os próprios cidadãos reuniam-se na Eclésia para votar leis, guerras e tratados sem intermediários parlamentares). Todavia, era PROFUNDAMENTE EXCLUDENTE: apenas homens adultos livres, filhos de pai e mãe atenienses, tinham direitos políticos, deixando à margem a esmagadora maioria da população (cerca de 85% a 90%, formada por escravizados, mulheres e metecos). Alternativa B."
  },
  {
    id: "hum_his_q7",
    vestibular: "ENEM",
    year: 2024,
    subject: "História",
    topic: "Brasil República (A Era Vargas e o Estado Novo)",
    difficulty: "Médio",
    enunciation: "Instaurado por Getúlio Vargas em novembro de 1937 após a farsa do fictício 'Plano Cohen', o Estado Novo (1937–1945) constituiu uma ditadura autoritária e centralizadora. No plano social e trabalhista, esse período notabilizou-se pela:",
    options: [
      "Total liberdade de greve e autonomia absoluta dos sindicatos operários.",
      "Criação da Consolidação das Leis do Trabalho (CLT) aliada ao controle corporativista dos sindicatos pelo Ministério do Trabalho e à intensa propaganda estatal (DIP).",
      "Privatização de estatais e abertura irrestrita da economia às multinacionais.",
      "Abolição do salário mínimo e do descanso semanal remunerado.",
      "Extinção da Justiça do Trabalho."
    ],
    correct: 1,
    explanation: "O getulismo implementou o 'trabalhismo' corporativista: por um lado, atendeu a reivindicações históricas dos operários com a outorga da CLT (1943), salário mínimo, férias e jornada de 8h; por outro lado, atrelou os sindicatos ao controle do Estado (proibindo greves e exigindo a 'carta sindical') e construiu a imagem mítica de Vargas como 'Pai dos Pobres' por meio da censura e da propaganda do DIP. Alternativa B."
  },
  {
    id: "hum_his_q8",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "História",
    topic: "História Geral (Revolução Industrial)",
    difficulty: "Fácil",
    enunciation: "A Primeira Revolução Industrial, iniciada na Inglaterra na segunda metade do século XVIII, alterou profundamente as relações sociais de produção ao consolidar o capitalismo industrial. No cotidiano da nova classe operária (o proletariado), essa transformação implicou:",
    options: [
      "A posse direta das máquinas fabris e a divisão igualitária dos lucros industriais.",
      "A alienação do trabalhador em relação ao produto final, a rígida disciplina do relógio fabril e jornadas exaustivas em ambientes insalubres.",
      "A redução imediata da jornada de trabalho para 6 horas diárias.",
      "A erradicação do trabalho infantil e feminino nas fábricas de carvão e tecido.",
      "A extinção definitiva das cidades e o retorno em massa ao meio rural."
    ],
    correct: 1,
    explanation: "Com a maquinofatura a vapor e a concentração dos operários nos galpões fabris, o trabalhador foi separado dos meios de produção (ferramentas e matéria-prima), passando a vender apenas sua força de trabalho por salários de subsistência, submetido a jornadas de 14 a 16 horas sob estrita disciplina e vigilância patronal. Alternativa B."
  },
  {
    id: "hum_his_q9",
    vestibular: "ENEM",
    year: 2023,
    subject: "História",
    topic: "História Geral (Imperialismo e Neocolonialismo do Século XIX)",
    difficulty: "Médio",
    enunciation: "Na segunda metade do século XIX, as potências industriais europeias promoveram a 'Partilha da África' (consagrada na Conferência de Berlim, 1884–1885). Para justificar perante a opinião pública ocidental a violência militar da ocupação colonial e a exploração de matérias-primas africanas, os colonizadores utilizaram a ideologia do:",
    options: [
      "Pan-africanismo e respeito à soberania étnica ancestral.",
      "Darwinismo social e da 'missão civilizadora' do homem branco eurocêntrico.",
      "Comunismo internacionalista de defesa dos camponeses.",
      "Pacifismo cristão contrário a qualquer imposição de costumes.",
      "Ambientalismo preservacionista da fauna selvagem."
    ],
    correct: 1,
    explanation: "O Neocolonialismo apoiou-se no Darwinismo Social (apropriação distorcida e pseudocientífica da biologia evolutiva) e no conceito racista do 'fardo do homem branco', sustentando a suposta superioridade biológica e moral da civilização europeia, encarregada do 'dever' de levar o progresso e o cristianismo aos povos africanos e asiáticos considerados 'inferiores'. Alternativa B."
  },
  {
    id: "hum_his_q10",
    vestibular: "FUVEST",
    year: 2024,
    subject: "História",
    topic: "Brasil Ditadura Militar (O AI-5 e os Anos de Chumbo)",
    difficulty: "Médio",
    enunciation: "Editado em 13 de dezembro de 1968 durante o governo do general Costa e Silva, o Ato Institucional nº 5 (AI-5) inaugurou a fase mais repressiva da Ditadura Militar brasileira ('os anos de chumbo'). Entre as medidas draconianas previstas pelo AI-5, constavam expressamente:",
    options: [
      "A legalização de todos os partidos políticos e a convocação imediata de eleições diretas.",
      "O fechamento do Congresso Nacional, a cassação de mandatos políticos, a censura prévia aos meios de comunicação e a suspensão do habeas corpus para crimes contra a segurança nacional.",
      "A anistia geral ampla e irrestrita a todos os presos políticos.",
      "A criação de um tribunal civil independente para julgar militares acusados de tortura.",
      "A extinção do Serviço Nacional de Informações (SNI)."
    ],
    correct: 1,
    explanation: "O AI-5 deu poderes quase imperiais ao presidente da República: fechou o Congresso, retirou a garantia constitucional de habeas corpus (facilitando a tortura sistemática nos porões do DOI-CODI), impôs censura prévia ferrenha à imprensa, música e teatro, e cassou centenas de parlamentares e ministros do STF. Alternativa B."
  },
  {
    id: "hum_his_q11",
    vestibular: "ENEM",
    year: 2024,
    subject: "História",
    topic: "História Geral (A Guerra Fria e a Bipolaridade)",
    difficulty: "Fácil",
    enunciation: "Após a Segunda Guerra Mundial, o cenário geopolítico global foi marcado pela Guerra Fria (1947–1991), caracterizada pelo antagonismo ideológico, econômico e militar entre duas superpotências nucleares: os Estados Unidos (defensores do capitalismo e da democracia liberal) e a União Soviética (defensora do socialismo e da economia planificada). Um dos momentos mais críticos desse confronto, no qual o mundo esteve à beira de uma guerra nuclear direta, foi a:",
    options: [
      "Queda do Muro de Berlim em 1989.",
      "Crise dos Mísseis em Cuba em 1962.",
      "Assinatura do Pacto de Varsóvia em 1955.",
      "Conferência de Bandung em 1955.",
      "Construção do Canal do Panamá em 1914."
    ],
    correct: 1,
    explanation: "A Crise dos Mísseis de outubro de 1962 ocorreu quando aviões espiões norte-americanos fotografaram bases de mísseis nucleares soviéticos em construção em Cuba (a apenas 150 km da costa da Flórida). O presidente Kennedy impôs um bloqueio naval à ilha caribenha e as duas superpotências chegaram à beira de um conflito nuclear direto antes de Khrushchev recuar e negociar a retirada. Alternativa B."
  },
  {
    id: "hum_his_q12",
    vestibular: "UNESP",
    year: 2024,
    subject: "História",
    topic: "Brasil Império (O Período Regencial e as Revoltas)",
    difficulty: "Médio",
    enunciation: "O Período Regencial brasileiro (1831–1840), que vigorou entre a abdicação de D. Pedro I e o Golpe da Maioridade de D. Pedro II, foi caracterizado por intensa instabilidade política e pela eclosão de revoltas provinciais armadas em diversas regiões do país, tais como a:",
    options: [
      "Guerra de Canudos na Bahia e a Revolta da Chibata no Rio de Janeiro.",
      "Farroupilha no Rio Grande do Sul, a Cabanagem no Grão-Pará, a Balaiada no Maranhão e a Revolta dos Malês na Bahia.",
      "Revolta da Armada e a Guerra do Contestado em Santa Catarina.",
      "Coluna Prestes e o Movimento Tenentista dos 18 do Forte.",
      "Inconfidência Mineira e a Conjuração Baiana."
    ],
    correct: 1,
    explanation: "As principais revoltas regenciais eclodiram pelo descontentamento com a centralização política do Rio de Janeiro, impostos abusivos, miséria popular ou luta pela autonomia provincial: a Farroupilha (RS, republicana e estancieira), a Cabanagem (Pará, popular e indígena), a Balaiada (Maranhão, vaqueiros e artesãos) e a Revolta dos Malês (Salvador, escravizados muçulmanos letrados). Alternativa B."
  },
  {
    id: "hum_his_q13",
    vestibular: "FUVEST",
    year: 2024,
    subject: "História",
    topic: "Idade Moderna (Reforma Protestante e Contrarreforma)",
    difficulty: "Médio",
    enunciation: "Iniciada em 1517 com a publicação das 95 Teses de Martinho Lutero na porta da igreja de Wittenberg, a Reforma Protestante abalou a hegemonia espiritual e política da Igreja Católica na Europa Ocidental. Em resposta ao avanço protestante, a Igreja Romana convocou o Concílio de Trento (1545–1563), cuja Contrarreforma deliberou:",
    options: [
      "A extinção do Tribunal do Santo Ofício da Inquisição e a tradução livre da Bíblia para todas as línguas vernáculas.",
      "A reafirmação dos dogmas católicos tradicionais (como os sete sacramentos e a autoridade papal), a criação do Índex de livros proibidos e o fortalecimento da Companhia de Jesus (jesuítas).",
      "A adesão imediata à doutrina calvinista da predestinação absoluta.",
      "O reconhecimento de Henrique VIII como chefe supremo espiritual da cristandade.",
      "A queima de todas as relíquias sagradas e a abolição do celibato sacerdotal."
    ],
    correct: 1,
    explanation: "O Concílio de Trento reafirmou integralmente os dogmas e a hierarquia católica atacados pelos reformadores, combateu a venda venal de indulgências, instituiu o Índex Librorum Prohibitorum, reativou a Inquisição e deu enorme impulso à Companhia de Jesus para conter a heresia na Europa e catequizar os povos do Novo Mundo e da Ásia. Alternativa B."
  },
  {
    id: "hum_his_q14",
    vestibular: "ENEM",
    year: 2024,
    subject: "História",
    topic: "Brasil Redemocratização (A Constituição Cidadã de 1988)",
    difficulty: "Fácil",
    enunciation: "Promulgada pela Assembleia Nacional Constituinte presidida por Ulysses Guimarães após o término da Ditadura Militar, a Constituição da República Federativa do Brasil de 1988 ficou conhecida como a 'Constituição Cidadã'. Esse título consagrou-se historicamente porque a nova Carta Magna:",
    options: [
      "Restabeleceu a pena de morte e a censura governamental aos jornais.",
      "Ampliou de maneira inédita os direitos fundamentais individuais e coletivos, assegurou a saúde como direito de todos e dever do Estado (criando o SUS), criminalizou o racismo e reconheceu os direitos originários dos povos indígenas sobre suas terras ancestrais.",
      "Reduziu a maioridade penal para 12 anos e aboliu a previdência social pública.",
      "Instituiu o parlamentarismo com mandato vitalício para chefes de Estado.",
      "Proibiu a fundação de novos partidos políticos e de sindicatos."
    ],
    correct: 1,
    explanation: "A Constituição de 1988 marcou a reconstrução do Estado Democrático de Direito no Brasil, incorporando amplas garantias de direitos civis, políticos, trabalhistas e sociais, a inviolabilidade da pessoa humana, a igualdade de gênero perante a lei e a proteção jurídica sem precedentes às minorias étnicas e aos direitos socioambientais. Alternativa B."
  },
  {
    id: "hum_his_q15",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "História",
    topic: "História Geral (Totalitarismo: Fascismo e Nazismo)",
    difficulty: "Médio",
    enunciation: "No período entreguerras (décadas de 1920 e 1930), a crise profunda do capitalismo liberal (agravada pelo Crack da Bolsa de Nova York em 1929) propiciou a ascensão de regimes totalitários de extrema-direita na Europa, notadamente o Fascismo de Mussolini na Itália e o Nazismo de Hitler na Alemanha. Esses regimes compartilhavam características fundamentais como:",
    options: [
      "A defesa do livre debate democrático e o fortalecimento da autonomia operária socialista.",
      "O nacionalismo exacerbado, o unipartidarismo em torno de um líder infalível (Führer/Duce), o militarismo agressivo, o corporativismo anticomunista e a perseguição violenta a opositores e minorias.",
      "A neutralidade pacifista internacional e o desarmamento bélico.",
      "A submissão integral das políticas de Estado às ordens da Liga das Nações.",
      "A separação estrita entre propaganda pública e o sistema escolar."
    ],
    correct: 1,
    explanation: "O fascismo e o nazismo operavam pela mobilização totalitária da sociedade: Estado centralizado e onipresente ('Tudo no Estado, nada contra o Estado, nada fora do Estado'), culto cego à personalidade do líder, destruição das liberdades individuais, anticomunismo virulento, militarismo expansionista e, no caso alemão, uma obsessiva teoria racial antissemita que culminou no Holocausto. Alternativa B."
  },
  {
    id: "hum_his_q16",
    vestibular: "FUVEST",
    year: 2023,
    subject: "História",
    topic: "Brasil Colônia (Ciclo do Ouro e Sociedade Mineradora)",
    difficulty: "Médio",
    enunciation: "A descoberta e exploração de ouro e diamantes na região das Minas Gerais durante o século XVIII provocaram profundas transformações no espaço colonial brasileiro em comparação ao período açucareiro nordestino, destacando-se:",
    options: [
      "A ruralização quase total da população e a perda de relevância econômica da região Centro-Sul.",
      "O surgimento de uma malha urbana densa nas vilas mineiras, a interiorização da ocupação territorial, o crescimento de um mercado interno de abastecimento por tropeiros e a transferência da capital colonial de Salvador para o Rio de Janeiro em 1763.",
      "A abolição espontânea do trabalho escravo e a introdução em larga escala de assalariados europeus.",
      "O fim da cobrança de tributos pela Coroa portuguesa.",
      "O isolamento comercial definitivo de Minas Gerais em relação ao restante do Brasil."
    ],
    correct: 1,
    explanation: "A mineração criou uma sociedade mais urbana, diversificada e com maior presença de setores médios (artesãos, tropeiros, comerciantes, funcionários públicos). Estimulou a integração do mercado interno (animais de carga do Sul e gado do São Francisco abasteciam as minas) e levou a Coroa de D. José I e Marquês de Pombal a mudar a capital para o Rio de Janeiro em 1763 para fiscalizar de perto o escoamento portuário do ouro e cobrar o quinto. Alternativa B."
  },
  {
    id: "hum_his_q17",
    vestibular: "ENEM",
    year: 2024,
    subject: "História",
    topic: "História Geral (A Primeira Guerra Mundial e o Tratado de Versalhes)",
    difficulty: "Fácil",
    enunciation: "O término da Primeira Guerra Mundial (1914–1918) foi formalizado pelo Tratado de Versalhes em 1919. As condições punitivas e humilhantes impostas à Alemanha derrotada (perda de territórios coloniais e europeus, desmilitarização forçada e pagamento de indenizações astronômicas) tiveram como desdobramento histórico crucial:",
    options: [
      "O estabelecimento de uma paz duradoura e fraterna na Europa Ocidental.",
      "A criação de um sentimento coletivo de revanchismo nacionalista alemão que foi habilmente explorado pelo Partido Nazista de Adolf Hitler para chegar ao poder.",
      "A dissolução voluntária da União Soviética.",
      "A união imediata da Alemanha e da França sob a mesma moeda.",
      "A descolonização pacífica de toda a África e Ásia."
    ],
    correct: 1,
    explanation: "Ao culpar exclusivamente a Alemanha pela eclosão da guerra e infligir-lhe sanções econômicas que destruíram sua economia e geraram hiperinflação na República de Weimar, o Tratado de Versalhes semeou um profundo ressentimento popular e revanchismo militar que serviu de combustível para a ascensão do totalitarismo nazista e o início da Segunda Guerra Mundial vinte anos depois. Alternativa B."
  },
  {
    id: "hum_his_q18",
    vestibular: "UNESP",
    year: 2024,
    subject: "História",
    topic: "Brasil Império (Processo de Independência)",
    difficulty: "Médio",
    enunciation: "A Proclamação da Independência do Brasil em 7 de setembro de 1822 por D. Pedro I distinguiu-se marcadamente dos processos de independência ocorridos na América espanhola vizinha pelo fato de que o Brasil manteve:",
    options: [
      "O regime republicano e o fim imediato do tráfico de escravizados.",
      "A forma de governo monárquica sob a mesma dinastia reinante de Bragança, a unidade territorial do vasto império e a preservação intacta da escravidão.",
      "A divisão do território em cinco repúblicas independentes e autônomas.",
      "A total igualdade de direitos cívicos entre brancos, negros e povos originários.",
      "O controle parlamentar do comércio pelos cabildos populares."
    ],
    correct: 1,
    explanation: "Enquanto a América espanhola fragmentou-se em múltiplas repúblicas governadas por elites criollas após guerras civis sangrentas, o Brasil manteve-se unificado sob uma monarquia imperial hereditária liderada pelo príncipe herdeiro português D. Pedro I, assegurando os privilégios da aristocracia latifundiária e mantendo intocada a instituição da escravidão. Alternativa B."
  },
  {
    id: "hum_his_q19",
    vestibular: "FUVEST",
    year: 2024,
    subject: "História",
    topic: "Idade Antiga (República Romana e o Conflito Patrícios vs Plebeus)",
    difficulty: "Médio",
    enunciation: "Durante a República Romana primitiva (séculos V a III a.C.), a plebe mobilizou-se por meio de greves militares e retiradas estratégicas para o Monte Sagrado, conquistando importantes vitórias cívicas contra a aristocracia dos patrícios. Uma dessas conquistas institucionais fundamentais foi:",
    options: [
      "A coroação de Júlio César como imperador vitalício com poderes divinos.",
      "A criação do Tribunato da Plebe (com direito a veto sobre leis do Senado) e a redação da Lei das Doze Tábuas, que registrou o direito romano por escrito.",
      "A abolição total da propriedade privada de terras na península Itálica.",
      "A conversão de Roma ao cristianismo monoteísta como religião exclusiva.",
      "A entrega do comando dos exércitos aos escravizados cartagineses."
    ],
    correct: 1,
    explanation: "As lutas da plebe romana forçaram a abertura da ordem republicana: os Tribunos da Plebe tornaram-se magistrados invioláveis com poder de vetar atos do Senado patrício (intercessio); a Lei das Doze Tábuas (c. 450 a.C.) fixou o direito consuetudinário por escrito, impedindo interpretações arbitrárias; e leis posteriores (como a Canuleia e a Licínia Sextia) permitiram o casamento interclasses e aboliram a escravidão por dívidas entre romanos. Alternativa B."
  },
  {
    id: "hum_his_q20",
    vestibular: "ENEM",
    year: 2024,
    subject: "História",
    topic: "Brasil República (O Governo JK e os '50 Anos em 5')",
    difficulty: "Fácil",
    enunciation: "O governo de Juscelino Kubitschek (1956–1961) caracterizou-se pelo otimismo desenvolvimentista sintetizado no slogan 'Cinquenta anos de progresso em cinco de governo' e fundamentado no Plano de Metas. A medida de maior impacto geopolítico e simbólico realizada por JK nesse período foi:",
    options: [
      "A estatização das refinarias de petróleo no Nordeste.",
      "A construção e inauguração de Brasília no Planalto Central (1960), com o objetivo de interiorizar o desenvolvimento nacional e articular a rede rodoviária.",
      "A assinatura do Tratado de Itaipu com o Paraguai.",
      "A desapropriação de latifúndios improdutivos para a reforma agrária.",
      "A expulsão das montadoras multinacionais de automóveis do ABC paulista."
    ],
    correct: 1,
    explanation: "Brasília foi concebida por JK como a meta-síntese de seu governo, transferindo a capital da beira do Atlântico (Rio de Janeiro) para o coração geográfico do país (Goiás/Distrito Federal). O projeto urbanístico de Lúcio Costa e arquitetônico de Oscar Niemeyer simbolizou a modernização acelerada, a integração do interior por meio de rodovias e a atração maciça de capital estrangeiro (indústria automobilística). Alternativa B."
  },
  {
    id: "hum_his_q21",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "História",
    topic: "História Geral (Descolonização da África e Apartheid)",
    difficulty: "Médio",
    enunciation: "Na África do Sul, o regime do Apartheid (1948–1994) consubstanciou um sistema de segregação racial institucionalizado por leis de Estado pelo Partido Nacional Africâner. Esse regime impunha:",
    options: [
      "A igualdade eleitoral de todos os grupos étnicos sob um parlamento plurirracial.",
      "A privação de direitos civis e políticos à maioria negra da população, a proibição de casamentos inter-raciais, a segregação residencial em bantustões e a obrigação do porte de passes de circulação.",
      "O domínio político e econômico exclusivo concedido aos descendentes zulus.",
      "A proibição do idioma inglês em todo o território nacional.",
      "A reforma agrária imediata em benefício dos trabalhadores negros das minas de ouro."
    ],
    correct: 1,
    explanation: "O Apartheid institucionalizou a supremacia da minoria branca africâner (cerca de 10% da população), relegando os cerca de 80% de negros a territórios segregados precários (bantustões ou townships), retirando-lhes a cidadania sul-africana e reprimindo brutalmente líderes de oposição como Nelson Mandela e Steve Biko. Alternativa B."
  },
  {
    id: "hum_his_q22",
    vestibular: "FUVEST",
    year: 2023,
    subject: "História",
    topic: "Idade Moderna (O Iluminismo e os Filósofos das Luzes)",
    difficulty: "Fácil",
    enunciation: "O movimento intelectual iluminista do século XVIII na Europa criticava veementemente os fundamentos do Antigo Regime (o absolutismo monárquico, a intolerância religiosa da Igreja e os privilégios feudais da nobreza). O pensador francês Montesquieu, em sua obra seminal 'O Espírito das Leis' (1748), formulou a clássica teoria da:",
    options: [
      "Soberania absoluta do rei divinamente inspirado.",
      "Separação e harmonia dos poderes estatais em Executivo, Legislativo e Judiciário, para que o poder limite o poder e impeça a tirania.",
      "Ditadura do proletariado e extinção imediata do Estado.",
      "Guerra preventiva perpétua entre as nações mercantis.",
      "Supremacia dos dogmas eclesiásticos sobre a ciência experimental."
    ],
    correct: 1,
    explanation: "Montesquieu propôs a tripartição funcional dos poderes políticos (Executivo, Legislativo e Judiciário) como mecanismo institucional de freios e contrapesos mútuos ('checks and balances'). Segundo o filósofo, a liberdade dos cidadãos só pode ser resguardada quando as atribuições de legislar, executar e julgar não estão concentradas nas mãos de uma única pessoa ou corporação. Alternativa B."
  },
  {
    id: "hum_his_q23",
    vestibular: "ENEM",
    year: 2023,
    subject: "História",
    topic: "Brasil República (Revoltas Populares da Primeira República)",
    difficulty: "Médio",
    enunciation: "Em novembro de 1904, o Rio de Janeiro (então capital federal) foi convulsionado por intensos conflitos de rua, barricadas e trocas de tiros entre a população e as forças policiais durante a 'Revolta da Vacina'. Além da insatisfação com a lei que determinava a vacinação obrigatória contra a varíola idealizada pelo sanitarista Oswaldo Cruz, a revolta popular refletiu:",
    options: [
      "A oposição popular à abolição da escravidão pelos cafeicultores.",
      "O descontentamento social generalizado com as reformas urbanas do prefeito Pereira Passos ('Bota-Abaixo'), que destruíram cortiços no centro e expulsaram as classes pobres para os morros e periferias.",
      "Uma conspiração comunista armada articulada diretamente pela União Soviética.",
      "A recusa dos operários em trabalhar nas indústrias automotivas recém-instaladas.",
      "A defesa da volta da monarquia com a restauração de D. Pedro II."
    ],
    correct: 1,
    explanation: "A vacinação obrigatória foi o estopim de uma revolta cujo combustível mais profundo era a violência autoritária da reforma urbana higienista de Pereira Passos. O 'Bota-Abaixo' demoliu centenas de habitações coletivas e cortiços populares no centro histórico para abrir avenidas aos moldes parisienses, atirando milhares de famílias pobres sem qualquer indenização para as encostas dos morros, gerando profunda revolta popular. Alternativa B."
  },
  {
    id: "hum_his_q24",
    vestibular: "UNESP",
    year: 2023,
    subject: "História",
    topic: "Brasil Colônia (Tratado de Tordesilhas e Bandeirantismo)",
    difficulty: "Médio",
    enunciation: "As expedições armadas dos paulistas no século XVII (as chamadas bandeiras) desempenharam papel decisivo na configuração geográfica do território brasileiro ao:",
    options: [
      "Respeitar escrupulosamente a linha imaginária do Tratado de Tordesilhas mantendo o território colonial restrito ao litoral.",
      "Ultrapassar a fronteira de Tordesilhas em direção ao Centro-Oeste e ao Sul em busca da captura de indígenas para escravização (apresamento) e de jazidas de ouro e pedras preciosas, expandindo substancialmente as fronteiras do Brasil.",
      "Aliar-se aos jesuítas espanhóis na defesa incondicional das reduções guaranis.",
      "Fundar exclusivamente portos marítimos mercantes na costa nordestina.",
      "Introduzir o cultivo pioneiro de café nas encostas da Serra do Mar."
    ],
    correct: 1,
    explanation: "Partindo da vila de São Paulo de Piratininga, os bandeirantes adentraram o sertão continental ignorando os limites do Tratado de Tordesilhas (processo facilitado pelo período da União Ibérica, 1580–1640). Eles destruíram missões jesuíticas espanholas para capturar guaranis escravizados e acabaram descobrindo as ricas minas de ouro em Minas Gerais, Goiás e Mato Grosso, ampliando imensamente o mapa do Brasil posteriormente consagrado pelo Tratado de Madri (1750). Alternativa B."
  },
  {
    id: "hum_his_q25",
    vestibular: "FUVEST",
    year: 2024,
    subject: "História",
    topic: "História Geral (Segunda Guerra Mundial e o Holocausto)",
    difficulty: "Médio",
    enunciation: "Durante a Segunda Guerra Mundial (1939–1945), o regime nazista alemão executou de forma industrializada a chamada 'Solução Final', um projeto genocida sistemático que resultou no assassinato de cerca de seis milhões de judeus, além de ciganos, eslavos, homossexuais, pessoas com deficiência e dissidentes políticos. Esse crime contra a humanidade perpetrado pelo Estado nazista é universalmente denominado:",
    options: [
      "Pogrom de Varsóvia.",
      "Holocausto (Shoah).",
      "Noite dos Cristais apenas.",
      "Operação Barbarossa.",
      "Batalha de Stalingrado."
    ],
    correct: 1,
    explanation: "O Holocausto (Shoah em hebraico) designa o genocídio estatal sistemático, burocrático e industrial organizado pelo regime nazista com uso de campos de concentração e extermínio (como Auschwitz-Birkenau, Treblinka e Sobibor), câmaras de gás e fornos crematórios para exterminar comunidades inteiras motivado por ódio racial antissemita. Alternativa B."
  },
  {
    id: "hum_his_q26",
    vestibular: "ENEM",
    year: 2024,
    subject: "História",
    topic: "Brasil Contemporâneo (A Luta pelo Fim da Escravidão)",
    difficulty: "Médio",
    enunciation: "A abolição da escravidão no Brasil, sancionada pela Lei Áurea em 13 de maio de 1888, não foi uma concessão graciosa e espontânea da princesa Isabel, mas sim o ápice de um intenso processo social marcado por:",
    options: [
      "Apenas acordos diplomáticos pacíficos firmados com os barões do café do Vale do Paraíba.",
      "A mobilização ativa do movimento abolicionista urbano (liderado por intelectuais como André Rebouças, Luís Gama e José do Patrocínio), rebeliões e fugas em massa de escravizados organizadas por redes de quilombos e a recusa do Exército em perseguir fugitivos.",
      "A intervenção militar direta de tropas navais britânicas nas fazendas de café.",
      "A decisão unânime de todos os proprietários de terras de libertar escravizados sem indenização.",
      "A ausência de resistência ativa por parte das pessoas escravizadas."
    ],
    correct: 1,
    explanation: "A historiografia contemporânea desmistifica a narrativa benevolente da monarquia: a abolição foi conquistada pela confluência entre a insurreição cotidiana dos próprios escravizados (formação de quilombos como o Jabaquara em Santos, sabotagens e fugas multitudinárias) e a contundente pressão cívica de jornalistas, advogados negros, operários e poetas nas cidades, tornando o cativeiro financeiramente e militarmente insustentável. Alternativa B."
  },
  {
    id: "hum_his_q27",
    vestibular: "UNICAMP",
    year: 2023,
    subject: "História",
    topic: "História Geral (Revolução Russa de 1917)",
    difficulty: "Médio",
    enunciation: "Em outubro de 1917, sob a liderança do partido bolchevique de Vladimir Lenin e com o lema mobilizador 'Paz, Pão e Terra' e 'Todo o poder aos Sovietes', os trabalhadores e soldados derrubaram o governo provisório na Rússia, iniciando a primeira revolução socialista vitoriosa do mundo. O impacto internacional imediato desse acontecimento histórico foi:",
    options: [
      "O fortalecimento da autocracia czarista e a entrada da Rússia na Otan.",
      "A retirada imediata da Rússia da Primeira Guerra Mundial (Tratado de Brest-Litovsk) e o temor generalizado da burguesia ocidental de contágio revolucionário em seus próprios países ('o perigo vermelho').",
      "A privatização completa de todas as terras e fábricas na Europa Oriental.",
      "A unificação política da Rússia e dos Estados Unidos em um único bloco militar.",
      "O retorno da nobreza feudal aos palácios imperiais de São Petersburgo."
    ],
    correct: 1,
    explanation: "Ao tomar o poder, o governo bolchevique cumpriu a promessa de retirar a Rússia da carnificina da 1ª Guerra Mundial, estatizou bancos e fábricas e distribuiu terras aos camponeses. O evento redefiniu o século XX: provocou intervenções armadas de potências ocidentais na Guerra Civil Russa e instaurou nos governos liberais o pavor da expansão comunista. Alternativa B."
  },
  {
    id: "hum_his_q28",
    vestibular: "FUVEST",
    year: 2023,
    subject: "História",
    topic: "Idade Moderna (Absolutismo e Teóricos do Poder)",
    difficulty: "Médio",
    enunciation: "Durante o Antigo Regime francês, o monarca absolutista Luís XIV (o 'Rei Sol') celebrizou-se pela célebre frase 'O Estado sou eu' (L'État, c'est moi). No plano teórico, pensadores como o bispo Jacques Bossuet sustentavam a autoridade régia ilimitada por meio da doutrina do:",
    options: [
      "Contrato social democrático de Jean-Jacques Rousseau.",
      "Direito divino dos reis, segundo a qual o poder do monarca emana diretamente de Deus e qualquer rebelião contra ele é considerada pecado sacrílego.",
      "Materialismo histórico dialético.",
      "Anarquismo pacifista.",
      "Federalismo republicano comunal."
    ],
    correct: 1,
    explanation: "Bossuet, em 'A Política tirada da Sagrada Escritura', defendia que os reis eram ministros de Deus na Terra, ungidos com o sagrado dever de zelar pelo bem público. Questionar as ordens do soberano equivaleria a cometer heresia contra o próprio Criador, legitimando o poder absoluto e inquestionável da Coroa. Alternativa B."
  },
  {
    id: "hum_his_q29",
    vestibular: "ENEM",
    year: 2024,
    subject: "História",
    topic: "Brasil Ditadura Militar (A Campanha das 'Diretas Já')",
    difficulty: "Fácil",
    enunciation: "Entre o final de 1983 e o início de 1984, milhões de cidadãos brasileiros vestidos de verde e amarelo foram às praças públicas de capitais e cidades de todo o país empunhando cartazes e entoando palavras de ordem na histórica campanha popular das 'Diretas Já'. Essa gigantesca mobilização popular tinha como reivindicação política central:",
    options: [
      "A continuação da censura militar por mais dez anos.",
      "A aprovação da Emenda Constitucional Dante de Oliveira, que restabelecia eleições diretas para a Presidência da República no Brasil.",
      "A dissolução do Congresso Nacional e a decretação de um novo Ato Institucional.",
      "O cancelamento do pagamento da aposentadoria a trabalhadores rurais.",
      "A entrega das empresas estatais de telecomunicações a governos estrangeiros."
    ],
    correct: 1,
    explanation: "A campanha cívica das 'Diretas Já' reuniu artistas, políticos de oposição (Ulysses Guimarães, Tancredo Neves, Lula, Brizola, FHC), lideranças sindicais e a sociedade civil exigindo a aprovação da emenda do deputado Dante de Oliveira para que o povo voltasse a votar diretamente para presidente. Embora a emenda tenha sido derrotada por manobras do governo militar no Congresso, a pressão popular inviabilizou a continuidade da ditadura, levando à eleição de Tancredo Neves no Colégio Eleitoral em 1985. Alternativa B."
  },
  {
    id: "hum_his_q30",
    vestibular: "UNESP",
    year: 2024,
    subject: "História",
    topic: "Brasil República (A Revolução de 1930)",
    difficulty: "Médio",
    enunciation: "O movimento armado conhecido como Revolução de 1930 pôs fim à hegemonia da República Velha no Brasil. O episódio deflagrador da insurreição liderada pela Aliança Liberal contra a posse de Júlio Prestes foi:",
    options: [
      "A renúncia espontânea de Washington Luís.",
      "O assassinato de João Pessoa (governador da Paraíba e candidato a vice-presidente na chapa de Getúlio Vargas) em uma confeitaria no Recife.",
      "O desembarque de tropas norte-americanas na baía de Guanabara.",
      "A decretação do AI-5 pelo presidente da Câmara.",
      "A invasão do palácio do Catete por marinheiros amotinados."
    ],
    correct: 1,
    explanation: "Após a vitória de Júlio Prestes em eleições fraudulentas em março de 1930, o assassinato de João Pessoa em julho por rivalidades locais paraibanas foi capitalizado politicamente pela oposição aliancista como um crime político do governo federal. Isso catalisou a revolta militar de jovens tenentes e forças do Rio Grande do Sul e de Minas Gerais, levando Getúlio Vargas ao poder em outubro de 1930. Alternativa B."
  },
  {
    id: "hum_his_q31",
    vestibular: "FUVEST",
    year: 2024,
    subject: "História",
    topic: "História Geral (A Crise de 1929 e o New Deal)",
    difficulty: "Médio",
    enunciation: "Para combater a Grande Depressão que se abateu sobre os Estados Unidos após a quebra da Bolsa de Valores de Nova York em 1929, o presidente Franklin Delano Roosevelt implementou em 1933 o programa econômico governamental denominado 'New Deal'. Esse plano rompeu com o liberalismo clássico do laissez-faire ao preconizar:",
    options: [
      "A abolição total dos impostos e o desmantelamento de todas as agências reguladoras.",
      "A intervenção estatal ativa na economia (orientada pelo pensamento keynesiano), com investimentos públicos em grandes obras de infraestrutura, controle de crédito e concessão de seguridade social aos desempregados.",
      "A estatização integral e forçada de todas as empresas e fazendas privadas no país.",
      "A renúncia de todos os acordos comerciais internacionais em prol da autossuficiência agrária primitiva.",
      "A proibição do funcionamento de bancos em todo o território norte-americano."
    ],
    correct: 1,
    explanation: "Inspirado nas teses do economista John Maynard Keynes, o New Deal adotou o Estado intervencionista e previdenciário (Welfare State): gerou empregos diretos por meio de grandes obras públicas (represas, rodovias e eletrificação rural pela TVA), regulamentou os mercados financeiros pela SEC, fixou salários mínimos e criou o sistema de seguridade social (Social Security Act). Alternativa B."
  },
  {
    id: "hum_his_q32",
    vestibular: "ENEM",
    year: 2023,
    subject: "História",
    topic: "Brasil Império (Primeiro Reinado e a Constituição de 1824)",
    difficulty: "Médio",
    enunciation: "Outorgada autoritariamente por D. Pedro I após dissolver pela força a Assembleia Constituinte de 1823 ('A Noite da Agonia'), a primeira Constituição do Brasil (1824) estruturou a organização política do Império em torno de quatro poderes de Estado. O poder privativo do imperador que se sobrepunha aos demais era o:",
    options: [
      "Poder Executivo ministerial.",
      "Poder Moderador, que conferia ao imperador a prerrogativa de dissolver o Parlamento, nomear senadores vitalícios e destituir juízes.",
      "Poder Legislativo bicameral soberano.",
      "Poder Judiciário dos tribunais de júri populares.",
      "Poder Eclesiástico de veto papal."
    ],
    correct: 1,
    explanation: "Baseado nas teorias de Benjamin Constant, o PODER MODERADOR era a 'chave de toda a organização política' imperial, sendo exercido com exclusividade pelo monarca como 'defensor perpétuo do Brasil'. Ele permitia a D. Pedro I vetar leis, dissolver a Câmara dos Deputados, escolher senadores vitalícios e perdoar sentenças, anulando na prática a independência dos poderes Legislativo e Judiciário. Alternativa B."
  },
  {
    id: "hum_his_q33",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "História",
    topic: "História Geral (A Comuna de Paris de 1871)",
    difficulty: "Médio",
    enunciation: "Instaurada em 1871 na capital francesa após a derrota da França na Guerra Franco-Prussiana, a Comuna de Paris é considerada pelos historiadores o primeiro governo autônomo operário e socialista da história contemporânea. Durante seus 72 dias de existência antes de ser esmagada sangrentamente pelo exército de Versalhes ('A Semana Sangrenta'), a Comuna decretou medidas revolucionárias como:",
    options: [
      "A restauração da monarquia borbônica e a cobrança de dízimos pela Igreja.",
      "A separação rigorosa entre Igreja e Estado, o controle das fábricas abandonadas pelos operários, o congelamento de aluguéis e a substituição do exército permanente pelo povo em armas.",
      "O confisco de todos os bens dos camponeses pobres das províncias.",
      "A censura total a qualquer manifestação artística feminina.",
      "A submissão voluntária de Paris ao Império Alemão de Bismarck."
    ],
    correct: 1,
    explanation: "A Comuna de Paris foi um governo popular democrático e autogestionário que secularizou o ensino, aboliu o trabalho noturno nas padarias, instituiu mandatos revogáveis para funcionários públicos com teto salarial operário e defendeu a soberania proletária universal. Tornou-se um ícone da esquerda internacionalista reverenciada por Marx e Lenin. Alternativa B."
  },
  {
    id: "hum_his_q34",
    vestibular: "FUVEST",
    year: 2024,
    subject: "História",
    topic: "Brasil República (Governo João Goulart e o Golpe de 1964)",
    difficulty: "Médio",
    enunciation: "O golpe militar que depôs o presidente democraticamente eleito João Goulart ('Jango') em 31 de março de 1964 teve como justificativa ideológica das forças conservadoras (militares, grandes empresários, imprensa tradicional e setores da Igreja Católica) a acusação de que o presidente pretendia instaurar uma 'república sindicalista' comunista no país. Na realidade, a agenda programática defendida por Jango que mais amedrontava as elites proprietárias era o projeto das:",
    options: [
      "Metas de privatização do petróleo nacional.",
      "Reformas de Base (que incluíam a reforma agrária, fiscal, bancária, universitária e a extensão do direito de voto aos analfabetos).",
      "Medidas de expulsão imediata de diplomatas ocidentais.",
      "Tentativas de fechar o Supremo Tribunal Federal e instaurar um império.",
      "Leis de cancelamento de todos os direitos trabalhistas da CLT."
    ],
    correct: 1,
    explanation: "As Reformas de Base de Jango visavam enfrentar os gargalos estruturais do subdesenvolvimento brasileiro: democratizar a estrutura fundiária latifundiária arcaica (reforma agrária), tributar lucros excessivos de multinacionais, ampliar o acesso ao ensino superior e estender a cidadania plena a milhões de trabalhadores analfabetos. Essa agenda progressista foi taxada de 'ameaça comunista' no contexto histérico da Guerra Fria pós-Revolução Cubana, deflagrando o golpe civil-militar. Alternativa B."
  },
  {
    id: "hum_his_q35",
    vestibular: "ENEM",
    year: 2024,
    subject: "História",
    topic: "Brasil Colônia (Movimentos Separatistas: Inconfidência Mineira vs Conjuração Baiana)",
    difficulty: "Médio",
    enunciation: "No final do século XVIII, a insatisfação com a opressão fiscal e colonial portuguesa gerou movimentos separatistas com projetos políticos distintos. Comparando a Inconfidência Mineira (1789) e a Conjuração Baiana (ou Revolta dos Alfaiates, 1798), constata-se que esta última se diferenciou da primeira por:",
    options: [
      "Ser liderada exclusivamente por bispos e senhores proprietários de minas de ouro.",
      "Apresentar caráter eminentemente popular e abolicionista, com expressiva participação de alfaiates, soldados pobres, negros e mulatos libertos e escravizados que exigiam o fim da escravidão.",
      "Defender a manutenção da fidelidade eterna à rainha D. Maria I.",
      "Não ter sido descoberta pelas autoridades coloniais portuguesas.",
      "Restringir suas críticas apenas ao preço dos impostos sobre o café."
    ],
    correct: 1,
    explanation: "Enquanto a Inconfidência Mineira foi um levante de elites econômicas e letradas brancas que não tinha consenso sobre a libertação dos escravizados (muitos inconfidentes eram donos de cativos), a Conjuração Baiana foi um levante de massas populares de matriz jacobina e radical que exigia abolição imediata da escravidão, proclamação de uma república democrática e redução do custo de vida. Alternativa B."
  },
  // ==========================================
  // BLOCO 2: GEOGRAFIA (35 QUESTÕES)
  // ==========================================
  {
    id: "hum_geo_q1",
    vestibular: "ENEM",
    year: 2024,
    subject: "Geografia",
    topic: "Climatologia (Interpretação de Climograma)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 320 200" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="160" x2="280" y2="160" stroke="#64748b" stroke-width="2"/>
      <line x1="40" y1="160" x2="40" y2="30" stroke="#0284c7" stroke-width="2"/>
      <line x1="280" y1="160" x2="280" y2="30" stroke="#ef4444" stroke-width="2"/>
      <text x="35" y="25" font-size="9" fill="#0284c7" font-weight="bold">Pluviosidade (mm)</text>
      <text x="250" y="25" font-size="9" fill="#ef4444" font-weight="bold">Temp (°C)</text>
      <!-- Barras de chuva (verão chuvoso Jan-Mar e Nov-Dez, inverno seco Jun-Ago) -->
      <rect x="50" y="70" width="12" height="90" fill="#38bdf8"/>
      <rect x="68" y="65" width="12" height="95" fill="#38bdf8"/>
      <rect x="86" y="80" width="12" height="80" fill="#38bdf8"/>
      <rect x="104" y="120" width="12" height="40" fill="#38bdf8"/>
      <rect x="122" y="145" width="12" height="15" fill="#38bdf8"/>
      <rect x="140" y="152" width="12" height="8" fill="#38bdf8"/>
      <rect x="158" y="150" width="12" height="10" fill="#38bdf8"/>
      <rect x="176" y="145" width="12" height="15" fill="#38bdf8"/>
      <rect x="194" y="110" width="12" height="50" fill="#38bdf8"/>
      <rect x="212" y="75" width="12" height="85" fill="#38bdf8"/>
      <rect x="230" y="60" width="12" height="100" fill="#38bdf8"/>
      <rect x="248" y="55" width="12" height="105" fill="#38bdf8"/>
      <!-- Linha de temperatura estável alta (22-26 C) -->
      <path d="M 56 60 Q 150 75 254 58" fill="none" stroke="#ef4444" stroke-width="3"/>
      <circle cx="150" cy="70" r="3" fill="#ef4444"/>
      <text x="150" y="175" font-size="9" fill="#64748b" text-anchor="middle">J  F  M  A  M  J  J  A  S  O  N  D</text>
    </svg>`,
    imageCaption: "Climograma característico com duas estações bem definidas (verão chuvoso e inverno seco).",
    enunciation: "O climograma acima apresenta a distribuição anual de pluviosidade e de temperatura típica de vastas áreas do interior brasileiro, caracterizado por verões quentes e chuvosos e invernos amenos e acentuadamente secos. Esse padrão climático e o bioma a ele associado correspondem a:",
    options: [
      "Clima Equatorial e Floresta Amazônica.",
      "Clima Tropical Típico (Semiúmido) e Bioma Cerrado.",
      "Clima Subtropical e Mata dos Pinhais (Araucárias).",
      "Clima Semiárido e Bioma Caatinga.",
      "Clima Temperado Marítimo e Pampas Gaúchos."
    ],
    correct: 1,
    explanation: "O clima Tropical Típico (ou Tropical Continental/Semiúmido), que domina o Planalto Central brasileiro no domínio morfoclimático do CERRADO, apresenta temperaturas médias elevadas durante o ano todo (22–27 °C) e sazonalidade pluviométrica nítida: uma estação chuvosa no verão (outubro a março) sob atuação da Massa Equatorial Continental (mEc) e uma estação seca rigorosa no inverno (maio a setembro) sob predomínio de massa de ar estável anticiclônica. Alternativa B."
  },
  {
    id: "hum_geo_q2",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Geografia",
    topic: "Cartografia (Projeções de Mercator e Peters)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 300 160" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Grade da Projeção de Mercator cilíndrica conforme -->
      <rect x="30" y="20" width="110" height="120" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <line x1="30" y1="80" x2="140" y2="80" stroke="#0284c7" stroke-width="2"/>
      <text x="85" y="75" font-size="8" fill="#0284c7" text-anchor="middle">Equador</text>
      <line x1="30" y1="40" x2="140" y2="40" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <line x1="30" y1="120" x2="140" y2="120" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <text x="85" y="152" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle">Mercator (Conforme)</text>
      <!-- Grade da Projeção de Peters cilíndrica equivalente -->
      <rect x="160" y="20" width="110" height="120" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <line x1="160" y1="80" x2="270" y2="80" stroke="#0284c7" stroke-width="2"/>
      <text x="215" y="75" font-size="8" fill="#0284c7" text-anchor="middle">Equador</text>
      <line x1="160" y1="35" x2="270" y2="35" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <line x1="160" y1="125" x2="270" y2="125" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <text x="215" y="152" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle">Peters (Equivalente)</text>
    </svg>`,
    imageCaption: "Comparação esquemática entre as projeções cilíndricas de Mercator e Peters.",
    enunciation: "As projeções cartográficas não são neutras: cada uma reflete interesses geopolíticos e ideológicos de sua época histórica. Comparando as projeções cilíndricas de Gerhard Mercator (1569) e de Arno Peters (1973), constata-se corretamente que:",
    options: [
      "Mercator preserva as áreas reais dos continentes, enquanto Peters preserva os ângulos exatos.",
      "A projeção de Mercator é conforme (mantém a forma correta dos continentes e os ângulos para navegação marítima, mas distorce e hipertrofia as áreas das altas latitudes do Hemisfério Norte, reforçando uma visão eurocêntrica); já a de Peters é equivalente (mantém a proporção real das áreas territoriais, valorizando os países do Sul Global, embora deforme suas formas alongando-os no sentido norte-sul).",
      "Ambas as projeções eliminam qualquer tipo de distorção esférica da Terra.",
      "A projeção de Peters foi criada para apoiar a expansão colonialista do século XVI.",
      "A projeção de Mercator diminui o tamanho aparente da Europa e dos Estados Unidos."
    ],
    correct: 1,
    explanation: "Na projeção de Mercator, a Groenlândia parece ter tamanho equivalente ao continente africano, quando na realidade a África é 14 vezes maior, expressando a visão de mundo da hegemonia europeia renascentista. A projeção de Peters, concebida no contexto da Guerra Fria e da descolonização afro-asiática (Terceiro Mundo), sacrifica a fidelidade das formas para garantir a equivalência proporcional das superfícies dos continentes subdesenvolvidos. Alternativa B."
  },
  {
    id: "hum_geo_q3",
    vestibular: "ENEM",
    year: 2024,
    subject: "Geografia",
    topic: "Demografia (Transição Demográfica Brasileira)",
    difficulty: "Fácil",
    diagramSvg: `<svg viewBox="0 0 300 180" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Pirâmide etária moderna estreitando a base e alargando o topo -->
      <!-- Topo idosos -->
      <rect x="120" y="30" width="30" height="15" fill="#a855f7"/>
      <rect x="150" y="30" width="30" height="15" fill="#ec4899"/>
      <text x="80" y="42" font-size="8" fill="#64748b">+75 anos</text>
      <!-- Adultos meia idade -->
      <rect x="90" y="55" width="60" height="20" fill="#a855f7"/>
      <rect x="150" y="55" width="60" height="20" fill="#ec4899"/>
      <text x="65" y="70" font-size="8" fill="#64748b">40-59 anos</text>
      <!-- Jovens adultos (corpo largo) -->
      <rect x="75" y="85" width="75" height="22" fill="#a855f7"/>
      <rect x="150" y="85" width="75" height="22" fill="#ec4899"/>
      <text x="50" y="100" font-size="8" fill="#64748b">20-39 anos</text>
      <!-- Base estreitando crianças -->
      <rect x="100" y="117" width="50" height="20" fill="#a855f7"/>
      <rect x="150" y="117" width="50" height="20" fill="#ec4899"/>
      <text x="60" y="132" font-size="8" fill="#64748b">0-14 anos</text>
      <text x="120" y="160" font-size="9" font-weight="bold" fill="#a855f7">Homens</text>
      <text x="170" y="160" font-size="9" font-weight="bold" fill="#ec4899">Mulheres</text>
    </svg>`,
    imageCaption: "Perfil da pirâmide etária brasileira atual: estreitamento da base e alargamento do topo.",
    enunciation: "Os dados dos últimos Censos Demográficos do IBGE demonstram uma rápida transformação na estrutura etária da população brasileira, expressa graficamente pelo estreitamento da base da pirâmide e pelo progressivo alargamento do seu ápice. Essa dinâmica demográfica é resultado da combinação entre a:",
    options: [
      "Elevação vertiginosa da taxa de natalidade e a diminuição da expectativa de vida ao nascer.",
      "Acentuada e contínua queda da taxa de fecundidade feminina aliada ao aumento da expectativa de vida decorrente da melhoria das condições médico-sanitárias, gerando o envelhecimento populacional.",
      "Emigração em massa de idosos para países vizinhos.",
      "Ausência de métodos contraceptivos nas áreas urbanas.",
      "Estagnação da mortalidade infantil em patamares coloniais."
    ],
    correct: 1,
    explanation: "A transição demográfica no Brasil avançou rapidamente nas últimas décadas: a taxa de fecundidade despencou de mais de 6 filhos por mulher na década de 1960 para menos de 1,6 filho por mulher atualmente (abaixo da taxa de reposição populacional de 2,1), reflexo da urbanização, entrada da mulher no mercado de trabalho e planejamento familiar. Paralelamente, a expectativa de vida subiu para mais de 76 anos, provocando o envelhecimento acelerado da população e desafios previdenciários e assistenciais. Alternativa B."
  },
  {
    id: "hum_geo_q4",
    vestibular: "ENEM",
    year: 2024,
    subject: "Geografia",
    topic: "Urbanização (Problemas Socioambientais: Inversão Térmica)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 320 180" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Solo com prédios -->
      <rect x="30" y="140" width="260" height="30" fill="#64748b"/>
      <rect x="50" y="110" width="20" height="30" fill="#334155"/>
      <rect x="80" y="90" width="25" height="50" fill="#334155"/>
      <rect x="120" y="100" width="30" height="40" fill="#334155"/>
      <!-- Camada de ar frio retida na superfície com poluentes -->
      <rect x="30" y="80" width="260" height="60" fill="#94a3b8" fill-opacity="0.4"/>
      <text x="160" y="130" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">Ar frio aprisionado com poluentes</text>
      <!-- Camada de ar quente intermediária (tampa térmica) -->
      <rect x="30" y="45" width="260" height="35" fill="#fca5a5" fill-opacity="0.5"/>
      <text x="160" y="67" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">Camada de Ar Quente (Inversão)</text>
      <!-- Ar frio no topo -->
      <text x="160" y="25" font-size="10" fill="#0284c7" text-anchor="middle">Ar mais frio em altitude</text>
    </svg>`,
    imageCaption: "Mecanismo meteorológico da inversão térmica retendo a camada de poluição próxima ao solo urbano.",
    enunciation: "O fenômeno meteorológico ilustrado ocorre com frequência em grandes centros urbanos e vales industriais (como na Região Metropolitana de São Paulo) durante as madrugadas frias de outono e inverno. A rápida perda de calor pelo solo forma uma camada de ar frio superficial que fica retida sob uma camada de ar quente superior, impedindo a convecção vertical e concentrando poluentes particulados próximos à respiração da população. Esse fenômeno é denominado:",
    options: [
      "Ilha de calor urbana.",
      "Inversão térmica.",
      "Chuva orográfica.",
      "Efeito Coriolis.",
      "Ciclone extratropical."
    ],
    correct: 1,
    explanation: "Em condições normais diurnas, o ar mais quente junto ao solo sobe (por ser menos denso) levando os poluentes para a alta atmosfera. Na INVERSÃO TÉRMICA de noites frias de inverno, o solo esfria muito rápido e o ar frio superficial (mais denso) fica estagnado sob uma camada de ar quente que funciona como uma 'tampa', impedindo a dispersão de monóxido de carbono, óxidos de nitrogênio e fuligem, o que agrava exponencialmente crises respiratórias e asma em crianças e idosos. Alternativa B."
  },
  {
    id: "hum_geo_q5",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Geografia",
    topic: "Geologia e Relevo do Brasil",
    difficulty: "Médio",
    enunciation: "A estrutura geológica do território brasileiro é geologicamente antiga e muito estável, caracterizando-se pela ausência de orogêneses recentes (dobramentos modernos do Cenozóico), vulcanismo ativo e terremotos de grande magnitude. No território brasileiro predominam duas grandes províncias geológicas fundamentais:",
    options: [
      "Cordilheiras andinas e fossas oceânicas abissais.",
      "Bacias sedimentares (que cobrem cerca de 64% do território e abrigam jazidas de combustíveis fósseis como petróleo, gás natural e carvão) e Escudos cristalinos / crátons (que recobrem cerca de 36% e concentram importantes minérios metálicos como ferro, manganês e bauxita).",
      "Planaltos exclusivamente vulcânicos e zonas de subducção tectônica ativas.",
      "Calotas glaciais e dobramentos mesozoicos.",
      "Terrenos aluviais sem qualquer mineralização."
    ],
    correct: 1,
    explanation: "O relevo brasileiro apoia-se sobre a Placa Sul-Americana, com bacias sedimentares (Paleozóicas, Mesozóicas e Cenozóicas onde se formou o petróleo do pré-sal e da bacia de Campos) e escudos cristalinos pré-cambrianos arqueozoicos e proterozoicos (onde estão os depósitos de ferro e bauxita do Quadrilátero Ferrífero em MG e da Serra dos Carajás no Pará). Alternativa B."
  },
  {
    id: "hum_geo_q6",
    vestibular: "ENEM",
    year: 2024,
    subject: "Geografia",
    topic: "Espaço Agrário (A Fronteira Agrícola do MATOPIBA)",
    difficulty: "Fácil",
    enunciation: "Nas últimas duas décadas, a sigla 'MATOPIBA' consolidou-se no vocabulário geográfico e econômico para designar uma das mais dinâmicas fronteiras agrícolas do agronegócio de grãos no Brasil. Essa macrorregião abrange áreas confluentes dos estados do:",
    options: [
      "Mato Grosso, Paraná, Rio Grande do Sul e Bahia.",
      "Maranhão, Tocantins, Piauí e Bahia.",
      "Minas Gerais, Amazonas, Tocantins e Paraíba.",
      "Mato Grosso do Sul, Acre, Tocantins e Rondônia.",
      "Maranhão, Alagoas, Tocantins e Roraima."
    ],
    correct: 1,
    explanation: "O MATOPIBA é o acrônimo formado pelas siglas dos estados do Maranhão (MA), Tocantins (TO), Piauí (PI) e Bahia (BA). Caracteriza-se pela expansão acelerada da agricultura intensiva e altamente mecanizada de soja, milho e algodão em chapadões planos do bioma Cerrado, associada a conflitos com comunidades tradicionais (geraizeiros e quilombolas) e desmatamento nativo. Alternativa B."
  },
  {
    id: "hum_geo_q7",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Geografia",
    topic: "Geopolítica e Globalização (A 'Divisão Internacional do Trabalho' e o Meio Técnico-Científico-Informacional)",
    difficulty: "Médio",
    enunciation: "O geógrafo brasileiro Milton Santos formulou o conceito de 'meio técnico-científico-informacional' para caracterizar o período contemporâneo da globalização capitalista. Nesse estágio histórico, a organização do espaço geográfico mundial e das redes globais de produção apoia-se decisivamente na:",
    options: [
      "Utilização exclusiva da força de tração animal e do trabalho braçal não mecanizado.",
      "União indissociável entre ciência, tecnologia e telecomunicações informatizadas (redes de fibra óptica, satélites, internet e inteligência de dados), que permite a circulação instantânea de capitais financeiros e a desconcentração territorial da produção fabril.",
      "Autossuficiência feudal de cada nação sem qualquer comércio exterior.",
      "Destruição de todas as conexões marítimas e aéreas.",
      "Proibição do fluxo de dados digitais entre países desenvolvidos e subdesenvolvidos."
    ],
    correct: 1,
    explanation: "Para Milton Santos, o meio técnico-científico-informacional é a materialização da globalização: os objetos geográficos tornam-se prenhes de ciência e tecnologia. As redes digitais e de transporte veloz viabilizam a 'fábrica global', onde o design e a tecnologia de ponta ficam sediados nas metrópoles dos países centrais enquanto a manufatura dispersa-se por países periféricos em busca de custos mais baixos. Alternativa B."
  },
  {
    id: "hum_geo_q8",
    vestibular: "ENEM",
    year: 2023,
    subject: "Geografia",
    topic: "Cartografia (Escalas Numéricas e Gráficas)",
    difficulty: "Fácil",
    enunciation: "Um geógrafo precisa mapear uma área urbana detalhada de um bairro residencial para planejar a instalação de postes e bueiros. Para obter o maior nível de riqueza de detalhes daquele espaço municipal, ele deve escolher a escala:",
    options: [
      "1 : 10 000 000 (escala muito pequena).",
      "1 : 2 500 000.",
      "1 : 500 000.",
      "1 : 5 000 (escala grande).",
      "1 : 50 000 000."
    ],
    correct: 3,
    explanation: "Na cartografia, a relação entre escala e detalhe funciona assim: quanto MENOR o denominador da fração da escala (ex: 1 : 5 000), MAIOR é a escala cartográfica e MAIOR é a quantidade de detalhes representáveis do terreno (plantas urbanas cadastrais). Escalas com denominadores gigantescos (1 : 10 000 000) são pequenas escalas usadas para mapas-múndi e países inteiros, apresentando altíssima generalização sem detalhes de bairros. Alternativa D."
  },
  {
    id: "hum_geo_q9",
    vestibular: "UNESP",
    year: 2024,
    subject: "Geografia",
    topic: "Biomas Brasileiros (O Bioma Pantanal e a Hidrologia)",
    difficulty: "Fácil",
    enunciation: "O Pantanal Matogrossense é considerado uma das maiores áreas úmidas continentais contínuas do planeta. O fator ecológico e geomorfológico primordial que regula a exuberante biodiversidade pantaneira e as atividades agropastoris locais é o:",
    options: [
      "Regime de congelamento e degelo das geleiras fluviais no inverno.",
      "Ciclo anual periódico de cheias e vazantes dos rios da bacia do Alto Paraguai, que alagam vastas planícies no verão e retraem as águas no inverno fertilizando o solo com sedimentos orgânicos.",
      "Clima desértico permanente sem cursos de água perenes.",
      "Relevo de escarpas montanhosas de alta altitude.",
      "Impacto contínuo de tsunamis atlânticos."
    ],
    correct: 1,
    explanation: "O Pantanal situa-se em uma imensa depressão tectonicamente afundada e plana (bacia sedimentar quaternária). Durante o verão chuvoso, o lento escoamento das águas dos rios da bacia do rio Paraguai inunda até 80% da planície pantaneira; na estiagem de inverno, as águas recuam para as calhas dos rios deixando campos de pastagens naturais altamente férteis e lagoas repletas de peixes. Alternativa B."
  },
  {
    id: "hum_geo_q10",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Geografia",
    topic: "Urbanização (Conurbação e Metropolização)",
    difficulty: "Médio",
    enunciation: "Nas principais regiões metropolitanas brasileiras, o crescimento físico horizontal acelerado de duas ou mais cidades vizinhas até que seus tecidos urbanos se encontrem e se fundam em uma malha contínua, eliminando as áreas rurais que as separavam, é conceituado geograficamente como:",
    options: [
      "Desmetropolização reflexa.",
      "Conurbação.",
      "Gentrificação periférica.",
      "Macrocefalia rural.",
      "Rururbanização excludente."
    ],
    correct: 1,
    explanation: "A CONURBAÇÃO é o fenômeno urbano de integração espacial e funcional entre municípios contíguos que formam uma única mancha urbana ininterrupta (como ocorre entre São Paulo e as cidades do Grande ABC ou entre o Rio de Janeiro e os municípios da Baixada Fluminense). Esse processo exige a gestão integrada de serviços públicos metropolitanos essenciais (transporte público intermunicipal, saneamento básico e saúde). Alternativa B."
  },
  {
    id: "hum_geo_q11",
    vestibular: "ENEM",
    year: 2024,
    subject: "Geografia",
    topic: "Matriz Energética e Transição Ecológica",
    difficulty: "Médio",
    enunciation: "Em comparação com a matriz energética e elétrica média dos países da OCDE e do mundo, a matriz elétrica brasileira destaca-se internacionalmente pelo seu caráter comparativamente mais limpo e sustentável, pois mais de 80% da eletricidade gerada no Brasil provém de:",
    options: [
      "Usinas termelétricas a carvão mineral importado.",
      "Reatores nucleares de fissão pesada.",
      "Fontes renováveis (com expressivo protagonismo da hidroeletricidade, complementada pelo vertiginoso crescimento das energias eólica e solar fotovoltaica e de biomassa de cana).",
      "Termelétricas que queimam óleo diesel subsidiado.",
      "Gás de xisto obtido por fraturamento hidráulico em larga escala."
    ],
    correct: 2,
    explanation: "O Brasil possui uma das matrizes elétricas mais renováveis do planeta: cerca de 60% a 65% provêm de usinas hidrelétricas, enquanto as energias eólica (especialmente nos litorais do Nordeste) e solar fotovoltaica (no semiárido e telhados urbanos) já respondem por mais de 25% da geração nacional, conferindo ao país grande vantagem na descarbonização da economia. Alternativa C."
  },
  {
    id: "hum_geo_q12",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Geografia",
    topic: "Geopolítica Mundial (O Bloco dos BRICS)",
    difficulty: "Fácil",
    enunciation: "Originalmente concebido como uma sigla econômica para economias emergentes (Brasil, Rússia, Índia, China e África do Sul), o grupo dos BRICS transformou-se em um fórum geopolítico e diplomático de grande peso mundial. Em suas cúpulas de chefes de Estado, os BRICS defendem primordialmente:",
    options: [
      "A submissão integral das finanças globais ao Tesouro norte-americano.",
      "A construção de uma ordem internacional multipolar mais representativa, com reforma de órgãos como o Conselho de Segurança da ONU e o FMI e fomento ao comércio mútuo em moedas locais por meio do Novo Banco de Desenvolvimento (NBD).",
      "A criação de um exército militar unificado para invadir o continente europeu.",
      "A proibição do comércio marítimo com países em desenvolvimento.",
      "A extinção definitiva de todas as fronteiras nacionais entre seus membros."
    ],
    correct: 1,
    explanation: "Os BRICS atuam como contraponto à hegemonia ocidental do G7, demandando maior voz política para o Sul Global nos foros multilaterais e criando mecanismos financeiros próprios (como o Novo Banco de Desenvolvimento sediado em Xangai) para financiar projetos de infraestrutura sem as condicionalidades austeras impostas pelo FMI e Banco Mundial. Alternativa B."
  },
  {
    id: "hum_geo_q13",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Geografia",
    topic: "Climatologia (O Fenômeno El Niño)",
    difficulty: "Médio",
    enunciation: "O fenômeno oceânico-atmosférico periódico do El Niño caracteriza-se pelo aquecimento anômalo das águas superficiais do Oceano Pacífico Equatorial e pelo enfraquecimento dos ventos alísios. No território brasileiro, a ocorrência de um evento severo de El Niño provoca tipicamente:",
    options: [
      "Secas torrenciais no Sul e geadas contínuas no Nordeste.",
      "Aumento acentuado das precipitações pluviais com enchentes devastadoras na Região Sul e estiagens severas com secas prolongadas no Semiárido nordestino e no leste da Amazônia.",
      "Resfriamento polar da Floresta Amazônica o ano todo.",
      "Estagnação total das chuvas no Sudeste por cinco anos consecutivos.",
      "Nevascas generalizadas na Serra do Mar."
    ],
    correct: 1,
    explanation: "O El Niño altera drasticamente a circulação atmosférica global (célula de Walker): ele bloqueia as frentes frias no Sul do Brasil gerando tempestades e inundações severas no Rio Grande do Sul e Santa Catarina, enquanto intensifica os movimentos descendentes de ar seco (subsidência) sobre o Nordeste setentrional e bacia amazônica, provocando secas graves e queimadas históricas. Alternativa B."
  },
  {
    id: "hum_geo_q14",
    vestibular: "ENEM",
    year: 2024,
    subject: "Geografia",
    topic: "Hidrografia (Aquíferos Brasileiros)",
    difficulty: "Fácil",
    enunciation: "O subsolo brasileiro abriga gigantescas reservas de água doce subterrânea de valor estratégico inestimável para a segurança hídrica e a agricultura irrigada. Os dois maiores aquíferos transfronteiriços do território nacional são:",
    options: [
      "O Aquífero Guarani (estendido pela Bacia Sedimentar do Paraná no Centro-Sul) e o Sistema Aquífero Grande Amazônia (SAGA / Alter do Chão no Norte).",
      "O Aquífero São Francisco e o Aquífero da Guanabara.",
      "O Aquífero do Pantanal e o Aquífero da Caatinga.",
      "O Aquífero do Tietê e o Aquífero do Paraíba do Sul.",
      "O Aquífero das Guianas e o Aquífero do Chuí."
    ],
    correct: 0,
    explanation: "O Aquífero Guarani é um gigantesco reservatório transfronteiriço compartilhado por Brasil, Argentina, Paraguai e Uruguai. No Norte, pesquisas hidrogeológicas identificaram o Sistema Aquífero Grande Amazônia (SAGA / Alter do Chão), que possui volume hídrico estimado ainda mais expressivo, configurando uma das maiores províncias hidrogeológicas de água potável do mundo. Alternativa A."
  },
  {
    id: "hum_geo_q15",
    vestibular: "UNESP",
    year: 2023,
    subject: "Geografia",
    topic: "Urbanização (Gentrificação)",
    difficulty: "Médio",
    enunciation: "O processo de intervenção urbanística em bairros centrais ou históricos degradados que envolve reformas estéticas, valorização imobiliária e instalação de comércio voltado para classes de maior poder aquisitivo, resultando na expulsão indireta dos antigos moradores e pequenos comerciantes de baixa renda em decorrência do aumento do custo de vida e do aluguel, é conceituado como:",
    options: [
      "Suburbanização proletária.",
      "Gentrificação.",
      "Conurbação periférica.",
      "Favelização espontânea.",
      "Segregação involuntária de elite."
    ],
    correct: 1,
    explanation: "A GENTRIFICAÇÃO (termo derivado do inglês 'gentry', nobreza/fidalguia) descreve a transformação elitizadora do espaço urbano: o capital imobiliário e intervenções públicas 'revitalizam' antigas áreas fabris, portuárias ou cortiços centrais; como consequência do encarecimento do solo e dos tributos (IPTU), a população original mais vulnerável é empurrada para periferias cada vez mais distantes. Alternativa B."
  },
  {
    id: "hum_geo_q16",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Geografia",
    topic: "Geografia Física (Processos Erosivos e Voçorocas)",
    difficulty: "Médio",
    enunciation: "O desmatamento desordenado da cobertura vegetal de encostas e o manejo inadequado do solo sem técnicas de conservação (como plantio em curvas de nível e terraceamento) aceleram o escoamento superficial das águas pluviais, escavando sulcos e ravinas que podem evoluir para grandes crateras profundas que atingem o lençol freático, denominadas:",
    options: [
      "Meandros abandonados.",
      "Voçorocas (ou boçorocas).",
      "Restingas arenosas.",
      "Falésias marítimas.",
      "Dunas móveis barcanas."
    ],
    correct: 1,
    explanation: "A voçoroca é a forma mais avançada e destrutiva de erosão hídrica linear no solo desprotegido. A água da chuva remove as camadas superficiais e aprofunda ravinações até expor a água subterrânea do lençol freático, desestabilizando taludes e inviabilizando áreas agricultáveis e urbanas inteiras. Alternativa B."
  },
  {
    id: "hum_geo_q17",
    vestibular: "ENEM",
    year: 2024,
    subject: "Geografia",
    topic: "Geografia da População (Migrações Internas no Brasil)",
    difficulty: "Fácil",
    enunciation: "Entre as décadas de 1950 e 1980, o principal fluxo migratório inter-regional no Brasil foi o êxodo de trabalhadores da Região Nordeste em direção às cidades do Sudeste (especialmente São Paulo e Rio de Janeiro). Esse intenso movimento populacional foi impulsionado simultaneamente por:",
    options: [
      "Oferta maciça de terras gratuitas para os nordestinos na capital paulista.",
      "Fatores de repulsão no Nordeste (secas periódicas, concentração fundiária arcaica e extrema pobreza rural) combinados a fatores de atração no Sudeste (acelerada industrialização e expansão da construção civil e do setor de serviços).",
      "Incentivos governamentais para que os paulistas migrassem para o sertão.",
      "Abertura de novas minas de diamantes no centro histórico do Rio de Janeiro.",
      "Guerra civil armada entre os estados da federação."
    ],
    correct: 1,
    explanation: "A migração nordestina para o Sudeste foi o maior fenômeno migratório da história brasileira: enquanto o Nordeste enfrentava o atraso do latifúndio canavieiro/pecuarista e as secas sem amparo social, o Sudeste varguista e juscelinista concentrava os parques fabris, a infraestrutura rodoviária e a demanda de mão de obra para erguer a infraestrutura urbana moderna. Alternativa B."
  },
  {
    id: "hum_geo_q18",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Geografia",
    topic: "Geografia Política (Fusos Horários Brasileiros)",
    difficulty: "Médio",
    enunciation: "Devido à sua enorme extensão territorial no sentido longitudinal leste-oeste, o Brasil possui atualmente quatro fusos horários oficiais, todos situados a oeste do Meridiano de Greenwich (GMT/UTC negativo). O horário oficial de Brasília (capital federal) situa-se no fuso de:",
    options: [
      "UTC - 1 hora (Fernando de Noronha).",
      "UTC - 2 horas.",
      "UTC - 3 horas (que abrange o Distrito Federal, as regiões Sudeste, Sul, Nordeste e estados como Goiás, Tocantins e Pará).",
      "UTC - 4 horas (Manaus e Cuiabá).",
      "UTC - 5 horas (Acre e extremo oeste do Amazonas)."
    ],
    correct: 2,
    explanation: "O fuso horário oficial do Brasil é o de 45° Oeste de Greenwich, correspondente a UTC - 3 horas (três horas a menos em relação a Londres). Ele abrange a maior parte da população do país e serve de referência para as eleições nacionais, bolsas de valores e vestibulares unificados como o ENEM. Alternativa C."
  },
  {
    id: "hum_geo_q19",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Geografia",
    topic: "Globalização (Divisão Internacional do Trabalho - DIT)",
    difficulty: "Médio",
    enunciation: "Na clássica Divisão Internacional do Trabalho (DIT) estabelecida durante a fase da Globalização contemporânea, os países emergentes e subdesenvolvidos (como o Brasil e nações latino-americanas) inserem-se no comércio internacional principalmente como:",
    options: [
      "Monopolistas globais de semicondutores de 3 nanômetros e de inteligência artificial quântica.",
      "Grandes exportadores de commodities primárias agrícolas (soja, café, carnes), minerais (minério de ferro, petróleo bruto) e produtos manufaturados de baixo valor agregado, importando manufaturados de alta intensidade tecnológica.",
      "Países totalmente fechados ao capital estrangeiro sem dívidas externas.",
      "Bancos centrais emissores da moeda de reserva mundial.",
      "Comunidades autossuficientes sem dependência de fertilizantes químicos."
    ],
    correct: 1,
    explanation: "Apesar da industrialização periférica, a DIT contemporânea mantém o Brasil e os países latino-americanos altamente dependentes da exportação de commodities primárias (primarização da pauta exportadora / agronegócio e mineração), enquanto dependem da importação de insumos avançados (chips, maquinário de precisão, medicamentos patenteados e fertilizantes químicos) dos polos centrais de inovação tecnológica. Alternativa B."
  },
  {
    id: "hum_geo_q20",
    vestibular: "ENEM",
    year: 2024,
    subject: "Geografia",
    topic: "Geografia Urbana (Ilhas de Calor)",
    difficulty: "Fácil",
    enunciation: "O fenômeno microclimático urbano denominado 'ilha de calor' caracteriza-se pela ocorrência de temperaturas médias sensivelmente mais elevadas no centro densamente edificado de uma metrópole em relação às áreas periféricas ou rurais vizinhas. As causas antrópicas diretas desse aquecimento localizado incluem:",
    options: [
      "A ampla arborização das avenidas centrais e a proliferação de lagos naturais.",
      "A intensa impermeabilização do solo com asfalto e concreto (materiais com alto albedo e capacidade de absorção e retenção de calor), a escassez de vegetação que reduz a evapotranspiração, a verticalização de espigões que bloqueia ventos e a emissão massiva de calor por motores e aparelhos de ar-condicionado.",
      "A ausência total de circulação de veículos automotores nos centros comerciais.",
      "A neve que reflete os raios solares no topo dos edifícios.",
      "A proximidade exclusiva com áreas de geleiras marinhas."
    ],
    correct: 1,
    explanation: "Nas áreas centrais densas das metrópoles, os materiais construtivos (asfalto e concreto) possuem baixa capacidade de reflexão e alto acúmulo térmico; a falta de árvores reduz o resfriamento biológico por evapotranspiração; os paredões de edifícios impedem a circulação de brisas; e a queima de combustíveis emite calor contínuo, fazendo os termômetros marcarem de 4 °C a 8 °C a mais do que nas áreas rurais adjacentes. Alternativa B."
  },
  {
    id: "hum_geo_q21",
    vestibular: "UNESP",
    year: 2024,
    subject: "Geografia",
    topic: "Biomas Brasileiros (Mata Atlântica e Hotspots de Biodiversidade)",
    difficulty: "Médio",
    enunciation: "A Mata Atlântica e o Cerrado são considerados 'hotspots' globais de biodiversidade por cientistas ambientais internacionais porque reúnem dois critérios fundamentais:",
    options: [
      "São desertos sem vegetação nativa onde há exploração exclusiva de petróleo.",
      "Possuem elevadíssimo número de espécies endêmicas (que não ocorrem em nenhum outro lugar do mundo) e sofreram severa perda de sua cobertura vegetal original (mais de 70% de destruição histórica), encontrando-se criticamente ameaçados de extinção biológica.",
      "Estão totalmente recuperados e imunes à ação humana.",
      "Apresentam exclusivamente animais migratórios do Ártico.",
      "São biomas sem qualquer relevância para o ciclo hidrológico continental."
    ],
    correct: 1,
    explanation: "O conceito ecológico de hotspot, formulado por Norman Myers em 1988, identifica ecossistemas terrestres prioritários para a conservação mundial: devem conter pelo menos 1 500 espécies de plantas vasculares endêmicas e terem perdido mais de 70% de seu habitat primitivo. No Brasil, tanto a Mata Atlântica (com cerca de 12% a 15% de remanescentes florestais) quanto o Cerrado qualificam-se nessa categoria de urgência biológica. Alternativa B."
  },
  {
    id: "hum_geo_q22",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Geografia",
    topic: "Geopolítica dos Recursos Hídricos (Conflitos pela Água)",
    difficulty: "Médio",
    enunciation: "No século XXI, a água doce e potável tornou-se um recurso natural estratégico e objeto de crescentes tensões geopolíticas internacionais. No Oriente Médio e no Norte da África, disputas pelo controle e represamento de bacias hidrográficas compartilhadas (bacias transfronteiriças) envolvem conflitos diplomáticos e militares históricos em rios vitais como o:",
    options: [
      "Rio Danúbio e Rio Reno.",
      "Rio Nilo (disputa entre Etiópia, Sudão e Egito pela Grande Barragem do Renascimento) e os Rios Tigre e Eufrates (entre Turquia, Síria e Iraque).",
      "Rio Mississipi e Rio Colorado.",
      "Rio Amazonas e Rio da Prata.",
      "Rio Volga e Rio Tâmisa."
    ],
    correct: 1,
    explanation: "Em regiões áridas e semiáridas, o controle das cabeceiras dos grandes rios internacionais gera tensões geopolíticas agudas: a megaobra da Barragem do Renascimento Etíope (GERD) na nascente do Nilo Azul alarma o Egito (que depende de 90% de suas águas doces do Nilo), e os complexos hidrelétricos do projeto GAP na Turquia represam as águas dos rios Tigre e Eufrates antes que atinjam as planícies agrícolas da Síria e do Iraque. Alternativa B."
  },
  {
    id: "hum_geo_q23",
    vestibular: "ENEM",
    year: 2023,
    subject: "Geografia",
    topic: "Demografia (Teorias Demográficas: Malthusiana e Neomalthusiana)",
    difficulty: "Médio",
    enunciation: "Formulada no final do século XVIII pelo economista inglês Thomas Malthus, a Teoria Demográfica Malthusiana sustentava que a causa principal da fome e da miséria no mundo decorria do descompasso entre o crescimento da população (que cresceria em progressão geométrica - PG) e a produção de alimentos (que cresceria apenas em progressão aritmética - PA). Mais tarde, a teoria Neomalthusiana e a teoria Reformista (Marxista) divergiram diametralmente ao afirmarem, respectivamente, que:",
    options: [
      "A miséria é causada pela revolução tecnológica e a solução é o fim imediato das cidades.",
      "Os neomalthusianos defendem que o crescimento populacional nos países pobres é o responsável pelo subdesenvolvimento (propondo controle de natalidade compulsório); enquanto os reformistas defendem que a pobreza e a falta de reformas sociais/educacionais são a verdadeira causa das altas taxas de natalidade.",
      "Malthus estava correto e os alimentos acabaram totalmente no século XIX.",
      "A população mundial diminui naturalmente sem interferência médica.",
      "Os países desenvolvidos possuem maior taxa de fecundidade que os subdesenvolvidos."
    ],
    correct: 1,
    explanation: "A teoria Neomalthusiana culpa a alta natalidade do Terceiro Mundo pela miséria e escassez de recursos públicos (postura reprodutivista conservadora). Em contrapartida, a Teoria Reformista inverte a causalidade: a miséria e a injustiça na distribuição de renda impedem o acesso a direitos básicos, e é a superação da pobreza com educação e saúde que conduz naturalmente à queda da fecundidade. Alternativa B."
  },
  {
    id: "hum_geo_q24",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Geografia",
    topic: "Geografia Agrária (Concentração Fundiária e o Índice de Gini)",
    difficulty: "Médio",
    enunciation: "O Índice de Gini da estrutura fundiária brasileira (que mede a concentração de posse da terra em uma escala de 0 a 1, onde 1 expressa a máxima concentração desigual) situa-se historicamente acima de 0,85. Essa extrema concentração de terras no Brasil tem raízes históricas seculares que remontam à:",
    options: [
      "Distribuição democrática de minifúndios promovida pelo Estatuto da Terra de 1964.",
      "Instituição colonial das Capitanias Hereditárias e Sesmarias, consolidada posteriormente pela Lei de Terras de 1850, que determinou que as terras públicas devolutas só poderiam ser adquiridas por meio de compra em dinheiro vivo.",
      "Abolição da escravidão com entrega de lotes agrícolas a todos os negros libertos.",
      "Reforma agrária integral implementada durante o Segundo Reinado.",
      "Proibição do latifúndio em toda a zona costeira brasileira."
    ],
    correct: 1,
    explanation: "A Lei de Terras de 1850 foi promulgada no mesmo ano do fim do tráfico negreiro (Lei Eusébio de Queirós) e teve como finalidade deliberada impedir que ex-escravizados e imigrantes pobres que chegavam da Europa tivessem acesso à posse da terra como posseiros. Ao transformar a terra em mercadoria acessível apenas pelo poder econômico dos grandes fazendeiros, perpetuou o monopólio latifundiário até os dias atuais. Alternativa B."
  },
  {
    id: "hum_geo_q25",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Geografia",
    topic: "Geografia Regional (A Região Geoeconômica do Centro-Sul)",
    difficulty: "Fácil",
    enunciation: "Na regionalização geoeconômica do Brasil proposta pelo geógrafo Pedro Pinchas Geiger (que divide o país em três complexos regionais: Amazônia, Nordeste e Centro-Sul), o Centro-Sul destaca-se como o coração econômico da federação porque concentra:",
    options: [
      "A menor densidade demográfica e a menor taxa de urbanização nacional.",
      "A maior parcela do Produto Interno Bruto (PIB) nacional, o parque industrial mais moderno e diversificado, a maior densidade de redes de transporte e comunicação e a agricultura de alta produtividade tecnológica.",
      "Apenas atividades extrativistas de látex e castanha-do-pará.",
      "A ausência total de cidades com mais de 500 mil habitantes.",
      "O domínio exclusivo de florestas equatoriais úmidas intocadas."
    ],
    correct: 1,
    explanation: "O complexo regional do Centro-Sul (que abrange o Sudeste, Sul e centro-sul de Goiás e Mato Grosso do Sul) concentra mais de 70% do PIB brasileiro, o núcleo da megalópole São Paulo-Rio de Janeiro, os maiores centros financeiros, universidades de excelência e a agropecuária mecanizada mais integrada às cadeias agroindustriais globais. Alternativa B."
  },
  {
    id: "hum_geo_q26",
    vestibular: "ENEM",
    year: 2024,
    subject: "Geografia",
    topic: "Climatologia (Massas de Ar no Brasil e o Fenômeno da Friagem)",
    difficulty: "Médio",
    enunciation: "Durante o inverno no Hemisfério Sul, a Massa Polar Atlântica (mPa), de natureza fria e úmida, avança com grande vigor pelo interior do continente sul-americano através das planícies do Chaco e do Pantanal, canalizada pelas bordas da Cordilheira dos Andes. Ao atingir o sul da Amazônia (estados de Rondônia e Acre), ela provoca uma queda brusca de temperatura conhecida regionalmente como:",
    options: [
      "Tufão equatorial.",
      "Friagem.",
      "Garoa orográfica.",
      "Vento Minuano.",
      "Vento Xiroco."
    ],
    correct: 1,
    explanation: "A FRIAGEM é o fenômeno típico do inverno pelo qual uma frente fria polar potente (mPa) rompe a barreira tropical e penetra no sudoeste da Amazônia ocidental, fazendo as temperaturas despencarem de habituais 32 °C para cerca de 12 °C a 15 °C em poucas horas nas capitais Rio Branco e Porto Velho. Alternativa B."
  },
  {
    id: "hum_geo_q27",
    vestibular: "UNESP",
    year: 2024,
    subject: "Geografia",
    topic: "Urbanização (Macrocefalia Urbana e Metropolização)",
    difficulty: "Fácil",
    enunciation: "O crescimento urbano explosivo e desordenado nas metrópoles dos países em desenvolvimento sem o devido investimento público correspondente em habitação social, saneamento e transporte coletivo de massa gera um fenômeno caracterizado pelo inchaço urbano, proliferação de favelas, trânsito caótico e hipertrofia do setor terciário informal (vendedores ambulantes). Esse quadro é conceituado como:",
    options: [
      "Planejamento urbanístico racional.",
      "Macrocefalia urbana com periferização segregada.",
      "Descentralização metropolitana harmônica.",
      "Gentrificação ecológica universal.",
      "Esvaziamento populacional dos centros urbanos."
    ],
    correct: 1,
    explanation: "A macrocefalia urbana ocorre quando uma ou poucas metrópoles concentram um contingente populacional e econômico desmedido e desequilibrado em relação à rede urbana do país. A incapacidade de absorção formal de trabalhadores no setor secundário empurra grande contingente para a informalidade precária e para habitações informais em áreas de risco de encostas e fundos de vale. Alternativa B."
  },
  {
    id: "hum_geo_q28",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Geografia",
    topic: "Geopolítica dos Combustíveis Fósseis e Transição Energética",
    difficulty: "Médio",
    enunciation: "A Organização dos Países Exportadores de Petróleo (OPEP), criada em 1960 em Bagdá, atua como um cartel internacional no mercado energético mundial regulando a oferta global de petróleo cru para influenciar os preços internacionais da commodity por meio da:",
    options: [
      "Adoção de cotas estritas de extração e produção diária de barris entre seus países membros.",
      "Estatização de todas as usinas hidrelétricas da América do Norte.",
      "Proibição do transporte de combustíveis por navios petroleiros.",
      "Distribuição gratuita de petróleo para países importadores.",
      "Substituição imediata de combustíveis fósseis por usinas solares em todo o deserto árabe."
    ],
    correct: 0,
    explanation: "A OPEP (liderada pela Arábia Saudita e integrada por potências petrolíferas do Golfo Pérsico, África e Venezuela, hoje expandida na aliança OPEP+) coordena as políticas de produção fixando cotas máximas para evitar superprodução e sustentar os preços do barril (Brent e WTI) em patamares lucrativos no mercado financeiro global. Alternativa A."
  },
  {
    id: "hum_geo_q29",
    vestibular: "ENEM",
    year: 2024,
    subject: "Geografia",
    topic: "Geografia Física (Intemperismo e Formação de Solos)",
    difficulty: "Fácil",
    enunciation: "O processo natural de degradação, desagregação e decomposição físico-química das rochas na superfície terrestre sob a ação do calor solar, das chuvas ácidas, do congelamento de água em fendas e da matéria orgânica decomposta é denominado:",
    options: [
      "Orogênese.",
      "Intemperismo (físico, químico e biológico), que atua na pedogênese formando o manto de solo.",
      "Subducção oceânica.",
      "Tectonismo epirogenético.",
      "Erupção efusiva."
    ],
    correct: 1,
    explanation: "O intemperismo (ou meteorização) atua transformando a rocha matriz sã em fragmentos inconsolidados (regolito). Nas regiões tropicais quentes e úmidas do Brasil, predomina o INTEMPERISMO QUÍMICO (hidrólise e lixiviação pela água das chuvas), gerando solos profundos, avermelhados e ácidos (latossolos). Alternativa B."
  },
  {
    id: "hum_geo_q30",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Geografia",
    topic: "Geopolítica (Conflito Israel-Palestina)",
    difficulty: "Médio",
    enunciation: "O histórico conflito israelo-palestino no Oriente Médio, que se intensificou dramaticamente com as guerras regionais contemporâneas, tem como pontos centrais de discórdia territorial e humanitária não resolvidos pelas negociações diplomáticas internacionais:",
    options: [
      "A posse exclusiva das reservas de ouro da Antártica.",
      "O status da cidade histórica de Jerusalém reivindicada por ambos como capital, a delimitação das fronteiras de um Estado Palestino soberano e viável (Cisjordânia e Faixa de Gaza), a proliferação de assentamentos coloniais israelenses na Cisjordânia e o direito de retorno de milhões de refugiados palestinos.",
      "A disputa pela soberania militar do Canal do Panamá.",
      "A unificação de todas as monarquias absolutistas árabes sob bandeira israelense.",
      "A partilha dos campos de petróleo do Ártico siberiano."
    ],
    correct: 1,
    explanation: "Desde a partilha da Palestina proposta pela ONU em 1947 e as guerras árabe-israelenses de 1948 e 1967 (Guerra dos Seis Dias), a solução de dois Estados é inviabilizada pelas disputas sobre Jerusalém Oriental, ocupação e bloqueio de territórios ocupados, postos de controle militar, assentamentos e o drama humanitário de gerações de refugiados. Alternativa B."
  },
  {
    id: "hum_geo_q31",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Geografia",
    topic: "Cartografia (Curvas de Nível e Relevo)",
    difficulty: "Médio",
    enunciation: "Em cartas topográficas altimétricas, o relevo do terreno é representado por meio de curvas de nível (linhas hipsométricas que unem pontos de mesma altitude absoluta). Quando as curvas de nível estão traçadas no mapa muito próximas umas das outras, isso indica que o terreno naquela área apresenta:",
    options: [
      "Uma planície aluvial perfeitamente horizontal e sem desníveis.",
      "Uma vertente íngreme com declividade acentuada (escarpa ou encosta montanhosa de subida difícil).",
      "Um lago profundo de água calma.",
      "Uma depressão circular absolutamente plana.",
      "Uma duna móvel sotavento."
    ],
    correct: 1,
    explanation: "Nas representações topográficas: curvas de nível muito próximas e densas indicam rápida variação de altitude em pequena distância horizontal (terreno de forte declive ou encosta íngreme). Quando estão amplamente espaçadas, indicam relevo plano ou suavemente ondulado. Alternativa B."
  },
  {
    id: "hum_geo_q32",
    vestibular: "ENEM",
    year: 2023,
    subject: "Geografia",
    topic: "Geografia Agrária (Agrotóxicos e Agricultura Sustentável)",
    difficulty: "Fácil",
    enunciation: "O Brasil figura entre os maiores consumidores mundiais de defensivos agrícolas químicos (agrotóxicos/pesticidas). Como alternativa sustentável à contaminação de mananciais hídricos e intoxicação de trabalhadores e alimentos pelo uso intensivo de venenos químicos, a agroecologia preconiza a adoção de:",
    options: [
      "Monoculturas transgênicas contínuas sem descanso da terra.",
      "Manejo integrado de pragas com controle biológico natural, rotação diversificada de culturas e adubação verde orgânica.",
      "Queimadas anuais deliberadas para limpar o solo.",
      "Irrigação por inundação total com água salina.",
      "Eliminação de todos os insetos e microrganismos do solo por radiação."
    ],
    correct: 1,
    explanation: "A agroecologia baseia-se em princípios ecológicos para construir sistemas agrícolas sustentáveis e resilientes: utiliza predadores naturais de pragas (joaninhas, vespas parasitoides e fungos entomopatogênicos), consórcio de espécies e ciclagem de nutrientes com compostagem orgânica, reduzindo custos e eliminando resíduos tóxicos nos alimentos. Alternativa B."
  },
  {
    id: "hum_geo_q33",
    vestibular: "UNESP",
    year: 2023,
    subject: "Geografia",
    topic: "Geopolítica (A Guerra na Ucrânia e a Ordem Euroasiática)",
    difficulty: "Médio",
    enunciation: "A invasão militar da Ucrânia pelas forças armadas da Federação Russa em fevereiro de 2022 reconfigurou as alianças geopolíticas e militares na Europa, tendo como uma de suas causas declaradas por Moscou a oposição à:",
    options: [
      "Entrada da Ucrânia na Liga Árabe.",
      "Expansão contínua da Organização do Tratado do Atlântico Norte (OTAN) em direção às fronteiras históricas da Rússia nos países do antigo bloco soviético.",
      "Desmilitarização pacífica de toda a península escandinava.",
      "Criação de uma moeda comum entre os países da América Latina.",
      "Privatização do estreito de Gibraltar."
    ],
    correct: 1,
    explanation: "Desde a dissolução da União Soviética, a OTAN incorporou sucessivamente ex-repúblicas soviéticas (como Estônia, Letônia e Lituânia) e países do Leste Europeu (Polônia, Romênia e República Tcheca). A perspectiva de adesão da Ucrânia à aliança militar ocidental foi considerada pelo governo russo como uma ameaça inaceitável à sua segurança estratégica e área de influência tradicional, deflagrando a invasão militar. Alternativa B."
  },
  {
    id: "hum_geo_q34",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Geografia",
    topic: "Biomas Brasileiros (O Bioma Caatinga e as Adaptações)",
    difficulty: "Fácil",
    enunciation: "Único bioma com limites geográficos restritos exclusivamente ao território do Brasil, a Caatinga recobre vasta área do polígono das secas nordestino. A vegetação nativa característica desse bioma é classificada fitogeograficamente como caducifólia xerófila porque:",
    options: [
      "Permanece densamente verde e com folhas largas perenes durante todo o ano.",
      "Perde sazonalmente suas folhas durante a estiagem prolongada para evitar a desidratação foliar e possui espinhos, raízes superficiais para captação rápida de chuva e caules que armazenam água.",
      "É formada exclusivamente por pinheiros coníferos adaptados a nevascas.",
      "Sobrevive apenas submersa em águas salobras litorâneas.",
      "Não realiza fotossíntese por falta de radiação solar."
    ],
    correct: 1,
    explanation: "A vegetação da Caatinga (palavra de origem tupi que significa 'mata branca' devido ao aspecto esbranquiçado dos troncos secos na estiagem) perde todas as suas folhas caducas na estação seca para zerar a transpiração foliar; com as primeiras chuvas torrenciais, brota com vigor em poucos dias, demonstrando notável resiliência adaptativa às secas do semiárido. Alternativa B."
  },
  {
    id: "hum_geo_q35",
    vestibular: "ENEM",
    year: 2024,
    subject: "Geografia",
    topic: "Geografia Econômica (A Indústria 4.0 e a Automação)",
    difficulty: "Médio",
    enunciation: "A chamada Quarta Revolução Industrial (Indústria 4.0) caracteriza-se pela convergência entre sistemas ciberfísicos, computação em nuvem, Internet das Coisas (IoT), inteligência artificial generativa e robótica colaborativa no chão de fábrica. No mundo do trabalho e na dinâmica do emprego global, essa transformação tecnológica tem provocado:",
    options: [
      "O aumento maciço de postos de trabalho para operários com baixa qualificação educacional.",
      "A crescente polarização do mercado de trabalho, com eliminação acelerada de ocupações repetitivas e burocráticas pela automação algorítmica e valorização de profissionais altamente qualificados em ciência de dados e engenharia, ampliando o desemprego estrutural.",
      "A volta do artesanato medieval como principal setor da economia mundial.",
      "A proibição do teletrabalho e do comércio eletrônico em âmbito internacional.",
      "A redução total dos lucros das empresas transnacionais de tecnologia."
    ],
    correct: 1,
    explanation: "A revolução ciberfísica e da inteligência artificial gera o fenômeno do DESEMPREGO ESTRUTURAL: a automação de processos não apenas substitui o trabalho braçal da montagem, mas atinge funções analíticas intermediárias (contabilidade, revisão, teleatendimento e suporte técnico), exigindo requalificação profissional contínua e aprofundando a desigualdade entre trabalhadores qualificados e despossuídos de capital digital. Alternativa B."
  },
  // ==========================================
  // BLOCO 3: FILOSOFIA & SOCIOLOGIA (35 QUESTÕES)
  // ==========================================
  {
    id: "hum_fil_q1",
    vestibular: "ENEM",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Antiga (Sócrates e a Maiêutica)",
    difficulty: "Fácil",
    enunciation: "Ao contrário dos sofistas, que cobravam honorários para ensinar técnicas retóricas de persuasão independentemente da verdade dos fatos, o filósofo ateniense Sócrates (470–399 a.C.) utilizava o diálogo nas ruas e praças públicas de Atenas baseado em dois momentos pedagógicos complementares: a ironia e a maiêutica. A finalidade central do método socrático era:",
    options: [
      "Impor suas próprias doutrinas dogmáticas aos jovens atenienses.",
      "Desconstruir falsas certezas e preconceitos enraizados (ironia) para que o interlocutor 'desse à luz' (maiêutica) a conceitos universais e ao conhecimento verdadeiro dentro de si mesmo.",
      "Ensinar táticas militares de combate aos espartanos.",
      "Convencer os cidadãos a adorarem os deuses olímpicos tradicionais.",
      "Cobrar impostos municipais para o tesouro de Delos."
    ],
    correct: 1,
    explanation: "Sócrates comparava seu ofício ao de sua mãe Fenarete, que era parteira: a maiêutica (do grego maieutiké, arte do parto) não consistia em depositar conhecimento de fora para dentro, mas em conduzir o indivíduo, por meio de perguntas perspicazes, a reconhecer sua própria ignorância ('só sei que nada sei') e a conceber a verdade racional a partir do seu próprio intelecto. Alternativa B."
  },
  {
    id: "hum_fil_q2",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Antiga (Platão e o Mito da Caverna)",
    difficulty: "Médio",
    enunciation: "No Livro VII de 'A República', Platão narra a célebre Alegoria (Mito) da Caverna, na qual prisioneiros acorrentados desde a infância no fundo de uma gruta escura enxergam apenas sombras projetadas na parede e tomam essas sombras pela realidade absoluta. Na teoria do conhecimento platônica, essa alegoria simboliza a passagem:",
    options: [
      "Do sistema feudal para o capitalismo industrial mercantil.",
      "Do mundo sensível das aparências ilusórias e da mera opinião (doxa) para o mundo inteligível das Ideias perfeitas, imutáveis e verdadeiras alcançadas pela razão filosófica (episteme).",
      "Da vida civilizada para o estado de natureza hobbesiano.",
      "Da monarquia absolutista para o império militar.",
      "Do politeísmo grego para o cristianismo medieval."
    ],
    correct: 1,
    explanation: "Na metafísica dualista de Platão, o interior da caverna representa o Mundo Sensível (captado pelos sentidos falíveis, transitório e repleto de cópias imperfeitas), enquanto o mundo exterior iluminado pelo Sol representa o Mundo Inteligível das Ideias ou Formas perfeitas e eternas, cujo ápice é a Ideia do Bem, alcançável somente pela dialética racional. Alternativa B."
  },
  {
    id: "hum_fil_q3",
    vestibular: "ENEM",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Sociologia Clássica (Karl Marx: Mais-Valia e Alienação)",
    difficulty: "Médio",
    enunciation: "Em sua monumental obra 'O Capital' (1867), o filósofo e sociólogo alemão Karl Marx investiga o mecanismo nuclear de exploração da força de trabalho no modo de produção capitalista. Marx demonstra que o lucro burguês tem origem na apropriação indébita do trabalho não pago ao operário, conceito denominado:",
    options: [
      "Solidariedade mecânica.",
      "Mais-valia (absoluta e relativa).",
      "Anomia estrutural.",
      "Ação social tradicional.",
      "Fato social coercitivo."
    ],
    correct: 1,
    explanation: "A teoria da Mais-Valia de Marx estabelece que o trabalhador assalariado produz durante sua jornada um valor consideravelmente superior ao que recebe na forma de salário (que cobre apenas o mínimo necessário para a reprodução de sua força de trabalho). A diferença entre o valor total criado pelo operário e o salário pago é a mais-valia, que é apropriada privadamente pelo capitalista proprietário dos meios de produção como lucro. Alternativa B."
  },
  {
    id: "hum_fil_q4",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Sociologia Clássica (Émile Durkheim e o Fato Social)",
    difficulty: "Fácil",
    enunciation: "Considerado um dos fundadores da sociologia como ciência autônoma, Émile Durkheim (1858–1917) definiu o objeto científico próprio dos estudos sociológicos como sendo o 'Fato Social'. De acordo com as 'Regras do Método Sociológico', para que um fenômeno seja considerado um fato social, ele deve apresentar obrigatoriamente três características fundamentais:",
    options: [
      "Ser individual, espontâneo e passageiro.",
      "Ser exterior ao indivíduo, coercitivo (exercer pressão social punitiva ou moral) e geral (estar presente na totalidade ou maioria dos membros da sociedade).",
      "Estar baseado exclusivamente em impulsos biológicos genéticos.",
      "Ser sempre voluntário e acordado democraticamente.",
      "Ocorrer apenas no interior das igrejas e conventos."
    ],
    correct: 1,
    explanation: "Para Durkheim, os fatos sociais existem antes do nascimento do indivíduo (exterioridade: como a língua, a moeda e as leis), impõem-se a ele independentemente de sua vontade por meio de sanções legais ou morais (coercitividade) e manifestam-se coletivamente em todo o corpo social (generalidade), devendo ser estudados pelo cientista social 'como coisas'. Alternativa B."
  },
  {
    id: "hum_fil_q5",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Sociologia Clássica (Max Weber e os Tipos de Dominação)",
    difficulty: "Médio",
    enunciation: "Para o sociólogo alemão Max Weber (1864–1920), o poder converte-se em dominação legítima (autoridade aceita pelos governados) quando encontra fundamentos de legitimação social. Weber categorizou a dominação legítima em três tipos ideais puros:",
    options: [
      "Dominação feudal, socialista e anarquista.",
      "Dominação tradicional (baseada no hábito arraigado e no respeito aos costumes do passado, como nos patriarcados), carismática (baseada na devoção emocional extraordinária às qualidades de um líder) e racional-legal/burocrática (baseada em leis impessoais, normas escritas e competência técnica).",
      "Dominação militarista, teocrática e tirânica sem regras.",
      "Dominação financeira, operária e camponesa.",
      "Dominação familiar, eclesiástica e tribal."
    ],
    correct: 1,
    explanation: "Na tipologia de Weber: 1) Dominação Tradicional: legitimada pela santidade dos costumes antigos ('sempre foi assim', reis e anciãos); 2) Dominação Carismática: legitimada pelo carisma pessoal e dons proféticos ou heróicos do líder (Gandhi, Martin Luther King, generais vitoriosos); 3) Dominação Racional-Legal: típica do Estado moderno e das corporações, onde a obediência não é devida à pessoa, mas à lei impessoal e à ordem legal instituída. Alternativa B."
  },
  {
    id: "hum_fil_q6",
    vestibular: "ENEM",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Política Moderna (Maquiavel e 'O Príncipe')",
    difficulty: "Médio",
    enunciation: "Ao escrever 'O Príncipe' em 1513, Nicolau Maquiavel promoveu uma profunda ruptura com a filosofia política clássica greco-romana e com a teologia política cristã medieval ao afirmar que a ação do governante eficaz deve ser pautada pela 'verdade efetiva das coisas' (verità effettuale) e não por mundos utópicos imaginários. Na concepção maquiaveliana, a política deve ser compreendida como:",
    options: [
      "A submissão irrestrita das decisões de Estado aos dez mandamentos da Igreja Católica.",
      "Uma atividade secular autônoma regida por lógica própria, orientada pela manutenção do poder e da estabilidade do Estado, exigindo do governante a combinação sábia entre a virtù (capacidade de ação estratégica e audácia) e a fortuna (as circunstâncias e contingências históricas).",
      "A busca ingênua da santidade pessoal por meio da renúncia aos bens materiais.",
      "A aplicação mecânica de leis matemáticas sem flexibilidade política.",
      "A entrega de todo o poder a conselhos populares de plebeus."
    ],
    correct: 1,
    explanation: "Maquiavel é o fundador da ciência política moderna porque desvinculou a ética política da moral religiosa privada: o governante virtuoso é aquele capaz de ler as circunstâncias (fortuna) e agir com firmeza (virtù) — sabendo ser 'leão' para amedrontar os lobos e 'raposa' para desvencilhar-se das armadilhas —, pois na política pública o fim supremo é a preservação da pátria e da paz social. Alternativa B."
  },
  {
    id: "hum_fil_q7",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Moderna (Contratualismo: Thomas Hobbes)",
    difficulty: "Médio",
    enunciation: "Em 'Leviatã' (1651), o filósofo inglês Thomas Hobbes descreve o 'estado de natureza' hipotético da humanidade (a vida sem um poder político comum que mantenha todos em respeito) como uma condição terrível de guerra generalizada de 'todos contra todos' (bellum omnium contra omnes), onde o homem é o lobo do próprio homem (homo homini lupus). Para escapar da morte violenta e da miséria, os homens decidem firmar um pacto social no qual:",
    options: [
      "Instituem uma democracia direta anarquista sem tribunais nem polícia.",
      "Renunciam mutuamente à sua liberdade natural irrestrita e transferem integralmente o monopólio da força e da autoridade para um soberano absoluto (o Estado Leviatã), encarregado de garantir a ordem, a paz e a segurança coletiva.",
      "Aboliram a propriedade privada estabelecendo cooperativas camponesas.",
      "Concedem o poder vitalício à Igreja Católica de Roma.",
      "Concordam em viver em constante conflito sem nenhum governo."
    ],
    correct: 1,
    explanation: "Para Hobbes, a razão ensina aos homens que o pior dos males é a morte violenta no estado de natureza sem leis. Pelo contrato social, os indivíduos abdicam da liberdade selvagem em troca da preservação da própria vida, instituindo o Estado Soberano com poder incontestável para fazer cumprir os pactos pela espada da justiça. Alternativa B."
  },
  {
    id: "hum_fil_q8",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Moderna (Contratualismo: John Locke)",
    difficulty: "Médio",
    enunciation: "Considerado o pai do liberalismo político clássico, o filósofo inglês John Locke sustentava em seu 'Segundo Tratado sobre o Governo Civil' (1689) que no estado de natureza os indivíduos já possuem direitos naturais inalienáveis (como o direito à vida, à liberdade e à propriedade privada fruto do trabalho). Para Locke, a finalidade exclusiva para a qual os homens instituem o governo civil por meio do consentimento mútuo é:",
    options: [
      "Concentrar todo o poder tirânico nas mãos de um monarca de direito divino.",
      "Proteger e garantir a fruição pacífica desses direitos naturais preexistentes, assistindo aos cidadãos o legítimo direito de rebelião e destituição do governo caso este descumpra sua missão e viole a propriedade ou a liberdade.",
      "Extinguir todas as liberdades individuais em favor do exército.",
      "Instituir a igualdade material forçada impedindo a poupança.",
      "Subordinar o Estado britânico às diretrizes feudais da corte francesa."
    ],
    correct: 1,
    explanation: "Diferente de Hobbes, Locke defende o governo representativo com poderes limitados e baseado no consentimento dos governados. Se o governante atenta contra a vida, a liberdade ou a propriedade dos cidadãos, ele quebra o contrato de confiança (trust), conferindo ao povo o 'Direito de Resistência' (ou direito de revolução) para derrubar o tirano e instituir nova ordem legítima. Alternativa B."
  },
  {
    id: "hum_fil_q9",
    vestibular: "ENEM",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Moderna (Contratualismo: Jean-Jacques Rousseau)",
    difficulty: "Médio",
    enunciation: "Em sua clássica obra 'Discurso sobre a Origem e os Fundamentos da Desigualdade entre os Homens' (1755), o filósofo iluminista Jean-Jacques Rousseau sustenta que 'o homem nasce bom, mas a sociedade o corrompe'. Segundo Rousseau, a raiz histórica de todas as desigualdades sociais, guerras e misérias humanas teve início quando:",
    options: [
      "O ser humano inventou a agricultura ecológica sustentável.",
      "O primeiro indivíduo cercou um pedaço de terra e disse 'isto é meu', encontrando pessoas ingênuas o suficiente para acreditar nele, fundando assim a propriedade privada.",
      "A humanidade adotou a escrita alfabética.",
      "Os reis filósofos deixaram de governar a Grécia.",
      "Os cientistas descobriram a lei da gravitação universal."
    ],
    correct: 1,
    explanation: "Para Rousseau, no estado de natureza original o ser humano vivia em harmonia como o 'bom selvagem', guiado pela autopreservação e pela compaixão natural. O surgimento da propriedade privada e da divisão social do trabalho destruiu a igualdade primordial, engendrando a vaidade, a exploração, o egoísmo e as leis criadas pelos ricos para proteger seus privilégios contra os despossuídos. Alternativa B."
  },
  {
    id: "hum_fil_q10",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Ética e Iluminismo (Immanuel Kant e o Imperativo Categórico)",
    difficulty: "Médio",
    enunciation: "Na filosofia moral de Immanuel Kant (1724–1804), a ação moralmente reta deve ser guiada não pela busca de recompensas egoístas ou medo de punições, mas pelo dever racional incondicional formulado no célebre 'Imperativo Categórico'. Uma das formulações clássicas desse princípio ético universal afirma:",
    options: [
      "'Age de modo que tuas paixões sensíveis determinem sempre o teu interesse financeiro.'",
      "'Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne uma lei universal da natureza.'",
      "'Os fins justificam quaisquer meios empregados.'",
      "'Faz o que o líder mandar sem hesitação.'",
      "'Busca o prazer imediato do corpo sem medir consequências morais.'"
    ],
    correct: 1,
    explanation: "A ética deontológica (ética do dever) de Kant é formal e universal: uma ação só possui genuíno valor moral se for praticada 'por dever' e puder ser universalizada sem contradição lógica (ex: mentir não pode ser universalizado, pois se todos mentissem, a própria ideia de verdade e promessa deixaria de existir). Na segunda formulação, Kant exige tratar a humanidade sempre como um fim em si mesma, e nunca meramente como um meio instrumental. Alternativa B."
  },
  {
    id: "hum_fil_q11",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Contemporânea (Hannah Arendt e a Banalidade do Mal)",
    difficulty: "Médio",
    enunciation: "Ao cobrir em 1961 o julgamento em Jerusalém do oficial nazista Adolf Eichmann (responsável pela logística ferroviária de transporte de milhões de judeus para os campos de extermínio), a filósofa judia-alemã Hannah Arendt formulou a seminal tese sobre a 'Banalidade do Mal'. De acordo com Arendt, Eichmann não era um monstro demoníaco dotado de perversidade patológica extraordinária, mas sim um:",
    options: [
      "Soldado inocente que não sabia o que acontecia nos campos de concentração.",
      "Burocrata medíocre, incapaz de pensar criticamente por si mesmo e de julgar as consequências de seus atos, que executava ordens com zelo cego para ascender em sua carreira profissional no aparato totalitário nazista.",
      "Agente duplo infiltrado pelos Aliados.",
      "Psicopata que confessou ter prazer pessoal nos homicídios.",
      "Filósofo adepto do imperativo categórico kantiano."
    ],
    correct: 1,
    explanation: "A tese de Hannah Arendt em 'Eichmann em Jerusalém' provocou grande debate ao alertar para o fato aterrador de que os maiores crimes da história humana moderna não foram praticados exclusivamente por sádicos fanáticos, mas por homens comuns e burocratas eficientes afetados pelo que chamou de 'ausência de pensamento' (thoughtlessness): a renúncia à faculdade crítica de julgar moralmente as ordens recebidas. Alternativa B."
  },
  {
    id: "hum_fil_q12",
    vestibular: "ENEM",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Sociologia Contemporânea (Zygmunt Bauman e a Modernidade Líquida)",
    difficulty: "Fácil",
    enunciation: "O sociólogo polonês Zygmunt Bauman (1925–2017) utilizou a metáfora da 'Modernidade Líquida' para diagnosticar as relações sociais e os valores humanos na sociedade globalizada contemporânea. Em oposição à fase 'sólida' anterior (com empregos estáveis, laços comunitários duradouros e projetos de longo prazo), a sociedade líquida caracteriza-se pela:",
    options: [
      "Rigidez inquebrantável das normas familiares tradicionais.",
      "Fluidez, efemeridade, desregulamentação, fragilidade dos laços afetivos e imediatismo consumista, onde compromissos duradouros são evitados e tudo é concebido para descarte rápido.",
      "Ausência de tecnologia e de redes sociais digitais.",
      "Igualdade absoluta entre todas as classes sociais.",
      "Solidariedade mecânica em pequenas aldeias rurais."
    ],
    correct: 1,
    explanation: "Na modernidade líquida de Bauman, as instituições, laços de amizade, relações amorosas ('Amor Líquido') e identidades perderam a solidez de outrora: tornaram-se fluidos, descartáveis e mutáveis como os líquidos, dominados pela lógica do consumo hedonista, pela incerteza profissional crônica e pela solidão individualista disfarçada de hiperconectividade virtual. Alternativa B."
  },
  {
    id: "hum_fil_q13",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Sociologia Contemporânea (Pierre Bourdieu: Habitus e Capital Cultural)",
    difficulty: "Médio",
    enunciation: "O sociólogo francês Pierre Bourdieu (1930–2002) investigou os mecanismos invisíveis pelos quais a escola e as instituições culturais perpetuam a desigualdade social. Em suas pesquisas, Bourdieu introduziu os conceitos de 'habitus' e 'capital cultural' para demonstrar que:",
    options: [
      "A escola é um espaço neutro de pura meritocracia onde apenas o esforço individual define o sucesso de cada estudante.",
      "O sistema escolar valoriza e recompensa o capital cultural prévio (gostos, linguagem culta e referências artísticas) herdado pelas classes dominantes de suas famílias, convertendo privilégios sociais herdados em supostos 'méritos individuais' e legitimando a reprodução social pela violência simbólica.",
      "Todos os estudantes chegam à escola exatamente com a mesma bagagem cultural e financeira.",
      "A cultura erudita é naturalmente inata a todas as crianças desde o nascimento.",
      "O capital econômico não possui qualquer influência sobre a trajetória acadêmica."
    ],
    correct: 1,
    explanation: "Para Bourdieu, a 'ideologia do dom e da meritocracia' é uma falácia que encobre a reprodução social das elites. As crianças das classes privilegiadas adquirem naturalmente em casa o 'habitus' culto e os códigos linguísticos e culturais que a escola exige e avalia como excelência intelectual, enquanto os filhos de trabalhadores têm sua cultura de origem desvalorizada por um processo sutil de VIOLÊNCIA SIMBÓLICA. Alternativa B."
  },
  {
    id: "hum_fil_q14",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Contemporânea (Michel Foucault: Biopolítica e Sociedade Disciplinar)",
    difficulty: "Médio",
    enunciation: "Em obras como 'Vigiar e Punir' (1975) e 'História da Sexualidade', o filósofo francês Michel Foucault analisou a transformação histórica dos mecanismos de exercício do poder estatal a partir do século XVIII. Ao transitar do poder soberano clássico ('fazer morrer ou deixar viver') para a biopolítica moderna, o poder passou a operar preferencialmente como:",
    options: [
      "Uma força concentrada exclusivamente no palácio real e nos castelos da nobreza.",
      "Um poder disciplinar capilarizado sobre os corpos individuais nas instituições de clausura (escolas, fábricas, quartéis e prisões panópticas) articulado a uma 'biopolítica' que gerencia e regula a vida da população (taxas de natalidade, longevidade, higiene pública e saúde das massas).",
      "A abolição total das cadeias e dos hospitais psiquiátricos em prol da liberdade anárquica.",
      "Um pacto de paz voluntário supervisionado pela ONU.",
      "O controle puramente divino da alma sem intervenção sobre os corpos."
    ],
    correct: 1,
    explanation: "Foucault desvenda que o poder moderno é 'microfísico': ele não atua apenas de cima para baixo pela repressão violenta, mas molda e adestra corpos dóceis e produtivos através de disciplinas horárias, vigilância silenciosa (o modelo do Panóptico de Bentham) e controle estatístico-biopolítico da população ('fazer viver e deixar morrer'). Alternativa B."
  },
  {
    id: "hum_fil_q15",
    vestibular: "ENEM",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Pensamento Social Brasileiro (Sérgio Buarque de Holanda e o 'Homem Cordial')",
    difficulty: "Médio",
    enunciation: "No clássico ensaio sociológico 'Raízes do Brasil' (1936), Sérgio Buarque de Holanda formulou o célebre e amiúde mal compreendido conceito de 'homem cordial' para caracterizar a herança cultural colonizadora dos brasileiros. Para o autor, a 'cordialidade' do brasileiro não significa simples gentileza ou bondade angelical, mas sim:",
    options: [
      "A submissão pacífica a todos os governos autoritários sem resistência.",
      "O predomínio das relações afetivas, emotivas e personalistas (originadas no coração, do latim 'cor/cordis'), que recusa a impessoalidade e a separação estrita entre a esfera pública e a esfera privada, resultando no patrimonialismo e no nepotismo na administração estatal.",
      "A perfeição técnica dos servidores públicos burocráticos do Estado.",
      "O respeito rigoroso às leis de trânsito e aos contratos empresariais.",
      "A aversão à música popular e às festividades de carnaval."
    ],
    correct: 1,
    explanation: "O 'homem cordial' é movido pelas emoções do coração (que podem se manifestar tanto na hospitalidade calorosa quanto na violência passional instantânea). Esse traço dificulta a construção da verdadeira cidadania republicana moderna, pois o indivíduo tende a tratar os negócios públicos do Estado como extensões dos interesses e afetos de sua família e amigos íntimos (patrimonialismo e clientelismo). Alternativa B."
  },
  {
    id: "hum_fil_q16",
    vestibular: "UNESP",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Pensamento Social Brasileiro (Florestan Fernandes e o Racismo Estrutural)",
    difficulty: "Médio",
    enunciation: "Em 'A Integração do Negro na Sociedade de Classes' (1964), o sociólogo Florestan Fernandes desconstruiu o mito da 'democracia racial' formulado pela ideologia oficial brasileira. Fernandes demonstrou que a abolição da escravidão em 1888 ocorreu sob um modelo que:",
    options: [
      "Integrou plenamente os negros libertos como proprietários e cidadãos assalariados de classe média.",
      "Abandonou a população negra recém-liberta à própria sorte nas periferias sem indenização, terras ou educação formal, substituindo-a preferencialmente pela imigração subsidiada de trabalhadores europeus brancos e empurrando os negros para a marginalidade socioeconômica estrutural.",
      "Garantiu cotas universitárias imediatas para todos os ex-escravizados.",
      "Eliminou completamente o preconceito de cor e de raça no mercado de trabalho fabril.",
      "Expropriou os fazendeiros escravistas em benefício dos quilombos."
    ],
    correct: 1,
    explanation: "A análise pioneira de Florestan Fernandes evidenciou que a abolição não veio acompanhada de reformas democráticas de inclusão: a elite cafeeira preferiu financiar a imigração europeia (projetos de 'branqueamento'), relegando os afro-brasileiros ao subproletariado informal e à estigmatização racial sistemática, demonstrando que a escravidão foi abolida na forma jurídica, mas permaneceu viva na estrutura das desigualdades de classes. Alternativa B."
  },
  {
    id: "hum_fil_q17",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia da Linguagem e Teoria Crítica (A Escola de Frankfurt e a Indústria Cultural)",
    difficulty: "Médio",
    enunciation: "Em 'Dialética do Esclarecimento' (1947), os teóricos da Escola de Frankfurt Theodor Adorno e Max Horkheimer cunharam a expressão 'Indústria Cultural' (Kulturindustrie) para criticar a produção massificada de arte e entretenimento no capitalismo tardio. Para os autores, os produtos da indústria cultural (como músicas comerciais padronizadas, novelas e filmes de clichê) funcionam principalmente para:",
    options: [
      "Despertar o pensamento crítico e revolucionário das classes trabalhadoras contra a exploração patronal.",
      "Padronizar o gosto popular, promover o conformismo alienante e transformar a arte em mercadoria de consumo rápido, gerando passividade ideológica e integração dócil das massas ao sistema capitalista.",
      "Recuperar as tradições folclóricas rurais de resistência política.",
      "Estimular a leitura de clássicos da filosofia grega entre os jovens operários.",
      "Garantir a autonomia estética irrestrita dos artistas independentes."
    ],
    correct: 1,
    explanation: "Adorno e Horkheimer denunciam que o entretenimento das indústrias cinematográficas e fonográficas não liberta o indivíduo após a estafante jornada de trabalho, mas o adestra no mesmo ritmo mecânico da fábrica: oferece diversão fácil e previsível que anestesia o sofrimento, impede a reflexão autônoma e perpetua o status quo capitalista sob a ilusão de livre escolha de mercadorias. Alternativa B."
  },
  {
    id: "hum_fil_q18",
    vestibular: "ENEM",
    year: 2023,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Antiga (Aristóteles e a 'Justa Medida')",
    difficulty: "Fácil",
    enunciation: "Em sua clássica obra 'Ética a Nicômaco', o filósofo grego Aristóteles (384–322 a.C.) sustenta que o fim supremo de todas as ações humanas é a felicidade (eudaimonia). Para alcançar essa felicidade ética, o ser humano deve orientar suas escolhas morais de acordo com a razão, praticando a virtude como a 'justa medida' (mesotês ou meio-termo de ouro). Segundo essa concepção, a virtude da coragem é o meio-termo virtuoso entre:",
    options: [
      "A avareza e a ostentação perdulária.",
      "A covardia (deficiência por medo excessivo) e a temeridade imprudente (excesso irrefletido de audácia).",
      "A preguiça e a ambição desmedida.",
      "A ignorância e a sabedoria divina.",
      "A tristeza e a euforia cega."
    ],
    correct: 1,
    explanation: "Para Aristóteles, a virtude moral é um hábito racional equilibrado situado entre dois vícios extremos: um vício por carência ou defeito e um vício por excesso. No caso do perigo, a covardia é o defeito (falta de ânimo e fuga covarde) e a temeridade é o excesso tolo (lançar-se desnecessariamente à morte sem prudência); a virtude reside no justo meio: a CORAGEM serena. Alternativa B."
  },
  {
    id: "hum_fil_q19",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Moderna (René Descartes e o Racionalismo)",
    difficulty: "Fácil",
    enunciation: "Em 'Discurso sobre o Método' (1637) e 'Meditações Metafísicas', René Descartes propôs a dúvida metódica radical como instrumento para encontrar uma verdade indubitável que servisse de alicerce inabalável para toda a ciência moderna. Ao duvidar sistematicamente dos sentidos, das certezas matemáticas e da própria existência do mundo material, Descartes deparou-se com a primeira verdade autoevidente expressa no célebre axioma:",
    options: [
      "'O homem nasce livre, mas por toda parte encontra-se a ferros.'",
      "'Penso, logo existo' (Cogito, ergo sum).",
      "'Deus está morto e nós o matamos.'",
      "'O inferno são os outros.'",
      "'Tudo flui, nada permanece idêntico.'"
    ],
    correct: 1,
    explanation: "Mesmo que um gênio maligno ou demônio enganador me iluda em todas as minhas percepções sensoriais e cálculos, para ser enganado e duvidar eu preciso necessariamente estar pensando; e se estou pensando, sou indubitavelmente uma coisa pensante que existe (res cogitans). Eis a pedra fundamental do racionalismo cartesiano moderno. Alternativa B."
  },
  {
    id: "hum_fil_q20",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Moderna (Empirismo de David Hume e a Crítica da Causalidade)",
    difficulty: "Difícil",
    enunciation: "O filósofo escocês David Hume (1711–1776), expoente do empirismo britânico radical, desferiu uma contundente crítica ao conceito racionalista de causalidade necessária na natureza (a ideia de que a causa produz inevitavelmente o efeito). Segundo Hume, nossa crença inabalável de que o Sol nascerá amanhã ou de que uma bola de bilhar fará outra mover-se ao colidir funda-se não em uma dedução puramente racional apriorística, mas sim:",
    options: [
      "Em uma revelação divina descrita nas escrituras sagradas.",
      "No hábito e no costume psicológico decorrentes da repetição contínua de experiências passadas (conjunção constante de eventos associados na mente humana).",
      "Em leis inatas gravadas na alma antes do nascimento.",
      "No imperativo categórico da vontade moral.",
      "Na teoria das ideias perfeitas de Platão."
    ],
    correct: 1,
    explanation: "Para Hume, nunca observamos a conexão causal necessária em si mesma, apenas a sucessão temporal repetida de dois fenômenos contíguos (evento A seguido do evento B). A mente humana, acostumada à regularidade do hábito, projeta sobre a natureza uma necessidade lógica que não passa de uma expectativa psicológica subjetiva. Essa crítica 'despertou Kant de seu sono dogmático'. Alternativa B."
  },
  {
    id: "hum_fil_q21",
    vestibular: "ENEM",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Sociologia da Cultura (Indústria Cultural e Redes Sociais)",
    difficulty: "Médio",
    enunciation: "No ecossistema digital contemporâneo dominado por algoritmos de inteligência artificial de grandes plataformas tecnológicas ('Big Techs'), as redes sociais baseiam seu modelo de negócios no chamado 'capitalismo de vigilância' (termo da socióloga Shoshana Zuboff). Esse arranjo econômico caracteriza-se pela:",
    options: [
      "Produção de aparelhos de telefone gratuitos sem coleta de dados privados.",
      "Extração massiva e silenciosa de dados comportamentais íntimos dos usuários para prever e modificar seus comportamentos futuros e comercializá-los com anunciantes e corporações publicitárias em busca de engajamento viciante.",
      "Distribuição equitativa de todos os lucros publicitários aos criadores de conteúdo amadores.",
      "Neutralidade algorítmica rigorosa orientada para a promoção da verdade científica.",
      "Proibição absoluta de perfis com finalidades comerciais."
    ],
    correct: 1,
    explanation: "No capitalismo de vigilância contemporâneo, a experiência humana é tomada como matéria-prima comportamental gratuita: cliques, curtidas, pausas na tela e históricos de geolocalização são transformados em fluxos de predição comportamental altamente lucrativos que mantêm os indivíduos presos a 'bolhas de filtro' de estímulos dopaminérgicos para maximizar a monetização de anúncios. Alternativa B."
  },
  {
    id: "hum_fil_q22",
    vestibular: "UNESP",
    year: 2023,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Contemporânea (Nietzsche: A Genealogia da Moral e o Niilismo)",
    difficulty: "Médio",
    enunciation: "O filósofo alemão Friedrich Nietzsche (1844–1900) realizou uma implacável crítica à tradição filosófica socrático-platônica e à moralidade judaico-cristã ocidental. Em 'Genealogia da Moral' e 'Crepúsculo dos Ídolos', Nietzsche denuncia a moral tradicional como uma 'moral de rebanho ou dos escravos', acusando-a de:",
    options: [
      "Incentivar o vigor físico, a celebração artística da vida terrena e a vontade de potência.",
      "Promover o ressentimento dos fracos e a negação dos instintos vitais do corpo, glorificando a submissão, a culpa e a resignação passiva com a promessa ilusória de uma recompensa transcendental no além.",
      "Estimular a guerra nuclear entre os povos desenvolvidos.",
      "Defender o materialismo dialético dos partidos operários.",
      "Restaurar o culto pagão aos deuses do Olimpo."
    ],
    correct: 1,
    explanation: "Nietzsche diagnostica que a moral dos escravos inverteu os valores nobres afirmativos da vida (o forte, o belo, o criativo) e santificou a fraqueza, a humildade e a penitência sob o aguilhão do ressentimento contra os poderosos. Contra esse niilismo reativo que asfixia a energia vital dionisíaca, Nietzsche propõe a 'transvaloração de todos os valores' e a afirmação jubilosa da existência (Amor Fati). Alternativa B."
  },
  {
    id: "hum_fil_q23",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Política Contemporânea (Jürgen Habermas e o Agir Comunicativo)",
    difficulty: "Médio",
    enunciation: "O filósofo alemão Jürgen Habermas, expoente da segunda geração da Teoria Crítica de Frankfurt, contrapôs à 'razão instrumental' tecnocrática o conceito de 'razão comunicativa'. Em sua 'Teoria do Agir Comunicativo' (1981), Habermas sustenta que a legitimidade das normas democráticas em uma sociedade pluralista deve brotar da:",
    options: [
      "Imposição unilateral da vontade dos líderes mais fortes armados.",
      "Deliberação dialógica e argumentativa livre de coerções na esfera pública, na qual todos os participantes afetados possam debater em condições de igualdade discursiva buscando o consenso racional através do 'melhor argumento'.",
      "Decisão secreta de juízes vitalícios sem consulta à sociedade.",
      "Votação manipulada por propaganda eletrônica obrigatória.",
      "Tradição teológica ancestral de uma única religião oficial."
    ],
    correct: 1,
    explanation: "A ética do discurso de Habermas fundamenta a democracia deliberativa: normas éticas e jurídicas só são válidas se resultarem de um debate intersubjetivo aberto e desimpedido de pressões de poder econômico ou censura estatal (a 'situação ideal de fala'), na qual prevalece a força racional do argumento plausível validado pelos próprios cidadãos. Alternativa B."
  },
  {
    id: "hum_fil_q24",
    vestibular: "ENEM",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Cidadania e Movimentos Sociais (A Luta pelos Direitos Civis)",
    difficulty: "Fácil",
    enunciation: "Nas décadas de 1950 e 1960 nos Estados Unidos, o Movimento pelos Direitos Civis da população afro-americana, liderado por personalidades históricas como o pastor batista Martin Luther King Jr., adotou a estratégia metodológica da:",
    options: [
      "Guerra civil separatista violenta com bombardeio de cidades.",
      "Ação direta não violenta e desobediência civil pacífica (com marchas públicas, boicotes a ônibus segregados e ocupações pacíficas de lanchonetes exclusivas para brancos).",
      "Adesão incondicional às leis racistas das cortes locais do Sul (Leis Jim Crow).",
      "Emigração em massa de todos os negros norte-americanos de volta para a África.",
      "Criação de milícias para assassinar juízes federais."
    ],
    correct: 1,
    explanation: "Inspirado pelos princípios de não violência ativa de Mahatma Gandhi e na desobediência civil de Henry David Thoreau, Martin Luther King mobilizou a consciência moral da nação norte-americana por meio de manifestações pacíficas (como a Marcha sobre Washington em 1963 e o discurso 'I Have a Dream'), resultando na aprovação pelo Congresso do Civil Rights Act (1964) e do Voting Rights Act (1965), que baniram a segregação racial legalizada. Alternativa B."
  },
  {
    id: "hum_fil_q25",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Sociologia do Trabalho (Fordismo, Toyotismo e Flexibilização)",
    difficulty: "Médio",
    enunciation: "Ao longo do século XX, os modelos de organização e gestão do trabalho fabril sofreram profundas mutações estruturais. Enquanto o modelo Fordista (adotado a partir da década de 1910) apoiava-se na linha de montagem com operários hiperespecializados e produção em massa padronizada com grandes estoques de segurança, o modelo Toyotista (desenvolvido no Japão pós-Segunda Guerra) caracterizou-se pela:",
    options: [
      "Volta ao trabalho artesanal doméstico sem maquinário.",
      "Produção flexível e enxuta sob demanda (sistema 'just-in-time', sem estoques ociosos), polivalência e multifuncionalidade dos trabalhadores organizados em círculos de controle de qualidade (CCQ) e automação robotizada.",
      "Eliminação do controle patronal e autogestão anárquica operária.",
      "Proibição do uso de chips eletrônicos e semicondutores nos veículos.",
      "Contratação exclusiva de artesãos autônomos sem fábricas."
    ],
    correct: 1,
    explanation: "O modelo de acumulação flexível japonês (Toyotismo) respondeu às crises do petróleo dos anos 1970 eliminando desperdícios através do 'just-in-time' (produzir apenas o necessário, na quantidade encomendada e no momento exato), demandando um trabalhador flexível capaz de operar múltiplas máquinas simultaneamente, associado à terceirização e à precarização de direitos trabalhistas. Alternativa B."
  },
  {
    id: "hum_fil_q26",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Helenística (Estoicismo e Epicurismo)",
    difficulty: "Médio",
    enunciation: "No período helenístico da filosofia grega (surgido após as conquistas de Alexandre, o Grande e a crise da pólis autônoma), as escolas filosóficas concentraram-se na busca da tranquilidade da alma e da paz interior (ataraxia). Dentre essas correntes, o Estoicismo (representado por pensadores como Zenão, Sêneca e Marco Aurélio) defendia que a sabedoria e a liberdade consistem em:",
    options: [
      "Buscar a qualquer custo prazeres materiais imediatos e o luxo desmedido.",
      "Distinguir lucidamente entre aquilo que depende de nós (nossos pensamentos, atitudes morais e julgamentos) e o que não depende de nós (o destino, as doenças, a morte e a opinião alheia), aceitando serenamente a ordem racional do cosmos sem lamentações inúteis.",
      "Duvidar de todas as verdades e viver em constante isolamento mudo.",
      "Desafiar militarmente as leis naturais por meio de magias místicas.",
      "Rejeitar qualquer virtude moral como sendo ilusão burguesa."
    ],
    correct: 1,
    explanation: "O princípio nuclear do estoicismo é o 'viver de acordo com a natureza' cósmica racional (Logos): o sábio estoico cultiva a apatheia (impassibilidade perante as dores inevitáveis) e a temperança, sabendo que o sofrimento não decorre dos eventos externos em si, mas do modo como a nossa mente os julga e se angustia por coisas que fogem ao nosso controle volitivo. Alternativa B."
  },
  {
    id: "hum_fil_q27",
    vestibular: "ENEM",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Antropologia Cultural (Etnocentrismo e Relativismo Cultural)",
    difficulty: "Fácil",
    enunciation: "O hábito arraigado de um grupo social julgar a cultura, os costumes, a religião e os padrões estéticos de outros povos a partir exclusivamente dos valores e referências de sua própria sociedade, considerando a si mesmo como civilizado e superior e os demais como selvagens, bárbaros ou anormais, é conceituado na antropologia moderna como:",
    options: [
      "Relativismo cultural radical.",
      "Etnocentrismo.",
      "Aculturação espontânea.",
      "Multiculturalismo cívico.",
      "Endogamia comunitária."
    ],
    correct: 1,
    explanation: "O ETNOCENTRISMO coloca a própria cultura no centro do universo moral e cognitivo, desqualificando a alteridade do outro. A antropologia cultural de Franz Boas e Claude Lévi-Strauss contrapôs a esse preconceito o 'Relativismo Cultural', método que propõe compreender cada manifestação cultural a partir de seus próprios códigos internos e sentidos históricos, sem hierarquizações etnocêntricas preconceituosas. Alternativa B."
  },
  {
    id: "hum_fil_q28",
    vestibular: "UNESP",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Sociologia da Educação e Desigualdade",
    difficulty: "Médio",
    enunciation: "Pesquisas sociológicas e educacionais contemporâneas demonstram que a evasão escolar e o baixo rendimento acadêmico de jovens pertencentes às classes sociais vulneráveis decorrem primordialmente de:",
    options: [
      "Deficiências genéticas inatas herdadas biologicamente por grupos étnicos específicos.",
      "Fatores estruturais socioeconômicos (como a necessidade de inserção precoce no trabalho informal para ajudar na renda familiar, a insegurança alimentar, a precariedade de infraestrutura de transporte e a escassez de recursos didáticos e de apoio psicopedagógico).",
      "Falta voluntária de interesse pelo conhecimento humano.",
      "Acesso excessivo a computadores quânticos nas periferias.",
      "Proibição do funcionamento de escolas públicas nas favelas."
    ],
    correct: 1,
    explanation: "A sociologia desmistifica explicações individualistas e biologizantes: o sucesso ou fracasso escolar é condicionado estruturalmente pelas vulnerabilidades materiais e simbólicas das famílias periféricas. Políticas afirmativas públicas (como alimentação escolar de qualidade, programas de transferência de renda como o Pé-de-Meia e escolas de tempo integral) são cruciais para equalizar oportunidades e conter o abandono. Alternativa B."
  },
  {
    id: "hum_fil_q29",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Política (O Problema da Justiça: John Rawls)",
    difficulty: "Médio",
    enunciation: "Em 'Uma Teoria da Justiça' (1971), o filósofo norte-americano John Rawls propôs um experimento mental inovador para conceber os princípios fundamentais de uma sociedade justa e equitativa: a chamada 'Posição Original' sob o 'Véu da Ignorância'. Nesse cenário hipotético, os indivíduos devem escolher as regras de organização da sociedade sem saber previamente qual será o seu lugar nela (isto é, desconhecendo sua classe social, raça, gênero, talentos biológicos ou religião). Sob esse véu, Rawls afirma que indivíduos racionais escolheriam invariavelmente:",
    options: [
      "Uma sociedade puramente meritocrática sem nenhuma rede de assistência aos pobres.",
      "O 'Princípio da Diferença', que assegura a mais ampla liberdade individual compatível com a de todos e permite desigualdades socioeconômicas apenas se estas resultarem no maior benefício possível para os membros menos favorecidos da sociedade (maximin).",
      "Uma monarquia absolutista com escravidão de minorias.",
      "A proibição total do ensino superior para manter a ignorância geral.",
      "A entrega de todos os bens públicos a empresas privadas estrangeiras."
    ],
    correct: 1,
    explanation: "Por aversão ao risco de acordar na pior posição social (como alguém sem recursos ou com deficiência grave), sob o Véu da Ignorância qualquer pessoa prudente optaria por uma sociedade que garanta direitos civis e liberdades básicas inegociáveis para todos e que compense as desvantagens da 'loteria social e biológica' estruturando as instituições públicas para beneficiar prioritariamente os mais desfavorecidos. Alternativa B."
  },
  {
    id: "hum_fil_q30",
    vestibular: "ENEM",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Pensamento Social Brasileiro (Gilberto Freyre e o Mito da Democracia Racial)",
    difficulty: "Médio",
    enunciation: "Publicado em 1933, o clássico ensaio 'Casa-Grande & Senzala', de Gilberto Freyre, valorizou a mestiçagem cultural e biológica luso-afro-indígena como elemento fundador da identidade nacional brasileira. No entanto, a visão de Freyre sobre a 'suavidade' das relações entre senhores e escravizados na intimidade doméstica serviu de esteio ideológico para a construção do que a sociologia crítica posterior denominou:",
    options: [
      "Teoria do choque de civilizações.",
      "Mito da democracia racial, que ocultava e naturalizava a persistência da violência racista estrutural sob o pretexto de uma suposta cordialidade e ausência de preconceito no país.",
      "Movimento negro unificado revolucionário.",
      "Totalitarismo comunista no campo.",
      "Supremacia branca fascista declarada."
    ],
    correct: 1,
    explanation: "Embora Freyre tenha superado o racismo científico que considerava o povo mestiço 'degenerado', sua descrição edulcorada da escravidão doméstica engendrou o mito da democracia racial. Essa narrativa oficial ensinava que no Brasil brancos e negros conviviam em harmonia sem tensões raciais, deslegitimando por décadas as denúncias de discriminação racial e as reivindicações do movimento negro por reparações históricas. Alternativa B."
  },
  {
    id: "hum_fil_q31",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Medieval (Santo Agostinho e o Problema do Mal)",
    difficulty: "Médio",
    enunciation: "O bispo e teólogo cristão Santo Agostinho de Hipona (354–430 d.C.), principal expoente da Patrística, debateu a teodiceia (a conciliação entre a existência de um Deus bondoso, onipotente e onisciente e a existência real do mal no mundo). Agostinho resolveu esse dilema teológico afirmando que o mal:",
    options: [
      "É uma substância corpórea maligna criada diretamente por Deus para punir a humanidade.",
      "Não possui substância ontológica própria, sendo compreendido filosoficamente como a privação ou ausência do Bem (privatio boni), e cuja origem moral no mundo reside no mau uso do livre-arbítrio pelos seres humanos quando escolhem afastar-se do Bem supremo.",
      "É mais poderoso que Deus e governa a Terra perpetuamente.",
      "Existe apenas na imaginação dos animais selvagens.",
      "Foi abolido imediatamente pela filosofia platônica."
    ],
    correct: 1,
    explanation: "Influenciado pelo neoplatonismo de Plotino, Agostinho ensinou que tudo o que Deus criou é intrinsecamente bom; o mal físico e moral não é uma entidade dotada de essência criada, mas a degradação e ausência do bem devido à escolha corrompida da vontade humana livre (pecado e afastamento de Deus). Alternativa B."
  },
  {
    id: "hum_fil_q32",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Sociologia da Família e Gênero (Patriarcado e Feminismo)",
    difficulty: "Fácil",
    enunciation: "Na sociologia contemporânea e nos estudos de gênero, o conceito de 'patriarcado' descreve um sistema histórico de organização social, cultural e institucional caracterizado pela:",
    options: [
      "Liderança política e militar exclusiva concedida às mulheres chefes de clã.",
      "Dominação estrutural, primazia e privilégio dos homens sobre as mulheres, materializada na desigualdade salarial de gênero, na divisão sexual do trabalho doméstico não remunerado e na naturalização da violência misógina.",
      "Harmonia igualitária plena em todos os parlamentos mundiais.",
      "Ausência de casamento civil e de famílias nucleares.",
      "Extinção voluntária de todos os papéis de gênero tradicionais."
    ],
    correct: 1,
    explanation: "O patriarcado estrutura as relações sociais hierarquizando os sexos: subordina o feminino ao poder masculino tanto na esfera privada da família (onde as mulheres arcam desproporcionalmente com o trabalho invisível do cuidado e reprodução social) quanto na esfera pública (sub-representação política e barreiras de ascensão profissional conhecidas como 'teto de vidro'). Alternativa B."
  },
  {
    id: "hum_fil_q33",
    vestibular: "ENEM",
    year: 2023,
    subject: "Filosofia/Sociologia",
    topic: "Filosofia Contemporânea (Jean-Paul Sartre e o Existencialismo)",
    difficulty: "Médio",
    enunciation: "Em 'O Existencialismo é um Humanismo' (1946), o filósofo francês Jean-Paul Sartre resumiu o princípio fundador de sua ontologia existencialista na célebre tese de que no ser humano 'a existência precede a essência'. Essa afirmação significa fundamentalmente que o homem:",
    options: [
      "Nasce com um destino biológico pré-determinado por Deus ou pela genética do qual jamais pode escapar.",
      "Primeiro existe no mundo, descobre-se, projeta-se no futuro e só depois se define através de suas próprias escolhas e ações livres, sendo inteiramente responsável por aquilo que faz de si mesmo e condenado a ser livre.",
      "É um mero objeto inanimado semelhante a uma tesoura ou a um relógio fabril.",
      "Não possui capacidade racional para tomar decisões morais.",
      "Deve viver obedecendo cegamente aos costumes de sua aldeia natal."
    ],
    correct: 1,
    explanation: "Diferente de um objeto fabricado (cujo conceito e essência precedem sua fabricação na mente do artesão), o ser humano não tem essência pré-definida. Porque é consciente e não há Deus determinando seu propósito, o ser humano é 'condenado a ser livre': não pode desculpar seus atos atribuindo-os ao destino, à sorte ou à sociedade, devendo arcar com a angústia da responsabilidade total por seus projetos existenciais. Alternativa B."
  },
  {
    id: "hum_fil_q34",
    vestibular: "UNESP",
    year: 2023,
    subject: "Filosofia/Sociologia",
    topic: "Sociologia Urbana e Violência (Criminalidade e Segurança Pública)",
    difficulty: "Médio",
    enunciation: "Estudos sociológicos sobre a segurança pública e os índices de letalidade violenta no Brasil apontam que as abordagens governamentais centradas exclusivamente na repressão policial armada pontual nas favelas, sem a presença efetiva de políticas sociais integradas de cidadania:",
    options: [
      "Eliminam definitivamente o crime organizado e as facções do tráfico em menos de um ano.",
      "Não reduzem a violência a longo prazo, vitimizam desproporcionalmente jovens negros periféricos e falham em desarticular a lavagem de dinheiro e as rotas transnacionais de contrabando de armas e drogas.",
      "Reduzem os impostos recolhidos pelas prefeituras municipais.",
      "Estimulam a volta espontânea de operários para a agricultura colonial.",
      "Garantem que todas as crianças da periferia ingressem no ensino superior."
    ],
    correct: 1,
    explanation: "Especialistas em segurança cidadã demonstram que a 'guerra às drogas' puramente bélica e reativa gera altas taxas de mortalidade de inocentes e policiais, mas deixa intacto o poder financeiro do crime organizado. A superação sustentável da violência requer investigação de inteligência financeira, controle rigoroso de armamentos e munições, reformas processuais e investimentos maciços em urbanização, iluminação, cultura e educação integral nas periferias. Alternativa B."
  },
  {
    id: "hum_fil_q35",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Filosofia/Sociologia",
    topic: "Teoria Política e Filosofia da Cidadania",
    difficulty: "Fácil",
    enunciation: "O sociólogo britânico T. H. Marshall, em sua clássica obra 'Cidadania, Classe Social e Status' (1950), estruturou o desenvolvimento histórico da cidadania moderna na conquista sequencial e cumulativa de três gerações de direitos humanos fundamentais: civis, políticos e sociais. No Brasil contemporâneo, a conquista do direito à educação pública gratuita, à saúde universal (SUS) e à aposentadoria previdenciária enquadra-se na esfera dos:",
    options: [
      "Direitos civis de primeira geração (liberdade de ir e vir e de imprensa).",
      "Direitos sociais de segunda geração (que exigem prestações positivas e investimentos do Estado para assegurar condições mínimas de dignidade e igualdade material a todos os cidadãos).",
      "Direitos políticos exclusivos da nobreza feudal.",
      "Direitos cósmicos de exploração de asteroides.",
      "Privilégios estamentais corporativistas dos generais."
    ],
    correct: 1,
    explanation: "Na tipologia de Marshall:\n1) Direitos Civis (século XVIII): liberdades individuais de locomoção, pensamento, propriedade e julgamento justo perante a lei;\n2) Direitos Políticos (século XIX): direito de votar e ser votado e organizar partidos e associações;\n3) Direitos Sociais (século XX): garantias materiais mínimas de bem-estar social fornecidas pelo Estado (educação, saúde, previdência, moradia e amparo ao desempregado). Alternativa B."
  }
];
