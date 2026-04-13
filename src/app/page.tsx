'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import NeuralPlayground from '../components/NeuralPlayground';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BrainCircuit } from 'lucide-react';

export default function Home() {
    return (
        <main style={{ backgroundColor: 'var(--aether-bg)' }}>
            <Navbar />
            
            <Hero />

            {/* Cinematic Transition Marquee */}
            <section style={{ 
                height: '25vh', display: 'flex', alignItems: 'center', 
                borderTop: '1px solid rgba(168,85,247,0.1)',
                borderBottom: '1px solid rgba(168,85,247,0.1)',
                position: 'relative', overflow: 'hidden',
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)'
            }}>
                <div style={{ display: 'flex', whiteSpace: 'nowrap', gap: 100, animation: 'marquee-rtl 100s linear infinite' }}>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} style={{ display: 'flex', gap: 100, alignItems: 'center' }}>
                            <h2 className="text-gradient" style={{ fontSize: '80px', fontWeight: 900 }}>BEYOND_COMPUTATION_</h2>
                            <h2 style={{ fontSize: '80px', color: 'transparent', WebkitTextStroke: '1px rgba(168,85,247,0.3)' }}>AETHERIC_NEXUS_</h2>
                        </div>
                    ))}
                </div>
            </section>

            <NeuralPlayground />

            <Services />

            {/* Aetheric Core Directive */}
            <section style={{ padding: '240px 0', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw', background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 60%)', filter: 'blur(100px)', zIndex: 0 }} />
                
                <div className="container-nexus" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{ 
                            width: 120, height: 120, margin: '0 auto 60px', 
                            background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(168,85,247,0.2)', 
                            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 0 50px rgba(168,85,247,0.1)'
                        }}>
                             <BrainCircuit size={50} style={{ color: '#A855F7' }} />
                        </div>
                        
                        <span className="mono-diag" style={{ color: '#22D3EE', marginBottom: 40, display: 'block' }}>CORE_DIRECTIVE_v7.0</span>
                        
                        <h2 style={{ fontSize: 'clamp(40px, 6vw, 90px)', fontWeight: 900, lineHeight: 1.1 }}>
                            WE ARE NOT BUILDING TOOLS.<br />
                            <span style={{ color: '#E0AAFF' }}>WE ARE BUILDING INTELLIGENCE.</span><br />
                            THE ARCHITECTURE OF THE <br />
                            <span className="text-gradient shimmer-luxe">NEXT CIVILIZATION.</span>
                        </h2>
                        
                        <div style={{ marginTop: 80 }}>
                            <Link href="/contact" style={{ textDecoration: 'none' }}>
                                <button className="btn-nexus">
                                   INITIATE_SYNEC_LINK <ArrowRight size={20} />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
