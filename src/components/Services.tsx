'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { services, serviceGroups } from '../lib/services-data';

const groupColors: Record<string, { accent: string; glow: string; border: string }> = {
    BUILD:    { accent: '#8B5CF6', glow: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.25)' },
    AUTOMATE: { accent: '#22D3EE', glow: 'rgba(34,211,238,0.10)', border: 'rgba(34,211,238,0.22)' },
    SCALE:    { accent: '#A78BFA', glow: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.22)' },
    SECURE:   { accent: '#34D399', glow: 'rgba(52,211,153,0.10)', border: 'rgba(52,211,153,0.22)' },
};

const Services = () => {
    const [active, setActive] = useState('BUILD');
    const filtered = services.filter(s => s.group === active);
    const col = groupColors[active];

    return (
        <section id="capabilities" style={{ padding: '140px 0 160px', background: '#07080e', position: 'relative', overflow: 'hidden' }}>

            {/* Background glow matching active group */}
            <AnimatePresence>
                <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        position: 'absolute', top: '30%', right: '-5%', zIndex: 0, pointerEvents: 'none',
                        width: 700, height: 700, borderRadius: '50%',
                        background: `radial-gradient(circle, ${col.glow} 0%, transparent 70%)`,
                    }} />
            </AnimatePresence>

            <div className="container-nex" style={{ position: 'relative', zIndex: 1 }}>

                {/* Header row */}
                <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 80, flexWrap: 'wrap', gap: 40 }}>
                    <div>
                        <div className="section-line">
                            <span className="font-cyber" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#8B5CF6' }}>
                                Capabilities
                            </span>
                        </div>
                        <h2 className="font-title" style={{ fontSize: 'clamp(38px, 5.5vw, 80px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
                            Twelve Domains.<br />
                            <span style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Zero Compromises.
                            </span>
                        </h2>
                    </div>
                    <p style={{ fontSize: 16, color: '#475569', maxWidth: 340, lineHeight: 1.85, fontWeight: 400 }}>
                        Name your technology problem. We've likely solved it — and we'll solve it better than anyone who's pitched you so far.
                    </p>
                </motion.div>

                {/* Split layout: sidebar + panel */}
                <div className="capabilities-layout">

                    {/* LEFT sidebar: categories */}
                    <div className="capabilities-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'sticky', top: 120 }}>
                        {serviceGroups.map((g, i) => {
                            const isActive = active === g.id;
                            const c = groupColors[g.id];
                            const groupServices = services.filter(s => s.group === g.id);
                            return (
                                <button key={g.id} onClick={() => setActive(g.id)}
                                    style={{
                                        display: 'flex', alignItems: 'flex-start', gap: 14,
                                        padding: '18px 20px', width: '100%', textAlign: 'left',
                                        background: isActive ? `${c.accent}0d` : 'transparent',
                                        border: 'none',
                                        borderLeft: `2px solid ${isActive ? c.accent : 'rgba(255,255,255,0.06)'}`,
                                        borderRadius: '0 12px 12px 0',
                                        cursor: 'pointer', transition: 'all 0.22s',
                                    }}
                                    onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.borderLeftColor = 'rgba(255,255,255,0.15)'; }}
                                    onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.borderLeftColor = 'rgba(255,255,255,0.06)'; }}
                                >
                                    <span className="font-cyber" style={{ fontSize: 10, color: isActive ? c.accent : '#334155', fontWeight: 700, paddingTop: 4, flexShrink: 0 }}>
                                        0{i + 1}
                                    </span>
                                    <div>
                                        <div className="font-title" style={{
                                            fontSize: 15, fontWeight: 800,
                                            color: isActive ? 'white' : '#4B5563',
                                            marginBottom: 5, transition: 'color 0.2s',
                                        }}>
                                            {g.label}
                                        </div>
                                        <div style={{ fontSize: 11, color: '#334155', lineHeight: 1.5 }}>
                                            {groupServices.slice(0, 3).map(s => s.title.split(' ').slice(-1)[0]).join(' · ')}
                                        </div>
                                    </div>
                                </button>
                            );
                        })}

                        {/* Visit services page link */}
                        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <Link href="/services" style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                color: '#334155', fontSize: 12, fontWeight: 700, transition: 'color 0.2s',
                            }}
                                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#8B5CF6')}
                                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#334155')}
                            >
                                View all services <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT panel: service rows */}
                    <AnimatePresence mode="wait">
                        <motion.div key={active}
                            initial={{ opacity: 0, x: 24, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, x: -24, filter: 'blur(4px)' }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                        >
                            {/* Group tagline */}
                            <div style={{ marginBottom: 8, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <p style={{ fontSize: 14, color: col.accent, fontWeight: 700 }}>
                                    {serviceGroups.find(g => g.id === active)?.tagline}
                                </p>
                            </div>

                            {filtered.map((service, i) => (
                                <motion.div key={service.slug}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link href="/contact" style={{ textDecoration: 'none', display: 'block' }}>
                                        <div
                                            style={{
                                                padding: '26px 28px',
                                                background: 'rgba(255,255,255,0.018)',
                                                border: '1px solid rgba(255,255,255,0.06)',
                                                borderRadius: 16, transition: 'all 0.28s ease',
                                                display: 'flex', alignItems: 'center',
                                                justifyContent: 'space-between', gap: 24,
                                                position: 'relative', overflow: 'hidden',
                                            }}
                                            onMouseEnter={e => {
                                                const el = e.currentTarget as HTMLElement;
                                                el.style.border = `1px solid ${col.border}`;
                                                el.style.background = col.glow;
                                                el.style.transform = 'translateX(6px)';
                                            }}
                                            onMouseLeave={e => {
                                                const el = e.currentTarget as HTMLElement;
                                                el.style.border = '1px solid rgba(255,255,255,0.06)';
                                                el.style.background = 'rgba(255,255,255,0.018)';
                                                el.style.transform = 'translateX(0)';
                                            }}
                                        >
                                            {/* Gradient bar on top edge */}
                                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${col.accent}55, transparent)` }} />

                                            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                                <div style={{
                                                    width: 48, height: 48, flexShrink: 0, borderRadius: 12,
                                                    background: `${col.accent}14`, border: `1px solid ${col.accent}22`,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
                                                }}>
                                                    {service.icon}
                                                </div>
                                                <div>
                                                    <div className="font-title" style={{ fontSize: 16, fontWeight: 800, color: 'white', marginBottom: 3 }}>
                                                        {service.title}
                                                    </div>
                                                    <div style={{ fontSize: 12, color: '#475569' }}>{service.tagline}</div>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 }}>
                                                <div className="hide-mobile" style={{ display: 'flex', gap: 16 }}>
                                                    {service.features.slice(0, 2).map(f => (
                                                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                                            <CheckCircle size={10} style={{ color: col.accent }} />
                                                            <span style={{ fontSize: 11, color: '#334155', fontWeight: 600 }}>{f}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div style={{
                                                    width: 32, height: 32, borderRadius: '50%',
                                                    background: `${col.accent}18`, border: `1px solid ${col.accent}30`,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                }}>
                                                    <ArrowRight size={14} style={{ color: col.accent }} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Bottom CTA within panel */}
                            <div style={{
                                marginTop: 8, padding: '20px 24px',
                                background: `linear-gradient(135deg, ${col.glow}, transparent)`,
                                border: `1px solid ${col.border}`,
                                borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
                            }}>
                                <p style={{ fontSize: 13, color: '#64748B', fontWeight: 500 }}>
                                    Need something completely custom in this domain?
                                </p>
                                <Link href="/contact" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 6,
                                    fontSize: 12, fontWeight: 800, color: col.accent,
                                    fontFamily: 'var(--font-title)',
                                }}>
                                    Let's talk <ArrowRight size={12} />
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Services;
