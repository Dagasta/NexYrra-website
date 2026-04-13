'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Box, Cpu, Workflow, Network, BarChart3, Fingerprint } from 'lucide-react';
import { services } from '../lib/services-data';

// Interactive Diagnostic Card Component
const DiagnosticCard = ({ service, index, Icon }: { service: any, index: number, Icon: any }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    
    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
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
        setHovered(false);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="h-full z-10"
        >
            <div className="glass-v7 h-full" style={{ padding: '60px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Active Scanning Overlay */}
                {hovered && (
                    <motion.div 
                        initial={{ top: '-10%' }}
                        animate={{ top: '110%' }}
                        transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                        style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)', boxShadow: '0 0 20px #22D3EE', zIndex: 0 }}
                    />
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 50, transform: 'translateZ(30px)' }}>
                    <div style={{ width: 64, height: 64, background: hovered ? 'rgba(34, 211, 238, 0.1)' : 'rgba(168, 85, 247, 0.05)', borderRadius: '12%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(168, 85, 247, 0.2)', transition: 'all 0.5s' }}>
                        <Icon size={28} style={{ color: hovered ? '#22D3EE' : '#A855F7', transition: 'all 0.5s' }} />
                    </div>
                    <div>
                        <span className="mono-diag" style={{ color: '#A855F7', display: 'block', textAlign: 'right' }}>MOD_0{index + 1}</span>
                        {hovered && (
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mono-diag" style={{ color: '#22D3EE', fontSize: 8 }}>DIAGNOSTIC: LIVE</motion.span>
                        )}
                    </div>
                </div>

                <div style={{ flex: 1, transform: 'translateZ(40px)' }}>
                    <h3 style={{ fontSize: 28, marginBottom: 15, color: hovered ? '#22D3EE' : '#08090f', transition: 'color 0.5s' }}>{service.title}</h3>
                    <p style={{ fontSize: 15, color: '#64748B', lineHeight: 1.8 }}>{service.description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default function Services() {
    const icons: any = {
        'custom-software': Box,
        'autonomous-systems': Cpu,
        'workflow-automation': Workflow,
        'cloud-devops': Network,
        'data-intelligence': BarChart3,
        'cybersecurity': Fingerprint,
    };

    return (
        <section style={{ padding: '180px 0', position: 'relative', perspective: '1500px' }}>
            <div className="container-nexus">
                <div style={{ marginBottom: 120, textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                        <Zap size={14} style={{ color: '#A855F7' }} />
                        <span className="mono-diag" style={{ color: '#A855F7' }}>SYSTEM_ARCHITECTURE.v7</span>
                    </div>
                    <h2>
                        INTELLIGENCE <br />
                        <span className="text-gradient shimmer-luxe">MODULES.</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 40 }}>
                    {services.map((s, i) => (
                        <motion.div
                            key={s.slug}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <DiagnosticCard service={s} index={i} Icon={icons[s.slug] || Box} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
