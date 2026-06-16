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

export function BrandingPerformance() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black border-y border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-gradient-to-r from-violet-600/10 via-indigo-500/10 to-purple-600/10 blur-3xl opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">Impact.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Our branding systems are designed not just to look beautiful, but to drive measurable business results.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { label: "Brand Recognition", value: 320, prefix: "+", suffix: "%", decimals: 0 },
            { label: "Customer Trust", value: 210, prefix: "+", suffix: "%", decimals: 0 },
            { label: "Engagement Growth", value: 180, prefix: "+", suffix: "%", decimals: 0 },
            { label: "Client Satisfaction", value: 98.4, prefix: "", suffix: "%", decimals: 1 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl border border-white/10 text-center relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-heading text-4xl md:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-xs md:text-sm font-semibold text-violet-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
