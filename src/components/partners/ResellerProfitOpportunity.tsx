"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users, Target, TrendingUp, BarChart2, Shield } from "lucide-react";

const opportunities = [
  {
    icon: ArrowUpRight,
    title: "Build An Additional Revenue Stream",
    desc: "Monetize professional contacts by introducing digital services without execution overhead.",
  },
  {
    icon: Users,
    title: "Offer More Services Without Hiring",
    desc: "Add 13+ specialized digital capabilities to your pitches instantly without recruiter stress.",
  },
  {
    icon: Target,
    title: "Increase Client Retention",
    desc: "Serve clients' holistic requirements, making your brand their central growth partner.",
  },
  {
    icon: TrendingUp,
    title: "Expand Your Market Reach",
    desc: "Sell projects locally, regionally, and internationally, leveraging our borderless coordination.",
  },
  {
    icon: BarChart2,
    title: "Generate Recurring Revenue",
    desc: "Capture recurring commissions through monthly SEO retainer agreements and maintenance plans.",
  },
  {
    icon: Shield,
    title: "Scale Faster With Lower Risk",
    desc: "Grow client volumes with zero technical liability or developer salary burdens.",
  },
];

export function ResellerProfitOpportunity() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Opportunity Scale</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Profit Opportunity
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Review how integrating our reseller model directly scales your B2B capability and profit potential.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass border border-white/5 bg-white/[0.01] rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon box */}
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <o.icon className="w-5 h-5" />
                </div>
                
                <h3 className="font-heading text-base font-bold text-white mb-2 leading-snug">
                  {o.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {o.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
