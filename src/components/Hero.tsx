'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Network } from 'lucide-react';
import Link from 'next/link';
import NeuralBackground from './NeuralBackground';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[#020617]" />

                {/* Animated Particles Simulation */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] animate-pulse rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-violet-600/10 blur-[200px] animate-pulse rounded-full" />

                {/* Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    }}
                />

                {/* Radial Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
                <motion.div
                    style={{ y: y1, opacity }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md mb-8 group hover:border-cyan-500/50 transition-colors"
                    >
                        <Sparkles className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-black tracking-widest uppercase text-slate-300">
                            Forging the future of AI
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 font-title">
                        <span className="text-white">EVOLVE BEYOND</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600">
                            INTELLIGENCE
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-2xl font-light">
                        Architecting elite AI ecosystems that redefined business authority. Nexyrra transforms $100k+ value into autonomous scalable reality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="/contact"
                            className="px-8 py-5 rounded-2xl bg-white text-slate-950 text-lg font-bold flex items-center justify-center gap-3 hover:bg-cyan-400 hover:scale-105 transition-all duration-300 group"
                        >
                            Secure AI Audit
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/signals"
                            className="px-8 py-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md text-white text-lg font-bold flex items-center justify-center gap-3 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300"
                        >
                            Nexyrra Signals
                            <Zap className="w-5 h-5 text-cyan-400" />
                        </Link>
                    </div>

                    <div className="mt-16 flex items-center gap-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-xs font-black uppercase tracking-widest">Enterprise Secured</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Network className="w-5 h-5" />
                            <span className="text-xs font-black uppercase tracking-widest">Neural Optimized</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Abstract Neural Grid/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="relative aspect-square flex items-center justify-center hidden lg:flex"
                >
                    {/* Animated Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[80%] h-[80%] border border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute w-[60%] h-[60%] border border-violet-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute w-[40%] h-[40%] border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                    </div>

                    {/* Glowing Center */}
                    <div className="relative w-64 h-64 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent group-hover:from-cyan-500/10 transition-colors" />
                        <Sparkles className="w-24 h-24 text-cyan-400 animate-pulse" />

                        {/* Visual Code Artifacts */}
                        <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan-950/50 leading-tight">
                            01010101<br />
                            AI_CORE_ACTIVE<br />
                            NEST_INIT_0xFA
                        </div>
                        <div className="absolute bottom-4 right-4 font-mono text-[10px] text-violet-950/50 leading-tight text-right">
                            00110011<br />
                            SIGNAL_EMIT<br />
                            ARCH_v4.2
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
