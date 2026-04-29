"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Float,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

function F1Car() {
  const { scene } = useGLTF("/models/f1-car.glb");

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const mats = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      for (const mat of mats) {
        if ((mat as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
          const m = mat as THREE.MeshStandardMaterial;
          // Boost env reflections without overriding original matte/rough values
          m.envMapIntensity = 0.9;
          m.needsUpdate = true;
        }
      }
    }
  });

  return (
    <primitive
    object={scene}
    scale={0.8}
    position={[1.5, -0.4, -0.7]}
    rotation={[0.02, -0.4, 0.2]}
    />
  );
}

export function F1Scene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 4.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <Float
          speed={1.2}
          rotationIntensity={0.04}
          floatIntensity={0.9}
          floatingRange={[-0.15, 0.15]}
        >
          <F1Car />
        </Float>

        {/* Low ambient — texturas originales quedan subordinadas */}
        <ambientLight intensity={1.5} />

        {/* Key — azul frío #2e9be2, arriba-izquierda, baña nariz y halo */}
        <spotLight
          position={[-5, 9, 3]}
          intensity={22}
          color="#2e9be2"
          angle={0.38}
          penumbra={0.75}
          castShadow
        />

        {/* Rim / contraluz — rojo neón #ff2d3a, trasera derecha, recorta silueta */}
        <spotLight
          position={[6, 5, -6]}
          intensity={28}
          color="#ff2d3a"
          angle={0.28}
          penumbra={0.35}
        />

        <Environment preset="night" />

        {/* Underglow LED — rojo reflejado en asfalto */}
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.6}
          scale={14}
          blur={3.5}
          far={4}
          color="#ff2d3a"
        />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/f1-car.glb");
