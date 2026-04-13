'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Zap, Database } from 'lucide-react';

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
            mX.set((e.clientX / window.innerWidth - 0.5) * 30);
            mY.set((e.clientY / window.innerHeight - 0.5) * 30);
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, [mX, mY]);

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [1, 1, 0]);

    return (
        <section ref={containerRef} style={{ height: '200vh', position: 'relative', background: '#020203' }}>
            <div className="neural-bg" />
            <div className="scanline" />
            
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                
                {/* THE SERVER ROOM PERSPECTIVE (The WOW Detail) */}
                <motion.div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    scale, x: sX, y: sY, opacity
                }}>
                    {/* Left Server Racks */}
                    <div style={{ position: 'absolute', left: '-10%', width: '40%', height: '120%', display: 'flex', flexDirection: 'column', gap: 40, transform: 'perspective(1000px) rotateY(45deg)', opacity: 0.1 }}>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} style={{ height: 100, border: '1px solid #A855F7', borderLeft: '10px solid #A855F7', background: 'rgba(168, 85, 247, 0.05)' }} />
                        ))}
                    </div>

                    {/* Right Server Racks */}
                    <div style={{ position: 'absolute', right: '-10%', width: '40%', height: '120%', display: 'flex', flexDirection: 'column', gap: 40, transform: 'perspective(1000px) rotateY(-45deg)', opacity: 0.1 }}>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} style={{ height: 100, border: '1px solid #22D3EE', borderRight: '10px solid #22D3EE', background: 'rgba(34, 211, 238, 0.05)' }} />
                        ))}
                    </div>

                    {/* THE CENTRAL CORE (From the User Image) */}
                    <div style={{ position: 'relative', width: 400, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         {/* Core Glow */}
                         <motion.div 
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            style={{ position: 'absolute', width: '150%', height: '150%', background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)', filter: 'blur(80px)' }} 
                         />
                         
                         {/* Floating Rings */}
                         {[...Array(3)].map((_, i) => (
                             <motion.div
                                key={i}
                                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                transition={{ repeat: Infinity, duration: 20 + i * 5, ease: "linear" }}
                                style={{
                                    position: 'absolute', inset: i * 40,
                                    border: `1px solid ${i % 2 === 0 ? '#A855F7' : '#22D3EE'}`,
                                    borderRadius: '50%', opacity: 0.3
                                }}
                             />
                         ))}

                         <div style={{ position: 'relative', zIndex: 10 }}>
                             <Zap size={48} className="glow-text" style={{ color: '#A855F7' }} />
                         </div>
                    </div>
                </motion.div>

                {/* Content Overlay */}
                <div className="container-nex" style={{ position: 'relative', zIndex: 100 }}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
                        <div style={{ display: 'flex', gap: 15, alignItems: 'center', marginBottom: 30 }}>
                             <div className="mono" style={{ fontSize: 11 }}>PROTOCOL_ACCESS: GRANTED</div>
                             <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #A855F7, transparent)' }} />
                        </div>

                        <h1 style={{ fontSize: 'clamp(50px, 12vw, 150px)', lineHeight: 0.85, marginBottom: 40 }}>
                            <span className="glow-text">DECONSTRUCT</span><br />
                            <span style={{ color: '#A855F7' }}>REALITY.</span>
                        </h1>

                        <div style={{ maxWidth: 640 }}>
                            <p style={{ fontSize: 20, color: '#94A3B8', lineHeight: 1.6, fontWeight: 300, marginBottom: 60 }}>
                                We deconstruct the existing and engineer the improbable. 
                                High-performance neural architectures for the next generation of intelligence.
                            </p>
                            
                            <div style={{ display: 'flex', gap: 30 }}>
                                <motion.button whileHover={{ scale: 1.05 }} className="btn-neon">
                                    INITIALIZE_UPLINK <ArrowRight size={18} />
                                </motion.button>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                     <Database size={20} style={{ color: '#22D3EE' }} />
                                     <div className="mono" style={{ fontSize: 8 }}>Uptime: 99.9%</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Marquee (Sidebar Detail) */}
                <div style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', opacity: 0.1 }} className="hide-mobile">
                     <div style={{ writingMode: 'vertical-rl', fontSize: 12, letterSpacing: '1em', color: '#A855F7' }}>
                        SYNEC_ENGINE_v5.0_NODE_44_STATUS_OPTIMAL_STABLE
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
