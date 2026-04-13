'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, BarChart, Database, Activity, Target } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const projects = [
    {
        id: 'NX_H01',
        title: 'HEALTHCARE_OS',
        result: '80% NO-SHOW_DROP',
        client: 'GCC_CLINIC_CORP',
        desc: 'Deployed autonomous LIFE_CYCLE nodes to manage patient flow. Total erasure of scheduling friction.',
        tags: ['AUTO_MANAGED', 'NODE_SYNC'],
        icon: Activity,
    },
    {
        id: 'NX_R02',
        title: 'RETAIL_INTEL',
        result: '340% ROI_SURGE',
        client: 'UAE_LUXURY_GRID',
        desc: 'Engineered a predictive commerce engine to architect high-density revenue pipelines.',
        tags: ['PREDICTIVE', 'YIELD_OPTI'],
        icon: Target,
    },
    {
        id: 'NX_P03',
        title: 'REAL_ESTATE_PIPE',
        result: '500+ Q_LEADS',
        client: 'DUBAI_PROP_ARCH',
        desc: 'Architected a persistent qualification node that manages high-volume prospect flows.',
        tags: ['FLOW_AUTH', 'LEAD_ARCH'],
        icon: Database,
    },
    {
        id: 'NX_L04',
        title: 'LOGISTICS_CORE',
        result: '60% VELOCITY_UP',
        client: 'GCC_FEDERAL_LOGS',
        desc: 'Unified fractured ERP ecosystems into a single consolidated high-throughput pipeline.',
        tags: ['ERP_SYNC', 'AUTO_CORE'],
        icon: BarChart,
    },
];

export default function ArchivePage() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <main style={{ background: '#050608', minHeight: '100vh', color: 'white', overflowX: 'hidden' }}>
            <Navbar />
            
            {/* Header: The Data Vault */}
            <section style={{ height: '60vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="circuit-bg" style={{ opacity: 0.1 }} />
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 30 }}>
                             <div style={{ width: 40, height: 1, background: '#8B5CF6' }} />
                             <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.5em', color: '#8B5CF6' }}>TRANSACTIONS.LOG</span>
                        </div>
                        <h1 className="font-title" style={{ fontSize: 'clamp(50px, 10vw, 120px)', fontWeight: 900, letterSpacing: '-0.06em', lineHeight: 0.9, color: 'white' }}>
                            SYSTEM <br />
                            <span className="shimmer-text">OUTCOMES.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* List Engine: The Bento Matrix */}
            <section className="container-nex" style={{ paddingBottom: 160 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 20 }} className="grid-mobile-1">
                    {projects.map((p, i) => {
                        const gridSpans = ['span 7', 'span 5', 'span 5', 'span 7'];
                        return (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                style={{ gridColumn: gridSpans[i % 4], position: 'relative' }}
                                onMouseEnter={() => setHoveredId(p.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="bento-item glass-refractive h-full" style={{ borderRadius: 0, padding: 0 }}>
                                    <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
                                            <span className="font-cyber" style={{ fontSize: 9, color: '#334155' }}>TRANS_ID: {p.id}</span>
                                            <p.icon size={18} style={{ color: hoveredId === p.id ? '#8B5CF6' : '#1E293B' }} />
                                        </div>

                                        <div style={{ flex: 1 }}>
                                             <h3 className="font-title text-kinetic" style={{ fontSize: 32, fontWeight: 900, marginBottom: 15 }}>{p.title}</h3>
                                             <div className="font-cyber" style={{ fontSize: 12, color: '#8B5CF6', marginBottom: 20 }}>{p.result}</div>
                                             <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.8, maxWidth: 380 }}>{p.desc}</p>
                                        </div>

                                        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                            <div style={{ display: 'flex', gap: 10 }}>
                                                {p.tags.map(t => (
                                                    <span key={t} style={{ fontSize: 8, color: '#1E293B', border: '1px solid #1E293B', padding: '3px 8px' }}>{t}</span>
                                                ))}
                                            </div>
                                            <Link href="#" className="font-cyber" style={{ fontSize: 9, color: '#8B5CF6', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                                                 OPEN_METRICS <ArrowUpRight size={12} />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Hover Light Sweep (Fancy) */}
                                    <AnimatePresence>
                                        {hoveredId === p.id && (
                                            <motion.div 
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, transparent, rgba(139,92,246,0.03), transparent)', pointerEvents: 'none' }} 
                                            />
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                
                {/* Meta Summary Area (Wow Detail) */}
                <div style={{ marginTop: 100, display: 'flex', justifyContent: 'center' }}>
                     <div className="glass-refractive" style={{ padding: '60px', textAlign: 'center', maxWidth: 800, width: '100%' }}>
                         <div className="font-cyber" style={{ fontSize: 10, color: '#8B5CF6', marginBottom: 30, letterSpacing: '0.4em' }}>AGGREGATE_SYSTEM_SUCCESS_RATIO</div>
                         <div style={{ display: 'flex', justifyContent: 'center', gap: 60 }} className="stack-mobile">
                             {[
                                { l: 'NODES_DEPLOYED', v: '200+' },
                                { l: 'DATA_THROUGHPUT', v: '1.2TB/S' },
                                { l: 'OPTI_YIELD', v: '98.4%' },
                             ].map((s, i) => (
                                 <div key={i}>
                                     <div className="font-title" style={{ fontSize: 48, fontWeight: 900, marginBottom: 5 }}>{s.v}</div>
                                     <div style={{ fontSize: 9, color: '#334155', fontWeight: 900 }}>{s.l}</div>
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
