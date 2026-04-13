'use client';

import React from 'react';
import Link from 'next/link';
import { NexyrraWordmark } from './Logo';

export default function MatrixFooter() {
    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '100px', padding: '100px 0 50px 0', background: 'rgba(0,0,0,0.5)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
                
                {/* Brand Logo & Mission */}
                <div>
                    <div style={{ marginBottom: 30 }}>
                        <NexyrraWordmark size={32} />
                    </div>
                    <p style={{ color: '#888', lineHeight: 1.8, fontSize: 16, maxWidth: 400 }}>
                        Architecting intelligent systems at the edge of possibility. Deploying autonomous architectures for the next generation of global data.
                    </p>
                </div>

                {/* Navigation and Contact Footer Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                    <div>
                        <div className="sub-mono" style={{ color: 'var(--matrix-cyan)', marginBottom: 20 }}>NEXUS_NODES</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                            {['SERVICES', 'MANIFESTO', 'CASES'].map(link => (
                                <Link 
                                    key={link} 
                                    href={`/${link.toLowerCase() === 'cases' ? 'cases' : link.toLowerCase() === 'manifesto' ? 'about' : link.toLowerCase()}`}
                                    style={{ color: '#A0A0A0', textDecoration: 'none', transition: 'color 0.2s', fontSize: 14 }}
                                >
                                    <span onMouseOver={(e)=>e.currentTarget.style.color='#FFF'} onMouseOut={(e)=>e.currentTarget.style.color='#A0A0A0'}>{link}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <div className="sub-mono" style={{ color: 'var(--matrix-purple)', marginBottom: 20 }}>SYS_ADMIN</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 15, color: '#A0A0A0', fontSize: 14 }}>
                            <div>HQ: Dubai, UAE</div>
                            <div>UPLINK: transmit@nexyrra.com</div>
                            <Link href="/contact" style={{ textDecoration: 'none', marginTop: 10 }}>
                                <button className="btn-matrix" style={{ padding: '8px 20px', fontSize: 10 }}>ESTABLISH_CONNECTION</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* Copyright Ribbon */}
            <div className="container" style={{ marginTop: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="sub-mono" style={{ opacity: 0.3 }}>© 2026 NEXYRRA ALL_RIGHTS_RESERVED</div>
                <div className="sub-mono" style={{ color: 'var(--matrix-cyan)' }}>SYSTEM_STATUS: SECURE</div>
            </div>
        </footer>
    );
}
