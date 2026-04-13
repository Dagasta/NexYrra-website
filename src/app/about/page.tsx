'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Target, Zap, Shield, Eye } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const directives = [
    { id: 'DIR_001', icon: Zap, title: 'LATENCY_ZERO', desc: 'Speed to deployment is our primary metric. We engineer systems that achieve operational velocity in days, not months.' },
    { id: 'DIR_002', icon: Shield, title: 'ENCRYPTION_BY_DESIGN', desc: 'Security is not a feature; it is the foundation. Every node we architect is hardened against systemic entropy.' },
    { id: 'DIR_003', icon: Target, title: 'OUTCOME_OWNERSHIP', desc: 'We do not build for consultants. We build for founders. We own the codebase, the integration, and the outcome.' },
    { id: 'DIR_004', icon: Eye, title: 'FUTURE_PROOF_ARCH', desc: 'Scalability is engineered into the first line of code. Our systems are built to thrive in the 2030 landscape.' },
];

export default function ManifestoPage() {
    return (
        <main style={{ background: '#05060e', minHeight: '100vh', color: 'white', position: 'relative', overflowX: 'hidden' }}>
            <Navbar />
            
            {/* Background Narrative Grid */}
            <div style={{
                position: 'fixed', inset: 0, opacity: 0.05, pointerEvents: 'none', zIndex: 0,
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(139,92,246,0.1) 40px, rgba(139,92,246,0.1) 41px)',
            }} />

            {/* Hero Section: The Narrative */}
            <section style={{ paddingTop: 200, paddingBottom: 160, position: 'relative', zIndex: 1 }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 100 }} className="grid-mobile-1">
                        
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                            <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#8B5CF6', display: 'block', marginBottom: 30 }}>
                                SYSTEM_INTENT.SYS
                            </span>
                            <h1 className="font-title" style={{ fontSize: 'clamp(50px, 10vw, 120px)', fontWeight: 900, letterSpacing: '-0.06em', lineHeight: 0.9, marginBottom: 60 }}>
                                WE ARE THE <br />
                                <span className="shimmer-text">ARCHITECTS.</span>
                            </h1>
                            <div style={{ maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 30 }}>
                                <p style={{ fontSize: 18, color: '#64748B', lineHeight: 1.8, fontWeight: 300 }}>
                                    Nexyrra is a high-performance technology company based in Dubai. We exist at the intersection of complex system design and rapid digital execution.
                                </p>
                                <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.8 }}>
                                    Traditional agencies build for the handover. We build for the legacy. Our mission is to engineer the digital infrastructure that carries the leaders of the next century.
                                </p>
                            </div>
                        </motion.div>

                        {/* Visual Metadata Panel */}
                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                            <div className="system-module shadow-2xl" style={{ padding: '40px', background: 'rgba(255,255,255,0.01)' }}>
                                <div style={{ fontSize: 9, color: '#8B5CF6', letterSpacing: '0.2em', marginBottom: 30, fontFamily: 'monospace' }}>[ OPERATIONAL_STATISTICS ]</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                                    {[
                                        { l: 'HEADQUARTERS', v: 'DUBAI_UAE' },
                                        { l: 'CORE_VERSION', v: '2.0.4_STABLE' },
                                        { l: 'SYSTEMS_DEPLOYED', v: '200+' },
                                        { l: 'ENGINEERING_FLOW', v: '24/7_SYNC' },
                                    ].map((s, i) => (
                                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 15 }}>
                                            <span style={{ fontSize: 9, color: '#1E293B', fontWeight: 900 }}>{s.l}</span>
                                            <span className="font-cyber" style={{ fontSize: 11, color: 'white' }}>{s.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Directives: Core Laws */}
            <section style={{ padding: '160px 0', background: '#000', position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ marginBottom: 100 }}>
                        <h2 className="font-title" style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900, letterSpacing: '-0.04em' }}>
                            CORE DIRECTIVES.
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: 'rgba(255,255,255,0.05)' }}>
                        {directives.map((d, i) => (
                            <motion.div 
                                key={d.id} 
                                initial={{ opacity: 0, y: 20 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ delay: i * 0.1 }}
                                style={{ padding: '60px 40px', background: '#000', position: 'relative' }}
                            >
                                <div className="font-cyber" style={{ fontSize: 8, color: '#334155', marginBottom: 20 }}>LAW_{d.id}</div>
                                <d.icon size={24} style={{ color: '#8B5CF6', marginBottom: 25 }} />
                                <h3 className="font-title" style={{ fontSize: 18, fontWeight: 900, color: 'white', marginBottom: 15 }}>{d.title}</h3>
                                <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.8 }}>{d.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Leads */}
            <section style={{ padding: '160px 0', position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ textAlign: 'center', marginBottom: 100 }}>
                        <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.4em', color: '#8B5CF6', display: 'block', marginBottom: 20 }}>SYSTEM_LEADERSHIP</span>
                        <h2 className="font-title" style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900, letterSpacing: '-0.04em' }}>CHIEF ARCHITECTS.</h2>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
                        {[
                            { name: 'AHMAD AL RASHID', role: 'CHIEF_SYSTEMS_ARCHITECT', bio: 'EX-FAANG ARCHITECTURE LEAD' },
                            { name: 'SARAH MITCHELL', role: 'HEAD_OF_ENGINEERING', bio: 'DISTRIBUTED SYSTEMS SPECIALIST' },
                        ].map((m, i) => (
                            <div key={i} className="mask-gradient-border" style={{ minWidth: 320, padding: '40px', background: 'rgba(255,255,255,0.01)' }}>
                                <div className="font-cyber" style={{ fontSize: 11, color: '#8B5CF6', marginBottom: 8 }}>{m.role}</div>
                                <div className="font-title" style={{ fontSize: 24, fontWeight: 900, marginBottom: 15 }}>{m.name}</div>
                                <p style={{ fontSize: 11, color: '#4B5563', letterSpacing: '0.1em' }}>{m.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Uplink Link */}
            <section style={{ padding: '0 0 160px', textAlign: 'center' }}>
                <Link href="/contact" className="font-cyber" style={{ fontSize: 12, color: '#8B5CF6', textDecoration: 'none', border: '1px solid #8B5CF6', padding: '15px 40px', display: 'inline-flex', alignItems: 'center', gap: 15 }}>
                     INITIALIZE_UPLINK_PROTOCOL <ArrowUpRight size={16} />
                </Link>
            </section>

            <Footer />
        </main>
    );
}
