'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Globe, Twitter, Linkedin } from 'lucide-react';
import { NexyrraWordmark } from './Logo';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer style={{ background: '#08090f', borderTop: '1px solid rgba(139,92,246,0.1)', paddingTop: 80, paddingBottom: 40, position: 'relative', zIndex: 10 }}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 300, background: 'radial-gradient(ellipse at top, rgba(139,92,246,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

                <div className="container-nex" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Main Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 48, marginBottom: 64, position: 'relative' }}>
                        {/* Brand */}
                        <div>
                            <div style={{ marginBottom: 24 }}><NexyrraWordmark size={36} /></div>
                            <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 24, maxWidth: 300, fontSize: 14, fontWeight: 400 }}>
                                Nexyrra is a high-performance technology and systems company. We architect, engineer, and scale the digital infrastructure that drives global growth.
                            </p>
                            {/* Contact */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                                <a href="tel:+971503953988" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748B', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}
                                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#8B5CF6'}
                                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#64748B'}>
                                    <Phone size={14} /> +971 50 395 3988
                                </a>
                                <a href="https://nexyrra.com" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748B', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}
                                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#8B5CF6'}
                                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#64748B'}>
                                    <Globe size={14} /> nexyrra.com
                                </a>
                            </div>
                            {/* Social */}
                            <div style={{ display: 'flex', gap: 12, position: 'relative', zIndex: 50 }}>
                                {[
                                    { Icon: Twitter, href: 'https://x.com/nexyrra', label: 'X (Twitter)' },
                                    { Icon: Linkedin, href: 'https://www.linkedin.com/company/nexyrra/', label: 'LinkedIn' }
                                ].map(({ Icon, href, label }, i) => (
                                    <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                                        aria-label={label}
                                        title={label}
                                        style={{
                                            width: 44, height: 44, borderRadius: 12, background: '#0e0f1a',
                                            border: '1px solid rgba(139,92,246,0.15)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', color: '#475569',
                                            textDecoration: 'none', transition: 'all 0.3s', cursor: 'pointer',
                                            position: 'relative', zIndex: 60, pointerEvents: 'auto'
                                        }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(139,92,246,0.15)'; (e.currentTarget as HTMLElement).style.borderColor = '#8B5CF6'; (e.currentTarget as HTMLElement).style.color = '#8B5CF6'; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0e0f1a'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.15)'; (e.currentTarget as HTMLElement).style.color = '#475569'; }}>
                                        <Icon size={18} style={{ pointerEvents: 'none' }} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        {[
                             {
                                title: 'Capabilities',
                                links: [
                                    { name: 'Bespoke Software', href: '/services/custom-software' },
                                    { name: 'Autonomous Systems', href: '/services/autonomous-systems' },
                                    { name: 'SaaS Infrastructure', href: '/services/saas-platforms' },
                                    { name: 'Workflow Engineering', href: '/services/workflow-automation' },
                                    { name: 'Cloud & Reliability', href: '/services/cloud-devops' },
                                    { name: 'Data Intelligence', href: '/services/data-intelligence' },
                                ],
                            },
                            {
                                title: 'Company',
                                links: [
                                    { name: 'About Nexyrra', href: '/about' },
                                    { name: 'Case Studies', href: '/cases' },
                                    { name: 'Careers', href: '/jobs' },
                                    { name: 'Contact Us', href: '/contact' },
                                ],
                            },
                            {
                                title: 'Resources',
                                links: [
                                    { name: 'Nexyrra Signals', href: '/signals' },
                                    { name: 'Newsletter Archive', href: '/signals' },
                                    { name: 'Admin Portal', href: '/admin/login' },
                                    { name: 'Privacy Policy', href: '/privacy' },
                                ],
                            },
                        ].map(section => (
                            <div key={section.title}>
                                <h5 className="font-cyber" style={{ fontSize: 11, fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: 28 }}>
                                    {section.title}
                                </h5>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                                    {section.links.map(l => (
                                        <li key={l.name}>
                                            <Link href={l.href} style={{ color: '#475569', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
                                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#8B5CF6'}
                                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#475569'}>
                                                {l.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="stack-mobile" style={{ paddingTop: 32, borderTop: '1px solid rgba(139,92,246,0.08)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                        <p style={{ color: '#334155', fontSize: 13 }} className="text-center-mobile">© {year} Nexyrra AI Agency. All rights reserved. | Dubai, UAE 🇦🇪</p>
                        <div className="center-mobile" style={{ display: 'flex', gap: 24 }}>
                            {['Terms of Service', 'Privacy Policy'].map(l => (
                                <Link key={l} href="/privacy" style={{ color: '#334155', fontSize: 13, transition: 'color 0.2s' }}
                                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#8B5CF6'}
                                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#334155'}>
                                    {l}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
