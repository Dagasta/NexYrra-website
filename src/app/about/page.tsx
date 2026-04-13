'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Target, Zap, Shield, BrainCircuit } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const directives = [
    { id: '01', icon: Zap, title: 'ZERO_LATENCY', desc: 'Execution is absolute. We architect systems that operate at the speed of thought, eliminating operational drift in real-time cycles.' },
    { id: '02', icon: Shield, title: 'SYSTEM_HARDENING', desc: 'Stability is engineered into the neural path. Every node is deconstructed and rebuilt for absolute resilience against entropy.' },
    { id: '03', icon: Target, title: 'SYNAPTIC_SCALING', desc: 'Architecture designed for the next century. Modular evolution is woven into the first byte of logic for perpetual scaling.' },
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // Scroll Storytelling Morph Logic
    const shapeRadius = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "50%", "20%"]);
    const shapeRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const shapeOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.1, 0.5, 0.5, 0.1]);

    return (
        <main ref={containerRef} style={{ backgroundColor: 'var(--aether-bg)', minHeight: '100vh', position: 'relative' }}>
            <Navbar />
            
            {/* Cinematic Background Morph Shape */}
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <motion.div style={{
                     width: '80vw', height: '80vw',
                     border: '1px solid rgba(168,85,247,0.1)',
                     borderRadius: shapeRadius,
                     rotate: shapeRotate,
                     opacity: shapeOpacity,
                     background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)',
                     transition: 'border-radius 0.5s ease-out'
                 }} />
            </div>

            {/* Hero Scale Section */}
            <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10 }}>
                <div className="container-nexus">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: 120 }} className="grid-mobile-1">
                        <motion.div initial={{ opacity: 0, filter: 'blur(20px)', y: 50 }} animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 40 }}>
                                 <BrainCircuit size={24} style={{ color: '#22D3EE' }} />
                                 <span className="mono-diag" style={{ color: '#22D3EE' }}>// ARCHITECTURE_CORE_v7</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(60px, 10vw, 150px)' }}>
                                BEYOND <br />
                                <span className="text-gradient shimmer-luxe">THE VOID.</span>
                            </h1>
                            <p style={{ fontSize: 'clamp(20px, 2vw, 28px)', color: '#64748B', lineHeight: 1.6, maxWidth: 600, fontWeight: 300, marginTop: 40 }}>
                                We are system architects. We exist at the intersection of complex high-performance systems engineering and future-logic neural architecture.
                            </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} style={{ alignSelf: 'center' }}>
                            <div className="glass-v7" style={{ padding: 'clamp(40px, 5vw, 80px)', borderRadius: 24, position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                                <div className="mono-diag" style={{ marginBottom: 40, color: '#A855F7' }}>[ STATION_METRICS ]</div>
                                {[
                                    { l: 'CORE_ESTABLISHED', v: 'DUBAI_UAE_2024' },
                                    { l: 'ARCHITECTURE', v: 'NEURAL_HPI_v7' },
                                    { l: 'NODES_DEPLOYED', v: '200_STABLE' }
                                ].map((m, i) => (
                                    <div key={i} style={{ marginBottom: 30, borderBottom: '1px solid rgba(168,85,247,0.1)', paddingBottom: 15 }}>
                                        <div className="mono-diag" style={{ opacity: 0.5, marginBottom: 5 }}>{m.l}</div>
                                        <div style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 800, color: 'var(--aether-void)' }}>{m.v}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Neural Directives Array */}
            <section style={{ padding: '240px 0', position: 'relative', zIndex: 10 }}>
                <div className="container-nexus">
                    <div style={{ textAlign: 'center', marginBottom: 120 }}>
                        <div className="mono-diag" style={{ letterSpacing: '1em', color: '#A855F7', marginBottom: 20 }}>SYSTEM_LAWS</div>
                        <h2 className="text-gradient" style={{ fontSize: 'clamp(60px, 8vw, 120px)' }}>THE CODE.</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
                        {directives.map((d, i) => (
                            <motion.div 
                                key={d.id} 
                                initial={{ opacity: 0, filter: 'blur(10px)', y: 50 }} 
                                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }} 
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-v7"
                                style={{ padding: 'clamp(40px, 5vw, 80px)', borderRadius: 20 }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
                                    <div style={{ padding: 20, background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '50%' }}>
                                        <d.icon size={32} style={{ color: '#A855F7' }} />
                                    </div>
                                    <div className="mono-diag" style={{ opacity: 0.3 }}>LAW_0{d.id}</div>
                                </div>
                                <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20 }}>{d.title}</h3>
                                <p style={{ fontSize: 16, color: '#64748B', lineHeight: 2 }}>{d.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
