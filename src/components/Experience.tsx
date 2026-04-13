'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, MeshTransmissionMaterial, Float, Text, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// ----------------------------------------------------
// THE LIQUID CORE
// The centerpiece of the entry experience.
// ----------------------------------------------------
function LiquidCore({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float floatIntensity={2} speed={2}>
      <mesh ref={meshRef} position={position} scale={1.5}>
        <Icosahedron args={[1, 0]} /> {/* Clean geometric core */}
        <MeshTransmissionMaterial 
          background={new THREE.Color('#000000')}
          thickness={1.5}
          roughness={0}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.1}
          color="#E2E8F0"
        />
      </mesh>
      
      {/* Outer organic wireframe */}
      <mesh position={position} scale={1.8}>
        <Icosahedron args={[1, 2]} />
        <meshBasicMaterial color="#6D28D9" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

// ----------------------------------------------------
// THE INFRASTRUCTURE GATES
// Massive architectural rings the user flies through.
// ----------------------------------------------------
function InfrastructureGate({ position, text, rotationParams }: { position: [number, number, number], text: string, rotationParams: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
      if (groupRef.current) {
          groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * rotationParams) * 0.1;
      }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Frame Left */}
      <mesh position={[-4, 0, 0]}>
        <boxGeometry args={[1, 10, 1]} />
        <meshStandardMaterial color="#050505" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Frame Right */}
      <mesh position={[4, 0, 0]}>
        <boxGeometry args={[1, 10, 1]} />
        <meshStandardMaterial color="#050505" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Frame Top */}
      <mesh position={[0, 4.5, 0]}>
        <boxGeometry args={[9, 1, 1]} />
        <meshStandardMaterial color="#050505" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Frame Bottom */}
      <mesh position={[0, -4.5, 0]}>
        <boxGeometry args={[9, 1, 1]} />
        <meshStandardMaterial color="#050505" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* 3D Typography locked to the gate */}
      <Text
        position={[0, 5.5, 0]}
        fontSize={1}
        font="https://fonts.gstatic.com/s/syncopate/v18/pe0pMIyCps2teZpjBw8kig.woff"
        color="#E2E8F0"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
      >
        {text}
      </Text>
    </group>
  );
}

// ----------------------------------------------------
// THE OMNIS EXPERIENCE MASTER
// Orchestrates the deep Z-axis flight path.
// ----------------------------------------------------
export default function Experience() {
  const scrollData = useScroll();
  const cameraGroup = useRef<THREE.Group>(null);
  
  // Parallax / Camera smoothing constants
  const targetZ = useRef(0);
  const targetTilt = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!cameraGroup.current) return;

    // 1. Z-Axis Flight
    // The scroll controls 'offset' value ranges from 0 to 1 over the total scroll height.
    // We map 0 -> 1 to Z: 5 -> -120 (Deep space)
    const totalDepth = -120;
    targetZ.current = 5 + (scrollData.offset * totalDepth);
    
    // Smooth damp camera Z
    cameraGroup.current.position.z = THREE.MathUtils.damp(cameraGroup.current.position.z, targetZ.current, 4, delta);

    // 2. Mouse Look / Tilt
    // We look at the pointer and gently tilt the camera group
    targetTilt.current.x = (state.pointer.y * Math.PI) / 10;
    targetTilt.current.y = -(state.pointer.x * Math.PI) / 10;
    
    cameraGroup.current.rotation.x = THREE.MathUtils.damp(cameraGroup.current.rotation.x, targetTilt.current.x, 2, delta);
    cameraGroup.current.rotation.y = THREE.MathUtils.damp(cameraGroup.current.rotation.y, targetTilt.current.y, 2, delta);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} color="#6D28D9" /> {/* Deep UV volumetric imitation */}
      <spotLight position={[-10, -10, -10]} intensity={1} color="#E2E8F0" />
      <fog attach="fog" args={['#000000', 5, 25]} /> {/* Gives the infinite void fade */}

      {/* Camera Rig */}
      <group ref={cameraGroup}>
         <perspectiveCamera position={[0, 0, 0]} />
      </group>

      {/* Environment Nodes spread out across the Z axis */}
      
      {/* Node 0: The Core (Starting Position Z=0) */}
      <LiquidCore position={[0, 0, 0]} />
      
      {/* Node 1: Intelligence Operations Z= -20 */}
      <InfrastructureGate position={[0, 0, -20]} text="SYSTEMS" rotationParams={0.2} />
      <mesh position={[0, 0, -21]}><sphereGeometry args={[0.5, 32, 32]}/><meshStandardMaterial color="#6D28D9" emissive="#6D28D9" emissiveIntensity={2} /></mesh>

      {/* Node 2: Software Ecosystems Z= -45 */}
      <InfrastructureGate position={[0, 0, -45]} text="ENGINEERING" rotationParams={0.15} />

      {/* Node 3: Cyber Security & Datasets Z= -70 */}
      <InfrastructureGate position={[0, 0, -70]} text="COGNITION" rotationParams={0.25} />

      {/* Node 4: The Event Horizon (End) Z= -95 */}
      <group position={[0, 0, -95]}>
         <mesh rotation={[Math.PI / 2, 0, 0]}>
           <torusGeometry args={[8, 0.2, 16, 100]} />
           <meshStandardMaterial color="#E2E8F0" roughness={0.1} metalness={1} />
         </mesh>
         <Text
           position={[0, 0, 0]} fontSize={2}
           font="https://fonts.gstatic.com/s/syncopate/v18/pe0pMIyCps2teZpjBw8kig.woff"
           color="#FFFFFF" anchorX="center" anchorY="middle"
         >
           NEXYRRA
         </Text>
      </group>
    </>
  );
}
