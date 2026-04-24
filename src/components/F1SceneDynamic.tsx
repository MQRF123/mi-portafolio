"use client";

// ssr: false must live inside a Client Component — Next.js 16 enforces this.
// Hero.tsx (Server Component) imports this wrapper; this wrapper owns the boundary.
import dynamic from "next/dynamic";

const F1SceneClient = dynamic(
  () => import("./F1Scene").then((m) => m.F1Scene),
  { ssr: false, loading: () => null }
);

export function F1SceneDynamic() {
  return <F1SceneClient />;
}
