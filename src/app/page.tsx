'use client';

import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Activity, Cpu, Layers, Radio, Sparkles, Zap } from 'lucide-react';

const SYSTEM_LOGS = [
    'SYSTEM_ENGINE_v6.0_ACTIVE',
    'NEURAL_VOID_OPTIMIZED',
    'STATION_STATUS: ABSOLUTE',
    'ENCRYPTING_DATA_STREAM',
];

const METHOD_PIPELINE = [
    { id: '01', label: 'ANALYZE', sub: 'SYSTEM_DECONSTRUCTION', icon: Activity },
    { id: '02', label: 'ARCHITECT', sub: 'ENGINEERING_STABILITY', icon: Layers },
    { id: '03', label: 'EXECUTE', sub: 'NEURAL_PULSE_INJECTION', icon: Cpu },
    { id: '04', label: 'EVOLVE', sub: 'SYNEC_ADAPTIVE_LOOP', icon: Radio },
];

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const sProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

    const [logIdx, setLogIdx] = useState(0);
    useEffect(() => {
        const i = setInterval(() => setLogIdx(p => (p + 1) % SYSTEM_LOGS.length), 3000);
        return () => clearInterval(i);
    }, []);

    return (
        <main ref={containerRef} style={{ background: '#040508', color: 'white' }}>
            <Navbar />
            
            {/* THE CINEMATIC HUD (Fixed Detail) - Responsive Visibility */}
            <div style={{ position: 'fixed', bottom: 50, left: 50, zIndex: 100 }} className="hide-mobile">
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                     <Zap size={16} style={{ color: '#A855F7' }} />
                     <div style={{ width: 1, height: 40, background: 'rgba(168, 85, 247, 0.1)' }} />
                     <AnimatePresence mode="wait">
                         <motion.div key={logIdx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="mono" style={{ fontSize: 9 }}>
                             &gt; {SYSTEM_LOGS[logIdx]}
                         </motion.div>
                     </AnimatePresence>
                </div>
            </div>

            <Hero />

            {/* THE KINETIC MARQUEE (Cinematic Flow) */}
            <section style={{ 
                height: '40vh', display: 'flex', alignItems: 'center', 
                background: '#040508', borderTop: '1px solid rgba(168, 85, 247, 0.05)',
                borderBottom: '1px solid rgba(168, 85, 247, 0.05)',
                position: 'relative', overflow: 'hidden' 
            }}>
                <div style={{ display: 'flex', whiteSpace: 'nowrap', gap: 'clamp(50px, 10vw, 150px)', animation: 'marquee-rtl 120s linear infinite' }}>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} style={{ display: 'flex', gap: 'clamp(50px, 10vw, 150px)', alignItems: 'center' }}>
                            <h2 style={{ fontSize: 'clamp(50px, 8vw, 150px)', fontWeight: 900, color: 'white', opacity: 0.1, WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>DECONSTRUCT_THE_FUTURE</h2>
                            <h2 style={{ fontSize: 'clamp(50px, 8vw, 150px)', fontWeight: 300, color: '#A855F7' }}>NEXYRRA_CORE</h2>
                        </div>
                    ))}
                </div>
            </section>

            <Services />

            {/* THE METHODOLOGY (Overlapping Layers) */}
            <section style={{ padding: '240px 0', background: '#040508', position: 'relative' }}>
                <div className="data-layer" style={{ opacity: 0.05 }} />
                
                <div className="container-nex">
                    <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 120 }}>
                        <div>
                             <div className="mono" style={{ marginBottom: 30 }}>// SYSTEM_DIRECTIVES</div>
                             <h2 style={{ color: 'white', marginBottom: 40 }}>
                                THE <br />
                                <span style={{ color: '#A855F7' }}>METHOD.</span>
                             </h2>
                             <p style={{ fontSize: 18, color: '#64748B', lineHeight: 1.8, maxWidth: 400 }}>
                                A continuous cycle of systemic deconstruction and reconstruction designed for absolute outcomes.
                             </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {METHOD_PIPELINE.map((step, i) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ 
                                        padding: 'clamp(40px, 6vw, 100px)', 
                                        border: '1px solid rgba(168, 85, 247, 0.03)',
                                        display: 'flex', alignItems: 'center', gap: 'clamp(30px, 5vw, 100px)',
                                        background: '#040508', transition: 'all 0.5s'
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168, 85, 247, 0.02)')}
                                    onMouseLeave={e => (e.currentTarget.style.background = '#040508')}
                                    className="stack-mobile"
                                >
                                    <span className="mono" style={{ fontSize: 20, opacity: 0.1 }}>0{step.id}</span>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: 'clamp(24px, 4vw, 44px)', fontWeight: 800, color: 'white' }}>{step.label}</h3>
                                        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 15 }}>
                                            <div style={{ width: 10, height: 1, background: '#A855F7' }} />
                                            <span className="mono" style={{ fontSize: 9 }}>{step.sub}</span>
                                        </div>
                                    </div>
                                    <div className="hide-mobile">
                                        <step.icon size={24} style={{ color: '#22D3EE', opacity: 0.2 }} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* THE FINAL UPLINK (Perspective Scale) */}
            <section style={{ height: '110vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: '#040508' }}>
                 <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    style={{ textAlign: 'center', zIndex: 10 }}
                 >
                    <div className="mono" style={{ letterSpacing: '1.2em', marginBottom: 60, color: '#A855F7' }}>SYSTEM_AUTHENTICATION</div>
                    <h2 style={{ fontSize: 'clamp(60px, 15vw, 240px)', fontWeight: 900, letterSpacing: '-0.08em', lineHeight: 0.8, color: 'white' }}>
                        INITIATE <br />
                        <span style={{ color: '#A855F7' }}>THE_SYNC.</span>
                    </h2>
                    <div style={{ marginTop: 80 }}>
                        <Link href="/contact" style={{ textDecoration: 'none' }}>
                            <button className="btn-cinema" style={{ padding: '30px clamp(40px, 10vw, 100px)', fontSize: 16 }}>
                                ACCESS THE CORE <ArrowRight size={20} />
                            </button>
                        </Link>
                    </div>
                 </motion.div>
                 
                 {/* Massive Core Glow Overlay */}
                 <div style={{ position: 'absolute', width: '120vw', height: '120vw', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)', filter: 'blur(120px)', zIndex: 1 }} />
            </section>

            <Footer />
        </main>
    );
}
