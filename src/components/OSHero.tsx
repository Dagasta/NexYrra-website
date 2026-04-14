'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Activity, BarChart2, Cpu } from 'lucide-react';

/* ── PARTICLE ENGINE ─────────────────────────────── */
function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5 });
    const animRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;

        let W = canvas.width = window.innerWidth;
        let H = canvas.height = window.innerHeight;

        // Particles
        const COUNT = 120;
        const particles = Array.from({ length: COUNT }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.5 + 0.3,
            alpha: Math.random() * 0.5 + 0.1,
            color: Math.random() > 0.6 ? '#8A2BE2' : Math.random() > 0.5 ? '#00FFFF' : '#4D9FFF',
        }));

        const onResize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        const onMouse = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX / W, y: e.clientY / H };
        };

        window.addEventListener('resize', onResize, { passive: true });
        window.addEventListener('mousemove', onMouse, { passive: true });

        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            const mx = mouseRef.current.x * W;
            const my = mouseRef.current.y * H;

            for (let i = 0; i < COUNT; i++) {
                const p = particles[i];
                // Mouse repulsion (subtle)
                const dx = p.x - mx, dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 180) {
                    const force = (180 - dist) / 180 * 0.012;
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                }
                // Damping
                p.vx *= 0.98; p.vy *= 0.98;
                p.x += p.vx; p.y += p.vy;
                // Wrap
                if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
                if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha;
                ctx.fill();

                // Connect nearby particles
                for (let j = i + 1; j < COUNT; j++) {
                    const q = particles[j];
                    const ex = p.x - q.x, ey = p.y - q.y;
                    const ed = Math.sqrt(ex * ex + ey * ey);
                    if (ed < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = p.color;
                        ctx.globalAlpha = (1 - ed / 100) * 0.12;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            ctx.globalAlpha = 1;
            animRef.current = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouse);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
        />
    );
}

/* ── FLOATING HUD PANEL ──────────────────────────── */
function HUDPanel({ title, value, sub, icon: Icon, delay, style, href = "/services" }: any) {
    return (
        <Link href={href} style={{ textDecoration: 'none' }}>
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay, ease: [0.19, 1, 0.22, 1] }}
                style={{
                    position: 'absolute',
                    ...style,
                    background: 'rgba(8,5,16,0.75)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(138,43,226,0.2)',
                    borderRadius: 8,
                    padding: '14px 18px',
                    minWidth: 160,
                    zIndex: 5,
                    cursor: 'pointer',
                    animation: `float-${delay > 1 ? 'down' : 'up'} ${3 + delay}s ease-in-out infinite`,
                }}
                whileHover={{ scale: 1.05, borderColor: 'var(--neon-cyan)', boxShadow: '0 0 20px rgba(0,255,255,0.2)' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <Icon size={13} color="var(--neon-cyan)" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.15em', color: 'rgba(0,255,255,0.6)', textTransform: 'uppercase' }}>
                        {title}
                    </span>
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, fontFamily: 'var(--font-display)', color: 'white', letterSpacing: '-0.02em', marginBottom: 4 }}>
                    {value}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>
                    {sub}
                </div>
                {/* Mini bar */}
                <div style={{ marginTop: 10, display: 'flex', gap: 2, alignItems: 'flex-end', height: 20 }}>
                    {[0.4, 0.7, 0.5, 1, 0.6, 0.8, 0.9, 0.5].map((h, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [`${h * 100}%`, `${Math.min(1, h + 0.3) * 100}%`, `${h * 100}%`] }}
                            transition={{ repeat: Infinity, duration: 1.2 + i * 0.15, ease: 'easeInOut' }}
                            style={{ flex: 1, background: 'var(--neon-purple)', opacity: 0.5, borderRadius: 1 }}
                        />
                    ))}
                </div>
                {/* glow border top */}
                <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg,transparent,var(--neon-cyan),transparent)', opacity: 0.5 }} />
            </motion.div>
        </Link>
    );
}

/* ── HERO ────────────────────────────────────────── */
export default function OSHero() {
    const sectionRef = useRef<HTMLElement>(null);

    // Subtle parallax on header text — mouse offset
    const mX = useMotionValue(0);
    const mY = useMotionValue(0);
    const sX = useSpring(mX, { stiffness: 60, damping: 20 });
    const sY = useSpring(mY, { stiffness: 60, damping: 20 });
    const rotX = useTransform(sY, [-0.5, 0.5], ['4deg', '-4deg']);
    const rotY = useTransform(sX, [-0.5, 0.5], ['-4deg', '4deg']);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            mX.set((e.clientX / window.innerWidth - 0.5));
            mY.set((e.clientY / window.innerHeight - 0.5));
        };
        window.addEventListener('mousemove', handler, { passive: true });
        return () => window.removeEventListener('mousemove', handler);
    }, [mX, mY]);

    return (
        <section
            ref={sectionRef}
            style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
        >
            {/* Deep void gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(138,43,226,0.14) 0%, #050508 70%)', zIndex: 0 }} />

            {/* Particle canvas */}
            <ParticleCanvas />

            {/* Grid overlay */}
            <div className="grid-overlay" style={{ zIndex: 1 }} />

            {/* Scanline */}
            <div className="scanline-overlay" style={{ zIndex: 2 }} />

            {/* ── FLOATING HUD PANELS ─────────────── */}
            <HUDPanel
                title="Predictive Analytics"
                value="99.7%"
                sub="ACCURACY_SCORE // LIVE"
                icon={BarChart2}
                delay={1.2}
                style={{ top: '18%', right: 'clamp(20px, 6vw, 80px)' }}
                href="/signals"
            />
            <HUDPanel
                title="Market Intelligence"
                value="2.4M"
                sub="DATA_POINTS // SYNCED"
                icon={Activity}
                delay={1.6}
                style={{ top: '42%', right: 'clamp(20px, 5vw, 40px)' }}
                href="/signals"
            />
            <HUDPanel
                title="AI Automation"
                value="340%"
                sub="CLIENT_ROI // AVG"
                icon={Cpu}
                delay={2.0}
                style={{ bottom: '18%', right: 'clamp(20px, 8vw, 120px)' }}
                href="/cases"
            />

            {/* ── MAIN CONTENT ─────────────────────── */}
            <div className="container-os" style={{ position: 'relative', zIndex: 10, paddingTop: 100, paddingBottom: 80, maxWidth: 860 }}>

                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}
                >
                    <div className="status-dot" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                        SYSTEM_CORE // ACTIVE // DUBAI, UAE
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.div
                    style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', perspective: 1200 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
                        style={{ fontSize: 'clamp(48px, 7.5vw, 110px)', lineHeight: 1, marginBottom: 32, fontFamily: 'var(--font-display)' }}
                    >
                        Architecting
                        <br />
                        <span className="gradient-purple-cyan glow-purple" style={{ display: 'inline-block', paddingRight: 8 }}>
                            The Future
                        </span>
                        <br />
                        Of Technology
                    </motion.h1>
                </motion.div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.85, ease: [0.19, 1, 0.22, 1] }}
                    style={{ fontSize: 'clamp(16px, 1.6vw, 20px)', color: 'var(--text-dim)', lineHeight: 1.75, maxWidth: 560, marginBottom: 52, fontWeight: 300 }}
                >
                    We design advanced software infrastructure, high-fidelity technology ecosystems, and AI-powered digital assets that{' '}
                    <span style={{ color: 'white', fontWeight: 500 }}>define the edge of innovation.</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.05 }}
                    style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
                >
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                        <button className="btn-os-primary" style={{ fontSize: 12, borderRadius: 4, gap: 10 }}>
                            ENTER THE SYSTEM <ArrowRight size={15} />
                        </button>
                    </Link>
                    <Link href="/services" style={{ textDecoration: 'none' }}>
                        <button className="btn-os-outline" style={{ fontSize: 12, borderRadius: 4 }}>
                            DEPLOY AI
                        </button>
                    </Link>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    style={{ display: 'flex', gap: 48, marginTop: 72, flexWrap: 'wrap' }}
                >
                    {[
                        { val: '500+', lab: 'SYSTEMS DEPLOYED', href: '/cases' },
                        { val: '340%', lab: 'AVG CLIENT ROI', href: '/cases' },
                        { val: '99.9%', lab: 'UPTIME GUARANTEE', href: '/about' },
                    ].map(s => (
                        <Link href={s.href} key={s.val} style={{ textDecoration: 'none' }}>
                            <motion.div 
                                style={{ cursor: 'pointer' }}
                                whileHover={{ y: -5 }}
                            >
                                <div style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, fontFamily: 'var(--font-display)', background: 'linear-gradient(135deg,#fff,rgba(255,255,255,0.6))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                                    {s.val}
                                </div>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)', marginTop: 6 }}>
                                    {s.lab}
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to top, #050508, transparent)', zIndex: 8 }} />

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
            >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.2)' }}>SCROLL</span>
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
                    <ChevronDown size={16} color="rgba(255,255,255,0.2)" />
                </motion.div>
            </motion.div>
        </section>
    );
}
