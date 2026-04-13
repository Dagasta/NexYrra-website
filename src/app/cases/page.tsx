'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Activity, Database, Target, Layers, Sparkles } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const projects = [
    {
        id: 'NX_L01',
        title: 'HEALTHCARE_SYSTEM_REBIRTH',
        result: '80% LOAD_REDUCTION',
        client: 'GCC_MEDICAL_NODES',
        desc: 'Deconstructed administrative friction and architected a persistent patient management engine. Zero-latency scheduling protocols.',
        tags: ['AUTO_FLOW', 'NODE_SYNC'],
        icon: Activity,
    },
    {
        id: 'NX_L02',
        title: 'RETAIL_INTELLIGENCE_MATRIX',
        result: '3.4X REVENUE_DENSITY',
        client: 'UAE_LUXURY_GRID',
        desc: 'Engineered a high-throughput predictive commerce engine for absolute system dominance. Real-time conversion optimization.',
        tags: ['YIELD_ENG', 'DATA_CORE'],
        icon: Target,
    },
    {
        id: 'NX_L03',
        title: 'REAL_ESTATE_PIPELINE_ENGINE',
        result: '500+ Q_LEADS_PER_CYCLE',
        client: 'DUBAI_PROP_ARCHITECT',
        desc: 'Architected a persistent lead qualification node. Orchestrated autonomous nurturing sequences for high-net-worth prospect flows.',
        tags: ['FLOW_ARCH', 'INFRA_SYNC'],
        icon: Database,
    },
    {
        id: 'NX_L04',
        title: 'LOGISTICS_INFRASTRUCTURE_SYNC',
        result: '60% VELOCITY_UPGRADE',
        client: 'GCC_FEDERAL_LOGISTICS',
        desc: 'Unified fractured ERP ecosystems into a singular, high-performance automated pipeline. Complete elimination of manual data handling.',
        tags: ['PIPELINE_ENG', 'ERP_HARDEN'],
        icon: Layers,
    },
];

export default function ArchivePage() {
    return (
        <main style={{ background: 'white', minHeight: '100vh', color: 'var(--nex-void)' }}>
            <Navbar />
            
            {/* Archive Header (Luxury Registry) */}
            <section style={{ height: '70vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="mesh-bg" />
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 30 }}>
                             <Sparkles size={16} style={{ color: '#8B5CF6' }} />
                             <span className="mono" style={{ color: '#8B5CF6' }}>// SYSTEM_OUTCOME_ARCHIVE</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(50px, 12vw, 150px)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.07em' }}>
                            PROJECT <br />
                            <span style={{ color: '#8B5CF6' }}>REGISTRY.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* List Engine: High-Authority Rows */}
            <section className="container-nex" style={{ paddingBottom: 240 }}>
                <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(139,92,246,0.1)' }}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ 
                                    padding: '100px 40px', display: 'grid', 
                                    gridTemplateColumns: '1fr 2fr 1fr 1fr',
                                    alignItems: 'center', gap: 60,
                                    borderBottom: '1px solid rgba(139,92,246,0.05)',
                                    transition: 'all 0.4s'
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(139,92,246,0.01)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                className="grid-mobile-1"
                                >
                                    <div>
                                        <div className="mono" style={{ fontSize: 9, opacity: 0.3, marginBottom: 10 }}>{p.id}</div>
                                        <div className="mono" style={{ fontWeight: 800 }}>{p.client}</div>
                                    </div>

                                    <div>
                                        <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 15, letterSpacing: '-0.02em' }}>{p.title}</h3>
                                        <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.8, maxWidth: 500 }}>{p.desc}</p>
                                    </div>

                                    <div style={{ textAlign: 'center' }}>
                                        <div className="mono" style={{ fontSize: 8, color: '#8B5CF6', marginBottom: 5 }}>RESULT_NODE</div>
                                        <div style={{ fontSize: 24, fontWeight: 800 }}>{p.result}</div>
                                    </div>

                                    <div style={{ textAlign: 'right' }}>
                                         <div className="mono" style={{ fontSize: 9, color: '#8B5CF6', display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
                                             VIEW_LOG <ArrowUpRight size={14} />
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
