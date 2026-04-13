'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, CheckCircle, Radio, Globe, Activity } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { supabase } from '../../lib/supabase';

export default function UplinkPage() {
    const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await supabase.from('contact_requests').insert([{ ...form, created_at: new Date().toISOString() }]);
            setStatus('success');
        } catch { setStatus('error'); }
    };

    return (
        <main style={{ background: '#050608', minHeight: '100vh', color: 'white', position: 'relative', overflowX: 'hidden' }}>
            <Navbar />
            <div className="circuit-bg" style={{ opacity: 0.1, position: 'fixed' }} />

            <section style={{ paddingTop: 200, paddingBottom: 160, position: 'relative', zIndex: 1 }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 120 }} className="grid-mobile-1">
                        
                        {/* Info Column */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <div style={{ display: 'flex', gap: 10, marginBottom: 40 }}>
                                 {[1, 2, 3].map(i => <div key={i} style={{ width: 10, height: 10, background: '#8B5CF6', opacity: i * 0.3 }} />)}
                            </div>
                            <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#8B5CF6', display: 'block', marginBottom: 30 }}>
                                SIGNAL_INITIATION
                            </span>
                            <h1 className="font-title" style={{ fontSize: 'clamp(50px, 9vw, 120px)', fontWeight: 900, letterSpacing: '-0.07em', lineHeight: 0.9, marginBottom: 40 }}>
                                SECURE <br />
                                <span className="shimmer-text">UPLINK.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: '#64748B', lineHeight: 1.8, maxWidth: 500, marginBottom: 80, fontWeight: 300 }}>
                                Establishing a direct data-stream to our architectural core. Specify your system constraints for immediate nexus coordination.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
                                {[
                                    { icon: Radio, l: 'STATION_SIGNAL', v: '+971 50 395 3988' },
                                    { icon: Globe, l: 'BASE_COORD', v: 'DUBAI_UAE' },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                                        <item.icon size={20} style={{ color: '#8B5CF6' }} />
                                        <div>
                                            <div className="font-cyber" style={{ fontSize: 8, color: '#334155', marginBottom: 5 }}>{item.l}</div>
                                            <div className="font-title" style={{ fontSize: 22, fontWeight: 900 }}>{item.v}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* UI Portal: The Uplink Form */}
                        <div className="glass-refractive" style={{ padding: '60px', borderRadius: 0 }}>
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '60px 0' }}>
                                        <CheckCircle size={60} style={{ color: '#34D399', marginBottom: 30 }} />
                                        <h3 className="font-title" style={{ fontSize: 32, fontWeight: 900, marginBottom: 15 }}>SIGNAL_STABLE.</h3>
                                        <p style={{ color: '#64748B', fontSize: 13, fontFamily: 'monospace' }}>
                                            Handshake confirmed.<br />Architect assignment queue: POS_01.<br />Latency: 0.00ms.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form key="form" onSubmit={handleSubmit} layout style={{ display: 'grid', gap: 50 }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }} className="grid-mobile-1">
                                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 15 }}>
                                                <label className="font-cyber" style={{ fontSize: 8, color: '#334155', display: 'block', marginBottom: 15 }}>ID_SIGNATURE</label>
                                                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="TRANS_NAME..." 
                                                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 16, fontFamily: 'monospace' }} />
                                            </div>
                                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 15 }}>
                                                <label className="font-cyber" style={{ fontSize: 8, color: '#334155', display: 'block', marginBottom: 15 }}>ID_ENCRYPT_MAIL</label>
                                                <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="SYNC_ADDR..." 
                                                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 16, fontFamily: 'monospace' }} />
                                            </div>
                                        </div>

                                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 15 }}>
                                            <label className="font-cyber" style={{ fontSize: 8, color: '#334155', display: 'block', marginBottom: 15 }}>SYSTEM_OBJECTIVE</label>
                                            <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={4} placeholder="TRANSMIT_CONSTRAINTS..." 
                                                style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 14, fontFamily: 'monospace', resize: 'none' }} />
                                        </div>

                                        <motion.button 
                                            whileHover={{ background: 'white', color: 'black' }}
                                            type="submit" 
                                            disabled={status === 'loading'}
                                            style={{ 
                                                padding: '24px', background: 'transparent', 
                                                border: '1px solid white', color: 'white', 
                                                fontSize: 12, fontWeight: 900, fontFamily: 'var(--font-cyber)', 
                                                cursor: 'pointer', transition: 'all 0.3s', borderRadius: 0
                                            }}
                                        >
                                            {status === 'loading' ? 'TRANSMITTING...' : 'INITIATE_HANDSHAKE'}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
