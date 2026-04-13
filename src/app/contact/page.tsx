'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Radio, Globe, Zap, Network } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { supabase } from '../../lib/supabase';

export default function UplinkPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await supabase.from('contact_requests').insert([{ ...form, created_at: new Date().toISOString() }]);
            
            // Wait slightly longer to show the "Transmitting" data animation
            setTimeout(() => {
                setStatus('success');
            }, 2000);
        } catch { 
            setStatus('error'); 
        }
    };

    return (
        <main style={{ backgroundColor: 'var(--aether-bg)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            <Navbar />

            <section style={{ paddingTop: 240, paddingBottom: 160, position: 'relative', zIndex: 10 }}>
                <div className="container-nexus">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 140 }} className="grid-mobile-1">
                        
                        {/* Information Coordination */}
                        <motion.div initial={{ opacity: 0, filter: 'blur(20px)', x: -50 }} animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 40 }}>
                                 <Zap size={24} style={{ color: '#A855F7' }} />
                                 <span className="mono-diag" style={{ color: '#A855F7' }}>// UPLINK_HANDSHAKE.v7</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(60px, 10vw, 120px)', marginBottom: 40 }}>
                                SECURE <br />
                                <span className="text-gradient shimmer-luxe">UPLINK.</span>
                            </h1>
                            <p style={{ fontSize: 'clamp(20px, 2vw, 24px)', color: '#64748B', lineHeight: 1.8, maxWidth: 500, marginBottom: 100, fontWeight: 300 }}>
                                Establish a direct neural-link with our architecture team. We deconstruct complexity to engineer absolute systems for elite partners.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
                                {[
                                    { icon: Radio, l: 'STATION_SIGNAL', v: '+971 50 395 3988' },
                                    { icon: Globe, l: 'STATION_COORD', v: 'DUBAI_UAE_CORE' },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
                                        <div style={{ padding: 25, background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '50%', boxShadow: '0 10px 30px rgba(168,85,247,0.1)' }}>
                                            <item.icon size={28} style={{ color: '#A855F7' }} />
                                        </div>
                                        <div>
                                            <div className="mono-diag" style={{ opacity: 0.4, marginBottom: 10 }}>{item.l}</div>
                                            <div style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 800 }}>{item.v}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* The Crystal Terminal */}
                        <div style={{ perspective: '2000px' }}>
                            <motion.div 
                                initial={{ opacity: 0, rotateY: 20, z: -200 }} 
                                animate={{ opacity: 1, rotateY: 0, z: 0 }} 
                                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-v7" 
                                style={{ padding: 'clamp(60px, 6vw, 100px)', borderRadius: 24, position: 'relative' }}
                            >
                                <AnimatePresence mode="wait">
                                    {status === 'loading' && (
                                        <motion.div 
                                            key="loading"
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                            style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.9)', borderRadius: 24, zIndex: 20 }}
                                        >
                                            <Network size={60} style={{ color: '#22D3EE', marginBottom: 30 }} className="animate-pulse" />
                                            <div className="mono-diag" style={{ color: '#A855F7', fontSize: 12 }}>TRANSMITTING_PACKETS...</div>
                                            
                                            {/* Data transmission visual */}
                                            <div style={{ width: 200, height: 2, background: 'rgba(168,85,247,0.2)', marginTop: 40, position: 'relative', overflow: 'hidden' }}>
                                                 <motion.div animate={{ left: ['-100%', '100%'] }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ position: 'absolute', top: 0, bottom: 0, width: '50%', background: '#A855F7', boxShadow: '0 0 20px #A855F7' }} />
                                            </div>
                                        </motion.div>
                                    )}

                                    {status === 'success' ? (
                                        <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '60px 0' }}>
                                            <div style={{ width: 120, height: 120, margin: '0 auto 40px', background: 'rgba(34,211,238,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(34,211,238,0.3)' }}>
                                                <CheckCircle size={60} style={{ color: '#22D3EE' }} />
                                            </div>
                                            <h3 style={{ fontSize: 44, fontWeight: 900, marginBottom: 20 }}>STATION_SYNCED.</h3>
                                            <div className="mono-diag" style={{ opacity: 0.5, lineHeight: 2 }}>Neural-packet received.<br/>Coordination sequence scheduled.</div>
                                        </motion.div>
                                    ) : (
                                        <motion.form key="form" onSubmit={handleSubmit} layout style={{ display: 'grid', gap: 60 }}>
                                            <div className="mono-diag" style={{ opacity: 0.3, color: '#A855F7' }}>[ NEURAL_PARAMETER_INPUT ]</div>
                                            
                                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) minmax(200px, 1fr)', gap: 50 }} className="grid-mobile-1">
                                                <div style={{ borderBottom: '1px solid rgba(168,85,247,0.2)', paddingBottom: 15 }}>
                                                    <label className="mono-diag" style={{ fontSize: 9, display: 'block', marginBottom: 20 }}>ID_SIGNATURE</label>
                                                    <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="ENTER_NAME..." 
                                                        style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--aether-void)', outline: 'none', fontSize: 20, fontWeight: 500 }} />
                                                </div>
                                                <div style={{ borderBottom: '1px solid rgba(168,85,247,0.2)', paddingBottom: 15 }}>
                                                    <label className="mono-diag" style={{ fontSize: 9, display: 'block', marginBottom: 20 }}>ID_UPLINK_MAIL</label>
                                                    <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="SYNC_ADDR..." 
                                                        style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--aether-void)', outline: 'none', fontSize: 20, fontWeight: 500 }} />
                                                </div>
                                            </div>

                                            <div style={{ borderBottom: '1px solid rgba(168,85,247,0.2)', paddingBottom: 15 }}>
                                                <label className="mono-diag" style={{ fontSize: 9, display: 'block', marginBottom: 20 }}>SYSTEM_OBJECTIVES</label>
                                                <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={4} placeholder="TRANSMIT_CONSTRAINTS..." 
                                                    style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--aether-void)', outline: 'none', fontSize: 18, resize: 'none', lineHeight: 1.6 }} />
                                            </div>

                                            <button type="submit" className="btn-nexus" style={{ width: '100%', justifyContent: 'center', padding: '25px 0', fontSize: 14 }}>
                                                INITIATE_HANDSHAKE
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
