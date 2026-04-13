'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Box, Cpu, Cloud, BarChart, Shield } from 'lucide-react';

const services = [
    { id: 1, title: 'CUSTOM SOFTWARE', icon: Box, desc: 'High-performance engineering leveraging the latest in React and Node to construct scalable system infrastructure.' },
    { id: 2, title: 'AUTONOMOUS SYSTEMS', icon: Cpu, desc: 'AI-driven operational matrices. We build systems that run, monitor, and scale themselves without human drift.' },
    { id: 3, title: 'WORKFLOW AUTOMATION', icon: Network, desc: 'Removing friction. Deep integration pipelines that condense thousands of hours into instantaneous, flawless execution.' },
    { id: 4, title: 'CLOUD DEVOPS', icon: Cloud, desc: 'Decentralized hosting logic. Serverless compute layers guaranteeing 99.9% uptime and infinitely scaling bandwidth.' },
    { id: 5, title: 'DATA INTELLIGENCE', icon: BarChart, desc: 'Raw analytics transformed into predictive architectures. Make operational leaps backed strictly by structural data.' },
    { id: 6, title: 'CYBERSECURITY', icon: Shield, desc: 'Absolute system hardening. Kernel-level protective layers to shield operational pathways from external entropy.' }
];

export default function MatrixServices() {
    return (
        <section style={{ padding: '50px 0', position: 'relative' }}>
            <div className="container" style={{ paddingLeft: 'clamp(20px, 10vw, 150px)' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                    {services.map((idx) => (
                        <motion.div 
                            key={idx.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ 
                                y: -10, 
                                borderColor: 'rgba(0, 240, 255, 0.4)', 
                                boxShadow: '0 0 40px rgba(0, 240, 255, 0.1)',
                                background: 'rgba(0, 240, 255, 0.02)'
                            }}
                            style={{ 
                                background: 'rgba(255, 255, 255, 0.02)', 
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                padding: '40px', 
                                transition: 'all 0.3s var(--ease-snappy)',
                                cursor: 'pointer',
                                display: 'flex', flexDirection: 'column'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 30 }}>
                                <div style={{ background: 'rgba(157, 0, 255, 0.1)', padding: 15, borderRadius: '50%', color: 'var(--matrix-purple)' }}>
                                    <idx.icon size={28} />
                                </div>
                                <div className="sub-mono" style={{ color: 'var(--matrix-cyan)' }}>[ NODE_0{idx.id} ]</div>
                            </div>

                            <h3 style={{ fontSize: 'clamp(20px, 2vw, 24px)', marginBottom: 15, letterSpacing: '0.05em' }}>
                                {idx.title}
                            </h3>

                            <p style={{ color: '#888', lineHeight: 1.6, fontSize: 15, maxWidth: 350 }}>
                                {idx.desc}
                            </p>
                            
                            <div style={{ marginTop: 'auto', paddingTop: 30 }}>
                                <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 15 }} />
                                <div className="sub-mono" style={{ opacity: 0.5 }}>STATUS: ACTIVE_SYNC</div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
