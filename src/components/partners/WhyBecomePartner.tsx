"use client";

import { motion } from "framer-motion";
import { Link2, Coins, Cpu, Globe } from "lucide-react";

const benefits = [
  {
    icon: Link2,
    title: "Simple Referral Process",
    desc: "Refer businesses that need digital growth services.",
  },
  {
    icon: Coins,
    title: "Earn Commission",
    desc: "Receive rewards for every successful project.",
  },
  {
    icon: Cpu,
    title: "No Technical Work",
    desc: "We handle strategy, design, development, SEO, and delivery.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    desc: "Refer businesses from any country or industry.",
  },
];

export function WhyBecomePartner() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Referral Benefits</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Why Become A Partner
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Monetize your professional network with our transparent, reliable partnership pipeline.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass border border-white/5 bg-white/[0.01] rounded-2xl p-6.5 relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon box */}
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 text-indigo-400">
                  <b.icon className="w-5.5 h-5.5" />
                </div>
                
                <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
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
