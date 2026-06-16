"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Globe, Target, UserCheck, Award, TrendingUp, BarChart3, Clock } from "lucide-react";

const pillars = [
  {
    title: "High-Competition Digital Space",
    desc: "Saturated with local and international players, the UAE market demands highly targeted digital marketing campaigns to build visibility.",
    icon: Globe,
  },
  {
    title: "Regional Search Footprint",
    desc: "Dominating local search intent helps your organization connect with high-value clients across Abu Dhabi, Dubai, and Sharjah.",
    icon: MapPin,
  },
  {
    title: "Google Search Placements",
    desc: "Securing organic Google placements for competitive local keywords builds lasting search market authority across GCC regions.",
    icon: Search,
  },
  {
    title: "Lead Acquisition Funnels",
    desc: "Linking paid campaigns and SEO routes to fast, responsive Next.js page layouts secures a high volume of qualified inquiries.",
    icon: Target,
  },
  {
    title: "Brand Trust & Credibility",
    desc: "Appearing at the top of search listings and social channels positions your firm as the definitive voice in your sector.",
    icon: Award,
  },
  {
    title: "High Consumer Trust",
    desc: "Middle Eastern consumer demographics naturally trust organic rankings, building immediate confidence and customer conversion rates.",
    icon: UserCheck,
  },
  {
    title: "Dynamic Business Growth",
    desc: "Continuous technical search optimizations and CRO deliver steady web traffic, driving down customer acquisition costs.",
    icon: TrendingUp,
  },
  {
    title: "Compounding Brand Assets",
    desc: "Unlike paid search ads that stop yielding results when budgets run dry, custom organic search setups build compounding value.",
    icon: Clock,
  },
];

export function WhyMarketingMattersUae() {
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
              Why Digital Marketing Matters <br className="hidden sm:inline" />
              For Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                UAE Company.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              Local SEO and technical optimization ensure your business is immediately visible to UAE companies ready to convert.
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
