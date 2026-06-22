"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldCheck, Zap, Laptop, BarChart3, LineChart, Globe } from "lucide-react";

const drivers = [
  {
    title: "Vision 2030 Opportunities",
    desc: "The Kingdom's comprehensive economic transformation generates high growth across retail, tourism, trade, and financial systems.",
    icon: TrendingUp,
  },
  {
    title: "Saudi Digital Mandate",
    desc: "Organizations align their setups with strict governmental digital-first guidelines, deploying server-side Next.js sites.",
    icon: Laptop,
  },
  {
    title: "Startup & Innovation Surge",
    desc: "Supported by venture funds and incubation zones, Saudi Arabia has become a leading regional hub for new enterprises.",
    icon: Zap,
  },
  {
    title: "Bespoke Automation",
    desc: "Saudi companies capture market opportunities by linking headless website structures, CRM pipelines, and payment options.",
    icon: Users,
  },
  {
    title: "GCC Competitiveness",
    desc: "Outranking competitors in organic indexes requires premium branding layouts, fast pages, and custom JSON-LD schemas.",
    icon: ShieldCheck,
  },
  {
    title: "Borderless Execution",
    desc: "We coordinate projects remotely via digital tools (Slack, WhatsApp, Zoom), delivering top talent without physical overhead costs.",
    icon: Globe,
  },
  {
    title: "Search Traffic Acquisition",
    desc: "Securing top placements for local queries is the primary lever for securing consistent, high-value corporate inquiries.",
    icon: LineChart,
  },
  {
    title: "Brand Resonance & Value",
    desc: "Consumer segments in Saudi Arabia demand visual brand suites, vector logos, and localized messaging formats.",
    icon: BarChart3,
  },
];

export function SaudiBusiness() {
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
              KSA Business Landscape
            </span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Supporting Economic Expansion Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Saudi Arabia.
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
              Saudi Arabia represents the largest market in the GCC, driven by the historic transformation guidelines of Vision 2030. As enterprises modernize, constructing a premium, speed-optimized digital footprint is essential to capture high-value target audiences.
            </p>
            <p>
              Digipeak functions as a specialist remote digital partner, constructing corporate web design applications, search engine campaign architectures, and automation networks from our global headquarters in Sri Lanka.
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
