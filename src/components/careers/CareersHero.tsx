"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CareersHero() {
  const scrollToForm = () => {
    const element = document.getElementById("application-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-10 md:py-16 lg:py-20 px-6">
      {/* Search Grid Background */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-25" />
        
        {/* Glowing Orbs representing Digipeak global regions */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-accent-secondary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[11px] font-bold text-accent-secondary uppercase tracking-wider font-mono">
            <Sparkles className="h-3.5 w-3.5 text-accent-primary animate-pulse" />
            Global Talent Network
          </div>
        </motion.div>
 
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl md:text-4xl md:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]"
        >
          Build The Future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-indigo-500">
            Of Digital Growth.
          </span>
        </motion.h1>
 
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Join a network of talented marketers, designers, developers and innovators helping businesses grow across <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, <Link href="/locations/uae" className="underline hover:text-accent-primary transition-colors">UAE</Link>, <Link href="/saudi-arabia" className="underline hover:text-accent-primary transition-colors">Saudi Arabia</Link>, United Kingdom, Sri Lanka, Singapore, Australia and New Zealand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto btn-primary group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white cursor-pointer"
          >
            Submit Your CV
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full border border-white/20 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/10 text-white cursor-pointer"
          >
            Join Talent Network
          </button>
        </motion.div>
      </div>
    </section>
  );
}
