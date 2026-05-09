import {
  siTypescript,
  siJavascript,
  siPython,
  siDart,
  siKotlin,
  siNodedotjs,
  siFlutter,
  siNextdotjs,
  siFirebase,
  siTailwindcss,
  siReact,
  siNestjs,
  siMongodb,
  siPostgresql,
  siDocker,
  siGit,
  siFigma,
} from "simple-icons";

type SimpleIcon = { path: string; hex: string; title: string };

const iconMap: Record<string, SimpleIcon> = {
  TypeScript:     siTypescript,
  JavaScript:     siJavascript,
  Python:         siPython,
  Dart:           siDart,
  Kotlin:         siKotlin,
  "Node.js":      siNodedotjs,
  Flutter:        siFlutter,
  "Next.js":      siNextdotjs,
  Firebase:       siFirebase,
  "Tailwind CSS": siTailwindcss,
  React:          siReact,
  NestJS:         siNestjs,
  MongoDB:        siMongodb,
  PostgreSQL:     siPostgresql,
  Docker:         siDocker,
  Git:            siGit,
  Figma:          siFigma,
};

export function TechIcon({
  name,
  size = 14,
  colored = false,
}: {
  name: string;
  size?: number;
  colored?: boolean;
}) {
  const icon = iconMap[name];
  if (!icon) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-label={name}
      fill={colored ? `#${icon.hex}` : "currentColor"}
    >
      <path d={icon.path} />
    </svg>
  );
}

export function hasTechIcon(name: string): boolean {
  return name in iconMap;
}
