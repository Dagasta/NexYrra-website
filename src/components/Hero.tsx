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
            <div className="neural-overlay" />
            
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                
                {/* THE HOLOGRAPHIC CORE */}
                <motion.div style={{
                    position: 'absolute', width: 'clamp(500px, 40vw, 800px)', height: 'clamp(500px, 40vw, 800px)',
                    x: springX, y: springY, scale, opacity, z,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <motion.div 
                        animate={{ 
                            borderRadius: ["40% 60% 60% 40% / 60% 30% 70% 40%", "60% 40% 30% 70% / 40% 70% 30% 60%", "40% 60% 60% 40% / 60% 30% 70% 40%"],
                            rotate: [0, 180, 360],
                            boxShadow: ["0 0 50px rgba(139,92,246,0.3)", "0 0 100px rgba(34,211,238,0.3)", "0 0 50px rgba(139,92,246,0.3)"]
                        }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        style={{
                            position: 'absolute', inset: 0,
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(255,255,255,0.01)',
                            backdropFilter: 'blur(5px)'
                        }}
                    />

                    <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                         <Sparkles size={48} style={{ color: '#8B5CF6', marginBottom: 20 }} />
                         <div className="font-cyber" style={{ fontSize: 9, letterSpacing: '0.8em', color: '#22D3EE' }}>BIONIC_CORE_v4.0</div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="container-nex" style={{ position: 'relative', zIndex: 100 }}>
                    <motion.div style={{ opacity, y: z }}>
                        
                        <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginBottom: 40 }}>
                            <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
                            <span className="font-cyber" style={{ fontSize: 11, fontWeight: 800 }}>ARCHITECTING INTELLIGENCE</span>
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
                        </div>

                        <div style={{ marginTop: 80, display: 'flex', gap: 30, alignItems: 'center' }}>
                            <button className="btn-beyond">
                                INITIALIZE_EXPERIENCE <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
