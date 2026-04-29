"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function readScrollProgress() {
  if (typeof window === "undefined") return 0;
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return 0;
  const y = window.scrollY || window.pageYOffset || doc.scrollTop || 0;
  return Math.max(0, Math.min(1, y / scrollable));
}

function F1CarScroll() {
  const { scene } = useGLTF("/models/f1-car.glb");
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        for (const mat of mats) {
          if ((mat as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
            const m = mat as THREE.MeshStandardMaterial;
            m.envMapIntensity = 1.15;
            m.needsUpdate = true;
          }
        }
      }
    });
    return clone;
  }, [scene]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const progress = readScrollProgress();

    if (groupRef.current) {
      const target = progress * Math.PI * 4;
      const prevY = groupRef.current.rotation.y;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(prevY, target, 0.08);
      const speed = groupRef.current.rotation.y - prevY;
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        THREE.MathUtils.clamp(speed * 4, -0.15, 0.15),
        0.08
      );
    }

    if (innerRef.current) {
      innerRef.current.position.y = -0.4 + Math.sin(t * 0.9) * 0.08;
      innerRef.current.rotation.x = 0.05 + Math.sin(t * 0.7) * 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={innerRef}>
        <primitive object={clonedScene} scale={0.95} />
      </group>
    </group>
  );
}

export function F1ScrollScene() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Layered ambient gradients — BMW M tri-color hint, very soft */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 55%, rgba(255,45,58,0.07), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 18% 30%, rgba(46,155,226,0.08), transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 35% at 82% 75%, rgba(11,61,145,0.10), transparent 65%)",
        }}
      />
      {/* Bright halo behind car — figure/ground separation */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 28% 32% at 50% 52%, rgba(220,235,255,0.18), rgba(46,155,226,0.10) 35%, transparent 70%)",
        }}
      />
      {/* faint horizon line for grounding */}
      <div
        className="absolute inset-x-0 top-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <Canvas
        shadows
        camera={{ position: [0, 1.4, 5.2], fov: 38 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.18,
        }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <F1CarScroll />

          {/* base ambient — keep textures readable */}
          <ambientLight intensity={0.55} color="#cdd6e0" />
          <hemisphereLight args={["#9ec5ff", "#1a0a10", 0.35]} />

          {/* Key — cool BMW M light blue, top-left */}
          <spotLight
            position={[-5.5, 8, 4]}
            intensity={28}
            color="#2e9be2"
            angle={0.42}
            penumbra={0.85}
            distance={28}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          {/* Rim — accent red, back-right */}
          <spotLight
            position={[6.5, 4.5, -6]}
            intensity={34}
            color="#ff2d3a"
            angle={0.32}
            penumbra={0.5}
            distance={26}
          />

          {/* White edge rim — carve silhouette against dark page */}
          <spotLight
            position={[0, 5, -7]}
            intensity={42}
            color="#ffffff"
            angle={0.55}
            penumbra={0.9}
            distance={22}
          />
          <spotLight
            position={[-4, 3, -5]}
            intensity={26}
            color="#e8f4ff"
            angle={0.4}
            penumbra={0.8}
            distance={20}
          />

          {/* Fill — deep BMW M dark blue, low-front */}
          <pointLight
            position={[0, 0.6, 5.5]}
            intensity={6}
            color="#0b3d91"
            distance={14}
          />

          {/* subtle warm kicker under nose */}
          <pointLight
            position={[0, -0.6, 2.5]}
            intensity={3.5}
            color="#ff4d57"
            distance={6}
          />

          <Environment preset="night" />

          <ContactShadows
            position={[0, -0.95, 0]}
            opacity={0.55}
            scale={16}
            blur={4}
            far={5}
            color="#ff2d3a"
            resolution={1024}
          />
          <ContactShadows
            position={[0, -0.94, 0]}
            opacity={0.35}
            scale={10}
            blur={2}
            far={3}
            color="#2e9be2"
            resolution={1024}
          />
        </Suspense>
      </Canvas>

      {/* vignette to fuse car into page */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(5,5,5,0.55) 100%)",
        }}
      />
    </div>
  );
}

useGLTF.preload("/models/f1-car.glb");
