'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Activity, Database, Target, Layers, Zap } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const projects = [
    {
        id: 'NX_LOG_001',
        title: 'HEALTHCARE_NODE_OPTIMIZATION',
        result: '80% LOAD_REDUCTION',
        client: 'GCC_MULTI_NODE_CLINIC',
        desc: 'Deployed high-performance neural nodes to deconstruct and architect whole lifecycle management.',
        tags: ['AUTO_FLOW', 'NODE_SYNC'],
        icon: Activity,
    },
    {
        id: 'NX_LOG_002',
        title: 'RETAIL_INTELLIGENCE_LAYERING',
        result: '3.4X CAMPAIGN_YIELD',
        client: 'UAE_LUXURY_ARCHITECT',
        desc: 'Engineered a prismatic predictive commerce layer for absolute system dominance.',
        tags: ['DATA_INTEL', 'PIPELINE_OPTI'],
        icon: Target,
    },
    {
        id: 'NX_LOG_003',
        title: 'REAL_ESTATE_LEAD_CONSTRUCTION',
        result: '500+ Q_LEADS / MONTH',
        client: 'DUBAI_INFRA_ENGINEERING',
        desc: 'Architected a persistent qualification node that manages high-volume prospect flows through neural sequences.',
        tags: ['LEAD_SYNC', 'RE_AUTO'],
        icon: Database,
    },
    {
        id: 'NX_LOG_004',
        title: 'LOGISTICS_PIPELINE_CONSOLIDATION',
        result: '60% VELOCITY_SURGE',
        client: 'GCC_FEDERAL_LOGISTICS',
        desc: 'Unified fractured ERP ecosystems into a single consolidated high-throughput automated pipeline.',
        tags: ['ERP_HARDEN', 'AUTO_CORE'],
        icon: Layers,
    },
];

export default function ArchivePage() {
    return (
        <main style={{ background: '#05060f', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="neural-overlay" />
            
            <section style={{ height: '60vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 30 }}>
                             <Zap size={14} style={{ color: '#8B5CF6' }} />
                             <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#8B5CF6' }}>TRANSACTION_LOGS.EXE</span>
                        </div>
                        <h1 className="text-bionic" style={{ fontSize: '100px', fontWeight: 800, lineHeight: 0.85 }}>
                            THE <span className="shimmer-text">ARCHIVE.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="container-nex" style={{ paddingBottom: 240 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 30 }} className="grid-mobile-1">
                    {projects.map((p, i) => {
                        const gridSpans = ['span 7', 'span 5', 'span 5', 'span 7'];
                        return (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ gridColumn: gridSpans[i % 4] }}
                            >
                                <div className="glass-prismatic wow-card h-full" style={{ padding: '60px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 50 }}>
                                        <div className="font-cyber" style={{ fontSize: 9, opacity: 0.3 }}>LOG_REF: {p.id}</div>
                                        <p.icon size={20} style={{ color: '#22D3EE' }} />
                                    </div>

                                    <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 15 }}>{p.title}</h3>
                                    <div className="font-cyber" style={{ fontSize: 13, color: '#8B5CF6', marginBottom: 25 }}>{p.result}</div>
                                    <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 2 }}>{p.desc}</p>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 60 }}>
                                        <div style={{ display: 'flex', gap: 10 }}>
                                            {p.tags.map(t => (
                                                <span key={t} className="font-cyber" style={{ fontSize: 8, opacity: 0.4, border: '1px solid rgba(255,255,255,0.05)', padding: '5px 10px' }}>{t}</span>
                                            ))}
                                        </div>
                                        <Link href="#" className="font-cyber" style={{ fontSize: 10, color: '#22D3EE', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                                             OPEN_LOG <ArrowUpRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </main>
    );
}
