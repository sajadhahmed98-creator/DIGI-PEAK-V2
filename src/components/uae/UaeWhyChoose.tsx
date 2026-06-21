"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const pillars = [
  {
    title: "Metrics-Driven Methodology",
    desc: "We align all web systems and search index maps directly with your core business outputs—capturing qualified inquiries and scaling sales pipeline velocity.",
  },
  {
    title: "Premium Design Aesthetics",
    desc: "From sleek interactive hover states to modern, high-contrast layouts, our visual interfaces capture the premium quality expected by Middle Eastern audiences.",
  },
  {
    title: "Rigorous Data Diagnostics",
    desc: "We build all marketing funnels and SEO architectures from extensive market search volume audits and meticulous competitor landscape scans.",
  },
  {
    title: "Next.js Core Architecture",
    desc: "We build using modern Next.js server-side framework defaults to deliver sub-second speeds, absolute codebase security, and search engine preference.",
  },
  {
    title: "Full Technology Linkage",
    desc: "We stitch together secure APIs, custom WhatsApp configurations, automated HubSpot/Salesforce CRMs, and payment gateways into one unified web platform.",
  },
  {
    title: "Uncompromising Transparency",
    desc: "We provide regular interactive Looker Studio dashboards, shared task lists, and direct message support to ensure fully transparent project delivery.",
  },
  {
    title: "Scalable Infrastructure",
    desc: "We design component-based architectures and clean content databases that grow with your company, allowing easy upgrades without rebuilds.",
  },
  {
    title: "Long-Term Extension Support",
    desc: "We act as your dedicated remote technology partners, constantly measuring page speed metrics, search engine algorithm shifts, and CRO upgrades.",
  },
];

export function UaeWhyChoose() {
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
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Why UAE Businesses Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Digipeak.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              Delivering high-performance server stacks, absolute pricing transparency, and premium designs to GCC market leaders.
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
