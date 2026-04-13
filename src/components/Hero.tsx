'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const WORDS = ['Software', 'AI Systems', 'Automation', 'SaaS Platforms', 'Infrastructure', 'Data Systems'];

const Hero = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Typewriter effect
    useEffect(() => {
        const word = WORDS[wordIndex];
        if (!deleting && displayed.length < word.length) {
            timeoutRef.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
        } else if (!deleting && displayed.length === word.length) {
            timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && displayed.length > 0) {
            timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setWordIndex(i => (i + 1) % WORDS.length);
        }
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }, [displayed, deleting, wordIndex]);

    return (
        <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#08090f' }}>

            {/* Noise texture overlay */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
                opacity: 0.4,
            }} />

            {/* Grid background */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
                backgroundImage:
                    'linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px),' +
                    'linear-gradient(to right, rgba(139,92,246,0.05) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
                maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)',
            }} />

            {/* Violet orb top-center */}
            <div style={{
                position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
                width: 1000, height: 700,
                background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
                pointerEvents: 'none', zIndex: 1,
            }} />

            {/* Cyan orb bottom right */}
            <div style={{
                position: 'absolute', bottom: '0%', right: '-5%',
                width: 600, height: 600,
                background: 'radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 70%)',
                pointerEvents: 'none', zIndex: 1,
            }} />

            {/* Gradient fade bottom */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 280, background: 'linear-gradient(to top, #08090f 30%, transparent)', pointerEvents: 'none', zIndex: 2 }} />

            <div className="container-nex" style={{ paddingTop: 140, paddingBottom: 100, position: 'relative', zIndex: 3, width: '100%' }}>

                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}
                >
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '8px 20px', borderRadius: 999,
                        border: '1px solid rgba(139,92,246,0.25)',
                        background: 'rgba(139,92,246,0.06)',
                        backdropFilter: 'blur(8px)',
                    }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B5CF6', animation: 'nex-pulse 2s infinite', display: 'inline-block' }} />
                        <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#A78BFA', textTransform: 'uppercase' }}>
                            Full-Spectrum Technology Company
                        </span>
                    </div>
                </motion.div>

                {/* Main headline */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{ textAlign: 'center', marginBottom: 32 }}
                >
                    <h1 className="font-title" style={{
                        fontSize: 'clamp(48px, 7.5vw, 110px)',
                        fontWeight: 900,
                        lineHeight: 1.0,
                        letterSpacing: '-0.04em',
                        color: 'white',
                        marginBottom: 0,
                    }}>
                        We Build &<br />
                        <span style={{
                            background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 40%, #22D3EE 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Scale
                        </span>{' '}
                        <span style={{ position: 'relative', display: 'inline-block' }}>
                            <span style={{ color: 'white' }}>{displayed}</span>
                            <span style={{
                                display: 'inline-block', width: 3, height: '0.85em',
                                background: '#8B5CF6', marginLeft: 4, verticalAlign: 'middle',
                                animation: 'nex-pulse 0.8s steps(1) infinite',
                            }} />
                        </span>
                    </h1>
                </motion.div>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    style={{
                        fontSize: 'clamp(16px, 2vw, 21px)',
                        color: '#94A3B8',
                        lineHeight: 1.75,
                        maxWidth: 640,
                        margin: '0 auto 48px',
                        textAlign: 'center',
                        fontWeight: 400,
                    }}
                >
                    If it exists in tech — we design it, build it, automate it, and scale it.
                    One team. End-to-end execution. Elite results.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 80 }}
                >
                    <Link href="https://wa.me/971503953988" className="btn-primary" style={{
                        padding: '16px 40px', fontSize: 16, borderRadius: 14,
                        background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                        boxShadow: '0 0 40px rgba(139,92,246,0.3)',
                    }}>
                        Start a Project <ArrowRight size={18} />
                    </Link>
                    <Link href="/services" className="btn-outline" style={{ padding: '16px 40px', fontSize: 16, borderRadius: 14 }}>
                        Explore Services <ArrowUpRight size={16} />
                    </Link>
                </motion.div>

                {/* Stats strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    style={{
                        display: 'flex', justifyContent: 'center', gap: 0,
                        maxWidth: 720, margin: '0 auto',
                        background: 'rgba(14,15,26,0.8)',
                        border: '1px solid rgba(139,92,246,0.15)',
                        borderRadius: 20, overflow: 'hidden',
                        backdropFilter: 'blur(16px)',
                    }}
                >
                    {[
                        { value: '12+', label: 'Tech Domains' },
                        { value: '200+', label: 'Projects Shipped' },
                        { value: '98%', label: 'Client Retention' },
                        { value: '24/7', label: 'Systems Uptime' },
                    ].map((s, i) => (
                        <div key={s.label} style={{
                            flex: 1, padding: '24px 20px', textAlign: 'center',
                            borderRight: i < 3 ? '1px solid rgba(139,92,246,0.1)' : 'none',
                        }}>
                            <div className="font-cyber" style={{
                                fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 900,
                                background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                marginBottom: 4,
                            }}>{s.value}</div>
                            <div style={{ fontSize: 11, color: '#475569', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
