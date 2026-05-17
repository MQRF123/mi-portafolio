"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import type { ProjectMeta } from "@/data/portfolio";
import { useLenis } from "@/providers/LenisProvider";

type Decision = { title: string; body: string };
type Challenge = { title: string; body: string };
type ProjectContent = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  problem: string;
  role: string;
  duration: string;
  decisions: Decision[];
  challenges: Challenge[];
};

export function ProjectDetailModal({
  project,
  onClose,
}: {
  project: ProjectMeta | null;
  onClose: () => void;
}) {
  const t = useTranslations("modal");
  const td = useTranslations("projectsData");
  const lenis = useLenis();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    lenis?.stop();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.classList.remove("modal-open");
      lenis?.start();
    };
  }, [project, onClose, lenis]);

  if (!project) return null;

  const content = td.raw(project.slug) as ProjectContent;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${content.title}`}
      data-lenis-prevent
      className="fixed inset-0 z-[9990] flex items-stretch justify-center"
      style={{ animation: "drs-reveal 0.65s cubic-bezier(0.25, 0, 0.08, 1) both", willChange: "clip-path" }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 z-[9999] block h-full w-[3px]"
        style={{
          background: "linear-gradient(180deg, transparent, #ff2d3a 18%, #ff8800 50%, #ff2d3a 82%, transparent)",
          boxShadow: "0 0 18px rgba(255,45,58,0.95), 0 0 48px rgba(255,45,58,0.55)",
          animation: "drs-reveal-edge 0.65s cubic-bezier(0.25, 0, 0.08, 1) both",
          willChange: "left, opacity",
        }}
      />
      <button
        type="button"
        aria-label={t("close")}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-md"
      />

      <div
        className="relative my-4 flex max-h-[calc(100vh-2rem)] w-[min(100%,64rem)] flex-col overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--background)] shadow-[0_30px_120px_-20px_rgba(255,45,58,0.35)] sm:my-10 sm:max-h-[calc(100vh-5rem)]"
        style={{ animation: "fade-up 0.6s ease-out 0.1s both" }}
      >
        <span aria-hidden className="m-stripe absolute inset-x-0 top-0 h-[2px] rounded-full" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ background: "radial-gradient(800px circle at 50% 0%, rgba(255,45,58,0.10), transparent 50%)" }}
        />

        <button
          type="button"
          onClick={onClose}
          aria-label={t("close")}
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--background)]/70 text-[var(--muted)] backdrop-blur transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[0_0_16px_var(--accent-glow)]"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal-scroll relative overflow-y-auto px-7 py-12 sm:px-12 sm:py-14">
          <header className="flex flex-col gap-3" style={{ animation: "fade-up 0.6s ease-out 0.25s both" }}>
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-10 m-stripe rounded-full" />
              <span className="font-mono text-[10px] font-medium tracking-[0.25em] text-[var(--muted)]">
                PROJECT / {project.code}
              </span>
            </div>
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">{content.title}</h2>
            <p className="font-mono text-xs font-medium tracking-[0.18em] text-[var(--accent)]">{content.tagline}</p>
            <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-[var(--muted)] sm:text-base">{content.description}</p>
          </header>

          <section className="mt-10 grid gap-5 sm:grid-cols-3" style={{ animation: "fade-up 0.6s ease-out 0.35s both" }}>
            <Meta label={t("roleLabel")}     value={content.role} />
            <Meta label={t("durationLabel")} value={content.duration} />
            <Meta label={t("stackLabel")}    value={project.stack.join(" · ")} />
          </section>

          <Block title={t("problemTitle")} delay={0.45}>
            <p className="text-sm font-light leading-relaxed text-foreground/90">{content.problem}</p>
          </Block>

          <Block title={t("highlightsTitle")} delay={0.55}>
            <ul className="flex flex-col gap-3">
              {content.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-light leading-relaxed text-foreground/90">
                  <span className="mt-2 inline-block h-px w-5 shrink-0 bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title={t("decisionsTitle")} delay={0.65}>
            <div className="grid gap-4 sm:grid-cols-2">
              {content.decisions.map((d) => (
                <article key={d.title} className="glass-strong rounded-xl border border-[var(--border)] p-5">
                  <h3 className="font-mono text-[11px] font-medium tracking-[0.2em] text-[var(--accent)]">{d.title.toUpperCase()}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-foreground/90">{d.body}</p>
                </article>
              ))}
            </div>
          </Block>

          <Block title={t("challengesTitle")} delay={0.75}>
            <div className="flex flex-col gap-4">
              {content.challenges.map((c) => (
                <article key={c.title} className="rounded-xl border border-[var(--border)] p-5">
                  <h3 className="font-mono text-[11px] font-medium tracking-[0.2em] text-foreground">{c.title.toUpperCase()}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[var(--muted)]">{c.body}</p>
                </article>
              ))}
            </div>
          </Block>

          {(project.links?.demo || project.links?.repo) && (
            <Block title={t("linksTitle")} delay={0.85}>
              <div className="flex flex-wrap gap-3">
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                    className="rounded-full border border-[var(--accent)] px-5 py-2 font-mono text-[11px] font-medium tracking-[0.2em] text-[var(--accent)] transition-all hover:shadow-[0_0_16px_var(--accent-glow)]">
                    {t("liveDemo")}
                  </a>
                )}
                {project.links.repo && (
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer"
                    className="rounded-full border border-[var(--border-strong)] px-5 py-2 font-mono text-[11px] font-medium tracking-[0.2em] text-foreground transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                    {t("github")}
                  </a>
                )}
              </div>
            </Block>
          )}
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-[var(--border-strong)] pl-4">
      <p className="font-mono text-[10px] font-medium tracking-[0.25em] text-[var(--muted)]">{label}</p>
      <p className="mt-2 text-sm font-light text-foreground">{value}</p>
    </div>
  );
}

function Block({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <section className="mt-12" style={{ animation: `fade-up 0.6s ease-out ${delay}s both` }}>
      <div className="flex items-center gap-3">
        <span className="h-[1px] w-8 m-stripe rounded-full" />
        <h3 className="font-mono text-sm font-bold tracking-[0.2em] text-foreground">{title}</h3>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
