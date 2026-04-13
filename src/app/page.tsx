'use client';

import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Activity, Cpu, Layers, Radio, Sparkles } from 'lucide-react';

const SYSTEM_LOGS = [
    'LUXURY_ENGINE_ONLINE',
    'PURPLE_SYNC_ESTABLISHED',
    'ARCHITECTING_DIGITAL_LEGACY',
    'ENTROPY_ZERO_PROTOCOL',
];

const METHOD_PIPELINE = [
    { id: '01', label: 'ANALYZE', sub: 'SYSTEM_DECONSTRUCTION', icon: Activity },
    { id: '02', label: 'ARCHITECT', sub: 'ENGINEERING_THE_SOLUTION', icon: Layers },
    { id: '03', label: 'EXECUTE', sub: 'DATA_INJECTION_PULSE', icon: Cpu },
    { id: '04', label: 'EVOLVE', sub: 'CONTINUOUS_SYNC_LOOP', icon: Radio },
];

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const sProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

    const [logIdx, setLogIdx] = useState(0);
    useEffect(() => {
        const i = setInterval(() => setLogIdx(p => (p + 1) % SYSTEM_LOGS.length), 2500);
        return () => clearInterval(i);
    }, []);

    return (
        <main ref={containerRef} style={{ background: 'white', color: 'var(--nex-void)' }}>
            <Navbar />
            
            {/* LUXURY HUD INTERFACE (Fixed Detail) */}
            <div style={{ position: 'fixed', bottom: 50, left: 50, zIndex: 100 }} className="hide-mobile">
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                     <Sparkles size={16} style={{ color: '#8B5CF6' }} />
                     <div style={{ width: 1, height: 40, background: 'rgba(139,92,246,0.1)' }} />
                     <AnimatePresence mode="wait">
                         <motion.div key={logIdx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="mono" style={{ fontSize: 9 }}>
                             {SYSTEM_LOGS[logIdx]}
                         </motion.div>
                     </AnimatePresence>
                </div>
            </div>

            <Hero />

            {/* THE DIRECTIVE (Cinetic Marquee) */}
            <section style={{ 
                height: '40vh', display: 'flex', alignItems: 'center', 
                background: 'white', borderTop: '1px solid rgba(139,92,246,0.05)',
                borderBottom: '1px solid rgba(139,92,246,0.05)',
                position: 'relative', overflow: 'hidden' 
            }}>
                <div style={{ display: 'flex', whiteSpace: 'nowrap', gap: 100, animation: 'marquee-rtl 120s linear infinite' }}>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} style={{ display: 'flex', gap: 100, alignItems: 'center' }}>
                            <h2 style={{ fontSize: 'clamp(50px, 8vw, 120px)', fontWeight: 900, color: 'var(--nex-void)', letterSpacing: '-0.04em' }}>ARCHITECTURE_FOR_THE_ELITE</h2>
                            <h2 style={{ fontSize: 'clamp(50px, 8vw, 120px)', fontWeight: 300, color: '#8B5CF6' }}>NEXYRRA_CORE</h2>
                        </div>
                    ))}
                </div>
            </section>

            <Services />

            {/* THE PIPELINE (Luxury Overlap) */}
            <section style={{ padding: '240px 0', background: 'white', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }} className="section-line" />
                
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: 120 }} className="grid-mobile-1">
                        <div>
                             <div className="mono" style={{ marginBottom: 30 }}>// PROCESS_DYNAMICS</div>
                             <h2 style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em' }}>
                                THE <br />
                                <span style={{ color: '#8B5CF6' }}>METHOD.</span>
                             </h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {METHOD_PIPELINE.map((step, i) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    style={{ 
                                        padding: '80px 60px', border: '1px solid rgba(139,92,246,0.05)',
                                        display: 'grid', gridTemplateColumns: '100px 1fr 1fr', alignItems: 'center',
                                        background: 'white', transition: 'all 0.4s'
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(139,92,246,0.02)';
                                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.2)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'white';
                                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.05)';
                                    }}
                                >
                                    <span className="mono" style={{ fontSize: 14 }}>{step.id}</span>
                                    <div>
                                        <h3 style={{ fontSize: 32, fontWeight: 700, color: 'var(--nex-void)' }}>{step.label}</h3>
                                        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 10 }}>
                                            <div style={{ width: 10, height: 1, background: '#8B5CF6' }} />
                                            <span style={{ fontSize: 10, color: '#64748B', fontWeight: 600 }}>{step.sub}</span>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <step.icon size={24} style={{ color: '#8B5CF6', opacity: 0.2 }} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* THE FINAL UPLINK (Cinema Scale) */}
            <section style={{ height: '110vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: 'white' }}>
                 <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    style={{ textAlign: 'center', zIndex: 10 }}
                 >
                    <div className="mono" style={{ letterSpacing: '1.2em', marginBottom: 60, color: '#8B5CF6' }}>READY_FOR_UPGRADE</div>
                    <h2 style={{ fontSize: 'clamp(60px, 15vw, 240px)', fontWeight: 900, letterSpacing: '-0.08em', lineHeight: 0.8, color: 'var(--nex-void)' }}>
                        INITIATE <br />
                        <span style={{ color: '#8B5CF6' }}>SYNCHRONY_</span>
                    </h2>
                    <div style={{ marginTop: 100 }}>
                        <Link href="/contact" className="btn-luxe" style={{ padding: '30px 100px', fontSize: 16 }}>
                            CONNECT TO CORE <ArrowRight size={20} />
                        </Link>
                    </div>
                 </motion.div>
                 
                 {/* Radial Gradient Glow */}
                 <div style={{ position: 'absolute', width: 1200, height: 1200, background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 1 }} />
            </section>

            <Footer />
        </main>
    );
}
