'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Box, Workflow, Network, BarChart3, Fingerprint, Activity, Zap } from 'lucide-react';
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
        <section id="capabilities" style={{ padding: '240px 0', position: 'relative', background: '#07080e' }}>
            <div className="neural-overlay" style={{ opacity: 0.2 }} />
            
            <div className="container-nex" style={{ position: 'relative', zIndex: 10 }}>
                {/* Section Header: The Neural Hub */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 100, marginBottom: 120 }} className="grid-mobile-1">
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                            <Zap size={14} style={{ color: '#22D3EE' }} />
                            <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#22D3EE' }}>SYSTEM_MATRIX.v4</span>
                        </div>
                        <h2 className="text-bionic" style={{ fontSize: 'clamp(44px, 10vw, 120px)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.07em' }}>
                            CORE <br />
                            <span className="shimmer-text">NODES.</span>
                        </h2>
                    </div>
                    <div style={{ alignSelf: 'end' }}>
                        <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.8, fontWeight: 300 }}>
                            Interconnected functional nodes engineered for absolute system control. 
                            Our architecture eliminates operational friction through neural-path optimization.
                        </p>
                    </div>
                </div>

                {/* THE PRISMATIC GRID (Beyond Brain Layout) */}
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
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ gridColumn: span, position: 'relative' }}
                                onMouseEnter={() => setHovered(s.slug)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <div className="glass-prismatic h-full wow-card" style={{ padding: '60px', display: 'flex', flexDirection: 'column' }}>
                                    
                                    {/* Circuit Line Animation (Fancy detail) */}
                                    <div className="circuit-line" style={{ top: 10, left: 10, width: hovered === s.slug ? '80%' : '10px', transition: 'width 0.6s' }} />
                                    <div className="circuit-line" style={{ top: 10, right: 10, height: hovered === s.slug ? '30px' : '0px', width: '1px', transition: 'height 0.6s' }} />

                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 50 }}>
                                        <div style={{ width: 64, height: 64, background: 'rgba(255,255,255,0.03)', borderRadius: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <Icon size={24} style={{ color: hovered === s.slug ? '#22D3EE' : '#8B5CF6', transition: 'color 0.4s' }} />
                                        </div>
                                        <span className="font-cyber" style={{ fontSize: 9, color: '#1E293B', fontWeight: 800 }}>NODE_0{i+1}</span>
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <h3 className="font-title" style={{ fontSize: 32, fontWeight: 800, marginBottom: 15, letterSpacing: '-0.04em' }}>{s.title}</h3>
                                        <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.8, maxWidth: 360 }}>
                                            {s.description}
                                        </p>
                                    </div>

                                    {/* Internal Node Pulse (Wow factor) */}
                                    <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                         <div style={{ display: 'flex', gap: 5 }}>
                                             {[...Array(4)].map((_, j) => (
                                                 <motion.div
                                                    key={j}
                                                    animate={{ opacity: hovered === s.slug ? [0.2, 1, 0.2] : 0.2 }}
                                                    transition={{ repeat: Infinity, duration: 1.5, delay: j * 0.2 }}
                                                    style={{ width: 15, height: 1, background: '#22D3EE' }}
                                                 />
                                             ))}
                                         </div>
                                         <span className="font-cyber" style={{ fontSize: 8, color: '#8B5CF6' }}>LATENCY_0.00ms</span>
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
