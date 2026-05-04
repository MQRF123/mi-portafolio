"use client";

import { useState, useMemo } from "react";
import { SkillsSphere } from "@/components/SkillsSphere";
import {
  SKILL_CATEGORIES,
  SKILL_LEVELS,
  SKILLS,
  getFilteredSkills,
  type SkillCategoryFilter,
  type SkillLevelFilter,
} from "@/data/skills";

const CATEGORY_LABELS: Record<string, string> = {
  frontend: "Frontend",
  backend:  "Backend",
  language: "Lenguaje",
  mobile:   "Mobile",
  database: "Base de datos",
  devops:   "DevOps",
  tool:     "Herramienta",
};

const LEVEL_LABELS: Record<string, string> = {
  expert:   "Experto",
  advanced: "Avanzado",
};

function FilterChip({
  active,
  color,
  label,
  onClick,
}: {
  active:  boolean;
  color:   string;
  label:   string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="rounded-full border px-3.5 py-1.5 text-xs transition-all duration-200"
      style={
        active
          ? {
              color,
              borderColor: `${color}66`,
              background:  `linear-gradient(180deg, ${color}26 0%, rgba(10,10,15,0.72) 100%)`,
              boxShadow:   `0 0 0 1px ${color}33 inset, 0 0 24px ${color}18`,
            }
          : {
              borderColor: "var(--border)",
              background:  "transparent",
              color:       "var(--muted)",
            }
      }
    >
      <span className="inline-flex items-center gap-2">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
        />
        {label}
      </span>
    </button>
  );
}

export function Stack() {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryFilter>("all");
  const [activeLevel,    setActiveLevel]    = useState<SkillLevelFilter>("all");

  const count = useMemo(
    () => getFilteredSkills({ category: activeCategory, level: activeLevel }).length,
    [activeCategory, activeLevel],
  );

  const toggleCategory = (key: SkillCategoryFilter) =>
    setActiveCategory((prev) => (prev === key ? "all" : key));

  const toggleLevel = (key: SkillLevelFilter) =>
    setActiveLevel((prev) => (prev === key ? "all" : key));

  return (
    <section id="stack" className="relative w-full px-6 py-24 sm:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 m-stripe rounded-full" />
            <h2 className="font-mono text-2xl font-bold tracking-[0.15em] text-foreground sm:text-3xl lg:text-4xl">
              STACK
            </h2>
          </div>
          <p className="text-xl font-light tracking-tight text-[var(--muted)] sm:text-2xl">
            Herramientas del <span className="font-medium text-[var(--accent)]">Garaje</span>.
          </p>
          <p className="max-w-2xl text-xs font-light leading-relaxed text-[var(--muted)]">
            Afinado por lenguaje, optimizado por propósito. Cada herramienta elegida según el terreno.
          </p>
        </div>

        {/* sphere */}
        <div className="mt-10">
          <SkillsSphere activeCategory={activeCategory} activeLevel={activeLevel} />
        </div>

        {/* filters */}
        <div className="mt-6 flex flex-col items-center gap-6">

          {/* level filter */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.24em] text-[var(--muted)]">
              FILTRAR POR NIVEL
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              <FilterChip
                active={activeLevel === "all"}
                color="#e2e8f0"
                label="Todos"
                onClick={() => setActiveLevel("all")}
              />
              {SKILL_LEVELS.map((l) => (
                <FilterChip
                  key={l.key}
                  active={activeLevel === l.key}
                  color={l.color}
                  label={LEVEL_LABELS[l.key]}
                  onClick={() => toggleLevel(l.key)}
                />
              ))}
            </div>
          </div>

          {/* category filter */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.24em] text-[var(--muted)]">
              FILTRAR POR CATEGORÍA
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              <FilterChip
                active={activeCategory === "all"}
                color="#e2e8f0"
                label="Todas"
                onClick={() => setActiveCategory("all")}
              />
              {SKILL_CATEGORIES.map((c) => (
                <FilterChip
                  key={c.key}
                  active={activeCategory === c.key}
                  color={c.color}
                  label={CATEGORY_LABELS[c.key]}
                  onClick={() => toggleCategory(c.key)}
                />
              ))}
            </div>
          </div>

          {/* count */}
          <p className="font-mono text-[10px] tracking-widest text-[var(--muted)]">
            {count} / {SKILLS.length} TECNOLOGÍAS
          </p>
        </div>
      </div>
    </section>
  );
}
