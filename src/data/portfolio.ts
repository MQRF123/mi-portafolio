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

export type Project = {
  slug: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
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
  },
];
