'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Code2, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TABS = [
    {
        id: 'ai',
        label: 'AI SERVICES',
        icon: Brain,
        color: '#8A2BE2',
        items: [
            { title: 'AI Strategy & Consulting',     desc: 'Roadmap your AI transformation from audit to deployment.' },
            { title: 'AI Model Development',          desc: 'Custom models trained on your data for your exact use case.' },
            { title: 'AI Agents & Automation',        desc: 'Autonomous agents that execute complex multi-step tasks.' },
            { title: 'ChatGPT-like Systems',          desc: 'Domain-specific conversational AI with your brand voice.' },
            { title: 'Recommendation Engines',        desc: 'Personalization systems that learn and adapt in real-time.' },
            { title: 'Data Intelligence Systems',     desc: 'Predictive analytics infrastructure from ingestion to insight.' },
        ],
    },
    {
        id: 'software',
        label: 'SOFTWARE ENGINEERING',
        icon: Code2,
        color: '#00FFFF',
        items: [
            { title: 'Full-Stack Development',        desc: 'End-to-end product engineering with modern frameworks.' },
            { title: 'SaaS Architecture',             desc: 'Multi-tenant, subscription-based platform design.' },
            { title: 'Backend Systems',               desc: 'High-throughput APIs, microservices, and data pipelines.' },
            { title: 'Cloud Infrastructure',          desc: 'AWS / GCP / Azure architecture, DevOps, and CI/CD.' },
            { title: 'API Development',               desc: 'RESTful and GraphQL APIs built for scale and security.' },
        ],
    },
    {
        id: 'innovation',
        label: 'TECH INNOVATION',
        icon: Lightbulb,
        color: '#4D9FFF',
        items: [
            { title: 'Blockchain Integrations',      desc: 'Smart contracts, tokenization, and Web3 infrastructure.' },
            { title: 'Cybersecurity Systems',        desc: 'Threat detection, zero-trust architecture, and penetration testing.' },
            { title: 'IoT Systems',                  desc: 'Connected device ecosystems with real-time data processing.' },
            { title: 'Smart Platforms',              desc: 'Intelligent systems that sense, decide, and act autonomously.' },
        ],
    },
];

export default function ServicesOS() {
    const [activeTab, setActiveTab] = useState('ai');
    const current = TABS.find(t => t.id === activeTab)!;

    return (
        <section style={{ padding: 'clamp(80px,10vw,160px) 0', position: 'relative', overflow: 'hidden' }}>
            {/* Background */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(138,43,226,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div className="grid-overlay" style={{ opacity: 0.4 }} />

            <div className="container-os">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'clamp(48px,7vw,72px)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 28, height: 1, background: 'var(--neon-purple)' }} />
                        <span className="mono" style={{ color: 'var(--neon-purple)', fontSize: 10 }}>CORE_SYSTEMS // SERVICES</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(36px,5.5vw,80px)', fontFamily: 'var(--font-display)' }}>
                        OUR <span className="gradient-purple-blue glow-purple">SERVICES</span>
                    </h2>
                </motion.div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 40, flexWrap: 'wrap' }}>
                    {TABS.map(tab => {
                        const Icon = tab.icon;
                        const active = tab.id === activeTab;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 8,
                                    padding: '12px 22px',
                                    background: active ? `${tab.color}18` : 'transparent',
                                    border: `1px solid ${active ? tab.color + '60' : 'rgba(255,255,255,0.08)'}`,
                                    borderRadius: 6, cursor: 'pointer',
                                    fontFamily: 'var(--font-mono)', fontSize: 10,
                                    fontWeight: 700, letterSpacing: '0.15em',
                                    color: active ? tab.color : 'rgba(255,255,255,0.35)',
                                    transition: 'all 0.25s',
                                    boxShadow: active ? `0 0 16px ${tab.color}20` : 'none',
                                    position: 'relative',
                                }}
                            >
                                <Icon size={13} />
                                {tab.label}
                                {active && (
                                    <motion.div layoutId="tab-underline" style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 1, background: tab.color, boxShadow: `0 0 8px ${tab.color}` }} />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,300px),1fr))', gap: 16 }}
                    >
                        {current.items.map((item, i) => (
                            <Link 
                                href="/services" 
                                key={item.title} 
                                style={{ textDecoration: 'none' }}
                                title={`Learn more about our ${item.title} services`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.4 }}
                                    style={{
                                        background: 'rgba(10,5,20,0.5)', 
                                        backdropFilter: 'blur(16px)',
                                        border: '1px solid rgba(255,255,255,0.06)',
                                        borderLeft: `2px solid ${current.color}50`,
                                        borderRadius: '0 8px 8px 0',
                                        padding: '22px 24px',
                                        transition: 'all 0.25s',
                                        cursor: 'pointer',
                                        height: '100%'
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.borderLeftColor = current.color;
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(18,8,36,0.7)';
                                        (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.borderLeftColor = `${current.color}50`;
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(10,5,20,0.5)';
                                        (e.currentTarget as HTMLElement).style.transform = 'none';
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
                                        <h3 style={{ fontSize: 15, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'white', lineHeight: 1.3 }}>
                                            {item.title}
                                        </h3>
                                        <ArrowRight size={14} color={current.color} style={{ flexShrink: 0, marginLeft: 12, marginTop: 2, opacity: 0.6 }} />
                                    </div>
                                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.65, fontWeight: 300 }}>
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
