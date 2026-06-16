"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, Globe2, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export function SEOHero() {
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
      {/* Intense Glowing SEO Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-accent-primary/20 blur-[150px]" 
        />
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-accent-secondary/10 blur-[120px]" 
        />
        
        {/* Abstract SEO Nodes */}
        <div className="absolute inset-0 opacity-20">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1" fill="currentColor" className="text-white/30" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#gridPattern)" />
           </svg>
        </div>
      </div>

      {/* Floating Elements specific to SEO */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[5%] glass p-4 rounded-2xl border border-accent-primary/20 shadow-[0_0_40px_rgba(168,85,247,0.2)] backdrop-blur-md flex flex-col items-center"
        >
          <TrendingUp className="h-6 w-6 text-[#25D366] mb-2" />
          <div className="h-1 w-12 bg-white/20 rounded-full mb-1" />
          <div className="h-1 w-8 bg-white/10 rounded-full" />
        </motion.div>

        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-[10%] glass p-4 rounded-2xl border border-accent-secondary/20 shadow-[0_0_40px_rgba(59,130,246,0.2)] backdrop-blur-md flex items-center gap-3"
        >
          <Globe2 className="h-8 w-8 text-accent-secondary animate-pulse" />
          <div className="flex flex-col gap-1.5">
             <div className="text-xs font-bold text-white">Global Reach</div>
             <div className="text-[10px] text-muted">Rank #1 in 11 Countries</div>
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
            <BarChart3 className="w-4 h-4 text-accent-primary" />
            <span className="text-accent-primary font-bold">Award-Winning SEO Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1]"
          >
            SEO Services That Drive <br className="hidden md:block" />
            <span className="text-gradient-primary">Rankings, Traffic & Revenue.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            AI-powered SEO strategies engineered to increase visibility, authority, qualified traffic, and business growth across <strong><Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, <Link href="/uae" className="underline hover:text-accent-primary transition-colors">UAE</Link>, <Link href="/saudi-arabia" className="underline hover:text-accent-primary transition-colors">Saudi Arabia</Link>, Australia, Singapore, Sri Lanka, New Zealand, and the United Kingdom.</strong>
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
              Get Free SEO Audit
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
