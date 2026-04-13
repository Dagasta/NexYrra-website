'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Target, Zap, Shield, Eye, Cpu, Terminal } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const directives = [
    { id: '01', icon: Zap, title: 'LATENCY_ZERO', desc: 'Execution is immediate. We architect systems that operate at the speed of thought, eliminating operational drift.' },
    { id: '02', icon: Shield, title: 'SYSTEMIC_HARDENING', desc: 'Stability is engineered. Every node is deconstructed and rebuilt for absolute resilience against entropy.' },
    { id: '03', icon: Target, title: 'ABSOLUTE_OUTCOME', desc: 'Market drift is a constraint. We build for the legacy. Strategic assets for high-authority leaders.' },
    { id: '04', icon: Eye, title: 'SYNAPTIC_SCALE', desc: 'Architecture designed for the 2035 landscape. Modular evolution built into the first byte.' },
];

export default function AboutPage() {
    return (
        <main style={{ background: '#020203', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="matrix-grid" />
            
            {/* The Vision Hero */}
            <section style={{ height: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 120 }} className="grid-mobile-1">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="mono" style={{ color: 'var(--nex-accent)', marginBottom: 40 }}>// NEXYRRA_CORE_MANIFESTO_v3.2</div>
                            <h1 style={{ fontSize: 'clamp(50px, 10vw, 140px)', fontWeight: 300, lineHeight: 0.85, letterSpacing: '-0.07em', marginBottom: 60 }}>
                                BEYOND <br />
                                <span className="text-shimmer" style={{ fontWeight: 800 }}>IMAGINATION.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: '#64748B', lineHeight: 1.8, maxWidth: 520, fontWeight: 300 }}>
                                We are system architects. We exist to engineer the improbable for high-performance entities across the GCC and beyond.
                            </p>
                        </motion.div>

                        <div style={{ alignSelf: 'center' }}>
                            <div className="glass-hpi" style={{ padding: '60px' }}>
                                <div className="mono" style={{ marginBottom: 40, opacity: 0.2 }}>[ MISSION_ENGINE_SPECS ]</div>
                                {[
                                    { l: 'CORE_FOUNDED', v: 'DUBAI_UAE_2024' },
                                    { l: 'ARCHITECTURE', v: 'BESPOKE_HPI' },
                                    { l: 'NODES_DEPLOYED', v: '200_STABLE' }
                                ].map((m, i) => (
                                    <div key={i} style={{ marginBottom: 30, borderBottom: '1px solid rgba(255,255,255,0.02)', paddingBottom: 15 }}>
                                        <div className="mono" style={{ fontSize: 8, opacity: 0.2 }}>{m.l}</div>
                                        <div style={{ fontSize: 22, fontWeight: 700 }}>{m.v}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Core Directives (Master Grid) */}
            <section style={{ padding: '240px 0', background: '#000' }}>
                <div className="container-nex">
                    <div style={{ textAlign: 'center', marginBottom: 120 }}>
                        <div className="mono" style={{ letterSpacing: '1em', color: 'var(--nex-accent)', marginBottom: 20 }}>CORE_DIRECTIVES</div>
                        <h2 style={{ fontSize: 60, fontWeight: 800, letterSpacing: '-0.04em' }}>THE SYSTEMS CODE.</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }} className="grid-mobile-1 bg-white/5 border border-white/5">
                        {directives.map((d, i) => (
                            <motion.div 
                                key={d.id} 
                                initial={{ opacity: 0, scale: 0.95 }} 
                                whileInView={{ opacity: 1, scale: 1 }} 
                                transition={{ delay: i * 0.1 }}
                                style={{ padding: '80px 40px', background: '#000' }}
                            >
                                <div className="mono" style={{ fontSize: 9, opacity: 0.1, marginBottom: 30 }}>LAW_0{d.id}</div>
                                <d.icon size={26} style={{ color: 'var(--nex-accent)', marginBottom: 30 }} />
                                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 20 }}>{d.title}</h3>
                                <p style={{ fontSize: 13, color: '#404040', lineHeight: 2 }}>{d.desc}</p>
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
                            <div className="mono" style={{ color: 'var(--nex-accent)', marginBottom: 20 }}>DIRECTOR_LEVEL_NODES</div>
                            <h2 style={{ fontSize: 44, fontWeight: 800 }}>PRINCIPAL ARCHITECTS.</h2>
                        </div>
                        <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}>
                            {[
                                { name: 'AHMAD AL RASHID', role: 'CHIEF_SYSTEMS_ARCHITECT', bio: 'PREVIOUS_FAANG_DATA_FLOW_LEAD' },
                                { name: 'SARAH MITCHELL', role: 'HEAD_OF_ENGINEERING', bio: 'DISTRIBUTED_SYSTEMS_SPECIALIST' },
                            ].map((m, i) => (
                                <div key={i} style={{ maxWidth: 320 }}>
                                    <div className="mono" style={{ fontSize: 9, color: 'var(--nex-accent)', marginBottom: 10 }}>{m.role}</div>
                                    <div style={{ fontSize: 26, fontWeight: 700, marginBottom: 20 }}>{m.name}</div>
                                    <p className="mono" style={{ fontSize: 10, opacity: 0.2 }}>{m.bio}</p>
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
