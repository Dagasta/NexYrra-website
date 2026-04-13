'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function Cursor() {
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const mX = useMotionValue(-100);
    const mY = useMotionValue(-100);

    const sX = useSpring(mX, { stiffness: 150, damping: 25, mass: 0.5 });
    const sY = useSpring(mY, { stiffness: 150, damping: 25, mass: 0.5 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mX.set(e.clientX);
            mY.set(e.clientY);
            setCoords({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            const el = e.target as HTMLElement;
            setIsPointer(window.getComputedStyle(el).cursor === 'pointer' || el.tagName === 'A' || el.tagName === 'BUTTON');
        };

        const leave = () => setIsVisible(false);
        const enter = () => setIsVisible(true);

        window.addEventListener('mousemove', move);
        document.documentElement.addEventListener('mouseleave', leave);
        document.documentElement.addEventListener('mouseenter', enter);

        return () => {
            window.removeEventListener('mousemove', move);
            document.documentElement.removeEventListener('mouseleave', leave);
            document.documentElement.removeEventListener('mouseenter', enter);
        };
    }, [mX, mY]);

    if (typeof window === 'undefined') return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    style={{
                        position: 'fixed', top: 0, left: 0,
                        x: sX, y: sY,
                        pointerEvents: 'none', zIndex: 99999,
                        translateX: '-50%', translateY: '-50%'
                    }}
                >
                    {/* The $60k Reticle */}
                    <div style={{ position: 'relative', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        
                        {/* Crosshair */}
                        <div style={{ position: 'absolute', width: '100%', height: 1, background: isPointer ? 'var(--nex-accent)' : 'rgba(255,255,255,0.2)' }} />
                        <div style={{ position: 'absolute', height: '100%', width: 1, background: isPointer ? 'var(--nex-accent)' : 'rgba(255,255,255,0.2)' }} />
                        
                        {/* Orbiting Points */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                            style={{ position: 'absolute', width: 50, height: 50, border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '50%' }} 
                        />

                        {/* Coordinate Box (The Wow Detail) */}
                        <div style={{
                            position: 'absolute', top: 40, left: 40,
                            padding: '10px', background: 'rgba(0,0,0,0.8)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex', flexDirection: 'column', gap: 4
                        }}>
                            <div className="mono" style={{ fontSize: 6, color: 'var(--nex-accent)', letterSpacing: '0.1em' }}>NX_COORD_LOCK</div>
                            <div className="mono" style={{ fontSize: 7, color: 'white' }}>X: {Math.round(coords.x)}</div>
                            <div className="mono" style={{ fontSize: 7, color: 'white' }}>Y: {Math.round(coords.y)}</div>
                            {isPointer && <div className="mono" style={{ fontSize: 6, color: 'var(--nex-cyan)', marginTop: 5 }}>[ PTR_READY ]</div>}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
