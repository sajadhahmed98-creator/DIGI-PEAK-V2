"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Video, Film, Play, Eye, Users, Heart, Camera, Tv, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function VideoHero() {
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
    { icon: Video, title: "Videos Produced", val: "120+", color: "text-red-400 border-red-500/20" },
    { icon: Eye, title: "Engagement Growth", val: "+300%", color: "text-orange-400 border-orange-500/20" },
    { icon: Users, title: "Campaign Reach", val: "4.5M+", color: "text-amber-400 border-amber-500/20" },
    { icon: Film, title: "Production Hours", val: "2,500+", color: "text-rose-400 border-rose-500/20" },
    { icon: Heart, title: "Client Satisfaction", val: "98.4%", color: "text-pink-400 border-pink-500/20" },
    { icon: Sparkles, title: "Global Audience Reach", val: "24/7", color: "text-red-400 border-red-500/20" },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-[95vh] flex items-center">
      {/* Cinematic Glowing Background - Crimson, Orange & Amber */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-red-600/15 blur-[160px]" 
        />
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-amber-600/15 blur-[160px]" 
        />
        
        {/* Fine cinematic vector grid overlay */}
        <div className="absolute inset-0 opacity-15">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="videoGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                 <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ef4444" strokeWidth="0.5" strokeOpacity="0.3"/>
                 <circle cx="25" cy="25" r="1.5" fill="#f59e0b" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#videoGrid)" />
           </svg>
        </div>
      </div>

      {/* Floating Video Production Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        {/* Viewfinder wireframe */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-[6%] glass p-4 rounded-2xl border border-red-500/20 shadow-[0_0_35px_rgba(239,68,68,0.15)] backdrop-blur-md flex flex-col gap-2 w-48"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">REC 4K</span>
            </div>
            <span className="text-[8px] font-mono text-muted">24fps</span>
          </div>
          <div className="h-5 rounded bg-white/5 flex items-center px-2 text-[8px] text-amber-400 font-mono justify-between">
            <span>ISO: 800</span>
            <span>SHUTTER: 1/50</span>
          </div>
        </motion.div>

        {/* Video Timeline Mockup */}
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-36 right-[8%] glass p-4 rounded-2xl border border-amber-500/20 shadow-[0_0_35px_rgba(245,158,11,0.15)] backdrop-blur-md flex flex-col gap-2.5 w-52"
        >
          <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">🎬 Timeline render</span>
          <div className="space-y-1">
            <div className="h-2 w-full rounded bg-red-500/20 border border-red-500/30 flex items-center px-1 text-[6px] font-mono text-white">Video_A_Cut.mov</div>
            <div className="h-2 w-5/6 rounded bg-amber-500/20 border border-amber-500/30 flex items-center px-1 text-[6px] font-mono text-white">Audio_Dialogue.wav</div>
            <div className="h-2 w-4/5 rounded bg-white/10 flex items-center px-1 text-[6px] font-mono text-muted">SFX_Impact.wav</div>
          </div>
          <span className="text-[8px] text-amber-400 text-right font-mono font-bold">100% Render Completed</span>
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
            <Camera className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-red-400 font-bold">Premium Video Production & Motion Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white"
          >
            Videos That Capture Attention, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-400">Build Trust & Drive Results</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            We create cinematic brand videos, social media content, commercial campaigns, motion graphics, and video marketing assets that help businesses increase engagement, strengthen brand perception, and generate measurable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-20"
          >
            <Link
              href="/contact"
              className="btn-primary group flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 border-none shadow-[0_0_20px_rgba(239,68,68,0.3)] text-white"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/5 text-white"
            >
              Book Video Strategy Call
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
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
