'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Cpu, Workflow, Network, BarChart3, Fingerprint, Zap } from 'lucide-react';
import { services } from '../lib/services-data';

const Services = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const icons: any = {
        'custom-software': Box,
        'autonomous-systems': Cpu,
        'workflow-automation': Workflow,
        'cloud-devops': Network,
        'data-intelligence': BarChart3,
        'cybersecurity': Fingerprint,
    };

    return (
        <section id="capabilities" style={{ padding: '240px 0', position: 'relative', background: '#040508' }}>
            <div className="data-layer" style={{ opacity: 0.1 }} />
            
            <div className="container-nex" style={{ position: 'relative', zIndex: 10 }}>
                {/* Section Header: The System Matrix */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 100, marginBottom: 120 }} className="grid-mobile-1">
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                             <Zap size={14} style={{ color: '#A855F7' }} />
                             <span className="mono" style={{ color: '#A855F7' }}>SYSTEM_CAPABILITIES.v6</span>
                        </div>
                        <h2 style={{ color: 'white' }}>
                            CORE <br />
                            <span style={{ color: '#A855F7' }}>ARCHITECTURE.</span>
                        </h2>
                    </div>
                    <div style={{ alignSelf: 'end' }}>
                        <p style={{ fontSize: 18, color: '#64748B', lineHeight: 1.8, fontWeight: 300 }}>
                            High-performance digital nodes engineered for absolute system control. 
                            Interconnected ecosystems designed for maximum throughput and resiliency.
                        </p>
                    </div>
                </div>

                {/* THE RESPONSIVE MATRIX (Mobile Optimized Bento) */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(12, 1fr)', 
                    gridAutoRows: 'minmax(320px, auto)',
                    gap: 30
                }} className="grid-mobile-1">
                    
                    {services.map((s, i) => {
                        const Icon = icons[s.slug] || Box;
                        const spans = ['span 7', 'span 5', 'span 5', 'span 7', 'span 12', 'span 6', 'span 6'];
                        const span = spans[i % spans.length];

                        return (
                            <motion.div
                                key={s.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ gridColumn: span, position: 'relative' }}
                                onMouseEnter={() => setHovered(s.slug)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <div className="glass-v6 h-full" style={{ padding: i === 4 ? '100px 60px' : '60px', borderRadius: 0, display: 'flex', flexDirection: 'column' }}>
                                    
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 50 }}>
                                        <div style={{ padding: 15, background: 'rgba(168, 85, 247, 0.05)', borderRadius: 2 }}>
                                            <Icon size={24} style={{ color: hovered === s.slug ? '#A855F7' : '#4B5563', transition: 'color 0.4s' }} />
                                        </div>
                                        <div className="mono" style={{ fontSize: 9, opacity: 0.2 }}>NODE_0{i+1}</div>
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: 'white', marginBottom: 20 }}>{s.title}</h3>
                                        <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.8, maxWidth: 400 }}>
                                            {s.description}
                                        </p>
                                    </div>

                                    {/* Data Stream (Visual Wow) */}
                                    <div style={{ marginTop: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                         <div className="mono" style={{ fontSize: 8 }}>SYNC_STATE: OPTIMAL</div>
                                         <div style={{ display: 'flex', gap: 5 }}>
                                             {[...Array(4)].map((_, j) => (
                                                 <motion.div
                                                    key={j}
                                                    animate={{ opacity: hovered === s.slug ? [0.2, 1, 0.2] : 0.2 }}
                                                    transition={{ repeat: Infinity, duration: 2, delay: j * 0.2 }}
                                                    style={{ width: 10, height: 1, background: '#A855F7' }}
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
