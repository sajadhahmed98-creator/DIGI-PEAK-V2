"use client";

import { motion } from "framer-motion";
import { MousePointerClick, RefreshCw, ShoppingCart, Target } from "lucide-react";

const croTechniques = [
  { title: "Cart Recovery", desc: "Automated SMS and Email sequences to rescue abandoned checkouts and instantly boost revenue.", icon: RefreshCw },
  { title: "Upselling Systems", desc: "Intelligent, dynamic product recommendations post-purchase to maximize Average Order Value (AOV).", icon: ShoppingCart },
  { title: "A/B Testing", desc: "Data-driven multivariate testing on product pages to find the highest converting layouts.", icon: MousePointerClick },
  { title: "Sales Funnel Design", desc: "Removing friction from the user journey to turn passive browsers into active buyers seamlessly.", icon: Target },
];

export function ConversionOptimization() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 border-b border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Conversion Rate <span className="text-gradient-secondary">Optimization.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Traffic is meaningless if it doesn't convert. We engineer psychological triggers and frictionless UI to maximize the revenue from every single visitor.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {croTechniques.map((technique, index) => (
            <motion.div
              key={technique.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-colors group text-center flex flex-col items-center"
            >
              <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-300 mb-6">
                <technique.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{technique.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{technique.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
