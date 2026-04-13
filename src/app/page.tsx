'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Preload } from '@react-three/drei';
import Experience from '../components/Experience';
import SpatialOverlay from '../components/SpatialOverlay';

// The entire website is now a single 3D scene driven by the ScrollControls wrapper.
export default function OmnisIndex() {
  return (
    <main style={{ width: '100vw', height: '100vh', background: 'var(--omnis-obsidian)' }}>
      {/* 
        This div layers HTML strictly *above* the WebGL canvas, 
        managed by our SpatialOverlay component so it syncs with the 3D scroll 
      */}
      <div className="spatial-overlay">
         <SpatialOverlay />
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Support high-res retina displays
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#000000']} />
        
        <Suspense fallback={null}>
          {/* ScrollControls turns native browser scrolling into a normalized 0 to 1 value for the 3D scene */}
          <ScrollControls pages={8} damping={0.1}>
            <Experience />
          </ScrollControls>
          <Preload all />
        </Suspense>
      </Canvas>
    </main>
  );
}
