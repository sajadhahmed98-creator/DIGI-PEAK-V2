"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ value, duration = 2, suffix = "" }: { value: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure decimals match if needed, but for these we use whole numbers then add suffix manually
        setCount(value);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  // Handle specific formatting like 3.8
  const displayValue = value === 3.8 ? "3.8" : value === 98.4 ? "98.4" : count;

  return <span>{displayValue}{suffix}</span>;
};

export function PerformanceDashboard() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-primary/[0.03] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Performance <span className="text-gradient-secondary">Dashboard.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We don't deal in vanity metrics. We measure our success purely by the revenue and growth we generate for our partners.
            </p>
          </motion.div>
        </div>

        {/* Dashboard UI Grid */}
        <div className="glass border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-accent-secondary" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Metric 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="text-sm font-bold text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Traffic Growth
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-2">
                +<AnimatedCounter value={185} suffix="%" />
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-gradient-primary"
                />
              </div>
            </motion.div>

            {/* Metric 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="text-sm font-bold text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
                Average ROAS
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-2">
                <AnimatedCounter value={3.8} suffix="x" />
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  className="h-full bg-gradient-secondary"
                />
              </div>
            </motion.div>

            {/* Metric 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col"
            >
              <div className="text-sm font-bold text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                Client Satisfaction
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-2">
                <AnimatedCounter value={98.4} suffix="%" />
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  className="h-full bg-gradient-primary"
                />
              </div>
            </motion.div>

            {/* Metric 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col"
            >
              <div className="text-sm font-bold text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Active Brands
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-2">
                <AnimatedCounter value={120} suffix="+" />
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="h-full bg-white/30"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
