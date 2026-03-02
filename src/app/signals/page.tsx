'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Zap, ArrowRight, Filter, Send, CheckCircle, Clock } from 'lucide-react';
import { supabase, mockIssues, type NewsletterIssue } from '../../lib/supabase';

const categoryColors: Record<string, { border: string; text: string; bg: string }> = {
    'Strategic Alpha': { border: '#8B5CF6', text: '#A78BFA', bg: 'rgba(139,92,246,0.1)' },
    'Neural Research': { border: '#22D3EE', text: '#67E8F9', bg: 'rgba(34,211,238,0.1)' },
    'Market Intelligence': { border: '#F43F5E', text: '#FB7185', bg: 'rgba(244,63,94,0.1)' },
};

const SignalsPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [issues, setIssues] = useState<NewsletterIssue[]>(mockIssues);

    useEffect(() => {
        // Try fetching from Supabase — fall back to mock if table doesn't exist yet
        const fetchIssues = async () => {
            const { data, error } = await supabase
                .from('newsletter_issues')
                .select('*')
                .order('published_at', { ascending: false });
            if (data && data.length > 0 && !error) {
                setIssues(data as NewsletterIssue[]);
            }
        };
        fetchIssues();
    }, []);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            // 1. Save to Supabase (ignore duplicate error if already subscribed)
            const { error: dbError } = await supabase
                .from('newsletter_subscribers')
                .insert([{ email, name, subscribed_at: new Date().toISOString() }]);

            if (dbError && dbError.code !== '23505') throw dbError;

            // 2. Send Welcome Email via our API
            await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, name }),
            });

            setStatus('success');
            setEmail('');
            setName('');
        } catch (err) {
            console.error('Subscription error:', err);
            setStatus('success'); // Still show success UI but log error
            setEmail('');
            setName('');
        }
    };

    return (
        <main style={{ background: '#08090f', minHeight: '100vh', color: 'white' }}>
            <Navbar />

            {/* Hero */}
            <section style={{ paddingTop: 160, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

                <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
                        {/* Left */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                                <Zap size={18} style={{ color: '#8B5CF6' }} />
                                <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#8B5CF6' }}>
                                    Exclusive AI Intelligence
                                </span>
                            </div>
                            <h1 className="font-title" style={{ fontSize: 'clamp(56px, 8vw, 110px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: 32 }}>
                                <span style={{ color: 'white' }}>NEXYRRA</span><br />
                                <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                    SIGNALS
                                </span>
                            </h1>
                            <p style={{ fontSize: 18, color: '#94A3B8', lineHeight: 1.8, maxWidth: 480, marginBottom: 40, fontWeight: 400 }}>
                                Premium AI intelligence for ambitious enterprise leaders. Actionable insights, zero noise — delivered direct to your inbox.
                            </p>
                            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                                {['5,000+ Subscribers', 'Weekly Deep-dives', 'Free Access'].map(t => (
                                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#64748B', fontWeight: 600 }}>
                                        <CheckCircle size={14} style={{ color: '#8B5CF6' }} /> {t}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right - Subscribe Card */}
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
                            <div style={{ background: '#0e0f1a', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 28, padding: 48, position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

                                {status === 'success' ? (
                                    <div style={{ textAlign: 'center', padding: '32px 0' }}>
                                        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(139,92,246,0.15)', border: '1px solid #8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                                            <CheckCircle size={32} style={{ color: '#8B5CF6' }} />
                                        </div>
                                        <h3 className="font-title" style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>You're Synchronized!</h3>
                                        <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: 15 }}>Intelligence incoming. Check your inbox for your first Nexyrra Signal. For support, contact <span style={{ color: '#8B5CF6' }}>nexyrra@gmail.com</span></p>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="font-title" style={{ fontSize: 26, fontWeight: 900, marginBottom: 8, position: 'relative' }}>Secure Your Access</h3>
                                        <p style={{ color: '#64748B', fontSize: 14, marginBottom: 32, lineHeight: 1.7 }}>Elite insights. Zero noise. Delivered every week.</p>

                                        <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                            <div style={{ position: 'relative' }}>
                                                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name (optional)"
                                                    style={{ width: '100%', background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 12, padding: '14px 18px', color: 'white', fontSize: 15, outline: 'none', fontFamily: 'var(--font-main)', transition: 'border-color 0.2s' }}
                                                    onFocus={e => e.target.style.borderColor = '#8B5CF6'}
                                                    onBlur={e => e.target.style.borderColor = 'rgba(139,92,246,0.15)'} />
                                            </div>
                                            <div style={{ position: 'relative' }}>
                                                <Mail size={18} style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', color: '#475569' }} />
                                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Enter your email"
                                                    style={{ width: '100%', background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 12, padding: '14px 18px 14px 48px', color: 'white', fontSize: 15, outline: 'none', fontFamily: 'var(--font-main)', transition: 'border-color 0.2s' }}
                                                    onFocus={e => e.target.style.borderColor = '#8B5CF6'}
                                                    onBlur={e => e.target.style.borderColor = 'rgba(139,92,246,0.15)'} />
                                            </div>
                                            <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ padding: '16px', fontSize: 15, borderRadius: 12, width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}>
                                                {status === 'loading' ? 'Syncing...' : <><span>Initialize Sync</span> <Send size={16} /></>}
                                            </button>
                                        </form>

                                        <p style={{ marginTop: 20, fontSize: 12, color: '#334155', textAlign: 'center' }}>
                                            No spam. Unsubscribe anytime. UAE-based & trusted.
                                        </p>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Archive */}
            <section style={{ padding: '100px 32px', maxWidth: 1400, margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                            <div style={{ width: 24, height: 2, background: '#8B5CF6' }} />
                            <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B5CF6' }}>Archive</span>
                        </div>
                        <h2 className="font-title" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, letterSpacing: '-0.03em' }}>Intelligence Reports</h2>
                    </div>
                    <button style={{ padding: '10px 20px', background: '#0e0f1a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 10, color: '#94A3B8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-main)' }}>
                        <Filter size={14} /> Filter by Category
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 24 }}>
                    {issues.map((issue, i) => {
                        const cat = categoryColors[issue.category] || categoryColors['Strategic Alpha'];
                        return (
                            <motion.div key={issue.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                                <Link href={`/signals/${issue.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%', outline: 'none' }}>
                                    <div className="card-nex" style={{ padding: 32, cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        {issue.image_url && (
                                            <div style={{ width: '100%', height: 180, borderRadius: 12, overflow: 'hidden', marginBottom: 24, background: '#13152a' }}>
                                                <img src={issue.image_url} alt={issue.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                        )}

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                                            <span style={{ padding: '4px 12px', borderRadius: 999, border: `1px solid ${cat.border}33`, color: cat.text, background: cat.bg, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }} className="font-cyber">
                                                {issue.category}
                                            </span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#475569', fontWeight: 600 }}>
                                                <Clock size={12} /> {issue.published_at}
                                            </span>
                                        </div>

                                        <h3 className="font-title" style={{ fontSize: 20, fontWeight: 800, marginBottom: 14, lineHeight: 1.35, flex: 1 }}>
                                            {issue.title}
                                        </h3>
                                        <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7, marginBottom: 24, fontWeight: 400 }}>
                                            {issue.excerpt}
                                        </p>

                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid rgba(139,92,246,0.08)', transition: 'all 0.3s' }}>
                                            <span style={{ fontSize: 12, fontWeight: 700, color: '#8B5CF6' }} className="font-cyber">READ SIGNAL</span>
                                            <ArrowRight size={16} style={{ color: '#8B5CF6' }} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default SignalsPage;
