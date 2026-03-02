'use client';

import React, { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Zap, Share2, Bookmark, MessageSquare } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { supabase, mockIssues, type NewsletterIssue } from '../../../lib/supabase';

export default function SignalDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [issue, setIssue] = useState<NewsletterIssue | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIssue = async () => {
            // Try fetching from Supabase
            const { data, error } = await supabase
                .from('newsletter_issues')
                .select('*')
                .eq('id', id)
                .single();

            if (data && !error) {
                setIssue(data as NewsletterIssue);
            } else {
                // FALLBACK — Check mock data for demo purposes or if user is on local
                const mocked = mockIssues.find(i => i.id === id);
                if (mocked) {
                    setIssue(mocked);
                }
            }
            setLoading(false);
        };
        fetchIssue();
    }, [id]);

    if (loading) return (
        <div style={{ background: '#08090f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: '#8B5CF6', fontFamily: 'var(--font-cyber)', fontSize: 13, letterSpacing: '0.2em' }}>SYNCHRONIZING DATA...</p>
        </div>
    );

    if (!issue) notFound();

    return (
        <main style={{ background: '#08090f', minHeight: '100vh', color: 'white' }}>
            <Navbar />

            {/* Signal Hero Header */}
            <section style={{ paddingTop: 160, paddingBottom: 60, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
                    <Link href="/signals" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#8B5CF6', fontSize: 13, fontWeight: 700, marginBottom: 40, fontFamily: 'var(--font-cyber)', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'gap 0.2s' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = '14px'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = '8px'}>
                        <ArrowLeft size={16} /> Back to Archive
                    </Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <span style={{ padding: '4px 12px', borderRadius: 999, border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA', background: 'rgba(139,92,246,0.1)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }} className="font-cyber">
                            {issue.category}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#475569', fontWeight: 600 }}>
                            <Clock size={14} /> {issue.published_at}
                        </span>
                    </div>

                    <h1 className="font-title" style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.03em' }}>
                        {issue.title}
                    </h1>

                    <p style={{ fontSize: 20, color: '#94A3B8', lineHeight: 1.7, marginBottom: 40, maxWidth: 800 }}>
                        {issue.excerpt}
                    </p>

                    <div style={{ display: 'flex', gap: 12, paddingTop: 32, borderTop: '1px solid rgba(139,92,246,0.1)' }}>
                        <button className="btn-outline" style={{ padding: '10px 16px', borderRadius: 10, fontSize: 13 }}>
                            <Share2 size={16} /> Share Signal
                        </button>
                        <button className="btn-outline" style={{ padding: '10px 16px', borderRadius: 10, fontSize: 13 }}>
                            <Bookmark size={16} /> Save in Vault
                        </button>
                    </div>
                </div>
            </section>

            {/* Signal Content Block */}
            <section style={{ paddingBottom: 120 }}>
                <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
                    {issue.image_url && (
                        <div style={{ width: '100%', borderRadius: 24, overflow: 'hidden', marginBottom: 60, border: '1px solid rgba(139,92,246,0.2)', background: '#0e0f1a' }}>
                            <img src={issue.image_url} alt={issue.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    )}

                    <div style={{ fontSize: 18, color: '#CBD5E1', lineHeight: 2, fontWeight: 400, maxWidth: 800, margin: '0 auto' }}>
                        {/* If we had rich text content from Supabase editor, we would render here */}
                        <p style={{ marginBottom: 32 }}>
                            {issue.content || 'Report analysis loading... Full intelligence sync required for detailed data visualization.'}
                        </p>

                        <div style={{ padding: '48px', background: 'rgba(139,92,246,0.05)', borderRadius: 28, border: '1px solid rgba(139,92,246,0.15)', marginTop: 80 }}>
                            <h3 className="font-title" style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Enterprise Access Required</h3>
                            <p style={{ color: '#94A3B8', fontSize: 16, marginBottom: 28, lineHeight: 1.7 }}>
                                Full intelligence reports including proprietary datasets, predictive models, and deployment strategy guides are available exclusively to Nexyrra Partners and Elite Subscribers.
                            </p>
                            <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', borderRadius: 12 }}>
                                Request Direct Access <Zap size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
