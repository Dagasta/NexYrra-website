'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Network, Workflow, BarChart3, Fingerprint, Box, Layers, HardDrive, Zap } from 'lucide-react';
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
            <div className="neural-bg" />

            {/* Schematic Hero */}
            <section style={{ height: '70vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 30 }}>
                             <Zap size={16} style={{ color: '#22D3EE' }} />
                             <span className="mono" style={{ color: '#22D3EE' }}>// INFRASTRUCTURE_MATRIX_v5.0</span>
                        </div>
                        <h1 className="glow-text" style={{ fontSize: 'clamp(50px, 12vw, 150px)', lineHeight: 0.85, letterSpacing: '-0.07em' }}>
                            CORE <br />
                            <span style={{ color: '#A855F7' }}>SYSTEMS.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* The Matrix: Void Schematic Grid */}
            <section className="container-nex" style={{ paddingBottom: 240 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 1, background: 'rgba(255,255,255,0.05)' }}>
                    {services.map((s, i) => {
                        const Icon = icons[s.slug] || Box;
                        const spans = ['span 4', 'span 4', 'span 4', 'span 8', 'span 4', 'span 4', 'span 8', 'span 6', 'span 6'];
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
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(168, 85, 247, 0.02)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = '#020203';
                                    }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 60 }}>
                                            <div style={{ padding: 15, background: 'rgba(34, 211, 238, 0.03)', border: '1px solid rgba(34, 211, 238, 0.1)' }}>
                                                <Icon size={24} style={{ color: '#22D3EE' }} />
                                            </div>
                                            <span className="mono" style={{ fontSize: 9, opacity: 0.3 }}>UX_MOD_{i+1}</span>
                                        </div>

                                        <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 20 }}>{s.title}</h3>
                                        <div className="mono" style={{ fontSize: 9, color: '#A855F7', marginBottom: 30 }}>&gt; UNIT_STATUS: OPTIMAL</div>
                                        
                                        <p style={{ fontSize: 13, color: '#64748B', lineHeight: 2, marginBottom: 60, minHeight: 80 }}>
                                            {s.description}
                                        </p>

                                        <div className="mono" style={{ fontSize: 10, color: '#22D3EE', display: 'flex', alignItems: 'center', gap: 10 }}>
                                            TECHNICAL_SPEC <ArrowUpRight size={14} />
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
