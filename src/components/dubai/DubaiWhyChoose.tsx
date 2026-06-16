"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const pillars = [
  {
    title: "Growth-Focused Strategies",
    desc: "We align search rankings and campaign architectures directly with business metrics—leads, sales volume, and customer acquisition cost.",
  },
  {
    title: "Creative Excellence",
    desc: "From sleek interactive UI elements to cohesive digital copywriting, our work is refined to capture luxury brand appeal.",
  },
  {
    title: "Data-Driven Marketing",
    desc: "Our strategic roadmaps, search maps, and advertising targets are developed from rigorous data audits and competitive landscapes.",
  },
  {
    title: "Premium Design Standards",
    desc: "We construct custom corporate Next.js digital assets designed for sub-second load speeds, high security, and gorgeous visuals.",
  },
  {
    title: "Modern Technology Solutions",
    desc: "We connect headless platforms, CRM systems, automated pipelines, and payment setups into one fast, unified stack.",
  },
  {
    title: "Transparent Communication",
    desc: "We supply real-time Looker Studio reports, collaborative Kanban boards, and direct chat channels to keep projects fully transparent.",
  },
  {
    title: "Scalable Systems",
    desc: "We build modular content models and database structures that adapt effortlessly as your enterprise scales.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "We function as an elite extension of your brand, constantly analyzing site health, SEO updates, and CRO opportunities.",
  },
];

export function DubaiWhyChoose() {
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
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/35 bg-accent-secondary/5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
              <Handshake className="w-3.5 h-3.5" />
              Partnership
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white animate-fade-in">
              Why Dubai Businesses Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Digipeak.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              Providing enterprise technology stacks, analytics transparency, and premium aesthetics to Dubai's industry leaders.
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
