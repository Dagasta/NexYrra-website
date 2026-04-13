'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Network, Workflow, BarChart3, Fingerprint, Box, Layers, HardDrive, Sparkles } from 'lucide-react';
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
        <main style={{ background: 'white', minHeight: '100vh', color: 'var(--nex-void)' }}>
            <Navbar />
            <div className="mesh-bg" />

            {/* Schematic Hero */}
            <section style={{ height: '70vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 30 }}>
                             <Sparkles size={16} style={{ color: '#8B5CF6' }} />
                             <span className="mono" style={{ color: '#8B5CF6' }}>// SYSTEM_INFRASTRUCTURE_DIRECTORY</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(50px, 12vw, 150px)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.07em' }}>
                            CORE <br />
                            <span style={{ color: '#8B5CF6' }}>INFRASTRUCTURE.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* The Matrix: Luxury Schematic Grid */}
            <section className="container-nex" style={{ paddingBottom: 240 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 1, background: 'rgba(139,92,246,0.1)' }}>
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
                                        padding: '80px 60px', background: 'white', height: '100%',
                                        transition: 'all 0.6s ease', cursor: 'pointer',
                                        position: 'relative'
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(139,92,246,0.01)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'white';
                                    }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 60 }}>
                                            <div style={{ padding: 15, background: 'rgba(139,92,246,0.05)', borderRadius: 2 }}>
                                                <Icon size={24} style={{ color: '#8B5CF6' }} />
                                            </div>
                                            <span className="mono" style={{ fontSize: 9, opacity: 0.3 }}>UX_MOD_{i+1}</span>
                                        </div>

                                        <h3 style={{ fontSize: 28, fontWeight: 800, color: 'var(--nex-void)', marginBottom: 20 }}>{s.title}</h3>
                                        <div className="mono" style={{ fontSize: 9, color: '#8B5CF6', marginBottom: 30 }}>&gt; UNIT_SYNEC_OK</div>
                                        
                                        <p style={{ fontSize: 13, color: '#64748B', lineHeight: 2, marginBottom: 60, minHeight: 80 }}>
                                            {s.description}
                                        </p>

                                        <div className="mono" style={{ fontSize: 10, color: '#8B5CF6', display: 'flex', alignItems: 'center', gap: 10 }}>
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
