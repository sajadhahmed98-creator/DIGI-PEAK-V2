"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Professional Delivery",
    desc: "We build premium, standard-setting websites, applications, and marketing campaigns.",
  },
  {
    title: "Transparent Communication",
    desc: "Ongoing updates, clear reports, and total honesty on timelines and metrics.",
  },
  {
    title: "Dedicated Project Management",
    desc: "A single coordinator orchestrates the entire scoping, design, and engineering delivery.",
  },
  {
    title: "International Client Support",
    desc: "We serve global markets including Qatar, UAE, Saudi Arabia, UK, and Singapore remotely.",
  },
  {
    title: "SEO & Growth Expertise",
    desc: "Founder-led technical knowledge driving real client ROI and search visibility multipliers.",
  },
  {
    title: "Long-Term Partnership Opportunities",
    desc: "Many of our referral partners continue working with us across multiple clients for years.",
  },
];

export function WhyPartnerWithDigipeak() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Agency Quality</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Why Partner With Digipeak
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            We value your reputation. We deliver world-class products so your referred clients are always delighted.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="flex items-center gap-2.5 mb-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                  <h3 className="font-heading text-base font-bold text-white leading-snug">
                    {r.title}
                  </h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">
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
