'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Box, Cpu, Workflow, Network, BarChart3, Fingerprint, X, Code, TerminalSquare } from 'lucide-react';
import { services } from '../lib/services-data';
import { sysAudio } from '../lib/SoundSystem';

const icons: any = {
    'custom-software': Box, 'autonomous-systems': Cpu, 'workflow-automation': Workflow,
    'cloud-devops': Network, 'data-intelligence': BarChart3, 'cybersecurity': Fingerprint,
};

export default function Services() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section style={{ padding: '150px 0', position: 'relative' }}>
            <div className="container-os">
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80 }} className="stack-mobile">
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                            <Code size={18} color="var(--sys-neon-blue)" />
                            <span className="mono-sys" style={{ color: 'var(--sys-neon-blue)' }}>SYSTEM_MODULES // V8.0</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
                            <span className="glow-text text-gradient">ACTIVE</span><br/>
                            INTELLIGENCE.
                        </h2>
                    </div>
                    <div className="mono-sys hide-mobile" style={{ textAlign: 'right', opacity: 0.5 }}>
                        SELECT_MODULE_TO_EXPAND<br/>
                        [ ALL_SYSTEMS_NOMINAL ]
                    </div>
                </div>

                <LayoutGroup>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 40 }}>
                        {services.map((s, i) => {
                            const isExpanded = expandedId === s.slug;
                            const Icon = icons[s.slug] || Box;

                            return (
                                <motion.div 
                                    layoutId={`card-${s.slug}`}
                                    key={s.slug}
                                    onClick={() => {
                                        if (!isExpanded) {
                                            setExpandedId(s.slug);
                                            sysAudio.playPulse();
                                        }
                                    }}
                                    onMouseEnter={() => sysAudio.playTick()}
                                    className={`hud-panel ${isExpanded ? 'active-expansion' : ''}`}
                                    style={{
                                        cursor: isExpanded ? 'default' : 'pointer',
                                        padding: 40,
                                        zIndex: isExpanded ? 50 : 1,
                                        ...(isExpanded ? {
                                            position: 'fixed', inset: '10vh 10vw', margin: 'auto',
                                            display: 'flex', flexDirection: 'column',
                                            boxShadow: '0 0 100px rgba(192,38,211,0.5)'
                                        } : {})
                                    }}
                                >
                                    <motion.div layout className="scanline" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, pointerEvents: 'none', opacity: isExpanded ? 0.2 : 0 }} />

                                    <motion.div layout style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                            <div style={{ padding: 15, background: 'rgba(192,38,211,0.1)', border: '1px solid var(--sys-neon-purple)', borderRadius: '10%' }}>
                                                <Icon size={isExpanded ? 32 : 24} color="var(--sys-neon-purple)" />
                                            </div>
                                            <div className="mono-sys" style={{ opacity: 0.6 }}>MOD_0{i + 1}</div>
                                        </div>
                                        {isExpanded && (
                                            <X size={24} color="var(--sys-slate)" style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); setExpandedId(null); sysAudio.playTick(); }} />
                                        )}
                                    </motion.div>

                                    <motion.h3 layout style={{ fontSize: isExpanded ? 40 : 24, marginBottom: 20, color: 'var(--sys-white)' }}>
                                        {s.title}
                                    </motion.h3>

                                    <motion.p layout style={{ fontSize: 16, color: 'var(--sys-slate)', lineHeight: 1.8, marginBottom: isExpanded ? 40 : 0 }}>
                                        {s.description}
                                    </motion.p>

                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                                style={{ flex: 1, borderTop: '1px solid rgba(192,38,211,0.2)', paddingTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}
                                            >
                                                {/* Micro Simulation Zone */}
                                                <div>
                                                    <div className="mono-sys" style={{ marginBottom: 20, color: 'var(--sys-neon-blue)' }}>[ LIVE_SIMULATION_DATA ]</div>
                                                    <div style={{ background: 'rgba(0,0,0,0.5)', padding: 20, borderRadius: 8, fontFamily: 'var(--font-sys)', fontSize: 12, color: 'var(--sys-neon-purple)', height: '200px', overflow: 'hidden', position: 'relative' }}>
                                                        <motion.div animate={{ y: [0, -100] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ position: 'absolute', paddingRight: '20px' }}>
                                                            {Array.from({length: 20}).map((_, j) => (
                                                                <div key={j} style={{ opacity: Math.random() }}>{`> RUNNING_SEQ_${Math.floor(Math.random()*9999)} : EVALUATING PARAMETERS [${Math.random().toFixed(4)}]`}</div>
                                                            ))}
                                                        </motion.div>
                                                    </div>
                                                </div>
                                                
                                                {/* Meta Info */}
                                                <div>
                                                    <div className="mono-sys" style={{ marginBottom: 20 }}>[ SYSTEM_SPECS ]</div>
                                                    {['LATENCY_THRESHOLD = <10ms', 'ARCHITECTURE = DECENTRALIZED', 'SECURITY_LAYER = KERNEL_LEVEL'].map((spec, k) => (
                                                        <div key={k} style={{ padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: 14, color: 'var(--sys-white)' }}>
                                                            <TerminalSquare size={14} color="var(--sys-neon-purple)" style={{ display: 'inline', marginRight: 10, verticalAlign: 'middle' }} />
                                                            {spec}
                                                        </div>
                                                    ))}
                                                    <button className="btn-command" style={{ marginTop: 30, width: '100%', justifyContent: 'center' }} onClick={(e) => { e.stopPropagation(); sysAudio.playPulse(); }}>
                                                        DEPLOY_MODULE
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </LayoutGroup>
                
                {/* Overlay background when expanded to focus */}
                <AnimatePresence>
                    {expandedId && (
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            style={{ position: 'fixed', inset: 0, background: 'rgba(3,0,8,0.9)', zIndex: 40 }}
                            onClick={() => { setExpandedId(null); sysAudio.playTick(); }}
                        />
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
