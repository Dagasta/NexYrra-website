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
        <main style={{ background: '#040508', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="data-layer" />

            {/* Schematic Hero */}
            <section style={{ height: '70vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 30 }}>
                             <Zap size={16} style={{ color: '#22D3EE' }} />
                             <span className="mono" style={{ color: '#22D3EE' }}>// INFRASTRUCTURE_DIRECTORY.v6</span>
                        </div>
                        <h1 style={{ color: 'white' }}>
                            CORE <br />
                            <span style={{ color: '#A855F7' }}>SYSTEMS.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* The Matrix: Cinematic Schematic Grid */}
            <section className="container-nex" style={{ paddingBottom: 240 }}>
                <div style={{ display: grid, gridTemplateColumns: 'repeat(12, 1fr)', gap: 1, background: 'rgba(255,255,255,0.02)' }} className="grid-mobile-1">
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
                                        padding: 'clamp(60px, 8vw, 100px) clamp(40px, 4vw, 60px)', 
                                        background: '#040508', height: '100%',
                                        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)', cursor: 'pointer',
                                        position: 'relative'
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(168, 85, 247, 0.015)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = '#040508';
                                    }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 60 }}>
                                            <div style={{ padding: 15, background: 'rgba(34, 211, 238, 0.03)', border: '1px solid rgba(34, 211, 238, 0.1)' }}>
                                                <Icon size={24} style={{ color: '#22D3EE' }} />
                                            </div>
                                            <span className="mono" style={{ fontSize: 9, opacity: 0.3 }}>UX_MOD_0{i+1}</span>
                                        </div>

                                        <h3 style={{ fontWeight: 800, color: 'white', marginBottom: 20 }}>{s.title}</h3>
                                        <div className="mono" style={{ fontSize: 9, color: '#A855F7', marginBottom: 30 }}>&gt; UNIT_STATUS: OPTIMAL</div>
                                        
                                        <p style={{ fontSize: 13, color: '#64748B', lineHeight: 2, marginBottom: 60, minHeight: 80 }}>
                                            {s.description}
                                        </p>

                                        <div className="mono" style={{ fontSize: 10, color: '#22D3EE', display: 'flex', alignItems: 'center', gap: 10 }}>
                                            VISUAL_SPEC <ArrowUpRight size={14} />
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
