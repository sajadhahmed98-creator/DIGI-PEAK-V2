"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, Network, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function AIHero() {
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

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-[90vh] flex items-center">
      {/* Intense Glowing AI Background - Cyan & Purple */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-cyan-600/20 blur-[150px]" 
        />
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-purple-600/20 blur-[150px]" 
        />
        
        {/* Kinetic Neural Network Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="aiGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                 <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#22d3ee" strokeWidth="0.5" strokeOpacity="0.5"/>
                 <circle cx="0" cy="0" r="2" fill="#a855f7" />
                 <circle cx="60" cy="60" r="2" fill="#22d3ee" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#aiGrid)" />
           </svg>
        </div>
      </div>

      {/* Floating Elements specific to AI Solutions */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[5%] glass p-4 rounded-full border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.2)] backdrop-blur-md flex items-center justify-center h-16 w-16"
        >
          <Network className="h-8 w-8 text-cyan-400 fill-cyan-500/10" />
        </motion.div>

        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-[10%] glass px-6 py-4 rounded-2xl border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.2)] backdrop-blur-md flex items-center gap-4"
        >
          <div className="shrink-0 h-10 w-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
             <Zap className="h-5 w-5 text-purple-400" />
          </div>
          <div className="flex flex-col gap-1">
             <div className="text-xs font-bold text-white tracking-wide">⚡ 24/7 Automation</div>
             <div className="text-[10px] text-cyan-300 font-mono">Running workflows...</div>
          </div>
        </motion.div>
        
        <motion.div
          animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-[8%] glass px-5 py-3 rounded-xl border border-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.1)] backdrop-blur-md flex items-center gap-3"
        >
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <div className="text-xs font-bold text-white">🤖 AI Systems Active</div>
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
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-bold">Enterprise AI & Automation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1]"
          >
            AI Solutions That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Automate Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            We build intelligent AI systems, automation workflows, chatbots, CRM integrations, and business process automation that reduce costs, increase productivity, and accelerate business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full"
          >
            <Link
              href="/contact"
              className="btn-primary group flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-none shadow-[0_0_20px_rgba(34,211,238,0.3)] text-white"
            >
              Get Free Proposal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/5"
            >
              Book AI Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
