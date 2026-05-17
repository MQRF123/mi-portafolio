"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { SkillsSphere } from "@/components/SkillsSphere";
import {
  SKILL_CATEGORIES,
  SKILL_LEVELS,
  SKILLS,
  getFilteredSkills,
  type SkillCategoryFilter,
  type SkillLevelFilter,
} from "@/data/skills";

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
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
        {label}
      </span>
    </button>
  );
}

export function Stack() {
  const t = useTranslations("stack");
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
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 m-stripe rounded-full" />
            <h2 className="font-mono text-2xl font-bold tracking-[0.15em] text-foreground sm:text-3xl lg:text-4xl">
              {t("title")}
            </h2>
          </div>
          <p className="text-xl font-light tracking-tight text-[var(--muted)] sm:text-2xl">
            {t("subtitlePre")}{" "}
            <span className="font-medium text-[var(--accent)]">{t("subtitleAccent")}</span>.
          </p>
          <p className="max-w-2xl text-xs font-light leading-relaxed text-[var(--muted)]">
            {t("description")}
          </p>
        </div>

        <div className="mt-10">
          <SkillsSphere activeCategory={activeCategory} activeLevel={activeLevel} />
        </div>

        <div className="mt-6 flex flex-col items-center gap-6">

          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.24em] text-[var(--muted)]">
              {t("filterLevel")}
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              <FilterChip
                active={activeLevel === "all"}
                color="#e2e8f0"
                label={t("all")}
                onClick={() => setActiveLevel("all")}
              />
              {SKILL_LEVELS.map((l) => (
                <FilterChip
                  key={l.key}
                  active={activeLevel === l.key}
                  color={l.color}
                  label={t(`levels.${l.key}`)}
                  onClick={() => toggleLevel(l.key)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.24em] text-[var(--muted)]">
              {t("filterCategory")}
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              <FilterChip
                active={activeCategory === "all"}
                color="#e2e8f0"
                label={t("allCategories")}
                onClick={() => setActiveCategory("all")}
              />
              {SKILL_CATEGORIES.map((c) => (
                <FilterChip
                  key={c.key}
                  active={activeCategory === c.key}
                  color={c.color}
                  label={t(`categories.${c.key}`)}
                  onClick={() => toggleCategory(c.key)}
                />
              ))}
            </div>
          </div>

          <p className="font-mono text-[10px] tracking-widest text-[var(--muted)]">
            {t("count", { count, total: SKILLS.length })}
          </p>
        </div>
      </div>
    </section>
  );
}
