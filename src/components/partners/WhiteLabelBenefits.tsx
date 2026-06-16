"use client";

import { motion } from "framer-motion";
import { Zap, HelpCircle, UserCheck, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Wholesale Partner Discounts",
    desc: "Gain access to wholesale partner pricing across all packages. Retain maximum profit margins when you invoice your clients directly.",
  },
  {
    icon: UserCheck,
    title: "Dedicated B2B Account Lead",
    desc: "Collaborate directly with a dedicated B2B Account Manager. Get swift scoping, technical assistance, and progress tracking inputs.",
  },
  {
    icon: Shield,
    title: "Confidentiality & Security",
    desc: "Your clients are fully yours. We maintain complete background positioning. No branding, no direct contacts, and 100% legal protection.",
  },
  {
    icon: HelpCircle,
    title: "Flexible Resource Scaling",
    desc: "Scale your capacity on demand. Add developers, copywriters, or search specialists when you sign a client, with no salary overheads.",
  }
];

export function WhiteLabelBenefits() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Outsourcing gains</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Operational Benefits for Agencies
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Eliminate bottlenecks, improve delivery timelines, and scale client contracts with zero management friction.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass border border-white/5 bg-white/[0.01] rounded-2.5xl p-6.5 hover:border-indigo-500/20 transition-all duration-300 flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <b.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
