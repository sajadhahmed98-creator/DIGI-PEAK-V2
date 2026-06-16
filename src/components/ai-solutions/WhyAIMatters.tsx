"use client";

import { motion } from "framer-motion";
import { TrendingDown, Zap, HeartHandshake, Rocket, LineChart, ShieldCheck } from "lucide-react";

const benefits = [
  { title: "Reduce Operational Costs", desc: "Automate repetitive, high-volume tasks, significantly decreasing overhead and reliance on manual labor.", icon: TrendingDown },
  { title: "Increase Productivity", desc: "Save hundreds of work hours. Let intelligent systems handle the busywork so your team can focus on strategy.", icon: Zap },
  { title: "Improve Customer Experience", desc: "Provide 24/7 intelligent, instant support that resolves queries instantly and elevates brand perception.", icon: HeartHandshake },
  { title: "Scale Faster", desc: "Handle exponential growth seamlessly without the need to constantly hire and train new administrative staff.", icon: Rocket },
  { title: "Better Decision Making", desc: "Harness real-time business insights and predictive analytics from massive data sets instantly.", icon: LineChart },
  { title: "Competitive Advantage", desc: "Stay ahead of the curve with proprietary AI-driven systems that your competitors simply cannot match.", icon: ShieldCheck },
];

export function WhyAIMatters() {
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
              Why AI & Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Matter.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Artificial Intelligence is no longer a buzzword—it's a critical infrastructure requirement for any business intending to scale efficiently.
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
              className="glass p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors group flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Subtle tech background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-6 h-14 w-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300 relative z-10">
                <benefit.icon className="h-7 w-7 text-cyan-400" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg relative z-10">{benefit.title}</h3>
              <p className="text-sm text-muted leading-relaxed relative z-10">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
