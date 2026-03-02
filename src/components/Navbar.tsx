'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NexyrraWordmark } from './Logo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { label: 'Services', href: '/services' },
        { label: 'About', href: '/about' },
        { label: 'Cases', href: '/cases' },
        { label: 'Signals', href: '/signals' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
            padding: isScrolled ? '12px 0' : '24px 0',
            transition: 'all 0.4s ease',
            background: isScrolled ? 'rgba(8,9,15,0.92)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(139,92,246,0.1)' : 'none',
        }}>
            <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <NexyrraWordmark size={38} />

                {/* Desktop Nav */}
                <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0 }}>
                    {links.map(l => {
                        const active = pathname === l.href || pathname?.startsWith(l.href + '/');
                        return (
                            <li key={l.label}>
                                <Link href={l.href} style={{
                                    color: active ? '#8B5CF6' : '#94A3B8',
                                    fontWeight: 600, fontSize: 14, letterSpacing: '0.04em',
                                    transition: 'color 0.2s', fontFamily: 'var(--font-main)',
                                    borderBottom: active ? '1px solid #8B5CF6' : '1px solid transparent',
                                    paddingBottom: 2,
                                }}
                                    onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'white'; }}
                                    onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#94A3B8'; }}>
                                    {l.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Link href="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: 13, borderRadius: 10 }}>
                        Get Started <ArrowUpRight size={14} />
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        style={{ background: '#0e0f1a', borderTop: '1px solid rgba(139,92,246,0.1)', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                        {links.map(l => (
                            <Link key={l.label} href={l.href} style={{ color: '#CBD5E1', fontWeight: 700, fontSize: 18 }} onClick={() => setIsMobileOpen(false)}>
                                {l.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
