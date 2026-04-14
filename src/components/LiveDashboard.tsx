'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Zap, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

/* ── ANIMATED LINE CHART ─────────────────────────── */
function LiveChart({ color }: { color: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dataRef = useRef<number[]>(Array.from({ length: 60 }, () => Math.random() * 60 + 20));
    const animRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;

        const draw = () => {
            const W = canvas.width, H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            // Add new data point
            const last = dataRef.current[dataRef.current.length - 1];
            const next = Math.max(10, Math.min(90, last + (Math.random() - 0.48) * 12));
            dataRef.current.push(next);
            if (dataRef.current.length > 60) dataRef.current.shift();

            const data = dataRef.current;
            const step = W / (data.length - 1);

            // Grid lines
            ctx.strokeStyle = 'rgba(255,255,255,0.04)';
            ctx.lineWidth = 1;
            for (let i = 0; i <= 4; i++) {
                const y = (H / 4) * i;
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
            }

            // Fill gradient
            const grad = ctx.createLinearGradient(0, 0, 0, H);
            grad.addColorStop(0, color + '30');
            grad.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.moveTo(0, H);
            data.forEach((v, i) => ctx.lineTo(i * step, H - (v / 100) * H));
            ctx.lineTo(W, H);
            ctx.closePath();
            ctx.fillStyle = grad;
            ctx.fill();

            // Line
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.shadowColor = color;
            ctx.shadowBlur = 8;
            data.forEach((v, i) => {
                i === 0 ? ctx.moveTo(0, H - (v / 100) * H) : ctx.lineTo(i * step, H - (v / 100) * H);
            });
            ctx.stroke();
            ctx.shadowBlur = 0;

            animRef.current = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(animRef.current);
    }, [color]);

    return <canvas ref={canvasRef} width={300} height={90} style={{ width: '100%', height: 90, display: 'block' }} />;
}

/* ── LIVE LOG FEED ───────────────────────────────── */
const LOG_TEMPLATES = [
    '[AGENT_01] Decision executed — confidence 98.3%',
    '[ML_CORE] Model inference: 2.1ms latency',
    '[DATA_SYNC] 14,832 records processed',
    '[SECURITY] Zero-trust check passed',
    '[PRED_ENGINE] Anomaly score: 0.01 — normal',
    '[NLP_SVC] Entity extraction: 847 tokens',
    '[WORKFLOW] Automation cycle complete',
    '[API_GW] 1,204 requests/sec — healthy',
    '[AI_AGENT] Task queue: 3 pending, 12 complete',
    '[VISION_SVC] 99.6% detection accuracy',
];

function LogFeed() {
    const [logs, setLogs] = useState(() =>
        Array.from({ length: 5 }, (_, i) => ({ 
            id: i, 
            text: LOG_TEMPLATES[i % LOG_TEMPLATES.length], 
            ts: `00:0${i}:00` 
        }))
    );
    const counterRef = useRef(5);

    useEffect(() => {
        const t = setInterval(() => {
            const idx = Math.floor(Math.random() * LOG_TEMPLATES.length);
            const now = new Date();
            setLogs(prev => [
                { id: counterRef.current++, text: LOG_TEMPLATES[idx], ts: `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}` },
                ...prev.slice(0, 7),
            ]);
        }, 1200);
        return () => clearInterval(t);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {logs.map((log, i) => (
                <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1 - i * 0.1, x: 0 }}
                    style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}
                >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(0,255,255,0.35)', letterSpacing: '0.05em', whiteSpace: 'nowrap', flexShrink: 0, marginTop: 1 }}>{log.ts}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: i === 0 ? 'rgba(0,255,255,0.8)' : 'rgba(255,255,255,0.25)', letterSpacing: '0.04em', lineHeight: 1.5 }}>{log.text}</span>
                </motion.div>
            ))}
        </div>
    );
}

/* ── COUNTER ─────────────────────────────────────── */
function LiveCounter({ label, start, max, unit, color }: any) {
    const [val, setVal] = useState(start);
    useEffect(() => {
        const t = setInterval(() => setVal((v: number) => {
            const next = v + Math.floor(Math.random() * 12);
            return next > max ? start : next;
        }), 700);
        return () => clearInterval(t);
    }, [start, max]);
    return (
        <div>
            <div style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 800, fontFamily: 'var(--font-display)', color, lineHeight: 1 }}>
                {val.toLocaleString()}{unit}
            </div>
            <div className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)', marginTop: 6 }}>{label}</div>
        </div>
    );
}

/* ── MAIN COMPONENT ──────────────────────────────── */
export default function LiveDashboard() {
    return (
        <section style={{ padding: 'clamp(80px,10vw,160px) 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 400, background: 'radial-gradient(ellipse, rgba(0,255,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div className="container-os">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 'clamp(40px,6vw,64px)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div className="status-dot" />
                        <span className="mono" style={{ color: 'var(--neon-cyan)', fontSize: 10 }}>LIVE_SYSTEM_STATUS // REAL TIME</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(36px,5.5vw,80px)', fontFamily: 'var(--font-display)' }}>
                        LIVE SYSTEM <span className="gradient-cyan-blue">DEMO</span>
                    </h2>
                </motion.div>

                {/* Dashboard Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="grid-1-mobile">

                    {/* Left — Charts */}
                    <Link href="/signals" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {[
                            { label: 'AI THROUGHPUT', color: '#8A2BE2' },
                            { label: 'LATENCY (ms)', color: '#00FFFF' },
                        ].map(c => (
                            <motion.div
                                key={c.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-panel"
                                style={{ borderRadius: 10, padding: '18px 20px', cursor: 'pointer' }}
                                whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                                    <span className="mono" style={{ fontSize: 9, color: c.color }}>{c.label}</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#00ff88', animation: 'pulse-status 2s infinite', boxShadow: '0 0 5px #00ff88' }} />
                                        <span className="mono" style={{ fontSize: 8, color: 'rgba(0,255,136,0.5)' }}>LIVE</span>
                                    </div>
                                </div>
                                <LiveChart color={c.color} />
                            </motion.div>
                        ))}
                    </Link>

                    {/* Center — AI Decision Engine */}
                    <Link href="/signals" style={{ textDecoration: 'none' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{ borderRadius: 10, padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', cursor: 'pointer', height: '100%' }}
                            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
                        >
                            {/* Spinning ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                                style={{ width: 120, height: 120, border: '1px solid rgba(138,43,226,0.3)', borderTop: '1px solid #8A2BE2', borderRadius: '50%', marginBottom: 24, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                                    style={{ width: 80, height: 80, border: '1px solid rgba(0,255,255,0.2)', borderBottom: '1px solid #00FFFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Cpu size={24} color="#8A2BE2" />
                                </motion.div>
                            </motion.div>

                            <span className="mono" style={{ fontSize: 10, color: 'rgba(138,43,226,0.7)', marginBottom: 8, letterSpacing: '0.2em' }}>AI_DECISION_ENGINE</span>
                            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-mono)', textAlign: 'center', marginBottom: 24 }}>STATUS: ACTIVE</div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, width: '100%' }}>
                                <LiveCounter label="INFERENCES / SEC" start={1200} max={1800} unit="" color="#8A2BE2" />
                                <LiveCounter label="ACCURACY SCORE" start={97} max={100} unit="%" color="#00FFFF" />
                                <LiveCounter label="AGENTS ACTIVE" start={24} max={48} unit="" color="#4D9FFF" />
                                <LiveCounter label="MODELS LOADED" start={12} max={20} unit="" color="#a855f7" />
                            </div>

                            {/* Glow */}
                            <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 200, height: 200, background: 'radial-gradient(circle, rgba(138,43,226,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
                        </motion.div>
                    </Link>

                    {/* Right — Log feed */}
                    <Link href="/signals" style={{ textDecoration: 'none' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{ borderRadius: 10, padding: '20px 20px', overflow: 'hidden', cursor: 'pointer', height: '100%' }}
                            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <Activity size={13} color="var(--neon-cyan)" />
                                <span className="mono" style={{ fontSize: 9, color: 'var(--neon-cyan)', letterSpacing: '0.15em' }}>SYSTEM_LOG // STREAMING</span>
                            </div>
                            <LogFeed />

                            {/* Health bars */}
                            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                                {[
                                    { label: 'CPU_LOAD', pct: 34, color: '#00ff88' },
                                    { label: 'MEMORY', pct: 58, color: '#8A2BE2' },
                                    { label: 'NETWORK', pct: 71, color: '#00FFFF' },
                                ].map(b => (
                                    <div key={b.label}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                            <span className="mono" style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)' }}>{b.label}</span>
                                            <span className="mono" style={{ fontSize: 8, color: b.color }}>{b.pct}%</span>
                                        </div>
                                        <div style={{ height: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 2, overflow: 'hidden' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${b.pct}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                                                style={{ height: '100%', background: b.color, boxShadow: `0 0 6px ${b.color}` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
