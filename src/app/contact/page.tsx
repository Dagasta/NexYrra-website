'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, CheckCircle, Radio, Globe, MousePointer2 } from 'lucide-react';
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
        <main style={{ background: '#020203', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="matrix-grid" />

            <section style={{ paddingTop: 240, paddingBottom: 160, position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 140 }} className="grid-mobile-1">
                        
                        {/* Information Coordination */}
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="mono" style={{ color: 'var(--nex-accent)', marginBottom: 40 }}>// UPLINK_INITIATION_PROTOCOL</div>
                            <h1 style={{ fontSize: 'clamp(50px, 12vw, 140px)', fontWeight: 300, lineHeight: 0.85, letterSpacing: '-0.07em', marginBottom: 60 }}>
                                SECURE <br />
                                <span className="text-shimmer" style={{ fontWeight: 800 }}>UPLINK.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: '#64748B', lineHeight: 1.8, maxWidth: 500, marginBottom: 100, fontWeight: 300 }}>
                                Establish a direct coordination stream with the Nexyrra architecture team. We solve for systemic dominance.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
                                {[
                                    { icon: Radio, l: 'STATION_IDENT', v: '+971 50 395 3988' },
                                    { icon: Globe, l: 'STATION_COORD', v: 'DUBAI_UAE_EMIRATES' },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
                                        <div style={{ padding: 15, background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.1)' }}>
                                            <item.icon size={22} style={{ color: 'var(--nex-accent)' }} />
                                        </div>
                                        <div>
                                            <div className="mono" style={{ fontSize: 9, opacity: 0.2, marginBottom: 8 }}>{item.l}</div>
                                            <div style={{ fontSize: 24, fontWeight: 700 }}>{item.v}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* HPI Entry Portal: The Form */}
                        <div className="glass-hpi" style={{ padding: '80px' }}>
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div key="success" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '60px 0' }}>
                                        <CheckCircle size={80} style={{ color: 'var(--nex-cyan)', marginBottom: 40 }} />
                                        <h3 style={{ fontSize: 36, fontWeight: 800, marginBottom: 20 }}>STATION_CONNECTED.</h3>
                                        <div className="mono" style={{ opacity: 0.4 }}>Data-packet received. Coordination sequence initiated.</div>
                                    </motion.div>
                                ) : (
                                    <motion.form key="form" onSubmit={handleSubmit} layout style={{ display: 'grid', gap: 60 }}>
                                        <div className="mono" style={{ opacity: 0.2 }}>[ COORDINATION_PARAMETER_INPUT ]</div>
                                        
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="grid-mobile-1">
                                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 20 }}>
                                                <label className="mono" style={{ display: 'block', marginBottom: 20 }}>ID_SIGNATURE</label>
                                                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="TRANS_NAME..." 
                                                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 18, fontFamily: 'var(--font-mono)' }} />
                                            </div>
                                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 20 }}>
                                                <label className="mono" style={{ display: 'block', marginBottom: 20 }}>ID_UPLINK_ADDR</label>
                                                <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="SYNC_ADDR..." 
                                                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 18, fontFamily: 'var(--font-mono)' }} />
                                            </div>
                                        </div>

                                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 20 }}>
                                            <label className="mono" style={{ display: 'block', marginBottom: 20 }}>SYSTEM_CONSTRAINTS</label>
                                            <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={4} placeholder="TRANSMIT_OBJECTIVES..." 
                                                style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 16, fontFamily: 'var(--font-mono)', resize: 'none' }} />
                                        </div>

                                        <button type="submit" className="btn-nex-v3" disabled={status === 'loading'} style={{ padding: '30px' }}>
                                            {status === 'loading' ? 'TRANSMITTING...' : 'INITIATE_COORDINATION'}
                                        </button>
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
