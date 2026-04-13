'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function Cursor() {
    const [isPointer, setIsPointer] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const mx = useMotionValue(-200);
    const my = useMotionValue(-200);

    // Dynamic lag based on state
    const stiffness = isPointer ? 300 : 120;
    const damping = isPointer ? 30 : 20;

    const ringX = useSpring(mx, { stiffness, damping, mass: 0.5 });
    const ringY = useSpring(my, { stiffness, damping, mass: 0.5 });
    
    // Ghost trail (very high lag)
    const ghostX = useSpring(mx, { stiffness: 20, damping: 20 });
    const ghostY = useSpring(my, { stiffness: 20, damping: 20 });

    useEffect(() => {
        const mq = window.matchMedia('(pointer: fine)');
        setIsDesktop(mq.matches);
        if (!mq.matches) return;

        const onMove = (e: MouseEvent) => {
            mx.set(e.clientX);
            my.set(e.clientY);
            setCoords({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            const el = e.target as HTMLElement;
            const tag = el.tagName;
            const role = el.getAttribute('role');
            const parentA = el.closest('a');
            const parentBtn = el.closest('button');
            setIsPointer(
                tag === 'A' || tag === 'BUTTON' || tag === 'INPUT' ||
                role === 'button' || role === 'link' ||
                !!parentA || !!parentBtn
            );
        };

        const onLeave = () => setIsVisible(false);
        const onEnter = () => setIsVisible(true);
        const onDown = () => setIsClick(true);
        const onUp = () => setIsClick(false);

        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('mousedown', onDown);
        window.addEventListener('mouseup', onUp);
        document.documentElement.addEventListener('mouseleave', onLeave);
        document.documentElement.addEventListener('mouseenter', onEnter);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mousedown', onDown);
            window.removeEventListener('mouseup', onUp);
            document.documentElement.removeEventListener('mouseleave', onLeave);
            document.documentElement.removeEventListener('mouseenter', onEnter);
        };
    }, [mx, my]);

    if (!isDesktop) return null;

    const RING_SIZE = isClick ? 26 : isPointer ? 60 : 36;

    return (
        <>
            {/* The ghost trail (Digital Echo) */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0, left: 0,
                    x: ghostX,
                    y: ghostY,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 99997,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* The primary ring (System Reticle) */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0, left: 0,
                    x: ringX,
                    y: ringY,
                    width: RING_SIZE,
                    height: RING_SIZE,
                    borderRadius: isPointer ? '0%' : '50%',
                    border: `1px solid ${isPointer ? '#22D3EE' : '#8B5CF6'}`,
                    pointerEvents: 'none',
                    zIndex: 99998,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0,
                    rotate: isPointer ? 45 : 0,
                    transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.4s, transform 0.4s, border-color 0.2s',
                }}
            >
                {/* Crosshair lines on hover */}
                {isPointer && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div style={{ position: 'absolute', top: '50%', left: '-20px', right: '-20px', height: 1, background: 'rgba(34,211,238,0.3)' }} />
                        <div style={{ position: 'absolute', left: '50%', top: '-20px', bottom: '-20px', width: 1, background: 'rgba(34,211,238,0.3)' }} />
                    </motion.div>
                )}
            </motion.div>

            {/* The sharp bit (Data Point) */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0, left: 0,
                    x: mx,
                    y: my,
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: isPointer ? '#22D3EE' : 'white',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0,
                    boxShadow: isPointer ? '0 0 15px #22D3EE' : '0 0 10px #8B5CF6'
                }}
            />

            {/* Coordinate Data Overlay */}
            {isVisible && (
                <div style={{
                    position: 'fixed',
                    top: coords.y + 20,
                    left: coords.x + 20,
                    fontSize: 7,
                    fontFamily: 'monospace',
                    color: '#334155',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    textTransform: 'uppercase'
                }}>
                    X: {Math.round(coords.x)}<br />
                    Y: {Math.round(coords.y)}<br />
                    PTR: {isPointer ? 'ACTIVE' : 'IDLE'}
                </div>
            )}
        </>
    );
}
