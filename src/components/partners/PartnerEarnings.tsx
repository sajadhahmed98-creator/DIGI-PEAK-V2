"use client";

import { motion } from "framer-motion";
import { DollarSign, Eye, Code, Award, Info } from "lucide-react";

const earnings = [
  {
    icon: Eye,
    title: "Landing Page Project",
    commission: "AED 100 – AED 300",
    desc: "Single-page campaign sites or custom lead capture landing setups.",
  },
  {
    icon: Code,
    title: "Business Website",
    commission: "AED 300 – AED 1,000",
    desc: "Multi-page corporate websites, web portals, and standard e-commerce builds.",
  },
  {
    icon: Award,
    title: "SEO Campaign",
    commission: "AED 200 – AED 1,500",
    desc: "Ongoing organic growth optimizations, local search domination, or link setups.",
  },
  {
    icon: DollarSign,
    title: "Custom Growth Projects",
    commission: "Scope Dependent",
    desc: "Enterprise custom integrations, database setups, and full-stack system structures.",
  },
];

export function PartnerEarnings() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Commission Structures</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Partner Earning Examples
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Review the potential commissions you can capture based on the project type you introduce to us.
          </p>
        </div>

        {/* Earnings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {earnings.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass border border-white/5 bg-white/[0.01] rounded-2xl p-6.5 flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300"
            >
              <div>
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                  <e.icon className="w-5 h-5" />
                </div>
                
                <h3 className="font-heading text-base font-bold text-white mb-2 leading-snug">
                  {e.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-6">
                  {e.desc}
                </p>
              </div>

              {/* Commission tag */}
              <div className="mt-auto border-t border-white/5 pt-4">
                <span className="text-[10px] text-muted uppercase font-bold block mb-1 tracking-wider font-mono">Potential Commission</span>
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono">
                  {e.commission}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 glass border border-white/10 rounded-2xl p-5 bg-white/[0.02] max-w-2xl mx-auto"
        >
          <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <p className="text-xs text-muted leading-relaxed">
            <span className="font-bold text-white block mb-0.5">Earning Policy Note:</span>
            Actual commission depends on project value and agreement. We believe in complete transparency and write custom agreements with each partner upon their application approval.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
