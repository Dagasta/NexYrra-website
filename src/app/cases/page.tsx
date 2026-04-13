'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Activity, Database, Target, Layers, Zap } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const projects = [
    {
        id: 'ARCHIVE_01',
        title: 'HEALTHCARE_NODE_SYNC',
        result: '80% LATENCY REDUCTION',
        client: 'GCC_MEDICAL_INFRA',
        desc: 'Deployed a persistent neural layer to manage patient lifecycle states, eliminating friction across 200+ localized nodes.',
        tags: ['AUTO_FLOW', 'NODE_SYNC'],
        icon: Activity,
    },
    {
        id: 'ARCHIVE_02',
        title: 'RETAIL_INTELLIGENCE_ENGINE',
        result: '3.4X VELOCITY',
        client: 'UAE_LUXURY_ARCHITECT',
        desc: 'Engineered a prismatic predictive commerce framework that autonomously adapts to real-time market friction.',
        tags: ['DATA_INTEL', 'PIPELINE_OPTI'],
        icon: Target,
    },
    {
        id: 'ARCHIVE_03',
        title: 'REAL_ESTATE_LEAD_CONSTRUCT',
        result: '500+ SIGNALS/MO',
        client: 'DUBAI_ESTATE_SYNDICATE',
        desc: 'Architected a qualification node that manages high-volume prospect flows through logic-driven neural sequences.',
        tags: ['LEAD_SYNC', 'RE_AUTO'],
        icon: Database,
    },
    {
        id: 'ARCHIVE_04',
        title: 'LOGISTICS_PIPELINE_UNIFICATION',
        result: '60% THROUGHPUT SURGE',
        client: 'GCC_FEDERAL_LOGISTICS',
        desc: 'Consolidated fractured ERP architectures into a singular, high-throughput automated logistics nervous system.',
        tags: ['ERP_HARDEN', 'AUTO_CORE'],
        icon: Layers,
    },
];

const FloatingDataPlate = ({ project, index }: { project: any, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    // Complex scroll parallax to simulate 3D floating depth
    const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    
    return (
        <motion.div ref={ref} style={{ y, rotateX, opacity, perspective: '1000px', transformStyle: 'preserve-3d' }}>
            <div className="glass-v7" style={{ 
                padding: 'clamp(40px, 6vw, 80px)', 
                marginBottom: 100, 
                borderRadius: 20, 
                position: 'relative', 
                overflow: 'hidden' 
            }}>
                 {/* Internal Lighting */}
                <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: `radial-gradient(circle at ${index % 2 === 0 ? '0%' : '100%'} 0%, rgba(34,211,238,0.1) 0%, transparent 50%)`, pointerEvents: 'none' }} />
                
                <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr 1fr', gap: 60, alignItems: 'center' }}>
                    
                    {/* Index & Icon */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        <div className="mono-diag" style={{ color: '#A855F7' }}>[ {project.id} ]</div>
                        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(168,85,247,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <project.icon size={32} style={{ color: '#22D3EE' }} />
                        </div>
                    </div>

                    {/* Data */}
                    <div>
                        <h3 className="text-gradient" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, marginBottom: 20 }}>{project.title}</h3>
                        <p style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', color: '#64748B', lineHeight: 1.8 }}>{project.desc}</p>
                    </div>

                    {/* Meta */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <div style={{ textAlign: 'right' }}>
                            <div className="mono-diag" style={{ color: '#A855F7', marginBottom: 10 }}>THROUGHPUT_YIELD_</div>
                            <div style={{ fontSize: 'clamp(20px, 2vw, 32px)', fontWeight: 900 }}>{project.result}</div>
                        </div>
                        
                        <div style={{ alignSelf: 'flex-end', marginTop: 40 }}>
                             <button className="btn-nexus" style={{ padding: '12px 24px', fontSize: 10 }}>
                                 VIEW_NODE <ArrowUpRight size={16} />
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function ArchivePage() {
    return (
        <main style={{ backgroundColor: 'var(--aether-bg)', minHeight: '100vh', overflow: 'hidden' }}>
            <Navbar />
            
            {/* Cinematic Header */}
            <section style={{ height: '70vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '80vw', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', filter: 'blur(100px)' }} />
                
                <div className="container-nexus">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 30 }}>
                             <Zap size={18} style={{ color: '#22D3EE' }} />
                             <span className="mono-diag" style={{ color: '#22D3EE' }}>SYSTEM_LEDGER_ACTIVE</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(80px, 15vw, 200px)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.07em' }}>
                            THE <span className="text-gradient">ARCHIVE.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Floating Data Plate Stream */}
            <section className="container-nexus" style={{ paddingBottom: 240, position: 'relative' }}>
                 {projects.map((p, i) => (
                     <FloatingDataPlate key={p.id} project={p} index={i} />
                 ))}
            </section>

            <Footer />
        </main>
    );
}
