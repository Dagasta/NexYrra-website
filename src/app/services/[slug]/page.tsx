'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { services } from '../../../lib/services-data';

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const service = services.find(s => s.slug === slug);
    if (!service) notFound();

    const otherServices = services.filter(s => s.slug !== slug).slice(0, 3);

    return (
        <main style={{ background: '#08090f', minHeight: '100vh', color: 'white' }}>
            <Navbar />

            {/* Hero */}
            <section style={{ paddingTop: 160, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
                    <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#8B5CF6', fontSize: 13, fontWeight: 700, marginBottom: 40, fontFamily: 'var(--font-cyber)', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'gap 0.2s' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = '14px'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = '8px'}>
                        <ArrowLeft size={16} /> All Services
                    </Link>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                                <div style={{ width: 72, height: 72, borderRadius: 20, background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(34,211,238,0.1))', border: '1px solid rgba(139,92,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>
                                    {service.icon}
                                </div>
                                <div>
                                    <span className="font-cyber" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#8B5CF6', display: 'block', marginBottom: 4 }}>
                                        Nexyrra Service
                                    </span>
                                    <span style={{ fontSize: 14, color: '#475569' }}>{service.titleAr}</span>
                                </div>
                            </div>

                            <h1 className="font-title" style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.03em' }}>
                                {service.title}
                            </h1>
                            <p style={{ fontSize: 22, fontWeight: 600, color: '#8B5CF6', marginBottom: 24, fontFamily: 'var(--font-cyber)', fontSize: 16 }}>
                                {service.tagline}
                            </p>
                            <p style={{ fontSize: 18, color: '#94A3B8', lineHeight: 1.8, marginBottom: 40 }}>{service.description}</p>

                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: 15, borderRadius: 12 }}>
                                    Get Started <ArrowRight size={16} />
                                </Link>
                                <Link href="https://wa.me/971503953988" className="btn-outline" style={{ padding: '16px 36px', fontSize: 15, borderRadius: 12 }}>
                                    <MessageSquare size={16} /> WhatsApp Us
                                </Link>
                            </div>
                        </motion.div>

                        {/* Stats/Benefits card */}
                        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.8 }}>
                            <div style={{ background: '#0e0f1a', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 28, padding: 40, position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0, width: 150, height: 150, background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
                                <h3 className="font-title" style={{ fontSize: 20, fontWeight: 900, marginBottom: 28, color: 'white' }}>What You Get</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    {service.benefits.map(b => (
                                        <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', background: 'rgba(139,92,246,0.05)', borderRadius: 12, border: '1px solid rgba(139,92,246,0.08)' }}>
                                            <CheckCircle size={16} style={{ color: '#8B5CF6', flexShrink: 0, marginTop: 2 }} />
                                            <span style={{ fontSize: 15, color: '#CBD5E1', fontWeight: 500 }}>{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Full Description */}
            <section style={{ padding: '80px 0', borderTop: '1px solid rgba(139,92,246,0.08)' }}>
                <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
                    <div>
                        <h2 className="font-title" style={{ fontSize: 36, fontWeight: 900, marginBottom: 24, letterSpacing: '-0.02em' }}>
                            How It Works
                        </h2>
                        {service.longDescription ? service.longDescription.split('\n\n').map((para, i) => (
                            <p key={i} style={{ fontSize: 16, color: '#94A3B8', lineHeight: 1.9, marginBottom: 20, fontWeight: 400 }}>{para.trim()}</p>
                        )) : null}
                    </div>

                    <div>
                        <h2 className="font-title" style={{ fontSize: 36, fontWeight: 900, marginBottom: 24, letterSpacing: '-0.02em' }}>Use Cases</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                            {service.useCases.map((uc, i) => (
                                <div key={i} style={{ padding: '20px 24px', background: '#0e0f1a', border: '1px solid rgba(139,92,246,0.12)', borderRadius: 16 }}>
                                    <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)', marginBottom: 12 }} />
                                    <p style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>{uc}</p>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: 40, padding: '32px', background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(34,211,238,0.05))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 20 }}>
                            <p className="font-cyber" style={{ fontSize: 11, color: '#8B5CF6', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Ready to deploy?</p>
                            <p style={{ color: '#94A3B8', fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Book a free strategy session and we'll map out exactly how this service transforms your business.</p>
                            <Link href="/contact" className="btn-primary" style={{ padding: '12px 28px', fontSize: 14, borderRadius: 10 }}>
                                Book Free Session
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Services */}
            <section style={{ padding: '80px 0 120px', borderTop: '1px solid rgba(139,92,246,0.06)' }}>
                <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
                    <h3 className="font-title" style={{ fontSize: 28, fontWeight: 900, marginBottom: 40 }}>Other Services</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                        {otherServices.map(s => (
                            <Link key={s.slug} href={`/services/${s.slug}`} className="card-nex" style={{ padding: 28, display: 'flex', gap: 16, alignItems: 'flex-start', textDecoration: 'none' }}>
                                <span style={{ fontSize: 28, flexShrink: 0 }}>{s.icon}</span>
                                <div>
                                    <h4 className="font-title" style={{ fontSize: 16, fontWeight: 800, color: 'white', marginBottom: 6 }}>{s.title}</h4>
                                    <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6 }}>{s.description.slice(0, 80)}…</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
