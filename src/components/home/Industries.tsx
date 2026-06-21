"use client";

import { motion } from "framer-motion";
import { HeartPulse, Building2, HardHat, ShoppingBag, Briefcase, ShoppingCart } from "lucide-react";

const industries = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Real Estate", icon: Building2 },
  { name: "Construction", icon: HardHat },
  { name: "Retail", icon: ShoppingBag },
  { name: "Corporate", icon: Briefcase },
  { name: "E-Commerce", icon: ShoppingCart },
];

export function Industries() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Industries <span className="text-gradient-primary">We Serve.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From emerging startups to global enterprises, we provide specialist digital marketing solutions and AI-powered growth strategies across London, Dubai, Sydney, and Singapore.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-accent-primary/30 group-hover:text-accent-primary transition-colors">
                <industry.icon className="h-6 w-6 text-foreground group-hover:text-accent-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-foreground tracking-wide">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
