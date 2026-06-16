"use client";

import { motion } from "framer-motion";
import {
  Heart, Home, Building, Hotel, Utensils, ShoppingBag,
  ShoppingCart, Briefcase, GraduationCap, Rocket, Building2, Sparkles
} from "lucide-react";

const industries = [
  { name: "Healthcare", icon: Heart },
  { name: "Real Estate", icon: Home },
  { name: "Construction", icon: Building },
  { name: "Hospitality", icon: Hotel },
  { name: "Restaurants", icon: Utensils },
  { name: "Retail", icon: ShoppingBag },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Professional Services", icon: Briefcase },
  { name: "Education", icon: GraduationCap },
  { name: "Startups", icon: Rocket },
  { name: "Corporate Businesses", icon: Building2 },
];

export function QatarIndustries() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-white/[0.01] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Sectors
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Industries We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Support.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              Providing customized digital growth strategies and tech implementations across diverse corporate domains.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {industries.map((ind, index) => {
            const IconComponent = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-accent-primary/30 transition-all duration-300 group flex flex-col items-center justify-center text-center min-h-[140px]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-accent-primary group-hover:scale-105 group-hover:border-accent-primary/40 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-sm md:text-base leading-tight">
                  {ind.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
