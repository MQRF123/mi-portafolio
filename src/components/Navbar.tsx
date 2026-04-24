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
          className="font-mono text-sm tracking-widest text-foreground"
        >
          MQ<span className="text-[var(--accent)]">.</span>DEV
        </a>
        <ul className="hidden gap-8 text-sm text-[var(--muted)] sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-[var(--border-strong)] px-4 py-1.5 text-xs font-medium tracking-wide text-foreground transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
