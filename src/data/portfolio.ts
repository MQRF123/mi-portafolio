export type AboutMe = {
  name: string;
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

export type ProjectMeta = {
  slug: string;
  code: string;
  stack: string[];
  links?: { demo?: string; repo?: string };
};

export const projects: ProjectMeta[] = [
  {
    slug: "finance-app",
    code: "01",
    stack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    links: {
      demo: "https://finance-app-gray-six.vercel.app/",
      repo: "https://github.com/MQRF123/Finance-app",
    },
  },
  {
    slug: "oncontrol-telemedicine",
    code: "02",
    stack: ["Flutter", "Dart", "BLoC/Provider", "Clean Architecture"],
    links: {
      demo: "https://on-control.vercel.app/",
      repo: "https://github.com/OnControl-IOT",
    },
  },
];
