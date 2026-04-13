'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, X, Menu } from 'lucide-react';
import { NexyrraWordmark } from './Logo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { label: 'ARCHIVE', href: '/cases' },
        { label: 'SYSTEMS', href: '/services' },
        { label: 'MANIFESTO', href: '/about' },
        { label: 'UPLINK', href: '/contact' },
    ];

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
            padding: '30px 40px',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
            <div 
                className={isScrolled ? "glass-refractive" : ""}
                style={{ 
                    maxWidth: 1400, margin: '0 auto', 
                    padding: isScrolled ? '15px 40px' : '20px 0',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    borderRadius: 0,
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                     <NexyrraWordmark size={32} />
                     <div style={{ 
                        width: 1, height: 20, 
                        background: 'rgba(255,255,255,0.1)', 
                        display: isScrolled ? 'block' : 'none' 
                     }} />
                     <div className="font-cyber hide-mobile" style={{ 
                        fontSize: 8, letterSpacing: '0.4em', color: '#334155',
                        display: isScrolled ? 'block' : 'none' 
                     }}>
                        NX_OS_V2.0
                     </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
                    <ul className="hide-mobile" style={{ display: 'flex', gap: 40, listStyle: 'none', margin: 0 }}>
                        {links.map(l => {
                            const active = pathname === l.href;
                            return (
                                <li key={l.label}>
                                    <Link href={l.href} style={{
                                        color: active ? 'white' : '#4B5563',
                                        fontWeight: 900, fontSize: 10, letterSpacing: '0.25em',
                                        transition: 'all 0.3s', fontFamily: 'var(--font-cyber)',
                                        position: 'relative'
                                    }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
                                        onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#4B5563'; }}>
                                        {l.label}
                                        {active && (
                                            <motion.div layoutId="nav-glow" style={{ position: 'absolute', top: -10, left: 0, right: 0, height: 1, background: '#8B5CF6' }} />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
                        <Link href="/contact" className="hide-mobile shimmer-border" style={{ 
                            padding: '12px 24px', fontSize: 10, fontWeight: 900, 
                            fontFamily: 'var(--font-cyber)', color: 'white', textDecoration: 'none' 
                        }}>
                             INITIALIZE_SYNC
                        </Link>

                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: 44, height: 44, background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.05)', borderRadius: 0,
                                color: 'white', cursor: 'pointer'
                            }}
                            className="show-mobile-flex"
                        >
                            {isMobileOpen ? <X size={18} /> : <Cpu size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                        style={{ 
                            background: '#040508', padding: '100px 40px', 
                            position: 'absolute', top: 0, left: 0, right: 0, height: '100vh', zIndex: -1 
                        }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                            {links.map(l => (
                                <Link key={l.label} href={l.href} 
                                    style={{ color: 'white', fontWeight: 900, fontSize: 40, fontFamily: 'var(--font-title)', letterSpacing: '-0.04em' }} 
                                    onClick={() => setIsMobileOpen(false)}>
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
