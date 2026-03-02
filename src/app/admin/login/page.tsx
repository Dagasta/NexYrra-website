'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, Lock, User, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Premium Mock Authentication
        if (username === 'admin' && password === 'nexyrra2026') {
            localStorage.setItem('nexyrra_admin', 'true');
            router.push('/admin/dashboard');
        } else {
            setError('CREDENTIALS REJECTED. UNAUTHORIZED ACCESS DETECTED.');
        }
    };

    return (
        <main className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Visual Artifacts */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.05)_0%,_transparent_60%)] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[150px] animate-pulse rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 blur-[150px] animate-pulse rounded-full" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md"
            >
                <div className="text-center mb-12">
                    <Link href="/" className="inline-flex items-center gap-3 group mb-10">
                        <div className="relative w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center group-hover:border-cyan-500/50 transition-colors duration-300">
                            <Shield className="w-6 h-6 text-cyan-400 animate-pulse" />
                        </div>
                        <span className="text-3xl font-black tracking-tighter text-white font-cyber">
                            NEX<span className="text-cyan-400">YRRA</span>
                        </span>
                    </Link>
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-2">Secure Command Node</h2>
                    <h1 className="text-2xl font-black text-white uppercase italic">SYSTEM ACCESS REQUIRED</h1>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 backdrop-blur-2xl rounded-[32px] p-10 md:p-14 shadow-2xl relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Sparkles className="w-12 h-12 text-cyan-400" />
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-2">Operator ID</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter identity"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500/50 transition-all font-mono text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-2">Access Token</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-cyan-500/50 transition-all font-mono text-sm"
                                />
                            </div>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-500 text-[10px] font-black uppercase tracking-widest text-center"
                            >
                                {error}
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-white text-slate-900 py-4 rounded-xl font-black text-sm uppercase tracking-[0.2em] hover:bg-cyan-400 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group mt-8"
                        >
                            INITIALIZE SYNC
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.3em] text-slate-700">
                            <Shield className="w-3 h-3" />
                            Quantum-Secured Encryption v4.2
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <Link href="/" className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">
                        ← Return to Main Node
                    </Link>
                </div>
            </motion.div>
        </main>
    );
};

export default AdminLogin;
