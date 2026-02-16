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
  wireframeImages?: string[]
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
    image: "/images/case-skincare.jpg",
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
    informationArchitectureImage: "/images/skinsmart-userflow.png",
    userFlows: {
      description:
        "Se definieron flujos clave para representar las acciones más relevantes dentro de la app, como la creación de recordatorios personalizados para la reaplicación del protector solar. Estos flujos permitieron detectar oportunidades de mejora y optimizar la experiencia de navegación.",
      image: "/images/skinsmart-userflow.png",
    },
    wireframesDescription:
      "Los wireframes en baja fidelidad se desarrollaron para validar la estructura, jerarquía de la información y flujos principales antes de avanzar al diseño visual. El foco estuvo en garantizar claridad, consistencia y facilidad de uso en las pantallas clave de la aplicación.",
    wireframeImages: [
      "/images/skinsmart-wireframe-home.png",
      "/images/skinsmart-wireframe-recordatorios.png",
      "/images/skinsmart-wireframe-perfil.png",
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
    prototypeUrl: "#",
  },
  {
    id: "google-drive-redesign",
    number: "02",
    title: "Rediseña Google Drive",
    subtitle: "Reimaginando la gestión de archivos en la nube",
    image: "/images/case-drive.jpg",
    color: "horizon",
    accentColor: "bg-secondary/10",
    tags: ["UX Audit", "Redesign", "Desktop App", "Information Architecture"],
    marketingSummary:
      "Un ejercicio de rediseño que reimagina Google Drive como un espacio de trabajo más visual, organizado e inteligente. Porque encontrar un archivo no debería sentirse como buscar una aguja en un pajar digital.",
    problemStatement:
      "Los usuarios de Google Drive frecuentemente experimentan frustración al buscar archivos, especialmente cuando colaboran con múltiples personas. La jerarquía de carpetas tradicional no refleja la forma en que las personas piensan sobre sus documentos. La interfaz actual prioriza la estructura sobre el contexto, haciendo difícil encontrar archivos recientes o relacionados con un proyecto específico.",
    howCouldWe:
      "¿Cómo podríamos rediseñar la experiencia de Google Drive para que la organización y búsqueda de archivos sea tan natural como pensar en el proyecto al que pertenecen, reduciendo el tiempo de búsqueda y mejorando la colaboración en equipo?",
    informationArchitecture: [
      "Vista principal por Espacios de Trabajo (no carpetas)",
      "Panel lateral inteligente con archivos recientes y sugeridos",
      "Búsqueda contextual con filtros visuales",
      "Vista de actividad por proyecto con timeline",
      "Sistema de etiquetas cruzadas (tags) para organización flexible",
      "Dashboard de colaboración con estado de documentos compartidos",
    ],
    wireframesDescription:
      "El rediseño propone una interfaz basada en espacios de trabajo visuales en lugar de la estructura tradicional de carpetas. Los wireframes muestran un dashboard principal con tarjetas de proyectos, una barra de búsqueda contextual que sugiere resultados basados en actividad reciente, y un panel lateral que combina archivos recientes con sugerencias inteligentes. Se priorizó la vista de cuadrícula sobre la lista para mayor reconocimiento visual.",
    learnings: [
      "El modelo mental de carpetas está profundamente arraigado: la transición debe ser gradual, no abrupta.",
      "Los usuarios no quieren más funciones, quieren encontrar lo que buscan más rápido.",
      "La búsqueda contextual (por proyecto, por persona, por fecha) fue la función mejor evaluada en los tests de usabilidad.",
      "Rediseñar un producto que ya existe requiere un profundo respeto por los hábitos del usuario actual.",
    ],
  },
  {
    id: "restaurant-research",
    number: "03",
    title: "Research de App de Restaurantes",
    subtitle: "Investigación UX en el ecosistema gastronómico de Buenos Aires",
    image: "/images/case-restaurant.jpg",
    color: "amber",
    accentColor: "bg-accent/10",
    tags: ["UX Research", "User Interviews", "Competitive Analysis", "Buenos Aires"],
    marketingSummary:
      "Una investigación profunda sobre cómo los porteños eligen dónde comer. Desde entrevistas en las calles de Palermo hasta análisis de datos de las apps existentes, este research reveló que la decisión gastronómica es tanto emocional como práctica.",
    problemStatement:
      "Las aplicaciones existentes de restaurantes en Buenos Aires se enfocan principalmente en reseñas y calificaciones numéricas, pero los usuarios expresan que su decisión de dónde comer depende de factores mucho más matizados: el ambiente, la ocasión, el grupo con el que van, y recomendaciones de personas de confianza. Hay una desconexión entre lo que las apps ofrecen y lo que los usuarios realmente necesitan para decidir.",
    howCouldWe:
      "¿Cómo podríamos diseñar una experiencia de búsqueda de restaurantes que capture la riqueza de la escena gastronómica de Buenos Aires y ayude a los usuarios a encontrar el lugar perfecto no solo por la comida, sino por la experiencia completa que buscan?",
    informationArchitecture: [
      "Mapa de hallazgos de investigación (affinity map)",
      "Perfiles de usuario (3 arquetipos principales)",
      "Journey map del proceso de decisión gastronómica",
      "Análisis competitivo de 5 apps del mercado argentino",
      "Matriz de priorización de features",
      "Recomendaciones estratégicas para MVP",
    ],
    wireframesDescription:
      "Más que wireframes finales, esta fase de research produjo sketches de concepto que validaron las hipótesis principales. Se crearon prototipos de baja fidelidad para testear tres enfoques: búsqueda por ocasión, búsqueda por barrio, y feed social de recomendaciones. Los tests revelaron que la combinación de búsqueda por ocasión + recomendaciones sociales era la más valorada por los usuarios.",
    learnings: [
      "La localización importa: los hábitos gastronómicos de Buenos Aires son únicos y no se pueden extrapolar de otras ciudades.",
      "Las reseñas numéricas generan desconfianza: los usuarios prefieren recomendaciones narrativas de personas reales.",
      "El momento del día cambia completamente los criterios de decisión: almuerzo rápido vs. cena especial son journeys completamente diferentes.",
      "Validar supuestos temprano ahorró semanas de desarrollo en la dirección equivocada.",
    ],
  },
  {
    id: "restaurant-ux-writing",
    number: "04",
    title: "UX Writing de App de Restaurantes",
    subtitle: "El arte de guiar con palabras en la experiencia gastronómica",
    image: "/images/case-writing.jpg",
    color: "petal",
    accentColor: "bg-petal/20",
    tags: ["UX Writing", "Content Strategy", "Microcopy", "Tone of Voice"],
    marketingSummary:
      "Las palabras correctas en el momento correcto transforman una app funcional en una experiencia memorable. Este caso explora cómo el UX Writing puede ser el ingrediente secreto que hace que una app de restaurantes se sienta como la recomendación de un amigo, no como un catálogo frío.",
    problemStatement:
      "La app de restaurantes tenía una interfaz visualmente atractiva pero su copy era genérico, impersonal y en ocasiones confuso. Los usuarios reportaban no entender ciertas funciones, sentirse perdidos en flujos clave como la reserva, y una desconexión entre el tono premium de la marca y los mensajes dentro del producto. Los CTAs eran ambiguos y los mensajes de error, frustrantes.",
    howCouldWe:
      "¿Cómo podríamos crear un sistema de UX Writing que humanice la experiencia de la app, guíe a los usuarios con claridad y calidez en cada interacción, y refleje la personalidad única de la escena gastronómica porteña?",
    informationArchitecture: [
      "Auditoría completa de copy existente (200+ pantallas)",
      "Definición de Tone of Voice (3 pilares: cercano, conocedor, entusiasta)",
      "Guía de estilo de UX Writing con patrones y anti-patrones",
      "Sistema de microcopy para estados vacíos, errores y éxitos",
      "Copy para onboarding conversacional",
      "Framework de nombres y taxonomía de categorías gastronómicas",
    ],
    wireframesDescription:
      "Los wireframes anotados mostraron el antes y después del copy en pantallas clave: onboarding, búsqueda, ficha de restaurante, proceso de reserva y notificaciones. Cada pantalla incluyó especificaciones de tono, longitud máxima y variaciones contextuales. Se creó un componente de copy reutilizable para mensajes de estado (cargando, vacío, error, éxito) con variaciones que mantienen la personalidad de la marca.",
    learnings: [
      "Un CTA bien escrito puede aumentar la tasa de conversión más que un cambio de color o posición del botón.",
      "Los mensajes de error son oportunidades de diseño: transformar 'Error 404' en 'Parece que este plato se agotó del menú' cambió la percepción de la app.",
      "La consistencia de tono es tan importante como la consistencia visual: una guía de estilo de writing es tan esencial como un design system.",
      "El UX Writing no es decoración, es arquitectura: las palabras definen cómo los usuarios entienden y navegan el producto.",
    ],
  },
]
