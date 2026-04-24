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
      // scale: at 1.2 fills screen, so 0.4 = ~1/3 size — adjust ±0.1 to taste
      scale={0.4}
      // Right and down within canvas — clear of text
      position={[0.8, -0.5, 0]}
      // 3/4 front view: X tilts nose down, Y turns ~54° for front-left corner
      rotation={[-0.1, Math.PI * 0.3, 0]}
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
          speed={1.4}
          rotationIntensity={0.15}
          floatIntensity={0.35}
          floatingRange={[-0.08, 0.08]}
        >
          <F1Car />
        </Float>

        {/* Strong ambient — dark navy matte needs this or it goes pitch black */}
        <ambientLight intensity={3} />

        {/* Cold key — top-left, main illumination */}
        <spotLight
          position={[-4, 6, 4]}
          intensity={14}
          color="#c8e4ff"
          angle={0.5}
          penumbra={0.8}
          castShadow
        />

        {/* Red Bull red accent — rear-right */}
        <spotLight
          position={[5, 3, -2]}
          intensity={10}
          color="#ff1801"
          angle={0.4}
          penumbra={0.6}
        />

        {/* Front fill — softens shadows on nose/front wing */}
        <pointLight position={[0, 2, 5]} intensity={5} color="#ffffff" />

        {/* Blue rim from below — picks up underfloor silhouette */}
        <pointLight position={[1, -2, 1]} intensity={3} color="#1a3aff" />

        <Environment preset="night" />

        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.45}
          scale={14}
          blur={3}
          far={4}
          color="#ff1801"
        />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/f1-car.glb");
