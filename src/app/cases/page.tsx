'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Lock, FolderTree, ChevronRight } from 'lucide-react';
import OSNavbar from '../../components/OSNavbar';
import OSFooter from '../../components/OSFooter';
import TechMarquee from '../../components/TechMarquee';
import MatrixRain from '../../components/MatrixRain';

const logs = [
    { id: 'NX-CASE-0047', client: 'GCC_MEDICAL', result: '80% LATENCY REDUCTION', title: 'HEALTHCARE_NODE_SYNC', desc: 'Deployed a persistent neural layer to manage patient lifecycle states. Reduced data retrieval latency across 4 hospitals from 1.2s to 240ms. Zero-trust architecture verified.', tags: ['HEALTHCARE', 'NEURAL_SYNC', 'ZERO_TRUST'], color: '#8A2BE2' },
    { id: 'NX-CASE-0031', client: 'UAE_ARCHITECT', result: '3.4X VELOCITY', title: 'RETAIL_INTELLIGENCE_ENGINE', desc: 'Engineered a prismatic predictive commerce framework that autonomously adapts to market friction. Connected POS systems to real-time inventory AI. Increased checkout throughput by 340%.', tags: ['RETAIL', 'PREDICTIVE_AI', 'THROUGHPUT'], color: '#00FFFF' },
    { id: 'NX-CASE-0019', client: 'DUBAI_SYNDICATE', result: '500+ SIGNALS/MO', title: 'REAL_ESTATE_LEAD_CONSTRUCT', desc: 'Architected a qualification node managing high-volume prospect flows through neural sequences. Autonomous agents scrape, qualify, and dispatch leads to brokers instantly via WhatsApp API.', tags: ['REAL_ESTATE', 'AUTONOMOUS_AGENTS', 'CRM'], color: '#4D9FFF' }
];

export default function ArchivePage() {
    return (
        <main>
            <OSNavbar />

            {/* Background elements */}
            <MatrixRain color="rgba(138,43,226,0.15)" />
            <div className="grid-overlay" style={{ opacity: 0.2 }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '50vw', height: '50vh', background: 'radial-gradient(circle at top right, rgba(0,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: -1 }} />

            {/* Header */}
            <section style={{ paddingTop: 'clamp(140px, 15vw, 200px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
                <div className="container-os">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                            <Lock size={14} color="var(--neon-purple)" />
                            <span className="mono" style={{ color: 'var(--neon-purple)', fontSize: 10, letterSpacing: '0.15em' }}>RESTRICTED_ACCESS // ARCHIVE_LOGS</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(44px, 7vw, 100px)', fontWeight: 800, fontFamily: 'var(--font-display)', lineHeight: 1, display: 'flex', flexDirection: 'column' }}>
                            <motion.span 
                                animate={{ opacity: [1, 0.4, 1, 0.8, 1], x: [0, -2, 2, -1, 0] }}
                                transition={{ repeat: Infinity, duration: 2, repeatDelay: Math.random() * 5 }}
                                style={{ color: 'white', display: 'inline-block' }}
                            >DATA</motion.span>
                            <span className="gradient-purple-cyan glow-purple">LEDGER.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <TechMarquee items={['AUTONOMOUS_YIELD', 'SYSTEM_THROUGHPUT', 'ZERO_TRUST', 'LATENCY_REDUCTION', 'PREDICTIVE_COMMERCE']} color="#a855f7" speed={25} />

            {/* Logs List */}
            <section className="container-os" style={{ paddingBottom: 'clamp(100px, 15vw, 200px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {logs.map((log, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="glass-panel"
                            style={{ 
                                padding: 'clamp(24px, 4vw, 40px)', 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                                gap: 'clamp(20px, 3vw, 40px)', 
                                alignItems: 'center', 
                                transition: 'all 0.3s ease',
                                borderLeft: `2px solid ${log.color}40`,
                                cursor: 'crosshair',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.background = 'rgba(18,8,36,0.6)';
                                (e.currentTarget as HTMLElement).style.borderLeftColor = log.color;
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.background = 'rgba(10,5,20,0.4)';
                                (e.currentTarget as HTMLElement).style.borderLeftColor = `${log.color}40`;
                            }}
                        >
                            {/* Meta Column */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <Database size={14} color={log.color} />
                                    <span className="mono" style={{ color: log.color, fontSize: 10, letterSpacing: '0.15em' }}>{log.id}</span>
                                </div>
                                <div className="mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, letterSpacing: '0.1em' }}>CLIENT_ID: {log.client}</div>
                                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
                                    {log.tags.map(t => (
                                        <span key={t} className="mono" style={{ padding: '3px 8px', border: `1px solid ${log.color}30`, borderRadius: 4, fontSize: 8, color: log.color }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Summary Column */}
                            <div style={{ gridColumn: 'span 2' }}>
                                <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 24px)', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'white', marginBottom: 12 }}>{log.title}</h3>
                                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontWeight: 300 }}>{log.desc}</p>
                            </div>

                            {/* Yield Column */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                                <div className="mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, marginBottom: 8, letterSpacing: '0.1em' }}>THROUGHPUT_YIELD_</div>
                                <div style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, fontFamily: 'var(--font-display)', color: log.color }}>{log.result}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 12, color: 'rgba(255,255,255,0.3)', fontSize: 10 }} className="mono">
                                    EXPAND_FILE <ChevronRight size={12} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <OSFooter />
        </main>
    );
}
