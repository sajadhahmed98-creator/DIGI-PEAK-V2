"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Clock,
  TrendingUp,
  Target,
  Globe,
  Sparkles,
  MessageSquare,
} from "lucide-react";

const categories = [
  { icon: TrendingUp, label: "SEO" },
  { icon: Globe, label: "Web Design" },
  { icon: BarChart2, label: "Digital Marketing" },
  { icon: Target, label: "Branding" },
  { icon: Sparkles, label: "AI Solutions" },
];

export function CaseStudiesPlaceholder() {
  const handleTalkToAi = () => {
    if (typeof window !== "undefined") {
      const toggleBtn = document.querySelector('[aria-label="Toggle Digi AI assistant"]') as HTMLButtonElement | null;
      if (toggleBtn) {
        toggleBtn.click();
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-52 md:pb-36 px-6 min-h-[90vh] flex items-center justify-center bg-black">
      {/* Background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 h-[600px] w-[600px] -translate-y-1/3 -translate-x-1/3 rounded-full bg-indigo-600/5 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-y-1/3 translate-x-1/3 rounded-full bg-accent-secondary/5 blur-[160px]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="caseGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6366f1" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#caseGrid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs font-semibold text-indigo-300 tracking-wide"
        >
          <Clock className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
          <span>Case Studies — Launching Soon</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-none text-white"
        >
          Real Case Studies.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-accent-primary to-accent-secondary">
            Real Results.
          </span>
        </motion.h1>

        {/* Description (max 2 lines) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-base text-muted md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Verified client success stories, growth campaigns, SEO wins, and digital transformation projects are currently being prepared.
        </motion.p>

        {/* Service Filters (Max 5 categories) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2.5 mb-14 max-w-2xl"
        >
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4.5 py-2 text-xs font-semibold text-muted hover:text-white hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              <cat.icon className="w-3.5 h-3.5 text-indigo-400" />
              <span>{cat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Premium Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-lg rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 text-center backdrop-blur-md relative overflow-hidden shadow-2xl"
        >
          {/* Subtle inside glow */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
              Case Studies Coming Soon
            </h2>
            <p className="text-sm text-muted mb-8 max-w-md mx-auto leading-relaxed">
              We are documenting real client projects and measurable results for publication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                href="/contact"
                className="btn-primary group flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl"
              >
                Get Proposal
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={handleTalkToAi}
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-semibold transition-colors text-white"
              >
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                Talk to Digi AI
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
