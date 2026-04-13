'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Cpu, Shield, Terminal, Network, X } from 'lucide-react';
import WebGLCanvas from '../components/WebGLCanvas';

// The internal "OS Apps" content mapped to the layout
const apps = [
  { 
      id: 'core', 
      title: 'CORE_ENGINE', 
      icon: Cpu,
      gridArea: '1 / 1 / 3 / 3', // Massive hero block
      content: () => (
          <div style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="mono-system" style={{ marginBottom: 20 }}>NEXYRRA_OS_V5</div>
              <h1 style={{ fontSize: 'clamp(50px, 8vw, 100px)' }}>ADVANCED<br/><span className="glow-purple">SYSTEMS.</span></h1>
              <p style={{ marginTop: 20, color: 'rgba(255,255,255,0.7)', fontSize: 20, maxWidth: 600 }}>
                  This is not a website. This is an intelligence operations center. Select a module to expand processing power.
              </p>
          </div>
      )
  },
  { 
      id: 'manifesto', 
      title: 'MANIFESTO', 
      icon: Shield,
      gridArea: '1 / 3 / 2 / 5',
      content: () => (
          <div style={{ padding: '40px' }}>
              <h2 style={{ fontSize: 40, marginBottom: 30 }}>PHILOSOPHY</h2>
              <div className="mono-system" style={{ color: 'var(--os-purple)', marginBottom: 20 }}>[ HOVER_TO_DECRYPT ]</div>
              <motion.div 
                  initial={{ filter: 'blur(10px)', opacity: 0.5 }}
                  whileHover={{ filter: 'blur(0px)', opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ fontSize: 18, lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}
              >
                  We are system architects existing at the intersection of high-performance engineering and futuristic AI. We do not build websites; we build scalable digital environments that operate on the edge of modern possibility.
              </motion.div>
          </div>
      )
  },
  { 
      id: 'systems', 
      title: 'SYSTEM_NODES', 
      icon: Network,
      gridArea: '2 / 3 / 3 / 4',
      content: () => (
          <div style={{ padding: '40px' }}>
              <h3 style={{ fontSize: 24, marginBottom: 20 }}>INFRASTRUCTURE</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 15 }}>
                  {['AUTONOMOUS_AI', 'SOFTWARE_DOMINATION', 'CYBER_SECURITY'].map((item, i) => (
                      <li key={i} className="mono-system" style={{ fontSize: 14 }}>{`> ${item}`}</li>
                  ))}
              </ul>
          </div>
      )
  },
  { 
      id: 'uplink', 
      title: 'SECURE_UPLINK', 
      icon: Terminal,
      gridArea: '2 / 4 / 3 / 5',
      content: () => {
          const [val, setVal] = useState('');
          return (
          <div style={{ padding: '40px' }}>
              <h3 style={{ fontSize: 24, marginBottom: 20 }}>TERMINAL</h3>
              <div style={{ background: 'rgba(0,0,0,0.5)', padding: 20, border: '1px solid rgba(217, 70, 239, 0.3)' }}>
                  <div className="mono-system" style={{ color: 'var(--os-blue)', marginBottom: 10 }}>AWAITING_INPUT:</div>
                  <input 
                      autoFocus
                      placeholder="$ establish_connection..."
                      value={val}
                      onChange={e => setVal(e.target.value)}
                      style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', fontFamily: 'var(--font-mono)', width: '100%' }}
                  />
                  {val.length > 5 && <button className="os-btn" style={{ marginTop: 20, padding: '10px 20px', fontSize: 10 }}>SUBMIT_PACKET</button>}
              </div>
          </div>
      )}
  }
];

export default function SingularityOS() {
    const [activeApp, setActiveApp] = useState<string | null>(null);

    return (
        <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <WebGLCanvas />
            
            {/* The Dashboard Matrix Layer */}
            <div style={{ position: 'absolute', inset: '10vh 5vw', zIndex: 10 }}>
                <LayoutGroup>
                    <div style={{ 
                        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', 
                        gap: '20px', width: '100%', height: '100%' 
                    }}>
                        
                        {apps.map(app => {
                            const isActive = activeApp === app.id;
                            const isHidden = activeApp !== null && !isActive;

                            return (
                                <motion.div 
                                    layoutId={`os-window-${app.id}`}
                                    key={app.id}
                                    onClick={() => !isActive && setActiveApp(app.id)}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: isHidden ? 0 : 1, scale: isHidden ? 0.9 : 1 }}
                                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                    style={{
                                        gridArea: isActive ? '1 / 1 / 3 / 5' : app.gridArea,
                                        zIndex: isActive ? 50 : 1,
                                        cursor: isActive ? 'default' : 'pointer',
                                        pointerEvents: isHidden ? 'none' : 'auto'
                                    }}
                                    className="os-panel"
                                    whileHover={!isActive ? { scale: 0.98, borderColor: 'rgba(217, 70, 239, 0.5)' } : {}}
                                >
                                    {/* The App Header */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                            <app.icon size={16} color="var(--os-purple)" />
                                            <span className="mono-system">{app.title}</span>
                                        </div>
                                        {isActive && (
                                            <X size={20} color="var(--os-white)" style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); setActiveApp(null); }} />
                                        )}
                                    </div>

                                    {/* The App Content Layer - Only loads fully if active, or scales based on grid size */}
                                    <div style={{ width: '100%', height: 'calc(100% - 60px)', position: 'relative' }}>
                                        {app.content()}
                                    </div>

                                </motion.div>
                            );
                        })}

                    </div>
                </LayoutGroup>
            </div>
            
            {/* Ambient Lighting Overlay */}
            <div className="bg-glow" style={{ top: '20%', left: '10%' }} />
            <div className="bg-glow" style={{ bottom: '10%', right: '20%', background: 'var(--os-blue)' }} />
        </main>
    );
}
