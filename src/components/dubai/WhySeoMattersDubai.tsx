"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Globe, Target, UserCheck, Award, TrendingUp, BarChart3, Clock } from "lucide-react";

const pillars = [
  {
    title: "Competitive Search Landscape",
    desc: "Saturated with local and international players, Dubai's digital space demands sophisticated search strategies to cut through noise and rank.",
    icon: Globe,
  },
  {
    title: "Local Visibility",
    desc: "Dominating localized queries and map listings ensures your business is discovered by high-value buyers in Marina, Downtown, and DIFC.",
    icon: MapPin,
  },
  {
    title: "Google Rankings",
    desc: "Securing top-tier organic placements for competitive keywords establishes immediate search authority across the GCC market.",
    icon: Search,
  },
  {
    title: "Lead Generation",
    desc: "Connecting targeted keywords directly to premium Next.js landing layouts ensures a continuous stream of qualified corporate inquiries.",
    icon: Target,
  },
  {
    title: "Brand Authority",
    desc: "Appearing consistently at the top of organic search indexes positions your firm as the definitive voice and leader in your sector.",
    icon: Award,
  },
  {
    title: "Customer Trust",
    desc: "High-end consumers naturally trust organic search results over paid ads, building immediate confidence and brand credibility.",
    icon: UserCheck,
  },
  {
    title: "Business Growth",
    desc: "Sustained, data-backed optimization drives consistent web traffic, enabling your company to scale its customer acquisition pipeline.",
    icon: TrendingUp,
  },
  {
    title: "Long-Term Results",
    desc: "Unlike paid advertising campaigns that stop yielding results when budgets dry up, organic SEO assets compound in value over time.",
    icon: Clock,
  },
];

export function WhySeoMattersDubai() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
              <BarChart3 className="w-3.5 h-3.5 text-accent-secondary" />
              SEO Influence
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Why SEO Matters For <br className="hidden sm:inline" />
              Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Dubai Business.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              Local SEO and technical optimization ensure your business is immediately visible to Dubai companies ready to convert.
            </p>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent-secondary/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-secondary group-hover:bg-accent-secondary/10 group-hover:border-accent-secondary/30 transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
