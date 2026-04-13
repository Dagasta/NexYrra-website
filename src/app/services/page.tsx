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
        <main style={{ background: '#0a0b14', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="neural-overlay" />

            {/* Schematic Hero */}
            <section style={{ height: '70vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 30 }}>
                             <Zap size={16} style={{ color: '#22D3EE' }} />
                             <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#22D3EE' }}>SYSTEM_DIRECTORY.SYS</span>
                        </div>
                        <h1 className="text-bionic" style={{ fontSize: 'clamp(50px, 12vw, 150px)', fontWeight: 800, lineHeight: 0.85, letterSpacing: '-0.07em' }}>
                            THE <span className="shimmer-text">SYSTEMS.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* The Grid: Prismatic Schematic Nodes */}
            <section className="container-nex" style={{ paddingBottom: 240 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2px', background: 'rgba(255,255,255,0.05)' }}>
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
                                        padding: '80px 60px', background: '#0a0b14', height: '100%',
                                        transition: 'all 0.6s ease', cursor: 'pointer',
                                        position: 'relative'
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = '#0a0b14';
                                    }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 60 }}>
                                            <div style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.03)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Icon size={20} style={{ color: '#8B5CF6' }} />
                                            </div>
                                            <span className="font-cyber" style={{ fontSize: 9, color: '#1E293B' }}>SYS_REF: 0X_{i+1}</span>
                                        </div>

                                        <h3 className="font-title" style={{ fontSize: 26, fontWeight: 800, color: 'white', marginBottom: 20 }}>{s.title}</h3>
                                        <div className="font-cyber" style={{ fontSize: 10, color: '#22D3EE', marginBottom: 30 }}>&gt; UNIT_SYNEC_v4_OK</div>
                                        
                                        <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 2, marginBottom: 60, minHeight: 80 }}>
                                            {s.description}
                                        </p>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                             <div className="font-cyber" style={{ fontSize: 10, color: '#22D3EE', display: 'flex', alignItems: 'center', gap: 10 }}>
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
