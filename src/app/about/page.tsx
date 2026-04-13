'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Target, Zap, Shield, Eye, Cpu, Terminal } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const directives = [
    { id: '01', icon: Zap, title: 'LATENCY_ZERO', desc: 'Speed is not a target; it is a law. We engineer systems that achieve operational velocity in real-time cycles.' },
    { id: '02', icon: Shield, title: 'HARDENED_NODES', desc: 'Security is deep-level architecture. Every node we build is resistant to systemic entropy.' },
    { id: '03', icon: Target, title: 'OWNED_OUTCOME', desc: 'Handover is for amateurs. We build for the legacy. We own the logic, the flow, and the result.' },
    { id: '04', icon: Eye, title: 'FUTURE_SYNC', desc: 'Built for the 2030 landscape. Scalability is woven into the first byte of logic.' },
];

export default function ManifestoPage() {
    return (
        <main style={{ background: '#050608', minHeight: '100vh', color: 'white', overflowX: 'hidden' }}>
            <Navbar />
            
            {/* Page Hero: The Vision Engine */}
            <section style={{ paddingTop: 200, paddingBottom: 160, position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100 }} className="grid-mobile-1">
                        
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 40 }}>
                                 <Terminal size={14} style={{ color: '#8B5CF6' }} />
                                 <span className="font-cyber" style={{ fontSize: 9, letterSpacing: '0.6em', color: '#8B5CF6' }}>MANIFESTO.MD</span>
                            </div>
                            <h1 className="font-title" style={{ fontSize: 'clamp(50px, 8vw, 110px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.07em', marginBottom: 60 }}>
                                THE <br />
                                <span className="shimmer-text">ENGINE.</span>
                            </h1>
                            <p style={{ fontSize: 18, color: '#64748B', lineHeight: 1.8, maxWidth: 500, fontWeight: 300 }}>
                                Nexyrra is a high-performance system architect based in Dubai. 
                                We exist to bridge the gap between abstract requirements and physical digital execution.
                            </p>
                        </motion.div>

                        <div className="glass-refractive" style={{ padding: '60px', position: 'relative' }}>
                            <div className="font-cyber" style={{ fontSize: 10, color: '#1E293B', marginBottom: 40 }}>[ SYSTEM_METRICS ]</div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                                {[
                                    { l: 'UPTIME_SLA', v: '99.99%' },
                                    { l: 'CORE_ENGINE', v: 'v2.0.4' },
                                    { l: 'NODES_ACTIVE', v: '144' },
                                    { l: 'LATENCY_MAX', v: '0.002MS' },
                                ].map((s, i) => (
                                    <div key={i}>
                                        <div style={{ fontSize: 9, color: '#334155', fontWeight: 900, marginBottom: 5 }}>{s.l}</div>
                                        <div className="font-title" style={{ fontSize: 28, fontWeight: 900, color: 'white' }}>{s.v}</div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: 60, height: 1, background: 'linear-gradient(90deg, #8B5CF6, transparent)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Directives: The Laws */}
            <section style={{ padding: '160px 0', background: '#000' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="grid-mobile-1">
                        {directives.map((d, i) => (
                            <motion.div 
                                key={d.id} 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ delay: i * 0.1 }}
                                className="bento-item glass-refractive"
                                style={{ borderRadius: 0, padding: '50px 40px' }}
                            >
                                <div className="font-cyber" style={{ fontSize: 8, color: '#1E293B', marginBottom: 25 }}>0{d.id}_LAW</div>
                                <d.icon size={22} style={{ color: '#8B5CF6', marginBottom: 30 }} />
                                <h3 className="font-title" style={{ fontSize: 20, fontWeight: 900, color: 'white', marginBottom: 15 }}>{d.title}</h3>
                                <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.8 }}>{d.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Leads */}
            <section style={{ padding: '160px 0' }}>
                <div className="container-nex">
                    <div style={{ textAlign: 'center', marginBottom: 100 }}>
                        <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.8em', color: '#8B5CF6', display: 'block', marginBottom: 20 }}>LEAD_ARCHITECTS</span>
                        <h2 className="font-title" style={{ fontSize: 'clamp(40px, 6vw, 90px)', fontWeight: 900, letterSpacing: '-0.06em' }}>THE MINDS.</h2>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: 80, flexWrap: 'wrap' }}>
                        {[
                            { name: 'AHMAD AL RASHID', role: 'CHIEF_SYSTEMS_ARCHITECT', bio: 'PREVIOUS_FAANG_DATA_FLOW_LEAD' },
                            { name: 'SARAH MITCHELL', role: 'HEAD_OF_ENGINEERING', bio: 'DISTRIBUTED_SYSTEMS_SPECIALIST' },
                        ].map((m, i) => (
                            <div key={i} style={{ textAlign: 'left', maxWidth: 300 }}>
                                <div className="font-cyber" style={{ fontSize: 10, color: '#8B5CF6', marginBottom: 15 }}>{m.role}</div>
                                <div className="font-title" style={{ fontSize: 32, fontWeight: 900, marginBottom: 15, color: 'white' }}>{m.name}</div>
                                <div style={{ width: 100, height: 1, background: '#1E293B', marginBottom: 15 }} />
                                <p style={{ fontSize: 12, color: '#334155', letterSpacing: '0.1em' }}>{m.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
