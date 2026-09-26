// js/data.js
const contentData = {
    'unidad1': {
        title: 'Unidad I: Análisis de Circuitos con Amplificadores Operacionales',
        content: `
            <h2>Unidad I: Análisis de Circuitos con Amplificadores Operacionales</h2>
            <p>El amplificador operacional (op-amp) es el bloque funcional más versátil de la electrónica analógica moderna. Su nombre proviene de su capacidad original para realizar operaciones matemáticas (suma, resta, integración, derivación) en computadoras analógicas. Hoy en día, es la piedra angular de la instrumentación biomédica, los sistemas de control y el procesamiento de señales.</p>

            <h3>1.1 El Amplificador Diferencial: El Corazón del Op-Amp</h3>
            <p>La etapa de entrada de prácticamente todos los amplificadores operacionales integrados es un <strong>amplificador diferencial</strong>. Este circuito es la clave para entender por qué un op-amp puede amplificar señales muy débiles mientras rechaza el ruido que afecta a ambas entradas por igual.</p>
            
            <h4>Estructura y Principio de Funcionamiento</h4>
            <p>El amplificador diferencial básico consiste en dos transistores (Q1 y Q2) cuyos emisores están conectados entre sí y a una resistencia común RE, denominada <strong>resistencia de cola</strong>. Las bases son las dos entradas del circuito y los colectores proporcionan las salidas.</p>
            <ul>
                <li><strong>Polarización:</strong> El circuito utiliza una fuente de alimentación negativa (-VEE) para polarizar en directa las uniones base-emisor. La corriente de cola (IT) se establece mediante RE y es aproximadamente igual a VEE/RE.</li>
                <li><strong>Simetría:</strong> En un circuito idealmente simétrico, la corriente de cola se divide en partes iguales entre los dos transistores (IE1 = IE2 = IT/2).</li>
                <li><strong>Amplificación Diferencial:</strong> Cuando se aplica una señal a una entrada y la otra está a tierra, el transistor correspondiente conduce más o menos, desequilibrando las corrientes y produciendo una tensión en el colector.</li>
                <li><strong>Rechazo en Modo Común:</strong> Si se aplica la misma señal a ambas entradas (señal en modo común), ambas corrientes de emisor cambian por igual, manteniendo la corriente de cola constante. En un circuito perfectamente simétrico, no hay cambio en las tensiones de colector.</li>
            </ul>

            <div class="diagram-container">
                <h4>Figura 1.1: Esquema de un Amplificador Diferencial Básico</h4>
                <svg width="500" height="280" viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg">
                    <text x="250" y="20" text-anchor="middle" fill="#64ffda" font-size="14" font-weight="bold">Amplificador Diferencial</text>
                    <!-- Fuente de alimentación superior -->
                    <text x="250" y="50" text-anchor="middle" fill="#ccd6f6" font-size="12">+VCC</text>
                    <!-- Resistencias de colector -->
                    <rect x="130" y="70" width="20" height="40" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="140" y="65" text-anchor="middle" fill="#8892b0" font-size="10">RC1</text>
                    <rect x="350" y="70" width="20" height="40" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="360" y="65" text-anchor="middle" fill="#8892b0" font-size="10">RC2</text>
                    <!-- Conexiones a VCC -->
                    <line x1="140" y1="50" x2="140" y2="70" stroke="#8892b0" stroke-width="2"/>
                    <line x1="360" y1="50" x2="360" y2="70" stroke="#8892b0" stroke-width="2"/>
                    <line x1="140" y1="50" x2="360" y2="50" stroke="#8892b0" stroke-width="2"/>
                    <!-- Transistores -->
                    <circle cx="140" cy="150" r="25" fill="none" stroke="#64ffda" stroke-width="2"/>
                    <text x="140" y="155" text-anchor="middle" fill="#64ffda" font-size="12">Q1</text>
                    <circle cx="360" cy="150" r="25" fill="none" stroke="#64ffda" stroke-width="2"/>
                    <text x="360" y="155" text-anchor="middle" fill="#64ffda" font-size="12">Q2</text>
                    <!-- Conexiones C-E -->
                    <line x1="140" y1="110" x2="140" y2="125" stroke="#8892b0" stroke-width="2"/>
                    <line x1="360" y1="110" x2="360" y2="125" stroke="#8892b0" stroke-width="2"/>
                    <line x1="140" y1="175" x2="140" y2="200" stroke="#8892b0" stroke-width="2"/>
                    <line x1="360" y1="175" x2="360" y2="200" stroke="#8892b0" stroke-width="2"/>
                    <!-- Nodo de emisores -->
                    <line x1="140" y1="200" x2="360" y2="200" stroke="#8892b0" stroke-width="2"/>
                    <!-- Resistencia de cola -->
                    <rect x="240" y="210" width="20" height="40" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="250" y="235" text-anchor="middle" fill="#8892b0" font-size="10">RE</text>
                    <line x1="250" y1="200" x2="250" y2="210" stroke="#8892b0" stroke-width="2"/>
                    <line x1="250" y1="250" x2="250" y2="270" stroke="#8892b0" stroke-width="2"/>
                    <text x="250" y="285" text-anchor="middle" fill="#ccd6f6" font-size="12">-VEE</text>
                    <!-- Entradas -->
                    <line x1="80" y1="150" x2="115" y2="150" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="70" y="155" text-anchor="end" fill="#ccd6f6" font-size="12">v1</text>
                    <line x1="420" y1="150" x2="385" y2="150" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="430" y="155" fill="#ccd6f6" font-size="12">v2</text>
                    <!-- Salidas -->
                    <line x1="140" y1="110" x2="80" y2="110" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="70" y="115" text-anchor="end" fill="#ccd6f6" font-size="12">vc1</text>
                    <line x1="360" y1="110" x2="420" y2="110" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="430" y="115" fill="#ccd6f6" font-size="12">vc2</text>
                </svg>
            </div>

            <h4>El Factor de Rechazo en Modo Común (CMRR)</h4>
            <p>El CMRR es una figura de mérito que cuantifica la capacidad del amplificador para amplificar señales diferenciales y rechazar señales de modo común. Se define como:</p>
            <div class="code-block">CMRR = |Av(diferencial) / Av(modo común)|</div>
            <p>Generalmente se expresa en decibelios:</p>
            <div class="code-block">CMRR(dB) = 20 log (CMRR)</div>
            <p>Un CMRR alto es esencial en aplicaciones biomédicas, donde el ruido de la red eléctrica (50/60 Hz) aparece como una señal de modo común de varios voltios, mientras que la señal biológica (ECG, EEG) es de solo unos milivoltios o microvoltios.</p>

            <h3>1.2 El Amplificador Operacional Ideal y sus Configuraciones</h3>
            <p>Un amplificador operacional ideal es un modelo teórico con las siguientes características:</p>
            <ul>
                <li><strong>Ganancia de tensión en lazo abierto (AVOL):</strong> Infinita.</li>
                <li><strong>Impedancia de entrada (Zin):</strong> Infinita.</li>
                <li><strong>Impedancia de salida (Zout):</strong> Cero.</li>
                <li><strong>Ancho de banda:</strong> Infinito.</li>
                <li><strong>Offset de entrada:</strong> Cero.</li>
            </ul>
            <p>Aunque los op-amps reales no son perfectos, estas suposiciones simplifican enormemente el análisis y proporcionan resultados muy precisos en la mayoría de las aplicaciones.</p>

            <h4>Conceptos Clave: Tierra Virtual y Cortocircuito Virtual</h4>
            <p>Gracias a la ganancia infinita y la realimentación negativa, surgen dos conceptos fundamentales:</p>
            <ul>
                <li><strong>Tierra Virtual:</strong> En un amplificador inversor, la entrada inversora se comporta como si estuviera conectada a tierra (0V), pero sin estar físicamente conectada. Sin embargo, no puede fluir corriente hacia tierra a través de ella.</li>
                <li><strong>Cortocircuito Virtual:</strong> En un amplificador no inversor, la tensión en la entrada inversora es prácticamente igual a la tensión en la entrada no inversora (v1 ≈ v2). Es como si hubiera un cortocircuito entre ambas entradas, pero sin que fluya corriente entre ellas.</li>
            </ul>

            <h4>Configuración Inversora</h4>
            <div class="diagram-container">
                <h4>Figura 1.2: Amplificador Inversor</h4>
                <svg width="450" height="220" viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg">
                    <!-- Triángulo -->
                    <polygon points="150,60 150,160 270,110" fill="none" stroke="#64ffda" stroke-width="3"/>
                    <text x="200" y="115" fill="#64ffda" font-size="14">-</text>
                    <text x="200" y="85" fill="#64ffda" font-size="14">+</text>
                    <!-- Entrada -->
                    <line x1="50" y1="110" x2="90" y2="110" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="40" y="115" text-anchor="end" fill="#ccd6f6" font-size="12">vin</text>
                    <rect x="90" y="100" width="30" height="20" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="105" y="95" text-anchor="middle" fill="#8892b0" font-size="10">R1</text>
                    <line x1="120" y1="110" x2="150" y2="110" stroke="#ccd6f6" stroke-width="2"/>
                    <!-- Nodo de tierra virtual -->
                    <circle cx="150" cy="110" r="4" fill="#64ffda"/>
                    <!-- Realimentación -->
                    <line x1="240" y1="110" x2="240" y2="40" stroke="#ccd6f6" stroke-width="2"/>
                    <line x1="240" y1="40" x2="150" y2="40" stroke="#ccd6f6" stroke-width="2"/>
                    <line x1="150" y1="40" x2="150" y2="110" stroke="#ccd6f6" stroke-width="2"/>
                    <rect x="180" y="30" width="30" height="20" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="195" y="25" text-anchor="middle" fill="#8892b0" font-size="10">Rf</text>
                    <!-- Salida -->
                    <line x1="270" y1="110" x2="400" y2="110" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="410" y="115" fill="#ccd6f6" font-size="12">vout</text>
                    <!-- Tierra virtual label -->
                    <text x="150" y="130" text-anchor="middle" fill="#64ffda" font-size="9">Tierra Virtual</text>
                </svg>
            </div>
            <p><strong>Fórmula de ganancia:</strong></p>
            <div class="code-block">Av = -Rf / R1</div>

            <h4>Configuración No Inversora</h4>
            <div class="diagram-container">
                <h4>Figura 1.3: Amplificador No Inversor</h4>
                <svg width="450" height="220" viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg">
                    <!-- Triángulo -->
                    <polygon points="150,60 150,160 270,110" fill="none" stroke="#64ffda" stroke-width="3"/>
                    <text x="200" y="115" fill="#64ffda" font-size="14">-</text>
                    <text x="200" y="85" fill="#64ffda" font-size="14">+</text>
                    <!-- Entrada no inversora -->
                    <line x1="50" y1="90" x2="150" y2="90" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="40" y="95" text-anchor="end" fill="#ccd6f6" font-size="12">vin</text>
                    <!-- Realimentación a entrada inversora -->
                    <line x1="240" y1="110" x2="240" y2="40" stroke="#ccd6f6" stroke-width="2"/>
                    <line x1="240" y1="40" x2="130" y2="40" stroke="#ccd6f6" stroke-width="2"/>
                    <line x1="130" y1="40" x2="130" y2="110" stroke="#ccd6f6" stroke-width="2"/>
                    <rect x="180" y="30" width="30" height="20" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="195" y="25" text-anchor="middle" fill="#8892b0" font-size="10">Rf</text>
                    <!-- R1 a tierra -->
                    <rect x="130" y="110" width="20" height="30" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="125" y="130" text-anchor="end" fill="#8892b0" font-size="10">R1</text>
                    <line x1="140" y1="140" x2="140" y2="180" stroke="#8892b0" stroke-width="2"/>
                    <line x1="130" y1="180" x2="150" y2="180" stroke="#8892b0" stroke-width="2"/>
                    <line x1="133" y1="185" x2="147" y2="185" stroke="#8892b0" stroke-width="2"/>
                    <!-- Salida -->
                    <line x1="270" y1="110" x2="400" y2="110" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="410" y="115" fill="#ccd6f6" font-size="12">vout</text>
                </svg>
            </div>
            <p><strong>Fórmula de ganancia:</strong></p>
            <div class="code-block">Av = 1 + (Rf / R1)</div>

            <h3>1.3 Ejercicios Resueltos</h3>
            
            <h4>Ejercicio Resuelto 1: Cálculo de Ganancia en Amplificador Inversor</h4>
            <p><strong>Enunciado:</strong> Un amplificador inversor tiene R1 = 2 kΩ y Rf = 20 kΩ. Si la señal de entrada es Vin = 100 mVpp, calcule la ganancia de tensión y la tensión de salida.</p>
            <p><strong>Solución:</strong></p>
            <ol>
                <li>Calcular la ganancia: Av = -Rf/R1 = -20 kΩ / 2 kΩ = -10.</li>
                <li>Calcular la tensión de salida: Vout = Av × Vin = -10 × 100 mVpp = -1000 mVpp = -1 Vpp.</li>
                <li><strong>Respuesta:</strong> Ganancia = -10, Vout = 1 Vpp (con inversión de fase).</li>
            </ol>

            <h4>Ejercicio Resuelto 2: Diseño de Amplificador No Inversor</h4>
            <p><strong>Enunciado:</strong> Diseñe un amplificador no inversor con una ganancia de 11. Si Vin = 5 mV, ¿cuál es Vout?</p>
            <p><strong>Solución:</strong></p>
            <ol>
                <li>Aplicar la fórmula: 1 + Rf/R1 = 11, entonces Rf/R1 = 10.</li>
                <li>Elegir valores comerciales: Si R1 = 1 kΩ, entonces Rf = 10 kΩ.</li>
                <li>Calcular Vout: Vout = 11 × 5 mV = 55 mV.</li>
                <li><strong>Respuesta:</strong> R1 = 1 kΩ, Rf = 10 kΩ, Vout = 55 mV.</li>
            </ol>

            <h4>Ejercicio Resuelto 3: Análisis de CMRR en un ECG</h4>
            <p><strong>Enunciado:</strong> Un amplificador de instrumentación para ECG tiene un CMRR de 100 dB. Si la señal diferencial es de 1 mV y el ruido de modo común es de 1 V, ¿cuál es la relación señal-ruido a la salida?</p>
            <p><strong>Solución:</strong></p>
            <ol>
                <li>Convertir CMRR de dB a valor lineal: CMRR = 10^(100/20) = 100,000.</li>
                <li>La ganancia de modo común es 100,000 veces menor que la ganancia diferencial.</li>
                <li>Señal de salida deseada: 1 mV × Av.</li>
                <li>Ruido de salida: 1 V × (Av / 100,000) = 10 μV × Av.</li>
                <li>Relación señal-ruido: (1 mV × Av) / (10 μV × Av) = 100.</li>
                <li><strong>Respuesta:</strong> La señal deseada es 100 veces más grande que el ruido.</li>
            </ol>

            <h3>1.4 Ejercicios Propuestos</h3>
            <ol>
                <li>Un amplificador inversor tiene R1 = 4.7 kΩ y Rf = 47 kΩ. Si Vin = 20 mVpp, determine Av y Vout.</li>
                <li>Diseñe un amplificador no inversor con una ganancia de 50. Utilice valores comerciales de resistencias.</li>
                <li>Un amplificador diferencial tiene una ganancia diferencial de 200 y una ganancia en modo común de 0.01. Calcule el CMRR en dB.</li>
                <li>¿Por qué es importante la alta impedancia de entrada en un amplificador de biopotenciales?</li>
                <li>Explique el concepto de tierra virtual y su utilidad en el análisis de circuitos con op-amps.</li>
            </ol>

            <h3>1.5 Aplicaciones Biomédicas</h3>
            <h4>El Amplificador de Instrumentación en ECG</h4>
            <p>La señal del electrocardiograma (ECG) tiene una amplitud típica de 0.5 a 4 mV, con un ancho de banda de 0.05 a 150 Hz. Para capturar esta señal, se utiliza un <strong>amplificador de instrumentación</strong>, que se construye con tres amplificadores operacionales.</p>
            <ul>
                <li><strong>Primera etapa:</strong> Dos amplificadores no inversores que proporcionan alta impedancia de entrada (evita cargar los electrodos) y ganancia diferencial. El punto de unión de las resistencias de realimentación actúa como tierra virtual para la señal diferencial, pero es flotante para la señal de modo común.</li>
                <li><strong>Segunda etapa:</strong> Un amplificador diferencial que elimina la señal de modo común y proporciona ganancia adicional.</li>
            </ul>
            <p>El CMRR de un amplificador de instrumentación puede superar los 100 dB, lo que es esencial para eliminar el ruido de 50/60 Hz que aparece en el cuerpo del paciente.</p>

            <h4>El Circuito de "Pierna Derecha"</h4>
            <p>Para mejorar aún más el rechazo de modo común, se utiliza un circuito de realimentación activa. Se toma una muestra del voltaje de modo común del paciente, se invierte y se aplica a la pierna derecha del paciente a través de un electrodo. Esto reduce drásticamente el voltaje de modo común en el cuerpo, mejorando la calidad de la señal.</p>
        `,
        quiz: [
            {
                id: 1,
                question: "¿Cuál es la función principal del amplificador diferencial en la etapa de entrada de un op-amp?",
                options: [
                    "Proporcionar una alta ganancia de potencia.",
                    "Amplificar señales diferenciales y rechazar señales de modo común.",
                    "Convertir corriente alterna en continua.",
                    "Regular la tensión de alimentación."
                ],
                correct: 1,
                feedback: "El amplificador diferencial es la clave para que un op-amp pueda amplificar señales débiles mientras rechaza el ruido que afecta a ambas entradas por igual (modo común)."
            },
            {
                id: 2,
                question: "¿Qué significa el término 'tierra virtual' en un amplificador inversor?",
                options: [
                    "Que la entrada inversora está conectada físicamente a tierra.",
                    "Que la entrada inversora está a 0V pero no puede fluir corriente hacia tierra a través de ella.",
                    "Que la salida del amplificador es siempre 0V.",
                    "Que la resistencia de realimentación es cero."
                ],
                correct: 1,
                feedback: "La tierra virtual es un nodo que se comporta como tierra para la tensión (0V) pero como un circuito abierto para la corriente. Es una consecuencia de la realimentación negativa y la ganancia infinita."
            },
            {
                id: 3,
                question: "Calcule la ganancia de un amplificador no inversor si R1 = 2 kΩ y Rf = 18 kΩ.",
                options: [
                    "Av = -9",
                    "Av = 9",
                    "Av = 10",
                    "Av = 11"
                ],
                correct: 2,
                feedback: "Av = 1 + (Rf/R1) = 1 + (18k/2k) = 1 + 9 = 10."
            },
            {
                id: 4,
                question: "¿Por qué es importante un CMRR alto en un amplificador de ECG?",
                options: [
                    "Para aumentar la ganancia de tensión.",
                    "Para reducir el consumo de potencia.",
                    "Para eliminar el ruido de la red eléctrica (50/60 Hz) que aparece en el paciente.",
                    "Para aumentar el ancho de banda."
                ],
                correct: 2,
                feedback: "El ruido de la red eléctrica es una señal de modo común muy grande en comparación con la señal del ECG. Un CMRR alto permite que el amplificador amplifique solo la señal diferencial del corazón, rechazando el ruido."
            },
            {
                id: 5,
                question: "En un amplificador inversor con R1 = 1 kΩ y Rf = 100 kΩ, si Vin = 10 mV, ¿cuál es Vout?",
                options: [
                    "1 V",
                    "-1 V",
                    "10 V",
                    "-10 V"
                ],
                correct: 1,
                feedback: "Av = -Rf/R1 = -100. Vout = Av × Vin = -100 × 10 mV = -1000 mV = -1 V."
            }
        ]
    },
    'unidad2': {
        title: 'Unidad II: Filtros Activos',
        content: `
            <h2>Unidad II: Filtros Activos</h2>
            <p>Un filtro es un circuito que permite el paso de un rango de frecuencias (banda de paso) mientras atenúa otras (banda eliminada). Los filtros activos utilizan amplificadores operacionales, lo que les permite tener ganancia, alta impedancia de entrada y baja impedancia de salida, evitando el uso de bobinas voluminosas y costosas.</p>

            <h3>2.1 Función de Transferencia y Diagramas de Bode</h3>
            <p>La <strong>función de transferencia</strong> H(s) describe la relación entre la salida y la entrada de un circuito en el dominio de Laplace. Para señales sinusoidales, se evalúa en s = jω, donde ω = 2πf.</p>
            <div class="code-block">H(jω) = Vout(jω) / Vin(jω)</div>
            <p>La función de transferencia es una función compleja que tiene magnitud y fase. La magnitud nos dice cuánto se amplifica o atenúa la señal a cada frecuencia, y la fase nos dice cuánto se desplaza.</p>

            <h4>Diagramas de Bode</h4>
            <p>El diagrama de Bode es una representación gráfica de la función de transferencia que consta de dos gráficas:</p>
            <ul>
                <li><strong>Gráfica de Magnitud:</strong> Ganancia en decibelios (dB) vs. frecuencia (escala logarítmica).</li>
                <li><strong>Gráfica de Fase:</strong> Desplazamiento de fase en grados vs. frecuencia (escala logarítmica).</li>
            </ul>
            <p>La <strong>frecuencia de corte (fc)</strong> es el punto donde la ganancia cae 3 dB (a 0.707 de su valor máximo). Para un filtro de primer orden, la pendiente de caída es de -20 dB por década.</p>

            <div class="diagram-container">
                <h4>Figura 2.1: Diagrama de Bode de un Filtro Pasa-Bajos de Primer Orden</h4>
                <svg width="550" height="250" viewBox="0 0 550 250" xmlns="http://www.w3.org/2000/svg">
                    <!-- Ejes -->
                    <line x1="60" y1="200" x2="500" y2="200" stroke="#8892b0" stroke-width="2"/>
                    <line x1="60" y1="200" x2="60" y2="30" stroke="#8892b0" stroke-width="2"/>
                    <text x="480" y="220" fill="#8892b0" font-size="12">Frecuencia (Hz)</text>
                    <text x="15" y="35" fill="#8892b0" font-size="12">Ganancia (dB)</text>
                    <!-- Nivel 0 dB -->
                    <line x1="60" y1="60" x2="500" y2="60" stroke="#233554" stroke-width="1" stroke-dasharray="4,4"/>
                    <text x="30" y="65" fill="#8892b0" font-size="10">0</text>
                    <!-- Nivel -3 dB -->
                    <line x1="60" y1="80" x2="500" y2="80" stroke="#dc3545" stroke-width="1" stroke-dasharray="4,4"/>
                    <text x="25" y="85" fill="#dc3545" font-size="10">-3</text>
                    <!-- Curva de respuesta -->
                    <path d="M 60 60 L 200 60 Q 240 60 260 80 L 400 140 L 500 180" fill="none" stroke="#64ffda" stroke-width="3"/>
                    <!-- Frecuencia de corte -->
                    <line x1="260" y1="200" x2="260" y2="80" stroke="#1e90ff" stroke-width="1" stroke-dasharray="3,3"/>
                    <text x="260" y="220" text-anchor="middle" fill="#1e90ff" font-size="11">fc</text>
                    <!-- Pendiente -->
                    <text x="380" y="150" fill="#8892b0" font-size="11">-20 dB/década</text>
                </svg>
            </div>

            <h3>2.2 Tipos de Filtros y Aproximaciones</h3>
            <p>Existen cuatro tipos básicos de filtros según su respuesta en frecuencia:</p>
            <ul>
                <li><strong>Pasa-Bajos:</strong> Permite el paso de frecuencias bajas y atenúa las altas.</li>
                <li><strong>Pasa-Altos:</strong> Permite el paso de frecuencias altas y atenúa las bajas.</li>
                <li><strong>Pasa-Banda:</strong> Permite el paso de un rango de frecuencias intermedias.</li>
                <li><strong>Banda-Eliminada (Notch):</strong> Atenúa un rango específico de frecuencias.</li>
            </ul>
            <p>Las aproximaciones más comunes para el diseño de filtros son:</p>
            <ul>
                <li><strong>Butterworth:</strong> Respuesta maximalmente plana en la banda de paso. No tiene rizado. Es la más común.</li>
                <li><strong>Chebyshev:</strong> Tiene rizado en la banda de paso, pero una caída más pronunciada en la transición. Más selectivo.</li>
                <li><strong>Bessel:</strong> Respuesta de fase lineal, lo que significa que no distorsiona las señales no sinusoidales. Ideal para señales digitales.</li>
                <li><strong>Elíptico (Cauer):</strong> Rizado en banda de paso y banda eliminada, pero la caída más pronunciada posible. Máxima selectividad.</li>
            </ul>

            <div class="diagram-container">
                <h4>Figura 2.2: Comparación de Respuestas de Filtros Pasa-Bajos</h4>
                <svg width="550" height="280" viewBox="0 0 550 280" xmlns="http://www.w3.org/2000/svg">
                    <!-- Ejes -->
                    <line x1="60" y1="230" x2="500" y2="230" stroke="#8892b0" stroke-width="2"/>
                    <line x1="60" y1="230" x2="60" y2="30" stroke="#8892b0" stroke-width="2"/>
                    <text x="480" y="250" fill="#8892b0" font-size="12">Frecuencia (log)</text>
                    <text x="10" y="35" fill="#8892b0" font-size="12">|H(s)| (dB)</text>
                    <!-- Curva Butterworth -->
                    <path d="M 60 60 L 200 60 Q 240 60 280 130 L 450 220" fill="none" stroke="#64ffda" stroke-width="3"/>
                    <text x="320" y="80" fill="#64ffda" font-size="12">Butterworth</text>
                    <!-- Curva Chebyshev -->
                    <path d="M 60 60 L 100 60 Q 120 50 140 60 Q 160 50 180 60 Q 200 50 220 60 Q 240 50 260 60 L 320 130 L 450 220" fill="none" stroke="#1e90ff" stroke-width="2.5"/>
                    <text x="320" y="120" fill="#1e90ff" font-size="12">Chebyshev</text>
                    <!-- Curva Bessel -->
                    <path d="M 60 60 L 180 60 Q 260 60 320 130 L 450 210" fill="none" stroke="#ffc107" stroke-width="2.5"/>
                    <text x="320" y="160" fill="#ffc107" font-size="12">Bessel</text>
                    <!-- Curva Elíptica -->
                    <path d="M 60 60 L 100 60 Q 140 50 180 60 L 220 130 L 300 200 Q 350 210 400 200 Q 420 190 450 220" fill="none" stroke="#dc3545" stroke-width="2"/>
                    <text x="320" y="200" fill="#dc3545" font-size="12">Elíptico</text>
                </svg>
            </div>

            <h3>2.3 Filtros de Sallen-Key</h3>
            <p>La topología Sallen-Key es una de las configuraciones más populares para filtros activos de segundo orden. Utiliza un amplificador operacional como seguidor de tensión y una red RC que proporciona realimentación positiva parcial para controlar el factor Q del filtro.</p>

            <div class="diagram-container">
                <h4>Figura 2.3: Filtro Pasa-Bajos Sallen-Key de Segundo Orden</h4>
                <svg width="500" height="280" viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg">
                    <!-- Entrada -->
                    <line x1="50" y1="130" x2="100" y2="130" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="40" y="135" text-anchor="end" fill="#ccd6f6" font-size="12">vin</text>
                    <!-- R1 -->
                    <rect x="100" y="120" width="40" height="20" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="120" y="115" text-anchor="middle" fill="#8892b0" font-size="10">R1</text>
                    <line x1="140" y1="130" x2="180" y2="130" stroke="#ccd6f6" stroke-width="2"/>
                    <!-- Nodo A -->
                    <circle cx="180" cy="130" r="3" fill="#64ffda"/>
                    <!-- R2 -->
                    <rect x="180" y="120" width="40" height="20" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="200" y="115" text-anchor="middle" fill="#8892b0" font-size="10">R2</text>
                    <line x1="220" y1="130" x2="280" y2="130" stroke="#ccd6f6" stroke-width="2"/>
                    <!-- Entrada + del op-amp -->
                    <polygon points="280,90 280,170 360,130" fill="none" stroke="#64ffda" stroke-width="2.5"/>
                    <text x="300" y="135" fill="#64ffda" font-size="12">+</text>
                    <text x="300" y="110" fill="#64ffda" font-size="12">-</text>
                    <!-- Salida -->
                    <line x1="360" y1="130" x2="450" y2="130" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="460" y="135" fill="#ccd6f6" font-size="12">vout</text>
                    <!-- C1 (realimentación) -->
                    <line x1="200" y1="130" x2="200" y2="60" stroke="#ccd6f6" stroke-width="2"/>
                    <line x1="200" y1="60" x2="380" y2="60" stroke="#ccd6f6" stroke-width="2"/>
                    <line x1="380" y1="60" x2="380" y2="130" stroke="#ccd6f6" stroke-width="2"/>
                    <line x1="360" y1="130" x2="380" y2="130" stroke="#ccd6f6" stroke-width="2"/>
                    <!-- C1 symbol -->
                    <line x1="230" y1="50" x2="230" y2="70" stroke="#8892b0" stroke-width="2"/>
                    <line x1="240" y1="50" x2="240" y2="70" stroke="#8892b0" stroke-width="2"/>
                    <text x="235" y="45" text-anchor="middle" fill="#8892b0" font-size="10">C1</text>
                    <!-- C2 a tierra -->
                    <line x1="180" y1="130" x2="180" y2="200" stroke="#ccd6f6" stroke-width="2"/>
                    <line x1="170" y1="200" x2="190" y2="200" stroke="#8892b0" stroke-width="2"/>
                    <line x1="173" y1="205" x2="187" y2="205" stroke="#8892b0" stroke-width="2"/>
                    <text x="170" y="195" text-anchor="end" fill="#8892b0" font-size="10">C2</text>
                    <!-- Realimentación negativa (seguidor) -->
                    <line x1="330" y1="130" x2="330" y2="130" stroke="#ccd6f6" stroke-width="1"/>
                    <line x1="340" y1="130" x2="340" y2="90" stroke="#ccd6f6" stroke-width="2"/>
                    <line x1="340" y1="90" x2="320" y2="90" stroke="#ccd6f6" stroke-width="2"/>
                    <line x1="320" y1="90" x2="320" y2="130" stroke="#ccd6f6" stroke-width="2"/>
                </svg>
            </div>
            <p><strong>Fórmulas clave:</strong></p>
            <div class="code-block">fc = 1 / (2π√(R1R2C1C2))
Q = √(R1R2C1C2) / (C2(R1+R2))  (para ganancia unitaria)</div>

            <h3>2.4 Ejercicios Resueltos</h3>
            
            <h4>Ejercicio Resuelto 1: Diseño de un Filtro Pasa-Bajos Butterworth</h4>
            <p><strong>Enunciado:</strong> Diseñe un filtro Sallen-Key de segundo orden con fc = 1 kHz y ganancia unitaria (Butterworth, Q = 0.707).</p>
            <p><strong>Solución:</strong></p>
            <ol>
                <li>Para un filtro Butterworth, Q = 0.707.</li>
                <li>Elegir C1 = C2 = 10 nF (valores iguales simplifican el diseño).</li>
                <li>Para R1 = R2 = R, la fórmula de fc se simplifica: fc = 1/(2πRC).</li>
                <li>Despejar R: R = 1/(2π × 1000 × 10nF) = 15.9 kΩ.</li>
                <li>Usar valores comerciales: R = 16 kΩ.</li>
                <li><strong>Respuesta:</strong> R1 = R2 = 16 kΩ, C1 = C2 = 10 nF.</li>
            </ol>

            <h4>Ejercicio Resuelto 2: Cálculo de Parámetros de un Filtro Pasa-Banda</h4>
            <p><strong>Enunciado:</strong> Un filtro pasa-banda tiene frecuencias de corte f1 = 300 Hz y f2 = 3.3 kHz. Calcule el ancho de banda, la frecuencia central y el factor Q.</p>
            <p><strong>Solución:</strong></p>
            <ol>
                <li>Ancho de banda: BW = f2 - f1 = 3300 - 300 = 3000 Hz.</li>
                <li>Frecuencia central: f0 = √(f1 × f2) = √(300 × 3300) = √990000 ≈ 995 Hz.</li>
                <li>Factor Q: Q = f0 / BW = 995 / 3000 ≈ 0.33.</li>
                <li><strong>Respuesta:</strong> BW = 3 kHz, f0 ≈ 995 Hz, Q ≈ 0.33 (filtro de banda ancha).</li>
            </ol>

            <h4>Ejercicio Resuelto 3: Filtro de Hendidura para Ruido de Red</h4>
            <p><strong>Enunciado:</strong> Diseñe un filtro de hendidura (Notch) para eliminar el ruido de 60 Hz de una señal de ECG.</p>
            <p><strong>Solución:</strong></p>
            <ol>
                <li>La frecuencia de hendidura debe ser f0 = 60 Hz.</li>
                <li>Elegir un factor Q = 10 para una hendidura estrecha y selectiva.</li>
                <li>Usar la topología de filtro de hendidura de Sallen-Key o de variable de estado.</li>
                <li>Calcular los componentes: Con C = 100 nF, R = 1/(2π × 60 × 100nF) = 26.5 kΩ.</li>
                <li>Ajustar R y C para obtener Q = 10.</li>
                <li><strong>Respuesta:</strong> Filtro Notch a 60 Hz con Q = 10, usando C = 100 nF y R ≈ 26.5 kΩ.</li>
            </ol>

            <h3>2.5 Ejercicios Propuestos</h3>
            <ol>
                <li>Diseñe un filtro pasa-altos de primer orden con fc = 200 Hz. Utilice C = 100 nF.</li>
                <li>Calcule el orden mínimo necesario para un filtro Butterworth que tenga una atenuación de 40 dB a 10 kHz, si la frecuencia de corte es 1 kHz.</li>
                <li>¿Qué tipo de aproximación de filtro elegiría para una señal digital? Justifique su respuesta.</li>
                <li>Diseñe un filtro pasa-banda con f0 = 1 kHz y BW = 100 Hz. Calcule Q y los componentes.</li>
                <li>Explique la diferencia entre un filtro pasivo y un filtro activo. Mencione dos ventajas de los filtros activos.</li>
            </ol>

            <h3>2.6 Aplicaciones Biomédicas</h3>
            <h4>Acondicionamiento de Señal en ECG</h4>
            <p>La cadena de filtrado en un electrocardiógrafo es crítica para obtener una señal limpia y diagnóstica:</p>
            <ul>
                <li><strong>Filtro Pasa-Alto (0.05 Hz):</strong> Elimina la deriva de la línea base causada por el movimiento del paciente o la respiración. Sin este filtro, la señal de ECG se desplazaría verticalmente.</li>
                <li><strong>Filtro Pasa-Bajo (150 Hz):</strong> Elimina el ruido muscular (electromiograma, EMG) y el ruido de alta frecuencia. La información diagnóstica del ECG está por debajo de 100 Hz.</li>
                <li><strong>Filtro de Hendidura (50/60 Hz):</strong> Elimina la interferencia de la red eléctrica. Es un filtro de banda muy estrecha sintonizado exactamente a la frecuencia de la red.</li>
            </ul>
            <p>En conjunto, estos filtros garantizan que la señal que se muestra en el monitor o se imprime en papel sea una representación fiel de la actividad eléctrica del corazón.</p>

            <h4>Análisis de EEG</h4>
            <p>Las señales cerebrales (EEG) se dividen en bandas de frecuencia:</p>
            <ul>
                <li><strong>Delta (0.5 - 4 Hz):</strong> Sueño profundo.</li>
                <li><strong>Theta (4 - 8 Hz):</strong> Somnolencia.</li>
                <li><strong>Alpha (8 - 13 Hz):</strong> Relajación, ojos cerrados.</li>
                <li><strong>Beta (13 - 30 Hz):</strong> Alerta, concentración.</li>
                <li><strong>Gamma (> 30 Hz):</strong> Procesamiento cognitivo.</li>
            </ul>
            <p>Se utilizan filtros pasa-banda muy selectivos para aislar cada una de estas bandas y analizarlas por separado. Esto permite a los médicos diagnosticar trastornos del sueño, epilepsia y otras condiciones neurológicas.</p>
        `,
        quiz: [
            {
                id: 1,
                question: "¿Cuál es la principal ventaja de un filtro activo sobre un filtro pasivo?",
                options: [
                    "Los filtros activos son más baratos.",
                    "Los filtros activos no necesitan alimentación.",
                    "Los filtros activos pueden proporcionar ganancia y tienen alta impedancia de entrada.",
                    "Los filtros activos funcionan a frecuencias más altas."
                ],
                correct: 2,
                feedback: "Los filtros activos utilizan amplificadores operacionales, lo que les permite amplificar la señal (ganancia), tener alta impedancia de entrada y baja impedancia de salida, además de evitar el uso de bobinas."
            },
            {
                id: 2,
                question: "¿Qué tipo de filtro se utiliza para eliminar el ruido de 60 Hz en una señal de ECG?",
                options: [
                    "Filtro pasa-bajo Butterworth.",
                    "Filtro pasa-alto Chebyshev.",
                    "Filtro de hendidura (Notch).",
                    "Filtro de Bessel."
                ],
                correct: 2,
                feedback: "El filtro de hendidura (Notch) está diseñado para atenuar una frecuencia muy específica, como la de la red eléctrica, sin afectar significativamente las frecuencias cercanas de la señal biomédica."
            },
            {
                id: 3,
                question: "Si un filtro pasa-banda tiene f1 = 100 Hz y f2 = 10 kHz, ¿cuál es su ancho de banda?",
                options: [
                    "100 Hz",
                    "9.9 kHz",
                    "10.1 kHz",
                    "1 kHz"
                ],
                correct: 1,
                feedback: "BW = f2 - f1 = 10000 - 100 = 9900 Hz = 9.9 kHz."
            },
            {
                id: 4,
                question: "¿Qué aproximación de filtro se caracteriza por tener una respuesta de fase lineal?",
                options: [
                    "Butterworth",
                    "Chebyshev",
                    "Bessel",
                    "Elíptico"
                ],
                correct: 2,
                feedback: "El filtro de Bessel tiene una respuesta de fase lineal, lo que significa que todas las frecuencias se retrasan la misma cantidad de tiempo. Esto preserva la forma de las señales no sinusoidales, como las señales digitales."
            },
            {
                id: 5,
                question: "Para un filtro de primer orden, ¿cuál es la pendiente de caída en la banda eliminada?",
                options: [
                    "-6 dB por octava",
                    "-20 dB por década",
                    "Ambas son correctas",
                    "-40 dB por década"
                ],
                correct: 2,
                feedback: "-20 dB por década es equivalente a -6 dB por octava. Un filtro de primer orden tiene una pendiente de caída de 20 dB/década o 6 dB/octava."
            }
        ]
    },
    'unidad3': {
        title: 'Unidad III: Tiristores, Conmutadores de Control',
        content: `
            <h2>Unidad III: Tiristores, Conmutadores de Control</h2>
            <p>Los tiristores son dispositivos semiconductores de potencia que funcionan como interruptores controlados. A diferencia de un transistor bipolar, una vez que un tiristor se activa (se dispara), permanece conduciendo incluso si se retira la señal de control, hasta que la corriente que lo atraviesa cae por debajo de un umbral (corriente de mantenimiento, IH).</p>

            <h3>3.1 El Rectificador Controlado de Silicio (SCR)</h3>
            <p>El SCR es el tiristor más utilizado. Es un dispositivo de cuatro capas (p-n-p-n) con tres terminales: Ánodo (A), Cátodo (K) y Puerta (G).</p>
            
            <h4>Estructura y Funcionamiento</h4>
            <p>El SCR puede visualizarse como dos transistores interconectados (un pnp y un npn) que forman un latch. Cuando se aplica un pequeño pulso de corriente en la puerta (IGT) y la tensión ánodo-cátodo es positiva, se inicia una realimentación positiva interna que lleva al SCR a un estado de conducción (cebado).</p>
            <ul>
                <li><strong>Estado de Bloqueo (Off):</strong> El SCR no conduce, comportándose como un circuito abierto.</li>
                <li><strong>Estado de Conducción (On):</strong> Una vez disparado, el SCR conduce corriente de ánodo a cátodo con una caída de tensión muy baja (aproximadamente 1-2 V).</li>
                <li><strong>Bloqueo:</strong> Para apagar un SCR, la corriente principal debe caer por debajo de la corriente de mantenimiento (IH). Esto ocurre naturalmente en corriente alterna cuando la señal pasa por cero.</li>
            </ul>

            <div class="diagram-container">
                <h4>Figura 3.1: Estructura y Símbolo del SCR</h4>
                <svg width="500" height="250" viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
                    <!-- Estructura de capas -->
                    <rect x="60" y="30" width="120" height="30" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="120" y="50" text-anchor="middle" fill="#ccd6f6" font-size="12">P</text>
                    <rect x="60" y="60" width="120" height="30" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="120" y="80" text-anchor="middle" fill="#ccd6f6" font-size="12">N</text>
                    <rect x="60" y="90" width="120" height="30" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="120" y="110" text-anchor="middle" fill="#ccd6f6" font-size="12">P</text>
                    <rect x="60" y="120" width="120" height="30" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="120" y="140" text-anchor="middle" fill="#ccd6f6" font-size="12">N</text>
                    <!-- Terminales -->
                    <text x="200" y="45" fill="#64ffda" font-size="12">Ánodo</text>
                    <text x="200" y="135" fill="#64ffda" font-size="12">Cátodo</text>
                    <text x="30" y="110" fill="#64ffda" font-size="12">Puerta</text>
                    <line x1="180" y1="45" x2="220" y2="45" stroke="#64ffda" stroke-width="2"/>
                    <line x1="180" y1="135" x2="220" y2="135" stroke="#64ffda" stroke-width="2"/>
                    <line x1="60" y1="105" x2="30" y2="105" stroke="#64ffda" stroke-width="2"/>
                    
                    <!-- Símbolo -->
                    <polygon points="320,90 320,150 380,120" fill="none" stroke="#64ffda" stroke-width="2.5"/>
                    <line x1="380" y1="120" x2="380" y2="110" stroke="#64ffda" stroke-width="2.5"/>
                    <line x1="380" y1="130" x2="380" y2="120" stroke="#64ffda" stroke-width="2.5"/>
                    <line x1="380" y1="120" x2="430" y2="120" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="440" y="125" fill="#ccd6f6" font-size="12">A</text>
                    <line x1="290" y1="120" x2="320" y2="120" stroke="#ccd6f6" stroke-width="2"/>
                    <text x="280" y="125" text-anchor="end" fill="#ccd6f6" font-size="12">K</text>
                    <line x1="350" y1="140" x2="350" y2="180" stroke="#64ffda" stroke-width="2"/>
                    <text x="350" y="200" text-anchor="middle" fill="#64ffda" font-size="12">G</text>
                </svg>
            </div>

            <h4>Curva Característica del SCR</h4>
            <div class="diagram-container">
                <h4>Figura 3.2: Curva I-V del SCR</h4>
                <svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
                    <!-- Ejes -->
                    <line x1="250" y1="20" x2="250" y2="280" stroke="#8892b0" stroke-width="2"/>
                    <line x1="30" y1="150" x2="470" y2="150" stroke="#8892b0" stroke-width="2"/>
                    <text x="260" y="30" fill="#8892b0" font-size="12">I (A)</text>
                    <text x="440" y="170" fill="#8892b0" font-size="12">V (V)</text>
                    <!-- Región directa -->
                    <path d="M 250 150 L 300 150 Q 340 145 360 90 L 370 20" fill="none" stroke="#64ffda" stroke-width="2.5"/>
                    <text x="340" y="100" fill="#64ffda" font-size="11">Conducción</text>
                    <!-- Región de bloqueo directo -->
                    <path d="M 250 150 L 340 148 L 350 150 L 360 90" fill="none" stroke="#1e90ff" stroke-width="2"/>
                    <text x="300" y="140" fill="#1e90ff" font-size="10">Bloqueo directo</text>
                    <!-- Región inversa -->
                    <path d="M 250 150 L 200 150 Q 150 152 120 160 L 90 250" fill="none" stroke="#dc3545" stroke-width="2"/>
                    <text x="100" y="200" fill="#dc3545" font-size="10">Bloqueo inverso</text>
                    <!-- VBO -->
                    <line x1="360" y1="150" x2="360" y2="90" stroke="#ffc107" stroke-width="1" stroke-dasharray="3,3"/>
                    <text x="365" y="95" fill="#ffc107" font-size="10">VBO</text>
                </svg>
            </div>

            <h3>3.2 El TRIAC y el DIAC</h3>
            <p>El <strong>TRIAC</strong> (Triode for Alternating Current) es esencialmente dos SCR conectados en antiparalelo, lo que le permite conducir corriente en ambas direcciones. Es ideal para aplicaciones de corriente alterna, como el control de potencia en una carga (dimmer).</p>
            <p>El <strong>DIAC</strong> (Diode for Alternating Current) es un dispositivo bidireccional que se utiliza para disparar al TRIAC. Conduce corriente solo cuando la tensión en él supera su tensión de ruptura (VBO), en cualquiera de las dos direcciones. Se conecta en serie con la puerta del TRIAC para asegurar un disparo simétrico en ambos semiciclos de la CA.</p>

            <div class="diagram-container">
                <h4>Figura 3.3: Circuito de Control de Potencia con TRIAC y DIAC</h4>
                <svg width="550" height="280" viewBox="0 0 550 280" xmlns="http://www.w3.org/2000/svg">
                    <!-- Red AC -->
                    <circle cx="60" cy="140" r="25" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <path d="M 50 140 Q 55 130 60 140 Q 65 150 70 140" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="60" y="185" text-anchor="middle" fill="#8892b0" font-size="11">120 Vrms</text>
                    
                    <!-- Carga (bombilla) -->
                    <circle cx="350" cy="60" r="20" fill="none" stroke="#ffc107" stroke-width="2"/>
                    <line x1="335" y1="45" x2="365" y2="75" stroke="#ffc107" stroke-width="2"/>
                    <line x1="365" y1="45" x2="335" y2="75" stroke="#ffc107" stroke-width="2"/>
                    <text x="350" y="95" text-anchor="middle" fill="#ffc107" font-size="11">Carga</text>
                    
                    <!-- TRIAC -->
                    <polygon points="180,80 180,140 230,110" fill="none" stroke="#64ffda" stroke-width="2"/>
                    <line x1="230" y1="110" x2="230" y2="100" stroke="#64ffda" stroke-width="2"/>
                    <line x1="230" y1="120" x2="230" y2="110" stroke="#64ffda" stroke-width="2"/>
                    <line x1="230" y1="110" x2="280" y2="110" stroke="#64ffda" stroke-width="2"/>
                    <line x1="130" y1="110" x2="180" y2="110" stroke="#64ffda" stroke-width="2"/>
                    <line x1="210" y1="130" x2="210" y2="160" stroke="#64ffda" stroke-width="2"/>
                    <text x="200" y="175" fill="#64ffda" font-size="10">G</text>
                    
                    <!-- DIAC -->
                    <polygon points="180,190 220,190 200,220" fill="none" stroke="#1e90ff" stroke-width="2"/>
                    <line x1="180" y1="190" x2="200" y2="190" stroke="#1e90ff" stroke-width="2"/>
                    <line x1="200" y1="190" x2="220" y2="190" stroke="#1e90ff" stroke-width="2"/>
                    <line x1="200" y1="220" x2="200" y2="240" stroke="#1e90ff" stroke-width="2"/>
                    
                    <!-- Red RC -->
                    <rect x="240" y="180" width="30" height="20" fill="none" stroke="#8892b0" stroke-width="2"/>
                    <text x="255" y="175" text-anchor="middle" fill="#8892b0" font-size="10">R</text>
                    <line x1="270" y1="190" x2="320" y2="190" stroke="#8892b0" stroke-width="2"/>
                    <line x1="320" y1="180" x2="320" y2="200" stroke="#8892b0" stroke-width="2"/>
                    <line x1="330" y1="180" x2="330" y2="200" stroke="#8892b0" stroke-width="2"/>
                    <text x="325" y="175" text-anchor="middle" fill="#8892b0" font-size="10">C</text>
                    <line x1="320" y1="190" x2="320" y2="240" stroke="#8892b0" stroke-width="2"/>
                    
                    <!-- Conexiones -->
                    <line x1="85" y1="140" x2="130" y2="140" stroke="#8892b0" stroke-width="2"/>
                    <line x1="130" y1="140" x2="130" y2="110" stroke="#8892b0" stroke-width="2"/>
                    <line x1="280" y1="110" x2="350" y2="110" stroke="#8892b0" stroke-width="2"/>
                    <line x1="350" y1="110" x2="350" y2="80" stroke="#8892b0" stroke-width="2"/>
                    <line x1="350" y1="40" x2="350" y2="20" stroke="#8892b0" stroke-width="2"/>
                    <line x1="350" y1="20" x2="60" y2="20" stroke="#8892b0" stroke-width="2"/>
                    <line x1="60" y1="20" x2="60" y2="115" stroke="#8892b0" stroke-width="2"/>
                </svg>
            </div>

            <h3>3.3 Ejercicios Resueltos</h3>
            
            <h4>Ejercicio Resuelto 1: Cálculo de Potencia en un Circuito con SCR</h4>
            <p><strong>Enunciado:</strong> Un SCR controla una carga resistiva de 50 Ω conectada a una fuente de 120 Vrms. Si el ángulo de disparo es de 90°, calcule la potencia media en la carga.</p>
            <p><strong>Solución:</strong></p>
            <ol>
                <li>La tensión de pico es Vp = 120 × √2 = 169.7 V.</li>
                <li>Para un ángulo de disparo α = 90°, el SCR conduce durante la mitad del semiciclo positivo.</li>
                <li>La potencia media se calcula con la fórmula: P = (Vp² / (2πR)) × (π - α + 0.5 sen(2α)).</li>
                <li>Sustituyendo: P = (169.7² / (2π × 50)) × (π - π/2 + 0.5 sen(π)) = 91.6 × (π/2) = 143.9 W.</li>
                <li><strong>Respuesta:</strong> La potencia media en la carga es aproximadamente 144 W.</li>
            </ol>

            <h4>Ejercicio Resuelto 2: Diseño de un Circuito de Disparo con UJT</h4>
            <p><strong>Enunciado:</strong> Diseñe un circuito de disparo con UJT para un SCR que controle una carga de 120 Vrms a 60 Hz, con un ángulo de disparo de 45°.</p>
            <p><strong>Solución:</strong></p>
            <ol>
                <li>El período de la red es T = 1/60 = 16.7 ms.</li>
                <li>Un ángulo de 45° corresponde a un tiempo t = (45/360) × 16.7 ms = 2.1 ms.</li>
                <li>La constante de tiempo RC del oscilador UJT debe ser tal que el condensador alcance la tensión de disparo en 2.1 ms.</li>
                <li>Elegir R = 10 kΩ y calcular C para que la carga sea lo suficientemente rápida.</li>
                <li><strong>Respuesta:</strong> Se debe ajustar R y C para que la constante de tiempo sea aproximadamente 2.1 ms.</li>
            </ol>

            <h4>Ejercicio Resuelto 3: Análisis de un TRIAC en un Dimmer</h4>
            <p><strong>Enunciado:</strong> Explique cómo funciona un dimmer basado en TRIAC y DIAC, y cómo se controla el nivel de potencia en la carga.</p>
            <p><strong>Solución:</strong></p>
            <ol>
                <li>La red RC (resistencia variable y condensador) produce un retardo de fase en la tensión de disparo.</li>
                <li>El condensador se carga hasta que alcanza la tensión de ruptura del DIAC.</li>
                <li>Cuando el DIAC conduce, descarga el condensador en la puerta del TRIAC, disparándolo.</li>
                <li>El TRIAC conduce durante el resto del semiciclo, entregando potencia a la carga.</li>
                <li>Variando la resistencia variable, se cambia el tiempo de carga del condensador y, por tanto, el ángulo de disparo.</li>
                <li><strong>Respuesta:</strong> El ángulo de disparo controla la porción del semiciclo durante la cual el TRIAC conduce, lo que controla la potencia media entregada a la carga.</li>
            </ol>

            <h3>3.4 Ejercicios Propuestos</h3>
            <ol>
                <li>Un SCR tiene una corriente de mantenimiento de 10 mA. Si la corriente de carga cae a 5 mA, ¿qué sucede con el SCR?</li>
                <li>Dibuje el diagrama de bloques de un sistema de control de potencia para un motor de CC utilizando un SCR.</li>
                <li>Calcule el ángulo de disparo necesario para entregar 50 W a una carga de 100 Ω conectada a 120 Vrms.</li>
                <li>Explique por qué se necesita un DIAC para disparar un TRIAC en un circuito de CA y cómo mejora la simetría del disparo.</li>
                <li>Investigue las diferencias entre un SCR y un IGBT. ¿En qué aplicaciones se utiliza cada uno?</li>
            </ol>

            <h3>3.5 Aplicaciones Biomédicas</h3>
            <h4>Desfibriladores</h4>
            <p>El corazón se desfibrila aplicando un pulso de energía controlado. Un banco de condensadores se carga a alta tensión (por ejemplo, 2000 V) y se descarga a través del tórax del paciente. Los <strong>SCR de alta potencia</strong> se utilizan para conmutar esta energía de manera segura y controlada, formando parte del circuito de descarga. La precisión y fiabilidad de estos componentes son críticas, ya que un fallo podría tener consecuencias fatales.</p>

            <h4>Electrobisturí (Unidad de Electroquirúrgica)</h4>
            <p>Este instrumento utiliza corrientes de alta frecuencia (300 kHz - 3 MHz) para cortar y coagular tejido. Los tiristores o <strong>IGBTs</strong> son los encargados de generar la señal de radiofrecuencia (RF) controlada que se aplica al paciente. La forma de onda y la potencia de la señal se controlan cuidadosamente para lograr el efecto deseado (corte o coagulación) sin dañar el tejido circundante.</p>

            <h4>Equipos de Imagenología (CT, MRI)</h4>
            <p>En las fuentes de alimentación de alta potencia de estos equipos, se utilizan tiristores para controlar grandes campos magnéticos y tubos de rayos X. Los SCR permiten una regulación precisa de la energía, lo que es esencial para obtener imágenes de alta calidad con la mínima dosis de radiación para el paciente.</p>
        `,
        quiz: [
            {
                id: 1,
                question: "¿Cuál es la función principal del DIAC en un circuito de control de potencia con TRIAC?",
                options: [
                    "Rectificar la corriente alterna.",
                    "Amplificar la señal de control.",
                    "Proporcionar un disparo simétrico al TRIAC en ambos semiciclos.",
                    "Limitar la corriente que circula por el TRIAC."
                ],
                correct: 2,
                feedback: "El DIAC se utiliza para disparar al TRIAC de manera simétrica en ambos semiciclos de la corriente alterna, asegurando un control de potencia uniforme."
            },
            {
                id: 2,
                question: "¿Cómo se apaga un SCR que está conduciendo?",
                options: [
                    "Aplicando una tensión negativa en la puerta.",
                    "Reduciendo la corriente de ánodo por debajo de la corriente de mantenimiento (IH).",
                    "Aplicando un pulso positivo en la puerta.",
                    "Desconectando la alimentación de la puerta."
                ],
                correct: 1,
                feedback: "Una vez que un SCR está conduciendo, la puerta pierde el control. Para apagarlo, la corriente principal debe caer por debajo de la corriente de mantenimiento (IH). Esto ocurre naturalmente en CA cuando la señal pasa por cero."
            },
            {
                id: 3,
                question: "¿Cuál es la diferencia principal entre un SCR y un TRIAC?",
                options: [
                    "El SCR es de tres capas y el TRIAC de cuatro.",
                    "El SCR conduce en una dirección, el TRIAC en ambas.",
                    "El SCR se usa en CC, el TRIAC en CA.",
                    "El SCR es de baja potencia, el TRIAC de alta potencia."
                ],
                correct: 1,
                feedback: "El SCR es un dispositivo unidireccional (como un diodo controlado), mientras que el TRIAC es bidireccional, lo que le permite conducir corriente en ambas direcciones. Es ideal para aplicaciones de CA."
            },
            {
                id: 4,
                question: "En un desfibrilador, ¿qué dispositivo se utiliza para conmutar la energía de los condensadores al paciente?",
                options: [
                    "Un transistor bipolar de pequeña señal.",
                    "Un SCR de alta potencia.",
                    "Un diodo rectificador.",
                    "Un amplificador operacional."
                ],
                correct: 1,
                feedback: "Los desfibriladores utilizan SCR de alta potencia para conmutar de manera segura y controlada la energía almacenada en los condensadores hacia el paciente."
            },
            {
                id: 5,
                question: "¿Qué sucede si la corriente de ánodo de un SCR cae por debajo de la corriente de mantenimiento (IH)?",
                options: [
                    "El SCR se destruye.",
                    "El SCR permanece conduciendo.",
                    "El SCR se apaga y vuelve al estado de bloqueo.",
                    "El SCR aumenta su corriente."
                ],
                correct: 2,
                feedback: "Cuando la corriente de ánodo cae por debajo de la corriente de mantenimiento (IH), el SCR pierde la realimentación interna que lo mantenía conduciendo y se apaga, volviendo al estado de bloqueo."
            }
        ]
    }
};