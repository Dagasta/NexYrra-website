'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight, Activity, Cpu, ShieldCheck, Database, Zap, Lock, Terminal } from 'lucide-react';
import OSNavbar from '../../../components/OSNavbar';
import OSFooter from '../../../components/OSFooter';
import { services } from '../../../lib/services-data';

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const service = services.find(s => s.slug === slug);
    if (!service) notFound();

    const otherServices = services.filter(s => s.slug !== slug).sort(() => Math.random() - 0.5).slice(0, 3);
    
    // Determine dynamic color based on group
    const color = service.group === 'BUILD' ? '#8A2BE2' 
                : service.group === 'AUTOMATE' ? '#00FFFF' 
                : service.group === 'SCALE' ? '#4D9FFF' 
                : '#a855f7';

    return (
        <main style={{ overflowX: 'hidden' }}>
            <OSNavbar />

            {/* Background Architecture */}
            <div className="grid-overlay" style={{ opacity: 0.15 }} />
            <div className="scanline-overlay" />
            <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '100vh', background: `radial-gradient(circle at 50% 0%, ${color}12 0%, transparent 60%)`, pointerEvents: 'none', zIndex: -1 }} />

            {/* Header section */}
            <section style={{ paddingTop: 'clamp(140px, 15vw, 180px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
                <div className="container-os">
                    <Link href="/services" style={({ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.4)', fontSize: 9, marginBottom: 40, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'all 0.3s', textDecoration: 'none' } as any)}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.gap = '14px'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLElement).style.gap = '8px'; }}>
                        <ArrowLeft size={14} /> BACK_TO_SYSTEMS_DIRECTORY
                    </Link>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.4fr) 1fr', gap: 'clamp(40px, 6vw, 100px)', alignItems: 'center' }} className="grid-1-mobile">
                        {/* Title Block */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                                <div style={{ width: 44, height: 44, borderRadius: 8, background: `${color}15`, border: `1px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                                    {service.icon}
                                </div>
                                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: color }}>
                                    MODULE_SPEC // {service.slug.toUpperCase()}
                                </div>
                            </div>

                            <h1 style={{ fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: 800, fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: 24, color: 'white' }}>
                                {service.title}
                            </h1>
                            <p style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: 520, marginBottom: 40, fontWeight: 300 }}>
                                {service.tagline}
                            </p>

                            <Link href="/contact" style={{ display: 'inline-block', textDecoration: 'none' }}>
                                <button className="btn-os-primary" style={{ padding: '16px 36px', fontSize: 13, borderRadius: 6, display: 'flex', alignItems: 'center', gap: 12, border: `1px solid ${color}80` }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${color}60, 0 0 80px ${color}20`; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
                                >
                                    INIT_ARCHITECTURE <ArrowRight size={16} />
                                </button>
                            </Link>
                        </motion.div>

                        {/* Operational Benefits Panel */}
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="glass-panel" style={{ padding: 'clamp(30px, 4vw, 40px)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 2, background: `linear-gradient(90deg, ${color}, transparent)` }} />
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
                                <Activity size={14} color={color} />
                                <div className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>OPERATIONAL_BENEFITS</div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {service.benefits.map((b, i) => (
                                    <div key={b} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 16 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                                            <div style={{ width: 14, height: 14, borderRadius: '50%', background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}` }} />
                                            </div>
                                            <span style={{ fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'white' }}>{b}</span>
                                        </div>
                                        {/* Fake processing bar */}
                                        <div style={{ display: 'flex', gap: 4 }}>
                                            {[...Array(6)].map((_, j) => (
                                                <motion.div 
                                                    key={j} 
                                                    initial={{ opacity: 0.2 }} 
                                                    animate={{ opacity: j < 5 ? [0.2, 1, 0.2] : 0.2 }} 
                                                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 + j * 0.1 }}
                                                    style={{ height: 2, flex: 1, background: color, borderRadius: 2 }} 
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Engineering Flow */}
            <section style={{ padding: 'clamp(80px, 10vw, 160px) 0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: `linear-gradient(90deg, transparent, ${color}50, transparent)` }} />
                
                <div className="container-os">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1.2fr)', gap: 'clamp(60px, 8vw, 120px)' }} className="grid-1-mobile">
                        {/* Description */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 30 }}>
                                <Terminal size={14} color={color} />
                                <div className="mono" style={{ fontSize: 10, color: color, letterSpacing: '0.15em' }}>ENGINEERING_FLOW</div>
                            </div>
                            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: 40, color: 'white', lineHeight: 1.1 }}>
                                Implementation Path.
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                                {service.longDescription ? service.longDescription.split('\n\n').map((para, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 20 }}>
                                        <div className="mono" style={{ fontSize: 12, color: color, fontWeight: 700, paddingTop: 6, opacity: 0.6 }}>0{i+1}</div>
                                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontWeight: 300 }}>{para.trim()}</p>
                                    </div>
                                )) : null}
                            </div>
                        </motion.div>

                        {/* Use Cases */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="glass-panel" style={{ padding: 'clamp(30px, 4vw, 60px)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
                                    <Database size={14} color={color} />
                                    <div className="mono" style={{ fontSize: 10, color: color, letterSpacing: '0.15em' }}>SYSTEM_TARGETS</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                                    {service.useCases.map((uc, i) => (
                                        <div key={i} style={{ padding: 24, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 8, transition: 'all 0.3s' }}
                                            onMouseEnter={e => { (e.currentTarget.style.borderColor = `${color}60`); (e.currentTarget.style.background = 'rgba(18,8,36,0.6)'); }}
                                            onMouseLeave={e => { (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'); (e.currentTarget.style.background = 'rgba(0,0,0,0.4)'); }}
                                        >
                                            <Cpu size={16} color={color} style={{ marginBottom: 16 }} />
                                            <div className="mono" style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)', marginBottom: 8, letterSpacing: '0.1em' }}>USE_CASE_0{i+1}</div>
                                            <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'white', lineHeight: 1.4 }}>{uc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Adjacent Systems */}
            <section style={{ padding: 'clamp(80px, 10vw, 160px) 0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />
                
                <div className="container-os">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 60 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ width: 30, height: 1, background: 'rgba(255,255,255,0.2)' }} />
                            <div className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em' }}>
                                ADJACENT_SYSTEMS_INDEX
                            </div>
                            <div style={{ width: 30, height: 1, background: 'rgba(255,255,255,0.2)' }} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
                        {otherServices.map((s, i) => {
                            const sc = s.group === 'BUILD' ? '#8A2BE2' : s.group === 'AUTOMATE' ? '#00FFFF' : s.group === 'SCALE' ? '#4D9FFF' : '#a855f7';
                            return (
                                <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                    <Link href={`/services/${s.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                                        <div className="glass-panel" style={{ padding: 32, height: '100%', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}
                                            onMouseEnter={e => {
                                                (e.currentTarget as HTMLElement).style.borderColor = `${sc}50`;
                                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                                                (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${sc}10`;
                                            }}
                                            onMouseLeave={e => {
                                                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                                                (e.currentTarget as HTMLElement).style.transform = 'none';
                                                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                            }}
                                        >
                                            <div style={{ fontSize: 24, marginBottom: 20, width: 40, height: 40, borderRadius: 8, background: `${sc}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {s.icon}
                                            </div>
                                            <h4 style={{ fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'white', marginBottom: 12 }}>{s.title}</h4>
                                            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, flex: 1, fontWeight: 300 }}>{s.description.slice(0, 80)}...</p>
                                            
                                            <div className="mono" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                                <span style={{ fontSize: 9, color: sc }}>ENGAGE_MODULE</span>
                                                <ArrowRight size={12} color={sc} />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <OSFooter />
        </main>
    );
}
