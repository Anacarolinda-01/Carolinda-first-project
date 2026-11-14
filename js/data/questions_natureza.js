/**
 * Banco de Questões de CIÊNCIAS DA NATUREZA (Física, Química e Biologia)
 * Total: 105 questões completas cobrindo todo o edital ENEM, FUVEST, UNICAMP e UNESP.
 * Equipado com diagramas SVG de circuitos, gráficos, estruturas moleculares e heredogramas.
 */
const questionsNatureza = [
  // ==========================================
  // BLOCO 1: FÍSICA (35 QUESTÕES)
  // ==========================================
  {
    id: "nat_fis_q1",
    vestibular: "ENEM",
    year: 2024,
    subject: "Física",
    topic: "Eletrodinâmica (Potência e Efeito Joule)",
    difficulty: "Médio",
    enunciation: "Em dias frios, o chuveiro elétrico costuma ser comutado da posição 'Verão' para a posição 'Inverno'. Fisicamente, para aumentar a temperatura da água que sai do chuveiro sob a mesma vazão de água e sob a mesma tensão da rede elétrica residencial, o que deve ocorrer com o comprimento do resistor interno e com a corrente elétrica que o atravessa?",
    options: [
      "O comprimento do resistor deve aumentar e a corrente elétrica deve diminuir.",
      "O comprimento do resistor deve diminuir e a corrente elétrica deve aumentar.",
      "O comprimento do resistor e a corrente elétrica devem aumentar simultaneamente.",
      "O comprimento do resistor e a corrente elétrica devem diminuir simultaneamente.",
      "O comprimento do resistor permanece inalterado e a corrente elétrica é duplicada."
    ],
    correct: 1,
    explanation: "Pela 2ª Lei de Ohm (R = ρ·L / A), ao diminuir o comprimento L do resistor interno, diminui-se a sua resistência elétrica R.\nPela 1ª Lei de Ohm (I = U / R), com menor resistência R sob tensão U constante, a corrente elétrica I aumenta.\nA potência dissipada por Efeito Joule é dada por P = U² / R. Com menor resistência, a potência P é maior, aquecendo mais a água. Portanto, alternativa B."
  },
  {
    id: "nat_fis_q2",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Física",
    topic: "Cinemática (Gráfico v x t)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 320 200" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="160" x2="290" y2="160" stroke="#64748b" stroke-width="2"/>
      <line x1="50" y1="170" x2="50" y2="30" stroke="#64748b" stroke-width="2"/>
      <text x="280" y="175" font-size="11" fill="#64748b" font-weight="bold">t (s)</text>
      <text x="20" y="35" font-size="11" fill="#64748b" font-weight="bold">v (m/s)</text>
      <!-- Trapézio de velocidade -->
      <line x1="50" y1="160" x2="110" y2="60" stroke="#4f46e5" stroke-width="3"/>
      <line x1="110" y1="60" x2="210" y2="60" stroke="#4f46e5" stroke-width="3"/>
      <line x1="210" y1="60" x2="260" y2="160" stroke="#4f46e5" stroke-width="3"/>
      <!-- Pontilhados -->
      <line x1="110" y1="160" x2="110" y2="60" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <line x1="210" y1="160" x2="210" y2="60" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <line x1="50" y1="60" x2="110" y2="60" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <!-- Rótulos -->
      <text x="25" y="65" font-size="11" font-weight="bold" fill="#4f46e5">20</text>
      <text x="105" y="175" font-size="11" fill="#64748b">4</text>
      <text x="205" y="175" font-size="11" fill="#64748b">10</text>
      <text x="255" y="175" font-size="11" fill="#64748b">14</text>
    </svg>`,
    imageCaption: "Gráfico da velocidade em função do tempo do movimento retilíneo de uma partícula.",
    enunciation: "O gráfico v × t representa o movimento retilíneo de um automóvel durante um teste de pista de 14 segundos. A distância total percorrida pelo veículo nesse intervalo de tempo é de:",
    options: [
      "160 m",
      "180 m",
      "200 m",
      "220 m",
      "240 m"
    ],
    correct: 2,
    explanation: "Em um gráfico de velocidade por tempo (v × t), o deslocamento escalar Δs é numericamente igual à área sob a curva (área do trapézio):\n- Base maior B = 14 s (de t = 0 a t = 14)\n- Base menor b = 10 - 4 = 6 s (de t = 4 a t = 10)\n- Altura h = 20 m/s\nÁrea = [(B + b) × h] / 2 = [(14 + 6) × 20] / 2 = (20 × 20) / 2 = 200 metros.\nAlternativa C."
  },
  {
    id: "nat_fis_q3",
    vestibular: "ENEM",
    year: 2024,
    subject: "Física",
    topic: "Ondulatória (Efeito Doppler)",
    difficulty: "Médio",
    enunciation: "Uma ambulância com a sirene emitindo som de frequência constante de 800 Hz desloca-se em alta velocidade aproximando-se de um pedestre parado no ponto de ônibus e, logo em seguida, afasta-se dele. O pedestre percebe o som emitido com frequências f_aprox (na aproximação) e f_afast (no afastamento). Comparando essas frequências percebidas com a frequência real emitida (f₀ = 800 Hz), tem-se:",
    options: [
      "f_aprox < 800 Hz e f_afast > 800 Hz",
      "f_aprox > 800 Hz e f_afast < 800 Hz",
      "f_aprox = 800 Hz e f_afast = 800 Hz",
      "f_aprox > 800 Hz e f_afast > 800 Hz",
      "f_aprox < 800 Hz e f_afast < 800 Hz"
    ],
    correct: 1,
    explanation: "Pelo Efeito Doppler, quando a fonte sonora se aproxima do observador parado, as frentes de onda são comprimidas espacialmente, aumentando a taxa de frentes de onda recebidas por segundo: a frequência percebida é mais alta (som mais agudo, f_aprox > 800 Hz). Quando a fonte se afasta, as frentes de onda se espaçam, diminuindo a frequência percebida (som mais grave, f_afast < 800 Hz). Alternativa B."
  },
  {
    id: "nat_fis_q4",
    vestibular: "ENEM",
    year: 2023,
    subject: "Física",
    topic: "Eletrodinâmica (Circuito Misto)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 320 180" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Bateria à esquerda -->
      <line x1="40" y1="50" x2="40" y2="80" stroke="#334155" stroke-width="2"/>
      <line x1="30" y1="80" x2="50" y2="80" stroke="#334155" stroke-width="3"/>
      <line x1="35" y1="90" x2="45" y2="90" stroke="#334155" stroke-width="1.5"/>
      <line x1="40" y1="90" x2="40" y2="130" stroke="#334155" stroke-width="2"/>
      <text x="10" y="88" font-size="10" font-weight="bold" fill="#334155">12 V</text>
      <!-- Fios superiores e inferiores -->
      <line x1="40" y1="50" x2="120" y2="50" stroke="#334155" stroke-width="2"/>
      <line x1="40" y1="130" x2="260" y2="130" stroke="#334155" stroke-width="2"/>
      <!-- Resistor em série R1 = 2 ohms -->
      <rect x="120" y="42" width="40" height="16" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
      <text x="140" y="35" font-size="10" font-weight="bold" fill="#4f46e5" text-anchor="middle">R₁ = 2 Ω</text>
      <line x1="160" y1="50" x2="200" y2="50" stroke="#334155" stroke-width="2"/>
      <!-- Paralelo R2 e R3 -->
      <line x1="200" y1="30" x2="200" y2="70" stroke="#334155" stroke-width="2"/>
      <line x1="200" y1="30" x2="220" y2="30" stroke="#334155" stroke-width="2"/>
      <line x1="200" y1="70" x2="220" y2="70" stroke="#334155" stroke-width="2"/>
      <rect x="220" y="22" width="30" height="16" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="235" y="16" font-size="9" font-weight="bold" fill="#ca8a04" text-anchor="middle">6 Ω</text>
      <rect x="220" y="62" width="30" height="16" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="235" y="90" font-size="9" font-weight="bold" fill="#ca8a04" text-anchor="middle">3 Ω</text>
      <line x1="250" y1="30" x2="270" y2="30" stroke="#334155" stroke-width="2"/>
      <line x1="250" y1="70" x2="270" y2="70" stroke="#334155" stroke-width="2"/>
      <line x1="270" y1="30" x2="270" y2="70" stroke="#334155" stroke-width="2"/>
      <line x1="270" y1="50" x2="270" y2="130" stroke="#334155" stroke-width="2"/>
      <line x1="260" y1="130" x2="270" y2="130" stroke="#334155" stroke-width="2"/>
    </svg>`,
    imageCaption: "Circuito misto alimentado por fonte de tensão contínua de 12 V.",
    enunciation: "No circuito elétrico ilustrado, uma bateria ideal de 12 V alimenta um resistor R₁ = 2 Ω em série com uma associação em paralelo formada por dois resistores de 6 Ω e 3 Ω. A corrente elétrica total fornecida pela bateria ao circuito é igual a:",
    options: [
      "1,5 A",
      "2,0 A",
      "3,0 A",
      "4,0 A",
      "6,0 A"
    ],
    correct: 2,
    explanation: "Primeiro calcula-se a resistência equivalente da associação em paralelo (6 Ω e 3 Ω):\nR_paralelo = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.\nAgora soma-se com o resistor R₁ = 2 Ω que está em série:\nR_eq_total = 2 + 2 = 4 Ω.\nPela 1ª Lei de Ohm (U = R · I):\nI = U / R_eq = 12 V / 4 Ω = 3,0 A.\nAlternativa C."
  },
  {
    id: "nat_fis_q5",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Física",
    topic: "Óptica Geométrica (Lentes e Espelhos)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 300 160" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Eixo óptico principal -->
      <line x1="20" y1="80" x2="280" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Lente convergente -->
      <line x1="150" y1="20" x2="150" y2="140" stroke="#4f46e5" stroke-width="2.5"/>
      <path d="M 145 25 L 150 20 L 155 25" fill="none" stroke="#4f46e5" stroke-width="2"/>
      <path d="M 145 135 L 150 140 L 155 135" fill="none" stroke="#4f46e5" stroke-width="2"/>
      <!-- Foco e Objeto -->
      <circle cx="100" cy="80" r="2.5" fill="#e11d48"/>
      <text x="97" y="95" font-size="10" font-weight="bold" fill="#e11d48">F</text>
      <circle cx="200" cy="80" r="2.5" fill="#e11d48"/>
      <text x="197" y="95" font-size="10" font-weight="bold" fill="#e11d48">F'</text>
      <!-- Objeto em 2F = 50 -->
      <line x1="50" y1="80" x2="50" y2="40" stroke="#10b981" stroke-width="3"/>
      <path d="M 46 45 L 50 40 L 54 45" fill="none" stroke="#10b981" stroke-width="2.5"/>
      <text x="40" y="35" font-size="10" font-weight="bold" fill="#10b981">Objeto</text>
    </svg>`,
    imageCaption: "Objeto colocado sobre o ponto antiprincipal (2F) de uma lente convergente delgada.",
    enunciation: "Um objeto luminoso é posicionado perpendicularmente ao eixo óptico principal de uma lente esférica delgada convergente, exatamente sobre o ponto antiprincipal objeto (distância p = 2f, onde f é a distância focal da lente). A imagem formada por essa lente é:",
    options: [
      "Virtual, direita e menor que o objeto.",
      "Virtual, direita e maior que o objeto.",
      "Real, invertida e de mesmo tamanho que o objeto.",
      "Real, invertida e maior que o objeto.",
      "Real, direita e de mesmo tamanho que o objeto."
    ],
    correct: 2,
    explanation: "Pela equação de Gauss: 1/f = 1/p + 1/p'\nSubstituindo p = 2f:\n1/p' = 1/f - 1/(2f) = 1/(2f) => p' = 2f (a imagem forma-se à mesma distância do outro lado da lente, sendo REAL).\nO aumento linear transversal é A = -p' / p = -2f / 2f = -1.\nO sinal negativo indica que a imagem é INVERTIDA e o módulo |A| = 1 indica que tem exatamente o MESMO TAMANHO do objeto. Alternativa C."
  },
  {
    id: "nat_fis_q6",
    vestibular: "ENEM",
    year: 2024,
    subject: "Física",
    topic: "Termodinâmica (Calor Sensível e Latente)",
    difficulty: "Fácil",
    enunciation: "Um bloco de gelo de 200 g a 0 °C é colocado em um calorímetro ideal e recebe calor até fundir-se completamente e transformar-se em água líquida a 0 °C. Sabendo que o calor latente de fusão do gelo é L_f = 80 cal/g, a quantidade total de calor necessária para essa mudança de estado é:",
    options: [
      "8 000 cal",
      "12 000 cal",
      "16 000 cal",
      "20 000 cal",
      "24 000 cal"
    ],
    correct: 2,
    explanation: "Na mudança de fase pura à temperatura constante, utiliza-se a fórmula do calor latente:\nQ = m · L_f\nQ = 200 g × 80 cal/g = 16 000 cal (ou 16 kcal).\nAlternativa C."
  },
  {
    id: "nat_fis_q7",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Física",
    topic: "Mecânica (Conservação da Energia)",
    difficulty: "Médio",
    enunciation: "Uma esfera de massa m = 2 kg é abandonada do repouso do alto de uma rampa curva sem atrito a uma altura h = 5 metros em relação ao solo horizontal. Adotando a aceleração da gravidade g = 10 m/s², a velocidade da esfera ao atingir a base da rampa é de:",
    options: [
      "5 m/s",
      "8 m/s",
      "10 m/s",
      "12 m/s",
      "14 m/s"
    ],
    correct: 2,
    explanation: "Pelo Princípio da Conservação da Energia Mecânica (sem atrito):\nE_mec_inicial = E_mec_final\nE_potencial = E_cinética\nm · g · h = (m · v²) / 2\nSimplificando a massa m de ambos os lados:\nv² = 2 · g · h\nv = √(2 × 10 × 5) = √100 = 10 m/s.\nAlternativa C."
  },
  {
    id: "nat_fis_q8",
    vestibular: "ENEM",
    year: 2024,
    subject: "Física",
    topic: "Hidrostática (Princípio de Pascal)",
    difficulty: "Fácil",
    diagramSvg: `<svg viewBox="0 0 280 180" class="w-60 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Tubo em U prensa hidráulica -->
      <path d="M 40 40 L 40 140 L 240 140 L 240 40 L 190 40 L 190 100 L 90 100 L 90 40 z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <!-- Pistão menor -->
      <rect x="42" y="55" width="46" height="15" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
      <text x="65" y="45" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">A₁ = 10 cm²</text>
      <text x="65" y="30" font-size="10" font-weight="bold" fill="#e11d48" text-anchor="middle">F₁ = 50 N</text>
      <!-- Pistão maior -->
      <rect x="192" y="55" width="46" height="15" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
      <text x="215" y="45" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">A₂ = 200 cm²</text>
      <text x="215" y="30" font-size="10" font-weight="bold" fill="#e11d48" text-anchor="middle">F₂ = ?</text>
    </svg>`,
    imageCaption: "Esquema funcional de um elevador hidráulico automotivo baseado no Princípio de Pascal.",
    enunciation: "Em um elevador hidráulico de oficina mecânica, uma força F₁ = 50 N é aplicada sobre o êmbolo menor, cuja área de seção transversal é A₁ = 10 cm². O êmbolo maior possui área A₂ = 200 cm². Pelo Princípio de Pascal, qual é o módulo da força F₂ gerada no êmbolo maior?",
    options: [
      "500 N",
      "800 N",
      "1 000 N",
      "1 200 N",
      "2 000 N"
    ],
    correct: 2,
    explanation: "Pelo Princípio de Pascal, a variação de pressão transmitida integralmente através do fluido incompressível é igual nos dois ramos:\nΔP₁ = ΔP₂ => F₁ / A₁ = F₂ / A₂\n50 / 10 = F₂ / 200\n5 = F₂ / 200 => F₂ = 5 × 200 = 1 000 N.\nAlternativa C."
  },
  {
    id: "nat_fis_q9",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Física",
    topic: "Ondulatória (Equação Fundamental)",
    difficulty: "Fácil",
    enunciation: "Uma estação de rádio FM emite ondas eletromagnéticas na frequência f = 100 MHz (100 × 10⁶ Hz). Sabendo que a velocidade de propagação dessas ondas no ar é de aproximadamente c = 3,0 × 10⁸ m/s, o comprimento de onda λ do sinal transmitido é de:",
    options: [
      "0,3 m",
      "1,5 m",
      "3,0 m",
      "6,0 m",
      "30 m"
    ],
    correct: 2,
    explanation: "Pela equação fundamental da ondulatória: v = λ · f\nλ = v / f = (3,0 × 10⁸ m/s) / (100 × 10⁶ Hz) = (3,0 × 10⁸) / (1,0 × 10⁸) = 3,0 metros.\nAlternativa C."
  },
  {
    id: "nat_fis_q10",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Física",
    topic: "Termodinâmica (Máquinas Térmicas e Ciclo de Carnot)",
    difficulty: "Médio",
    enunciation: "Uma máquina térmica de Carnot ideal opera entre duas fontes de calor com temperaturas absolutas T_quente = 600 K e T_fria = 300 K. O rendimento termodinâmico máximo (η) dessa máquina é:",
    options: [
      "25%",
      "33%",
      "50%",
      "67%",
      "75%"
    ],
    correct: 2,
    explanation: "O rendimento máximo teórico de Carnot depende exclusivamente das temperaturas termodinâmicas das fontes quente e fria:\nη = 1 - (T_fria / T_quente)\nη = 1 - (300 / 600) = 1 - 0,50 = 0,50 = 50%.\nAlternativa C."
  },
  {
    id: "nat_fis_q11",
    vestibular: "ENEM",
    year: 2024,
    subject: "Física",
    topic: "Dinâmica (Leis de Newton e Força de Atrito)",
    difficulty: "Médio",
    enunciation: "Um bloco de massa m = 10 kg repousa sobre uma superfície horizontal áspera com coeficiente de atrito cinético μ_c = 0,3. Adotando g = 10 m/s², uma força horizontal constante F = 50 N é aplicada ao bloco. A aceleração adquirida pelo bloco é de:",
    options: [
      "1,0 m/s²",
      "2,0 m/s²",
      "3,0 m/s²",
      "4,0 m/s²",
      "5,0 m/s²"
    ],
    correct: 1,
    explanation: "Força normal: N = P = m · g = 10 × 10 = 100 N.\nForça de atrito cinético: F_at = μ_c · N = 0,3 × 100 = 30 N.\nForça resultante: F_res = F - F_at = 50 - 30 = 20 N.\nPela 2ª Lei de Newton (F_res = m · a):\n20 = 10 · a => a = 2,0 m/s².\nAlternativa B."
  },
  {
    id: "nat_fis_q12",
    vestibular: "UNESP",
    year: 2024,
    subject: "Física",
    topic: "Eletromagnetismo (Força Magnética de Lorentz)",
    difficulty: "Médio",
    enunciation: "Uma partícula carregada com carga elétrica q positiva penetra perpendicularmente em uma região com campo magnético uniforme B com velocidade v. O trabalho realizado pela força magnética que atua sobre essa partícula durante sua trajetória circular é:",
    options: [
      "Nulo (W = 0)",
      "Proporcional a q · v · B",
      "Proporcional a m · v² / 2",
      "Máximo no ponto de entrada",
      "Depende do raio da curvatura"
    ],
    correct: 0,
    explanation: "A força magnética que atua sobre uma carga em movimento é perpendicular ao vetor velocidade em todos os instantes (F_mag = q · (v × B)).\nComo a força é permanentemente ortogonal ao deslocamento (θ = 90° e cos 90° = 0), o trabalho realizado pela força magnética é ESTRITAMENTE NULO.\nLogo, ela não altera a energia cinética nem o módulo da velocidade da partícula, apenas sua direção. Alternativa A."
  },
  {
    id: "nat_fis_q13",
    vestibular: "ENEM",
    year: 2023,
    subject: "Física",
    topic: "Óptica Geométrica (Índice de Refração e Lei de Snell)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 280 180" class="w-60 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Interface dos meios -->
      <line x1="30" y1="90" x2="250" y2="90" stroke="#334155" stroke-width="2"/>
      <rect x="30" y="90" width="220" height="70" fill="#e0f2fe" fill-opacity="0.5"/>
      <text x="40" y="70" font-size="11" fill="#64748b">Meio 1 (Ar, n₁ = 1,0)</text>
      <text x="40" y="120" font-size="11" fill="#0284c7">Meio 2 (Água, n₂ = 1,33)</text>
      <!-- Linha normal -->
      <line x1="140" y1="20" x2="140" y2="160" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="1.5"/>
      <!-- Raio incidente e refratado -->
      <line x1="80" y1="30" x2="140" y2="90" stroke="#f59e0b" stroke-width="2.5"/>
      <line x1="140" y1="90" x2="180" y2="155" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="110" y="60" font-size="11" font-weight="bold" fill="#f59e0b">θ₁</text>
      <text x="145" y="125" font-size="11" font-weight="bold" fill="#f59e0b">θ₂</text>
    </svg>`,
    imageCaption: "Refração de um feixe de luz monocromático passando do ar para a água.",
    enunciation: "Ao passar do ar (meio menos refringente, índice n₁) para a água (meio mais refringente, índice n₂ > n₁), um raio de luz monocromático sofre refração. O que acontece com a sua frequência, sua velocidade de propagação e seu comprimento de onda?",
    options: [
      "A frequência diminui, a velocidade diminui e o comprimento de onda permanece constante.",
      "A frequência permanece constante, a velocidade diminui e o comprimento de onda diminui.",
      "A frequência aumenta, a velocidade permanece constante e o comprimento de onda diminui.",
      "A frequência, a velocidade e o comprimento de onda diminuem simultaneamente.",
      "A frequência permanece constante, a velocidade aumenta e o comprimento de onda aumenta."
    ],
    correct: 1,
    explanation: "A frequência de uma onda depende exclusivamente da fonte emissora e NUNCA se altera na refração (permanece constante).\nAo entrar em um meio mais refringente (maior índice de refração n = c / v), a velocidade da luz v diminui.\nPela relação v = λ · f, com frequência constante, a diminuição da velocidade acarreta a diminuição proporcional do comprimento de onda λ. Alternativa B."
  },
  {
    id: "nat_fis_q14",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Física",
    topic: "Gravitação Universal (Leis de Kepler)",
    difficulty: "Fácil",
    enunciation: "Pela 3ª Lei de Kepler (Lei dos Períodos), a razão entre o quadrado do período de translação (T²) de um planeta e o cubo do raio médio de sua órbita (R³) em torno do Sol é constante (T² / R³ = k). Se um planeta X orbita a uma distância média do Sol quatro vezes maior do que a distância da Terra (R_X = 4·R_Terra), qual é o período de translação do planeta X em anos terrestres?",
    options: [
      "2 anos",
      "4 anos",
      "8 anos",
      "16 anos",
      "64 anos"
    ],
    correct: 2,
    explanation: "Pela 3ª Lei de Kepler:\n(T_X / T_Terra)² = (R_X / R_Terra)³\n(T_X / 1)² = (4)³ = 64\nT_X² = 64 => T_X = √64 = 8 anos terrestres.\nAlternativa C."
  },
  {
    id: "nat_fis_q15",
    vestibular: "ENEM",
    year: 2024,
    subject: "Física",
    topic: "Eletrodinâmica (Fusíveis e Proteção)",
    difficulty: "Médio",
    enunciation: "Um circuito doméstico de 127 V tem um disjuntor de segurança de 20 A. O morador pretende ligar simultaneamente nesse circuito uma lâmpada LED de 27 W, uma geladeira de 300 W e um forno de micro-ondas de 1 200 W. Se ele ligar adicionalmente um ferro de passar de 1 500 W na mesma tomada, o disjuntor irá desarmar? Por quê?",
    options: [
      "Não, pois a corrente total será de apenas 15 A.",
      "Não, pois os aparelhos em paralelo têm a mesma tensão e a corrente se divide sem ultrapassar 20 A.",
      "Sim, pois a potência total atingirá 3 027 W, exigindo uma corrente de quase 24 A, que supera o limite de 20 A do disjuntor.",
      "Sim, porque a resistência equivalente diminui tanto que zera a corrente.",
      "Não, pois o disjuntor só protege contra curtos-circuitos e não contra sobrecarga."
    ],
    correct: 2,
    explanation: "Potência total com o ferro de passar:\nP_total = 27 + 300 + 1 200 + 1 500 = 3 027 W.\nCorrente total exigida sob tensão de 127 V:\nI = P / U = 3 027 W / 127 V ≈ 23,8 A.\nComo 23,8 A é significativamente maior do que a corrente nominal do disjuntor (20 A), haverá desarme térmico por sobrecarga para evitar aquecimento perigoso da fiação. Alternativa C."
  },
  {
    id: "nat_fis_q16",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Física",
    topic: "Mecânica (Colisões e Quantidade de Movimento)",
    difficulty: "Médio",
    enunciation: "Um carrinho A de massa m = 2 kg move-se com velocidade v = 6 m/s e colide frontalmente com um carrinho B de massa m_B = 4 kg inicialmente em repouso. Após o choque, os dois carrinhos permanecem acoplados e movem-se juntos (colisão perfeitamente inelástica). A velocidade final do conjunto é:",
    options: [
      "1,5 m/s",
      "2,0 m/s",
      "3,0 m/s",
      "4,0 m/s",
      "6,0 m/s"
    ],
    correct: 1,
    explanation: "Pelo Princípio da Conservação da Quantidade de Movimento:\nQ_inicial = Q_final\nm_A · v_A + m_B · v_B = (m_A + m_B) · V_final\n(2 × 6) + (4 × 0) = (2 + 4) · V_final\n12 = 6 · V_final => V_final = 2,0 m/s.\nAlternativa B."
  },
  {
    id: "nat_fis_q17",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Física",
    topic: "Estática (Momento de uma Força / Torque)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 300 160" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Barra horizontal -->
      <rect x="40" y="70" width="220" height="12" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
      <!-- Ponto de apoio (triângulo) em x = 120 (a 80 px da esquerda e 140 da direita) -->
      <polygon points="120,82 105,115 135,115" fill="#4f46e5"/>
      <circle cx="120" cy="76" r="3" fill="#ffffff"/>
      <!-- Massa esquerda a 2 m do apoio -->
      <line x1="60" y1="82" x2="60" y2="120" stroke="#334155" stroke-width="2"/>
      <rect x="45" y="120" width="30" height="25" fill="#f87171" stroke="#b91c1c" stroke-width="1.5"/>
      <text x="60" y="137" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">30 kg</text>
      <text x="90" y="65" font-size="10" font-weight="bold" fill="#334155">d₁ = 2 m</text>
      <!-- Massa direita a 4 m do apoio -->
      <line x1="240" y1="82" x2="240" y2="120" stroke="#334155" stroke-width="2"/>
      <rect x="225" y="120" width="30" height="25" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
      <text x="240" y="137" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">M = ?</text>
      <text x="180" y="65" font-size="10" font-weight="bold" fill="#334155">d₂ = 4 m</text>
    </svg>`,
    imageCaption: "Gangorra em equilíbrio estático rotacional horizontal.",
    enunciation: "Uma tábua homogênea está apoiada horizontalmente em um ponto de giro. Um corpo de massa 30 kg está posicionado a uma distância d₁ = 2 m do ponto de apoio. Para que a gangorra permaneça em equilíbrio horizontal, qual deve ser a massa M posicionada a d₂ = 4 m do apoio no lado oposto?",
    options: [
      "10 kg",
      "15 kg",
      "20 kg",
      "30 kg",
      "60 kg"
    ],
    correct: 1,
    explanation: "Para o equilíbrio rotacional, a soma algébrica dos momentos (torques) em relação ao ponto de apoio deve ser zero:\nτ_horário = τ_anti-horário\nP₁ · d₁ = P₂ · d₂\n(m₁ · g) · d₁ = (M · g) · d₂\n30 × 2 = M × 4\n60 = 4M => M = 15 kg.\nAlternativa B."
  },
  {
    id: "nat_fis_q18",
    vestibular: "ENEM",
    year: 2024,
    subject: "Física",
    topic: "Termodinâmica (Dilatação Térmica)",
    difficulty: "Fácil",
    enunciation: "Trilhos de trem de aço sofrem dilatação térmica ao longo dos dias ensolarados. Um trilho de comprimento inicial L₀ = 20 metros a 10 °C atinge a temperatura de 40 °C sob sol forte ao meio-dia. Sabendo que o coeficiente de dilatação linear do aço é α = 1,2 × 10⁻⁵ °C⁻¹, a variação de comprimento ΔL sofrida pelo trilho é de:",
    options: [
      "3,6 mm",
      "7,2 mm",
      "10,8 mm",
      "14,4 mm",
      "18,0 mm"
    ],
    correct: 1,
    explanation: "Fórmula da dilatação linear: ΔL = L₀ · α · ΔT\nVariação de temperatura: ΔT = 40 - 10 = 30 °C.\nΔL = 20 m × (1,2 × 10⁻⁵ °C⁻¹) × 30 °C\nΔL = 600 × 1,2 × 10⁻⁵ = 720 × 10⁻⁵ m = 7,2 × 10⁻³ m = 7,2 mm.\nAlternativa B."
  },
  {
    id: "nat_fis_q19",
    vestibular: "UNESP",
    year: 2024,
    subject: "Física",
    topic: "Hidrostática (Teorema de Stevin e Empuxo)",
    difficulty: "Médio",
    enunciation: "Um bloco maciço de volume V = 0,02 m³ e densidade d_bloco = 600 kg/m³ é colocado em um tanque de água (densidade d_água = 1 000 kg/m³). Como a densidade do bloco é menor do que a da água, ele flutua em equilíbrio. O volume da parte submersa do bloco é de:",
    options: [
      "0,008 m³",
      "0,010 m³",
      "0,012 m³",
      "0,015 m³",
      "0,020 m³"
    ],
    correct: 2,
    explanation: "Na condição de flutuação em equilíbrio hidrostático, o Empuxo é igual ao Peso do bloco:\nE = P\nd_líquido · V_submerso · g = d_bloco · V_total · g\nV_submerso = (d_bloco / d_líquido) · V_total\nV_submerso = (600 / 1 000) × 0,02 = 0,60 × 0,02 = 0,012 m³ (ou seja, 60% submerso).\nAlternativa C."
  },
  {
    id: "nat_fis_q20",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Física",
    topic: "Mecânica (Lançamento Oblíquo)",
    difficulty: "Difícil",
    enunciation: "Um projétil é disparado a partir do solo plano com velocidade inicial v₀ formando um ângulo θ com a horizontal (0 < θ < 90°). Desprezando a resistência do ar, no ponto mais alto de sua trajetória parabólica:",
    options: [
      "A velocidade e a aceleração do projétil são ambas nulas.",
      "A velocidade é nula, mas a aceleração aponta para baixo.",
      "A velocidade é puramente horizontal (v_x = v₀·cos θ) e a aceleração é a gravidade (g vertical para baixo).",
      "A aceleração é puramente horizontal e a velocidade aponta para cima.",
      "A energia mecânica do projétil atinge o valor mínimo."
    ],
    correct: 2,
    explanation: "No ponto de altura máxima de um lançamento oblíquo, a componente vertical da velocidade se anula momentaneamente (v_y = 0).\nNo entanto, o movimento horizontal é uniforme (M.U.), logo a componente horizontal v_x = v₀·cos θ permanece inalterada.\nA aceleração que atua sobre o corpo durante todo o voo é a aceleração da gravidade g, que aponta sempre verticalmente para baixo. Alternativa C."
  },
  {
    id: "nat_fis_q21",
    vestibular: "ENEM",
    year: 2023,
    subject: "Física",
    topic: "Ondulatória (Fenômenos Ondulatórios)",
    difficulty: "Fácil",
    enunciation: "O fenômeno pelo qual uma onda sonora ou eletromagnética é capaz de contornar obstáculos ou passar através de fendas de dimensões comparáveis ao seu comprimento de onda é denominado:",
    options: [
      "Reflexão",
      "Refração",
      "Difração",
      "Polarização",
      "Dispersão"
    ],
    correct: 2,
    explanation: "A difração é a propriedade que as ondas possuem de contornar obstáculos e espalhar-se ao atravessar aberturas cujas dimensões sejam da mesma ordem de grandeza do seu comprimento de onda (λ ≈ d). É graças à difração que conseguimos ouvir uma conversa que ocorre atrás de um muro ou em uma sala contígua. Alternativa C."
  },
  {
    id: "nat_fis_q22",
    vestibular: "UNICAMP",
    year: 2023,
    subject: "Física",
    topic: "Eletrostática (Lei de Coulomb)",
    difficulty: "Fácil",
    enunciation: "Duas cargas pontuais puntiformes Q₁ e Q₂ fixadas no vácuo a uma distância d repelem-se com uma força eletrostática de módulo F. Se dobrarmos a distância entre elas (passando para 2d), a nova força de repulsão entre as cargas passará a valer:",
    options: [
      "2 · F",
      "F / 2",
      "F / 4",
      "F / 8",
      "4 · F"
    ],
    correct: 2,
    explanation: "Pela Lei de Coulomb, a força eletrostática é inversamente proporcional ao quadrado da distância entre as cargas: F = k · |Q₁·Q₂| / d².\nAo duplicar a distância (d' = 2d):\nF' = k · |Q₁·Q₂| / (2d)² = k · |Q₁·Q₂| / (4d²) = F / 4.\nAlternativa C."
  },
  {
    id: "nat_fis_q23",
    vestibular: "ENEM",
    year: 2024,
    subject: "Física",
    topic: "Eletrodinâmica (Consumo de Energia Elétrica)",
    difficulty: "Fácil",
    enunciation: "Um aparelho de ar-condicionado de 1 500 W de potência funciona, em média, 8 horas por dia durante os 30 dias de um mês. Sabendo que a tarifa cobrada pela distribuidora de energia elétrica é de R$ 0,80 por kWh consumido, qual é o custo mensal de energia gerado exclusivamente por esse aparelho?",
    options: [
      "R$ 180,00",
      "R$ 240,00",
      "R$ 288,00",
      "R$ 320,00",
      "R$ 360,00"
    ],
    correct: 2,
    explanation: "Energia elétrica = Potência × Tempo\nTempo total no mês = 8 h/dia × 30 dias = 240 horas.\nPotência em kW = 1 500 W / 1 000 = 1,5 kW.\nConsumo em kWh = 1,5 kW × 240 h = 360 kWh.\nCusto total = 360 kWh × R$ 0,80/kWh = R$ 288,00.\nAlternativa C."
  },
  {
    id: "nat_fis_q24",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Física",
    topic: "Cinemática (Movimento Circular Uniforme)",
    difficulty: "Médio",
    enunciation: "Um ponto material descreve uma trajetória circular de raio R = 2 metros em movimento circular uniforme (MCU) com frequência constante de 15 rotações por minuto (15 rpm). A velocidade linear (tangencial) desse ponto, adotando π = 3,14, é:",
    options: [
      "1,57 m/s",
      "3,14 m/s",
      "6,28 m/s",
      "9,42 m/s",
      "12,56 m/s"
    ],
    correct: 1,
    explanation: "Frequência em Hertz (rotações por segundo): f = 15 / 60 = 0,25 Hz.\nVelocidade angular: ω = 2·π·f = 2 × 3,14 × 0,25 = 1,57 rad/s.\nVelocidade linear: v = ω · R = 1,57 × 2 = 3,14 m/s.\nAlternativa B."
  },
  {
    id: "nat_fis_q25",
    vestibular: "UNESP",
    year: 2023,
    subject: "Física",
    topic: "Óptica (Reflexão Total e Fibra Óptica)",
    difficulty: "Médio",
    enunciation: "As fibras ópticas são amplamente utilizadas nas telecomunicações modernas para a transmissão ultraveloz de dados por feixes de luz. O princípio óptico fundamental que garante que a luz permaneça confinada no interior do núcleo da fibra sem escapar para a casca é a:",
    options: [
      "Difração da luz em fendas microscópicas.",
      "Reflexão total interna, que ocorre quando a luz viaja do meio mais refringente (núcleo) para o menos refringente (casca) com ângulo de incidência superior ao ângulo limite.",
      "Polarização seletiva da onda eletromagnética.",
      "Dispersão luminosa das cores do espectro visível.",
      "Refração convergente provocada pela casca espelhada."
    ],
    correct: 1,
    explanation: "A reflexão interna total ocorre sob duas condições indispensáveis:\n1. A luz deve incidir a partir do meio mais refringente em direção ao meio menos refringente (n_núcleo > n_casca).\n2. O ângulo de incidência deve ser rigorosamente maior do que o ângulo limite (θ_i > θ_limite).\nDessa forma, 100% da energia luminosa é refletida de volta para o núcleo sem perdas por refração. Alternativa B."
  },
  {
    id: "nat_fis_q26",
    vestibular: "ENEM",
    year: 2024,
    subject: "Física",
    topic: "Mecânica (Trabalho e Potência Mecânica)",
    difficulty: "Fácil",
    enunciation: "Um guindaste elétrico eleva verticalmente uma carga de 500 kg a uma altura de 12 metros em um intervalo de 10 segundos com velocidade constante. Adotando g = 10 m/s², a potência média útil desenvolvida pelo motor do guindaste é:",
    options: [
      "3 000 W",
      "4 500 W",
      "6 000 W",
      "7 500 W",
      "9 000 W"
    ],
    correct: 2,
    explanation: "Trabalho realizado contra a gravidade: W = m · g · h\nW = 500 kg × 10 m/s² × 12 m = 60 000 Joules.\nPotência média: P = W / Δt = 60 000 J / 10 s = 6 000 Watts (ou 6 kW).\nAlternativa C."
  },
  {
    id: "nat_fis_q27",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Física",
    topic: "Física Moderna (Efeito Fotoelétrico)",
    difficulty: "Médio",
    enunciation: "No efeito fotoelétrico, elétrons são ejetados da superfície de uma placa metálica quando esta é iluminada por radiação eletromagnética. De acordo com a teoria quântica proposta por Albert Einstein em 1905, a energia cinética máxima dos fotoelétrons emitidos depende exclusivamente da:",
    options: [
      "Intensidade luminosa (brilho) do feixe incidente.",
      "Frequência da radiação incidente e da função trabalho do metal.",
      "Tempo de exposição da placa à luz.",
      "Área iluminada da placa metálica.",
      "Temperatura ambiente do laboratório."
    ],
    correct: 1,
    explanation: "Pela equação do efeito fotoelétrico de Einstein: E_c_max = h·f - Φ, onde h·f é a energia do fóton incidente (proporcional à frequência f da luz) e Φ é a função trabalho (energia mínima necessária para arrancar o elétron do metal específico).\nAumentar a intensidade luminosa apenas aumenta o número de fótons e o número de elétrons ejetados por segundo, mas não a energia cinética de cada elétron individual. Alternativa B."
  },
  {
    id: "nat_fis_q28",
    vestibular: "ENEM",
    year: 2023,
    subject: "Física",
    topic: "Termodinâmica (Transmissão de Calor)",
    difficulty: "Fácil",
    enunciation: "Garrafas térmicas são projetadas para manter a temperatura de líquidos quentes ou frios por longos períodos. O vácuo existente entre as paredes duplas de vidro espelhado tem a função física primordial de evitar as trocas de calor por:",
    options: [
      "Apenas convecção.",
      "Apenas condução.",
      "Condução e convecção.",
      "Radiação térmica.",
      "Efeito estufa."
    ],
    correct: 2,
    explanation: "A condução e a convecção térmica necessitam obrigatoriamente de um meio material para ocorrer. No vácuo (ausência de matéria), não há partículas para colidir (condução) nem fluidos para circular em correntes (convecção). Já a radiação térmica é bloqueada pelas superfícies espelhadas que refletem as ondas infravermelhas. Portanto, o vácuo impede condução e convecção (Alternativa C)."
  },
  {
    id: "nat_fis_q29",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Física",
    topic: "Mecânica (Energia Potencial Elástica)",
    difficulty: "Fácil",
    enunciation: "Uma mola helicoidal de constante elástica k = 400 N/m é comprimida em x = 0,1 m (10 cm). A energia potencial elástica armazenada na mola é:",
    options: [
      "1,0 J",
      "2,0 J",
      "4,0 J",
      "20 J",
      "40 J"
    ],
    correct: 1,
    explanation: "Energia potencial elástica: E_el = (k · x²) / 2\nE_el = [400 × (0,1)²] / 2 = (400 × 0,01) / 2 = 4 / 2 = 2,0 Joules.\nAlternativa B."
  },
  {
    id: "nat_fis_q30",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Física",
    topic: "Eletromagnetismo (Indução Eletromagnética de Faraday-Lenz)",
    difficulty: "Médio",
    enunciation: "Ao aproximar rapidamente o polo norte de um ímã permanente de uma espira condutora fechada, observa-se o surgimento de uma corrente elétrica induzida na espira. De acordo com a Lei de Lenz, o sentido dessa corrente induzida será tal que originará na face da espira voltada para o ímã um:",
    options: [
      "Polo sul magnético, para atrair o ímã e acelerar o movimento.",
      "Polo norte magnético, para repelir o ímã e opor-se à aproximação.",
      "Campo elétrico nulo.",
      "Polo eletrostático positivo sem magnetismo.",
      "Aquecimento Joule sem criação de campo magnético."
    ],
    correct: 1,
    explanation: "A Lei de Lenz estabelece que o sentido da corrente induzida é sempre tal que o campo magnético por ela gerado se OPÕE à variação do fluxo magnético que a produziu.\nComo o polo Norte está se aproximando (aumento do fluxo), a espira cria um polo Norte voltado para ele a fim de repelir a aproximação e opor-se à variação. Alternativa B."
  },
  {
    id: "nat_fis_q31",
    vestibular: "ENEM",
    year: 2024,
    subject: "Física",
    topic: "Ondulatória (Ressonância)",
    difficulty: "Fácil",
    enunciation: "Quando um cantor lírico emite uma nota musical sustentada na frequência natural de oscilação de uma taça de cristal, a taça começa a vibrar com amplitudes progressivamente maiores até quebrar. O fenômeno físico responsável por essa transferência eficiente de energia é a:",
    options: [
      "Polarização.",
      "Interferência destrutiva.",
      "Ressonância acústica.",
      "Reflexão difusa.",
      "Difração sonora."
    ],
    correct: 2,
    explanation: "A ressonância ocorre quando um sistema oscilatório recebe energia externa periódica em uma frequência igual ou muito próxima à sua frequência natural de vibração, resultando em um aumento contínuo da amplitude de oscilação até o limite elástico do material. Alternativa C."
  },
  {
    id: "nat_fis_q32",
    vestibular: "UNESP",
    year: 2024,
    subject: "Física",
    topic: "Cinemática (Queda Livre)",
    difficulty: "Fácil",
    enunciation: "Uma pedra é abandonada do repouso do alto de uma ponte e atinge a superfície da água 3 segundos após o lançamento. Desprezando a resistência do ar e adotando g = 10 m/s², a altura da ponte em relação à água é:",
    options: [
      "15 m",
      "30 m",
      "45 m",
      "60 m",
      "90 m"
    ],
    correct: 2,
    explanation: "Na queda livre a partir do repouso (v₀ = 0):\nh = (g · t²) / 2\nh = (10 × 3²) / 2 = (10 × 9) / 2 = 90 / 2 = 45 metros.\nAlternativa C."
  },
  {
    id: "nat_fis_q33",
    vestibular: "ENEM",
    year: 2023,
    subject: "Física",
    topic: "Dinâmica (Plano Inclinado sem Atrito)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 280 180" class="w-60 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Rampa ângulo 30 -->
      <polygon points="40,140 240,140 240,40" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
      <path d="M 80 140 A 40 40 0 0 0 74 122" fill="none" stroke="#4f46e5" stroke-width="2"/>
      <text x="85" y="135" font-size="11" font-weight="bold" fill="#4f46e5">30°</text>
      <!-- Bloco na rampa -->
      <g transform="translate(130, 85) rotate(-26.5)">
        <rect x="0" y="-20" width="35" height="20" fill="#f87171" stroke="#b91c1c" stroke-width="1.5"/>
      </g>
      <text x="145" y="60" font-size="10" font-weight="bold" fill="#b91c1c">m = 4 kg</text>
    </svg>`,
    imageCaption: "Bloco deslizando livremente em rampa inclinada de 30 graus sem atrito.",
    enunciation: "Um bloco de massa m = 4 kg escorrega livremente ao longo de um plano inclinado de 30° em relação à horizontal, sem atrito. Considerando sen(30°) = 0,5 e g = 10 m/s², a aceleração do bloco ao longo da rampa é:",
    options: [
      "2,5 m/s²",
      "5,0 m/s²",
      "7,5 m/s²",
      "8,6 m/s²",
      "10,0 m/s²"
    ],
    correct: 1,
    explanation: "A componente do peso paralela ao plano inclinado responsável pela aceleração é P_x = m · g · sen(θ).\nPela 2ª Lei de Newton: F_res = m · a => m · g · sen(θ) = m · a.\nSimplificando a massa:\na = g · sen(θ) = 10 × sen(30°) = 10 × 0,5 = 5,0 m/s².\nAlternativa B."
  },
  {
    id: "nat_fis_q34",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Física",
    topic: "Óptica Geométrica (Espelho Plano)",
    difficulty: "Fácil",
    enunciation: "Uma pessoa está em pé a 2 metros de distância de um espelho plano vertical. Qual é a distância entre a pessoa e a sua respectiva imagem refletida no espelho?",
    options: [
      "1 metro",
      "2 metros",
      "3 metros",
      "4 metros",
      "6 metros"
    ],
    correct: 3,
    explanation: "Em um espelho plano, a imagem é simétrica e forma-se atrás do espelho exatamente à mesma distância em que o objeto está na frente dele (p = p' = 2 m).\nPortanto, a distância total entre a pessoa e a sua imagem refletida é d = p + p' = 2 + 2 = 4 metros.\nAlternativa D."
  },
  {
    id: "nat_fis_q35",
    vestibular: "ENEM",
    year: 2024,
    subject: "Física",
    topic: "Eletrodinâmica (Aparelhos de Medição: Voltímetro e Amperímetro)",
    difficulty: "Médio",
    enunciation: "Para medir corretamente a corrente elétrica que percorre uma lâmpada e a diferença de potencial (tensão) aplicada sobre ela em um circuito, o amperímetro e o voltímetro ideais devem ser ligados, respectivamente:",
    options: [
      "Ambos em série com a lâmpada.",
      "Ambos em paralelo com a lâmpada.",
      "O amperímetro em série e o voltímetro em paralelo com a lâmpada.",
      "O amperímetro em paralelo e o voltímetro em série com a lâmpada.",
      "O amperímetro na tomada e o voltímetro no interruptor."
    ],
    correct: 2,
    explanation: "O amperímetro ideal possui resistência interna nula (R_int = 0) e deve ser conectado EM SÉRIE com o elemento para que toda a corrente passe por ele sem alterar a resistência do circuito.\nO voltímetro ideal possui resistência interna infinita (R_int = ∞) e deve ser conectado EM PARALELO com o elemento para medir a queda de tensão sem desviar corrente apreciável. Alternativa C."
  },
  // ==========================================
  // BLOCO 2: QUÍMICA (35 QUESTÕES)
  // ==========================================
  {
    id: "nat_qui_q1",
    vestibular: "ENEM",
    year: 2024,
    subject: "Química",
    topic: "Termoquímica (Gráfico de Energia e Catalisador)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 320 200" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="160" x2="300" y2="160" stroke="#64748b" stroke-width="2"/>
      <line x1="50" y1="170" x2="50" y2="20" stroke="#64748b" stroke-width="2"/>
      <text x="240" y="175" font-size="10" fill="#64748b">Caminho da Reação</text>
      <text x="55" y="25" font-size="10" fill="#64748b">Entalpia H (kJ)</text>
      <!-- Reagentes em H = 100 -->
      <line x1="50" y1="110" x2="90" y2="110" stroke="#334155" stroke-width="2.5"/>
      <text x="55" y="105" font-size="10" font-weight="bold" fill="#334155">Reagentes</text>
      <!-- Caminho sem catalisador (alto) -->
      <path d="M 90 110 Q 150 10 220 140" fill="none" stroke="#ef4444" stroke-width="2.5"/>
      <text x="150" y="30" font-size="10" font-weight="bold" fill="#ef4444" text-anchor="middle">Sem catalisador</text>
      <!-- Caminho com catalisador (baixo) -->
      <path d="M 90 110 Q 150 65 220 140" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4,4"/>
      <text x="150" y="75" font-size="10" font-weight="bold" fill="#10b981" text-anchor="middle">Com catalisador</text>
      <!-- Produtos em H = 60 -->
      <line x1="220" y1="140" x2="280" y2="140" stroke="#334155" stroke-width="2.5"/>
      <text x="235" y="135" font-size="10" font-weight="bold" fill="#334155">Produtos</text>
    </svg>`,
    imageCaption: "Perfil energético comparativo de uma reação química na ausência e presença de catalisador.",
    enunciation: "O diagrama de entalpia ilustra o perfil energético de uma reação química antes e após a adição de um catalisador apropriado. Com base no gráfico, a ação do catalisador e o caráter térmico da reação são, respectivamente:",
    options: [
      "Diminuir a energia de ativação; reação endotérmica.",
      "Diminuir a energia de ativação; reação exotérmica (ΔH < 0).",
      "Aumentar o valor do ΔH; reação exotérmica.",
      "Diminuir a entalpia dos produtos; reação endotérmica.",
      "Deslocar o equilíbrio para a direita aumentando o rendimento."
    ],
    correct: 1,
    explanation: "Como a entalpia final dos produtos é MENOR do que a entalpia inicial dos reagentes (H_produtos < H_reagentes), houve liberação de calor para as vizinhanças (ΔH = H_p - H_r < 0), caracterizando uma reação EXOTÉRMICA.\nA função do catalisador é oferecer um mecanismo de reação alternativo com MENOR energia de ativação, sem alterar o ΔH nem a posição final do equilíbrio químico. Alternativa B."
  },
  {
    id: "nat_qui_q2",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Química",
    topic: "Eletroquímica (Pilha de Daniell)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 300 180" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Becker da esquerda (Zn) -->
      <rect x="30" y="70" width="80" height="90" fill="#e0f2fe" stroke="#334155" stroke-width="2"/>
      <rect x="50" y="45" width="20" height="90" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <text x="60" y="40" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Ânodo (Zn)</text>
      <!-- Becker da direita (Cu) -->
      <rect x="190" y="70" width="80" height="90" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
      <rect x="220" y="45" width="20" height="90" fill="#b45309" stroke="#78350f" stroke-width="2"/>
      <text x="230" y="40" font-size="10" font-weight="bold" fill="#78350f" text-anchor="middle">Cátodo (Cu)</text>
      <!-- Fio externo com voltímetro -->
      <path d="M 60 45 L 60 25 L 135 25" fill="none" stroke="#334155" stroke-width="2"/>
      <circle cx="150" cy="25" r="14" fill="#ffffff" stroke="#4f46e5" stroke-width="2"/>
      <text x="150" y="29" font-size="10" font-weight="bold" fill="#4f46e5" text-anchor="middle">V</text>
      <path d="M 165 25 L 230 25 L 230 45" fill="none" stroke="#334155" stroke-width="2"/>
      <!-- Seta do fluxo de elétrons -->
      <text x="100" y="18" font-size="10" font-weight="bold" fill="#e11d48">e⁻ →</text>
      <!-- Ponte salina -->
      <path d="M 90 100 L 90 60 L 210 60 L 210 100" fill="none" stroke="#64748b" stroke-width="8"/>
      <text x="150" y="75" font-size="9" font-weight="bold" fill="#64748b" text-anchor="middle">Ponte Salina</text>
    </svg>`,
    imageCaption: "Esquema da clássica Pilha galvânica de Daniell (Zn / Cu).",
    enunciation: "Considere a pilha eletroquímica padrão de Daniell baseada nas semi-reações de redução:\n- Zn²⁺(aq) + 2e⁻ -> Zn(s)   E°_red = -0,76 V\n- Cu²⁺(aq) + 2e⁻ -> Cu(s)   E°_red = +0,34 V\nDurante o funcionamento espontâneo dessa pilha, a diferença de potencial padrão (ΔE°) e as transformações ocorridas nos eletrodos são:",
    options: [
      "ΔE° = +0,42 V; o eletrodo de zinco ganha massa.",
      "ΔE° = +1,10 V; o eletrodo de cobre sofre corrosão.",
      "ΔE° = +1,10 V; o eletrodo de zinco é o ânodo (corrói) e o eletrodo de cobre é o cátodo (ganha massa).",
      "ΔE° = -1,10 V; o processo é não espontâneo.",
      "ΔE° = +0,76 V; os elétrons migram do cobre para o zinco."
    ],
    correct: 2,
    explanation: "O cobre possui maior potencial de redução (+0,34 V > -0,76 V), portanto ele sofre REDUÇÃO no CÁTODO (Cu²⁺ + 2e⁻ -> Cu(s), aumentando de massa).\nO zinco possui menor potencial de redução, logo ele sofre OXIDAÇÃO no ÂNODO (Zn(s) -> Zn²⁺ + 2e⁻, perdendo massa/corroendo).\nOs elétrons fluem do ânodo (Zn) para o cátodo (Cu) pelo circuito externo.\nA diferença de potencial padrão é: ΔE° = E°_maior - E°_menor = (+0,34) - (-0,76) = +1,10 V. Alternativa C."
  },
  {
    id: "nat_qui_q3",
    vestibular: "ENEM",
    year: 2024,
    subject: "Química",
    topic: "Química Orgânica (Funções e Nomenclatura)",
    difficulty: "Fácil",
    enunciation: "O vinagre utilizado no tempero de saladas é uma solução aquosa diluída cujo principal componente responsável pelo odor e sabor azedo característicos é o ácido etanoico (ácido acético). Esse composto pertence a qual função orgânica?",
    options: [
      "Álcool",
      "Aldeído",
      "Cetona",
      "Ácido carboxílico",
      "Éster"
    ],
    correct: 3,
    explanation: "O ácido etanoico (fórmula molecular CH₃COOH) possui em sua estrutura o grupo funcional carboxila (-COOH), que caracteriza a classe dos ÁCIDOS CARBOXÍLICOS. Alternativa D."
  },
  {
    id: "nat_qui_q4",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Química",
    topic: "Equilíbrio Químico (Princípio de Le Chatelier)",
    difficulty: "Médio",
    enunciation: "O processo de Haber-Bosch para síntese da amônia gasosa é representado pela equação em equilíbrio químico:\nN₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)   ΔH = -92 kJ/mol (reação exotérmica)\nDe acordo com o Princípio de Le Chatelier, para DESLOCAR o equilíbrio no sentido de aumentar a produção de NH₃ (sentido direto), deve-se:",
    options: [
      "Aumentar a temperatura do sistema.",
      "Diminuir a pressão total sobre os gases.",
      "Aumentar a pressão total e diminuir a temperatura do sistema.",
      "Adicionar um catalisador de ferro.",
      "Remover gás nitrogênio N₂ do reator."
    ],
    correct: 2,
    explanation: "Pelo Princípio de Le Chatelier:\n1. Efeito da Pressão: O lado dos reagentes possui 1 + 3 = 4 mols de gás, e o lado dos produtos possui 2 mols de gás. O aumento da pressão desloca o equilíbrio para o lado de menor volume gasoso (formação de NH₃).\n2. Efeito da Temperatura: Como a reação direta é exotérmica (libera calor), o abaixamento da temperatura favorece o sentido exotérmico (produção de NH₃).\nO catalisador apenas acelera a velocidade sem alterar a constante de equilíbrio. Portanto, deve-se aumentar a pressão e diminuir a temperatura (Alternativa C)."
  },
  {
    id: "nat_qui_q5",
    vestibular: "ENEM",
    year: 2023,
    subject: "Química",
    topic: "Estequiometria (Cálculo com Rendimento)",
    difficulty: "Médio",
    enunciation: "A decomposição térmica do calcário (carbonato de cálcio, CaCO₃) é amplamente empregada na indústria da construção civil para a obtenção de cal viva (CaO), segundo a equação química:\nCaCO₃(s) -> CaO(s) + CO₂(g)\nMassas molares: CaCO₃ = 100 g/mol; CaO = 56 g/mol; CO₂ = 44 g/mol.\nAo aquecer 500 g de CaCO₃ com 80% de pureza e rendimento da reação de 100%, qual é a massa de cal viva (CaO) obtida?",
    options: [
      "168 g",
      "224 g",
      "280 g",
      "320 g",
      "400 g"
    ],
    correct: 1,
    explanation: "Massa pura de reagente CaCO₃ = 80% de 500 g = 0,80 × 500 = 400 g de CaCO₃.\nPela estequiometria da reação balanceada:\n100 g de CaCO₃ produz 56 g de CaO\n400 g de CaCO₃ produzirá m gramas de CaO\nm = (400 × 56) / 100 = 4 × 56 = 224 g de CaO.\nAlternativa B."
  },
  {
    id: "nat_qui_q6",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Química",
    topic: "Química Orgânica (Reações de Esterificação)",
    difficulty: "Médio",
    enunciation: "A reação clássica de esterificação de Fischer consiste na reação entre um ácido carboxílico e um álcool em meio ácido com aquecimento, gerando como produtos:",
    options: [
      "Um éster e água.",
      "Um éter e gás hidrogênio.",
      "Uma amina e gás carbônico.",
      "Uma cetona e sal orgânico.",
      "Um sabão e glicerol."
    ],
    correct: 0,
    explanation: "A esterificação de Fischer ocorre pela condensação entre o grupo carboxila (-COOH) de um ácido carboxílico e o grupo hidroxila (-OH) de um álcool, eliminando uma molécula de água e formando um ÉSTER (R-COO-R' + H₂O). É a reação padrão de produção de aromatizantes e flavorizantes artificiais. Alternativa A."
  },
  {
    id: "nat_qui_q7",
    vestibular: "ENEM",
    year: 2024,
    subject: "Química",
    topic: "Soluções e pH",
    difficulty: "Fácil",
    enunciation: "Uma solução aquosa de ácido clorídrico (HCl), um ácido forte totalmente ionizado, apresenta concentração molar de íons H⁺ igual a 1,0 × 10⁻³ mol/L. O pH dessa solução e o seu caráter ácido-base são:",
    options: [
      "pH = 3,0; caráter fortemente ácido.",
      "pH = 11,0; caráter básico.",
      "pH = 7,0; caráter neutro.",
      "pH = 1,0; caráter levemente ácido.",
      "pH = 10⁻³; caráter anfótero."
    ],
    correct: 0,
    explanation: "Por definição: pH = -log₁₀[H⁺].\npH = -log₁₀(1,0 × 10⁻³) = -(-3) = 3,0.\nComo pH = 3,0 < 7, a solução é fortemente ácida. Alternativa A."
  },
  {
    id: "nat_qui_q8",
    vestibular: "UNESP",
    year: 2024,
    subject: "Química",
    topic: "Ligações Químicas e Forças Intermoleculares",
    difficulty: "Médio",
    enunciation: "A água (H₂O) e o sulfeto de hidrogênio (H₂S) possuem geometrias moleculares angulares semelhantes e átomos centrais pertencentes à mesma família da tabela periódica (calcogênios). Entretanto, à temperatura ambiente (25 °C), a água é líquida com alto ponto de ebulição (100 °C), enquanto o H₂S é um gás de ponto de ebulição muito baixo (-60 °C). Essa acentuada diferença é explicada principalmente pelo fato de as moléculas de água formarem entre si:",
    options: [
      "Ligações covalentes apolares.",
      "Forças de dispersão de London.",
      "Ligações iônicas intramoleculares.",
      "Ligações de hidrogênio (pontes de hidrogênio), que são atrações intermoleculares muito fortes.",
      "Forças repulsivas dipolo induzido."
    ],
    correct: 3,
    explanation: "O oxigênio é altamente eletronegativo e possui raio atômico pequeno, permitindo a formação de LIGAÇÕES DE HIDROGÊNIO intensas entre as moléculas de H₂O. O enxofre tem menor eletronegatividade e maior raio atômico, de modo que o H₂S estabelece apenas interações dipolo-dipolo permanentes mais fracas, justificando o ponto de ebulição muito mais elevado da água. Alternativa D."
  },
  {
    id: "nat_qui_q9",
    vestibular: "ENEM",
    year: 2024,
    subject: "Química",
    topic: "Química Ambiental (Chuva Ácida)",
    difficulty: "Fácil",
    enunciation: "A queima de combustíveis fósseis que contêm impurezas de enxofre (como o carvão mineral e o óleo diesel) libera na atmosfera dióxido de enxofre (SO₂), que reage com oxigênio e umidade atmosférica formando ácido sulfúrico (H₂SO₄). Esse fenômeno ambiental é responsável pela:",
    options: [
      "Inversão térmica.",
      "Chuva ácida.",
      "Destruição da camada de ozônio por CFCs.",
      "Eutrofização artificial de rios.",
      "Maré vermelha por proliferação de algas."
    ],
    correct: 1,
    explanation: "A chuva ácida é provocada pela dissolução de óxidos ácidos na água da chuva, especialmente SO₂/SO₃ (formando H₂SO₄) e óxidos de nitrogênio NO_x (formando HNO₃). A precipitação ácida corrói estruturas de mármore e metal e acidifica solos e corpos d'água. Alternativa B."
  },
  {
    id: "nat_qui_q10",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Química",
    topic: "Isomeria (Isomeria Óptica e Carbono Quiral)",
    difficulty: "Médio",
    enunciation: "Uma molécula orgânica apresenta atividade óptica (é quiral) quando possui pelo menos um carbono assimétrico (carbono quiral, C*). Um carbono é considerado quiral quando estabelece quatro ligações simples com:",
    options: [
      "Pelo menos dois grupos idênticos.",
      "Quatro ligantes (grupos de átomos) completamente diferentes entre si.",
      "Uma ligação dupla e duas ligações simples.",
      "Quatro átomos de hidrogênio.",
      "Um anel aromático e um grupo carboxila."
    ],
    correct: 1,
    explanation: "Para haver quiralidade (assimetria molecular), o carbono sp³ com quatro pares de elétrons compartilhados deve estar conectado a QUATRO LIGANTES DIFERENTES entre si. Isso impede a existência de plano de simetria e gera dois enantiômeros (isômeros ópticos dextrógiro e levógiro) que são imagens especulares não sobreponíveis. Alternativa B."
  },
  {
    id: "nat_qui_q11",
    vestibular: "ENEM",
    year: 2023,
    subject: "Química",
    topic: "Química Orgânica (Sabões e Tensoativos)",
    difficulty: "Médio",
    enunciation: "Os sabões tradicionais são sais de ácidos graxos de cadeia longa produzidos pela saponificação de óleos ou gorduras com hidróxido de sódio (NaOH). A eficácia do sabão na remoção de gorduras e sujeiras deve-se à sua natureza anfipática (anfifílica), pois a sua molécula possui:",
    options: [
      "Apenas características polares que dissolvem gorduras por ligação de hidrogênio.",
      "Apenas uma longa cadeia carbônica apolar que se solubiliza totalmente em água pura.",
      "Uma extremidade polar hidrofílica (que interage com a água) e uma longa cauda apolar lipofílica (que interage com as gorduras formando micelas).",
      "Uma carga positiva que atrai as partículas ácidas de sujeira por ligação metálica.",
      "Compostos fenólicos que atuam como bactericidas voláteis."
    ],
    correct: 2,
    explanation: "Os sabões e detergentes são moléculas anfifílicas: possuem uma cauda carbônica apolar (hidrofóbica/lipofílica) que se liga aos lipídios e gorduras apolares, e uma cabeça iônica polar (-COO⁻ Na⁺, hidrofílica) que interage com a água. Em meio aquoso, agregam-se formando micelas esféricas que emulsionam e removem a sujeira. Alternativa C."
  },
  {
    id: "nat_qui_q12",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Química",
    topic: "Soluções (Diluição)",
    difficulty: "Fácil",
    enunciation: "Um químico dispõe de 100 mL de uma solução aquosa de hidróxido de sódio (NaOH) com concentração 2,0 mol/L. Ele adiciona água destilada até que o volume final atinja 500 mL. A nova concentração molar da solução diluída é de:",
    options: [
      "0,2 mol/L",
      "0,4 mol/L",
      "0,5 mol/L",
      "0,8 mol/L",
      "1,0 mol/L"
    ],
    correct: 1,
    explanation: "Na diluição simples, a quantidade de matéria (número de mols de soluto) não se altera:\nC_inicial · V_inicial = C_final · V_final\n2,0 mol/L × 100 mL = C_final × 500 mL\n200 = 500 · C_final => C_final = 200 / 500 = 0,40 mol/L.\nAlternativa B."
  },
  {
    id: "nat_qui_q13",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Química",
    topic: "Termoquímica (Lei de Hess)",
    difficulty: "Difícil",
    enunciation: "Considere as equações termoquímicas a 25 °C:\n1) C(grafite) + O₂(g) -> CO₂(g)   ΔH₁ = -394 kJ/mol\n2) CO(g) + 1/2 O₂(g) -> CO₂(g)   ΔH₂ = -283 kJ/mol\nAplique a Lei de Hess para calcular a variação de entalpia da reação de combustão incompleta do carbono grafite:\nC(grafite) + 1/2 O₂(g) -> CO(g)   ΔH = ?",
    options: [
      "-677 kJ/mol",
      "-111 kJ/mol",
      "+111 kJ/mol",
      "+283 kJ/mol",
      "+677 kJ/mol"
    ],
    correct: 1,
    explanation: "Pela Lei de Hess, mantemos a reação 1 e invertemos a reação 2 (trocando o sinal do ΔH₂):\n1) C(grafite) + O₂(g) -> CO₂(g)   ΔH = -394 kJ\n2) CO₂(g) -> CO(g) + 1/2 O₂(g)   ΔH = +283 kJ\nSomando membro a membro:\nC(grafite) + 1/2 O₂(g) -> CO(g)\nΔH_global = -394 + 283 = -111 kJ/mol.\nAlternativa B."
  },
  {
    id: "nat_qui_q14",
    vestibular: "ENEM",
    year: 2024,
    subject: "Química",
    topic: "Eletroquímica (Proteção Catódica e Metal de Sacrifício)",
    difficulty: "Médio",
    enunciation: "Cascos de navios de aço e oleodutos subterrâneos de ferro sofrem constante corrosão oxidativa pelo oxigênio e umidade. Para protegê-los, é comum fixar blocos de magnésio (Mg) ou zinco (Zn) em contato metálico direto com a estrutura de ferro. Esse método de proteção contra a corrosão é conhecido como proteção catódica com metal de sacrifício, e funciona porque o magnésio:",
    options: [
      "Possui menor potencial de oxidação do que o ferro, agindo como barreira mecânica.",
      "Possui maior potencial de redução do que o ferro, reduzindo o ferro enferrujado.",
      "Possui maior facilidade para oxidar-se (menor potencial de redução) que o ferro, oxidando-se preferencialmente e protegendo o ferro.",
      "Reage com a água salgada formando uma camada isolante de plástico.",
      "Neutraliza o pH do mar tornando a água completamente ácida."
    ],
    correct: 2,
    explanation: "O magnésio (E°_red = -2,37 V) e o zinco (E°_red = -0,76 V) possuem potenciais de redução menores (e, portanto, maiores potenciais de oxidação) do que o ferro (E°_red = -0,44 V).\nPor isso, o metal de sacrifício oxida-se no lugar do ferro, doando elétrons para manter a estrutura de ferro em estado reduzido (cátodo protegido). Alternativa C."
  },
  {
    id: "nat_qui_q15",
    vestibular: "UNESP",
    year: 2024,
    subject: "Química",
    topic: "Classificação Periódica (Raio Atômico e Eletronegatividade)",
    difficulty: "Fácil",
    enunciation: "Na Tabela Periódica dos elementos químicos, ao percorrer um mesmo período da esquerda para a direita, observa-se geralmente que:",
    options: [
      "O raio atômico aumenta e a eletronegatividade diminui.",
      "O raio atômico diminui e a eletronegatividade aumenta.",
      "O raio atômico e a eletronegatividade aumentam simultaneamente.",
      "O número de camadas eletrônicas aumenta progressivamente.",
      "O caráter metálico torna-se predominante."
    ],
    correct: 1,
    explanation: "Ao longo de um mesmo período da esquerda para a direita, o número atômico Z (número de prótons no núcleo) cresce, aumentando a carga nuclear efetiva sobre a mesma camada de elétrons. Isso contrai a eletrosfera, fazendo o RAIO ATÔMICO DIMINUIR e a atração pelos elétrons de valência aumentar, o que FAZ A ELETRONEGATIVIDADE AUMENTAR. Alternativa B."
  },
  {
    id: "nat_qui_q16",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Química",
    topic: "Química Orgânica (Polímeros)",
    difficulty: "Médio",
    enunciation: "O polietileno (PE) é um dos plásticos mais utilizados no mundo na fabricação de sacolas e embalagens flexíveis. Ele é classificado como um polímero de adição sintetizado a partir do monômero:",
    options: [
      "Eteno (etileno, CH₂=CH₂)",
      "Etino (acetileno, CH≡CH)",
      "Etanol (CH₃CH₂OH)",
      "Ácido acético (CH₃COOH)",
      "Benzeno (C₆H₆)"
    ],
    correct: 0,
    explanation: "O polietileno é produzido pela polimerização por adição do eteno (gás etileno, H₂C=CH₂), em que a ligação dupla pi se rompe para unir sucessivas unidades monoméricas em uma longa cadeia macromolecular saturada (-[CH₂-CH₂]-_n). Alternativa A."
  },
  {
    id: "nat_qui_q17",
    vestibular: "ENEM",
    year: 2023,
    subject: "Química",
    topic: "Separação de Misturas",
    difficulty: "Fácil",
    enunciation: "Em uma refinaria de petróleo, a separação dos diversos derivados do petróleo bruto (como gás liquefeito, gasolina, querosene, óleo diesel e asfalto) baseia-se na diferença de temperatura de ebulição de suas frações e é realizada industrialmente por:",
    options: [
      "Decantação gravitacional.",
      "Filtração a vácuo.",
      "Destilação fracionada.",
      "Centrifugação rápida.",
      "Sublimação seletiva."
    ],
    correct: 2,
    explanation: "A destilação fracionada é o método físico padrão de separação de misturas homogêneas de líquidos miscíveis que apresentam diferentes pontos de ebulição. Em torres de fracionamento, as frações mais voláteis (com menor massa molar e menor ponto de ebulição) condensam nos níveis superiores, enquanto as mais pesadas permanecem na base. Alternativa C."
  },
  {
    id: "nat_qui_q18",
    vestibular: "UNICAMP",
    year: 2023,
    subject: "Química",
    topic: "Gases Ideais (Equação de Clapeyron)",
    difficulty: "Médio",
    enunciation: "Um cilindro rígido e indeformável contém 2 mols de um gás ideal a uma temperatura de 300 K sob pressão de 4,0 atm. Se a temperatura do gás for elevada para 450 K sem vazamento de gás, a nova pressão exercida sobre as paredes do cilindro será de:",
    options: [
      "4,5 atm",
      "5,0 atm",
      "6,0 atm",
      "7,5 atm",
      "8,0 atm"
    ],
    correct: 2,
    explanation: "Como o cilindro é rígido e fechado, a transformação é isocórica (isovolumétrica, volume V constante):\nP₁ / T₁ = P₂ / T₂\n4,0 / 300 = P₂ / 450\nP₂ = (4,0 × 450) / 300 = 1 800 / 300 = 6,0 atm.\nAlternativa C."
  },
  {
    id: "nat_qui_q19",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Química",
    topic: "Química Orgânica (Oxidação de Álcoois)",
    difficulty: "Médio",
    enunciation: "A oxidação branda de um álcool primário, como o etanol (CH₃CH₂OH), em presença de um agente oxidante adequado, produz inicialmente:",
    options: [
      "Uma cetona.",
      "Um aldeído (etanal).",
      "Um éter simétrico.",
      "Um alcano saturado.",
      "Gás metano."
    ],
    correct: 1,
    explanation: "A oxidação parcial de um álcool primário converte o carbono que possui a hidroxila em um grupo carbonila terminal, gerando um ALDEÍDO (etanol -> etanal). Se a oxidação for energética, prossegue até a formação de um ácido carboxílico (ácido etanoico). Álcoois secundários oxidam-se a cetonas, e álcoois terciários não sofrem oxidação em condições usuais. Alternativa B."
  },
  {
    id: "nat_qui_q20",
    vestibular: "ENEM",
    year: 2024,
    subject: "Química",
    topic: "Radioatividade (Tipos de Emissão)",
    difficulty: "Fácil",
    enunciation: "Ao sofrer decaimento radioativo com emissão de uma partícula alfa (α), que é constituída por 2 prótons e 2 nêutrons (núcleo de hélio, ⁴₂He), o núcleo do átomo pai tem:",
    options: [
      "Seu número de massa diminuído de 4 unidades e seu número atômico diminuído de 2 unidades.",
      "Seu número de massa diminuído de 2 unidades e seu número atômico inalterado.",
      "Seu número de massa inalterado e seu número atômico aumentado de 1 unidade.",
      "Seu número atômico e sua massa aumentados de 2 unidades.",
      "Apenas seu número de nêutrons aumentado."
    ],
    correct: 0,
    explanation: "Pela 1ª Lei da Radioatividade (Lei de Soddy): quando um núcleo radioativo emite uma partícula alfa (⁴₂α), seu número de massa A diminui de 4 unidades e seu número atômico Z diminui de 2 unidades: ^A_Z X -> ^(A-4)_(Z-2) Y + ⁴₂α. Alternativa A."
  },
  {
    id: "nat_qui_q21",
    vestibular: "UNESP",
    year: 2023,
    subject: "Química",
    topic: "Estequiometria (Reagente Limitante)",
    difficulty: "Médio",
    enunciation: "A combustão completa do gás metano ocorre de acordo com a reação:\nCH₄(g) + 2 O₂(g) -> CO₂(g) + 2 H₂O(g)\nSe misturarmos 2 mols de CH₄ com 2 mols de O₂ em um reator e provocarmos a queima completa, qual é o reagente limitante e quantos mols de CO₂ serão formados?",
    options: [
      "O CH₄ é o reagente limitante; formam-se 2 mols de CO₂.",
      "O O₂ é o reagente limitante; forma-se 1 mol de CO₂.",
      "O O₂ é o reagente limitante; formam-se 2 mols de CO₂.",
      "Nenhum reagente sobra; formam-se 4 mols de CO₂.",
      "O CH₄ é o reagente limitante; forma-se 0,5 mol de CO₂."
    ],
    correct: 1,
    explanation: "Pela proporção estequiométrica, 1 mol de CH₄ necessita de 2 mols de O₂.\nPara consumir todos os 2 mols de CH₄ disponíveis, seriam necessários 2 × 2 = 4 mols de O₂.\nComo há apenas 2 mols de O₂, o O₂ acabará primeiro: ele é o REAGENTE LIMITANTE.\nCom 2 mols de O₂:\n2 mols de O₂ produzem exatamente 1 mol de CO₂ (restando 1 mol de CH₄ em excesso).\nAlternativa B."
  },
  {
    id: "nat_qui_q22",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Química",
    topic: "Cinética Química (Lei de Velocidade)",
    difficulty: "Difícil",
    enunciation: "Para a reação elementar 2 A(g) + B(g) -> C(g), a lei de velocidade da reação é dada por v = k · [A]² · [B]. Se duplicarmos a concentração molar do reagente A mantendo a concentração de B constante, a velocidade da reação:",
    options: [
      "Permanece constante.",
      "Duplica (aumenta 2 vezes).",
      "Quadruplica (aumenta 4 vezes).",
      "Aumenta 8 vezes.",
      "Cai pela metade."
    ],
    correct: 2,
    explanation: "A reação é de segunda ordem em relação ao reagente A (expoente 2 na lei de velocidade).\nSe a concentração de A duplica: [A]' = 2 · [A].\nA nova velocidade será: v' = k · (2[A])² · [B] = k · 4[A]² · [B] = 4 · v.\nPortanto, a velocidade quadruplica (aumenta 4 vezes). Alternativa C."
  },
  {
    id: "nat_qui_q23",
    vestibular: "ENEM",
    year: 2024,
    subject: "Química",
    topic: "Química Geral (Densidade e Flutuação)",
    difficulty: "Fácil",
    enunciation: "Ao adicionar óleo de soja (densidade d = 0,92 g/cm³) a um copo com água pura (d = 1,00 g/cm³), os dois líquidos não se misturam (são imiscíveis) e o óleo permanece na camada superior. O óleo flutua sobre a água porque:",
    options: [
      "É mais denso que a água e estabelece fortes ligações de hidrogênio.",
      "É menos denso que a água e possui natureza predominantemente apolar.",
      "Possui maior viscosidade que a água salgada.",
      "Sofre reação de neutralização imediata.",
      "Tem maior afinidade hidrofílica com o vidro."
    ],
    correct: 1,
    explanation: "Dois fatores explicam o comportamento: 1) o óleo é apolar e a água é polar ('semelhante dissolve semelhante'), impedindo que se misturem; 2) o óleo possui menor densidade (0,92 g/cm³ < 1,00 g/cm³), o que faz com que ele flutue na superfície por empuxo hidrostático. Alternativa B."
  },
  {
    id: "nat_qui_q24",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Química",
    topic: "Soluções (Solubilidade e Curvas de Solubilidade)",
    difficulty: "Médio",
    enunciation: "O coeficiente de solubilidade do sal nitrato de potássio (KNO₃) em água é de 30 g de KNO₃ em 100 g de água a 20 °C, e de 80 g de KNO₃ em 100 g de água a 50 °C. Se uma solução saturada preparada com 80 g de KNO₃ dissolvidos em 100 g de água a 50 °C for resfriada lentamente até 20 °C, a massa de sal que precipitará como corpo de fundo será de:",
    options: [
      "20 g",
      "30 g",
      "50 g",
      "60 g",
      "80 g"
    ],
    correct: 2,
    explanation: "A 20 °C, 100 g de água conseguem manter dissolvidos no máximo 30 g de KNO₃.\nComo a solução continha 80 g de sal dissolvidos a 50 °C:\nMassa que precipita = 80 g - 30 g = 50 g de sal sólido no fundo do frasco.\nAlternativa C."
  },
  {
    id: "nat_qui_q25",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Química",
    topic: "Química Orgânica (Isomeria Geométrica Cis-Trans)",
    difficulty: "Médio",
    enunciation: "Para que um composto orgânico de cadeia aberta apresente isomeria geométrica (cis-trans ou Z-E), é condição estritamente necessária que:",
    options: [
      "Possua apenas ligações simples e carbono quiral.",
      "Apresente uma dupla ligação carbono-carbono (C=C), com cada um dos carbonos da dupla ligado a dois grupos diferentes entre si (R₁ ≠ R₂ e R₃ ≠ R₄).",
      "Possua um grupo hidroxila em carbono primário.",
      "Tenha fórmula molecular cíclica com anel aromático benzeno.",
      "Possua pelo menos três átomos de halogênio idênticos."
    ],
    correct: 1,
    explanation: "A rotação em torno da dupla ligação C=C é impedida pela ligação pi. Para que a posição espacial dos substituintes gere isômeros com propriedades físicas distintas (cis e trans), cada carbono da ligação dupla deve possuir dois ligantes diferentes entre si. Alternativa B."
  },
  {
    id: "nat_qui_q26",
    vestibular: "ENEM",
    year: 2024,
    subject: "Química",
    topic: "Química Geral (Modelos Atômicos)",
    difficulty: "Fácil",
    enunciation: "O experimento clássico de Ernest Rutherford em 1911, no qual partículas alfa (α) foram disparadas contra uma fina lâmina de ouro, permitiu concluir que o átomo:",
    options: [
      "É uma esfera maciça e indivisível semelhante a uma bola de bilhar (Dalton).",
      "É uma esfera fluida positiva com elétrons incrustados como em um pudim de passas (Thomson).",
      "Possui um núcleo central minúsculo, denso e de carga positiva, onde se concentra quase toda a massa, rodeado por uma vasta eletrosfera vazia.",
      "Possui elétrons em órbitas circulares estacionárias quantizadas de energia (Bohr).",
      "Não apresenta partículas subatômicas carregadas."
    ],
    correct: 2,
    explanation: "Como a maioria das partículas alfa atravessou a lâmina sem sofrer desvios e apenas uma fração mínima ricocheteou, Rutherford concluiu que o átomo é constituído majoritariamente por espaço vazio, com um núcleo central extremamente compacto e de carga positiva onde reside a quase totalidade da massa. Alternativa C."
  },
  {
    id: "nat_qui_q27",
    vestibular: "UNESP",
    year: 2024,
    subject: "Química",
    topic: "Eletroquímica (Eletrólise Ígnea e Aquosa)",
    difficulty: "Médio",
    enunciation: "Na eletrólise ígnea do cloreto de sódio fundido (NaCl(l)), processo industrial de grande relevância, os produtos formados no cátodo (redução) e no ânodo (oxidação) são, respectivamente:",
    options: [
      "Gás oxigênio (O₂) e gás hidrogênio (H₂).",
      "Sódio metálico (Na(s)) e gás cloro (Cl₂(g)).",
      "Hidróxido de sódio (NaOH) e ácido clorídrico (HCl).",
      "Gás cloro (Cl₂) e sódio metálico (Na).",
      "Óxido de sódio e água pura."
    ],
    correct: 1,
    explanation: "Na eletrólise ígnea não há água presente para competir.\n- No cátodo (polo negativo), os cátions sódio sofrem redução: Na⁺ + e⁻ -> Na(s) (sódio metálico líquido/sólido).\n- No ânodo (polo positivo), os ânions cloreto sofrem oxidação: 2 Cl⁻ -> Cl₂(g) + 2e⁻ (gás cloro liberado).\nAlternativa B."
  },
  {
    id: "nat_qui_q28",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Química",
    topic: "Química Orgânica (Acidez e Basicidade)",
    difficulty: "Médio",
    enunciation: "Dentre os compostos orgânicos oxigenados e nitrogenados, as aminas alifáticas caracterizam-se pelo seu comportamento químico como:",
    options: [
      "Bases de Lewis, devido ao par de elétrons livres disponível no átomo de nitrogênio.",
      "Ácidos fortes de Arrhenius, por liberarem prótons espontaneamente.",
      "Sais neutros insolúveis em água.",
      "Agentes oxidantes potentes.",
      "Ésteres polares sem reatividade."
    ],
    correct: 0,
    explanation: "As aminas possuem um par de elétrons não ligante no átomo de nitrogênio capaz de ser compartilhado com cátions H⁺ (atuando como bases de Brønsted-Lowry) ou recebido por ácidos receptores (atuando como bases de Lewis). Alternativa A."
  },
  {
    id: "nat_qui_q29",
    vestibular: "ENEM",
    year: 2023,
    subject: "Química",
    topic: "Química Ambiental (Camada de Ozônio)",
    difficulty: "Fácil",
    enunciation: "A camada de ozônio (O₃) na estratosfera desempenha papel biológico fundamental para a preservação da vida na Terra porque:",
    options: [
      "Retém a radiação infravermelha emitida pela superfície terrestre.",
      "Filtra e absorve a maior parte da nociva radiação solar ultravioleta do tipo B (UV-B).",
      "Fornece gás oxigênio respirável para as altas altitudes.",
      "Neutraliza os gases tóxicos provenientes de erupções vulcânicas.",
      "Gera chuvas de alta pureza nas regiões polares."
    ],
    correct: 1,
    explanation: "A camada de ozônio absorve eficientemente a radiação ultravioleta de alta energia (UV-B e UV-C), impedindo que doses perigosas atinjam a biosfera, onde poderiam causar mutações celulares, câncer de pele e cataratas oculares. Alternativa B."
  },
  {
    id: "nat_qui_q30",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Química",
    topic: "Propriedades Coligativas",
    difficulty: "Médio",
    enunciation: "A adição de um soluto não volátil (como cloreto de sódio ou sacarose) a um solvente puro (água) acarreta alterações em suas propriedades coligativas. Essas modificações manifestam-se por:",
    options: [
      "Aumento da pressão de vapor e diminuição do ponto de ebulição.",
      "Diminuição da pressão de vapor (tonoscopia) e elevação do ponto de ebulição (ebulioscopia).",
      "Elevação da temperatura de congelamento (crioscopia).",
      "Redução da pressão osmótica da solução.",
      "Inalterabilidade das temperaturas de mudança de estado físico."
    ],
    correct: 1,
    explanation: "Pelo efeito coligativo decorrente da presença de partículas de soluto não volátil:\n1. A pressão de vapor do solvente diminui (Tonoscopia);\n2. O ponto de ebulição da solução eleva-se (Ebulioscopia);\n3. O ponto de congelamento diminui (Crioscopia);\n4. Surge ou amplia-se a Pressão Osmótica (Osmoscopia). Alternativa B."
  },
  {
    id: "nat_qui_q31",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Química",
    topic: "Química Geral (Geometria Molecular)",
    difficulty: "Fácil",
    enunciation: "De acordo com a Teoria da Repulsão dos Pares Eletrônicos da Camada de Valência (VSEPR), a molécula de gás carbônico (CO₂) e a molécula de metano (CH₄) possuem, respectivamente, geometrias moleculares:",
    options: [
      "Linear e tetraédrica.",
      "Angular e piramidal.",
      "Linear e trigonal plana.",
      "Angular e tetraédrica.",
      "Trigonal plana e octaédrica."
    ],
    correct: 0,
    explanation: "Na molécula O=C=O, o átomo central de carbono faz duas ligações duplas e não possui elétrons livres na valência, assumindo geometria LINEAR (ângulo de 180°).\nNa molécula CH₄, o carbono faz 4 ligações simples dispostas no espaço 3D para minimizar a repulsão, assumindo geometria TETRAÉDRICA (ângulo de 109°28'). Alternativa A."
  },
  {
    id: "nat_qui_q32",
    vestibular: "ENEM",
    year: 2024,
    subject: "Química",
    topic: "Termoquímica (Combustíveis e Poder Calorífico)",
    difficulty: "Médio",
    enunciation: "O hidrogênio verde (H₂) é apontado como o combustível promissor da transição energética porque sua reação de combustão com oxigênio (2 H₂ + O₂ -> 2 H₂O) apresenta alta liberação de energia por grama e tem como subproduto exclusivo a:",
    options: [
      "Cinzas sólidas de carbono.",
      "Dióxido de carbono (CO₂).",
      "Vapor de água pura (H₂O), sem emissão de gases do efeito estufa.",
      "Ozônio troposférico.",
      "Monóxido de carbono tóxico."
    ],
    correct: 2,
    explanation: "A combustão do gás hidrogênio reage estequiometricamente apenas com oxigênio liberando vapor de água (H₂O), eliminando totalmente as emissões diretas de carbono (CO₂ e CO) e de fuligem particulada. Alternativa C."
  },
  {
    id: "nat_qui_q33",
    vestibular: "UNESP",
    year: 2024,
    subject: "Química",
    topic: "Ácidos e Bases (Teorias Modernas)",
    difficulty: "Médio",
    enunciation: "Segundo a teoria protônica de Brønsted-Lowry, um ácido e uma base são definidos, respectivamente, como espécies químicas capazes de:",
    options: [
      "Liberar íons OH⁻ em água e receber íons H⁺.",
      "Doar prótons (íons H⁺) e receber prótons (íons H⁺).",
      "Doar pares de elétrons e receber pares de elétrons.",
      "Conduzir eletricidade e formar precipitados neutros.",
      "Sofrer exclusivamente hidrólise salina."
    ],
    correct: 1,
    explanation: "Na teoria de Brønsted-Lowry:\n- Ácido é toda espécie doadora de prótons (H⁺).\n- Base é toda espécie receptora de prótons (H⁺).\n(A definição por doação/recepção de pares eletrônicos pertence a Gilbert Lewis). Alternativa B."
  },
  {
    id: "nat_qui_q34",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Química",
    topic: "Química Geral (Balanceamento Redox)",
    difficulty: "Médio",
    enunciation: "Na reação de oxirredução representada pela equação Zn(s) + 2 HCl(aq) -> ZnCl₂(aq) + H₂(g), o número de oxidação (Nox) do zinco varia de:",
    options: [
      "0 para +2 (o zinco se oxida).",
      "+2 para 0 (o zinco se reduz).",
      "+1 para +2.",
      "-1 para +1.",
      "O Nox do zinco não se altera."
    ],
    correct: 0,
    explanation: "Como substância simples metálica, o zinco inicial tem Nox = 0.\nNo cloreto de zinco (ZnCl₂), o cloreto tem Nox = -1, portanto o zinco tem Nox = +2.\nComo seu Nox aumentou de 0 para +2, o zinco perdeu elétrons, sofrendo OXIDAÇÃO e atuando como o agente redutor da reação. Alternativa A."
  },
  {
    id: "nat_qui_q35",
    vestibular: "ENEM",
    year: 2024,
    subject: "Química",
    topic: "Química Orgânica (Biodiesel)",
    difficulty: "Médio",
    enunciation: "O biodiesel é um combustível biodegradável obtido a partir de óleos vegetais (como soja, dendê e girassol) ou gorduras animais por meio da reação com um álcool de cadeia curta (metanol ou etanol) na presença de um catalisador básico. Essa reação química é denominada:",
    options: [
      "Craqueamento catalítico.",
      "Transesterificação.",
      "Fermentação alcoólica.",
      "Polimerização por condensação.",
      "Hidrogenação catalítica."
    ],
    correct: 1,
    explanation: "A síntese industrial do biodiesel ocorre pela reação de TRANSESTERIFICAÇÃO, na qual os triglicerídeos (triésteres de glicerol) presentes nos óleos reagem com metanol ou etanol para formar uma mistura de ésteres metílicos ou etílicos de ácidos graxos (o biodiesel propriamente dito) e glicerol como coproduto valioso. Alternativa B."
  },
  // ==========================================
  // BLOCO 3: BIOLOGIA (35 QUESTÕES)
  // ==========================================
  {
    id: "nat_bio_q1",
    vestibular: "ENEM",
    year: 2024,
    subject: "Biologia",
    topic: "Ecologia (Pirâmides Ecológicas de Energia)",
    difficulty: "Fácil",
    diagramSvg: `<svg viewBox="0 0 300 180" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Pirâmide de Energia -->
      <!-- Produtores base -->
      <polygon points="30,150 270,150 240,110 60,110" fill="#86efac" stroke="#16a34a" stroke-width="2"/>
      <text x="150" y="135" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Produtores: 10 000 kcal/m²/ano</text>
      <!-- Consumidores primários -->
      <polygon points="60,110 240,110 205,70 95,70" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
      <text x="150" y="95" font-size="10" font-weight="bold" fill="#a16207" text-anchor="middle">Consumidores 1º: 1 000 kcal</text>
      <!-- Consumidores secundários -->
      <polygon points="95,70 205,70 170,30 130,30" fill="#fdba74" stroke="#ea580c" stroke-width="2"/>
      <text x="150" y="55" font-size="10" font-weight="bold" fill="#c2410c" text-anchor="middle">Cons. 2º: 100 kcal</text>
    </svg>`,
    imageCaption: "Pirâmide ecológica representando o fluxo unidirecional decrescente de energia.",
    enunciation: "Ao contrário das pirâmides de biomassa e de números, que podem apresentar conformações invertidas em determinados ecossistemas, as pirâmides ecológicas de ENERGIA NUNCA podem ser invertidas. Esse fato biológico fundamental decorre diretamente do fato de que:",
    options: [
      "A energia solar é absorvida igualmente por todos os níveis tróficos.",
      "Apenas os decompositores conseguem reciclar a energia térmica.",
      "O fluxo de energia é unidirecional e decrescente ao longo da cadeia trófica, pois parte significativa da energia é dissipada em cada nível sob a forma de calor metabólico.",
      "A energia se acumula nos níveis tróficos superiores por biomagnificação.",
      "Os produtores fotossintetizantes produzem menos biomassa do que os herbívoros."
    ],
    correct: 2,
    explanation: "Em obediência à 2ª Lei da Termodinâmica, as transformações energéticas nos seres vivos geram perdas inevitáveis de energia na forma de calor metabólico (respiração celular, manutenção da homeostase e excreção). Apenas cerca de 10% da energia útil é transferida ao nível trófico seguinte, tornando a pirâmide de energia SEMPRE ereta e com base mais larga. Alternativa C."
  },
  {
    id: "nat_bio_q2",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Biologia",
    topic: "Genética (Heredograma Familiar)",
    difficulty: "Médio",
    diagramSvg: `<svg viewBox="0 0 300 180" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Geração I: Casal 1 e 2 normais -->
      <rect x="50" y="25" width="24" height="24" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
      <line x1="74" y1="37" x2="116" y2="37" stroke="#1e293b" stroke-width="2"/>
      <circle cx="128" cy="37" r="12" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
      <text x="45" y="37" font-size="11" font-weight="bold" fill="#64748b">I-1</text>
      <text x="145" y="37" font-size="11" font-weight="bold" fill="#64748b">I-2</text>
      <!-- Linha descendente -->
      <line x1="95" y1="37" x2="95" y2="75" stroke="#1e293b" stroke-width="2"/>
      <line x1="50" y1="75" x2="220" y2="75" stroke="#1e293b" stroke-width="2"/>
      <!-- Filhos geração II -->
      <!-- II-1: homem normal -->
      <line x1="50" y1="75" x2="50" y2="105" stroke="#1e293b" stroke-width="2"/>
      <rect x="38" y="105" width="24" height="24" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
      <text x="42" y="145" font-size="10" fill="#64748b">II-1</text>
      <!-- II-2: mulher AFETADA (preenchida) -->
      <line x1="135" y1="75" x2="135" y2="105" stroke="#1e293b" stroke-width="2"/>
      <circle cx="135" cy="117" r="12" fill="#e11d48" stroke="#9f1239" stroke-width="2"/>
      <text x="127" y="145" font-size="10" font-weight="bold" fill="#e11d48">II-2 (Afetada)</text>
      <!-- II-3: homem normal -->
      <line x1="220" y1="75" x2="220" y2="105" stroke="#1e293b" stroke-width="2"/>
      <rect x="208" y="105" width="24" height="24" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
      <text x="212" y="145" font-size="10" fill="#64748b">II-3</text>
    </svg>`,
    imageCaption: "Heredograma: pais não afetados gerando uma filha afetada por anomalia genética.",
    enunciation: "No heredograma apresentado, os indivíduos I-1 e I-2 são fenotipicamente normais para uma anomalia genética rara, porém geraram uma filha afetada (II-2). Com base exclusivamente nessa genealogia, o padrão de herança dessa condição genética é:",
    options: [
      "Autossômico dominante.",
      "Autossômico recessivo.",
      "Ligado ao cromossomo Y (holândrico).",
      "Dominante ligado ao cromossomo X.",
      "Herança puramente mitocondrial."
    ],
    correct: 1,
    explanation: "Dois fatos comprovam o padrão autossômico recessivo:\n1. Pais normais gerando descendente afetado indica que o alelo causador da condição é RECESSIVO (os pais são obrigatoriamente heterozigotos portadores, genótipo Aa).\n2. O indivíduo afetado é do sexo feminino (II-2). Se fosse recessivo ligado ao cromossomo X (X^a X^a), seu pai (I-1) teria necessariamente o cromossomo X^a e seria obrigatoriamente afetado, o que não ocorre. Logo, a herança é AUTOSSÔMICA RECESSIVA. Alternativa B."
  },
  {
    id: "nat_bio_q3",
    vestibular: "ENEM",
    year: 2024,
    subject: "Biologia",
    topic: "Imunologia (Vacinas vs Soros)",
    difficulty: "Fácil",
    enunciation: "Ao ser picada por uma serpente peçonhenta da espécie jararaca, uma pessoa deve ser conduzida imediatamente a um hospital para receber o soro antiofídico específico, e não uma vacina. Essa conduta médica emergencial é correta porque o soro:",
    options: [
      "Estimula o organismo da vítima a produzir anticorpos duradouros contra o veneno.",
      "Já contém anticorpos pré-formados prontos para neutralizar o veneno de forma rápida (imunização passiva).",
      "Contém toxinas atenuadas que geram memória imunológica celular.",
      "Age como analgésico inibindo a coagulação sanguínea.",
      "Promove imunização ativa permanente contra qualquer espécie de serpente."
    ],
    correct: 1,
    explanation: "Diferença fundamental:\n- VACINA: Contém antígenos inativados ou atenuados; induz o organismo a produzir seus próprios anticorpos e células de memória (imunização ATIVA, profilática e de ação lenta/duradoura).\n- SORO: Contém anticorpos prontos já produzidos por outro organismo (como cavalos); neutraliza imediatamente o antígeno circulante (imunização PASSIVA, terapêutica e de ação rápida, mas sem gerar memória imunológica). Alternativa B."
  },
  {
    id: "nat_bio_q4",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Biologia",
    topic: "Citologia (Bioenergética Celular)",
    difficulty: "Médio",
    enunciation: "Durante a respiração celular aeróbica completa de uma molécula de glicose, a maior produção líquida de moléculas de ATP ocorre na etapa denominada:",
    options: [
      "Glicólise no citosol.",
      "Ciclo de Krebs (Ciclo do Ácido Cítrico) na matriz mitocondrial.",
      "Fosforilação oxidativa (cadeia transportadora de elétrons) nas cristas mitocondriais.",
      "Fermentação lática nas fibras musculares.",
      "Fotofosforilação acíclica nos tilacoides."
    ],
    correct: 2,
    explanation: "A fosforilação oxidativa, que ocorre ao longo da cadeia respiratória localizada nas cristas mitocondriais, utiliza os elétrons de alta energia transportados pelo NADH e FADH₂ gerados nas etapas anteriores. O fluxo de prótons através da enzima ATP-sintase sintetiza cerca de 26 a 28 das aproximadamente 30 a 32 moléculas de ATP totais por glicose. Alternativa C."
  },
  {
    id: "nat_bio_q5",
    vestibular: "ENEM",
    year: 2023,
    subject: "Biologia",
    topic: "Ecologia (Magnificação Trófica e Bioacumulação)",
    difficulty: "Médio",
    enunciation: "Em um ecossistema aquático contaminado por resíduos industriais de mercúrio (um metal pesado lipossolúvel e não biodegradável), a concentração dessa substância tóxica por quilograma de tecido corporal será MAIOR em qual dos seguintes organismos da cadeia alimentar?",
    options: [
      "Fitoplâncton microscópico (produtores).",
      "Zooplâncton (consumidores primários).",
      "Pequenos peixes herbívoros.",
      "Peixes carnívoros médios.",
      "Aves piscívoras e peixes predadores de topo de cadeia."
    ],
    correct: 4,
    explanation: "Substâncias não biodegradáveis e lipossolúveis (como mercúrio, chumbo e pesticidas organoclorados) não são metabolizadas nem excretadas facilmente pelos organismos. Ao longo da cadeia trófica, a cada nível de consumo a concentração da toxina acumula-se e amplifica-se progressivamente em um processo denominado BIOMAGNIFICAÇÃO TRÓFICA, atingindo seu teor mais elevado nos predadores de topo. Alternativa E."
  },
  {
    id: "nat_bio_q6",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Biologia",
    topic: "Divisão Celular (Mitose e Meiose)",
    difficulty: "Médio",
    enunciation: "O fenômeno do crossing-over (permutação gênica ou recombinação cromossômica), que amplia consideravelmente a variabilidade genética dos organismos de reprodução sexuada, ocorre especificamente durante a:",
    options: [
      "Metáfase da mitose.",
      "Prófase I da meiose.",
      "Anáfase I da meiose.",
      "Telófase II da meiose.",
      "Interfase no período G1."
    ],
    correct: 1,
    explanation: "O crossing-over ocorre durante a Prófase I da Meiose (mais especificamente no paquíteno), quando os cromossomos homólogos pareados (bivalentes ou tétrades) trocam segmentos de cromátides não irmãs nos pontos de quiasma, gerando novas combinações de alelos. Alternativa B."
  },
  {
    id: "nat_bio_q7",
    vestibular: "ENEM",
    year: 2024,
    subject: "Biologia",
    topic: "Evolução (Darwinismo e Seleção Natural)",
    difficulty: "Fácil",
    enunciation: "O uso indiscriminado e frequente de antibióticos por parte da população tem provocado a proliferação acelerada de 'superbactérias' resistentes a múltiplos fármacos em ambientes hospitalares. De acordo com a teoria moderna da evolução (Neodarwinismo), o antibiótico atua:",
    options: [
      "Induzindo diretamente as bactérias a sofrerem mutações adaptativas para sobreviverem.",
      "Como agente seletivo, eliminando as bactérias sensíveis e preservando as bactérias previamente resistentes, que passam a se reproduzir com maior sucesso.",
      "Fortalecendo as defesas imunológicas do hospedeiro humano.",
      "Alterando a parede celular das bactérias para torná-las esporos inertes.",
      "Provocando a desnaturação gênica do DNA plasmidial."
    ],
    correct: 1,
    explanation: "Pela teoria da seleção natural de Darwin, o antibiótico NÃO cria a resistência e NÃO direciona mutações benéficas (visão lamarckista incorreta). As mutações que conferem resistência surgem ao acaso; a aplicação do medicamento atua como pressão seletiva, eliminando as suscetíveis e selecionando as variantes pré-existentes resistentes. Alternativa B."
  },
  {
    id: "nat_bio_q8",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Biologia",
    topic: "Biologia Molecular (Transcrição e Código Genético)",
    difficulty: "Médio",
    enunciation: "Se um segmento da fita molde de DNA apresenta a sequência de bases nitrogenadas 3'-TAC GGC TTA CTG-5', a sequência de códons do RNA mensageiro (RNAm) transcrito a partir dessa fita será:",
    options: [
      "5'-ATG CCG AAT GAC-3'",
      "5'-AUG CCG AAU GAC-3'",
      "5'-UAC GGC UUA CUG-3'",
      "5'-AUG CCG UUA GAC-3'",
      "5'-TAC GGC TTA CTG-3'"
    ],
    correct: 1,
    explanation: "Na transcrição do DNA para RNAm, as bases emparelham-se de forma complementar e antiparalela (orientação 5' -> 3'), com a base Uracila (U) substituindo a Timina (T):\n- T (DNA) emparelha com A (RNA)\n- A (DNA) emparelha com U (RNA)\n- C (DNA) emparelha com G (RNA)\n- G (DNA) emparelha com C (RNA)\nPara 3'-TAC GGC TTA CTG-5':\nO RNAm formado é 5'-AUG CCG AAU GAC-3'. Alternativa B."
  },
  {
    id: "nat_bio_q9",
    vestibular: "ENEM",
    year: 2023,
    subject: "Biologia",
    topic: "Fisiologia Humana (Sistema Endócrino: Insulina e Glucagon)",
    difficulty: "Fácil",
    enunciation: "O pâncreas produz dois hormônios peptídicos fundamentais de ações antagônicas no controle da glicemia sanguínea: a insulina e o glucagon. Imediatamente após uma refeição rica em carboidratos, qual hormônio é secretado em maior quantidade pelas células beta pancreáticas e qual é a sua ação fisiológica no fígado e nos tecidos?",
    options: [
      "Glucagon; estimula a quebra do glicogênio (glicogenólise) e eleva a taxa de glicose no sangue.",
      "Insulina; facilita a captação celular de glicose e estimula a síntese de glicogênio hepático (glicogênese), reduzindo a glicemia.",
      "Adrenalina; provoca vasodilatação periférica.",
      "Tiroxina; acelera o metabolismo basal dos lipídios.",
      "Glucagon; inibe a produção de bile pelos hepatócitos."
    ],
    correct: 1,
    explanation: "Após a alimentação (hiperglicemia pós-prandial), as células beta das ilhotas de Langerhans secretam INSULINA. A insulina atua nos receptores de membrana, promovendo a translocação de transportadores GLUT-4 para captar glicose nas células musculares e adiposas, e estimula no fígado o armazenamento de glicose sob forma de glicogênio (glicogênese), normalizando a glicemia. Alternativa B."
  },
  {
    id: "nat_bio_q10",
    vestibular: "UNESP",
    year: 2024,
    subject: "Biologia",
    topic: "Ecologia (Ciclo do Nitrogênio)",
    difficulty: "Médio",
    enunciation: "No ciclo biogeoquímico do nitrogênio, a conversão biológica de íons amônio (NH₄⁺) em íons nitrito (NO₂⁻) e, posteriormente, destes em íons nitrato (NO₃⁻) facilmente assimiláveis pelas raízes das plantas é realizada por bactérias quimiossintetizantes do solo e denomina-se:",
    options: [
      "Fixação biológica de nitrogênio.",
      "Desnitrificação anaeróbica.",
      "Nitrificação (subdividida em nitrosação e nitratação).",
      "Amonificação de matéria orgânica.",
      "Transaminação proteica."
    ],
    correct: 2,
    explanation: "A nitrificação é a oxidação biológica da amônia/amônio em duas etapas realizadas por bactérias quimiossintetizantes do solo:\n1. Nitrosação: NH₄⁺ -> NO₂⁻ (bactérias do gênero Nitrosomonas)\n2. Nitratação: NO₂⁻ -> NO₃⁻ (bactérias do gênero Nitrobacter)\nOs nitratos gerados constituem a principal fonte mineral de nitrogênio absorvida pelos vegetais para síntese de aminoácidos e nucleotídeos. Alternativa C."
  },
  {
    id: "nat_bio_q11",
    vestibular: "ENEM",
    year: 2024,
    subject: "Biologia",
    topic: "Botânica (Condução de Seiva)",
    difficulty: "Fácil",
    enunciation: "Em plantas vasculares traqueófitas, o tecido vegetal responsável pelo transporte da seiva bruta (água e sais minerais absorvidos do solo até as folhas) e o tecido encarregado da translocação da seiva elaborada (compostos orgânicos fotosintetizados das folhas para o restante da planta) são, respectivamente:",
    options: [
      "Floema e xilema.",
      "Xilema (vasos lenhosos) e floema (vasos liberianos).",
      "Parênquima clorofiliano e colênquima.",
      "Epiderme com cutícula e esclerênquima.",
      "Câmbio e súber."
    ],
    correct: 1,
    explanation: "O XILEMA (lenho) é formado por células mortas com paredes impregnadas de lignina e transporta a seiva bruta em sentido ascendente (raiz -> folhas) impulsionado pela transpiração foliar (Teoria da Tensão-Coesão de Dixon).\nO FLOEMA (líber) é formado por células vivas e conduz a seiva orgânica elaborada em fluxo bidirecional de fontes para drenos de acordo com a hipótese do fluxo por pressão de Münch. Alternativa B."
  },
  {
    id: "nat_bio_q12",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Biologia",
    topic: "Genética (Grupos Sanguíneos ABO e Fator Rh)",
    difficulty: "Médio",
    enunciation: "Um homem com sangue do tipo O e fator Rh negativo (O⁻) casa-se com uma mulher heterozigota com sangue do tipo AB e fator Rh positivo (AB⁺, com genótipo Rr). A probabilidade de esse casal gerar uma criança do tipo A e Rh positivo (A⁺) é de:",
    options: [
      "1 / 8 (12,5%)",
      "1 / 4 (25%)",
      "1 / 2 (50%)",
      "3 / 8 (37,5%)",
      "Zero"
    ],
    correct: 1,
    explanation: "Análise separada dos dois sistemas genéticos:\n1. Sistema ABO: Pai é ii (tipo O) e mãe é I^A I^B (tipo AB).\nCruzamento: ii × I^A I^B => 50% de chance de I^A i (tipo A) e 50% de chance de I^B i (tipo B).\nProbabilidade de ser tipo A = 1/2.\n2. Sistema Rh: Pai é rr (Rh⁻) e mãe é Rr (Rh⁺).\nCruzamento: rr × Rr => 50% de chance de Rr (Rh⁺) e 50% de chance de rr (Rh⁻).\nProbabilidade de ser Rh⁺ = 1/2.\nProbabilidade combinada de A e Rh⁺ = (1/2) × (1/2) = 1/4 (25%). Alternativa B."
  },
  {
    id: "nat_bio_q13",
    vestibular: "ENEM",
    year: 2024,
    subject: "Biologia",
    topic: "Ecologia (Eutrofização Artificial)",
    difficulty: "Médio",
    enunciation: "O despejo excessivo de esgoto doméstico não tratado e fertilizantes agrícolas ricos em nitrogênio e fósforo em uma lagoa provoca uma sequência de eventos ecológicos conhecida como eutrofização. A sequência cronológica correta dos acontecimentos desse processo é:",
    options: [
      "Morte de peixes -> proliferação de algas -> aumento de O₂ dissolvido.",
      "Proliferação intensa de algas na superfície (floração) -> bloqueio da luz solar -> morte de vegetais submersos -> proliferação de bactérias decompositoras aeróbicas -> queda brusca de oxigênio dissolvido -> morte em massa de peixes.",
      "Redução de nutrientes -> invasão de moluscos -> turbidez da água.",
      "Aumento imediato de oxigênio -> acidificação total da lagoa -> proliferação de corais.",
      "Seca da lagoa -> acúmulo de areia no fundo."
    ],
    correct: 1,
    explanation: "A eutrofização segue etapas bem definidas: 1) Enriquecimento de nutrientes (N e P); 2) Floração exuberante de algas e cianobactérias na superfície; 3) Bloqueio da passagem de luz solar às camadas profundas; 4) Morte dos vegetais submersos por falta de fotossíntese; 5) Decomposição aeróbica acelerada consumindo todo o oxigênio da água; 6) Anóxia (asfixia) e morte em massa de peixes e outros organismos aeróbicos. Alternativa B."
  },
  {
    id: "nat_bio_q14",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Biologia",
    topic: "Fisiologia Humana (Sistema Circulatório e Coração)",
    difficulty: "Fácil",
    enunciation: "No coração dos mamíferos, que possui quatro cavidades perfeitamente separadas (dois átrios e dois ventrículos, com circulação dupla e completa), o sangue venoso (rico em CO₂) chega ao coração através das veias cavas e entra primeiramente no:",
    options: [
      "Átrio direito.",
      "Ventrículo direito.",
      "Átrio esquerdo.",
      "Ventrículo esquerdo.",
      "Tronco da artéria aorta."
    ],
    correct: 0,
    explanation: "O sangue venoso desoxigenado que retorna de todo o corpo pelas veias cavas superior e inferior desemboca diretamente no ÁTRIO DIREITO. De lá, passa para o ventrículo direito, que o bombeia através da artéria pulmonar para os pulmões (pequena circulação), onde ocorre a hematose. Alternativa A."
  },
  {
    id: "nat_bio_q15",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Biologia",
    topic: "Evolução (Órgãos Homólogos e Análogos)",
    difficulty: "Médio",
    enunciation: "A asa de um morcego (mamífero) e a asa de uma ave possuem a mesma origem embrionária e ossatura básica similar (úmero, rádio e ulna), caracterizando uma divergência evolutiva. Em contrapartida, a asa de um morcego e a asa de uma borboleta (inseto) desempenham a mesma função (voo), mas possuem origens embrionárias completamente distintas. As asas de morcego e borboleta são denominadas:",
    options: [
      "Órgãos homólogos resultantes de irradiação adaptativa.",
      "Órgãos análogos resultantes de convergência evolutiva (evolução convergente).",
      "Estruturas vestigiais sem valor seletivo.",
      "Órgãos atávicos.",
      "Estruturas ortólogas decorrentes de deriva genética."
    ],
    correct: 1,
    explanation: "Estruturas que desempenham funções biológicas semelhantes por adaptação às mesmas pressões ecológicas ambientais, mas que NÃO compartilham a mesma origem ontogenética e filogenética, são chamadas de ÓRGÃOS ANÁLOGOS. Esse processo evolutivo é chamado de CONVERGÊNCIA ADAPTATIVA. Alternativa B."
  },
  {
    id: "nat_bio_q16",
    vestibular: "ENEM",
    year: 2024,
    subject: "Biologia",
    topic: "Citologia (Organelas e Transporte Celular)",
    difficulty: "Fácil",
    enunciation: "A organela celular responsável pela modificação pós-traducional, empacotamento em vesículas e secreção de proteínas destinadas ao meio extracelular ou à membrana plasmática é o:",
    options: [
      "Retículo endoplasmático liso.",
      "Complexo Golgiense (Aparelho de Golgi).",
      "Peroxissomo.",
      "Centríolo.",
      "Lisossomo primário."
    ],
    correct: 1,
    explanation: "O Complexo de Golgi recebe proteínas sintetizadas no retículo endoplasmático rugoso, realiza glicosilação e outras modificações químicas, seleciona, empacota e despacha as moléculas em vesículas secretoras para exportação por exocitose ou para formar os lisossomos. Alternativa B."
  },
  {
    id: "nat_bio_q17",
    vestibular: "UNESP",
    year: 2023,
    subject: "Biologia",
    topic: "Ecologia (Relações Ecológicas Interespecíficas)",
    difficulty: "Fácil",
    enunciation: "A associação mútua obrigatória entre fungos e algas microscópicas (ou cianobactérias) que origina os liquens, na qual ambos os parceiros se beneficiam e não sobrevivem isolados no mesmo ambiente hostil, é um exemplo clássico de:",
    options: [
      "Inquilinismo.",
      "Comensalismo.",
      "Mutualismo obrigatório (simbiose).",
      "Parasitismo.",
      "Protocooperação facultativa."
    ],
    correct: 2,
    explanation: "O mutualismo obrigatório é uma relação ecológica harmônica interespecífica (+/+) em que ambas as espécies obtêm vantagens essenciais à sua sobrevivência (o fungo retém água e sais e fornece abrigo, enquanto a alga realiza fotossíntese fornecendo compostos orgânicos), havendo dependência metabólica mútua. Alternativa C."
  },
  {
    id: "nat_bio_q18",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Biologia",
    topic: "Fisiologia Humana (Sistema Excretor e Hormônio ADH)",
    difficulty: "Médio",
    enunciation: "Em dias muito quentes ou durante a prática de exercícios físicos intensos com grande perda de água pelo suor, os osmorreceptores hipotalâmicos detectam o aumento da osmolaridade plasmática e estimulam a neuro-hipófise a liberar no sangue o hormônio antidiurético (ADH ou vasopressina). No rim, o ADH atua nos túbulos coletores promovendo:",
    options: [
      "Inibição da reabsorção de água, produzindo grande volume de urina muito diluída.",
      "Aumento da permeabilidade à água por inserção de aquaporinas, aumentando a reabsorção de água e produzindo menor volume de urina mais concentrada.",
      "Excreção ativa de glicose e proteínas.",
      "Bloqueio da filtração glomerular.",
      "Aumento imediato da pressão nos ureteres."
    ],
    correct: 1,
    explanation: "O ADH atua nas células dos ductos coletores do néfron aumentando a quantidade de canais aquaporinas na membrana. Isso permite maior passagem de água de volta para a circulação sanguínea, conservando a água corporal e eliminando uma urina escassa e hiperosmótica. Alternativa B."
  },
  {
    id: "nat_bio_q19",
    vestibular: "ENEM",
    year: 2024,
    subject: "Biologia",
    topic: "Parasitologia e Doenças Tropicais (Esquistossomose)",
    difficulty: "Médio",
    enunciation: "A esquistossomose mansônica (popularmente conhecida como 'barriga-d'água') é uma verminose endêmica no Brasil causada pelo platelminto Schistosoma mansoni. Para que o ciclo biológico do parasita se complete, as fezes contendo ovos com miracídios devem atingir coleções de água doce habitadas por seu hospedeiro intermediário indispensável, que é um:",
    options: [
      "Mosquito do gênero Culex.",
      "Caramujo aquático do gênero Biomphalaria.",
      "Carrapato estrela do gênero Amblyomma.",
      "Peixe carnívoro de água doce.",
      "Crustáceo copépode microscópico."
    ],
    correct: 1,
    explanation: "Na esquistossomose, o miracídio nada até penetrar no caramujo de água doce do gênero Biomphalaria (hospedeiro intermediário), onde se multiplica assexuadamente originando milhares de cercárias flageladas livres que penetram ativamente pela pele de banhistas (hospedeiro definitivo humano). Alternativa B."
  },
  {
    id: "nat_bio_q20",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Biologia",
    topic: "Genética (Herança Ligada ao Sexo: Daltonismo)",
    difficulty: "Médio",
    enunciation: "O daltonismo clássico é uma anomalia visual recessiva ligada ao cromossomo X (alelo X^d). Uma mulher de visão normal, filha de um pai daltônico, casa-se com um homem de visão normal (X^D Y). Qual é a probabilidade de esse casal ter um menino daltônico?",
    options: [
      "Zero",
      "1 / 8 (12,5%)",
      "1 / 4 (25%)",
      "1 / 2 (50%)",
      "3 / 4 (75%)"
    ],
    correct: 2,
    explanation: "Como a mulher tem visão normal mas seu pai era daltônico (X^d Y), ela herdou obrigatoriamente o cromossomo X^d de seu pai, sendo portadora heterozigota (X^D X^d).\nO marido é normal: X^D Y.\nCruzamento: X^D X^d × X^D Y\n- Filhos possíveis:\n  - X^D X^D (menina normal): 1/4\n  - X^D X^d (menina normal portadora): 1/4\n  - X^D Y (menino de visão normal): 1/4\n  - X^d Y (menino daltônico): 1/4 (25%).\nPortanto, a chance de nascer uma criança que seja um menino daltônico é de 1/4 (25%). Alternativa C."
  },
  {
    id: "nat_bio_q21",
    vestibular: "ENEM",
    year: 2023,
    subject: "Biologia",
    topic: "Biologia Vegetal (Fotossíntese)",
    difficulty: "Médio",
    enunciation: "O gás oxigênio (O₂) liberado na atmosfera durante a fotossíntese realizada por plantas terrestres e algas marinhas provém diretamente da:",
    options: [
      "Fixação e quebra do gás carbônico (CO₂) no ciclo de Calvin.",
      "Fotólise da água (quebra da molécula de H₂O por ação da luz) ocorrida na fase clara (fotoquímica).",
      "Glicólise mitocondrial.",
      "Degradação de amido nas raízes tuberosas.",
      "Oxidação de açúcares no cloroplasto."
    ],
    correct: 1,
    explanation: "Experimentos históricos demonstraram com isótopos de oxigênio (¹⁸O) que todo o oxigênio gasoso (O₂) libertado na fotossíntese é originado pela FOTÓLISE DA ÁGUA (Reação de Hill, H₂O -> 2H⁺ + 2e⁻ + 1/2 O₂) na etapa fotoquímica nos tilacoides, e não da molécula de CO₂. Alternativa B."
  },
  {
    id: "nat_bio_q22",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Biologia",
    topic: "Zoologia (Anexos Embrionários e Conquista da Terra)",
    difficulty: "Médio",
    enunciation: "A independência definitiva da água para a reprodução e desenvolvimento embrionário dos vertebrados terrestres foi conquistada evolutivamente pelos répteis com o surgimento do ovo amniótico com casca calcária porosa. O anexo embrionário que forma uma bolsa repleta de líquido responsável por proteger o embrião contra o dessecamento e contra choques mecânicos é o:",
    options: [
      "Saco vitelínico.",
      "Alantoide.",
      "Âmnio (bolsa amniótica).",
      "Cório.",
      "Placenta."
    ],
    correct: 2,
    explanation: "O ÂMNIO é a membrana que envolve a cavidade amniótica contendo o líquido amniótico. Esse líquido amortece impactos mecânicos e provê um ambiente aquático artificial essencial para o desenvolvimento de répteis, aves e mamíferos fora da água, livrando-os da dependência do meio aquático para reprodução. Alternativa C."
  },
  {
    id: "nat_bio_q23",
    vestibular: "ENEM",
    year: 2024,
    subject: "Biologia",
    topic: "Microbiologia e Saúde (Vírus e Retrovírus)",
    difficulty: "Fácil",
    enunciation: "O vírus da imunodeficiência humana (HIV), agente etiológico da AIDS, é classificado como um retrovírus. Uma característica molecular exclusiva desse grupo de vírus é possuir genoma de RNA e a enzima:",
    options: [
      "DNA polimerase mitocondrial.",
      "Transcriptase reversa, que sintetiza uma molécula de DNA a partir do molde de RNA viral.",
      "RNA helicase bacteriana.",
      "Lipase gástrica.",
      "Ribozima de restrição."
    ],
    correct: 1,
    explanation: "Os retrovírus carregam a enzima TRANSCRIPTASE REVERSA, capaz de realizar a transcrição ao contrário do fluxo usual da informação genética: ela sintetiza uma molécula de DNA complementar (cDNA) a partir do RNA genômico viral, permitindo que esse DNA seja integrado ao cromossomo da célula hospedeira pela integrase. Alternativa B."
  },
  {
    id: "nat_bio_q24",
    vestibular: "UNESP",
    year: 2024,
    subject: "Biologia",
    topic: "Fisiologia Humana (Sistema Nervoso e Sinapses)",
    difficulty: "Médio",
    enunciation: "A transmissão do impulso nervoso entre dois neurônios adjacentes ocorre em uma região especializada denominada fenda sináptica. Nesse local, a propagação do sinal, que ao longo do axônio é puramente elétrica (potencial de ação por fluxo de íons Na⁺ e K⁺), converte-se em um mecanismo químico mediado por:",
    options: [
      "Hormônios esteroides lipossolúveis.",
      "Neurotransmissores (como acetilcolina, dopamina e serotonina) liberados por exocitose da terminação pré-sináptica.",
      "Proteínas estruturais de actina e miosina.",
      "Hemoglobina ligada a oxigênio.",
      "Glicose livre no espaço intersticial."
    ],
    correct: 1,
    explanation: "Nas sinapses químicas, a chegada do potencial de ação promove a entrada de íons cálcio (Ca²⁺) no botão pré-sináptico, disparando a exocitose de vesículas repletas de NEUROTRANSMISSORES na fenda sináptica. Essas substâncias ligam-se a receptores específicos na membrana pós-sináptica, abrindo canais iônicos e deflagrando um novo potencial de ação. Alternativa B."
  },
  {
    id: "nat_bio_q25",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Biologia",
    topic: "Ecologia (Sucessão Ecológica)",
    difficulty: "Médio",
    enunciation: "Ao longo do processo de sucessão ecológica em um ecossistema (da fase pioneira ou ecese até atingir a comunidade clímax estável), observa-se que:",
    options: [
      "A biodiversidade de espécies e a biomassa total diminuem drasticamente.",
      "A biomassa total, a biodiversidade e a complexidade das teias alimentares aumentam, enquanto a razão entre a fotossíntese bruta e a respiração total (P/R) aproxima-se de 1.",
      "As teias tróficas tornam-se cadeias simples lineares.",
      "A taxa de respiração total torna-se zero.",
      "Apenas líquens e musgos conseguem persistir no clímax."
    ],
    correct: 1,
    explanation: "Durante a sucessão ecológica, a biodiversidade, a biomassa e o número de nichos ecológicos aumentam progressivamente. No estágio clímax, o ecossistema atinge o equilíbrio dinâmico (homeostase): toda a matéria orgânica produzida pela fotossíntese bruta é consumida pela respiração celular da própria comunidade (P/R ≈ 1), com produtividade primária líquida (PPL) tendendo a zero. Alternativa B."
  },
  {
    id: "nat_bio_q26",
    vestibular: "ENEM",
    year: 2024,
    subject: "Biologia",
    topic: "Citologia (Membrana Plasmática e Mosaico Fluido)",
    difficulty: "Fácil",
    enunciation: "O modelo do mosaico fluido, proposto por Singer e Nicolson em 1972 para descrever a arquitetura da membrana plasmática, caracteriza-a como uma:",
    options: [
      "Bicamada rígida e impermeável formada exclusivamente por celulose e pectina.",
      "Bicamada lipídica de fosfolipídios com proteínas integrais e periféricas inseridas e capazes de deslocar-se lateralmente.",
      "Monocamada de triglicerídeos com poros de colágeno estáticos.",
      "Parede cristalina de polissacarídeos com ausência de lipídios.",
      "Malha fixa de proteínas ancoradas sem flexibilidade."
    ],
    correct: 1,
    explanation: "A membrana é composta por uma dupla camada de fosfolipídios em arranjo anfipático (cabeças polares voltadas para o meio aquoso intra e extracelular, caudas hidrofóbicas viradas para o interior). Proteínas estão imersas ou associadas a essa matriz fluida, podendo mover-se lateralmente como barcos em um oceano lipídico. Alternativa B."
  },
  {
    id: "nat_bio_q27",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Biologia",
    topic: "Biotecnologia (PCR e Eletroforese em Gel)",
    difficulty: "Médio",
    enunciation: "A técnica da Reação em Cadeia da Polimerase (PCR) revolucionou a biologia forense e o diagnóstico molecular porque permite:",
    options: [
      "Destruir o DNA de bactérias patogênicas por digestão ácida.",
      "Amplificar in vitro milhões de cópias de um fragmento específico de DNA a partir de uma quantidade mínima de amostra biológica.",
      "Inserir genes de plantas em vírus animais sem necessidade de enzimas.",
      "Sequenciar proteínas sem passar por transcrição.",
      "Separar lipídios por centrifugação diferencial."
    ],
    correct: 1,
    explanation: "A PCR (Polymerase Chain Reaction) utiliza ciclos térmicos repetidos de desnaturação (calor), anelamento de primers específicos e extensão pela enzima termorresistente Taq polimerase para multiplicar exponencialmente um fragmento alvo de DNA, gerando bilhões de cópias em poucas horas para análises periciais e diagnósticos clínicos. Alternativa B."
  },
  {
    id: "nat_bio_q28",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Biologia",
    topic: "Botânica (Adaptações de Plantas Xerófitas)",
    difficulty: "Fácil",
    enunciation: "Plantas adaptadas a ecossistemas áridos ou semiáridos com escassez hídrica prolongada (como as cactáceas da Caatinga) apresentam especializações morfológicas e fisiológicas para minimizar a perda de água por transpiração, tais como:",
    options: [
      "Folhas amplas com estômatos permanentemente abertos na face superior.",
      "Folhas modificadas em espinhos, caules verdes suculentos fotossintetizantes (cladódios) e estômatos em criptas que se abrem preferencialmente à noite (metabolismo CAM).",
      "Ausência de cutícula cerosa protetora na epiderme.",
      "Perda de raízes profundas e ausência de parênquima aquífero.",
      "Florescimento diário contínuo sem frutos secos."
    ],
    correct: 1,
    explanation: "As plantas xerófitas reduzem drasticamente a área de perda de vapor d'água convertendo folhas em espinhos, realizam fotossíntese pelo caule caulinar verde suculento que armazena água (parênquima aquífero), possuem cutícula cerosa espessa e utilizam o metabolismo ácido das crassuláceas (CAM), abrindo os estômatos à noite para absorver CO₂ com mínima perda de água. Alternativa B."
  },
  {
    id: "nat_bio_q29",
    vestibular: "ENEM",
    year: 2024,
    subject: "Biologia",
    topic: "Genética (Mutações Gênicas)",
    difficulty: "Médio",
    enunciation: "Na anemia falciforme, uma doença hereditária autossômica codominante, a hemoglobina anômala (HbS) é produzida devido a uma mutação pontual por substituição de uma única base nitrogenada no gene da cadeia beta da globina (troca de adenina por timina, substituindo o aminoácido ácido glutâmico por valina). Essa alteração faz com que as hemácias sob baixa tensão de O₂:",
    options: [
      "Aumentem de tamanho e fiquem esféricas sem perder a flexibilidade.",
      "Deformem-se assumindo o formato de foice ou meia-lua, tornando-se rígidas e propensas a romper-se e a obstruir capilares sanguíneos.",
      "Percam o núcleo celular e transportem três vezes mais oxigênio.",
      "Sejam imunes a infecções virais sem causar anemia.",
      "Produzam anticorpos contra os glóbulos brancos."
    ],
    correct: 1,
    explanation: "A substituição de um único aminoácido hidrofílico (ácido glutâmico) por um aminoácido hidrofóbico (valina) promove a polimerização da hemoglobina HbS desoxigenada em fibras rígidas. Isso distorce os eritrócitos para o aspecto afilado de foice (falcização), gerando vaso-oclusão dolorosa, hipóxia tecidual e hemólise crônica precoce. Alternativa B."
  },
  {
    id: "nat_bio_q30",
    vestibular: "UNESP",
    year: 2024,
    subject: "Biologia",
    topic: "Fisiologia Humana (Digestão Química)",
    difficulty: "Fácil",
    enunciation: "No trato digestório humano, a digestão enzimática das proteínas tem início no estômago sob a ação da enzima pepsina, que atua em meio altamente ácido (pH em torno de 2,0 promovido pelo ácido clorídrico). Ao passar para o duodeno, a continuidade da digestão proteica é realizada por enzimas pancreáticas (como a tripsina) cujo funcionamento ideal requer:",
    options: [
      "A manutenção do pH ácido abaixo de 1,5.",
      "A neutralização e alcalinização do quimo (pH em torno de 8,0) promovidas pelo bicarbonato presente no suco pancreático e na bile.",
      "A ausência de sais biliares na emulsificação.",
      "A inativação de todos os sais minerais solúveis.",
      "A temperatura corporal reduzida para 20 °C."
    ],
    correct: 1,
    explanation: "O quimo ácido que chega do estômago estimula a secreção de suco pancreático rico em íons bicarbonato (HCO₃⁻). O bicarbonato neutraliza o ácido gástrico e eleva o pH duodenal para a faixa ligeiramente alcalina (~8,0), condição química mandatória para a ativação e máxima atividade catalítica das proteases pancreáticas (tripsina e quimiotripsina). Alternativa B."
  },
  {
    id: "nat_bio_q31",
    vestibular: "FUVEST",
    year: 2024,
    subject: "Biologia",
    topic: "Evolução (Especiação Alopátrica)",
    difficulty: "Médio",
    enunciation: "O modelo mais frequente de surgimento de novas espécies biológicas (especiação alopátrica) tem como etapa inicial obrigatória a ocorrência de:",
    options: [
      "Polinização cruzada contínua entre populações vizinhas.",
      "Isolamento geográfico entre subpopulações de uma espécie ancestral, interrompendo o fluxo gênico entre elas.",
      "Extinção imediata de todos os predadores da região.",
      "Mutação direcionada pelo clima equatorial.",
      "Reprodução exclusivamente assexuada por bipartição."
    ],
    correct: 1,
    explanation: "A especiação alopátrica inicia-se quando uma barreira física ou geográfica (como a formação de um rio, cordilheira ou deserto) divide uma população original em duas ou mais isoladas. O fim do fluxo gênico permite que mutações, recombinações e pressões de seleção natural distintas acumulem divergências genéticas até que surja o isolamento reprodutivo permanente. Alternativa B."
  },
  {
    id: "nat_bio_q32",
    vestibular: "ENEM",
    year: 2023,
    subject: "Biologia",
    topic: "Ecologia (Espécies Exóticas Invasoras)",
    difficulty: "Fácil",
    enunciation: "A introdução de espécies exóticas em biomas onde não ocorriam naturalmente (como o mexilhão-dourado nos rios brasileiros ou o javali nas matas) constitui uma das principais ameaças globais à biodiversidade porque essas espécies:",
    options: [
      "Não encontram predadores, parasitas ou competidores naturais específicos, reproduzem-se descontroladamente e competem vantajosamente por recursos contra as espécies nativas.",
      "Sempre sofrem mutações letais extinguindo-se em poucas gerações.",
      "Polinizam exclusivamente espécies ameaçadas restaurando a vegetação nativa.",
      "Filtram toxinas aumentando o oxigênio de rios e lagos.",
      "Alimentam-se exclusivamente de matéria inorgânica inerte."
    ],
    correct: 0,
    explanation: "Livres de seus inimigos naturais (predadores específicos, parasitas e patógenos coevoluídos em seus habitats de origem) e dotadas de alta capacidade adaptativa e reprodutiva, as espécies invasoras proliferam rapidamente, sobrepujando e deslocando as espécies nativas por competição predatória ou exclusão de nicho. Alternativa A."
  },
  {
    id: "nat_bio_q33",
    vestibular: "UNICAMP",
    year: 2024,
    subject: "Biologia",
    topic: "Biologia Celular (Cromossomos e Cariótipo)",
    difficulty: "Fácil",
    enunciation: "A espécie humana é diploide (2n = 46 cromossomos). Os gametas normais (espermatozoides e óvulos) produzidos por indivíduos saudáveis são células haploides contendo exatamente:",
    options: [
      "46 autossomos e nenhum cromossomo sexual.",
      "22 autossomos e 1 cromossomo sexual (X ou Y), totalizando 23 cromossomos.",
      "23 pares de cromossomos homólogos duplicados.",
      "44 autossomos e 2 cromossomos sexuais.",
      "12 cromossomos ao todo."
    ],
    correct: 1,
    explanation: "Durante a meiose gamética, o número de cromossomos é reduzido pela metade: de 46 (23 pares) nas células somáticas para 23 cromossomos nos gametas (n = 23), sendo 22 autossomos e 1 cromossomo sexual (X no óvulo; X ou Y no espermatozoide). Na fecundação, restabelece-se a diploidia (2n = 46). Alternativa B."
  },
  {
    id: "nat_bio_q34",
    vestibular: "FUVEST",
    year: 2023,
    subject: "Biologia",
    topic: "Microbiologia (Bactérias e Conjugação)",
    difficulty: "Médio",
    enunciation: "A transferência direta de material genético (como plasmídeos contendo genes de resistência a antibióticos) de uma bactéria doadora para uma bactéria receptora por meio de uma ponte citoplasmática temporária denominada pili sexual é denominada:",
    options: [
      "Bipartição simples.",
      "Conjugação bacteriana.",
      "Transdução viral mediada por bacteriófagos.",
      "Transformação por DNA livre no meio.",
      "Esporulação bacteriana."
    ],
    correct: 1,
    explanation: "A conjugação é um mecanismo de recombinação genética em procariotos no qual uma bactéria portadora do plasmídeo F (F⁺) estabelece contato físico através de um pili de conjugação com outra bactéria (F⁻) e transfere uma fita do plasmídeo, disseminando genes vantajosos como os de resistência a fármacos. Alternativa B."
  },
  {
    id: "nat_bio_q35",
    vestibular: "ENEM",
    year: 2024,
    subject: "Biologia",
    topic: "Origem da Vida (Hipótese Heterotrófica e Autotrófica)",
    difficulty: "Médio",
    enunciation: "De acordo com a teoria da endossimbiose sequencial proposta por Lynn Margulis, organelas celulares como mitocôndrias e cloroplastos evoluíram a partir de:",
    options: [
      "Invaginações sucessivas da membrana plasmática que acumularam enzimas digestivas.",
      "Bactérias procariontes primitivas de vida livre que foram fagocitadas por células eucariontes ancestrais e estabeleceram uma relação de simbiose mutualística permanente.",
      "Fragmentos isolados de vírus que adquiriram membrana lipídica.",
      "Plasmídeos que escaparam do núcleo celular.",
      "Grânulos de amido que desenvolveram ribossomos próprios."
    ],
    correct: 1,
    explanation: "A Teoria Endossimbiótica sustenta que as mitocôndrias originaram-se de bactérias aeróbicas ancestrais e os cloroplastos de cianobactérias fotossintetizantes ancestrais fagocitadas por eucariotos primitivos. Evidências irrefutáveis incluem: ambas as organelas possuem dupla membrana, DNA circular próprio, ribossomos 70S idênticos aos bacterianos e capacidade de autoduplicação independente do ciclo do núcleo. Alternativa B."
  }
];
