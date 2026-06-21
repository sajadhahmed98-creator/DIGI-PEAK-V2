"use client";

import { motion } from "framer-motion";
import { Home, Coffee, Utensils, ShoppingBag, Heart, GraduationCap, Building, Briefcase, Building2, Rocket, ShoppingCart, Coins, Landmark } from "lucide-react";

const industries = [
  { name: "Real Estate", icon: Home, desc: "West Bay skyscrapers & Pearl-Qatar residential listings." },
  { name: "Hospitality", icon: Coffee, desc: "Five-star luxury resorts & premium concierge experiences." },
  { name: "Restaurants", icon: Utensils, desc: "High-end dining rooms & localized delivery brands." },
  { name: "Retail", icon: ShoppingBag, desc: "Premium luxury boutiques & shopping mall showrooms." },
  { name: "Healthcare", icon: Heart, desc: "Private medical practices & local health clinics." },
  { name: "Education", icon: GraduationCap, desc: "Doha international schools & private tutoring centers." },
  { name: "Construction", icon: Building, desc: "Commercial builders & private infrastructure contractors." },
  { name: "Professional Services", icon: Briefcase, desc: "Corporate consulting, legal teams & accounting firms." },
  { name: "Corporate Businesses", icon: Building2, desc: "Holding organizations & large-scale enterprises." },
  { name: "Technology Startups", icon: Rocket, desc: "Fintech founders, SaaS platforms & technology startups." },
  { name: "E-Commerce", icon: ShoppingCart, desc: "Shopify stores & headless digital storefronts." },
  { name: "Financial Services", icon: Coins, desc: "Local investment firms, asset managers & private banks." },
];

export function DohaIndustries() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-black relative">
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              <Landmark className="w-3.5 h-3.5" />
              Sectors Served
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Industries We Support <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Across Doha.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              We design specialized digital solutions to solve localized challenges for Doha's primary industry sectors.
            </p>
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-accent-primary/20 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-secondary group-hover:bg-accent-secondary/[0.03] group-hover:border-accent-secondary/30 transition-all duration-300 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-accent-primary transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {ind.desc}
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
