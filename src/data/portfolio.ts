export type AboutMe = {
  name: string;
  role: string;
  location: string;
  education: {
    institution: string;
    degree: string;
    period: string;
    cycle: string;
  };
  languages: { lang: string; level: string; code: string }[];
};

export const aboutMe: AboutMe = {
  name: "Michael Fred Quispe Roldan",
  role: "Software Developer",
  location: "Lima, PE",
  education: {
    institution: "Universidad Peruana de Ciencias Aplicadas · UPC",
    degree: "Ingeniería de Software",
    period: "2022 – 2027",
    cycle: "8vo Ciclo",
  },
  languages: [
    { lang: "Español", level: "Nativo", code: "ES" },
    { lang: "English", level: "B1 · Intermedio", code: "EN" },
  ],
};

export type Certification = {
  code: string;
  title: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  {
    code: "MDB-01",
    title: "Introduction to MongoDB",
    issuer: "MongoDB University",
    year: "2025",
  },
  {
    code: "SCR-01",
    title: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    year: "2023",
  },
  {
    code: "DVP-01",
    title: "DevOps Culture and Mindset",
    issuer: "UC Davis · Coursera",
    year: "2025",
  },
  {
    code: "JVA-01",
    title: "Introducción a Java",
    issuer: "Oracle Academy",
    year: "2025",
  },
];

export type StackItem = {
  name: string;
  monogram: string;
  category: "Language" | "Runtime" | "Framework";
  color: string;
  gradient: string;
  level: 1 | 2 | 3;
  tagline: string;
};

export const stack: StackItem[] = [
  {
    name: "TypeScript",
    monogram: "TS",
    category: "Language",
    color: "#3178c6",
    gradient: "from-[#3178c6] to-[#235a97]",
    level: 3,
    tagline: "Tipos estrictos, cero sorpresas",
  },
  {
    name: "JavaScript",
    monogram: "JS",
    category: "Language",
    color: "#f7df1e",
    gradient: "from-[#f7df1e] to-[#b89f11]",
    level: 3,
    tagline: "Base de la web moderna",
  },
  {
    name: "Python",
    monogram: "Py",
    category: "Language",
    color: "#4b8bbe",
    gradient: "from-[#4b8bbe] to-[#ffd43b]",
    level: 2,
    tagline: "Scripting y data pipelines",
  },
  {
    name: "Dart",
    monogram: "Dt",
    category: "Language",
    color: "#0175c2",
    gradient: "from-[#0175c2] to-[#013b62]",
    level: 3,
    tagline: "Motor de Flutter",
  },
  {
    name: "Kotlin",
    monogram: "Kt",
    category: "Language",
    color: "#7f52ff",
    gradient: "from-[#7f52ff] to-[#e44857]",
    level: 2,
    tagline: "Android nativo conciso",
  },
  {
    name: "Node.js",
    monogram: "Nd",
    category: "Runtime",
    color: "#539e43",
    gradient: "from-[#539e43] to-[#2b5a24]",
    level: 3,
    tagline: "Backend async de alto rendimiento",
  },
  {
    name: "Flutter",
    monogram: "Fl",
    category: "Framework",
    color: "#02569b",
    gradient: "from-[#02569b] to-[#45d1fd]",
    level: 3,
    tagline: "UI multiplataforma nativa",
  },
];

export type ProjectDetail = {
  problem: string;
  role: string;
  duration: string;
  technicalDecisions: { title: string; body: string }[];
  challenges: { title: string; body: string }[];
  links?: { demo?: string; repo?: string };
};

export type Project = {
  slug: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  detail: ProjectDetail;
};

export const projects: Project[] = [
  {
    slug: "finance-app",
    code: "01",
    title: "Simulador Financiero",
    tagline: "Motor de cálculo · Generación de cronogramas",
    description:
      "Plataforma web para simulación de créditos y financiamiento inmobiliario. Implementa un motor propio para el cálculo de flujos de caja, tasas (TCEA) y amortizaciones en tiempo real, con persistencia en la nube.",
    highlights: [
      "Lógica matemática compleja aislada en módulos de cálculo independientes",
      "Arquitectura server-side routing con Next.js y Turbopack",
      "Integración de autenticación y base de datos NoSQL con Firebase",
    ],
    stack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    detail: {
      problem:
        "Las hojas de cálculo y simuladores genéricos no permiten modelar créditos hipotecarios reales con tasas variables, periodos de gracia y amortizaciones precisas. Se necesitaba una plataforma que entregue resultados verificables y reproducibles.",
      role: "Full-stack Developer · Diseño técnico y construcción del motor de cálculo.",
      duration: "Proyecto académico · 8 semanas",
      technicalDecisions: [
        {
          title: "Motor de cálculo aislado",
          body: "Toda la lógica financiera (TCEA, flujo de caja, amortización) vive en módulos puros sin dependencias de UI ni I/O. Esto permite testear los algoritmos en isolation y reusarlos en server o cliente.",
        },
        {
          title: "Next.js con App Router",
          body: "Server-side routing y server components para reducir JS en el cliente. Turbopack en dev para iteración rápida.",
        },
        {
          title: "Firebase como backend",
          body: "Auth + Firestore para persistencia. Eligió un BaaS para enfocar tiempo en el dominio financiero, no en infra.",
        },
      ],
      challenges: [
        {
          title: "Precisión numérica",
          body: "Los cálculos financieros no toleran errores de coma flotante. Se normalizaron las operaciones a fixed-point para evitar drift en cuotas largas.",
        },
        {
          title: "Reactividad en cronogramas largos",
          body: "Recalcular 360 cuotas en cada cambio de input pegaba el render. Se memoizó el motor y se difirieron updates no críticos.",
        },
      ],
      links: {},
    },
  },
  {
    slug: "oncontrol-telemedicine",
    code: "02",
    title: "OnControl - Telemedicina",
    tagline: "Clean Architecture · Monitoreo clínico",
    description:
      "Aplicación móvil para el seguimiento médico, agendamiento de citas y control de tratamientos. Conecta a doctores y pacientes mediante un sistema estructurado de registro de síntomas y procedimientos.",
    highlights: [
      "Implementación estricta de Clean Architecture (Dominio, Datos, Presentación)",
      "Gestión de estados reactivos e inyección de dependencias",
      "Interfaz fluida y nativa compilada para Android e iOS",
    ],
    stack: ["Flutter", "Dart", "BLoC/Provider", "Clean Architecture"],
    detail: {
      problem:
        "El seguimiento médico fragmentado entre WhatsApp, llamadas y papel genera errores en tratamientos crónicos. Se requería un canal único entre paciente y doctor con trazabilidad completa.",
      role: "Mobile Developer · Arquitectura de capas y módulos de presentación.",
      duration: "Proyecto académico · 12 semanas",
      technicalDecisions: [
        {
          title: "Clean Architecture estricta",
          body: "Tres capas (Dominio, Datos, Presentación) con dependencia unidireccional. El dominio no conoce Flutter ni Firebase, lo que permite swap del backend sin tocar reglas de negocio.",
        },
        {
          title: "BLoC para estado",
          body: "Estados reactivos predecibles, fácilmente testeables. Cada feature tiene su propio BLoC desacoplado.",
        },
        {
          title: "Inyección de dependencias",
          body: "Service Locator central para construir grafos de dependencias. Facilita testing con mocks y mantiene los widgets agnósticos del data layer.",
        },
      ],
      challenges: [
        {
          title: "Sync offline-first",
          body: "Pacientes registran síntomas sin conexión. Se diseñó una cola local que reconcilia con el backend al recuperar red, evitando duplicados.",
        },
        {
          title: "UX para dos roles distintos",
          body: "Doctor y paciente comparten codebase pero ven flujos opuestos. Se modeló un router por rol que monta solo los módulos relevantes.",
        },
      ],
      links: {},
    },
  },
];
