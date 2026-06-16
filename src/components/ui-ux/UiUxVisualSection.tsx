"use client";

import { motion } from "framer-motion";
import { MousePointer2, Settings, Plus, Sparkles, CheckCircle2, UserCheck, Smartphone, Activity, Shield, Layout } from "lucide-react";
import { useState, useEffect } from "react";

export function UiUxVisualSection() {
  const [sliderVal, setSliderVal] = useState(72);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [systemActive, setSystemActive] = useState(true);

  // Auto animate some interactive elements on a timer to feel alive
  useEffect(() => {
    const timer = setInterval(() => {
      setSliderVal(prev => {
        const diff = Math.random() > 0.5 ? 4 : -4;
        const next = prev + diff;
        return next > 90 ? 80 : next < 50 ? 60 : next;
      });
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black/60 border-b border-white/5 z-20">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-rose-500/5 via-pink-500/5 to-purple-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/10 to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-rose-400 font-bold uppercase text-xs tracking-widest font-mono">Premium Work Showcase</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Dynamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-500">Design Systems.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We design modular, interactive systems that scale. Explore our live interactive dashboard & mobile viewport mockup.
            </p>
          </motion.div>
        </div>

        {/* The Workspace Container with Simulated Figma collaborative cursors */}
        <div className="relative rounded-3xl border border-white/10 glass bg-white/[0.01] p-6 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Simulated Figma Grid */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="figmaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="#ffffff" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#figmaGrid)" />
            </svg>
          </div>

          {/* Figma Collaboration Curpos - Cursor 1 (Sarah) */}
          <motion.div
            animate={{ 
              x: [100, 350, 480, 220, 100], 
              y: [50, 120, 80, 240, 50],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute z-40 hidden md:flex items-center gap-2 pointer-events-none"
            style={{ left: 0, top: 0 }}
          >
            <MousePointer2 className="h-5 w-5 text-rose-500 fill-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)] transform -rotate-90" />
            <div className="bg-rose-500 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-md shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <span>Sarah (UX Researcher)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            </div>
          </motion.div>

          {/* Figma Collaboration Curpos - Cursor 2 (Alex) */}
          <motion.div
            animate={{ 
              x: [800, 620, 750, 500, 800], 
              y: [300, 180, 400, 220, 300],
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2 
            }}
            className="absolute z-40 hidden md:flex items-center gap-2 pointer-events-none"
            style={{ left: 0, top: 0 }}
          >
            <MousePointer2 className="h-5 w-5 text-purple-500 fill-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] transform -rotate-90" />
            <div className="bg-purple-500 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-md shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <span>Alex (UI Designer)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            </div>
          </motion.div>

          {/* Responsive Layout Grid inside mockup */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* COLUMN 1: Large Enterprise SaaS Dashboard Mockup */}
            <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* Dashboard Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 text-rose-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white flex items-center gap-1.5">
                      PulseCommerce Design System
                      <span className="text-[9px] font-bold bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-mono">v2.4 Active</span>
                    </h3>
                    <p className="text-[10px] text-muted">Last synced 2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setSystemActive(!systemActive)}
                    className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-all ${systemActive ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.1)]' : 'bg-white/5 border-white/10 text-muted'}`}
                  >
                    🚀 Live Sandbox Mode
                  </button>
                  <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white cursor-pointer transition-colors">
                    <Settings className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Sandbox stats */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
                {[
                  { label: "Total Page Views", val: "1,249,850", rate: "+24.5%", up: true },
                  { label: "Average Session", val: "4m 52s", rate: "+18.2%", up: true },
                  { label: "Purchase Conversions", val: "32,950", rate: "+38.4%", up: true },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-[9px] font-bold text-muted uppercase tracking-wider leading-none mb-1.5">{stat.label}</div>
                    <div className="flex items-baseline justify-between">
                      <div className="font-heading text-lg font-bold text-white">{stat.val}</div>
                      <div className="text-[9px] font-bold text-emerald-400">{stat.rate}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Charts Area */}
              <div className="p-4 rounded-xl border border-white/5 bg-black/40 min-h-[160px] flex flex-col justify-between mb-6">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-[10px] font-bold text-muted font-mono">Conversion Funnel Analytics</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                    <span className="text-[9px] font-bold text-rose-400 uppercase tracking-wider font-mono">Conversion Rate: {(sliderVal/10).toFixed(1)}%</span>
                  </div>
                </div>

                {/* Graph bars fully reactive to sliderVal */}
                <div className="flex items-end justify-between gap-2 h-24 pt-4">
                  {[45, 60, 52, 75, sliderVal, 88, 65, 82, 70, 92, 85, sliderVal + 6].map((barHeight, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                      <motion.div 
                        animate={{ height: `${Math.min(100, barHeight)}%` }} 
                        className={`w-full rounded-t-sm transition-all duration-500 ${idx === 4 || idx === 11 ? 'bg-gradient-to-t from-rose-500 to-purple-600 shadow-[0_0_15px_rgba(244,63,94,0.4)]' : 'bg-white/10 group-hover/bar:bg-white/20'}`}
                      />
                      <span className="text-[7px] text-muted font-mono">{idx + 1}h</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom design system token controllers */}
              <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-center">
                  <div className="flex justify-between text-[10px] text-muted mb-2 font-mono">
                    <span>Interactive Slider State</span>
                    <span className="font-bold text-rose-400">{sliderVal}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="30" 
                    max="95" 
                    value={sliderVal} 
                    onChange={(e) => setSliderVal(parseInt(e.target.value))}
                    className="w-full accent-rose-500 bg-white/10 h-1 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[7px] text-muted mt-1.5 font-mono">
                    <span>Low Retention</span>
                    <span>Optimized UX (85%+)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-white">Heuristic Safety Check</span>
                    <span className="text-[8px] text-muted">WCAG 2.1 AA Compliant</span>
                  </div>
                  <div className="h-8 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5 text-[9px] font-bold">
                    <CheckCircle2 className="h-3 w-3" />
                    Passed
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Mobile App Wallet Mockup */}
            <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[450px]">
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* App Status Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <span className="text-[9px] font-bold text-white font-mono">9:41</span>
                <div className="h-2 w-16 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="h-1 w-1 bg-white rounded-full"></div>
                </div>
                <div className="flex items-center gap-1 text-[8px] text-muted font-mono">
                  <span>LTE</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Wallet Card Frame */}
              <div className="py-6 flex-grow flex flex-col justify-center">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 p-5 shadow-[0_15px_30px_rgba(244,63,94,0.3)] relative overflow-hidden group flex flex-col justify-between aspect-[1.58/1] w-full border border-white/10"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none blur-xl" />
                  
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] text-white/70 uppercase tracking-widest font-mono">Enterprise Account</span>
                      <span className="font-heading text-lg font-bold text-white">Digipeak Pay</span>
                    </div>
                    <Smartphone className="h-5 w-5 text-white/90" />
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-white/80 font-mono">**** **** **** 8459</span>
                      <span className="text-[7px] text-white/60 font-mono mt-0.5">ALEX MERCIER</span>
                    </div>
                    <div className="h-6 w-10 bg-white/10 backdrop-blur-md rounded border border-white/20 flex items-center justify-center font-mono text-[7px] font-bold text-white uppercase tracking-wider">
                      Secured
                    </div>
                  </div>
                </motion.div>

                {/* Micro transactions list */}
                <div className="mt-6 space-y-2">
                  <div className="text-[9px] font-bold text-muted uppercase tracking-wider font-mono">Recent Activities</div>
                  {[
                    { title: "Figma Pro Subscription", desc: "Design tools system", price: "-$15.00", icon: Layout },
                    { title: "Maze Testing Credit", desc: "User research data", price: "-$120.00", icon: Activity },
                    { title: "Client Payout Qatar", desc: "UX Audit invoice", price: "+$4,850.00", icon: UserCheck },
                  ].map((tx, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted">
                          <tx.icon className="h-3.5 w-3.5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold text-white">{tx.title}</span>
                          <span className="text-[7px] text-muted">{tx.desc}</span>
                        </div>
                      </div>
                      <span className={`text-[9px] font-bold font-mono ${tx.price.startsWith('+') ? 'text-emerald-400' : 'text-white'}`}>{tx.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Transaction Action Button */}
              <div className="pt-4 border-t border-white/5">
                <button className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-colors hover:bg-white/90 flex items-center justify-center gap-1.5">
                  <Plus className="h-3.5 w-3.5" />
                  Instant Wire Transfer
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
