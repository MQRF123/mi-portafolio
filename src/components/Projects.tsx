import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full px-6 py-24 sm:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[var(--muted)]">
            <span className="h-px w-8 bg-[var(--accent)]" />
            PROYECTOS SELECCIONADOS
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Construido para correr.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
