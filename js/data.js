// js/data.js
const contentData = {
    // ================= UNIDAD 1 =================
    'unidad1': `
        <h2>Unidad I: Análisis de Circuitos con Amplificadores Operacionales</h2>
        <p>El amplificador operacional (op-amp) es un bloque fundamental en la electrónica moderna, especialmente en el campo de la instrumentación biomédica, donde se requieren amplificaciones de precisión y alta impedancia de entrada.</p>
        
        <h3>1.1 Conceptos Fundamentales: El Amplificador Diferencial</h3>
        <p>La etapa de entrada de la mayoría de los op-amps es un amplificador diferencial. Este circuito, compuesto por dos transistores que comparten una resistencia de emisor común (la "cola"), es la clave para entender sus propiedades de entrada.</p>
        <ul>
            <li><strong>Amplificación Diferencial:</strong> El circuito amplifica la diferencia entre las dos señales de entrada (v1 - v2) y rechaza las señales que son comunes a ambas entradas.</li>
            <li><strong>Corrientes y Tensiones:</strong> La corriente de cola (IT) se establece mediante una fuente de corriente o una resistencia grande. Cada transistor conduce la mitad de esta corriente (IE = IT/2). Esto fija un punto de operación estable.</li>
            <li><strong>CMRR (Common-Mode Rejection Ratio):</strong> Es la capacidad del amplificador para rechazar señales de ruido que aparecen simultáneamente en ambas entradas. En entornos biomédicos, donde el ruido de la red eléctrica (50/60 Hz) es muy común, un CMRR alto es esencial.</li>
        </ul>
        
        <h3>1.2 El Amplificador Operacional Ideal y sus Configuraciones</h3>
        <p>Un op-amp ideal se caracteriza por tener una ganancia de tensión infinita (AVOL = ∞), impedancia de entrada infinita (Zin = ∞) y una impedancia de salida de cero (Zout = 0). Aunque los dispositivos reales no son perfectos, estas suposiciones simplifican enormemente el análisis.</p>
        
        <p>Las dos configuraciones básicas son:</p>
        <ul>
            <li><strong>Amplificador Inversor:</strong> La señal de entrada se aplica a la entrada inversora a través de una resistencia (R1), y se realimenta desde la salida a la misma entrada a través de Rf. La ganancia de tensión es Av = -Rf/R1. El concepto de <strong>tierra virtual</strong> (la entrada inversora se comporta como tierra sin estar conectada a ella) es clave para su análisis.</li>
            <li><strong>Amplificador No Inversor:</strong> La señal de entrada se aplica a la entrada no inversora. La realimentación se aplica a la entrada inversora. La ganancia es Av = 1 + (Rf/R1). Tiene una impedancia de entrada muy alta, lo cual es una ventaja significativa.</li>
        </ul>

        <div class="diagram-container">
            <h4>Diagrama Esquemático: Amplificador No Inversor</h4>
            <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Triángulo del Op-Amp -->
                <polygon points="100,40 100,160 220,100" fill="none" stroke="#64ffda" stroke-width="3"/>
                <!-- Entradas -->
                <line x1="60" y1="70" x2="100" y2="70" stroke="#ccd6f6" stroke-width="2"/>
                <line x1="60" y1="130" x2="100" y2="130" stroke="#ccd6f6" stroke-width="2"/>
                <text x="50" y="75" fill="#8892b0" font-size="12">v1 (+)</text>
                <text x="50" y="135" fill="#8892b0" font-size="12">v2 (-)</text>
                <!-- Salida -->
                <line x1="220" y1="100" x2="280" y2="100" stroke="#ccd6f6" stroke-width="2"/>
                <text x="285" y="105" fill="#ccd6f6" font-size="12">vout</text>
                <!-- Realimentación -->
                <line x1="200" y1="100" x2="200" y2="40" stroke="#ccd6f6" stroke-width="2"/>
                <line x1="200" y1="40" x2="120" y2="40" stroke="#ccd6f6" stroke-width="2"/>
                <line x1="120" y1="40" x2="120" y2="130" stroke="#ccd6f6" stroke-width="2"/>
                <!-- Resistencia R1 -->
                <rect x="120" y="90" width="10" height="30" fill="none" stroke="#8892b0" stroke-width="1.5"/>
                <text x="110" y="105" fill="#8892b0" font-size="10">R1</text>
                <!-- Resistencia Rf -->
                <rect x="150" y="30" width="30" height="10" fill="none" stroke="#8892b0" stroke-width="1.5"/>
                <text x="155" y="25" fill="#8892b0" font-size="10">Rf</text>
                <!-- Tierra virtual -->
                <line x1="120" y1="130" x2="120" y2="170" stroke="#8892b0" stroke-width="1.5"/>
                <line x1="110" y1="170" x2="130" y2="170" stroke="#8892b0" stroke-width="1.5"/>
                <line x1="113" y1="175" x2="127" y2="175" stroke="#8892b0" stroke-width="1.5"/>
            </svg>
        </div>

        <h3>1.3 Aplicaciones Biomédicas</h3>
        <p>Los amplificadores operacionales son el pilar de los instrumentos médicos. Un ejemplo clásico es el <strong>amplificador de biopotenciales</strong> utilizado en un <strong>Electrocardiograma (ECG)</strong>.</p>
        <p>La señal del corazón es muy débil (del orden de 0.2 a 2 mV), mientras que el ruido de modo común (como la interferencia de la red eléctrica a 50/60 Hz) puede ser de varios voltios.</p>
        <ul>
            <li><strong>Amplificador de Instrumentación (INA):</strong> Se construye con tres op-amps y se utiliza como la primera etapa de un ECG. Su diseño proporciona una <strong>impedancia de entrada muy alta</strong> para no cargar los electrodos del paciente y un <strong>CMRR muy alto</strong> para eliminar el ruido de modo común.</li>
            <li><strong>Circuito de "Pierna Derecha":</strong> Es un circuito de realimentación activa que inyecta una señal de modo común invertida en el paciente a través de un electrodo en la pierna derecha. Esto reduce el voltaje de modo común en el cuerpo, mejorando aún más la relación señal-ruido.</li>
            <li><strong>Filtros Activos:</strong> Después de la amplificación, se utilizan filtros activos (como los de la Unidad II) para eliminar el ruido de alta frecuencia y la deriva de la línea base, dejando solo la señal del ECG.</li>
        </ul>
        <p>El diseño de estos circuitos de acondicionamiento de señal es fundamental para obtener lecturas precisas y seguras en equipos médicos como monitores de signos vitales y electrocardiógrafos[reference:0][reference:1].</p>
    `,

    // ================= UNIDAD 2 =================
    'unidad2': `
        <h2>Unidad II: Filtros Activos</h2>
        <p>Los filtros son circuitos que permiten el paso de un rango de frecuencias (banda de paso) mientras atenúan otras (banda eliminada). Los filtros activos utilizan amplificadores operacionales, lo que les permite tener ganancia y evitar el uso de bobinas voluminosas, a diferencia de los filtros pasivos.</p>

        <h3>2.1 Función de Transferencia y Diagramas de Bode</h3>
        <p>La <strong>función de transferencia</strong>, H(s), es la relación entre la salida y la entrada de un circuito en el dominio de Laplace. Para señales sinusoidales, se evalúa en s = jω, donde ω = 2πf. Describe cómo el circuito modifica la amplitud y la fase de la señal de entrada en función de la frecuencia.</p>
        <p>El <strong>diagrama de Bode</strong> es una representación gráfica de la función de transferencia. Consta de dos gráficas:
        <ul>
            <li><strong>Gráfica de Magnitud:</strong> Muestra la ganancia en decibelios (dB) vs. frecuencia (escala logarítmica).</li>
            <li><strong>Gráfica de Fase:</strong> Muestra el desplazamiento de fase en grados vs. frecuencia (escala logarítmica).</li>
        </ul>
        El punto clave es la <strong>frecuencia de corte (fc)</strong>, donde la ganancia cae 3 dB (a 0.707 de su valor máximo). La pendiente de caída típica de un filtro de primer orden es de -20 dB por década.</p>

        <h3>2.2 Filtros Activos de Primer y Segundo Orden</h3>
        <p>La diferencia principal entre los filtros de primer y segundo orden radica en su selectividad (qué tan rápido caen en la banda eliminada).</p>
        <ul>
            <li><strong>Filtros de Primer Orden:</strong> Utilizan una sola etapa RC. Tienen una pendiente de caída de -20 dB/década. Son simples pero poco selectivos.</li>
            <li><strong>Filtros de Segundo Orden:</strong> Utilizan dos etapas RC o configuraciones más complejas (como Sallen-Key). Tienen una pendiente de -40 dB/década, siendo mucho más selectivos. Además, pueden presentar picos de resonancia en la banda de paso (factor Q > 0.707).</li>
        </ul>
        <p>Las aproximaciones más comunes son <strong>Butterworth</strong> (respuesta maximalmente plana), <strong>Chebyshev</strong> (rizado en la banda de paso, caída más pronunciada) y <strong>Bessel</strong> (fase lineal, ideal para señales digitales).</p>

        <div class="diagram-container">
            <h4>Comparativa de Respuestas de Filtros Paso Bajo</h4>
            <svg width="500" height="250" viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
                <!-- Ejes -->
                <line x1="50" y1="200" x2="450" y2="200" stroke="#8892b0" stroke-width="2"/>
                <line x1="50" y1="200" x2="50" y2="20" stroke="#8892b0" stroke-width="2"/>
                <text x="430" y="220" fill="#8892b0" font-size="12">Frecuencia (log)</text>
                <text x="10" y="20" fill="#8892b0" font-size="12">|H(s)| (dB)</text>
                <!-- Curva Butterworth -->
                <path d="M 50 150 L 150 150 Q 200 150 250 100 L 400 30" fill="none" stroke="#64ffda" stroke-width="2.5"/>
                <text x="300" y="60" fill="#64ffda" font-size="12">Butterworth</text>
                <!-- Curva Chebyshev -->
                <path d="M 50 150 L 100 150 Q 120 140 140 150 Q 160 140 180 150 Q 200 140 220 150 L 300 90 L 400 20" fill="none" stroke="#1e90ff" stroke-width="2.5"/>
                <text x="300" y="100" fill="#1e90ff" font-size="12">Chebyshev</text>
                <!-- Curva Bessel -->
                <path d="M 50 150 L 200 150 Q 280 150 320 110 L 400 50" fill="none" stroke="#ffc107" stroke-width="2.5"/>
                <text x="300" y="130" fill="#ffc107" font-size="12">Bessel</text>
                <!-- Línea -3dB -->
                <line x1="50" y1="120" x2="450" y2="120" stroke="#dc3545" stroke-width="1" stroke-dasharray="5,5"/>
                <text x="55" y="115" fill="#dc3545" font-size="10">-3 dB</text>
            </svg>
        </div>

        <h3>2.3 Aplicaciones Biomédicas</h3>
        <p>En el procesamiento de señales biomédicas, los filtros activos son indispensables para aislar la información útil.</p>
        <ul>
            <li><strong>Electrocardiograma (ECG):</strong> Se usan filtros paso bajo para eliminar el ruido muscular (EMG) de alta frecuencia y filtros paso alto para eliminar la deriva de la línea base causada por el movimiento del paciente o la respiración. La banda de paso típica para un ECG diagnóstico es de 0.05 Hz a 150 Hz.</li>
            <li><strong>Electroencefalograma (EEG):</strong> Las señales cerebrales son aún más débiles y se dividen en bandas de frecuencia (Delta, Theta, Alpha, Beta). Se utilizan filtros paso banda muy selectivos para analizar cada una de estas bandas.</li>
            <li><strong>Fotopletismografía (PPG):</strong> Utilizada en pulsioxímetros para medir la saturación de oxígeno. La señal de PPG contiene una componente DC (debida al tejido) y una componente AC (debida al pulso sanguíneo). Se usa un filtro paso alto para separar la componente de pulso y medir la frecuencia cardíaca.</li>
            <li><strong>Filtros de Hendidura (Notch):</strong> Para eliminar la interferencia de la red eléctrica (50/60 Hz) que contamina las señales biomédicas, se diseña un filtro de banda eliminada muy estrecho (notch filter) sintonizado exactamente a esa frecuencia[reference:2].</li>
        </ul>
    `,

    // ================= UNIDAD 3 =================
    'unidad3': `
        <h2>Unidad III: Tiristores, Conmutadores de Control</h2>
        <p>Los tiristores son dispositivos semiconductores de potencia que funcionan como interruptores controlados. A diferencia de un transistor bipolar, una vez que un tiristor se activa (se dispara), permanece conduciendo incluso si se retira la señal de control, hasta que la corriente que lo atraviesa cae por debajo de un umbral (corriente de mantenimiento).</p>

        <h3>3.1 El Rectificador Controlado de Silicio (SCR)</h3>
        <p>El SCR es el tiristor más utilizado. Es un dispositivo de cuatro capas (p-n-p-n) con tres terminales: Ánodo, Cátodo y Puerta.</p>
        <ul>
            <li><strong>Funcionamiento:</strong> El SCR bloquea la corriente en ambas direcciones hasta que se aplica un pequeño pulso de corriente en la puerta (IGT) y la tensión ánodo-cátodo es positiva. En ese momento, el SCR se "enciende" (se ceba) y se comporta como un diodo en conducción.</li>
            <li><strong>Bloqueo:</strong> Para apagar un SCR, la corriente principal debe caer por debajo de la corriente de mantenimiento (IH). Esto se logra normalmente cuando la señal de CA que alimenta al SCR pasa por cero.</li>
            <li><strong>Aplicaciones:</strong> Control de motores, dimmers de luz, cargadores de baterías y fuentes de alimentación reguladas.</li>
        </ul>

        <h3>3.2 El TRIAC y el DIAC</h3>
        <p>El <strong>TRIAC</strong> es esencialmente dos SCR conectados en antiparalelo, lo que le permite conducir corriente en ambas direcciones. Es ideal para aplicaciones de corriente alterna, como el control de potencia en una carga (dimmer).</p>
        <p>El <strong>DIAC</strong> es un dispositivo bidireccional que se utiliza para disparar al TRIAC. Conduce corriente solo cuando la tensión en él supera su tensión de ruptura (VBO), en cualquiera de las dos direcciones. Se conecta en serie con la puerta del TRIAC para asegurar un disparo simétrico en ambos semiciclos de la CA.</p>

        <h3>3.3 Aplicaciones Biomédicas</h3>
        <p>Los tiristores juegan un papel crítico en equipos médicos que requieren el control de altas potencias o tensiones.</p>
        <ul>
            <li><strong>Desfibriladores:</strong> En un desfibrilador externo, un banco de condensadores se carga a una alta tensión (por ejemplo, 2000 V) y luego se descarga a través del paciente en un pulso controlado. Se utilizan SCRs de alta potencia en la configuración de puente en H para conmutar esta energía de manera segura y controlada hacia los electrodos[reference:3].</li>
            <li><strong>Marcapasos Implantables:</strong> Aunque los marcapasos modernos son muy sofisticados, los primeros diseños y algunos circuitos de protección utilizan SCRs para manejar los pulsos de estimulación y proteger los circuitos sensibles del dispositivo[reference:4].</li>
            <li><strong>Unidades de Electroquirúrgica (Bisturí Eléctrico):</strong> Estos dispositivos utilizan corrientes de alta frecuencia para cortar y coagular tejido. Los tiristores o los IGBTs (que estudiaremos más adelante) son los encargados de generar la señal de radiofrecuencia (RF) controlada que se aplica al paciente.</li>
            <li><strong>Equipos de Imagenología:</strong> En equipos como los de Tomografía Computarizada (CT) o Resonancia Magnética (MRI), se utilizan tiristores en las fuentes de alimentación de alta potencia para controlar los grandes campos magnéticos y los tubos de rayos X.</li>
        </ul>
        <p>Es crucial que estos componentes en equipos médicos tengan una alta fiabilidad, ya que un fallo podría poner en riesgo la vida del paciente[reference:5].</p>

        <h3>Ejercicios Propuestos</h3>
        <ol>
            <li><strong>Ejercicio 1 (Unidad I):</strong> Diseñe un amplificador no inversor con una ganancia de 11. Si la señal de entrada es de 10 mV, ¿cuál será la señal de salida? Dibuje el circuito esquemático con los valores de resistencias calculados.</li>
            <li><strong>Ejercicio 2 (Unidad II):</strong> Se necesita un filtro paso bajo con una frecuencia de corte de 100 Hz y una ganancia en la banda de paso de 2. Diseñe un filtro de Sallen-Key de primer orden. Determine los valores de R y C.</li>
            <li><strong>Ejercicio 3 (Unidad III):</strong> Explique cómo funcionaría un circuito dimmer de luz basado en TRIAC y DIAC. ¿Cómo se controla el nivel de potencia en la carga (bombilla)?</li>
        </ol>
    `
};