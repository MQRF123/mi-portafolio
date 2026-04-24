export type StackItem = {
  name: string;
  category: "Language" | "Runtime" | "Framework";
};

export const stack: StackItem[] = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Dart", category: "Language" },
  { name: "Kotlin", category: "Language" },
  { name: "Node.js", category: "Runtime" },
  { name: "Flutter", category: "Framework" },
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
    slug: "ecommerce-gamarra",
    code: "01",
    title: "E-commerce Gamarra",
    tagline: "Gestión de inventarios · Arquitectura escalable",
    description:
      "Plataforma de comercio para el epicentro textil más grande del Perú. Sistema de inventario multi-tienda con sincronización en tiempo real, pensado para soportar picos de tráfico sin degradar el checkout.",
    highlights: [
      "Modelo de datos normalizado con cache en capa de acceso",
      "Arquitectura modular por dominio (catálogo, stock, pedidos)",
      "Búsqueda facetada con índices invertidos",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    slug: "telemedicine-app",
    code: "02",
    title: "Telemedicine App",
    tagline: "Imágenes médicas 3D · Seguridad clínica",
    description:
      "Aplicación de telemedicina con visualización y conversión de estudios médicos 3D (DICOM → modelos renderizables). Auditoría de acceso, cifrado en tránsito y reposo, cumplimiento de estándares de salud.",
    highlights: [
      "Pipeline de conversión DICOM a formatos web optimizados",
      "Autenticación por rol clínico y trazabilidad de lecturas",
      "Streaming progresivo de volúmenes para redes inestables",
    ],
    stack: ["Flutter", "Python", "FastAPI", "WebGL"],
  },
];
