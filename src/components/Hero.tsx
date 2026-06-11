import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px] lg:items-start">

          {/* Left: main content */}
          <div>
            <div className="mb-6 flex items-center gap-3 font-mono text-xs font-medium tracking-[0.25em] text-[var(--muted)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse-line shadow-[0_0_12px_var(--accent-glow)]" />
              <span>{t("badge")}</span>
              <span className="ml-2 h-px w-12 m-stripe opacity-80" />
            </div>

            <h1 className="text-balance text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {t("headline")}
              <br className="hidden sm:block" />{" "}
              <span className="font-semibold text-[var(--accent)] text-glow">{t("headlineAccent")}</span>{" "}
              {t("headlineConnector")}{" "}
              <span className="font-extralight italic text-[var(--muted)]">{t("headlineItalic")}</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base font-normal leading-relaxed text-[var(--muted)] sm:text-lg">
              <HeroBio t={t} />
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="group relative inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--accent)] px-6 font-mono text-xs font-medium tracking-[0.2em] text-white transition-all hover:shadow-[0_0_40px_var(--accent-glow)]"
              >
                <span className="relative z-10">{t("ctaProjects")}</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:animate-sweep group-hover:opacity-100"
                />
              </a>
              <a
                href="#about"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border-strong)] px-6 font-mono text-xs font-medium tracking-[0.2em] text-foreground transition-colors hover:border-foreground"
              >
                {t("ctaAbout")}
              </a>
            </div>

            <TelemetryReadout />
          </div>

          {/* Right: driver quote */}
          <div className="hidden lg:flex lg:items-center lg:justify-end">
            <DriverQuote />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroBio({ t }: { t: ReturnType<typeof useTranslations<"hero">> }) {
  const raw = t("bio");
  const parts = raw.split(/(<name>.*?<\/name>|<strong>.*?<\/strong>)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("<name>")) {
          const text = part.replace(/<\/?name>/g, "");
          return <span key={i} className="font-normal text-foreground">{text}</span>;
        }
        if (part.startsWith("<strong>")) {
          const text = part.replace(/<\/?strong>/g, "");
          return <span key={i} className="font-normal text-foreground">{text}</span>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function DriverQuote() {
  return (
    <figure
      className="glass-strong relative flex w-72 shrink-0 flex-col items-center gap-6 overflow-hidden rounded-2xl p-6 text-center"
      style={{ boxShadow: "0 0 0 1px var(--border-strong), 0 24px 48px rgba(0,0,0,0.4)" }}
    >
      {/* top stripe */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[2px] m-stripe" />

      {/* faint #1 watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-4 font-mono text-[7rem] font-black leading-none text-white/[0.03] select-none"
      >
        #1
      </span>

      {/* image */}
      <div
        className="relative h-44 w-44 overflow-hidden rounded-xl"
        style={{
          boxShadow: "0 0 0 1px rgba(255,255,255,0.10), 0 0 24px rgba(255,45,58,0.15), 0 12px 40px rgba(0,0,0,0.7)",
        }}
      >
        <Image
          src="/max-verstappen.png"
          alt="Max Verstappen"
          fill
          className="object-cover object-top"
          sizes="176px"
        />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* quote */}
      <div className="flex flex-col items-center gap-3">
        <span aria-hidden className="h-px w-8 m-stripe rounded-full" />
        <blockquote className="text-sm italic font-light leading-relaxed text-foreground/75">
          &ldquo;No importa cuán bueno seas, siempre hay algo nuevo por aprender.&rdquo;
        </blockquote>
        <figcaption className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-foreground/60">
          MAX VERSTAPPEN
          <span className="h-3 w-px bg-[var(--border-strong)]" />
          <span className="text-[var(--accent)] text-glow">#1</span>
        </figcaption>
      </div>
    </figure>
  );
}

function TelemetryReadout() {
  const cells = [
    { label: "LAP",   value: "001"     },
    { label: "STINT", value: "Q3 2026" },
    { label: "MODE",  value: "PUSH"    },
    { label: "TEMP",  value: "98°C"    },
  ];

  const borderClass = (i: number) => {
    if (i === 0) return "";
    if (i === 1) return "border-l border-[var(--border)]";
    if (i === 2) return "border-t border-[var(--border)] sm:border-t-0 sm:border-l";
    return "border-l border-t border-[var(--border)] sm:border-t-0";
  };

  return (
    <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-0 border-y border-[var(--border)] sm:grid-cols-4">
      {cells.map((c, i) => (
        <div key={c.label} className={`flex flex-col gap-1 px-3 py-3 ${borderClass(i)}`}>
          <dt className="font-mono text-xs font-medium tracking-[0.25em] text-[var(--muted)]">{c.label}</dt>
          <dd className="font-mono text-sm font-medium tracking-wider text-foreground">{c.value}</dd>
        </div>
      ))}
    </dl>
  );
}
