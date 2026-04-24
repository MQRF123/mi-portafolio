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

      <RaceCarSilhouette />

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
          escalables. Entusiasta del mundo{" "}
          <span className="font-normal text-foreground">JDM</span> y del{" "}
          <span className="font-normal text-foreground">Sim Racing</span> — donde cada
          milisegundo cuenta, igual que en el código.
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

function RaceCarSilhouette() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[70%] items-center justify-end overflow-hidden opacity-70 lg:flex"
    >
      <svg
        viewBox="0 0 900 420"
        className="h-auto w-full translate-x-[8%] translate-y-[4%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineRed" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--m-red)" stopOpacity="0" />
            <stop offset="55%" stopColor="var(--m-red)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--m-red)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineBlue" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--m-light)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--m-light)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--m-dark)" stopOpacity="0.2" />
          </linearGradient>
          <filter id="carGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#carGlow)" strokeLinecap="round" strokeLinejoin="round">
          {/* Front splitter + nose */}
          <path
            d="M40 320 L150 320 L180 295 L260 280 L330 240 L430 220"
            stroke="url(#lineRed)"
            strokeWidth="1.6"
            fill="none"
          />
          {/* Cockpit / halo */}
          <path
            d="M430 220 L470 175 Q495 165 520 175 L560 215"
            stroke="url(#lineBlue)"
            strokeWidth="1.4"
            fill="none"
          />
          {/* Roof line */}
          <path
            d="M330 240 L400 210 L470 185"
            stroke="var(--m-light)"
            strokeOpacity="0.55"
            strokeWidth="0.9"
            fill="none"
          />
          {/* Rear bodywork */}
          <path
            d="M560 215 L620 230 L700 245 L770 270 L820 295"
            stroke="url(#lineRed)"
            strokeWidth="1.6"
            fill="none"
          />
          {/* Rear wing */}
          <path
            d="M700 215 L830 215 L830 230 L700 230 Z"
            stroke="var(--m-red)"
            strokeOpacity="0.8"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M720 205 L720 215 M810 205 L810 215"
            stroke="var(--m-red)"
            strokeOpacity="0.6"
            strokeWidth="1"
          />
          {/* Floor / side skirt */}
          <path
            d="M150 320 L820 295"
            stroke="var(--m-red)"
            strokeOpacity="0.9"
            strokeWidth="1.1"
            fill="none"
          />
          {/* Front wheel */}
          <circle cx="250" cy="320" r="46" stroke="var(--m-light)" strokeOpacity="0.55" strokeWidth="1.1" />
          <circle cx="250" cy="320" r="30" stroke="var(--m-light)" strokeOpacity="0.25" strokeWidth="0.8" />
          {/* Rear wheel */}
          <circle cx="720" cy="320" r="50" stroke="var(--m-red)" strokeOpacity="0.9" strokeWidth="1.2" />
          <circle cx="720" cy="320" r="32" stroke="var(--m-red)" strokeOpacity="0.35" strokeWidth="0.8" />
          {/* Front wing lines */}
          <path
            d="M40 335 L120 335 M60 345 L140 345"
            stroke="var(--m-light)"
            strokeOpacity="0.45"
            strokeWidth="0.9"
          />
          {/* Speed streaks */}
          <path d="M10 260 L120 260" stroke="var(--m-red)" strokeOpacity="0.35" strokeWidth="0.8" />
          <path d="M0 195 L90 195" stroke="var(--m-light)" strokeOpacity="0.25" strokeWidth="0.7" />
          <path d="M20 355 L110 355" stroke="var(--m-dark)" strokeOpacity="0.45" strokeWidth="0.7" />
        </g>
      </svg>
    </div>
  );
}
