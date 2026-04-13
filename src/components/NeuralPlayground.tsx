'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, TerminalSquare, Plus, Zap } from 'lucide-react';
import { sysAudio } from '../lib/SoundSystem';

export default function NeuralPlayground() {
    const [input, setInput] = useState('');
    const [nodes, setNodes] = useState<{ id: number, char: string, x: number, y: number, color: string }[]>([]);
    const [lines, setLines] = useState<{ id: string, x1: number, y1: number, x2: number, y2: number, color: string }[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Play sound on typing
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        if (e.target.value.length > input.length) sysAudio.playTick();
    };

    // Construct Node Physics
    useEffect(() => {
        if (input.length > 0) {
            const char = input.slice(-1);
            const isCommand = input.endsWith("EXEC");
            if (isCommand) sysAudio.playPulse();

            const newNode = {
                id: Date.now(),
                char: isCommand ? '⯀' : char.toUpperCase(),
                x: 10 + Math.random() * 80,
                y: 10 + Math.random() * 80,
                color: Math.random() > 0.5 ? 'var(--sys-neon-purple)' : 'var(--sys-neon-blue)'
            };
            
            setNodes(prev => {
                const nextNodes = [...prev.slice(-10), newNode];
                // Connect the new node to the previous one
                if (nextNodes.length > 1) {
                    const prevNode = nextNodes[nextNodes.length - 2];
                    setLines(l => [...l.slice(-9), {
                        id: `${prevNode.id}-${newNode.id}`,
                        x1: prevNode.x, y1: prevNode.y,
                        x2: newNode.x, y2: newNode.y,
                        color: newNode.color
                    }]);
                }
                return nextNodes;
            });
        }
    }, [input]);

    const handleClear = () => {
        setNodes([]);
        setLines([]);
        setInput('');
        sysAudio.playPulse();
    };

    return (
        <section style={{ padding: '150px 0', position: 'relative' }}>
            <div className="container-os">
                
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: 60 }} className="stack-mobile">
                    {/* Console Info Panel */}
                    <div className="hud-panel" style={{ padding: 40, alignSelf: 'start' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 30 }}>
                            <Activity size={20} color="var(--sys-neon-purple)" />
                            <span className="mono-sys" style={{ color: 'var(--sys-neon-purple)' }}>SYSTEM_SANDBOX // RAW</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(30px, 4vw, 50px)', marginBottom: 20 }}>
                            INTELLIGENCE <br/>
                            <span className="glow-text text-gradient">REACTOR.</span>
                        </h2>
                        <p style={{ color: 'var(--sys-slate)', lineHeight: 1.8, marginBottom: 40, fontSize: 16 }}>
                            A high-performance interactive buffer. Submitting keystrokes mathematically generates synaptic geometry in real-time. Type `EXEC` to dispatch a heavy pulse. 
                        </p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 15, marginBottom: 40 }}>
                            {['REAL_TIME_PHYSICS', 'SOUND_SYNTHESIS', 'NODE_ATTRACTION'].map(t => (
                                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <Plus size={14} color="var(--sys-neon-blue)" />
                                    <span className="mono-sys" style={{ color: 'var(--sys-white)', opacity: 0.8 }}>{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Interactive Sandbox Container */}
                    <div ref={containerRef} className="hud-panel" style={{ height: 600, border: '1px solid rgba(6,182,212,0.3)', position: 'relative' }}>
                        <div className="scanline" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />
                        
                        {/* Connecting Lines */}
                        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
                            <AnimatePresence>
                                {lines.map(l => (
                                    <motion.line 
                                        key={l.id}
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.5 }}
                                        exit={{ opacity: 0 }}
                                        x1={`${l.x1}%`} y1={`${l.y1}%`} x2={`${l.x2}%`} y2={`${l.y2}%`}
                                        stroke={l.color}
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                    />
                                ))}
                            </AnimatePresence>
                        </svg>

                        {/* Interactive Nodes */}
                        <AnimatePresence>
                            {nodes.map(node => (
                                <motion.div
                                    key={node.id}
                                    initial={{ scale: 0, opacity: 0, rotate: -90 }}
                                    animate={{ scale: [1.5, 1], opacity: 1, rotate: 0 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1.2, boxShadow: `0 0 30px ${node.color}` }}
                                    onMouseEnter={() => sysAudio.playTick()}
                                    style={{
                                        position: 'absolute', left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)',
                                        width: 50, height: 50, background: `radial-gradient(circle, ${node.color}55 0%, transparent 70%)`,
                                        border: `1px solid ${node.color}`, borderRadius: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: node.color, fontFamily: 'var(--font-sys)', fontSize: 20, zIndex: 10, cursor: 'pointer',
                                        boxShadow: `0 0 15px rgba(0,0,0,0.5)`, backdropFilter: 'blur(4px)'
                                    }}
                                >
                                    {node.char}
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* The Command Input Line */}
                        <div style={{ position: 'absolute', bottom: 30, left: 30, right: 30, display: 'flex', alignItems: 'center', gap: 20, zIndex: 20 }}>
                            <div style={{ padding: '15px 30px', background: 'rgba(0,0,0,0.8)', border: '1px solid var(--sys-neon-purple)', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 15, flex: 1, backdropFilter: 'blur(10px)' }}>
                                <TerminalSquare size={18} color="var(--sys-neon-purple)" />
                                <input
                                    type="text"
                                    value={input}
                                    onChange={handleInput}
                                    placeholder="> INITIALIZE_BUFFER..."
                                    style={{ flex: 1, background: 'transparent', border: 'none', color: 'var(--sys-white)', outline: 'none', fontFamily: 'var(--font-sys)', fontSize: 16 }}
                                />
                                <div className="mono-sys" style={{ opacity: 0.5, fontSize: 10 }} onClick={handleClear} style={{ cursor: 'pointer', color: 'var(--sys-neon-blue)' }}>[ FORMAT_LOG ]</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
