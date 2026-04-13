'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Lock, CheckCircle, ChevronRight } from 'lucide-react';
import MatrixFooter from '../../components/MatrixFooter';
import { supabase } from '../../lib/supabase';

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
        <main style={{ minHeight: '100vh', paddingTop: '150px' }}>
            <div className="container" style={{ paddingLeft: 'clamp(20px, 10vw, 150px)' }}>
                
                <div style={{ marginBottom: 100 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                        <Terminal size={20} color="var(--matrix-purple)" />
                        <div className="sub-mono" style={{ color: 'var(--matrix-purple)' }}>EXECUTION_TERMINAL</div>
                    </div>
                    <h1 className="giant-heading" style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <span className="text-gradient-cyan text-glow-hard" style={{ zIndex: 10 }}>
                            SECURE
                        </span>
                        <span className="text-gradient-purple text-glow-purple" style={{ zIndex: 10 }}>
                            UPLINK.
                        </span>
                    </h1>
                </div>

                <div style={{ maxWidth: '800px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '60px', marginBottom: 100 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 20, marginBottom: 50 }}>
                        <Lock size={16} color="var(--matrix-cyan)" />
                        <span className="sub-mono" style={{ color: '#888' }}>/bin/bash --root/uplink.sh</span>
                    </div>

                    <AnimatePresence mode="wait">
                        {status === 'compiling' && (
                            <motion.div key="compiling" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ minHeight: 300, display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {compileSequence.slice(0, compileIndex + 1).map((line, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="sub-mono" style={{ color: 'var(--matrix-cyan)' }}>
                                        {`> ${line}`}
                                    </motion.div>
                                ))}
                                <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="sub-mono" style={{ color: 'var(--matrix-purple)' }}>_</motion.div>
                            </motion.div>
                        )}

                        {status === 'success' && (
                            <motion.div key="success" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ minHeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                <CheckCircle size={50} color="var(--matrix-cyan)" style={{ marginBottom: 30 }} />
                                <h3 style={{ fontSize: 40, marginBottom: 15, color: '#FFFFFF' }}>STATION_SYNCED.</h3>
                                <div className="sub-mono" style={{ opacity: 0.5 }}>PACKET_DELIVERED. AWAIT_RETURN_PING.</div>
                            </motion.div>
                        )}

                        {status === 'idle' && (
                            <motion.form key="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                                    <div style={{ flex: 1 }}>
                                        <div className="sub-mono" style={{ color: 'var(--matrix-purple)', marginBottom: 15 }}>$ root@id:</div>
                                        <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="[ ENTER_SIGNATURE_ID ]" 
                                            style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(157, 0, 255, 0.3)', color: '#fff', outline: 'none', fontFamily: 'var(--font-mono)', fontSize: 16, padding: '15px 0' }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div className="sub-mono" style={{ color: 'var(--matrix-purple)', marginBottom: 15 }}>$ root@comms:</div>
                                        <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="[ ENTER_RETURN_ADDR ]" 
                                            style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(157, 0, 255, 0.3)', color: '#fff', outline: 'none', fontFamily: 'var(--font-mono)', fontSize: 16, padding: '15px 0' }} />
                                    </div>
                                </div>
                                <div>
                                    <div className="sub-mono" style={{ color: 'var(--matrix-cyan)', marginBottom: 15 }}>$ INPUT_PAYLOAD:</div>
                                    <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={5} placeholder="> AWAITING_DATA..." 
                                        style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(0, 240, 255, 0.3)', color: '#fff', outline: 'none', fontFamily: 'var(--font-mono)', fontSize: 15, padding: 25, resize: 'none' }} />
                                </div>
                                <button type="submit" className="btn-matrix" style={{ alignSelf: 'flex-start' }}>EXECUTE_PAYLOAD <ChevronRight size={18} /></button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>

            </div>
            <MatrixFooter />
        </main>
    );
}
