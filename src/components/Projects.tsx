"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full px-6 py-24 sm:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-10 m-stripe rounded-full" />
            <h2 className="font-mono text-2xl font-bold tracking-[0.15em] text-foreground sm:text-3xl lg:text-4xl">
              PROYECTOS
            </h2>
          </div>
          <p className="text-xl font-light tracking-tight text-[var(--muted)] sm:text-2xl">
            <span className="font-medium text-[var(--accent)] text-glow">Seleccionados</span> para correr.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={setActiveProject}
            />
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
