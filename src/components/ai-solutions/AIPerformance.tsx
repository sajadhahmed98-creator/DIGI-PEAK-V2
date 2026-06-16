"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(start + (value - start) * easeOutExpo);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function AIPerformance() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black border-y border-white/5">
      {/* Background Gradients - AI Theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-gradient-to-r from-cyan-600/10 via-blue-500/10 to-purple-600/10 blur-3xl opacity-50 pointer-events-none" />

      {/* Kinetic Data Visualizer */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path 
            d="M 0,50 Q 25,20 50,50 T 100,50" 
            fill="none" 
            stroke="#22d3ee" 
            strokeWidth="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5, y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path 
            d="M 0,60 Q 30,80 60,60 T 100,60" 
            fill="none" 
            stroke="#a855f7" 
            strokeWidth="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5, y: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Performance.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real metrics from deployed automation architecture.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {[
            { label: "Productivity", value: 420, prefix: "+", suffix: "%", decimals: 0 },
            { label: "Cost Reduction", value: 65, prefix: "", suffix: "%", decimals: 0 },
            { label: "AI Operations", value: 24, prefix: "", suffix: "/7", decimals: 0 },
            { label: "Response Speed", value: 310, prefix: "+", suffix: "%", decimals: 0 },
            { label: "Satisfaction", value: 98.4, prefix: "", suffix: "%", decimals: 1 },
            { label: "Workflows", value: 120, prefix: "", suffix: "+", decimals: 0 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-4 md:p-6 rounded-2xl border border-white/10 text-center relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-heading text-3xl md:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-2">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-cyan-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
