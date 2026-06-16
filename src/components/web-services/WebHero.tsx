"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MonitorSmartphone, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

export function WebHero() {
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
      {/* Intense Glowing Web Design Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-blue-600/20 blur-[150px]" 
        />
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-cyan-500/10 blur-[120px]" 
        />
        
        {/* Abstract Code/Web Nodes */}
        <div className="absolute inset-0 opacity-20">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="gridPatternWeb" width="60" height="60" patternUnits="userSpaceOnUse">
                 <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/10" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#gridPatternWeb)" />
           </svg>
        </div>
      </div>

      {/* Floating Elements specific to Web Design */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[5%] glass p-4 rounded-2xl border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.2)] backdrop-blur-md flex flex-col items-center"
        >
          <Code2 className="h-6 w-6 text-blue-400 mb-2" />
          <div className="h-1 w-12 bg-white/20 rounded-full mb-1" />
          <div className="h-1 w-8 bg-white/10 rounded-full" />
        </motion.div>

        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -2, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-[10%] glass p-4 rounded-2xl border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.2)] backdrop-blur-md flex items-center gap-3"
        >
          <MonitorSmartphone className="h-8 w-8 text-cyan-400 animate-pulse" />
          <div className="flex flex-col gap-1.5">
             <div className="text-xs font-bold text-white">Responsive Design</div>
             <div className="text-[10px] text-muted">Optimized for Conversion</div>
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
            <MonitorSmartphone className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-bold">Premium Web Design Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1]"
          >
            Custom Websites Built For <br className="hidden md:block" />
            <span className="text-gradient-secondary">Performance & Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Digipeak creates premium websites, headless e-commerce stores, and custom digital experiences engineered to generate leads, increase trust, and drive measurable business results.
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
              Get Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/portfolio"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/5"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
