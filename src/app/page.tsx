'use client';

import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BrainCircuit } from 'lucide-react';

export default function Home() {
    return (
        <main style={{ background: '#05060f', color: 'white' }}>
            <Navbar />
            <div className="neural-overlay" />
            
            <Hero />

            <section style={{ 
                height: '30vh', display: 'flex', alignItems: 'center', 
                background: '#05060f', borderTop: '1px solid rgba(255,255,255,0.05)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                position: 'relative', overflow: 'hidden' 
            }}>
                <div style={{ display: 'flex', whiteSpace: 'nowrap', gap: 100, animation: 'marquee-rtl 100s linear infinite' }}>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} style={{ display: 'flex', gap: 100, alignItems: 'center' }}>
                            <h2 className="text-bionic" style={{ fontSize: '100px', fontWeight: 800 }}>BEYOND_THE_BRAIN_</h2>
                            <h2 style={{ fontSize: '100px', color: '#1E293B', opacity: 0.1, WebkitTextStroke: '2px white' }}>NEXYRRA_CORE_</h2>
                        </div>
                    ))}
                </div>
            </section>

            <Services />

            <section style={{ padding: '240px 0', background: '#000', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 100, width: 600, height: 600, background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(100px)' }} />
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ textAlign: 'center' }}>
                        <BrainCircuit size={80} style={{ color: '#8B5CF6', marginBottom: 60, margin: '0 auto 60px' }} />
                        <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#22D3EE', marginBottom: 40, display: 'block' }}>CORE_DIRECTIVE_v4.0</span>
                        <h2 className="text-bionic" style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontWeight: 800, lineHeight: 1.2 }}>
                            WE ARE NOT BUILDING TOOLS.<br />
                            <span style={{ opacity: 0.2 }}>WE ARE BUILDING INTELLIGENCE.</span><br />
                            THE ARCHITECTURE OF THE<br />
                            <span className="shimmer-text">NEXT CIVILIZATION.</span>
                        </h2>
                        <div style={{ marginTop: 80 }}>
                            <Link href="/contact" className="btn-beyond">
                                INITIATE_SYNEC <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
