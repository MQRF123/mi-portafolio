import { stack } from "@/data/portfolio";

export function Stack() {
  return (
    <section id="stack" className="w-full px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="STACK" title="Herramientas del garaje" />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {stack.map((tech) => (
            <li
              key={tech.name}
              className="glass group relative overflow-hidden rounded-xl p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="font-mono text-[10px] tracking-widest text-[var(--muted)]">
                {tech.category.toUpperCase()}
              </div>
              <div className="mt-2 text-lg font-medium text-foreground">
                {tech.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[var(--muted)]">
        <span className="h-px w-8 bg-[var(--accent)]" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
