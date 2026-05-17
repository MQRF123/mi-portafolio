import { useTranslations } from "next-intl";
import { aboutMe } from "@/data/portfolio";
import { CertificationsCarousel } from "./CertificationsCarousel";

export function About() {
  const t = useTranslations("about");

  const systemRows = [
    { label: t("systemRows.nameLabel"),   value: t("systemRows.nameValue")   },
    { label: t("systemRows.roleLabel"),   value: t("systemRows.roleValue")   },
    { label: t("systemRows.baseLabel"),   value: t("systemRows.baseValue")   },
    { label: t("systemRows.cycleLabel"),  value: t("systemRows.cycleValue")  },
    { label: t("systemRows.statusLabel"), value: t("systemRows.statusValue") },
  ];

  return (
    <section id="about" className="w-full px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">

        <div className="mb-12 flex flex-col gap-3">
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
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">

          {/* Left column */}
          <div className="flex flex-col gap-6">

            {/* Academic timeline */}
            <div className="glass rounded-2xl p-7">
              <p className="mb-6 font-mono text-[9px] font-medium tracking-[0.3em] text-[var(--muted)]">
                {t("academic")}
              </p>
              <div className="relative border-l border-[var(--border)] pl-6">
                <div className="relative">
                  <span
                    className="absolute -left-[1.7rem] top-1.5 h-3 w-3 rounded-full m-stripe"
                    style={{ boxShadow: "0 0 8px rgba(255,45,58,0.4)" }}
                  />
                  <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--muted)]">
                    {aboutMe.education.period}
                  </p>
                  <p className="mt-1.5 text-base font-medium text-foreground">
                    {aboutMe.education.degree}
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">
                    {aboutMe.education.institution}
                  </p>
                  <span className="mt-3 inline-block rounded border border-[var(--accent)] px-2 py-0.5 font-mono text-[9px] tracking-[0.25em] text-[var(--accent)]">
                    {aboutMe.education.cycle.toUpperCase()} · {t("inProgress")}
                  </span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="glass rounded-2xl p-7">
              <p className="mb-5 font-mono text-[9px] font-medium tracking-[0.3em] text-[var(--muted)]">
                {t("languagesSection")}
              </p>
              <ul className="flex flex-col gap-4">
                {aboutMe.languages.map((l) => (
                  <li
                    key={l.code}
                    className="flex items-center justify-between border-b border-[var(--border)] pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded border border-[var(--border-strong)] px-1.5 py-0.5 font-mono text-[9px] tracking-widest text-[var(--accent)]">
                        {l.code}
                      </span>
                      <span className="text-sm text-foreground">{l.lang}</span>
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: system data card */}
          <aside
            id="contact"
            className="glass-strong flex flex-col justify-between rounded-2xl p-7"
          >
            <div>
              <p className="mb-5 font-mono text-[9px] font-medium tracking-[0.3em] text-[var(--muted)]">
                {t("systemDataSection")}
              </p>
              <ul className="flex flex-col gap-4">
                {systemRows.map((stat) => (
                  <li
                    key={stat.label}
                    className="flex items-baseline justify-between border-b border-[var(--border)] pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">
                      {stat.label}
                    </span>
                    <span
                      className={`font-mono text-sm font-medium ${
                        stat.label === t("systemRows.statusLabel")
                          ? "text-glow text-[var(--accent)]"
                          : "text-foreground"
                      }`}
                    >
                      {stat.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-8 inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--accent)] px-6 font-mono text-[11px] font-medium tracking-[0.2em] text-white transition-all hover:shadow-[0_0_40px_var(--accent-glow)]"
            >
              <span className="relative z-10">{t("downloadBtn")}</span>
              <span className="relative z-10 font-light opacity-60">{t("downloadSub")}</span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:animate-sweep group-hover:opacity-100"
              />
            </a>
          </aside>
        </div>

        {/* Certifications carousel */}
        <div className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-6 m-stripe rounded-full" />
            <p className="font-mono text-[9px] font-medium tracking-[0.3em] text-[var(--muted)]">
              {t("certsSection")}
            </p>
          </div>
          <CertificationsCarousel />
        </div>

      </div>
    </section>
  );
}
