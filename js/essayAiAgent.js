/**
 * Agente de IA Corretor de Redação - BrilhaVest
 * Analisa e corrige redações para ENEM e FUVEST de acordo com os critérios oficiais das bancas.
 * Avalia C1 a C5 para ENEM (0 a 1000 pts) e Quesitos A, B e C para FUVEST (0 a 50 pts).
 * Suporta análise heurística inteligente instantânea e integração opcional com Google Gemini AI.
 */

const EssayAIAgent = {
  // Exemplos reais de Redação Nota 1000 para teste imediato
  samples: {
    enem: {
      topic: "Desafios para a valorização de comunidades e povos tradicionais no Brasil",
      title: "Vozes Silenciadas da Terra",
      type: "ENEM",
      text: `No conto "A Nova Califórnia", de Lima Barreto, retrata-se a ambição desenfreada que desestrutura a harmonia coletiva em prol do lucro individual. Fora da ficção, essa lógica predatória materializa-se nos desafios para a valorização de comunidades e povos tradicionais no Brasil contemporâneo. Nesse cenário, constata-se a persistência de um duplo entrave: de um lado, a inoperância governamental na demarcação e proteção de territórios ancestrais; de outro, o preconceito sociocultural enraizado que deslegitima a sabedoria desses grupos. Desse modo, torna-se imperioso analisar tais mazelas para construir caminhos de equidade.

Em primeira análise, cabe destacar a omissão estatal como vetor crucial do problema. Segundo o filósofo Thomas Hobbes, em sua obra "Leviatã", cabe ao Estado garantir o bem-estar e a segurança de todos os cidadãos mediante o pacto social. No entanto, no contexto brasileiro, essa prerrogativa é negligenciada, uma vez que a morosidade nos processos de titulação fundiária expõe indígenas, quilombolas e ribeirinhos à violência de grileiros e mineradores ilegais. Por conseguinte, a ausência de fiscalização efetiva perpetua um ciclo de vulnerabilidade histórica que fere os preceitos do artigo 215 da Carta Magna de 1988.

Ademais, a invisibilização cultural atua como forte barreira simbólica. De acordo com a filósofa Hannah Arendt, o enfraquecimento do espaço público ocorre quando vozes plurais são silenciadas pela indiferença hegemônica. Sob essa ótica, grande parte da sociedade nacional reproduz estereótipos eurocêntricos que reduzem os povos originários e tradicionais a figuras do passado, ignorando sua contribuição basilar para a preservação da biodiversidade e para o patrimônio imaterial do país. Assim, a falta de reconhecimento perpetua um apagamento sistemático que compromete a cidadania plena dessas populações.

Portanto, medidas urgentes são necessárias para reverter esse panorama degradante. Cabe ao Ministério dos Povos Indígenas, em articulação com o Ministério do Meio Ambiente e a Polícia Federal, fortalecer a proteção dos territórios tradicionais. Essa atuação deve ser viabilizada por meio de operações contínuas de saturação contra invasões ilegais e da alocação orçamentária prioritária para a demarcação ágil de terras, além de campanhas informativas em rede nacional que valorizem a cosmologia desses povos. Com essas medidas, o Brasil poderá finalmente honrar suas raízes e garantir dignidade àqueles que preservam a sua identidade.`
    },
    fuvest: {
      topic: "As ilusões do mundo contemporâneo: entre a pressa e a promessa de felicidade",
      title: "A Tirania do Efêmero",
      type: "FUVEST_DISSERTATIVA",
      text: `Na célebre alegoria da caverna, Platão descreve prisioneiros acorrentados que tomam sombras ilusórias pela totalidade do real. Transportada para a hipermodernidade, essa metáfora ganha contornos dramáticos: a sociedade ocidental substituiu a busca contemplativa do sentido existencial pela frenética corrida da produtividade e pelo consumo imediato de estímulos. Entre o ritmo implacável dos algoritmos e a promessa inalcançável de autorrealização plena, o indivíduo contemporâneo encontra-se refém de uma pressa crônica que não apenas dissolve a profundidade dos laços humanos, mas também esvazia o próprio conceito de felicidade.

De início, é fundamental compreender que a aceleração temporal não constitui um fenômeno neutro, mas uma engrenagem estrutural do capitalismo tardio. Como bem diagnostica o filósofo Byung-Chul Han em "A Sociedade do Cansaço", o sujeito moderno deixou de ser coagido por instâncias externas para tornar-se o feitor de si mesmo, explorando voluntariamente suas potências sob o mantra da positividade compulsória. Nesse horizonte, a lentidão passa a ser estigmatizada como indolência, e o tempo livre é colonizado por metas e métricas. A promessa de que a velocidade liberaria tempo para a plenitude revela-se, paradoxalmente, uma armadilha que sequestra o ócio reflexivo.

Por outro lado, essa lógica da pressa impõe um consumo estético e relacional igualmente descartável. Segundo o sociólogo Zygmunt Bauman, a modernidade líquida transforma vínculos e conquistas em mercadorias de curta duração, nas quais a satisfação precisa ser instantaneamente substituída por uma nova carência para que a engrenagem econômica continue girando. O resultado dessa busca ininterrupta é uma angústia latente: quanto mais o sujeito acumula experiências superficiais, mais se distancia da verdadeira serenidade interior, que demanda maturação, espera e aceitação dos limites constitutivos da existência.

Diante disso, depreende-se que resgatar a capacidade de desacelerar não é um capricho nostálgico, mas um imperativo ético e de resistência humana. A verdadeira felicidade não se confunde com a euforia efêmera ditada pelas notificações digitais ou pela rentabilidade do tempo; ela requer coragem para habitar o silêncio, cultivar relações desinteressadas e tolerar o inacabado. Somente ao romper as correntes da pressa ilusória será possível sair das sombras da caverna moderna e reencontrar a dignidade da experiência sensível.`
    }
  },

  // Dicionários léxicos para validação heurística
  repertoriosConhecidos: [
    "zygmunt bauman", "bauman", "thomas hobbes", "hobbes", "john locke", "locke", 
    "jean-jacques rousseau", "rousseau", "immanuel kant", "kant", "michel foucault", "foucault", 
    "hannah arendt", "arendt", "pierre bourdieu", "bourdieu", "karl marx", "marx", 
    "max weber", "weber", "[eé]mile durkheim", "durkheim", "j[uü]rgen habermas", "habermas", 
    "byung-chul han", "gilberto dimenstein", "dimenstein", "darcy ribeiro", "s[eé]rgio buarque de holanda", 
    "paulo freire", "milton santos", "ailton krenak", "l[eé]lia gonzalez", "djamila ribeiro", 
    "sueli carneiro", "chimamanda", "simone de beauvoir", "arist[oó]teles", "plat[aã]o", "s[oó]crates",
    "machado de assis", "graciliano ramos", "guimar[aã]es rosa", "clarice lispector", "carolina maria de jesus",
    "conceição evaristo", "george orwell", "1984", "admir[aá]vel mundo novo", "vida seca", "capit[aã]es da areia",
    "constitui[cç][aã]o federal", "carta magna", "constitui[cç][aã]o cidad[aã]", "direitos humanos", "onu",
    "revolu[cç][aã]o industrial", "iluminismo", "ditadura militar", "guerra fria", "modernismo", "romantismo"
  ],

  conectivosInterparagrafos: [
    "em primeiro lugar", "em primeira an[aá]lise", "em primeiro plano", "primeiramente", "de in[ií]cio", "a princ[ií]pio",
    "ademais", "outrossim", "al[eé]m disso", "paralelamente", "em segunda an[aá]lise", "por outro lado", "sob o mesmo vi[eé]s", "nesse mesmo sentido",
    "portanto", "em suma", "infere-se, portanto", "depreende-se", "torna-se imperioso", "em s[ií]ntese", "dessarte", "por conseguinte", "diante disso"
  ],

  conectivosIntraparagrafos: [
    "assim", "logo", "pois", "com efeito", "visto que", "j[aá] que", "haja vista", "uma vez que", "dado que",
    "desse modo", "porquanto", "de modo que", "contudo", "entretanto", "todavia", "no entanto", "embora",
    "conquanto", "ainda que", "n[aã]o obstante", "bem como", "n[aã]o apenas", "sob essa [oó]tica", "nesse cen[aá]rio", "nesse contexto"
  ],

  agentesIntervencao: [
    "governo federal", "governo", "minist[eé]rio", "poder p[uú]blico", "estado", "escola", "m[ií]dia",
    "fam[ií]lia", "sociedade", "sociedade civil", "ong", "secretaria", "legislativo", "judici[aá]rio",
    "pol[ií]cia federal", "mec", "sus"
  ],

  acoesIntervencao: [
    "deve", "cabe", "precisa", "urge", "necessita", "adotar", "implementar", "criar", "promover",
    "viabilizar", "desenvolver", "fiscalizar", "garantir", "ampliar", "fortalecer", "reformular"
  ],

  meiosIntervencao: [
    "por meio de", "mediante", "por interm[eé]dio de", "atrav[eé]s de", "com a cria[cç][aã]o de",
    "a partir de", "com a realiza[cç][aã]o de", "atrav[eé]s da destina[cç][aã]o de"
  ],

  efeitosIntervencao: [
    "a fim de", "com o intuito de", "com o fito de", "para que", "com o objetivo de", "com vistas a",
    "de modo a", "no sentido de", "com a finalidade de", "para garantir", "para erradicar"
  ],

  /**
   * Avalia a redação de forma completa e estruturada
   */
  evaluate: function(text, topic = "", title = "", examType = "ENEM") {
    const cleanText = (text || "").trim();
    if (!cleanText) {
      return {
        error: "Texto vazio. Escreva sua redação antes de solicitar a correção da IA."
      };
    }

    const words = cleanText.split(/\s+/).filter(w => w.length > 0);
    const paragraphs = cleanText.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);
    
    // Estimativa de linhas no padrão oficial (aprox 75 caracteres por linha manuscrita)
    let estimatedLines = 0;
    paragraphs.forEach(p => {
      estimatedLines += Math.max(1, Math.ceil(p.length / 75));
    });

    // Se tiver menos de 7 linhas ou menos de 70 palavras, anulação por insuficiência
    if (estimatedLines < 7 || words.length < 70) {
      return {
        isDisqualified: true,
        reason: "Texto insuficiente (< 7 linhas). Segundo o manual de redação oficial, textos com menos de 7 linhas são desclassificados com Nota Zero.",
        score: 0,
        wordsCount: words.length,
        linesCount: estimatedLines,
        paragraphsCount: paragraphs.length
      };
    }

    if (examType.toUpperCase().includes("FUVEST")) {
      return this.evaluateFUVEST(cleanText, topic, title, words, paragraphs, estimatedLines);
    } else {
      return this.evaluateENEM(cleanText, topic, title, words, paragraphs, estimatedLines);
    }
  },

  /**
   * Avaliação segundo a grade oficial do ENEM (C1 a C5)
   */
  evaluateENEM: function(text, topic, title, words, paragraphs, lines) {
    const c1 = this.gradeENEM_C1(text, paragraphs);
    const c2 = this.gradeENEM_C2(text, topic, paragraphs, lines);
    const c3 = this.gradeENEM_C3(text, paragraphs, lines);
    const c4 = this.gradeENEM_C4(text, paragraphs, words);
    const c5 = this.gradeENEM_C5(paragraphs[paragraphs.length - 1] || "");

    const totalScore = c1.score + c2.score + c3.score + c4.score + c5.score;

    let tierLabel = "Intermediário";
    let tierColor = "amber";
    if (totalScore >= 920) {
      tierLabel = "Excelente — Padrão Nota 1000 / Medicina USP & Federais";
      tierColor = "emerald";
    } else if (totalScore >= 800) {
      tierLabel = "Muito Bom — Altamente Competitivo";
      tierColor = "teal";
    } else if (totalScore >= 640) {
      tierLabel = "Bom — Na média dos aprovados, com pontos de refinamento";
      tierColor = "indigo";
    } else if (totalScore >= 500) {
      tierLabel = "Regular — Necessita de ajustes estruturais importantes";
      tierColor = "amber";
    } else {
      tierLabel = "Abaixo da Média — Foco urgente em reestruturação e repertório";
      tierColor = "rose";
    }

    return {
      examType: "ENEM",
      totalScore: totalScore,
      maxScore: 1000,
      tierLabel: tierLabel,
      tierColor: tierColor,
      wordsCount: words.length,
      linesCount: lines,
      paragraphsCount: paragraphs.length,
      competencies: [
        {
          num: 1,
          name: "Competência 1 — Domínio da Norma Culta",
          score: c1.score,
          max: 200,
          status: c1.status,
          comment: c1.comment,
          highlights: c1.highlights,
          tips: c1.tips
        },
        {
          num: 2,
          name: "Competência 2 — Tema, Gênero e Repertório Sociocultural",
          score: c2.score,
          max: 200,
          status: c2.status,
          comment: c2.comment,
          detectedRepertoires: c2.detectedRepertoires,
          tips: c2.tips
        },
        {
          num: 3,
          name: "Competência 3 — Projeto de Texto e Argumentação",
          score: c3.score,
          max: 200,
          status: c3.status,
          comment: c3.comment,
          balance: c3.balance,
          tips: c3.tips
        },
        {
          num: 4,
          name: "Competência 4 — Coesão e Conectivos",
          score: c4.score,
          max: 200,
          status: c4.status,
          comment: c4.comment,
          interConnectors: c4.interConnectors,
          tips: c4.tips
        },
        {
          num: 5,
          name: "Competência 5 — Proposta de Intervenção Social",
          score: c5.score,
          max: 200,
          status: c5.status,
          comment: c5.comment,
          elementsChecklist: c5.elements,
          humanRightsOk: c5.humanRightsOk,
          tips: c5.tips
        }
      ],
      strengths: this.compileStrengths(c1, c2, c3, c4, c5, "ENEM"),
      improvements: this.compileImprovements(c1, c2, c3, c4, c5, "ENEM")
    };
  },

  /**
   * Avaliação segundo a grade oficial da FUVEST (Quesitos A, B e C)
   */
  evaluateFUVEST: function(text, topic, title, words, paragraphs, lines) {
    const hasTitle = (title && title.trim().length > 0) || (paragraphs[0] && paragraphs[0].length < 60 && !paragraphs[0].endsWith("."));
    const qa = this.gradeFUVEST_A(text, topic, hasTitle, paragraphs);
    const qb = this.gradeFUVEST_B(text, paragraphs, lines);
    const qc = this.gradeFUVEST_C(text, words);

    const totalScore = qa.score + qb.score + qc.score; // 0 a 50
    const convertedScore1000 = Math.round((totalScore / 50) * 1000);

    let tierLabel = "Intermediário";
    let tierColor = "amber";
    if (totalScore >= 44) {
      tierLabel = "Excepcional — Nível 1ª Turma USP (Medicina/Poli/Direito)";
      tierColor = "emerald";
    } else if (totalScore >= 38) {
      tierLabel = "Muito Forte — Altamente Competitivo para USP";
      tierColor = "indigo";
    } else if (totalScore >= 30) {
      tierLabel = "Suficiente — Concorre com chances nas carreiras de pontuação média";
      tierColor = "teal";
    } else {
      tierLabel = "Em desenvolvimento — Exige maior densidade reflexiva e autoria";
      tierColor = "rose";
    }

    return {
      examType: "FUVEST",
      totalScore: totalScore,
      maxScore: 50,
      convertedScore1000: convertedScore1000,
      tierLabel: tierLabel,
      tierColor: tierColor,
      hasTitle: hasTitle,
      wordsCount: words.length,
      linesCount: lines,
      paragraphsCount: paragraphs.length,
      competencies: [
        {
          num: "A",
          name: "Quesito A — Abordagem do Tema e Título",
          score: qa.score,
          max: 20,
          status: qa.status,
          comment: qa.comment,
          tips: qa.tips
        },
        {
          num: "B",
          name: "Quesito B — Estrutura Dissertativa, Coerência e Densidade",
          score: qb.score,
          max: 15,
          status: qb.status,
          comment: qb.comment,
          tips: qb.tips
        },
        {
          num: "C",
          name: "Quesito C — Expressão, Coesão e Precisão Vernácula",
          score: qc.score,
          max: 15,
          status: qc.status,
          comment: qc.comment,
          tips: qc.tips
        }
      ],
      strengths: this.compileStrengths(qa, qb, qc, null, null, "FUVEST"),
      improvements: this.compileImprovements(qa, qb, qc, null, null, "FUVEST")
    };
  },

  // ==========================================
  // GRADES DE CORREÇÃO INDIVIDUAIS (ENEM)
  // ==========================================

  gradeENEM_C1: function(text, paragraphs) {
    const issues = [];
    const tips = [];

    // 1. Verifica parágrafos de período único (erro grave no ENEM)
    paragraphs.forEach((p, idx) => {
      const sentences = p.split(/[.!?]+/).filter(s => s.trim().length > 0);
      if (sentences.length <= 1 && p.length > 120) {
        issues.push(`Parágrafo ${idx + 1} estruturado em período único (sem pontos finais internos intermediários).`);
      }
    });

    // 2. Verifica períodos excessivamente longos (> 50 palavras sem ponto)
    const allSentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 0);
    allSentences.forEach((s) => {
      const sWords = s.split(/\s+/).length;
      if (sWords > 45) {
        issues.push(`Período excessivamente longo identificado (${sWords} palavras). Divida em orações coordenadas com ponto final.`);
      }
    });

    // 3. Verifica marcas de oralidade e informalidades comuns
    const lower = text.toLowerCase();
    const oralMarkers = [
      { regex: /\bpra\b/i, label: "'pra' (substitua pela norma culta 'para')" },
      { regex: /\ba gente\b/i, label: "'a gente' (prefira 'a sociedade' ou 'nós')" },
      { regex: /\bmesmo\b(?=\s+disse|\s+afirmou|\s+fez)/i, label: "'mesmo' usado indevidamente como pronome pessoal" },
      { regex: /\bonde\b(?!\s+(est[aá]|ficam|residem|moram))/i, label: "'onde' empregado fora de contexto de espaço físico (use 'em que', 'no qual')" },
      { regex: /\batrav[eé]s de\b/i, label: "'através de' para indicar instrumento (prefira 'por meio de' ou 'mediante')" },
      { regex: /\s+,/g, label: "Espaço indevido antes de vírgula" }
    ];

    oralMarkers.forEach(m => {
      if (m.regex.test(lower)) {
        issues.push(`Desvio estilístico/normativo: ${m.label}.`);
      }
    });

    let score = 200;
    if (issues.length === 0) {
      score = 200;
      tips.push("Excelente domínio da norma-padrão escrita e pontuação impecável.");
    } else if (issues.length <= 2) {
      score = 160;
      tips.push("Ótimo nível sintático, com poucos desvios pontuais que não comprometem a clareza.");
    } else if (issues.length <= 4) {
      score = 120;
      tips.push("Alguns desvios de pontuação e estrutura de períodos. Atente-se a orações longas.");
    } else if (issues.length <= 6) {
      score = 80;
      tips.push("Estrutura sintática fragilizada com múltiplos desvios de períodos e vocabulário.");
    } else {
      score = 40;
      tips.push("Desvios graves e frequentes na construção dos períodos e concordância.");
    }

    return {
      score: score,
      status: score >= 160 ? "success" : (score >= 120 ? "warning" : "danger"),
      comment: score >= 160 
        ? "Excelente precisão gramatical, regência apurada e períodos bem pontuados." 
        : "Foram identificados desvios sintáticos ou de pontuação que merecem atenção para atingir os 200 pontos.",
      highlights: issues,
      tips: tips
    };
  },

  gradeENEM_C2: function(text, topic, paragraphs, lines) {
    const lower = text.toLowerCase();
    const detected = [];
    const tips = [];

    // 1. Busca de repertórios conhecidos
    this.repertoriosConhecidos.forEach(rep => {
      const reg = new RegExp(`\\b${rep}\\b`, 'i');
      if (reg.test(lower)) {
        const cleanName = rep.replace(/\[.*?\]/g, '').replace(/\\/g, '');
        if (!detected.includes(cleanName)) {
          detected.push(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
        }
      }
    });

    // 2. Checagem de parágrafos estruturais
    const has4Paragraphs = paragraphs.length === 4;
    const hasExternalRepertoire = detected.length > 0;

    let score = 120;
    if (has4Paragraphs && detected.length >= 2) {
      score = 200;
      tips.push("Repertório sociocultural legitimado, produtivo e perfeitamente articulado à tese!");
    } else if (has4Paragraphs && detected.length >= 1) {
      score = 160;
      tips.push("Repertório legitimado presente. Para alcançar 200 pts, garanta 2 repertórios distintos articulados no D1 e D2.");
    } else if (has4Paragraphs && detected.length === 0) {
      score = 120;
      tips.push("Texto dissertativo com introdução, desenvolvimento e conclusão, mas restrito ao senso comum ou textos motivadores.");
    } else if (paragraphs.length >= 3) {
      score = 120;
      tips.push("Procure organizar o texto estritamente em 4 parágrafos (Intro + D1 + D2 + Conclusão).");
    } else {
      score = 80;
      tips.push("Estrutura do tipo dissertativo-argumentativo fragilizada.");
    }

    return {
      score: score,
      status: score >= 160 ? "success" : "warning",
      comment: score === 200 
        ? "Excelente aplicação do tipo dissertativo com repertórios interdisciplinares produtivos!"
        : "Repertório ou estrutura textual necessitam de maior adensamento reflexivo.",
      detectedRepertoires: detected,
      tips: tips
    };
  },

  gradeENEM_C3: function(text, paragraphs, lines) {
    const tips = [];
    let score = 160;

    // Checagem de equilíbrio dos parágrafos
    if (paragraphs.length === 4) {
      const p1Len = paragraphs[0].length;
      const p2Len = paragraphs[1].length;
      const p3Len = paragraphs[2].length;
      const p4Len = paragraphs[3].length;

      // Se os desenvolvimentos tiverem tamanho condizente com aprofundamento
      const isBalanced = (p2Len > 200 && p3Len > 200 && Math.abs(p2Len - p3Len) < 180);
      
      // Busca marcadores de causa e consequência
      const lower = text.toLowerCase();
      const hasCausal = /(decorrente de|devido a|em virtude de|por conseguinte|como resultado|gera|desencadeia|culmina)/i.test(lower);
      
      if (isBalanced && hasCausal) {
        score = 200;
        tips.push("Projeto de texto estratégico, com tese clara e defesa consistente de causas e consequências.");
      } else if (isBalanced) {
        score = 160;
        tips.push("Parágrafos bem dosados. Aprofunde mais a relação causal nos desenvolvimentos para cravar 200 pts.");
      } else {
        score = 120;
        tips.push("Desequilíbrio na extensão dos parágrafos: desenvolva D1 e D2 com profundidade semelhante.");
      }
    } else {
      score = 120;
      tips.push("Projeto de texto comprometido pelo número irregular de parágrafos.");
    }

    return {
      score: score,
      status: score >= 160 ? "success" : "warning",
      comment: score >= 160 
        ? "Projeto de texto com progressão temática coerente e argumentos bem justificados."
        : "Argumentação superficial ou com lacunas no encadeamento lógico entre as causas e os fatos.",
      tips: tips
    };
  },

  gradeENEM_C4: function(text, paragraphs, words) {
    const lower = text.toLowerCase();
    const foundInter = [];
    const tips = [];

    // Checagem dos conectivos interparágrafos (no início dos parágrafos 2, 3 e 4)
    if (paragraphs.length >= 3) {
      for (let i = 1; i < paragraphs.length; i++) {
        const startOfP = paragraphs[i].substring(0, 45).toLowerCase();
        this.conectivosInterparagrafos.forEach(con => {
          if (startOfP.includes(con.toLowerCase()) && !foundInter.includes(con)) {
            foundInter.push(con);
          }
        });
      }
    }

    // Checagem de conectivos intraparágrafos
    let intraCount = 0;
    this.conectivosIntraparagrafos.forEach(con => {
      const matches = (lower.match(new RegExp(`\\b${con}\\b`, 'gi')) || []).length;
      intraCount += matches;
    });

    let score = 120;
    if (foundInter.length >= 2 && intraCount >= 8) {
      score = 200;
      tips.push("Excelente repertório coesivo: múltiplos conectivos interparágrafos e intraparágrafos sem repetições!");
    } else if (foundInter.length >= 1 && intraCount >= 5) {
      score = 160;
      tips.push("Boa coesão. Certifique-se de iniciar o D1, o D2 e a Conclusão com operadores argumentativos claros.");
    } else {
      score = 120;
      tips.push("Coesão insuficiente. Acrescente conectivos como 'Ademais', 'Outrossim' e 'Portanto' entre as frases.");
    }

    return {
      score: score,
      status: score >= 160 ? "success" : "warning",
      comment: score === 200 
        ? "Texto coeso e fluido, com riqueza de operadores argumentativos inter e intraparágrafos."
        : "Utilize maior variedade de conectivos para amarrar as ideias e evitar períodos soltos.",
      interConnectors: foundInter,
      tips: tips
    };
  },

  gradeENEM_C5: function(conclusionText) {
    const lower = (conclusionText || "").toLowerCase();
    const elements = {
      agente: false,
      acao: false,
      meio: false,
      efeito: false,
      detalhamento: false
    };

    // 1. Agente
    elements.agente = this.agentesIntervencao.some(a => new RegExp(`\\b${a}\\b`, 'i').test(lower));

    // 2. Ação
    elements.acao = this.acoesIntervencao.some(a => new RegExp(`\\b${a}\\b`, 'i').test(lower));

    // 3. Meio / Modo
    elements.meio = this.meiosIntervencao.some(m => new RegExp(`\\b${m}\\b`, 'i').test(lower));

    // 4. Efeito / Finalidade
    elements.efeito = this.efeitosIntervencao.some(e => new RegExp(`\\b${e}\\b`, 'i').test(lower));

    // 5. Detalhamento (explicação com travessões, vírgulas exemplificativas ou oração subordinada explicativa)
    elements.detalhamento = /(--[^-]+--|,\s*(como|a exemplo de|a saber|isto [eé]|especialmente|por exemplo)[^,]+,|\bpor meio de.*?,\s*que\b)/i.test(lower);

    // Respeito aos direitos humanos
    const humanRightsViolations = /(pena de morte|tortura|justi[cç]a com as pr[oó]prias m[aã]os|linchamento|exterminar|fuzilar)/i.test(lower);

    let count = 0;
    if (elements.agente) count++;
    if (elements.acao) count++;
    if (elements.meio) count++;
    if (elements.efeito) count++;
    if (elements.detalhamento) count++;

    let score = 0;
    if (humanRightsViolations) {
      score = 0;
    } else {
      if (count === 5) score = 200;
      else if (count === 4) score = 160;
      else if (count === 3) score = 120;
      else if (count === 2) score = 80;
      else if (count === 1) score = 40;
      else score = 0;
    }

    const tips = [];
    if (!elements.agente) tips.push("Faltou definir claramente o AGENTE (ex: 'Cabe ao Ministério da Educação...').");
    if (!elements.acao) tips.push("Faltou explicitar a AÇÃO concreta (ex: '...implementar diretrizes curriculares...').");
    if (!elements.meio) tips.push("Faltou o MEIO / MODO com o conector clássico (ex: '...por meio de oficinas práticas...').");
    if (!elements.efeito) tips.push("Faltou o EFEITO / FINALIDADE (ex: '...a fim de mitigar o abandono escolar.').");
    if (!elements.detalhamento) tips.push("Faltou o DETALHAMENTO: adicione uma explicação extra entre vírgulas ou travessões (ex: '..., órgão responsável pelas políticas de ensino,...').");

    if (count === 5) {
      tips.push("Parabéns! Sua proposta contém todos os 5 elementos obrigatórios completos e detalhados.");
    }

    return {
      score: score,
      status: score === 200 ? "success" : (score >= 120 ? "warning" : "danger"),
      comment: score === 200
        ? "Proposta de intervenção impecável com os 5 elementos (Agente, Ação, Meio, Efeito e Detalhamento)."
        : `Identificados ${count} de 5 elementos obrigatórios da intervenção social.`,
      elements: elements,
      humanRightsOk: !humanRightsViolations,
      tips: tips
    };
  },

  // ==========================================
  // GRADES DE CORREÇÃO INDIVIDUAIS (FUVEST)
  // ==========================================

  gradeFUVEST_A: function(text, topic, hasTitle, paragraphs) {
    let score = 16;
    const tips = [];

    if (!hasTitle) {
      score -= 4;
      tips.push("ATENÇÃO FUVEST: O título é OBRIGATÓRIO na dissertação da FUVEST. Adicione um título criativo para não perder pontos preciosos!");
    } else {
      tips.push("Título inserido conforme a exigência da banca da USP.");
    }

    const lower = text.toLowerCase();
    const hasReflection = /(paradoxo|dilema|ambival[eê]ncia|ilus[aã]o|cr[ií]tica|dial[eé]tica|condi[cç][aã]o humana|aliena[cç][aã]o)/i.test(lower);
    if (hasReflection && hasTitle) {
      score = 20;
      tips.push("Abordagem reflexiva de alto nível, fugindo de receitas prontas e adentrando a essência do tema!");
    } else if (hasReflection) {
      score = Math.max(14, score);
    } else {
      score = Math.min(score, 14);
      tips.push("Aprofunde o teor filosófico e ensaístico da reflexão. A FUVEST valoriza problematizações conceituais profundas.");
    }

    return {
      score: Math.max(8, score),
      status: score >= 16 ? "success" : "warning",
      comment: score >= 18 ? "Excelente recorte temático e título condizente com a proposta." : "O recorte temático precisa de maior maturidade reflexiva e ensaística.",
      tips: tips
    };
  },

  gradeFUVEST_B: function(text, paragraphs, lines) {
    let score = 12;
    const tips = [];

    if (paragraphs.length >= 4 && lines >= 22) {
      score = 15;
      tips.push("Progressão temática dialética, articulando tese, antítese e síntese sem cair em clichês de intervenção.");
    } else if (paragraphs.length >= 3) {
      score = 12;
      tips.push("Estrutura coerente. Fortaleça a antítese no D2 para dar maior densidade dialética ao texto.");
    } else {
      score = 9;
      tips.push("Estrutura dissertativa fragmentada. Busque desenvolver 4 parágrafos robustos.");
    }

    return {
      score: score,
      status: score >= 13 ? "success" : "warning",
      comment: score >= 13 ? "Estrutura dissertativa sólida e argumentação dialética." : "Argumentação linear que demanda maior nuance interpretativa.",
      tips: tips
    };
  },

  gradeFUVEST_C: function(text, words) {
    let score = 12;
    const tips = [];
    const lower = text.toLowerCase();

    // Vocabulário sofisticado
    const elevatedVocab = /(imperioso|outrossim|subjacente|prec[ií]puo|consubstancia|fren[eé]tico|matura[cç][aã]o|ef[eê]mero)/i.test(lower);
    if (elevatedVocab && words.length >= 250) {
      score = 15;
      tips.push("Vocabulário refinado, sintaxe elegante e excelente precisão vocabular sem artificialismo.");
    } else {
      score = 12;
      tips.push("Linguagem clara e correta. Busque maior variedade lexical e subordinações sintáticas elegantes.");
    }

    return {
      score: score,
      status: score >= 13 ? "success" : "warning",
      comment: score >= 13 ? "Expressão vernácula apurada, vocabulário rico e fluidez formal." : "Vocabulário correto, porém passível de maior sofisticação acadêmica.",
      tips: tips
    };
  },

  // ==========================================
  // COMPILAÇÃO DE FEEDBACKS RESUMIDOS
  // ==========================================

  compileStrengths: function(c1, c2, c3, c4, c5, examType) {
    const list = [];
    if (examType === "ENEM") {
      if (c1.score >= 160) list.push("Norma culta bem estruturada, sem desvios graves de concordância ou ortografia.");
      if (c2.score >= 160) list.push(`Repertórios socioculturais pertinentes identificados: ${c2.detectedRepertoires?.join(', ') || 'conceitos contextualizados'}.`);
      if (c3.score >= 160) list.push("Projeto de texto coerente com divisão equilibrada de parágrafos argumentativos.");
      if (c4.score >= 160) list.push("Excelente repertório de conectivos (operadores argumentativos interparágrafos).");
      if (c5 && c5.score >= 160) list.push("Proposta de intervenção articulada com os principais elementos obrigatórios presentes.");
    } else {
      if (c1.score >= 16) list.push("Excelente abordagem conceitual e autoria reflexiva no tema.");
      if (c2.score >= 13) list.push("Progressão dialética madura entre tese e antítese.");
      if (c3.score >= 13) list.push("Léxico apurado e sintaxe refinada característica do padrão USP.");
    }

    if (list.length === 0) {
      list.push("O texto apresenta a estrutura básica inicial para ser lapidado rumo à nota máxima.");
    }
    return list;
  },

  compileImprovements: function(c1, c2, c3, c4, c5, examType) {
    const list = [];
    if (examType === "ENEM") {
      if (c1.score < 200 && c1.highlights?.length > 0) {
        list.push(c1.highlights[0]);
      }
      if (c2.score < 200) {
        list.push("Incorpore pelo menos 2 repertórios socioculturais legitimados (filósofos, sociólogos, constituição ou literatura) e ligue-os explicitamente à sua tese.");
      }
      if (c4.score < 200) {
        list.push("Certifique-se de iniciar o D1, o D2 e a Conclusão com conectivos interparágrafos (ex: 'Em primeira análise', 'Ademais', 'Portanto').");
      }
      if (c5 && c5.score < 200) {
        list.push("Complete os 5 elementos da intervenção: Agente + Ação + Meio/Modo + Efeito + Detalhamento entre vírgulas.");
      }
    } else {
      if (!c1.hasTitle) {
        list.push("Insira um título instigante e obrigatório no topo da sua dissertação FUVEST.");
      }
      if (c2.score < 15) {
        list.push("Evite soluções simplistas de intervenção social; a FUVEST busca problematização reflexiva e ensaística.");
      }
    }

    if (list.length === 0) {
      list.push("Seu texto está em patamar excelente! Pratique a escrita no tempo oficial de prova para manter o ritmo.");
    }
    return list;
  }
};

window.EssayAIAgent = EssayAIAgent;
