'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Network, Workflow, BarChart3, Fingerprint, Box, Layers, HardDrive } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { services } from '../../lib/services-data';

export default function SystemsPage() {
    const icons: any = {
        'custom-software': Box,
        'autonomous-systems': Cpu,
        'workflow-automation': Workflow,
        'cloud-devops': Network,
        'data-intelligence': BarChart3,
        'cybersecurity': Fingerprint,
        'api-integrations': Layers,
        'digital-transformation': HardDrive,
        'ui-ux-design': Layers,
    };

    return (
        <main style={{ background: '#020203', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="matrix-grid" />

            {/* Schematic Hero */}
            <section style={{ height: '70vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="mono" style={{ color: 'var(--nex-accent)', marginBottom: 30 }}>// SYSTEM_INFRASTRUCTURE_SCHEMATIC_v4.0</div>
                        <h1 style={{ fontSize: 'clamp(50px, 12vw, 160px)', fontWeight: 300, lineHeight: 0.85, letterSpacing: '-0.07em' }}>
                            THE <br />
                            <span className="text-shimmer" style={{ fontWeight: 800 }}>INFRASTRUCTURE.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* The Grid: Interlocking Functional Modules */}
            <section className="container-nex" style={{ paddingBottom: 240 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 1, background: 'rgba(255,255,255,0.05)' }}>
                    {services.map((s, i) => {
                        const Icon = icons[s.slug] || Box;
                        const spans = ['span 4', 'span 4', 'span 4', 'span 6', 'span 6', 'span 12'];
                        return (
                            <motion.div 
                                key={s.slug} 
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }} 
                                transition={{ delay: i * 0.05 }}
                                style={{ gridColumn: spans[i % spans.length] }}
                            >
                                <Link href={`/services/${s.slug}`} style={{ textDecoration: 'none' }}>
                                    <div style={{ 
                                        padding: '80px 60px', background: '#020203', height: '100%',
                                        transition: 'all 0.6s ease', cursor: 'pointer',
                                        position: 'relative'
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.01)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = '#020203';
                                    }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 60 }}>
                                            <Icon size={24} style={{ color: 'var(--nex-accent)' }} />
                                            <span className="mono" style={{ fontSize: 9 }}>MOD_REF / 0X_{i+1}</span>
                                        </div>

                                        <h3 style={{ fontSize: 32, fontWeight: 700, color: 'white', marginBottom: 20 }}>{s.title}</h3>
                                        <div className="mono" style={{ fontSize: 9, color: 'var(--nex-accent)', marginBottom: 30 }}>&gt; UNIT_STATUS: OPTIMAL</div>
                                        
                                        <p style={{ fontSize: 13, color: '#404040', lineHeight: 2, marginBottom: 60, minHeight: 80 }}>
                                            {s.description}
                                        </p>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                             <div className="mono" style={{ fontSize: 10, color: 'var(--nex-accent)', display: 'flex', alignItems: 'center', gap: 10 }}>
                                                 VIEW_TECHNICAL_SPEC <ArrowUpRight size={14} />
                                             </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </main>
    );
}
