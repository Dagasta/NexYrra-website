'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Sparkles, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

    // Interactive mouse parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 80);
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 80);
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [mouseX, mouseY]);

    // Parallax logic
    const layer1Scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

    return (
        <section ref={containerRef} style={{ height: '250vh', position: 'relative' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                
                {/* 3D APERTURE PORTAL */}
                <motion.div style={{
                    position: 'absolute',
                    width: 'clamp(500px, 60vw, 1200px)',
                    height: 'clamp(500px, 60vw, 1200px)',
                    scale: layer1Scale,
                    rotate,
                    x: springX,
                    y: springY,
                    opacity: opacity,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    {/* Ring System */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 20 + i * 10, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                inset: i * 40,
                                border: `1px solid rgba(168, 85, 247, ${0.05 + (i * 0.05)})`,
                                borderRadius: '50%',
                                opacity: 0.8
                            }}
                        />
                    ))}

                    <div style={{ width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 60%)', filter: 'blur(40px)', borderRadius: '50%' }} />
                </motion.div>

                {/* FOREGROUND CONTENT */}
                <div className="container-nexus" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div style={{ y: textY, opacity }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
                            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, #A855F7, transparent)' }} />
                            <span className="mono-diag" style={{ color: '#A855F7', fontSize: 11, fontWeight: 700, opacity: 1 }}>SYSTEM.AETHER_v7</span>
                        </div>

                        <h1 style={{ 
                            fontSize: 'clamp(60px, 12vw, 160px)', 
                            fontWeight: 900, 
                            lineHeight: 0.85, 
                            letterSpacing: '-0.07em',
                            marginBottom: 40
                        }}>
                            ENGINEER <br />
                            <span className="shimmer-luxe text-gradient" style={{ paddingRight: 20 }}>THE IMPOSSIBLE.</span>
                        </h1>

                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: 60 }} className="grid-mobile-1">
                            <p style={{ fontSize: 'clamp(18px, 1.8vw, 24px)', color: '#64748B', lineHeight: 1.6, fontWeight: 300, maxWidth: 600 }}>
                                We deconstruct the existing reality to architect an experience beyond computation. High-performance digital foundations for the luxury sector.
                            </p>
                        </div>

                        <div style={{ marginTop: 80, display: 'flex', gap: 40, alignItems: 'center' }} className="stack-mobile">
                            <Link href="/contact" style={{ textDecoration: 'none' }}>
                                <button className="btn-nexus">
                                   INITIALIZE_SYNC <ArrowRight size={20} />
                                </button>
                            </Link>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                <Activity size={18} style={{ color: '#22D3EE' }} />
                                <span className="mono-diag" style={{ opacity: 0.8 }}>NEURAL_NODES: ONLINE</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
