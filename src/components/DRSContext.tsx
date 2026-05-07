"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

type DRSContextValue = {
  triggerDRS: (callback: () => void) => void;
};

const DRSCtx = createContext<DRSContextValue>({ triggerDRS: (cb) => cb() });

export const useDRS = () => useContext(DRSCtx);

function F1CarSvg() {
  return (
    <svg
      width="230"
      height="72"
      viewBox="0 0 230 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Main body */}
      <path
        d="M32 40 Q65 23 115 23 Q165 23 198 40 Q182 49 115 49 Q48 49 32 40Z"
        fill="#ff2d3a"
      />
      {/* Cockpit shell */}
      <ellipse cx="115" cy="29" rx="25" ry="11" fill="#111118" />
      {/* Visor tint */}
      <ellipse cx="115" cy="28" rx="20" ry="7" fill="#2e9be2" opacity="0.5" />
      {/* Front wing */}
      <rect x="10" y="42" width="37" height="5" rx="2.5" fill="#e2e2e2" />
      <rect x="10" y="45" width="37" height="2" rx="1" fill="#2e9be2" opacity="0.55" />
      {/* Rear wing blade */}
      <rect x="178" y="28" width="36" height="5" rx="2" fill="#e2e2e2" />
      {/* Rear wing endplate */}
      <rect x="184" y="33" width="10" height="10" rx="1.5" fill="#e2e2e2" />
      {/* Halo */}
      <path
        d="M93 26 Q115 17 137 26"
        stroke="#e2e2e2"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Front tyre */}
      <circle cx="33" cy="49" r="11" fill="#1a1a20" />
      <circle cx="33" cy="49" r="6.5" fill="#28282e" />
      {/* Mid tyre */}
      <circle cx="65" cy="49" r="11" fill="#1a1a20" />
      <circle cx="65" cy="49" r="6.5" fill="#28282e" />
      {/* Rear tyre */}
      <circle cx="168" cy="49" r="13.5" fill="#1a1a20" />
      <circle cx="168" cy="49" r="8.5" fill="#28282e" />
      {/* BMW M stripe on sidepod */}
      <rect x="82" y="38" width="62" height="3.5" rx="1.75" fill="url(#ms)" opacity="0.85" />
      {/* Exhaust plume */}
      <ellipse cx="200" cy="39" rx="11" ry="5.5" fill="#ff4d57" opacity="0.9" />
      <ellipse cx="214" cy="39" rx="15" ry="4.5" fill="#ff8800" opacity="0.55" />
      <ellipse cx="226" cy="39" rx="10" ry="3.5" fill="#ffcc00" opacity="0.3" />
      <defs>
        <linearGradient id="ms" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2e9be2" />
          <stop offset="33.33%" stopColor="#2e9be2" />
          <stop offset="33.33%" stopColor="#0b3d91" />
          <stop offset="66.66%" stopColor="#0b3d91" />
          <stop offset="66.66%" stopColor="#ff2d3a" />
          <stop offset="100%" stopColor="#ff2d3a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DRSOverlay({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Horizontal speed lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${8 + i * 11}%`,
            left: 0,
            right: 0,
            height: 1,
            background: `linear-gradient(90deg, transparent 0%, rgba(255,45,58,${
              0.06 + i * 0.05
            }) 25%, rgba(255,45,58,${0.18 + i * 0.04}) 50%, rgba(255,45,58,${
              0.06 + i * 0.05
            }) 75%, transparent 100%)`,
            animation: `drs-line 0.65s cubic-bezier(0.15, 0, 0.1, 1) ${
              i * 0.02
            }s forwards`,
            transformOrigin: "left center",
            transform: "scaleX(0)",
          }}
        />
      ))}

      {/* Radial energy flash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 25% at 50% 50%, rgba(255,45,58,0.14), transparent 70%)",
          animation: "drs-flash 0.65s ease forwards",
        }}
      />

      {/* F1 car blasting across */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-60%)",
          animation: "drs-car 0.65s cubic-bezier(0.25, 0, 0.08, 1) forwards",
          filter: "blur(5px) brightness(1.5)",
          willChange: "transform",
        }}
      >
        <F1CarSvg />
      </div>

      {/* HUD label */}
      <div
        style={{
          position: "absolute",
          top: "calc(50% + 34px)",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "monospace",
          fontSize: 10,
          letterSpacing: "0.32em",
          color: "#ff2d3a",
          animation: "drs-text 0.65s ease forwards",
          whiteSpace: "nowrap",
        }}
      >
        DRS ACTIVATED
      </div>
    </div>
  );
}

export function DRSProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const triggerDRS = useCallback((callback: () => void) => {
    // Clear any in-flight timers
    timerRef.current.forEach(clearTimeout);

    setVisible(true);
    // Fire callback IMMEDIATELY — the modal mounts hidden behind a left→right
    // clip-path reveal that runs in sync with the F1 car. Modal becomes the wipe.
    callback();
    timerRef.current[0] = setTimeout(() => setVisible(false), 800);
  }, []);

  return (
    <DRSCtx.Provider value={{ triggerDRS }}>
      {children}
      <DRSOverlay visible={visible} />
    </DRSCtx.Provider>
  );
}
