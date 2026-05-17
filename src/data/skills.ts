export const SKILL_CATEGORIES = [
  { key: "frontend",  color: "#2e9be2" },
  { key: "backend",   color: "#ff2d3a" },
  { key: "language",  color: "#e2e8f0" },
  { key: "mobile",    color: "#a855f7" },
  { key: "database",  color: "#fbbf24" },
  { key: "devops",    color: "#34d399" },
  { key: "tool",      color: "#fb923c" },
] as const;

export const SKILL_LEVELS = [
  { key: "expert",   color: "#e2e8f0" },
  { key: "advanced", color: "#8b8b95" },
] as const;

export type SkillCategory       = (typeof SKILL_CATEGORIES)[number]["key"];
export type SkillLevel          = (typeof SKILL_LEVELS)[number]["key"];
export type SkillCategoryFilter = SkillCategory | "all";
export type SkillLevelFilter    = SkillLevel    | "all";

export interface SkillNode {
  name:     string;
  level:    SkillLevel;
  category: SkillCategory;
}

export const CATEGORY_COLORS = Object.fromEntries(
  SKILL_CATEGORIES.map((c) => [c.key, c.color]),
) as Record<SkillCategory, string>;

export const LEVEL_SIZES: Record<SkillLevel, number> = {
  expert:   20,
  advanced: 16,
};

export function getFilteredSkills(
  filters: { category: SkillCategoryFilter; level: SkillLevelFilter },
  source: SkillNode[] = SKILLS,
) {
  return source.filter(
    (s) =>
      (filters.category === "all" || s.category === filters.category) &&
      (filters.level    === "all" || s.level    === filters.level),
  );
}

export const SKILLS: SkillNode[] = [
  { name: "TypeScript",   level: "expert",   category: "language"  },
  { name: "JavaScript",   level: "expert",   category: "language"  },
  { name: "Flutter",      level: "expert",   category: "mobile"    },
  { name: "Dart",         level: "expert",   category: "mobile"    },
  { name: "Node.js",      level: "expert",   category: "backend"   },
  { name: "Next.js",      level: "expert",   category: "frontend"  },
  { name: "React",        level: "expert",   category: "frontend"  },
  { name: "Tailwind CSS", level: "expert",   category: "frontend"  },
  { name: "Python",       level: "advanced", category: "language"  },
  { name: "Kotlin",       level: "advanced", category: "mobile"    },
  { name: "NestJS",       level: "advanced", category: "backend"   },
  { name: "Firebase",     level: "advanced", category: "database"  },
  { name: "MongoDB",      level: "advanced", category: "database"  },
  { name: "PostgreSQL",   level: "advanced", category: "database"  },
  { name: "Docker",       level: "advanced", category: "devops"    },
  { name: "Angular",      level: "advanced", category: "frontend"  },
  { name: "Vue.js",       level: "advanced", category: "frontend"  },
  { name: "Git",          level: "advanced", category: "tool"      },
  { name: "Figma",        level: "advanced", category: "tool"      },
];
