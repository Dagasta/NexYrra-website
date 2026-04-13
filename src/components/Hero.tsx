'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Activity, Terminal as TerminalIcon } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Mouse Tracking for Interactive Geometry
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const moveX = (clientX / window.innerWidth - 0.5) * 80;
            const moveY = (clientY / window.innerHeight - 0.5) * 80;
            mouseX.set(moveX);
            mouseY.set(moveY);
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [mouseX, mouseY]);

    // Scroll-based 3D Morphing
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
    const rotateX = useTransform(smoothProgress, [0, 1], [0, 40]);
    const z = useTransform(smoothProgress, [0, 1], [0, -600]);
    const opacity = useTransform(smoothProgress, [0, 0.7, 1], [1, 0.8, 0]);
    const blur = useTransform(smoothProgress, [0, 1], ["blur(0px)", "blur(20px)"]);

    return (
        <section ref={containerRef} style={{
            position: 'relative', height: '180vh', 
            background: '#040508', overflow: 'hidden'
        }}>
            <div style={{
                position: 'sticky', top: 0, height: '100vh', width: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                perspective: '2000px'
            }}>
                
                {/* THE CORE: A Luminous 3D Structure */}
                <motion.div style={{
                    position: 'absolute', width: 800, height: 800,
                    borderRadius: '50%', border: '1px solid rgba(139,92,246,0.1)',
                    x: springX, y: springY, rotateX, opacity,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                     {/* Internal Pulse Ring */}
                     <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        style={{
                            position: 'absolute', width: 400, height: 400,
                            borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
                            filter: 'blur(40px)'
                        }} 
                     />
                     
                     {/* Orbiting Particles (Developer's Dream Detail) */}
                     {[...Array(12)].map((_, i) => (
                         <motion.div
                            key={i}
                            animate={{ rotateZ: 360 }}
                            transition={{ repeat: Infinity, duration: 10 + i * 2, ease: "linear" }}
                            style={{ position: 'absolute', width: 500 + i * 20, height: 500 + i * 20, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.02)', pointerEvents: 'none' }}
                         >
                            <div style={{ position: 'absolute', top: '50%', left: 0, width: 3, height: 3, background: i % 2 === 0 ? '#8B5CF6' : '#22D3EE', borderRadius: '50%', boxShadow: `0 0 10px ${i % 2 === 0 ? '#8B5CF6' : '#22D3EE'}` }} />
                         </motion.div>
                     ))}
                </motion.div>

                {/* Horizontal Marquee Overlays (Fancy Aspect) */}
                <div style={{ position: 'absolute', top: '15%', left: 0, right: 0, pointerEvents: 'none', opacity: 0.1 }}>
                    <div className="font-cyber" style={{ fontSize: 10, letterSpacing: '1em', whiteSpace: 'nowrap', animation: 'marquee-rtl 100s linear infinite' }}>
                        NEXYRRA_CORE_SYSTEM_ACTIVE_NODES_STABLE_LATENCY_0.002MS_ENCRYPTION_LAYER_V2.0.4
                    </div>
                </div>

                {/* Main Content Card (Luminous & Refractive) */}
                <div className="container-nex" style={{ position: 'relative', zIndex: 100 }}>
                    <motion.div style={{ rotateX, z, filter: blur, opacity }}>
                        
                        <div style={{ display: 'flex', gap: 15, alignItems: 'center', marginBottom: 50 }}>
                            <div className="shimmer-border" style={{ padding: '6px 16px', borderRadius: 4 }}>
                                <span className="font-cyber" style={{ fontSize: 9, fontWeight: 900, color: 'white', letterSpacing: '0.3em' }}>
                                    PROTOCOL: ARCHITECT
                                </span>
                            </div>
                            <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, rgba(139,92,246,0.3), transparent)' }} />
                        </div>

                        <h1 className="font-title" style={{
                            fontSize: 'clamp(56px, 11vw, 160px)',
                            fontWeight: 900, lineHeight: 0.88, 
                            letterSpacing: '-0.07em', color: 'white',
                            marginBottom: 40
                        }}>
                            <span style={{ display: 'block', opacity: 0.15 }}>SYSTEMS</span>
                            <span style={{ display: 'block' }}>THAT THINK.</span>
                            <span className="shimmer-text" style={{ display: 'block' }}>ARCHITECTED.</span>
                        </h1>

                        <div style={{ display: 'flex', gap: 40, alignItems: 'start' }} className="grid-mobile-1">
                            <p className="font-main" style={{
                                fontSize: 'clamp(16px, 1.8vw, 22px)', color: '#94A3B8',
                                maxWidth: 500, lineHeight: 1.6, fontWeight: 300
                            }}>
                                We deconstruct the existing and engineer the improbable. 
                                High-performance digital foundations for the world's most ambitious systems.
                            </p>
                            
                            {/* Interactive Data Node (Wow factor) */}
                            <motion.div 
                                className="glass-refractive"
                                style={{ padding: '30px', width: 280, borderRadius: 2 }}
                                whileHover={{ scale: 1.05, rotateY: 10 }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                    <Activity size={16} style={{ color: '#8B5CF6' }} />
                                    <span className="font-cyber" style={{ fontSize: 8, color: '#334155' }}>LIVE_TELEMETRY</span>
                                </div>
                                <div className="font-title" style={{ fontSize: 28, fontWeight: 900, color: 'white', marginBottom: 5 }}>99.9%</div>
                                <div style={{ fontSize: 10, color: '#4B5563', letterSpacing: '0.1em' }}>THROUGHPUT_EFFICIENCY</div>
                                <div style={{ marginTop: 20, height: 2, background: 'rgba(255,255,255,0.05)', position: 'relative' }}>
                                    <motion.div 
                                        animate={{ width: ["0%", "80%", "70%", "90%"] }}
                                        transition={{ repeat: Infinity, duration: 4 }}
                                        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, background: '#8B5CF6' }} 
                                    />
                                </div>
                            </motion.div>
                        </div>

                        <div style={{ marginTop: 80, display: 'flex', gap: 20, alignItems: 'center' }}>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary" 
                                style={{ 
                                    padding: '24px 60px', borderRadius: 0, 
                                    background: 'white', color: 'black', 
                                    fontFamily: 'var(--font-cyber)', fontWeight: 900, fontSize: 14 
                                }}
                            >
                                START_SESSION_01
                            </motion.button>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                                <div style={{ width: 100, height: 1, background: '#1E293B' }} />
                                <div style={{ width: 140, height: 1, background: '#1E293B' }} />
                                <div style={{ width: 80, height: 1, background: '#1E293B' }} />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Decorative Metadata (Fancy Detail) */}
                <div style={{ position: 'absolute', right: 40, bottom: 40, display: 'flex', gap: 15 }} className="hide-mobile">
                     <div className="vertical-marquee">SYS_STATUS_OK_NODE_CHECK_PASSED_AUTH_009</div>
                     <div className="vertical-marquee" style={{ opacity: 0.3 }}>UX_ARCH_V2.0.4.55.99.11</div>
                </div>

                <div style={{ position: 'absolute', left: 40, top: '50%', transform: 'translateY(-50%)' }} className="hide-mobile">
                    <TerminalIcon size={20} style={{ color: '#1E293B' }} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
