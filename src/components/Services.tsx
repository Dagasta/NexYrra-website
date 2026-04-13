'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Box, Workflow, Network, BarChart3, Fingerprint, Zap } from 'lucide-react';
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
        <section id="capabilities" style={{ padding: '180px 0', position: 'relative', background: '#05060f' }}>
            <div className="container-nex">
                <div style={{ marginBottom: 120 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                        <Zap size={14} style={{ color: '#22D3EE' }} />
                        <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.6em', color: '#22D3EE' }}>SYSTEM_MATRIX.v4</span>
                    </div>
                    <h2 className="text-bionic" style={{ fontSize: 'clamp(44px, 10vw, 100px)', fontWeight: 800 }}>
                        CORE <br />
                        <span className="shimmer-text">NODES.</span>
                    </h2>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(12, 1fr)', 
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
                                style={{ gridColumn: span }}
                            >
                                <div className="glass-prismatic h-full wow-card" style={{ padding: '60px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 50 }}>
                                        <div style={{ width: 64, height: 64, background: 'rgba(255,255,255,0.03)', borderRadius: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <Icon size={24} style={{ color: '#8B5CF6' }} />
                                        </div>
                                        <span className="font-cyber" style={{ fontSize: 9, opacity: 0.3 }}>NODE_0{i+1}</span>
                                    </div>

                                    <h3 style={{ fontSize: 32, fontWeight: 800, marginBottom: 15 }}>{s.title}</h3>
                                    <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.8 }}>
                                        {s.description}
                                    </p>
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
