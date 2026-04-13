'use client';

import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Activity, Cpu, Layers, Radio, Sparkles, BrainCircuit } from 'lucide-react';

const SYSTEM_LOGS = [
    'NEURAL_PATH_ESTABLISHED',
    'ARCHITECTING_DIGITAL_LEGACY',
    'ENTROPY_BUFFER_v4_ACTIVE',
    'BIONIC_INTEGRATION_SYNCING',
];

const METHOD_PIPELINE = [
    { id: '01', label: 'DECONSTRUCT', sub: 'ANALYZING_SYSTEM_VOIDS', icon: Activity },
    { id: '02', label: 'ARCHITECT', sub: 'NEURAL_NODE_ENGINEERING', icon: Layers },
    { id: '03', label: 'EXECUTE', sub: 'PULSING_DATA_INTO_NODES', icon: Cpu },
    { id: '04', label: 'EVOLVE', sub: 'SYNEC_INTEGRATION_LOOP', icon: Radio },
];

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const sProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

    const [logIdx, setLogIdx] = useState(0);
    useEffect(() => {
        const i = setInterval(() => setLogIdx(p => (p + 1) % SYSTEM_LOGS.length), 2000);
        return () => clearInterval(i);
    }, []);

    const trackerScale = useTransform(sProgress, [0, 1], [0, 1]);

    return (
        <main ref={containerRef} style={{ background: '#0a0b14', color: 'white' }}>
            <Navbar />
            <div className="scroll-tracker" style={{ scaleX: trackerScale }} />
            
            {/* Luminous Neural HUD (Wow factor) */}
            <div style={{ position: 'fixed', top: 120, left: 50, zIndex: 100 }} className="hide-mobile">
                <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                    <div style={{ width: 40, height: 1, background: '#22D3EE', boxShadow: '0 0 10px #22D3EE' }} />
                    <span className="font-cyber" style={{ fontSize: 9, letterSpacing: '0.4em', color: '#22D3EE' }}>BIONIC_LINK</span>
                </div>
                <div className="glass-prismatic" style={{ padding: '20px', borderRadius: 0 }}>
                    <AnimatePresence mode="wait">
                        <motion.div key={logIdx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="font-cyber" style={{ fontSize: 8, color: 'white' }}>
                            &gt; {SYSTEM_LOGS[logIdx]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <Hero />

            {/* THE NEURAL MARQUEE (Beyond Brain visual) */}
            <section style={{ 
                height: '40vh', display: 'flex', alignItems: 'center', 
                background: '#0a0b14', borderTop: '1px solid rgba(255,255,255,0.05)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                position: 'relative', overflow: 'hidden' 
            }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.03) 0%, transparent 70%)' }} />
                <div style={{ display: 'flex', whiteSpace: 'nowrap', gap: 100, animation: 'marquee-rtl 100s linear infinite' }}>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} style={{ display: 'flex', gap: 100, alignItems: 'center' }}>
                            <h2 className="text-bionic" style={{ fontSize: '120px', fontWeight: 800 }}>BEYOND_THE_BRAIN_</h2>
                            <h2 style={{ fontSize: '120px', color: '#1E293B', opacity: 0.1, WebkitTextStroke: '2px white' }}>NEXYRRA_CORE_</h2>
                        </div>
                    ))}
                </div>
            </section>

            <Services />

            {/* THE PIPELINE (Luminous Glass Overlap) */}
            <section style={{ padding: '200px 0', position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr', gap: 100 }} className="grid-mobile-1">
                        <div>
                             <div className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.8em', color: '#8B5CF6', marginBottom: 30 }}>METHODOLOGY</div>
                             <h2 className="text-bionic" style={{ fontSize: 'clamp(40px, 8vw, 100px)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.06em' }}>
                                THE <br />
                                <span className="shimmer-text">PROCESS.</span>
                             </h2>
                             <p style={{ marginTop: 40, fontSize: 18, color: '#64748B', lineHeight: 1.8, maxWidth: 400 }}>
                                A continuous loop of deconstruction and architectural evolution designed for perpetual outcomes.
                             </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {METHOD_PIPELINE.map((step, i) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className="glass-prismatic wow-card"
                                    style={{ padding: '60px 50px', display: 'flex', gap: 40, alignItems: 'center' }}
                                >
                                    <div style={{ padding: 15, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <step.icon size={24} style={{ color: '#22D3EE' }} />
                                    </div>
                                    <div>
                                        <div className="font-cyber" style={{ fontSize: 9, color: '#8B5CF6', marginBottom: 8 }}>{step.id}_PHASE</div>
                                        <h3 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', color: 'white' }}>{step.label}</h3>
                                        <p style={{ fontSize: 11, color: '#4B5563', letterSpacing: '0.1em' }}>{step.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* THE MANIFESTO (Prismatic Portal) */}
            <section style={{ padding: '240px 0', background: '#000', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 100, width: 600, height: 600, background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(100px)' }} />
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ textAlign: 'center' }}>
                        <BrainCircuit size={80} style={{ color: '#8B5CF6', marginBottom: 60, margin: '0 auto 60px' }} />
                        <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#22D3EE', marginBottom: 40, display: 'block' }}>CORE_DIRECTIVE_v4.0</span>
                        <h2 className="text-bionic" style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.04em' }}>
                            WE ARE NOT BUILDING TOOLS.<br />
                            <span style={{ opacity: 0.2 }}>WE ARE BUILDING INTELLIGENCE.</span><br />
                            THE ARCHITECTURE OF THE<br />
                            <span className="shimmer-text">NEXT CIVILIZATION.</span>
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* THE FINAL UPLINK (Beyond Imagination) */}
            <section style={{ height: '110vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: '#0a0b14' }}>
                 <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    style={{ textAlign: 'center', zIndex: 10 }}
                 >
                    <span className="font-cyber" style={{ fontSize: 12, letterSpacing: '1em', color: '#8B5CF6', display: 'block', marginBottom: 50 }}>AUTHENTICATION_REQUIRED</span>
                    <h2 className="text-bionic" style={{ fontSize: 'clamp(60px, 15vw, 240px)', fontWeight: 800, letterSpacing: '-0.08em', marginBottom: 80 }}>
                        INITIATE.
                    </h2>
                    <div style={{ marginTop: 20 }}>
                        <Link href="/contact" className="btn-beyond">
                            ACCESS_THE_CORE <ArrowRight size={20} />
                        </Link>
                    </div>
                 </motion.div>
                 
                 {/* Visual Artifact behind CTA */}
                 <div style={{ position: 'absolute', width: 1200, height: 1200, background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(150px)', zIndex: 1 }} />
            </section>

            <Footer />
        </main>
    );
}
