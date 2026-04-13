'use client';

import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Activity, Cpu, Layers, Radio } from 'lucide-react';

// ─── DATA ENGINE ─────────────────────────────────────────────────────────────
const SYSTEM_LOGS = [
    'BOOTING NEXYRRA_CORE_v2.0.4',
    'UPLINK STABLE... LATENCY 0.002ms',
    'REDUCING ENTROPY... 98.4%',
    'SYNCING ARCHITECTURAL DATA...',
    'OVERRIDING STANDARD PARADIGMS',
    'ENCRYPTING COMMUNICATION CHANNELS',
    'OPTIMIZING SYSTEM THROUGHPUT',
    'DEPLOYING DIGITAL LEGACY...',
];

const METHOD_PIPELINE = [
    { id: '01', label: 'ANALYZE', sub: 'DECONSTRUCTING THE PROBLEM SPACE', icon: Activity },
    { id: '02', label: 'ARCHITECT', sub: 'ENGINEERING THE SOLUTION ENGINE', icon: Layers },
    { id: '03', label: 'EXECUTE', sub: 'PULSING DATA INTO REALITY', icon: Cpu },
    { id: '04', label: 'EVOLVE', sub: 'PERPETUAL OPTIMIZATION CYCLE', icon: Radio },
];

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Global background color shift based on scroll
    const bgColor = useTransform(smoothProgress, [0, 0.5, 1], ['#07080e', '#090a16', '#05060e']);
    
    // Log ticker state
    const [logIndex, setLogIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setLogIndex(prev => (prev + 1) % SYSTEM_LOGS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.main 
            ref={containerRef}
            style={{ 
                backgroundColor: bgColor, 
                color: 'white', 
                position: 'relative',
                overflowX: 'hidden'
            }}
        >
            <Navbar />
            
            {/* System Status Overlay (Floating) */}
            <div style={{
                position: 'fixed', top: 120, left: 32, zIndex: 100,
                pointerEvents: 'none', opacity: 0.4
            }} className="hide-mobile">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#8B5CF6', animation: 'nex-pulse 2s infinite' }} />
                    <span className="font-cyber" style={{ fontSize: 9, letterSpacing: '0.2em', color: '#8B5CF6' }}>SYSTEM_LIVE</span>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={logIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        style={{ fontSize: 8, fontFamily: 'monospace', color: '#4B5563' }}
                    >
                        &gt; {SYSTEM_LOGS[logIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            <Hero />

            {/* ─── DATA STREAM SECTION ────────────────────────────────── */}
            <section style={{ height: '30vh', display: 'flex', alignItems: 'center', borderTop: '1px solid rgba(139,92,246,0.1)', borderBottom: '1px solid rgba(139,92,246,0.1)', background: 'rgba(8,9,15,0.4)', overflow: 'hidden' }}>
                <div style={{
                    display: 'flex', whiteSpace: 'nowrap', gap: 100,
                    animation: 'marquee-rtl 60s linear infinite'
                }}>
                    {[...Array(10)].map((_, i) => (
                        <div key={i} style={{ display: 'flex', gap: 100, alignItems: 'center' }}>
                            <span className="text-velocity shimmer-text" style={{ fontSize: 'clamp(40px, 6vw, 100px)', opacity: 0.15 }}>ARCHITECTING THE FUTURE</span>
                            <span className="text-velocity" style={{ fontSize: 'clamp(40px, 6vw, 100px)', color: '#1E293B' }}>NEXYRRA_CORE</span>
                        </div>
                    ))}
                </div>
            </section>

            <Services />

            {/* ─── THE PIPELINE (MORPHING SECTION) ────────────────────── */}
            <section style={{ padding: '200px 0', position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ textAlign: 'center', marginBottom: 120 }}>
                        <h2 className="font-title" style={{ fontSize: 'clamp(40px, 7vw, 120px)', fontWeight: 900, letterSpacing: '-0.04em' }}>
                            THE <span style={{ color: '#8B5CF6' }}>PROCESS</span> IS<br />THE <span style={{ color: '#22D3EE' }}>PRODUCT.</span>
                        </h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {METHOD_PIPELINE.map((step, i) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, rotateX: -20, y: 50 }}
                                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    display: 'grid', gridTemplateColumns: '80px 1fr 1fr 60px',
                                    alignItems: 'center', padding: '60px 40px',
                                    background: 'rgba(255,255,255,0.01)',
                                    border: '1px solid rgba(255,255,255,0.03)',
                                    position: 'relative', overflow: 'hidden'
                                }}
                                whileHover={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(139,92,246,0.2)' }}
                                className="grid-mobile-1"
                            >
                                <span className="font-cyber" style={{ fontSize: 14, color: '#334155', fontWeight: 900 }}>{step.id}</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                    <step.icon size={24} style={{ color: '#8B5CF6' }} />
                                    <span className="font-title" style={{ fontSize: 24, fontWeight: 800 }}>{step.label}</span>
                                </div>
                                <span style={{ fontSize: 12, color: '#4B5563', letterSpacing: '0.1em' }} className="hide-mobile">{step.sub}</span>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#8B5CF6', marginLeft: 'auto', opacity: 0.4 }} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── THE MANIFESTO (SYSTEM OVERRIDE) ──────────────────── */}
            <section style={{ padding: '240px 0', background: '#000', position: 'relative', overflow: 'hidden' }}>
                <div className="scanline" />
                <div className="container-nex">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}
                    >
                        <p className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.5em', color: '#8B5CF6', marginBottom: 60 }}>
                            MANIFESTO_PROTOCOL_V1
                        </p>
                        <h2 className="font-title" style={{ fontSize: 'clamp(30px, 4.5vw, 64px)', fontWeight: 900, lineHeight: 1.4, color: 'white' }}>
                            WE DO NOT BUILD FOR THE PRESENT.<br />
                            <span style={{ opacity: 0.3 }}>THE PRESENT IS A CONSTRAINT.</span><br />
                            WE ENGINEER THE SYSTEMS THAT<br />
                            <span className="shimmer-text">REDEFINE WHAT IS POSSIBLE.</span>
                        </h2>
                        
                        <div style={{ marginTop: 80, display: 'flex', justifyContent: 'center', gap: 40 }} className="stack-mobile">
                            <div style={{ textAlign: 'left', maxWidth: 300 }}>
                                <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 10 }}>UNREAL.</div>
                                <div style={{ fontSize: 12, color: '#4B5563', lineHeight: 1.6 }}>Our output should feel like it shouldn't exist in this timeline.</div>
                            </div>
                            <div style={{ textAlign: 'left', maxWidth: 300 }}>
                                <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 10 }}>ALIVE.</div>
                                <div style={{ fontSize: 12, color: '#4B5563', lineHeight: 1.6 }}>Systems that breathe, learn, and expand with your vision.</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── FINAL CTA (SYSTEM REBIRTH) ────────────────────────── */}
            <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: '#07080e' }}>
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: 'center', zIndex: 10 }}
                >
                    <span className="font-cyber" style={{ fontSize: 12, letterSpacing: '0.8em', color: '#8B5CF6', display: 'block', marginBottom: 40 }}>
                        READY_FOR_UPGRADE
                    </span>
                    <h2 className="font-title" style={{ fontSize: 'clamp(60px, 12vw, 180px)', fontWeight: 900, letterSpacing: '-0.06em', marginBottom: 60 }}>
                        INITIATE.
                    </h2>
                    <Link href="https://wa.me/971503953988" className="btn-primary" style={{ padding: '30px 80px', fontSize: 20, borderRadius: 0, background: '#8B5CF6', color: 'black', fontWeight: 900 }}>
                         CONNECT TO CORE <ArrowRight size={24} />
                    </Link>
                </motion.div>
                
                {/* Visual "Engine" behind CTA */}
                <div style={{ position: 'absolute', width: 800, height: 800, background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 1 }} className="blob-morph" />
            </section>

            <Footer />
        </motion.main>
    );
}
