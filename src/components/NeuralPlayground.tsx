'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Activity } from 'lucide-react';

export default function NeuralPlayground() {
    const [input, setInput] = useState('');
    const [nodes, setNodes] = useState<{ id: number, char: string, x: number, y: number, color: string }[]>([]);

    useEffect(() => {
        if (input.length > 0) {
            const char = input.slice(-1);
            const newNode = {
                id: Date.now(),
                char,
                x: Math.random() * 80 + 10, // 10% to 90%
                y: Math.random() * 80 + 10,
                color: Math.random() > 0.5 ? '#A855F7' : '#22D3EE'
            };
            setNodes(prev => [...prev.slice(-15), newNode]); // Keep last 15
        }
    }, [input]);

    return (
        <section style={{ padding: '120px 0', position: 'relative', background: '#08090f', color: 'white', overflow: 'hidden' }}>
            <div className="container-nexus" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <div className="mono-diag" style={{ color: '#A855F7', marginBottom: 20 }}>SYNAPTIC_RESONANCE_TEST</div>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
                        AI VISUAL <span className="text-gradient">REACTOR.</span>
                    </h2>
                    <p style={{ marginTop: 20, color: '#64748B', maxWidth: 600, margin: '20px auto 0' }}>
                        Interact with the void. Input sequence to generate neural node formations in real-time.
                    </p>
                </div>

                <div className="glass-v7" style={{ position: 'relative', height: 400, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(168,85,247,0.2)' }}>
                    {/* The Visual Output */}
                    <AnimatePresence>
                        {nodes.map(node => (
                            <motion.div
                                key={node.id}
                                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                                animate={{ opacity: [0, 1, 0.5], scale: [0, 1.5, 1], rotate: 0 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                style={{
                                    position: 'absolute',
                                    left: `${node.x}%`,
                                    top: `${node.y}%`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    width: 60, height: 60,
                                    borderRadius: '50%',
                                    background: `radial-gradient(circle, ${node.color}33 0%, transparent 70%)`,
                                    border: `1px solid ${node.color}55`,
                                    color: node.color,
                                    fontFamily: 'var(--font-system)',
                                    fontSize: 24,
                                    boxShadow: `0 0 20px ${node.color}44`
                                }}
                            >
                                {node.char}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Background Grid */}
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: -1 }} />

                    {/* Input Field Overlay */}
                    <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', width: '80%', maxWidth: 600 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, background: 'rgba(0,0,0,0.5)', padding: '15px 30px', borderRadius: 50, border: '1px solid rgba(168,85,247,0.3)', backdropFilter: 'blur(10px)' }}>
                            <Activity size={20} style={{ color: '#22D3EE' }} />
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="INITIALIZE_SEQUENCE..."
                                style={{
                                    flex: 1, background: 'transparent', border: 'none', color: 'white',
                                    outline: 'none', fontFamily: 'var(--font-system)', fontSize: 14, letterSpacing: '0.2em'
                                }}
                            />
                            <div className="mono-diag" style={{ opacity: 0.5, fontSize: 10 }}>[ INPUT_AWAIT ]</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
