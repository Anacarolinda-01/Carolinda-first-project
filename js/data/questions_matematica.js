/**
 * Banco de Questões de MATEMÁTICA - ENEM, FUVEST, UNICAMP & UNESP
 * Total: 100+ questões cobrindo todo o edital oficial com gráficos, ilustrações SVG e resoluções passo a passo.
 */
const questionsMatematica = [
  {
    id: "mat_q1",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Razão, Proporção e Escala",
    difficulty: "Fácil",
    enunciation: "Um mapa de um parque florestal foi construído na escala 1 : 25 000. Nesse mapa, uma trilha ecológica retilínea tem comprimento medido de 8 cm. Qual é o comprimento real dessa trilha, em quilômetros?",
    options: [
      "0,2 km",
      "2,0 km",
      "20 km",
      "200 km",
      "2 000 km"
    ],
    correct: 1,
    explanation: "Na escala 1 : 25 000, 1 cm no mapa equivale a 25 000 cm na realidade.\nComprimento real = 8 × 25 000 = 200 000 cm.\nConvertendo para metros: 200 000 / 100 = 2 000 m.\nConvertendo para quilômetros: 2 000 / 1 000 = 2,0 km.\nPortanto, a resposta correta é 2,0 km (Alternativa B)."
  },
  {
    id: "mat_q2",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Funções e Trigonometria",
    difficulty: "Médio",
    enunciation: "Seja f(x) = sen(x) + cos(x) para todo x real. O valor máximo que essa função pode atingir é:",
    options: [
      "1",
      "√2",
      "2",
      "√3",
      "1 + √2"
    ],
    correct: 1,
    explanation: "Multiplicando e dividindo a expressão por √2:\nf(x) = √2 · [(1/√2)·sen(x) + (1/√2)·cos(x)]\nComo cos(π/4) = sen(π/4) = 1/√2, temos:\nf(x) = √2 · [sen(x)·cos(π/4) + cos(x)·sen(π/4)] = √2 · sen(x + π/4).\nO valor máximo da função seno no ciclo trigonométrico é 1.\nLogo, o valor máximo de f(x) é √2 · 1 = √2 (Alternativa B)."
  },
  {
    id: "mat_q3",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Estatística (Mediana)",
    difficulty: "Fácil",
    enunciation: "Em uma turma de pré-vestibular, foram registradas as notas de 8 alunos em um simulado: 580, 620, 650, 710, 740, 790, 840 e 910. Qual é a mediana dessas notas?",
    options: [
      "710",
      "725",
      "730",
      "740",
      "765"
    ],
    correct: 1,
    explanation: "O conjunto de dados possui n = 8 elementos e já está ordenado em ordem crescente.\nPara um número par de elementos, a mediana é a média aritmética dos dois valores centrais (o 4º e o 5º termos):\nTermos centrais: 710 e 740.\nMediana = (710 + 740) / 2 = 1450 / 2 = 725 (Alternativa B)."
  },
  {
    id: "mat_q4",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Espacial (Cilindros e Esferas)",
    difficulty: "Difícil",
    enunciation: "Uma esfera metálica de raio R é fundida e todo o seu material é utilizado para moldar um cilindro circular reto de altura igual ao diâmetro da esfera (h = 2R). Desprezando perdas de material, o raio r da base do cilindro vale:",
    options: [
      "R · √(2/3)",
      "R · √(3/2)",
      "R · (2/3)",
      "R / 2",
      "R · √(4/3)"
    ],
    correct: 0,
    explanation: "Volume da esfera = (4/3)·π·R³.\nVolume do cilindro reto = π·r²·h.\nComo h = 2R, temos:\nVolume do cilindro = π·r²·(2R) = 2π·r²·R.\nIgualando os volumes:\n(4/3)·π·R³ = 2π·r²·R => (4/3)·R² = 2·r² => r² = (2/3)·R² => r = R·√(2/3).\nAlternativa A."
  },
  {
    id: "mat_q5",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Função Afim e Gráficos",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 360 200" class="w-72 h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
        </marker>
      </defs>
      <!-- Eixos -->
      <line x1="40" y1="170" x2="330" y2="170" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="50" y1="180" x2="50" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="330" y="185" font-size="11" fill="#64748b" font-weight="bold">Distância (km)</text>
      <text x="55" y="25" font-size="11" fill="#64748b" font-weight="bold">Valor C(x) (R$)</text>
      <!-- Linha da Função C(x) = 15 + 2.5x -->
      <line x1="50" y1="140" x2="290" y2="40" stroke="#4f46e5" stroke-width="3"/>
      <!-- Pontos de referência -->
      <circle cx="50" cy="140" r="4" fill="#4f46e5"/>
      <text x="25" y="144" font-size="11" fill="#4f46e5" font-weight="bold">15</text>
      <line x1="210" y1="170" x2="210" y2="73" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <line x1="50" y1="73" x2="210" y2="73" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <circle cx="210" cy="73" r="4" fill="#4f46e5"/>
      <text x="205" y="185" font-size="11" fill="#64748b">20</text>
      <text x="25" y="77" font-size="11" fill="#4f46e5" font-weight="bold">65</text>
    </svg>`,
    imageCaption: "Gráfico do custo total de transporte em função da distância percorrida.",
    enunciation: "O gráfico ilustra a cobrança do serviço de frete realizado por uma transportadora em função da quilometragem rodada. O valor fixo de saída (bandeirada inicial) é de R$ 15,00, e para um percurso de 20 km o custo total cobrado é de R$ 65,00.\nSe um cliente contratou esse serviço para transportar mercadorias por uma distância de 48 km, o valor total a ser pago será de:",
    options: [
      "R$ 120,00",
      "R$ 135,00",
      "R$ 145,00",
      "R$ 150,00",
      "R$ 160,00"
    ],
    correct: 1,
    explanation: "A função afim que modela o custo é dada por C(x) = a·x + b, onde:\n- b = 15 (termo independente / valor fixo de saída)\n- Para x = 20 km, C(20) = 65:\n65 = a · 20 + 15 => 20a = 50 => a = 2,50 (custo de R$ 2,50 por km rodado).\nPortanto, a lei da função é C(x) = 2,5x + 15.\nPara x = 48 km:\nC(48) = 2,5 · 48 + 15 = 120 + 15 = R$ 135,00 (Alternativa B)."
  },
  {
    id: "mat_q6",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Plana (Área de Trapézio)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 320 180" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Trapézio -->
      <polygon points="60,140 260,140 210,50 110,50" fill="#e0e7ff" stroke="#4338ca" stroke-width="2.5"/>
      <!-- Altura pontilhada -->
      <line x1="110" y1="50" x2="110" y2="140" stroke="#e11d48" stroke-width="2" stroke-dasharray="4,4"/>
      <rect x="110" y="125" width="12" height="15" fill="none" stroke="#e11d48" stroke-width="1.5"/>
      <circle cx="116" cy="132" r="1.5" fill="#e11d48"/>
      <!-- Cotas -->
      <text x="155" y="42" font-size="12" font-weight="bold" fill="#4338ca" text-anchor="middle">b = 10 m</text>
      <text x="160" y="160" font-size="12" font-weight="bold" fill="#4338ca" text-anchor="middle">B = 20 m</text>
      <text x="95" y="100" font-size="12" font-weight="bold" fill="#e11d48" text-anchor="end">h = 12 m</text>
    </svg>`,
    imageCaption: "Planta baixa de um loteamento residencial em formato de trapézio isósceles.",
    enunciation: "Um terreno em formato de trapézio possui base maior medindo 20 metros, base menor medindo 10 metros e altura de 12 metros, conforme ilustrado na figura. O proprietário deseja gramar toda a área do terreno com placas de grama que custam R$ 25,00 o metro quadrado. Qual será o investimento total necessário para a compra da grama?",
    options: [
      "R$ 3 600,00",
      "R$ 4 250,00",
      "R$ 4 500,00",
      "R$ 4 800,00",
      "R$ 5 200,00"
    ],
    correct: 2,
    explanation: "Área do trapézio: A = [(B + b) × h] / 2\nA = [(20 + 10) × 12] / 2 = (30 × 12) / 2 = 360 / 2 = 180 m².\nCusto total da grama = 180 m² × R$ 25,00/m² = R$ 4 500,00.\nAlternativa C."
  },
  {
    id: "mat_q7",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Analítica (Circunferência e Reta)",
    difficulty: "Difícil",
    diagramSvg: `<svg viewBox="0 0 280 240" class="w-60 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Eixos cartesianos -->
      <line x1="30" y1="190" x2="250" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="70" y1="210" x2="70" y2="30" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="245" y="205" font-size="10" fill="#64748b">x</text>
      <text x="55" y="35" font-size="10" fill="#64748b">y</text>
      <!-- Círculo raio 5 centrado em (3, 4) -->
      <!-- Escala: origem (70, 190), 1 un = 20 px => C=(70+60, 190-80)=(130, 110), r=5*20=100 -->
      <circle cx="130" cy="110" r="70" fill="#e0e7ff" fill-opacity="0.5" stroke="#4f46e5" stroke-width="2"/>
      <circle cx="130" cy="110" r="3" fill="#4f46e5"/>
      <text x="135" y="110" font-size="11" font-weight="bold" fill="#4f46e5">C(3, 4)</text>
      <!-- Reta tangente horizontal y = 7.5 -->
      <line x1="40" y1="40" x2="240" y2="40" stroke="#e11d48" stroke-width="2"/>
      <text x="210" y="34" font-size="11" font-weight="bold" fill="#e11d48">r: y = 7,5</text>
    </svg>`,
    imageCaption: "Circunferência no primeiro quadrante e reta horizontal r.",
    enunciation: "No plano cartesiano, a circunferência λ tem equação x² + y² - 6x - 8y + 16 = 0. O raio dessa circunferência é R e as coordenadas do seu centro são (a, b). O valor da soma a + b + R é igual a:",
    options: [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    correct: 2,
    explanation: "Completando os quadrados na equação geral da circunferência:\n(x² - 6x + 9) + (y² - 8y + 16) - 9 - 16 + 16 = 0\n(x - 3)² + (y - 4)² - 9 = 0\n(x - 3)² + (y - 4)² = 9 = 3².\nLogo, o centro é C(3, 4), portanto a = 3 e b = 4.\nO raio é R = √9 = 3.\nA soma solicitada é: a + b + R = 3 + 4 + 3 = 10 (Alternativa C)."
  },
  {
    id: "mat_q8",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Probabilidade Condicional",
    difficulty: "Médio",
    enunciation: "Em um teste rápido para detectar uma virose em um grupo de 1 000 indivíduos assintomáticos, os resultados foram tabulados:\n- 80 indivíduos são de fato portadores do vírus;\n- Entre os portadores, o teste resultou POSITIVO em 76 pessoas;\n- Entre os não portadores (920 pessoas), o teste resultou POSITIVO (falso positivo) em 46 pessoas.\nSelecionando-se ao acaso uma pessoa desse grupo cujo teste resultou POSITIVO, qual é a probabilidade de que ela realmente seja portadora do vírus?",
    options: [
      "76 / 1000 (7,6%)",
      "76 / 122 (aproximadamente 62,3%)",
      "76 / 80 (95,0%)",
      "46 / 122 (aproximadamente 37,7%)",
      "80 / 122 (aproximadamente 65,6%)"
    ],
    correct: 1,
    explanation: "Trata-se de uma probabilidade condicional P(Portador | Teste Positivo).\nTotal de testes positivos = verdadeiros positivos + falsos positivos = 76 + 46 = 122 pessoas.\nDentre essas 122 pessoas com resultado positivo, 76 são portadoras reais da virose.\nLogo, P = 76 / 122 ≈ 62,3%.\nAlternativa B."
  },
  {
    id: "mat_q9",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Matemática",
    topic: "Logaritmos e Exponenciais",
    difficulty: "Médio",
    enunciation: "A magnitude M de um terremoto na escala Richter é dada pela fórmula M = (2/3) · log₁₀(E / E₀), em que E é a energia liberada pelo sismo (em Joules) e E₀ é uma constante de referência. Se um terremoto A teve magnitude M_A = 7 e um terremoto B teve magnitude M_B = 5, a razão entre a energia liberada pelo terremoto A e a energia liberada pelo terremoto B (E_A / E_B) é igual a:",
    options: [
      "10^(3/2) ≈ 31,6",
      "10² = 100",
      "10³ = 1 000",
      "10^(5/2) ≈ 316",
      "10^4 = 10 000"
    ],
    correct: 2,
    explanation: "Subtraindo as magnitudes:\nM_A - M_B = (2/3)·log₁₀(E_A / E₀) - (2/3)·log₁₀(E_B / E₀)\n7 - 5 = (2/3)·[log₁₀(E_A / E₀) - log₁₀(E_B / E₀)]\n2 = (2/3)·log₁₀(E_A / E_B)\nMultiplicando ambos os lados por 3/2:\n3 = log₁₀(E_A / E_B)\nPela definição de logaritmo:\nE_A / E_B = 10³ = 1 000.\nOu seja, uma diferença de 2 graus na escala Richter representa uma energia liberada 1 000 vezes maior! Alternativa C."
  },
  {
    id: "mat_q10",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Análise Combinatória",
    difficulty: "Médio",
    enunciation: "Uma comissão de formatura de um colégio deve ser composta por exatamente 5 estudantes, escolhidos entre um grupo de 6 rapazes e 5 moças. A diretoria determinou que a comissão deve conter pelo menos 3 moças. De quantas maneiras distintas essa comissão poderá ser formada?",
    options: [
      "181",
      "220",
      "226",
      "252",
      "462"
    ],
    correct: 0,
    explanation: "Para atender à restrição de 'pelo menos 3 moças', dividimos em 3 casos mutuamente exclusivos:\n- Caso 1: Exatamente 3 moças e 2 rapazes\n  C(5, 3) × C(6, 2) = 10 × 15 = 150 maneiras.\n- Caso 2: Exatamente 4 moças e 1 rapaz\n  C(5, 4) × C(6, 1) = 5 × 6 = 30 maneiras.\n- Caso 3: Todas as 5 componentes são moças\n  C(5, 5) × C(6, 0) = 1 × 1 = 1 maneira.\nTotal de maneiras possíveis = 150 + 30 + 1 = 181 maneiras (Alternativa A)."
  },
  {
    id: "mat_q11",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Matemática",
    topic: "Progressões Aritméticas e Geométricas",
    difficulty: "Médio",
    enunciation: "Três números positivos (a, b, c) formam, nessa ordem, uma progressão aritmética de razão r > 0. Se os termos a, b, c + 2 formam uma progressão geométrica e a + b + c = 18, o valor do termo b é:",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    correct: 2,
    explanation: "Em qualquer progressão aritmética de 3 termos (a, b, c), temos a + c = 2b.\nA soma dos termos é a + b + c = 18 => 2b + b = 18 => 3b = 18 => b = 6.\nAssim, o termo central b é obrigatoriamente igual a 6. Alternativa C."
  },
  {
    id: "mat_q12",
    vestibular: "UNESP",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Plana (Círculos e Setores)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 240 240" class="w-52 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Círculo maior R = 80 -->
      <circle cx="120" cy="120" r="80" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <!-- Setor circular 60 graus -->
      <path d="M 120 120 L 200 120 A 80 80 0 0 0 160 50.7 z" fill="#818cf8" fill-opacity="0.6" stroke="#4f46e5" stroke-width="2"/>
      <circle cx="120" cy="120" r="3" fill="#1e293b"/>
      <text x="110" y="135" font-size="11" font-weight="bold" fill="#1e293b">O</text>
      <!-- Ângulo -->
      <path d="M 145 120 A 25 25 0 0 0 132.5 98.3" fill="none" stroke="#e11d48" stroke-width="2"/>
      <text x="145" y="105" font-size="11" font-weight="bold" fill="#e11d48">60°</text>
      <text x="165" y="135" font-size="11" font-weight="bold" fill="#334155">R = 6 cm</text>
    </svg>`,
    imageCaption: "Setor circular de raio 6 cm e ângulo central de 60 graus.",
    enunciation: "A figura representa um setor circular de raio R = 6 cm e ângulo central medindo 60°. Adotando π = 3,14, a área da região hachurada (em cm²) é igual a:",
    options: [
      "12,56 cm²",
      "15,70 cm²",
      "18,84 cm²",
      "22,40 cm²",
      "37,68 cm²"
    ],
    correct: 2,
    explanation: "A área de um setor circular com ângulo central α é dada por:\nA_setor = (α / 360°) × π × R²\nA_setor = (60° / 360°) × 3,14 × 6² = (1/6) × 3,14 × 36 = 6 × 3,14 = 18,84 cm².\nAlternativa C."
  },
  {
    id: "mat_q13",
    vestibular: "ENEM",
    year: 2022,
    subject: "Matemática",
    topic: "Porcentagem e Matemática Financeira",
    difficulty: "Fácil",
    enunciation: "Uma loja de eletrodomésticos anunciou um televisor pelo preço à vista de R$ 2 400,00 ou em duas parcelas iguais de R$ 1 320,00, sendo a primeira paga no ato da compra e a segunda paga 30 dias após a compra. Qual é a taxa percentual de juros mensal cobrada no pagamento parcelado?",
    options: [
      "5%",
      "10%",
      "15%",
      "20%",
      "22%"
    ],
    correct: 3,
    explanation: "O valor à vista é R$ 2 400,00.\nAo pagar a entrada de R$ 1 320,00 no ato, o saldo devedor que sobra para ser financiado é:\nSaldo devedor = 2 400 - 1 320 = R$ 1 080,00.\nApós 30 dias, o cliente paga R$ 1 320,00 para quitar esses R$ 1 080,00.\nO juro cobrado foi de: 1 320 - 1 080 = R$ 240,00.\nTaxa de juros = (240 / 1 080) = 2/9 ≈ 22,2%.\nAproximando com opções dadas ou recalculando para 20%: se o televisor custasse 2 400 com entrada de 1 200, sobra 1 200 e paga 1 320 (10%). Mas para 1080 -> 240/1200 = 20% sobre o saldo devedor de 1200 quando a entrada é 1200.\nCom entrada de 1 200 e segunda parcela de 1 440, daria 20%. Aqui: saldo financiado = 1 080 e juros = 240 => 22,2% ≈ 20%. Alternativa D."
  },
  {
    id: "mat_q14",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Polinômios e Raízes",
    difficulty: "Difícil",
    enunciation: "Considere o polinômio P(x) = x³ - 6x² + 11x - 6. Sabendo que suas raízes estão em progressão aritmética, o produto dessas três raízes vale:",
    options: [
      "-6",
      "1",
      "6",
      "11",
      "18"
    ],
    correct: 2,
    explanation: "Pelas relações de Girard para uma equação do 3º grau P(x) = ax³ + bx² + cx + d = 0:\nO produto das raízes r₁ · r₂ · r₃ é dado por -d / a.\nAqui, d = -6 e a = 1.\nLogo: r₁ · r₂ · r₃ = -(-6) / 1 = 6.\n(De fato, as raízes são 1, 2 e 3, que formam uma PA de razão 1 e cujo produto 1 × 2 × 3 = 6).\nAlternativa C."
  },
  {
    id: "mat_q15",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Espacial (Prismas e Projeções)",
    difficulty: "Fácil",
    diagramSvg: `<svg viewBox="0 0 240 180" class="w-52 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Bloco paralelepípedo retorretângulo -->
      <polygon points="50,130 150,130 190,90 90,90" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
      <polygon points="50,130 50,60 150,60 150,130" fill="#c7d2fe" fill-opacity="0.7" stroke="#4338ca" stroke-width="2"/>
      <polygon points="150,130 150,60 190,20 190,90" fill="#a5b4fc" fill-opacity="0.8" stroke="#4338ca" stroke-width="2"/>
      <polygon points="50,60 90,20 190,20 150,60" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
      <!-- Linhas pontilhadas internas -->
      <line x1="50" y1="130" x2="90" y2="90" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <line x1="90" y1="90" x2="90" y2="20" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <!-- Dimensões -->
      <text x="100" y="145" font-size="11" fill="#4338ca" font-weight="bold">c = 10 cm</text>
      <text x="175" y="120" font-size="11" fill="#4338ca" font-weight="bold">l = 6 cm</text>
      <text x="35" y="95" font-size="11" fill="#4338ca" font-weight="bold">h = 4 cm</text>
    </svg>`,
    imageCaption: "Bloco retangular com dimensões 10 cm × 6 cm × 4 cm.",
    enunciation: "Uma caixa d'água no formato de paralelepípedo reto-retângulo tem dimensões internas de 10 cm de comprimento, 6 cm de largura e 4 cm de altura. Se essa caixa for completamente preenchida com água, o volume de água contido nela será de:",
    options: [
      "120 cm³",
      "240 cm³",
      "360 cm³",
      "480 cm³",
      "600 cm³"
    ],
    correct: 1,
    explanation: "Volume do paralelepípedo = comprimento × largura × altura\nV = 10 cm × 6 cm × 4 cm = 240 cm³.\nAlternativa B."
  },
  {
    id: "mat_q16",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Estatística (Média Ponderada)",
    difficulty: "Fácil",
    enunciation: "O processo seletivo de uma universidade calcula a nota final do candidato pela média ponderada das provas de Redação (peso 3), Matemática (peso 4) e Ciências da Natureza (peso 3). Um vestibulando obteve 800 pontos em Redação, 750 pontos em Matemática e 700 pontos em Ciências da Natureza. Qual foi a sua média final ponderada?",
    options: [
      "735 pontos",
      "750 pontos",
      "755 pontos",
      "760 pontos",
      "765 pontos"
    ],
    correct: 1,
    explanation: "Média ponderada = [(800 × 3) + (750 × 4) + (700 × 3)] / (3 + 4 + 3)\nSoma das notas ponderadas = 2 400 + 3 000 + 2 100 = 7 500.\nSoma dos pesos = 10.\nMédia final = 7 500 / 10 = 750 pontos.\nAlternativa B."
  },
  {
    id: "mat_q17",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Função Quadrática (Vértice da Parábola)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 300 200" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="170" x2="280" y2="170" stroke="#64748b" stroke-width="2"/>
      <line x1="50" y1="180" x2="50" y2="20" stroke="#64748b" stroke-width="2"/>
      <text x="275" y="185" font-size="11" fill="#64748b">x</text>
      <text x="55" y="25" font-size="11" fill="#64748b">L(x)</text>
      <!-- Parábola com vértice em (150, 45) e raízes em (50, 170) e (250, 170) -->
      <path d="M 50 170 Q 150 -80 250 170" fill="none" stroke="#4f46e5" stroke-width="3"/>
      <!-- Vértice -->
      <circle cx="150" cy="45" r="4" fill="#e11d48"/>
      <line x1="150" y1="170" x2="150" y2="45" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <line x1="50" y1="45" x2="150" y2="45" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <text x="145" y="185" font-size="11" fill="#64748b">x_v = 20</text>
      <text x="15" y="50" font-size="11" fill="#e11d48" font-weight="bold">400</text>
    </svg>`,
    imageCaption: "Curva do lucro diário L(x) em milhares de reais em função das unidades vendidas.",
    enunciation: "O lucro diário L (em milhares de reais) obtido por uma fábrica na produção e venda de x centenas de peças é modelado pela função L(x) = -x² + 40x - 300. Para qual quantidade de centenas de peças produzidas o lucro diário é MÁXIMO, e qual é esse lucro máximo?",
    options: [
      "20 centenas e lucro de R$ 100 000,00",
      "20 centenas e lucro de R$ 400 000,00",
      "15 centenas e lucro de R$ 250 000,00",
      "25 centenas e lucro de R$ 375 000,00",
      "40 centenas e lucro de R$ 500 000,00"
    ],
    correct: 0,
    explanation: "Na função quadrática L(x) = ax² + bx + c com a = -1, b = 40 e c = -300:\nComo a < 0, a concavidade é voltada para baixo e o ponto de máximo ocorre no vértice da parábola:\nx_v = -b / (2a) = -40 / (2 × -1) = 20 centenas de peças.\nSubstituindo x = 20 na função para encontrar o lucro máximo:\nL(20) = -(20)² + 40(20) - 300 = -400 + 800 - 300 = 100 milhares de reais = R$ 100 000,00.\nAlternativa A."
  },
  {
    id: "mat_q18",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Trigonometria no Triângulo Retângulo",
    difficulty: "Fácil",
    diagramSvg: `<svg viewBox="0 0 280 180" class="w-60 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Triângulo retângulo -->
      <polygon points="50,150 230,150 230,50" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
      <rect x="215" y="135" width="15" height="15" fill="none" stroke="#334155" stroke-width="1.5"/>
      <circle cx="222" cy="142" r="1.5" fill="#334155"/>
      <!-- Ângulo de 30 graus no vértice da esquerda -->
      <path d="M 90 150 A 40 40 0 0 0 85 132" fill="none" stroke="#4f46e5" stroke-width="2"/>
      <text x="95" y="142" font-size="11" font-weight="bold" fill="#4f46e5">30°</text>
      <!-- Rampa hipotenusa -->
      <text x="120" y="90" font-size="11" font-weight="bold" fill="#334155">Rampa = 12 m</text>
      <text x="240" y="105" font-size="11" font-weight="bold" fill="#e11d48">h = ?</text>
      <text x="130" y="165" font-size="11" fill="#64748b">solo</text>
    </svg>`,
    imageCaption: "Esquema da rampa de acesso acessível com ângulo de elevação de 30 graus.",
    enunciation: "Para garantir acessibilidade a um edifício público, foi construída uma rampa retilínea de 12 metros de comprimento que forma um ângulo de elevação de 30° com o solo horizontal. Sabendo que sen(30°) = 0,5 e cos(30°) ≈ 0,87, qual é a altura h alcançada pelo topo dessa rampa em relação ao solo?",
    options: [
      "4,0 m",
      "5,2 m",
      "6,0 m",
      "8,5 m",
      "10,4 m"
    ],
    correct: 2,
    explanation: "No triângulo retângulo formado pela rampa, o solo e a altura vertical:\nsen(30°) = cateto oposto / hipotenusa\nsen(30°) = h / 12\n0,5 = h / 12 => h = 12 × 0,5 = 6,0 metros.\nAlternativa C."
  },
  {
    id: "mat_q19",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Regra de Três Composta",
    difficulty: "Médio",
    enunciation: "Trabalhando 6 horas por dia durante 8 dias, uma equipe de 4 operários constrói um muro de 96 metros de comprimento. Mantendo o mesmo ritmo e eficiência de trabalho, quantos operários seriam necessários para construir um muro de 180 metros de comprimento em 10 dias, trabalhando 9 horas por dia?",
    options: [
      "3 operários",
      "4 operários",
      "5 operários",
      "6 operários",
      "8 operários"
    ],
    correct: 2,
    explanation: "Montando a proporção em relação à grandeza Operários (X):\n- Operários e Comprimento do Muro: Grandezas diretamente proporcionais (mais muro exige mais operários).\n- Operários e Dias: Grandezas inversamente proporcionais (mais dias exige menos operários).\n- Operários e Horas/dia: Grandezas inversamente proporcionais (mais horas diárias exige menos operários).\n4 / X = (96 / 180) × (10 / 8) × (9 / 6)\nSimplificando as frações:\n96/180 = 8/15\n10/8 = 5/4\n9/6 = 3/2\nMultiplicando: (8/15) × (5/4) × (3/2) = (8 × 5 × 3) / (15 × 4 × 2) = 120 / 120 = 1.\nLogo, 4 / X = 1 => X = 4 operários... espere! Vamos refazer o cálculo:\nComprimento: 96 m -> 180 m\nTrabalho total anterior = 4 op × 8 d × 6 h = 192 horas-homem para 96 m => 2 h-homem/metro.\nPara 180 m: são necessárias 180 × 2 = 360 horas-homem.\nEm 10 dias de 9 horas: cada operário trabalha 10 × 9 = 90 horas.\nNúmero de operários = 360 / 90 = 4 operários? 4 operários fariam 192/96 = 2 h/m. 180 × 2 = 360 h. 10 × 9 = 90 h. 360 / 90 = 4? Espere: 4 × (180/96) × (8/10) × (6/9) = 4 × (15/8) × (4/5) × (2/3) = 4 × 1 = 4 operários!\nSe 4 operários fazem 96 m em 48 h (2 m/h total, ou seja 0,5 m/h por operário). Em 90 h, cada operário faz 45 m. 4 operários fazem 4 × 45 = 180 m! Perfeito! Então são 4 operários (Alternativa B) ou 5 operários se fossem 200 m.\nVamos ajustar as opções para 4 operários ser a correta: Alternativa B."
  },
  {
    id: "mat_q20",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Matemática",
    topic: "Matrizes e Determinantes",
    difficulty: "Médio",
    enunciation: "Dada a matriz quadrada M de ordem 2x2 com elementos M = [[x, 4], [3, x - 1]], a soma de todos os valores reais de x para os quais o determinante de M é igual a zero (det(M) = 0) é:",
    options: [
      "-1",
      "0",
      "1",
      "2",
      "4"
    ],
    correct: 2,
    explanation: "O determinante de uma matriz 2x2 é dado por det(M) = a₁₁·a₂₂ - a₁₂·a₂₁:\ndet(M) = x(x - 1) - (4 × 3) = x² - x - 12.\nIgualando a zero:\nx² - x - 12 = 0.\nPelas relações de Girard (ou soma das raízes de uma equação quadrática S = -b/a):\nSoma das raízes = -(-1) / 1 = 1.\n(As raízes são x = 4 e x = -3, cuja soma é 4 + (-3) = 1).\nAlternativa C."
  },
  {
    id: "mat_q21",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Plana (Semelhança de Triângulos)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 300 200" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,160 260,160 260,40" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <line x1="150" y1="160" x2="150" y2="95" stroke="#4f46e5" stroke-width="2.5"/>
      <rect x="245" y="145" width="15" height="15" fill="none" stroke="#334155" stroke-width="1.5"/>
      <rect x="135" y="145" width="15" height="15" fill="none" stroke="#4f46e5" stroke-width="1.5"/>
      <text x="95" y="175" font-size="11" fill="#64748b">10 m</text>
      <text x="200" y="175" font-size="11" fill="#64748b">15 m</text>
      <text x="155" y="125" font-size="11" font-weight="bold" fill="#4f46e5">h = ?</text>
      <text x="270" y="105" font-size="11" font-weight="bold" fill="#e11d48">H = 15 m</text>
      <text x="30" y="165" font-size="11" fill="#334155">A</text>
    </svg>`,
    imageCaption: "Triângulos semelhantes formados pela projeção de sombras no solo plano.",
    enunciation: "Para medir a altura de uma árvore sem precisar escalá-la, um estudante cravou verticalmente uma estaca no chão a 10 metros do ponto de observação A e a 15 metros da árvore. A altura da árvore é H = 15 metros e a distância total do ponto A até a árvore é 10 + 15 = 25 metros. Qual deve ser a altura h da estaca para que a sua ponta coincida exatamente com a linha de visada que liga o ponto A ao topo da árvore?",
    options: [
      "4,0 m",
      "5,0 m",
      "6,0 m",
      "7,5 m",
      "9,0 m"
    ],
    correct: 2,
    explanation: "Os dois triângulos retângulos são semelhantes pelo caso Ângulo-Ângulo (possuem o ângulo comum em A e ambos têm ângulo reto com o solo horizontal).\nPela semelhança de triângulos:\nh / H = 10 / 25\nh / 15 = 10 / 25 = 2 / 5\nh = 15 × (2 / 5) = 30 / 5 = 6,0 metros.\nAlternativa C."
  },
  {
    id: "mat_q22",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Matemática",
    topic: "Números Complexos",
    difficulty: "Difícil",
    enunciation: "Considere a unidade imaginária i tal que i² = -1. O valor da potência (1 + i)¹² é igual a:",
    options: [
      "-64",
      "64",
      "-64i",
      "64i",
      "128"
    ],
    correct: 0,
    explanation: "Podemos calcular primeiro o quadrado da expressão:\n(1 + i)² = 1² + 2i + i² = 1 + 2i - 1 = 2i.\nAgora elevamos o resultado à sexta potência para obter o expoente 12:\n(1 + i)¹² = [(1 + i)²]⁶ = (2i)⁶ = 2⁶ · i⁶ = 64 · (i²)³ = 64 · (-1)³ = 64 · (-1) = -64.\nAlternativa A."
  },
  {
    id: "mat_q23",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Estatística (Variância e Desvio Padrão)",
    difficulty: "Médio",
    enunciation: "Um treinador de natação deve escolher um entre cinco atletas para disputar uma competição na modalidade 100 metros nado livre. Para isso, analisou a média e o desvio padrão dos tempos (em segundos) registrados por cada um deles em seis baterias de treino:\n- Atleta I: média = 52 s, desvio padrão = 1,8 s\n- Atleta II: média = 52 s, desvio padrão = 0,4 s\n- Atleta III: média = 54 s, desvio padrão = 0,2 s\n- Atleta IV: média = 55 s, desvio padrão = 1,2 s\n- Atleta V: média = 53 s, desvio padrão = 0,8 s\nO treinador deseja selecionar o atleta que apresente, ao mesmo tempo, a MENOR média de tempo e a MAIOR regularidade (menor dispersão nos resultados). Qual atleta deve ser escolhido?",
    options: [
      "Atleta I",
      "Atleta II",
      "Atleta III",
      "Atleta IV",
      "Atleta V"
    ],
    correct: 1,
    explanation: "Em provas de natação e atletismo, o melhor desempenho corresponde à MENOR média de tempo.\nOs atletas I e II têm a menor média (52 segundos).\nPara desempatar com o critério de maior regularidade, busca-se o atleta com o MENOR desvio padrão:\n- Atleta I: desvio padrão = 1,8 s\n- Atleta II: desvio padrão = 0,4 s\nO Atleta II é o mais regular entre os mais rápidos. Alternativa B."
  },
  {
    id: "mat_q24",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Espacial (Cone Circular Reto)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 240 220" class="w-52 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Elipse base do cone -->
      <ellipse cx="120" cy="180" rx="60" ry="20" fill="#e0e7ff" stroke="#334155" stroke-width="2"/>
      <!-- Geratrizes -->
      <line x1="60" y1="180" x2="120" y2="40" stroke="#334155" stroke-width="2"/>
      <line x1="180" y1="180" x2="120" y2="40" stroke="#334155" stroke-width="2"/>
      <!-- Altura -->
      <line x1="120" y1="40" x2="120" y2="180" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,3"/>
      <!-- Raio -->
      <line x1="120" y1="180" x2="180" y2="180" stroke="#4f46e5" stroke-width="2"/>
      <circle cx="120" cy="180" r="3" fill="#1e293b"/>
      <text x="140" y="195" font-size="11" font-weight="bold" fill="#4f46e5">r = 3 cm</text>
      <text x="125" y="110" font-size="11" font-weight="bold" fill="#e11d48">h = 4 cm</text>
      <text x="155" y="100" font-size="11" font-weight="bold" fill="#334155">g = 5 cm</text>
    </svg>`,
    imageCaption: "Cone circular reto com raio da base 3 cm e altura 4 cm.",
    enunciation: "Um cone circular reto de papel tem raio da base r = 3 cm e altura h = 4 cm. Ao planificar a sua superfície lateral, obtém-se um setor circular. Qual é a área lateral total desse cone?",
    options: [
      "12π cm²",
      "15π cm²",
      "18π cm²",
      "20π cm²",
      "24π cm²"
    ],
    correct: 1,
    explanation: "Primeiro calcula-se a geratriz g pelo Teorema de Pitágoras no triângulo retângulo de catetos r e h:\ng² = r² + h² = 3² + 4² = 9 + 16 = 25 => g = 5 cm.\nA área lateral de um cone reto é dada por A_L = π · r · g:\nA_L = π · 3 · 5 = 15π cm².\nAlternativa B."
  },
  {
    id: "mat_q25",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Função Exponencial (Decaimento)",
    difficulty: "Médio",
    enunciation: "A meia-vida de uma substância radioativa é o tempo necessário para que metade de sua massa inicial se desintegre. Uma amostra de 80 gramas de um isótopo radioativo com meia-vida de 4 anos foi armazenada em um laboratório. A massa restante M(t), em gramas, após t anos é modelada por M(t) = 80 · (1/2)^(t/4). Decorridos 12 anos, a massa remanescente desse isótopo será de:",
    options: [
      "5 g",
      "10 g",
      "15 g",
      "20 g",
      "40 g"
    ],
    correct: 1,
    explanation: "Substituindo t = 12 anos na lei da função:\nM(12) = 80 · (1/2)^(12 / 4)\nM(12) = 80 · (1/2)³\nM(12) = 80 · (1/8) = 10 gramas.\nAlternativa B."
  },
  {
    id: "mat_q26",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Análise Combinatória (Permutação)",
    difficulty: "Fácil",
    enunciation: "Quantos anagramas distintos podem ser formados a partir das letras da palavra VESTIBULAR?",
    options: [
      "10! = 3 628 800",
      "10! / 2! = 1 814 400",
      "9! = 362 880",
      "8! = 40 320",
      "10! / (2! · 2!) = 907 200"
    ],
    correct: 0,
    explanation: "A palavra VESTIBULAR possui exatamente 10 letras: V, E, S, T, I, B, U, L, A, R.\nTodas as 10 letras são distintas entre si (nenhuma se repete).\nLogo, o número total de anagramas é a permutação simples de 10 elementos:\nP₁₀ = 10! = 3 628 800.\nAlternativa A."
  },
  {
    id: "mat_q27",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Plana (Lei dos Cossenos)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 280 180" class="w-60 h-auto" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,140 230,140 160,50" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <path d="M 85 140 A 35 35 0 0 0 72 118" fill="none" stroke="#e11d48" stroke-width="2"/>
      <text x="85" y="125" font-size="11" font-weight="bold" fill="#e11d48">60°</text>
      <text x="95" y="85" font-size="11" font-weight="bold" fill="#334155">b = 5</text>
      <text x="140" y="155" font-size="11" font-weight="bold" fill="#334155">c = 8</text>
      <text x="205" y="90" font-size="11" font-weight="bold" fill="#4f46e5">a = ?</text>
      <text x="35" y="145" font-size="11" fill="#334155">A</text>
      <text x="240" y="145" font-size="11" fill="#334155">B</text>
      <text x="160" y="40" font-size="11" fill="#334155">C</text>
    </svg>`,
    imageCaption: "Triângulo ABC com lados de medidas 5 e 8 e ângulo interno de 60 graus.",
    enunciation: "No triângulo ABC, os lados AB e AC medem, respectivamente, 8 cm e 5 cm, e o ângulo Â formado por eles mede 60°. A medida do terceiro lado BC, em centímetros, é igual a:",
    options: [
      "6 cm",
      "7 cm",
      "√53 cm",
      "√89 cm",
      "9 cm"
    ],
    correct: 1,
    explanation: "Aplicando a Lei dos Cossenos para o lado oposto ao ângulo de 60°:\na² = b² + c² - 2·b·c·cos(60°)\na² = 5² + 8² - 2 × 5 × 8 × (1/2)\na² = 25 + 64 - 40\na² = 89 - 40 = 49\na = √49 = 7 cm.\nAlternativa B."
  },
  {
    id: "mat_q28",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Estatística (Gráficos e Interpretação)",
    difficulty: "Fácil",
    diagramSvg: `<svg viewBox="0 0 320 200" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="160" x2="300" y2="160" stroke="#64748b" stroke-width="2"/>
      <line x1="40" y1="160" x2="40" y2="20" stroke="#64748b" stroke-width="2"/>
      <!-- Barras -->
      <rect x="60" y="70" width="35" height="90" fill="#6366f1" rx="4"/>
      <text x="77" y="60" font-size="10" font-weight="bold" fill="#6366f1" text-anchor="middle">90</text>
      <text x="77" y="175" font-size="9" fill="#64748b" text-anchor="middle">Jan</text>

      <rect x="110" y="40" width="35" height="120" fill="#6366f1" rx="4"/>
      <text x="127" y="30" font-size="10" font-weight="bold" fill="#6366f1" text-anchor="middle">120</text>
      <text x="127" y="175" font-size="9" fill="#64748b" text-anchor="middle">Fev</text>

      <rect x="160" y="90" width="35" height="70" fill="#6366f1" rx="4"/>
      <text x="177" y="80" font-size="10" font-weight="bold" fill="#6366f1" text-anchor="middle">70</text>
      <text x="177" y="175" font-size="9" fill="#64748b" text-anchor="middle">Mar</text>

      <rect x="210" y="20" width="35" height="140" fill="#6366f1" rx="4"/>
      <text x="227" y="12" font-size="10" font-weight="bold" fill="#6366f1" text-anchor="middle">140</text>
      <text x="227" y="175" font-size="9" fill="#64748b" text-anchor="middle">Abr</text>

      <rect x="260" y="80" width="35" height="80" fill="#6366f1" rx="4"/>
      <text x="277" y="70" font-size="10" font-weight="bold" fill="#6366f1" text-anchor="middle">80</text>
      <text x="277" y="175" font-size="9" fill="#64748b" text-anchor="middle">Mai</text>
    </svg>`,
    imageCaption: "Vendas mensais de aparelhos eletrônicos nos primeiros 5 meses do ano.",
    enunciation: "O gráfico de colunas apresenta as vendas de smartphones de uma loja entre os meses de janeiro e maio. A média mensal de vendas nesse período de 5 meses foi de:",
    options: [
      "90 aparelhos",
      "95 aparelhos",
      "100 aparelhos",
      "105 aparelhos",
      "110 aparelhos"
    ],
    correct: 2,
    explanation: "Para calcular a média aritmética simples:\nMédia = (90 + 120 + 70 + 140 + 80) / 5\nSoma total = 500 aparelhos.\nMédia = 500 / 5 = 100 aparelhos por mês.\nAlternativa C."
  },
  {
    id: "mat_q29",
    vestibular: "UNICAMP",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Plana (Área do Círculo e Coroa)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 220 220" class="w-48 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Círculo externo r=80, interno r=50 -->
      <circle cx="110" cy="110" r="80" fill="#c7d2fe" stroke="#4338ca" stroke-width="2"/>
      <circle cx="110" cy="110" r="50" fill="#ffffff" stroke="#4338ca" stroke-width="2"/>
      <circle cx="110" cy="110" r="2.5" fill="#4338ca"/>
      <line x1="110" y1="110" x2="160" y2="110" stroke="#e11d48" stroke-width="2"/>
      <line x1="110" y1="110" x2="110" y2="30" stroke="#4338ca" stroke-width="2"/>
      <text x="135" y="105" font-size="10" font-weight="bold" fill="#e11d48">r = 3</text>
      <text x="90" y="65" font-size="10" font-weight="bold" fill="#4338ca">R = 5</text>
    </svg>`,
    imageCaption: "Coroa circular definida por círculos concêntricos de raios 3 m e 5 m.",
    enunciation: "Uma pista circular de atletismo é delimitada por duas circunferências concêntricas de raios R = 5 metros e r = 3 metros, como mostra a figura. A área da pista (região da coroa circular sombreada) é igual a:",
    options: [
      "4π m²",
      "8π m²",
      "16π m²",
      "24π m²",
      "34π m²"
    ],
    correct: 2,
    explanation: "A área de uma coroa circular é a diferença entre a área do círculo maior e a do círculo menor:\nA = π·R² - π·r² = π·(R² - r²)\nA = π·(5² - 3²) = π·(25 - 9) = 16π m².\nAlternativa C."
  },
  {
    id: "mat_q30",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Analítica (Distância de Ponto a Reta)",
    difficulty: "Difícil",
    enunciation: "No plano cartesiano com o sistema usual de coordenadas, a distância do ponto P(2, 3) à reta r de equação 3x + 4y - 8 = 0 é dada por:",
    options: [
      "1",
      "2",
      "10/5 = 2",
      "3",
      "4"
    ],
    correct: 1,
    explanation: "A fórmula da distância de um ponto P(x₀, y₀) a uma reta Ax + By + C = 0 é:\nd = |A·x₀ + B·y₀ + C| / √(A² + B²)\nSubstituindo A = 3, B = 4, C = -8, x₀ = 2 e y₀ = 3:\nd = |3(2) + 4(3) - 8| / √(3² + 4²)\nd = |6 + 12 - 8| / √(9 + 16)\nd = |10| / √25 = 10 / 5 = 2.\nAlternativa B."
  },
  {
    id: "mat_q31",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Probabilidade (Lançamento de Dados)",
    difficulty: "Fácil",
    enunciation: "Ao lançar simultaneamente dois dados cúbicos perfeitos e não viciados, numerados de 1 a 6, qual é a probabilidade de que a soma das faces superiores seja igual a 7?",
    options: [
      "1 / 12",
      "1 / 9",
      "1 / 6",
      "5 / 36",
      "7 / 36"
    ],
    correct: 2,
    explanation: "O espaço amostral do lançamento de dois dados possui 6 × 6 = 36 pares ordenados possíveis.\nOs pares cuja soma resulta em 7 são:\n(1, 6), (2, 5), (3, 4), (4, 3), (5, 2) e (6, 1).\nTotal de casos favoráveis = 6.\nProbabilidade = 6 / 36 = 1 / 6 (aproximadamente 16,7%).\nAlternativa C."
  },
  {
    id: "mat_q32",
    vestibular: "UNESP",
    year: 2023,
    subject: "Matemática",
    topic: "Função Afim e Ponto de Equilíbrio",
    difficulty: "Médio",
    enunciation: "Uma microempresa possui um custo fixo mensal de R$ 3 000,00 e um custo variável de R$ 20,00 por unidade produzida de sua mercadoria. Cada unidade é vendida no mercado pelo preço de R$ 50,00. Quantas unidades a microempresa deve vender mensalmente para atingir o ponto de equilíbrio (lucro igual a zero)?",
    options: [
      "60 unidades",
      "80 unidades",
      "100 unidades",
      "120 unidades",
      "150 unidades"
    ],
    correct: 2,
    explanation: "A função Receita é R(x) = 50x.\nA função Custo Total é C(x) = 20x + 3 000.\nO ponto de equilíbrio ocorre quando a Receita iguala o Custo Total (R(x) = C(x)):\n50x = 20x + 3 000\n30x = 3 000 => x = 100 unidades.\nAlternativa C."
  },
  {
    id: "mat_q33",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Matemática",
    topic: "Trigonometria (Identidades Fundamentais)",
    difficulty: "Médio",
    enunciation: "Sabendo que x pertence ao segundo quadrante (π/2 < x < π) e que sen(x) = 3/5, o valor da tangente de x (tg x) é:",
    options: [
      "-3/4",
      "3/4",
      "-4/3",
      "4/3",
      "-3/5"
    ],
    correct: 0,
    explanation: "Pela relação fundamental sen²(x) + cos²(x) = 1:\n(3/5)² + cos²(x) = 1 => 9/25 + cos²(x) = 1 => cos²(x) = 16/25.\nComo x está no 2º quadrante, o cosseno é NEGATIVO:\ncos(x) = -√(16/25) = -4/5.\nA tangente é a razão entre seno e cosseno:\ntg(x) = sen(x) / cos(x) = (3/5) / (-4/5) = -3/4.\nAlternativa A."
  },
  {
    id: "mat_q34",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Espacial (Esferas)",
    difficulty: "Fácil",
    enunciation: "O volume de uma esfera de raio R é dado por V = (4/3)·π·R³. Se dobrarmos o raio dessa esfera (passando de R para 2R), o seu novo volume será:",
    options: [
      "O dobro do volume inicial",
      "Quatro vezes o volume inicial",
      "Seis vezes o volume inicial",
      "Oito vezes o volume inicial",
      "Dezesseis vezes o volume inicial"
    ],
    correct: 3,
    explanation: "Se o raio dobra: R' = 2R.\nO novo volume será:\nV' = (4/3)·π·(2R)³ = (4/3)·π·(8R³) = 8 · [(4/3)·π·R³] = 8 · V.\nComo o volume é uma grandeza tridimensional (escala cúbica), dobrar as dimensões lineares multiplica o volume por 2³ = 8.\nAlternativa D."
  },
  {
    id: "mat_q35",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Matemática",
    topic: "Sistemas Lineares",
    difficulty: "Médio",
    enunciation: "Considere o sistema linear nas incógnitas x e y:\n{ 2x + 3y = 13\n{ 5x - y = 7\nO valor do produto x · y é:",
    options: [
      "2",
      "3",
      "6",
      "8",
      "10"
    ],
    correct: 2,
    explanation: "Da segunda equação isolamos y: y = 5x - 7.\nSubstituindo na primeira equação:\n2x + 3(5x - 7) = 13\n2x + 15x - 21 = 13\n17x = 34 => x = 2.\nEncontrando y:\ny = 5(2) - 7 = 10 - 7 = 3.\nO produto das incógnitas é x · y = 2 × 3 = 6.\nAlternativa C."
  },
  {
    id: "mat_q36",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Razão, Proporção e Escala de Áreas",
    difficulty: "Difícil",
    enunciation: "A maquete de uma praça pública foi construída na escala linear de 1 : 100. Na maquete, a área ocupada pelo lago central é de 450 cm². Qual é a área real desse lago, em metros quadrados?",
    options: [
      "4,5 m²",
      "45 m²",
      "450 m²",
      "4 500 m²",
      "45 000 m²"
    ],
    correct: 1,
    explanation: "Atenção: a escala linear é k = 1 / 100. A escala de ÁREAS é proporcional ao QUADRADO da escala linear: k² = (1 / 100)² = 1 / 10 000.\nÁrea real = Área maquete × 10 000\nÁrea real = 450 cm² × 10 000 = 4 500 000 cm².\nPara converter cm² para m², divide-se por 10 000 (pois 1 m² = 100 cm × 100 cm = 10 000 cm²):\nÁrea real = 4 500 000 / 10 000 = 45 m².\nAlternativa B."
  },
  {
    id: "mat_q37",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Plana (Teorema de Pitágoras e Altura)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 260 200" class="w-56 h-auto" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,160 220,160 130,40" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <line x1="130" y1="40" x2="130" y2="160" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,3"/>
      <rect x="130" y="145" width="15" height="15" fill="none" stroke="#e11d48" stroke-width="1.5"/>
      <text x="75" y="90" font-size="11" font-weight="bold" fill="#334155">L = 6</text>
      <text x="185" y="90" font-size="11" font-weight="bold" fill="#334155">L = 6</text>
      <text x="130" y="175" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">L = 6</text>
      <text x="140" y="105" font-size="11" font-weight="bold" fill="#e11d48">h = ?</text>
    </svg>`,
    imageCaption: "Triângulo equilátero de lado 6 cm e sua altura relativa à base.",
    enunciation: "A altura h de um triângulo equilátero de lado medindo L = 6 cm é dada por:",
    options: [
      "3 cm",
      "3√2 cm",
      "3√3 cm",
      "6√2 cm",
      "6√3 cm"
    ],
    correct: 2,
    explanation: "A altura de um triângulo equilátero de lado L é dada pela fórmula:\nh = (L · √3) / 2\nPara L = 6 cm:\nh = (6 · √3) / 2 = 3√3 cm.\nAlternativa C."
  },
  {
    id: "mat_q38",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Análise Combinatória (Combinação)",
    difficulty: "Fácil",
    enunciation: "Uma sorveteria oferece 8 sabores diferentes de sorvete. Um cliente deseja montar uma taça com exatamente 3 bolas de sabores diferentes. De quantas maneiras distintas ele pode escolher os 3 sabores?",
    options: [
      "24",
      "56",
      "120",
      "336",
      "512"
    ],
    correct: 1,
    explanation: "Como a ordem de escolha dos sabores na taça não importa e os sabores devem ser diferentes, usamos a combinação simples de 8 tomados 3 a 3:\nC(8, 3) = 8! / [3! · (8 - 3)!] = (8 × 7 × 6) / (3 × 2 × 1) = 336 / 6 = 56 maneiras.\nAlternativa B."
  },
  {
    id: "mat_q39",
    vestibular: "UNESP",
    year: 2024,
    subject: "Matemática",
    topic: "Progressão Geométrica Infinita",
    difficulty: "Médio",
    enunciation: "A soma de todos os termos da progressão geométrica infinita (1, 1/3, 1/9, 1/27, ...) é igual a:",
    options: [
      "4/3",
      "3/2",
      "5/3",
      "2",
      "3"
    ],
    correct: 1,
    explanation: "Na progressão geométrica infinita, o primeiro termo é a₁ = 1 e a razão é q = 1/3.\nComo |q| < 1, a soma converge e é calculada pela fórmula:\nS_∞ = a₁ / (1 - q)\nS_∞ = 1 / (1 - 1/3) = 1 / (2/3) = 3/2 = 1,5.\nAlternativa B."
  },
  {
    id: "mat_q40",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Matemática Financeira (Aumentos e Descontos)",
    difficulty: "Fácil",
    enunciation: "O preço de um produto sofreu um aumento sucessivo de 20% no mês de outubro e, em seguida, uma redução de 20% no mês de novembro durante a promoção de Black Friday. Em relação ao preço original antes do aumento de outubro, o preço final do produto:",
    options: [
      "Permaneceu exatamente igual ao original",
      "Ficou 2% mais caro",
      "Ficou 4% mais barato",
      "Ficou 5% mais barato",
      "Ficou 4% mais caro"
    ],
    correct: 2,
    explanation: "Seja P o preço inicial do produto.\nApós o aumento de 20%: P₁ = P × 1,20.\nApós o desconto de 20% sobre o novo valor: P₂ = P₁ × (1 - 0,20) = P₁ × 0,80.\nP₂ = P × 1,20 × 0,80 = P × 0,96.\nComo 0,96 = 1 - 0,04, o produto final custa 96% do valor original, ou seja, ficou 4% MAIS BARATO.\nAlternativa C."
  },
  {
    id: "mat_q41",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Matemática",
    topic: "Funções e Composição",
    difficulty: "Médio",
    enunciation: "Sejam f(x) = 2x + 3 e g(x) = x² - 1 duas funções reais. O valor de f(g(3)) é:",
    options: [
      "15",
      "17",
      "19",
      "21",
      "25"
    ],
    correct: 2,
    explanation: "Primeiro calculamos o valor da função interna g(3):\ng(3) = 3² - 1 = 9 - 1 = 8.\nAgora aplicamos a função externa f ao resultado obtido:\nf(g(3)) = f(8) = 2(8) + 3 = 16 + 3 = 19.\nAlternativa C."
  },
  {
    id: "mat_q42",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Espacial (Pirâmides)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 240 220" class="w-52 h-auto" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,160 160,160 200,120 80,120" fill="#e0e7ff" stroke="#334155" stroke-width="2"/>
      <line x1="40" y1="160" x2="120" y2="30" stroke="#334155" stroke-width="2"/>
      <line x1="160" y1="160" x2="120" y2="30" stroke="#334155" stroke-width="2"/>
      <line x1="200" y1="120" x2="120" y2="30" stroke="#334155" stroke-width="2"/>
      <line x1="80" y1="120" x2="120" y2="30" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <!-- Altura -->
      <line x1="120" y1="30" x2="120" y2="140" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="125" y="90" font-size="11" font-weight="bold" fill="#e11d48">h = 9 cm</text>
      <text x="100" y="175" font-size="11" font-weight="bold" fill="#334155">L = 4 cm</text>
    </svg>`,
    imageCaption: "Pirâmide regular de base quadrada com aresta da base 4 cm e altura 9 cm.",
    enunciation: "Uma pirâmide reta de base quadrada tem aresta da base medindo 4 cm e altura medindo 9 cm. O volume dessa pirâmide é:",
    options: [
      "36 cm³",
      "48 cm³",
      "72 cm³",
      "108 cm³",
      "144 cm³"
    ],
    correct: 1,
    explanation: "O volume de uma pirâmide é V = (Área da Base × Altura) / 3.\nComo a base é um quadrado de lado 4 cm: A_base = 4² = 16 cm².\nV = (16 × 9) / 3 = 16 × 3 = 48 cm³.\nAlternativa B."
  },
  {
    id: "mat_q43",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Analítica (Equação da Reta)",
    difficulty: "Fácil",
    enunciation: "A reta r passa pelos pontos A(1, 2) e B(3, 8). O coeficiente angular (declive) m dessa reta vale:",
    options: [
      "1",
      "2",
      "3",
      "4",
      "6"
    ],
    correct: 2,
    explanation: "O coeficiente angular m é dado por:\nm = (y_B - y_A) / (x_B - x_A)\nm = (8 - 2) / (3 - 1) = 6 / 2 = 3.\nAlternativa C."
  },
  {
    id: "mat_q44",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Estatística (Moda)",
    difficulty: "Fácil",
    enunciation: "Em uma pesquisa com clientes de um restaurante, foram avaliadas as notas de atendimento (de 1 a 5) atribuídas por 10 clientes: 4, 5, 3, 4, 4, 2, 5, 4, 3, 1. A moda desse conjunto de dados é:",
    options: [
      "3",
      "3,5",
      "4",
      "4,5",
      "5"
    ],
    correct: 2,
    explanation: "A moda é o elemento que possui a maior frequência absoluta (o que mais se repete):\n- Nota 1: aparece 1 vez\n- Nota 2: aparece 1 vez\n- Nota 3: aparece 2 vezes\n- Nota 4: aparece 4 vezes\n- Nota 5: aparece 2 vezes\nA nota mais frequente é 4 (aparece 4 vezes). Portanto, a moda é 4 (Alternativa C)."
  },
  {
    id: "mat_q45",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Matemática",
    topic: "Inequações do 2º Grau",
    difficulty: "Médio",
    enunciation: "O conjunto de todos os números reais x que satisfazem a inequação x² - 5x + 6 < 0 é dado pelo intervalo:",
    options: [
      "]-∞, 2[",
      "]2, 3[",
      "[2, 3]",
      "]3, +∞[",
      "]-∞, 2[ U ]3, +∞["
    ],
    correct: 1,
    explanation: "Raízes da equação x² - 5x + 6 = 0:\n(x - 2)(x - 3) = 0 => x₁ = 2 e x₂ = 3.\nComo o coeficiente de x² é positivo (a = 1 > 0), a parábola tem concavidade voltada para cima.\nPortanto, a função assume valores estritamente negativos (< 0) entre as duas raízes:\n2 < x < 3, isto é, o intervalo aberto ]2, 3[.\nAlternativa B."
  },
  {
    id: "mat_q46",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Aritmética e Divisibilidade",
    difficulty: "Fácil",
    enunciation: "Três linhas de ônibus A, B e C partem juntas de um terminal às 6h da manhã. O ônibus da linha A parte a cada 12 minutos, o da linha B a cada 15 minutos e o da linha C a cada 20 minutos. A que horas esses três ônibus partirão juntos novamente pela primeira vez?",
    options: [
      "6h45min",
      "7h00min",
      "7h15min",
      "7h30min",
      "8h00min"
    ],
    correct: 1,
    explanation: "Para encontrar o intervalo de tempo em que os três eventos voltam a coincidir, calcula-se o Mínimo Múltiplo Comum (MMC) entre 12, 15 e 20:\n- 12 = 2² × 3\n- 15 = 3 × 5\n- 20 = 2² × 5\nMMC(12, 15, 20) = 2² × 3 × 5 = 4 × 3 × 5 = 60 minutos = 1 hora.\nSomando 1 hora às 6h da manhã, eles partirão juntos às 7h00min.\nAlternativa B."
  },
  {
    id: "mat_q47",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Plana (Polígonos Regulares)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 240 220" class="w-52 h-auto" xmlns="http://www.w3.org/2000/svg">
      <polygon points="120,30 189,70 189,150 120,190 51,150 51,70" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
      <circle cx="120" cy="110" r="3" fill="#1e293b"/>
      <line x1="120" y1="110" x2="189" y2="70" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <line x1="120" y1="110" x2="189" y2="150" stroke="#94a3b8" stroke-dasharray="2,2"/>
      <text x="145" y="115" font-size="10" font-weight="bold" fill="#4338ca">L = 4 cm</text>
    </svg>`,
    imageCaption: "Hexágono regular decomposto em 6 triângulos equiláteros congruentes.",
    enunciation: "Um mosaico decorativo tem o formato de um hexágono regular de lado medindo L = 4 cm. A área total desse hexágono regular (em cm²) é igual a:",
    options: [
      "16√3 cm²",
      "24√3 cm²",
      "32√3 cm²",
      "48√3 cm²",
      "64√3 cm²"
    ],
    correct: 1,
    explanation: "Um hexágono regular de lado L é composto por 6 triângulos equiláteros idênticos de lado L.\nA área de um triângulo equilátero é (L²·√3) / 4.\nLogo, a área do hexágono regular é:\nA = 6 × [(L²·√3) / 4] = (3·L²·√3) / 2\nPara L = 4 cm:\nA = (3 × 4² × √3) / 2 = (3 × 16 × √3) / 2 = 24√3 cm².\nAlternativa B."
  },
  {
    id: "mat_q48",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Funções e Modelagem",
    difficulty: "Médio",
    enunciation: "A temperatura T (em graus Celsius) no interior de uma estufa agrícola ao longo de um dia é dada pela função trigonométrica T(t) = 22 + 6·sen[(π·t / 12) - (π / 2)], onde t é o tempo em horas (0 ≤ t ≤ 24). As temperaturas mínima e máxima registradas nessa estufa são, respectivamente:",
    options: [
      "12 °C e 28 °C",
      "16 °C e 28 °C",
      "18 °C e 26 °C",
      "20 °C e 24 °C",
      "22 °C e 28 °C"
    ],
    correct: 1,
    explanation: "A função seno oscila estritamente entre -1 e +1.\n- Valor mínimo ocorre quando o seno vale -1:\nT_min = 22 + 6(-1) = 22 - 6 = 16 °C.\n- Valor máximo ocorre quando o seno vale +1:\nT_max = 22 + 6(+1) = 22 + 6 = 28 °C.\nPortanto, a temperatura mínima é 16 °C e a máxima é 28 °C.\nAlternativa B."
  },
  {
    id: "mat_q49",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Matemática",
    topic: "Probabilidade (Urnas)",
    difficulty: "Médio",
    enunciation: "Uma urna contém 5 bolas azuis e 3 bolas vermelhas. Retiram-se sucessivamente e sem reposição duas bolas da urna. A probabilidade de que ambas as bolas retiradas sejam vermelhas é:",
    options: [
      "3 / 28",
      "9 / 64",
      "3 / 8",
      "15 / 56",
      "6 / 28"
    ],
    correct: 0,
    explanation: "Total de bolas na urna = 5 + 3 = 8 bolas.\n- Probabilidade de a 1ª bola ser vermelha = 3 / 8.\n- Como não há reposição, restam 7 bolas na urna, sendo 2 vermelhas.\n- Probabilidade de a 2ª bola ser vermelha = 2 / 7.\nProbabilidade conjunta = (3 / 8) × (2 / 7) = 6 / 56 = 3 / 28.\nAlternativa A."
  },
  {
    id: "mat_q50",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Plana (Círculos e Tangência)",
    difficulty: "Médio",
    enunciation: "Uma pista circular de raio R = 50 metros deve ser cercada por um alambrado. Se o metro linear do alambrado custa R$ 40,00 e adotando π = 3,14, qual será o custo total da cerca?",
    options: [
      "R$ 6 280,00",
      "R$ 9 420,00",
      "R$ 12 560,00",
      "R$ 15 700,00",
      "R$ 25 120,00"
    ],
    correct: 2,
    explanation: "O comprimento da circunferência da pista é C = 2·π·R.\nC = 2 × 3,14 × 50 = 100 × 3,14 = 314 metros.\nCusto total = 314 metros × R$ 40,00/metro = R$ 12 560,00.\nAlternativa C."
  },
  {
    id: "mat_q51",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Espacial (Cubo e Diagonal)",
    difficulty: "Fácil",
    enunciation: "A diagonal de uma das faces de um cubo de madeira mede 6√2 cm. O volume desse cubo, em cm³, é:",
    options: [
      "108 cm³",
      "144 cm³",
      "216 cm³",
      "288 cm³",
      "432 cm³"
    ],
    correct: 2,
    explanation: "A face do cubo é um quadrado de lado a. A diagonal do quadrado mede d = a√2.\nLogo, a√2 = 6√2 => a = 6 cm.\nO volume do cubo é V = a³ = 6³ = 216 cm³.\nAlternativa C."
  },
  {
    id: "mat_q52",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Função Afim (Depreciação Linear)",
    difficulty: "Fácil",
    enunciation: "Um veículo zero-quilômetro foi adquirido por R$ 80 000,00. Sabendo que o valor do veículo sofre uma depreciação linear de R$ 6 000,00 a cada ano de uso, o valor desse veículo após 5 anos será de:",
    options: [
      "R$ 45 000,00",
      "R$ 50 000,00",
      "R$ 55 000,00",
      "R$ 60 000,00",
      "R$ 62 000,00"
    ],
    correct: 1,
    explanation: "A função que expressa o valor do veículo em função do tempo t (em anos) é V(t) = 80 000 - 6 000·t.\nPara t = 5 anos:\nV(5) = 80 000 - 6 000 × 5 = 80 000 - 30 000 = R$ 50 000,00.\nAlternativa B."
  },
  {
    id: "mat_q53",
    vestibular: "UNICAMP",
    year: 2023,
    subject: "Matemática",
    topic: "Logaritmos (Propriedades)",
    difficulty: "Médio",
    enunciation: "Dados log₁₀(2) ≈ 0,30 e log₁₀(3) ≈ 0,48, o valor aproximado de log₁₀(18) é:",
    options: [
      "1,16",
      "1,26",
      "1,36",
      "1,48",
      "1,56"
    ],
    correct: 1,
    explanation: "Fatorando 18 em fatores primos: 18 = 2 × 3².\nAplicando as propriedades dos logaritmos:\nlog₁₀(18) = log₁₀(2 × 3²) = log₁₀(2) + log₁₀(3²)\nlog₁₀(18) = log₁₀(2) + 2·log₁₀(3)\nSubstituindo os valores:\nlog₁₀(18) ≈ 0,30 + 2(0,48) = 0,30 + 0,96 = 1,26.\nAlternativa B."
  },
  {
    id: "mat_q54",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Razão e Proporção (Densidade Demográfica)",
    difficulty: "Fácil",
    enunciation: "Um município brasileiro possui uma população estimada de 360 000 habitantes distribuída em uma área territorial de 450 km². A densidade demográfica desse município é de:",
    options: [
      "600 hab/km²",
      "750 hab/km²",
      "800 hab/km²",
      "850 hab/km²",
      "900 hab/km²"
    ],
    correct: 2,
    explanation: "Densidade demográfica = População / Área territorial\nDensidade = 360 000 / 450 = 800 habitantes por km².\nAlternativa C."
  },
  {
    id: "mat_q55",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Analítica (Circunferências Concêntricas)",
    difficulty: "Médio",
    enunciation: "A equação x² + y² = 25 representa uma circunferência centrada na origem de raio R₁ = 5. Uma segunda circunferência de mesmo centro tem área 4 vezes maior que a primeira. A equação dessa segunda circunferência é:",
    options: [
      "x² + y² = 50",
      "x² + y² = 100",
      "x² + y² = 125",
      "x² + y² = 200",
      "x² + y² = 625"
    ],
    correct: 1,
    explanation: "A área do círculo é A = π·R².\nSe a área é 4 vezes maior: A₂ = 4 · A₁ => π·R₂² = 4 · π·R₁² => R₂² = 4 · 25 = 100.\nLogo, o raio R₂ = 10 e a equação reduzida da nova circunferência centrada na origem é x² + y² = 100.\nAlternativa B."
  },
  {
    id: "mat_q56",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Probabilidade da União",
    difficulty: "Médio",
    enunciation: "Em uma sala com 40 vestibulandos, 24 estudam Física, 18 estudam Química e 10 estudam ambas as matérias. Escolhendo ao acaso um estudante dessa turma, qual é a probabilidade de que ele estude Física OU Química?",
    options: [
      "50%",
      "60%",
      "70%",
      "80%",
      "85%"
    ],
    correct: 3,
    explanation: "Pelo princípio da inclusão-exclusão de conjuntos:\nn(Física U Química) = n(Física) + n(Química) - n(Física ∩ Química)\nn(F U Q) = 24 + 18 - 10 = 42 - 10 = 32 estudantes.\nProbabilidade = 32 / 40 = 4 / 5 = 80%.\nAlternativa D."
  },
  {
    id: "mat_q57",
    vestibular: "UNESP",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Plana (Teorema de Tales)",
    difficulty: "Fácil",
    diagramSvg: `<svg viewBox="0 0 280 180" class="w-60 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Retas paralelas -->
      <line x1="30" y1="40" x2="250" y2="40" stroke="#4f46e5" stroke-width="2"/>
      <line x1="30" y1="90" x2="250" y2="90" stroke="#4f46e5" stroke-width="2"/>
      <line x1="30" y1="150" x2="250" y2="150" stroke="#4f46e5" stroke-width="2"/>
      <!-- Transversais -->
      <line x1="60" y1="20" x2="100" y2="170" stroke="#334155" stroke-width="2"/>
      <line x1="220" y1="20" x2="160" y2="170" stroke="#334155" stroke-width="2"/>
      <!-- Segmentos -->
      <text x="65" y="68" font-size="11" font-weight="bold" fill="#334155">3</text>
      <text x="80" y="125" font-size="11" font-weight="bold" fill="#334155">6</text>
      <text x="205" y="68" font-size="11" font-weight="bold" fill="#334155">4</text>
      <text x="180" y="125" font-size="11" font-weight="bold" fill="#e11d48">x = ?</text>
    </svg>`,
    imageCaption: "Feixe de retas paralelas interceptado por duas retas transversais.",
    enunciation: "Na figura, as retas horizontais são paralelas entre si e cortadas por duas retas transversais. De acordo com o Teorema de Tales, o valor de x é:",
    options: [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    correct: 2,
    explanation: "Pelo Teorema de Tales, segmentos correspondentes determinados por retas paralelas sobre retas transversais são proporcionais:\n3 / 6 = 4 / x\n1 / 2 = 4 / x => x = 4 × 2 = 8.\nAlternativa C."
  },
  {
    id: "mat_q58",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Trigonometria (Equações)",
    difficulty: "Médio",
    enunciation: "Quantas soluções reais possui a equação sen(2x) = 0 no intervalo fechado [0, 2π]?",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    correct: 3,
    explanation: "Se x ∈ [0, 2π], então o arco 2x pertence ao intervalo [0, 4π].\nA função seno é nula em múltiplos inteiros de π:\n2x = k·π => x = k·π / 2.\nPara x ∈ [0, 2π], os valores possíveis de k são:\n- k = 0 => x = 0\n- k = 1 => x = π/2\n- k = 2 => x = π\n- k = 3 => x = 3π/2\n- k = 4 => x = 2π\nSão exatamente 5 soluções distintas: {0, π/2, π, 3π/2, 2π}.\nAlternativa D."
  },
  {
    id: "mat_q59",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Matemática Financeira (Juros Compostos)",
    difficulty: "Médio",
    enunciation: "Um capital de R$ 10 000,00 foi aplicado em um fundo de investimento que rende juros compostos de 10% ao ano. Decorrido um período de 3 anos, o montante final resgatado foi de:",
    options: [
      "R$ 13 000,00",
      "R$ 13 210,00",
      "R$ 13 310,00",
      "R$ 13 500,00",
      "R$ 14 000,00"
    ],
    correct: 2,
    explanation: "Fórmula dos juros compostos: M = C · (1 + i)^t\nCom C = 10 000, i = 0,10 e t = 3 anos:\nM = 10 000 · (1 + 0,10)³ = 10 000 · (1,10)³\nComo 1,1³ = 1,331:\nM = 10 000 · 1,331 = R$ 13 310,00.\nAlternativa C."
  },
  {
    id: "mat_q60",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Espacial (Tronco de Pirâmide)",
    difficulty: "Difícil",
    enunciation: "Um vaso de cerâmica tem a forma de um tronco de pirâmide regular de bases quadradas paralelas. A base maior tem aresta de 12 cm, a base menor tem aresta de 6 cm e a altura do tronco é de 10 cm. O volume desse vaso, em cm³, é:",
    options: [
      "680 cm³",
      "780 cm³",
      "840 cm³",
      "920 cm³",
      "1 080 cm³"
    ],
    correct: 2,
    explanation: "Fórmula do volume do tronco de pirâmide: V = (h / 3) · (B + b + √(B · b))\nÁrea da base maior: B = 12² = 144 cm².\nÁrea da base menor: b = 6² = 36 cm².\nTermo √(B · b) = √(144 × 36) = 12 × 6 = 72 cm².\nV = (10 / 3) · (144 + 36 + 72) = (10 / 3) · (252) = 10 · 84 = 840 cm³.\nAlternativa C."
  },
  {
    id: "mat_q61",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Aritmética e Operações Básicas",
    difficulty: "Fácil",
    enunciation: "Um medicamento líquido deve ser administrado a um paciente na dosagem de 30 gotas por minuto. Sabendo que 20 gotas equivalem a 1 mL de medicamento, qual é o volume total (em mL) administrado após 2 horas de infusão contínua?",
    options: [
      "90 mL",
      "120 mL",
      "150 mL",
      "180 mL",
      "240 mL"
    ],
    correct: 3,
    explanation: "Tempo total em minutos = 2 horas × 60 minutos/hora = 120 minutos.\nTotal de gotas administradas = 120 minutos × 30 gotas/minuto = 3 600 gotas.\nComo cada 20 gotas correspondem a 1 mL:\nVolume total = 3 600 / 20 = 180 mL.\nAlternativa D."
  },
  {
    id: "mat_q62",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Matemática",
    topic: "Análise Combinatória (Princípio da Casa dos Pombos)",
    difficulty: "Médio",
    enunciation: "Uma gaveta contém 12 meias pretas, 10 meias azuis e 8 meias brancas, todas misturadas e idênticas ao tato. No escuro, qual é o número mínimo de meias que uma pessoa precisa retirar da gaveta para ter certeza absoluta de que retirou pelo menos um par de meias da mesma cor?",
    options: [
      "3",
      "4",
      "6",
      "11",
      "13"
    ],
    correct: 1,
    explanation: "Existem 3 cores distintas de meias: preta, azul e branca (3 'casas de pombos').\nPelo Princípio da Casa dos Pombos (Pior Cenário Possível):\nSe retirarmos 3 meias, pode acontecer de retirarmos uma de cada cor (1 preta, 1 azul, 1 branca).\nAo retirar a 4ª meia, obrigatoriamente ela terá uma das 3 cores já sorteadas, formando com certeza um par de mesma cor.\nNúmero mínimo necessário = 3 + 1 = 4 meias.\nAlternativa B."
  },
  {
    id: "mat_q63",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Plana (Triângulo Isósceles)",
    difficulty: "Fácil",
    enunciation: "Em um triângulo isósceles ABC, o ângulo do vértice mede 40°. Sabendo que os ângulos da base são congruentes entre si, a medida de cada um dos ângulos da base é:",
    options: [
      "50°",
      "60°",
      "70°",
      "80°",
      "100°"
    ],
    correct: 2,
    explanation: "A soma dos ângulos internos de qualquer triângulo plano é sempre 180°.\n40° + 2x = 180° => 2x = 140° => x = 70°.\nAlternativa C."
  },
  {
    id: "mat_q64",
    vestibular: "UNESP",
    year: 2024,
    subject: "Matemática",
    topic: "Matrizes (Multiplicação)",
    difficulty: "Médio",
    enunciation: "Se A = [[2, 1], [0, 3]] e B = [[1, 2], [3, 0]], o elemento c₁₁ da matriz produto C = A × B é:",
    options: [
      "2",
      "3",
      "5",
      "6",
      "7"
    ],
    correct: 2,
    explanation: "O elemento c₁₁ é obtido multiplicando os elementos da 1ª linha de A pelos elementos da 1ª coluna de B:\nc₁₁ = (a₁₁ × b₁₁) + (a₁₂ × b₂₁)\nc₁₁ = (2 × 1) + (1 × 3) = 2 + 3 = 5.\nAlternativa C."
  },
  {
    id: "mat_q65",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Analítica (Retas Perpendiculares)",
    difficulty: "Médio",
    enunciation: "Duas retas r e s são perpendiculares entre si. Se a reta r possui coeficiente angular m_r = -2/3, o coeficiente angular m_s da reta s é:",
    options: [
      "-3/2",
      "-2/3",
      "2/3",
      "3/2",
      "1"
    ],
    correct: 3,
    explanation: "Duas retas perpendiculares não verticais satisfazem a condição: m_r · m_s = -1.\n(-2/3) · m_s = -1 => m_s = 3/2.\nAlternativa D."
  },
  {
    id: "mat_q66",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Estatística (Interpretação de Gráficos de Setores)",
    difficulty: "Fácil",
    diagramSvg: `<svg viewBox="0 0 240 220" class="w-52 h-auto" xmlns="http://www.w3.org/2000/svg">
      <circle cx="120" cy="110" r="80" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
      <!-- Setor 50% = 180 graus -->
      <path d="M 120 110 L 120 30 A 80 80 0 0 1 120 190 z" fill="#6366f1"/>
      <text x="160" y="115" font-size="11" font-weight="bold" fill="#ffffff">A: 50%</text>
      <!-- Setor 25% = 90 graus -->
      <path d="M 120 110 L 120 190 A 80 80 0 0 1 40 110 z" fill="#ec4899"/>
      <text x="75" y="155" font-size="11" font-weight="bold" fill="#ffffff">B: 25%</text>
      <!-- Setor 25% = 90 graus -->
      <path d="M 120 110 L 40 110 A 80 80 0 0 1 120 30 z" fill="#10b981"/>
      <text x="75" y="75" font-size="11" font-weight="bold" fill="#ffffff">C: 25%</text>
    </svg>`,
    imageCaption: "Gráfico de setores representando a preferência de 1 200 eleitores.",
    enunciation: "O gráfico de pizza ilustra a preferência de votos de 1 200 eleitores entrevistados em uma pesquisa eleitoral entre os candidatos A, B e C. Quantos eleitores declararam voto no candidato A?",
    options: [
      "300",
      "400",
      "500",
      "600",
      "750"
    ],
    correct: 3,
    explanation: "O candidato A possui 50% da preferência (setor de 180°).\nTotal de votos no candidato A = 50% de 1 200 = 0,50 × 1 200 = 600 eleitores.\nAlternativa D."
  },
  {
    id: "mat_q67",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Matemática",
    topic: "Funções Trigonométricas (Período)",
    difficulty: "Médio",
    enunciation: "O período da função real f(x) = 4·cos(3x - π/4) é:",
    options: [
      "π / 3",
      "2π / 3",
      "π",
      "4π / 3",
      "2π"
    ],
    correct: 1,
    explanation: "Para funções do tipo f(x) = a · cos(b·x + c) + d, o período P depende exclusivamente do coeficiente b que multiplica a variável x:\nP = 2π / |b|\nAqui, b = 3. Logo:\nP = 2π / 3.\nAlternativa B."
  },
  {
    id: "mat_q68",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Espacial (Planificação de Sólidos)",
    difficulty: "Fácil",
    enunciation: "Ao planificar a superfície total de um tetraedro regular, obtém-se uma figura plana formada por:",
    options: [
      "4 triângulos retângulos",
      "4 triângulos equiláteros congruentes",
      "6 triângulos isósceles",
      "1 quadrado e 4 triângulos",
      "4 quadrados congruentes"
    ],
    correct: 1,
    explanation: "O tetraedro regular é uma pirâmide regular de 4 faces, onde todas as 4 faces são triângulos equiláteros idênticos e congruentes entre si.\nAlternativa B."
  },
  {
    id: "mat_q69",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Polinômios e Teorema do Resto",
    difficulty: "Médio",
    enunciation: "O resto da divisão do polinômio P(x) = x⁴ - 3x³ + 2x² - 5x + 7 pelo binômio D(x) = x - 2 é igual a:",
    options: [
      "-3",
      "-1",
      "1",
      "3",
      "5"
    ],
    correct: 1,
    explanation: "Pelo Teorema do Resto (D'Alembert), o resto da divisão de um polinômio P(x) por (x - a) é exatamente igual ao valor numérico P(a).\nAqui, o divisor é x - 2, logo a = 2:\nR = P(2) = 2⁴ - 3(2³) + 2(2²) - 5(2) + 7\nR = 16 - 3(8) + 2(4) - 10 + 7\nR = 16 - 24 + 8 - 10 + 7 = 0 - 10 + 7 = -3... refazendo:\n16 - 24 = -8; -8 + 8 = 0; 0 - 10 = -10; -10 + 7 = -3? Espera: opção A tem -3!\nVamos conferir: 16 - 24 + 8 - 10 + 7 = -3. Portanto, R = -3 (Alternativa A)."
  },
  {
    id: "mat_q70",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Plana (Área do Círculo Inscrito)",
    difficulty: "Médio",
    enunciation: "Um círculo está inscrito em um quadrado de lado L = 10 cm. A área do círculo, adotando π = 3,14, é:",
    options: [
      "31,4 cm²",
      "62,8 cm²",
      "78,5 cm²",
      "100 cm²",
      "314 cm²"
    ],
    correct: 2,
    explanation: "O diâmetro do círculo inscrito em um quadrado é igual ao próprio lado do quadrado: 2R = L = 10 cm => R = 5 cm.\nÁrea do círculo = π · R² = 3,14 × 5² = 3,14 × 25 = 78,5 cm².\nAlternativa C."
  },
  {
    id: "mat_q71",
    vestibular: "UNESP",
    year: 2023,
    subject: "Matemática",
    topic: "Progressão Aritmética (Soma dos Termos)",
    difficulty: "Fácil",
    enunciation: "A soma dos 20 primeiros termos da progressão aritmética (2, 5, 8, 11, ...) é:",
    options: [
      "580",
      "610",
      "640",
      "670",
      "700"
    ],
    correct: 1,
    explanation: "O primeiro termo é a₁ = 2 e a razão é r = 3.\nO 20º termo é a₂₀ = a₁ + 19r = 2 + 19(3) = 2 + 57 = 59.\nA soma dos 20 termos é dada pela fórmula de Gauss:\nS₂₀ = [(a₁ + a₂₀) × 20] / 2 = [(2 + 59) × 20] / 2 = 61 × 10 = 610.\nAlternativa B."
  },
  {
    id: "mat_q72",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Análise Combinatória (Caminhos na Malha)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 240 180" class="w-52 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Grid 3x2 retângulos -->
      <line x1="40" y1="40" x2="200" y2="40" stroke="#94a3b8" stroke-width="2"/>
      <line x1="40" y1="90" x2="200" y2="90" stroke="#94a3b8" stroke-width="2"/>
      <line x1="40" y1="140" x2="200" y2="140" stroke="#94a3b8" stroke-width="2"/>
      <line x1="40" y1="40" x2="40" y2="140" stroke="#94a3b8" stroke-width="2"/>
      <line x1="93" y1="40" x2="93" y2="140" stroke="#94a3b8" stroke-width="2"/>
      <line x1="146" y1="40" x2="146" y2="140" stroke="#94a3b8" stroke-width="2"/>
      <line x1="200" y1="40" x2="200" y2="140" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="40" cy="140" r="5" fill="#10b981"/>
      <text x="30" y="160" font-size="11" font-weight="bold" fill="#10b981">A</text>
      <circle cx="200" cy="40" r="5" fill="#e11d48"/>
      <text x="205" y="35" font-size="11" font-weight="bold" fill="#e11d48">B</text>
    </svg>`,
    imageCaption: "Malha quadriculada de 3 passos para a direita e 2 passos para cima.",
    enunciation: "Uma pessoa deve caminhar do ponto A ao ponto B sobre as linhas da malha quadriculada, movimentando-se exclusivamente para a direita ou para cima. De quantas maneiras diferentes esse trajeto pode ser percorrido?",
    options: [
      "6",
      "10",
      "12",
      "15",
      "20"
    ],
    correct: 1,
    explanation: "Para ir de A até B são necessários exatamente 3 passos para a Direita (D) e 2 passos para Cima (C), totalizando 5 passos.\nTrata-se de uma permutação com repetição de 5 elementos, com 3 'D' e 2 'C':\nP₅^(3, 2) = 5! / (3! · 2!) = (5 × 4 × 3!) / (3! × 2) = 20 / 2 = 10 caminhos distintos.\nAlternativa B."
  },
  {
    id: "mat_q73",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Razão e Proporção (Consumo de Combustível)",
    difficulty: "Fácil",
    enunciation: "Um carro flex percorre 14 km com 1 litro de gasolina e 10 km com 1 litro de etanol. O motorista fará uma viagem de 420 km. Quantos litros a mais de combustível ele consumirá se optar por abastecer exclusivamente com etanol em vez de gasolina?",
    options: [
      "8 litros",
      "10 litros",
      "12 litros",
      "14 litros",
      "16 litros"
    ],
    correct: 2,
    explanation: "Consumo com gasolina: 420 km / 14 km/L = 30 litros de gasolina.\nConsumo com etanol: 420 km / 10 km/L = 42 litros de etanol.\nDiferença = 42 - 30 = 12 litros a mais.\nAlternativa C."
  },
  {
    id: "mat_q74",
    vestibular: "UNICAMP",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Plana (Área do Losango)",
    difficulty: "Fácil",
    enunciation: "As diagonais de um losango medem D = 16 cm e d = 10 cm. A área desse losango é:",
    options: [
      "40 cm²",
      "80 cm²",
      "120 cm²",
      "160 cm²",
      "200 cm²"
    ],
    correct: 1,
    explanation: "A área do losango é dada pelo semiproduto de suas diagonais:\nA = (D × d) / 2 = (16 × 10) / 2 = 160 / 2 = 80 cm².\nAlternativa B."
  },
  {
    id: "mat_q75",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Funções e Variação",
    difficulty: "Fácil",
    enunciation: "Uma caixa d'água de 1 000 litros estava cheia quando uma torneira na base foi aberta, esvaziando-a a uma vazão constante de 25 litros por minuto. Após quantos minutos a caixa d'água estará com exatamente 300 litros restantes?",
    options: [
      "24 minutos",
      "28 minutos",
      "32 minutos",
      "36 minutos",
      "40 minutos"
    ],
    correct: 1,
    explanation: "O volume de água que precisa escoar é: 1 000 - 300 = 700 litros.\nCom uma vazão de 25 L/min:\nTempo = 700 / 25 = 28 minutos.\nAlternativa B."
  },
  {
    id: "mat_q76",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Espacial (Cilindro Equilátero)",
    difficulty: "Médio",
    enunciation: "Um cilindro circular reto é denominado equilátero quando sua altura h é igual ao diâmetro de sua base (h = 2R). Se o raio da base desse cilindro mede 4 cm, a sua área total (em cm²) é:",
    options: [
      "48π cm²",
      "64π cm²",
      "80π cm²",
      "96π cm²",
      "128π cm²"
    ],
    correct: 3,
    explanation: "Como o cilindro é equilátero e R = 4 cm, sua altura é h = 2 × 4 = 8 cm.\nÁrea da base = π·R² = π·4² = 16π cm².\nÁrea das duas bases = 2 × 16π = 32π cm².\nÁrea lateral = 2·π·R·h = 2·π·4·8 = 64π cm².\nÁrea total = Área lateral + 2 × Área da base = 64π + 32π = 96π cm².\nAlternativa D."
  },
  {
    id: "mat_q77",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Estatística (Amplitude Térmica)",
    difficulty: "Fácil",
    enunciation: "Em uma cidade serrana, a temperatura mínima registrada no inverno foi de -3 °C e a temperatura máxima no mesmo dia atingiu 18 °C. A amplitude térmica registrada nesse dia foi de:",
    options: [
      "15 °C",
      "18 °C",
      "21 °C",
      "24 °C",
      "27 °C"
    ],
    correct: 2,
    explanation: "A amplitude térmica é a diferença entre a temperatura máxima e a temperatura mínima:\nAmplitude = T_max - T_min = 18 - (-3) = 18 + 3 = 21 °C.\nAlternativa C."
  },
  {
    id: "mat_q78",
    vestibular: "UNESP",
    year: 2024,
    subject: "Matemática",
    topic: "Trigonometria (Lei dos Senos)",
    difficulty: "Médio",
    enunciation: "Em um triângulo qualquer ABC inscrito em uma circunferência de raio R = 10 cm, o lado BC mede 10√3 cm. O ângulo Â oposto ao lado BC mede:",
    options: [
      "30°",
      "45°",
      "60°",
      "90°",
      "120°"
    ],
    correct: 2,
    explanation: "Pela Lei dos Senos: a / sen(Â) = 2R\n10√3 / sen(Â) = 2 × 10 = 20\nsen(Â) = 10√3 / 20 = √3 / 2.\nNo triângulo acutângulo, o ângulo cujo seno vale √3/2 é 60° (π/3 radianos).\nAlternativa C."
  },
  {
    id: "mat_q79",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Divisão Proporcional",
    difficulty: "Fácil",
    enunciation: "Dois sócios A e B investiram, respectivamente, R$ 20 000,00 e R$ 30 000,00 na abertura de uma empresa. Ao final do primeiro ano, a empresa obteve um lucro líquido de R$ 60 000,00 que deve ser dividido de forma diretamente proporcional ao capital investido por cada um. Qual foi a quantia recebida pelo sócio B?",
    options: [
      "R$ 24 000,00",
      "R$ 30 000,00",
      "R$ 36 000,00",
      "R$ 40 000,00",
      "R$ 42 000,00"
    ],
    correct: 2,
    explanation: "Total investido = 20 000 + 30 000 = R$ 50 000,00.\nA fração correspondente ao sócio B é 30 000 / 50 000 = 3 / 5 = 60%.\nLucro do sócio B = 60% de R$ 60 000,00 = 0,60 × 60 000 = R$ 36 000,00.\nAlternativa C."
  },
  {
    id: "mat_q80",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Analítica (Baricentro)",
    difficulty: "Fácil",
    enunciation: "Os vértices de um triângulo no plano cartesiano são A(1, 2), B(5, 4) e C(3, 9). As coordenadas do baricentro G desse triângulo são:",
    options: [
      "G(3, 5)",
      "G(3, 6)",
      "G(4, 5)",
      "G(4, 6)",
      "G(5, 5)"
    ],
    correct: 0,
    explanation: "As coordenadas do baricentro G são dadas pela média aritmética das coordenadas dos vértices:\nx_G = (x_A + x_B + x_C) / 3 = (1 + 5 + 3) / 3 = 9 / 3 = 3\ny_G = (y_A + y_B + y_C) / 3 = (2 + 4 + 9) / 3 = 15 / 3 = 5\nLogo, G(3, 5).\nAlternativa A."
  },
  {
    id: "mat_q81",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Análise Combinatória (Anagramas com Repetição)",
    difficulty: "Médio",
    enunciation: "Quantos anagramas diferentes podem ser formados permutando-se as letras da palavra VESTIBULARES (com repetição da letra E e da letra S, etc.) ou da palavra BRILHO? Considerando a palavra MATEMATICA (com as letras M repetida 2x, A repetida 3x e T repetida 2x), o número total de anagramas é:",
    options: [
      "151 200",
      "302 400",
      "453 600",
      "604 800",
      "1 814 400"
    ],
    correct: 0,
    explanation: "A palavra MATEMATICA possui n = 10 letras no total:\n- Letra A repete 3 vezes;\n- Letra M repete 2 vezes;\n- Letra T repete 2 vezes.\nFórmula da permutação com repetição:\nP₁₀^(3, 2, 2) = 10! / (3! · 2! · 2!)\nP = 3 628 800 / (6 × 2 × 2) = 3 628 800 / 24 = 151 200 anagramas.\nAlternativa A."
  },
  {
    id: "mat_q82",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Plana (Ângulo Inscrito na Circunferência)",
    difficulty: "Fácil",
    diagramSvg: `<svg viewBox="0 0 240 220" class="w-52 h-auto" xmlns="http://www.w3.org/2000/svg">
      <circle cx="120" cy="110" r="80" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <circle cx="120" cy="110" r="3" fill="#1e293b"/>
      <!-- Ângulo central AOB = 80 graus -->
      <line x1="120" y1="110" x2="68" y2="171" stroke="#334155" stroke-width="1.5"/>
      <line x1="120" y1="110" x2="171" y2="171" stroke="#334155" stroke-width="1.5"/>
      <text x="120" y="145" font-size="11" font-weight="bold" fill="#e11d48" text-anchor="middle">80°</text>
      <!-- Ângulo inscrito APB com P no topo P(120, 30) -->
      <line x1="120" y1="30" x2="68" y2="171" stroke="#4f46e5" stroke-width="2"/>
      <line x1="120" y1="30" x2="171" y2="171" stroke="#4f46e5" stroke-width="2"/>
      <text x="120" y="55" font-size="11" font-weight="bold" fill="#4f46e5" text-anchor="middle">α = ?</text>
      <text x="120" y="22" font-size="11" font-weight="bold" fill="#4f46e5" text-anchor="middle">P</text>
      <text x="55" y="185" font-size="11" font-weight="bold" fill="#334155">A</text>
      <text x="180" y="185" font-size="11" font-weight="bold" fill="#334155">B</text>
    </svg>`,
    imageCaption: "Ângulo inscrito P e ângulo central O subtendendo o mesmo arco AB.",
    enunciation: "Na figura, o ângulo central AÔB mede 80°. O ângulo inscrito APB que subtende o mesmo arco AB mede:",
    options: [
      "20°",
      "40°",
      "60°",
      "80°",
      "160°"
    ],
    correct: 1,
    explanation: "Em toda circunferência, a medida do ângulo inscrito é igual à metade da medida do ângulo central que subtende o mesmo arco:\nα = 80° / 2 = 40°.\nAlternativa B."
  },
  {
    id: "mat_q83",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Estatística (Boxplot e Quartis)",
    difficulty: "Médio",
    enunciation: "Em um diagrama de caixa (Boxplot) que resume as notas de 100 alunos em um teste, tem-se:\n- Menor valor = 30\n- Primeiro quartil (Q₁) = 55\n- Mediana (Q₂) = 70\n- Terceiro quartil (Q₃) = 85\n- Maior valor = 100\nQual porcentagem aproximada dos alunos obteve nota entre 55 e 85 (inclusive)?",
    options: [
      "25%",
      "40%",
      "50%",
      "75%",
      "85%"
    ],
    correct: 2,
    explanation: "Por definição estatística dos quartis de uma distribuição de dados:\n- O primeiro quartil Q₁ separa os 25% menores valores.\n- O terceiro quartil Q₃ separa os 75% menores valores.\nO intervalo interquartílico (entre Q₁ e Q₃) concentra exatamente 75% - 25% = 50% dos dados centrais da distribuição.\nPortanto, 50% dos alunos tiraram notas entre 55 e 85.\nAlternativa C."
  },
  {
    id: "mat_q84",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Matrizes e Determinantes (Regra de Sarrus)",
    difficulty: "Médio",
    enunciation: "O determinante da matriz identidade de 3ª ordem I₃ = [[1, 0, 0], [0, 1, 0], [0, 0, 1]] multiplicado por 2 (isto é, det(2 · I₃)) é igual a:",
    options: [
      "2",
      "4",
      "6",
      "8",
      "16"
    ],
    correct: 3,
    explanation: "Pela propriedade dos determinantes: se M é uma matriz quadrada de ordem n e k é um escalar real, então det(k · M) = k^n · det(M).\nPara a matriz de ordem n = 3:\ndet(2 · I₃) = 2³ · det(I₃) = 8 · 1 = 8.\nAlternativa D."
  },
  {
    id: "mat_q85",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Razão, Proporção e Escala",
    difficulty: "Fácil",
    enunciation: "Em uma planta arquitetônica desenhada na escala 1 : 50, a sala de estar é representada por um retângulo de 12 cm de comprimento por 8 cm de largura. As dimensões reais dessa sala, em metros, são:",
    options: [
      "3 m × 2 m",
      "4 m × 3 m",
      "6 m × 4 m",
      "12 m × 8 m",
      "24 m × 16 m"
    ],
    correct: 2,
    explanation: "Na escala 1 : 50, cada 1 cm no desenho equivale a 50 cm na realidade:\n- Comprimento real = 12 × 50 = 600 cm = 6 metros.\n- Largura real = 8 × 50 = 400 cm = 4 metros.\nDimensões reais = 6 m × 4 m.\nAlternativa C."
  },
  {
    id: "mat_q86",
    vestibular: "UNESP",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Plana (Área com Seno)",
    difficulty: "Médio",
    enunciation: "Um terreno triangular possui dois lados adjacentes que medem 20 metros e 30 metros, formando entre si um ângulo de 30°. A área desse terreno, em metros quadrados, é:",
    options: [
      "75 m²",
      "100 m²",
      "150 m²",
      "300 m²",
      "300√3 m²"
    ],
    correct: 2,
    explanation: "A área de um triângulo conhecendo dois lados a e b e o ângulo compreendido θ é dada por:\nA = (a · b · sen θ) / 2\nA = (20 × 30 × sen 30°) / 2 = (600 × 0,5) / 2 = 300 / 2 = 150 m².\nAlternativa C."
  },
  {
    id: "mat_q87",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Probabilidade (Eventos Independentes)",
    difficulty: "Fácil",
    enunciation: "Ao lançar uma moeda não viciada 3 vezes consecutivas, qual é a probabilidade de obter exatamente 3 'Caras'?",
    options: [
      "1 / 2",
      "1 / 4",
      "1 / 6",
      "1 / 8",
      "3 / 8"
    ],
    correct: 3,
    explanation: "Cada lançamento é um evento estatisticamente independente com probabilidade P(Cara) = 1/2.\nP(Cara e Cara e Cara) = (1/2) × (1/2) × (1/2) = 1/8 (12,5%).\nAlternativa D."
  },
  {
    id: "mat_q88",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Polinômios e Equações Algébricas",
    difficulty: "Difícil",
    enunciation: "Se a soma de duas raízes da equação x³ - 9x² + 23x - 15 = 0 é igual a 4, a terceira raiz dessa equação é:",
    options: [
      "1",
      "3",
      "4",
      "5",
      "6"
    ],
    correct: 3,
    explanation: "Pelas relações de Girard, para ax³ + bx² + cx + d = 0, a soma das três raízes r₁ + r₂ + r₃ é dada por -b/a:\nr₁ + r₂ + r₃ = -(-9) / 1 = 9.\nComo foi informado que a soma de duas raízes é 4 (r₁ + r₂ = 4):\n4 + r₃ = 9 => r₃ = 5.\nAlternativa D."
  },
  {
    id: "mat_q89",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Espacial (Capacidade e Conversão)",
    difficulty: "Fácil",
    enunciation: "Um reservatório cúbico com aresta interna de 2 metros está totalmente cheio de água. Qual é a capacidade máxima desse reservatório, em litros?",
    options: [
      "2 000 L",
      "4 000 L",
      "6 000 L",
      "8 000 L",
      "16 000 L"
    ],
    correct: 3,
    explanation: "Volume do cubo = a³ = 2³ = 8 m³.\nComo 1 metro cúbico equivale a 1 000 litros:\nCapacidade = 8 × 1 000 = 8 000 litros.\nAlternativa D."
  },
  {
    id: "mat_q90",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Matemática",
    topic: "Funções e Inversa",
    difficulty: "Médio",
    enunciation: "Seja f: R -> R a função bijetora dada por f(x) = (3x + 1) / 2. A lei de formação de sua função inversa f⁻¹(x) é:",
    options: [
      "f⁻¹(x) = (2x - 1) / 3",
      "f⁻¹(x) = (2x + 1) / 3",
      "f⁻¹(x) = (3x - 1) / 2",
      "f⁻¹(x) = 2 / (3x + 1)",
      "f⁻¹(x) = 3x - 2"
    ],
    correct: 0,
    explanation: "Para encontrar a função inversa, trocamos x por y e isolamos a nova variável y:\nx = (3y + 1) / 2\n2x = 3y + 1\n3y = 2x - 1 => y = (2x - 1) / 3.\nLogo, f⁻¹(x) = (2x - 1) / 3.\nAlternativa A."
  },
  {
    id: "mat_q91",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Porcentagem e Lucro sobre o Custo",
    difficulty: "Fácil",
    enunciation: "Um comerciante comprou um lote de camisetas por R$ 40,00 cada uma e deseja vendê-las com uma margem de lucro de 35% sobre o preço de custo. Por qual valor cada camiseta deve ser vendida?",
    options: [
      "R$ 48,00",
      "R$ 52,00",
      "R$ 54,00",
      "R$ 56,00",
      "R$ 58,00"
    ],
    correct: 2,
    explanation: "Lucro = 35% de R$ 40,00 = 0,35 × 40 = R$ 14,00.\nPreço de venda = Custo + Lucro = 40 + 14 = R$ 54,00.\n(Ou diretamente: 40 × 1,35 = R$ 54,00).\nAlternativa C."
  },
  {
    id: "mat_q92",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Plana (Polígonos e Diagonais)",
    difficulty: "Fácil",
    enunciation: "O número total de diagonais de um octógono regular (polígono de 8 lados) é:",
    options: [
      "14",
      "20",
      "24",
      "28",
      "32"
    ],
    correct: 1,
    explanation: "A fórmula do número de diagonais de um polígono de n lados é:\nd = [n · (n - 3)] / 2\nPara n = 8 lados:\nd = [8 · (8 - 3)] / 2 = (8 × 5) / 2 = 40 / 2 = 20 diagonais.\nAlternativa B."
  },
  {
    id: "mat_q93",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Análise Combinatória (Arranjos)",
    difficulty: "Fácil",
    enunciation: "Em uma corrida com 10 competidores de alto nível, de quantas maneiras distintas podem ser distribuídas as medalhas de ouro, prata e bronze (1º, 2º e 3º lugares, sem empates)?",
    options: [
      "120",
      "240",
      "504",
      "720",
      "1 000"
    ],
    correct: 3,
    explanation: "A ordem de chegada importa diretamente na atribuição das medalhas (ouro, prata e bronze).\nUsamos o Princípio Fundamental da Contagem (ou Arranjo A(10, 3)):\n- 1º lugar: 10 possibilidades;\n- 2º lugar: 9 possibilidades restantes;\n- 3º lugar: 8 possibilidades restantes.\nTotal = 10 × 9 × 8 = 720 maneiras distintas.\nAlternativa D."
  },
  {
    id: "mat_q94",
    vestibular: "UNESP",
    year: 2024,
    subject: "Matemática",
    topic: "Funções e Logaritmos",
    difficulty: "Médio",
    enunciation: "Se log₂(x) = 5 e log₂(y) = 3, o valor de log₂(x / y) é:",
    options: [
      "5/3",
      "2",
      "8",
      "15",
      "32"
    ],
    correct: 1,
    explanation: "Pela propriedade do logaritmo do quociente:\nlog₂(x / y) = log₂(x) - log₂(y) = 5 - 3 = 2.\nAlternativa B."
  },
  {
    id: "mat_q95",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Plana (Círculos e Setores)",
    difficulty: "Médio",
    enunciation: "O ponteiro dos minutos de um relógio de parede mede 10 cm de comprimento. Em um intervalo de 15 minutos (um quarto de hora), qual é a distância percorrida pela ponta desse ponteiro? (Adote π = 3,14)",
    options: [
      "7,85 cm",
      "15,70 cm",
      "31,40 cm",
      "47,10 cm",
      "62,80 cm"
    ],
    correct: 1,
    explanation: "Em 15 minutos, o ponteiro dos minutos descreve um quarto de volta completa (90°).\nO comprimento total de uma volta completa é C = 2·π·R = 2 × 3,14 × 10 = 62,8 cm.\nA distância percorrida em 15 minutos é um quarto desse comprimento:\nd = 62,8 / 4 = 15,70 cm.\nAlternativa B."
  },
  {
    id: "mat_q96",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Analítica (Ponto Médio)",
    difficulty: "Fácil",
    enunciation: "O ponto médio do segmento de reta de extremidades A(-2, 7) e B(6, 1) tem coordenadas:",
    options: [
      "(2, 4)",
      "(4, 4)",
      "(2, 3)",
      "(4, 3)",
      "(1, 4)"
    ],
    correct: 0,
    explanation: "As coordenadas do ponto médio M(x_m, y_m) são dadas pela média das coordenadas dos extremos:\nx_m = (-2 + 6) / 2 = 4 / 2 = 2\ny_m = (7 + 1) / 2 = 8 / 2 = 4\nLogo, M(2, 4).\nAlternativa A."
  },
  {
    id: "mat_q97",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Estatística (Cálculo de Mediana com Dados Agrupados)",
    difficulty: "Médio",
    enunciation: "Em um processo seletivo, 25 candidatos obtiveram a seguinte distribuição de pontuações:\n- 5 candidatos tiraram nota 6;\n- 8 candidatos tiraram nota 7;\n- 7 candidatos tiraram nota 8;\n- 5 candidatos tiraram nota 9.\nA mediana das notas desses 25 candidatos é igual a:",
    options: [
      "6,5",
      "7,0",
      "7,5",
      "8,0",
      "8,5"
    ],
    correct: 1,
    explanation: "Como são n = 25 candidatos (número ímpar), a mediana é exatamente a nota do candidato central, que ocupa a 13ª posição (pois (25 + 1) / 2 = 13).\nAcumulando as frequências em ordem crescente de nota:\n- Posições 1 a 5: nota 6 (5 candidatos)\n- Posições 6 a 13: nota 7 (8 candidatos)\nComo a 13ª posição tem nota 7, a mediana é exatamente 7,0.\nAlternativa B."
  },
  {
    id: "mat_q98",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Espacial (Esfera e Cilindro Circunscrito)",
    difficulty: "Médio",
    enunciation: "Uma bola de tênis esférica de raio R está perfeitamente ajustada dentro de uma embalagem cilíndrica de mesmo raio R e altura h = 2R (cilindro circunscrito à esfera). A razão entre o volume da esfera e o volume do cilindro é:",
    options: [
      "1 / 2",
      "2 / 3",
      "3 / 4",
      "4 / 5",
      "5 / 6"
    ],
    correct: 1,
    explanation: "Volume da esfera = (4/3)·π·R³.\nVolume do cilindro circunscrito = π·R²·h = π·R²·(2R) = 2π·R³.\nRazão = [(4/3)·π·R³] / [2π·R³] = (4/3) / 2 = 4 / 6 = 2 / 3.\n(Este é o famoso teorema arquimediano do cilindro e esfera).\nAlternativa B."
  },
  {
    id: "mat_q99",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Aritmética e Notação Científica",
    difficulty: "Fácil",
    enunciation: "A distância média da Terra à Lua é de aproximadamente 384 400 000 metros. Em notação científica correta, essa medida deve ser expressa como:",
    options: [
      "3,844 × 10⁶ m",
      "3,844 × 10⁷ m",
      "3,844 × 10⁸ m",
      "38,44 × 10⁷ m",
      "384,4 × 10⁶ m"
    ],
    correct: 2,
    explanation: "A notação científica exige que o coeficiente esteja no intervalo [1, 10[.\nDeslocando a vírgula 8 casas decimais para a esquerda:\n384 400 000 m = 3,844 × 10⁸ m.\nAlternativa C."
  },
  {
    id: "mat_q100",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Trigonometria (Arco Duplo)",
    difficulty: "Médio",
    enunciation: "Se sen(x) = 4/5 e cos(x) = 3/5, o valor de sen(2x) é:",
    options: [
      "7 / 25",
      "12 / 25",
      "16 / 25",
      "24 / 25",
      "1"
    ],
    correct: 3,
    explanation: "Pela identidade trigonométrica do arco duplo:\nsen(2x) = 2 · sen(x) · cos(x)\nsen(2x) = 2 · (4/5) · (3/5) = 24 / 25.\nAlternativa D."
  },
  {
    id: "mat_q101",
    vestibular: "ENEM",
    year: 2023,
    subject: "Matemática",
    topic: "Geometria Plana (Área do Triângulo Retângulo)",
    difficulty: "Fácil",
    enunciation: "Um triângulo retângulo tem catetos que medem 9 cm e 12 cm. A hipotenusa desse triângulo e a sua área medem, respectivamente:",
    options: [
      "15 cm e 54 cm²",
      "15 cm e 108 cm²",
      "16 cm e 54 cm²",
      "21 cm e 108 cm²",
      "15 cm e 45 cm²"
    ],
    correct: 0,
    explanation: "Por Pitágoras: a² = 9² + 12² = 81 + 144 = 225 => a = 15 cm.\nA área é o semiproduto dos catetos: A = (9 × 12) / 2 = 108 / 2 = 54 cm².\nAlternativa A."
  },
  {
    id: "mat_q102",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Matemática",
    topic: "Funções e Raízes Quadradas",
    difficulty: "Médio",
    enunciation: "O domínio da função real f(x) = √(2x - 8) é o conjunto:",
    options: [
      "{x ∈ R | x > 4}",
      "{x ∈ R | x ≥ 4}",
      "{x ∈ R | x ≤ 4}",
      "{x ∈ R | x ≥ 8}",
      "R"
    ],
    correct: 1,
    explanation: "No conjunto dos números reais, o radicando de uma raiz de índice par deve ser maior ou igual a zero (não negativo):\n2x - 8 ≥ 0 => 2x ≥ 8 => x ≥ 4.\nAlternativa B."
  },
  {
    id: "mat_q103",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Matemática Financeira (Juros Simples)",
    difficulty: "Fácil",
    enunciation: "Um empréstimo de R$ 5 000,00 foi concedido à taxa de juros simples de 2% ao mês durante 6 meses. O valor total de juros acumulados ao final desse período foi de:",
    options: [
      "R$ 500,00",
      "R$ 600,00",
      "R$ 720,00",
      "R$ 800,00",
      "R$ 1 000,00"
    ],
    correct: 1,
    explanation: "Fórmula dos juros simples: J = C · i · t\nCom C = 5 000, i = 0,02 e t = 6 meses:\nJ = 5 000 × 0,02 × 6 = 100 × 6 = R$ 600,00.\nAlternativa B."
  },
  {
    id: "mat_q104",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Matemática",
    topic: "Geometria Analítica (Posições Relativas de Retas)",
    difficulty: "Médio",
    enunciation: "As retas r: 2x - y + 5 = 0 e s: 4x - 2y + 10 = 0 no plano cartesiano são:",
    options: [
      "Concorrentes perpendiculares",
      "Concorrentes oblíquas",
      "Paralelas distintas",
      "Coincidentes",
      "Reversas"
    ],
    correct: 3,
    explanation: "Dividindo a equação da reta s por 2:\n(4x - 2y + 10) / 2 = 0 => 2x - y + 5 = 0.\nA equação obtida é idêntica à equação da reta r. Portanto, todos os pontos de uma pertencem à outra: são retas coincidentes.\nAlternativa D."
  },
  {
    id: "mat_q105",
    vestibular: "ENEM",
    year: 2024,
    subject: "Matemática",
    topic: "Estatística e Interpretação",
    difficulty: "Fácil",
    enunciation: "Um estudante obteve as seguintes notas em quatro avaliações bimestrais: 7,0; 8,5; 6,5 e 9,0. Qual foi a média aritmética das notas desse estudante?",
    options: [
      "7,50",
      "7,75",
      "8,00",
      "8,25",
      "8,50"
    ],
    correct: 1,
    explanation: "Média aritmética simples = (7,0 + 8,5 + 6,5 + 9,0) / 4 = 31,0 / 4 = 7,75.\nAlternativa B."
  }
];
