'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function MatrixNodes() {
    return (
        <section style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
            
            {/* The Giant Marquee Overlap */}
            <div style={{ position: 'relative', height: '250px', display: 'flex', alignItems: 'center' }}>
                {/* Background Stroke Text */}
                <div style={{ position: 'absolute', whiteSpace: 'nowrap', right: '-10%', zIndex: 0 }}>
                    <h2 className="giant-heading text-stroke" style={{ opacity: 0.8, fontSize: 'clamp(80px, 15vw, 200px)' }}>
                        NEXYRRA_NEXYRRA_
                    </h2>
                </div>
                
                {/* Foreground Solid Cyan Text */}
                <div style={{ position: 'absolute', whiteSpace: 'nowrap', left: '-5%', display: 'flex', zIndex: 10 }}>
                    <h2 className="giant-heading text-gradient-cyan text-glow-hard" style={{ fontSize: 'clamp(60px, 12vw, 150px)', letterSpacing: '0' }}>
                        BEYOND_THE_BRAIN_
                    </h2>
                </div>
            </div>

            {/* Core Nodes Section */}
            <div className="container" style={{ paddingLeft: 'clamp(20px, 10vw, 150px)', marginTop: '80px' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 40 }}>
                    <Sparkles size={16} color="var(--matrix-cyan)" />
                    <div className="sub-mono" style={{ color: 'var(--matrix-cyan)' }}>SYSTEM_MATRIX.V4</div>
                </div>

                <div style={{ position: 'relative' }}>
                    <h1 className="giant-heading" style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <span className="text-gradient-cyan text-glow-hard" style={{ zIndex: 10 }}>
                            CORE
                        </span>
                        <span className="text-gradient-purple text-glow-purple" style={{ zIndex: 10 }}>
                            NODES.
                        </span>
                    </h1>
                </div>

                {/* Example Layout for Nodes (matching the start of a typical Grid) */}
                <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {[1, 2, 3].map((item) => (
                        <motion.div 
                            key={item}
                            whileHover={{ y: -10, borderColor: 'rgba(0, 240, 255, 0.5)', boxShadow: '0 0 30px rgba(0, 240, 255, 0.1)' }}
                            style={{ 
                                background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)',
                                padding: '40px', transition: 'all 0.3s var(--ease-snappy)'
                            }}
                        >
                            <div className="sub-mono" style={{ color: 'var(--matrix-purple)', marginBottom: 20 }}>[ NODE_{item} ]</div>
                            <h3 style={{ fontSize: 24, marginBottom: 15 }}>ALGORITHMIC MODELING</h3>
                            <p style={{ color: '#888', lineHeight: 1.6, fontSize: 14 }}>
                                Processing massive datasets instantly to dictate and architect highly predictable automation flows.
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
