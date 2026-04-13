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
        <main style={{ background: '#05060f', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="neural-overlay" />

            <section style={{ paddingTop: 240, paddingBottom: 160, position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 140 }} className="grid-mobile-1">
                        
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 40 }}>
                                 <Zap size={20} style={{ color: '#22D3EE' }} />
                                 <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#22D3EE' }}>UPLINK_INITIATION_v4.0</span>
                            </div>
                            <h1 className="text-bionic" style={{ fontSize: '100px', fontWeight: 800, lineHeight: 0.85, marginBottom: 60 }}>
                                SECURE <br />
                                <span className="shimmer-text">UPLINK.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: '#CBD5E1', lineHeight: 1.8, maxWidth: 500, marginBottom: 100, fontWeight: 300 }}>
                                Establish a direct neural-link with our architecture team. We deconstruct complexity to engineer absolute dominance.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
                                {[
                                    { icon: Radio, l: 'STATION_SIGNAL', v: '+971 50 395 3988' },
                                    { icon: Globe, l: 'STATION_COORD', v: 'DUBAI_UAE_v4' },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
                                        <div style={{ padding: 20, background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            <item.icon size={22} style={{ color: '#8B5CF6' }} />
                                        </div>
                                        <div>
                                            <div className="font-cyber" style={{ fontSize: 8, opacity: 0.2, marginBottom: 8 }}>{item.l}</div>
                                            <div style={{ fontSize: 24, fontWeight: 800 }}>{item.v}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="glass-prismatic" style={{ padding: '80px' }}>
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div key="success" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '60px 0' }}>
                                        <CheckCircle size={80} style={{ color: '#34D399', marginBottom: 40 }} />
                                        <h3 style={{ fontSize: 36, fontWeight: 800, marginBottom: 20 }}>STATION_SYNCED.</h3>
                                        <div className="font-cyber" style={{ fontSize: 10, opacity: 0.2 }}>Neural-packet received. Coordination sequence scheduled: POS_01.</div>
                                    </motion.div>
                                ) : (
                                    <motion.form key="form" onSubmit={handleSubmit} layout style={{ display: 'grid', gap: 60 }}>
                                        <div className="font-cyber" style={{ fontSize: 10, opacity: 0.2 }}>[ NEURAL_PARAMETER_INPUT ]</div>
                                        
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="grid-mobile-1">
                                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 15 }}>
                                                <label className="font-cyber" style={{ fontSize: 8, display: 'block', marginBottom: 15 }}>ID_SIGNATURE</label>
                                                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="TRANS_NAME..." 
                                                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 18 }} />
                                            </div>
                                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 15 }}>
                                                <label className="font-cyber" style={{ fontSize: 8, display: 'block', marginBottom: 15 }}>ID_UPLINK_MAIL</label>
                                                <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="SYNC_ADDR..." 
                                                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 18 }} />
                                            </div>
                                        </div>

                                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 15 }}>
                                            <label className="font-cyber" style={{ fontSize: 8, display: 'block', marginBottom: 15 }}>SYSTEM_OBJECTIVES</label>
                                            <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={4} placeholder="TRANSMIT_CONSTRAINTS..." 
                                                style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 16, resize: 'none' }} />
                                        </div>

                                        <button type="submit" className="btn-beyond" style={{ width: '100%', justifyContent: 'center' }}>
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
