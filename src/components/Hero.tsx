'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Globe } from 'lucide-react';
import { NexyrraLogo } from './Logo';

const Hero = () => {
    return (
        <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 80 }}>

            {/* Background */}
            <div style={{ position: 'absolute', inset: 0, background: '#08090f' }} />

            {/* Purple glow top-center */}
            <div style={{ position: 'absolute', top: '-5%', left: '50%', transform: 'translateX(-50%)', width: 900, height: 600, background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

            {/* Cyan glow bottom right */}
            <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(ellipse, rgba(34,211,238,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

            {/* Grid */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage:
                    'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),' +
                    'linear-gradient(to right, rgba(139,92,246,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />

            {/* Gradient fade bottom */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to top, #08090f, transparent)', pointerEvents: 'none' }} />

            <div className="container-nex" style={{ paddingTop: 80, paddingBottom: 80, position: 'relative', zIndex: 1 }}>
                <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

                    {/* Left - Content */}
                    <motion.div className="text-center-mobile" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
                        {/* Badges */}
                        <div className="center-mobile" style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
                            {['AI Agency', 'UAE Licensed'].map(b => (
                                <span key={b} style={{ padding: '6px 16px', borderRadius: 999, border: '1px solid rgba(139,92,246,0.3)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B5CF6', background: 'rgba(139,92,246,0.08)' }} className="font-cyber">
                                    {b}
                                </span>
                            ))}
                        </div>

                        <h1 className="font-title" style={{ fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 24 }}>
                            <span style={{ color: 'white' }}>Empowering</span><br />
                            <span style={{ color: 'white' }}>Future</span><br />
                            <span style={{ background: 'linear-gradient(90deg, #8B5CF6, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block' }}>
                                with AI
                            </span>
                        </h1>

                        <p className="center-mobile" style={{ fontSize: 18, color: '#94A3B8', lineHeight: 1.8, marginBottom: 40, maxWidth: 500, fontWeight: 400 }}>
                            Nexyrra architects autonomous AI ecosystems for enterprise leaders — from intelligent automation to custom AI solutions that deliver measurable ROI.
                        </p>

                        <div className="center-mobile" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
                            <Link href="#services" className="btn-primary" style={{ fontSize: 16, padding: '16px 40px', borderRadius: 14 }}>
                                Grow Your Business <ArrowRight size={18} />
                            </Link>
                            <Link href="/signals" className="btn-outline" style={{ fontSize: 16, padding: '16px 40px', borderRadius: 14 }}>
                                Nexyrra Signals <Zap size={18} style={{ color: '#8B5CF6' }} />
                            </Link>
                        </div>

                        {/* Trust Signals */}
                        <div className="center-mobile" style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                            {[
                                { icon: ShieldCheck, label: 'Enterprise Grade' },
                                { icon: Globe, label: 'UAE Licensed' },
                                { icon: Zap, label: 'AI-First' },
                            ].map(({ icon: Icon, label }) => (
                                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748B', fontSize: 13, fontWeight: 600 }}>
                                    <Icon size={14} style={{ color: '#8B5CF6' }} />
                                    {label}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Visual (Hidden on small mobile if needed, or scaled) */}
                    <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

                        {/* Spinning rings */}
                        <div className="center-mobile" style={{ position: 'relative', width: 'min(420px, 90vw)', height: 'min(420px, 90vw)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(139,92,246,0.12)', borderRadius: '50%', animation: 'nex-spin 25s linear infinite' }} />
                            <div style={{ position: 'absolute', inset: 40, border: '1px solid rgba(34,211,238,0.08)', borderRadius: '50%', animation: 'nex-spin 18s linear infinite reverse' }} />
                            <div style={{ position: 'absolute', inset: 80, border: '1px solid rgba(139,92,246,0.12)', borderRadius: '50%', animation: 'nex-spin 12s linear infinite' }} />

                            {/* Center Logo Group (Frameless) */}
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
                                className="anim-glow">
                                <div style={{ marginBottom: 16 }}>
                                    <NexyrraLogo size={80} />
                                </div>
                                <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#8B5CF6', textTransform: 'uppercase' }}>Nexyrra</span>
                                <span style={{ fontSize: 10, color: '#475569', marginTop: 4, fontWeight: 600 }}>AI Intelligence</span>
                            </div>

                            {/* Floating chips (Calculated on client to prevent hydration mismatch) */}
                            {(() => {
                                const chips = [
                                    { label: 'AI Agents', angle: 340, color: '#8B5CF6' },
                                    { label: 'Automation', angle: 100, color: '#22D3EE' },
                                    { label: 'Analytics', angle: 220, color: '#A78BFA' },
                                ];
                                return chips.map(({ label, angle, color }) => {
                                    const rad = (angle * Math.PI) / 180;
                                    const r = 175;
                                    const x = Math.cos(rad) * r;
                                    const y = Math.sin(rad) * r;
                                    return (
                                        <div key={label} style={{
                                            position: 'absolute',
                                            left: `calc(50% + ${x}px - 52px)`,
                                            top: `calc(50% + ${y}px - 16px)`,
                                            padding: '6px 14px',
                                            background: '#13152a',
                                            border: `1px solid ${color}33`,
                                            borderRadius: 999,
                                            fontSize: 11,
                                            fontWeight: 700,
                                            color,
                                            whiteSpace: 'nowrap',
                                        }} className="font-cyber"
                                            suppressHydrationWarning>
                                            {label}
                                        </div>
                                    );
                                });
                            })()}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
