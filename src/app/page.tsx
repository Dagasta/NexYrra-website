'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';

// ─── COUNT-UP HOOK ─────────────────────────────────────────────────────────────
function useCountUp(end: number, duration = 2200) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
            { threshold: 0.5 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const t0 = performance.now();
        const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.round(eased * end));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [started, end, duration]);

    return { count, ref };
}

// ─── COMMITMENT TICKER DATA ────────────────────────────────────────────────────
const TICKER = [
    'No Excuses', 'Ship On Time', 'Built To Scale', 'Own The Outcome',
    'No Average Output', 'Code That Lasts', 'Precision Over Speed',
    'Systems That Work', 'No Half Measures', 'Elite Execution',
];

// ─── METHOD STEPS ─────────────────────────────────────────────────────────────
const METHOD = [
    {
        num: '01', title: 'Discovery',
        desc: 'We map your business, your users, and your competitive landscape — before a single line of code is written.',
        accent: '#8B5CF6',
    },
    {
        num: '02', title: 'Strategy',
        desc: 'We architect a precise roadmap: tech stack, timeline, milestones, and ROI benchmarks. No surprises.',
        accent: '#A78BFA',
    },
    {
        num: '03', title: 'Execution',
        desc: 'Sprints. Daily builds. Full transparency. You\'ll always know what\'s deployed, what\'s next, and what\'s at risk.',
        accent: '#22D3EE',
    },
    {
        num: '04', title: 'Scale',
        desc: 'Launch is the beginning. We monitor, optimize, and evolve your systems as your business grows.',
        accent: '#34D399',
    },
];

// ─── IMPACT NUMBERS ───────────────────────────────────────────────────────────
const NUMBERS = [
    { end: 200, suffix: '+', label: 'Systems Shipped', sub: 'across 12 technology domains' },
    { end: 70, suffix: '%', label: 'Avg Cost Reduction', sub: 'through automation deployments' },
    { end: 98, suffix: '%', label: 'Client Retention', sub: 'speak for themselves' },
    { end: 4, suffix: 'wk', label: 'Avg Time to Ship', sub: 'MVP to production' },
];

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
const CASES = [
    {
        index: '01', tag: 'Automation',
        title: 'E-Commerce brand eliminates 40+ hours of manual work per week.',
        result: '40h/week recovered', accent: '#8B5CF6',
        desc: 'Full order processing, inventory sync, and customer communications automated. Zero human touch required.',
    },
    {
        index: '02', tag: 'Systems',
        title: 'Healthcare clinic deploys 24/7 intelligent booking assistant.',
        result: '300% more bookings', accent: '#22D3EE',
        desc: 'Patient-facing system handles appointments, FAQs, and follow-ups across WhatsApp and web simultaneously.',
    },
    {
        index: '03', tag: 'Product',
        title: 'B2B SaaS platform goes from idea to $50k MRR in 4 months.',
        result: '$50k MRR · 4 months', accent: '#34D399',
        desc: 'Architecture, design, billing, and launch. Delivered on schedule with clear ownership at every step.',
    },
];

// ─── REVEAL VARIANTS ──────────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
    // count-up for each number
    const c0 = useCountUp(NUMBERS[0].end);
    const c1 = useCountUp(NUMBERS[1].end);
    const c2 = useCountUp(NUMBERS[2].end);
    const c3 = useCountUp(NUMBERS[3].end);
    const counts = [c0, c1, c2, c3];

    return (
        <main style={{ background: '#07080e', color: 'white', position: 'relative', overflowX: 'hidden' }}>
            <Navbar />
            <Hero />

            {/* ─── COMMITMENT TICKER ──────────────────────────────── */}
            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.04)',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                padding: '16px 0', overflow: 'hidden', background: '#050609',
                position: 'relative',
            }}>
                <div style={{
                    display: 'flex', gap: 48, width: 'max-content',
                    animation: 'marquee-rtl 40s linear infinite',
                }}>
                    {[...TICKER, ...TICKER].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
                            <span className="font-cyber" style={{
                                fontSize: 10, fontWeight: 700,
                                letterSpacing: '0.2em', textTransform: 'uppercase',
                                color: i % 2 === 0 ? '#8B5CF6' : '#334155',
                                whiteSpace: 'nowrap',
                            }}>
                                {item}
                            </span>
                            <span style={{
                                width: 3, height: 3, borderRadius: '50%',
                                background: '#8B5CF6', opacity: 0.35, flexShrink: 0,
                            }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── CAPABILITIES ─────────────────────────────────── */}
            <Services />

            {/* ─── THE METHOD ───────────────────────────────────── */}
            <section style={{ padding: '140px 0', background: '#050609', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: 'linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.03) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }} />

                {/* Decorative number */}
                <div className="section-numeral" style={{
                    position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
                    fontSize: 'clamp(160px, 22vw, 340px)', color: 'rgba(255,255,255,0.015)',
                    userSelect: 'none', pointerEvents: 'none',
                }}>02</div>

                <div className="container-nex" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                        style={{ marginBottom: 80 }}>
                        <div className="section-line">
                            <span className="font-cyber" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#22D3EE' }}>
                                The Nexyrra Method
                            </span>
                        </div>
                        <h2 className="font-title" style={{ fontSize: 'clamp(36px, 5vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em', maxWidth: 700 }}>
                            Four Phases.<br />No Shortcuts.<br />
                            <span style={{ color: '#22D3EE' }}>Repeatable.</span>
                        </h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 1 }}>
                        {METHOD.map((step, i) => (
                            <motion.div key={step.num}
                                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    padding: '44px 36px',
                                    background: 'rgba(255,255,255,0.016)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    borderRadius: i === 0 ? '16px 0 0 16px' : i === 3 ? '0 16px 16px 0' : '0',
                                    position: 'relative', overflow: 'hidden', transition: 'background 0.3s',
                                }}
                                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.028)')}
                                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.016)')}
                            >
                                {/* top accent line */}
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }} />

                                <div className="font-cyber" style={{
                                    fontSize: 'clamp(52px, 7vw, 80px)', fontWeight: 900,
                                    color: step.accent, opacity: 0.12, lineHeight: 1, marginBottom: 20,
                                }}>{step.num}</div>

                                <h3 className="font-title" style={{ fontSize: 22, fontWeight: 800, marginBottom: 14, color: 'white' }}>{step.title}</h3>
                                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.85, fontWeight: 400 }}>{step.desc}</p>

                                {i < 3 && (
                                    <ChevronRight size={16} style={{
                                        position: 'absolute', right: -8, top: '50%',
                                        transform: 'translateY(-50%)', color: step.accent,
                                        zIndex: 10, filter: `drop-shadow(0 0 6px ${step.accent})`,
                                    }} />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── THE NUMBERS ──────────────────────────────────── */}
            <section style={{ padding: '140px 0', background: '#07080e', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                    width: 1000, height: 500, pointerEvents: 'none',
                    background: 'radial-gradient(ellipse at top, rgba(139,92,246,0.08) 0%, transparent 70%)',
                }} />

                {/* Decorative number */}
                <div className="section-numeral" style={{
                    position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)',
                    fontSize: 'clamp(160px, 22vw, 340px)', color: 'rgba(255,255,255,0.015)',
                }}>03</div>

                <div className="container-nex" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                        style={{ marginBottom: 80, textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
                            <div style={{ width: 40, height: 1, background: '#8B5CF6' }} />
                            <span className="font-cyber" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#8B5CF6' }}>
                                The Output
                            </span>
                            <div style={{ width: 40, height: 1, background: '#8B5CF6' }} />
                        </div>
                        <h2 className="font-title" style={{ fontSize: 'clamp(36px, 5vw, 76px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.04em' }}>
                            Results are the only<br />
                            <span style={{
                                background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>metric that matters.</span>
                        </h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 20 }}>
                        {NUMBERS.map((item, i) => {
                            const { count, ref } = counts[i];
                            return (
                                <motion.div key={item.label}
                                    ref={ref as React.Ref<HTMLDivElement>}
                                    initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.09, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    style={{
                                        padding: '40px 32px', borderRadius: 20, textAlign: 'center',
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid rgba(255,255,255,0.06)',
                                        transition: 'border-color 0.3s, transform 0.3s',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.3)';
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div className="font-cyber" style={{
                                        fontSize: 'clamp(48px, 6vw, 76px)', fontWeight: 900,
                                        background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                        lineHeight: 1, marginBottom: 12,
                                    }}>
                                        {count}{item.suffix}
                                    </div>
                                    <div className="font-title" style={{ fontSize: 17, fontWeight: 800, color: 'white', marginBottom: 8 }}>
                                        {item.label}
                                    </div>
                                    <p style={{ fontSize: 12, color: '#334155', fontWeight: 500 }}>{item.sub}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── FIELD REPORTS (CASES) ────────────────────────── */}
            <section style={{ padding: '140px 0', background: '#050609', position: 'relative', overflow: 'hidden' }}>

                <div className="container-nex">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 72, flexWrap: 'wrap', gap: 24 }}>
                        <div>
                            <div className="section-line">
                                <span className="font-cyber" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#34D399' }}>
                                    Field Reports
                                </span>
                            </div>
                            <h2 className="font-title" style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
                                Proof,<br />Not Promises.
                            </h2>
                        </div>
                        <Link href="/cases" className="btn-outline" style={{ padding: '12px 28px', fontSize: 13, borderRadius: 10 }}>
                            All case studies <ArrowUpRight size={14} />
                        </Link>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {CASES.map((c, i) => (
                            <motion.div key={c.index}
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: 40,
                                        padding: '36px 32px',
                                        borderTop: '1px solid rgba(255,255,255,0.05)',
                                        transition: 'all 0.28s ease',
                                        borderRadius: 12, cursor: 'pointer',
                                        flexWrap: 'wrap',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.background = 'rgba(255,255,255,0.025)';
                                        el.style.paddingLeft = '44px';
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.background = 'transparent';
                                        el.style.paddingLeft = '32px';
                                    }}
                                >
                                    {/* Index */}
                                    <span className="font-cyber" style={{ fontSize: 12, color: '#334155', fontWeight: 700, flexShrink: 0, width: 28 }}>
                                        {c.index}
                                    </span>

                                    {/* Tag */}
                                    <span style={{
                                        display: 'inline-block', padding: '4px 14px',
                                        borderRadius: 999, border: `1px solid ${c.accent}44`,
                                        color: c.accent, background: `${c.accent}0f`,
                                        fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                                        letterSpacing: '0.15em', flexShrink: 0,
                                    }} className="font-cyber">
                                        {c.tag}
                                    </span>

                                    {/* Title */}
                                    <p className="font-title" style={{
                                        flex: 1, fontSize: 'clamp(15px, 1.8vw, 20px)',
                                        fontWeight: 800, color: 'white', lineHeight: 1.3,
                                        minWidth: 200,
                                    }}>
                                        {c.title}
                                    </p>

                                    {/* Result */}
                                    <span style={{
                                        fontSize: 13, fontWeight: 800, color: c.accent,
                                        flexShrink: 0, whiteSpace: 'nowrap',
                                    }}>
                                        {c.result}
                                    </span>

                                    <ArrowRight size={16} style={{ color: '#334155', flexShrink: 0, transition: 'color 0.2s' }} />
                                </div>
                            </motion.div>
                        ))}
                        {/* Final divider */}
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />
                    </div>
                </div>
            </section>

            {/* ─── THE STANDARD (MANIFESTO — UNIQUE) ───────────── */}
            <section style={{ padding: '160px 0', background: '#07080e', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.07) 0%, transparent 70%)',
                }} />
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: 'linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.03) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }} />

                <div className="container-nex" style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
                        <div className="section-line" style={{ marginBottom: 40 }}>
                            <span className="font-cyber" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#8B5CF6' }}>
                                The Standard
                            </span>
                        </div>

                        <div className="font-title" style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.3, letterSpacing: '-0.03em', color: 'white' }}>
                            <span style={{ color: '#334155' }}>Most companies</span> talk about innovation.<br />
                            We <span style={{
                                background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>engineer</span> it.
                        </div>

                        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2px 40px' }}>
                            {[
                                'You don\'t come to Nexyrra because you need a vendor.',
                                'You come because you need a partner who builds like they own the outcome.',
                                'We hold that standard on every engagement, for every client, without exception.',
                            ].map((line, i) => (
                                <motion.p key={i}
                                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ fontSize: 16, color: '#475569', lineHeight: 1.85, fontWeight: 400, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                    {line}
                                </motion.p>
                            ))}
                        </div>

                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.7 }}
                            style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                            <Link href="/about" className="btn-outline" style={{ padding: '14px 32px', borderRadius: 12, fontSize: 14 }}>
                                About Nexyrra <ArrowUpRight size={14} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── FINAL CTA ────────────────────────────────────── */}
            <section style={{ padding: '160px 0', background: '#050609', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: 'radial-gradient(ellipse 75% 60% at 50% 60%, rgba(139,92,246,0.11) 0%, transparent 70%)',
                }} />
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: 'linear-gradient(rgba(139,92,246,0.035) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.035) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }} />

                {/* Decorative large text behind */}
                <div style={{
                    position: 'absolute', bottom: '-5%', left: '50%', transform: 'translateX(-50%)',
                    fontSize: 'clamp(120px, 18vw, 280px)',
                    fontFamily: 'var(--font-cyber)', fontWeight: 900,
                    color: 'rgba(139,92,246,0.04)', whiteSpace: 'nowrap',
                    userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em',
                }}>NEXYRRA</div>

                <div className="container-nex" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                        <span className="font-cyber" style={{
                            fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', color: '#8B5CF6',
                            textTransform: 'uppercase', display: 'block', marginBottom: 32,
                        }}>
                            Ready to build something serious?
                        </span>

                        <h2 className="font-title" style={{
                            fontSize: 'clamp(56px, 9vw, 140px)',
                            fontWeight: 900, lineHeight: 0.94, letterSpacing: '-0.05em', marginBottom: 40,
                        }}>
                            <span style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 100%)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                display: 'block',
                            }}>Let's Build</span>
                            <span style={{
                                background: 'linear-gradient(135deg, #8B5CF6 20%, #A78BFA 55%, #22D3EE 100%)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                display: 'block',
                            }}>the Future.</span>
                        </h2>

                        <p style={{ fontSize: 18, color: '#475569', marginBottom: 52, maxWidth: 460, margin: '0 auto 52px', lineHeight: 1.8 }}>
                            One conversation is all it takes. No commitments, no jargon.
                            Just clarity on what's possible and how fast we can get there.
                        </p>

                        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
                            <Link href="https://wa.me/971503953988" className="btn-primary" style={{
                                padding: '20px 56px', fontSize: 16, borderRadius: 14,
                                boxShadow: '0 0 70px rgba(139,92,246,0.35)',
                            }}>
                                Start a Project <ArrowRight size={18} />
                            </Link>
                            <Link href="/contact" className="btn-outline" style={{ padding: '20px 48px', fontSize: 16, borderRadius: 14 }}>
                                Book a Discovery Call
                            </Link>
                        </div>

                        <p style={{ color: '#1E293B', fontSize: 13 }}>
                            +971 50 395 3988 · nexyrra.com · Dubai, UAE
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
