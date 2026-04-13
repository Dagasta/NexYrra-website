'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy } from 'lucide-react';

export default function NeonPlayground() {
    const [input, setInput] = useState('');
    const [lines, setLines] = useState<string[]>([]);
    
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            setLines(prev => [...prev.slice(-4), `> PROCESSING_NODE: ${input}`]);
            setInput('');
        }
    };

    return (
        <section style={{ padding: '100px 0', position: 'relative' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '60px' }}>
                
                {/* Left: Tech Info */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                        <Terminal size={18} color="var(--matrix-purple)" />
                        <div className="sub-mono" style={{ color: 'var(--matrix-purple)' }}>SYSTEM_REACTOR_V4</div>
                    </div>
                    
                    <h2 className="giant-heading" style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginBottom: 20 }}>
                        <span className="text-gradient-purple text-glow-purple">TEST</span><br/>
                        ENVIRONMENT.
                    </h2>
                    
                    <p style={{ color: '#888', lineHeight: 1.6, fontSize: 16, marginBottom: 40 }}>
                        Interact directly with the localized node architecture. Inject variables to test real-time rendering physics and system response rates.
                    </p>

                    <button className="btn-matrix" style={{ background: 'linear-gradient(90deg, #9D00FF, #00F0FF)' }}>
                        <Copy size={14} /> VIEW_DOCUMENTATION
                    </button>
                </div>

                {/* Right: The Interactive Terminal */}
                <div style={{ 
                    background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)',
                    padding: 40, position: 'relative', overflow: 'hidden'
                }}>
                    <div className="sub-mono" style={{ color: 'var(--matrix-cyan)', marginBottom: 30, borderBottom: '1px solid rgba(0, 240, 255, 0.2)', paddingBottom: 10 }}>
                        AWAITING_KERNEL_INPUT_
                    </div>

                    <div style={{ height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 20 }}>
                        <AnimatePresence>
                            {lines.map((line, i) => (
                                <motion.div 
                                    key={i + line}
                                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                                    style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--matrix-cyan)', marginBottom: 15 }}
                                >
                                    {line}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <form onSubmit={handleAdd} style={{ display: 'flex', gap: 20 }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="$ inject_payload..."
                            style={{ 
                                flex: 1, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(157, 0, 255, 0.3)', 
                                padding: '15px 20px', color: '#fff', outline: 'none', fontFamily: 'var(--font-mono)' 
                            }}
                        />
                        <button type="submit" className="btn-matrix">EXEC</button>
                    </form>
                </div>

            </div>
        </section>
    );
}
