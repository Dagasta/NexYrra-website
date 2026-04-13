'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralParticles() {
  const ref = useRef<THREE.Points>(null);
  
  // Custom particle distribution focused around a central "core" and spreading out
  const positions = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 15;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
      
      // Gentle floating effect based on mouse/scroll
      const targetY = state.pointer.y * 2;
      const targetX = state.pointer.x * 2;
      
      ref.current.position.y += (targetY - ref.current.position.y) * 0.01;
      ref.current.position.x += (targetX - ref.current.position.x) * 0.01;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#A855F7"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

// Background fog and lighting setup
function SceneEnvironment() {
  const { scene } = useThree();
  useMemo(() => {
    scene.fog = new THREE.FogExp2('#FFFFFF', 0.03);
  }, [scene]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#A855F7" />
    </>
  );
}

export default function BackgroundScene() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'transparent' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} dpr={[1, 2]}>
        <SceneEnvironment />
        <NeuralParticles />
      </Canvas>
      <div className="neural-surface" />
    </div>
  );
}
