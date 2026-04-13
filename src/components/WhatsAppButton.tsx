'use client';

import React from 'react';
import { Radio } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    const phoneNumber = '971503953988';
    const message = 'SYNC REQUEST: RE: NEXYRRA_ARCHITECTURE';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                zIndex: 9999,
                textDecoration: 'none'
            }}
        >
            <div className="system-module shadow-lg" style={{ 
                padding: '12px 24px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: 15,
                background: 'rgba(8,9,15,0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(139,92,246,0.3)',
                borderRadius: 0
            }}>
                <div style={{ position: 'relative' }}>
                    <Radio size={20} style={{ color: '#8B5CF6' }} />
                    <div style={{
                        position: 'absolute',
                        inset: '-5px',
                        borderRadius: '50%',
                        border: '1px solid #8B5CF6',
                        animation: 'nex-ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
                        opacity: 0.5
                    }} />
                </div>
                
                <div style={{ textAlign: 'left' }}>
                    <div className="font-cyber" style={{ fontSize: 9, letterSpacing: '0.2em', color: '#8B5CF6', marginBottom: 2 }}>
                        SECURE_UPLINK
                    </div>
                    <div style={{ fontSize: 8, color: '#4B5563', fontFamily: 'monospace' }}>
                        ID: NX_SYNC_TRN_001
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes nex-ping {
                    75%, 100% {
                        transform: scale(2.2);
                        opacity: 0;
                    }
                }
            `}</style>
        </motion.a>
    );
};

export default WhatsAppButton;
