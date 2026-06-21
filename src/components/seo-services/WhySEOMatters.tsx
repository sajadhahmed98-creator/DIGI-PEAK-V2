"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";

export function WhySEOMatters() {
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
                Why Elite <span className="text-gradient-primary">SEO Matters.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                In today's hyper-competitive digital landscape, relying solely on paid ads is a race to the bottom. Organic search is the most predictable, scalable, and highest-converting acquisition channel for enterprise brands.
              </p>
            </motion.div>

            <ul className="space-y-6">
              {[
                {
                  title: "Exponential Organic Traffic",
                  desc: "Capture high-intent users actively searching for your services, bypassing ad fatigue and ad blockers.",
                  icon: TrendingUp,
                },
                {
                  title: "Unshakable Brand Authority",
                  desc: "Ranking #1 instills immediate trust. Consumers inherently trust Google's top organic recommendations over sponsored placements.",
                  icon: ShieldCheck,
                },
                {
                  title: "Compounding Long-Term ROI",
                  desc: "Unlike PPC where traffic stops the second you stop paying, SEO builds compounding equity into your digital assets over time.",
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
                  <div className="mt-1 h-12 w-12 shrink-0 rounded-full bg-accent-primary/[0.03] border border-accent-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-accent-primary" />
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
            {/* Visual Representation of SEO Growth vs Paid Ads */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/3] glass rounded-[2rem] border border-white/10 p-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 pointer-events-none" />
              
              <div className="relative h-full w-full flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div className="font-bold text-sm text-muted uppercase tracking-wider">Traffic & Revenue Growth</div>
                  <div className="flex gap-4 text-xs font-bold">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-primary" /> SEO</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white/20" /> Paid Ads</div>
                  </div>
                </div>

                <div className="flex-1 relative flex items-end border-l border-b border-white/10 pb-4 pl-4 gap-2">
                  {/* SEO Compounding Curve */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M 16,100 Q 150,100 250,50 T 400,0" 
                      fill="none" 
                      stroke="url(#gradient)" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D946EF" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Paid Ads Flat Curve */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      d="M 16,60 L 400,60" 
                      fill="none" 
                      stroke="rgba(255,255,255,0.2)" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
