"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "No Technical Team Required",
    desc: "Scale operations without hiring in-house technical developers or project managers.",
  },
  {
    title: "No Development Staff Required",
    desc: "Offer full-stack web builds without maintaining a developer roster.",
  },
  {
    title: "No SEO Team Required",
    desc: "Deploy complex organic keyword strategies completely managed by our specialists.",
  },
  {
    title: "No Marketing Team Required",
    desc: "Resell performance Google Ads campaigns managed by senior media buyers.",
  },
  {
    title: "Flexible Profit Margins",
    desc: "You choose your margin and project billing models; we invoice at flat reseller rates.",
  },
  {
    title: "Global Client Opportunities",
    desc: "Source projects globally remotely while we coordinate technical project fulfillment.",
  },
  {
    title: "Fast Project Delivery",
    desc: "Our established systems ensure swift timelines and consistent quality.",
  },
  {
    title: "Long-Term Partnership Support",
    desc: "Access strategic sales resources, brief blueprints, and support to close more deals.",
  },
];

export function ResellerWhyChoose() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Reseller Benefits</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Why Resellers Choose Digipeak
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Zero overhead. Expand your capabilities list and sell more projects instantly.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass border border-white/5 bg-white/[0.01] rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-2.5 mb-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="font-heading text-sm font-bold text-white leading-snug">
                    {r.title}
                  </h3>
                </div>
                <p className="text-[11px] text-muted leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
