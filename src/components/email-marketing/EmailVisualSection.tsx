"use client";

import { motion } from "framer-motion";
import { Mail, Cpu, BarChart2, CheckCircle, Clock, Zap, ArrowRight, Play, Sliders, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export function EmailVisualSection() {
  const [listSize, setListSize] = useState(45);
  const [activeWorkflow, setActiveWorkflow] = useState(true);

  // Auto-animate list size slider slightly
  useEffect(() => {
    if (activeWorkflow) {
      const timer = setInterval(() => {
        setListSize(prev => {
          const next = prev + 3;
          return next > 95 ? 40 : next;
        });
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [activeWorkflow]);

  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black/60 border-b border-white/5 z-20">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-indigo-500/5 via-violet-500/5 to-purple-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Decorative top dividing glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-400 font-bold uppercase text-xs tracking-widest font-mono">AUTOMATED USER JOURNEYS & ATTRIBUTION</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Lifecycle Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Workspaces.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We design modular, behavior-triggered customer flows that nurture lists and track conversions in real time.
            </p>
          </motion.div>
        </div>

        {/* The Sandbox container */}
        <div className="relative rounded-3xl border border-white/10 glass bg-white/[0.01] p-6 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Grid Background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="emailVisualGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="#6366f1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#emailVisualGrid)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* COLUMN 1: Visual Automation Flow Canvas */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[420px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <span className="text-[10px] font-bold text-muted font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-indigo-400" /> Automation Flow Mapping
                </span>
                <span className="text-[8px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full font-mono">FLOW: ON_BUYER_SIGNUP</span>
              </div>

              {/* Node graph flow area */}
              <div className="flex-grow flex flex-col gap-6 relative min-h-[260px] justify-center items-center">
                
                {/* SVG Connections representing nodes link */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="50%" y1="12%" x2="50%" y2="35%" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="50%" y1="48%" x2="50%" y2="70%" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="50%" y1="80%" x2="25%" y2="92%" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="50%" y1="80%" x2="75%" y2="92%" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" />
                </svg>

                {/* Node 1: Trigger */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="z-10 glass px-4 py-2 rounded-xl border border-indigo-500/30 bg-indigo-950/20 text-center w-56 flex items-center gap-3 relative"
                >
                  <div className="h-7 w-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Zap className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[7px] font-bold text-indigo-400 uppercase tracking-widest font-mono">Trigger node</span>
                    <div className="text-[9px] font-bold text-white leading-tight">Form: Cart Abandoned</div>
                  </div>
                </motion.div>

                {/* Node 2: Action - Delay */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="z-10 glass px-4 py-2 rounded-xl border border-purple-500/30 bg-purple-950/20 text-center w-56 flex items-center gap-3 relative"
                >
                  <div className="h-7 w-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[7px] font-bold text-purple-400 uppercase tracking-widest font-mono">Delay node</span>
                    <div className="text-[9px] font-bold text-white leading-tight">Wait: 45 Minutes</div>
                  </div>
                </motion.div>

                {/* Node 3: Condition - Logic Check */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="z-10 glass px-4 py-2 rounded-xl border border-pink-500/30 bg-pink-950/20 text-center w-56 flex items-center gap-3 relative"
                >
                  <div className="h-7 w-7 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[7px] font-bold text-pink-400 uppercase tracking-widest font-mono">Action node</span>
                    <div className="text-[9px] font-bold text-white leading-tight">Send: Cart_Recovery_Seq_1</div>
                  </div>
                </motion.div>

                {/* Nodes 4 & 5 Branching */}
                <div className="flex gap-4 w-full z-10">
                  <div className="flex-1 glass p-2 rounded-xl border border-emerald-500/20 bg-emerald-950/10 text-center">
                    <span className="text-[6px] text-emerald-400 font-mono uppercase tracking-wider">Condition: Purchase = True</span>
                    <div className="text-[8px] font-bold text-white leading-tight mt-0.5">Move to Post-Purchase Flow</div>
                  </div>
                  <div className="flex-1 glass p-2 rounded-xl border border-red-500/20 bg-red-950/10 text-center">
                    <span className="text-[6px] text-red-400 font-mono uppercase tracking-wider">Condition: Purchase = False</span>
                    <div className="text-[8px] font-bold text-white leading-tight mt-0.5">Delay 24h & Send discount_code</div>
                  </div>
                </div>

              </div>

              {/* Bottom cluster details */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white">Flow Delivery Accuracy</span>
                  <span className="text-[8px] text-muted">99.8% inbox success rate</span>
                </div>
                <div className="h-7 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center gap-1 text-[9px] font-bold">
                  <CheckCircle className="h-3 w-3" />
                  Active
                </div>
              </div>
            </div>

            {/* COLUMN 2: Attribution Dashboard & List Growth Slider */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[420px]">
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <BarChart2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-white font-heading leading-none">Automated Revenue Attribution</span>
                </div>
                <span className="text-[7px] font-bold text-muted font-mono">Attributed Sales</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">List Size</div>
                  <div className="text-[10px] font-bold text-white">{(250 * listSize).toLocaleString()}</div>
                </div>
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">Attributed Revenue</div>
                  <div className="text-[10px] font-bold text-white">${(14500 * listSize).toLocaleString()}</div>
                </div>
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">ROI Multiplier</div>
                  <div className="text-[10px] font-bold text-indigo-400">{(3.2 + (listSize / 100)).toFixed(1)}x</div>
                </div>
              </div>

              {/* Graphical Line charting */}
              <div className="p-4 rounded-xl border border-white/5 bg-black/40 h-32 flex flex-col justify-between mb-4">
                <div className="flex justify-between text-[8px] text-muted font-mono leading-none">
                  <span>List: 10K</span>
                  <span>List: 25K (Attribution Max)</span>
                </div>

                <div className="flex items-end justify-between gap-1.5 h-20 pt-2">
                  {[20, 25, 22, 34, listSize - 10, listSize, listSize + 5, 78, 85, 90, 94, 98].map((barHeight, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                      <motion.div 
                        animate={{ height: `${Math.min(100, barHeight)}%` }} 
                        className={`w-full rounded-t-sm transition-all duration-500 ${idx === 5 || idx === 6 ? 'bg-gradient-to-t from-indigo-500 to-purple-600 shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'bg-white/10 group-hover/bar:bg-white/20'}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Controller */}
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-center">
                <div className="flex justify-between text-[10px] text-muted mb-2 font-mono">
                  <span>Simulate List Growth</span>
                  <span className="font-bold text-indigo-400">List: {listSize}k</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="90" 
                  value={listSize} 
                  onChange={(e) => setListSize(parseInt(e.target.value))}
                  className="w-full accent-indigo-500 bg-white/10 h-1 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[7px] text-muted mt-1.5 font-mono">
                  <span>Audience base setup</span>
                  <span>Maximum Campaign Scaling (LTV Peak)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
