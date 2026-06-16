"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, LayoutTemplate, BookOpen, Building2, RefreshCw, Box, Share2 } from "lucide-react";

const brandingServices = [
  { title: "Brand Strategy", desc: "Deep market research, competitor analysis, positioning, and brand architecture.", icon: Compass },
  { title: "Logo Design", desc: "Premium, timeless logo design, icon systems, and comprehensive logo usage guidelines.", icon: PenTool },
  { title: "Visual Identity", desc: "Complete visual frameworks including cohesive color palettes and typography systems.", icon: LayoutTemplate },
  { title: "Brand Guidelines", desc: "Detailed brand manuals, usage standards, and robust design system documentation.", icon: BookOpen },
  { title: "Corporate Branding", desc: "High-end company profiles, business documents, presentations, and corporate materials.", icon: Building2 },
  { title: "Rebranding", desc: "Strategic brand refreshes, modernization, identity evolution, and market repositioning.", icon: RefreshCw },
  { title: "Packaging Design", desc: "Premium product packaging, retail branding, and custom label design.", icon: Box },
  { title: "Social Branding", desc: "Cohesive social templates, campaign assets, content systems, and social identity.", icon: Share2 },
];

export function BrandingServicesGrid() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 bg-black border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">Branding Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We provide end-to-end creative services, ensuring your brand message is cohesive and commanding across every possible touchpoint.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-violet-500/40 transition-colors group flex flex-col"
            >
              <div className="shrink-0 h-10 w-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:bg-violet-500/20 transition-all duration-300 mb-5">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base mb-2 text-foreground group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-grow">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
