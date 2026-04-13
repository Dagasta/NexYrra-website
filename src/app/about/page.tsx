'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Target, Zap, Shield, Eye, BrainCircuit } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const directives = [
    { id: '01', icon: Zap, title: 'LATENCY_ZERO', desc: 'Execution is absolute. We architect systems that operate at the speed of thought, eliminating operational drift in real-time cycles.' },
    { id: '02', icon: Shield, title: 'SYSTEMIC_HARDENING', desc: 'Stability is engineered into the neural path. Every node is deconstructed and rebuilt for absolute resilience against entropy.' },
    { id: '03', icon: Target, title: 'SYNAPTIC_SCALE', desc: 'Architecture designed for the next century. Modular evolution is woven into the first byte of logic for perpetual scaling.' },
];

export default function AboutPage() {
    return (
        <main style={{ background: '#040508', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="data-layer" />
            
            {/* Manifesto Hero (Cinematic Perspective) */}
            <section style={{ height: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1.2fr) 1fr', gap: 120 }} className="grid-mobile-1">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 40 }}>
                                 <BrainCircuit size={20} style={{ color: '#A855F7' }} />
                                 <span className="mono" style={{ color: '#A855F7' }}>// ARCHITECT_CORE_v6.0</span>
                            </div>
                            <h1 style={{ color: 'white' }}>
                                BEYOND <br />
                                <span style={{ color: '#A855F7' }}>THE VOID.</span>
                            </h1>
                            <p style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', color: '#94A3B8', lineHeight: 1.8, maxWidth: 520, fontWeight: 300 }}>
                                We are system architects. We exist at the intersection of complex systems engineering and future-logic neural architecture.
                            </p>
                        </motion.div>

                        <div style={{ alignSelf: 'center' }}>
                            <div className="glass-v6" style={{ padding: 'clamp(40px, 6vw, 80px)', borderRadius: 0 }}>
                                <div className="mono" style={{ marginBottom: 40, opacity: 0.3 }}>[ CORE_METRICS ]</div>
                                {[
                                    { l: 'ESTABLISHED', v: 'DUBAI_UAE_2024' },
                                    { l: 'ENGINEERING', v: 'NEURAL_HPI_v6' },
                                    { l: 'SCALE_MODELS', v: '200_STABLE' }
                                ].map((m, i) => (
                                    <div key={i} style={{ marginBottom: 30, borderBottom: '1px solid rgba(255,255,255,0.02)', paddingBottom: 15 }}>
                                        <div className="mono" style={{ fontSize: 8, opacity: 0.4 }}>{m.l}</div>
                                        <div style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, color: 'white' }}>{m.v}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directives Section */}
            <section style={{ padding: '240px 0', background: '#040508' }}>
                <div className="container-nex">
                    <div style={{ textAlign: 'center', marginBottom: 120 }}>
                        <div className="mono" style={{ letterSpacing: '1em', color: '#A855F7', marginBottom: 20 }}>SYSTEM_LAWS</div>
                        <h2 style={{ color: 'white' }}>THE CODE.</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }} className="grid-mobile-1">
                        {directives.map((d, i) => (
                            <motion.div 
                                key={d.id} 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ delay: i * 0.1 }}
                                className="glass-v6"
                                style={{ padding: '80px 40px', borderRadius: 0 }}
                            >
                                <div className="mono" style={{ fontSize: 9, opacity: 0.2, marginBottom: 30 }}>LAW_0{d.id}</div>
                                <d.icon size={26} style={{ color: '#A855F7', marginBottom: 30 }} />
                                <h3 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginBottom: 20 }}>{d.title}</h3>
                                <p style={{ fontSize: 13, color: '#64748B', lineHeight: 2 }}>{d.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
