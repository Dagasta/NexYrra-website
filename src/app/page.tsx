'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Check, Zap, TrendingUp, Shield, Clock } from 'lucide-react';

// ─── MARQUEE DATA ─────────────────────────────────────────────────────────────
const MARQUEE_ITEMS = [
    'Custom Software', 'AI Agents', 'Workflow Automation', 'SaaS Platforms',
    'Cloud DevOps', 'Data Analytics', 'Cybersecurity', 'API Integrations',
    'Web & Mobile Apps', 'CRM Systems', 'Digital Transformation', 'UI/UX Design',
];

// ─── PROCESS STEPS ────────────────────────────────────────────────────────────
const PROCESS = [
    {
        num: '01',
        title: 'Discovery',
        desc: 'We immerse ourselves in your business — understanding your goals, workflows, pain points, and competitive landscape.',
        color: '#8B5CF6',
    },
    {
        num: '02',
        title: 'Strategy',
        desc: 'We craft a precise technology roadmap with clear deliverables, timelines, and ROI projections before writing a single line of code.',
        color: '#A78BFA',
    },
    {
        num: '03',
        title: 'Build',
        desc: 'Our engineers execute with precision. Agile sprints, daily updates, rigorous QA — you always know where your project stands.',
        color: '#22D3EE',
    },
    {
        num: '04',
        title: 'Scale',
        desc: 'We don\'t disappear at launch. We monitor, optimize, and iterate — ensuring your systems grow as fast as your business does.',
        color: '#34D399',
    },
];

// ─── IMPACT METRICS ───────────────────────────────────────────────────────────
const IMPACTS = [
    { icon: TrendingUp, value: '10x', label: 'Faster Operations', desc: 'Businesses reduce process time by an average of 10x after automation deployment.' },
    { icon: Zap, value: '70%', label: 'Cost Reduction', desc: 'AI agents handling repetitive work cut operational costs by 50–70% on average.' },
    { icon: Clock, value: '24/7', label: 'Always On', desc: 'Automated systems and AI agents work around the clock — zero downtime, zero sick days.' },
    { icon: Shield, value: '98%', label: 'Client Retention', desc: 'Our clients don\'t leave because the results compound. That\'s the Nexyrra standard.' },
];

// ─── CASE STUDIES (placeholder data) ─────────────────────────────────────────
const CASES = [
    {
        tag: 'Automation',
        title: 'E-Commerce Brand Eliminates 40 Hours/Week of Manual Work',
        result: '40h/week saved',
        color: '#8B5CF6',
        desc: 'Full order processing, inventory sync, and customer comms automated — zero human touch required.',
    },
    {
        tag: 'AI Systems',
        title: 'Healthcare Clinic Deploys 24/7 AI Patient Assistant',
        result: '300% more bookings',
        color: '#22D3EE',
        desc: 'AI agent handles appointment booking, FAQs, and follow-ups across WhatsApp and web simultaneously.',
    },
    {
        tag: 'SaaS Build',
        title: 'B2B Platform Goes from Idea to $50k MRR in 4 Months',
        result: '$50k MRR in 4 months',
        color: '#34D399',
        desc: 'End-to-end SaaS development: architecture, UI, billing, and launch — delivered on schedule.',
    },
];

export default function Home() {
    return (
        <main style={{ background: '#08090f', minHeight: '100vh', color: 'white', position: 'relative' }}>
            <Navbar />
            <Hero />

            {/* ─── MARQUEE ──────────────────────────────────────────────── */}
            <div style={{ borderTop: '1px solid rgba(139,92,246,0.1)', borderBottom: '1px solid rgba(139,92,246,0.1)', padding: '18px 0', overflow: 'hidden', position: 'relative', background: 'rgba(13,14,28,0.6)' }}>
                <div style={{
                    display: 'flex', gap: 40, width: 'max-content',
                    animation: 'marquee 35s linear infinite',
                }}>
                    {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, whiteSpace: 'nowrap', flexShrink: 0 }}>
                            <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#334155' }}>
                                {item}
                            </span>
                            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#8B5CF6', opacity: 0.5, display: 'inline-block' }} />
                        </div>
                    ))}
                </div>
                <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
            </div>

            {/* ─── SERVICES ─────────────────────────────────────────────── */}
            <Services />

            {/* ─── HOW WE WORK ──────────────────────────────────────────── */}
            <section style={{ padding: '120px 0', background: '#05060e', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 600, background: 'radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 80 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
                            <div style={{ width: 32, height: 2, background: '#22D3EE', borderRadius: 2 }} />
                            <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#22D3EE' }}>
                                Our Process
                            </span>
                            <div style={{ width: 32, height: 2, background: '#22D3EE', borderRadius: 2 }} />
                        </div>
                        <h2 className="font-title" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
                            How We Work
                        </h2>
                        <p style={{ fontSize: 18, color: '#64748B', maxWidth: 480, margin: '0 auto', fontWeight: 400 }}>
                            A structured, transparent methodology that delivers results — every single time.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 2 }}>
                        {PROCESS.map((step, i) => (
                            <motion.div key={step.num}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                                style={{
                                    padding: '40px 32px',
                                    background: 'rgba(13,14,26,0.8)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    borderRadius: i === 0 ? '16px 0 0 16px' : i === 3 ? '0 16px 16px 0' : '0',
                                    position: 'relative', overflow: 'hidden',
                                    transition: 'background 0.3s',
                                }}
                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(20,21,38,0.9)'}
                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(13,14,26,0.8)'}
                            >
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }} />
                                <div className="font-cyber" style={{ fontSize: 44, fontWeight: 900, color: step.color, opacity: 0.15, lineHeight: 1, marginBottom: 16 }}>{step.num}</div>
                                <h3 className="font-title" style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: 'white' }}>{step.title}</h3>
                                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.8, fontWeight: 400 }}>{step.desc}</p>
                                {i < 3 && (
                                    <ChevronRight size={18} style={{ position: 'absolute', right: -9, top: '50%', transform: 'translateY(-50%)', color: step.color, zIndex: 10 }} />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── IMPACT / RESULTS ─────────────────────────────────────── */}
            <section style={{ padding: '120px 0', background: '#08090f', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 400, background: 'radial-gradient(ellipse at top, rgba(139,92,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 80 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
                            <div style={{ width: 32, height: 2, background: '#A78BFA', borderRadius: 2 }} />
                            <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#A78BFA' }}>
                                Real Results
                            </span>
                            <div style={{ width: 32, height: 2, background: '#A78BFA', borderRadius: 2 }} />
                        </div>
                        <h2 className="font-title" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
                            Technology That{' '}
                            <span style={{ background: 'linear-gradient(90deg, #8B5CF6, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Moves the Needle
                            </span>
                        </h2>
                        <p style={{ fontSize: 18, color: '#64748B', maxWidth: 520, margin: '0 auto', fontWeight: 400 }}>
                            Our clients don't hire us for technology. They hire us for outcomes.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
                        {IMPACTS.map((item, i) => (
                            <motion.div key={item.label}
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                style={{
                                    padding: '36px 32px', borderRadius: 20,
                                    background: 'linear-gradient(135deg, #0d0e1e, #0a0b17)',
                                    border: '1px solid rgba(139,92,246,0.1)',
                                    transition: 'all 0.3s',
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                            >
                                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                                    <item.icon size={20} style={{ color: '#8B5CF6' }} />
                                </div>
                                <div className="font-cyber" style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 900, background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 8 }}>
                                    {item.value}
                                </div>
                                <div className="font-title" style={{ fontSize: 16, fontWeight: 800, color: 'white', marginBottom: 10 }}>{item.label}</div>
                                <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, fontWeight: 400 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CASE STUDIES ─────────────────────────────────────────── */}
            <section style={{ padding: '120px 0', background: '#05060e', position: 'relative', overflow: 'hidden' }}>
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                <div style={{ width: 32, height: 2, background: '#34D399', borderRadius: 2 }} />
                                <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#34D399' }}>
                                    Case Studies
                                </span>
                            </div>
                            <h2 className="font-title" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                                Proof, Not Promises
                            </h2>
                        </div>
                        <Link href="/cases" className="btn-outline" style={{ padding: '12px 28px', fontSize: 14, borderRadius: 12 }}>
                            View All Cases <ArrowRight size={16} />
                        </Link>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
                        {CASES.map((c, i) => (
                            <motion.div key={c.title}
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                style={{
                                    padding: '36px 32px', borderRadius: 20,
                                    background: 'rgba(13,14,26,0.9)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    transition: 'all 0.3s', cursor: 'pointer',
                                    position: 'relative', overflow: 'hidden',
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}44`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                            >
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }} />
                                <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 999, border: `1px solid ${c.color}44`, color: c.color, background: `${c.color}11`, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 20 }} className="font-cyber">
                                    {c.tag}
                                </span>
                                <h3 className="font-title" style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.35, marginBottom: 14, color: 'white' }}>{c.title}</h3>
                                <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.8, marginBottom: 24 }}>{c.desc}</p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <Check size={13} style={{ color: c.color }} />
                                        <span style={{ fontSize: 12, fontWeight: 800, color: c.color }}>{c.result}</span>
                                    </div>
                                    <ArrowRight size={14} style={{ color: '#334155' }} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── ABOUT STRIP ──────────────────────────────────────────── */}
            <section style={{ padding: '100px 0', background: '#08090f' }}>
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{
                            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
                        }} className="grid-mobile-1">
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                                <div style={{ width: 32, height: 2, background: '#8B5CF6', borderRadius: 2 }} />
                                <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#8B5CF6' }}>
                                    About Nexyrra
                                </span>
                            </div>
                            <h2 className="font-title" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24 }}>
                                We Are System<br />Architects
                            </h2>
                            <p style={{ fontSize: 16, color: '#64748B', lineHeight: 1.9, marginBottom: 20, fontWeight: 400 }}>
                                Nexyrra is a full-spectrum technology company. We don't dabble — we dominate. Across twelve domains of technology, our team brings the depth of specialists and the vision of strategists.
                            </p>
                            <p style={{ fontSize: 16, color: '#64748B', lineHeight: 1.9, marginBottom: 36, fontWeight: 400 }}>
                                We exist for one reason: to build serious, high-level systems for businesses that are serious about growth.
                            </p>
                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                <Link href="/about" className="btn-primary" style={{ padding: '14px 32px', borderRadius: 12 }}>
                                    Our Story <ArrowRight size={16} />
                                </Link>
                                <Link href="/contact" className="btn-outline" style={{ padding: '14px 32px', borderRadius: 12 }}>
                                    Work With Us
                                </Link>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                            {[
                                { label: 'Built for Scale', desc: 'Every system we build is architected for growth — from 10 users to 10 million.', color: '#8B5CF6' },
                                { label: 'Elite Execution', desc: 'We move fast, deliver on time, and communicate clearly at every step.', color: '#22D3EE' },
                                { label: 'ROI-Focused', desc: 'Technology is a means to an end. We measure success in business outcomes.', color: '#A78BFA' },
                                { label: 'Long-term Partners', desc: 'Our best clients work with us for years, not projects. That says everything.', color: '#34D399' },
                            ].map(item => (
                                <div key={item.label} style={{ padding: '24px', borderRadius: 16, background: 'rgba(13,14,26,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, marginBottom: 12 }} />
                                    <div className="font-title" style={{ fontSize: 14, fontWeight: 800, color: 'white', marginBottom: 8 }}>{item.label}</div>
                                    <p style={{ fontSize: 12, color: '#475569', lineHeight: 1.7 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── FINAL CTA ────────────────────────────────────────────── */}
            <section style={{ padding: '120px 0', background: '#05060e', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

                <div className="container-nex" style={{ position: 'relative', textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', color: '#8B5CF6', textTransform: 'uppercase', display: 'block', marginBottom: 24 }}>
                            Ready to Build Something Serious?
                        </span>
                        <h2 className="font-title" style={{ fontSize: 'clamp(48px, 8vw, 110px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.05em', marginBottom: 32 }}>
                            <span style={{ background: 'linear-gradient(135deg, white 0%, rgba(255,255,255,0.6) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Let's Build
                            </span>
                            <br />
                            <span style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                the Future
                            </span>
                        </h2>
                        <p style={{ fontSize: 18, color: '#64748B', marginBottom: 48, maxWidth: 500, margin: '0 auto 48px', lineHeight: 1.8 }}>
                            Join hundreds of businesses that chose to stop settling and start scaling.
                            One conversation is all it takes.
                        </p>
                        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
                            <Link href="https://wa.me/971503953988" className="btn-primary" style={{
                                padding: '20px 56px', fontSize: 17, borderRadius: 16,
                                background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                                boxShadow: '0 0 60px rgba(139,92,246,0.4)',
                            }}>
                                Start a Project <ArrowRight size={20} />
                            </Link>
                            <Link href="/services" className="btn-outline" style={{ padding: '20px 56px', fontSize: 17, borderRadius: 16 }}>
                                Explore Services
                            </Link>
                        </div>
                        <p style={{ color: '#334155', fontSize: 13 }}>+971 50 395 3988 · nexyrra.com · Dubai, UAE 🇦🇪</p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
