"use client";

import { motion } from "framer-motion";
import {
  Globe,
  TrendingUp,
  MapPin,
  Megaphone,
  Percent,
  MessageSquare,
  Palette,
  ShoppingBag,
  Sparkles,
  Cpu,
  Target,
  Wrench,
  Search,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Web Design & Development" },
  { icon: TrendingUp, title: "SEO Services" },
  { icon: MapPin, title: "Local SEO" },
  { icon: Megaphone, title: "Digital Marketing" },
  { icon: Percent, title: "Google Ads Management" },
  { icon: MessageSquare, title: "Social Media Marketing" },
  { icon: Palette, title: "Branding & Identity Design" },
  { icon: ShoppingBag, title: "E-Commerce Development" },
  { icon: Sparkles, title: "AI Solutions" },
  { icon: Cpu, title: "Business Automation" },
  { icon: Target, title: "Lead Generation Systems" },
  { icon: Wrench, title: "Website Maintenance" },
  { icon: Search, title: "Conversion Optimization" },
];

export function ResellerServices() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Reseller Catalog</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Services You Can Resell
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            You can resell any of our high-demand B2B capabilities, backed by our professional execution team.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03] px-5 py-4 transition-all duration-300 shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <s.icon className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-white leading-snug">{s.title}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
