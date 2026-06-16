"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Zap, MousePointerClick } from "lucide-react";

export function WhyWebsiteMatters() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Why Your <span className="text-gradient-secondary">Website Matters.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Your website is the ultimate conversion engine of your business. A template site screams amateur, while a premium custom website establishes immediate enterprise authority and scales revenue.
              </p>
            </motion.div>

            <ul className="space-y-6">
              {[
                {
                  title: "Instant Enterprise Trust",
                  desc: "Users judge your credibility in 0.05 seconds. We design premium aesthetic experiences that command immediate respect and authority.",
                  icon: ShieldCheck,
                },
                {
                  title: "Conversion Optimization (CRO)",
                  desc: "We engineer UX/UI pathways specifically designed to turn passive visitors into high-value leads and paying customers.",
                  icon: MousePointerClick,
                },
                {
                  title: "Unmatched Speed & SEO",
                  desc: "Built on headless architectures, our websites load instantly and are technically structured to dominate Google Core Web Vitals.",
                  icon: Zap,
                },
              ].map((item, i) => (
                <motion.li 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="mt-1 h-12 w-12 shrink-0 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            {/* Visual Representation of Conversion Funnel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square md:aspect-[4/3] glass rounded-[2rem] border border-white/10 p-8 overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/5 to-cyan-500/5 pointer-events-none" />
              
              <div className="relative w-full max-w-sm flex flex-col gap-4">
                {/* Traffic */}
                <motion.div 
                  initial={{ width: "100%", opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="h-12 w-full bg-white/5 border border-white/10 rounded-xl flex items-center justify-between px-6"
                >
                  <span className="text-xs text-muted font-bold uppercase tracking-wider">Traffic</span>
                  <span className="font-bold text-white">100k</span>
                </motion.div>
                
                {/* Engagement */}
                <motion.div 
                  initial={{ width: "80%", opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-12 w-[80%] mx-auto bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-between px-6"
                >
                  <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">Engagement</span>
                  <span className="font-bold text-white">45k</span>
                </motion.div>

                {/* Leads */}
                <motion.div 
                  initial={{ width: "60%", opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="h-12 w-[60%] mx-auto bg-cyan-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-between px-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  <span className="text-xs text-cyan-300 font-bold uppercase tracking-wider">Leads</span>
                  <span className="font-bold text-white">12k</span>
                </motion.div>

                {/* Conversions */}
                <motion.div 
                  initial={{ width: "40%", opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="h-16 w-[40%] mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-between px-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                >
                  <span className="text-xs text-white/90 font-bold uppercase tracking-wider">Sales</span>
                  <span className="font-bold text-white text-lg">3.8x</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
