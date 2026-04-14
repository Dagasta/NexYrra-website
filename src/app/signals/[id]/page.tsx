'use client';

import React, { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Zap, Share2, Bookmark, Lock } from 'lucide-react';
import OSNavbar from '../../../components/OSNavbar';
import OSFooter from '../../../components/OSFooter';
import { supabase, mockIssues, type NewsletterIssue } from '../../../lib/supabase';

const categoryColors: Record<string, { color: string }> = {
    'Strategic Alpha': { color: '#8A2BE2' },
    'Neural Research': { color: '#00FFFF' },
    'Market Intelligence': { color: '#4D9FFF' },
};

export default function SignalDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [issue, setIssue] = useState<NewsletterIssue | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIssue = async () => {
            const { data, error } = await supabase
                .from('newsletter_issues')
                .select('*')
                .eq('id', id)
                .single();

            if (data && !error) {
                setIssue(data as NewsletterIssue);
            } else {
                const mocked = mockIssues.find(i => i.id === id);
                if (mocked) setIssue(mocked);
            }
            setLoading(false);
        };
        fetchIssue();
    }, [id]);

    if (loading) return (
        <div style={{ background: '#020008', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20 }}>
            <div style={{ width: 40, height: 40, border: '2px solid rgba(0,255,255,0.2)', borderTop: '2px solid var(--neon-cyan)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            <p className="mono" style={{ color: 'var(--neon-cyan)', fontSize: 10, letterSpacing: '0.2em' }}>SYNCHRONIZING_DATA...</p>
        </div>
    );

    if (!issue) notFound();

    const { color } = categoryColors[issue.category] || categoryColors['Strategic Alpha'];

    return (
        <main>
            <OSNavbar />

            {/* Background elements */}
            <div className="grid-overlay" style={{ opacity: 0.15 }} />
            
            <section style={{ paddingTop: 'clamp(140px, 15vw, 180px)', paddingBottom: 60, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: `radial-gradient(ellipse, ${color}15 0%, transparent 70%)`, pointerEvents: 'none', zIndex: -1 }} />

                <div className="container-os" style={{ maxWidth: 900, position: 'relative' }}>
                    
                    {/* Back Link */}
                    <Link href="/signals" style={({ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 10, marginBottom: 40, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'all 0.2s', textDecoration: 'none' } as any)}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.gap = '14px'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; (e.currentTarget as HTMLElement).style.gap = '8px'; }}>
                        <ArrowLeft size={14} /> TERMINATE_VIEW // RETURN
                    </Link>

                    {/* Meta */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <span className="mono" style={{ padding: '4px 10px', borderRadius: 4, border: `1px solid ${color}40`, color: color, background: `${color}10`, fontSize: 9, letterSpacing: '0.15em' }}>
                            {issue.category}
                        </span>
                        <span className="mono" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>
                            <Clock size={12} /> {issue.published_at}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, fontFamily: 'var(--font-display)', lineHeight: 1.1, marginBottom: 24, color: 'white' }}>
                        {issue.title}
                    </motion.h1>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
                        {issue.excerpt}
                    </motion.p>

                    {/* Actions */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ display: 'flex', gap: 12, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
                        <button className="btn-os-outline" style={{ padding: '12px 24px', borderRadius: 6, fontSize: 11, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Share2 size={14} /> TRANSMIT_SIGNAL
                        </button>
                        <button className="btn-os-outline" style={{ padding: '12px 24px', borderRadius: 6, fontSize: 11, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Bookmark size={14} /> SAVE_TO_VAULT
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section style={{ paddingBottom: 'clamp(100px, 15vw, 200px)' }}>
                <div className="container-os" style={{ maxWidth: 900 }}>
                    
                    {/* Visualizations */}
                    {(issue.image_urls && issue.image_urls.length > 0) ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginBottom: 60 }}>
                            {issue.image_urls.map((url, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} key={idx}
                                    style={{ width: '100%', borderRadius: 8, overflow: 'hidden', border: `1px solid ${color}30`, background: 'rgba(255,255,255,0.02)', padding: 1 }}
                                >
                                    <img src={url} alt={`Visualization ${idx + 1}`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 7 }} />
                                </motion.div>
                            ))}
                        </div>
                    ) : issue.image_url && (
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} style={{ width: '100%', borderRadius: 8, overflow: 'hidden', marginBottom: 60, border: `1px solid ${color}30`, background: 'rgba(255,255,255,0.02)', padding: 1 }}>
                            <img src={issue.image_url} alt={issue.title} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 7 }} />
                        </motion.div>
                    )}

                    <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.9, fontWeight: 300 }}>
                        <p style={{ marginBottom: 32 }}>
                            {issue.content || '> Intelligence log payload loaded. Awaiting decryption key...'}
                        </p>

                        {/* Paywall / Enterprise Access */}
                        <div className="glass-panel" style={{ padding: 'clamp(30px, 6vw, 48px)', marginTop: 80, borderTop: `2px solid ${color}` }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                                <Lock size={16} color={color} />
                                <span className="mono" style={{ fontSize: 10, color: color, letterSpacing: '0.15em' }}>CLASSIFIED_PAYLOAD // AUTHORIZATION_REQUIRED</span>
                            </div>
                            <h3 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: 16, color: 'white' }}>Enterprise Access Required</h3>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 32, lineHeight: 1.7, fontWeight: 300 }}>
                                Full intelligence reports including proprietary datasets, predictive models, and deployment strategy code are available exclusively to Nexyrra Partners and Elite Subscribers.
                            </p>
                            
                            <Link href="/contact" style={{ display: 'inline-block', textDecoration: 'none' }}>
                                <button className="btn-os-primary" style={{ padding: '16px 36px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 10, fontSize: 12 }}>
                                    REQUEST_DIRECT_ACCESS <Zap size={14} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <OSFooter />
        </main>
    );
}
