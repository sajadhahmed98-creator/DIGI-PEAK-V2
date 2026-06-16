"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "NDA & Framework Setup",
    desc: "We sign standard mutual NDAs to legally safeguard your clients and establish flat-rate wholesale packages.",
  },
  {
    num: "02",
    title: "Brief & Scope Projects",
    desc: "Submit your project brief. Our technical team works in the background to provide guidelines and costs.",
  },
  {
    num: "03",
    title: "Silent Execution Phase",
    desc: "We start work immediately. Our developers, writers, and designers deliver results under your guidelines.",
  },
  {
    num: "04",
    title: "Delivery & Payouts",
    desc: "We deliver files, code, or campaign assets to you. You review the deliverables and present them to your clients.",
  }
];

export function WhiteLabelHowItWorks() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Operations</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            The White Label Workflow
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            A secure, streamlined, and completely silent delivery pipeline designed for agency efficiency.
          </p>
        </div>

        {/* Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-indigo-500/10 via-accent-primary/20 to-accent-secondary/10 hidden md:block z-0" />

          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass border border-white/5 bg-white/[0.005] rounded-2.5xl p-6.5 relative z-10 flex flex-col items-center text-center hover:border-indigo-500/20 transition-all duration-300"
            >
              {/* Step Circle */}
              <div className="w-14 h-14 rounded-full bg-black border border-indigo-500/20 flex items-center justify-center font-mono text-base font-bold text-indigo-400 mb-6.5 shadow-lg shadow-indigo-500/5">
                {s.num}
              </div>
              <h3 className="font-heading text-sm font-bold text-white mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
