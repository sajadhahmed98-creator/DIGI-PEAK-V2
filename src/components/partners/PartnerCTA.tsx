"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

export function PartnerCTA() {
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
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-4xl w-full">
        
        {/* Glow Ring behind CTA box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass border border-indigo-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle inside gradient highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-accent-primary/5 pointer-events-none" />
          
          <div className="relative z-10">
            {/* Sparkle Badge */}
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-5.5 h-5.5 text-indigo-400" />
            </div>

            <h2 className="font-heading text-2xl md:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Start Earning With Your Network.
            </h2>
            
            <p className="text-muted text-sm md:text-base mb-8 max-w-lg mx-auto leading-relaxed">
              Turn professional connections into opportunities through the Digipeak Referral Partner Program.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleScrollToForm}
                className="btn-primary group flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-white cursor-pointer"
              >
                Become A Partner
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleTalkToAi}
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-semibold transition-colors text-white cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                Talk To Digi AI
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
