"use client";

import { motion } from "framer-motion";
import { Search, Target, Zap, RefreshCw, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: Search,
    title: "Discovery",
    desc: "Deep-dive into your business, audience, competitors and current digital presence to fully understand your context and opportunities.",
    color: "text-accent-primary border-accent-primary/30 bg-accent-primary/10",
    highlight: "from-accent-primary/20 to-transparent",
  },
  {
    id: "02",
    icon: Target,
    title: "Strategy",
    desc: "Build a tailored digital growth roadmap with clear goals, timelines, channel priorities, and measurable success metrics.",
    color: "text-accent-secondary border-accent-secondary/30 bg-accent-secondary/10",
    highlight: "from-accent-secondary/20 to-transparent",
  },
  {
    id: "03",
    icon: Zap,
    title: "Execution",
    desc: "Precision implementation of every element — design, development, campaigns, content — with quality as a non-negotiable standard.",
    color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    highlight: "from-indigo-500/20 to-transparent",
  },
  {
    id: "04",
    icon: RefreshCw,
    title: "Optimization",
    desc: "Continuous monitoring, testing, and refinement — improving performance across all channels using real data and analytics.",
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    highlight: "from-emerald-500/20 to-transparent",
  },
  {
    id: "05",
    icon: TrendingUp,
    title: "Growth",
    desc: "Scale what works. Compound results over time. Transform digital investments into sustained, measurable business growth.",
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    highlight: "from-amber-500/20 to-transparent",
  },
];

export function HowWeWork() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-accent-primary/5 via-accent-secondary/5 to-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Work.
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A proven 5-stage process that takes you from business goal to measurable digital growth.
            </p>
          </motion.div>
        </div>

        {/* Steps — horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-8 gap-5 md:grid md:grid-cols-5 md:gap-5 md:overflow-visible md:pb-0 hide-scrollbar">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="shrink-0 w-64 md:w-auto relative group"
            >
              {/* Connector line (not on last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[28px] left-[calc(50%+28px)] right-0 h-px bg-gradient-to-r from-white/10 to-transparent -translate-y-1/2 z-0" />
              )}

              <div className={`glass border rounded-2xl p-6 h-full hover:border-opacity-60 transition-all duration-300 relative overflow-hidden ${step.color}`}>
                <div className={`absolute inset-0 bg-gradient-to-b ${step.highlight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-white/8 group-hover:text-white/15 transition-colors mb-3 select-none">{step.id}</div>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${step.color}`}>
                    <step.icon className={`w-5 h-5 ${step.color.split(" ")[0]}`} />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-sm">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
