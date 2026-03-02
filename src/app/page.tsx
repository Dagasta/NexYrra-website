import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[#020617] text-white">
            {/* Absolute Ambient Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[45%] bg-violet-600/15 blur-[200px] rounded-full" />
                <div className="absolute top-[30%] right-[5%] w-[30%] h-[30%] bg-cyan-500/5 blur-[100px] rounded-full" />
            </div>

            <Navbar />

            <div className="relative">
                <Hero />

                {/* Interactive Stats Section */}
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 relative z-10 border-y border-slate-900 bg-slate-950/30 backdrop-blur-3xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { val: '100%+', label: 'ROI Benchmark' },
                            { val: '50ms', label: 'Latency Target' },
                            { val: '24/7', label: 'Autonomous Up' },
                            { val: '∞', label: 'Scalability Potential' }
                        ].map((stat, i) => (
                            <div key={i} className="group">
                                <div className="text-4xl md:text-6xl font-black text-white font-cyber mb-2 group-hover:scale-110 transition-transform duration-500">{stat.val}</div>
                                <div className="text-xs uppercase tracking-[0.3em] font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <Services />

                {/* Brand Mission Section */}
                <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent opacity-20" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-title font-black mb-10 max-w-4xl mx-auto leading-tight italic">
                            "WE ARE NOT JUST BUILDING TOOLS—WE ARE ARCHITECTING <span className="text-cyan-500">DIGITAL SOVEREIGNTY</span> FOR THE NEXT GENERATION OF ENTERPRISE LEADERS."
                        </h2>
                        <div className="w-24 h-[1px] bg-slate-800 mx-auto my-12" />
                        <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                            Nexyrra represents the intersection of elite design and high-fidelity AI engineering. We deliver the authority you deserve.
                        </p>
                    </div>
                </section>

                {/* Global CTA */}
                <section className="py-40 bg-[radial-gradient(circle_at_center,_var(--glow-cyan)_0%,_transparent_70%)] text-center relative pointer-events-none">
                    <div className="pointer-events-auto">
                        <h3 className="text-5xl md:text-8xl font-black mb-12 font-title tracking-tighter">
                            READY TO <br /> <span className="text-gradient">TRANSCEND?</span>
                        </h3>
                        <button className="px-12 py-6 bg-white text-slate-950 rounded-full font-black text-2xl hover:bg-cyan-400 hover:scale-110 transition-all duration-500 uppercase tracking-widest shadow-[0_0_50px_rgba(0,242,255,0.3)]">
                            Deploy Nexyrra Now
                        </button>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
