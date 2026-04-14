'use client';

import { motion } from 'framer-motion';

const STATEMENTS = [
    { text: "We don't build websites.", highlight: "We build systems.", color: 'white' },
    { text: "We don't follow trends.", highlight: "We create infrastructure.", color: '#8A2BE2' },
    { text: "We replace manual work", highlight: "with intelligence.", color: '#00FFFF' },
];

export default function WhyUs() {
    return (
        <section style={{ padding: 'clamp(80px,10vw,160px) 0', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle grid */}
            <div className="grid-overlay" style={{ opacity: 0.3 }} />

            {/* Center glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse, rgba(138,43,226,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div className="container-os">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 'clamp(60px,8vw,100px)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 28, height: 1, background: 'var(--neon-purple)' }} />
                        <span className="mono" style={{ color: 'var(--neon-purple)', fontSize: 10 }}>NEXYRRA_MANDATE // WHY US</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(36px,5.5vw,80px)', fontFamily: 'var(--font-display)' }}>
                        THE <span className="gradient-purple-blue glow-purple">DIFFERENCE</span>
                    </h2>
                </motion.div>

                {/* Big Statements */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {STATEMENTS.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.9, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                            style={{
                                padding: 'clamp(28px,5vw,52px) 0',
                                borderBottom: i < STATEMENTS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20,
                                position: 'relative',
                            }}
                        >
                            {/* Line number */}
                            <span
                                className="mono"
                                style={{ fontSize: 10, color: 'rgba(255,255,255,0.1)', letterSpacing: '0.2em', flexShrink: 0, alignSelf: 'flex-start', paddingTop: 8 }}
                            >
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* Statement */}
                            <div style={{ flex: 1, paddingLeft: 24 }}>
                                <p style={{
                                    fontSize: 'clamp(24px, 4vw, 60px)',
                                    fontWeight: 700,
                                    fontFamily: 'var(--font-display)',
                                    lineHeight: 1.15,
                                    color: 'rgba(255,255,255,0.5)',
                                    letterSpacing: '-0.02em',
                                }}>
                                    {s.text}{' '}
                                    <span style={{
                                        color: s.color,
                                        textShadow: s.color !== 'white'
                                            ? `0 0 30px ${s.color}60, 0 0 60px ${s.color}20`
                                            : 'none',
                                    }}>
                                        {s.highlight}
                                    </span>
                                </p>
                            </div>

                            {/* Accent glow slash on hover */}
                            <div style={{
                                width: 2, height: 'clamp(40px,5vw,70px)',
                                background: `linear-gradient(to bottom, ${s.color}, transparent)`,
                                opacity: 0.4, flexShrink: 0,
                            }} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    style={{ marginTop: 'clamp(48px,7vw,80px)', padding: '28px 32px', background: 'rgba(138,43,226,0.06)', border: '1px solid rgba(138,43,226,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}
                >
                    <div>
                        <div className="mono" style={{ fontSize: 9, color: 'rgba(138,43,226,0.6)', marginBottom: 8, letterSpacing: '0.2em' }}>NEXYRRA // CORE PRINCIPLE</div>
                        <p style={{ fontSize: 'clamp(15px,1.8vw,20px)', color: 'rgba(255,255,255,0.7)', fontWeight: 300, fontFamily: 'var(--font-display)' }}>
                            Every solution we deploy is engineered to outlast every competitor you have.
                        </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div className="status-dot" />
                        <span className="mono" style={{ fontSize: 9, color: 'rgba(0,255,136,0.5)' }}>OPERATIONAL</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
