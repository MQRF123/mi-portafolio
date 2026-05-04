import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { PitStopCanvasDynamic } from "@/components/PitStopCanvasDynamic";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 flex w-full flex-1 flex-col">
        <Hero />
        <Divider />
        <Stack />
        <Projects />
        <PitStopShowcase />
        <Divider />
        <About />
      </main>
      <Footer />
    </>
  );
}

function PitStopShowcase() {
  return (
    <section
      aria-label="F1 pit stop — drag to rotate"
      className="relative w-full overflow-hidden"
      style={{ height: "60vh" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: [
            "radial-gradient(ellipse 60% 55% at 50% 60%, rgba(255,45,58,0.08), transparent 70%)",
            "radial-gradient(ellipse 45% 40% at 20% 40%, rgba(46,155,226,0.07), transparent 65%)",
            "radial-gradient(ellipse 40% 35% at 80% 70%, rgba(11,61,145,0.09), transparent 65%)",
          ].join(", "),
        }}
      />

      <div className="absolute inset-0 z-10">
        <PitStopCanvasDynamic />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24"
        style={{ background: "linear-gradient(to bottom, var(--background), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24"
        style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
      />

      <p className="pointer-events-none absolute bottom-8 left-1/2 z-30 -translate-x-1/2 font-mono text-[10px] tracking-[0.25em] text-[var(--muted)]">
        DRAG TO ROTATE · SCROLL TO ZOOM
      </p>
    </section>
  );
}

function Divider() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />
      <div
        aria-hidden
        className="mx-auto h-[1px] w-24 -translate-y-px bg-[var(--accent)]"
        style={{ boxShadow: "0 0 12px var(--accent-glow)" }}
      />
    </div>
  );
}
