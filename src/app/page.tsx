'use client';

import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Activity, Cpu, Layers, Radio, MousePointer2 } from 'lucide-react';

const SYSTEM_LOGS = [
    'CORE_SYNC_ESTABLISHED',
    'ARCHITECTING_DIGITAL_NODES',
    'ENTROPY_BUFFER_ACTIVE',
    'ENCRYPTING_LEGACY_STREAMS',
];

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

    // Section Snap/Reveal Logics
    const scale = useTransform(smoothProgress, [0.8, 1], [1, 1.2]);
    const opacity = useTransform(smoothProgress, [0.9, 1], [1, 0.5]);

    // Ticker Logic
    const [logIdx, setLogIdx] = useState(0);
    useEffect(() => {
        const i = setInterval(() => setLogIdx(p => (p + 1) % SYSTEM_LOGS.length), 2500);
        return () => clearInterval(i);
    }, []);

    return (
        <main ref={containerRef} style={{ background: '#020203', color: 'white' }}>
            <Navbar />
            
            {/* THE $60K HUD (Fixed GUI) */}
            <div style={{ position: 'fixed', bottom: 40, right: 40, zIndex: 100 }} className="hide-mobile">
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
                    <div style={{ textAlign: 'right' }}>
                         <div className="mono" style={{ color: 'var(--nex-accent)', marginBottom: 5 }}>[ SYSTEM_STATUS ]</div>
                         <AnimatePresence mode="wait">
                             <motion.div key={logIdx} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="mono" style={{ fontSize: 9 }}>
                                 {SYSTEM_LOGS[logIdx]}
                             </motion.div>
                         </AnimatePresence>
                    </div>
                    <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.1)' }} />
                    <div className="mono" style={{ color: 'white' }}>NX_OS_PROD_v3</div>
                </div>
            </div>

            <Hero />

            {/* THE DIRECTIVE (Kinetic Marquee) */}
            <section style={{ 
                height: '100vh', display: 'flex', alignItems: 'center', 
                background: '#020203', borderTop: '1px solid rgba(255,255,255,0.02)',
                position: 'relative', overflow: 'hidden'
            }}>
                <div className="section-marker"><div className="marker-label">SYSTEM_DIRECTIVE</div></div>
                
                <div style={{ transform: 'rotate(-5deg) scale(1.2)', width: '120vw', marginLeft: '-10vw' }}>
                    <div style={{ display: 'flex', whiteSpace: 'nowrap', gap: 60, animation: 'marquee-rtl 120s linear infinite' }}>
                        {[...Array(6)].map((_, i) => (
                            <h2 key={i} style={{ fontSize: 'clamp(80px, 15vw, 300px)', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.03)' }}>
                                DECONSTRUCT_REBUILD. ARCHITECT_LEGACY. 
                            </h2>
                        ))}
                    </div>
                    <div style={{ display: 'flex', whiteSpace: 'nowrap', gap: 60, animation: 'marquee-ltr 100s linear infinite', marginTop: -40 }}>
                        {[...Array(6)].map((_, i) => (
                            <h2 key={i} className="text-shimmer" style={{ fontSize: 'clamp(80px, 15vw, 300px)', fontWeight: 300 }}>
                                NEXYRRA. SYSTEMS_FOR_THE_1_PERCENT.
                            </h2>
                        ))}
                    </div>
                </div>
            </section>

            <Services />

            {/* THE VOID_PORTAL (Manifesto Upgrade) */}
            <section style={{ padding: '240px 0', position: 'relative', background: '#000' }}>
                 <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 120 }} className="grid-mobile-1">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                            <div className="mono" style={{ color: 'var(--nex-accent)', marginBottom: 40 }}>00_MISSION_STATEMENT</div>
                            <h3 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.2, color: '#f0f0f0' }}>
                                WE DO NOT SERVE MARKETS. <br />
                                <span style={{ opacity: 0.1 }}>WE ARCHITECT DOMINANCE.</span> <br />
                                EVERY LINE OF CODE IS A <br />
                                <span className="text-shimmer" style={{ fontWeight: 800 }}>STRATEGIC ASSET.</span>
                            </h3>
                        </motion.div>

                        <div style={{ alignSelf: 'center' }}>
                            <div className="glass-hpi" style={{ padding: '60px' }}>
                                <div className="mono" style={{ marginBottom: 30 }}>[ SYSTEM_METRICS ]</div>
                                {[
                                    { l: 'EFFICIENCY', v: '99.98%' },
                                    { l: 'ARCHITECTURE', v: 'BESPOKE' },
                                    { l: 'VELOCITY', v: 'MAXIMAL' }
                                ].map((m, i) => (
                                    <div key={i} style={{ marginBottom: 30 }}>
                                        <div className="mono" style={{ fontSize: 8, opacity: 0.2 }}>{m.l}</div>
                                        <div style={{ fontSize: 24, fontWeight: 700 }}>{m.v}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                 </div>
            </section>

            {/* THE FINAL UPLINK (Cinema Scale) */}
            <section style={{ height: '120vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020203', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(var(--nex-accent) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                <motion.div style={{ scale, opacity, textAlign: 'center', zIndex: 10 }}>
                    <div className="mono" style={{ letterSpacing: '1.5em', marginBottom: 60 }}>INITIATE_UPGRADE_PROTOCOL</div>
                    <h2 style={{ fontSize: 'clamp(60px, 15vw, 240px)', fontWeight: 800, color: 'white', letterSpacing: '-0.08em', lineHeight: 0.8 }}>
                        $Y$TEM.<br />
                        <span className="text-shimmer">REBORN.</span>
                    </h2>
                    <div style={{ marginTop: 120 }}>
                        <Link href="/contact" className="btn-nex-v3" style={{ padding: '30px 100px', fontSize: 16 }}>
                            AUTHENTICATE_SESSION <MousePointer2 size={16} style={{ marginLeft: 20 }} />
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
