"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export function MarketingHero() {
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
      {/* Intense Glowing Marketing Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-orange-600/20 blur-[150px]" 
        />
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-amber-500/10 blur-[120px]" 
        />
        
        {/* Abstract Growth Grid */}
        <div className="absolute inset-0 opacity-20">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="growthGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/10" />
                 <circle cx="40" cy="40" r="1" fill="#f59e0b" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#growthGrid)" />
           </svg>
        </div>
      </div>

      {/* Floating Elements specific to Marketing */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[5%] glass p-4 rounded-2xl border border-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,0.2)] backdrop-blur-md flex flex-col items-center gap-2"
        >
          <div className="flex items-end gap-1 h-8">
             <div className="w-2 bg-orange-500/40 rounded-t h-3" />
             <div className="w-2 bg-orange-500/60 rounded-t h-5" />
             <div className="w-2 bg-orange-400 rounded-t h-8 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
          </div>
          <div className="text-xs font-bold text-white">4.2x ROAS</div>
        </motion.div>

        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-[10%] glass p-4 rounded-2xl border border-amber-400/20 shadow-[0_0_40px_rgba(251,191,36,0.2)] backdrop-blur-md flex items-center gap-3"
        >
          <Target className="h-8 w-8 text-amber-400" />
          <div className="flex flex-col gap-1">
             <div className="text-xs font-bold text-white">+185% Leads</div>
             <div className="text-[10px] text-amber-400/80">Cost Per Acquisition ↓</div>
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
            <TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-bold">Premium Performance Marketing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1]"
          >
            Digital Marketing That Drives <br className="hidden md:block" />
            <span className="text-gradient-primary">Revenue & Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            We help ambitious brands generate qualified leads, increase revenue, and dominate their markets through data-driven digital marketing strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full"
          >
            <Link
              href="/contact"
              className="btn-primary group flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 text-base font-semibold"
            >
              Get Free Proposal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/5"
            >
              Book Strategy Call
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
