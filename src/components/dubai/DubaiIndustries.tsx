"use client";

import { motion } from "framer-motion";
import { Home, Coffee, Utensils, ShoppingBag, Heart, Building, Briefcase, Building2, Rocket, ShoppingCart, Coins, Landmark, Hotel, Star, Laptop } from "lucide-react";

const industries = [
  { name: "Real Estate", icon: Home, desc: "Downtown Dubai penthouses, Marina listings, and off-plan portal developments." },
  { name: "Hospitality", icon: Coffee, desc: "World-renowned concierge agencies and high-end tourism providers." },
  { name: "Hotels & Resorts", icon: Hotel, desc: "Five-star Palm Jumeirah luxury beach resorts and premium booking channels." },
  { name: "Restaurants", icon: Utensils, desc: "High-concept fine dining spots and luxury culinary experiences." },
  { name: "Luxury Brands", icon: Star, desc: "Premium designer labels, exclusive lifestyle products, and high-end catalogs." },
  { name: "Retail", icon: ShoppingBag, desc: "Shopping mall showrooms and high-conversion omni-channel retail paths." },
  { name: "Healthcare", icon: Heart, desc: "Private specialist clinics, aesthetic centers, and wellness platforms." },
  { name: "Construction", icon: Building, desc: "Commercial skyscraper engineering projects and civil developers." },
  { name: "Professional Services", icon: Briefcase, desc: "Management consultants, corporate legal counsel, and accounting teams." },
  { name: "Corporate Businesses", icon: Building2, desc: "Dynamic family offices, holdings, and multi-sector conglomerates." },
  { name: "Startups", icon: Rocket, desc: "High-growth seed-funded initiatives scale-testing digital frameworks." },
  { name: "Technology Companies", icon: Laptop, desc: "SaaS platforms, custom software providers, and tech developers." },
  { name: "E-Commerce", icon: ShoppingCart, desc: "High-performance Next.js storefronts, WooCommerce setups, and Shopify stores." },
  { name: "Financial Services", icon: Coins, desc: "DIFC investment houses, asset managers, and family wealth management firms." },
];

export function DubaiIndustries() {
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
                Across Dubai.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              We design specialized digital solutions to solve localized challenges for Dubai's primary industry sectors.
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
