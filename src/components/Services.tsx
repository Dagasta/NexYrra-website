'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Network, ShieldCheck } from 'lucide-react';
import { services, serviceGroups } from '../lib/services-data';

const Services = () => {
    const [selectedGroup, setSelectedGroup] = useState('BUILD');
    const containerRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const groupIcons: Record<string, any> = {
        BUILD: Terminal,
        AUTOMATE: Cpu,
        SCALE: Network,
        SECURE: ShieldCheck
    };

    return (
        <section ref={containerRef} style={{ padding: '160px 0', background: '#05060e', overflow: 'hidden' }}>
            <motion.div style={{ y, opacity }} className="container-nex">
                
                {/* Header - System Capabilities */}
                <div style={{ marginBottom: 100, maxWidth: 800 }}>
                    <div className="section-line">
                        <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.4em', color: '#8B5CF6' }}>
                            SYSTEM_CAPABILITIES.INI
                        </span>
                    </div>
                    <h2 className="font-title" style={{ fontSize: 'clamp(44px, 8vw, 100px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.05em' }}>
                        THE DIGITAL <br />
                        <span className="shimmer-text">ARCHITECTURE.</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60 }} className="grid-mobile-1">
                    {/* Left: Selector Columns */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {serviceGroups.map((group) => {
                            const Icon = groupIcons[group.id];
                            const isActive = selectedGroup === group.id;
                            
                            return (
                                <motion.button
                                    key={group.id}
                                    onClick={() => setSelectedGroup(group.id)}
                                    whileHover={{ x: 10 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: 20,
                                        padding: '30px', textAlign: 'left',
                                        background: isActive ? 'rgba(139,92,246,0.05)' : 'transparent',
                                        border: isActive ? '1px solid rgba(139,92,246,0.3)' : '1px solid rgba(255,255,255,0.03)',
                                        color: isActive ? 'white' : '#4B5563',
                                        position: 'relative', overflow: 'hidden', cursor: 'pointer'
                                    }}
                                >
                                    {isActive && (
                                        <motion.div 
                                            layoutId="active-glint"
                                            style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#8B5CF6' }} 
                                        />
                                    )}
                                    <Icon size={24} style={{ color: isActive ? '#8B5CF6' : 'inherit' }} />
                                    <div>
                                        <div className="font-cyber" style={{ fontSize: 12, fontWeight: 900, marginBottom: 5 }}>
                                            {group.label}
                                        </div>
                                        <div style={{ fontSize: 10, opacity: 0.6 }}>{group.tagline}</div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Right: Module Visualization */}
                    <div className="system-module" style={{ padding: '60px', minHeight: 600, position: 'relative' }}>
                        <div className="scanline" style={{ opacity: 0.1 }} />
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedGroup}
                                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div style={{ marginBottom: 40 }}>
                                    <h3 className="font-title" style={{ fontSize: 32, fontWeight: 800, marginBottom: 20 }}>
                                        {serviceGroups.find(g => g.id === selectedGroup)?.label} Overview
                                    </h3>
                                    <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.8 }}>
                                        {serviceGroups.find(g => g.id === selectedGroup)?.description}
                                    </p>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-mobile-1">
                                    {services.filter(s => s.group === selectedGroup).map((service, i) => (
                                        <motion.div
                                            key={service.slug}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            style={{
                                                padding: '24px', background: 'rgba(255,255,255,0.01)',
                                                border: '1px solid rgba(255,255,255,0.05)',
                                                position: 'relative'
                                            }}
                                            whileHover={{ borderColor: 'rgba(139,92,246,0.3)', y: -5 }}
                                        >
                                            <div style={{ fontSize: 24, marginBottom: 15 }}>{service.icon}</div>
                                            <div className="font-title" style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{service.title}</div>
                                            <div style={{ fontSize: 12, color: '#4B5563', lineHeight: 1.6 }}>{service.tagline}</div>
                                            
                                            {/* Sub-features as data points */}
                                            <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                                                {service.features.map(f => (
                                                    <span key={f} style={{ fontSize: 8, padding: '4px 8px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 0, textTransform: 'uppercase', color: '#334155' }}>
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div style={{ marginTop: 60, display: 'flex', alignItems: 'center', gap: 15 }}>
                                    <span style={{ fontSize: 10, color: '#334155', fontFamily: 'monospace' }}>UPLINK_READY:</span>
                                    <motion.button 
                                        whileHover={{ scale: 1.05, background: '#8B5CF6', color: 'white' }}
                                        style={{ 
                                            background: 'transparent', border: '1px solid #8B5CF6', 
                                            color: '#8B5CF6', padding: '12px 30px', fontSize: 12, 
                                            fontWeight: 900, fontFamily: 'var(--font-cyber)', cursor: 'pointer' 
                                        }}>
                                        INITIATE PROTOCOL
                                    </motion.button>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Visual data decoration */}
                        <div style={{ position: 'absolute', bottom: 20, right: 20, opacity: 0.1, pointerEvents: 'none' }}>
                            <pre style={{ fontSize: 8, color: '#8B5CF6' }}>
                                {`01010110 01001001 01010011 01001001 01001111 01001110 
01010100 01000101 01000011 01001000 01001110 01001111 
01001100 01001111 01000111 01011001`}
                            </pre>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
