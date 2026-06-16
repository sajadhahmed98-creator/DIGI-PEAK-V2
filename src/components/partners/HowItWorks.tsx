"use client";

import { motion } from "framer-motion";
import { UserPlus, FolderSync, ThumbsUp, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    num: "01",
    icon: UserPlus,
    title: "Submit Your Referral",
    desc: "Share the details of a business that may need digital services.",
  },
  {
    step: "Step 2",
    num: "02",
    icon: FolderSync,
    title: "We Handle Everything",
    desc: "Strategy, proposals, meetings, delivery, and project management.",
  },
  {
    step: "Step 3",
    num: "03",
    icon: ThumbsUp,
    title: "Project Gets Approved",
    desc: "The client moves forward with Digipeak.",
  },
  {
    step: "Step 4",
    num: "04",
    icon: CheckCircle2,
    title: "Earn Your Commission",
    desc: "Receive your referral reward after project completion.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Process Flow</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            How It Works
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            From the initial recommendation to the final commission distribution — simple and transparent.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector line for large screens */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-indigo-500/10 via-accent-primary/20 to-indigo-500/10 -translate-y-8 z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              {/* Step indicator */}
              <span className="text-[10px] font-bold text-accent-primary uppercase tracking-widest font-mono mb-4">
                {s.step}
              </span>

              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-[#050816] border border-white/10 flex items-center justify-center text-white mb-6 relative group-hover:border-indigo-500/30 transition-all duration-300">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-indigo-500/5 blur-sm opacity-50" />
                <s.icon className="w-6 h-6 text-indigo-400 relative z-10" />
                
                {/* Step Num badge */}
                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-indigo-500 border border-indigo-400 flex items-center justify-center text-[10px] font-bold text-white font-mono">
                  {s.num}
                </div>
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed max-w-xs">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
