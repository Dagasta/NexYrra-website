'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Activity, Zap, Code2, Network, Database, Lock, Globe } from 'lucide-react';
import OSNavbar from '../../components/OSNavbar';
import OSFooter from '../../components/OSFooter';

const EXPERTISE = [
    {
        id: 'AI',
        title: 'ARTIFICIAL INTELLIGENCE',
        icon: Cpu,
        color: '#8A2BE2',
        desc: 'We engineer autonomous agents, predictive ML models, and domain-specific LLMs. We don\'t just use off-the-shelf wrappers; we train, fine-tune, and deploy self-learning ecosystems that ingest your proprietary data to outthink your competitors.',
        stack: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI', 'HuggingFace', 'Vector DBs']
    },
    {
        id: 'SOFTWARE',
        title: 'SOFTWARE ENGINEERING',
        icon: Code2,
        color: '#00FFFF',
        desc: 'High-throughput, multi-tenant SaaS architecture and bespoke internal platforms. Every application we build is designed for zero-latency execution, utilizing modern edge-compute infrastructure to scale globally without friction.',
        stack: ['Next.js', 'React Native', 'Node.js', 'Rust', 'GraphQL', 'WebSockets']
    },
    {
        id: 'INFRASTRUCTURE',
        title: 'TECH INFRASTRUCTURE',
        icon: Network,
        color: '#4D9FFF',
        desc: 'Bulletproof cloud deployments, CI/CD pipelines, and zero-trust cybersecurity networks. We construct the digital concrete your company runs on, ensuring 99.999% uptime and military-grade data protection under infinite scale.',
        stack: ['AWS / GCP', 'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL', 'Redis']
    }
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

    const [activeTab, setActiveTab] = useState(0);

    return (
        <main ref={containerRef}>
            <OSNavbar />

            {/* Neural Background global to about page */}
            <div style={{ position: 'fixed', inset: 0, zIndex: -2, background: '#020008' }} />
            <motion.div style={{ position: 'fixed', inset: 0, zIndex: -1, opacity, scale, background: 'radial-gradient(circle at 50% 30%, rgba(138,43,226,0.15), transparent 70%)' }} />
            <div className="grid-overlay" style={{ position: 'fixed', opacity: 0.2, zIndex: -1 }} />

            {/* Cinematic Hero */}
            <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                
                {/* Rotating Tech Sphere Graphic */}
                <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                    style={{ position: 'absolute', width: '120vw', height: '120vw', border: '1px solid rgba(0,255,255,0.05)', borderRadius: '50%', top: '10%', left: '-10%', pointerEvents: 'none' }}
                />
                <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
                    style={{ position: 'absolute', width: '100vw', height: '100vw', border: '1px dashed rgba(138,43,226,0.1)', borderRadius: '50%', top: '20%', left: '0%', pointerEvents: 'none' }}
                />

                <div className="container-os" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 32, padding: '8px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999 }}>
                            <div className="status-dot" />
                            <span className="mono" style={{ color: 'white', fontSize: 10, letterSpacing: '0.2em' }}>NEXYRRA_INTELLIGENCE_FIRM</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(60px, 12vw, 160px)', fontWeight: 900, fontFamily: 'var(--font-display)', margin: 0, lineHeight: 0.9, letterSpacing: '-0.04em' }}>
                            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>WE BUILD</span><br/>
                            <span className="gradient-purple-cyan glow-purple">THE FUTURE.</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                    style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
                >
                    <span className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em' }}>SCROLL_TO_INITIALIZE</span>
                    <motion.div animate={{ height: [0, 40, 0], opacity: [0, 1, 0], y: [0, 20, 40] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: 1, background: 'var(--neon-cyan)' }} />
                </motion.div>
            </section>

            {/* The Manifesto Narrative (Sticky Scroll Effect) */}
            <section style={{ padding: 'clamp(100px, 15vw, 200px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(2,0,8,0.8)', backdropFilter: 'blur(20px)' }}>
                <div className="container-os">
                    <div style={{ maxWidth: 900 }}>
                        <div className="mono" style={{ color: 'var(--neon-purple)', marginBottom: 30, fontSize: 11, letterSpacing: '0.2em' }}>[ 01_SYSTEMS_MANIFESTO ]</div>
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', color: 'white', lineHeight: 1.2, marginBottom: 40, fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                            We are not an agency. We are an elite <span className="gradient-purple-blue">systems engineering firm</span>.
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                            <p style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontWeight: 300 }}>
                                Most companies deploy digital duct tape. They buy off-the-shelf software, connect it with fragile integrations, and wonder why they can't scale. We reject this paradigm.
                            </p>
                            <p style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontWeight: 300 }}>
                                At Nexyrra, we architect from the bare metal up. Whether it is an autonomous AI agent handling ten thousand customer queries or a bespoke SaaS platform processing millions of transactions, we engineer solutions that function identically to intelligent biological ecosystems: <strong style={{ color: 'white' }}>Self-healing, autonomous, and capable of infinite expansion.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Expertise Interactive Matrix */}
            <section style={{ padding: 'clamp(100px, 15vw, 240px) 0', position: 'relative' }}>
                <div className="container-os">
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(60px, 10vw, 100px)' }}>
                        <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900, fontFamily: 'var(--font-display)', color: 'white', lineHeight: 1 }}>
                            CORE <span className="gradient-cyan-blue">CAPABILITIES</span>
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'clamp(40px, 8vw, 120px)' }} className="grid-1-mobile">
                        {/* Selector Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {EXPERTISE.map((exp, i) => (
                                <div 
                                    key={exp.id}
                                    onClick={() => setActiveTab(i)}
                                    style={{ 
                                        padding: '24px 32px', 
                                        cursor: 'pointer',
                                        background: activeTab === i ? 'rgba(255,255,255,0.05)' : 'transparent',
                                        border: '1px solid',
                                        borderColor: activeTab === i ? `${exp.color}50` : 'rgba(255,255,255,0.05)',
                                        borderLeft: `4px solid ${activeTab === i ? exp.color : 'transparent'}`,
                                        borderRadius: 8,
                                        transition: 'all 0.3s ease',
                                        display: 'flex', alignItems: 'center', gap: 16
                                    }}
                                >
                                    <div style={{ width: 40, height: 40, borderRadius: 8, background: activeTab === i ? `${exp.color}20` : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                                        <exp.icon size={20} color={activeTab === i ? exp.color : 'rgba(255,255,255,0.3)'} />
                                    </div>
                                    <h3 style={{ fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-display)', color: activeTab === i ? 'white' : 'rgba(255,255,255,0.4)', transition: 'color 0.3s' }}>
                                        {exp.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Display Column */}
                        <div className="glass-panel" style={{ padding: 'clamp(40px, 6vw, 60px)', position: 'relative', overflow: 'hidden' }}>
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                                    transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                                >
                                    <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 300, background: `radial-gradient(circle, ${EXPERTISE[activeTab].color}20 0%, transparent 70%)`, pointerEvents: 'none' }} />
                                    
                                    <div className="mono" style={{ fontSize: 11, color: EXPERTISE[activeTab].color, letterSpacing: '0.2em', marginBottom: 24 }}>
                                        // EXECUTE_MODULE_SPEC
                                    </div>
                                    
                                    <h3 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'white', marginBottom: 24, lineHeight: 1.1 }}>
                                        {EXPERTISE[activeTab].title}
                                    </h3>
                                    
                                    <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontWeight: 300, marginBottom: 48 }}>
                                        {EXPERTISE[activeTab].desc}
                                    </p>

                                    <div>
                                        <div className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em', marginBottom: 16 }}>DEPLOYMENT_STACK</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                                            {EXPERTISE[activeTab].stack.map((tech, i) => (
                                                <motion.div 
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                                                    className="mono"
                                                    style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.5)', border: `1px solid ${EXPERTISE[activeTab].color}30`, borderRadius: 4, color: 'white', fontSize: 10, letterSpacing: '0.1em' }}
                                                >
                                                    {tech}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Global Impact / Final Grid */}
            <section style={{ padding: 'clamp(100px, 15vw, 200px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#000' }}>
                 <div className="container-os">
                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="grid-1-mobile">
                         {[
                             { stat: '100M+', label: 'API REQUESTS HANDLED', icon: Activity, color: '#8A2BE2' },
                             { stat: '0.0ms', label: 'THEORETICAL LATENCY', icon: Zap, color: '#00FFFF' },
                             { stat: '99.9%', label: 'SYSTEM RELIABILITY', icon: Shield, color: '#4D9FFF' }
                         ].map((item, i) => (
                             <motion.div 
                                 key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                 style={{ padding: '48px 32px', background: 'rgba(10,5,20,0.5)', border: `1px solid rgba(255,255,255,0.05)`, borderRadius: 12, textAlign: 'center', transition: 'all 0.3s' }}
                                 onMouseEnter={e => { (e.currentTarget.style.borderColor = `${item.color}50`); (e.currentTarget.style.transform = 'translateY(-10px)'); (e.currentTarget.style.boxShadow = `0 20px 40px ${item.color}20`); }}
                                 onMouseLeave={e => { (e.currentTarget.style.borderColor = `rgba(255,255,255,0.05)`); (e.currentTarget.style.transform = 'none'); (e.currentTarget.style.boxShadow = 'none'); }}
                             >
                                 <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                                     <item.icon size={24} color={item.color} />
                                 </div>
                                 <div style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900, fontFamily: 'var(--font-display)', color: 'white', marginBottom: 12 }}>{item.stat}</div>
                                 <div className="mono" style={{ fontSize: 10, color: item.color, letterSpacing: '0.2em' }}>{item.label}</div>
                             </motion.div>
                         ))}
                     </div>
                 </div>
            </section>

            <OSFooter />
        </main>
    );
}
