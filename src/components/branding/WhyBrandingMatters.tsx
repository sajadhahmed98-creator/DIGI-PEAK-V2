"use client";

import { motion } from "framer-motion";
import { Shield, Eye, TrendingUp, Gem, Heart, Trophy } from "lucide-react";

const benefits = [
  { title: "Stronger Trust", desc: "A premium, cohesive visual identity immediately signals professionalism, reliability, and enterprise-level competence.", icon: Shield },
  { title: "Better Recognition", desc: "Stand out in crowded markets with a unique visual language that customers remember and instantly identify.", icon: Eye },
  { title: "Higher Conversion Rates", desc: "Design dictates perceived value. Better branding reduces friction, justifies pricing, and directly increases sales.", icon: TrendingUp },
  { title: "Premium Market Position", desc: "Elevate your business out of commodity pricing and command premium rates by looking the part.", icon: Gem },
  { title: "Customer Loyalty", desc: "Brands with a clear mission and cohesive aesthetic build emotional connections that turn buyers into advocates.", icon: Heart },
  { title: "Competitive Advantage", desc: "When products are similar, branding is the tie-breaker. Outshine competitors with a superior brand experience.", icon: Trophy },
];

export function WhyBrandingMatters() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Why Branding <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">Matters.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Your brand is more than a logo. It is the gut feeling a customer has about your business. We engineer that feeling.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-violet-500/30 transition-colors group flex flex-col items-center text-center"
            >
              <div className="mb-6 h-14 w-14 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-violet-500/20 transition-all duration-300">
                <benefit.icon className="h-7 w-7 text-violet-400" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">{benefit.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
