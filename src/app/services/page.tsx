'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Cpu, Network, Workflow, BarChart3, Fingerprint, Box, Layers, HardDrive, Zap, Terminal } from 'lucide-react';
import OSNavbar from '../../components/OSNavbar';
import OSFooter from '../../components/OSFooter';
import { services } from '../../lib/services-data';

// Custom 3D Tilt Card Component
function SystemCard({ s, i, icons }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Icon = icons[s.slug] || Box;
    const color = s.group === 'BUILD' ? '#8A2BE2' 
                : s.group === 'AUTOMATE' ? '#00FFFF' 
                : s.group === 'SCALE' ? '#4D9FFF' 
                : '#a855f7';

    return (
        <motion.div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.8 }}
        >
            <Link href={`/services/${s.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div 
                    className="glass-panel"
                    style={{ 
                        padding: '40px 32px', height: '100%',
                        display: 'flex', flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden',
                        borderTop: `1px solid rgba(255,255,255,0.05)`,
                        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${color}50`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px rgba(0,0,0,0.6), 0 0 30px ${color}20`;
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                >
                    <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0.5, transform: 'translateZ(20px)' }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40, transform: 'translateZ(30px)' }}>
                        <div style={{ width: 48, height: 48, borderRadius: 8, background: `${color}15`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon size={24} color={color} />
                        </div>
                        <span className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em' }}>SYS_0{i+1}</span>
                    </div>

                    <h3 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'var(--font-display)', color: 'white', marginBottom: 12, lineHeight: 1.2, transform: 'translateZ(40px)' }}>{s.title}</h3>
                    <div className="mono" style={{ fontSize: 9, color: color, marginBottom: 24, letterSpacing: '0.1em', transform: 'translateZ(20px)' }}>&gt; {s.group}_PROTOCOL</div>
                    
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 40, flex: 1, fontWeight: 300, transform: 'translateZ(10px)' }}>
                        {s.description}
                    </p>

                    <div className="mono" style={{ fontSize: 10, color: 'white', display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto', opacity: 0.8, transform: 'translateZ(30px)' }}>
                        DEPLOY_MODULE <ArrowUpRight size={14} color={color} />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default function SystemsPage() {
    const icons: any = {
        'custom-software': Box,
        'autonomous-systems': Cpu,
        'workflow-automation': Workflow,
        'cloud-devops': Network,
        'data-intelligence': BarChart3,
        'cybersecurity': Fingerprint,
        'api-integrations': Layers,
        'digital-transformation': HardDrive,
        'ui-ux-design': Layers,
    };

    // Hacker typing effect for subheader
    const text = "> COMPILING SYSTEM DIRECTORY.. [OK].. LAUNCHING PROTOCOLS";
    const [typed, setTyped] = useState("");
    
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setTyped(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 30);
        return () => clearInterval(timer);
    }, []);

    return (
        <main style={{ overflowX: 'hidden' }}>
            <OSNavbar />
            
            <div className="grid-overlay" style={{ opacity: 0.4 }} />
            <div className="scanline-overlay" />
            <div style={{ position: 'fixed', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at top, rgba(0,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none', zIndex: -1 }} />

            {/* Header */}
            <section style={{ height: '55vh', minHeight: 450, display: 'flex', alignItems: 'center', paddingTop: 100, position: 'relative' }}>
                <div style={{ position: 'absolute', right: '10%', top: '20%', opacity: 0.05 }}>
                    <Terminal size={400} />
                </div>
                
                <div className="container-os" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                            <div style={{ width: 28, height: 1, background: 'var(--neon-cyan)' }} />
                            <span className="mono" style={{ color: 'var(--neon-cyan)', fontSize: 10, letterSpacing: '0.15em' }}>SYSTEM_DIRECTORY // MODULES</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(50px, 8vw, 120px)', fontWeight: 900, fontFamily: 'var(--font-display)', lineHeight: 0.95, margin: 0, letterSpacing: '-0.02em' }}>
                            <span style={{ color: 'white' }}>THE</span> <span className="gradient-cyan-blue glow-cyan">SYSTEMS.</span>
                        </h1>
                        <div className="mono" style={{ marginTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.5)', height: 20 }}>
                            {typed}
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ color: 'var(--neon-cyan)', marginLeft: 4 }}>_</motion.span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Grid */}
            <section className="container-os" style={{ paddingBottom: 'clamp(100px, 15vw, 200px)', perspective: 2000 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))', gap: 'clamp(20px, 3vw, 30px)' }}>
                    {services.map((s, i) => (
                        <SystemCard key={s.slug} s={s} i={i} icons={icons} />
                    ))}
                </div>
            </section>

            <OSFooter />
        </main>
    );
}
