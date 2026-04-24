import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-strong group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_24px_80px_-20px_var(--accent-glow),0_0_0_1px_var(--accent)]">
      {/* BMW M stripe top border — visible on hover */}
      <span
        aria-hidden
        className="m-stripe pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100"
      />

      {/* Hot radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(700px circle at 50% 0%, rgba(255,45,58,0.18), transparent 45%)",
        }}
      />

      {/* Outer glow ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow:
            "0 0 24px rgba(255,45,58,0.35), inset 0 0 24px rgba(255,45,58,0.08)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[10px] font-medium tracking-[0.25em] text-[var(--muted)]">
          PROJECT / {project.code}
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--muted)] transition-all group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] group-hover:shadow-[0_0_16px_var(--accent-glow)]">
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

      <h3 className="relative mt-8 text-2xl font-light tracking-tight transition-all duration-500 group-hover:text-glow sm:text-3xl">
        {project.title}
      </h3>
      <p className="relative mt-1 font-mono text-[11px] font-medium tracking-[0.15em] text-[var(--accent)]">
        {project.tagline}
      </p>

      <p className="relative mt-5 text-sm font-light leading-relaxed text-[var(--muted)]">
        {project.description}
      </p>

      <ul className="relative mt-6 flex flex-col gap-2 text-sm font-light text-foreground/90">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1.5 inline-block h-px w-4 shrink-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-6 group-hover:shadow-[0_0_6px_var(--accent-glow)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-7 flex flex-wrap gap-2 border-t border-[var(--border)] pt-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] font-medium tracking-[0.15em] text-[var(--muted)] transition-colors group-hover:border-[var(--border-strong)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
