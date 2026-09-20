export const courseCategories = [
  "Todos",
  "Educación",
  "Tecnología y ofimática",
  "Idiomas",
  "Capacitaciones profesionales",
] as const;

export type CourseCategory = (typeof courseCategories)[number];
export type CourseSourceStatus = "current-reference" | "advertised-pending-validation" | "pending-validation";

export type EducationalContent = {
  introduction: string;
  overview: string;
  applications: string[];
  audience: string[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  category: Exclude<CourseCategory, "Todos">;
  shortDescription: string;
  description: string;
  educationalContent: EducationalContent;
  modality?: string;
  duration?: string;
  schedule?: string;
  price?: string;
  syllabus?: string[];
  requirements?: string[];
  certification?: string;
  enrollmentInformation?: string;
  sourceStatus: CourseSourceStatus;
};

export const courses: Course[] = [
  {
    id: "excel-desde-cero",
    slug: "excel-desde-cero",
    title: "Excel desde cero",
    category: "Tecnología y ofimática",
    shortDescription: "Una opción de formación para comenzar a trabajar con hojas de cálculo.",
    description: "Consulte la información disponible del programa Excel desde cero y los detalles de inscripción directamente con Instituto Técnico Rivedu.",
    educationalContent: {
      introduction: "Microsoft Excel es una herramienta de hoja de cálculo que permite organizar información, realizar operaciones y presentar datos de forma ordenada.",
      overview: "Las hojas de cálculo se estructuran mediante filas, columnas y celdas. Pueden utilizarse para trabajar con información numérica y registros cotidianos sin depender de un formato único.",
      applications: ["Organización de información", "Presupuestos", "Control de gastos", "Inventarios", "Elaboración de reportes", "Operaciones y cálculos"],
      audience: ["Personas que desean familiarizarse con las hojas de cálculo", "Estudiantes", "Personal administrativo", "Personas que organizan información en negocios"],
    },
    sourceStatus: "advertised-pending-validation",
  },
  {
    id: "microsoft-office",
    slug: "microsoft-office",
    title: "Microsoft Office",
    category: "Tecnología y ofimática",
    shortDescription: "Formación general relacionada con herramientas de productividad digital.",
    description: "Conozca la información disponible sobre Microsoft Office y consulte el alcance actual del programa directamente con el instituto.",
    educationalContent: {
      introduction: "Microsoft Office es una suite de herramientas de productividad utilizada para crear documentos, trabajar con datos y preparar presentaciones.",
      overview: "Entre sus ejemplos más conocidos se encuentran Word, Excel y PowerPoint. Cada aplicación responde a necesidades distintas de organización y comunicación de información.",
      applications: ["Elaboración de documentos", "Hojas de cálculo", "Presentaciones", "Organización de información", "Actividades académicas y administrativas"],
      audience: ["Estudiantes", "Personal administrativo", "Personas que preparan documentos", "Personas interesadas en herramientas de productividad"],
    },
    sourceStatus: "advertised-pending-validation",
  },
  {
    id: "manipulacion-de-alimentos",
    slug: "manipulacion-de-alimentos",
    title: "Manipulación de Alimentos",
    category: "Capacitaciones profesionales",
    shortDescription: "Capacitación general sobre el manejo responsable de alimentos.",
    description: "Consulte la información actual del programa de Manipulación de Alimentos, sus condiciones y detalles de inscripción.",
    educationalContent: {
      introduction: "La manipulación de alimentos reúne prácticas de higiene y cuidado que ayudan a mantener los alimentos en condiciones apropiadas durante su preparación y manejo.",
      overview: "La inocuidad depende de distintos momentos, como la limpieza, la prevención de contaminación y el almacenamiento responsable. Estos conceptos deben aplicarse según el contexto de cada establecimiento.",
      applications: ["Restaurantes", "Cafeterías", "Panaderías", "Servicios de alimentación", "Negocios que preparan o comercializan alimentos"],
      audience: ["Personas que trabajan con alimentos", "Emprendedores de servicios de alimentación", "Personal de restaurantes y cafeterías", "Personas interesadas en buenas prácticas de higiene"],
    },
    sourceStatus: "advertised-pending-validation",
  },
  {
    id: "servicio-al-cliente",
    slug: "servicio-al-cliente",
    title: "Servicio al Cliente",
    category: "Capacitaciones profesionales",
    shortDescription: "Una mirada general a la atención y comunicación con clientes.",
    description: "Solicite información actualizada sobre el programa, horarios, precio y disponibilidad de Servicio al Cliente.",
    educationalContent: {
      introduction: "El servicio al cliente comprende las interacciones que una organización mantiene con las personas antes, durante y después de una consulta o compra.",
      overview: "La comunicación clara, la escucha y el seguimiento ayudan a comprender solicitudes y responder de manera ordenada en distintos canales.",
      applications: ["Atención presencial", "Atención telefónica", "Comunicación digital", "Gestión de consultas", "Manejo de situaciones difíciles", "Seguimiento de solicitudes"],
      audience: ["Personal de ventas", "Personas que atienden clientes", "Emprendedores", "Personal administrativo"],
    },
    sourceStatus: "advertised-pending-validation",
  },
  {
    id: "ingles-conversacional",
    slug: "ingles-conversacional",
    title: "Inglés Conversacional",
    category: "Idiomas",
    shortDescription: "Una opción de formación general enfocada en la comunicación oral.",
    description: "Consulte el nivel, modalidad y condiciones actuales del curso de Inglés Conversacional.",
    educationalContent: {
      introduction: "El inglés conversacional se enfoca en el uso oral del idioma para comprender y expresar ideas en situaciones de comunicación.",
      overview: "La práctica de conversaciones puede relacionarse con saludos, preguntas, respuestas y otros intercambios cotidianos. El alcance de un programa específico debe confirmarse con el instituto.",
      applications: ["Conversaciones cotidianas", "Comunicación laboral", "Viajes", "Atención a personas de otros países", "Interacción en contextos internacionales"],
      audience: ["Personas interesadas en desarrollar habilidades de comunicación", "Estudiantes", "Trabajadores", "Personas que desean aprender otro idioma"],
    },
    sourceStatus: "advertised-pending-validation",
  },
  {
    id: "portugues",
    slug: "portugues",
    title: "Portugués",
    category: "Idiomas",
    shortDescription: "Una opción de formación general en el idioma portugués.",
    description: "Solicite información sobre el programa vigente de Portugués y sus detalles de inscripción.",
    educationalContent: {
      introduction: "El portugués es un idioma utilizado por comunidades de distintos países y puede estudiarse para ampliar las posibilidades de comunicación.",
      overview: "El aprendizaje de un idioma puede involucrar comprensión, expresión e interacción en situaciones cotidianas y profesionales. El programa particular debe consultarse directamente.",
      applications: ["Comunicación cotidiana", "Viajes", "Intercambios culturales", "Entornos profesionales con personas lusófonas"],
      audience: ["Personas interesadas en idiomas", "Estudiantes", "Viajeros", "Profesionales que desean ampliar sus conocimientos lingüísticos"],
    },
    sourceStatus: "advertised-pending-validation",
  },
  {
    id: "secretariado-ejecutivo",
    slug: "secretariado-ejecutivo",
    title: "Secretariado Ejecutivo",
    category: "Capacitaciones profesionales",
    shortDescription: "Formación general relacionada con la organización y apoyo administrativo.",
    description: "Consulte la modalidad y la información actual disponible para Secretariado Ejecutivo.",
    educationalContent: {
      introduction: "El secretariado ejecutivo reúne funciones de organización, comunicación y apoyo a las actividades administrativas de una organización.",
      overview: "Las tareas habituales pueden incluir coordinación, gestión documental y atención de consultas. La combinación exacta de contenidos depende de cada programa de formación.",
      applications: ["Organización administrativa", "Gestión documental", "Comunicación empresarial", "Coordinación de actividades", "Atención de consultas", "Uso de herramientas de oficina"],
      audience: ["Personas interesadas en funciones administrativas", "Personal de oficina", "Personas que coordinan actividades", "Personas interesadas en comunicación empresarial"],
    },
    sourceStatus: "advertised-pending-validation",
  },
  {
    id: "contabilidad",
    slug: "contabilidad",
    title: "Contabilidad",
    category: "Capacitaciones profesionales",
    shortDescription: "Una introducción general al registro y organización de información económica.",
    description: "Solicite información actualizada sobre el programa de Contabilidad y sus condiciones de inscripción.",
    educationalContent: {
      introduction: "La contabilidad es el área que registra y organiza operaciones económicas para facilitar la comprensión de la información de una actividad o negocio.",
      overview: "El análisis contable puede apoyar el seguimiento de ingresos, gastos y documentos relacionados. Los temas que formen parte del curso específico deben ser confirmados por el instituto.",
      applications: ["Registro de operaciones económicas", "Organización de ingresos y gastos", "Documentación contable", "Interpretación básica de información financiera", "Administración de un negocio"],
      audience: ["Emprendedores", "Personal administrativo", "Personas interesadas en el área contable", "Personas que organizan información económica"],
    },
    sourceStatus: "advertised-pending-validation",
  },
  {
    id: "ccna",
    slug: "ccna",
    title: "CCNA",
    category: "Tecnología y ofimática",
    shortDescription: "Capacitación general relacionada con redes y tecnologías de red.",
    description: "Consulte los contenidos y condiciones actuales de la capacitación relacionada con CCNA.",
    educationalContent: {
      introduction: "Las redes informáticas permiten la comunicación entre equipos y el intercambio de información mediante distintos dispositivos y conexiones.",
      overview: "El estudio general de redes puede abordar conectividad, dispositivos de red y comunicación entre equipos. Routers y switches son ejemplos de conceptos habituales del área.",
      applications: ["Redes de computadoras", "Conectividad", "Dispositivos de red", "Comunicación entre equipos", "Seguridad de redes como área de estudio"],
      audience: ["Personas interesadas en redes informáticas", "Estudiantes de tecnología", "Personas que desean conocer conceptos de conectividad", "Personal relacionado con soporte técnico"],
    },
    sourceStatus: "advertised-pending-validation",
  },
  {
    id: "bachillerato-por-madurez",
    slug: "bachillerato-por-madurez",
    title: "Bachillerato por Madurez",
    category: "Educación",
    shortDescription: "Información general sobre una modalidad para completar estudios de educación secundaria.",
    description: "Solicite información sobre el programa de Bachillerato por Madurez y sus condiciones actuales.",
    educationalContent: {
      introduction: "Bachillerato por Madurez es una modalidad educativa dirigida a personas que buscan completar estudios de educación secundaria mediante los mecanismos oficiales correspondientes.",
      overview: "Las pruebas, requisitos y condiciones de titulación deben verificarse con las autoridades educativas correspondientes y con el instituto antes de iniciar cualquier proceso.",
      applications: ["Continuidad de estudios secundarios", "Preparación para mecanismos oficiales de evaluación", "Organización de un plan personal de estudio", "Consulta de requisitos educativos"],
      audience: ["Personas interesadas en completar sus estudios secundarios", "Adultos que retoman su trayectoria educativa", "Personas que necesitan orientación sobre esta modalidad"],
    },
    sourceStatus: "advertised-pending-validation",
  },
  {
    id: "tercer-ciclo",
    slug: "tercer-ciclo",
    title: "Tercer Ciclo",
    category: "Educación",
    shortDescription: "Un programa anunciado dentro del área de educación secundaria.",
    description: "Consulte la modalidad, requisitos y condiciones actuales del programa de Tercer Ciclo.",
    educationalContent: {
      introduction: "El Tercer Ciclo corresponde a una etapa de la Educación General Básica en Costa Rica y forma parte de la trayectoria de educación secundaria.",
      overview: "Esta etapa contribuye a la continuidad de los estudios y al desarrollo de conocimientos generales. Las condiciones de un programa específico deben confirmarse directamente.",
      applications: ["Continuidad de la trayectoria educativa", "Fortalecimiento de conocimientos generales", "Preparación para etapas posteriores de estudio"],
      audience: ["Personas interesadas en completar esta etapa educativa", "Estudiantes que requieren orientación sobre el Tercer Ciclo", "Personas que desean continuar su trayectoria académica"],
    },
    sourceStatus: "advertised-pending-validation",
  },
  {
    id: "desechos-hospitalarios",
    slug: "desechos-hospitalarios",
    title: "Desechos Hospitalarios",
    category: "Capacitaciones profesionales",
    shortDescription: "Información general sobre la gestión responsable de residuos en entornos sanitarios.",
    description: "Solicite información actualizada sobre la capacitación de Desechos Hospitalarios y sus detalles de inscripción.",
    educationalContent: {
      introduction: "La gestión de desechos hospitalarios se relaciona con el manejo responsable de residuos generados en entornos de atención sanitaria.",
      overview: "La separación, la higiene y la prevención de riesgos son conceptos importantes para proteger a las personas y al entorno. Los procedimientos concretos deben seguir la normativa y los protocolos vigentes.",
      applications: ["Separación responsable de residuos", "Prevención de riesgos", "Higiene en entornos sanitarios", "Manejo responsable", "Protección de las personas y del entorno"],
      audience: ["Personas interesadas en la gestión de residuos sanitarios", "Personal relacionado con entornos de atención", "Personas que desean conocer principios generales de manejo responsable"],
    },
    sourceStatus: "advertised-pending-validation",
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getRelatedCourses(course: Course, limit = 3) {
  const sameCategory = courses.filter((item) => item.slug !== course.slug && item.category === course.category);
  const others = courses.filter((item) => item.slug !== course.slug && item.category !== course.category);
  return [...sameCategory, ...others].slice(0, limit);
}
