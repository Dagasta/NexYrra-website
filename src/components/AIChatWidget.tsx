'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Minimize2 } from 'lucide-react';

const RESPONSES: Record<string, string> = {
    default: '> Understood. Our AI team will analyze your requirements and propose the optimal architecture. Can you share more about your industry or specific challenge?',
    hello:   '> SYSTEM ONLINE. Hello — I\'m the Nexyrra AI Assistant. I can help you explore AI solutions, services, or connect you with our team. What are you looking to build?',
    ai:      '> We architect custom AI systems: ML models, autonomous agents, predictive analytics, NLP, and generative AI. Every solution is trained on your data. What use case are you solving?',
    cost:    '> Our engagements start from consulting sessions to full enterprise AI deployments. We scope every project individually to maximize ROI. Would you like to book a discovery call?',
    contact: '> You can reach our team directly:\n> 📞 +971 50 395 3988\n> 🌐 nexyrra.com\n> Or click "Deploy AI" in the nav to start a project.',
    automation: '> We build end-to-end automation: workflow engines, autonomous agents, WhatsApp bots, and RPA. Clients typically see 60–80% cost reduction. Want to see a case study?',
};

function getResponse(input: string): string {
    const lower = input.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi')) return RESPONSES.hello;
    if (lower.includes('ai') || lower.includes('machine learning') || lower.includes('model')) return RESPONSES.ai;
    if (lower.includes('cost') || lower.includes('price') || lower.includes('how much')) return RESPONSES.cost;
    if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach')) return RESPONSES.contact;
    if (lower.includes('automat') || lower.includes('workflow') || lower.includes('bot')) return RESPONSES.automation;
    return RESPONSES.default;
}

interface Message { id: number; from: 'user' | 'ai'; text: string; }

export default function AIChatWidget() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 0, from: 'ai', text: '> NEXYRRA AI ONLINE. How can I assist you today?' },
    ]);
    const endRef = useRef<HTMLDivElement>(null);
    const idRef = useRef(1);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, typing]);

    const send = () => {
        const text = input.trim();
        if (!text) return;
        const userMsg: Message = { id: idRef.current++, from: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setTyping(true);
        setTimeout(() => {
            setTyping(false);
            setMessages(prev => [...prev, { id: idRef.current++, from: 'ai', text: getResponse(text) }]);
        }, 900 + Math.random() * 600);
    };

    return (
        <>
            {/* Floating button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.5, type: 'spring', stiffness: 200 }}
                onClick={() => setOpen(o => !o)}
                style={{
                    position: 'fixed', bottom: 32, left: 32, zIndex: 9000,
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #8A2BE2, #4D9FFF)',
                    border: 'none', cursor: 'pointer', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 0 0 rgba(138,43,226,0.4)',
                }}
                animate={{ boxShadow: ['0 0 0 0 rgba(138,43,226,0.5)', '0 0 0 14px rgba(138,43,226,0)', '0 0 0 0 rgba(138,43,226,0)'] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                aria-label="AI Assistant"
            >
                {open ? <Minimize2 size={20} /> : <Bot size={22} />}
            </motion.button>

            {/* Chat panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.93 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                        style={{
                            position: 'fixed', bottom: 100, left: 32, zIndex: 9001,
                            width: 'min(340px, calc(100vw - 48px))',
                            background: 'rgba(8,5,18,0.97)',
                            border: '1px solid rgba(138,43,226,0.25)',
                            borderRadius: 14, overflow: 'hidden',
                            backdropFilter: 'blur(24px)',
                            boxShadow: '0 0 60px rgba(138,43,226,0.15), 0 24px 48px rgba(0,0,0,0.5)',
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(138,43,226,0.08)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#8A2BE2,#4D9FFF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Bot size={15} color="white" />
                                </div>
                                <div>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'white', fontWeight: 700, letterSpacing: '0.1em' }}>NEXYRRA AI</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 5px #00ff88' }} />
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'rgba(0,255,136,0.6)' }}>ONLINE</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', padding: 4 }}>
                                <X size={16} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div style={{ height: 260, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {messages.map(msg => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}
                                >
                                    <div style={{
                                        maxWidth: '85%', padding: '10px 13px', borderRadius: msg.from === 'user' ? '12px 12px 2px 12px' : '2px 12px 12px 12px',
                                        background: msg.from === 'user' ? 'linear-gradient(135deg,#8A2BE2,#5b1da6)' : 'rgba(255,255,255,0.05)',
                                        border: msg.from === 'ai' ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                        fontFamily: 'var(--font-mono)', fontSize: 11, color: msg.from === 'user' ? 'white' : 'rgba(255,255,255,0.7)',
                                        lineHeight: 1.6, whiteSpace: 'pre-line',
                                    }}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {typing && (
                                <div style={{ display: 'flex', gap: 4, padding: '10px 13px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px 12px 12px 12px', width: 'fit-content', border: '1px solid rgba(255,255,255,0.06)' }}>
                                    {[0, 1, 2].map(i => (
                                        <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }} style={{ width: 5, height: 5, borderRadius: '50%', background: '#8A2BE2' }} />
                                    ))}
                                </div>
                            )}
                            <div ref={endRef} />
                        </div>

                        {/* Input */}
                        <div style={{ padding: '12px 14px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 8 }}>
                            <input
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && send()}
                                placeholder="Ask about AI solutions..."
                                style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(138,43,226,0.2)', borderRadius: 8, padding: '9px 12px', color: 'white', fontFamily: 'var(--font-mono)', fontSize: 11, outline: 'none' }}
                            />
                            <button onClick={send} style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg,#8A2BE2,#5b1da6)', border: 'none', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Send size={15} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
