'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Command, X, Cpu, Network, Shield } from 'lucide-react';
import { NexyrraWordmark } from './Logo';
import { sysAudio } from '../lib/SoundSystem';

export default function Navbar() {
    const [isCmdOpen, setIsCmdOpen] = useState(false);
    const pathname = usePathname();

    // Command palette toggle logic
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsCmdOpen(prev => !prev);
                sysAudio.playPulse();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const navLinks = [
        { label: 'SYS_CORE', href: '/', icon: Cpu },
        { label: 'INTELLIGENCE_MODULES', href: '/services', icon: Network },
        { label: 'LEDGER_LOGS', href: '/cases', icon: Terminal },
        { label: 'DIRECTIVES', href: '/about', icon: Shield },
    ];

    return (
        <>
            {/* FLOATING COMMAND DOCK */}
            <motion.nav 
                initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                style={{
                    position: 'fixed', top: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 9999,
                    display: 'flex', alignItems: 'center', gap: 20
                }}
            >
                <div className="hud-panel" style={{ 
                    display: 'flex', alignItems: 'center', padding: '10px 20px', borderRadius: 100, gap: 30
                }}>
                    <Link href="/" onClick={() => sysAudio.playTick()} style={{ display: 'flex', alignItems: 'center' }}>
                         <NexyrraWordmark size={24} />
                    </Link>

                    <div style={{ width: 1, height: 20, background: 'var(--sys-neon-purple)', opacity: 0.3 }} />

                    <div className="hide-mobile" style={{ display: 'flex', gap: 20 }}>
                        {navLinks.map(l => {
                            const active = pathname === l.href;
                            return (
                                <Link 
                                    key={l.label} href={l.href} 
                                    onMouseEnter={() => sysAudio.playTick()}
                                    onClick={() => sysAudio.playPulse()}
                                    style={{
                                        color: active ? 'var(--sys-white)' : 'var(--sys-slate)',
                                        fontFamily: 'var(--font-sys)', fontSize: 11, fontWeight: active ? 700 : 500,
                                        textDecoration: 'none', transition: 'all 0.3s',
                                        textShadow: active ? '0 0 10px var(--sys-white)' : 'none'
                                    }}
                                >
                                    {l.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div style={{ width: 1, height: 20, background: 'var(--sys-neon-purple)', opacity: 0.3 }} />

                    <button 
                        onClick={() => { setIsCmdOpen(true); sysAudio.playPulse(); }}
                        onMouseEnter={() => sysAudio.playTick()}
                        style={{
                            background: 'rgba(6, 182, 212, 0.1)', border: '1px solid var(--sys-neon-blue)', borderRadius: 50,
                            padding: '6px 15px', display: 'flex', alignItems: 'center', gap: 10,
                            color: 'var(--sys-neon-blue)', cursor: 'pointer'
                        }}
                    >
                        <Command size={14} />
                        <span className="mono-sys" style={{ fontSize: 9 }}>CMD_PALETTE</span>
                    </button>
                    
                    <Link href="/contact" className="hide-mobile">
                        <button className="btn-command" style={{ padding: '8px 20px', fontSize: 10, borderRadius: 50, height: 32 }} onMouseEnter={() => sysAudio.playTick()}>
                            EXEC_UPLINK
                        </button>
                    </Link>
                </div>
            </motion.nav>

            {/* COMMAND PALETTE OVERLAY */}
            <AnimatePresence>
                {isCmdOpen && (
                    <motion.div 
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }} 
                        animate={{ opacity: 1, backdropFilter: 'blur(20px)' }} 
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 10000, 
                            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                            paddingTop: '15vh', background: 'rgba(3, 0, 8, 0.8)'
                        }}
                        onClick={() => setIsCmdOpen(false)}
                    >
                        <div className="scanline" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1 }} />
                        
                        <motion.div 
                            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
                            className="hud-panel"
                            onClick={e => e.stopPropagation()}
                            style={{ 
                                width: 'min(90%, 600px)', borderRadius: 12, padding: 30, display: 'flex', flexDirection: 'column'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, borderBottom: '1px solid rgba(192,38,211,0.2)', paddingBottom: 15 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <Terminal size={18} color="var(--sys-neon-blue)" />
                                    <span className="mono-sys" style={{ color: 'var(--sys-neon-blue)' }}>SYSTEM_ROOT / AWAIT_COMMAND</span>
                                </div>
                                <X size={20} color="var(--sys-slate)" style={{ cursor: 'pointer' }} onClick={() => setIsCmdOpen(false)} />
                            </div>

                            <input 
                                autoFocus
                                placeholder="> ENTER DIRECTIVE..."
                                style={{
                                    width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(192,38,211,0.3)',
                                    color: 'var(--sys-white)', fontFamily: 'var(--font-sys)', fontSize: 16, padding: '20px',
                                    outline: 'none', marginBottom: 20
                                }}
                            />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <div className="mono-sys" style={{ opacity: 0.5, marginBottom: 10 }}>AVAILABLE_DIRECTIVES</div>
                                {navLinks.map((l, i) => (
                                    <Link key={i} href={l.href} style={{ textDecoration: 'none' }} onClick={() => setIsCmdOpen(false)}>
                                        <motion.div 
                                            whileHover={{ x: 10, background: 'rgba(192,38,211,0.1)' }}
                                            onMouseEnter={() => sysAudio.playTick()}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: 15, padding: '15px 20px',
                                                border: '1px solid rgba(255,255,255,0.05)', color: 'var(--sys-white)',
                                                fontFamily: 'var(--font-sys)', fontSize: 12, cursor: 'pointer'
                                            }}
                                        >
                                            <l.icon size={16} color="var(--sys-neon-purple)" />
                                            {l.label}
                                            <div style={{ marginLeft: 'auto', opacity: 0.3, fontSize: 10 }}>[ EXECUTE ]</div>
                                        </motion.div>
                                    </Link>
                                ))}
                                <Link href="/contact" style={{ textDecoration: 'none' }} onClick={() => setIsCmdOpen(false)}>
                                    <motion.div 
                                        whileHover={{ x: 10, background: 'rgba(6,182,212,0.1)' }}
                                        onMouseEnter={() => sysAudio.playTick()}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: 15, padding: '15px 20px',
                                            border: '1px solid var(--sys-neon-blue)', color: 'var(--sys-neon-blue)',
                                            fontFamily: 'var(--font-sys)', fontSize: 12, cursor: 'pointer', marginTop: 10
                                        }}
                                    >
                                        <Command size={16} />
                                        INITIATE_SECURE_UPLINK
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
