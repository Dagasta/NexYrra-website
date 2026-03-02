'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Zap, ArrowRight, Bookmark, Filter, Sparkles, Send } from 'lucide-react';
import { getNewsletterIssues, NewsletterIssue } from '@/lib/db';

const SignalsPage = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const issues = getNewsletterIssues();

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            // Logic for email integration (Resend/SendGrid) goes here
        }
    };

    return (
        <main className="relative min-h-screen bg-[#00020a] text-white">
            <Navbar />

            {/* Hero Section - Signals Identity */}
            <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-950/10 via-transparent to-cyan-950/20 -z-10" />
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6 text-violet-400">
                            <Zap className="w-5 h-5" />
                            <span className="text-xs font-black uppercase tracking-[0.3em] font-cyber">Exclusive AI Intelligence</span>
                        </div>
                        <h1 className="text-7xl md:text-9xl font-black font-title tracking-tighter leading-none mb-8">
                            NEXYRRA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-rose-500 to-cyan-500">SIGNALS</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 font-light max-w-xl leading-relaxed">
                            Elite direct intelligence for high-net-worth enterprise leaders. We deliver actionable alpha before the market even detects the signal.
                        </p>
                    </motion.div>

                    {/* Subscription Form - Premium Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="w-full max-w-lg bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 md:p-14 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 blur-[100px] pointer-events-none" />

                        <h3 className="text-3xl font-black mb-4">Secure Your Access</h3>
                        <p className="text-slate-400 font-light mb-10">Only elite insights. Zero noise. Guaranteed alpha delivered directly to your node.</p>

                        <form onSubmit={handleSubscribe} className="relative space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter professional email"
                                    className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-5 pl-14 pr-6 text-white text-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all font-light"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={subscribed}
                                className="w-full bg-white text-slate-900 py-5 rounded-2xl font-black text-xl hover:bg-cyan-400 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:bg-emerald-500 disabled:text-white"
                            >
                                {subscribed ? (
                                    <>
                                        ACCESS GRANTED <Send className="w-5 h-5" />
                                    </>
                                ) : (
                                    <>
                                        INITIALIZE SYNC <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                        <div className="mt-8 flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-widest opacity-60">
                            <Sparkles className="w-3 h-3 text-cyan-400" />
                            Join 5,000+ Enterprise Leaders
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter Grid / Intelligence Archive */}
            <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4">THE ARCHIVE</h2>
                        <p className="text-slate-400 font-light">Decrypt past signals and explore previous high-fidelity reports.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold flex items-center gap-2 hover:border-cyan-500/50 transition-all">
                            <Filter className="w-4 h-4" /> Filter By Sector
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {issues.map((issue, idx) => (
                        <motion.div
                            key={issue.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="h-full bg-slate-900/50 border border-slate-900 hover:border-violet-500/30 rounded-[32px] overflow-hidden transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(112,0,255,0.05)]">
                                {/* Issue Meta/Category Flag */}
                                <div className="p-8 pb-0">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-400 px-3 py-1 bg-violet-400/10 rounded-full border border-violet-400/20">
                                            {issue.category}
                                        </span>
                                        <span className="text-xs text-slate-500 font-mono italic">{issue.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-white group-hover:text-violet-400 transition-colors mb-4 leading-tight italic">
                                        "{issue.title}"
                                    </h3>
                                    <p className="text-slate-400 font-light leading-relaxed mb-8">
                                        {issue.excerpt}
                                    </p>
                                </div>

                                {/* Bottom Visual */}
                                <div className="mt-auto px-8 pb-8">
                                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mb-6">
                                        <div className="w-1/3 h-full bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-1000" />
                                    </div>
                                    <div className="flex items-center justify-between group-hover:translate-x-2 transition-transform">
                                        <span className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">DECRYPT SIGNAL</span>
                                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Signals Call to Action for Large Projects */}
            <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto text-center">
                <div className="bg-gradient-to-r from-violet-950/20 to-cyan-950/20 border border-slate-900 rounded-[60px] p-20 backdrop-blur-3xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(112,0,255,0.1)_0%,_transparent_70%)] pointer-events-none" />
                    <Sparkles className="w-16 h-16 text-violet-400 mx-auto mb-10 opacity-40" />
                    <h2 className="text-5xl md:text-7xl font-black font-title tracking-tighter mb-8 italic">READY FOR <br /> <span className="text-white">QUANTUM ASCENT?</span></h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto font-light">We only accept three enterprise partners per quarter for bespoke AI infrastructure. Check our availability.</p>
                    <button className="px-12 py-6 bg-white text-slate-950 font-black text-2xl rounded-2xl hover:bg-violet-500 hover:text-white transition-all transform hover:scale-105 duration-500 shadow-2xl">
                        SECURE ARCHITECTURE AUDIT
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default SignalsPage;
