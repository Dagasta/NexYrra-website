'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TerminalSquare, Database, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { sysAudio } from '../../lib/SoundSystem';

const logs = [
    { id: 'SYS.LOG_802.1', client: 'GCC_MEDICAL', result: '80% LATENCY REDUCTION', title: 'HEALTHCARE_NODE_SYNC', desc: 'Deployed a persistent neural layer to manage patient lifecycle states, eliminating friction across 200+ localized nodes.' },
    { id: 'SYS.LOG_802.2', client: 'UAE_ARCHITECT', result: '3.4X VELOCITY', title: 'RETAIL_INTELLIGENCE_ENGINE', desc: 'Engineered a prismatic predictive commerce framework that autonomously adapts to real-time market friction.' },
    { id: 'SYS.LOG_802.3', client: 'DUBAI_SYNDICATE', result: '500+ SIGNALS/MO', title: 'REAL_ESTATE_LEAD_CONSTRUCT', desc: 'Architected a qualification node that manages high-volume prospect flows through logic-driven neural sequences.' },
    { id: 'SYS.LOG_802.4', client: 'GCC_FEDERAL', result: '60% THROUGHPUT SURGE', title: 'LOGISTICS_PIPELINE_UNIFICATION', desc: 'Consolidated fractured ERP architectures into a singular, high-throughput automated logistics nervous system.' },
];

export default function ArchivePage() {
    return (
        <main style={{ minHeight: '100vh', padding: '150px 0' }}>
            <Navbar />
            
            <div className="container-os">
                <div style={{ marginBottom: 100 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                        <Database size={20} color="var(--sys-neon-blue)" />
                        <span className="mono-sys" style={{ color: 'var(--sys-neon-blue)' }}>SYSTEM_ARCHIVE_LOGS</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(50px, 8vw, 120px)' }}>
                        DATA <br />
                        <span className="glow-text text-gradient" style={{ color: 'var(--sys-neon-purple)' }}>LEDGER.</span>
                    </h1>
                </div>

                {/* Simulated Server Rack Logs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {logs.map((log, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                            onMouseEnter={() => sysAudio.playTick()}
                            className="hud-panel"
                            style={{ 
                                padding: '30px 40px', display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr 1.5fr', 
                                gap: 40, alignItems: 'center', cursor: 'crosshair'
                            }}
                            className="grid-mobile-1 hud-panel"
                        >
                            {/* Log ID & Client */}
                            <div style={{ borderRight: '1px solid rgba(192,38,211,0.2)', paddingRight: 20, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div className="mono-sys" style={{ color: 'var(--sys-neon-purple)', marginBottom: 10 }}>{log.id}</div>
                                <div style={{ fontSize: 13, color: 'var(--sys-slate)' }}>CLIENT: {log.client}</div>
                            </div>
                            
                            {/* Title & Desc */}
                            <div>
                                <h3 style={{ fontSize: 24, color: 'var(--sys-white)', marginBottom: 10 }}>{log.title}</h3>
                                <p style={{ fontSize: 13, color: 'var(--sys-slate)', lineHeight: 1.6 }}>{log.desc}</p>
                            </div>

                            {/* Result Metric */}
                            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <div className="mono-sys" style={{ opacity: 0.5, marginBottom: 5 }}>THROUGHPUT_YIELD_</div>
                                <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--sys-neon-blue)' }}>{log.result}</div>
                                <div style={{ marginTop: 15, display: 'flex', alignItems: 'center', gap: 10, opacity: 0.3 }}>
                                    <TerminalSquare size={14} /> VIEW_RAW
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
