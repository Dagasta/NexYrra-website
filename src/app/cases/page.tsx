'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Activity, Database, Target, Layers } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const projects = [
    {
        id: 'NX_PRO_ARCH_001',
        title: 'HEALTHCARE_SYSTEM_TRANSFORMATION',
        result: '+80% EFFICIENCY_GAIN',
        client: 'GCC_MULTI_NODE_CLINIC',
        desc: 'Deconstructed administrative friction and architected a persistent patient management engine. Zero-latency scheduling protocols.',
        tags: ['AUTO_FLOW', 'NODE_SYNC'],
        icon: Activity,
    },
    {
        id: 'NX_PRO_ARCH_002',
        title: 'RETAIL_INTELLIGENCE_MATRIX',
        result: '3.4X REVENUE_DENSITY',
        client: 'UAE_LUXURY_GRID',
        desc: 'Engineered a high-throughput predictive commerce engine. Real-time conversion optimization at scale.',
        tags: ['YIELD_ENG', 'DATA_CORE'],
        icon: Target,
    },
    {
        id: 'NX_PRO_ARCH_003',
        title: 'REAL_ESTATE_PIPELINE_ENGINE',
        result: '500+ Q_LEADS_PER_CYCLE',
        client: 'DUBAI_INFRA_ARCHITECT',
        desc: 'Architected a persistent lead qualification node. Orchestrated autonomous nurturing sequences for high-net-worth prospect flows.',
        tags: ['FLOW_ARCH', 'INFRA_SYNC'],
        icon: Database,
    },
    {
        id: 'NX_PRO_ARCH_004',
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
        <main style={{ background: '#020203', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            
            {/* Archive Header: The Case Repository */}
            <section style={{ height: '70vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="matrix-grid" />
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="mono" style={{ color: 'var(--nex-accent)', marginBottom: 30 }}>// SYSTEM_OUTCOME_ARCHIVE_v3.2</div>
                        <h1 style={{ fontSize: 'clamp(50px, 12vw, 160px)', fontWeight: 300, lineHeight: 0.85, letterSpacing: '-0.07em' }}>
                            PROJECT <br />
                            <span className="text-shimmer" style={{ fontWeight: 800 }}>REGISTRY.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* List Table: High-Authority Registry Design */}
            <section className="container-nex" style={{ paddingBottom: 240 }}>
                <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ 
                                    padding: '100px 40px', display: 'grid', 
                                    gridTemplateColumns: 'minmax(200px, 1fr) 2fr 1.5fr minmax(140px, auto)',
                                    alignItems: 'center', gap: 60,
                                    borderBottom: '1px solid rgba(255,255,255,0.02)',
                                    transition: 'background 0.4s'
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.01)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                className="grid-mobile-1"
                                >
                                    {/* Meta Section */}
                                    <div>
                                        <div className="mono" style={{ fontSize: 9, opacity: 0.2, marginBottom: 10 }}>{p.id}</div>
                                        <div className="mono" style={{ fontSize: 11, color: 'white', fontWeight: 700 }}>{p.client}</div>
                                    </div>

                                    {/* Project Profile */}
                                    <div>
                                        <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 20 }}>{p.title}</h3>
                                        <p style={{ fontSize: 13, color: '#404040', lineHeight: 2, maxWidth: 500 }}>{p.desc}</p>
                                    </div>

                                    {/* Result Spec */}
                                    <div className="glass-hpi" style={{ padding: '30px', border: '1px solid var(--nex-accent)/10' }}>
                                        <div className="mono" style={{ fontSize: 8, color: 'var(--nex-accent)', marginBottom: 8 }}>OUTCOME_METRIC</div>
                                        <div style={{ fontSize: 32, fontWeight: 800, color: 'white' }}>{p.result}</div>
                                    </div>

                                    {/* Control Hub */}
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginBottom: 25 }}>
                                            {p.tags.map(t => (
                                                <span key={t} className="mono" style={{ fontSize: 7, border: '1px solid #141414', padding: '4px 8px' }}>{t}</span>
                                            ))}
                                        </div>
                                        <div className="mono" style={{ fontSize: 10, color: 'var(--nex-accent)', display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
                                             VIEW_SPEC <ArrowUpRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Registry Footer */}
                <div style={{ marginTop: 120, textAlign: 'center' }}>
                     <div className="mono" style={{ letterSpacing: '2em', opacity: 0.1 }}>END_OF_REGISTRY</div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
