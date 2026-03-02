'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ArrowUpRight, Zap, Network, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Signals', href: '/signals' },
        { name: 'About', href: '#about' },
        { name: 'Admin', href: '/admin' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Glassmorphic Background */}
                <div
                    className={`absolute inset-0 transition-opacity duration-500 -z-10 ${isScrolled ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        background: 'rgba(2, 6, 23, 0.8)',
                        backdropFilter: 'blur(16px)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                />

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group relative">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        {/* Animated Logo Glow */}
                        <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-full h-full bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center group-hover:border-cyan-500/50 transition-colors duration-300">
                            <Sparkles className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white font-cyber">
                        NEX<span className="text-cyan-400">YRRA</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-slate-400 hover:text-white font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:tracking-[0.2em] relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="relative px-6 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase overflow-hidden group border border-transparent"
                    >
                        {/* Liquid Background Effect */}
                        <div className="absolute inset-0 bg-slate-100 transition-transform duration-500 group-hover:scale-110" />
                        <div className="relative flex items-center gap-2 text-slate-900 group-hover:translate-x-1 transition-transform duration-300">
                            Launch AI
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-slate-950 z-[200] flex flex-col items-center justify-center gap-10 p-10 md:hidden"
                    >
                        <button
                            className="absolute top-8 right-8 text-slate-400 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={40} />
                        </button>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-4xl font-black text-white hover:text-cyan-400 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="mt-10 px-10 py-4 bg-white text-slate-950 rounded-full font-bold text-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
