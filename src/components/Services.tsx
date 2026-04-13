'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Cpu, Workflow, Network, BarChart3, Fingerprint, Zap, Database } from 'lucide-react';
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
        <section id="capabilities" style={{ padding: '240px 0', position: 'relative', background: '#020203' }}>
            <div className="neural-bg" style={{ opacity: 0.2 }} />
            
            <div className="container-nex" style={{ position: 'relative', zIndex: 10 }}>
                {/* Section Header: The System Matrix */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 100, marginBottom: 120 }} className="grid-mobile-1">
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                             <Zap size={14} style={{ color: '#22D3EE' }} />
                             <span className="mono" style={{ color: '#22D3EE' }}>SYSTEM_MATRIX.v5</span>
                        </div>
                        <h2 className="glow-text" style={{ fontSize: 'clamp(44px, 10vw, 120px)', lineHeight: 0.9, letterSpacing: '-0.07em' }}>
                            CORE <br />
                            <span style={{ color: '#A855F7' }}>CAPABILITIES.</span>
                        </h2>
                    </div>
                    <div style={{ alignSelf: 'end' }}>
                        <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.8, fontWeight: 300 }}>
                            High-performance digital nodes engineered for absolute operational dominance. 
                            Interconnected infrastructure that eliminates systemic entropy.
                        </p>
                    </div>
                </div>

                {/* THE SYSTEM GRID (Server Rack Layout) */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(12, 1fr)', 
                    gridAutoRows: 'minmax(320px, auto)',
                    gap: 1
                }} className="grid-mobile-1 bg-white/5 border border-white/5">
                    
                    {services.map((s, i) => {
                        const Icon = icons[s.slug] || Box;
                        const spans = ['span 7', 'span 5', 'span 5', 'span 7', 'span 8', 'span 4'];
                        const span = spans[i % spans.length];

                        return (
                            <motion.div
                                key={s.slug}
                                onMouseEnter={() => setHovered(s.slug)}
                                onMouseLeave={() => setHovered(null)}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                style={{ gridColumn: span, position: 'relative' }}
                            >
                                <div style={{ 
                                    padding: '60px', background: '#020203', height: '100%',
                                    transition: 'all 0.5s', border: '1px solid rgba(255,255,255,0.02)',
                                    display: 'flex', flexDirection: 'column'
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168, 14, 247, 0.02)')}
                                onMouseLeave={e => (e.currentTarget.style.background = '#020203')}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 60 }}>
                                        <div style={{ padding: 15, background: 'rgba(168, 85, 247, 0.05)', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
                                            <Icon size={24} style={{ color: hovered === s.slug ? '#A855F7' : '#22D3EE', transition: 'color 0.4s' }} />
                                        </div>
                                        <span className="mono" style={{ fontSize: 9, opacity: 0.2 }}>MOD_0{i+1}</span>
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: 32, fontWeight: 700, color: 'white', marginBottom: 20, letterSpacing: '-0.03em' }}>{s.title}</h3>
                                        <p style={{ fontSize: 13, color: '#404040', lineHeight: 2, maxWidth: 360 }}>
                                            {s.description}
                                        </p>
                                    </div>

                                    {/* System Metrics (Visual Detail) */}
                                    <div style={{ marginTop: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                         <div style={{ display: 'flex', gap: 5 }}>
                                             {[...Array(4)].map((_, j) => (
                                                 <motion.div
                                                    key={j}
                                                    animate={{ opacity: hovered === s.slug ? [0.2, 1, 0.2] : 0.2 }}
                                                    transition={{ repeat: Infinity, duration: 1.5, delay: j * 0.2 }}
                                                    style={{ width: 10, height: 1, background: '#A855F7' }}
                                                 />
                                             ))}
                                         </div>
                                         <span className="mono" style={{ fontSize: 8 }}>SIGNAL: STABLE</span>
                                    </div>
                                    
                                    {/* Hover Edge Light */}
                                    <AnimatePresence>
                                        {hovered === s.slug && (
                                            <motion.div 
                                                initial={{ width: 0 }} animate={{ width: '100%' }} exit={{ width: 0 }}
                                                style={{ position: 'absolute', bottom: 0, left: 0, height: 2, background: 'var(--nex-purple)', boxShadow: '0 0 10px var(--nex-purple)' }} 
                                            />
                                        )}
                                    </AnimatePresence>
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
