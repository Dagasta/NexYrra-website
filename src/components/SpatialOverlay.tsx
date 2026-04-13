'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SpatialOverlay() {
    // Scroll tracking matches the 8 pages length defined in <ScrollControls>
    const { scrollYProgress } = useScroll();

    // Mapping Scroll Progress (0 to 1) to specific node Opacities
    
    // Core Title (Starts at 0, fades at 0.1)
    const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);
    
    // Node 1: Intelligence Operations (Target 3D Z: -20, roughly 0.15 to 0.25)
    const node1Opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.22, 0.27], [0, 1, 1, 0]);
    const node1Y = useTransform(scrollYProgress, [0.1, 0.15, 0.22, 0.27], [100, 0, 0, -100]);

    // Node 2: Engineering (Target 3D Z: -45, roughly 0.35 to 0.45)
    const node2Opacity = useTransform(scrollYProgress, [0.3, 0.35, 0.42, 0.47], [0, 1, 1, 0]);
    const node2Y = useTransform(scrollYProgress, [0.3, 0.35, 0.42, 0.47], [100, 0, 0, -100]);

    // Node 3: Cyber / Cognition (Target 3D Z: -70, roughly 0.6 to 0.7)
    const node3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.67, 0.72], [0, 1, 1, 0]);
    const node3Y = useTransform(scrollYProgress, [0.55, 0.6, 0.67, 0.72], [100, 0, 0, -100]);

    // Event Horizon: Contact Form (Target 3D Z: -95, 0.85 to 1.0)
    const horizonOpacity = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
    const horizonScale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            
            {/* INSTRUCTIONS */}
            <motion.div 
                style={{ opacity: titleOpacity }}
                className="interactive-node"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            >
                <div style={{ position: 'absolute', top: 40, left: 40 }}>
                    <div className="mono-stamp">SYSTEM: OMNIS_V1</div>
                </div>
                <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                    <div className="mono-stamp" style={{ marginBottom: 10, color: 'var(--omnis-uv)' }}>SCROLL DOWN</div>
                    <div style={{ width: 1, height: 60, background: 'var(--omnis-chrome)', margin: '0 auto', opacity: 0.3 }} />
                </div>
            </motion.div>

            {/* NODE 1 */}
            <motion.div 
                style={{ opacity: node1Opacity, y: node1Y }}
                className="interactive-node"
            >
                <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', maxWidth: 400 }}>
                    <div className="mono-stamp" style={{ marginBottom: 20 }}>01 // INFRASTRUCTURE</div>
                    <h2 style={{ fontSize: 40, marginBottom: 20 }}>AUTONOMOUS <br/> SYSTEMS</h2>
                    <p style={{ color: 'var(--omnis-chrome)', opacity: 0.7, lineHeight: 1.6 }}>We deploy robust architectures that strip away operational friction, building entirely autonomous intelligent ecosystems.</p>
                </div>
            </motion.div>

            {/* NODE 2 */}
            <motion.div 
                style={{ opacity: node2Opacity, y: node2Y }}
                className="interactive-node"
            >
                <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', maxWidth: 400, textAlign: 'right' }}>
                    <div className="mono-stamp" style={{ marginBottom: 20 }}>02 // SOFTWARE</div>
                    <h2 style={{ fontSize: 40, marginBottom: 20 }}>DATA <br/> COGNITION</h2>
                    <p style={{ color: 'var(--omnis-chrome)', opacity: 0.7, lineHeight: 1.6 }}>Our neural modules structure predictive matrices. From data lakes to dynamic visual engines.</p>
                </div>
            </motion.div>

            {/* NODE 3 */}
            <motion.div 
                style={{ opacity: node3Opacity, y: node3Y }}
                className="interactive-node"
            >
                <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', maxWidth: 400 }}>
                    <div className="mono-stamp" style={{ marginBottom: 20 }}>03 // SECURITY</div>
                    <h2 style={{ fontSize: 40, marginBottom: 20 }}>DEEP <br/> CYBERNETICS</h2>
                    <p style={{ color: 'var(--omnis-chrome)', opacity: 0.7, lineHeight: 1.6 }}>Absolute system hardening against entropy. Security operates at the kernel level across all physical and abstract layers.</p>
                </div>
            </motion.div>

            {/* EVENT HORIZON */}
            <motion.div 
                style={{ opacity: horizonOpacity, scale: horizonScale }}
                className="interactive-node"
            >
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', maxWidth: 500 }}>
                    <div className="mono-stamp" style={{ marginBottom: 30, color: 'var(--omnis-uv)' }}>THE EVENT HORIZON</div>
                    <h2 style={{ fontSize: 60, marginBottom: 40, textShadow: '0 0 40px rgba(109, 40, 217, 0.4)' }}>INITIATE <br/> UPLINK.</h2>
                    
                    <div className="glass-chrome" style={{ padding: 40, borderRadius: 20, textAlign: 'left' }}>
                        <div style={{ display: 'grid', gap: 20 }}>
                            <div>
                                <label className="mono-stamp" style={{ display: 'block', marginBottom: 10 }}>SIGNATURE ID</label>
                                <input placeholder="ENTER NAME..." style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '10px 0', color: '#fff', fontSize: 16, outline: 'none' }} />
                            </div>
                            <div>
                                <label className="mono-stamp" style={{ display: 'block', marginBottom: 10 }}>TRANSMIT FREQUENCY</label>
                                <input placeholder="ENTER EMAIL..." style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '10px 0', color: '#fff', fontSize: 16, outline: 'none' }} />
                            </div>
                            <button className="btn-chrome" style={{ width: '100%', marginTop: 20 }}>DISPATCH SIGNAL</button>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
