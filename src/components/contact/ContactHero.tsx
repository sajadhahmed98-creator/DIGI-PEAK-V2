"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function ContactHero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[70vh] pt-32 pb-16 px-6 flex items-center justify-center overflow-hidden bg-black">
      {/* Background ambient glowing spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6 select-none animate-pulse">
            Digipeak Partner Hub
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white mb-6">
            Let&apos;s Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              Exceptional Together
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Tell us about your project. We&apos;ll craft a custom strategy and send you a detailed proposal — no fluff, no commitment.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("lead-form")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:opacity-90 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              Get Free Proposal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                scrollToSection("lead-form");
                // Focus details area or set state if needed
                const detailsInput = document.getElementById("details");
                if (detailsInput) detailsInput.focus();
              }}
              className="inline-flex items-center gap-2 glass border border-white/10 hover:border-accent-primary/30 text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-accent-primary" />
              Book Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
