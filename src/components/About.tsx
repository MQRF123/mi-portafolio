import { aboutMe, certifications } from "@/data/portfolio";

const systemData = [
  { label: "NOMBRE", value: "Michael F. Quispe R." },
  { label: "ROL", value: "Software Developer" },
  { label: "BASE", value: "Lima, PE" },
  { label: "CICLO", value: "08 / 10" },
  { label: "STATUS", value: "ACTIVO" },
];

export function About() {
  return (
    <section id="about" className="w-full px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">

        <div className="mb-12 flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.25em] text-[var(--muted)]">
          <span className="h-[2px] w-10 m-stripe rounded-full" />
          FICHA TÉCNICA · PILOTO
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">

          {/* Left column */}
          <div className="flex flex-col gap-6">

            {/* Academic timeline */}
            <div className="glass rounded-2xl p-7">
              <p className="mb-6 font-mono text-[9px] font-medium tracking-[0.3em] text-[var(--muted)]">
                PERFIL ACADÉMICO
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
                    {aboutMe.education.cycle.toUpperCase()} · EN CURSO
                  </span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="glass rounded-2xl p-7">
              <p className="mb-5 font-mono text-[9px] font-medium tracking-[0.3em] text-[var(--muted)]">
                IDIOMAS
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
                DATOS DE SISTEMA
              </p>
              <ul className="flex flex-col gap-4">
                {systemData.map((stat) => (
                  <li
                    key={stat.label}
                    className="flex items-baseline justify-between border-b border-[var(--border)] pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">
                      {stat.label}
                    </span>
                    <span
                      className={`font-mono text-sm font-medium ${
                        stat.label === "STATUS"
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
              download
              className="group relative mt-8 inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--accent)] px-6 font-mono text-[11px] font-medium tracking-[0.2em] text-white transition-all hover:shadow-[0_0_40px_var(--accent-glow)]"
            >
              <span className="relative z-10">↓ DOWNLOAD TELEMETRY</span>
              <span className="relative z-10 font-light opacity-60">· CV PDF</span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:animate-sweep group-hover:opacity-100"
              />
            </a>
          </aside>
        </div>

        {/* Certifications grid */}
        <div className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-6 m-stripe rounded-full" />
            <p className="font-mono text-[9px] font-medium tracking-[0.3em] text-[var(--muted)]">
              CERTIFICACIONES · SPEC SHEET
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.code}
                className="glass group flex flex-col gap-3 rounded-xl p-5 transition-all hover:border-[var(--border-strong)] hover:shadow-[0_0_20px_-4px_var(--accent-glow)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[var(--accent)]">
                    {cert.code}
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-[var(--muted)]">
                    {cert.year}
                  </span>
                </div>
                <p className="text-sm font-medium leading-snug text-foreground">
                  {cert.title}
                </p>
                <p className="font-mono text-[10px] tracking-wide text-[var(--muted)]">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
