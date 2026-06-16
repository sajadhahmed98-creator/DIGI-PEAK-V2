"use client";

import { motion } from "framer-motion";
import { Send, MessageSquare, ArrowRight } from "lucide-react";

export function WhiteLabelCTA() {
  const handleTalkToAi = () => {
    if (typeof window !== "undefined") {
      const toggleBtn = document.querySelector('[aria-label="Toggle Digi AI assistant"]') as HTMLButtonElement | null;
      if (toggleBtn) {
        toggleBtn.click();
      }
    }
  };

  const handleScrollToForm = () => {
    const el = document.getElementById("whitelabel-application-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black">
      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Glow behind panel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

        {/* CTA Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 border border-white/10 bg-gradient-to-br from-white/[0.01] to-white/[0.002] text-center relative z-10"
        >
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest font-mono block mb-4">Partner with us</span>
          <h2 className="font-heading text-2xl md:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
            Scale Your Agency Operations.
            <br />
            Secure Silent Execution.
          </h2>
          <p className="text-xs md:text-sm text-muted max-w-lg mx-auto mb-10 leading-relaxed">
            Ready to integrate a silent fulfillment backend to support your agency growth? Submit your credentials below or speak with Digi AI for immediate partnership scoping.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleScrollToForm}
              className="btn-primary group flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl text-white cursor-pointer"
            >
              Apply For White Label
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            
            <button
              onClick={handleTalkToAi}
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm font-semibold transition-colors text-white cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              Talk To Digi AI
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
