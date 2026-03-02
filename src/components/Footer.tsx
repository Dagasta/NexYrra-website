'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Company',
            links: [
                { name: 'About Nexyrra', href: '/about' },
                { name: 'AI Services', href: '#services' },
                { name: 'Nexyrra Signals', href: '/signals' },
                { name: 'Contact Us', href: '/contact' },
            ],
        },
        {
            title: 'Solutions',
            links: [
                { name: 'Business Insights', href: '#insights' },
                { name: 'Content Automation', href: '#automation' },
                { name: 'Marketing AI', href: '#marketing' },
                { name: 'Custom AI Models', href: '#custom' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Newsletter Archive', href: '/signals/archive' },
                { name: 'Documentation', href: '/docs' },
                { name: 'Case Studies', href: '/cases' },
                { name: 'Careers', href: '/jobs' },
            ],
        },
    ];

    return (
        <footer className="relative mt-20 pt-20 pb-10 overflow-hidden border-t border-slate-900">
            {/* Footer Ambient Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none -z-10 opacity-30 blur-3xl pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20 relative">
                {/* Brand Identity */}
                <div className="lg:col-span-2">
                    <Link href="/" className="flex items-center gap-3 group mb-8">
                        <div className="relative w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center group-hover:border-cyan-500/50 transition-colors duration-300">
                            <Sparkles className="w-6 h-6 text-cyan-400" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white font-cyber">
                            NEX<span className="text-cyan-400">YRRA</span>
                        </span>
                    </Link>
                    <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-sm">
                        Forging the future of enterprise intelligence. We architect premium AI ecosystems that redefine innovation and scale business authority.
                    </p>
                    <div className="flex gap-4">
                        {[Twitter, Linkedin, Github].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-12 h-12 bg-slate-900/50 hover:bg-cyan-500 border border-slate-800 hover:border-cyan-400 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 group"
                            >
                                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Grid */}
                {footerSections.map((section) => (
                    <div key={section.title}>
                        <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-8 font-cyber">
                            {section.title}
                        </h4>
                        <ul className="space-y-4">
                            {section.links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
                <p>© {currentYear} Nexyrra AI-Tech Hub. All Rights Reserved.</p>
                <div className="flex gap-8">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
