'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
    'NEXYRRA_OS // KERNEL HANDSHAKE...',
    'LOADING NEURAL MESH LAYER...',
    'SYNCING DISTRIBUTED NODES [UAE]...',
    'INITIALIZING AI DECISION ENGINE...',
    'SECURITY CLEARANCE: GRANTED',
    'SYSTEM ONLINE. WELCOME.',
];

export default function SystemInit() {
    const [shown, setShown] = useState(false);
    const [step, setStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        // Only show once per session
        if (typeof window === 'undefined') return;
        const seen = sessionStorage.getItem('nex_booted');
        if (seen) { setDone(true); return; }
        setShown(true);
        sessionStorage.setItem('nex_booted', '1');
    }, []);

    useEffect(() => {
        if (!shown || done) return;
        if (step < BOOT_LINES.length) {
            const t = setTimeout(() => {
                setStep(s => s + 1);
                setProgress(Math.round(((step + 1) / BOOT_LINES.length) * 100));
            }, 380 + Math.random() * 220);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => setDone(true), 700);
            return () => clearTimeout(t);
        }
    }, [shown, step, done]);

    if (!shown) return null;

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    key="boot"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
                    transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 99999,
                        background: '#020004',
                        display: 'flex', flexDirection: 'column',
                        justifyContent: 'center', padding: 'clamp(32px, 8vw, 120px)',
                        fontFamily: 'var(--font-mono)',
                    }}
                >
                    {/* Top-left status */}
                    <div style={{ position: 'absolute', top: 40, left: 40, display: 'flex', alignItems: 'center', gap: 12 }}>
                        <img src="/assets/logo.png" alt="" style={{ width: 28, height: 28, filter: 'drop-shadow(0 0 8px #8A2BE2)' }} />
                        <span style={{ fontSize: 11, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>NEXYRRA // SYSTEM BOOT</span>
                    </div>

                    {/* Corner brackets */}
                    {[
                        { top: 30, right: 30, borderTop: '1px solid rgba(138,43,226,0.4)', borderRight: '1px solid rgba(138,43,226,0.4)' },
                        { bottom: 30, left: 30, borderBottom: '1px solid rgba(0,255,255,0.3)', borderLeft: '1px solid rgba(0,255,255,0.3)' },
                    ].map((s, i) => (
                        <div key={i} style={{ position: 'absolute', width: 40, height: 40, ...s }} />
                    ))}

                    {/* Boot log */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 700 }}>
                        {BOOT_LINES.slice(0, step).map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    fontSize: 'clamp(11px, 1.5vw, 14px)',
                                    color: i === step - 1 ? '#8A2BE2' : 'rgba(255,255,255,0.3)',
                                    letterSpacing: '0.08em',
                                }}
                            >
                                <span style={{ color: 'rgba(0,255,255,0.4)', marginRight: 12 }}>&gt;</span>
                                {line}
                                {i === step - 1 && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6 }}
                                        style={{ marginLeft: 6, color: '#8A2BE2' }}
                                    >_</motion.span>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div style={{ position: 'absolute', bottom: 60, left: 'clamp(32px, 8vw, 120px)', right: 'clamp(32px, 8vw, 120px)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.2em' }}>LOADING SYSTEM</span>
                            <span style={{ fontSize: 10, color: '#8A2BE2', letterSpacing: '0.1em' }}>{progress}%</span>
                        </div>
                        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
                            <motion.div
                                style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: 'linear-gradient(90deg, #8A2BE2, #00FFFF)' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div
                                style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: 40, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)' }}
                                animate={{ x: [-40, 700] }}
                                transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                            />
                        </div>
                    </div>

                    {/* Grid overlay */}
                    <div className="grid-overlay" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
