"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      {/* SVG dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Single refined centre glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.025] px-4 py-2 text-[11px] font-semibold text-muted tracking-[0.12em] uppercase"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-primary" />
          </span>
          GCC · Global · AI-Powered
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white"
        >
          Premium Digital Growth Solutions For{" "}
          <span className="text-gradient-primary">Businesses Ready To Scale.</span>
        </motion.h1>

        {/* Single-line description — max 12 words */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-base md:text-lg text-muted leading-relaxed"
        >
          Founded in 2022, Digipeak helps businesses scale through premium web design, SEO, digital marketing, branding, AI solutions and technology-driven growth strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="btn-primary group flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold"
          >
            Get Proposal
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/digiai"
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 hover:bg-accent-primary/20 px-8 py-3.5 text-sm font-medium transition-all duration-300 hover:border-accent-primary/50 text-white"
          >
            Try DigiAI
            <span className="relative flex h-2 w-2 ml-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-primary" />
            </span>
          </Link>
        </motion.div>

        {/* Subtle divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-16 mx-auto w-px h-12 bg-gradient-to-b from-white/15 to-transparent"
        />
      </div>
    </section>
  );
}
