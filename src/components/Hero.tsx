'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Mouse Tracking for the "System Aperture"
    const mX = useMotionValue(0);
    const mY = useMotionValue(0);
    const sX = useSpring(mX, { stiffness: 30, damping: 20 });
    const sY = useSpring(mY, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mX.set((e.clientX / window.innerWidth - 0.5) * 60);
            mY.set((e.clientY / window.innerHeight - 0.5) * 60);
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, [mX, mY]);

    // Scroll Transforms (The $60k Reveal)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(40px)"]);

    return (
        <section ref={containerRef} style={{ height: '220vh', background: '#020203', position: 'relative' }}>
            <div className="matrix-grid" />
            <div className="caustic-glow" style={{ top: '20%', left: '30%' }} />

            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                
                {/* THE APERTURE (System Eye) */}
                <motion.div style={{
                    position: 'absolute', width: 'clamp(400px, 60vw, 1000px)', height: 'clamp(400px, 60vw, 1000px)',
                    border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50%',
                    scale, rotate, filter: blur, x: sX, y: sY,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    {/* Inner Gears / Rings */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20 + i * 10, ease: "linear" }}
                            style={{
                                position: 'absolute', inset: i * 40,
                                border: '1px solid rgba(255,255,255,0.03)', borderRadius: '50%',
                                borderTopColor: i % 2 === 0 ? 'var(--nex-accent)' : 'var(--nex-cyan)',
                                opacity: 0.2
                            }}
                        />
                    ))}
                    
                    {/* Focal Point */}
                    <motion.div 
                        animate={{ scale: [1, 1.1, 1] }} 
                        transition={{ repeat: Infinity, duration: 4 }}
                        style={{ width: 4, height: 4, background: 'white', borderRadius: '50%', boxShadow: '0 0 20px white' }} 
                    />
                </motion.div>

                {/* Main Content (High Authority Minimalist) */}
                <motion.div className="container-nex" style={{ position: 'relative', zIndex: 10, opacity, filter: blur }}>
                    <div style={{ marginBottom: 40 }}>
                        <span className="mono" style={{ color: 'var(--nex-accent)', fontWeight: 800 }}>[ ACCESS_PENDING ]</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(60px, 12vw, 180px)', fontWeight: 300, lineHeight: 0.8, color: 'white', marginBottom: 60 }}>
                        DECONSTRUCT<br />
                        <span className="text-shimmer" style={{ fontWeight: 800 }}>EVERYTHING.</span>
                    </h1>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1.5fr) 1fr', gap: 100 }} className="grid-mobile-1">
                        <p style={{ fontSize: 22, color: '#64748B', lineHeight: 1.6, fontWeight: 300, maxWidth: 600 }}>
                            We architecturalize digital constraints. 
                            Bespoke systems engineering for the world's most authoritative infrastructures.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                             <div style={{ display: 'flex', gap: 15 }}>
                                 <div style={{ width: 10, height: 10, border: '1px solid white' }} />
                                 <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', opacity: 0.4 }}>SECURE_ENCRYPTION_v3.0</div>
                             </div>
                             <div style={{ height: 1, width: '100%', background: 'linear-gradient(90deg, white, transparent)' }} />
                        </div>
                    </div>

                    <div style={{ marginTop: 100 }}>
                        <button className="btn-nex-v3">
                            INITIALIZE_PROTOCOL_01
                        </button>
                    </div>
                </motion.div>

                {/* Corner Telemetry (The $60k Details) */}
                <div style={{ position: 'absolute', bottom: 50, left: 50 }} className="hide-mobile">
                    <div className="mono">COORD / 25.2048° N, 55.2708° E</div>
                    <div className="mono">TIME_STAMP / {new Date().toLocaleTimeString()}</div>
                </div>

                <div style={{ position: 'absolute', top: 50, right: 50 }} className="hide-mobile">
                     <div style={{ display: 'flex', gap: 20 }}>
                         {[1, 0, 1, 1, 0, 1].map((b, i) => (
                             <div key={i} className="mono" style={{ opacity: b === 1 ? 1 : 0.2 }}>{b}</div>
                         ))}
                     </div>
                </div>
            </div>

            {/* Scrolling Marker */}
            <div className="section-marker">
                <div className="marker-label">NX_SYSTEM_CORE</div>
            </div>
        </section>
    );
};

export default Hero;
