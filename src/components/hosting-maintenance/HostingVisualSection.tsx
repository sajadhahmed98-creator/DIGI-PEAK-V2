"use client";

import { motion } from "framer-motion";
import { Server, Shield, Zap, Globe, Activity, TrendingUp, CheckCircle, AlertCircle, BarChart2, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export function HostingVisualSection() {
  const [cpuUsage, setCpuUsage] = useState(38);
  const [ramUsage, setRamUsage] = useState(55);
  const [pingTime, setPingTime] = useState(14);
  const [threatCount, setThreatCount] = useState(1280);
  const [selectedNode, setSelectedNode] = useState("Doha, Qatar");

  const serverNodes = [
    { name: "Doha, Qatar", ping: 12, ip: "178.203.22.1", region: "Primary Node" },
    { name: "Dubai, UAE", ping: 18, ip: "185.124.96.4", region: "GCC Edge" },
    { name: "Riyadh, KSA", ping: 16, ip: "195.229.4.2", region: "GCC Edge" },
    { name: "Singapore", ping: 84, ip: "128.199.112.5", region: "APAC Hub" },
    { name: "London, UK", ping: 92, ip: "46.101.44.8", region: "EMEA Hub" },
    { name: "Sydney, Australia", ping: 142, ip: "139.59.248.9", region: "Oceania Edge" },
  ];

  // Random minor updates to metrics to simulate live logs
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage((prev) => {
        const delta = Math.floor(Math.random() * 7) - 3;
        const next = prev + delta;
        return next > 80 ? 70 : next < 15 ? 20 : next;
      });
      setRamUsage((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        const next = prev + delta;
        return next > 75 ? 70 : next < 45 ? 50 : next;
      });
      setThreatCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNodeSelect = (node: typeof serverNodes[0]) => {
    setSelectedNode(node.name);
    setPingTime(node.ping);
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black/60 border-b border-white/5 z-20">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-emerald-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Decorative top dividing glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 font-bold uppercase text-xs tracking-widest font-mono">LIVE CLOUD INFRASTRUCTURE MONITOR</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Global CDN & Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">Dashboards.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Simulate our network response speeds, explore live hardware load levels, and monitor automated regional traffic routing.
            </p>
          </motion.div>
        </div>

        {/* The Sandbox container */}
        <div className="relative rounded-3xl border border-white/10 glass bg-white/[0.01] p-6 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Grid Background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="hostingVisualGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="#06b6d4" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#hostingVisualGrid)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* COLUMN 1: Hardware Metrics & Threat Blockades */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[440px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <span className="text-[10px] font-bold text-white font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-cyan-400 animate-pulse" /> Local Node Resource Load
                </span>
                <span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">HEALTHY</span>
              </div>

              {/* Hardware Progress Bars */}
              <div className="flex-grow flex flex-col gap-6 justify-center">
                
                {/* CPU Metric */}
                <div>
                  <div className="flex justify-between text-xs text-muted mb-1.5 font-mono">
                    <span className="flex items-center gap-1.5"><Terminal className="h-3.5 w-3.5 text-cyan-400" /> CPU Load</span>
                    <span className="font-bold text-cyan-400">{cpuUsage}%</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: `${cpuUsage}%` }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full"
                      transition={{ type: "spring", stiffness: 60 }}
                    />
                  </div>
                </div>

                {/* RAM Metric */}
                <div>
                  <div className="flex justify-between text-xs text-muted mb-1.5 font-mono">
                    <span className="flex items-center gap-1.5"><Server className="h-3.5 w-3.5 text-blue-400" /> memory Allocation</span>
                    <span className="font-bold text-blue-400">{ramUsage}%</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: `${ramUsage}%` }}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"
                      transition={{ type: "spring", stiffness: 60 }}
                    />
                  </div>
                </div>

                {/* Threat Interceptor Slider Simulator */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="flex justify-between text-[11px] text-muted mb-2 font-mono">
                    <span className="flex items-center gap-1.5 text-rose-400"><Shield className="h-3.5 w-3.5" /> Threat Blocker</span>
                    <span className="font-bold text-rose-400">{threatCount.toLocaleString()} Intercepted</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="5000" 
                    value={threatCount} 
                    onChange={(e) => setThreatCount(parseInt(e.target.value))}
                    className="w-full accent-cyan-500 bg-white/10 h-1 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-muted mt-1.5 font-mono">
                    <span>Base Firewalls Active</span>
                    <span>WAF Pro-Active Intrusion Block</span>
                  </div>
                </div>

              </div>

              {/* Bottom status cluster */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white font-mono">SSL Cert Security Status</span>
                  <span className="text-[8px] text-muted font-mono">Auto-renews daily (256-bit SSL)</span>
                </div>
                <div className="h-7 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1 text-[9px] font-bold">
                  <CheckCircle className="h-3 w-3" />
                  Active
                </div>
              </div>
            </div>

            {/* COLUMN 2: Global CDN Ping Simulator */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[440px]">
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Globe className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-white font-heading leading-none">Anycast CDN Node Selector</span>
                </div>
                <span className="text-[8px] font-bold text-muted font-mono">Interactive Map Simulator</span>
              </div>

              {/* Interactive Node grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 flex-grow justify-center content-center">
                {serverNodes.map((node) => (
                  <button
                    key={node.name}
                    onClick={() => handleNodeSelect(node)}
                    className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                      selectedNode === node.name
                        ? "bg-cyan-950/20 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                        : "bg-white/[0.01] border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white font-heading">{node.name}</span>
                      {selectedNode === node.name && <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />}
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <span className="text-[8px] text-muted font-mono">{node.ip}</span>
                      <span className={`text-[9px] font-bold font-mono ${
                        node.ping < 20 ? "text-emerald-400" : node.ping < 100 ? "text-cyan-400" : "text-amber-400"
                      }`}>{node.ping}ms</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Ping charting results */}
              <div className="p-4 rounded-xl border border-white/5 bg-black/40 h-28 flex flex-col justify-between">
                <div className="flex justify-between text-[9px] text-muted font-mono leading-none">
                  <span>Routing: {selectedNode}</span>
                  <span className="text-cyan-400 font-bold">Latency: {pingTime}ms</span>
                </div>

                {/* Animated visual waves representing ping speed */}
                <div className="flex items-end justify-between gap-1 h-14 pt-2">
                  {[...Array(16)].map((_, idx) => {
                    const randomHeight = Math.floor(Math.random() * 30) + 20;
                    const finalHeight = Math.max(10, selectedNode ? (randomHeight - (pingTime / 5)) : randomHeight);
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <motion.div 
                          animate={{ height: `${Math.min(100, Math.max(10, finalHeight))}%` }} 
                          className={`w-full rounded-t-sm transition-all duration-300 bg-gradient-to-t ${
                            pingTime < 25 
                              ? "from-emerald-500 to-cyan-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" 
                              : "from-cyan-500 to-blue-500"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
