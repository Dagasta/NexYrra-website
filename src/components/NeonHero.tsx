'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Radio } from 'lucide-react';
import Link from 'next/link';

export default function NeonHero() {
    return (
        <section style={{ 
            minHeight: '100vh', display: 'flex', alignItems: 'center', 
            position: 'relative', overflow: 'hidden' 
        }}>
            {/* The Massive Dark Glowing Orb */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: 'min(900px, 90vw)', height: 'min(900px, 90vw)',
                background: 'radial-gradient(circle, rgba(13, 20, 35, 1) 0%, rgba(6, 8, 15, 0) 70%)',
                boxShadow: 'inset 0 0 100px rgba(0, 240, 255, 0.05), 0 0 150px rgba(0, 160, 255, 0.1)',
                borderRadius: '50%', zIndex: 0, pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10, paddingLeft: 'clamp(20px, 10vw, 150px)' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}>
                    
                    {/* Top subheader */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
                        <div style={{ width: 40, height: 1, background: 'var(--matrix-purple)' }} />
                        <div className="sub-mono" style={{ color: '#FFFFFF', letterSpacing: '0.4em' }}>ARCHITECTING INTELLIGENCE</div>
                    </div>

                    {/* Massive Typography matching exact screenshot styling */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        {/* Hidden overlapping stamp */}
                        <div className="sub-mono" style={{ position: 'absolute', bottom: '25%', left: '45%', color: 'var(--matrix-blue)', zIndex: 5, letterSpacing: '0.6em', opacity: 0.6 }}>
                            N T Q _ 0 X _ V 4 .
                        </div>

                        <h1 className="giant-heading" style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                            <span className="text-gradient-cyan text-glow-hard" style={{ zIndex: 10, position: 'relative' }}>
                                BEYOND THE
                            </span>
                            <span className="text-gradient-purple text-glow-purple" style={{ zIndex: 10, position: 'relative' }}>
                                KNOWN.
                            </span>
                        </h1>
                    </div>

                    {/* Description Paragraph */}
                    <p style={{ 
                        marginTop: 40, fontSize: 'clamp(16px, 1.5vw, 20px)', color: '#A0A0A0', 
                        lineHeight: 1.6, maxWidth: 500, fontWeight: 400 
                    }}>
                        We deconstruct reality to architect the impossible.<br/>
                        High-performance systems engineering at the<br/>
                        intersection of AI and human legacy.
                    </p>

                    {/* Gradient Button */}
                    <Link href="/services" style={{ textDecoration: 'none', display: 'inline-block', marginTop: 50 }}>
                        <button className="btn-matrix" style={{ padding: '18px 40px', fontSize: 12 }}>
                            INITIALIZE_EXPERIENCE <ArrowRight size={16} />
                        </button>
                    </Link>

                </motion.div>
            </div>

            {/* Floating Widget (Bottom Right) */}
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                style={{ 
                    position: 'absolute', bottom: 40, right: 40, 
                    border: '1px solid rgba(255,255,255,0.1)', padding: '15px 20px',
                    display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)'
                }}
            >
                <div style={{ padding: 8, background: 'rgba(157, 0, 255, 0.1)', borderRadius: '50%' }}>
                    <Radio size={16} color="var(--matrix-purple)" />
                </div>
                <div>
                    <div className="sub-mono" style={{ color: 'var(--matrix-purple)', marginBottom: 2 }}>SECURE_UPLINK</div>
                    <div className="sub-mono" style={{ fontSize: 8, opacity: 0.4 }}>ID: HX_SYNC_TMR_001</div>
                </div>
            </motion.div>

        </section>
    );
}
