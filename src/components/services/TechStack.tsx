"use client";

import { motion } from "framer-motion";
import { Search, Globe, ShoppingBag, LayoutTemplate, Bot, Database, BarChart, Server, Cloud } from "lucide-react";

// Mapping tech names to representative icons since we don't have SVGs
const technologies = [
  { name: "Google", icon: Search, color: "text-blue-500" },
  { name: "Meta", icon: Globe, color: "text-blue-600" },
  { name: "Shopify", icon: ShoppingBag, color: "text-green-500" },
  { name: "WordPress", icon: LayoutTemplate, color: "text-blue-400" },
  { name: "OpenAI", icon: Bot, color: "text-emerald-500" },
  { name: "HubSpot", icon: Database, color: "text-orange-500" },
  { name: "Analytics", icon: BarChart, color: "text-yellow-500" },
  { name: "Vercel", icon: Server, color: "text-white" },
  { name: "AWS", icon: Cloud, color: "text-orange-400" },
];

export function TechStack() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 overflow-hidden bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Enterprise <span className="text-gradient-secondary">Technology.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We partner with and build upon the world's most powerful platforms to ensure your digital ecosystem is fast, secure, and infinitely scalable.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all group flex flex-col items-center justify-center gap-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <tech.icon className={`w-12 h-12 ${tech.color} transform group-hover:scale-110 transition-transform duration-500`} />
              <span className="font-bold text-foreground tracking-wide">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
