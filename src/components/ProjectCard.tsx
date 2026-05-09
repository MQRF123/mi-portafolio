"use client";

import { useState, useEffect, useRef } from "react";
import type { Project } from "@/data/portfolio";
import { useDRS } from "./DRSContext";
import { TechIcon, hasTechIcon } from "./TechIcon";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const { triggerDRS } = useDRS();
  const [linksOpen, setLinksOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  function handleActivate() {
    triggerDRS(() => {
      onOpen(project);
    });
  }

  useEffect(() => {
    if (!linksOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setLinksOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [linksOpen]);

  const hasLinks = project.detail.links?.demo || project.detail.links?.repo;

  return (
    <article className="glass-strong group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_24px_80px_-20px_var(--accent-glow),0_0_0_1px_var(--accent)]">

      {/* Hover overlay — external links */}
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

      <div className="relative flex items-center">
        <span className="font-mono text-[10px] font-medium tracking-[0.25em] text-[var(--muted)]">
          PROJECT / {project.code}
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
        {project.stack.map((tech) =>
          hasTechIcon(tech) ? (
            <span
              key={tech}
              title={tech}
              className="group/tag relative inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-200 hover:border-[var(--border-strong)] hover:text-foreground group-hover:border-[var(--border-strong)]"
            >
              <TechIcon name={tech} size={13} />
              {/* tooltip */}
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border-strong)] bg-[var(--surface-raised)] px-2 py-1 font-mono text-[9px] tracking-[0.15em] text-foreground opacity-0 transition-opacity duration-150 group-hover/tag:opacity-100">
                {tech}
              </span>
            </span>
          ) : (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] font-medium tracking-[0.15em] text-[var(--muted)] transition-colors group-hover:border-[var(--border-strong)]"
            >
              {tech}
            </span>
          )
        )}
      </div>

      {/* DRS trigger + links popover */}
      <div className="relative mt-5 flex items-center justify-between border-t border-[var(--border)] pt-5">
        <button
          onClick={handleActivate}
          className="group/btn flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          <span
            aria-hidden
            className="h-[2px] w-5 m-stripe rounded-full opacity-60 transition-all duration-300 group-hover/btn:w-8 group-hover/btn:opacity-100"
          />
          VER DETALLES
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {hasLinks && (
          <div ref={popoverRef} className="relative">
            <button
              type="button"
              onClick={() => setLinksOpen((v) => !v)}
              className="group/proj flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              VER PROYECTO
              <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-300 group-hover/proj:translate-x-0.5 group-hover/proj:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 13L13 3M7 3h6v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {linksOpen && (
              <div
                className="absolute bottom-9 right-0 z-30 min-w-[160px] overflow-hidden rounded-xl border border-[var(--border-strong)] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]"
                style={{
                  background: "linear-gradient(135deg, rgba(16,16,20,0.98) 0%, rgba(22,22,28,0.97) 100%)",
                  backdropFilter: "blur(20px)",
                  animation: "fade-up 0.15s ease-out both",
                }}
              >
                {project.detail.links?.demo && (
                  <a
                    href={project.detail.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setLinksOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 font-mono text-[10px] font-medium tracking-[0.15em] text-[var(--muted)] transition-colors hover:bg-white/[0.04] hover:text-[var(--accent)]"
                  >
                    <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="8" cy="8" r="6.5" />
                      <path d="M1.5 8h13M8 1.5C6 4 5 6 5 8s1 4 3 6.5M8 1.5C10 4 11 6 11 8s-1 4-3 6.5" strokeLinecap="round" />
                    </svg>
                    PÁGINA WEB
                  </a>
                )}
                {project.detail.links?.repo && (
                  <a
                    href={project.detail.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setLinksOpen(false)}
                    className="flex items-center gap-3 border-t border-[var(--border)] px-4 py-3 font-mono text-[10px] font-medium tracking-[0.15em] text-[var(--muted)] transition-colors hover:bg-white/[0.04] hover:text-foreground"
                  >
                    <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    GITHUB
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
