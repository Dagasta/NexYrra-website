'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSimulation() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 5000;
  const { positions, originalPositions } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 50;
        const y = (Math.random() - 0.5) * 50;
        const z = (Math.random() - 0.5) * 20 - 10;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        
        originalPositions[i * 3] = x;
        originalPositions[i * 3 + 1] = y;
        originalPositions[i * 3 + 2] = z;
    }
    return { positions, originalPositions };
  }, []);

  const pointer = useRef(new THREE.Vector2(0, 0));
  const isClicking = useRef(false);
  
  useEffect(() => {
      const onMove = (e: MouseEvent) => {
          pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
          pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      const onDown = () => isClicking.current = true;
      const onUp = () => isClicking.current = false;

      window.addEventListener('mousemove', onMove);
      window.addEventListener('mousedown', onDown);
      window.addEventListener('mouseup', onUp);
      return () => {
          window.removeEventListener('mousemove', onMove);
          window.removeEventListener('mousedown', onDown);
          window.removeEventListener('mouseup', onUp);
      };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const vector = new THREE.Vector3(pointer.current.x, pointer.current.y, 0.5);
    vector.unproject(state.camera);
    const dir = vector.sub(state.camera.position).normalize();
    const distance = -state.camera.position.z / dir.z;
    const targetPos = state.camera.position.clone().add(dir.multiplyScalar(distance));
    
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const ox = originalPositions[idx];
        const oy = originalPositions[idx+1];
        const oz = originalPositions[idx+2];
        
        const dx = targetPos.x - pos[idx];
        const dy = targetPos.y - pos[idx+1];
        const distToMouse = Math.sqrt(dx*dx + dy*dy);
        
        // Physics Rules
        if (isClicking.current && distToMouse < 8) {
            // Repel violently on click
            const force = (8 - distToMouse) * 0.5;
            pos[idx] -= dx * force * delta * 10;
            pos[idx+1] -= dy * force * delta * 10;
        } else if (distToMouse < 5) {
            // Attract to mouse
            const force = (5 - distToMouse) * 0.05;
            pos[idx] += dx * force * delta * 10;
            pos[idx+1] += dy * force * delta * 10;
        } else {
            // Gentle return to original position with sine wave noise
            pos[idx] = THREE.MathUtils.lerp(pos[idx], ox + Math.sin(state.clock.elapsedTime + i)*0.2, 0.02);
            pos[idx+1] = THREE.MathUtils.lerp(pos[idx+1], oy + Math.cos(state.clock.elapsedTime + i)*0.2, 0.02);
        }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial transparent color="#D946EF" size={0.05} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.4} />
    </Points>
  );
}

export default function WebGLCanvas() {
  return (
    <div className="webgl-layer">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} gl={{ alpha: true, antialias: false }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.2} />
        <ParticleSimulation />
        <fog attach="fog" args={['#020005', 10, 40]} />
      </Canvas>
    </div>
  );
}
