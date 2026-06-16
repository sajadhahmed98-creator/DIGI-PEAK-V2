"use client";

import { motion } from "framer-motion";
import { Search, BarChart2, Activity, MapPin, Database, Bot } from "lucide-react";

const seoTools = [
  { name: "Google Analytics", icon: BarChart2, color: "text-amber-500" },
  { name: "Search Console", icon: Search, color: "text-blue-500" },
  { name: "Ahrefs", icon: Activity, color: "text-orange-500" },
  { name: "SEMrush", icon: Database, color: "text-purple-500" },
  { name: "Screaming Frog", icon: Activity, color: "text-green-500" },
  { name: "Google Business", icon: MapPin, color: "text-blue-400" },
  { name: "PageSpeed", icon: Activity, color: "text-green-400" },
  { name: "OpenAI", icon: Bot, color: "text-emerald-500" },
];

export function SEOTechStack() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 border-b border-white/5 bg-black">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Enterprise <span className="text-gradient-secondary">SEO Technology.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We leverage industry-leading software and proprietary AI to extract data, monitor SERPs, and execute technical SEO at scale.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {seoTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-accent-primary/50 transition-colors group"
            >
              <tool.icon className={`h-5 w-5 ${tool.color} group-hover:scale-110 transition-transform`} />
              <span className="font-semibold text-sm text-foreground/90">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
