"use client";

import { motion } from "framer-motion";
import { MessageSquare, Bot, CheckSquare, Bell, ArrowRight, Settings, Plus, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function CRMVisualSection() {
  const [activeWorkflow, setActiveWorkflow] = useState(true);
  const [triggerPulse, setTriggerPulse] = useState(0);

  // Periodic visual pulses to simulate active workflows running
  useEffect(() => {
    const timer = setInterval(() => {
      setTriggerPulse(prev => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const flowNodes = [
    { 
      title: "1. Incoming Lead", 
      desc: "WhatsApp Business API API webhook", 
      icon: MessageSquare, 
      color: "from-emerald-500/10 to-emerald-500/20 border-emerald-500/30 text-emerald-400 font-mono",
      detail: "💬 Customer: 'Need CRM Setup'"
    },
    { 
      title: "2. AI Qualification", 
      desc: "Intelligent scoring & triage LLM", 
      icon: Bot, 
      color: "from-teal-500/10 to-teal-500/20 border-teal-500/30 text-teal-400 font-mono",
      detail: "🤖 Match Score: 96% | Budget: verified"
    },
    { 
      title: "3. HubSpot Deal", 
      desc: "Instant Salesforce/HubSpot creation", 
      icon: CheckSquare, 
      color: "from-purple-500/10 to-purple-500/20 border-purple-500/30 text-purple-400 font-mono",
      detail: "📈 Deal Assigned | Stage: Proposal"
    },
    { 
      title: "4. Slack & Email alert", 
      desc: "Instant operational team notifications", 
      icon: Bell, 
      color: "from-pink-500/10 to-pink-500/20 border-pink-500/30 text-pink-400 font-mono",
      detail: "⚡ Ops Alert: 'Deal Created'"
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black/60 border-b border-white/5 z-20">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-purple-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Decorative top dividing glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest font-mono">Real-Time Data Orchestration</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-purple-500">Ecosystem Map.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Our workflows seamlessly bridge data streams between custom APIs, AI decision modules, and HubSpot CRM boards.
            </p>
          </motion.div>
        </div>

        {/* The Visual Sandbox Workspace */}
        <div className="relative rounded-3xl border border-white/10 glass bg-white/[0.01] p-6 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Simulated Flowchart Dot Grid */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="flowGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="#10b981" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#flowGrid)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col gap-12">
            
            {/* The Orchestration Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                  <Sparkles className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-white flex items-center gap-1.5 leading-tight">
                    Digipeak Workflow Engine
                    <span className="text-[9px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">Running Live</span>
                  </h3>
                  <p className="text-[10px] text-muted">Listening for new webhooks...</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setActiveWorkflow(!activeWorkflow)}
                  className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-all ${activeWorkflow ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]' : 'bg-white/5 border-white/10 text-muted'}`}
                >
                  ⚡ Sandbox Mode
                </button>
                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white cursor-pointer transition-colors">
                  <Settings className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* FLOW VISUALIZATION ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center relative py-6">
              
              {/* Connector lines behind cards on large screens */}
              <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-emerald-500/20 via-purple-500/20 to-pink-500/20 z-0 hidden lg:block pointer-events-none">
                {/* Simulated light particles moving along the line */}
                {activeWorkflow && (
                  <motion.div 
                    key={triggerPulse}
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 3, ease: "linear" }}
                    className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] -translate-y-[2px]"
                  />
                )}
              </div>

              {flowNodes.map((node, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`glass p-5 rounded-2xl border bg-gradient-to-br ${node.color} shadow-lg relative z-10 flex flex-col gap-3 group hover:border-emerald-500/40 transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/90 group-hover:scale-105 transition-transform">
                      <node.icon className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-white leading-tight">{node.title}</span>
                      <span className="text-[8px] text-muted mt-0.5">{node.desc}</span>
                    </div>
                  </div>
                  <div className="h-[1px] bg-white/5" />
                  <div className="text-[9px] text-muted font-mono leading-relaxed bg-black/40 px-2 py-1 rounded border border-white/5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {node.detail}
                  </div>
                </motion.div>
              ))}

            </div>

            {/* Simulated HubSpot Pipeline board at the bottom */}
            <div className="p-5 rounded-2xl border border-white/5 bg-black/40 flex flex-col justify-between gap-4 mt-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-[10px] font-bold text-muted font-mono uppercase tracking-wider">HubSpot Pipeline Integration Board</span>
                <span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">Sync Mode: Real-Time Webhooks</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { stage: "Leads Qualified (AI)", count: "14 Leads", color: "border-emerald-500/20" },
                  { stage: "Discovery Call Booked", count: "8 Leads", color: "border-teal-500/20" },
                  { stage: "Proposal Generated", count: "3 Deals", color: "border-purple-500/20" },
                ].map((col, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${col.color} bg-white/[0.01] flex flex-col justify-between min-h-[100px] hover:bg-white/[0.02] transition-colors`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold text-white leading-none">{col.stage}</span>
                      <span className="text-[9px] font-bold text-muted font-mono bg-white/5 px-2 py-0.5 rounded">{col.count}</span>
                    </div>
                    {/* Simulated visual ticket card inside column */}
                    <div className="p-2.5 rounded-lg border border-white/5 bg-black/40 flex flex-col gap-1.5 shadow">
                      <div className="text-[9px] font-bold text-white flex justify-between">
                        <span>Aura Medical Group</span>
                        <span className="text-emerald-400">$24,500</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded overflow-hidden">
                        <div className="h-full w-4/5 bg-emerald-500 rounded" />
                      </div>
                      <div className="flex justify-between text-[7px] text-muted font-mono mt-0.5">
                        <span>Lead Score: 94%</span>
                        <span>Auto-Assigned</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
