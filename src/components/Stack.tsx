import type { CSSProperties } from "react";
import { stack, type StackItem } from "@/data/portfolio";

export function Stack() {
  return (
    <section id="stack" className="relative w-full px-6 py-24 sm:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[var(--muted)]">
              <span className="h-px w-8 bg-[var(--accent)]" />
              STACK · HERRAMIENTAS DEL GARAJE
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Afinado por lenguaje,
              <br className="hidden sm:block" /> optimizado por propósito.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Cada herramienta elegida según el terreno. No uso un martillo para
            cada clavo — elijo el tuning correcto para la pista.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {stack.map((tech, index) => (
            <StackCard key={tech.name} tech={tech} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function StackCard({ tech, index }: { tech: StackItem; index: number }) {
  const isFeatured = index === 0;
  return (
    <li
      style={{ "--brand": tech.color } as CSSProperties}
      className={`glass group relative flex flex-col overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 ${
        isFeatured ? "col-span-2 row-span-1 sm:col-span-1 lg:col-span-2" : ""
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 30% 0%, color-mix(in oklab, var(--brand) 22%, transparent), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--brand), transparent)",
        }}
      />

      <div className="relative flex items-start justify-between">
        <Monogram gradient={tech.gradient} text={tech.monogram} />
        <span className="font-mono text-[10px] tracking-widest text-[var(--muted)]">
          {tech.category.toUpperCase()}
        </span>
      </div>

      <div className="relative mt-5">
        <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-[var(--brand)]">
          {tech.name}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
          {tech.tagline}
        </p>
      </div>

      <div className="relative mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
        <span className="font-mono text-[10px] tracking-widest text-[var(--muted)]">
          LVL {tech.level}/3
        </span>
        <LevelBars level={tech.level} />
      </div>
    </li>
  );
}

function Monogram({ gradient, text }: { gradient: string; text: string }) {
  return (
    <div
      className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-[0_8px_24px_-8px_var(--brand)]`}
    >
      <span className="font-mono text-base font-bold tracking-tight text-white mix-blend-plus-lighter">
        {text}
      </span>
      <div
        aria-hidden
        className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20"
      />
    </div>
  );
}

function LevelBars({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className="flex items-end gap-1">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-1 rounded-full transition-all duration-500"
          style={{
            height: `${i * 4 + 4}px`,
            background:
              i <= level ? "var(--brand)" : "var(--border-strong)",
            opacity: i <= level ? 1 : 0.6,
          }}
        />
      ))}
    </div>
  );
}
