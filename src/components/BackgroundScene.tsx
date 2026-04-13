'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// An advanced "Neural Network" simulation using raw Three.js buffer geometry for high performance
function NeuralNetworkMesh() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const particleCount = 250;
  const maxDistance = 3.5;
  
  // Initialize particles with random velocities
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];
    for (let i = 0; i < particleCount; i++) {
        // Spread across a wide area to fill the screen
        positions[i * 3] = (Math.random() - 0.5) * 30;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
        
        velocities.push({
            x: (Math.random() - 0.5) * 0.02,
            y: (Math.random() - 0.5) * 0.02,
            z: (Math.random() - 0.5) * 0.02
        });
    }
    return { positions, velocities };
  }, []);

  // Pre-allocate arrays for line segments (max possible connections)
  const linesGeometry = useMemo(() => new THREE.BufferGeometry(), []);
  
  // Track cursor for interactive physics
  const pointer = useRef(new THREE.Vector2(0, 0));
  
  useEffect(() => {
      const onMove = (e: MouseEvent) => {
          pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
          pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('mousemove', onMove);
      return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;
    
    // Un-project pointer into 3D space
    const vector = new THREE.Vector3(pointer.current.x, pointer.current.y, 0.5);
    vector.unproject(state.camera);
    const dir = vector.sub(state.camera.position).normalize();
    const distance = -state.camera.position.z / dir.z;
    const targetPos = state.camera.position.clone().add(dir.multiplyScalar(distance));
    
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    let vertexpos = 0;
    const linePositions = [];
    const lineOpacities = [];

    for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        // Move particles
        pos[idx] += velocities[i].x;
        pos[idx+1] += velocities[i].y;
        pos[idx+2] += velocities[i].z;
        
        // Screen wrap
        if (pos[idx] < -15 || pos[idx] > 15) velocities[i].x *= -1;
        if (pos[idx+1] < -10 || pos[idx+1] > 10) velocities[i].y *= -1;
        
        // Interactive Physics (Attract/Repel based on mouse)
        const dx = targetPos.x - pos[idx];
        const dy = targetPos.y - pos[idx+1];
        const distToMouse = Math.sqrt(dx*dx + dy*dy);
        
        if (distToMouse < 4) {
             const force = (4 - distToMouse) * 0.01;
             pos[idx] += dx * force;
             pos[idx+1] += dy * force;
        }

        // Check distance to other particles to form connections
        for (let j = i + 1; j < particleCount; j++) {
            const jdx = j * 3;
            const pdx = pos[idx] - pos[jdx];
            const pdy = pos[idx+1] - pos[jdx+1];
            const pdz = pos[idx+2] - pos[jdx+2];
            const dist = Math.sqrt(pdx*pdx + pdy*pdy + pdz*pdz);
            
            if (dist < maxDistance) {
                linePositions.push(
                    pos[idx], pos[idx+1], pos[idx+2],
                    pos[jdx], pos[jdx+1], pos[jdx+2]
                );
                // Subtly pulse lines based on time
                const alpha = (1.0 - dist / maxDistance) * (Math.sin(state.clock.elapsedTime * 2 + i) * 0.5 + 0.5);
                lineOpacities.push(alpha, alpha);
            }
        }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Update lines
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineOpacities.map(a => 192/255), 3)); // Purplish base array logic handled via material 
  });

  return (
    <group>
      {/* The Nodes */}
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial transparent color="#F8FAFC" size={0.08} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.6} />
      </Points>
      {/* The Connections */}
      <lineSegments ref={linesRef} geometry={linesGeometry}>
        <lineBasicMaterial transparent color="#C026D3" depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.15} />
      </lineSegments>
    </group>
  );
}

// OS Environment lighting and post-processing setup
function OSEnvironment() {
  const { scene } = useThree();
  useMemo(() => {
    // Deep dark fog to fade the matrix out logically
    scene.fog = new THREE.FogExp2('#030008', 0.04);
  }, [scene]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 5]} intensity={2} color="#06B6D4" />
    </>
  );
}

export default function BackgroundScene() {
  // We use state to ensure audio context activation is triggered on first click
  const [active, setActive] = useState(false);
  
  useEffect(() => {
      const handleInit = () => {
          import('../lib/SoundSystem').then(m => m.sysAudio.init());
          setActive(true);
          window.removeEventListener('click', handleInit);
      };
      window.addEventListener('click', handleInit);
      return () => window.removeEventListener('click', handleInit);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'var(--sys-void)' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 1.5]}>
        <OSEnvironment />
        <NeuralNetworkMesh />
      </Canvas>
      {/* OS Matrix Overlay Grid */}
      <div style={{
          position: 'absolute', inset: 0, 
          backgroundImage: 'linear-gradient(rgba(192, 38, 211, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 38, 211, 0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px', 
          zIndex: 1, pointerEvents: 'none'
      }} />
    </div>
  );
}
