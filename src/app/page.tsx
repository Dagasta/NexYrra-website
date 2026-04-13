'use client';

import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Activity, Cpu, Layers, Radio, Terminal, Box, Database } from 'lucide-react';

const SYSTEM_LOGS = [
    'BOOTING_LUMINOUS_CORE_v2.0.4',
    'REFRACTIVE_GLASS_LEVEL: 100%',
    'SYNCING_ARCHITECTURAL_DATA...',
    'DATA_FLOW_STABLE: 1.2TB/S',
    'ENCRYPTING_COMMUNICATION_CHANNELS',
    'OPTIMIZING_SYSTEM_THROUGHPUT',
    'DEVELOPER_DREAM_MODE_ACTIVE',
];

const METHOD_PIPELINE = [
    { id: '01', label: 'DECONSTRUCT', sub: 'VOID_ENTRY_ANALYSIS', icon: Activity },
    { id: '02', label: 'ARCHITECT', sub: 'LUMINOUS_NODE_DESIGN', icon: Layers },
    { id: '03', label: 'EXECUTE', sub: 'PULSE_DATA_INJECTION', icon: Cpu },
    { id: '04', label: 'EVOLVE', sub: 'PERPETUAL_SYNC_CYCLE', icon: Radio },
];

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const bgColor = useTransform(smoothProgress, [0, 0.5, 1], ['#040508', '#07080e', '#030406']);
    
    const [logIndex, setLogIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setLogIndex(prev => (prev + 1) % SYSTEM_LOGS.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.main ref={containerRef} style={{ backgroundColor: bgColor, color: 'white', position: 'relative', overflowX: 'hidden' }}>
            <Navbar />
            
            {/* Developer HUD Overlay (Wow factor) */}
            <div style={{
                position: 'fixed', top: 120, left: 40, zIndex: 100,
                pointerEvents: 'none'
            }} className="hide-mobile">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 15 }}>
                    <div style={{ width: 6, height: 6, background: '#8B5CF6', boxShadow: '0 0 10px #8B5CF6' }} />
                    <span className="font-cyber" style={{ fontSize: 9, letterSpacing: '0.4em', color: 'white' }}>STATION_14</span>
                </div>
                <div className="glass-refractive" style={{ padding: '15px 20px', borderRadius: 0 }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={logIndex}
                            initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 5 }}
                            style={{ fontSize: 8, fontFamily: 'monospace', color: '#8B5CF6' }}
                        >
                            &gt; {SYSTEM_LOGS[logIndex]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <Hero />

            {/* Scrolling Data Stream (Lighter contrast) */}
            <section style={{ 
                height: '40vh', display: 'flex', alignItems: 'center', 
                borderTop: '1px solid rgba(255,255,255,0.05)', 
                borderBottom: '1px solid rgba(255,255,255,0.05)', 
                overflow: 'hidden', position: 'relative' 
            }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.03) 0%, transparent 70%)' }} />
                <div style={{ display: 'flex', whiteSpace: 'nowrap', gap: 100, animation: 'marquee-rtl 80s linear infinite' }}>
                    {[...Array(10)].map((_, i) => (
                        <div key={i} style={{ display: 'flex', gap: 100, alignItems: 'center' }}>
                            <span className="font-title text-kinetic" style={{ fontSize: '100px', fontWeight: 900, color: 'white' }}>BEYOND_IMAGINATION</span>
                            <span className="font-cyber" style={{ fontSize: '100px', color: '#1E293B', opacity: 0.3 }}>NEXYRRA</span>
                        </div>
                    ))}
                </div>
            </section>

            <Services />

            {/* Process Sections (Fancy Vertical Flow) */}
            <section style={{ padding: '200px 0', background: '#000' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 3fr', gap: 100 }} className="grid-mobile-1">
                        
                        <div style={{ position: 'sticky', top: 200, height: 'fit-content' }} className="hide-mobile">
                            <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '1em', color: '#8B5CF6', display: 'block', marginBottom: 30 }}>METHODOLOGY</span>
                            <h2 className="font-title" style={{ fontSize: 60, fontWeight: 900, lineHeight: 0.9 }}>THE<br />PIPELINE.</h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {METHOD_PIPELINE.map((step, i) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-refractive"
                                    style={{ 
                                        padding: '80px 60px', borderRadius: 0,
                                        display: 'grid', gridTemplateColumns: '100px 1fr 1fr',
                                        alignItems: 'center'
                                    }}
                                    whileHover={{ paddingLeft: '80px' }}
                                >
                                    <span className="font-cyber" style={{ fontSize: 12, fontWeight: 900, color: '#334155' }}>PROTOCOL_{step.id}</span>
                                    <div>
                                        <h3 className="font-title" style={{ fontSize: 40, fontWeight: 900, color: 'white', marginBottom: 10 }}>{step.label}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                            <div style={{ width: 10, height: 1, background: '#8B5CF6' }} />
                                            <span style={{ fontSize: 10, color: '#8B5CF6', letterSpacing: '0.2em' }}>{step.sub}</span>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <step.icon size={32} style={{ color: '#1E293B' }} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action: Full Luminous Void */}
            <section style={{ 
                height: '100vh', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', background: '#050608', position: 'relative' 
            }}>
                <div className="scanline" style={{ opacity: 0.05 }} />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 15, marginBottom: 40 }}>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="shimmer-border" style={{ width: 40, height: 2 }} />
                        ))}
                    </div>
                    <h2 className="font-title" style={{ fontSize: 'clamp(60px, 15vw, 240px)', fontWeight: 900, letterSpacing: '-0.08em', lineHeight: 0.8, color: 'white' }}>
                        INITIATE <br />
                        <span className="shimmer-text">UPLINK_</span>
                    </h2>
                    <div style={{ marginTop: 100 }}>
                        <Link href="/contact" className="btn-primary glass-refractive" style={{ padding: '30px 100px', fontSize: 14, fontWeight: 900, color: 'white', border: '1px solid white' }}>
                            ENTER_THE_CORE <ArrowRight size={20} style={{ marginLeft: 20 }} />
                        </Link>
                    </div>
                </motion.div>
                
                {/* Background Core pulsing */}
                <div style={{ 
                    position: 'absolute', width: 1000, height: 1000, 
                    background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', 
                    filter: 'blur(100px)', zIndex: 1 
                }} />
            </section>

            <Footer />
        </main>
    );
}
