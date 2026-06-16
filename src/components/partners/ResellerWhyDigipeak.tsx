"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Premium Service Delivery",
    desc: "We engineer standard-setting platforms, SEO setups, and client-facing digital assets.",
  },
  {
    title: "Transparent Communication",
    desc: "Always keep you informed on project status, execution sheets, and timelines progress.",
  },
  {
    title: "Agency-Level Expertise",
    desc: "Leverage senior engineering, visual styling, and marketing strategy to delight clients.",
  },
  {
    title: "Scalable Operations",
    desc: "Our delivery teams can manage multiple mid-market and enterprise projects simultaneously.",
  },
  {
    title: "International Project Experience",
    desc: "Proven capabilities serving GCC, UAE, Saudi Arabia, Singapore, UK, and global markets.",
  },
  {
    title: "Modern Technology Stack",
    desc: "Build using Next.js, headless architectures, React systems, and automated pipelines.",
  },
  {
    title: "Dedicated Partner Support",
    desc: "Direct coordination channels to scope prospects, build estimates, and close deals.",
  },
];

export function ResellerWhyDigipeak() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Partner Quality</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Why Partner With Digipeak
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            A reliable, expert partner to protect your reputation and execute projects to the highest standards.
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
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
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
