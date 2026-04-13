'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, HardDrive, Share2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { services } from '../../lib/services-data';

export default function SystemsPage() {
    return (
        <main style={{ background: '#05060e', minHeight: '100vh', color: 'white', position: 'relative' }}>
            <Navbar />

            {/* Blueprint Grid Overlay */}
            <div style={{
                position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
                backgroundImage: 'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(34,211,238,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }} />

            {/* Page Hero: System Architecture */}
            <section style={{ paddingTop: 180, paddingBottom: 100, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 1200, height: 600, background: 'radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
                
                <div className="container-nex" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 15, marginBottom: 30 }}>
                             {[Cpu, Layers, HardDrive].map((Icon, i) => (
                                 <div key={i} style={{ padding: 10, background: 'rgba(34,211,238,0.03)', border: '1px solid rgba(34,211,238,0.1)' }}>
                                     <Icon size={16} style={{ color: '#22D3EE' }} />
                                 </div>
                             ))}
                        </div>
                        <span className="font-cyber" style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.5em', color: '#22D3EE', display: 'block', marginBottom: 20 }}>ENGINEERING_BLUEPRINT_v4</span>
                        <h1 className="font-title" style={{ fontSize: 'clamp(50px, 9vw, 120px)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.06em', marginBottom: 40 }}>
                            THE <span className="shimmer-text">SYSTEMS.</span>
                        </h1>
                        <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.8, maxWidth: 580, margin: '0 auto', fontWeight: 400 }}>
                            We don't provide features. We engineer interconnected digital infrastructure that eliminates operational entropy at scale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Systems Matrix */}
            <section className="container-nex" style={{ paddingBottom: 200, position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 420px), 1fr))', gap: '2px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    {services.map((s, i) => (
                        <motion.div 
                            key={s.slug} 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Link href={`/services/${s.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                                <div style={{ 
                                    padding: '50px 40px', background: '#05060e', height: '100%',
                                    transition: 'all 0.3s ease', cursor: 'pointer',
                                    position: 'relative', overflow: 'hidden'
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(34,211,238,0.02)')}
                                onMouseLeave={e => (e.currentTarget.style.background = '#05060e')}
                                >
                                    {/* Component ID */}
                                    <div className="font-cyber" style={{ fontSize: 8, color: '#1E293B', marginBottom: 20, display: 'flex', justifyContent: 'space-between' }}>
                                        <span>MODULE_REF: {s.slug.toUpperCase()}</span>
                                        <Share2 size={10} />
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
                                        <div style={{ fontSize: 24 }}>{s.icon}</div>
                                        <h3 className="font-title" style={{ fontSize: 22, fontWeight: 900, color: 'white' }}>{s.title}</h3>
                                    </div>

                                    <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.7, marginBottom: 30, minHeight: 60 }}>
                                        {s.description}
                                    </p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
                                        {s.features.slice(0, 3).map(f => (
                                            <span key={f} style={{ fontSize: 9, color: '#334155', border: '1px solid rgba(255,255,255,0.05)', padding: '5px 10px', fontFamily: 'monospace' }}>
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: 20 }}>
                                        <span className="font-cyber" style={{ fontSize: 9, color: '#22D3EE', fontWeight: 700 }}>SPEC_VIEW_ACTIVE</span>
                                        <ArrowUpRight size={14} style={{ color: '#22D3EE' }} />
                                    </div>
                                    
                                    {/* Decoration line */}
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '10%', height: 1, background: '#22D3EE' }} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
