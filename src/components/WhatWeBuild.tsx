'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Database, Cog, Users, BarChart2, Globe, Network } from 'lucide-react';

import { useRouter } from 'next/navigation';

const MODULES = [
    { icon: Layers,    id: 'saas',    title: 'AI SaaS Platforms',             desc: 'Full-stack SaaS products powered by AI — from MVP to enterprise-grade with multi-tenancy, billing, and scaling architecture built in.',                               color: '#8A2BE2' },
    { icon: Cog,       id: 'custom',  title: 'Custom Software Systems',        desc: 'Bespoke software tailored to your operational reality. No templates. No shortcuts. Engineered to outlast every competitor.',                                              color: '#00FFFF' },
    { icon: Network,   id: 'auto',    title: 'Business Automation Tools',      desc: 'Internal tools that eliminate repetitive work: staff scheduling, document processing, reporting pipelines, and approval flows.',                                           color: '#4D9FFF' },
    { icon: Users,     id: 'crm',     title: 'AI-Powered CRMs',               desc: 'CRMs that learn from your deals, predict churn, auto-qualify leads, and surface the right action at the right moment — built on your own data.',                           color: '#a855f7' },
    { icon: BarChart2, id: 'data',    title: 'Data Intelligence Dashboards',   desc: 'Real-time analytics dashboards connecting every data source: sales, ops, marketing. Built to make decisions obvious.',                                                    color: '#00FFFF' },
    { icon: Globe,     id: 'web',     title: 'Web & Mobile Applications',      desc: 'High-performance web and mobile experiences — from consumer apps to internal portals — deployed on resilient cloud infrastructure.',                                       color: '#8A2BE2' },
    { icon: Database,  id: 'api',     title: 'API Infrastructure',             desc: 'Secure, scalable APIs that connect your systems, third-party tools, and AI layers into a single coherent data architecture.',                                               color: '#4D9FFF' },
];

function HoloFlash() {
    return (
        <motion.div
            initial={{ opacity: 0.8, scaleX: 0 }}
            animate={{ opacity: 0, scaleX: 1.5 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.15), transparent)', pointerEvents: 'none', zIndex: 10 }}
        />
    );
}

export default function WhatWeBuild() {
    const [flashing, setFlashing] = useState<string | null>(null);
    const [hov, setHov] = useState<string | null>(null);
    const router = useRouter();

    const trigger = (id: string) => {
        setFlashing(id);
        setTimeout(() => {
            setFlashing(null);
            router.push('/services');
        }, 300);
    };

    return (
        <section style={{ padding: 'clamp(80px, 10vw, 160px) 0', position: 'relative', overflow: 'hidden' }}>
            {/* Cyan glow top-right */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: 600, height: 400, background: 'radial-gradient(circle, rgba(0,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div className="grid-overlay" style={{ opacity: 0.5 }} />

            <div className="container-os">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'clamp(48px,7vw,80px)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 28, height: 1, background: 'var(--neon-cyan)' }} />
                        <span className="mono" style={{ color: 'var(--neon-cyan)', fontSize: 10 }}>BUILD_MODULES // 7 SYSTEMS</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(36px, 5.5vw, 80px)', fontFamily: 'var(--font-display)' }}>
                        WHAT WE <span className="gradient-cyan-blue">BUILD</span>
                    </h2>
                </motion.div>

                {/* Module Grid — 2 col + 1 wide last item */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,380px),1fr))', gap: 16 }}>
                    {MODULES.map((mod, i) => {
                        const Icon = mod.icon;
                        const isHov = hov === mod.id;
                        return (
                            <motion.div
                                key={mod.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: i * 0.06 }}
                                onMouseEnter={() => setHov(mod.id)}
                                onMouseLeave={() => setHov(null)}
                                onClick={() => trigger(mod.id)}
                                style={{
                                    background: isHov ? 'rgba(15,8,30,0.9)' : 'rgba(10,5,20,0.5)',
                                    border: `1px solid ${isHov ? mod.color + '40' : 'rgba(255,255,255,0.05)'}`,
                                    borderRadius: 10, padding: '28px 28px',
                                    cursor: 'pointer', position: 'relative', overflow: 'hidden',
                                    transition: 'all 0.3s cubic-bezier(.19,1,.22,1)',
                                    transform: isHov ? 'translateY(-3px)' : 'none',
                                    boxShadow: isHov ? `0 0 24px ${mod.color}18` : 'none',
                                }}
                            >
                                {/* Holographic flash on click */}
                                {flashing === mod.id && <HoloFlash />}

                                {/* Top border glow */}
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${mod.color}, transparent)`, opacity: isHov ? 0.7 : 0.12, transition: 'opacity 0.3s' }} />

                                {/* Index + icon */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                        <div style={{ width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${mod.color}12`, border: `1px solid ${mod.color}28`, borderRadius: 8 }}>
                                            <Icon size={20} color={mod.color} />
                                        </div>
                                        <span className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.2em' }}>
                                            SYS_{String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    {/* Online indicator */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 6px #00ff88', animation: 'pulse-status 2s infinite' }} />
                                        <span className="mono" style={{ fontSize: 8, color: 'rgba(0,255,136,0.4)', letterSpacing: '0.15em' }}>LIVE</span>
                                    </div>
                                </div>

                                <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: 10, color: isHov ? 'white' : 'rgba(255,255,255,0.8)', transition: 'color 0.2s', lineHeight: 1.3 }}>
                                    {mod.title}
                                </h3>

                                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, fontWeight: 300, transition: 'color 0.3s' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)') }
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
                                >
                                    {mod.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
