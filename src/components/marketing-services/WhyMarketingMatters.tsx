"use client";

import { motion } from "framer-motion";
import { Users, Crosshair, LineChart, ShieldCheck } from "lucide-react";

export function WhyMarketingMatters() {
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
                Why Performance Marketing <span className="text-gradient-primary">Matters.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Hope is not a strategy. We engineer data-driven acquisition systems that consistently turn ad spend into high-margin revenue and qualified B2B leads.
              </p>
            </motion.div>

            <ul className="space-y-6">
              {[
                {
                  title: "Predictable Customer Acquisition",
                  desc: "We eliminate the guesswork. Our campaigns are designed to generate a consistent, scalable flow of high-intent buyers directly to your business.",
                  icon: Users,
                },
                {
                  title: "Laser-Targeted Lead Generation",
                  desc: "Stop wasting budget on broad audiences. We utilize advanced data modeling to target users actively searching for your specific products or services.",
                  icon: Crosshair,
                },
                {
                  title: "Data-Driven Decisions & ROI",
                  desc: "Every dollar is tracked. We implement complex server-side tracking to ensure you know exactly which campaigns are driving the highest Return on Ad Spend (ROAS).",
                  icon: LineChart,
                },
                {
                  title: "Unfair Competitive Advantage",
                  desc: "While competitors rely on outdated tactics, we leverage AI-bidding, dynamic creatives, and multi-channel attribution to dominate the ad auction.",
                  icon: ShieldCheck,
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
                  <div className="mt-1 h-12 w-12 shrink-0 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-orange-400" />
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
            {/* ROAS Scaling Visualization */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square md:aspect-[4/3] glass rounded-[2rem] border border-white/10 p-8 overflow-hidden flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-amber-500/5 pointer-events-none" />
              
              <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
                 <div>
                    <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">Live ROAS Tracking</div>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">425%</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                    <div className="text-xs text-muted mb-1">Cost Per Lead</div>
                    <div className="text-xl font-bold text-[#25D366]">-$14.50 ↓</div>
                 </div>
              </div>

              {/* Animated Growth Graph */}
              <div className="relative h-48 w-full mt-auto flex items-end justify-between gap-2 z-10">
                 {[30, 45, 40, 60, 75, 65, 85, 100].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: `${height}%`, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 50 }}
                      className="w-full bg-gradient-to-t from-orange-600 to-amber-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity relative group"
                    >
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs font-bold whitespace-nowrap text-white pointer-events-none">
                          Month {i + 1}
                       </div>
                    </motion.div>
                 ))}
                 
                 {/* Trend Line Overlay */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      d="M 0,70 L 40,55 L 80,60 L 120,40 L 160,25 L 200,35 L 240,15 L 280,0" 
                      fill="none" 
                      stroke="#fcd34d" 
                      strokeWidth="3"
                      className="drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                    />
                 </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
