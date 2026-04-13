'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Target } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Interactive Floating Artifact logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 50;
            const y = (clientY / window.innerHeight - 0.5) * 50;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [mouseX, mouseY]);

    // Scroll Depth effects
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
    const z = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0]);

    return (
        <section ref={containerRef} style={{ height: '200vh', position: 'relative', perspective: '1200px' }}>
            {/* The Neural Grid Background */}
            <div className="neural-overlay" />
            
            {/* Focal Luminous Gradient */}
            <div style={{
                position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '80vw', height: '80vh',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
                filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none'
            }} />

            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                
                {/* THE HOLOGRAPHIC CORE (The WOW Artifact) */}
                <motion.div style={{
                    position: 'absolute', width: 'clamp(500px, 40vw, 800px)', height: 'clamp(500px, 40vw, 800px)',
                    x: springX, y: springY, scale, opacity, z,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    {/* Morphing Outer Shield */}
                    <motion.div 
                        animate={{ 
                            borderRadius: ["40% 60% 60% 40% / 60% 30% 70% 40%", "60% 40% 30% 70% / 40% 70% 30% 60%", "40% 60% 60% 40% / 60% 30% 70% 40%"],
                            rotate: [0, 180, 360],
                            boxShadow: [
                                "0 0 50px rgba(139,92,246,0.3)",
                                "0 0 100px rgba(34,211,238,0.3)",
                                "0 0 50px rgba(139,92,246,0.3)"
                            ]
                        }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        style={{
                            position: 'absolute', inset: 0,
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(255,255,255,0.01)',
                            backdropFilter: 'blur(5px)'
                        }}
                    />

                    {/* Floating Data Points (Tech details) */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ 
                                y: [0, -20, 0],
                                rotateZ: [0, 360]
                            }}
                            transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
                            style={{ 
                                position: 'absolute', top: `${10 + i * 10}%`, left: `${20 + i * 5}%`,
                                width: 4, height: 4, background: i % 2 === 0 ? '#8B5CF6' : '#22D3EE',
                                borderRadius: '50%', boxShadow: '0 0 10px currentColor'
                            }}
                        />
                    ))}

                    <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                         <Sparkles size={48} style={{ color: '#8B5CF6', marginBottom: 20 }} />
                         <div className="font-cyber" style={{ fontSize: 9, letterSpacing: '0.8em', color: '#22D3EE' }}>BIONIC_CORE_v4.0</div>
                    </div>
                </motion.div>

                {/* Main Content Layout (High Creative Depth) */}
                <div className="container-nex" style={{ position: 'relative', zIndex: 100 }}>
                    <motion.div style={{ opacity, y: z }}>
                        
                        <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginBottom: 40 }}>
                            <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
                            <span className="font-cyber" style={{ fontSize: 11, fontWeight: 800, color: 'white' }}>ARCHITECTING INTELLIGENCE</span>
                        </div>

                        <h1 className="text-bionic" style={{
                            fontSize: 'clamp(50px, 10vw, 150px)',
                            fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.06em',
                            marginBottom: 40
                        }}>
                            BEYOND THE <br />
                            <span className="shimmer-text">KNOWN.</span>
                        </h1>

                        <div style={{ gridTemplateColumns: 'minmax(200px, 1.5fr) 1fr', display: 'grid', gap: 100 }} className="grid-mobile-1">
                            <p style={{ fontSize: '20px', color: '#CBD5E1', lineHeight: 1.7, fontWeight: 300, maxWidth: 500 }}>
                                We deconstruct reality to architect the impossible. 
                                High-performance systems engineering at the intersection of AI and human legacy.
                            </p>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                 {[
                                    { l: 'NEURAL_THROUGHPUT', v: '1.2TB/S', c: '#8B5CF6' },
                                    { l: 'ARCHITECTURE_SYNEC_v4', v: 'ACTIVE', c: '#22D3EE' }
                                 ].map((s, i) => (
                                     <div key={i} className="glass-prismatic" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                         <div className="font-cyber" style={{ fontSize: 8 }}>{s.l}</div>
                                         <div className="font-cyber" style={{ fontSize: 10, color: s.c }}>{s.v}</div>
                                     </div>
                                 ))}
                            </div>
                        </div>

                        <div style={{ marginTop: 80, display: 'flex', gap: 30, alignItems: 'center' }}>
                            <button className="btn-beyond">
                                INITIALIZE_EXPERIENCE <ArrowRight size={18} />
                            </button>
                            <div style={{ display: 'flex', gap: 5 }}>
                                {[1, 2, 3, 4, 5].map(i => <div key={i} style={{ width: 3, height: 3, background: '#1E293B', borderRadius: '50%' }} />)}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Decorative Marquee (Tech feel) */}
                <div style={{ position: 'absolute', right: 40, top: '20%', display: 'flex', gap: 20, opacity: 0.2 }} className="hide-mobile">
                     <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontSize: 9, letterSpacing: '0.4em', color: '#4B5563' }}>
                        SYS_MOD_ALPHA_SYNC_STABLE_COORD_009384_LOG_44
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
