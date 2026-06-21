"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Bot } from "lucide-react";

export function LeadGeneration() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 relative">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] p-[1px] overflow-hidden bg-gradient-to-r from-accent-primary/30 via-white/10 to-accent-secondary/30 shadow-2xl"
        >
          {/* Creative glowing ambient backgrounds */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/15 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/15 blur-[80px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" />

          {/* Actual Card Body with Backdrop Blur */}
          <div className="relative z-10 rounded-[2.4rem] bg-[#0b0b0f]/90 px-8 py-20 md:py-16 md:py-24 lg:py-32 text-center backdrop-blur-2xl">
            {/* Tech grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Eyebrow Label */}
              <p className="text-xs md:text-sm font-bold text-accent-primary uppercase tracking-[0.25em] mb-6 flex items-center justify-center gap-2">
                <span className="w-2 h-[2px] bg-accent-primary/[0.015]0" />
                LET'S BUILD SOMETHING EXCEPTIONAL
                <span className="w-2 h-[2px] bg-accent-primary/[0.015]0" />
              </p>

              {/* Compact & Sleek Headline */}
              <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-12">
                Ready To Grow Your Business
              </h2>

              {/* Smaller, Sleeker Buttons Row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/proposal"
                  className="btn-primary group flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold"
                >
                  Get Proposal
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/digiai"
                  className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-accent-primary/30 px-5 py-2.5 text-xs font-medium transition-all duration-300 text-white"
                >
                  <Bot className="h-3.5 w-3.5 text-accent-primary" />
                  Talk to Digi AI
                </Link>
                <Link
                  href="https://wa.me/94773624413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-emerald-500/30 px-5 py-2.5 text-xs font-medium transition-all duration-300"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
