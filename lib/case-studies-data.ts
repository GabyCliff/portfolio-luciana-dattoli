export interface CaseStudy {
  id: string
  number: string
  title: string
  subtitle: string
  image: string
  color: string
  accentColor: string
  tags: string[]
  role?: string
  duration?: string
  type?: string
  tools?: string
  marketingSummary: string
  problemStatement: string
  howCouldWe: string
  howCouldWeGoal?: string
  research?: {
    description: string
    findings: string[]
  }
  userPersona?: {
    name: string
    age: number
    role: string
    description: string
    needs: string[]
  }
  informationArchitecture: string[]
  informationArchitectureDescription?: string
  informationArchitectureImage?: string
  userFlows?: {
    description: string
    image?: string
  }
  wireframesDescription: string
  wireframeImages?: Array<{ src: string; label: string }>
  uiDesign?: string
  usabilityTests?: string
  learnings: string[]
  prototypeUrl?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: "skinsmart",
    number: "01",
    title: "SkinSmart",
    subtitle: "UX/UI Case Study - Mobile App",
    image: "/images/SkinSmart Logo.png",
    color: "prairie",
    accentColor: "bg-primary/10",
    tags: ["UX Research", "UI Design", "Prototyping", "Mobile App"],
    role: "UX/UI Designer",
    duration: "6 semanas",
    type: "Proyecto académico",
    tools: "Figma",
    marketingSummary:
      "Diseño de una aplicación mobile orientada a ayudar a las personas a mantener rutinas de cuidado de la piel y protección solar de forma simple, personalizada y sostenible.",
    problemStatement:
      "Las personas interesadas en el cuidado de la piel suelen sentirse abrumadas por la gran cantidad de información contradictoria disponible y tienen dificultades para sostener rutinas en el tiempo. La falta de recordatorios personalizados y de recomendaciones adaptadas a su tipo de piel genera olvidos frecuentes, especialmente en la reaplicación del protector solar, afectando la constancia y la efectividad del cuidado.",
    howCouldWe:
      "¿Cómo podríamos ayudar a las personas a mantener una rutina de cuidado de la piel de forma simple y constante, sin que requiera esfuerzo adicional en su día a día?",
    howCouldWeGoal:
      "El objetivo del proyecto fue diseñar una experiencia mobile que permita organizar rutinas de skincare, recibir recordatorios personalizados y acceder a información clara y confiable, adaptada al tipo de piel y a los hábitos del usuario.",
    research: {
      description:
        "Se realizó desk research y entrevistas cualitativas a usuarios de diferentes perfiles. A partir de este proceso se identificaron los siguientes hallazgos clave:",
      findings: [
        "Alta motivación por cuidar la piel, pero baja constancia en las rutinas.",
        "Confusión y desconfianza frente a información contradictoria online.",
        "Olvido frecuente de la reaplicación del protector solar.",
        "Valoración de soluciones simples, personalizadas y prácticas.",
      ],
    },
    userPersona: {
      name: "Sofía",
      age: 28,
      role: "Diseñadora gráfica",
      description:
        "Sofía trabaja muchas horas fuera de su casa y frente a la computadora. Le interesa verse bien y mantener una piel saludable, pero no tiene tiempo para rutinas largas ni complejas. Suele olvidar reaplicar el protector solar y se siente abrumada por la cantidad de información disponible sobre skincare.",
      needs: [
        "Recordatorios personalizados según su rutina diaria",
        "Información clara y confiable",
        "Rutinas simples y rápidas",
      ],
    },
    informationArchitecture: [
      "Gestionar rutinas de skincare",
      "Recibir recordatorios personalizados",
      "Acceder a recursos educativos",
      "Explorar productos recomendados",
      "Navegación intuitiva basada en card sorting",
      "Categorías alineadas con modelos mentales del usuario",
    ],
    informationArchitectureDescription:
      "La arquitectura de la información se diseñó priorizando las acciones principales del usuario: gestionar rutinas, recibir recordatorios y acceder a recursos educativos y productos. A partir de técnicas de card sorting se reorganizaron las categorías para reducir la complejidad y asegurar una navegación intuitiva, alineada con los modelos mentales detectados en la investigación.",
    userFlows: {
      description:
        "Se definieron flujos clave para representar las acciones más relevantes dentro de la app, como la creación de recordatorios personalizados para la reaplicación del protector solar. Estos flujos permitieron detectar oportunidades de mejora y optimizar la experiencia de navegación.",
      image: "/images/skinsmart-userflow.png",
    },
    wireframesDescription:
      "Los wireframes en baja fidelidad se desarrollaron para validar la estructura, jerarquía de la información y flujos principales antes de avanzar al diseño visual. El foco estuvo en garantizar claridad, consistencia y facilidad de uso en las pantallas clave de la aplicación.",
    wireframeImages: [
      { src: "/images/SKINSMART/Inicio.png", label: "Inicio" },
      { src: "/images/SKINSMART/Home.png", label: "Home" },
      { src: "/images/SKINSMART/Perfil.png", label: "Perfil" },
    ],
    uiDesign:
      "El diseño visual se apoyó en una estética limpia y minimalista, inspirada en conceptos de frescura, bienestar y confianza. Se desarrolló un UI Kit propio basado en Material Design 3, adaptado a la identidad de la marca y a las necesidades del producto.",
    usabilityTests:
      "Se realizaron pruebas de usabilidad moderadas con usuarios reales. Los resultados mostraron una alta tasa de éxito en la realización de tareas clave, como iniciar sesión y crear recordatorios, validando la claridad de los flujos y la facilidad de uso de la interfaz.",
    learnings: [
      "Este proyecto reforzó la importancia de diseñar experiencias que se adapten a hábitos reales, priorizando la simplicidad y la personalización.",
      "La reducción de fricciones en los flujos principales resultó clave para mejorar la retención y la experiencia del usuario.",
      "Aplicar metodologías de investigación y validación permitió tomar decisiones de diseño fundamentadas y centradas en el usuario.",
    ],
    prototypeUrl: "https://www.figma.com/proto/rXBHeEIe8Mg9Jdv9u3zO6i/PROYECTO-CODERHOUSE?node-id=39-3453&p=f&t=G1mNChhvKEBlRGdE-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=39%3A3453&show-proto-sidebar=1",
  },
  {
    id: "google-drive-redesign",
    number: "02",
    title: "Rediseña Google Drive",
    subtitle: "Propuesta de rediseño UX/UI",
    image: "/images/Google Drive Logo.png",
    color: "horizon",
    accentColor: "bg-secondary/10",
    tags: ["UX/UI Design", "Redesign", "Desktop App", "Visual Design"],
    role: "UX/UI Designer",
    duration: "3 semanas",
    type: "Proyecto académico",
    tools: "Figma",
    marketingSummary:
      "Rediseño completo de la interfaz de Google Drive enfocado en mejorar la experiencia visual, optimizar la navegación y modernizar el lenguaje de diseño. El proyecto transformó una interfaz funcional pero anticuada en un espacio de trabajo contemporáneo, intuitivo y visualmente coherente.",
    problemStatement:
      "La interfaz actual de Google Drive presenta inconsistencias visuales, una jerarquía de información poco clara y elementos de diseño que no se alinean con los estándares modernos de UI. Los usuarios experimentan dificultades para distinguir tipos de archivos, navegar entre secciones y realizar acciones rápidas debido a una disposición visual poco optimizada y un sistema de iconografía inconsistente.",
    howCouldWe:
      "¿Cómo podríamos rediseñar la interfaz de Google Drive para crear una experiencia visual más moderna, clara y eficiente, que mejore la navegación y facilite la gestión de archivos sin comprometer la funcionalidad existente?",
    howCouldWeGoal:
      "Modernizar la interfaz de Google Drive manteniendo la funcionalidad core, mejorando la jerarquía visual, optimizando la navegación y creando un sistema de diseño coherente y escalable.",
    research: {
      description:
        "Se realizó un análisis exhaustivo de la interfaz actual identificando problemas de usabilidad, inconsistencias visuales y oportunidades de mejora. Se estudiaron patrones de diseño modernos y se analizaron referencias de productos similares para establecer mejores prácticas.",
      findings: [
        "Jerarquía visual débil: La información importante no se distingue claramente del contenido secundario",
        "Inconsistencias en iconografía: Estilos mixtos de íconos generan confusión visual",
        "Espaciado y densidad: Uso ineficiente del espacio en pantalla afecta la escaneabilidad",
        "Sistema de colores desactualizado: Paleta cromática poco moderna y accesibilidad limitada",
        "Navegación poco intuitiva: La estructura de menús no refleja las tareas más frecuentes del usuario",
      ],
    },
    informationArchitecture: [
      "Sidebar rediseñado con navegación principal optimizada",
      "Sistema de vista de archivos mejorado (lista, grid, timeline)",
      "Panel de detalles contextual para acciones rápidas",
      "Barra de búsqueda prominente con filtros avanzados",
      "Sistema de tags y etiquetas visuales para organización",
      "Breadcrumbs claros para navegación jerárquica",
    ],
    informationArchitectureDescription:
      "La arquitectura de información se reestructuró priorizando las acciones más frecuentes y reduciendo la fricción en flujos clave. Se implementó una navegación lateral clara, un sistema de vistas flexible y un panel contextual que expone acciones relevantes según el contexto del usuario, eliminando clics innecesarios y mejorando la eficiencia.",
    wireframesDescription:
      "Se desarrolló un sistema completo de wireframes de alta fidelidad que establece la nueva estructura visual. Se rediseñó la página principal con enfoque en vista de cuadrícula mejorada, se optimizó la barra lateral con categorías claras, se implementó un sistema de cards para archivos con preview visual prominente, y se creó un panel de detalles que aparece contextualmente para acciones rápidas sin interrumpir el flujo de trabajo.",
    wireframeImages: [
      { src: "/images/Google Drive/Inicio.png", label: "Inicio" },
      { src: "/images/Google Drive/Restauracion con exito.png", label: "Restauracion con exito" },
    ],
    uiDesign:
      "El diseño visual se desarrolló sobre un sistema moderno basado en Material Design 3 actualizado, con paleta cromática refinada que mejora contraste y accesibilidad. Se implementó un sistema de iconografía consistente con estilo outlined, tipografía escalable con jerarquía clara (Google Sans como fuente principal), y componentes reutilizables documentados en un Design System propio que garantiza consistencia en toda la interfaz.",
    learnings: [
      "El rediseño de productos establecidos requiere balance entre innovación y familiaridad: cambios muy radicales pueden alienar usuarios existentes.",
      "La jerarquía visual no es solo estética, es funcional: mejoras en contraste y espaciado impactan directamente en eficiencia de tareas.",
      "Un Design System consistente desde el inicio acelera el diseño y facilita el handoff a desarrollo.",
      "Las mejoras visuales deben validarse con métricas de usabilidad: lo que parece mejor no siempre es más usable.",
      "Rediseñar es también educar: documentar decisiones de diseño ayuda a justificar cambios ante stakeholders.",
    ],
    prototypeUrl: "https://www.figma.com/proto/EUrXbemBddpYjNUcJ9IhrQ/Proyecto-Final---Dattoli-Luciana?node-id=46-209&p=f&t=VSBeP0KCY7LPskTz-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=46%3A209&show-proto-sidebar=1",
  },
  {
    id: "youtube-music-research",
    number: "03",
    title: "UX Research YouTube Music",
    subtitle: "Investigación de experiencia de usuario en plataforma de streaming musical",
    image: "/images/Youtube Music Logo.png",
    color: "amber",
    accentColor: "bg-accent/10",
    tags: ["UX Research", "Análisis Heurístico", "User Interviews", "Affinity Mapping"],
    role: "UX Researcher",
    duration: "4 semanas",
    type: "Proyecto de investigación",
    tools: "Figma, Miro, Google Forms",
    marketingSummary:
      "Investigación UX profunda sobre YouTube Music, plataforma de streaming musical con más de 80 millones de suscriptores. El proyecto identificó puntos críticos de dolor en navegación, descubrimiento musical y gestión de contenido, proponiendo mejoras fundamentadas en metodologías cualitativas y análisis heurístico.",
    problemStatement:
      "Los usuarios de YouTube Music experimentan confusión al distinguir entre contenido musical y videos regulares de YouTube, dificultad para descubrir nuevas canciones acorde a sus gustos, y frustraciones al gestionar listas de reproducción y biblioteca personal. Esto genera una experiencia fragmentada que no cumple completamente con las expectativas de una plataforma de streaming musical moderna.",
    howCouldWe:
      "¿Cómo podríamos mejorar la experiencia de navegación y descubrimiento musical en YouTube Music para que los usuarios aprovechen al máximo sus funcionalidades y disfruten de una experiencia fluida y personalizada?",
    howCouldWeGoal:
      "Identificar los principales puntos de dolor en la experiencia de usuario actual de YouTube Music y proponer mejoras basadas en investigación cualitativa y análisis heurístico.",
    research: {
      description:
        "Se implementó un enfoque mixto de investigación cualitativa combinando entrevistas en profundidad, análisis heurístico basado en principios de Nielsen, desk research de competidores y affinity mapping para sintetizar insights. La investigación involucró a 5 participantes usuarios activos de plataformas de streaming musical.",
      findings: [
        "Confusión entre contenido de YouTube y YouTube Music: Los usuarios no distinguen claramente cuándo están en contenido musical vs. video estándar",
        "Dificultad para descubrir música nueva: El algoritmo de recomendaciones no se adapta suficientemente a los gustos personales",
        "Problemas de sincronización entre dispositivos: Listas y preferencias no se sincronizan correctamente entre móvil, desktop y otros dispositivos",
        "Gestión de biblioteca compleja: Organizar música descargada, listas de reproducción y álbumes favoritos resulta confuso",
        "Notificaciones poco relevantes: Las notificaciones no aportan valor y son percibidas como intrusivas",
      ],
    },
    informationArchitecture: [
      "Entrevistas a usuarios (5 participantes con perfiles variados)",
      "Análisis heurístico basado en 10 principios de Nielsen",
      "Desk research de competidores (Spotify, Apple Music, Deezer)",
      "Affinity mapping para identificar patrones y pain points",
      "Síntesis de hallazgos en recomendaciones accionables",
    ],
    informationArchitectureDescription:
      "La metodología de investigación se estructuró en cuatro fases: (1) Entrevistas cualitativas para capturar experiencias reales de uso, (2) Análisis heurístico evaluando la interfaz según principios establecidos de usabilidad, (3) Desk research comparativo con principales competidores del mercado, y (4) Affinity mapping colaborativo para sintetizar patrones emergentes y priorizar hallazgos.",
    wireframesDescription:
      "A partir de los hallazgos de investigación, se desarrollaron propuestas conceptuales que abordaban los principales pain points identificados. Las recomendaciones incluyeron: diferenciación visual clara entre YouTube y YouTube Music, mejora del sistema de descubrimiento musical con filtros personalizados, simplificación de la arquitectura de biblioteca personal, optimización de sincronización cross-device, y sistema de notificaciones contextual basado en comportamiento del usuario.",
    wireframeImages: [
      { src: "/images/Youtube Music/Home.png", label: "Home" },
      { src: "/images/Youtube Music/Playlist.png", label: "Playlist" },
    ],
    learnings: [
      "La confusión entre YouTube y YouTube Music es el pain point más crítico: afecta la confianza del usuario en la plataforma como servicio musical dedicado.",
      "Los usuarios valoran la simplicidad por sobre la cantidad de features: prefieren menos funciones pero más intuitivas.",
      "El descubrimiento musical es emocional: los algoritmos deben balancear precisión técnica con serendipity y sorpresa.",
      "La investigación cualitativa reveló problemas que los datos analíticos no mostraban: el valor de escuchar directamente a los usuarios.",
      "Las metodologías de síntesis como affinity mapping son cruciales para transformar observaciones individuales en insights accionables.",
    ],
  },
  {
    id: "rico-app",
    number: "04",
    title: "Rico",
    subtitle: "UX/UI Case Study - Aplicación de delivery de comida",
    image: "/images/Rico Logo.png",
    color: "petal",
    accentColor: "bg-petal/20",
    tags: ["UX Research", "UI Design", "Prototyping", "Mobile App", "Food Delivery"],
    role: "UX/UI Designer",
    duration: "6 semanas",
    type: "Proyecto académico",
    tools: "Figma, Miro",
    marketingSummary:
      "Diseño de una aplicación mobile de delivery de comida que conecta a usuarios con restaurantes locales de manera simple, rápida y personalizada. Rico nace para solucionar los puntos de dolor detectados en las plataformas actuales, priorizando una experiencia de usuario fluida desde la búsqueda hasta el tracking del pedido.",
    problemStatement:
      "Los usuarios de aplicaciones de delivery experimentan frustración al buscar opciones que se ajusten a sus preferencias específicas (restricciones alimentarias, presupuesto, tiempo de entrega). Las apps actuales presentan interfaces saturadas, procesos de pago complejos, y falta de transparencia en costos totales. Además, el tracking de pedidos genera ansiedad por falta de información clara en tiempo real.",
    howCouldWe:
      "¿Cómo podríamos diseñar una experiencia de delivery que facilite la búsqueda personalizada de comida, simplifique el proceso de pedido y brinde transparencia total en costos y tiempos de entrega?",
    howCouldWeGoal:
      "Crear una aplicación mobile de delivery que permita a los usuarios encontrar y ordenar comida de forma rápida, transparente y personalizada, reduciendo la fricción en cada paso del proceso.",
    research: {
      description:
        "Se realizó investigación cualitativa mediante entrevistas a usuarios frecuentes de apps de delivery, análisis competitivo de plataformas existentes (PedidosYa, Rappi, Uber Eats), y desk research sobre tendencias en UX de food delivery. Se identificaron pain points críticos y oportunidades de diferenciación.",
      findings: [
        "Búsqueda ineficiente: Los filtros actuales no reflejan las necesidades reales (tipo de comida, tiempo, precio simultáneamente)",
        "Costos ocultos: Los usuarios se frustran al descubrir cargos adicionales en el checkout",
        "Proceso de pago largo: Demasiados pasos generan abandono en el carrito",
        "Tracking ambiguo: Falta claridad sobre el estado real del pedido y tiempo estimado",
        "Sobrecarga de información: Interfaces con demasiadas opciones dificultan la decisión",
      ],
    },
    userPersona: {
      name: "Martín",
      age: 29,
      role: "Diseñador UX",
      description:
        "Martín trabaja desde casa y usa apps de delivery al menos 3 veces por semana. Valora su tiempo y busca opciones rápidas que se ajusten a su presupuesto. Tiene preferencias alimentarias (bajo en carbohidratos) y le frustra no encontrar fácilmente lo que busca. Quiere saber exactamente cuánto va a pagar antes de confirmar el pedido.",
      needs: [
        "Búsqueda rápida con filtros específicos (tiempo, presupuesto, tipo de comida)",
        "Transparencia total de costos desde el inicio",
        "Proceso de pago simple y rápido",
        "Tracking claro del estado del pedido en tiempo real",
      ],
    },
    informationArchitecture: [
      "Home con búsqueda avanzada y categorías principales",
      "Filtros inteligentes (tiempo, precio, dieta, rating)",
      "Ficha de restaurante con menú organizado por categorías",
      "Carrito con resumen de costos transparente",
      "Checkout simplificado (máximo 3 pasos)",
      "Tracking en tiempo real con estados visuales claros",
    ],
    informationArchitectureDescription:
      "La arquitectura de información se diseñó priorizando la eficiencia en la búsqueda y reducción de pasos para completar un pedido. Se implementó un sistema de filtros avanzados accesible desde el home, una navegación clara entre restaurantes y menú, y un flujo de checkout optimizado que elimina fricción. El card sorting con usuarios validó la organización de categorías y jerarquía de información.",
    userFlows: {
      description:
        "Se mapearon los flujos principales: (1) Búsqueda y selección de restaurante, (2) Armado de pedido y personalización de items, (3) Proceso de checkout y pago, (4) Tracking del pedido. Cada flujo se optimizó para reducir pasos y decisiones innecesarias, validando con usuarios en sesiones de testing.",
    },
    wireframesDescription:
      "Los wireframes de media y alta fidelidad establecieron la estructura de las pantallas clave: home con búsqueda destacada, listado de restaurantes con información esencial, menú con categorías colapsables, carrito flotante para acceso rápido, checkout en 3 pasos claros, y pantalla de tracking con mapa y estados visuales. Se priorizó la jerarquía de información y accesibilidad de acciones principales.",
    wireframeImages: [
      { src: "/images/Rico/Inicio.png", label: "Inicio" },
      { src: "/images/Rico/Home.png", label: "Home" },
      { src: "/images/Rico/Seleccion de Resto.png", label: "Seleccion de Resto" },
    ],
    uiDesign:
      "El diseño visual se construyó sobre una paleta cálida y apetecible que evoca frescura y confianza. Se desarrolló un sistema de componentes reutilizables documentado en un Design System propio, con énfasis en imágenes de comida de alta calidad, tipografía legible (SF Pro para iOS), y microinteracciones que guían al usuario sin saturar. Los colores y contraste cumplen con estándares de accesibilidad WCAG AA.",
    usabilityTests:
      "Se realizaron testeos de usabilidad moderados con 5 usuarios representativos del público objetivo. Se evaluaron tareas clave: buscar un restaurante con filtros específicos, armar un pedido, completar el checkout, y entender el tracking. Los resultados mostraron una tasa de éxito del 95% en tareas principales, validando la claridad de los flujos. Se identificaron oportunidades de mejora en la visibilidad de filtros y se iteró el diseño.",
    learnings: [
      "La transparencia de costos desde el inicio genera confianza: mostrar el total con todos los cargos antes del checkout redujo el abandono.",
      "Menos es más en filtros: ofrecer pocos filtros pero bien pensados es mejor que saturar con opciones irrelevantes.",
      "El tracking visual reduce ansiedad: representar el estado del pedido con íconos y animaciones claras mejora la percepción de tiempo de espera.",
      "Las imágenes de comida son decisivas: invertir en fotografía de calidad impacta directamente en la conversión.",
      "Validar flujos con usuarios reales tempranamente evita retrabajos: los testeos revelaron supuestos incorrectos que se corrigieron antes del diseño final.",
    ],
    prototypeUrl: "https://www.figma.com/proto/OJ3N5HAzNblAOMVdni878p/PROPUESTA-DE-CONTENIDOS--DATTOLI-LUCIANA?node-id=33-2423&p=f&t=cjB0DRrXmCNefn05-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=33%3A2389",
  },
]
