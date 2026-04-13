'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Terminal, Activity, ChevronRight, Fingerprint, Database } from 'lucide-react';
import Link from 'next/link';
import { sysAudio } from '../lib/SoundSystem';

const bootSequence = [
    "INITIATING KERNEL SEQUENCE...",
    "ESTABLISHING NEURAL LINK...",
    "SYNCING REGIONAL NODES...",
    "BYPASSING SECURITY PROTOCOLS...",
    "ACCESS GRANTED. WELCOME ADMIN."
];

export default function Hero() {
    const [bootState, setBootState] = useState(0);
    const [isBooted, setIsBooted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Boot Sequence Logic
    useEffect(() => {
        if (bootState < bootSequence.length) {
            const timer = setTimeout(() => {
                setBootState(prev => prev + 1);
                sysAudio.playTick(); // Tick for every log line
            }, 500 + Math.random() * 500);
            return () => clearTimeout(timer);
        } else if (!isBooted) {
             const finalTimer = setTimeout(() => {
                 setIsBooted(true);
                 sysAudio.playPulse(); // Heavy pulse when system unlocks
             }, 800);
             return () => clearTimeout(finalTimer);
        }
    }, [bootState, isBooted]);

    // Complex OS Parallax
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Cursor Intelligence (Panels look at cursor)
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
    const rotateX = useTransform(springY, [0, 1], ["5deg", "-5deg"]);
    const rotateY = useTransform(springX, [0, 1], ["-5deg", "5deg"]);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [mouseX, mouseY]);

    return (
        <section ref={containerRef} style={{ height: '150vh', position: 'relative', perspective: '2000px' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                
                <AnimatePresence mode="wait">
                    {!isBooted ? (
                        // BOOT SCREEN
                        <motion.div 
                            key="boot"
                            exit={{ opacity: 0, scale: 1.2, filter: 'blur(20px)' }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            style={{ position: 'absolute', inset: 0, background: 'var(--sys-void)', zIndex: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10vw' }}
                        >
                            <Terminal size={40} color="var(--sys-neon-purple)" style={{ marginBottom: 40 }} />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                                {bootSequence.slice(0, bootState).map((line, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mono-sys" style={{ color: i === bootSequence.length - 1 ? 'var(--sys-neon-blue)' : 'var(--sys-slate)', fontSize: 14 }}>
                                        > {line}
                                    </motion.div>
                                ))}
                                {bootState < bootSequence.length && (
                                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="mono-sys" style={{ color: 'var(--sys-neon-purple)', fontSize: 14 }}>
                                        _
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        // MAIN HUD
                        <motion.div 
                            key="main"
                            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], staggerChildren: 0.2 }}
                            style={{ width: '100%', height: '100%', position: 'relative', zIndex: 10 }}
                        >
                            <motion.div style={{ opacity, y: y1, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="container-os" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: 40, alignItems: 'center' }} className="stack-mobile">
                                    
                                    {/* Core Title Panel */}
                                    <motion.div 
                                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                                        className="hud-panel"
                                    >
                                        <div className="scanline" style={{ padding: 'clamp(40px, 6vw, 80px)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 30, transform: 'translateZ(30px)' }}>
                                                <Activity size={16} color="var(--sys-neon-blue)" />
                                                <span className="mono-sys" style={{ color: 'var(--sys-neon-blue)' }}>SYSTEM_CORE // ACTIVE</span>
                                            </div>
                                            
                                            <h1 style={{ fontSize: 'clamp(50px, 8vw, 110px)', marginBottom: 30, transform: 'translateZ(50px)' }}>
                                                INTELLIGENT <br />
                                                <span className="glow-text" style={{ color: 'var(--sys-neon-purple)' }}>SYSTEMS.</span>
                                            </h1>
                                            
                                            <p style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'var(--sys-slate)', lineHeight: 1.6, maxWidth: 500, fontWeight: 300, transform: 'translateZ(20px)' }}>
                                                You are not navigating a website. You are interfacing with a high-performance cognitive architecture designed for elite technological scaling.
                                            </p>

                                            <div style={{ marginTop: 60, display: 'flex', gap: 20, transform: 'translateZ(40px)' }} className="stack-mobile">
                                                <Link href="/contact" style={{ textDecoration: 'none' }}>
                                                    <button className="btn-command" onMouseEnter={() => sysAudio.playTick()} onClick={() => sysAudio.playPulse()}>
                                                        EXECUTE_UPLINK <ChevronRight size={16} />
                                                    </button>
                                                </Link>
                                                <Link href="/services" style={{ textDecoration: 'none' }}>
                                                    <button className="btn-command" onMouseEnter={() => sysAudio.playTick()} onClick={() => sysAudio.playPulse()} style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: 'var(--sys-slate)' }}>
                                                        <Fingerprint size={16} /> VIEW_MODULES
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Floating Data Modules */}
                                    <motion.div style={{ y: y2, display: 'flex', flexDirection: 'column', gap: 20, perspective: '1000px' }} className="hide-mobile">
                                        <div className="hud-panel" style={{ padding: 30, transform: 'rotateY(-15deg)', transformOrigin: 'right center' }}>
                                             <div className="mono-sys" style={{ opacity: 0.5, marginBottom: 15 }}>DIAGNOSTICS_TICK</div>
                                             <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 60 }}>
                                                 {[0.4, 0.8, 0.5, 1, 0.6, 0.9, 0.3].map((h, i) => (
                                                     <motion.div key={i} animate={{ height: [`${h*100}%`, `${Math.random()*100}%`, `${h*100}%`] }} transition={{ repeat: Infinity, duration: 1.5 + Math.random() }} style={{ flex: 1, background: 'var(--sys-neon-purple)', opacity: 0.5 }} />
                                                 ))}
                                             </div>
                                        </div>
                                        <div className="hud-panel" style={{ padding: 30, transform: 'rotateY(-15deg)', transformOrigin: 'right center' }}>
                                             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                 <Database size={24} color="var(--sys-neon-blue)" />
                                                 <div style={{ textAlign: 'right' }}>
                                                     <div className="mono-sys" style={{ opacity: 0.5 }}>ACTIVE_NODES</div>
                                                     <div style={{ fontSize: 32, fontWeight: 900, fontFamily: 'var(--font-os)', textShadow: '0 0 10px var(--sys-neon-blue)' }}>2,048</div>
                                                 </div>
                                             </div>
                                        </div>
                                    </motion.div>

                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
