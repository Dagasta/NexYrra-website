'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, FileText, TrendingUp, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const CASES = [
    {
        id: 'case-01',
        fileId: 'NX-CASE-0047',
        date: '2024-11-12',
        status: 'VERIFIED',
        statusColor: '#00ff88',
        category: 'AI AUTOMATION',
        headline: 'AI System Increased Revenue by 340%',
        summary: 'Deployed an autonomous sales funnel AI for a UAE-based retail chain — predicting high-intent customers, personalizing offers, and executing WhatsApp follow-ups without human intervention.',
        stats: [
            { label: 'Revenue Growth', val: '+340%' },
            { label: 'Time to Deploy', val: '6 Weeks' },
            { label: 'Manual Tasks Eliminated', val: '94%' },
        ],
        tags: ['ML', 'AUTOMATION', 'RETAIL'],
        color: '#8A2BE2',
    },
    {
        id: 'case-02',
        fileId: 'NX-CASE-0031',
        date: '2024-08-03',
        status: 'CLASSIFIED',
        statusColor: '#FF4D4D',
        category: 'WORKFLOW AUTOMATION',
        headline: 'Automation Reduced Operational Costs by 60%',
        summary: 'Built an end-to-end automation suite for a Dubai logistics provider — covering invoice processing, route optimization, driver scheduling, and exception handling. Zero human touchpoints.',
        stats: [
            { label: 'Cost Reduction', val: '60%' },
            { label: 'Ops Staff Redeployed', val: '28 FTEs' },
            { label: 'Processing Speed', val: '480x Faster' },
        ],
        tags: ['WORKFLOW', 'LOGISTICS', 'NLP'],
        color: '#00FFFF',
    },
    {
        id: 'case-03',
        fileId: 'NX-CASE-0019',
        date: '2024-05-21',
        status: 'VERIFIED',
        statusColor: '#00ff88',
        category: 'PREDICTIVE AI',
        headline: 'Predictive Model Scaled Global Operations',
        summary: 'Designed a demand forecasting engine for a GCC-based F&B chain operating across 11 countries — predicting stock levels, staffing, and supply chain requirements 8 weeks in advance.',
        stats: [
            { label: 'Forecast Accuracy', val: '97.3%' },
            { label: 'Countries Deployed', val: '11 GCC' },
            { label: 'Waste Reduction', val: '41%' },
        ],
        tags: ['PREDICTIVE', 'SUPPLY CHAIN', 'ML'],
        color: '#4D9FFF',
    },
];

export default function CaseStudies() {
    const [open, setOpen] = useState<string | null>(null);
    const current = CASES.find(c => c.id === open);

    return (
        <section style={{ padding: 'clamp(80px,10vw,160px) 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(138,43,226,0.3), transparent)' }} />

            <div className="container-os">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ marginBottom: 'clamp(48px,7vw,72px)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <Lock size={14} color="var(--neon-purple)" />
                        <span className="mono" style={{ color: 'var(--neon-purple)', fontSize: 10 }}>CLASSIFIED_ARCHIVE // CASE_FILES</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(36px,5.5vw,80px)', fontFamily: 'var(--font-display)' }}>
                        CASE <span className="gradient-purple-cyan glow-purple">STUDIES</span>
                    </h2>
                </motion.div>

                {/* File Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,360px),1fr))', gap: 20 }}>
                    {CASES.map((c, i) => (
                        <motion.div
                            key={c.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            onClick={() => setOpen(c.id)}
                            style={{
                                background: 'rgba(10,5,20,0.7)', backdropFilter: 'blur(20px)',
                                border: `1px solid ${c.color}20`,
                                borderRadius: 10, padding: '28px', cursor: 'pointer', position: 'relative', overflow: 'hidden',
                                transition: 'all 0.3s',
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}50`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}20`; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
                        >
                            {/* CLASSIFIED watermark */}
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%) rotate(-20deg)', fontFamily: 'var(--font-mono)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: `${c.color}06`, letterSpacing: '0.15em', pointerEvents: 'none', whiteSpace: 'nowrap' }}>
                                {c.status}
                            </div>

                            {/* Top bar */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22, paddingBottom: 16, borderBottom: `1px solid rgba(255,255,255,0.05)` }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <FileText size={14} color={c.color} />
                                    <span className="mono" style={{ fontSize: 9, color: `${c.color}80`, letterSpacing: '0.2em' }}>{c.fileId}</span>
                                </div>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: c.statusColor, border: `1px solid ${c.statusColor}40`, padding: '3px 8px', borderRadius: 3 }}>
                                    {c.status}
                                </span>
                            </div>

                            {/* Meta */}
                            <div style={{ marginBottom: 14 }}>
                                <span className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}>{c.date} // {c.category}</span>
                            </div>

                            <h3 style={{ fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'white', lineHeight: 1.3, marginBottom: 16 }}>
                                {c.headline}
                            </h3>

                            {/* Stats preview */}
                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                {c.stats.map(s => (
                                    <div key={s.label}>
                                        <div style={{ fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-display)', color: c.color, lineHeight: 1 }}>{s.val}</div>
                                        <div className="mono" style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)', marginTop: 4 }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Open CTA */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 22 }}>
                                <span className="mono" style={{ fontSize: 9, color: c.color }}>OPEN FILE</span>
                                <ChevronRight size={12} color={c.color} />
                            </div>

                            <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg,transparent,${c.color},transparent)`, opacity: 0.5 }} />
                        </motion.div>
                    ))}
                </div>

                {/* Link to Cases Page */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} style={{ marginTop: 40, textAlign: 'center' }}>
                    <Link href="/cases" style={{ textDecoration: 'none' }}>
                        <button className="btn-os-outline" style={{ fontSize: 12, borderRadius: 4, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                            ACCESS_FULL_LEDGER <ChevronRight size={14} />
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Expanded file modal */}
            <AnimatePresence>
                {current && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(2,0,8,0.92)', zIndex: 500, backdropFilter: 'blur(8px)' }} />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            style={{
                                position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                                width: 'min(680px, 92vw)', maxHeight: '85vh', overflowY: 'auto',
                                background: '#0a0518', border: `1px solid ${current.color}40`,
                                borderRadius: 12, padding: 'clamp(24px,4vw,44px)', zIndex: 501,
                                boxShadow: `0 0 60px ${current.color}20`,
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
                                <div>
                                    <span className="mono" style={{ fontSize: 9, color: `${current.color}80` }}>{current.fileId} // {current.category}</span>
                                    <h3 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'white', marginTop: 8, lineHeight: 1.3 }}>{current.headline}</h3>
                                </div>
                                <button onClick={() => setOpen(null)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', width: 36, height: 36, borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: 16 }}>
                                    <X size={16} />
                                </button>
                            </div>

                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 32 }}>{current.summary}</p>

                            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                {current.stats.map(s => (
                                    <div key={s.label}>
                                        <div style={{ fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 800, fontFamily: 'var(--font-display)', color: current.color }}>{s.val}</div>
                                        <div className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', marginTop: 6 }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                {current.tags.map(t => (
                                    <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: current.color, border: `1px solid ${current.color}40`, padding: '4px 10px', borderRadius: 3, letterSpacing: '0.15em' }}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
