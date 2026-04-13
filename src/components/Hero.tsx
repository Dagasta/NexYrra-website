'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const revealer = {
    hidden: { opacity: 0, y: 56, filter: 'blur(8px)' },
    show: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
};

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 28, damping: 16 });
    const springY = useSpring(mouseY, { stiffness: 28, damping: 16 });

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 100);
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 70);
        };
        window.addEventListener('mousemove', handler, { passive: true });
        return () => window.removeEventListener('mousemove', handler);
    }, [mouseX, mouseY]);

    return (
        <section style={{
            position: 'relative', minHeight: '100vh',
            display: 'flex', alignItems: 'center',
            overflow: 'hidden', background: '#07080e',
        }}>
            {/* Fine grid */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
                backgroundImage:
                    'linear-gradient(rgba(139,92,246,0.045) 1px, transparent 1px),' +
                    'linear-gradient(to right, rgba(139,92,246,0.045) 1px, transparent 1px)',
                backgroundSize: '90px 90px',
                maskImage: 'radial-gradient(ellipse 80% 90% at 50% 40%, black, transparent)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 90% at 50% 40%, black, transparent)',
            }} />

            {/* Mouse parallax orb */}
            <motion.div style={{
                position: 'absolute', zIndex: 0, pointerEvents: 'none',
                width: 1100, height: 1100, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(139,92,246,0.03) 45%, transparent 70%)',
                top: '50%', left: '50%', marginTop: -550, marginLeft: -550,
                x: springX, y: springY,
            }} />

            {/* Cyan accent top-right */}
            <div style={{
                position: 'absolute', top: '-8%', right: '-8%', zIndex: 0, pointerEvents: 'none',
                width: 550, height: 550, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)',
            }} />

            {/* violet accent bottom-left */}
            <div style={{
                position: 'absolute', bottom: '5%', left: '-5%', zIndex: 0, pointerEvents: 'none',
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
            }} />

            {/* Bottom fade */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 360, zIndex: 1,
                background: 'linear-gradient(to top, #07080e 25%, transparent)',
                pointerEvents: 'none',
            }} />

            <div className="container-nex" style={{ paddingTop: 160, paddingBottom: 120, position: 'relative', zIndex: 2 }}>
                <motion.div variants={stagger} initial="hidden" animate="show">

                    {/* Eyebrow */}
                    <motion.div variants={revealer} style={{ marginBottom: 52 }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            padding: '8px 20px', borderRadius: 999,
                            border: '1px solid rgba(139,92,246,0.2)',
                            background: 'rgba(139,92,246,0.05)',
                        }}>
                            <span style={{
                                width: 6, height: 6, borderRadius: '50%', background: '#8B5CF6',
                                display: 'inline-block', animation: 'nex-pulse 2s infinite',
                            }} />
                            <span className="font-cyber" style={{
                                fontSize: 10, fontWeight: 700, letterSpacing: '0.25em',
                                color: '#A78BFA', textTransform: 'uppercase',
                            }}>
                                System Architects · Est. 2024 · Dubai, UAE
                            </span>
                        </div>
                    </motion.div>

                    {/* Massive headline */}
                    <motion.h1 variants={revealer} className="font-title" style={{
                        fontSize: 'clamp(58px, 9.5vw, 144px)',
                        fontWeight: 900, lineHeight: 0.94,
                        letterSpacing: '-0.047em', marginBottom: 40,
                    }}>
                        <span style={{ display: 'block', color: 'white' }}>We Build</span>
                        <span style={{ display: 'block', color: 'white' }}>What Others</span>
                        <span style={{
                            display: 'block',
                            background: 'linear-gradient(135deg, #8B5CF6 10%, #A78BFA 50%, #22D3EE 90%)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        }}>
                            Only Pitch.
                        </span>
                    </motion.h1>

                    {/* Subline */}
                    <motion.p variants={revealer} style={{
                        fontSize: 'clamp(16px, 1.7vw, 21px)',
                        color: '#64748B', lineHeight: 1.8,
                        maxWidth: 540, marginBottom: 52, fontWeight: 400,
                    }}>
                        Full-stack technology execution — from product strategy to infrastructure.
                        We design it, engineer it, ship it, and own the outcome.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={revealer} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 96 }}>
                        <Link href="https://wa.me/971503953988" className="btn-primary" style={{
                            padding: '16px 44px', fontSize: 15, borderRadius: 12,
                            boxShadow: '0 0 48px rgba(139,92,246,0.28)',
                        }}>
                            Start a Project <ArrowRight size={16} />
                        </Link>
                        <Link href="#capabilities" className="btn-outline" style={{
                            padding: '16px 36px', fontSize: 15, borderRadius: 12,
                        }}>
                            Our Capabilities <ArrowUpRight size={15} />
                        </Link>
                    </motion.div>

                    {/* Stats strip */}
                    <motion.div variants={revealer} style={{
                        display: 'flex', maxWidth: 660,
                        background: 'rgba(255,255,255,0.018)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 16, overflow: 'hidden',
                        backdropFilter: 'blur(20px)',
                    }}>
                        {[
                            { value: '12+', label: 'Tech Domains' },
                            { value: '200+', label: 'Systems Shipped' },
                            { value: '98%', label: 'Client Retention' },
                            { value: '24/7', label: 'Always Running' },
                        ].map((s, i) => (
                            <div key={s.label} style={{
                                flex: 1, padding: '22px 16px', textAlign: 'center',
                                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                            }}>
                                <div className="font-cyber" style={{
                                    fontSize: 'clamp(18px, 2.2vw, 28px)', fontWeight: 900,
                                    background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                    marginBottom: 5, lineHeight: 1,
                                }}>{s.value}</div>
                                <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#334155' }}>{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
