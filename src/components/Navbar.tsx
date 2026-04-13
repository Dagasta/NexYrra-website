'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { NexyrraWordmark } from './Logo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
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
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
            padding: '30px 40px',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
            <div style={{ 
                maxWidth: 1400, margin: '0 auto', 
                padding: isScrolled ? '12px 30px' : '20px 0',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: isScrolled ? 'rgba(8,9,15,0.7)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(24px)' : 'none',
                border: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                borderRadius: isScrolled ? '0px' : '0',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                     <NexyrraWordmark size={32} />
                     <div style={{ 
                        width: 1, height: 20, 
                        background: 'rgba(255,255,255,0.1)', 
                        display: isScrolled ? 'block' : 'none' 
                     }} />
                     <span className="font-cyber hide-mobile" style={{ 
                        fontSize: 9, letterSpacing: '0.5em', 
                        color: '#4B5563', display: isScrolled ? 'block' : 'none' 
                     }}>
                        NX_OS_PROD
                     </span>
                </div>

                {/* Cyber Nav */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
                    <ul className="hide-mobile" style={{ display: 'flex', gap: 40, listStyle: 'none', margin: 0 }}>
                        {links.map(l => {
                            const active = pathname === l.href;
                            return (
                                <li key={l.label}>
                                    <Link href={l.href} style={{
                                        color: active ? '#8B5CF6' : '#64748B',
                                        fontWeight: 900, fontSize: 11, letterSpacing: '0.2em',
                                        transition: 'all 0.3s', fontFamily: 'var(--font-cyber)',
                                        position: 'relative'
                                    }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
                                        onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#64748B'; }}>
                                        {l.label}
                                        {active && (
                                            <motion.div layoutId="nav-dot" style={{ position: 'absolute', bottom: -10, left: '50%', x: '-50%', width: 4, height: 4, borderRadius: '50%', background: '#8B5CF6' }} />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
                         <div className="hide-mobile" style={{ textAlign: 'right', display: isScrolled ? 'block' : 'none' }}>
                            <div style={{ fontSize: 10, fontWeight: 900, color: '#334155' }}>DUBAI_UA_4:00</div>
                            <div style={{ fontSize: 8, color: '#8B5CF6', letterSpacing: '0.1em' }}>0.002ms_LATENCY</div>
                         </div>
                         
                        <Link href="/contact" className="hide-mobile" style={{ 
                            background: 'white', color: 'black', 
                            padding: '12px 24px', fontSize: 11, fontWeight: 900, 
                            fontFamily: 'var(--font-cyber)', borderRadius: 0, textDecoration: 'none' 
                        }}>
                             INIT_REQ
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: 44, height: 44, background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 0,
                                color: 'white', cursor: 'pointer'
                            }}
                            className="show-mobile-flex"
                        >
                            {isMobileOpen ? <X size={20} /> : <Cpu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                        style={{ background: '#07080e', padding: '60px 40px', display: 'flex', flexDirection: 'column', gap: 30, position: 'absolute', top: 0, left: 0, right: 0, height: '100vh', zIndex: -1 }}>
                        <div style={{ marginTop: 100 }}>
                            {links.map(l => (
                                <Link key={l.label} href={l.href} 
                                    style={{ color: 'white', fontWeight: 900, fontSize: 32, display: 'block', marginBottom: 20, fontFamily: 'var(--font-title)' }} 
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
