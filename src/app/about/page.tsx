'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Target, Zap, Shield, Eye, BrainCircuit, Sparkles } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const directives = [
    { id: '01', icon: Zap, title: 'LATENCY_ZERO', desc: 'Execution is absolute. We architect systems that operate at the speed of thought, eliminating operational drift in real-time cycles.' },
    { id: '02', icon: Shield, title: 'SYSTEMIC_HARDENING', desc: 'Stability is engineered into the neural path. Every node is deconstructed and rebuilt for absolute resilience against entropy.' },
    { id: '03', icon: Target, title: 'SYNAPTIC_SCALE', desc: 'Architecture designed for the next century. Modular evolution is woven into the first byte of logic for perpetual scaling.' },
];

export default function AboutPage() {
    return (
        <main style={{ background: 'white', minHeight: '100vh', color: 'var(--nex-void)' }}>
            <Navbar />
            <div className="mesh-bg" />
            
            {/* Vision Hero (Luxury Scale) */}
            <section style={{ height: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 120 }} className="grid-mobile-1">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 40 }}>
                                 <Sparkles size={16} style={{ color: '#8B5CF6' }} />
                                 <span className="mono" style={{ color: '#8B5CF6' }}>// NEXYRRA_CORE_MANIFESTO</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(50px, 10vw, 150px)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.07em', marginBottom: 60 }}>
                                BEYOND <br />
                                <span style={{ color: '#8B5CF6' }}>SIGHT.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: '#64748B', lineHeight: 1.8, maxWidth: 520, fontWeight: 300 }}>
                                We are system architects. We exist at the intersection of complex high-performance systems engineering and future-logic architecture. 
                            </p>
                        </motion.div>

                        <div style={{ alignSelf: 'center' }}>
                            <div className="glass-luxe" style={{ padding: '60px', borderRadius: 0 }}>
                                <div className="mono" style={{ marginBottom: 40, opacity: 0.3 }}>[ STATION_METRICS ]</div>
                                {[
                                    { l: 'CORE_FOUNDED', v: 'DUBAI_UAE_2024' },
                                    { l: 'ARCHITECTURE', v: 'ELITE_HPI_v4' },
                                    { l: 'NODES_DEPLOYED', v: '200_STABLE' }
                                ].map((m, i) => (
                                    <div key={i} style={{ marginBottom: 30, borderBottom: '1px solid rgba(139,92,246,0.1)', paddingBottom: 15 }}>
                                        <div className="mono" style={{ fontSize: 8, opacity: 0.4 }}>{m.l}</div>
                                        <div style={{ fontSize: 24, fontWeight: 800 }}>{m.v}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Directives: Visual Laws */}
            <section style={{ padding: '240px 0', background: 'white' }}>
                 <div className="section-line" style={{ margin: '0 auto 100px' }} />
                <div className="container-nex">
                    <div style={{ textAlign: 'center', marginBottom: 120 }}>
                        <div className="mono" style={{ letterSpacing: '1em', color: '#8B5CF6', marginBottom: 20 }}>CORE_DIRECTIVES</div>
                        <h2 style={{ fontSize: 80, fontWeight: 900, letterSpacing: '-0.06em' }}>THE SYSTEMS CODE.</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }} className="grid-mobile-1">
                        {directives.map((d, i) => (
                            <motion.div 
                                key={d.id} 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ delay: i * 0.1 }}
                                className="glass-luxe"
                                style={{ padding: '80px 40px', borderRadius: 0 }}
                            >
                                <div className="mono" style={{ fontSize: 9, opacity: 0.2, marginBottom: 30 }}>LAW_0{d.id}</div>
                                <d.icon size={26} style={{ color: '#8B5CF6', marginBottom: 30 }} />
                                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--nex-void)', marginBottom: 20 }}>{d.title}</h3>
                                <p style={{ fontSize: 13, color: '#64748B', lineHeight: 2 }}>{d.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principal Architects */}
            <section style={{ padding: '240px 0', position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 120 }} className="grid-mobile-1">
                        <div>
                            <div className="mono" style={{ color: '#8B5CF6', marginBottom: 20 }}>STATION_LEADERSHIP</div>
                            <h2 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.04em' }}>PRINCIPAL ARCHITECTS.</h2>
                        </div>
                        <div style={{ display: 'flex', gap: 80, flexWrap: 'wrap' }}>
                            {[
                                { name: 'AHMAD AL RASHID', role: 'CHIEF_SYSTEMS_ARCHITECT', bio: 'PREVIOUS_FAANG_DATA_FLOW_LEAD' },
                                { name: 'SARAH MITCHELL', role: 'HEAD_OF_ENGINEERING', bio: 'DISTRIBUTED_SYSTEMS_SPECIALIST' },
                            ].map((m, i) => (
                                <div key={i} style={{ maxWidth: 320 }}>
                                    <div className="mono" style={{ fontSize: 9, color: '#8B5CF6', marginBottom: 15 }}>{m.role}</div>
                                    <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 25 }}>{m.name}</div>
                                    <p style={{ fontSize: 12, color: '#64748B', lineHeight: 1.8 }}>{m.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
