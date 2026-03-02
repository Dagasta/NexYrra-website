'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Globe, ShieldCheck, TrendingUp, Users, Star } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const values = [
    { icon: Zap, title: 'Speed to Value', desc: 'We deploy fast. You see results in weeks, not months. Our frameworks are proven and execution is relentless.' },
    { icon: ShieldCheck, title: 'Enterprise Grade', desc: 'Security-first architecture. GDPR-aware. UAE data residency options. Your data never leaves your control.' },
    { icon: TrendingUp, title: 'ROI-Obsessed', desc: "We don't build AI for AI's sake. Every solution targets clear, measurable business outcomes." },
    { icon: Users, title: 'True Partnership', desc: "We're not consultants. We're co-builders. We integrate with your team and solve problems alongside you." },
];

const team = [
    { name: 'Ahmad Al Rashid', role: 'Founder & AI Architect', bio: 'Ex-Google AI researcher. Built ML infrastructure serving 50M+ users.' },
    { name: 'Sarah Mitchell', role: 'Head of Engineering', bio: '15+ years building enterprise software. Led teams at Amazon and Microsoft.' },
    { name: 'Omar Khalil', role: 'Head of Client Strategy', bio: 'Former McKinsey. Specialized in AI transformation for GCC enterprises.' },
];

export default function AboutPage() {
    return (
        <main style={{ background: '#08090f', minHeight: '100vh', color: 'white' }}>
            <Navbar />

            {/* Hero */}
            <section style={{ paddingTop: 160, paddingBottom: 100, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 600, background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B5CF6', display: 'block', marginBottom: 20 }}>About Nexyrra</span>
                        <h1 className="font-title" style={{ fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 28 }}>
                            We Build AI That{' '}
                            <span style={{ background: 'linear-gradient(90deg, #8B5CF6, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Actually Works
                            </span>
                        </h1>
                        <p style={{ fontSize: 18, color: '#94A3B8', lineHeight: 1.9, marginBottom: 40, maxWidth: 520 }}>
                            Nexyrra is a UAE-licensed AI agency headquartered in Dubai. We specialize in turning complex AI technology into practical business advantages — for ambitious companies across the GCC and beyond.
                        </p>
                        <div style={{ display: 'flex', gap: 16 }}>
                            <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', borderRadius: 12 }}>
                                Work With Us <ArrowRight size={16} />
                            </Link>
                            <Link href="/services" className="btn-outline" style={{ padding: '16px 36px', borderRadius: 12 }}>
                                Our Services
                            </Link>
                        </div>
                    </motion.div>

                    {/* Stats side */}
                    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.9 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                            {[
                                { val: '2022', label: 'Founded in Dubai' },
                                { val: '500+', label: 'Projects Delivered' },
                                { val: '40+', label: 'Enterprise Clients' },
                                { val: '🇦🇪', label: 'UAE Licensed Agency' },
                            ].map((s, i) => (
                                <div key={i} style={{ background: '#0e0f1a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 20, padding: '28px 24px' }}>
                                    <div className="font-cyber" style={{ fontSize: 36, fontWeight: 900, background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 8 }}>{s.val}</div>
                                    <div style={{ fontSize: 13, color: '#475569', fontWeight: 600 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section style={{ padding: '100px 0', borderTop: '1px solid rgba(139,92,246,0.08)', borderBottom: '1px solid rgba(139,92,246,0.08)', background: 'rgba(14,15,26,0.3)', textAlign: 'center' }}>
                <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
                    <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B5CF6', display: 'block', marginBottom: 24 }}>Our Mission</span>
                    <blockquote className="font-title" style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', fontWeight: 900, lineHeight: 1.4, fontStyle: 'italic', marginBottom: 32, letterSpacing: '-0.02em' }}>
                        "To make enterprise-grade AI accessible to every ambitious business in the GCC — turning what was once a{' '}
                        <span style={{ color: '#8B5CF6' }}>$10M capability into a $10K reality</span>."
                    </blockquote>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
                        <Globe size={16} style={{ color: '#8B5CF6' }} />
                        <span style={{ color: '#475569', fontWeight: 600, fontSize: 14 }}>Serving clients across UAE, KSA, Qatar, Egypt, and the UK</span>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ padding: '100px 0' }}>
                <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 64 }}>
                        <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B5CF6', display: 'block', marginBottom: 16 }}>Why Nexyrra</span>
                        <h2 className="font-title" style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 900, letterSpacing: '-0.03em' }}>Built Different</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
                        {values.map((v, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <div className="card-nex" style={{ padding: 32, height: '100%' }}>
                                    <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                                        <v.icon size={22} style={{ color: '#8B5CF6' }} />
                                    </div>
                                    <h3 className="font-title" style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>{v.title}</h3>
                                    <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.8 }}>{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 32px 120px', textAlign: 'center' }}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <h2 className="font-title" style={{ fontSize: 48, fontWeight: 900, marginBottom: 20, letterSpacing: '-0.03em' }}>
                        Ready to Start?
                    </h2>
                    <p style={{ color: '#64748B', fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
                        Book a free 30-minute strategy session. We'll assess your business and show you exactly how AI can transform it.
                    </p>
                    <Link href="/contact" className="btn-primary" style={{ padding: '20px 56px', fontSize: 17, borderRadius: 14 }}>
                        Book Free Session <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
