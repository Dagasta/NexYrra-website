'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import MatrixFooter from '../../components/MatrixFooter';

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '150px' }}>
            <div className="container" style={{ paddingLeft: 'clamp(20px, 10vw, 150px)' }}>
                
                <div style={{ marginBottom: 100 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                        <Shield size={20} color="var(--matrix-cyan)" />
                        <div className="sub-mono" style={{ color: 'var(--matrix-cyan)' }}>SYSTEM_MANIFESTO</div>
                    </div>
                    <h1 className="giant-heading" style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <span className="text-gradient-cyan text-glow-hard" style={{ zIndex: 10 }}>
                            OUR
                        </span>
                        <span className="text-gradient-purple text-glow-purple" style={{ zIndex: 10 }}>
                            ORIGIN.
                        </span>
                    </h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '80px', marginBottom: 100 }}>
                    <div style={{ 
                        background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)',
                        padding: '60px', position: 'relative'
                    }}>
                        <div className="sub-mono" style={{ color: 'var(--matrix-purple)', marginBottom: 30 }}>[ THE_NEXUS_NARRATIVE ]</div>
                        <p style={{ fontSize: 'clamp(18px, 1.5vw, 24px)', color: '#FFFFFF', lineHeight: 1.8, marginBottom: 30 }}>
                            We are system architects. We exist at the intersection of complex high-performance systems engineering and future-logic neural architecture.
                        </p>
                        <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8 }}>
                            We do not build generic systems. Our objective is to engineer digital environments that function identically to intelligent ecosystems—learning, adapting, and visually communicating with flawless performance.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {[
                            { title: 'ZERO_LATENCY', desc: 'Execution is absolute. Operating at the speed of thought.' },
                            { title: 'SYSTEM_HARDENING', desc: 'Every node is built for resilience against entropy.' },
                            { title: 'SYNAPTIC_SCALING', desc: 'Modular evolution woven into the first byte of logic.' }
                        ].map((directive, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ x: 10, borderColor: 'rgba(157, 0, 255, 0.5)', boxShadow: '0 0 30px rgba(157, 0, 255, 0.1)' }}
                                style={{ 
                                    padding: '30px', background: 'rgba(0,0,0,0.5)', 
                                    border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s'
                                }}
                            >
                                <h3 style={{ fontSize: 24, marginBottom: 15, color: 'var(--matrix-white)' }}>{directive.title}</h3>
                                <p style={{ fontSize: 14, color: '#A0A0A0', lineHeight: 1.6 }}>{directive.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
            <MatrixFooter />
        </main>
    );
}
