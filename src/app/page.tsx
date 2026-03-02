'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Retention' },
    { value: '3x', label: 'Average ROI' },
    { value: '24/7', label: 'AI Uptime' },
];

export default function Home() {
    return (
        <main style={{ background: '#08090f', minHeight: '100vh', color: 'white', position: 'relative' }}>
            <Navbar />
            <Hero />

            {/* Stats Strip */}
            <div style={{ borderTop: '1px solid rgba(139,92,246,0.1)', borderBottom: '1px solid rgba(139,92,246,0.1)', background: 'rgba(14,15,26,0.6)', backdropFilter: 'blur(20px)' }}>
                <div style={{ maxWidth: 1400, margin: '0 auto', padding: '60px 32px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, textAlign: 'center' }}>
                    {stats.map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                            <div className="font-cyber" style={{ fontSize: 'clamp(32px, 3.5vw, 56px)', fontWeight: 900, marginBottom: 8, background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                {s.value}
                            </div>
                            <div className="font-cyber" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#475569' }}>{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Services />

            {/* Brand Mission Statement */}
            <section style={{ padding: '120px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
                    <blockquote className="font-title" style={{ fontSize: 'clamp(20px, 2.8vw, 36px)', fontWeight: 900, lineHeight: 1.5, fontStyle: 'italic', marginBottom: 48, color: '#CBD5E1', letterSpacing: '-0.01em' }}>
                        "We don't just implement AI — we architect{' '}
                        <span style={{ color: '#8B5CF6' }}>digital sovereignty</span>{' '}
                        for the next generation of enterprise leaders."
                    </blockquote>
                    <p style={{ color: '#475569', fontSize: 16, fontWeight: 500 }}>— The Nexyrra Mandate</p>
                </motion.div>
            </section>

            {/* Final Global CTA */}
            <section style={{ padding: '80px 32px 160px', textAlign: 'center', position: 'relative' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="font-title" style={{ fontSize: 'clamp(48px, 8vw, 120px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.05em', marginBottom: 40 }}>
                        <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            GROW YOUR
                        </span>
                        <br />
                        <span style={{ color: 'white' }}>BUSINESS</span>
                    </h2>
                    <p style={{ fontSize: 18, color: '#64748B', marginBottom: 48, maxWidth: 440, margin: '0 auto 48px', lineHeight: 1.8 }}>
                        تطور أعمالك الآن — Join 500+ enterprises already automating with Nexyrra.
                    </p>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="https://wa.me/971503953988" className="btn-primary" style={{ padding: '20px 56px', fontSize: 18, borderRadius: 16 }}>
                            WhatsApp Us Now <ArrowRight size={20} />
                        </Link>
                        <Link href="/signals" className="btn-outline" style={{ padding: '20px 56px', fontSize: 18, borderRadius: 16 }}>
                            Read Our Signals
                        </Link>
                    </div>
                    <p style={{ marginTop: 32, color: '#334155', fontSize: 14 }}>+971 50 395 3988 • nexyrra.com</p>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
