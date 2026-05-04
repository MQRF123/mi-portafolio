"use client";

import { useRef } from "react";
import { certifications } from "@/data/portfolio";

// Duplicate for seamless infinite loop
const items = [...certifications, ...certifications];

export function CertificationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused"; };
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Edge fade masks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
        style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
        style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
      />

      {/* Scrolling track */}
      <div
        ref={trackRef}
        className="flex gap-4 py-1"
        style={{ animation: "cert-scroll 24s linear infinite" }}
      >
        {items.map((cert, i) => (
          <article
            key={`${cert.code}-${i}`}
            className="flex w-64 flex-shrink-0 flex-col gap-3 rounded-xl border border-[var(--border-strong)] p-5"
            style={{
              background: "linear-gradient(135deg, rgba(16,16,20,0.97) 0%, rgba(22,22,28,0.95) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.25em] text-[var(--accent)]">
                {cert.code}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[var(--muted)]">
                {cert.year}
              </span>
            </div>
            <p className="text-sm font-medium leading-snug text-foreground">
              {cert.title}
            </p>
            <p className="font-mono text-[10px] tracking-wide text-[var(--muted)]">
              {cert.issuer}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
