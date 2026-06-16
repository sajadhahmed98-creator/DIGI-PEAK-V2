"use client";

import { motion } from "framer-motion";
import { Home, Coffee, Utensils, ShoppingBag, Heart, Building, Briefcase, Building2, Rocket, ShoppingCart, Coins, Landmark, Hotel, Star, Laptop } from "lucide-react";

const industries = [
  { name: "Real Estate", icon: Home, desc: "Luxury penthouses, residential compounds, off-plan portal assets, and commercial real estate platforms." },
  { name: "Hospitality & Tourism", icon: Coffee, desc: "High-end destination management offices, desert safari agencies, and global travel operators." },
  { name: "Hotels & Luxury Resorts", icon: Hotel, desc: "Five-star corporate booking engines, premium beach clubs, and concierge portals." },
  { name: "Fine Dining & Restaurants", icon: Utensils, desc: "High-concept gastronomy hubs, boutique bistros, and custom digital menu setups." },
  { name: "Luxury & Retail Brands", icon: Star, desc: "Elite visual directories, retail showrooms, and premium design catalogues." },
  { name: "FMCG & Trade", icon: ShoppingBag, desc: "Multinational distributor directories and digital B2B trade platforms." },
  { name: "Medical & Wellness", icon: Heart, desc: "Premium specialist clinics, aesthetic dental centers, and wellness platforms." },
  { name: "Construction & Development", icon: Building, desc: "Civil engineering portfolios, building developers, and infrastructure groups." },
  { name: "Professional Services", icon: Briefcase, desc: "Legal counsel advisories, DIFC wealth offices, and corporate advisory teams." },
  { name: "Holding Conglomerates", icon: Building2, desc: "Multisector family offices, group holding pages, and corporate profiles." },
  { name: "Tech & SaaS Startups", icon: Rocket, desc: "High-growth software engines, server applications, and AI startup portals." },
  { name: "Software Development", icon: Laptop, desc: "SaaS websites, API developer panels, and technical system platforms." },
  { name: "E-Commerce", icon: ShoppingCart, desc: "High-speed headless Next.js digital stores, WooCommerce setups, and Shopify stores." },
  { name: "Wealth Management", icon: Coins, desc: "Investment houses, assets brokerages, and offshore banking systems." },
];

export function UaeIndustries() {
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
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              <Landmark className="w-3.5 h-3.5" />
              Sectors Served
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Industries We Support <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Across The UAE.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              Designing tailored digital architectures to satisfy localized industry benchmarks in UAE markets.
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
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-secondary group-hover:bg-accent-secondary/10 group-hover:border-accent-secondary/30 transition-all duration-300 mb-6">
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
