"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const floatingCards = [
  { text: "120+ Brands Served", position: "top-10 left-[10%]", delay: 0 },
  { text: "+185% Average Growth", position: "top-40 right-[5%]", delay: 1 },
  { text: "98.4% Client Satisfaction", position: "bottom-32 left-[5%]", delay: 2 },
  { text: "Active Across 5 Markets", position: "bottom-10 right-[15%]", delay: 1.5 },
  { text: "AI Powered Growth Systems", position: "top-1/2 left-[2%]", delay: 0.5 },
];

export function ServicesHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-[90vh] flex items-center">
      {/* Animated Glowing Orbs Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
            scale: [1, 1.1, 1]
          }}
          transition={{ scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-0 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-accent-purple/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            scale: [1, 1.2, 1]
          }}
          transition={{ scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute bottom-0 left-0 h-[500px] w-[500px] translate-y-1/3 -translate-x-1/3 rounded-full bg-accent-blue/20 blur-[100px]" 
        />
        
        {/* Subtle Particle System Simulation */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [Math.random() * -100, Math.random() * 100],
              x: [Math.random() * -100, Math.random() * 100],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-1 w-1 rounded-full bg-white/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Data Cards */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block max-w-7xl mx-auto">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [-15, 15, -15],
              x: mousePosition.x * (i % 2 === 0 ? 1 : -1),
            }}
            transition={{ 
              y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: card.delay },
              x: { type: "spring", stiffness: 50, damping: 20 }
            }}
            className={`absolute ${card.position} glass px-4 py-3 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center gap-3 backdrop-blur-md`}
          >
            <CheckCircle2 className="h-4 w-4 text-accent-primary" />
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">{card.text}</span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 mx-auto max-w-7xl w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 glass px-5 py-2 text-sm font-medium text-muted"
          >
            <span className="text-accent-primary font-bold">Award-Winning AI Powered Marketing Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1]"
          >
            Digital Marketing, SEO & Web Design Services <br className="hidden md:block" />
            <span className="text-gradient-primary">For Global Leaders.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Recognized as the <strong>Best SEO Agency in <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link> & Dubai</strong>, we deploy enterprise-grade custom web development, robust branding, and AI-powered marketing automation to help ambitious brands dominate their target markets from Singapore to the UK.
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
              Request Proposal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#services-grid"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/5"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
