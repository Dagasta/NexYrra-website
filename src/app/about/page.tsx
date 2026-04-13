'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, LockOpen, Lock, Terminal } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { sysAudio } from '../../lib/SoundSystem';

const directives = [
    { id: '01', title: 'ZERO_LATENCY', desc: 'Execution is absolute. We architect systems that operate at the speed of thought, eliminating operational drift in real-time cycles.' },
    { id: '02', title: 'SYSTEM_HARDENING', desc: 'Stability is engineered into the neural path. Every node is deconstructed and rebuilt for absolute resilience against entropy.' },
    { id: '03', title: 'SYNAPTIC_SCALING', desc: 'Architecture designed for the next century. Modular evolution is woven into the first byte of logic for perpetual scaling.' },
];

const LockedPanel = ({ log, index }: { log: any, index: number }) => {
    const [decrypted, setDecrypted] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}
            className="hud-panel" style={{ padding: 40, position: 'relative' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                <div className="mono-sys">DIRECTIVE_LOG_{log.id}</div>
                {decrypted ? <LockOpen size={20} color="var(--sys-neon-blue)" /> : <Lock size={20} color="var(--sys-neon-purple)" />}
            </div>
            
            <h3 style={{ fontSize: 32, marginBottom: 20 }}>{log.title}</h3>
            
            <AnimatePresence mode="wait">
                {!decrypted ? (
                    <motion.div key="locked" exit={{ opacity: 0 }} style={{ position: 'relative' }}>
                        <div style={{ filter: 'blur(8px)', opacity: 0.5, userSelect: 'none', color: 'var(--sys-slate)' }}>
                            [ENCRYPTED_DATA_BLOCK] XA99-V2.1 {log.desc} XA99-V2.1
                        </div>
                        <button 
                            onClick={() => { setDecrypted(true); sysAudio.playPulse(); }}
                            onMouseEnter={() => sysAudio.playTick()}
                            className="btn-command" 
                            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        >
                            DECRYPT_LOG
                        </button>
                    </motion.div>
                ) : (
                    <motion.div key="decrypted" initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 1 }}>
                        <p style={{ color: 'var(--sys-white)', lineHeight: 1.8, fontSize: 18 }}>
                            {log.desc}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', padding: '150px 0' }}>
            <Navbar />
            
            <div className="container-os">
                
                <div style={{ marginBottom: 100 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                        <Terminal size={20} color="var(--sys-neon-purple)" />
                        <span className="mono-sys" style={{ color: 'var(--sys-neon-purple)' }}>SYSTEM_ORIGIN</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(50px, 8vw, 120px)' }}>
                        CORE <br />
                        <span className="glow-text text-gradient">DIRECTIVES.</span>
                    </h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: 80 }} className="stack-mobile">
                    {/* Left: Origin Story */}
                    <div className="hud-panel" style={{ padding: 40, alignSelf: 'start' }}>
                        <p style={{ fontSize: 22, color: 'var(--sys-white)', lineHeight: 1.8, marginBottom: 30 }}>
                            We are system architects. We exist at the intersection of complex high-performance systems engineering and future-logic neural architecture.
                        </p>
                        <p style={{ fontSize: 16, color: 'var(--sys-slate)', lineHeight: 1.8 }}>
                            We do not build generic systems. Our objective is to engineer digital environments that function identically to intelligent ecosystems—learning, adapting, and visually communicating with flawless performance.
                        </p>
                    </div>

                    {/* Right: Encrypted Directives */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                        {directives.map((log, i) => (
                            <LockedPanel key={log.id} log={log} index={i} />
                        ))}
                    </div>
                </div>

            </div>
            
            <Footer />
        </main>
    );
}
