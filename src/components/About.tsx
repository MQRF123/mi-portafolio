const stats = [
  { label: "Enfoque", value: "Performance" },
  { label: "Mentalidad", value: "Sim Racing" },
  { label: "Método", value: "Atención al detalle" },
];

export function About() {
  return (
    <section id="about" className="w-full px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.25em] text-[var(--muted)]">
            <span className="h-[2px] w-10 m-stripe rounded-full" />
            SOBRE MÍ
          </div>
          <h2 className="mt-3 text-3xl font-light tracking-tight sm:text-4xl">
            Código afinado como un <span className="font-semibold text-[var(--accent)]">motor</span> bien tuneado.
          </h2>

          <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-[var(--muted)]">
            <p>
              Mi obsesión es la{" "}
              <span className="text-foreground">
                optimización de rendimiento
              </span>
              . Persigo el tiempo de respuesta, el bundle size y los frames
              caídos con la misma disciplina con la que un piloto busca la
              línea ideal en una curva.
            </p>
            <p>
              Fuera del editor, el{" "}
              <span className="text-foreground">Sim Racing</span> me entrenó en
              algo que traslado a cada proyecto: la paciencia para medir,
              repetir y afinar milésima por milésima. Esa{" "}
              <span className="text-foreground">atención al detalle</span> se
              nota en cada commit.
            </p>
            <p>
              Me interesa la cultura{" "}
              <span className="text-foreground">JDM</span> porque representa
              algo que respeto en ingeniería: sistemas hechos con intención,
              sin piezas de más, construidos para durar y responder.
            </p>
          </div>
        </div>

        <aside
          id="contact"
          className="glass-strong flex flex-col justify-between rounded-2xl p-7"
        >
          <ul className="flex flex-col gap-5">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="flex items-baseline justify-between border-b border-[var(--border)] pb-4 last:border-0 last:pb-0"
              >
                <span className="font-mono text-xs tracking-widest text-[var(--muted)]">
                  {stat.label.toUpperCase()}
                </span>
                <span className="text-lg font-medium text-foreground">
                  {stat.value}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="mailto:michafred2004@gmail.com"
            className="mt-8 group inline-flex items-center justify-between rounded-full border border-[var(--border-strong)] px-5 py-3 text-sm transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <span>Escríbeme</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </aside>
      </div>
    </section>
  );
}
