'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NexyrraWordmark } from './Logo';
import { Github, Twitter, Linkedin, Instagram, ArrowRight, CornerRightDown } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: 'SYSTEMS',
            links: [
                { name: 'ARCHIVE', href: '/cases' },
                { name: 'INFRASTRUCTURE', href: '/services' },
                { name: 'PROTOCOLS', href: '/services' },
            ],
        },
        {
            title: 'MANIFESTO',
            links: [
                { name: 'CORE_VALUES', href: '/about' },
                { name: 'ENGINEERING', href: '/about' },
                { name: 'ETHICS', href: '/about' },
            ],
        },
        {
            title: 'UPLINK',
            links: [
                { name: 'SUPPORT', href: '/contact' },
                { name: 'PARTNERSHIPS', href: '/contact' },
                { name: 'RECRUITMENT', href: '/contact' },
            ],
        },
    ];

    return (
        <footer style={{ background: '#050609', padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
            <div className="scanline" style={{ opacity: 0.05 }} />
            
            <div className="container-nex">
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 60 }} className="grid-mobile-1">
                    
                    {/* Brand Meta Data */}
                    <div>
                        <div style={{ marginBottom: 40 }}><NexyrraWordmark size={32} /></div>
                        <p style={{ color: '#334155', fontSize: 12, lineHeight: 2, maxWidth: 320, fontFamily: 'monospace' }}>
                            // NEXYRRA_SYSTEMS_CORE_v2.0.4<br />
                            // ARCHITECTING DIGITAL LEGACIES SINCE 2024<br />
                            // DUBAI, UAE_EMIRATES<br />
                            // STATUS: OPERATIONAL
                        </p>
                        
                        <div style={{ display: 'flex', gap: 20, marginTop: 40 }}>
                            <Link href="#" style={{ color: '#4B5563' }}><Github size={18} /></Link>
                            <Link href="#" style={{ color: '#4B5563' }}><Twitter size={18} /></Link>
                            <Link href="#" style={{ color: '#4B5563' }}><Linkedin size={18} /></Link>
                        </div>
                    </div>

                    {/* Nav Columns */}
                    {sections.map(section => (
                        <div key={section.title}>
                            <div className="font-cyber" style={{ fontSize: 10, fontWeight: 900, color: '#8B5CF6', letterSpacing: '0.4em', marginBottom: 30 }}>
                                {section.title}
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 15 }}>
                                {section.links.map(link => (
                                    <li key={link.name}>
                                        <Link href={link.href} style={{ 
                                            color: '#64748B', fontSize: 12, fontWeight: 800, 
                                            transition: 'color 0.2s', fontFamily: 'var(--font-cyber)' 
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                                        onMouseLeave={e => (e.currentTarget.style.color = '#64748B')}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Subfooter - System Shutdown vibe */}
                <div style={{ 
                    marginTop: 100, paddingTop: 40, 
                    borderTop: '1px solid rgba(255,255,255,0.03)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    flexWrap: 'wrap', gap: 20
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                        <span className="font-cyber" style={{ fontSize: 9, color: '#1E293B', letterSpacing: '0.4em' }}>
                            © {currentYear} NEXYRRA_SYSTEMS_ALL_RIGHTS_RESERVED
                        </span>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#34D399' }} />
                    </div>
                    
                    <div style={{ color: '#1E293B', fontSize: 9, letterSpacing: '0.3em', fontFamily: 'monospace' }}>
                        LATENCY: 0.002MS | THROUGHPUT: 1.2TB/S | UPTIME: 99.999%
                    </div>

                    <div style={{ display: 'flex', gap: 30 }}>
                        <Link href="/privacy" style={{ color: '#1E293B', fontSize: 9, textDecoration: 'none' }}>PRIVACY.LOG</Link>
                        <Link href="/terms" style={{ color: '#1E293B', fontSize: 9, textDecoration: 'none' }}>TERMS.DAT</Link>
                    </div>
                </div>
            </div>

            {/* Final bottom accent */}
            <div style={{ 
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, 
                background: 'linear-gradient(90deg, transparent, #8B5CF6, transparent)',
                opacity: 0.3
            }} />
        </footer>
    );
};

export default Footer;
