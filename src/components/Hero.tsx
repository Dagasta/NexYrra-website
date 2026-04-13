'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, ChevronDown, Activity, Database, Zap } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Mouse Tracking for Interactive Depth
    const mX = useMotionValue(0);
    const mY = useMotionValue(0);
    const sX = useSpring(mX, { stiffness: 40, damping: 20 });
    const sY = useSpring(mY, { stiffness: 40, damping: 20 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mX.set((e.clientX / window.innerWidth - 0.5) * 50);
            mY.set((e.clientY / window.innerHeight - 0.5) * 50);
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, [mX, mY]);

    // Scroll Transforms
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0]);
    const blur = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(20px)"]);

    return (
        <section ref={containerRef} style={{ height: '220vh', position: 'relative', overflow: 'hidden' }}>
            <div className="data-layer" />
            
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                {/* THE DIGITAL NEXUS (Parallax Depth) */}
                <motion.div style={{
                    position: 'absolute', width: 'clamp(500px, 80vw, 1200px)', height: 'clamp(500px, 80vw, 1200px)',
                    border: '1px solid rgba(168, 85, 247, 0.05)', borderRadius: '50%',
                    scale, opacity, x: sX, y: sY, filter: blur,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    {/* Perspective Racks (Visual Detail from User Image) */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20 + i * 5, ease: "linear" }}
                            style={{
                                position: 'absolute', inset: i * 30,
                                border: '1px solid rgba(168, 85, 247, 0.03)', borderRadius: '50%'
                            }}
                        >
                             <div style={{ position: 'absolute', top: '50%', left: -5, width: 10, height: 2, background: i % 2 === 0 ? '#A855F7' : '#22D3EE' }} />
                        </motion.div>
                    ))}

                    {/* Central Core */}
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        style={{ width: '20%', height: '20%', borderRadius: '50%', background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)', filter: 'blur(40px)' }}
                    />
                </motion.div>

                {/* Main Content (Responsive Layout) */}
                <div className="container-nex" style={{ position: 'relative', zIndex: 100 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                        
                        <div style={{ display: 'flex', items: 'center', gap: 20, marginBottom: 40 }} className="stack-mobile">
                            <div className="mono" style={{ color: '#A855F7' }}>// NEXYRRA_CORE_v6.0</div>
                            <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, #A855F7, transparent)' }} className="hide-mobile" />
                            <div style={{ display: 'flex', gap: 10 }} className="hide-mobile">
                                <Activity size={14} style={{ color: '#22D3EE' }} />
                                <Database size={14} style={{ color: '#22D3EE' }} />
                                <Zap size={14} style={{ color: '#22D3EE' }} />
                            </div>
                        </div>

                        <h1 style={{ marginBottom: 40 }}>
                            DECONSTRUCT<br />
                            <span style={{ color: '#A855F7' }}>EVERYTHING.</span>
                        </h1>

                        <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1.5fr) 1fr', gap: 100 }}>
                            <p style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#94A3B8', lineHeight: 1.6, fontWeight: 300 }}>
                                We deconstruct the existing and engineer the improbable. 
                                High-performance digital foundations for the next era of architecture.
                            </p>
                            
                            <div className="hide-mobile" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <div className="glass-v6" style={{ padding: 25 }}>
                                    <div className="mono" style={{ fontSize: 9, marginBottom: 10 }}>THROUGHPUT_SYNC</div>
                                    <div style={{ height: 2, background: 'rgba(255,255,255,0.05)', position: 'relative' }}>
                                        <motion.div animate={{ width: ['0%', '80%', '40%', '90%'] }} transition={{ repeat: Infinity, duration: 4 }} style={{ position: 'absolute', inset: 0, background: '#A855F7' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: 80, display: 'flex', gap: 30, alignItems: 'center' }} className="stack-mobile">
                            <Link href="/contact" style={{ textDecoration: 'none' }}>
                                <button className="btn-cinema">
                                    INITIATE_UPGRADE <ArrowRight size={20} />
                                </button>
                            </Link>
                            
                            <div style={{ display: 'flex', gap: 10 }}>
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} style={{ width: 40, height: 1, background: '#1E293B' }} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Reveal */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
                >
                    <ChevronDown size={24} style={{ color: '#A855F7', opacity: 0.3 }} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
