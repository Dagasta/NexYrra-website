'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Eye, MessageSquare, Bot, BarChart3, Workflow, X, ArrowRight } from 'lucide-react';

const CAPS = [
    { icon: Brain, id: 'ml', title: 'Machine Learning Systems', color: '#8A2BE2', tag: 'MOD_01', desc: 'Custom ML pipelines trained on your proprietary data. Regression, classification, clustering, and deep learning architectures built for production.' },
    { icon: Sparkles, id: 'gen', title: 'Generative AI & Agents', color: '#00FFFF', tag: 'MOD_02', desc: 'ChatGPT-like systems, AI agents that take autonomous action, content generation engines, and multi-modal AI deployments at enterprise scale.' },
    { icon: Eye, id: 'cv', title: 'Computer Vision', color: '#4D9FFF', tag: 'MOD_03', desc: 'Real-time object detection, facial recognition, quality inspection, and visual analytics systems for industrial and commercial applications.' },
    { icon: MessageSquare, id: 'nlp', title: 'NLP Systems', color: '#a855f7', tag: 'MOD_04', desc: 'Sentiment analysis, document intelligence, multilingual translation, entity extraction, and conversational AI tuned for your domain.' },
    { icon: Bot, id: 'auto', title: 'Autonomous AI Agents', color: '#00FFFF', tag: 'MOD_05', desc: 'Self-directing agents that browse, decide, and act — replacing workflows that once required human operators. 24/7, zero downtime.' },
    { icon: BarChart3, id: 'pred', title: 'Predictive Analytics', color: '#8A2BE2', tag: 'MOD_06', desc: 'Forecast demand, detect anomalies, and predict customer behavior with time-series models and probabilistic forecasting engines.' },
    { icon: Workflow, id: 'biz', title: 'AI Business Automation', color: '#4D9FFF', tag: 'MOD_07', desc: 'End-to-end process automation: CRM updates, lead scoring, invoice processing, scheduling, and reporting — all autonomous.' },
];

import { useRouter } from 'next/navigation';

export default function AICapabilities() {
    const [hovered, setHovered] = useState<string | null>(null);
    const router = useRouter();

    return (
        <section style={{ padding: 'clamp(80px,10vw,160px) 0', position: 'relative', overflow: 'hidden' }}>
            {/* Background glow */}
            <div style={{ position: 'absolute', top: '50%', left: '30%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(138,43,226,0.08) 0%, transparent 70%)', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

            <div className="container-os">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    style={{ marginBottom: 'clamp(48px, 7vw, 80px)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 28, height: 1, background: 'var(--neon-purple)' }} />
                        <span className="mono" style={{ color: 'var(--neon-purple)', fontSize: 10 }}>SYSTEM_MODULES // 7 ACTIVE</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(36px, 5.5vw, 80px)', fontFamily: 'var(--font-display)' }}>
                        AI <span className="gradient-purple-cyan glow-purple">CAPABILITIES</span>
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
                    {CAPS.map((cap, i) => {
                        const Icon = cap.icon;
                        const isHov = hovered === cap.id;

                        return (
                            <motion.div
                                key={cap.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.19, 1, 0.22, 1] }}
                                onMouseEnter={() => setHovered(cap.id)}
                                onMouseLeave={() => setHovered(null)}
                                onClick={() => router.push('/services')}
                                style={{
                                    background: isHov ? 'rgba(20,10,40,0.8)' : 'rgba(12,8,24,0.6)',
                                    backdropFilter: 'blur(20px)',
                                    border: `1px solid ${isHov ? cap.color + '50' : 'rgba(255,255,255,0.06)'}`,
                                    borderRadius: 10,
                                    padding: 28,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.35s cubic-bezier(0.19,1,0.22,1)',
                                    boxShadow: isHov ? `0 0 30px ${cap.color}18, 0 8px 40px rgba(0,0,0,0.3)` : 'none',
                                    transform: isHov ? 'translateY(-4px) scale(1.01)' : 'translateY(0) scale(1)',
                                }}
                            >
                                {/* Top glow line */}
                                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${cap.color}, transparent)`, opacity: isHov ? 0.8 : 0, transition: 'opacity 0.3s' }} />

                                {/* Tag + icon row */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                                    <div style={{ padding: '10px', background: `${cap.color}14`, border: `1px solid ${cap.color}30`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Icon size={22} color={cap.color} />
                                    </div>
                                    <span className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.2em' }}>{cap.tag}</span>
                                </div>

                                {/* Title */}
                                <h3 style={{ fontSize: 17, fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: 12, color: isHov ? 'white' : 'rgba(255,255,255,0.85)', transition: 'color 0.2s', lineHeight: 1.25 }}>
                                    {cap.title}
                                </h3>

                                {/* Description - always visible, more prominent on hover */}
                                <p style={{ fontSize: 13, color: isHov ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.35)', lineHeight: 1.7, transition: 'color 0.3s', fontWeight: 300 }}>
                                    {cap.desc}
                                </p>

                                {/* Expand CTA */}
                                <AnimatePresence>
                                    {isHov && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 20 }}
                                        >
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: cap.color, letterSpacing: '0.15em' }}>
                                                DEPLOY MODULE
                                            </span>
                                            <ArrowRight size={11} color={cap.color} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Energy pulse on hover */}
                                {isHov && (
                                    <motion.div
                                        initial={{ scale: 0.7, opacity: 0.6 }}
                                        animate={{ scale: 2, opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                        style={{ position: 'absolute', top: '50%', left: '50%', width: 80, height: 80, borderRadius: '50%', background: cap.color, transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
