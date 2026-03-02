'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3,
    Workflow,
    Zap,
    Bot,
    Database,
    ShieldCheck,
    Sparkles,
    Search,
    CheckCircle2,
    Cpu,
    ArrowRight
} from 'lucide-react';

const services = [
    {
        title: 'AI-Powered Business Insights',
        description: 'Transforming raw data into actionable intelligence through high-end predictive modeling and neural trend mapping.',
        icon: BarChart3,
        color: 'from-cyan-400 to-blue-500',
        features: ['Real-time KPI Tracking', 'Sentiment Analysis', 'Forecasting Engines'],
        premium: true
    },
    {
        title: 'Automated Content Generation',
        description: 'Autonomous high-fidelity content pipelines that preserve brand voice while scaling output by 1000%+. ',
        icon: Sparkles,
        color: 'from-blue-500 to-violet-600',
        features: ['Multi-format Output', 'SEO Optimization', 'Style Personalization'],
        premium: true
    },
    {
        title: 'AI-Driven Marketing Automation',
        description: 'Hyper-personalized customer journeys driven by behavioral AI architectures that maximize conversion and LTV.',
        icon: Zap,
        color: 'from-violet-600 to-rose-500',
        features: ['Dynamic Retargeting', 'Trigger-based Flows', 'Lead Scoring'],
        premium: true
    },
    {
        title: 'AI Chatbots & Virtual Assistants',
        description: 'Next-gen cognitive agents that handle 90% of complex queries with human-like precision and infinite scalability.',
        icon: Bot,
        color: 'from-rose-500 to-orange-400',
        features: ['Multilingual Support', 'CRM Integration', 'Adaptive Learning'],
        premium: true
    },
    {
        title: 'Predictive Analytics',
        description: 'Strategic probability engines that anticipate market shifts before they occur, ensuring your business stays ahead.',
        icon: Database,
        color: 'from-cyan-400 to-emerald-400',
        features: ['Churn Prediction', 'Risk Assessment', 'Market Simulation'],
        premium: true
    },
    {
        title: 'AI Model Implementation',
        description: 'Deployment of custom LLMs and diffusion models tailored to your proprietary data and unique operational needs.',
        icon: Cpu,
        color: 'from-blue-400 to-cyan-400',
        features: ['On-prem Solutions', 'API Integration', 'Fine-tuning Hub'],
        premium: true
    }
];

const Services = () => {
    return (
        <section id="services" className="relative py-32 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-cyan-950/10 via-[#020617] to-violet-950/10 -z-10 blur-3xl opacity-50" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative">
                <div className="max-w-3xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-10 h-[1px] bg-cyan-500" />
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-cyan-400 font-cyber">Our Intelligence Suite</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-title font-black text-white leading-[1.1] mb-8"
                    >
                        SCALING <span className="text-gradient">AUTHORITY</span> <br /> THROUGH AI
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 leading-relaxed font-light"
                    >
                        We don't just "use" AI—we architect competitive moats. Our high-end services are designed for enterprise-level transformation and extreme ROI.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group relative"
                        >
                            {/* Card - Premium Glass Design */}
                            <div className="h-full bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] flex flex-col items-start">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-8 flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 font-cyber group-hover:text-cyan-400 transition-colors uppercase leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 mb-8 leading-relaxed font-light flex-grow">
                                    {service.description}
                                </p>
                                <div className="space-y-3 mb-10 w-full">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-slate-300">
                                            <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                                            <span className="text-xs font-bold uppercase tracking-wider">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest border-b border-transparent hover:border-cyan-400 transition-all duration-300">
                                    Deploy Model
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 p-12 bg-gradient-to-r from-cyan-950/20 to-violet-950/20 border border-slate-800 rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-10 backdrop-blur-xl"
                >
                    <div>
                        <h3 className="text-3xl font-black text-white mb-3">Custom Enterprise Solutions</h3>
                        <p className="text-slate-400 text-lg font-light">Require a bespoke AI architecture that doesn't fit standard categories?</p>
                    </div>
                    <button className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-cyan-400 hover:scale-105 transition-all duration-500 whitespace-nowrap">
                        Request Strategy Session
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
