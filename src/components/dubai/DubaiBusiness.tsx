"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldCheck, Zap, Laptop, BarChart3, LineChart, Globe } from "lucide-react";

const drivers = [
  {
    title: "Unrivaled Innovation Hub",
    desc: "Dubai is the epicentre of frontier technology, pioneering smart city initiatives, blockchain integration, and robust AI governance frameworks.",
    icon: Zap,
  },
  {
    title: "Global Business Environment",
    desc: "Operating at the crossroads of East and West, Dubai offers local and international businesses direct access to global capital and trade routes.",
    icon: Globe,
  },
  {
    title: "Dynamic Entrepreneurship",
    desc: "From ambitious seed-stage startups in Dtec to global conglomerates in DIFC, Dubai's startup free zones foster unmatched commercial growth.",
    icon: Users,
  },
  {
    title: "Accelerated Tech Adoption",
    desc: "Dubai enterprises scale faster by deploying advanced Next.js architectures, headless API engines, and customized CRM database pipelines.",
    icon: Laptop,
  },
  {
    title: "Luxury Brand Differentiation",
    desc: "Capturing high-net-worth GCC customer segments requires premium aesthetic excellence, flawless UI/UX layout design, and elite branding.",
    icon: ShieldCheck,
  },
  {
    title: "Precision Customer Acquisition",
    desc: "Mapping specific search intents and ranking for high-value keywords is essential to establish market authority in the competitive UAE landscape.",
    icon: LineChart,
  },
  {
    title: "Digital Transformation",
    desc: "Modernizing corporate entities involves moving away from legacy infrastructure into clean, automated cloud services and digital platforms.",
    icon: TrendingUp,
  },
  {
    title: "Marketing Performance",
    desc: "Utilizing performance marketing models, granular analytics, and attribution systems eliminates waste and maximizes digital returns.",
    icon: BarChart3,
  },
];

export function DubaiBusiness() {
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
              Dubai Business Landscape
            </span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Supporting Growth In One Of The World's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Most Competitive Hubs.
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
              Dubai has solidified its reputation as a global beacon of innovation, entrepreneurship, and luxury commerce. With businesses competing for visibility across highly saturated international markets, establishing digital dominance is critical to capture premium leads.
            </p>
            <p>
              Digipeak functions as an elite strategic digital partner, working remotely from our headquarters in Sri Lanka to engineer high-converting web applications, manage complex search campaigns, and integrate business automation solutions for companies in Dubai.
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
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary/[0.03] group-hover:border-accent-primary/30 transition-all duration-300 mb-6">
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
