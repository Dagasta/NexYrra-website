'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Phone, Globe, ArrowUpRight } from 'lucide-react';

const LINKS = [
    { title: 'SYSTEMS', items: [{ l: 'AI Services', h: '/services' }, { l: 'Software Eng', h: '/services' }, { l: 'Case Studies', h: '/cases' }, { l: 'Signals', h: '/signals' }] },
    { title: 'COMPANY', items: [{ l: 'About Nexyrra', h: '/about' }, { l: 'Contact Us', h: '/contact' }, { l: 'Admin Portal', h: '/admin/login' }] },
    { title: 'UPLINK',  items: [{ l: 'LinkedIn', h: 'https://www.linkedin.com/company/nexyrra/' }, { l: 'X / Twitter', h: 'https://x.com/nexyrra' }, { l: 'WhatsApp', h: 'https://wa.me/971503953988' }] },
];

export default function OSFooter() {
    const year = new Date().getFullYear();

    return (
        <footer style={{ position: 'relative', background: '#030305', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 80, paddingBottom: 40, overflow: 'hidden' }}>
            <div className="grid-overlay" style={{ opacity: 0.3 }} />
            {/* Top glow line */}
            <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg, transparent, #8A2BE2, #00FFFF, transparent)', opacity: 0.3 }} />

            <div className="container-os" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }} className="grid-1-mobile">

                    {/* Brand column */}
                    <div>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 24 }}>
                            <motion.img
                                src="/assets/logo.png"
                                alt="Nexyrra"
                                style={{ width: 32, height: 32, objectFit: 'contain' }}
                                animate={{ filter: ['drop-shadow(0 0 5px #8A2BE2)', 'drop-shadow(0 0 12px #8A2BE2)', 'drop-shadow(0 0 5px #8A2BE2)'] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700, color: 'white' }}>
                                NEX<span style={{ color: 'var(--neon-purple)' }}>YRRA</span>
                            </span>
                        </Link>

                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.28)', lineHeight: 1.9, maxWidth: 300, fontFamily: 'var(--font-mono)', marginBottom: 28 }}>
                            // NEXYRRA_SYSTEMS_v3.0<br />
                            // AI AGENCY — DUBAI, UAE 🇦🇪<br />
                            // STATUS: OPERATIONAL
                        </p>

                        {/* Contact */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                            <a href="tel:+971503953988" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.3)', fontSize: 12, fontFamily: 'var(--font-mono)', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon-cyan)') }
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)') }>
                                <Phone size={12} /> +971 50 395 3988
                            </a>
                            <a href="https://nexyrra.com" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.3)', fontSize: 12, fontFamily: 'var(--font-mono)', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--neon-cyan)') }
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)') }>
                                <Globe size={12} /> nexyrra.com
                            </a>
                        </div>

                        {/* Social icons */}
                        <div style={{ display: 'flex', gap: 10, position: 'relative', zIndex: 10 }}>
                            {[
                                { Icon: Twitter,  href: 'https://x.com/nexyrra',                          label: 'X (Twitter)' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/company/nexyrra/',      label: 'LinkedIn' },
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    title={label}
                                    style={{
                                        width: 40, height: 40, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                                        color: 'rgba(255,255,255,0.35)', textDecoration: 'none', cursor: 'pointer',
                                        transition: 'all 0.25s', position: 'relative', zIndex: 20, pointerEvents: 'auto',
                                    }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(138,43,226,0.15)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(138,43,226,0.5)'; (e.currentTarget as HTMLElement).style.color = '#8A2BE2'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(138,43,226,0.3)'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                                >
                                    <Icon size={16} style={{ pointerEvents: 'none' }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav columns */}
                    {LINKS.map(col => (
                        <div key={col.title}>
                            <div className="mono" style={{ fontSize: 9, color: 'var(--neon-purple)', letterSpacing: '0.3em', marginBottom: 24 }}>{col.title}</div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                                {col.items.map(item => (
                                    <li key={item.l}>
                                        <Link
                                            href={item.h}
                                            target={item.h.startsWith('http') ? '_blank' : undefined}
                                            rel={item.h.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-ui)' }}
                                            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                                        >
                                            {item.l}
                                            {item.h.startsWith('http') && <ArrowUpRight size={11} />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{ paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                    <span className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.15)' }}>
                        © {year} NEXYRRA_SYSTEMS. ALL_RIGHTS_RESERVED.
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                        <span className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.1)' }}>LATENCY: 0.002MS // UPTIME: 99.999%</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <div className="status-dot" />
                            <span className="mono" style={{ fontSize: 8, color: 'rgba(0,255,136,0.4)' }}>SYS_ONLINE</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
