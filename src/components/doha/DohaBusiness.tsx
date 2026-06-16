"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldCheck, Zap, Laptop, BarChart3, LineChart, Globe } from "lucide-react";

const drivers = [
  {
    title: "Rapid Business Growth",
    desc: "Doha's market is expanding rapidly, with corporate hubs like West Bay and Msheireb Downtown leading regional commercial scaling.",
    icon: TrendingUp,
  },
  {
    title: "Competitive Industries",
    desc: "From luxury hospitality and high-end real estate to fintech and trading, Doha is home to some of the GCC's most competitive firms.",
    icon: Users,
  },
  {
    title: "Digital Transformation",
    desc: "Companies are shifting away from traditional channels, establishing cloud systems, Next.js web applications, and automated workflows.",
    icon: Laptop,
  },
  {
    title: "Online Customer Acquisition",
    desc: "Winning customer search intent and mapping regional purchase pathways is critical to securing local market dominance in Doha.",
    icon: LineChart,
  },
  {
    title: "Brand Positioning",
    desc: "Establishing luxury brand appeal and corporate trust is essential to stand out in the premium GCC marketplace.",
    icon: ShieldCheck,
  },
  {
    title: "Technology Adoption",
    desc: "Deploying advanced headless tech, API integrations, and customized CRM databases delivers massive operational advantages.",
    icon: Zap,
  },
  {
    title: "Marketing Performance",
    desc: "Optimizing advertising channels with deep analytics, ROAS tracking, and attribution models eliminates empty vanity spend.",
    icon: BarChart3,
  },
  {
    title: "Business Scalability",
    desc: "Building modular content pipelines and clean database workflows ensures digital assets scale smoothly as your company grows.",
    icon: Globe,
  },
];

export function DohaBusiness() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-black relative">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Two-Column Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="text-accent-primary font-mono text-xs font-bold uppercase tracking-widest block mb-4">
              Doha Business Landscape
            </span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Supporting Businesses In One Of The Region's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Most Dynamic Markets.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 text-muted text-base md:text-lg leading-relaxed space-y-4"
          >
            <p>
              Doha has established itself as an absolute powerhouse for innovation, trading, and luxury hospitality in the Middle East. With high-intent local audiences and growing corporate expansions, digital dominance is no longer optional—it is the foundation of market leadership.
            </p>
            <p>
              Digipeak works as a strategic digital growth partner, helping Doha-based organizations construct premium technical platforms, rank for high-value search queries, and automate workflows remotely from our global headquarters in Sri Lanka.
            </p>
          </motion.div>
        </div>

        {/* 8 Growth Drivers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {drivers.map((driver, index) => {
            const Icon = driver.icon;
            return (
              <motion.div
                key={driver.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent-primary/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary/10 group-hover:border-accent-primary/30 transition-all duration-300 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">
                    {driver.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {driver.desc}
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
