"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Server, Zap, Shield, Globe, ShieldAlert, Cpu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function HostingHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingCards = [
    { icon: Server, title: "Server Uptime", val: "99.99%", color: "text-emerald-400 border-emerald-500/20" },
    { icon: Zap, title: "Website Speed", val: "0.4s Load", color: "text-cyan-400 border-cyan-500/20" },
    { icon: Shield, title: "Security Status", val: "100% Secure", color: "text-blue-400 border-blue-500/20" },
    { icon: Globe, title: "Cloud Performance", val: "Fastest", color: "text-teal-400 border-teal-500/20" },
    { icon: ShieldAlert, title: "Threat Protection", val: "24/7 Active", color: "text-rose-400 border-rose-500/20" },
    { icon: Cpu, title: "System Health", val: "100% Optimal", color: "text-emerald-400 border-emerald-500/20" },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-[95vh] flex items-center">
      {/* Glowing Background - Cyan, Blue & Emerald */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-cyan-600/10 blur-[160px]" 
        />
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-emerald-600/10 blur-[160px]" 
        />
        
        {/* Fine server rack grid overlay */}
        <div className="absolute inset-0 opacity-15">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="hostingGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                 <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.3"/>
                 <circle cx="25" cy="25" r="1.5" fill="#10b981" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#hostingGrid)" />
           </svg>
        </div>
      </div>

      {/* Floating System Monitors */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        {/* Server Status Monitor */}
        <motion.div
          animate={{ y: [-12, 12, -12], rotate: [0, 2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-[6%] glass p-4 rounded-2xl border border-emerald-500/20 shadow-[0_0_35px_rgba(16,185,129,0.15)] backdrop-blur-md flex flex-col gap-2 w-52"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">Server Status</span>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          </div>
          <div className="h-5 rounded bg-white/5 flex items-center px-2 text-[8px] text-emerald-400 font-mono justify-between">
            <span>Uptime: 99.99%</span>
            <span>Response: 42ms</span>
          </div>
        </motion.div>

        {/* Threat Firewall Alert */}
        <motion.div
          animate={{ y: [12, -12, 12], rotate: [0, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-36 right-[8%] glass p-4 rounded-2xl border border-cyan-500/20 shadow-[0_0_35px_rgba(6,182,212,0.15)] backdrop-blur-md flex flex-col gap-2.5 w-52"
        >
          <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">🛡 Firewall Protection</span>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[7px] font-mono text-cyan-400">
              <span>SQL Injection Shielded</span>
              <span>DDoS Blocked</span>
            </div>
            <div className="h-1.5 w-full rounded bg-white/10 overflow-hidden flex">
              <div className="bg-cyan-500 h-full w-[80%]" />
              <div className="bg-emerald-500 h-full w-[20%]" />
            </div>
          </div>
          <span className="text-[8px] text-cyan-400 text-right font-mono font-bold">100% Firewall Verified</span>
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 glass px-5 py-2 text-sm font-medium text-muted"
          >
            <Shield className="w-4 h-4 text-cyan-500 animate-pulse" />
            <span className="text-cyan-400 font-bold">Premium Managed Cloud Hosting & Support Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white"
          >
            Hosting & Maintenance <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-500">That Keeps Businesses Running</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Military-grade website security, managed cloud hosting, proactive monitoring, continuous updates, and expert technical support designed for businesses that cannot afford downtime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-20"
          >
            <Link
              href="/contact"
              className="btn-primary group flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-none shadow-[0_0_20px_rgba(6,182,212,0.3)] text-white"
            >
              Get Free Website Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/5 text-white"
            >
              Book Support Consultation
            </Link>
          </motion.div>

          {/* Floating Premium metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-6xl mt-6">
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                className={`glass p-4 rounded-2xl border ${card.color} flex flex-col items-center justify-center text-center relative group overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <card.icon className={`h-6 w-6 mb-2 ${card.color.split(' ')[0]}`} />
                <div className="font-heading text-xl md:text-2xl font-extrabold text-white mb-1">{card.val}</div>
                <div className="text-[10px] font-semibold text-muted uppercase tracking-wider leading-tight">{card.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
