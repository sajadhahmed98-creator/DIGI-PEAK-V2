"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Smartphone, Star, TrendingUp, Cpu, Globe, DollarSign, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function MobileHero() {
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
    { icon: Smartphone, title: "Apps Launched", val: "120+", color: "text-indigo-400 border-indigo-500/20" },
    { icon: Star, title: "App Performance", val: "Top-Rated", color: "text-amber-400 border-amber-500/20" },
    { icon: TrendingUp, title: "Active Users Growth", val: "+350%", color: "text-cyan-400 border-cyan-500/20" },
    { icon: Cpu, title: "Performance Score", val: "99%", color: "text-purple-400 border-purple-500/20" },
    { icon: Globe, title: "Global App Reach", val: "5M+", color: "text-emerald-400 border-emerald-500/20" },
    { icon: DollarSign, title: "Revenue Generated", val: "$40M+", color: "text-pink-400 border-pink-500/20" },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-[95vh] flex items-center">
      {/* Intense Glowing Background - Indigo & Cyan */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-indigo-600/15 blur-[160px]" 
        />
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-cyan-600/15 blur-[160px]" 
        />
        
        {/* Kinetic Mobile Circuit Grid Overlay */}
        <div className="absolute inset-0 opacity-15">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="mobileGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                 <path d="M 60 0 L 0 0 0 60 M 0 30 L 60 30" fill="none" stroke="#22d3ee" strokeWidth="0.5" strokeOpacity="0.4"/>
                 <circle cx="30" cy="30" r="1.5" fill="#6366f1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#mobileGrid)" />
           </svg>
        </div>
      </div>

      {/* Floating App badging & Mobile Tokens */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[5%] glass px-5 py-3 rounded-2xl border border-indigo-500/20 shadow-[0_0_35px_rgba(99,102,241,0.15)] backdrop-blur-md flex items-center gap-3 w-52"
        >
          <div className="h-8 w-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Smartphone className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">Build Triggered</span>
            <span className="text-[8px] text-cyan-300 font-mono">App Bundle compiled...</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-[8%] glass px-6 py-4 rounded-2xl border border-cyan-500/20 shadow-[0_0_35px_rgba(34,211,238,0.15)] backdrop-blur-md flex flex-col gap-2 w-48"
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-bold text-white uppercase tracking-wider font-mono">Native Deploy</span>
          </div>
          <div className="h-1 bg-white/10 rounded overflow-hidden">
            <motion.div 
              animate={{ width: ["0%", "100%"] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400" 
            />
          </div>
          <span className="text-[8px] text-muted text-right font-mono">App Store ready</span>
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
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-bold">Premium Mobile App Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white"
          >
            Mobile Apps That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-400">Scale Businesses & Drive Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            We design and develop high-performance mobile applications for startups, enterprises, e-commerce brands, and growing businesses that want to deliver exceptional digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-20"
          >
            <Link
              href="/contact"
              className="btn-primary group flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border-none shadow-[0_0_20px_rgba(99,102,241,0.3)] text-white"
            >
              Get Free Proposal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/5 text-white"
            >
              Book App Consultation
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
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
