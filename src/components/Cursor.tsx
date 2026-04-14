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
                    <div style={{ position: 'relative', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        
                        {/* Center Dot */}
                        <motion.div 
                            animate={{ scale: isPointer ? 1.5 : 1, backgroundColor: isPointer ? 'var(--neon-cyan)' : 'white' }}
                            style={{ position: 'absolute', width: 4, height: 4, borderRadius: '50%', zIndex: 10 }}
                        />
                        
                        {/* Hover Ring */}
                        <motion.div 
                            animate={{ scale: isPointer ? 1.5 : 1, opacity: isPointer ? 1 : 0 }}
                            style={{ position: 'absolute', width: 60, height: 60, border: '1px solid var(--neon-cyan)', borderRadius: '50%', boxShadow: '0 0 10px rgba(0,255,255,0.5)' }}
                        />

                        {/* Coordinate Box (The Wow Detail - refined to be sleeker) */}
                        <motion.div 
                            animate={{ opacity: isPointer ? 0 : 0.6 }}
                            style={{
                                position: 'absolute', top: 30, left: 30,
                                padding: '6px 8px', background: 'rgba(10,5,20,0.8)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderLeft: '2px solid var(--neon-purple)',
                                display: 'flex', flexDirection: 'column', gap: 2,
                                pointerEvents: 'none', backdropFilter: 'blur(4px)'
                            }}
                        >
                            <div className="mono" style={{ fontSize: 7, color: 'var(--neon-purple)', letterSpacing: '0.1em' }}>[ PTR_TRACK ]</div>
                            <div className="mono" style={{ fontSize: 8, color: 'white' }}>X: {Math.round(coords.x)} // Y: {Math.round(coords.y)}</div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
