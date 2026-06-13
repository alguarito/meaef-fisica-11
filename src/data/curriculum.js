// MEAEF — Base de datos de contenido curricular completa
// 4 Periodos × 10 semanas × 2 sesiones

export const PERIODOS = [
  {
    id: 1,
    titulo: 'Hidrodinámica y Territorio',
    subtitulo: 'Semanas 1–10',
    descripcion: 'Estudia los fluidos en reposo y en movimiento aplicados al diseño de acueductos rurales comunitarios en tu región.',
    emoji: '💧',
    imagen: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=85&auto=format&fit=crop',
    color: '#0ea5e9',
    colorDark: '#0369a1',
    gradient: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
    contextoCSC: 'La matriz hídrica colombiana y el acceso al agua en zonas rurales',
    phet: [
      { nombre: 'Bajo Presión', url: 'https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_es.html', emoji: '🔵' },
      { nombre: 'Flotabilidad', url: 'https://phet.colorado.edu/sims/html/buoyancy/latest/buoyancy_es.html', emoji: '🚢' },
      { nombre: 'Flujo de Fluidos', url: 'https://phet.colorado.edu/sims/html/fluid-pressure-and-flow/latest/fluid-pressure-and-flow_es.html', emoji: '🌊' }
    ],
    semanas: [
      {
        numero: 1,
        titulo: 'La Hidrostática y el Agua',
        sesionA: {
          titulo: 'Presión hidrostática — La física del agua en reposo',
          teoria: `
La **presión hidrostática** es la fuerza que ejerce un fluido en reposo sobre cualquier superficie con la que esté en contacto. Esta propiedad es fundamental para entender cómo funcionan los acueductos rurales en Colombia.

**Fórmula fundamental:**
$$P = \\rho \\cdot g \\cdot h$$

Donde:
- **P** = Presión (Pascales, Pa)
- **ρ** = Densidad del fluido (kg/m³) — Para agua: 1000 kg/m³
- **g** = Aceleración gravitacional (9.8 m/s²)
- **h** = Profundidad o altura de la columna de agua (m)

**Contexto territorial:** En muchas veredas de Colombia, el agua se capta en quebradas o ríos de montaña y se distribuye por gravedad. La altura del depósito sobre las casas determina la presión disponible en los grifos.

**Historia de la ciencia:** Blaise Pascal (1623–1662) formuló el principio que lleva su nombre: *"La presión aplicada a un fluido encerrado se transmite íntegramente a todos los puntos del fluido y a las paredes del recipiente"*.

**Conexión CSC:** ¿Por qué algunas comunidades rurales tienen mejor presión de agua que otras? ¿Cómo influye la geografía de tu municipio?`,
          preguntas: [
            '¿Qué sucede con la presión del agua a medida que una pipa sube a una montaña?',
            '¿Por qué los tanques de acueducto se construyen en la parte alta de las colinas?',
            '¿Cómo cambiaría la presión del agua si llenamos el tanque con aceite en lugar de agua?'
          ]
        },
        sesionB: {
          phetIndex: 0,
          objetivo: 'Explorar cómo cambia la presión en función de la profundidad y la densidad del fluido',
          hiemId: 'p1-s1'
        }
      },
      {
        numero: 2,
        titulo: 'Principio de Pascal',
        sesionA: {
          titulo: 'El Principio de Pascal y sus aplicaciones',
          teoria: `
El **Principio de Pascal** establece que cuando se aplica presión a un fluido confinado, esta se transmite íntegramente en todas las direcciones y a todas las partes del fluido.

**Aplicación tecnológica:** Los frenos hidráulicos, los elevadores hidráulicos de los talleres y las prensas industriales funcionan gracias a este principio.

**Ecuación del sistema hidráulico:**
$$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$

**Contexto colombiano:** Las bombas manuales de agua que se usan en zonas sin electricidad (como las zonas rurales de La Guajira) aplican el principio de Pascal para elevar el agua desde pozos subterráneos.

**Dato histórico:** Denis Papin (1647–1712) desarrolló el primer prototipo de máquina de vapor basándose en la presión de fluidos, lo que más tarde revolucionaría la industria mundial.`,
          preguntas: [
            '¿Cómo puede una persona levantar un carro usando solo la fuerza de su mano gracias a la hidráulica?',
            '¿Qué pasaría si hubiera una burbuja de aire atrapada en el sistema de frenos de una bicicleta?',
            '¿De qué manera se aplica el principio de Pascal en los sistemas de irrigación por goteo?'
          ]
        },
        sesionB: {
          phetIndex: 0,
          objetivo: 'Verificar experimentalmente el Principio de Pascal usando el simulador de presión',
          hiemId: 'p1-s2'
        }
      },
      {
        numero: 3,
        titulo: 'Flotabilidad y Principio de Arquímedes',
        sesionA: {
          titulo: 'El Principio de Arquímedes — ¿Por qué flota?',
          teoria: `
El **Principio de Arquímedes** establece que todo cuerpo sumergido en un fluido experimenta un empuje vertical hacia arriba igual al peso del fluido desplazado.

$$E = \\rho_{fluido} \\cdot g \\cdot V_{sumergido}$$

**Condiciones de flotabilidad:**
- Si **E > W** → El cuerpo flota
- Si **E = W** → El cuerpo queda en equilibrio
- Si **E < W** → El cuerpo se hunde

**Historia:** Arquímedes de Siracusa (287–212 a.C.) descubrió este principio al sumergirse en un baño. Según la leyenda, salió corriendo por las calles gritando "¡Eureka!" (¡lo encontré!).

**Aplicación local:** Las balsas de guadua que usan algunas comunidades del Pacífico colombiano para transportar mercancías aplican este principio. La densidad de la guadua (≈ 600 kg/m³) es menor que la del agua, lo que garantiza su flotabilidad.`,
          preguntas: [
            '¿Por qué los barcos de acero flotan si el acero es mucho más denso que el agua?',
            '¿Cómo miden los agricultores la densidad del suelo usando el principio de Arquímedes?',
            '¿Por qué es más fácil flotar en el mar que en un río?'
          ]
        },
        sesionB: {
          phetIndex: 1,
          objetivo: 'Investigar la relación entre densidad, volumen sumergido y fuerza de empuje',
          hiemId: 'p1-s3'
        }
      },
      {
        numero: 4,
        titulo: 'Fluidos en Movimiento',
        sesionA: {
          titulo: 'Hidrodinámica — La física del agua que fluye',
          teoria: `
La **hidrodinámica** estudia el movimiento de los fluidos. Cuando el agua fluye por una tubería, su comportamiento está gobernado por la ecuación de continuidad y el principio de Bernoulli.

**Ecuación de Continuidad** (conservación de masa):
$$A_1 \\cdot v_1 = A_2 \\cdot v_2$$

Esto explica por qué el agua sale más rápido de una manguera cuando tapas parte de su salida con el dedo.

**Tipos de flujo:**
- **Laminar:** Las capas de fluido se mueven paralelas sin mezclarse (agua en calma)
- **Turbulento:** El fluido se mueve de forma caótica (rápidos y cascadas)

**Número de Reynolds:** Determina si el flujo es laminar o turbulento
$$Re = \\frac{\\rho \\cdot v \\cdot D}{\\mu}$$

**Aplicación local:** Los acueductos veredales de Colombia deben diseñarse para mantener flujo laminar en las tuberías para evitar erosión y pérdida de presión.`,
          preguntas: [
            '¿Por qué el agua de un río fluye más rápido en las zonas estrechas?',
            '¿Qué tipo de flujo es más eficiente para transportar agua en acueductos: laminar o turbulento?',
            '¿Cómo afecta la rugosidad interna de la tubería al flujo del agua?'
          ]
        },
        sesionB: {
          phetIndex: 2,
          objetivo: 'Explorar la relación entre el área de la tubería y la velocidad del fluido',
          hiemId: 'p1-s4'
        }
      },
      {
        numero: 5,
        titulo: 'Ecuación de Bernoulli',
        sesionA: {
          titulo: 'Bernoulli — La energía de los fluidos',
          teoria: `
La **Ecuación de Bernoulli** es una de las más importantes de la física clásica. Establece que en un fluido ideal en movimiento, la suma de la presión, la energía cinética y la energía potencial por unidad de volumen es constante.

$$P + \\frac{1}{2}\\rho v^2 + \\rho g h = constante$$

**Interpretación física:** Donde el fluido va más rápido, hay menos presión. ¡Esto explica cómo vuelan los aviones!

**Daniel Bernoulli** (1700–1782), matemático suizo, publicó esta relación en su obra "Hydrodynamica" en 1738.

**Aplicaciones cotidianas:**
- **Aerodinámica:** El perfil alar de los aviones crea diferencia de velocidades para generar sustentación
- **Tuberías Venturi:** Usadas para medir el caudal de agua en acueductos y sistemas industriales
- **Aspersores:** Los sistemas de riego por aspersión usan la presión diferencial para distribuir el agua
- **Atomizadores:** Los perfumes y pinturas en spray aprovechan el efecto Bernoulli`,
          preguntas: [
            '¿Por qué las dunas de arena no se forman en la parte más estrecha de un río?',
            '¿Cómo usa Bernoulli un arquitecto al diseñar la ventilación natural de una casa rural?',
            '¿De qué manera el efecto Venturi puede servir para medir el agua que consume una vereda?'
          ]
        },
        sesionB: {
          phetIndex: 2,
          objetivo: 'Verificar la ecuación de Bernoulli midiendo velocidad y presión en distintas secciones',
          hiemId: 'p1-s5'
        }
      },
      {
        numero: 6,
        titulo: 'Viscosidad y Fluidos Reales',
        sesionA: {
          titulo: 'Viscosidad — La resistencia interna de los fluidos',
          teoria: `
La **viscosidad** es la resistencia que opone un fluido a fluir. Es la "fricción interna" entre las capas del fluido.

**Ley de Stokes:**
$$F_{viscosa} = 6\\pi \\eta r v$$

Donde η es el coeficiente de viscosidad (Pa·s), r el radio de la partícula y v su velocidad.

**Viscosidades comparativas:**
- Agua (20°C): η = 1.0 × 10⁻³ Pa·s
- Aceite de motor: η ≈ 0.1–0.3 Pa·s
- Miel: η ≈ 2–10 Pa·s
- Asfalto: η ≈ 10⁸ Pa·s

**Contexto MEAEF:** La viscosidad del petróleo crudo varía con la temperatura, lo que tiene implicaciones directas en el transporte por oleoductos en Colombia (Oleoducto Colombia, Trasandino).

**Fluidos no-newtonianos:** La maicena disuelta en agua es un fluido no-newtoniano: si la golpeas con fuerza, se comporta como sólido, pero si la manipulas lentamente, fluye.`,
          preguntas: [
            '¿Por qué el aceite de cocina fluye más despacio que el agua a temperatura ambiente?',
            '¿Cómo cambia la viscosidad del petróleo con la temperatura y qué implicaciones tiene esto para los oleoductos?',
            '¿Por qué algunos alimentos (como la salsa de tomate) son más fáciles de sacar del frasco si lo golpeas?'
          ]
        },
        sesionB: {
          phetIndex: 1,
          objetivo: 'Comparar el comportamiento de fluidos de diferente densidad y analizar su flotabilidad',
          hiemId: 'p1-s6'
        }
      },
      {
        numero: 7,
        titulo: 'Fenómenos de Superficie',
        sesionA: {
          titulo: 'Tensión superficial y capilaridad',
          teoria: `
La **tensión superficial** es la propiedad de la superficie de un líquido de contraerse para ocupar el menor área posible, como consecuencia de la cohesión entre moléculas.

$$\\gamma = \\frac{F}{L}$$

La **capilaridad** es el ascenso o descenso de líquidos en tubos de pequeño diámetro, resultado del balance entre adhesión (líquido-sólido) y cohesión (líquido-líquido).

**Ecuación de Jurin:**
$$h = \\frac{2\\gamma \\cos\\theta}{\\rho g r}$$

**Aplicaciones ecosistémicas:**
- El suelo absorbe el agua de lluvia por capilaridad — fundamental para la agricultura colombiana
- Las plantas transportan agua desde las raíces hasta las hojas por capilaridad (xilema)
- Los insectos acuáticos como el escarabajo del agua caminan sobre la superficie del agua gracias a la tensión superficial

**Contexto local:** La absorción de agua por la tierra está directamente relacionada con el fenómeno de El Niño y La Niña, que afecta los ciclos hídricos colombianos.`,
          preguntas: [
            '¿Por qué una aguja de acero puede flotar sobre el agua si la colocas con cuidado?',
            '¿Cómo usan las plantas la capilaridad para sobrevivir durante las sequías?',
            '¿De qué manera la tensión superficial afecta la eficiencia de los sistemas de riego por goteo?'
          ]
        },
        sesionB: {
          phetIndex: 0,
          objetivo: 'Investigar los efectos de la presión en fluidos a diferentes alturas',
          hiemId: 'p1-s7'
        }
      },
      {
        numero: 8,
        titulo: 'Caudal y Diseño de Acueductos',
        sesionA: {
          titulo: 'Diseño de sistemas hídricos rurales',
          teoria: `
El **caudal** (Q) es el volumen de fluido que pasa por una sección transversal por unidad de tiempo.

$$Q = A \\cdot v \\quad [m^3/s]$$

**Diseño de un acueducto veredal:**

Un sistema de acueducto por gravedad tiene componentes clave:
1. **Bocatoma:** Captura el agua de la fuente (río, quebrada)
2. **Desarenador:** Elimina partículas sólidas
3. **Tanque de almacenamiento:** Regula el suministro
4. **Red de distribución:** Lleva el agua a cada hogar

**Cálculo de necesidades hídrica:**
- Consumo mínimo por persona: 50 L/día (norma OMS)
- Para una vereda de 200 personas: Q_mín = 200 × 50 L/día ÷ 86400 s = 0.116 L/s

**Proyecto STEM:** Los Guardianes del Sistema diseñarán el acueducto de una vereda ficticia de 250 habitantes ubicada a 1200 m de la fuente de agua y con un desnivel de 80 metros.`,
          preguntas: [
            '¿Cuántos litros por segundo necesita un acueducto para abastecer a tu vereda o barrio?',
            '¿Qué factores se deben considerar al elegir el diámetro de las tuberías de distribución?',
            '¿Cómo afecta la calidad del agua a la salud de una comunidad y qué pueden hacer para mejorarla?'
          ]
        },
        sesionB: {
          phetIndex: 2,
          objetivo: 'Calcular el caudal óptimo para abastecer a una comunidad usando el simulador de flujo',
          hiemId: 'p1-s8'
        }
      },
      {
        numero: 9,
        titulo: 'Crisis Hídrica y Cambio Climático',
        sesionA: {
          titulo: 'El agua en Colombia — riqueza y amenazas',
          teoria: `
Colombia es el **sexto país más rico en agua dulce del mundo**, con el 10% de las reservas de agua dulce del planeta. Sin embargo, paradójicamente, millones de colombianos no tienen acceso garantizado al agua potable.

**¿Por qué esta paradoja?**
- Distribución geográfica desigual (80% del agua está en el Amazonas y la Orinoquía)
- Degradación de páramos y humedales
- Contaminación de fuentes hídricas por minería y agroindustria
- Impactos del cambio climático (El Niño causa sequías severas)

**El Fenómeno del Niño y Colombia:**
Cuando el Pacífico tropical se calienta (El Niño), Colombia experimenta:
- Reducción de lluvias en la región Andina y Caribe
- Disminución de caudales en ríos y embalses
- Crisis en la generación de energía hidroeléctrica (Colombia genera el 70% de su electricidad así)

**Huella hídrica:** El agua que se usa para producir los bienes que consumimos:
- 1 kg de carne de res: 15.400 litros
- 1 kg de arroz: 1.670 litros
- 1 taza de café: 140 litros (Colombia es el 3er productor mundial)`,
          preguntas: [
            '¿Por qué Colombia, siendo tan rica en agua, tiene problemas de abastecimiento en muchas regiones?',
            '¿Qué acciones concretas puede tomar tu comunidad para conservar las fuentes de agua?',
            '¿Cómo afecta el cultivo de café, cacao o arroz a la disponibilidad de agua en tu región?'
          ]
        },
        sesionB: {
          phetIndex: 0,
          objetivo: 'Modelar cómo la presión del agua cambia con la disponibilidad del recurso hídrico',
          hiemId: 'p1-s9'
        }
      },
      {
        numero: 10,
        titulo: 'Proyecto ABP — Acueducto Veredal',
        sesionA: {
          titulo: 'Presentación del Proyecto ABP — Guardianes del Agua',
          teoria: `
## Proyecto Integrador: "Acueducto para la Vereda Los Pinos"

**Escenario:** La vereda Los Pinos (300 habitantes) en el municipio de Planeta Rica, Córdoba, perdió su acueducto en la última temporada de lluvias. Como ingenieros del equipo "Guardianes del Sistema", deben diseñar un nuevo sistema.

**Datos del territorio:**
- Fuente hídrica: Quebrada El Naranjal, caudal mínimo: 8 L/s
- Distancia: 2.8 km desde la bocatoma al centro poblado
- Desnivel: +95 m (la fuente está más alta que las viviendas)
- Número de viviendas: 72 (promedio 4.2 personas por hogar)
- Acceso a energía eléctrica: Solo 4 horas al día (generador comunitario)

**Roles del equipo Guardianes del Sistema:**
- 🔧 **Ingeniero/a de Planta:** Calcula diámetros de tuberías, caudales y presiones
- 📊 **Científico/a de Datos:** Analiza datos de precipitación y calidad del agua
- 🌿 **Especialista Ambiental:** Evalúa impacto ecosistémico de la captación
- 📋 **Director/a de Regulación:** Verifica normas del RAS (Reglamento Agua y Saneamiento)

**Entregable final:** Informe técnico con esquema del sistema, cálculos hidráulicos y análisis de impacto ambiental.`,
          preguntas: [
            '¿Cuál es el caudal mínimo necesario para abastecer la vereda Los Pinos con el estándar de 50 L/persona/día?',
            '¿Qué diámetro de tubería recomendarías para minimizar pérdidas de carga en los 2.8 km?',
            '¿Qué medidas ambientales propondrías para proteger la quebrada El Naranjal?'
          ]
        },
        sesionB: {
          phetIndex: 2,
          objetivo: 'Simular el sistema de distribución del acueducto y validar los cálculos del equipo',
          hiemId: 'p1-s10'
        }
      }
    ]
  },
  {
    id: 2,
    titulo: 'Termodinámica y Clima',
    subtitulo: 'Semanas 11–20',
    descripcion: 'Explora las leyes de la termodinámica y su relación con el balance radiativo terrestre, el cambio climático y la eficiencia de los sistemas energéticos.',
    emoji: '🌡️',
    imagen: 'https://images.unsplash.com/photo-1538991383142-36c4edeaffde?w=1200&q=85&auto=format&fit=crop',
    color: '#f97316',
    colorDark: '#c2410c',
    gradient: 'linear-gradient(135deg, #f97316, #c2410c)',
    contextoCSC: 'El cambio climático y la transición energética en Colombia',
    phet: [
      { nombre: 'Estados de la Materia', url: 'https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_es.html', emoji: '🧪' },
      { nombre: 'Formas de Energía', url: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_es.html', emoji: '⚡' },
      { nombre: 'Propiedades de los Gases', url: 'https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_es.html', emoji: '💨' }
    ],
    semanas: [
      {
        numero: 1,
        titulo: 'Temperatura y Calor',
        sesionA: {
          titulo: 'La diferencia entre temperatura y calor',
          teoria: `
Aunque en el lenguaje cotidiano usamos temperatura y calor como sinónimos, en física son conceptos fundamentalmente distintos.

**Temperatura:** Medida del movimiento promedio de las moléculas de un cuerpo. Es una propiedad del sistema.
- Escala Celsius: basada en el punto de fusión (0°C) y ebullición (100°C) del agua
- Escala Kelvin: temperatura absoluta, 0 K = -273.15°C (cero absoluto)
  $$T(K) = T(°C) + 273.15$$

**Calor (Q):** Energía térmica en tránsito entre dos cuerpos por diferencia de temperatura. Es un proceso, no una propiedad.
$$Q = m \\cdot c \\cdot \\Delta T$$

Donde **c** es el calor específico (J/kg·°C):
- Agua: c = 4186 J/kg·°C (el más alto de los líquidos comunes)
- Hierro: c = 450 J/kg·°C
- Tierra seca: c ≈ 800 J/kg·°C

**¿Por qué el agua tiene calor específico tan alto?** Esta propiedad hace que los océanos y cuerpos de agua regulen el clima planetario, absorbiendo calor en verano y liberándolo en invierno.`,
          preguntas: [
            '¿Por qué el mar tarda más en calentarse que la arena de la playa bajo el mismo sol?',
            '¿Cuánta energía (en joules) se necesita para calentar el agua de una ducha (15 litros) de 18°C a 38°C?',
            '¿Por qué las ciudades costeras de Colombia tienen temperaturas más estables que las ciudades del interior?'
          ]
        },
        sesionB: { phetIndex: 0, objetivo: 'Explorar cómo el movimiento molecular se relaciona con la temperatura en diferentes estados', hiemId: 'p2-s1' }
      },
      {
        numero: 2,
        titulo: 'Primera Ley de la Termodinámica',
        sesionA: {
          titulo: 'Conservación de la energía — La Primera Ley',
          teoria: `
La **Primera Ley de la Termodinámica** es la conservación de la energía aplicada a sistemas termodinámicos:

$$\\Delta U = Q - W$$

Donde:
- **ΔU** = Variación de la energía interna del sistema
- **Q** = Calor absorbido por el sistema (+) o cedido (-)
- **W** = Trabajo realizado por el sistema (+) o sobre él (-)

**Procesos termodinámicos:**
| Proceso | Condición | Relación |
|---------|-----------|---------|
| Isocórico | V = cte | W=0, ΔU=Q |
| Isobárico | P = cte | Q=ΔU+PΔV |
| Isotérmico | T = cte | ΔU=0, Q=W |
| Adiabático | Q = 0 | ΔU=-W |

**Aplicación climática:** La atmósfera terrestre funciona como un sistema termodinámico. El calor solar que entra (Q) debe balancearse con el calor que la Tierra irradia al espacio. El efecto invernadero altera este balance.`,
          preguntas: [
            '¿Qué le sucede a la temperatura del aire cuando sube a una montaña (proceso adiabático)?',
            '¿Por qué los nevados colombianos como el del Ruiz están retrocediendo? ¿Qué tiene que ver la Primera Ley?',
            '¿Cómo funciona una nevera en términos de la Primera Ley de la Termodinámica?'
          ]
        },
        sesionB: { phetIndex: 1, objetivo: 'Rastrear la transformación de energía entre calor, trabajo y energía interna', hiemId: 'p2-s2' }
      },
      {
        numero: 3,
        titulo: 'Segunda Ley y Entropía',
        sesionA: {
          titulo: 'La Segunda Ley — El sentido del tiempo',
          teoria: `
La **Segunda Ley de la Termodinámica** establece que el calor fluye espontáneamente de un cuerpo más caliente a uno más frío, nunca al revés. Introduce el concepto de **entropía (S)**, que mide el desorden de un sistema.

$$\\Delta S \\geq \\frac{Q}{T}$$

**Significado profundo:** La entropía siempre aumenta en procesos naturales (irreversibles). Esta es la razón por la que el tiempo tiene una dirección: el pasado tiene menor entropía que el futuro.

**Rendimiento máximo — Ciclo de Carnot:**
$$\\eta_{Carnot} = 1 - \\frac{T_{fría}}{T_{caliente}}$$

Ninguna máquina real puede superar este rendimiento teórico máximo.

**Crisis climática y entropía:** El cambio climático es, en cierto sentido, un problema de gestión de la entropía: estamos liberando millones de años de energía almacenada en combustibles fósiles en apenas 200 años, aumentando el desorden (entropía) del sistema climático global.`,
          preguntas: [
            '¿Por qué es imposible construir una máquina que convierta el 100% del calor en trabajo?',
            '¿Qué tiene que ver la entropía con el deterioro de los ecosistemas naturales?',
            '¿Por qué es más eficiente una central termoeléctrica moderna que una de hace 50 años?'
          ]
        },
        sesionB: { phetIndex: 2, objetivo: 'Analizar la relación entre presión, volumen y temperatura en procesos termodinámicos', hiemId: 'p2-s3' }
      },
      {
        numero: 4,
        titulo: 'Gases Ideales',
        sesionA: {
          titulo: 'La Ley del Gas Ideal',
          teoria: `
Un **gas ideal** es un modelo teórico de gas cuyos átomos o moléculas no interactúan entre sí y ocupan un volumen despreciable.

**Ley del Gas Ideal:**
$$PV = nRT$$

Donde:
- **P** = Presión (Pa)
- **V** = Volumen (m³)
- **n** = Número de moles
- **R** = Constante de los gases = 8.314 J/(mol·K)
- **T** = Temperatura (K)

**Leyes derivadas:**
- **Ley de Boyle** (T cte): $P_1V_1 = P_2V_2$
- **Ley de Charles** (P cte): $V_1/T_1 = V_2/T_2$
- **Ley de Gay-Lussac** (V cte): $P_1/T_1 = P_2/T_2$

**Aplicación ambiental:** Los gases de efecto invernadero (CO₂, CH₄, N₂O) en la atmósfera siguen aproximadamente las leyes de los gases ideales. El aumento de CO₂ de 280 ppm (preindustrial) a 421 ppm (2024) está cambiando el balance térmico del planeta.`,
          preguntas: [
            '¿Por qué los neumáticos de los carros se deben revisar a la misma temperatura para obtener lecturas confiables?',
            '¿Cómo cambia la presión en un cilindro de gas cuando se calienta al sol directo?',
            '¿Qué volumen ocupa 1 mol de CO₂ a condiciones normales (0°C, 1 atm)?'
          ]
        },
        sesionB: { phetIndex: 2, objetivo: 'Verificar las leyes de Boyle, Charles y Gay-Lussac experimentalmente', hiemId: 'p2-s4' }
      },
      {
        numero: 5, titulo: 'Balance Radiativo Terrestre',
        sesionA: {
          titulo: 'El clima como sistema termodinámico',
          teoria: `
El **balance radiativo terrestre** es el equilibrio entre la energía solar que entra a la Tierra y la energía infrarroja que la Tierra emite al espacio.

**Constante solar:** La Tierra recibe aproximadamente 1361 W/m² de la radiación solar. Como la Tierra es una esfera, en promedio recibe:
$$Q_{entrada} = \\frac{S(1-A)}{4} \\approx 240 \\text{ W/m}^2$$

Donde **A** = albedo (fracción reflejada) ≈ 0.30

**La Ley de Stefan-Boltzmann** determina cuánto emite la Tierra:
$$P = \\varepsilon \\sigma T^4$$

Donde σ = 5.67 × 10⁻⁸ W/m²·K⁴

**Temperatura de equilibrio sin atmósfera:** T ≈ -18°C
**Temperatura real (con efecto invernadero):** T ≈ +15°C

**Conclusión:** El efecto invernadero natural nos da 33°C de temperatura adicional. El problema actual es que estamos amplificando artificialmente este efecto.`,
          preguntas: [
            '¿Qué pasaría con la temperatura de la Tierra si el albedo polar aumentara por más hielo ártico?',
            '¿Por qué las ciudades son más calientes que el campo (isla de calor urbano)?',
            '¿Cómo afecta la deforestación en el Amazonas al balance radiativo de Colombia?'
          ]
        },
        sesionB: { phetIndex: 1, objetivo: 'Modelar el flujo de energía en un sistema cerrado similar al efecto invernadero', hiemId: 'p2-s5' }
      },
      { numero: 6, titulo: 'Transferencia de Calor', sesionA: { titulo: 'Conducción, Convección y Radiación', teoria: `Los tres mecanismos de transferencia de calor son fundamentales para entender el clima y el diseño de sistemas energéticos.\n\n**1. Conducción:** Transferencia a través de contacto directo.\n$$\\frac{Q}{t} = kA\\frac{\\Delta T}{d}$$\nDonde k es la conductividad térmica del material.\n\n**2. Convección:** Transferencia por movimiento de masas de fluido.\n- **Natural:** El fluido más caliente sube y el frío baja (calefacción por radiadores)\n- **Forzada:** Un ventilador o bomba mueve el fluido (sistemas HVAC)\n\n**3. Radiación:** Transferencia mediante ondas electromagnéticas, sin necesidad de medio material.\n$$P = \\varepsilon \\sigma A T^4$$\n\n**Aplicación a la vivienda rural:** Las casas de zinc en el trópico se calientan enormemente porque el zinc tiene alta conductividad térmica y baja reflectividad. Las casas de bareque o tapia (materiales tradicionales) mantienen temperaturas más estables por su baja conductividad.`, preguntas: ['¿Por qué las casas de materiales tradicionales (tapia, bahareque) son más frescas que las de zinc o lata?', '¿Cómo funciona un calentador solar de agua y qué mecanismos de transferencia de calor usa?', '¿Qué estrategias de diseño bioclimático pueden mejorar la temperatura interior de una vivienda rural?'] }, sesionB: { phetIndex: 1, objetivo: 'Identificar los tres mecanismos de transferencia de calor en situaciones cotidianas', hiemId: 'p2-s6' } },
      { numero: 7, titulo: 'Motores Térmicos', sesionA: { titulo: 'Cómo se convierte el calor en trabajo', teoria: `Un **motor térmico** es una máquina que convierte energía térmica en trabajo mecánico.\n\n**Componentes básicos:**\n- **Fuente caliente** (Tₕ): Proporciona calor (quema de combustible, vapor, etc.)\n- **Motor:** Convierte parte del calor en trabajo\n- **Foco frío** (Tc): Absorbe el calor residual (ambiente)\n\n**Rendimiento real:**\n$$\\eta = \\frac{W}{Q_h} = 1 - \\frac{Q_c}{Q_h}$$\n\n**Ciclo de Carnot** (máxima eficiencia teórica):\n$$\\eta_{Carnot} = 1 - \\frac{T_c}{T_h}$$\n\n**Ejemplo:** Una central termoeléctrica trabaja con vapor a 550°C y disipa calor al río a 25°C:\n$$\\eta_{max} = 1 - \\frac{298K}{823K} \\approx 63.8\\%$$\nPero en realidad las centrales modernas logran ~40-45%.\n\n**Colombia y la energía:** Colombia genera el 70% de su electricidad con hidroeléctricas (sin combustión), lo que la hace una de las matrices eléctricas más limpias de América Latina.`, preguntas: ['¿Por qué ningún motor de combustión interna puede aprovechar el 100% del calor del combustible?', '¿Qué ventajas tiene la energía hidroeléctrica sobre una central termoeléctrica en términos de eficiencia?', '¿Cómo afecta el fenómeno del Niño a la generación eléctrica en Colombia?'] }, sesionB: { phetIndex: 2, objetivo: 'Analizar el ciclo de un gas ideal y calcular el trabajo neto producido', hiemId: 'p2-s7' } },
      { numero: 8, titulo: 'Refrigeración y Bombas de Calor', sesionA: { titulo: 'Invertir el ciclo termodinámico', teoria: `Una **refrigeradora** o **bomba de calor** es un motor térmico operando en sentido inverso: usa trabajo para transferir calor del foco frío al caliente.\n\n**Coeficiente de desempeño (COP):**\n- Para refrigeración: $COP_R = \\frac{Q_c}{W}$\n- Para calefacción: $COP_H = \\frac{Q_h}{W}$\n\n**Refrigerantes y crisis ambiental:** Los CFC (clorofluorocarburos) usados como refrigerantes destruían la capa de ozono. El Protocolo de Montreal (1987) los eliminó gradualmente. Ahora se usan HFCs, pero estos son potentes gases de efecto invernadero.\n\n**Refrigeración solar:** En regiones rurales sin red eléctrica, los sistemas de refrigeración solar por adsorción (que usan el calor del sol para producir frío) son una alternativa viable para conservar vacunas y alimentos.\n\n**Dato colombiano:** En zonas cálidas de Colombia como el Caribe y el Valle del Cauca, los equipos de aire acondicionado representan hasta el 60% del consumo eléctrico.`, preguntas: ['¿Cómo puede el sol producir frío? ¿En qué principio termodinámico se basan los refrigeradores solares?', '¿Por qué los gases refrigerantes modernos son un problema para el cambio climático?', '¿Qué técnicas de enfriamiento natural (sin electricidad) son usadas en la arquitectura vernácula colombiana?'] }, sesionB: { phetIndex: 0, objetivo: 'Analizar cambios de estado y los intercambios de energía en procesos de evaporación y condensación', hiemId: 'p2-s8' } },
      { numero: 9, titulo: 'Cambio Climático — La Física del Problema', sesionA: { titulo: 'Entendiendo el calentamiento global desde la física', teoria: `El **cambio climático** es el mayor desafío de la humanidad en el siglo XXI, y la física nos da las herramientas para entenderlo y combatirlo.\n\n**El efecto invernadero amplificado:**\nLos gases de efecto invernadero (GEI) absorben radiación infrarroja emitida por la Tierra y la re-emiten en todas las direcciones, calentando la atmósfera.\n\n**Principales GEI y su Potencial de Calentamiento Global (PCG-100 años):**\n| Gas | PCG | Fuente Principal |\n|-----|-----|----------------|\n| CO₂ | 1 | Combustibles fósiles, deforestación |\n| CH₄ | 28 | Ganadería, arrozales, basureros |\n| N₂O | 265 | Fertilizantes, ganadería |\n| SF₆ | 23.900 | Equipos eléctricos |\n\n**Colombia es vulnerable:** A pesar de aportar <0.5% de las emisiones globales, Colombia es el 3er país más vulnerable del mundo al cambio climático (retroceso de glaciares, variabilidad del ENSO, pérdida de biodiversidad, sequías).`, preguntas: ['¿Por qué la ganadería extensiva colombiana es un factor importante en el cambio climático?', '¿Cómo se relaciona el retroceso de los glaciares colombianos con la disponibilidad de agua?', '¿Qué acciones a nivel individual, comunitario y nacional son más efectivas para reducir emisiones en Colombia?'] }, sesionB: { phetIndex: 1, objetivo: 'Modelar el balance energético de un sistema con y sin efecto invernadero', hiemId: 'p2-s9' } },
      { numero: 10, titulo: 'Proyecto ABP — Auditoría Energética', sesionA: { titulo: 'Proyecto: Auditoría Energética de tu Institución', teoria: `## Proyecto Integrador P2: "Cero Carbono — Auditoría Energética Escolar"\n\n**Objetivo:** El equipo Guardianes del Sistema realizará una auditoría energética de la institución educativa para identificar oportunidades de ahorro de energía y reducción de emisiones de CO₂.\n\n**Metodología:**\n1. **Inventario de equipos:** Listar todos los equipos eléctricos con su potencia y horas de uso diario\n2. **Cálculo de consumo:** $E = P \\cdot t$ (en kWh)\n3. **Estimación de emisiones:** Para Colombia, el factor de emisión de la red eléctrica = 0.126 kg CO₂/kWh\n4. **Análisis de eficiencia:** Identificar los equipos menos eficientes\n5. **Propuesta de mejoras:** Cambio a LED, sensores de presencia, gestión de horarios\n\n**Roles del equipo:**\n- 🔧 **Ingeniero/a de Planta:** Mide potencias y calcula consumos\n- 📊 **Científico/a de Datos:** Analiza los datos y crea gráficas\n- 🌿 **Especialista Ambiental:** Calcula la huella de carbono y propone soluciones\n- 📋 **Director/a de Regulación:** Verifica normas RETIE y políticas de eficiencia energética\n\n**Entregable:** Informe de auditoría con plan de reducción de emisiones y análisis de retorno de inversión.`, preguntas: ['¿Cuánto CO₂ emite tu colegio al mes según el consumo eléctrico estimado?', '¿Qué cambio simple tendría el mayor impacto en la reducción de emisiones de tu institución?', '¿Cuánto tiempo tardaría en recuperarse la inversión de cambiar todas las luces a LED?'] }, sesionB: { phetIndex: 2, objetivo: 'Calcular la energía ideal vs real de diferentes procesos termodinámicos en contextos energéticos', hiemId: 'p2-s10' } }
    ]
  },
  {
    id: 3,
    titulo: 'Electromagnetismo y Soberanía',
    subtitulo: 'Semanas 21–30',
    descripcion: 'Domina los circuitos eléctricos, el electromagnetismo y la ley de Faraday para diseñar microrredes eléctricas en zonas no interconectadas.',
    emoji: '⚡',
    imagen: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=85&auto=format&fit=crop',
    color: '#a855f7',
    colorDark: '#7e22ce',
    gradient: 'linear-gradient(135deg, #a855f7, #7e22ce)',
    contextoCSC: 'Soberanía energética y zonas no interconectadas de Colombia',
    phet: [
      { nombre: 'Globos y Electricidad', url: 'https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity_es.html', emoji: '🎈' },
      { nombre: 'Cargas y Campos', url: 'https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_es.html', emoji: '🔌' },
      { nombre: 'Kit de Circuitos CD', url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_es.html', emoji: '💡' },
      { nombre: 'Laboratorio de Faraday', url: 'https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_es.html', emoji: '🧲' }
    ],
    semanas: [
      { numero: 1, titulo: 'Carga Eléctrica y Fuerza de Coulomb', sesionA: { titulo: 'El origen de la electricidad', teoria: `La **carga eléctrica** es una propiedad fundamental de la materia. Existen dos tipos: positiva (protones) y negativa (electrones).\n\n**Ley de Coulomb:**\n$$F = k\\frac{q_1 q_2}{r^2}$$\n\nDonde k = 8.99 × 10⁹ N·m²/C² (constante de Coulomb)\n\n**Principio de superposición:** La fuerza eléctrica total sobre una carga es la suma vectorial de las fuerzas individuales de cada otra carga.\n\n**La electricidad estática en la vida cotidiana:**\n- Los rayos en las tormentas son descargas de electricidad estática a gran escala\n- La película de plástico se adhiere a los alimentos por atracción electrostática\n- Los colectores de polvo electrostáticos purifican el aire en fábricas\n\n**Colombia y los rayos:** El municipio de Villavicencio (Meta) es uno de los lugares con mayor densidad de rayos en el mundo, con más de 250 tormentas eléctricas al año. Entender la electrostática es fundamental para el diseño de pararrayos.`, preguntas: ['¿Por qué tu cabello se eriza cuando usas un globo frotado contra él?', '¿Cómo funciona un pararrayos y por qué protege un edificio de los rayos?', '¿Qué relación existe entre la Ley de Coulomb y la Ley de Gravitación Universal de Newton?'] }, sesionB: { phetIndex: 0, objetivo: 'Explorar las fuerzas de atracción y repulsión entre cargas eléctricas', hiemId: 'p3-s1' } },
      { numero: 2, titulo: 'Campo Eléctrico y Potencial', sesionA: { titulo: 'El campo eléctrico — la influencia a distancia', teoria: `El **campo eléctrico** es una región del espacio en la que una carga experimenta una fuerza eléctrica. Fue introducido por Michael Faraday como una forma de visualizar la interacción eléctrica sin contacto.\n\n$$\\vec{E} = \\frac{\\vec{F}}{q} = k\\frac{Q}{r^2}\\hat{r}$$\n\n**Líneas de campo eléctrico:** Representación visual del campo. Salen de las cargas positivas y entran en las negativas.\n\n**Potencial eléctrico (V):** Energía potencial por unidad de carga.\n$$V = k\\frac{Q}{r}$$\n\n**Diferencia de potencial = Voltaje:** Lo que mide un voltímetro.\n$$\\Delta V = V_B - V_A = -\\int_A^B \\vec{E} \\cdot d\\vec{l}$$\n\n**Aplicación al sistema nervioso:** Los impulsos nerviosos son señales eléctricas generadas por diferencias de potencial entre el interior y exterior de las neuronas (~70 mV en reposo). La física del campo eléctrico aplica ¡hasta en tu cerebro!`, preguntas: ['¿Por qué las líneas de campo eléctrico nunca se cruzan?', '¿Cómo mide un electricista la diferencia de potencial (voltaje) entre dos puntos de una instalación?', '¿Qué sucede con el campo eléctrico dentro de una jaula de Faraday y cuáles son sus aplicaciones?'] }, sesionB: { phetIndex: 1, objetivo: 'Mapear el campo eléctrico y el potencial eléctrico alrededor de diferentes configuraciones de carga', hiemId: 'p3-s2' } },
      { numero: 3, titulo: 'Corriente y Circuitos Básicos', sesionA: { titulo: 'Corriente eléctrica y la Ley de Ohm', teoria: `La **corriente eléctrica (I)** es el flujo de cargas eléctricas por unidad de tiempo.\n$$I = \\frac{\\Delta Q}{\\Delta t} \\quad [Amperios = C/s]$$\n\n**Ley de Ohm:**\n$$V = I \\cdot R$$\n\nDonde R es la resistencia eléctrica (Ohmios, Ω). Depende del material, longitud y sección transversal:\n$$R = \\rho \\frac{L}{A}$$\n\n**Circuitos en serie:**\n$$R_{total} = R_1 + R_2 + ... + R_n$$\n$$I_{total} = I_1 = I_2 = I_3$$ (misma corriente)\n\n**Circuitos en paralelo:**\n$$\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2} + ...$$\n$$V_{total} = V_1 = V_2 = V_3$$ (mismo voltaje)\n\n**Diseño eléctrico rural:** Las instalaciones eléctricas domiciliarias en zonas rurales de Colombia deben seguir el RETIE (Reglamento Técnico de Instalaciones Eléctricas). Los circuitos domésticos van en paralelo para que cada dispositivo opere a 120V independientemente.`, preguntas: ['¿Por qué los electrodomésticos en Colombia están diseñados para 120V y no para 220V como en Europa?', '¿Qué pasa con la intensidad de la corriente cuando se conectan más bombillas en paralelo?', '¿Cómo afecta la longitud y el diámetro de los cables a la resistencia de una instalación eléctrica rural?'] }, sesionB: { phetIndex: 2, objetivo: 'Construir y analizar circuitos en serie y en paralelo, verificando la Ley de Ohm', hiemId: 'p3-s3' } },
      { numero: 4, titulo: 'Potencia y Energía Eléctrica', sesionA: { titulo: 'El costo de la electricidad', teoria: `La **potencia eléctrica** es la tasa a la que se consume o produce energía eléctrica.\n\n$$P = V \\cdot I = I^2 R = \\frac{V^2}{R} \\quad [Vatios = J/s]$$\n\n**Energía eléctrica:**\n$$E = P \\cdot t \\quad [kWh]$$\n\n1 kWh = 3.6 × 10⁶ J\n\n**El recibo de la luz:** La energía eléctrica se factura en kilowatt-hora (kWh). En Colombia, el precio promedio es de ~$800-900 pesos/kWh (estratos 1-2).\n\n**Pérdida de calor en cables (efecto Joule):**\n$$Q = I^2 R t$$\n\nEsta es la razón por la que los cables se calientan cuando pasa mucha corriente y por qué las líneas de alta tensión transmiten electricidad a miles de voltios (menor I, menor pérdida).\n\n**Subsidios y equidad energética:** En Colombia, los estratos 1, 2 y 3 reciben subsidio en la tarifa de energía. Los estratos 5 y 6 pagan una sobretasa que financia estos subsidios.`, preguntas: ['¿Cuánto cuesta al mes mantener un bombillo LED de 10W encendido 8 horas al día en Colombia?', '¿Por qué las líneas de transmisión de energía operan a miles de voltios si las casas usan 120V?', '¿Es justo el sistema de subsidios eléctricos por estratos en Colombia? ¿Qué alternativas propondrías?'] }, sesionB: { phetIndex: 2, objetivo: 'Calcular la potencia consumida por diferentes componentes en un circuito real', hiemId: 'p3-s4' } },
      { numero: 5, titulo: 'Campo Magnético', sesionA: { titulo: 'El magnetismo — imanes y campos', teoria: `El **campo magnético** (B) es generado por cargas en movimiento (corrientes eléctricas) o por materiales magnéticos. Se mide en Teslas (T).\n\n**Fuerza magnética sobre una carga en movimiento (Fuerza de Lorentz):**\n$$\\vec{F} = q\\vec{v} \\times \\vec{B}$$\n\n**Fuerza sobre un conductor con corriente:**\n$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$\n\n**Campo de un conductor recto** (Ley de Biot-Savart, caso simple):\n$$B = \\frac{\\mu_0 I}{2\\pi r}$$\n\n**El magnetismo terrestre:** La Tierra tiene un campo magnético generado por el movimiento del hierro fundido en su núcleo externo. Este campo nos protege del viento solar y permite la navegación con brújula.\n\n**Aplicaciones tecnológicas:**\n- Motores eléctricos: Convierten electricidad en movimiento usando la fuerza de Lorentz\n- Generadores: Convierten movimiento en electricidad (principio de Faraday)\n- IRM médica: Usa campos magnéticos de hasta 3 Tesla para imágenes del cuerpo`, preguntas: ['¿Por qué los polos iguales de dos imanes se repelen y los opuestos se atraen?', '¿Cómo usa un motor eléctrico la interacción entre corriente y campo magnético para producir movimiento?', '¿Por qué no existe un "monopolo magnético" (imán con solo un polo) a diferencia de la carga eléctrica?'] }, sesionB: { phetIndex: 3, objetivo: 'Explorar el campo magnético generado por una corriente eléctrica', hiemId: 'p3-s5' } },
      { numero: 6, titulo: 'Inducción Electromagnética', sesionA: { titulo: 'La Ley de Faraday — generar electricidad', teoria: `La **Ley de Faraday** es el principio detrás de todos los generadores eléctricos del mundo: un campo magnético variable genera una fuerza electromotriz (fem) inducida.\n\n$$\\varepsilon = -N\\frac{d\\Phi_B}{dt}$$\n\nDonde:\n- **ε** = Fuerza electromotriz inducida (Voltios)\n- **N** = Número de espiras de la bobina\n- **ΦB** = Flujo magnético = B·A·cos(θ)\n\n**Ley de Lenz:** La corriente inducida siempre se opone al cambio que la produce (signo negativo en la fórmula de Faraday).\n\n**Michael Faraday** (1791–1867): Hijo de un herrero, sin educación formal en matemáticas, fue el genio experimental más grande de la física. Descubrió la inducción electromagnética en 1831, sentando las bases de toda la tecnología eléctrica moderna.\n\n**Generadores hidroeléctricos colombianos:** En la represa de Itaipú (paraguayo-brasileña, la mayor del mundo), el agua mueve turbinas que giran bobinas dentro de campos magnéticos → generan electricidad por inducción de Faraday.`, preguntas: ['¿Cómo convierte la energía del agua que cae en electricidad una central hidroeléctrica como El Quimbo en Colombia?', '¿Qué pasaría si girarías una bobina más rápido dentro de un campo magnético?', '¿Cómo funciona el principio de inducción en un transformador de voltaje?'] }, sesionB: { phetIndex: 3, objetivo: 'Verificar la Ley de Faraday: medir cómo cambia la FEM con la velocidad del imán', hiemId: 'p3-s6' } },
      { numero: 7, titulo: 'Corriente Alterna y Transformadores', sesionA: { titulo: 'CA vs CD — El debate de Tesla vs Edison', teoria: `**Corriente Directa (CD):** La corriente fluye siempre en la misma dirección. Producida por baterías y paneles solares.\n\n**Corriente Alterna (CA):** La corriente cambia de dirección periódicamente. Producida por generadores. En Colombia: 60 Hz (60 ciclos por segundo), 120V.\n\n**¿Por qué CA ganó la "guerra de las corrientes"?**\nNikola Tesla (CA) vs Thomas Edison (CD) en la década de 1880. La CA ganó porque con transformadores se puede elevar el voltaje para transmitir electricidad eficientemente a largas distancias y luego reducirlo para uso doméstico.\n\n**Transformadores — Ley de inducción aplicada:**\n$$\\frac{V_2}{V_1} = \\frac{N_2}{N_1}$$\n\nLa red eléctrica colombiana transmite a 115.000 V y 230.000 V. Los transformadores de tu barrio la reducen a 13.200 V, y luego el transformador de la cuadra la lleva a 120/240 V.\n\n**Contexto ZNI:** Las Zonas No Interconectadas (ZNI) de Colombia (Amazonía, Pacífico, Orinoquía) no están conectadas a la red nacional y usan principalmente generadores diésel, lo que las hace más contaminantes y costosas.`, preguntas: ['¿Por qué no podemos usar las baterías de los celulares directamente para alimentar los electrodomésticos de la casa?', '¿Qué desventajas tiene depender de un generador diésel para la electricidad de una comunidad rural?', '¿Cómo podría una microrred solar + baterías reemplazar al generador diésel en una vereda del Pacífico?'] }, sesionB: { phetIndex: 2, objetivo: 'Diseñar un circuito de microrred que incluya fuente, almacenamiento y carga', hiemId: 'p3-s7' } },
      { numero: 8, titulo: 'Microrredes Eléctricas', sesionA: { titulo: 'La electricidad del futuro — microrredes renovables', teoria: `Una **microrred** es un sistema eléctrico local que puede operar conectado a la red principal o de forma aislada ("isla").\n\n**Componentes de una microrred solar:**\n1. **Paneles fotovoltaicos:** Generan CD con luz solar\n2. **Controlador de carga:** Regula la carga de las baterías\n3. **Baterías:** Almacenan energía para la noche o días nublados\n4. **Inversor:** Convierte CD → CA para los electrodomésticos\n5. **Red de distribución:** Lleva la electricidad a los usuarios\n\n**Dimensionamiento básico:**\n- Paso 1: Calcular la demanda diaria (kWh/día)\n- Paso 2: Determinar las horas de sol pico (HSP) de la región\n- Paso 3: Paneles = Demanda / (HSP × eficiencia)\n- Paso 4: Baterías = Demanda × días de autonomía\n\n**La Guajira solar:** La Guajira tiene el mayor potencial solar de Colombia (≥5.5 kWh/m²/día) y también una de las mayores tasas de déficit eléctrico. El estado colombiano ha desarrollado el plan "Energía para la Gente" para electrificar 200.000 hogares rurales con sistemas solares.`, preguntas: ['¿Cuántos paneles solares necesitaría una vereda de 50 casas con un consumo promedio de 3 kWh/día por casa?', '¿Qué ventajas tiene una microrred sobre tener cada casa su propio panel solar y batería?', '¿Por qué La Guajira, siendo la región más soleada de Colombia, tiene también uno de los mayores déficits eléctricos?'] }, sesionB: { phetIndex: 2, objetivo: 'Diseñar y simular una microrred para una comunidad de 10 viviendas', hiemId: 'p3-s8' } },
      { numero: 9, titulo: 'Soberanía Energética', sesionA: { titulo: 'Energía como derecho — la perspectiva de justicia energética', teoria: `La **soberanía energética** es el derecho de los pueblos a decidir sobre sus propios sistemas energéticos: qué fuentes usar, cómo producirla y a qué costo.\n\n**Pobreza energética en Colombia:**\n- 1.6 millones de viviendas sin acceso a energía eléctrica (2022)\n- Concentradas en ZNI: Chocó, Amazonas, Vichada, Guainía, La Guajira\n- Las comunidades afro e indígenas son las más afectadas\n\n**Dilemas de la transición energética:**\n1. **Minería de litio:** Las baterías eléctricas necesitan litio. Colombia tiene reservas, pero su extracción puede dañar ecosistemas\n2. **Eólica en La Guajira:** Los parques eólicos generan energía limpia, pero afectan el territorio wayúu y sus formas de vida\n3. **Hidroeléctricas:** Limpias pero desplazan comunidades y afectan ríos\n\n**La pregunta clave:** ¿Quién decide cómo se produce la energía? ¿Las empresas, el Estado o las comunidades?\n\n**Perspectiva indígena:** Para el pueblo Wayúu, el viento (Jepirachi) es un ser espiritual, no un recurso explotable. La transición energética justa debe respetar estas cosmovisiones.`, preguntas: ['¿Tiene el Estado colombiano la obligación de garantizar el acceso a electricidad como un derecho fundamental?', '¿Es posible hacer una transición energética que sea justa con las comunidades que históricamente han sido excluidas?', '¿Cómo puede tu comunidad participar en las decisiones sobre cómo se produce la energía en tu territorio?'] }, sesionB: { phetIndex: 1, objetivo: 'Analizar campos eléctricos en configuraciones que simulan líneas de transmisión', hiemId: 'p3-s9' } },
      { numero: 10, titulo: 'Proyecto ABP — Microrred Veredal', sesionA: { titulo: 'Proyecto: Microrred Solar para la Vereda El Progreso', teoria: `## Proyecto Integrador P3: "Luz Propia — Microrred Solar Comunitaria"\n\n**Escenario:** La vereda El Progreso (80 familias) en el departamento del Chocó lleva 5 años esperando ser conectada a la red nacional. El IPSE (Instituto de Planificación y Promoción de Soluciones Energéticas) les ha asignado un presupuesto de $500 millones para instalar un sistema de energía renovable.\n\n**Datos del territorio:**\n- Irradiación solar: 4.8 kWh/m²/día (promedio anual)\n- Consumo estimado: 2.5 kWh/día por vivienda + 8 kWh para el centro de salud + 5 kWh para la escuela\n- Conexión a red nacional: No disponible en los próximos 10 años\n- Recursos hídricos: Quebrada El Platino con caudal de 45 L/s\n\n**Roles del equipo:**\n- 🔧 **Ingeniero/a de Planta:** Dimensiona paneles, baterías e inversor\n- 📊 **Científico/a de Datos:** Analiza irradiación y demanda horaria\n- 🌿 **Especialista Ambiental:** Evalúa impacto y propone normativa comunitaria\n- 📋 **Director/a de Regulación:** Elabora el modelo de gobernanza comunitaria de la microrred\n\n**Entregable:** Propuesta técnica, social y económica para la microrred, incluyendo modelo de tarifa solidaria.`, preguntas: ['¿Cuántos paneles de 400W necesita la vereda y cuánto espacio físico ocupan?', '¿Es mejor optar por energía solar, mini-hidroeléctrica o una combinación? Justifica con cálculos.', '¿Cómo se deben distribuir los costos de la microrred entre las familias de manera justa?'] }, sesionB: { phetIndex: 3, objetivo: 'Simular la generación por inducción electromagnética para modelar una mini-hidro', hiemId: 'p3-s10' } }
    ]
  },
  {
    id: 4,
    titulo: 'Física Moderna y Transición Energética',
    subtitulo: 'Semanas 31–40',
    descripcion: 'Descubre la naturaleza cuántica de la luz, el efecto fotoeléctrico y cómo las celdas solares transforman la física moderna en la tecnología de la transición energética justa.',
    emoji: '☀️',
    imagen: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=85&auto=format&fit=crop',
    color: '#eab308',
    colorDark: '#a16207',
    gradient: 'linear-gradient(135deg, #eab308, #a16207)',
    contextoCSC: 'El potencial solar de Colombia y la transición energética justa',
    phet: [
      { nombre: 'Efecto Fotoeléctrico', url: 'https://phet.colorado.edu/sims/html/photoelectric-effect/latest/photoelectric-effect_es.html', emoji: '⚛️' },
      { nombre: 'Kit de Circuitos CD', url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_es.html', emoji: '🔋' }
    ],
    semanas: [
      { numero: 1, titulo: 'La Naturaleza de la Luz', sesionA: { titulo: 'Onda o partícula — el gran debate de la física', teoria: `La naturaleza de la luz fue uno de los debates más apasionantes de la historia de la física.\n\n**Modelo ondulatorio (Huygens, Young, Maxwell):**\nLa luz es una onda electromagnética: oscilaciones de campos eléctrico y magnético que se propagan en el espacio.\n$$c = \\lambda \\cdot f = 3 \\times 10^8 \\text{ m/s}$$\n\n**Espectro electromagnético:**\n- Rayos gamma < Rayos X < UV < Luz visible < IR < Microondas < Radio\n- Luz visible: 380 nm (violeta) a 750 nm (rojo)\n\n**El problema del cuerpo negro:** A finales del siglo XIX, la física clásica no podía explicar el espectro de radiación de los cuerpos calientes. Max Planck (1900) propuso una solución revolucionaria: la energía se emite en "paquetes" discretos llamados **cuantos**.\n\n$$E = h \\cdot f$$\nDonde **h** = 6.626 × 10⁻³⁴ J·s (Constante de Planck)\n\nEsta fue la chispa que inició la revolución de la física cuántica.`, preguntas: ['¿Por qué el hierro al rojo vivo brilla en color naranja-rojo y no en azul?', '¿Qué diferencia hay entre un láser y una bombilla común si ambos emiten luz?', '¿Cómo podría usarse la radiación infrarroja para medir la temperatura de los paneles solares sin contacto?'] }, sesionB: { phetIndex: 0, objetivo: 'Explorar el espectro de la luz y su relación con la energía de los fotones', hiemId: 'p4-s1' } },
      { numero: 2, titulo: 'Efecto Fotoeléctrico', sesionA: { titulo: 'Einstein y la revolución cuántica', teoria: `El **efecto fotoeléctrico** es la emisión de electrones de un metal cuando este es iluminado con luz de frecuencia suficiente. Este fenómeno NO podía explicarse con la física clásica.\n\n**La solución de Einstein (1905):** La luz está compuesta de partículas de energía llamadas **fotones**, cada uno con energía E = hf.\n\n**Ecuación del efecto fotoeléctrico:**\n$$E_k = hf - \\phi$$\n\nDonde:\n- **Ek** = Energía cinética máxima del electrón emitido\n- **hf** = Energía del fotón\n- **φ** = Función de trabajo del metal (energía mínima para liberar un electrón)\n\n**Conclusiones revolucionarias:**\n1. Si f < f₀ (frecuencia umbral): No hay emisión, sin importar la intensidad\n2. Si f ≥ f₀: Hay emisión; más intensidad = más electrones, no más energéticos\n3. La energía de los electrones depende de la frecuencia, no de la intensidad\n\n**Premio Nobel 1921:** Albert Einstein recibió el Nobel NO por la Relatividad, sino por la explicación del efecto fotoeléctrico.\n\n**Aplicación directa:** LAS CELDAS SOLARES FUNCIONAN GRACIAS AL EFECTO FOTOELÉCTRICO.`, preguntas: ['¿Por qué la luz ultravioleta puede liberar electrones de un metal pero la luz roja no, aunque sea más intensa?', '¿Cómo demostró Einstein que la luz tiene propiedades de partícula usando el efecto fotoeléctrico?', '¿Qué conexión directa existe entre el efecto fotoeléctrico que estudió Einstein y los paneles solares en tu techo?'] }, sesionB: { phetIndex: 0, objetivo: 'Verificar experimentalmente las predicciones de Einstein sobre el efecto fotoeléctrico', hiemId: 'p4-s2' } },
      { numero: 3, titulo: 'Dualidad Onda-Partícula', sesionA: { titulo: 'La paradoja central de la física cuántica', teoria: `La **dualidad onda-partícula** es una de las propiedades más desconcertantes de la mecánica cuántica: la luz (y la materia) se comporta a veces como onda y a veces como partícula, dependiendo del experimento.\n\n**Experimento de la doble rendija (Young):**\nCuando se envían electrones uno a uno a través de dos rendijas, forman un patrón de interferencia (¡de onda!), aunque son partículas.\n\n**Longitud de onda de de Broglie:**\n$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$\n\nCualquier partícula con masa tiene una longitud de onda asociada. Para los objetos cotidianos, λ es tan pequeña que es indetectable; pero para electrones, ¡es significativa!\n\n**Principio de incertidumbre de Heisenberg:**\n$$\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2}$$\n\nEs imposible conocer simultáneamente con precisión ilimitada la posición y el momento de una partícula cuántica. No es un problema de medición: ¡es una propiedad fundamental de la realidad!\n\n**Interpretación filosófica:** La física cuántica nos obliga a repensar conceptos fundamentales como "realidad", "determinismo" y "observación".`, preguntas: ['¿Cómo puede algo ser onda y partícula al mismo tiempo? ¿Qué significa eso para nuestra visión de la realidad?', '¿Por qué los objetos del mundo cotidiano no muestran comportamiento cuántico?', '¿Qué implicaciones tiene el principio de incertidumbre para la idea de que el futuro es predecible?'] }, sesionB: { phetIndex: 0, objetivo: 'Analizar cómo varía la corriente fotoeléctrica con la frecuencia e intensidad de la luz', hiemId: 'p4-s3' } },
      { numero: 4, titulo: 'Estructura del Átomo', sesionA: { titulo: 'Del modelo de Bohr a la mecánica cuántica', teoria: `**Modelo de Bohr (1913):** Los electrones orbitan el núcleo en órbitas circulares de energía cuantizada.\n\n**Niveles de energía del hidrógeno:**\n$$E_n = -\\frac{13.6 \\text{ eV}}{n^2}$$\n\nCuando un electrón salta de un nivel superior (n₂) a uno inferior (n₁), emite un fotón con:\n$$E_{fotón} = E_{n_2} - E_{n_1} = hf$$\n\n**Modelo cuántico moderno (Schrödinger, 1926):** Los electrones no tienen órbitas definidas, sino **orbitales**: regiones de probabilidad donde es más probable encontrarlos.\n\n**Números cuánticos:**\n- n: principal (tamaño)\n- l: azimutal (forma)\n- m: magnético (orientación)\n- s: spin (rotación intrínseca)\n\n**Principio de exclusión de Pauli:** No pueden existir dos electrones en el mismo átomo con los mismos cuatro números cuánticos.\n\n**Aplicación a la tecnología solar:** La estructura de bandas de energía del silicio (semiconductor) es consecuencia directa de la mecánica cuántica. Entender los orbitales electrónicos es fundamental para diseñar células solares más eficientes.`, preguntas: ['¿Por qué cada elemento químico emite luz de colores específicos cuando se calienta?', '¿Cómo explica la mecánica cuántica por qué el carbono puede formar tantos compuestos orgánicos diferentes?', '¿Qué propiedad cuántica del silicio lo hace tan útil para la fabricación de semiconductores y paneles solares?'] }, sesionB: { phetIndex: 0, objetivo: 'Relacionar las frecuencias de luz emitidas con las transiciones entre niveles de energía', hiemId: 'p4-s4' } },
      { numero: 5, titulo: 'Semiconductores y Unión P-N', sesionA: { titulo: 'La física del silicio — la base de la era digital y solar', teoria: `Un **semiconductor** es un material con conductividad eléctrica intermedia entre conductores (metales) y aislantes. El silicio (Si) es el más importante.\n\n**Bandas de energía:**\n- **Banda de valencia:** Electrones ligados a los átomos\n- **Banda de conducción:** Electrones libres para conducir\n- **Brecha de energía (Band Gap):** Silicio: Eg = 1.12 eV — ¡exactamente ideal para absorber la luz solar!\n\n**Dopaje de semiconductores:**\n- **Tipo N:** Se añade fósforo (5 electrones de valencia) → electrones extra → conduce por electrones\n- **Tipo P:** Se añade boro (3 electrones de valencia) → "huecos" (ausencia de electrón) → conduce por huecos\n\n**Unión P-N (Diodo):** Al juntar materiales P y N, se forma un campo eléctrico interno en la zona de unión que solo permite el flujo de corriente en una dirección (rectificador).\n\n**La unión P-N es el corazón de:**\n- LEDs (diodos emisores de luz)\n- Paneles solares (efecto fotovoltaico)\n- Transistores (base de todos los circuitos digitales)\n- Chips de computadora`, preguntas: ['¿Por qué el silicio es el material preferido para los paneles solares y no el carbono (diamante) que tiene banda de energía similar?', '¿Cómo funciona un LED al revés? ¿Puede generar electricidad con la luz?', '¿Qué pasaría si el Band Gap del silicio fuera el doble: 2.24 eV?'] }, sesionB: { phetIndex: 1, objetivo: 'Modelar el circuito de una celda solar y analizar su curva I-V', hiemId: 'p4-s5' } },
      { numero: 6, titulo: 'Celdas Solares Fotovoltaicas', sesionA: { titulo: 'De la física cuántica al panel solar', teoria: `Una **celda solar fotovoltaica** convierte directamente la energía de la luz solar en electricidad mediante el efecto fotovoltaico (primo del efecto fotoeléctrico).\n\n**Proceso en 4 pasos:**\n1. **Absorción:** Un fotón con E ≥ Eg es absorbido por el silicio, creando un par electrón-hueco\n2. **Separación:** El campo eléctrico de la unión P-N separa el par electrón-hueco\n3. **Colección:** Los electrones fluyen por el circuito externo generando corriente\n4. **Recombinación:** Los electrones se recombinan con los huecos completando el circuito\n\n**Parámetros clave de una celda solar:**\n- **Voc** (Voltaje de circuito abierto): ~0.6 V por celda\n- **Isc** (Corriente de cortocircuito): depende del área y la irradiación\n- **Factor de llenado (FF):** Indica la calidad de la celda (ideal ≈ 1)\n- **Eficiencia (η):** Porcentaje de la energía solar convertida en eléctrica\n  - Silicio monocristalino: 20–24%\n  - Silicio policristalino: 16–20%\n  - Perovskita (nueva tecnología): hasta 31%\n\n**Curva I-V:** La característica más importante de una celda solar — describe su comportamiento en todos los puntos de operación.`, preguntas: ['¿Por qué no toda la luz solar puede ser convertida en electricidad por una celda de silicio?', '¿Cuántas celdas solares de 0.6V necesitas en serie para cargar un celular que necesita 5V?', '¿Por qué las nuevas celdas de perovskita, aunque más eficientes, aún no reemplazan al silicio en el mercado?'] }, sesionB: { phetIndex: 1, objetivo: 'Construir un sistema fotovoltaico básico y calcular su potencia de salida', hiemId: 'p4-s6' } },
      { numero: 7, titulo: 'Potencial Solar de Colombia', sesionA: { titulo: 'Colombia: un gigante solar dormido', teoria: `Colombia tiene uno de los mayores potenciales solares de América Latina, pero lo ha aprovechado muy poco.\n\n**Datos del potencial solar colombiano:**\n- Irradiación promedio nacional: 4.0–5.5 kWh/m²/día\n- Zonas de mayor potencial: La Guajira (6.0+), Caribe, Llanos Orientales\n- Comparativo: Alemania (líder mundial en solar) tiene apenas 3.0 kWh/m²/día\n\n**Capacidad instalada de solar en Colombia (2023):**\n- Total: ~1.2 GW (apenas el 2% de la capacidad total)\n- Meta gobierno (2026): 12 GW en renovables no convencionales\n\n**Barreras para el despegue solar:**\n1. Histórica dependencia hidroeléctrica (funciona bien en años sin El Niño)\n2. Falta de infraestructura de transmisión en zonas con mayor potencial\n3. Costos iniciales de instalación (aunque han caído 90% desde 2010)\n4. Trabas regulatorias para la generación distribuida\n\n**Oportunidades:**\n- Generación distribuida: hogares y empresas como productores\n- Comunidades energéticas\n- Agrovoltaica: paneles sobre cultivos (sombra + energía)\n- Empleos verdes en instalación y mantenimiento`, preguntas: ['¿Por qué Alemania, que tiene mucho menos sol que Colombia, genera más energía solar?', '¿Qué impacto tendría para tu región si el 50% de los hogares instalara paneles solares?', '¿Qué políticas públicas propones para acelerar la adopción de energía solar en Colombia?'] }, sesionB: { phetIndex: 0, objetivo: 'Calcular cuántos fotones y cuánta energía recibe 1 m² de panel solar en La Guajira por día', hiemId: 'p4-s7' } },
      { numero: 8, titulo: 'Tecnologías de Almacenamiento', sesionA: { titulo: 'El eslabón perdido: cómo guardar la energía solar', teoria: `El mayor desafío de la energía solar es que el sol no siempre brilla. El **almacenamiento de energía** es el eslabón perdido para una transición energética completa.\n\n**Tecnologías de almacenamiento:**\n\n**1. Baterías de litio-ion:**\n- Energía específica: 150–300 Wh/kg\n- Ciclos de vida: 1000–5000\n- Costo: ~$150/kWh y cayendo\n- Principio: reacción electroquímica reversible\n\n**2. Baterías de flujo (Vanadio):**\n- Duración: 10.000+ ciclos\n- Escala: ideal para comunidades\n- Costo: más caro inicial, más económico a largo plazo\n\n**3. Almacenamiento hidráulico por bombeo:**\n- El más eficiente a gran escala (eficiencia ~80%)\n- Se bombea agua cuesta arriba cuando hay exceso de energía y se genera al bajarla\n- Colombia tiene excelente geografía para esto\n\n**4. Hidrógeno verde:**\n- La energía solar electroliza el agua → H₂\n- El hidrógeno se almacena y quema cuando se necesita\n- Muy prometedor pero aún caro\n\n**Conexión territorial:** En La Guajira, se está explorando producir hidrógeno verde con energía solar y eólica para exportar a Europa, generando empleo y riqueza local.`, preguntas: ['¿Por qué el almacenamiento de energía es el principal reto técnico de las energías renovables?', '¿Qué tipo de almacenamiento sería más adecuado para una comunidad rural de 100 familias en la cordillera?', '¿Cuáles son los problemas ambientales y sociales asociados a la minería del litio para baterías?'] }, sesionB: { phetIndex: 1, objetivo: 'Simular un sistema solar con almacenamiento y analizar la autonomía energética', hiemId: 'p4-s8' } },
      { numero: 9, titulo: 'Física Nuclear y Energía', sesionA: { titulo: 'La energía del núcleo atómico', teoria: `La **energía nuclear** proviene de las fuerzas que mantienen unido el núcleo del átomo. Hay dos mecanismos:\n\n**Fisión nuclear:** Un núcleo pesado (ej. U-235) se divide en dos núcleos más ligeros liberando energía.\n$$^{235}_{92}U + n \\rightarrow ^{141}_{56}Ba + ^{92}_{36}Kr + 3n + E$$\n\n**Fusión nuclear:** Dos núcleos ligeros (ej. H-2 y H-3) se unen para formar uno más pesado liberando mucha más energía.\n$$^2_1H + ^3_1H \\rightarrow ^4_2He + n + 17.6 \\text{ MeV}$$\n\n**La ecuación de Einstein** explica el origen de esta energía:\n$$E = mc^2$$\nLa pequeña masa perdida (defecto de masa) se convierte en una enorme cantidad de energía (c = 3×10⁸ m/s).\n\n**Energía de fusión:** El sol y todas las estrellas son reactores de fusión nuclear. Cada segundo, el sol convierte 600 millones de toneladas de hidrógeno en helio. La humanidad lleva décadas intentando reproducirlo (proyecto ITER en Francia, 2025).\n\n**¿Debe Colombia considerar energía nuclear?** Un debate complejo que involucra física, política, economía y valores.`, preguntas: ['¿Por qué la fusión nuclear promete ser la fuente de energía definitiva pero aún no está disponible comercialmente?', '¿Debería Colombia construir una planta de energía nuclear dado que tiene abundantes recursos de uranio?', '¿En qué se diferencia una bomba atómica de una central nuclear si ambas usan fisión del uranio?'] }, sesionB: { phetIndex: 0, objetivo: 'Calcular la energía liberada por el efecto fotoeléctrico y comparar con procesos nucleares', hiemId: 'p4-s9' } },
      { numero: 10, titulo: 'Proyecto ABP — Sistema Solar Territorial', sesionA: { titulo: 'Proyecto Final: Plan de Transición Energética Territorial', teoria: `## Proyecto Integrador P4 — Final: "Territorio Solar — Plan de Transición Energética Justa"\n\n**Escenario:** El municipio de Uribia (La Guajira), con 200.000 habitantes y el mayor potencial solar de Colombia, quiere desarrollar un plan de transición energética que sea:\n- **Técnicamente viable** (física aplicada)\n- **Ambientalmente sostenible** (impacto mínimo)\n- **Socialmente justo** (respeto por las comunidades Wayúu)\n- **Económicamente sustentable** (beneficios locales)\n\n**Componentes del plan:**\n1. **Mapa de potencial solar:** Identificar las mejores zonas para instalación\n2. **Dimensionamiento:** Calcular la capacidad necesaria en MW\n3. **Análisis de impacto:** Comunidades, ecosistemas, agua\n4. **Modelo de gobernanza:** ¿Quién es dueño de la energía? ¿Empresa privada, Estado o comunidad?\n5. **Plan de empleos verdes:** Cuántos y de qué tipo se pueden crear\n6. **Hoja de ruta:** Fases de implementación en 10 años\n\n**Formato de entrega:** Presentación tipo "pitch" de 10 minutos ante el "Concejo Municipal de Uribia" (tus compañeros), con informe técnico de soporte.\n\n**¡Este es tu proyecto de graduación como Guardián del Sistema! 🌿⚡**`, preguntas: ['¿Cuántos MW de capacidad solar necesita Uribia para satisfacer su demanda energética?', '¿Cómo diseñarías el modelo de gobernanza para que las comunidades Wayúu sean dueñas de la energía y no solo "beneficiarias"?', '¿Qué propones para que los beneficios económicos del parque solar queden en el territorio y no se vayan a Bogotá o al exterior?'] }, sesionB: { phetIndex: 0, objetivo: 'Calcular la energía total generada por un parque solar de 100 MW en La Guajira durante un año', hiemId: 'p4-s10' } }
    ]
  }
];

export const HIEM_TEMPLATE = {
  momentos: [
    { id: 1, nombre: 'Predicción Inicial', icono: '🔮', descripcion: 'Antes del experimento, ¿qué crees que va a pasar?', color: '#818cf8' },
    { id: 2, nombre: 'Exploración Libre', icono: '🔬', descripcion: 'Observa y describe lo que ves sin restricciones', color: '#34d399' },
    { id: 3, nombre: 'Focalización', icono: '🎯', descripcion: 'Diseña una pregunta específica y una estrategia de investigación', color: '#fb923c' },
    { id: 4, nombre: 'Ajuste Cognitivo + CER', icono: '📊', descripcion: 'Compara tu predicción con la evidencia y construye un argumento CER', color: '#f472b6' }
  ]
};

export const INSIGNIAS = [
  { id: 'explorador', nombre: 'Explorador/a', descripcion: 'Completaste tu primera ficha HIEM', icono: '🔭', color: '#818cf8' },
  { id: 'cientifico', nombre: 'Científico/a', descripcion: 'Completaste 5 fichas HIEM', icono: '🔬', color: '#34d399' },
  { id: 'ingeniero', nombre: 'Ingeniero/a', descripcion: 'Completaste el Periodo 1', icono: '⚙️', color: '#0ea5e9' },
  { id: 'termodinamico', nombre: 'Termodinámico/a', descripcion: 'Completaste el Periodo 2', icono: '🌡️', color: '#f97316' },
  { id: 'electromagnetico', nombre: 'Electromagnético/a', descripcion: 'Completaste el Periodo 3', icono: '⚡', color: '#a855f7' },
  { id: 'guardian', nombre: 'Guardián/a del Sistema', descripcion: '¡Completaste todos los periodos!', icono: '🌱', color: '#eab308' }
];
