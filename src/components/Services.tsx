'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { services, serviceGroups } from '../lib/services-data';

const groupColorMap: Record<string, { accent: string; glow: string; border: string }> = {
    BUILD: { accent: '#8B5CF6', glow: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.25)' },
    AUTOMATE: { accent: '#22D3EE', glow: 'rgba(34,211,238,0.12)', border: 'rgba(34,211,238,0.25)' },
    SCALE: { accent: '#A78BFA', glow: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.25)' },
    SECURE: { accent: '#34D399', glow: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.25)' },
};

const Services = () => {
    const [activeGroup, setActiveGroup] = useState('BUILD');
    const filtered = services.filter(s => s.group === activeGroup);
    const col = groupColorMap[activeGroup];
    const groupMeta = serviceGroups.find(g => g.id === activeGroup)!;

    return (
        <section id="services" style={{ padding: '120px 0 140px', background: '#08090f', position: 'relative', overflow: 'hidden' }}>

            {/* Background glows */}
            <div style={{ position: 'absolute', top: '20%', right: '-10%', width: 700, height: 700, background: `radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '5%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(ellipse, rgba(34,211,238,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div className="container-nex">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64, textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 32, height: 2, background: '#8B5CF6', borderRadius: 2 }} />
                        <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#8B5CF6' }}>
                            What We Do
                        </span>
                        <div style={{ width: 32, height: 2, background: '#8B5CF6', borderRadius: 2 }} />
                    </div>
                    <h2 className="font-title" style={{ fontSize: 'clamp(38px, 5vw, 72px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20, letterSpacing: '-0.03em' }}>
                        Masters of{' '}
                        <span style={{ background: 'linear-gradient(90deg, #8B5CF6 0%, #22D3EE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Systems & Execution
                        </span>
                    </h2>
                    <p style={{ fontSize: 18, color: '#64748B', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontWeight: 400 }}>
                        Twelve domains of technology expertise. One unified team.
                        Every engagement delivers enterprise-grade output.
                    </p>
                </motion.div>

                {/* Group Tabs */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
                    {serviceGroups.map(g => {
                        const c = groupColorMap[g.id];
                        const isActive = activeGroup === g.id;
                        return (
                            <button key={g.id} onClick={() => setActiveGroup(g.id)} style={{
                                padding: '10px 28px', borderRadius: 10, border: `1px solid ${isActive ? c.border : 'rgba(255,255,255,0.08)'}`,
                                background: isActive ? c.glow : 'transparent',
                                color: isActive ? c.accent : '#64748B',
                                fontSize: 14, fontWeight: 700, cursor: 'pointer',
                                fontFamily: 'var(--font-title)',
                                transition: 'all 0.25s',
                                boxShadow: isActive ? `0 0 24px ${c.glow}` : 'none',
                            }}>
                                {g.label}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Group headline */}
                <AnimatePresence mode="wait">
                    <motion.div key={activeGroup}
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3 }}
                        style={{ textAlign: 'center', marginBottom: 48 }}>
                        <p style={{ fontSize: 16, color: col.accent, fontWeight: 700, marginBottom: 6 }}>{groupMeta.tagline}</p>
                        <p style={{ fontSize: 14, color: '#475569', maxWidth: 480, margin: '0 auto' }}>{groupMeta.description}</p>
                    </motion.div>
                </AnimatePresence>

                {/* Service Cards */}
                <AnimatePresence mode="wait">
                    <motion.div key={activeGroup + 'cards'}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20, marginBottom: 80 }}>
                        {filtered.map((service, i) => (
                            <motion.div key={service.slug}
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}>
                                <Link href={`/services/${service.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                                    <div style={{
                                        height: '100%', padding: 32, borderRadius: 20, cursor: 'pointer',
                                        background: 'linear-gradient(135deg, #0d0e1c 0%, #0a0b17 100%)',
                                        border: `1px solid rgba(255,255,255,0.07)`,
                                        transition: 'all 0.35s',
                                        display: 'flex', flexDirection: 'column',
                                        position: 'relative', overflow: 'hidden',
                                    }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLElement).style.border = `1px solid ${col.border}`;
                                            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px ${col.glow}`;
                                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.07)';
                                            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                        }}>

                                        {/* Top gradient bar */}
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${col.accent}, transparent)`, opacity: 0.5 }} />

                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
                                            <div style={{
                                                width: 52, height: 52, flexShrink: 0, borderRadius: 14,
                                                background: col.glow,
                                                border: `1px solid ${col.border}`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                                            }}>
                                                {service.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-title" style={{ fontSize: 17, fontWeight: 800, color: 'white', lineHeight: 1.3, marginBottom: 4 }}>{service.title}</h3>
                                                <span className="font-cyber" style={{ fontSize: 10, color: col.accent, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{service.tagline}</span>
                                            </div>
                                        </div>

                                        <p style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.8, marginBottom: 24, flex: 1, fontWeight: 400 }}>
                                            {service.description}
                                        </p>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 24 }}>
                                            {service.features.map(f => (
                                                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                    <CheckCircle size={12} style={{ color: col.accent, flexShrink: 0 }} />
                                                    <span style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600 }}>{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                            <span style={{ fontSize: 11, fontWeight: 700, color: col.accent, fontFamily: 'var(--font-cyber)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                                Explore
                                            </span>
                                            <ArrowRight size={14} style={{ color: col.accent }} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom CTA Banner */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(34,211,238,0.05) 100%)',
                        border: '1px solid rgba(139,92,246,0.2)',
                        borderRadius: 24, padding: 'clamp(32px, 5vw, 56px) clamp(24px, 5vw, 72px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap',
                        position: 'relative', overflow: 'hidden',
                    }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 300, background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ position: 'relative' }}>
                        <h3 className="font-title" style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 900, marginBottom: 10 }}>
                            Don't see exactly what you need?
                        </h3>
                        <p style={{ color: '#64748B', fontSize: 15, fontWeight: 400, maxWidth: 500 }}>
                            We build bespoke technology solutions. If it exists in tech, we can architect and deliver it.
                        </p>
                    </div>
                    <Link href="/contact" className="btn-primary" style={{ padding: '18px 44px', fontSize: 15, borderRadius: 14, whiteSpace: 'nowrap', position: 'relative', flexShrink: 0 }}>
                        Request a Consultation <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
