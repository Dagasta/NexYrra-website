'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GlobalRadar() {
    return (
        <div style={{ position: 'relative', width: 300, height: 300, margin: '0 auto' }}>
            {/* Base radar grid */}
            <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(138,43,226,0.2)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', inset: '15%', border: '1px solid rgba(138,43,226,0.15)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', inset: '35%', border: '1px solid rgba(138,43,226,0.1)', borderRadius: '50%' }} />
            
            {/* Crosshairs */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 1, background: 'rgba(138,43,226,0.1)' }} />
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(138,43,226,0.1)' }} />
            
            {/* Scanning line */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                style={{
                    position: 'absolute', top: '50%', left: '50%',
                    width: '50%', height: 2,
                    background: 'linear-gradient(90deg, transparent, rgba(138,43,226,0.8))',
                    transformOrigin: '0% 50%',
                    boxShadow: '0 0 20px rgba(138,43,226,0.4)'
                }}
            />

            {/* Pings */}
            {[
                { top: '30%', left: '40%', delay: 0 },
                { top: '60%', left: '70%', delay: 1.5 },
                { top: '20%', left: '80%', delay: 2.2 },
                { top: '75%', left: '25%', delay: 3.1 },
            ].map((ping, i) => (
                <motion.div key={i}
                    style={{ position: 'absolute', top: ping.top, left: ping.left, width: 6, height: 6, borderRadius: '50%', background: '#00FFFF', transform: 'translate(-50%, -50%)' }}
                >
                    <motion.div 
                        animate={{ scale: [1, 4, 4], opacity: [0.8, 0, 0] }}
                        transition={{ repeat: Infinity, duration: 4, delay: ping.delay }}
                        style={{ position: 'absolute', inset: 0, border: '1px solid #00FFFF', borderRadius: '50%' }}
                    />
                </motion.div>
            ))}
            
            <div className="mono" style={{ position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.4)', fontSize: 10, letterSpacing: '0.2em', width: '100%', textAlign: 'center' }}>
                [ GLOBAL_NODE_TRACKING_SYSTEM ]
            </div>
        </div>
    );
}
