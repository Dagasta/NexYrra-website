'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { supabase } from '../../lib/supabase';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await supabase.from('contact_requests').insert([{ ...form, created_at: new Date().toISOString() }]);
        } catch { }
        setStatus('success');
    };

    return (
        <main style={{ background: '#08090f', minHeight: '100vh', color: 'white' }}>
            <Navbar />

            <section style={{ paddingTop: 160, paddingBottom: 120, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div className="container-nex grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
                    {/* Left Info */}
                    <motion.div className="text-center-mobile" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
                        <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B5CF6', display: 'block', marginBottom: 20 }}>Get In Touch</span>
                        <h1 className="font-title" style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 24 }}>
                            Let's Build Your <br />
                            <span style={{ background: 'linear-gradient(90deg, #8B5CF6, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                AI Future
                            </span>
                        </h1>
                        <p className="center-mobile" style={{ fontSize: 18, color: '#94A3B8', lineHeight: 1.9, marginBottom: 48, maxWidth: 480 }}>
                            Book a free 30-minute strategy session. We'll analyze your business and show you exactly how AI can transform it — no fluff, just actionable insights.
                        </p>

                        <div className="center-mobile" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 48 }}>
                            {[
                                { icon: Phone, label: '+971 50 395 3988', href: 'tel:+971503953988' },
                                { icon: Mail, label: 'nexyrra@gmail.com', href: 'mailto:nexyrra@gmail.com' },
                                { icon: MapPin, label: 'Dubai, United Arab Emirates 🇦🇪', href: '#' },
                            ].map(({ icon: Icon, label, href }) => (
                                <a key={label} href={href} style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', fontSize: 16, fontWeight: 500 }}
                                    className="center-mobile"
                                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#8B5CF6'}
                                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#94A3B8'}>
                                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Icon size={18} style={{ color: '#8B5CF6' }} />
                                    </div>
                                    {label}
                                </a>
                            ))}
                        </div>

                        <a href="https://wa.me/971503953988" className="center-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 32px', background: '#25D366', borderRadius: 12, color: 'white', fontWeight: 800, fontSize: 15, textDecoration: 'none', transition: 'opacity 0.2s' }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}>
                            <MessageSquare size={18} /> Chat on WhatsApp
                        </a>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
                        <div style={{ background: '#0e0f1a', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 28, padding: 'clamp(24px, 6vw, 48px)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

                            {status === 'success' ? (
                                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                                    <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(139,92,246,0.12)', border: '1px solid #8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
                                        <CheckCircle size={36} style={{ color: '#8B5CF6' }} />
                                    </div>
                                    <h3 className="font-title" style={{ fontSize: 28, fontWeight: 900, marginBottom: 14 }}>Message Received!</h3>
                                    <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.8, maxWidth: 320, margin: '0 auto' }}>
                                        We'll review your request and reach out within 24 hours. Expect WhatsApp contact from +971 50 395 3988.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="font-title" style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>Send Us a Message</h3>
                                    <p style={{ color: '#475569', fontSize: 14, marginBottom: 32 }}>Free strategy session — no obligation, full Value.</p>

                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                        <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                                            <div>
                                                <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#475569', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Name *</label>
                                                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your name"
                                                    style={{ width: '100%', background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 10, padding: '12px 14px', color: 'white', fontSize: 14, outline: 'none', fontFamily: 'var(--font-main)', boxSizing: 'border-box' }} />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#475569', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email *</label>
                                                <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="work@company.com"
                                                    style={{ width: '100%', background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 10, padding: '12px 14px', color: 'white', fontSize: 14, outline: 'none', fontFamily: 'var(--font-main)', boxSizing: 'border-box' }} />
                                            </div>
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#475569', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company</label>
                                            <input value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="Your company name"
                                                style={{ width: '100%', background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 10, padding: '12px 14px', color: 'white', fontSize: 14, outline: 'none', fontFamily: 'var(--font-main)' }} />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#475569', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Service Interested In</label>
                                            <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                                                style={{ width: '100%', background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 10, padding: '12px 14px', color: form.service ? 'white' : '#475569', fontSize: 14, outline: 'none', fontFamily: 'var(--font-main)' }}>
                                                <option value="">Select a service…</option>
                                                <option>Autonomous AI Agents</option>
                                                <option>Workflow Automation</option>
                                                <option>Bulk WhatsApp Marketing</option>
                                                <option>Web & App Development</option>
                                                <option>Enterprise Data Intelligence</option>
                                                <option>Custom AI Solutions</option>
                                                <option>Not sure — need consultation</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#475569', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Message *</label>
                                            <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={4} placeholder="Tell us about your business and what you're looking to achieve..."
                                                style={{ width: '100%', background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 10, padding: '12px 14px', color: 'white', fontSize: 14, outline: 'none', fontFamily: 'var(--font-main)', resize: 'vertical' }} />
                                        </div>

                                        <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ padding: '16px', fontSize: 15, borderRadius: 12, justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1, marginTop: 4 }}>
                                            {status === 'loading' ? 'Sending...' : <><Send size={16} /> Send Message</>}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
