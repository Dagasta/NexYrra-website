'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import NeuralPlayground from '../components/NeuralPlayground';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
    const { scrollYProgress } = useScroll();
    // Subtly scale the whole application environment down as user scrolls deep, creating deep OS depth
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

    return (
        <main style={{ backgroundColor: 'transparent' }}>
            <Navbar />
            
            <motion.div style={{ scale, transformOrigin: 'top center', perspective: '3000px' }}>
                <Hero />

                {/* System Marquee / Divider */}
                <section style={{ 
                    height: '15vh', display: 'flex', alignItems: 'center', 
                    borderTop: '1px solid rgba(6,182,212,0.2)',
                    borderBottom: '1px solid rgba(6,182,212,0.2)',
                    position: 'relative', overflow: 'hidden',
                    background: 'rgba(3,0,8,0.5)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 20
                }}>
                    <div className="scanline" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />
                    <div style={{ display: 'flex', whiteSpace: 'nowrap', gap: 100, animation: 'marquee-rtl 100s linear infinite' }}>
                        {[...Array(8)].map((_, i) => (
                            <div key={i} style={{ display: 'flex', gap: 100, alignItems: 'center' }}>
                                <h2 className="mono-sys" style={{ fontSize: '40px', color: 'var(--sys-neon-blue)', opacity: 0.8 }}>// DEPLOY_INFRASTRUCTURE</h2>
                                <h2 className="mono-sys" style={{ fontSize: '40px', color: 'transparent', WebkitTextStroke: '1px var(--sys-neon-purple)' }}>AWAITING_INPUT_</h2>
                            </div>
                        ))}
                    </div>
                </section>

                <NeuralPlayground />

                <Services />

                {/* OS Data Footer Area */}
                <section style={{ padding: '200px 0 100px 0', position: 'relative', zIndex: 10 }}>
                    <div className="container-os">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                            className="hud-panel"
                            style={{ padding: '80px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <div className="mono-sys" style={{ marginBottom: 20, color: 'var(--sys-neon-blue)' }}>CORE_DIRECTIVES // EXECUTE</div>
                            
                            <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.1, marginBottom: 60 }}>
                                WE BUILD <br />
                                <span className="glow-text text-gradient" style={{ color: 'var(--sys-neon-purple)' }}>INTELLIGENCE.</span>
                            </h2>
                            
                            <Link href="/contact" style={{ textDecoration: 'none' }}>
                                <button className="btn-command" style={{ fontSize: 16, padding: '20px 60px' }}>
                                    INITIATE_SYSTEM_LINK
                                </button>
                            </Link>

                        </motion.div>
                    </div>
                </section>
                
                <Footer />
            </motion.div>
        </main>
    );
}
