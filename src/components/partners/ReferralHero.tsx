"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Award } from "lucide-react";

export function ReferralHero() {
  const handleTalkToAi = () => {
    if (typeof window !== "undefined") {
      const toggleBtn = document.querySelector('[aria-label="Toggle Digi AI assistant"]') as HTMLButtonElement | null;
      if (toggleBtn) {
        toggleBtn.click();
      }
    }
  };

  const handleScrollToForm = () => {
    const el = document.getElementById("partner-application-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-52 md:pb-28 px-6 bg-black">
      {/* Background glow animations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 h-[600px] w-[600px] -translate-y-1/3 -translate-x-1/3 rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-y-1/3 translate-x-1/3 rounded-full bg-accent-secondary/5 blur-[140px]" />

        {/* Faint grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6366f1" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl w-full text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4.5 py-1.5 text-xs font-semibold text-indigo-300 tracking-wide"
        >
          <Award className="w-3.5 h-3.5 text-indigo-400" />
          <span>Partner Network</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white max-w-4xl"
        >
          Earn By Referring
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-accent-primary to-accent-secondary">
            Businesses That Want To Grow.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 text-base text-muted md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Join the Digipeak Referral Partner Program and earn commissions for introducing businesses that need websites, SEO, digital marketing, branding, AI solutions, and business growth services.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={handleScrollToForm}
            className="btn-primary group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl text-white cursor-pointer"
          >
            Become A Partner
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={handleTalkToAi}
            className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 text-base font-semibold transition-colors text-white cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            Talk To Digi AI
          </button>
        </motion.div>
      </div>
    </section>
  );
}
