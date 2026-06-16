"use client";

import { motion } from "framer-motion";
import { Lightbulb, Shield, Palette, BarChart2, Users, RefreshCw, Star } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Constantly exploring new technologies, strategies, and creative approaches to keep clients ahead of the curve.",
    gradient: "from-accent-primary to-indigo-500",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Honest, transparent relationships with every client. No exaggerated promises — only realistic goals and real results.",
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.2)]",
  },
  {
    icon: Palette,
    title: "Creativity",
    desc: "Beautiful, purposeful design thinking that makes brands stand out and communications resonate with their audiences.",
    gradient: "from-pink-500 to-rose-500",
    glow: "shadow-[0_0_30px_rgba(236,72,153,0.2)]",
  },
  {
    icon: BarChart2,
    title: "Performance",
    desc: "Every strategy is built around measurable outcomes — traffic, leads, conversions, and revenue that can be tracked.",
    gradient: "from-amber-500 to-orange-500",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.2)]",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Working closely alongside clients as true partners — listening, adapting, and building together.",
    gradient: "from-blue-500 to-cyan-500",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    desc: "Digital markets evolve. We stay committed to ongoing learning, optimization, and adaptation for every client.",
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.2)]",
  },
  {
    icon: Star,
    title: "Customer Success",
    desc: "Client business growth is our definition of success. Every decision is made with their long-term outcomes in mind.",
    gradient: "from-accent-secondary to-sky-500",
    glow: "shadow-[0_0_30px_rgba(14,165,233,0.2)]",
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-accent-primary/5 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Our Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Values.
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              The principles that guide every decision, every strategy, and every client relationship at Digipeak.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className={`glass border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-all duration-300 group relative overflow-hidden ${value.glow}`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${value.gradient} opacity-5 group-hover:opacity-10 blur-2xl transition-opacity`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-3 text-base">{value.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
