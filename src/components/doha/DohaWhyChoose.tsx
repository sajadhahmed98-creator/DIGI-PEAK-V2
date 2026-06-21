"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const pillars = [
  {
    title: "Business-Focused Strategies",
    desc: "We focus on key business objectives—leads, traffic value, and client conversions—instead of hollow vanity metrics.",
  },
  {
    title: "Modern Design Standards",
    desc: "We design premium Next.js and Tailwind layouts built strictly for sub-second speeds, visual elegance, and perfect responsive behavior.",
  },
  {
    title: "Data-Driven Marketing",
    desc: "Our search engine strategies, keyword models, and marketing funnels are designed around comprehensive market data audits.",
  },
  {
    title: "Scalable Growth Systems",
    desc: "We build modular digital assets, database configurations, and content architectures that support ongoing corporate expansions.",
  },
  {
    title: "Creative Excellence",
    desc: "From editorial layouts to cohesive digital copywriting, our work is refined to ensure your brand stands out in the GCC.",
  },
  {
    title: "Technology Integration",
    desc: "We connect headless platforms, CRM systems, payment gateways, and automations into one unified backend ecosystem.",
  },
  {
    title: "Transparent Communication",
    desc: "We supply 24/7 Looker Studio dashboards, clear milestone boards, and direct communications to keep collaboration honest.",
  },
  {
    title: "Long-Term Support",
    desc: "We operate as a committed extensions of your team, continually monitoring runtime errors, speed scores, and SEO algorithm changes.",
  },
];

export function DohaWhyChoose() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-black relative">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/35 bg-accent-secondary/[0.015] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
              <Handshake className="w-3.5 h-3.5" />
              Partnership
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white animate-fade-in">
              Why Doha Businesses Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Digipeak.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              Providing enterprise digital frameworks, absolute analytics transparency, and high-performance design to Qatari leaders.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
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
                <div className="font-mono text-xs font-bold text-accent-secondary mb-4 block select-none">
                  / 0{index + 1}
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
