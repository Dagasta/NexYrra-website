'use client';

import React from 'react';
import Link from 'next/link';

// Detailed SVG Logo matching your provided image — Hexagon with dual-lightning N mark
const NexyrraLogo = ({ size = 52 }: { size?: number }) => (
    <div style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
    }}>
        <img
            src="/assets/logo.png"
            alt="Nexyrra Logo"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 12px rgba(139,92,246,0.5))',
            }}
        />
    </div>
);

export { NexyrraLogo };

// Full Wordmark with the brand-consistent styling
const NexyrraWordmark = ({ size = 42 }: { size?: number }) => (
    <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <NexyrraLogo size={size} />
        <span style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: size * 0.55,
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: 'white',
            textShadow: '0 0 10px rgba(139,92,246,0.3)'
        }}>
            NEX<span style={{ color: '#8B5CF6' }}>YRRA</span>
        </span>
    </Link>
);

export { NexyrraWordmark };
export default NexyrraLogo;
