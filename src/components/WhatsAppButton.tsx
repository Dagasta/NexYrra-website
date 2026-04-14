'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Zap, Activity } from 'lucide-react';

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const phoneNumber = '971503953988';
    const message = 'SYNC REQUEST: RE: NEXYRRA_ARCHITECTURE';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div style={{ position: 'fixed', bottom: '40px', right: '40px', zIndex: 9999 }}>
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        style={{
                            position: 'absolute',
                            bottom: '70px',
                            right: '0',
                            background: 'rgba(5,5,8,0.9)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(138,43,226,0.3)',
                            padding: '10px 14px',
                            borderRadius: '4px',
                            minWidth: '180px',
                            pointerEvents: 'none',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                            <Activity size={10} color="var(--neon-purple)" />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)' }}>
                                UPLINK_PROTOCOL // ACTIVE
                            </span>
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'white', fontWeight: 500 }}>
                            DIRECT_ENCRYPTION_SYNC
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(10,10,15,0.85)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(138,43,226,0.4)',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    position: 'relative',
                    boxShadow: '0 0 30px rgba(138,43,226,0.2)',
                }}
            >
                {/* Ping rings */}
                <motion.div
                    animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ position: 'absolute', inset: -1, borderRadius: '50%', border: '1px solid var(--neon-purple)' }}
                />
                <motion.div
                    animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    style={{ position: 'absolute', inset: -1, borderRadius: '50%', border: '1px solid var(--neon-cyan)' }}
                />

                <div style={{ position: 'relative', zIndex: 2 }}>
                    <MessageSquare size={24} color="white" />
                    <Zap 
                        size={12} 
                        style={{ 
                            position: 'absolute', 
                            top: -6, 
                            right: -6, 
                            color: 'var(--neon-cyan)',
                            filter: 'drop-shadow(0 0 5px var(--neon-cyan))'
                        }} 
                    />
                </div>

                {/* Corner Accents */}
                <div style={{ position: 'absolute', top: -2, left: '50%', width: '10px', height: '1px', background: 'var(--neon-purple)', transform: 'translateX(-50%)' }} />
                <div style={{ position: 'absolute', bottom: -2, left: '50%', width: '10px', height: '1px', background: 'var(--neon-purple)', transform: 'translateX(-50%)' }} />
            </motion.a>
        </div>
    );
};

export default WhatsAppButton;
