"use client";

import dynamic from "next/dynamic";

const PitStopCanvasClient = dynamic(
  () => import("./PitStopCanvas").then((m) => m.PitStopCanvas),
  { ssr: false, loading: () => null }
);

export function PitStopCanvasDynamic() {
  return <PitStopCanvasClient />;
}
