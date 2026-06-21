"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Bot } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-radial from-accent-primary/8 via-accent-secondary/3 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="glass border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="font-heading text-3xl md:text-5xl lg:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Ready To Grow <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Your Business?
              </span>
            </h2>
            
            <p className="text-muted text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
              Let&apos;s discuss your goals and build a strategy designed for measurable growth.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <button
                onClick={() => scrollToSection("lead-form")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:opacity-90 hover:scale-105 transition-all duration-300 group cursor-pointer text-sm"
              >
                Get Free Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("lead-form")}
                className="inline-flex items-center gap-2 glass border border-white/10 hover:border-accent-primary/30 text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer text-sm"
              >
                <Mail className="w-4 h-4 text-accent-primary" />
                Contact Digipeak
              </button>
              <Link
                href="/digiai"
                className="inline-flex items-center gap-2 bg-accent-primary/[0.03] border border-accent-primary/30 text-white font-bold px-8 py-4 rounded-full hover:scale-105 hover:bg-accent-primary/20 transition-all duration-300 cursor-pointer text-sm"
              >
                Try DigiAI
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-primary" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
