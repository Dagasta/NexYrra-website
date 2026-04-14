'use client';

import React, { useEffect, useRef } from 'react';

export default function MatrixRain({ color = 'rgba(138,43,226,0.3)' }: { color?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;

        // full screen
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        
        // an array of drops - one per column
        const drops: number[] = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const draw = () => {
            // Translucent black background to show trail
            ctx.fillStyle = 'rgba(2, 0, 8, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = color;
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);
        
        const handleResize = () => {
             canvas.width = window.innerWidth;
             canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [color]);

    return (
        <canvas 
            ref={canvasRef} 
            style={{ 
                position: 'fixed', 
                top: 0, left: 0, 
                width: '100%', height: '100%', 
                zIndex: -3, 
                pointerEvents: 'none' 
            }} 
        />
    );
}
