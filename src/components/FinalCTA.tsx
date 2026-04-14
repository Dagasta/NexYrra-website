'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

/* ── PARTICLE BURST ──────────────────────────────── */
function ParticleBurst({ x, y, active }: { x: number; y: number; active: boolean }) {
    if (!active) return null;
    const PARTICLES = Array.from({ length: 20 }, (_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const dist = 60 + Math.random() * 80;
        return { dx: Math.cos(angle) * dist, dy: Math.sin(angle) * dist, s: Math.random() * 4 + 2, c: ['#8A2BE2', '#00FFFF', '#4D9FFF', '#a855f7'][Math.floor(Math.random() * 4)] };
    });

    return (
        <div style={{ position: 'fixed', left: x, top: y, pointerEvents: 'none', zIndex: 9999 }}>
            {PARTICLES.map((p, i) => (
                <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{ x: p.dx, y: p.dy, opacity: 0, scale: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.01 }}
                    style={{ position: 'absolute', width: p.s, height: p.s, borderRadius: '50%', background: p.c, boxShadow: `0 0 6px ${p.c}` }}
                />
            ))}
        </div>
    );
}

export default function FinalCTA() {
    const [burst, setBurst] = useState<{ x: number; y: number; id: number } | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const mX = useMotionValue(0.5);
    const mY = useMotionValue(0.5);
    const sX = useSpring(mX, { stiffness: 40, damping: 20 });
    const sY = useSpring(mY, { stiffness: 40, damping: 20 });
    const glowX = useTransform(sX, [0, 1], ['-30%', '30%']);
    const glowY = useTransform(sY, [0, 1], ['-20%', '20%']);

    const handleMouse = useCallback((e: React.MouseEvent) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        mX.set((e.clientX - rect.left) / rect.width);
        mY.set((e.clientY - rect.top) / rect.height);
    }, [mX, mY]);

    const fireBurst = (e: React.MouseEvent) => {
        setBurst({ x: e.clientX, y: e.clientY, id: Date.now() });
        setTimeout(() => setBurst(null), 800);
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouse}
            style={{ position: 'relative', padding: 'clamp(100px,14vw,200px) 0', overflow: 'hidden', textAlign: 'center' }}
        >
            {/* Animated glow that follows mouse */}
            <motion.div
                style={{ position: 'absolute', top: '50%', left: '50%', x: glowX, y: glowY, width: 700, height: 700, background: 'radial-gradient(circle, rgba(138,43,226,0.18) 0%, transparent 65%)', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}
            />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(0,255,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

            {/* Grid + scanlines */}
            <div className="grid-overlay" />
            <div className="scanline-overlay" />

            {/* Top border glow */}
            <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: 'linear-gradient(90deg, transparent, #8A2BE2, #00FFFF, #8A2BE2, transparent)', opacity: 0.4 }} />

            <div className="container-os" style={{ position: 'relative', zIndex: 5 }}>
                {/* Label */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 32 }}>
                    <span className="mono" style={{ fontSize: 10, color: 'rgba(0,255,255,0.5)', letterSpacing: '0.3em' }}>
                        NEXYRRA // INITIALIZE_PROJECT
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                    style={{ fontSize: 'clamp(40px,8vw,120px)', fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: 40 }}
                >
                    Ready to Build
                    <br />
                    <span className="gradient-purple-cyan glow-purple">the Future?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{ fontSize: 'clamp(15px,1.8vw,20px)', color: 'var(--text-dim)', maxWidth: 500, margin: '0 auto 56px', lineHeight: 1.7, fontWeight: 300 }}
                >
                    Join 500+ businesses already deploying AI with Nexyrra. Let's architect your competitive edge.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <Link href="/contact" style={{ textDecoration: 'none' }} onClick={fireBurst}>
                        <button
                            className="btn-os-primary"
                            style={{ fontSize: 13, padding: '18px 44px', borderRadius: 5 }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(138,43,226,0.6), 0 0 100px rgba(138,43,226,0.2)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = '';
                            }}
                        >
                            START PROJECT <ArrowRight size={16} />
                        </button>
                    </Link>
                    <Link href="https://wa.me/971503953988" style={{ textDecoration: 'none' }} onClick={fireBurst}>
                        <button
                            className="btn-os-outline"
                            style={{ fontSize: 13, padding: '18px 44px', borderRadius: 5 }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(0,255,255,0.3)';
                                (e.currentTarget as HTMLElement).style.borderColor = 'var(--neon-cyan)';
                                (e.currentTarget as HTMLElement).style.color = 'var(--neon-cyan)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = '';
                                (e.currentTarget as HTMLElement).style.borderColor = '';
                                (e.currentTarget as HTMLElement).style.color = '';
                            }}
                        >
                            <MessageSquare size={15} /> TALK TO AI CONSULTANT
                        </button>
                    </Link>
                </motion.div>

                {/* Trust line */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: 0.7 }} 
                    style={{ marginTop: 48, display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}
                >
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                        <span className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'white'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}>
                            Dubai, UAE 🇦🇪
                        </span>
                    </Link>
                    <a href="tel:+971503953988" style={{ textDecoration: 'none' }}>
                        <span className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'white'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}>
                            +971 50 395 3988
                        </span>
                    </a>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <span className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'white'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}>
                            nexyrra.com
                        </span>
                    </Link>
                </motion.div>
            </div>

            {/* Particle burst */}
            {burst && <ParticleBurst x={burst.x} y={burst.y} active key={burst.id} />}
        </section>
    );
}
