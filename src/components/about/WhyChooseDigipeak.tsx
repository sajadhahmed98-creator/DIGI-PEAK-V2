"use client";

import { motion } from "framer-motion";
import {
  Users, Cpu, BarChart2, Layers, MessageSquare,
  RefreshCw, Handshake, Globe, TrendingUp
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Client-Focused Approach",
    desc: "Every strategy is built around your specific goals, audience, and market — not a generic template.",
    color: "text-accent-primary border-accent-primary/20 bg-accent-primary/[0.03]",
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    desc: "We use proven, current tools and platforms — from Next.js to AI APIs — ensuring your digital presence is built for the future.",
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Strategies",
    desc: "Decisions backed by analytics, search intent data, and performance tracking — not intuition alone.",
    color: "text-accent-secondary border-accent-secondary/20 bg-accent-secondary/[0.03]",
  },
  {
    icon: Layers,
    title: "Custom Solutions",
    desc: "No two businesses are identical. We build tailored solutions specifically designed for your objectives and context.",
    color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    desc: "Clear, honest communication throughout every project — regular updates, open reporting, no hidden surprises.",
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimization",
    desc: "Digital growth is a process, not an event. We continuously monitor, test, and refine to improve performance over time.",
    color: "text-amber-400 border-amber-500/20 bg-amber-500/10",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    desc: "We invest in understanding your business deeply and building relationships that grow stronger over time.",
    color: "text-rose-400 border-rose-500/20 bg-rose-500/10",
  },
  {
    icon: Globe,
    title: "International Perspective",
    desc: "Experience working across different markets, cultures, and industries gives us a broader strategic lens.",
    color: "text-blue-400 border-blue-500/20 bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Focus",
    desc: "Everything we build is designed to generate measurable business outcomes — more leads, more customers, more revenue.",
    color: "text-violet-400 border-violet-500/20 bg-violet-500/10",
  },
];

export function WhyChooseDigipeak() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/[0.015] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-secondary/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Digipeak.
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              What sets us apart is not just what we do — it is how we think, how we work, and how committed we are to your growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-7 rounded-2xl border border-white/10 hover:border-accent-primary/25 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${reason.color}`}>
                  <reason.icon className={`w-6 h-6 ${reason.color.split(" ")[0]}`} />
                </div>
                <h3 className="font-bold text-white mb-3 text-base">{reason.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
