'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
    const [isPointer, setIsPointer] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const mx = useMotionValue(-200);
    const my = useMotionValue(-200);

    // Dot: fast (almost instant)
    const dotX = useSpring(mx, { stiffness: 600, damping: 40, mass: 0.3 });
    const dotY = useSpring(my, { stiffness: 600, damping: 40, mass: 0.3 });

    // Ring: slow, lagging behind
    const ringX = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.5 });
    const ringY = useSpring(my, { stiffness: 120, damping: 20, mass: 0.5 });

    useEffect(() => {
        // Only render on desktop (pointer: fine = mouse)
        const mq = window.matchMedia('(pointer: fine)');
        setIsDesktop(mq.matches);
        if (!mq.matches) return;

        const onMove = (e: MouseEvent) => {
            mx.set(e.clientX);
            my.set(e.clientY);
            setIsVisible(true);

            // Detect if hovered element is interactive
            const el = e.target as HTMLElement;
            const tag = el.tagName;
            const role = el.getAttribute('role');
            const parentA = el.closest('a');
            const parentBtn = el.closest('button');
            setIsPointer(
                tag === 'A' || tag === 'BUTTON' || tag === 'INPUT' ||
                tag === 'SELECT' || tag === 'TEXTAREA' ||
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

    const DOT = isClick ? 5 : isPointer ? 5 : 7;
    const RING = isClick ? 28 : isPointer ? 48 : 36;

    return (
        <>
            {/* Sharp dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0, left: 0,
                    x: dotX,
                    y: dotY,
                    width: DOT,
                    height: DOT,
                    borderRadius: '50%',
                    background: isPointer ? '#22D3EE' : '#8B5CF6',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    translateX: `-${DOT / 2}px`,
                    translateY: `-${DOT / 2}px`,
                    boxShadow: `0 0 ${DOT * 2}px ${isPointer ? 'rgba(34,211,238,0.9)' : 'rgba(139,92,246,0.9)'}`,
                    opacity: isVisible ? 1 : 0,
                    transition: 'width 0.15s, height 0.15s, background 0.2s, box-shadow 0.2s',
                }}
            />

            {/* Lagging ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0, left: 0,
                    x: ringX,
                    y: ringY,
                    width: RING,
                    height: RING,
                    borderRadius: '50%',
                    border: `1px solid ${isPointer ? 'rgba(34,211,238,0.5)' : 'rgba(139,92,246,0.4)'}`,
                    pointerEvents: 'none',
                    zIndex: 99998,
                    translateX: `-${RING / 2}px`,
                    translateY: `-${RING / 2}px`,
                    opacity: isVisible ? 1 : 0,
                    transition: 'width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), border-color 0.2s',
                    backdropFilter: isPointer ? 'invert(5%)' : 'none',
                }}
            />
        </>
    );
}
