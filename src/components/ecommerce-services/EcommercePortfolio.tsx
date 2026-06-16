"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ecoProjects = [
  {
    client: "Global Fashion Retailer",
    type: "Shopify Plus",
    metrics: [
      { label: "Revenue (YOY)", value: "+$2.8M" },
      { label: "Mobile Conversions", value: "+34%" },
      { label: "Load Speed", value: "-45%" },
    ],
  },
  {
    client: "Luxury Jewelry Brand",
    type: "Headless E-Commerce",
    metrics: [
      { label: "ROAS", value: "+185%" },
      { label: "Average Order", value: "+$420" },
      { label: "Bounce Rate", value: "-60%" },
    ],
  },
  {
    client: "Tech Electronics Store",
    type: "Custom WooCommerce",
    metrics: [
      { label: "Organic Traffic", value: "+210%" },
      { label: "Cart Abandonment", value: "-28%" },
      { label: "Total Sales", value: "3.2x" },
    ],
  },
  {
    client: "B2B Healthcare Products",
    type: "Wholesale Portal",
    metrics: [
      { label: "B2B Orders", value: "+450%" },
      { label: "Processing Time", value: "-75%" },
      { label: "Recurring Revenue", value: "+120%" },
    ],
  }
];

export function EcommercePortfolio() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 bg-white/[0.01] relative border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-gradient-secondary">Stores.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real revenue metrics from our highest-performing e-commerce builds.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8">
          {ecoProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Cart Graphic */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="200" height="150" viewBox="0 0 200 150">
                  <path d="M 20 20 L 50 20 L 80 100 L 160 100 L 180 40 L 60 40" fill="none" stroke="#10b981" strokeWidth="4" />
                  <circle cx="80" cy="120" r="10" fill="#10b981" />
                  <circle cx="150" cy="120" r="10" fill="#10b981" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-2xl font-bold text-white">{project.client}</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="text-xl md:text-2xl font-extrabold text-white group-hover:text-emerald-400 transition-colors mb-1">{metric.value}</div>
                    <div className="text-[10px] md:text-xs text-muted uppercase tracking-wider">{metric.label}</div>
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
