'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Network, ShieldCheck, Box, Workflow, BarChart3, Fingerprint } from 'lucide-react';
import { services, serviceGroups } from '../lib/services-data';

const Services = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const icons: Record<string, any> = {
        'custom-software': Box,
        'autonomous-systems': Cpu,
        'workflow-automation': Workflow,
        'cloud-devops': Network,
        'data-intelligence': BarChart3,
        'cybersecurity': Fingerprint,
    };

    return (
        <section id="capabilities" style={{ padding: '160px 0', background: '#050608', position: 'relative', overflow: 'hidden' }}>
            <div className="circuit-bg" style={{ opacity: 0.2 }} />
            
            <div className="container-nex" style={{ position: 'relative', zIndex: 10 }}>
                
                {/* Header - Bento Title */}
                <div style={{ marginBottom: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 40 }}>
                    <div style={{ maxWidth: 600 }}>
                        <div className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.5em', color: '#8B5CF6', marginBottom: 20 }}>
                            SYSTEMS_MATRIX.OVERVIEW
                        </div>
                        <h2 className="font-title" style={{ fontSize: 'clamp(44px, 8vw, 100px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.06em' }}>
                            THE <span className="shimmer-text">CORE.</span><br />
                            INFRASTRUCTURE.
                        </h2>
                    </div>
                    <p style={{ maxWidth: 400, fontSize: 13, color: '#4B5563', lineHeight: 1.8, marginBottom: 10 }}>
                        We architect high-authoritative digital foundations. 
                        A modular ecosystem designed for absolute operational dominance.
                    </p>
                </div>

                {/* THE BENTO GRID (Developer Dream Layout) */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(12, 1fr)', 
                    gridAutoRows: 'minmax(280px, auto)',
                    gap: 20
                }} className="grid-mobile-1">
                    
                    {services.map((s, i) => {
                        const Icon = icons[s.slug] || Box;
                        // Define custom spans for Bento feel
                        const gridSpans = [
                            'span 7', 'span 5', 'span 4', 'span 8', 'span 6', 'span 6'
                        ];
                        const span = gridSpans[i % gridSpans.length];

                        return (
                            <motion.div
                                key={s.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                style={{
                                    gridColumn: span,
                                    position: 'relative',
                                }}
                                onMouseEnter={() => setHoveredId(s.slug)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="bento-item glass-refractive h-full" style={{ borderRadius: 0, padding: 0 }}>
                                    <div style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        {/* Status Line */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
                                            <div style={{ display: 'flex', gap: 5 }}>
                                                <div style={{ width: 20, height: 2, background: hoveredId === s.slug ? '#8B5CF6' : '#1E293B', transition: 'all 0.3s' }} />
                                                <div style={{ width: 40, height: 1, background: '#1E293B', marginTop: 0.5 }} />
                                            </div>
                                            <span className="font-cyber" style={{ fontSize: 8, color: '#334155' }}>MOD_{i+1}_0X</span>
                                        </div>

                                        <div style={{ flex: 1 }}>
                                            <Icon size={32} style={{ color: hoveredId === s.slug ? '#8B5CF6' : '#4B5563', marginBottom: 30, transition: 'all 0.3s' }} />
                                            <h3 className="font-title text-kinetic" style={{ fontSize: 28, fontWeight: 900, marginBottom: 15, color: 'white' }}>{s.title}</h3>
                                            <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.7, maxWidth: 320 }}>
                                                {s.tagline}
                                            </p>
                                        </div>

                                        {/* Data Detail (Visual Wow) */}
                                        <div style={{ marginTop: 40 }}>
                                            <div className="font-cyber" style={{ fontSize: 7, color: '#1E293B', marginBottom: 15, letterSpacing: '0.2em' }}>SYSTEM_SPECS_ACTIVE</div>
                                            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                                                {s.features.slice(0, 3).map(f => (
                                                    <span key={f} style={{ fontSize: 8, color: '#4B5563', padding: '4px 8px', border: '1px solid rgba(255,255,255,0.03)', background: 'rgba(255,255,255,0.01)' }}>
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Interactive Progress Line at bottom */}
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.02)' }}>
                                        <motion.div 
                                            animate={hoveredId === s.slug ? { width: '100%' } : { width: '0%' }}
                                            style={{ height: '100%', background: '#8B5CF6' }} 
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Side Static Background elements (Techy Detail) */}
            <div style={{ position: 'absolute', left: -20, top: '50%', transform: 'rotate(-90deg)', opacity: 0.05 }} className="hide-mobile">
                <span className="font-cyber" style={{ fontSize: 60, fontWeight: 900, letterSpacing: '1em' }}>CAPABILITIES</span>
            </div>
        </section>
    );
};

export default Services;
