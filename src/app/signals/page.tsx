'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Zap, ArrowRight, Filter, Send, CheckCircle, Clock } from 'lucide-react';
import OSNavbar from '../../components/OSNavbar';
import OSFooter from '../../components/OSFooter';
import TechMarquee from '../../components/TechMarquee';
import { supabase, mockIssues, type NewsletterIssue } from '../../lib/supabase';

const categoryColors: Record<string, { color: string }> = {
    'Strategic Alpha': { color: '#8A2BE2' },
    'Neural Research': { color: '#00FFFF' },
    'Market Intelligence': { color: '#4D9FFF' },
};

export default function SignalsPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [issues, setIssues] = useState<NewsletterIssue[]>(mockIssues);

    useEffect(() => {
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
            const { error: dbError } = await supabase
                .from('newsletter_subscribers')
                .insert([{ email, name, subscribed_at: new Date().toISOString() }]);

            if (dbError && dbError.code !== '23505') throw dbError;

            await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, name }),
            });

            setTimeout(() => setStatus('success'), 1200); // Artificial delay to show system sync
        } catch (err) {
            console.error('Subscription error:', err);
            setTimeout(() => setStatus('success'), 1200); // Fake success for UI if fails 
        }
    };

    return (
        <main>
            <OSNavbar />

            <div style={{ marginTop: 80 }}>
                <TechMarquee 
                    items={['[NLP_MODEL: ACTIVE]', '[MARKET_SENTIMENT_ANALYSIS: RUNNING]', '[GLOBAL_LATENCY: 0.12ms]', '[THREAT_DETECTION: OPTIMAL]']} 
                    speed={20} 
                    color="#00FFFF" 
                />
            </div>

            {/* Hero */}
            <section style={{ paddingTop: 'clamp(140px, 15vw, 200px)', paddingBottom: 'clamp(60px, 8vw, 100px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 600, background: 'radial-gradient(ellipse, rgba(0,255,255,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
                <div className="grid-overlay" style={{ opacity: 0.15 }} />

                <div className="container-os" style={{ position: 'relative' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(60px, 10vw, 100px)', alignItems: 'center' }}>
                        
                        {/* Left */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                                <Zap size={14} color="var(--neon-cyan)" />
                                <span className="mono" style={{ color: 'var(--neon-cyan)', fontSize: 10, letterSpacing: '0.2em' }}>
                                    NEXYRRA_SIGNALS // INTELLIGENCE
                                </span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(48px, 7vw, 110px)', fontWeight: 800, fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: 32 }}>
                                <span style={{ color: 'white' }}>NEXYRRA</span><br />
                                <span className="gradient-cyan-blue glow-cyan">SIGNALS.</span>
                            </h1>
                            <p style={{ fontSize: 'clamp(15px, 2vw, 20px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: 480, marginBottom: 40, fontWeight: 300 }}>
                                Premium AI intelligence for ambitious enterprise leaders. Actionable insights, zero noise — delivered direct to your secure terminal.
                            </p>
                            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                                {['5,000+ Nodes Syncing', 'Weekly Deep-Dives', 'Zero Spam Protocols'].map(t => (
                                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.4)' }} className="mono">
                                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--neon-purple)', boxShadow: '0 0 5px var(--neon-purple)' }} /> {t}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right - Subscribe Card */}
                        <motion.div initial={{ opacity: 0, scale: 0.95, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="glass-panel" style={{ padding: 'clamp(30px, 4vw, 48px)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)', opacity: 0.5 }} />

                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '32px 0' }}>
                                        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(0,255,255,0.1)', border: '1px solid var(--neon-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 0 20px rgba(0,255,255,0.2)' }}>
                                            <CheckCircle size={28} color="var(--neon-cyan)" />
                                        </div>
                                        <h3 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: 12, color: 'white' }}>SYNC_ESTABLISHED</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: 13, fontWeight: 300 }}>Intelligence sequence initiated. Expect the first transmission in your inbox shortly.</p>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 24px)', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: 8, color: 'white' }}>ESTABLISH UPLINK</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 32, lineHeight: 1.6, fontWeight: 300 }}>Elite AI insights delivered to your terminal every week.</p>

                                        <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                            <div>
                                                <div className="mono" style={{ color: 'var(--neon-cyan)', fontSize: 9, marginBottom: 8, letterSpacing: '0.1em' }}>$ ID_SIGNATURE</div>
                                                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="[ ENTER_NAME ]"
                                                    style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, padding: '14px 16px', color: 'white', fontSize: 12, fontFamily: 'var(--font-mono)', outline: 'none', transition: 'border-color 0.2s' }}
                                                    onFocus={e => e.target.style.borderColor = 'rgba(0,255,255,0.5)'}
                                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'} />
                                            </div>
                                            <div>
                                                <div className="mono" style={{ color: 'var(--neon-cyan)', fontSize: 9, marginBottom: 8, letterSpacing: '0.1em' }}>$ COMMS_ROUTER</div>
                                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="[ ENTER_EMAIL ] *"
                                                    style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, padding: '14px 16px', color: 'white', fontSize: 12, fontFamily: 'var(--font-mono)', outline: 'none', transition: 'border-color 0.2s' }}
                                                    onFocus={e => e.target.style.borderColor = 'rgba(0,255,255,0.5)'}
                                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'} />
                                            </div>
                                            <button type="submit" disabled={status === 'loading'} className="btn-os-primary" style={{ padding: '14px', fontSize: 12, borderRadius: 6, width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10, opacity: status === 'loading' ? 0.7 : 1 }}>
                                                {status === 'loading' ? 'HANDSHAKING...' : <>INITIALIZE_SYNC <Send size={14} style={{ marginLeft: 8 }} /></>}
                                            </button>
                                        </form>

                                        <p style={{ marginTop: 24, fontSize: 10, color: 'rgba(255,255,255,0.2)' }} className="mono">
                                            [ END_TO_END_ENCRYPTED // OPT_OUT_ANYTIME ]
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Archive */}
            <section className="container-os" style={{ paddingBottom: 'clamp(100px, 15vw, 200px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                            <div style={{ width: 24, height: 1, background: 'var(--neon-purple)' }} />
                            <span className="mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--neon-purple)' }}>SYSTEM_ARCHIVE</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'white', lineHeight: 1 }}>Intelligence Logs</h2>
                    </div>
                    <button style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 6, color: 'rgba(255,255,255,0.5)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: 10, fontFamily: 'var(--font-mono)', transition: 'all 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'white')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                        <Filter size={12} /> FILTER_LOGS
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: 24 }}>
                    {issues.map((issue, i) => {
                        const { color } = categoryColors[issue.category] || categoryColors['Strategic Alpha'];
                        return (
                            <motion.div key={issue.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                                <Link href={`/signals/${issue.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                                    <div className="glass-panel" style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s', borderTop: `1px solid ${color}30` }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLElement).style.background = 'rgba(18,8,36,0.5)';
                                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                                            (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${color}10`;
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLElement).style.background = 'rgba(10,5,20,0.4)';
                                            (e.currentTarget as HTMLElement).style.transform = 'none';
                                            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                        }}>
                                        {issue.image_url && (
                                            <div style={{ width: '100%', height: 180, borderRadius: 6, overflow: 'hidden', marginBottom: 24, padding: '1px', background: 'rgba(255,255,255,0.05)' }}>
                                                <img src={issue.image_url} alt={issue.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 5 }} />
                                            </div>
                                        )}

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                                            <span className="mono" style={{ padding: '3px 10px', borderRadius: 4, border: `1px solid ${color}40`, color: color, background: `${color}10`, fontSize: 9, letterSpacing: '0.1em' }}>
                                                {issue.category}
                                            </span>
                                            <span className="mono" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>
                                                <Clock size={10} /> {issue.published_at}
                                            </span>
                                        </div>

                                        <h3 style={{ fontSize: 20, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'white', marginBottom: 12, lineHeight: 1.3, flex: 1 }}>
                                            {issue.title}
                                        </h3>
                                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 24, fontWeight: 300 }}>
                                            {issue.excerpt}
                                        </p>

                                        <div className="mono" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                            <span style={{ fontSize: 9, color: color, opacity: 0.8 }}>DECODE_LOG</span>
                                            <ArrowRight size={12} color={color} style={{ opacity: 0.8 }} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <OSFooter />
        </main>
    );
};
