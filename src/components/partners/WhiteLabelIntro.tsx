"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Handshake, ShieldAlert, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Handshake,
    title: "Silent Fulfillment Partner",
    desc: "Digipeak becomes your silent fulfillment partner working in the background.",
  },
  {
    icon: TrendingUp,
    title: "You Drive Sales",
    desc: "You sell the digital services and grow your agency pipeline.",
  },
  {
    icon: ShieldCheck,
    title: "Client Ownership",
    desc: "You manage the client relationships and communication entirely.",
  },
  {
    icon: Sparkles,
    title: "We Deliver The Work",
    desc: "Our B2B specialized team executes all design, code, and marketing projects.",
  },
  {
    icon: ShieldAlert,
    title: "Your Brand At The Front",
    desc: "Your agency remains the sole face of the project, start to finish.",
  },
];

export function WhiteLabelIntro() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Fulfillment model</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            What is White Label Partnership?
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            A simple, secure, and highly scalable outsourcing pipeline built to support digital agencies.
          </p>
        </div>

        {/* Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass border border-white/5 bg-white/[0.01] rounded-2xl p-5 hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <p.icon className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-heading text-sm font-bold text-white mb-2 leading-snug">
                  {p.title}
                </h3>
              </div>
              <p className="text-xs text-muted leading-relaxed mt-2">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
