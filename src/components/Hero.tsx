export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden px-6 pt-32 pb-20 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[380px] w-[380px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(46,155,226,0.10), transparent 70%)" }} />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl animate-fade-up">
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.25em] text-[var(--muted)]">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse-line shadow-[0_0_12px_var(--accent-glow)]" />
          <span>SOFTWARE DEVELOPER · LIMA, PE</span>
          <span className="ml-2 h-px w-12 m-stripe opacity-80" />
        </div>

        <h1 className="text-balance text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          Construyo software rápido,
          <br className="hidden sm:block" />{" "}
          <span className="font-semibold text-[var(--accent)] text-glow">preciso</span> y{" "}
          <span className="font-extralight italic text-[var(--muted)]">con alma.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-[var(--muted)] sm:text-lg">
          Soy{" "}
          <span className="font-normal text-foreground">Michael Quispe</span>, Software
          Developer enfocado en{" "}
          <span className="font-normal text-foreground">rendimiento</span> y arquitecturas
          escalables. Entusiasta del Motorsport ({" "}
          <span className="font-normal text-foreground">BMW M, F1, WEC</span> ) y del{" "}
          <span className="font-normal text-foreground">Sim Racing</span> — donde la precisión, la telemetría y cada milisegundo cuentan, igual que en el código.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--accent)] px-6 font-mono text-[11px] font-medium tracking-[0.2em] text-white transition-all hover:shadow-[0_0_40px_var(--accent-glow)]"
          >
            <span className="relative z-10">VER PROYECTOS</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">
              →
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:animate-sweep group-hover:opacity-100"
            />
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border-strong)] px-6 font-mono text-[11px] font-medium tracking-[0.2em] text-foreground transition-colors hover:border-foreground"
          >
            SOBRE MÍ
          </a>
        </div>

        <TelemetryReadout />
      </div>
    </section>
  );
}

function TelemetryReadout() {
  const cells = [
    { label: "LAP", value: "001" },
    { label: "STINT", value: "Q3 2026" },
    { label: "MODE", value: "PUSH" },
    { label: "TEMP", value: "98°C" },
  ];
  return (
    <dl className="mt-14 grid max-w-2xl grid-cols-4 gap-0 border-y border-[var(--border)]">
      {cells.map((c, i) => (
        <div
          key={c.label}
          className={`flex flex-col gap-1 px-3 py-3 ${i !== 0 ? "border-l border-[var(--border)]" : ""}`}
        >
          <dt className="font-mono text-[9px] font-medium tracking-[0.25em] text-[var(--muted)]">
            {c.label}
          </dt>
          <dd className="font-mono text-sm font-medium tracking-wider text-foreground">
            {c.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

