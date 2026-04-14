'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

const NAV_LINKS = [
    { label: 'SYSTEMS',  href: '/services' },
    { label: 'CASES',    href: '/cases' },
    { label: 'SIGNALS',  href: '/signals' },
    { label: 'ABOUT',    href: '/about' },
    { label: 'CONTACT',  href: '/contact' },
];

export default function OSNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                    padding: scrolled ? '12px 0' : '20px 0',
                    background: scrolled ? 'rgba(5,5,8,0.92)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(24px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(138,43,226,0.12)' : '1px solid transparent',
                    transition: 'all 0.4s cubic-bezier(0.19,1,0.22,1)',
                }}
            >
                <div className="container-os" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* Logo */}
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                        <motion.img
                            src="/assets/logo.png"
                            alt="Nexyrra"
                            style={{ width: 36, height: 36, objectFit: 'contain' }}
                            animate={{ filter: ['drop-shadow(0 0 6px #8A2BE2)', 'drop-shadow(0 0 14px #8A2BE2)', 'drop-shadow(0 0 6px #8A2BE2)'] }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        />
                        <span style={{
                            fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 700,
                            letterSpacing: '0.06em', color: 'white',
                        }}>
                            NEX<span style={{ color: 'var(--neon-purple)' }}>YRRA</span>
                        </span>
                        <span style={{
                            fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(138,43,226,0.6)',
                            letterSpacing: '0.2em', marginLeft: 4, marginTop: 2,
                        }}>OS_v3</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hide-mobile" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
                        {NAV_LINKS.map(l => {
                            const active = pathname === l.href || pathname?.startsWith(l.href + '/');
                            return (
                                <Link key={l.label} href={l.href} style={{
                                    fontFamily: 'var(--font-mono)', fontSize: 11,
                                    letterSpacing: '0.18em', fontWeight: 500,
                                    color: active ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.45)',
                                    textDecoration: 'none',
                                    textShadow: active ? '0 0 12px var(--neon-cyan)' : 'none',
                                    transition: 'all 0.25s',
                                    position: 'relative',
                                }}
                                    onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'white'; }}
                                    onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'; }}
                                >
                                    {active && (
                                        <span style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 1, background: 'var(--neon-cyan)', boxShadow: '0 0 6px var(--neon-cyan)' }} />
                                    )}
                                    {l.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right: CTA + Status + Mobile Toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>

                        {/* System status */}
                        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}>
                            <div className="status-dot" />
                            SYS_ONLINE
                        </div>

                        <Link href="/contact" className="hide-mobile" style={{ textDecoration: 'none' }}>
                            <button className="btn-os-primary" style={{ padding: '10px 20px', fontSize: 11, borderRadius: 3, gap: 8 }}>
                                DEPLOY AI <ArrowUpRight size={13} />
                            </button>
                        </Link>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            style={{
                                display: 'none', alignItems: 'center', justifyContent: 'center',
                                width: 42, height: 42, background: 'rgba(138,43,226,0.1)',
                                border: '1px solid rgba(138,43,226,0.2)', color: 'white',
                                cursor: 'pointer', borderRadius: 4,
                            }}
                            className="show-mobile-flex"
                        >
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile nav */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            position: 'fixed', top: 60, left: 0, right: 0, zIndex: 999,
                            background: 'rgba(5,5,8,0.98)', backdropFilter: 'blur(24px)',
                            borderBottom: '1px solid rgba(138,43,226,0.15)',
                            overflow: 'hidden',
                        }}
                    >
                        <div className="container-os" style={{ padding: '24px clamp(20px,4vw,80px)', display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {NAV_LINKS.map(l => (
                                <Link key={l.label} href={l.href}
                                    onClick={() => setMobileOpen(false)}
                                    style={{
                                        fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700,
                                        letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)',
                                        textDecoration: 'none', padding: '8px 0',
                                    }}
                                >
                                    {l.label}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
                                <button className="btn-os-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 12, borderRadius: 3 }}>
                                    DEPLOY AI <Zap size={14} />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile flex utility */}
            <style>{`.show-mobile-flex { display: none; } @media(max-width:768px){ .show-mobile-flex { display: flex !important; } }`}</style>
        </>
    );
}
