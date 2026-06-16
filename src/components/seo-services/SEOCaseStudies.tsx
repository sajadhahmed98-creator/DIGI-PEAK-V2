"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const seoCases = [
  {
    client: "Enterprise E-Commerce",
    industry: "Retail / Fashion",
    region: "UAE & Saudi Arabia",
    metrics: [
      { label: "Organic Traffic", value: "+312%" },
      { label: "Non-Branded Keywords", value: "+450%" },
      { label: "Revenue from SEO", value: "$2.4M" },
    ],
  },
  {
    client: "B2B SaaS Platform",
    industry: "Technology",
    region: "Singapore & Australia",
    metrics: [
      { label: "Organic Traffic", value: "+185%" },
      { label: "Lead Volume", value: "+220%" },
      { label: "Cost Per Lead", value: "-65%" },
    ],
  },
];

export function SEOCaseStudies() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 bg-black relative border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Search <span className="text-gradient-primary">Dominance.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real metrics from real SEO campaigns. We engineer growth that directly impacts the bottom line.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8">
          {seoCases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-accent-primary/50 transition-colors group relative overflow-hidden"
            >
              {/* Abstract Chart Background */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="200" height="150" viewBox="0 0 200 150">
                  <path d="M0,150 L0,100 Q50,80 100,60 T200,20 L200,150 Z" fill="#D946EF" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-xs font-bold text-accent-secondary uppercase tracking-wider mb-2">{study.industry} | {study.region}</div>
                  <h3 className="font-heading text-2xl font-bold text-white">{study.client}</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-white/10 pt-6 relative z-10">
                {study.metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-extrabold text-[#25D366] mb-1">{metric.value}</div>
                    <div className="text-xs text-muted uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
