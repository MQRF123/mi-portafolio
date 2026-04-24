import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-1 flex-col">
        <Hero />
        <Divider />
        <Stack />
        <Divider />
        <Projects />
        <Divider />
        <About />
      </main>
      <Footer />
    </>
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
