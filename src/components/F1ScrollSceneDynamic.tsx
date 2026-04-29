"use client";

import dynamic from "next/dynamic";

const F1ScrollSceneClient = dynamic(
  () => import("./F1ScrollScene").then((m) => m.F1ScrollScene),
  { ssr: false, loading: () => null }
);

export function F1ScrollSceneDynamic() {
  return <F1ScrollSceneClient />;
}
