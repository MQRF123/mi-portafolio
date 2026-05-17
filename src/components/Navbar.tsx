"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#stack",    label: t("stack")    },
    { href: "#projects", label: t("projects") },
    { href: "#about",    label: t("about")    },
  ];

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setOpen(false);

  function switchLocale() {
    const next = locale === "es" ? "en" : "es";
    const withoutLocale = pathname.replace(/^\/(es|en)/, "") || "/";
    router.push(`/${next}${withoutLocale}`);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3">
        <a
          href="#top"
          onClick={close}
          className="font-mono text-sm font-medium tracking-[0.2em] text-foreground"
        >
          MQ<span className="text-[var(--accent)] text-glow">.</span>DEV
        </a>

        {/* Desktop links */}
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

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <button
            type="button"
            onClick={switchLocale}
            className="rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-[10px] font-medium tracking-[0.2em] text-[var(--muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {t("switchLang")}
          </button>

          <a
            href="#contact"
            onClick={close}
            className="group relative rounded-full border border-[var(--border-strong)] px-4 py-1.5 font-mono text-[11px] font-medium tracking-[0.2em] text-foreground transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {t("contact")}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ boxShadow: "0 0 20px var(--accent-glow)" }}
            />
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={open ? t("ariaClose") : t("ariaOpen")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--border-strong)] sm:hidden"
          >
            <span className={`block h-[1.5px] w-4 rounded-full bg-foreground transition-all duration-200 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-4 rounded-full bg-foreground transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-4 rounded-full bg-foreground transition-all duration-200 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="glass absolute inset-x-4 top-[calc(100%-8px)] mt-2 rounded-2xl border border-[var(--border-strong)] px-6 py-5 sm:hidden"
          style={{ animation: "fade-up 0.2s ease-out both" }}
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-3 font-mono text-sm font-medium tracking-[0.15em] text-[var(--muted)] transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
