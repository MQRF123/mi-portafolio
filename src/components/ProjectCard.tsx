import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_20px_60px_-20px_var(--accent-glow)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, 0%), var(--accent-soft), transparent 40%)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest text-[var(--muted)]">
          PROJECT / {project.code}
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--muted)] transition-all group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M7 17L17 7M9 7h8v8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <h3 className="relative mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">
        {project.title}
      </h3>
      <p className="relative mt-1 font-mono text-xs tracking-wide text-[var(--accent)]">
        {project.tagline}
      </p>

      <p className="relative mt-5 text-sm leading-relaxed text-[var(--muted)]">
        {project.description}
      </p>

      <ul className="relative mt-6 flex flex-col gap-2 text-sm text-foreground/90">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1.5 inline-block h-px w-4 shrink-0 bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-7 flex flex-wrap gap-2 border-t border-[var(--border)] pt-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] tracking-wider text-[var(--muted)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
