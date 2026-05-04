"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

function PitStopCar() {
  const { scene } = useGLTF("/models/f1-car.glb");

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mats = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        for (const mat of mats) {
          if ((mat as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
            const m = mat as THREE.MeshStandardMaterial;
            m.envMapIntensity = 1.4;
            m.needsUpdate = true;
          }
        }
      }
    });
    return clone;
  }, [scene]);

  return (
    <group position={[0, -0.55, 0]}>
      <primitive object={clonedScene} scale={0.95} />
    </group>
  );
}

export function PitStopCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 4.8], fov: 38 }}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.25,
      }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <PitStopCar />

        <ambientLight intensity={0.35} color="#cdd6e0" />

        {/* Key — BMW M blue */}
        <spotLight
          position={[-5, 9, 3]}
          intensity={32}
          color="#2e9be2"
          angle={0.38}
          penumbra={0.75}
          castShadow
        />
        {/* Rim — M red */}
        <spotLight
          position={[6, 5, -6]}
          intensity={38}
          color="#ff2d3a"
          angle={0.28}
          penumbra={0.35}
        />
        {/* Back-white — carve silhouette */}
        <spotLight
          position={[0, 5, -7]}
          intensity={42}
          color="#ffffff"
          angle={0.5}
          penumbra={0.85}
        />

        <Environment preset="night" />

        <ContactShadows
          position={[0, -1.0, 0]}
          opacity={0.65}
          scale={14}
          blur={3}
          far={4}
          color="#ff2d3a"
        />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minDistance={2.5}
          maxDistance={8}
          autoRotate
          autoRotateSpeed={0.7}
          enableDamping
          dampingFactor={0.07}
        />
      </Suspense>
    </Canvas>
  );
}
