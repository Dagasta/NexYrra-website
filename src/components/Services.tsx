'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Box, Workflow, Network, BarChart3, Fingerprint, Activity } from 'lucide-react';
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
        <section id="capabilities" style={{ padding: '240px 0', background: '#020203', position: 'relative' }}>
            <div className="section-marker" style={{ left: 'auto', right: 50 }}>
                <div className="marker-label">CAPABILITIES_SCHEMATIC</div>
            </div>

            <div className="container-nex">
                {/* Schematic Header */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 100, marginBottom: 120 }} className="grid-mobile-1">
                    <div>
                        <div className="mono" style={{ color: 'var(--nex-accent)', marginBottom: 20 }}>// MODULE_DIRECTORY_V3.1</div>
                        <h2 style={{ fontSize: 'clamp(44px, 10vw, 120px)', fontWeight: 300, color: 'white', lineHeight: 0.9 }}>
                            NODAL <br />
                            <span className="text-shimmer" style={{ fontWeight: 800 }}>ARCHITECTURE.</span>
                        </h2>
                    </div>
                    <div style={{ alignSelf: 'end' }}>
                        <p style={{ fontSize: 16, color: '#64748B', lineHeight: 1.8, maxWidth: 320 }}>
                            Each module is a high-authority node engineered for specific systemic dominance. Fully interlocking. Zero latency.
                        </p>
                    </div>
                </div>

                {/* THE SCHEMATIC GRID (Bento Extreme) */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(12, 1fr)', 
                    gridAutoRows: 'minmax(240px, auto)',
                    gap: 1
                }} className="grid-mobile-1 bg-white/5 border border-white/5">
                    
                    {services.map((s, i) => {
                        const Icon = icons[s.slug] || Box;
                        const spans = ['span 8', 'span 4', 'span 5', 'span 7', 'span 7', 'span 5'];
                        const span = spans[i % spans.length];

                        return (
                            <motion.div
                                key={s.slug}
                                onMouseEnter={() => setHovered(s.slug)}
                                onMouseLeave={() => setHovered(null)}
                                style={{ gridColumn: span, position: 'relative' }}
                            >
                                <div style={{ 
                                    padding: '60px', background: '#020203', height: '100%', 
                                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                    display: 'flex', flexDirection: 'column', 
                                    border: '1px solid rgba(255,255,255,0.02)'
                                }}>
                                    {/* Corner ID */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 60 }}>
                                        <div className="mono" style={{ opacity: 0.2 }}>[ MOD_0{i+1}_REF ]</div>
                                        <Icon size={24} style={{ 
                                            color: hovered === s.slug ? 'var(--nex-accent)' : '#1E293B',
                                            transition: 'color 0.4s'
                                        }} />
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, letterSpacing: '-0.03em' }}>{s.title}</h3>
                                        <p style={{ fontSize: 14, color: '#404040', lineHeight: 1.8, maxWidth: 400 }}>
                                            {s.description}
                                        </p>
                                    </div>

                                    {/* System Data Viz (Wow Element) */}
                                    <div style={{ marginTop: 60 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
                                            <span className="mono" style={{ fontSize: 8 }}>SYNC_THROUGHPUT</span>
                                            <span className="mono" style={{ fontSize: 8, color: 'var(--nex-accent)' }}>{80 + i * 4}%</span>
                                        </div>
                                        <div style={{ height: 1, background: 'rgba(255,255,255,0.03)', position: 'relative' }}>
                                            <motion.div 
                                                animate={hovered === s.slug ? { width: '80%' } : { width: '10%' }}
                                                style={{ position: 'absolute', top: 0, left: 0, bottom: 0, background: 'var(--nex-accent)' }} 
                                            />
                                        </div>
                                        
                                        <div style={{ display: 'flex', gap: 10, marginTop: 25, flexWrap: 'wrap' }}>
                                             {s.features.slice(0, 3).map(f => (
                                                 <span key={f} className="mono" style={{ fontSize: 7, border: '1px solid #0a0a0a', padding: '4px 8px' }}>{f}</span>
                                             ))}
                                        </div>
                                    </div>

                                    {/* Interactive corner light */}
                                    <AnimatePresence>
                                        {hovered === s.slug && (
                                            <motion.div 
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                style={{ position: 'absolute', top: 10, right: 10, width: 4, height: 4, background: 'var(--nex-accent)', borderRadius: '50%', boxShadow: '0 0 10px var(--nex-accent)' }} 
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
