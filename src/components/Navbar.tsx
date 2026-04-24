const links = [
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Proyectos" },
  { href: "#about", label: "Sobre mí" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-[0.2em] text-foreground"
        >
          MQ<span className="text-[var(--accent)] text-glow">.</span>DEV
        </a>
        <ul className="hidden gap-8 text-sm font-light tracking-wide text-[var(--muted)] sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative inline-block py-1 transition-colors hover:text-foreground"
              >
                {link.label}
                <span
                  aria-hidden
                  className="m-stripe pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
                />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group relative rounded-full border border-[var(--border-strong)] px-4 py-1.5 font-mono text-[11px] font-medium tracking-[0.2em] text-foreground transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          CONTACTO
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ boxShadow: "0 0 20px var(--accent-glow)" }}
          />
        </a>
      </nav>
    </header>
  );
}
