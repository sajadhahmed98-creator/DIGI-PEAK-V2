"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Globe, Target, UserCheck, Award, TrendingUp, BarChart3 } from "lucide-react";

const pillars = [
  {
    title: "Local Search Visibility",
    desc: "Ensure your brand dominates local search results in Doha. With structured map packs and local SEO directories, you become the direct choice for clients actively searching in the city.",
    icon: MapPin,
  },
  {
    title: "Google Rankings",
    desc: "Achieve top organic placements for competitive GCC keywords. We engineer high-authority content maps, clean internal linking structures, and white-hat citation builds.",
    icon: Search,
  },
  {
    title: "Brand Discovery",
    desc: "Capture users at the discovery phase of their search query. By positioning your business for educational and commercial searches, you establish initial industry authority.",
    icon: Globe,
  },
  {
    title: "Lead Generation",
    desc: "Transform organic search clicks into structured proposals. We connect high-intent buyer keywords to custom landing pages optimized for maximum GCC lead generation.",
    icon: Target,
  },
  {
    title: "Customer Acquisition",
    desc: "Lower your client acquisition cost (CAC) over time. Unlike paid campaigns that stop when budgets dry up, organic SEO creates a permanent stream of inbound business pipelines.",
    icon: UserCheck,
  },
  {
    title: "Competitive Advantage",
    desc: "Outrank competitors who rely on bloated traditional marketing or simple social campaigns. Dominating Doha's organic search result indexes positions your firm as the market leader.",
    icon: Award,
  },
  {
    title: "Long-Term Growth",
    desc: "Establish permanent domain authority. Through clean code optimization, mobile speed enhancements, and technical updates, your search footprint compounds in value annually.",
    icon: TrendingUp,
  },
];

export function WhySeoMattersDoha() {
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
                Doha Business.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              Local SEO and technical optimization ensure your business is immediately visible to Doha companies ready to convert.
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
