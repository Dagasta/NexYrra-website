'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, FolderTree } from 'lucide-react';
import MatrixFooter from '../../components/MatrixFooter';

const logs = [
    { id: 'SYS.LOG_802.1', client: 'GCC_MEDICAL', result: '80% LATENCY REDUCTION', title: 'HEALTHCARE_NODE_SYNC', desc: 'Deployed a persistent neural layer to manage patient lifecycle states.' },
    { id: 'SYS.LOG_802.2', client: 'UAE_ARCHITECT', result: '3.4X VELOCITY', title: 'RETAIL_INTELLIGENCE_ENGINE', desc: 'Engineered a prismatic predictive commerce framework that autonomously adapts to market friction.' },
    { id: 'SYS.LOG_802.3', client: 'DUBAI_SYNDICATE', result: '500+ SIGNALS/MO', title: 'REAL_ESTATE_LEAD_CONSTRUCT', desc: 'Architected a qualification node managing high-volume prospect flows through neural sequences.' }
];

export default function ArchivePage() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '150px' }}>
            <div className="container" style={{ paddingLeft: 'clamp(20px, 10vw, 150px)' }}>
                
                <div style={{ marginBottom: 100 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                        <Database size={20} color="var(--matrix-blue)" />
                        <div className="sub-mono" style={{ color: 'var(--matrix-blue)' }}>SYSTEM_ARCHIVE_LOGS</div>
                    </div>
                    <h1 className="giant-heading" style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
                        <span className="text-gradient-cyan text-glow-hard" style={{ zIndex: 10 }}>
                            DATA
                        </span>
                        <span className="text-gradient-purple text-glow-purple" style={{ zIndex: 10 }}>
                            LEDGER.
                        </span>
                    </h1>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: 100 }}>
                    {logs.map((log, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ scale: 1.01, borderColor: 'rgba(0, 240, 255, 0.4)', boxShadow: '0 0 30px rgba(0, 240, 255, 0.1)', background: 'rgba(0, 240, 255, 0.02)' }}
                            style={{ 
                                background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)',
                                padding: '40px', display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', 
                                gap: '40px', alignItems: 'center', transition: 'all 0.3s'
                            }}
                        >
                            <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div className="sub-mono" style={{ color: 'var(--matrix-purple)', marginBottom: 10 }}>{log.id}</div>
                                <div className="sub-mono" style={{ opacity: 0.5 }}>CLIENT_ID: {log.client}</div>
                            </div>
                            
                            <div>
                                <h3 style={{ fontSize: 24, marginBottom: 15, color: 'var(--matrix-white)' }}>{log.title}</h3>
                                <p style={{ fontSize: 15, color: '#888', lineHeight: 1.6 }}>{log.desc}</p>
                            </div>

                            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <div className="sub-mono" style={{ opacity: 0.3, marginBottom: 10 }}>THROUGHPUT_YIELD_</div>
                                <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--matrix-cyan)' }}>{log.result}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
            <MatrixFooter />
        </main>
    );
}
