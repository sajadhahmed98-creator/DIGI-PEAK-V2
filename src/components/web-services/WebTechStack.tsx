"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, ShoppingCart, Layout, Bot } from "lucide-react";

const techStack = [
  { name: "Next.js", icon: Layout, color: "text-white" },
  { name: "React", icon: Code2, color: "text-cyan-400" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "PHP", icon: Database, color: "text-indigo-400" },
  { name: "WordPress", icon: Layout, color: "text-blue-500" },
  { name: "Shopify", icon: ShoppingCart, color: "text-green-400" },
  { name: "WooCommerce", icon: ShoppingCart, color: "text-purple-500" },
  { name: "AWS", icon: Cloud, color: "text-orange-400" },
  { name: "Vercel", icon: Cloud, color: "text-white" },
  { name: "Cloudflare", icon: Cloud, color: "text-orange-500" },
  { name: "OpenAI", icon: Bot, color: "text-emerald-500" },
];

export function WebTechStack() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 border-b border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Modern <span className="text-gradient-secondary">Technology Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We build on top of industry-leading, highly scalable cloud infrastructure to ensure your website is fast, secure, and future-proof.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all group"
            >
              <tech.icon className={`h-5 w-5 ${tech.color} group-hover:scale-110 transition-transform`} />
              <span className="font-semibold text-sm text-foreground/90">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
