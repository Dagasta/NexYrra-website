'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight, Activity, Cpu, ShieldCheck, Database } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { services } from '../../../lib/services-data';

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const service = services.find(s => s.slug === slug);
    if (!service) notFound();

    const otherServices = services.filter(s => s.slug !== slug).slice(0, 3);

    return (
        <main style={{ background: '#05060e', minHeight: '100vh', color: 'white', position: 'relative', overflowX: 'hidden' }}>
            <Navbar />

            {/* System Blueprint Overlay */}
            <div style={{
                position: 'fixed', inset: 0, opacity: 0.1, pointerEvents: 'none', zIndex: 0,
                backgroundImage: 'linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.1) 1px, transparent 1px)',
                backgroundSize: '100px 100px',
            }} />

            {/* Specification Header */}
            <section style={{ paddingTop: 200, paddingBottom: 100, position: 'relative', zIndex: 1 }}>
                <div className="container-nex">
                    <Link href="/services" className="font-cyber" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#334155', fontSize: 10, textDecoration: 'none', marginBottom: 60 }}>
                        <ArrowLeft size={14} /> BACK_TO_SYSTEMS_DIRECTORY
                    </Link>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 100 }} className="grid-mobile-1">
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
                                <div style={{ fontSize: 40 }}>{service.icon}</div>
                                <div className="font-cyber" style={{ fontSize: 10, letterSpacing: '0.4em', color: '#8B5CF6' }}>
                                    MODULE_SPEC: {service.slug.toUpperCase()}
                                </div>
                            </div>
                            <h1 className="font-title" style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.05em', marginBottom: 30 }}>
                                {service.title}
                            </h1>
                            <p style={{ fontSize: 20, color: '#64748B', lineHeight: 1.7, maxWidth: 520, marginBottom: 50, fontWeight: 300 }}>
                                {service.tagline}
                            </p>
                            <div style={{ display: 'flex', gap: 20 }}>
                                <Link href="/contact" className="btn-primary" style={{ padding: '20px 48px', borderRadius: 0, background: '#8B5CF6', color: 'black' }}>
                                    INIT_ARCHITECTURE <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        {/* Technical Metadata Panel */}
                        <div className="system-module" style={{ padding: '40px', background: 'rgba(255,255,255,0.01)' }}>
                            <div className="font-cyber" style={{ fontSize: 9, color: '#1E293B', marginBottom: 30 }}>OPERATIONAL_BENEFITS</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {service.benefits.map((b, i) => (
                                    <div key={b} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: 15 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5 }}>
                                            <CheckCircle size={10} style={{ color: '#34D399' }} />
                                            <span style={{ fontSize: 12, fontWeight: 800, color: 'white' }}>{b}</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: 4 }}>
                                            {[...Array(5)].map((_, j) => (
                                                <div key={j} style={{ height: 2, flex: 1, background: j < 4 ? '#34D399' : '#1E293B', opacity: 0.3 }} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engineering Deep Dive */}
            <section style={{ padding: '160px 0', background: '#000', position: 'relative' }}>
                <div className="container-nex">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 100 }} className="grid-mobile-1">
                        <div>
                            <div className="font-cyber" style={{ fontSize: 10, color: '#8B5CF6', marginBottom: 30 }}>ENGINEERING_FLOW</div>
                            <h2 className="font-title" style={{ fontSize: 32, fontWeight: 800, marginBottom: 30 }}>Implementation Path.</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                                {service.longDescription ? service.longDescription.split('\n\n').map((para, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 20 }}>
                                        <div style={{ fontSize: 10, color: '#1E293B', fontWeight: 900, paddingTop: 5 }}>0{i+1}</div>
                                        <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.8 }}>{para.trim()}</p>
                                    </div>
                                )) : null}
                            </div>
                        </div>

                        <div className="system-module" style={{ padding: '60px' }}>
                             <div className="font-cyber" style={{ fontSize: 10, color: '#8B5CF6', marginBottom: 40 }}>SYSTEM_TARGETS</div>
                             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}>
                                 {service.useCases.map((uc, i) => (
                                     <div key={i} style={{ padding: '24px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}>
                                         <Activity size={16} style={{ color: '#8B5CF6', marginBottom: 15 }} />
                                         <div className="font-cyber" style={{ fontSize: 9, fontWeight: 900, color: '#334155', marginBottom: 5 }}>USE_CASE_0{i+1}</div>
                                         <div style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>{uc}</div>
                                     </div>
                                 ))}
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adjacent Systems */}
            <section style={{ padding: '160px 0', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
                <div className="container-nex">
                    <div className="font-cyber" style={{ fontSize: 10, color: '#1E293B', marginBottom: 60, textAlign: 'center', letterSpacing: '0.4em' }}>
                        ADJACENT_SYSTEMS_INDEX
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: 'rgba(255,255,255,0.05)' }}>
                         {otherServices.map(s => (
                             <Link key={s.slug} href={`/services/${s.slug}`} style={{ textDecoration: 'none' }}>
                                 <div style={{ padding: '40px', background: '#05060e', height: '100%' }}>
                                     <div style={{ fontSize: 24, marginBottom: 20 }}>{s.icon}</div>
                                     <h4 className="font-title" style={{ fontSize: 16, fontWeight: 800, color: 'white', marginBottom: 8 }}>{s.title}</h4>
                                     <p style={{ fontSize: 12, color: '#4B5563', lineHeight: 1.6 }}>{s.description.slice(0, 80)}...</p>
                                 </div>
                             </Link>
                         ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
