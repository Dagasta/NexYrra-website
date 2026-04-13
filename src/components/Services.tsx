'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Cpu, Workflow, Network, BarChart3, Fingerprint, Zap } from 'lucide-react';
import { services } from '../lib/services-data';

const Services = () => {
    const icons: any = {
        'custom-software': Box,
        'autonomous-systems': Cpu,
        'workflow-automation': Workflow,
        'cloud-devops': Network,
        'data-intelligence': BarChart3,
        'cybersecurity': Fingerprint,
    };

    return (
        <section id="capabilities" style={{ padding: '240px 0', position: 'relative', background: 'white' }}>
            <div className="section-line" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }} />
            
            <div className="container-nex">
                {/* Header (Elite Clean) */}
                <div style={{ marginBottom: 120, textAlign: 'center' }}>
                    <div className="mono" style={{ marginBottom: 20 }}>// NODAL_CAPABILITIES_MATRIX</div>
                    <h2 style={{ fontSize: 'clamp(44px, 8vw, 100px)', fontWeight: 900, lineHeight: 0.9, color: 'var(--nex-void)' }}>
                        SYSTEM <br />
                        <span style={{ color: '#8B5CF6' }}>ARCHITECTURE.</span>
                    </h2>
                    <p style={{ marginTop: 40, fontSize: 18, color: '#64748B', maxWidth: 600, margin: '40px auto 0', fontWeight: 300 }}>
                        High-performance digital foundations designed for absolute operational dominance. 
                        Interconnected, resilient, and virtually indestructible.
                    </p>
                </div>

                {/* THE LUXURY BENTO (High interaction) */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(12, 1fr)', 
                    gridAutoRows: 'minmax(300px, auto)',
                    gap: 30
                }} className="grid-mobile-1">
                    
                    {services.map((s, i) => {
                        const Icon = icons[s.slug] || Box;
                        const spans = ['span 7', 'span 5', 'span 5', 'span 7', 'span 12', 'span 6', 'span 6'];
                        const span = spans[i % spans.length];

                        return (
                            <motion.div
                                key={s.slug}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ gridColumn: span, position: 'relative' }}
                            >
                                <div className="glass-luxe h-full" style={{ padding: '60px', display: 'flex', flexDirection: 'column', borderRadius: 0 }}>
                                    
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 60, alignItems: 'center' }}>
                                        <div style={{ padding: 15, background: 'rgba(139,92,246,0.05)', borderRadius: 2 }}>
                                            <Icon size={24} style={{ color: '#8B5CF6' }} />
                                        </div>
                                        <div className="mono" style={{ fontSize: 9, opacity: 0.3 }}>NODE_0{i+1}</div>
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: 32, fontWeight: 800, color: 'var(--nex-void)', marginBottom: 20, letterSpacing: '-0.04em' }}>{s.title}</h3>
                                        <p style={{ fontSize: 14, color: '#64748B', lineHeight: 2, maxWidth: 400 }}>
                                            {s.description}
                                        </p>
                                    </div>

                                    {/* Data Stream (Visual Wow) */}
                                    <div style={{ marginTop: 60, borderTop: '1px solid rgba(139,92,246,0.1)', paddingTop: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                         <div className="mono" style={{ fontSize: 8 }}>LATENCY / OPTIMAL</div>
                                         <div style={{ display: 'flex', gap: 5 }}>
                                             {[...Array(4)].map((_, j) => (
                                                 <motion.div
                                                    key={j}
                                                    animate={{ opacity: [0.1, 1, 0.1] }}
                                                    transition={{ repeat: Infinity, duration: 2, delay: j * 0.2 }}
                                                    style={{ width: 8, height: 1, background: '#8B5CF6' }}
                                                 />
                                             ))}
                                         </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
