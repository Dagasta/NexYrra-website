'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, MessageSquare, CheckCircle, Radio, Activity, Globe } from 'lucide-react';
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
            const { error } = await supabase.from('contact_requests').insert([{ ...form, created_at: new Date().toISOString() }]);
            if (error) throw error;
            setStatus('success');
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <main style={{ background: '#05060e', minHeight: '100vh', color: 'white', position: 'relative', overflowX: 'hidden' }}>
            <Navbar />
            
            {/* Background Data Flow */}
            <div style={{
                position: 'fixed', inset: 0, opacity: 0.03, pointerEvents: 'none', zIndex: 0,
                backgroundImage: 'linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.1) 1px, transparent 1px)',
                backgroundSize: '100px 100px',
            }} />

            <section style={{ paddingTop: 200, paddingBottom: 160, position: 'relative', zIndex: 1 }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 100 }} className="grid-mobile-1">
                        
                        {/* Info Column */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#8B5CF6', display: 'block', marginBottom: 30 }}>
                                SIGNAL_INITIATION
                            </span>
                            <h1 className="font-title" style={{ fontSize: 'clamp(50px, 9vw, 120px)', fontWeight: 900, letterSpacing: '-0.06em', lineHeight: 0.9, marginBottom: 40 }}>
                                SECURE <br />
                                <span className="shimmer-text">UPLINK.</span>
                            </h1>
                            <p style={{ fontSize: 18, color: '#64748B', lineHeight: 1.8, maxWidth: 480, marginBottom: 60, fontWeight: 300 }}>
                                Initiate a direct coordination protocol with the Nexyrra architecture team. We solve complex system constraints through precision engineering.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                                {[
                                    { icon: Radio, l: 'OPERATIONAL_UPLINK', v: '+971 50 395 3988' },
                                    { icon: Terminal, l: 'ENCRYPTED_MAIL', v: 'nexyrra@gmail.com' },
                                    { icon: Globe, l: 'BASE_STATION', v: 'DUBAI_UAE_EMIRATES' },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                                        <div style={{ padding: 12, background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.1)' }}>
                                            <item.icon size={18} style={{ color: '#8B5CF6' }} />
                                        </div>
                                        <div>
                                            <div className="font-cyber" style={{ fontSize: 8, color: '#1E293B', marginBottom: 4 }}>{item.l}</div>
                                            <div className="font-title" style={{ fontSize: 18, fontWeight: 800 }}>{item.v}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Form Column: The Command Buffer */}
                        <div className="system-module" style={{ padding: '60px', background: 'rgba(255,255,255,0.01)' }}>
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '60px 0' }}>
                                        <CheckCircle size={60} style={{ color: '#34D399', marginBottom: 30 }} />
                                        <h3 className="font-title" style={{ fontSize: 32, fontWeight: 900, marginBottom: 15 }}>UPLINK_STABLE.</h3>
                                        <p style={{ color: '#64748B', fontSize: 13, lineHeight: 1.8, fontFamily: 'monospace' }}>
                                            Data packet received and archived.<br />Architect assignment in progress.<br />Response latency: &lt;24hrs.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form key="form" onSubmit={handleSubmit} layout style={{ display: 'grid', gap: 40 }}>
                                        <div style={{ marginBottom: 20 }}>
                                            <div className="font-cyber" style={{ fontSize: 10, color: '#8B5CF6', marginBottom: 15 }}>// DATA_BUFFER_INPUT</div>
                                            <p style={{ fontSize: 12, color: '#4B5563' }}>Specify your system constraints and architectural requirements.</p>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-mobile-1">
                                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 10 }}>
                                                <label className="font-cyber" style={{ fontSize: 8, color: '#1E293B', display: 'block', marginBottom: 10 }}>ID_NAME</label>
                                                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="IDENTIFY..." 
                                                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 14, fontFamily: 'monospace' }} />
                                            </div>
                                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 10 }}>
                                                <label className="font-cyber" style={{ fontSize: 8, color: '#1E293B', display: 'block', marginBottom: 10 }}>ID_EMAIL</label>
                                                <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="UPLINK_ADDR..." 
                                                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 14, fontFamily: 'monospace' }} />
                                            </div>
                                        </div>

                                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 10 }}>
                                            <label className="font-cyber" style={{ fontSize: 8, color: '#1E293B', display: 'block', marginBottom: 10 }}>TARGET_SYSTEM</label>
                                            <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                                                style={{ width: '100%', background: 'transparent', border: 'none', color: form.service ? 'white' : '#4B5563', outline: 'none', fontSize: 12, fontFamily: 'monospace' }}>
                                                <option value="">SELECT_ARCHITECTURE...</option>
                                                <option>AUTONOMOUS_ENGINES</option>
                                                <option>WORKFLOW_PIPELINES</option>
                                                <option>CLOUD_INFRASTRUCTURE</option>
                                                <option>LEGACY_TRANSFORMATION</option>
                                                <option>OTHER_SPEC</option>
                                            </select>
                                        </div>

                                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 10 }}>
                                            <label className="font-cyber" style={{ fontSize: 8, color: '#1E293B', display: 'block', marginBottom: 10 }}>MESSAGE_BODY</label>
                                            <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={4} placeholder="TRANSMIT_DATA_HERE..." 
                                                style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: 13, fontFamily: 'monospace', resize: 'none' }} />
                                        </div>

                                        <motion.button 
                                            whileHover={{ scale: 1.02, background: '#8B5CF6', color: 'black' }}
                                            type="submit" 
                                            disabled={status === 'loading'}
                                            style={{ 
                                                padding: '24px', background: 'transparent', 
                                                border: '1px solid #8B5CF6', color: '#8B5CF6', 
                                                fontSize: 12, fontWeight: 900, fontFamily: 'var(--font-cyber)', 
                                                cursor: 'pointer', transition: 'all 0.3s'
                                            }}
                                        >
                                            {status === 'loading' ? 'TRANSMITTING...' : status === 'error' ? 'RETRY_SIGNAL' : 'INITIATE_UPLINK'}
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
