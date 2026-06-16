"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Palette, Layers } from "lucide-react";
import { useEffect, useState } from "react";

export function BrandingHero() {
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
      {/* Intense Glowing Branding Background - Deep Violet/Indigo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-violet-600/20 blur-[150px]" 
        />
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-indigo-600/20 blur-[150px]" 
        />
        
        {/* Abstract Dot Grid */}
        <div className="absolute inset-0 opacity-20">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="brandingGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <circle cx="20" cy="20" r="1.5" fill="#c4b5fd" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#brandingGrid)" />
           </svg>
        </div>
      </div>

      {/* Floating Elements specific to Branding */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[5%] glass p-4 rounded-full border border-violet-500/20 shadow-[0_0_40px_rgba(139,92,246,0.2)] backdrop-blur-md flex items-center justify-center h-16 w-16"
        >
          <Palette className="h-8 w-8 text-violet-400 fill-violet-500/20" />
        </motion.div>

        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-[10%] glass px-6 py-4 rounded-2xl border border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.2)] backdrop-blur-md flex items-center gap-4"
        >
          <div className="flex -space-x-2">
             <div className="w-6 h-6 rounded-full bg-violet-500 border border-black" />
             <div className="w-6 h-6 rounded-full bg-indigo-500 border border-black" />
             <div className="w-6 h-6 rounded-full bg-fuchsia-500 border border-black" />
          </div>
          <div className="flex flex-col gap-1">
             <div className="text-xs font-bold text-white">Design Systems</div>
             <div className="text-[10px] text-violet-300">Brand Identity</div>
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
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 font-bold">Premium Branding & Creative</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1]"
          >
            Build Brands That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-500">Command Attention.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            We create powerful brand identities, strategic positioning, visual systems, and creative experiences that help businesses stand out, build trust, and dominate competitive markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full"
          >
            <Link
              href="/contact"
              className="btn-primary group flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-none shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Get Free Proposal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/5"
            >
              Book Brand Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
