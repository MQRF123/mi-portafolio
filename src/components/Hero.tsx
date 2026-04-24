export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden px-6 pt-32 pb-20 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl" />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-5xl animate-fade-up">
        <div className="mb-6 flex items-center gap-3 font-mono text-xs tracking-widest text-[var(--muted)]">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse-line" />
          <span>SOFTWARE DEVELOPER · LIMA, PE</span>
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Construyo software rápido,
          <br className="hidden sm:block" />{" "}
          <span className="text-[var(--accent)] text-glow">preciso</span> y{" "}
          <span className="italic text-[var(--muted)]">con alma.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
          Soy{" "}
          <span className="text-foreground">Michael Quispe</span>, Software
          Developer enfocado en{" "}
          <span className="text-foreground">rendimiento</span> y arquitecturas
          escalables. Entusiasta del mundo{" "}
          <span className="text-foreground">JDM</span> y del{" "}
          <span className="text-foreground">Sim Racing</span> — donde cada
          milisegundo cuenta, igual que en el código.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-6 text-sm font-medium text-white transition-all hover:shadow-[0_0_40px_var(--accent-glow)]"
          >
            Ver proyectos
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border-strong)] px-6 text-sm text-foreground transition-colors hover:border-foreground"
          >
            Sobre mí
          </a>
        </div>
      </div>
    </section>
  );
}
