'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Database, FastForward, Activity } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const projects = [
    {
        id: 'NX_PRO_H01',
        title: 'Healthcare Ecosystem Optimization',
        result: '80% NO-SHOW REDUCTION',
        client: 'Multi-branch GCC Clinic',
        desc: 'Deployed high-performance communication nodes across 7 branches, automating entire patient lifecycle management with zero human latency.',
        tags: ['SYSTEM_AUTO', 'GCC_DEPLOY', 'HEALTH_CORE'],
    },
    {
        id: 'NX_PRO_R02',
        title: 'Retail Intelligence Layer',
        result: '3.4X CAMPAIGN YIELD',
        client: 'Luxury UAE Fashion',
        desc: 'Built a predictive segmentation engine that architected personalized outreach pipelines, significantly increasing conversion density.',
        tags: ['DATA_INTEL', 'RETAIL_ENGINE', 'UPLINK_SYNC'],
    },
    {
        id: 'NX_PRO_P03',
        title: 'Real Estate Lead Pipeline',
        result: '500+ Q_LEADS / MONTH',
        client: 'Dubai Property Architect',
        desc: 'Engineered an autonomous lead qualification node that manages high-volume prospect flows through a 14-day persistent sequence.',
        tags: ['LEAD_SYNC', 'RE_AUTO', 'NODE_INFRA'],
    },
    {
        id: 'NX_PRO_L04',
        title: 'Logistics Engine Integration',
        result: '60% VELOCITY INCREASE',
        client: 'Federal Logistics GCC',
        desc: 'Unified fractured ERP and portal ecosystems into a single, high-throughput automated pipeline, eliminating manual data handling.',
        tags: ['PIPELINE_SYNC', 'ERP_HARDEN', 'LOGS_LOGIC'],
    },
];

export default function ArchivePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <main ref={containerRef} style={{ background: '#05060e', minHeight: '100vh', color: 'white', overflowX: 'hidden' }}>
            <Navbar />
            
            {/* Header: The Archive Vault */}
            <section style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div className="scanline" />
                <div className="container-nex" style={{ textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#8B5CF6', display: 'block', marginBottom: 30 }}>
                            TRANSACTION_LOGS.EXE
                        </span>
                        <h1 className="font-title" style={{ fontSize: 'clamp(50px, 10vw, 140px)', fontWeight: 900, letterSpacing: '-0.06em', lineHeight: 0.9 }}>
                            THE <span className="shimmer-text">ARCHIVE.</span>
                        </h1>
                        <p style={{ maxWidth: 500, margin: '40px auto 0', color: '#4B5563', fontSize: 13, lineHeight: 1.8, fontFamily: 'monospace' }}>
                            [ SECURITY LEVEL: ACCESS_GRANTED ]<br />
                            A repository of high-performance architectural deployments and systems engineering outcomes across the Middle East.
                        </p>
                    </motion.div>
                </div>
                
                {/* Visual Grid Deco */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, #8B5CF6, transparent)' }} />
            </section>

            {/* List Engine */}
            <section className="container-nex" style={{ paddingBottom: 160 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                        >
                            <div className="mask-gradient-border" style={{ marginBottom: 4 }}>
                                <div style={{ 
                                    padding: '60px 40px', display: 'grid', 
                                    gridTemplateColumns: 'minmax(120px, 1fr) 2fr 1.5fr minmax(140px, auto)',
                                    alignItems: 'center', gap: 40,
                                    background: 'rgba(255,255,255,0.01)',
                                }} className="grid-mobile-1">
                                    
                                    {/* Project Meta */}
                                    <div>
                                        <div className="font-cyber" style={{ fontSize: 10, color: '#334155', fontWeight: 900, marginBottom: 8 }}>{p.id}</div>
                                        <div style={{ fontSize: 12, color: '#64748B', fontWeight: 600 }}>{p.client}</div>
                                    </div>

                                    {/* Title & Desc */}
                                    <div>
                                        <h3 className="font-title" style={{ fontSize: 24, fontWeight: 800, marginBottom: 15 }}>{p.title}</h3>
                                        <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.6, maxWidth: 440 }}>{p.desc}</p>
                                    </div>

                                    {/* Stats */}
                                    <div style={{ padding: '20px', borderLeft: '1px solid rgba(139,92,246,0.1)', background: 'rgba(139,92,246,0.02)' }}>
                                        <div className="font-cyber" style={{ fontSize: 11, color: '#8B5CF6', marginBottom: 5 }}>RESULT_METRIC</div>
                                        <div className="font-title" style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', color: 'white' }}>{p.result}</div>
                                    </div>

                                    {/* Actions */}
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginBottom: 20 }}>
                                            {p.tags.map(t => (
                                                <span key={t} style={{ fontSize: 8, color: '#1E293B', border: '1px solid #1E293B', padding: '3px 8px', borderRadius: 0 }}>{t}</span>
                                            ))}
                                        </div>
                                        <Link href="#" className="font-cyber" style={{ fontSize: 10, color: '#8B5CF6', display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end', textDecoration: 'none' }}>
                                            OPEN_REPORT <ArrowUpRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Infinite Bottom Scroll Deco */}
                <div style={{ marginTop: 160, textAlign: 'center' }}>
                    <motion.div animate={{ rotateY: 360 }} transition={{ repeat: Infinity, duration: 4, ease: 'linear' }} style={{ display: 'inline-block' }}>
                         <Database size={60} style={{ color: 'rgba(139,92,246,0.2)' }} />
                    </motion.div>
                    <div className="font-cyber" style={{ marginTop: 20, fontSize: 10, color: '#1E293B', letterSpacing: '1em' }}>ENDOFLOGS</div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
