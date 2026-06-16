"use client";

import { motion } from "framer-motion";
import { ShieldCheck, EyeOff, Lock, HeartHandshake } from "lucide-react";

export function WhiteLabelGuarantee() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-4xl">
        
        {/* Guarantee Banner Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 border border-indigo-500/20 bg-indigo-950/5 relative overflow-hidden"
        >
          {/* Subtle glow background */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono block">Zero Conflict Promise</span>
                <h3 className="font-heading text-lg md:text-2xl font-bold text-white">Silent Fulfillment & Non-Solicitation Guarantee</h3>
              </div>
            </div>

            {/* Paragraphs */}
            <p className="text-xs md:text-sm text-muted mb-8 leading-relaxed">
              We understand that client trust and ownership are the lifelines of your agency. That is why our White Label partnership program is built on strict legal and operational guidelines to ensure absolute separation and protection.
            </p>

            {/* Grid checklist */}
            <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <EyeOff className="w-4 h-4 text-indigo-400" />
                  <span className="font-heading text-xs font-bold uppercase tracking-wider font-mono">100% Invisible</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  We write code, optimize SEO, and design templates behind the scenes. We never include our branding in deliverables.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <Lock className="w-4 h-4 text-indigo-400" />
                  <span className="font-heading text-xs font-bold uppercase tracking-wider font-mono">B2B NDA Standard</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  A mutual Non-Disclosure Agreement (NDA) is executed before any code, files, account accesses, or briefs are shared.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <HeartHandshake className="w-4 h-4 text-indigo-400" />
                  <span className="font-heading text-xs font-bold uppercase tracking-wider font-mono">No Solicitation</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  We guarantee in writing that we will never contact your clients directly, solicit their business, or bypass your agency.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
