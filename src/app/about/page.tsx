'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Target, Zap, Shield, Eye, BrainCircuit, Activity } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const directives = [
    { id: '01', icon: Zap, title: 'LATENCY_ZERO', desc: 'Execution is absolute. We architect systems that operate at the speed of thought, eliminating operational drift in real-time cycles.' },
    { id: '02', icon: Shield, title: 'SYSTEMIC_HARDENING', desc: 'Stability is engineered into the neural path. Every node is deconstructed and rebuilt for absolute resilience against entropy.' },
    { id: '03', icon: Target, title: 'SYNAPTIC_SCALE', desc: 'Architecture designed for the next century. Modular evolution is woven into the first byte of logic for perpetual scaling.' },
];

export default function AboutPage() {
    return (
        <main style={{ background: '#0a0b14', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="neural-overlay" />
            
            {/* Manifest Hero: The Core Identity */}
            <section style={{ height: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 120 }} className="grid-mobile-1">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 40 }}>
                                 <BrainCircuit size={20} style={{ color: '#8B5CF6' }} />
                                 <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#8B5CF6' }}>CORE_MANIFESTO_v4.0</span>
                            </div>
                            <h1 className="text-bionic" style={{ fontSize: 'clamp(50px, 10vw, 150px)', fontWeight: 800, lineHeight: 0.85, letterSpacing: '-0.07em', marginBottom: 60 }}>
                                BIONIC <br />
                                <span className="shimmer-text">LEGACY.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: '#CBD5E1', lineHeight: 1.8, maxWidth: 520, fontWeight: 300 }}>
                                Nexyrra exists at the intersection of complex systems engineering and neural-logic architecture. We build the intelligence of the future.
                            </p>
                        </motion.div>

                        <div className="glass-prismatic wow-card" style={{ padding: '60px' }}>
                            <div className="font-cyber" style={{ fontSize: 10, color: '#22D3EE', marginBottom: 40 }}>[ STATION_METRICS ]</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                                {[
                                    { l: 'CORE_ESTABLISHED', v: 'DUBAI_UAE_2024' },
                                    { l: 'ARCHITECTURE_SYNEC', v: 'BIONIC_HPI_v4' },
                                    { l: 'NODES_DEPLOYED', v: 'STABLE_200+' }
                                ].map((m, i) => (
                                    <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 15 }}>
                                        <div className="font-cyber" style={{ fontSize: 8, color: '#1E293B' }}>{m.l}</div>
                                        <div style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>{m.v}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Directives: Neural Laws */}
            <section style={{ padding: '240px 0', background: '#000' }}>
                <div className="container-nex">
                    <div style={{ textAlign: 'center', marginBottom: 120 }}>
                        <div className="font-cyber" style={{ letterSpacing: '1em', color: '#22D3EE', marginBottom: 20 }}>NEURAL_DIRECTIVES</div>
                        <h2 className="text-bionic" style={{ fontSize: 80, fontWeight: 800, letterSpacing: '-0.04em' }}>THE CODE.</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }} className="grid-mobile-1">
                        {directives.map((d, i) => (
                            <motion.div 
                                key={d.id} 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ delay: i * 0.1 }}
                                className="glass-prismatic wow-card"
                                style={{ padding: '80px 40px' }}
                            >
                                <div className="font-cyber" style={{ fontSize: 9, color: '#1E293B', marginBottom: 30 }}>PHASE_0{d.id}</div>
                                <d.icon size={26} style={{ color: '#8B5CF6', marginBottom: 30 }} />
                                <h3 className="font-title" style={{ fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 20 }}>{d.title}</h3>
                                <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 2 }}>{d.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Leads */}
            <section style={{ padding: '240px 0', position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 120 }} className="grid-mobile-1">
                        <div>
                            <div className="font-cyber" style={{ color: '#8B5CF6', marginBottom: 20 }}>PRINCIPAL_ARCHITECTS</div>
                            <h2 className="text-bionic" style={{ fontSize: 44, fontWeight: 800 }}>THE MINDS.</h2>
                        </div>
                        <div style={{ display: 'flex', gap: 80, flexWrap: 'wrap' }}>
                             {[
                                { name: 'AHMAD AL RASHID', role: 'CHIEF_SYSTEMS_ARCHITECT', bio: 'EX-FAANG NEURAL INFRASTRUCTURE LEAD' },
                                { name: 'SARAH MITCHELL', role: 'HEAD_OF_ENGINEERING', bio: 'DISTRIBUTED LOGIC SPECIALIST' },
                             ].map((m, i) => (
                                 <div key={i} style={{ maxWidth: 360 }}>
                                     <div className="font-cyber" style={{ fontSize: 9, color: '#22D3EE', marginBottom: 15 }}>{m.role}</div>
                                     <div className="font-title" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>{m.name}</div>
                                     <p className="font-cyber" style={{ fontSize: 10, color: '#4B5563' }}>{m.bio}</p>
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
