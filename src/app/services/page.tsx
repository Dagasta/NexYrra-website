'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { services } from '../../lib/services-data';

export default function ServicesPage() {
    return (
        <main style={{ background: '#08090f', minHeight: '100vh', color: 'white' }}>
            <Navbar />

            {/* Page Hero */}
            <section style={{ paddingTop: 160, paddingBottom: 80, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(139,92,246,0.03) 1px,transparent 1px),linear-gradient(to right,rgba(139,92,246,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
                    <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B5CF6', display: 'block', marginBottom: 20 }}>What We Do</span>
                    <h1 className="font-title" style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: 24 }}>
                        Our AI <br />
                        <span style={{ background: 'linear-gradient(90deg, #8B5CF6 0%, #22D3EE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Services</span>
                    </h1>
                    <p style={{ fontSize: 18, color: '#64748B', lineHeight: 1.8, maxWidth: 540, margin: '0 auto' }}>
                        Six core capabilities engineered to give enterprise leaders an unfair competitive advantage through artificial intelligence.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ padding: '0 0 160px', maxWidth: 1400, margin: '0 auto', padding: '0 32px 160px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: 24 }}>
                    {services.map((service, i) => (
                        <motion.div key={service.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                            <Link href={`/services/${service.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                                <div className="card-nex" style={{ padding: 36, height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
                                        <div style={{ width: 64, height: 64, borderRadius: 20, background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(34,211,238,0.1))', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>
                                            {service.icon}
                                        </div>
                                        <ArrowRight size={18} style={{ color: '#475569', marginTop: 8 }} />
                                    </div>

                                    <h3 className="font-title" style={{ fontSize: 22, fontWeight: 900, color: 'white', marginBottom: 6 }}>{service.title}</h3>
                                    <span style={{ fontSize: 13, color: '#8B5CF6', fontFamily: 'var(--font-cyber)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 16 }}>
                                        {service.tagline}
                                    </span>
                                    <p style={{ fontSize: 15, color: '#64748B', lineHeight: 1.8, marginBottom: 28, flex: 1 }}>{service.description}</p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                        {service.features.map(f => (
                                            <span key={f} style={{ padding: '4px 12px', borderRadius: 999, background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.15)', fontSize: 11, fontWeight: 700, color: '#A78BFA', fontFamily: 'var(--font-cyber)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
