'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    FilePlus,
    Files,
    Users,
    Settings,
    LogOut,
    Trash2,
    Edit,
    Plus,
    X,
    Sparkles,
    Zap,
    Calendar,
    AlertTriangle,
    ArrowRight,
    Send,
    Link as LinkIcon
} from 'lucide-react';
import Link from 'next/link';
import { getNewsletterIssues, addNewsletterIssue, deleteNewsletterIssue, NewsletterIssue } from '../../../lib/db';

const AdminDashboard = () => {
    const [issues, setIssues] = useState<NewsletterIssue[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newIssue, setNewIssue] = useState({
        title: '',
        excerpt: '',
        content: '',
        date: new Date().toISOString().split('T')[0],
        category: 'Market Intelligence' as NewsletterIssue['category']
    });
    const router = useRouter();

    useEffect(() => {
        // Simple Auth check
        const isAdmin = localStorage.getItem('nexyrra_admin');
        if (!isAdmin) {
            router.push('/admin/login');
        } else {
            setIssues(getNewsletterIssues());
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('nexyrra_admin');
        router.push('/admin/login');
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this issue?')) {
            deleteNewsletterIssue(id);
            setIssues(getNewsletterIssues());
        }
    };

    const handleAddIssue = (e: React.FormEvent) => {
        e.preventDefault();
        addNewsletterIssue(newIssue);
        setIssues(getNewsletterIssues());
        setShowAddModal(false);
        setNewIssue({
            title: '',
            excerpt: '',
            content: '',
            date: new Date().toISOString().split('T')[0],
            category: 'Market Intelligence'
        });
    };

    return (
        <main className="min-h-screen bg-[#020617] text-white flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-slate-900 flex flex-col p-6 hidden md:flex">
                <div className="flex items-center gap-2 mb-12">
                    <Sparkles className="w-8 h-8 text-cyan-400" />
                    <span className="text-xl font-black font-cyber tracking-tighter">NEX<span className="text-cyan-400">YRRA</span></span>
                </div>

                <nav className="flex-grow space-y-2">
                    {[
                        { name: 'Dashboard', icon: LayoutDashboard, active: true },
                        { name: 'Newsletter', icon: Files, active: false },
                        { name: 'Subscribers', icon: Users, active: false },
                        { name: 'Settings', icon: Settings, active: false },
                    ].map((item) => (
                        <button
                            key={item.name}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm tracking-widest uppercase ${item.active ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-slate-500 hover:text-white hover:bg-slate-900'
                                }`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                        </button>
                    ))}
                </nav>

                <button
                    onClick={handleLogout}
                    className="mt-auto flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-rose-500 transition-all font-bold text-sm tracking-widest uppercase"
                >
                    <LogOut className="w-4 h-4" />
                    Terminate
                </button>
            </aside>

            {/* Main Content Area */}
            <div className="flex-grow overflow-y-auto h-screen p-6 md:p-12 relative">
                <header className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-3xl font-black mb-2 uppercase italic tracking-tighter">Command Control</h1>
                        <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Active Operative Session v1.0.4</p>
                    </div>

                    <button
                        onClick={() => setShowAddModal(true)}
                        className="px-6 py-3 bg-white text-slate-950 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-cyan-400 transition-all transform hover:scale-105"
                    >
                        <Plus className="w-4 h-4" /> Deploy Signal
                    </button>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { label: 'Active Signals', val: issues.length, icon: Zap, color: 'text-cyan-400' },
                        { label: 'Total Synchronized', val: '5,284', icon: Users, color: 'text-violet-400' },
                        { label: 'Mean Open Rate', val: '68.2%', icon: Send, color: 'text-rose-400' },
                    ].map((stat) => (
                        <div key={stat.label} className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <stat.icon className={`w-12 h-12 ${stat.color}`} />
                            </div>
                            <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">{stat.label}</div>
                            <div className="text-4xl font-black font-cyber tracking-tighter">{stat.val}</div>
                        </div>
                    ))}
                </div>

                {/* Issues Archive Manager */}
                <div className="bg-slate-900/30 border border-slate-900 rounded-[32px] overflow-hidden">
                    <div className="p-8 border-b border-slate-900 flex items-center justify-between bg-slate-900/50">
                        <h3 className="text-lg font-black uppercase tracking-widest flex items-center gap-3">
                            <Files className="w-5 h-5 text-cyan-400" /> Deployments Archive
                        </h3>
                        <Link href="/signals" className="text-xs font-bold text-slate-500 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest">
                            View Live <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left font-light border-collapse">
                            <thead>
                                <tr className="border-b border-slate-900 text-slate-500 uppercase text-[10px] font-black tracking-[0.3em]">
                                    <th className="px-8 py-6">ID</th>
                                    <th className="px-8 py-6">Intelligence Title</th>
                                    <th className="px-8 py-6">Phase/Category</th>
                                    <th className="px-8 py-6">Date Synchronized</th>
                                    <th className="px-8 py-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-900">
                                {issues.map((issue: NewsletterIssue) => (
                                    <tr key={issue.id} className="hover:bg-slate-900/50 transition-colors group">
                                        <td className="px-8 py-6 font-mono text-[10px] text-slate-600">#{issue.id.substr(0, 4)}</td>
                                        <td className="px-8 py-6 font-bold text-slate-200">{issue.title}</td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 bg-slate-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                                {issue.category}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-slate-500 text-xs font-mono">{issue.date}</td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleDelete(issue.id)} className="p-2 bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white rounded-lg transition-all">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 bg-cyan-500/10 hover:bg-cyan-500 text-cyan-500 hover:text-white rounded-lg transition-all">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add Modal */}
            <AnimatePresence>
                {showAddModal && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowAddModal(false)}
                            className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-[40px] p-10 md:p-14 relative z-10 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <FilePlus className="w-32 h-32 text-cyan-400" />
                            </div>

                            <div className="flex items-center justify-between mb-10">
                                <h3 className="text-2xl font-black uppercase italic tracking-tighter">New Intelligence Signal</h3>
                                <button onClick={() => setShowAddModal(false)} className="text-slate-500 hover:text-white"><X size={32} /></button>
                            </div>

                            <form onSubmit={handleAddIssue} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-2">Sync Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                            <input
                                                type="date"
                                                value={newIssue.date}
                                                onChange={(e) => setNewIssue({ ...newIssue, date: e.target.value })}
                                                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-2">Classification</label>
                                        <select
                                            value={newIssue.category}
                                            onChange={(e) => setNewIssue({ ...newIssue, category: e.target.value as any })}
                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-4 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50"
                                        >
                                            <option>Market Intelligence</option>
                                            <option>Neural Research</option>
                                            <option>Strategic Alpha</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-2">Intelligence Title</label>
                                    <input
                                        type="text"
                                        value={newIssue.title}
                                        required
                                        onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
                                        placeholder="Enter high-impact title"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-4 text-white font-bold focus:outline-none focus:border-cyan-500/50 placeholder:text-slate-700"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-2">Quick Decrypt (Excerpt)</label>
                                    <textarea
                                        value={newIssue.excerpt}
                                        required
                                        onChange={(e) => setNewIssue({ ...newIssue, excerpt: e.target.value })}
                                        placeholder="Brief summary of the intelligence..."
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-4 text-white font-light focus:outline-none focus:border-cyan-500/50 min-h-[100px] placeholder:text-slate-700"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-white text-slate-900 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:bg-cyan-400 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-xl"
                                >
                                    DEPLOY SIGNAL <Zap className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default AdminDashboard;
