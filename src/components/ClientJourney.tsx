'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Cpu, Rocket, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const STAGES = [
    { id: '01', icon: Search,     title: 'DISCOVERY',   color: '#8A2BE2', desc: 'Deep-dive into your operations. We map your processes, identify AI opportunities, and define measurable outcomes.',           sub: '1–2 Weeks' },
    { id: '02', icon: Cpu,        title: 'AI BUILD',    color: '#00FFFF', desc: 'Custom development of your AI systems, integrations, and automations. No templates — pure engineering for your reality.',    sub: '4–10 Weeks' },
    { id: '03', icon: Rocket,     title: 'DEPLOYMENT',  color: '#4D9FFF', desc: 'Live rollout with monitoring, testing, and feedback loops. Your team gets trained. Your systems go live.',                  sub: '1–2 Weeks' },
    { id: '04', icon: TrendingUp, title: 'SCALE',       color: '#a855f7', desc: 'Continuous improvement. We monitor, iterate, and expand the system as your business grows. AI that learns with you.',       sub: 'Ongoing' },
];

export default function ClientJourney() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.8', 'end 0.2'] });
    const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={sectionRef} style={{ padding: 'clamp(80px,10vw,160px) 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,255,255,0.2),transparent)' }} />

            <div className="container-os">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 'clamp(60px,8vw,100px)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 28, height: 1, background: 'var(--neon-cyan)' }} />
                        <span className="mono" style={{ color: 'var(--neon-cyan)', fontSize: 10 }}>DEPLOYMENT_SEQUENCE // CLIENT_JOURNEY</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(36px,5.5vw,80px)', fontFamily: 'var(--font-display)' }}>
                        CLIENT <span className="gradient-cyan-blue">JOURNEY</span>
                    </h2>
                </motion.div>

                {/* Timeline — desktop horizontal, mobile vertical */}
                <div style={{ position: 'relative' }}>

                    {/* Animated connecting line (desktop) */}
                    <div className="hide-mobile" style={{ position: 'absolute', top: 52, left: '6%', right: '6%', height: 1, background: 'rgba(255,255,255,0.06)', zIndex: 0 }}>
                        <motion.div style={{ height: '100%', width: lineWidth, background: 'linear-gradient(90deg, #8A2BE2, #00FFFF, #4D9FFF, #a855f7)', boxShadow: '0 0 12px rgba(138,43,226,0.5)' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, position: 'relative', zIndex: 1 }} className="grid-1-mobile">
                        {STAGES.map((stage, i) => {
                            const Icon = stage.icon;
                            return (
                                <Link 
                                    href="/contact" 
                                    key={stage.id} 
                                    style={{ textDecoration: 'none' }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: i * 0.12, ease: [0.19, 1, 0.22, 1] }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}
                                        whileHover={{ y: -8 }}
                                    >
                                        {/* Icon node */}
                                        <div style={{
                                            width: 56, height: 56,
                                            borderRadius: '50%',
                                            background: `${stage.color}14`,
                                            border: `2px solid ${stage.color}60`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginBottom: 24, position: 'relative',
                                            boxShadow: `0 0 20px ${stage.color}25`,
                                            flexShrink: 0,
                                        }}>
                                            <Icon size={22} color={stage.color} />
                                            {/* Outer pulse ring */}
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                                                transition={{ repeat: Infinity, duration: 3, delay: i * 0.6 }}
                                                style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: `1px solid ${stage.color}40` }}
                                            />
                                        </div>

                                        {/* Stage label */}
                                        <div style={{ marginBottom: 6 }}>
                                            <span className="mono" style={{ fontSize: 8, color: stage.color, letterSpacing: '0.2em' }}>PHASE_{stage.id}</span>
                                        </div>
                                        <h3 style={{ fontSize: 15, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'white', marginBottom: 12, letterSpacing: '0.04em' }}>
                                            {stage.title}
                                        </h3>
                                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, fontWeight: 300, marginBottom: 14 }}>
                                            {stage.desc}
                                        </p>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: stage.color, border: `1px solid ${stage.color}30`, padding: '3px 10px', borderRadius: 20 }}>
                                            {stage.sub}
                                        </span>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
