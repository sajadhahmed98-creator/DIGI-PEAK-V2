"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery", description: "We audit your market, competitors, and goals." },
  { number: "02", title: "Strategy", description: "A precise growth plan built around your objectives." },
  { number: "03", title: "Execution", description: "High-performance builds delivered on schedule." },
  { number: "04", title: "Growth", description: "Continuous optimisation and ROI scaling." },
];

export function Process() {
  return (
    <section className="py-28 md:py-36 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-secondary/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="section-label mb-4">
            <span className="w-4 h-px bg-accent-secondary inline-block" />
            Process
          </p>
          <h2
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            className="font-heading text-white"
          >
            How it works.
          </h2>
        </div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-white/8 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col"
              >
                {/* Step number bubble */}
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 relative">
                  <span
                    className="font-mono text-sm font-bold"
                    style={{ color: i === 0 ? '#a855f7' : i === 1 ? '#3b82f6' : i === 2 ? '#10b981' : '#f59e0b' }}
                  >
                    {step.number}
                  </span>
                  {/* Dot on connector line for desktop */}
                  <div className="hidden lg:block absolute -top-[25px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/20" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
