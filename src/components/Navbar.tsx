'use client';

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { NexyrraWordmark } from './Logo';

export default function Navbar() {
    return (
        <nav style={{ 
            position: 'fixed', top: 40, left: 0, width: '100%', zIndex: 100, 
            display: 'flex', justifyContent: 'center' 
        }}>
            <div className="nav-hud" style={{ 
                width: 'min(95%, 1500px)', padding: '15px 30px', 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
            }}>
                {/* Left side: Logo & Transmission text */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                         <NexyrraWordmark size={24} />
                    </Link>
                    <div className="sub-mono hide-mobile" style={{ color: 'var(--matrix-cyan)', opacity: 0.8 }}>
                        TRANSMISSION_V4.0
                    </div>
                </div>

                {/* Center / Right Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
                    <div className="hide-mobile" style={{ display: 'flex', gap: 30 }}>
                        {['ARCHIVE', 'SYSTEMS', 'MANIFESTO', 'UPLINK'].map(link => (
                            <Link 
                                key={link} href={`/${link.toLowerCase() === 'archive' ? 'cases' : link.toLowerCase() === 'manifesto' ? 'about' : link.toLowerCase() === 'uplink' ? 'contact' : link.toLowerCase()}`}
                                className="sub-mono"
                                style={{
                                    textDecoration: 'none', color: '#FFFFFF', transition: 'opacity 0.2s',
                                    fontWeight: 700, letterSpacing: '0.2em'
                                }}
                            >
                                <span style={{ opacity: 0.6, cursor: 'pointer' }} onMouseOver={(e)=> e.currentTarget.style.opacity='1'} onMouseOut={(e)=> e.currentTarget.style.opacity='0.6'}>
                                    {link}
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Link href="/contact" style={{ textDecoration: 'none' }}>
                            <button className="btn-matrix" style={{ padding: '16px 30px', background: 'linear-gradient(90deg, #00F0FF, #8E2DE2)' }}>
                                INITIALIZE_SYNC
                            </button>
                        </Link>
                        
                        {/* Hamburger Box */}
                        <button style={{ 
                            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                            width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', color: '#fff'
                        }}>
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
