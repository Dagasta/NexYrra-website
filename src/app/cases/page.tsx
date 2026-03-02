'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const cases = [
    {
        industry: 'Healthcare / Clinics',
        client: 'Multi-branch UAE Clinic',
        result: '80% reduction in appointment no-shows',
        metric: '80%',
        metricLabel: 'No-show Reduction',
        description: 'Deployed an AI-powered WhatsApp system for automated appointment reminders, rebooking, and post-visit follow-ups across 7 clinic branches.',
        tags: ['WhatsApp AI', 'Automation', 'Healthcare'],
        color: '#8B5CF6',
    },
    {
        industry: 'Retail & E-commerce',
        client: 'UAE Fashion Retailer',
        result: '340% increase in WhatsApp campaign ROI',
        metric: '3.4x',
        metricLabel: 'Campaign ROI',
        description: 'Built a personalized bulk WhatsApp marketing system that segments customers by purchase history and sends AI-crafted product recommendations.',
        tags: ['Bulk WhatsApp', 'Personalization', 'Retail'],
        color: '#22D3EE',
    },
    {
        industry: 'Real Estate',
        client: 'Dubai Property Group',
        result: '500+ qualified leads per month on autopilot',
        metric: '500+',
        metricLabel: 'Monthly Leads',
        description: 'Created an autonomous AI agent that qualifies inbound leads, schedules viewings, and nurtures prospects through a 14-day automated sequence.',
        tags: ['AI Agents', 'Lead Gen', 'Real Estate'],
        color: '#F472B6',
    },
    {
        industry: 'Logistics & Supply Chain',
        client: 'GCC Logistics Company',
        result: '60% faster processing with zero manual entry',
        metric: '60%',
        metricLabel: 'Faster Processing',
        description: 'Automated their entire order processing and invoice workflow — connecting their ERP, email, and supplier portals into a single automated pipeline.',
        tags: ['Workflow Automation', 'ERP Integration', 'Logistics'],
        color: '#FB923C',
    },
    {
        industry: 'Financial Services',
        client: 'UAE Fintech Startup',
        result: '95% faster financial reporting cycles',
        metric: '95%',
        metricLabel: 'Reporting Speed',
        description: 'Built a custom data intelligence dashboard that consolidates 12 data sources in real-time, with automated anomaly detection and board-ready reports.',
        tags: ['Data Intelligence', 'Analytics', 'Finance'],
        color: '#34D399',
    },
    {
        industry: 'Professional Services',
        client: 'Regional Law Firm',
        result: '$200K saved annually in admin costs',
        metric: '$200K',
        metricLabel: 'Annual Savings',
        description: 'Deployed a custom AI assistant trained on legal document templates, case history, and firm procedures — handling 70% of routine document drafting.',
        tags: ['Custom AI', 'Document Intelligence', 'Legal'],
        color: '#A78BFA',
    },
];

export default function CasesPage() {
    return (
        <main style={{ background: '#08090f', minHeight: '100vh', color: 'white' }}>
            <Navbar />

            {/* Header */}
            <section style={{ paddingTop: 160, paddingBottom: 80, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div className="container-nex" style={{ maxWidth: 700, position: 'relative' }}>
                    <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B5CF6', display: 'block', marginBottom: 20 }}>Proven Results</span>
                    <h1 className="font-title" style={{ fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: 24 }}>
                        Case{' '}
                        <span style={{ background: 'linear-gradient(90deg, #8B5CF6, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Studies</span>
                    </h1>
                    <p style={{ fontSize: 18, color: '#64748B', lineHeight: 1.8 }}>
                        Real results from real businesses across the UAE and GCC. No generic case studies — specific numbers, specific outcomes.
                    </p>
                </div>
            </section>

            {/* Cases Grid */}
            <section className="container-nex" style={{ paddingBottom: 160 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 400px), 1fr))', gap: 24 }}>
                    {cases.map((c, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                            <div className="card-nex" style={{ padding: 36, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                {/* Metric hero */}
                                <div style={{ marginBottom: 28 }}>
                                    <div className="font-cyber" style={{ fontSize: 52, fontWeight: 900, color: c.color, lineHeight: 1, marginBottom: 4 }}>
                                        {c.metric}
                                    </div>
                                    <div style={{ fontSize: 13, color: '#475569', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.metricLabel}</div>
                                </div>

                                <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                                    <span style={{ padding: '3px 10px', borderRadius: 999, background: `${c.color}15`, border: `1px solid ${c.color}33`, fontSize: 10, fontWeight: 700, color: c.color, fontFamily: 'var(--font-cyber)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        {c.industry}
                                    </span>
                                </div>

                                <h3 className="font-title" style={{ fontSize: 20, fontWeight: 900, marginBottom: 12, color: 'white' }}>{c.result}</h3>
                                <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.8, marginBottom: 24, flex: 1 }}>{c.description}</p>

                                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingTop: 20, borderTop: '1px solid rgba(139,92,246,0.08)' }}>
                                    {c.tags.map(t => (
                                        <span key={t} style={{ padding: '3px 10px', borderRadius: 999, background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.12)', fontSize: 11, fontWeight: 600, color: '#64748B' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ marginTop: 80, textAlign: 'center' }}>
                    <div style={{ display: 'inline-block', padding: 'clamp(32px, 8vw, 80px)', background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(34,211,238,0.05))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 32, width: '100%' }}>
                        <TrendingUp size={48} style={{ color: '#8B5CF6', margin: '0 auto 24px', display: 'block' }} />
                        <h2 className="font-title" style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, letterSpacing: '-0.02em' }}>
                            Your Results Could Be Next
                        </h2>
                        <p style={{ color: '#64748B', fontSize: 17, lineHeight: 1.8, marginBottom: 36, maxWidth: 460, margin: '0 auto 36px' }}>
                            Every business in this list started with a free 30-minute strategy session. Book yours today.
                        </p>
                        <Link href="/contact" className="btn-primary" style={{ padding: '18px 52px', fontSize: 16, borderRadius: 14 }}>
                            Book Free Session <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
