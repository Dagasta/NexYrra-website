'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, CheckCircle, Radio, Globe, Zap } from 'lucide-react';
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
        <main style={{ background: '#040508', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="data-layer" />

            <section style={{ paddingTop: 240, paddingBottom: 160, position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 1.2fr', gap: 140 }} className="grid-mobile-1">
                        
                        {/* Information Coordination */}
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 40 }}>
                                 <Zap size={20} style={{ color: '#A855F7' }} />
                                 <span className="mono" style={{ color: '#A855F7' }}>// UPLINK_HANDSHAKE.v6</span>
                            </div>
                            <h1 style={{ color: 'white' }}>
                                SECURE <br />
                                <span style={{ color: '#A855F7' }}>UPLINK.</span>
                            </h1>
                            <p style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', color: '#94A3B8', lineHeight: 1.8, maxWidth: 500, marginBottom: 120, fontWeight: 300 }}>
                                Establish a direct neural-link with our architecture team. We deconstruct complexity to engineer absolute systems for elite partners.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
                                {[
                                    { icon: Radio, l: 'STATION_SIGNAL', v: '+971 50 395 3988' },
                                    { icon: Globe, l: 'STATION_COORD', v: 'DUBAI_UAE_v6' },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
                                        <div style={{ padding: 25, background: 'rgba(168, 85, 247, 0.05)', border: '1px solid rgba(168, 85, 247, 0.1)', borderRadius: 2 }}>
                                            <item.icon size={22} style={{ color: '#A855F7' }} />
                                        </div>
                                        <div>
                                            <div className="mono" style={{ fontSize: 8, opacity: 0.4, marginBottom: 8 }}>{item.l}</div>
                                            <div style={{ fontSize: 'clamp(20px, 2.5vw, 24px)', fontWeight: 800 }}>{item.v}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Neural Portal Base */}
                        <div className="glass-v6" style={{ padding: 'clamp(40px, 6vw, 100px)', borderRadius: 0 }}>
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div key="success" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '60px 0' }}>
                                        <CheckCircle size={80} style={{ color: '#A855F7', marginBottom: 40 }} />
                                        <h3 style={{ fontSize: 36, fontWeight: 900, marginBottom: 20 }}>STATION_SYNCED.</h3>
                                        <div className="mono" style={{ opacity: 0.4 }}>Neural-packet received. Handshake established.</div>
                                    </motion.div>
                                ) : (
                                    <motion.form key="form" onSubmit={handleSubmit} layout style={{ display: 'grid', gap: 60 }}>
                                        <div className="mono" style={{ opacity: 0.2 }}>[ SYSTEM_PARAMETER_INPUT ]</div>
                                        
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="grid-mobile-1">
                                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 15 }}>
                                                <label className="mono" style={{ fontSize: 8, display: 'block', marginBottom: 15 }}>ID_SIGNATURE</label>
                                                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="SIGN_NAME..." 
                                                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 18 }} />
                                            </div>
                                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 15 }}>
                                                <label className="mono" style={{ fontSize: 8, display: 'block', marginBottom: 15 }}>ID_UPLINK_MAIL</label>
                                                <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="SYNC_ADDR..." 
                                                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 18 }} />
                                            </div>
                                        </div>

                                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 15 }}>
                                            <label className="mono" style={{ fontSize: 8, display: 'block', marginBottom: 15 }}>SYSTEM_OBJECTIVES</label>
                                            <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={4} placeholder="TRANSMIT_CONSTRAINTS..." 
                                                style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 16, resize: 'none' }} />
                                        </div>

                                        <button type="submit" className="btn-cinema" disabled={status === 'loading'} style={{ borderRadius: '4px', justifyContent: 'center' }}>
                                            {status === 'loading' ? 'TRANSMITTING...' : 'INITIATE_HANDSHAKE'}
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
