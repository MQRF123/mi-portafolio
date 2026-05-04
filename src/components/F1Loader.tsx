"use client";

import { useEffect, useState } from "react";

/**
 * Steps 0–5: lights accumulate (step = litCount)
 * Step 6:    lights out + onDone fires
 * Step 7:    fade out → unmount
 */
export function F1Loader({ onDone }: { onDone: () => void }) {
  const [step,    setStep]    = useState(0);
  const [fading,  setFading]  = useState(false);
  const [visible, setVisible] = useState(true);

  // Chained sequence — each effect fires the next step, no parallel timers
  useEffect(() => {
    if (step >= 6) return;
    // 400ms between every light; step 5 holds 600ms with all 5 lit
    const delay = step === 5 ? 600 : 400;
    const t = setTimeout(() => setStep((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [step]);

  // Step 6: lights out → reveal content immediately, then fade loader
  useEffect(() => {
    if (step !== 6) return;
    onDone();
    const t1 = setTimeout(() => setFading(true),  300);
    const t2 = setTimeout(() => setVisible(false), 300 + 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [step, onDone]);

  if (!visible) return null;

  const litCount = step < 6 ? step : 0;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
      style={{
        opacity:    fading ? 0 : 1,
        transition: "opacity 700ms ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <div className="flex flex-col items-center gap-3">
        {/* Gantry crossbar */}
        <div className="h-[3px] w-[336px] rounded-full bg-[#1a1a20]" />

        {/* 5 lights */}
        <div className="flex items-center gap-5">
          {Array.from({ length: 5 }, (_, i) => {
            const on = i < litCount;
            return (
              <div
                key={i}
                className="h-12 w-12 rounded-full border-2 border-[#1a1a20]"
                style={{
                  background: on ? "#ff2d3a" : "#0d0d10",
                  boxShadow: on
                    ? "0 0 12px #ff2d3a, 0 0 28px rgba(255,45,58,0.55), inset 0 1px 0 rgba(255,255,255,0.15)"
                    : "none",
                  transition: on
                    ? "background 60ms ease, box-shadow 60ms ease"
                    : "background 80ms ease, box-shadow 80ms ease",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
