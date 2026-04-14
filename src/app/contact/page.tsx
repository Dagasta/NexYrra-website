'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Lock, CheckCircle, ChevronRight } from 'lucide-react';
import OSNavbar from '../../components/OSNavbar';
import OSFooter from '../../components/OSFooter';
import { supabase } from '../../lib/supabase';
import TechMarquee from '../../components/TechMarquee';
import GlobalRadar from '../../components/GlobalRadar';

export default function UplinkPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'compiling' | 'success' | 'error'>('idle');
    const [compileIndex, setCompileIndex] = useState(0);
    const compileSequence = ["PARSING_NODE_DATA...", "VALIDATING_SIGNATURE...", "DISPATCHING_TO_CORE_ROUTER...", "ESTABLISHING_HANDSHAKE..."];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('compiling');
        
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex++;
            if (currentIndex < compileSequence.length) {
                setCompileIndex(currentIndex);
            } else {
                clearInterval(interval);
            }
        }, 600);

        try {
            await supabase.from('contact_requests').insert([{ ...form, created_at: new Date().toISOString() }]);
            setTimeout(() => { setStatus('success'); }, compileSequence.length * 600 + 500);
        } catch { setStatus('error'); }
    };

    return (
        <main>
            <OSNavbar />

            {/* Background elements */}
            <div className="grid-overlay" style={{ opacity: 0.2 }} />
            <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 600, background: 'radial-gradient(circle, rgba(138,43,226,0.08) 0%, transparent 60%)', pointerEvents: 'none', zIndex: -1 }} />

            <div className="container-os">
                
                {/* Header */}
                <section style={{ paddingTop: 'clamp(140px, 15vw, 200px)', paddingBottom: 'clamp(40px, 6vw, 80px)', textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
                            <Terminal size={14} color="var(--neon-purple)" />
                            <div className="mono" style={{ color: 'var(--neon-purple)', fontSize: 10, letterSpacing: '0.2em' }}>EXECUTION_TERMINAL</div>
                        </div>
                        <h1 style={{ fontSize: 'clamp(44px, 7vw, 100px)', fontWeight: 800, fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1 }}>
                            SECURE <span className="gradient-purple-cyan glow-purple">UPLINK.</span>
                        </h1>
                    </motion.div>
                </section>

                <div style={{ maxWidth: 800, margin: '0 auto', paddingBottom: 'clamp(100px, 15vw, 200px)' }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="glass-panel"
                        style={{ padding: 'clamp(30px, 5vw, 60px)', position: 'relative', overflow: 'hidden' }}
                    >
                        {/* Terminal Bar */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 20, marginBottom: 40 }}>
                            <div style={{ display: 'flex', gap: 6, opacity: 0.5 }}>
                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                            </div>
                            <Lock size={14} color="var(--neon-cyan)" style={{ marginLeft: 16 }} />
                            <span className="mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 }}>/bin/bash --root/uplink.sh</span>
                        </div>

                        <AnimatePresence mode="wait">
                            {status === 'compiling' && (
                                <motion.div key="compiling" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ minHeight: 300, display: 'flex', flexDirection: 'column', gap: 20 }}>
                                    {compileSequence.slice(0, compileIndex + 1).map((line, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mono" style={{ color: 'var(--neon-cyan)', fontSize: 11, letterSpacing: '0.1em' }}>
                                            {`> ${line}`}
                                        </motion.div>
                                    ))}
                                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="mono" style={{ color: 'var(--neon-purple)', fontSize: 13 }}>_</motion.div>
                                </motion.div>
                            )}

                            {status === 'success' && (
                                <motion.div key="success" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ minHeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                                        <CheckCircle size={50} color="var(--neon-cyan)" style={{ marginBottom: 30, filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.4))' }} />
                                    </motion.div>
                                    <h3 style={{ fontSize: 32, fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: 15, color: '#FFFFFF' }}>STATION_SYNCED.</h3>
                                    <div className="mono" style={{ color: 'var(--neon-cyan)', fontSize: 10, letterSpacing: '0.15em' }}>PACKET_DELIVERED. AWAIT_RETURN_PING.</div>
                                </motion.div>
                            )}

                            {status === 'idle' && (
                                <motion.form key="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                                    <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap' }}>
                                        <div style={{ flex: 1, minWidth: 250 }}>
                                            <div className="mono" style={{ color: 'var(--neon-purple)', marginBottom: 12, fontSize: 10 }}>$ root@id:</div>
                                            <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="[ ENTER_SIGNATURE_ID ]" 
                                                style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, color: '#fff', outline: 'none', fontFamily: 'var(--font-mono)', fontSize: 12, padding: '16px 20px', transition: 'border 0.3s' }} 
                                                onFocus={e => e.target.style.borderColor = 'rgba(138,43,226,0.5)'}
                                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'}
                                            />
                                        </div>
                                        <div style={{ flex: 1, minWidth: 250 }}>
                                            <div className="mono" style={{ color: 'var(--neon-purple)', marginBottom: 12, fontSize: 10 }}>$ root@comms:</div>
                                            <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="[ ENTER_RETURN_ADDR ]" 
                                                style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, color: '#fff', outline: 'none', fontFamily: 'var(--font-mono)', fontSize: 12, padding: '16px 20px', transition: 'border 0.3s' }}
                                                onFocus={e => e.target.style.borderColor = 'rgba(138,43,226,0.5)'}
                                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mono" style={{ color: 'var(--neon-cyan)', marginBottom: 12, fontSize: 10 }}>$ root@payload:</div>
                                        <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={5} placeholder="> AWAITING_DATA..." 
                                            style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, color: '#fff', outline: 'none', fontFamily: 'var(--font-mono)', fontSize: 12, padding: '16px 20px', resize: 'none', transition: 'border 0.3s' }}
                                            onFocus={e => e.target.style.borderColor = 'rgba(0,255,255,0.5)'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'}
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn-os-primary" 
                                        style={{ alignSelf: 'flex-start', padding: '16px 32px', display: 'flex', alignItems: 'center', gap: 10 }}
                                    >
                                        EXECUTE_PAYLOAD <ChevronRight size={16} />
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                <div style={{ paddingBottom: 100 }}>
                    <div style={{ marginBottom: 120 }}>
                        <GlobalRadar />
                    </div>
                    <TechMarquee items={['SECURE UPLINK', 'ZERO LOG RETENTION', 'ENCRYPTED CHANNEL', 'GLOBAL ROUTING', 'E2E VERIFIED']} speed={25} color="#8A2BE2" />
                </div>

            </div>
            <OSFooter />
        </main>
    );
}
