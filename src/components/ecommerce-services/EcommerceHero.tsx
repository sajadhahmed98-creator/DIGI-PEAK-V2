"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShoppingCart, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export function EcommerceHero() {
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
      {/* Intense Glowing E-Commerce Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-emerald-600/20 blur-[150px]" 
        />
        <motion.div 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-teal-500/10 blur-[120px]" 
        />
        
        {/* Abstract Isometric Grid */}
        <div className="absolute inset-0 opacity-20">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="isoGrid" width="60" height="34.64" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                 <path d="M30 0L60 17.32L30 34.64L0 17.32Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/10" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#isoGrid)" />
           </svg>
        </div>
      </div>

      {/* Floating Elements specific to E-Commerce */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[5%] glass p-4 rounded-2xl border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.2)] backdrop-blur-md flex flex-col items-center"
        >
          <ShoppingCart className="h-6 w-6 text-emerald-400 mb-2" />
          <div className="text-xs font-bold text-white">+3.8x</div>
          <div className="text-[10px] text-emerald-400">Revenue Growth</div>
        </motion.div>

        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-[10%] glass p-4 rounded-2xl border border-teal-400/20 shadow-[0_0_40px_rgba(20,184,166,0.2)] backdrop-blur-md flex items-center gap-3"
        >
          <ShoppingBag className="h-8 w-8 text-teal-400 animate-bounce-slow" />
          <div className="flex flex-col gap-1.5">
             <div className="text-xs font-bold text-white">Conversion Rate</div>
             <div className="h-1.5 w-16 bg-white/20 rounded-full overflow-hidden">
               <div className="h-full bg-teal-400 w-[85%]" />
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
            <ShoppingCart className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-bold">Enterprise E-Commerce Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1]"
          >
            E-Commerce Websites Built <br className="hidden md:block" />
            <span className="text-gradient-secondary">To Scale Sales.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Digipeak develops premium Shopify, WooCommerce, and custom e-commerce solutions engineered to increase conversions, improve customer experience, and maximize online revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full"
          >
            <Link
              href="/contact"
              className="btn-primary group flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Start Your Store
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/portfolio"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/5"
            >
              View E-Commerce Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
