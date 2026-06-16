"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Zap, Bot, DollarSign, Database, Globe, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function CRMHero() {
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
    { icon: TrendingUp, title: "Leads Automated", val: "1.5M+", color: "text-emerald-400 border-emerald-500/20" },
    { icon: Zap, title: "Workflows Running", val: "12k+", color: "text-cyan-400 border-cyan-500/20" },
    { icon: Bot, title: "AI Automations Active", val: "98.4%", color: "text-purple-400 border-purple-500/20" },
    { icon: DollarSign, title: "Revenue Tracked", val: "$120M+", color: "text-pink-400 border-pink-500/20" },
    { icon: Database, title: "CRM Records Managed", val: "10M+", color: "text-blue-400 border-blue-500/20" },
    { icon: Globe, title: "Global Operations", val: "24/7", color: "text-teal-400 border-teal-500/20" },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-[95vh] flex items-center">
      {/* Intense Glowing Background - Emerald, Teal & Purple */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-emerald-600/15 blur-[160px]" 
        />
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-purple-600/15 blur-[160px]" 
        />
        
        {/* Kinetic Flowchart Vector Grid Overlay */}
        <div className="absolute inset-0 opacity-15">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="crmGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                 <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.4"/>
                 <line x1="30" y1="0" x2="30" y2="60" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="3,3" />
                 <circle cx="30" cy="30" r="1.5" fill="#14b8a6" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#crmGrid)" />
           </svg>
        </div>
      </div>

      {/* Floating CRM pipeline Badges & Visual Nodes */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        <motion.div
          animate={{ y: [-12, 12, -12], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-[6%] glass p-4 rounded-2xl border border-emerald-500/20 shadow-[0_0_35px_rgba(16,185,129,0.15)] backdrop-blur-md flex flex-col gap-2.5 w-52"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">Lead Stage Trigger</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[9px] text-muted font-mono bg-white/5 px-2.5 py-1 rounded">
              <span>Status: New Lead</span>
              <span className="text-emerald-400 font-bold">100%</span>
            </div>
            <div className="h-[1px] bg-white/5" />
            <div className="text-[9px] text-emerald-400 font-mono">🚀 Auto-Assigned to Sales</div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [12, -12, 12], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-36 right-[8%] glass p-4 rounded-2xl border border-purple-500/20 shadow-[0_0_35px_rgba(168,85,247,0.15)] backdrop-blur-md flex flex-col gap-3 w-56"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">⚡ Automation Active</span>
          </div>
          <div className="space-y-2">
            <div className="h-2.5 w-full rounded bg-white/10" />
            <div className="h-2.5 w-4/5 rounded bg-white/10" />
            <div className="h-7 w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
              <span className="text-[9px] font-bold text-white font-mono">Execute webhook...</span>
            </div>
          </div>
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
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 font-bold">Premium CRM & Automation Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white"
          >
            CRM & Automation Systems <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-purple-500">That Scale Your Business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Automate your sales, marketing, customer service, and operations with intelligent CRM systems designed to save time, increase efficiency, and drive revenue growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-20"
          >
            <Link
              href="/contact"
              className="btn-primary group flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 border-none shadow-[0_0_20px_rgba(16,185,129,0.3)] text-white"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/5 text-white"
            >
              Book CRM Strategy Call
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
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
