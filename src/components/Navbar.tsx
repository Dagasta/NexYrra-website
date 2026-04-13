'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
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
            padding: '30px 50px',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
            <div 
                className={isScrolled ? "glass-prismatic" : ""}
                style={{ 
                    maxWidth: 1400, margin: '0 auto', 
                    padding: isScrolled ? '15px 40px' : '20px 0',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                     <NexyrraWordmark size={32} />
                     <div style={{ 
                        width: 1, height: 20, 
                        background: 'rgba(34,211,238,0.2)', 
                        display: isScrolled ? 'block' : 'none' 
                     }} />
                     <div className="font-cyber hide-mobile" style={{ 
                        fontSize: 8, opacity: isScrolled ? 0.6 : 0, color: '#22D3EE'
                     }}>
                        TRANSMISSION_v4.0
                     </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
                    <ul className="hide-mobile" style={{ display: 'flex', gap: 40, listStyle: 'none', margin: 0 }}>
                        {links.map(l => {
                            const active = pathname === l.href;
                            return (
                                <li key={l.label}>
                                    <Link href={l.href} style={{
                                        color: active ? '#22D3EE' : '#FFFFFF',
                                        fontWeight: 800, fontSize: 10, letterSpacing: '0.25em',
                                        transition: 'all 0.3s', fontFamily: 'var(--font-mono)',
                                        position: 'relative', textDecoration: 'none',
                                        opacity: active ? 1 : 0.7
                                    }}>
                                        {l.label}
                                        {active && (
                                            <motion.div layoutId="nav-line" style={{ position: 'absolute', bottom: -10, left: 0, right: 0, height: 1, background: '#22D3EE', boxShadow: '0 0 10px #22D3EE' }} />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
                         <Link href="/contact" className="btn-beyond hide-mobile" style={{ padding: '12px 24px', fontSize: 9 }}>
                            INITIALIZE_SYNC
                         </Link>

                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: 44, height: 44, background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 0,
                                color: '#FFFFFF', cursor: 'pointer'
                            }}
                            className="show-mobile-flex"
                        >
                            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }}
                        style={{ 
                            background: '#05060f', padding: '120px 40px', 
                            position: 'fixed', inset: 0, zIndex: -1 
                        }}>
                        <div className="neural-overlay" />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                            {links.map(l => (
                                <Link key={l.label} href={l.href} 
                                    style={{ color: '#FFFFFF', fontWeight: 900, fontSize: 48, fontFamily: 'var(--font-title)', letterSpacing: '-0.04em', textDecoration: 'none' }} 
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

