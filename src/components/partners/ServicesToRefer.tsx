"use client";

import { motion } from "framer-motion";
import {
  Globe,
  TrendingUp,
  Megaphone,
  Palette,
  Sparkles,
  ShoppingBag,
  Cpu,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    desc: "Premium, responsive corporate sites and web portals tailored for maximum conversions.",
  },
  {
    icon: TrendingUp,
    title: "SEO Services",
    desc: "Local, national, and international search marketing driving sustainable inbound traffic.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Paid ad management, performance campaigns, and conversions optimization frameworks.",
  },
  {
    icon: Palette,
    title: "Branding & Creative",
    desc: "Corporate identity systems, assets design, guidelines, and visual narratives.",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    desc: "Custom consultative agent implementations, chatbot widgets, and intelligence models.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Development",
    desc: "High-performance storefront setups, Shopify customization, and custom cart builds.",
  },
  {
    icon: Cpu,
    title: "Business Automation",
    desc: "CRM integrations, lead routers, and operational process flows mapping.",
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
    desc: "Landing pages, gated download hubs, and cold outreach automation kits.",
  },
];

export function ServicesToRefer() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Capabilities</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Services You Can Refer
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Refer clients across any of our specialized service offerings, knowing we deliver elite quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03] rounded-2xl p-6 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <s.icon className="w-5 h-5" />
              </div>
              
              <h3 className="font-heading text-base font-bold text-white mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
