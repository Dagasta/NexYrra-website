'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Activity, Database, Target, Layers, Zap } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const projects = [
    {
        id: 'LOG_NX01',
        title: 'HEALTHCARE_SYSTEM_REBIRTH',
        result: '80% GAIN',
        client: 'GCC_MEDICAL_NODES',
        desc: 'Deconstructed administrative friction and architected a persistent patient management engine. Zero-latency scheduling protocols.',
        tags: ['AUTO_FLOW', 'NODE_SYNC'],
        icon: Activity,
    },
    {
        id: 'LOG_NX02',
        title: 'RETAIL_INTELLIGENCE_MATRIX',
        result: '3.4X YIELD',
        client: 'UAE_LUXURY_GRID',
        desc: 'Engineered a high-throughput predictive commerce engine for absolute system dominance. Real-time conversion optimization.',
        tags: ['DATA_INTEL', 'PIPELINE_OPTI'],
        icon: Target,
    },
    {
        id: 'LOG_NX03',
        title: 'REAL_ESTATE_PIPELINE_ENGINE',
        result: '500+ LEADS/MO',
        client: 'DUBAI_PROP_ARCHITECT',
        desc: 'Architected a persistent lead qualification node. Orchestrated autonomous nurturing sequences for high-net-worth prospect flows.',
        tags: ['FLOW_ARCH', 'INFRA_SYNC'],
        icon: Database,
    },
    {
        id: 'LOG_NX04',
        title: 'LOGISTICS_INFRASTRUCTURE_SYNC',
        result: '60% VELOCITY',
        client: 'GCC_FEDERAL_LOGISTICS',
        desc: 'Unified fractured ERP ecosystems into a singular, high-performance automated pipeline. Complete elimination of manual data handling.',
        tags: ['PIPELINE_ENG', 'ERP_HARDEN'],
        icon: Layers,
    },
];

export default function ArchivePage() {
    return (
        <main style={{ background: '#040508', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="data-layer" />
            
            {/* Archive Header (Cinematic Scale) */}
            <section style={{ height: '70vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 30 }}>
                             <Zap size={16} style={{ color: '#A855F7' }} />
                             <span className="mono" style={{ color: '#A855F7' }}>// TRANSACTION_ARCHIVE.v6</span>
                        </div>
                        <h1 style={{ color: 'white' }}>
                            PROJECT <br />
                            <span style={{ color: '#A855F7' }}>REGISTRY.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* List Engine: High-Authority Flow */}
            <section className="container-nex" style={{ paddingBottom: 240 }}>
                <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(168, 85, 247, 0.05)' }}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ 
                                    padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 40px)', 
                                    display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr',
                                    alignItems: 'center', gap: 60,
                                    borderBottom: '1px solid rgba(255,255,255,0.02)',
                                    transition: 'all 0.5s'
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168, 85, 247, 0.01)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                className="grid-mobile-1"
                                >
                                    <div>
                                        <div className="mono" style={{ fontSize: 9, opacity: 0.2, marginBottom: 10 }}>{p.id}</div>
                                        <div className="mono" style={{ color: 'white', fontWeight: 800 }}>{p.client}</div>
                                    </div>

                                    <div>
                                        <h3 style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 800, marginBottom: 15, color: 'white' }}>{p.title}</h3>
                                        <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.8, maxWidth: 500 }}>{p.desc}</p>
                                    </div>

                                    <div style={{ textAlign: 'center' }}>
                                        <div className="mono" style={{ fontSize: 8, color: '#A855F7', marginBottom: 5 }}>GAIN_METRIC</div>
                                        <div style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 800, color: 'white' }}>{p.result}</div>
                                    </div>

                                    <div style={{ textAlign: 'right' }}>
                                         <div className="mono" style={{ fontSize: 9, color: '#A855F7', display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
                                             VIEW_NODE <ArrowUpRight size={14} />
                                         </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
