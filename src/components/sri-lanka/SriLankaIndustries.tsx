"use client";

import { motion } from "framer-motion";
import { 
  Building2, HeartPulse, GraduationCap, Utensils, 
  Hotel, ShoppingBag, ShoppingCart, Sparkles, 
  HardHat, Briefcase 
} from "lucide-react";

const industries = [
  { name: "Real Estate Marketing", icon: Building2 },
  { name: "Healthcare Marketing", icon: HeartPulse },
  { name: "Education Marketing", icon: GraduationCap },
  { name: "Restaurant Marketing", icon: Utensils },
  { name: "Hotel Marketing", icon: Hotel },
  { name: "Retail Marketing", icon: ShoppingBag },
  { name: "E-Commerce Marketing", icon: ShoppingCart },
  { name: "Beauty Clinic Marketing", icon: Sparkles },
  { name: "Construction Marketing", icon: HardHat },
  { name: "Professional Services Marketing", icon: Briefcase },
];

export function SriLankaIndustries() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Industries We <span className="text-gradient-primary">Elevate.</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            We partner with leading businesses across diverse sectors in Sri Lanka, delivering tailored digital growth strategies, high-performance web development, and targeted SEO solutions to dominate the local market.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
