/**
 * Raio-X de Recorrência e Checklist Ranqueado (ENEM vs FUVEST)
 * Permite filtrar por ranking específico do ENEM, ranking da FUVEST ou por disciplina.
 */
const checklistData = [
  {
    discipline: "Matemática",
    color: "blue",
    icon: "fa-calculator",
    topics: [
      {
        id: "mat_1",
        title: "Razão, Proporção, Regra de Três e Escalas",
        enemRank: 1,
        enemRecurrence: "🥇 1º Lugar no ENEM (6 a 9 questões por edição • 99% de presença)",
        fuvestRank: 3,
        fuvestRecurrence: "🥉 3º Lugar na FUVEST (presente com enunciados secos e aplicações)",
        weight: "Muito Alta",
        focus: "No ENEM é o maior bloco de pontuação fácil/média (fundamental para a TRI). Na FUVEST cai aplicado a problemas de proporções geométricas.",
        enemTip: "Atenção máxima à conversão de escalas de área (E²) e volume (E³).",
        fuvestTip: "Fique atento a proporcionalidade direta/inversa com frações algébricas."
      },
      {
        id: "mat_2",
        title: "Estatística Básica (Média, Moda, Mediana e Desvio Padrão)",
        enemRank: 2,
        enemRecurrence: "🥈 2º Lugar no ENEM (5 a 7 questões por edição)",
        fuvestRank: 7,
        fuvestRecurrence: "7º Lugar na FUVEST (questões conceituais de dispersão)",
        weight: "Muito Alta",
        focus: "ENEM cobra mediana com quantidade par/ímpar de termos e cálculo de média ponderada. FUVEST foca em variância e desvio padrão.",
        enemTip: "Questão de leitura de gráfico de barras com mediana é ponto garantido na TRI.",
        fuvestTip: "Entenda o significado geométrico e de dispersão do desvio padrão."
      },
      {
        id: "mat_3",
        title: "Geometria Espacial (Prismas, Cilindros, Cones e Esferas)",
        enemRank: 3,
        enemRecurrence: "🥉 3º Lugar no ENEM (4 a 5 questões • volumes e planificações)",
        fuvestRank: 2,
        fuvestRecurrence: "🥈 2º Lugar na FUVEST (inscrição/circunscrição de sólidos na 2ª fase)",
        weight: "Muito Alta",
        focus: "ENEM ama planificação de figuras e cálculo de vazão/enchimento de reservatórios. FUVEST exige visão espacial avançada com seções planas.",
        enemTip: "Fórmula de volume do cilindro (V = πr²h) e cone (V = 1/3 πr²h) caem todo ano.",
        fuvestTip: "Treine troncos de cone e pirâmide com semelhança de triângulos."
      },
      {
        id: "mat_4",
        title: "Geometria Plana (Áreas, Pitágoras e Semelhança de Triângulos)",
        enemRank: 4,
        enemRecurrence: "4º Lugar no ENEM (3 a 5 questões • ladrilhamento e cercamento)",
        fuvestRank: 1,
        fuvestRecurrence: "🥇 1º Lugar na FUVEST (campeã absoluta da 1ª e 2ª fase com demonstrações)",
        weight: "Muito Alta",
        focus: "FUVEST adora figuras compostas sem valores numéricos (respostas literais). ENEM contextualiza com plantações e reformas de pisos.",
        enemTip: "Áreas de trapézio, triângulo equilátero e hexágono regular.",
        fuvestTip: "Domine potência de ponto, quadriláteros inscritíveis e lei dos senos/cossenos."
      },
      {
        id: "mat_5",
        title: "Porcentagem e Matemática Financeira (Juros Simples e Compostos)",
        enemRank: 5,
        enemRecurrence: "5º Lugar no ENEM (3 a 5 questões • aumentos e descontos sucessivos)",
        fuvestRank: 6,
        fuvestRecurrence: "6º Lugar na FUVEST (contextualizada em inflação e economia)",
        weight: "Muito Alta",
        focus: "Fator de correção multiplicativo (1 + i) e (1 - i). Descontos reais vs descontos nominais.",
        enemTip: "Cuidado: 20% de aumento seguido de 20% de desconto NÃO volta ao preço original!",
        fuvestTip: "FUVEST costuma misturar juros compostos com Progressão Geométrica (PG) e logaritmos."
      },
      {
        id: "mat_6",
        title: "Funções de 1º e 2º Grau (Modelagem e Vértice da Parábola)",
        enemRank: 6,
        enemRecurrence: "6º Lugar no ENEM (gráficos, máximos e mínimos)",
        fuvestRank: 4,
        fuvestRecurrence: "4º Lugar na FUVEST (estudo de sinais, raízes e inequações)",
        weight: "Muito Alta",
        focus: "Cálculo de lucro máximo, custo mínimo e altura máxima de projéteis (Yv = -Δ/4a e Xv = -b/2a).",
        enemTip: "Interpretação visual do coeficiente 'a' (concavidade) e 'c' (corte no eixo y).",
        fuvestTip: "Relações de Girard e parametrização de funções na 2ª fase."
      },
      {
        id: "mat_7",
        title: "Análise Combinatória e Probabilidade Condicional",
        enemRank: 7,
        enemRecurrence: "7º Lugar no ENEM (geralmente questões médias a difíceis)",
        fuvestRank: 5,
        fuvestRecurrence: "5º Lugar na FUVEST (exige rigor no Princípio Fundamental da Contagem)",
        weight: "Alta",
        focus: "Diferenciação clara entre Arranjo (ordem importa) e Combinação (ordem não importa). Probabilidade da união e condicional (P(A|B)).",
        enemTip: "No ENEM, muitas respostas de combinatória ficam expressas em fórmula sem calcular o número final.",
        fuvestTip: "Atenção a problemas com restrições e simetrias de coloração de poliedros."
      },
      {
        id: "mat_8",
        title: "Trigonometria (Ciclo Trigonométrico, Identidades e Funções)",
        enemRank: 8,
        enemRecurrence: "8º Lugar no ENEM (modelagem de fenômenos periódicos como marés e pistões)",
        fuvestRank: 8,
        fuvestRecurrence: "8º Lugar na FUVEST (equações trigonométricas clássicas)",
        weight: "Alta",
        focus: "sen²(x) + cos²(x) = 1, transformações em produto e período da função senoidal T = 2π/|m|.",
        enemTip: "Reconhecer amplitude e período em gráficos da respiração ou ondas sonoras.",
        fuvestTip: "Fórmulas de arco duplo e bissecção; identidades no ciclo."
      },
      {
        id: "mat_9",
        title: "Geometria Analítica (Retas, Circunferências e Distâncias)",
        enemRank: 10,
        enemRecurrence: "10º Lugar no ENEM (distância entre dois pontos e equação da reta)",
        fuvestRank: 9,
        fuvestRecurrence: "9º Lugar na FUVEST (tangência entre retas e circunferências na 2ª fase)",
        weight: "Média",
        focus: "Equação reduzida da circunferência (x - a)² + (y - b)² = R² e perpendicularismo (m1 · m2 = -1).",
        enemTip: "Geralmente associada a planos cartesianos de cidades ou radares.",
        fuvestTip: "Interseção entre curvas e cálculo de distância de ponto a reta."
      }
    ]
  },
  {
    discipline: "Física",
    color: "sky",
    icon: "fa-bolt",
    topics: [
      {
        id: "fis_1",
        title: "Eletrodinâmica (Circuitos, Leis de Ohm, Potência e Consumo)",
        enemRank: 1,
        enemRecurrence: "🥇 1º Lugar no ENEM (o assunto mais recorrente de toda a história do ENEM • 4 questões/ano)",
        fuvestRank: 3,
        fuvestRecurrence: "🥉 3º Lugar na FUVEST (circuitos com pontes, amperímetros e voltímetros ideais)",
        weight: "Muito Alta",
        focus: "Cálculo de consumo elétrico (E = P · Δt em kWh), associação em série vs paralelo e efeito Joule (P = U²/R = R·i²).",
        enemTip: "Aparelhos ligados em paralelo dividem a corrente mantendo a mesma tensão da tomada.",
        fuvestTip: "Leis de Kirchhoff para circuitos com múltiplas malhas e baterias reais."
      },
      {
        id: "fis_2",
        title: "Ondulatória (Equação Fundamental v=λf e Fenômenos)",
        enemRank: 2,
        enemRecurrence: "🥈 2º Lugar no ENEM (cai todo ano: refração, ressonância, difração e doppler)",
        fuvestRank: 5,
        fuvestRecurrence: "5º Lugar na FUVEST (interferência de ondas e ondas estacionárias)",
        weight: "Muito Alta",
        focus: "Na refração a frequência é constante! Fenômenos: difração (contorno de obstáculos), ressonância (frequências naturais) e polarização (somente ondas transversais).",
        enemTip: "Por que o Wi-Fi ou ondas de rádio atravessam paredes e a luz não? Difração!",
        fuvestTip: "Experimento de Young (fenda dupla) e acústica em cordas/tubos sonoros abertos e fechados."
      },
      {
        id: "fis_3",
        title: "Termologia, Calorimetria e Mudanças de Fase",
        enemRank: 3,
        enemRecurrence: "🥉 3º Lugar no ENEM (curvas de aquecimento, trocas de calor e garrafa térmica)",
        fuvestRank: 6,
        fuvestRecurrence: "6º Lugar na FUVEST (calorímetro ideal e dilatação térmica dos sólidos/líquidos)",
        weight: "Muito Alta",
        focus: "Calor sensível Q = mcΔT, calor latente Q = mL e processos de propagação (condução, convecção e irradiação no vácuo).",
        enemTip: "Entenda por que o gelo protege a água líquida embaixo em lagos congelados (anomalia da água).",
        fuvestTip: "Equilíbrio térmico com gelo fundente e gráfico de calor latente com perda para o ambiente."
      },
      {
        id: "fis_4",
        title: "Trabalho, Potência e Conservação da Energia Mecânica",
        enemRank: 4,
        enemRecurrence: "4º Lugar no ENEM (montanha-russa, usinas hidrelétricas e freios automotivos)",
        fuvestRank: 1,
        fuvestRecurrence: "🥇 1º Lugar na FUVEST (base absoluta para mecânica da 1ª e 2ª fase)",
        weight: "Muito Alta",
        focus: "Teorema da Energia Cinética (W = ΔEc), energia potencial elástica e conservação na ausência de forças dissipativas.",
        enemTip: "Transformação de energia mecânica em calor pelo atrito das pastilhas de freio.",
        fuvestTip: "Conservação simultânea de Energia Mecânica e Quantidade de Movimento (choques mecânicos elásticos e inelásticos)."
      },
      {
        id: "fis_5",
        title: "Cinemática (MRU, MRUV e Análise Gráfica)",
        enemRank: 5,
        enemRecurrence: "5º Lugar no ENEM (interpretação de gráficos de velocidade x tempo)",
        fuvestRank: 4,
        fuvestRecurrence: "4º Lugar na FUVEST (lançamento oblíquo de projéteis e movimento circular uniforme)",
        weight: "Alta",
        focus: "Área sob o gráfico v x t representa o deslocamento Δs. A inclinação da reta representa a aceleração.",
        enemTip: "Tempo de reação do motorista somado ao tempo de frenagem com Torricelli.",
        fuvestTip: "Decomposição vetorial das velocidades no lançamento oblíquo e aceleração centrípeta (ac = v²/R)."
      },
      {
        id: "fis_6",
        title: "Dinâmica e Leis de Newton (Atrito, Plano Inclinado e Gravitação)",
        enemRank: 6,
        enemRecurrence: "6º Lugar no ENEM (cintos de segurança, airbags e atrito estático)",
        fuvestRank: 2,
        fuvestRecurrence: "🥈 2º Lugar na FUVEST (diagrama de corpo livre com tração, normais e molas)",
        weight: "Muito Alta",
        focus: "1ª Lei (Inércia), 2ª Lei (Fr = m·a) e 3ª Lei (Ação e Reação em corpos diferentes). Fat_max = μ_estático · N.",
        enemTip: "O atrito que move o carro para frente é o estático (se derrapar vira cinético e perde tração).",
        fuvestTip: "Forças de contato em blocos empilhados e gravitação universal de Newton (Leis de Kepler)."
      },
      {
        id: "fis_7",
        title: "Óptica Geométrica (Espelhos Planos/Esféricos e Refração de Snell)",
        enemRank: 8,
        enemRecurrence: "8º Lugar no ENEM (defeitos da visão como miopia/hipermetropia e fibra óptica)",
        fuvestRank: 7,
        fuvestRecurrence: "7º Lugar na FUVEST (construção geométrica de imagens e equação dos fabricantes de lentes)",
        weight: "Média",
        focus: "Lei de Snell-Descartes (n1·sen(i) = n2·sen(r)), reflexão interna total e convergência de lentes em dioptrias ('graus').",
        enemTip: "Miopia corrige com lente divergente; hipermetropia com lente convergente.",
        fuvestTip: "Fórmula de Gauss: 1/f = 1/p + 1/p'. Atenção aos sinais para imagens reais e virtuais."
      },
      {
        id: "fis_8",
        title: "Hidrostática (Pressão, Teorema de Stevin e Empuxo de Arquimedes)",
        enemRank: 7,
        enemRecurrence: "7º Lugar no ENEM (pressão atmosférica, submarinos e iceberg)",
        fuvestRank: 8,
        fuvestRecurrence: "8º Lugar na FUVEST (manômetros em U com líquidos imiscíveis)",
        weight: "Alta",
        focus: "Pressão p = d·g·h e Empuxo E = d_líquido · V_imerso · g. Flutuação de corpos com peso igual ao empuxo.",
        enemTip: "Por que uma agulha de aço afunda mas um navio de aço flutua? Densidade média do conjunto!",
        fuvestTip: "Vasos comunicantes com água e óleo sob pressão atmosférica."
      }
    ]
  },
  {
    discipline: "Química",
    color: "emerald",
    icon: "fa-flask",
    topics: [
      {
        id: "qui_1",
        title: "Química Orgânica (Funções Oxigenadas, Nitrogenadas e Isomeria)",
        enemRank: 1,
        enemRecurrence: "🥇 1º Lugar no ENEM (biodiesel, aromas, medicamentos, álcoois, fenóis, aminas e isomeria óptica)",
        fuvestRank: 2,
        fuvestRecurrence: "🥈 2º Lugar na FUVEST (mecanismos de reações orgânicas como esterificação e saponificação)",
        weight: "Muito Alta",
        focus: "Reconhecimento rápido de grupos funcionais e carbonos quirais (assimétricos com 4 ligantes diferentes).",
        enemTip: "Reação de transesterificação para produção de biodiesel (óleo vegetal + álcool -> biodiesel + glicerol).",
        fuvestTip: "Oxidação de álcoois primários (gera aldeído e ácido carboxílico) e secundários (gera cetona)."
      },
      {
        id: "qui_2",
        title: "Estequiometria (Cálculos de Massa, Mol, Pureza e Rendimento)",
        enemRank: 2,
        enemRecurrence: "🥈 2º Lugar no ENEM (questão obrigatória em todas as provas)",
        fuvestRank: 1,
        fuvestRecurrence: "🥇 1º Lugar na FUVEST (estequiometria com gases fora das CNTP e reagente limitante)",
        weight: "Muito Alta",
        focus: "Conversão: 1 mol = Massa Molar (g) = 6,02 × 10²³ moléculas = 22,4 L nas CNTP. Identificação do limitante e em excesso.",
        enemTip: "Sempre desconte a pureza dos reagentes antes de montar a regra de três estequiométrica.",
        fuvestTip: "Uso da equação de Clapeyron (P·V = n·R·T) para gases ideais."
      },
      {
        id: "qui_3",
        title: "Soluções e Concentrações (Molaridade, Diluição e Titulação)",
        enemRank: 3,
        enemRecurrence: "🥉 3º Lugar no ENEM (análise de rótulos de água mineral, remédios e contaminantes em ppm)",
        fuvestRank: 3,
        fuvestRecurrence: "🥉 3º Lugar na FUVEST (titulação ácido-base com estequiometria exata)",
        weight: "Muito Alta",
        focus: "Concentração comum C = m/V (g/L), concentração em mol/L (M = n/V) e diluição (C1·V1 = C2·V2).",
        enemTip: "Conversão de ppm (partes por milhão = 1 mg por litro de água).",
        fuvestTip: "Curvas de titulação e escolha do indicador visual de ponto de viragem."
      },
      {
        id: "qui_4",
        title: "Eletroquímica (Pilhas, Potenciais Padrão e Eletrólise)",
        enemRank: 4,
        enemRecurrence: "4º Lugar no ENEM (pilhas de lítio, corrosão do ferro e proteção por metal de sacrifício)",
        fuvestRank: 5,
        fuvestRecurrence: "5º Lugar na FUVEST (cálculo de carga com 1 Faraday = 96.500 C na eletrólise quantitativa)",
        weight: "Muito Alta",
        focus: "Pilha: processo espontâneo (ΔE > 0). Ânodo oxida (polo -), Cátodo reduz (polo +). Redução tem maior Eº.",
        enemTip: "Zinco e Magnésio atuando como anodo de sacrifício para evitar ferrugem nos cascos de navios.",
        fuvestTip: "Eletrólise ígnea vs eletrólise aquosa com prioridade de descarga dos íons."
      },
      {
        id: "qui_5",
        title: "Termoquímica (Lei de Hess, Entalpia de Ligação e Combustão)",
        enemRank: 5,
        enemRecurrence: "5º Lugar no ENEM (poder calorífico de combustíveis como etanol, gasolina e hidrogênio)",
        fuvestRank: 4,
        fuvestRecurrence: "4º Lugar na FUVEST (cálculo de ΔH pela quebra e formação de ligações)",
        weight: "Alta",
        focus: "Reações exotérmicas (ΔH < 0, liberam calor) e endotérmicas (ΔH > 0, absorvem calor). Lei de Hess somando equações termoquímicas.",
        enemTip: "Biocombustíveis renováveis vs combustíveis fósseis e pegada de carbono.",
        fuvestTip: "Energia de ligação: quebrar ligações sempre ABSORVE energia (+); formar ligações LIBERA (-)."
      },
      {
        id: "qui_6",
        title: "Equilíbrio Químico e Deslocamento (Le Chatelier, pH e pOH)",
        enemRank: 6,
        enemRecurrence: "6º Lugar no ENEM (acidificação dos oceanos, efeito de temperatura e pressão na produção de amônia)",
        fuvestRank: 6,
        fuvestRecurrence: "6º Lugar na FUVEST (constantes Kc e Kp, produto de solubilidade Kps)",
        weight: "Alta",
        focus: "Princípio de Le Chatelier: perturbações externas deslocam o equilíbrio para atenuar a alteração. pH = -log[H+].",
        enemTip: "O excesso de CO2 atmosférico se dissolve no mar formando H2CO3, baixando o pH e dissolvendo conchas de calcário.",
        fuvestTip: "Solução tampão no sangue humano (ácido carbônico / bicarbonato)."
      },
      {
        id: "qui_7",
        title: "Forças Intermoleculares e Polaridade ('Semelhante dissolve semelhante')",
        enemRank: 7,
        enemRecurrence: "7º Lugar no ENEM (sabões e detergentes com cauda apolar e cabeça polar, pontos de ebulição)",
        fuvestRank: 7,
        fuvestRecurrence: "7º Lugar na FUVEST (ligações de hidrogênio em biomoléculas como DNA e proteínas)",
        weight: "Muito Alta",
        focus: "Dipolo induzido (London), Dipolo-Dipolo e Ligações de Hidrogênio (H ligado a F, O, N).",
        enemTip: "Ação tensoativa dos sabões formando micelas com a gordura.",
        fuvestTip: "Quanto mais intensas as forças intermoleculares, maior o Ponto de Ebulição e menor a pressão de vapor."
      }
    ]
  },
  {
    discipline: "Biologia",
    color: "green",
    icon: "fa-dna",
    topics: [
      {
        id: "bio_1",
        title: "Ecologia (Cadeias Alimentares, Ciclos e Relações Ecológicas)",
        enemRank: 1,
        enemRecurrence: "🥇 1º Lugar no ENEM (campeão absoluto de Biologia com mais de 30% da prova da área)",
        fuvestRank: 2,
        fuvestRecurrence: "🥈 2º Lugar na FUVEST (dinâmica de populações, teias e sucessão ecológica)",
        weight: "Muito Alta",
        focus: "Ciclo do Nitrogênio (fixação, nitrificação e desnitrificação), relações harmônicas vs desarmônicas e fluxo de energia unidirecional.",
        enemTip: "Bioacumulação de metais pesados e agrotóxicos ao longo dos níveis tróficos (topo acumula mais).",
        fuvestTip: "Pirâmides ecológicas invertidas (de biomassa no ambiente marinho e de números)."
      },
      {
        id: "bio_2",
        title: "Impactos Ambientais (Eutrofização, Efeito Estufa e Desmatamento)",
        enemRank: 2,
        enemRecurrence: "🥈 2º Lugar no ENEM (questões de atualidades ambientais e sustentabilidade)",
        fuvestRank: 3,
        fuvestRecurrence: "🥉 3º Lugar na FUVEST (queimadas no Cerrado/Pantanal e contaminação de lençóis freáticos)",
        weight: "Muito Alta",
        focus: "Passo a passo da eutrofização (adubo/esgoto -> algas explodem -> luz bloqueada -> bactérias consomem O2 -> peixes morrem).",
        enemTip: "Diferença entre Efeito Estufa natural (mantém a Terra habitável) e Aquecimento Global antrópico.",
        fuvestTip: "Espécies exóticas invasoras competindo com a fauna/flora nativa e destruindo nichos ecológicos."
      },
      {
        id: "bio_3",
        title: "Fisiologia Humana (Sistemas Circulatório, Digestório, Renal e Imunológico)",
        enemRank: 3,
        enemRecurrence: "🥉 3º Lugar no ENEM (vacinas vs soros, diabetes, hipertensão e hormônios)",
        fuvestRank: 4,
        fuvestRecurrence: "4º Lugar na FUVEST (controle por feedback hormonal e ultrafiltração nos néfrons)",
        weight: "Muito Alta",
        focus: "Vacina (prevenção, contém antígeno atenuado, gera memória imune) vs Soro (cura emergencial, contém anticorpos prontos).",
        enemTip: "Controle da glicose no sangue pela insulina (armazena como glicogênio) e glucagon (quebra glicogênio).",
        fuvestTip: "Hormônio ADH (vasopressina) aumentando a reabsorção de água nos túbulos renais."
      },
      {
        id: "bio_4",
        title: "Citologia e Metabolismo Energético (Fotossíntese e Respiração Celular)",
        enemRank: 4,
        enemRecurrence: "4º Lugar no ENEM (membrana plasmática, osmose e organelas)",
        fuvestRank: 1,
        fuvestRecurrence: "🥇 1º Lugar na FUVEST (detalhes da fosforilação oxidativa e ciclo de Krebs)",
        weight: "Muito Alta",
        focus: "Transporte passivo (difusão simples, facilitada e osmose) vs ativo (gasta ATP com bomba de Na+/K+). Fotossíntese (fase clara e ciclo de Calvin).",
        enemTip: "Fermentação lática em células musculares em esforço físico sem oxigênio suficiente.",
        fuvestTip: "Teoria da endossimbiose para mitocôndrias e cloroplastos (DNA circular próprio e dupla membrana)."
      },
      {
        id: "bio_5",
        title: "Genética Clássica, Biologia Molecular e Biotecnologia",
        enemRank: 5,
        enemRecurrence: "5º Lugar no ENEM (transgênicos, testes de paternidade por DNA e heredogramas)",
        fuvestRank: 5,
        fuvestRecurrence: "5º Lugar na FUVEST (sistema ABO/Fator Rh com eritroblastose fetal, linkage e crossing-over)",
        weight: "Alta",
        focus: "1ª Lei de Mendel (segregação independente dos alelos) e síntese proteica (transcrição do DNA em RNAm e tradução nos ribossomos).",
        enemTip: "Transgênicos possuem genes inseridos de outra espécie; clonagem gera cópias idênticas.",
        fuvestTip: "Cálculo de probabilidade de herança ligada ao cromossomo sexual X (daltonismo e hemofilia)."
      },
      {
        id: "bio_6",
        title: "Evolução Biológica (Teorias Evolutivas, Seleção Natural e Especiação)",
        enemRank: 6,
        enemRecurrence: "6º Lugar no ENEM (resistência de bactérias a antibióticos e de pragas a defensivos)",
        fuvestRank: 6,
        fuvestRecurrence: "6º Lugar na FUVEST (cladogramas, órgãos homólogos vs análogos e irradiação adaptativa)",
        weight: "Alta",
        focus: "Lamarckismo (uso e desuso + herança dos caracteres adquiridos) vs Darwinismo (seleção natural da variabilidade preexistente).",
        enemTip: "O antibiótico NÃO induz a mutação na bactéria: ele apenas seleciona as que já eram resistentes!",
        fuvestTip: "Homologia (mesma origem embrionária, como braço humano e asa de morcego) vs Analogia (convergência evolutiva)."
      },
      {
        id: "bio_7",
        title: "Botânica (Grupos Vegetais e Fisiologia das Plantas)",
        enemRank: 8,
        enemRecurrence: "8º Lugar no ENEM (geralmente cobrada associada a biomas ou agricultura)",
        fuvestRank: 7,
        fuvestRecurrence: "7º Lugar na FUVEST (questão clássica na 1ª e 2ª fase: flor, fruto e hormônios vegetais)",
        weight: "Média",
        focus: "Evolução das plantas: Briófitas (avasculares) -> Pteridófitas (vasculares sem semente) -> Gimnospermas (com semente) -> Angiospermas (com flor e fruto).",
        enemTip: "Importância das abelhas como polinizadoras de angiospermas para a segurança alimentar.",
        fuvestTip: "Ação da auxina (AIA) no fototropismo (alongamento celular no lado sombreado) e etileno no amadurecimento."
      }
    ]
  },
  {
    discipline: "Humanas",
    color: "amber",
    icon: "fa-landmark",
    topics: [
      {
        id: "his_1",
        title: "Era Vargas (1930–1945 e 1951–1954)",
        enemRank: 1,
        enemRecurrence: "🥇 1º Lugar no ENEM em História (CLT, DIP, corporativismo e industrialização de base)",
        fuvestRank: 2,
        fuvestRecurrence: "🥈 2º Lugar na FUVEST (Revolução Constitucionalista de 1932 em São Paulo e Estado Novo)",
        weight: "Muito Alta",
        focus: "Trabalhismo e populismo varguista; censura e propaganda pelo DIP; criação da Petrobras e CSN.",
        enemTip: "Vargas concedeu direitos trabalhistas para conter a força do movimento operário comunista independente.",
        fuvestTip: "A FUVEST destaca o papel das elites cafeeiras paulistas na oposição armada contra Vargas em 1932."
      },
      {
        id: "his_2",
        title: "Ditadura Civil-Militar no Brasil (1964–1985)",
        enemRank: 2,
        enemRecurrence: "🥈 2º Lugar no ENEM (AI-5, milagre econômico com endividamento e movimentos de resistência cultural)",
        fuvestRank: 1,
        fuvestRecurrence: "🥇 1º Lugar na FUVEST (análise de canções de protesto, cinema novo e transição tutelada)",
        weight: "Muito Alta",
        focus: "Endurecimento do regime com o AI-5 (1968), censura prévia, repressão e o processo lento e gradual de anistia e redemocratização.",
        enemTip: "Uso do Tropicalismo e MPB como crítica metafórica à repressão do governo militar.",
        fuvestTip: "A 'modernização conservadora' e o arrocho salarial dos trabalhadores durante o milagre econômico."
      },
      {
        id: "his_3",
        title: "Brasil Colônia (Economia Açucareira, Ciclo do Ouro e Escravidão)",
        enemRank: 3,
        enemRecurrence: "🥉 3º Lugar no ENEM (resistência quilombola, diáspora africana e pacto colonial)",
        fuvestRank: 3,
        fuvestRecurrence: "🥉 3º Lugar na FUVEST (urbanização de Vila Rica e revoltas nativistas vs separatistas)",
        weight: "Muito Alta",
        focus: "O tráfico transatlântico de escravizados como pilar financeiro da Coroa. Inconfidência Mineira (1789) e Conjuração Baiana (1798).",
        enemTip: "O ENEM valoriza a cultura de resistência afro-brasileira e a agência dos escravizados.",
        fuvestTip: "Comparação entre o caráter elitista da Inconfidência Mineira e o caráter popular da Conjuração Baiana."
      },
      {
        id: "geo_1",
        title: "Geografia Agrária Brasileira (Agronegócio, Concentração Fundiária e Conflitos)",
        enemRank: 4,
        enemRecurrence: "4º Lugar no ENEM (expansão da fronteira agrícola para o Cerrado e Amazônia)",
        fuvestRank: 4,
        fuvestRecurrence: "4º Lugar na FUVEST (conflitos pelo uso da terra e trabalho análogo à escravidão)",
        weight: "Muito Alta",
        focus: "Modernização conservadora do campo, substituição de mão de obra por maquinário (êxodo rural) e monocultura exportadora de soja/carne.",
        enemTip: "O choque entre grandes latifúndios monocultores e a agricultura familiar responsável pela comida do prato.",
        fuvestTip: "Grilagem de terras públicas na Amazônia e a pressão sobre reservas indígenas."
      },
      {
        id: "geo_2",
        title: "Urbanização e Segregação Socioespacial no Brasil",
        enemRank: 5,
        enemRecurrence: "5º Lugar no ENEM (favelização, conurbação, gentrificação e mobilidade urbana)",
        fuvestRank: 5,
        fuvestRecurrence: "5º Lugar na FUVEST (dinâmica da Região Metropolitana de São Paulo)",
        weight: "Muito Alta",
        focus: "O crescimento urbano desordenado, falta de saneamento básico nas periferias e especulação imobiliária.",
        enemTip: "Ilhas de calor urbanas e impermeabilização do solo causando enchentes frequentes.",
        fuvestTip: "Hierarquia urbana brasileira: metrópoles globais, metrópoles nacionais e cidades médias."
      },
      {
        id: "geo_3",
        title: "Climatologia e Fenômenos Atmosféricos (El Niño, La Niña e Massas de Ar)",
        enemRank: 6,
        enemRecurrence: "6º Lugar no ENEM (secas no Nordeste e chuvas torrenciais no Sul)",
        fuvestRank: 6,
        fuvestRecurrence: "6º Lugar na FUVEST (fatores climáticos e circulação atmosférica global)",
        weight: "Muito Alta",
        focus: "Massa Equatorial Continental (mEc) trazendo umidade da Amazônia ('Rios Voadores') para o Centro-Sul brasileiro.",
        enemTip: "Impactos do El Niño (aquecimento das águas do Pacífico equatorial) no clima do Brasil.",
        fuvestTip: "Diferença entre tempo meteorológico (passageiro) e clima (padrão de longo prazo)."
      },
      {
        id: "fil_1",
        title: "Filosofia Política: Contratualismo (Hobbes, Locke e Rousseau)",
        enemRank: 7,
        enemRecurrence: "7º Lugar no ENEM (legitimidade do poder, direitos naturais e cidadania)",
        fuvestRank: 7,
        fuvestRecurrence: "7º Lugar na FUVEST (origem do Estado e soberania popular)",
        weight: "Muito Alta",
        focus: "Hobbes (homem é o lobo do homem -> Leviatã absoluto); Locke (direitos à vida, liberdade e propriedade privada); Rousseau (homem nasce bom, pacto social igualitário).",
        enemTip: "Aplicação imediata em argumentos de redação para defender a garantia de direitos pelo Estado.",
        fuvestTip: "Rousseau e o conceito de 'vontade geral' contra a vontade egoísta de todos."
      },
      {
        id: "soc_1",
        title: "Sociologia: Cidadania, Direitos Humanos e Modernidade",
        enemRank: 8,
        enemRecurrence: "8º Lugar no ENEM (Bauman, Bourdieu, Foucault e Habermas)",
        fuvestRank: 8,
        fuvestRecurrence: "8º Lugar na FUVEST (análise crítica das relações de poder e instituições)",
        weight: "Muito Alta",
        focus: "Violência simbólica de Bourdieu; Modernidade Líquida de Bauman; Sociedade Disciplinar de Foucault; Esfera Pública de Habermas.",
        enemTip: "Excelente base teórica para problematizar preconceitos estruturais e exclusão escolar.",
        fuvestTip: "FUVEST exige leitura crítica das contradições entre o discurso dos direitos e a realidade concreta."
      }
    ]
  }
];
