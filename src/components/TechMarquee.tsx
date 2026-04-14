'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface TechMarqueeProps {
    items: string[];
    speed?: number;
    color?: string;
    opacity?: number;
    reverse?: boolean;
}

export default function TechMarquee({ items, speed = 40, color = 'var(--neon-cyan)', opacity = 0.5, reverse = false }: TechMarqueeProps) {
    const sequence = [...items, ...items, ...items, ...items];

    return (
        <div style={{ width: '100vw', overflow: 'hidden', padding: '16px 0', borderTop: `1px solid ${color}30`, borderBottom: `1px solid ${color}30`, background: 'rgba(0,0,0,0.4)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '100px', background: 'linear-gradient(90deg, #020008, transparent)', zIndex: 2 }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '100px', background: 'linear-gradient(-90deg, #020008, transparent)', zIndex: 2 }} />
            
            <motion.div 
                animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: speed }}
                style={{ display: 'flex', width: 'max-content' }}
            >
                {sequence.map((text, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 30, paddingRight: 30 }}>
                        <span className="mono" style={{ fontSize: 13, color: color, opacity, fontWeight: 700, letterSpacing: '0.2em' }}>{text}</span>
                        <Zap size={14} color={color} style={{ opacity: opacity * 0.5 }} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
