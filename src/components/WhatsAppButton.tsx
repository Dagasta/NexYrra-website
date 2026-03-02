'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    const phoneNumber = '971503953988';
    const message = 'Hello Nexyrra, I would like to discuss a project.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(37, 211, 102, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{
                position: 'fixed',
                bottom: '32px',
                right: '32px',
                width: '64px',
                height: '64px',
                backgroundColor: '#25D366',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                zIndex: 9999,
                cursor: 'pointer',
                border: 'none',
                textDecoration: 'none'
            }}
        >
            <div style={{ position: 'relative' }}>
                <MessageSquare size={30} fill="currentColor" />
                {/* Ping animation effect */}
                <div style={{
                    position: 'absolute',
                    inset: '-4px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255, 255, 255, 0.4)',
                    animation: 'nex-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                }} />
            </div>

            <style jsx global>{`
                @keyframes nex-ping {
                    75%, 100% {
                        transform: scale(1.6);
                        opacity: 0;
                    }
                }
            `}</style>
        </motion.a>
    );
};

export default WhatsAppButton;
