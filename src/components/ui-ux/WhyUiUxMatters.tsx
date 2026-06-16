"use client";

import { motion } from "framer-motion";
import { MousePointerClick, LineChart, RefreshCw, Zap, ShieldAlert, DollarSign } from "lucide-react";

const benefits = [
  { 
    title: "Better First Impressions", 
    desc: "Users decide whether to stay on your platform within seconds. Premium aesthetic and immediate clarity make those seconds count.", 
    icon: MousePointerClick 
  },
  { 
    title: "Higher Conversion Rates", 
    desc: "Intuitive user flows, clear calls-to-action, and optimized interactive feedback reduce friction and guide users seamlessly to convert.", 
    icon: LineChart 
  },
  { 
    title: "Increased User Retention", 
    desc: "Delightful, simple, and meaningful digital experiences turn first-time visitors into highly active, loyal lifetime customers.", 
    icon: RefreshCw 
  },
  { 
    title: "Faster Navigation", 
    desc: "By removing visual clutter and streamlining menu structures, we enable users to find exactly what they need instantly.", 
    icon: Zap 
  },
  { 
    title: "Better Brand Perception", 
    desc: "A premium, state-of-the-art UI builds deep credibility and trust, establishing your organization as the market leader.", 
    icon: ShieldAlert 
  },
  { 
    title: "Higher Revenue", 
    desc: "Every dollar invested in UX yields significant returns. A well-designed product lowers acquisition costs and boosts overall growth.", 
    icon: DollarSign 
  },
];

export function WhyUiUxMatters() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Why UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">Matters.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Design is not just what it looks like and feels like. Design is how it works. Superior user experiences drive superior business results.
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
              className="glass p-8 rounded-2xl border border-white/10 hover:border-rose-500/30 transition-colors group flex flex-col items-center text-center"
            >
              <div className="mb-6 h-14 w-14 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-500/20 transition-all duration-300">
                <benefit.icon className="h-7 w-7 text-rose-400" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg text-white">{benefit.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
