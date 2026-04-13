'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Smooth scroll transforms for 3D effect
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    
    // Perspective dive
    const rotateX = useTransform(smoothProgress, [0, 1], [0, 45]);
    const z = useTransform(smoothProgress, [0, 1], [0, -500]);
    const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(smoothProgress, [0, 1], [1, 0.8]);
    
    // Floating elements
    const floatY1 = useTransform(smoothProgress, [0, 1], [0, -200]);
    const floatY2 = useTransform(smoothProgress, [0, 1], [0, -400]);

    return (
        <section ref={containerRef} style={{
            position: 'relative', height: '200vh', // Extra height for scroll duration
            background: '#07080e', overflow: 'clip'
        }}>
            <div style={{
                position: 'sticky', top: 0, height: '100vh', width: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                perspective: '1500px', perspectiveOrigin: 'center center'
            }}>
                {/* Background Grid that "dives" */}
                <motion.div style={{
                    position: 'absolute', inset: -200, zIndex: 0,
                    backgroundImage: 'linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.1) 1px, transparent 1px)',
                    backgroundSize: '100px 100px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                    rotateX, z, scale, opacity
                }} />

                {/* The "Core" engine pulse */}
                <motion.div style={{
                    position: 'absolute', width: 600, height: 600,
                    background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)', zIndex: 1,
                    scale: useTransform(smoothProgress, [0, 1], [1, 2]),
                    opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.6, 1, 0])
                }} className="blob-morph" />

                <div className="container-nex" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div style={{ rotateX, z, scale, opacity }}>
                        
                        {/* Eyebrow - System Status */}
                        <div style={{ marginBottom: 40, display: 'flex', gap: 20, alignItems: 'center' }}>
                            <div className="scanline" style={{ height: 2, position: 'relative', width: 40, background: '#8B5CF6' }} />
                            <span className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.4em', color: '#8B5CF6' }}>
                                COREINIT.SYS_099
                            </span>
                        </div>

                        {/* Title - The Statement */}
                        <h1 className="font-title" style={{
                            fontSize: 'clamp(60px, 12vw, 180px)',
                            fontWeight: 900, lineHeight: 0.85, 
                            letterSpacing: '-0.06em', color: 'white',
                            marginBottom: 40
                        }}>
                            <span style={{ display: 'block', opacity: 0.2 }}>WE ARE THE</span>
                            <span style={{ display: 'block' }}>ARCHITECTS</span>
                            <span style={{ 
                                display: 'block', 
                                background: 'linear-gradient(90deg, #8B5CF6, #22D3EE)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                            }}>OF REALITY.</span>
                        </h1>

                        <p className="font-main" style={{
                            fontSize: 'clamp(18px, 2vw, 24px)', color: '#64748B',
                            maxWidth: 600, lineHeight: 1.6, marginBottom: 60, fontWeight: 300
                        }}>
                            Developing high-performance digital systems that defy standard architecture.
                            We don't build websites. We engineer legacies.
                        </p>

                        <div style={{ display: 'flex', gap: 20 }}>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary" style={{ padding: '20px 48px', borderRadius: 0, border: '1px solid #8B5CF6', background: 'transparent' }}>
                                INITIALIZE SYSTEM <ArrowRight size={18} />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating "Data" Particles */}
                <motion.div style={{ 
                    position: 'absolute', right: '10%', top: '20%', 
                    y: floatY1, rotateZ: 15, zIndex: 5 
                }}>
                    <div className="system-module" style={{ padding: '20px', fontSize: 10, color: '#8B5CF6', fontFamily: 'monospace' }}>
                        [ PROTOCOL: SCALE_ACTIVE ]<br />
                        [ STATUS: 100%_STABLE ]<br />
                        [ LOAD: OPTIMIZED ]
                    </div>
                </motion.div>

                <motion.div style={{ 
                    position: 'absolute', left: '5%', bottom: '15%', 
                    y: floatY2, rotateZ: -10, zIndex: 5 
                }}>
                    <div className="system-module" style={{ padding: '20px', fontSize: 10, color: '#22D3EE', fontFamily: 'monospace' }}>
                        &lt;NETWORK: NEXYRRA_CORE&gt;<br />
                        &lt;UPLINK: ENCRYPTED&gt;<br />
                        &lt;LATENCY: 0.002ms&gt;
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
