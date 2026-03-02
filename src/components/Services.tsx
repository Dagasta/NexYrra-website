'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { services } from '../lib/services-data';

const Services = () => {
    return (
        <section id="services" style={{ padding: '120px 0', background: '#08090f', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '30%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 80 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 32, height: 2, background: '#8B5CF6', borderRadius: 2 }} />
                        <span className="font-cyber" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#8B5CF6' }}>
                            Our AI Services
                        </span>
                    </div>
                    <h2 className="font-title" style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.03em' }}>
                        Intelligence Suite for <br />
                        <span style={{ background: 'linear-gradient(90deg, #8B5CF6 0%, #22D3EE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Modern Enterprise
                        </span>
                    </h2>
                    <p style={{ fontSize: 18, color: '#94A3B8', maxWidth: 560, lineHeight: 1.8, fontWeight: 400 }}>
                        From autonomous agents to bulk marketing — every service is engineered to deliver measurable ROI.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 20, marginBottom: 80 }}>
                    {services.map((service, i) => (
                        <motion.div key={service.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                            <Link href={`/services/${service.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                                <div className="card-nex" style={{ padding: 32, height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                                        <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(34,211,238,0.1))', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-title" style={{ fontSize: 17, fontWeight: 800, color: 'white', lineHeight: 1.3 }}>{service.title}</h3>
                                            <span style={{ fontSize: 12, color: '#8B5CF6', fontFamily: 'var(--font-main)' }}>{service.titleAr}</span>
                                        </div>
                                    </div>

                                    <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.8, marginBottom: 24, flex: 1, fontWeight: 400 }}>
                                        {service.description}
                                    </p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                                        {service.features.map(f => (
                                            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                <CheckCircle size={13} style={{ color: '#8B5CF6', flexShrink: 0 }} />
                                                <span style={{ fontSize: 12, color: '#CBD5E1', fontWeight: 600 }}>{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid rgba(139,92,246,0.08)' }}>
                                        <span style={{ fontSize: 12, fontWeight: 700, color: '#8B5CF6', fontFamily: 'var(--font-cyber)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                            {service.tagline}
                                        </span>
                                        <ArrowRight size={16} style={{ color: '#8B5CF6' }} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(34,211,238,0.06))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 24, padding: '64px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
                    <div>
                        <h3 className="font-title" style={{ fontSize: 32, fontWeight: 900, marginBottom: 10 }}>Custom Enterprise Solutions</h3>
                        <p style={{ color: '#94A3B8', fontSize: 16, fontWeight: 400 }}>Need a bespoke AI architecture? We build it from scratch for you.</p>
                    </div>
                    <Link href="/contact" className="btn-primary" style={{ padding: '18px 48px', fontSize: 16, whiteSpace: 'nowrap', borderRadius: 14 }}>
                        Request Strategy Session <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
