'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, CheckCircle, ChevronRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { supabase } from '../../lib/supabase';
import { sysAudio } from '../../lib/SoundSystem';

export default function UplinkPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'compiling' | 'success' | 'error'>('idle');

    // Simulate compiling terminal logic
    const compileSequence = [
        "PARSING_NODE_DATA...",
        "VALIDATING_SIGNATURE...",
        "ENCRYPTING_PAYLOAD...",
        "DISPATCHING_TO_CORE_ROUTER...",
        "ESTABLISHING_HANDSHAKE..."
    ];
    const [compileIndex, setCompileIndex] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        sysAudio.playPulse();
        setStatus('compiling');

        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex++;
            if (currentIndex < compileSequence.length) {
                setCompileIndex(currentIndex);
                sysAudio.playTick();
            } else {
                clearInterval(interval);
            }
        }, 500);

        try {
            await supabase.from('contact_requests').insert([{ ...form, created_at: new Date().toISOString() }]);
            setTimeout(() => {
                setStatus('success');
                sysAudio.playPulse();
            }, compileSequence.length * 500 + 500);
        } catch { 
            setStatus('error'); 
        }
    };

    return (
        <main style={{ minHeight: '100vh', padding: '150px 0', position: 'relative' }}>
            <Navbar />
            
            <div className="container-os" style={{ maxWidth: 800 }}>
                
                <div style={{ marginBottom: 80, textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 15, marginBottom: 20 }}>
                        <Terminal size={20} color="var(--sys-neon-blue)" />
                        <span className="mono-sys" style={{ color: 'var(--sys-neon-blue)' }}>EXECUTION_TERMINAL</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
                        SECURE <br />
                        <span className="glow-text text-gradient" style={{ color: 'var(--sys-neon-purple)' }}>UPLINK.</span>
                    </h1>
                </div>

                <div className="hud-panel" style={{ padding: '40px', borderRadius: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid rgba(6,182,212,0.2)', paddingBottom: 15, marginBottom: 40 }}>
                        <Code size={16} color="var(--sys-neon-blue)" />
                        <span className="mono-sys" style={{ color: 'var(--sys-slate)' }}>/bin/bash --root/uplink.sh</span>
                    </div>

                    <AnimatePresence mode="wait">
                        {status === 'compiling' && (
                            <motion.div key="compiling" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                 <div style={{ fontFamily: 'var(--font-sys)', fontSize: 14, color: 'var(--sys-neon-purple)', display: 'flex', flexDirection: 'column', gap: 15 }}>
                                     {compileSequence.slice(0, compileIndex + 1).map((line, i) => (
                                         <motion.div key={i} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>{`> ${line}`}</motion.div>
                                     ))}
                                     <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.div>
                                 </div>
                            </motion.div>
                        )}

                        {status === 'success' && (
                            <motion.div key="success" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ minHeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                <CheckCircle size={50} color="var(--sys-neon-blue)" style={{ marginBottom: 20 }} />
                                <h3 style={{ fontSize: 32, marginBottom: 10 }}>STATION_SYNCED.</h3>
                                <div className="mono-sys" style={{ opacity: 0.6 }}>PACKET_DELIVERED. AWAIT_RETURN_PING.</div>
                            </motion.div>
                        )}

                        {status === 'idle' && (
                            <motion.form key="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                    <span style={{ color: 'var(--sys-neon-purple)', fontFamily: 'var(--font-sys)' }}>$ root@id:</span>
                                    <input required value={form.name} onChange={e => {setForm(f => ({ ...f, name: e.target.value })); sysAudio.playTick()}} placeholder="[ ENTER_SIGNATURE_ID ]" 
                                        style={{ flex: 1, background: 'transparent', border: 'none', borderBottom: '1px solid rgba(192,38,211,0.2)', color: 'var(--sys-white)', outline: 'none', fontFamily: 'var(--font-sys)', fontSize: 16, padding: '10px 0' }} />
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                    <span style={{ color: 'var(--sys-neon-purple)', fontFamily: 'var(--font-sys)' }}>$ root@comms:</span>
                                    <input required type="email" value={form.email} onChange={e => {setForm(f => ({ ...f, email: e.target.value })); sysAudio.playTick()}} placeholder="[ ENTER_RETURN_ADDR ]" 
                                        style={{ flex: 1, background: 'transparent', border: 'none', borderBottom: '1px solid rgba(192,38,211,0.2)', color: 'var(--sys-white)', outline: 'none', fontFamily: 'var(--font-sys)', fontSize: 16, padding: '10px 0' }} />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 15, marginTop: 20 }}>
                                    <span style={{ color: 'var(--sys-neon-blue)', fontFamily: 'var(--font-sys)' }}>$ INPUT_PAYLOAD:</span>
                                    <textarea required value={form.message} onChange={e => {setForm(f => ({ ...f, message: e.target.value })); sysAudio.playTick()}} rows={5} placeholder="> AWAITING_DATA..." 
                                        style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(6,182,212,0.3)', color: 'var(--sys-white)', outline: 'none', fontFamily: 'var(--font-sys)', fontSize: 14, padding: 20, resize: 'none' }} />
                                </div>

                                <button type="submit" className="btn-command" style={{ alignSelf: 'flex-start', marginTop: 20 }} onMouseEnter={() => sysAudio.playTick()}>
                                    EXECUTE_PAYLOAD <ChevronRight size={18} />
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>

            </div>
            
            <Footer />
        </main>
    );
}
