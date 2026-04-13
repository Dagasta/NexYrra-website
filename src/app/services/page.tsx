'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, HardDrive, Network, Workflow, BarChart3, Fingerprint, Box } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { services } from '../../lib/services-data';

export default function SystemsPage() {
    const icons: Record<string, any> = {
        'custom-software': Box,
        'autonomous-systems': Cpu,
        'workflow-automation': Workflow,
        'cloud-devops': Network,
        'data-intelligence': BarChart3,
        'cybersecurity': Fingerprint,
        'api-integrations': Layers,
        'digital-transformation': HardDrive,
        'ui-ux-design': Layers, // reused
    };

    return (
        <main style={{ background: '#050608', minHeight: '100vh', color: 'white', position: 'relative' }}>
            <Navbar />

            {/* Circuit Overlay */}
            <div className="circuit-bg" style={{ opacity: 0.1, position: 'fixed' }} />

            {/* Page Hero: The Schematic */}
            <section style={{ paddingTop: 200, paddingBottom: 100, position: 'relative', overflow: 'hidden' }}>
                <div className="container-nex">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                        <div style={{ display: 'flex', gap: 10, marginBottom: 40 }}>
                             {[1, 2, 3].map(i => (
                                 <div key={i} style={{ width: 12, height: 12, border: '1px solid #8B5CF6', opacity: i * 0.3 }} />
                             ))}
                        </div>
                        <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#8B5CF6', display: 'block', marginBottom: 20 }}>
                            INFRASTRUCTURE_SCHEMATICS.V4
                        </span>
                        <h1 className="font-title" style={{ fontSize: 'clamp(50px, 9vw, 120px)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.06em', marginBottom: 40 }}>
                            SYSTEM <br />
                            <span className="shimmer-text">ARCHITECTURE.</span>
                        </h1>
                        <p style={{ fontSize: 18, color: '#4B5563', lineHeight: 1.8, maxWidth: 620, fontWeight: 300 }}>
                            We architecturalize digital constraints. Our systems are engineered as modular node-sets designed for absolute resiliency and throughput.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Systems Grid: Bento Hybrid */}
            <section className="container-nex" style={{ paddingBottom: 200 }}>
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
                                        padding: '60px 40px', background: '#050608', height: '100%',
                                        transition: 'all 0.4s ease', cursor: 'pointer',
                                        position: 'relative', overflow: 'hidden'
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(139,92,246,0.02)';
                                        (e.currentTarget as HTMLElement).style.paddingLeft = '50px';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = '#050608';
                                        (e.currentTarget as HTMLElement).style.paddingLeft = '40px';
                                    }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
                                            <Icon size={24} style={{ color: '#8B5CF6' }} />
                                            <span className="font-cyber" style={{ fontSize: 8, color: '#1E293B' }}>SYS_MOD_{i+1}</span>
                                        </div>

                                        <h3 className="font-title text-kinetic" style={{ fontSize: 24, fontWeight: 900, color: 'white', marginBottom: 15 }}>{s.title}</h3>
                                        <div style={{ fontSize: 10, color: '#4B5563', fontFamily: 'monospace', letterSpacing: '0.1em', marginBottom: 25 }}>
                                            &gt; STATUS_CODE: 200_OK
                                        </div>
                                        
                                        <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.7, marginBottom: 40, minHeight: 60 }}>
                                            {s.description}
                                        </p>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                             <div style={{ display: 'flex', gap: 5 }}>
                                                 {[1, 2, 3].map(j => <div key={j} style={{ width: 8, height: 2, background: '#1E293B' }} />)}
                                             </div>
                                             <ArrowUpRight size={14} style={{ color: '#1E293B' }} />
                                        </div>
                                        
                                        {/* Hover Glow Edge */}
                                        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 2, background: '#8B5CF6', opacity: 0 }} />
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
