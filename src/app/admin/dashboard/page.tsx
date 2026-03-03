'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, FilePlus, Users, Settings, LogOut, Trash2, Eye, X, Upload, Image as ImageIcon, Sparkles, TrendingUp, Mail } from 'lucide-react';
import { supabase, type NewsletterIssue } from '../../../lib/supabase';

const ADMIN_CREDENTIALS = { id: 'admin', password: 'nexyrra2026' };

const AdminDashboard = () => {
    const router = useRouter();
    const [authed, setAuthed] = useState(false);
    const [loginId, setLoginId] = useState('');
    const [loginPass, setLoginPass] = useState('');
    const [loginError, setLoginError] = useState('');
    const [issues, setIssues] = useState<NewsletterIssue[]>([]);
    const [subCount, setSubCount] = useState(0);
    const [subscribers, setSubscribers] = useState<{ id: string; email: string; created_at: string; name?: string }[]>([]);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingIssue, setEditingIssue] = useState<NewsletterIssue | null>(null);
    const [uploading, setUploading] = useState(false);
    const [activeNav, setActiveNav] = useState('dashboard');
    const fileRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: 'Strategic Alpha' as NewsletterIssue['category'],
        image_url: '',
    });

    useEffect(() => {
        if (authed) {
            fetchIssues();
            fetchSubscriberCount();
            fetchSubscribers();
        }
    }, [authed]);

    const fetchIssues = async () => {
        const { data } = await supabase.from('newsletter_issues').select('*').order('published_at', { ascending: false });
        if (data) setIssues(data as NewsletterIssue[]);
    };

    const fetchSubscriberCount = async () => {
        const { count } = await supabase.from('newsletter_subscribers').select('*', { count: 'exact', head: true });
        setSubCount(count || 0);
    };

    const fetchSubscribers = async () => {
        setFetchError(null);
        // We remove the strict order to fix the 'created_at' missing error
        const { data, error } = await supabase.from('newsletter_subscribers').select('*');
        if (error) {
            console.error('FETCH ERROR (Subscribers):', error);
            setFetchError(error.message);
        }
        if (data) setSubscribers(data);
    };

    const handleDeleteSubscriber = async (id: string) => {
        if (!confirm('Permanently de-synchronize this operator from the network?')) return;
        const { error } = await supabase.from('newsletter_subscribers').delete().eq('id', id);
        if (error) alert('Error: ' + error.message);
        fetchSubscribers();
        fetchSubscriberCount();
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (loginId === ADMIN_CREDENTIALS.id && loginPass === ADMIN_CREDENTIALS.password) {
            setAuthed(true);
        } else {
            setLoginError('Invalid credentials. Access denied.');
        }
    };

    const handleImageUpload = async (file: File) => {
        setUploading(true);
        console.log('Starting secure upload via API...');
        const path = `newsletter/${Date.now()}_${file.name}`;

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('path', path);

            const response = await fetch('/api/admin/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                console.error('API Error:', data.error);
                alert(`Upload failed: ${data.error}. If it says "bucket not found", please ensure a bucket named "nexyrra-media" exists in your Supabase storage.`);
                setUploading(false);
                return;
            }

            if (data.publicUrl) {
                setForm(f => ({ ...f, image_url: data.publicUrl }));
                console.log('Upload successful! Public URL:', data.publicUrl);
            }
        } catch (e: any) {
            console.error('Unexpected error during secure upload:', e);
            alert('An unexpected error occurred: ' + (e.message || 'Check console logs.'));
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (editingIssue) {
            // UPDATE existing
            const { error } = await supabase.from('newsletter_issues').update({
                title: form.title,
                excerpt: form.excerpt,
                content: form.content,
                category: form.category,
                image_url: form.image_url,
            }).eq('id', editingIssue.id);

            if (error) {
                alert('Error updating: ' + error.message);
                return;
            }
            setEditingIssue(null);
        } else {
            // INSERT new
            const { error } = await supabase.from('newsletter_issues').insert([{
                ...form,
                published_at: new Date().toISOString().split('T')[0],
            }]);

            if (error) {
                alert('Error saving to database: ' + error.message);
                return;
            }

            // 2. Trigger Broadcast Email to Subscribers (Only for NEW posts)
            console.log('Publishing signal... Sending broadcast emails...');
            try {
                await fetch('/api/newsletter/broadcast', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: form.title,
                        excerpt: form.excerpt,
                        image_url: form.image_url,
                        category: form.category
                    })
                });
            } catch (err) {
                console.error('Broadcast network error:', err);
            }
        }

        setShowAddModal(false);
        setForm({ title: '', excerpt: '', content: '', category: 'Strategic Alpha', image_url: '' });
        fetchIssues();
    };

    const handleEditClick = (issue: NewsletterIssue) => {
        setForm({
            title: issue.title,
            excerpt: issue.excerpt,
            content: issue.content || '',
            category: issue.category,
            image_url: issue.image_url || '',
        });
        setEditingIssue(issue);
        setShowAddModal(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Delete this intelligence report?')) return;
        await supabase.from('newsletter_issues').delete().eq('id', id);
        fetchIssues();
    };

    const handleWipeAllSignals = async () => {
        if (!confirm('CRITICAL: Purge all intelligence reports from the database? This cannot be undone.')) return;
        const { error } = await supabase.from('newsletter_issues').delete().neq('id', '0'); // Delete all
        if (error) alert('Error: ' + error.message);
        fetchIssues();
    };

    const handleWipeAllSubscribers = async () => {
        if (!confirm('CRITICAL: Purge all subscribers? This will de-synchronize the entire network.')) return;
        const { error } = await supabase.from('newsletter_subscribers').delete().neq('id', '0'); // Delete all
        if (error) alert('Error: ' + error.message);
        fetchSubscribers();
        fetchSubscriberCount();
    };

    // ======================== LOGIN PAGE ========================
    if (!authed) {
        return (
            <main style={{ minHeight: '100vh', background: '#08090f', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 600, background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                    style={{ width: '100%', maxWidth: 440, background: '#0e0f1a', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 28, padding: 48, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: 160, height: 160, background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
                        <div style={{ width: 44, height: 44, borderRadius: 14, background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Sparkles size={22} color="white" />
                        </div>
                        <div>
                            <span className="font-cyber" style={{ fontSize: 18, fontWeight: 900, color: 'white', display: 'block' }}>NEXYRRA</span>
                            <span style={{ fontSize: 11, color: '#475569', fontWeight: 600 }}>Command Control</span>
                        </div>
                    </div>

                    <h2 className="font-title" style={{ fontSize: 26, fontWeight: 900, marginBottom: 8, color: 'white' }}>Admin Access</h2>
                    <p style={{ color: '#475569', fontSize: 14, marginBottom: 32 }}>Authorized personnel only.</p>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                        <input value={loginId} onChange={e => setLoginId(e.target.value)} placeholder="Operator ID"
                            style={{ background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 12, padding: '14px 18px', color: 'white', fontSize: 15, outline: 'none', fontFamily: 'var(--font-main)', width: '100%' }} />
                        <input type="password" value={loginPass} onChange={e => setLoginPass(e.target.value)} placeholder="Access Token"
                            style={{ background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 12, padding: '14px 18px', color: 'white', fontSize: 15, outline: 'none', fontFamily: 'var(--font-main)', width: '100%' }} />
                        {loginError && <p style={{ color: '#F87171', fontSize: 13, fontWeight: 600 }}>{loginError}</p>}
                        <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: 15, justifyContent: 'center', borderRadius: 12, marginTop: 8 }}>
                            Initialize Access
                        </button>
                    </form>
                </motion.div>
            </main>
        );
    }

    // ======================== DASHBOARD ========================
    const statsCards = [
        { label: 'Total Signals', value: issues.length, icon: FilePlus, color: '#8B5CF6' },
        { label: 'Subscribers', value: subCount, icon: Mail, color: '#22D3EE' },
        { label: 'Categories', value: 3, icon: TrendingUp, color: '#A78BFA' },
        { label: 'Published', value: issues.length, icon: Eye, color: '#F472B6' },
    ];

    return (
        <main style={{ minHeight: '100vh', background: '#08090f', display: 'flex', color: 'white' }}>
            {/* Sidebar */}
            <aside style={{ width: 260, background: '#0e0f1a', borderRight: '1px solid rgba(139,92,246,0.1)', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh', padding: '32px 0' }}>
                <div style={{ padding: '0 24px 32px', borderBottom: '1px solid rgba(139,92,246,0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #8B5CF6, #22D3EE)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Sparkles size={18} color="white" />
                        </div>
                        <span className="font-cyber" style={{ fontSize: 16, fontWeight: 900, color: 'white' }}>
                            NEX<span style={{ color: '#8B5CF6' }}>YRRA</span>
                        </span>
                    </div>
                </div>

                <nav style={{ padding: '24px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {[
                        { id: 'dashboard', label: 'Dashboard', Icon: LayoutDashboard },
                        { id: 'subscribers', label: 'Subscribers', Icon: Users },
                    ].map(({ id, label, Icon }) => (
                        <button key={id} onClick={() => setActiveNav(id)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 12, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 700, width: '100%', textAlign: 'left', fontFamily: 'var(--font-main)', transition: 'all 0.2s',
                                background: activeNav === id ? 'rgba(139,92,246,0.15)' : 'transparent',
                                color: activeNav === id ? '#A78BFA' : '#64748B',
                                borderLeft: activeNav === id ? '2px solid #8B5CF6' : '2px solid transparent',
                            }}>
                            <Icon size={16} /> {label}
                        </button>
                    ))}
                </nav>

                <div style={{ padding: '16px' }}>
                    <button onClick={() => setAuthed(false)}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderRadius: 12, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, color: '#64748B', background: 'transparent', width: '100%', fontFamily: 'var(--font-main)', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#F87171'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#64748B'}>
                        <LogOut size={16} /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div style={{ flex: 1, padding: 40, overflow: 'auto' }}>
                {activeNav === 'dashboard' ? (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                            <div>
                                <h1 className="font-title" style={{ fontSize: 28, fontWeight: 900, marginBottom: 4 }}>Command Dashboard</h1>
                                <p style={{ color: '#475569', fontSize: 14 }}>Manage Nexyrra Signals intelligence reports</p>
                            </div>
                            <div style={{ display: 'flex', gap: 12 }}>
                                <button onClick={handleWipeAllSignals} style={{ padding: '12px 20px', fontSize: 13, borderRadius: 12, border: '1px solid rgba(244,63,94,0.3)', background: 'transparent', color: '#F87171', fontWeight: 700, cursor: 'pointer' }}>
                                    Wipe All Signals
                                </button>
                                <button onClick={() => setShowAddModal(true)} className="btn-primary" style={{ padding: '12px 28px', fontSize: 14, borderRadius: 12 }}>
                                    <FilePlus size={16} /> New Signal
                                </button>
                            </div>
                        </div>

                        {/* Stats */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 40 }}>
                            {statsCards.map((s) => (
                                <div key={s.label} style={{ background: '#0e0f1a', border: '1px solid rgba(139,92,246,0.12)', borderRadius: 18, padding: 24 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                                        <div style={{ width: 40, height: 40, borderRadius: 12, background: s.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <s.icon size={18} style={{ color: s.color }} />
                                        </div>
                                    </div>
                                    <div className="font-cyber" style={{ fontSize: 32, fontWeight: 900, color: 'white', marginBottom: 4 }}>{s.value}</div>
                                    <div style={{ fontSize: 13, color: '#475569', fontWeight: 600 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Issues Table */}
                        <div style={{ background: '#0e0f1a', border: '1px solid rgba(139,92,246,0.12)', borderRadius: 20, overflow: 'hidden' }}>
                            <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(139,92,246,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <h3 className="font-title" style={{ fontSize: 17, fontWeight: 800 }}>Published Signals</h3>
                                <span className="font-cyber" style={{ fontSize: 11, color: '#475569', fontWeight: 700, letterSpacing: '0.2em' }}>{issues.length} TOTAL</span>
                            </div>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid rgba(139,92,246,0.08)' }}>
                                            {['Title', 'Category', 'Date', 'Actions'].map(h => (
                                                <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.15em', whiteSpace: 'nowrap' }} className="font-cyber">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {issues.length === 0 ? (
                                            <tr><td colSpan={4} style={{ padding: '48px 20px', textAlign: 'center', color: '#475569', fontSize: 15 }}>No signals published yet. Click "New Signal" to create one.</td></tr>
                                        ) : (
                                            issues.map(issue => (
                                                <tr key={issue.id} style={{ borderBottom: '1px solid rgba(139,92,246,0.05)', transition: 'background 0.2s' }}
                                                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(139,92,246,0.04)'}
                                                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                                                    <td style={{ padding: '16px 20px' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                                            {issue.image_url && <img src={issue.image_url} alt="" style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />}
                                                            <span style={{ fontWeight: 700, fontSize: 14, maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block' }}>{issue.title}</span>
                                                        </div>
                                                    </td>
                                                    <td style={{ padding: '16px 20px' }}>
                                                        <span style={{ padding: '4px 12px', borderRadius: 999, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#A78BFA', fontSize: 11, fontWeight: 700 }} className="font-cyber">{issue.category}</span>
                                                    </td>
                                                    <td style={{ padding: '16px 20px', color: '#64748B', fontSize: 13, fontWeight: 600 }}>{issue.published_at}</td>
                                                    <td style={{ padding: '16px 20px' }}>
                                                        <div style={{ display: 'flex', gap: 8 }}>
                                                            <button onClick={() => handleEditClick(issue)} style={{ padding: '6px 14px', borderRadius: 8, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#A78BFA', cursor: 'pointer', fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-main)' }}>
                                                                Edit
                                                            </button>
                                                            <button onClick={() => handleDelete(issue.id)} style={{ padding: '6px 14px', borderRadius: 8, background: 'rgba(244,63,94,0.1)', border: '1px solid rgba(244,63,94,0.2)', color: '#F87171', cursor: 'pointer', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-main)' }}>
                                                                <Trash2 size={12} /> Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                            <div>
                                <h1 className="font-title" style={{ fontSize: 28, fontWeight: 900, marginBottom: 4 }}>Intelligence Network</h1>
                                <p style={{ color: '#475569', fontSize: 14 }}>Authorized newsletter subscribers</p>
                            </div>
                            <div style={{ display: 'flex', gap: 12 }}>
                                <button onClick={fetchSubscribers} style={{ padding: '12px 20px', fontSize: 13, borderRadius: 12, border: '1px solid rgba(34,211,238,0.2)', background: 'transparent', color: '#22D3EE', fontWeight: 700, cursor: 'pointer' }}>
                                    Retry Sync
                                </button>
                                <button onClick={handleWipeAllSubscribers} style={{ padding: '12px 24px', fontSize: 14, borderRadius: 12, border: '1px solid rgba(244,63,94,0.4)', background: 'rgba(244,63,94,0.05)', color: '#F87171', fontWeight: 700, cursor: 'pointer' }}>
                                    Purge Network List
                                </button>
                            </div>
                        </div>

                        {fetchError && (
                            <div style={{ padding: '20px', background: 'rgba(244,63,94,0.1)', border: '1px solid rgba(244,63,94,0.3)', borderRadius: 16, marginBottom: 30 }}>
                                <div style={{ color: '#F87171', fontWeight: 900, fontSize: 13, marginBottom: 8, letterSpacing: '0.1em' }}>🔴 SYSTEM ERROR: DATABASE REJECTED QUERY</div>
                                <p style={{ color: '#FCA5A5', fontSize: 14, margin: 0, fontFamily: 'monospace' }}>{fetchError}</p>
                                <p style={{ color: '#FCA5A5', fontSize: 12, marginTop: 12, opacity: 0.8 }}>
                                    Tip: If the error says "column created_at does not exist", you might need to check your table schema.
                                </p>
                            </div>
                        )}

                        {subCount > 0 && subscribers.length === 0 && (
                            <div style={{ padding: '16px 20px', background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.2)', borderRadius: 12, marginBottom: 24, color: '#facc15', fontSize: 14 }}>
                                <strong>⚠️ RLS Warning:</strong> Database shows {subCount} records, but they are hidden. Please ensure RLS (Row Level Security) is disabled for "Select" on the `newsletter_subscribers` table in your Supabase dashboard.
                            </div>
                        )}

                        <div style={{ background: '#0e0f1a', border: '1px solid rgba(139,92,246,0.12)', borderRadius: 20, overflow: 'hidden' }}>
                            <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(139,92,246,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <h3 className="font-title" style={{ fontSize: 17, fontWeight: 800 }}>Subscriber List</h3>
                                <span className="font-cyber" style={{ fontSize: 11, color: '#475569', fontWeight: 700, letterSpacing: '0.2em' }}>{subscribers.length} TOTAL</span>
                            </div>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid rgba(139,92,246,0.08)' }}>
                                            {['Subscriber Email', 'Name / Handle', 'Sync Date', 'Status', 'Actions'].map(h => (
                                                <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.15em', whiteSpace: 'nowrap' }} className="font-cyber">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subscribers.length === 0 ? (
                                            <tr><td colSpan={5} style={{ padding: '48px 20px', textAlign: 'center', color: '#475569', fontSize: 15 }}>No subscribers found. New signups will appear here automatically.</td></tr>
                                        ) : (
                                            subscribers.map(sub => (
                                                <tr key={sub.id} style={{ borderBottom: '1px solid rgba(139,92,246,0.05)', transition: 'background 0.2s' }}>
                                                    <td style={{ padding: '16px 20px' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                            <div style={{ width: 32, height: 32, borderRadius: 50, background: 'rgba(139,92,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8B5CF6', fontSize: 12, fontWeight: 800 }}>
                                                                {sub.email.charAt(0).toUpperCase()}
                                                            </div>
                                                            <span style={{ fontWeight: 700, fontSize: 14 }}>{sub.email}</span>
                                                        </div>
                                                    </td>
                                                    <td style={{ padding: '16px 20px', color: '#cbd5e1', fontSize: 14 }}>{sub.name || 'Anonymous Operator'}</td>
                                                    <td style={{ padding: '16px 20px', color: '#64748B', fontSize: 13, fontWeight: 600 }}>
                                                        {new Date(sub.created_at).toLocaleDateString()}
                                                    </td>
                                                    <td style={{ padding: '16px 20px' }}>
                                                        <span style={{ padding: '4px 10px', borderRadius: 6, background: 'rgba(34,211,238,0.1)', color: '#22D3EE', fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Synchronized</span>
                                                    </td>
                                                    <td style={{ padding: '16px 20px' }}>
                                                        <button onClick={() => handleDeleteSubscriber(sub.id)} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', transition: 'color 0.2s' }}
                                                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#F87171'}
                                                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#475569'}>
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Add Signal Modal */}
            <AnimatePresence>
                {showAddModal && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            style={{ width: '100%', maxWidth: 600, background: '#0e0f1a', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 24, padding: 40, maxHeight: '90vh', overflowY: 'auto' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                                <h3 className="font-title" style={{ fontSize: 22, fontWeight: 900 }}>{editingIssue ? 'Refine Intelligence' : 'New Intelligence Report'}</h3>
                                <button onClick={() => { setShowAddModal(false); setEditingIssue(null); }} style={{ background: 'none', border: 'none', color: '#64748B', cursor: 'pointer', padding: 4 }}>
                                    <X size={22} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {/* Title */}
                                <div>
                                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#94A3B8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Report Title *</label>
                                    <input required value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. Precision AI: Scaling Authority in 2026"
                                        style={{ width: '100%', background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 10, padding: '12px 16px', color: 'white', fontSize: 14, outline: 'none', fontFamily: 'var(--font-main)' }} />
                                </div>

                                {/* Category */}
                                <div>
                                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#94A3B8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Category *</label>
                                    <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as NewsletterIssue['category'] }))}
                                        style={{ width: '100%', background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 10, padding: '12px 16px', color: 'white', fontSize: 14, outline: 'none', fontFamily: 'var(--font-main)' }}>
                                        <option value="Strategic Alpha">Strategic Alpha</option>
                                        <option value="Neural Research">Neural Research</option>
                                        <option value="Market Intelligence">Market Intelligence</option>
                                    </select>
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#94A3B8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Excerpt *</label>
                                    <textarea required value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} placeholder="Short summary for the archive view..." rows={3}
                                        style={{ width: '100%', background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 10, padding: '12px 16px', color: 'white', fontSize: 14, outline: 'none', fontFamily: 'var(--font-main)', resize: 'vertical' }} />
                                </div>

                                {/* Content */}
                                <div>
                                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#94A3B8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Content</label>
                                    <textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} placeholder="Full newsletter content..." rows={6}
                                        style={{ width: '100%', background: '#13152a', border: '1px solid rgba(139,92,246,0.15)', borderRadius: 10, padding: '12px 16px', color: 'white', fontSize: 14, outline: 'none', fontFamily: 'var(--font-main)', resize: 'vertical' }} />
                                </div>

                                {/* Image Upload */}
                                <div>
                                    <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#94A3B8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cover Image</label>
                                    <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }}
                                        onChange={e => { const f = e.target.files?.[0]; if (f) handleImageUpload(f); }} />
                                    {form.image_url ? (
                                        <div style={{ position: 'relative' }}>
                                            <img src={form.image_url} alt="Preview" style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 10 }} />
                                            <button type="button" onClick={() => setForm(f => ({ ...f, image_url: '' }))} style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.7)', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}>
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ) : (
                                        <button type="button" onClick={() => fileRef.current?.click()} disabled={uploading}
                                            style={{ width: '100%', padding: '32px', background: '#13152a', border: '2px dashed rgba(139,92,246,0.2)', borderRadius: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, cursor: 'pointer', color: '#64748B', transition: 'border-color 0.2s' }}
                                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#8B5CF6'}
                                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.2)'}>
                                            {uploading ? <Upload size={24} style={{ animation: 'nex-pulse 1s infinite', color: '#8B5CF6' }} /> : <ImageIcon size={24} />}
                                            <span style={{ fontSize: 13, fontWeight: 600 }}>{uploading ? 'Uploading...' : 'Click to upload image'}</span>
                                        </button>
                                    )}
                                </div>

                                <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                                    <button type="button" onClick={() => { setShowAddModal(false); setEditingIssue(null); }} className="btn-outline" style={{ flex: 1, padding: '14px', justifyContent: 'center', borderRadius: 12 }}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn-primary" style={{ flex: 2, padding: '14px', justifyContent: 'center', borderRadius: 12 }}>
                                        {editingIssue ? 'Update Signal' : 'Publish Signal'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default AdminDashboard;
