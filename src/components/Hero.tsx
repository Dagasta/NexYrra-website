'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const mX = useMotionValue(0);
    const mY = useMotionValue(0);
    const sX = useSpring(mX, { stiffness: 40, damping: 20 });
    const sY = useSpring(mY, { stiffness: 40, damping: 20 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mX.set((e.clientX / window.innerWidth - 0.5) * 40);
            mY.set((e.clientY / window.innerHeight - 0.5) * 40);
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, [mX, mY]);

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0]);
    const blur = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(20px)"]);

    return (
        <section ref={containerRef} style={{ height: '180vh', position: 'relative', overflow: 'hidden' }}>
            <div className="mesh-bg" />
            <div className="data-grid" />
            
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                {/* THE CRYSTALLINE APERTURE (The $60k Artifact) */}
                <motion.div style={{
                    position: 'absolute', width: '80vw', height: '80vw', maxWidth: '1000px', maxHeight: '1000px',
                    border: '1px solid rgba(139, 92, 246, 0.1)', borderRadius: '50%',
                    scale, opacity, x: sX, y: sY, filter: blur,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        style={{
                            position: 'absolute', inset: '10%',
                            border: '1px dashed rgba(139, 92, 246, 0.2)', borderRadius: '50%'
                        }} 
                    />
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                        style={{
                            position: 'absolute', inset: '20%',
                            border: '1px solid rgba(139, 92, 246, 0.05)', borderRadius: '50%'
                        }} 
                    />
                    
                    {/* Glowing Core */}
                    <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        style={{
                            width: '30%', height: '30%', borderRadius: '50%',
                            background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
                            filter: 'blur(50px)'
                        }}
                    />
                </motion.div>

                {/* Content Overlay */}
                <div className="container-nex" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <div className="mono" style={{ marginBottom: 30, color: '#8B5CF6' }}>// SYSTEM_INITIALIZED_0xFA9</div>
                        
                        <h1 style={{ 
                            fontSize: 'clamp(50px, 12vw, 150px)', 
                            fontWeight: 900, 
                            lineHeight: 0.85, 
                            color: 'var(--nex-void)',
                            marginBottom: 40 
                        }}>
                            BEYOND THE <br />
                            <span style={{ color: '#8B5CF6' }}>FUTURE.</span>
                        </h1>

                        <div style={{ maxWidth: 600, margin: '0 auto 60px' }}>
                            <p style={{ fontSize: 20, color: '#64748B', lineHeight: 1.6, fontWeight: 300 }}>
                                We deconstruct the existing and engineer the improbable. 
                                High-performance systems for the world's most ambitious technology leaders.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-luxe"
                            >
                                START SESSION <ArrowRight size={16} />
                            </motion.button>
                            
                            <div className="hide-mobile" style={{ display: 'flex', gap: 10 }}>
                                {[1, 2, 3].map(i => <div key={i} style={{ width: 4, height: 4, background: '#8B5CF6', borderRadius: '50%', opacity: i * 0.3 }} />)}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Indicator */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
                >
                    <ChevronDown size={24} style={{ color: '#8B5CF6', opacity: 0.3 }} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
