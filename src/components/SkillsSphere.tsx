"use client";

import { useMemo, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import {
  CATEGORY_COLORS,
  LEVEL_SIZES,
  SKILLS,
  getFilteredSkills,
  type SkillCategoryFilter,
  type SkillLevelFilter,
  type SkillNode,
} from "@/data/skills";

function fibonacciSphere(n: number, radius: number): [number, number, number][] {
  if (n <= 0) return [];
  if (n === 1) return [[0, 0, 0]];

  const points: [number, number, number][] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push([
      Math.cos(theta) * r * radius,
      y * radius,
      Math.sin(theta) * r * radius,
    ]);
  }
  return points;
}

function SkillLabel({
  skill,
  position,
  onHover,
  onUnhover,
  isHovered,
}: {
  skill:     SkillNode;
  position:  [number, number, number];
  onHover:   () => void;
  onUnhover: () => void;
  isHovered: boolean;
}) {
  const color = CATEGORY_COLORS[skill.category];
  const size  = LEVEL_SIZES[skill.level];

  return (
    <group position={position}>
      <Html
        center
        distanceFactor={10}
        style={{ pointerEvents: "auto", userSelect: "none", whiteSpace: "nowrap" }}
      >
        <span
          onMouseEnter={onHover}
          onMouseLeave={onUnhover}
          style={{
            color,
            fontSize:      `${isHovered ? size * 1.4 : size}px`,
            fontWeight:    skill.level === "expert" ? 700 : 600,
            textShadow:    isHovered
              ? `0 0 20px ${color}cc, 0 0 40px ${color}55`
              : `0 0 10px ${color}44`,
            transition:    "all 0.2s ease",
            cursor:        "pointer",
            display:       "inline-flex",
            flexDirection: isHovered ? "column" : "row",
            alignItems:    isHovered ? "flex-start" : "center",
            gap:           isHovered ? "2px" : "4px",
            fontFamily:    "var(--font-mono, monospace)",
          }}
        >
          {skill.name}
          {isHovered && (
            <span style={{ display: "block", fontSize: "9px", color: "#8b8b95", marginTop: "2px", textShadow: "none" }}>
              {skill.level} · {skill.category}
            </span>
          )}
        </span>
      </Html>
    </group>
  );
}

function RotatingCloud({ skills }: { skills: SkillNode[] }) {
  const groupRef                        = useRef<THREE.Group>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const positions = useMemo(() => fibonacciSphere(skills.length, 4.5), [skills.length]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const speed = hoveredIndex !== null ? 0.03 : 0.12;
    groupRef.current.rotation.y += speed * delta;
    groupRef.current.rotation.x += speed * 0.45 * delta;
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <SkillLabel
          key={skill.name}
          skill={skill}
          position={positions[i]}
          isHovered={hoveredIndex === i}
          onHover={() => setHoveredIndex(i)}
          onUnhover={() => setHoveredIndex(null)}
        />
      ))}

      {/* center glow — accent F1 red */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#ff2d3a" transparent opacity={0.15} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial color="#ff2d3a" transparent opacity={0.05} />
      </mesh>

      {/* wireframe outline */}
      <mesh rotation={[0.3, 0, 0]}>
        <sphereGeometry args={[4.8, 24, 24]} />
        <meshBasicMaterial color="#ff2d3a" transparent opacity={0.03} wireframe />
      </mesh>
    </group>
  );
}

interface SkillsSphereProps {
  activeCategory?: SkillCategoryFilter;
  activeLevel?:    SkillLevelFilter;
}

export function SkillsSphere({
  activeCategory = "all",
  activeLevel    = "all",
}: SkillsSphereProps) {
  const skills = useMemo(
    () => getFilteredSkills({ category: activeCategory, level: activeLevel }),
    [activeCategory, activeLevel],
  );

  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 45 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <RotatingCloud skills={skills} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={(3 * Math.PI) / 4}
          />
        </Suspense>
      </Canvas>

      {skills.length === 0 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-xs tracking-widest text-[var(--muted)]">
            SIN RESULTADOS
          </span>
        </div>
      )}
    </div>
  );
}
