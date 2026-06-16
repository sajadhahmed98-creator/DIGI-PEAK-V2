"use client";

import { motion } from "framer-motion";
import { Search, LineChart, TrendingUp, Award, Sparkles, FileText, Cpu, Bot, CheckCircle, Layers, Globe, Activity } from "lucide-react";

const tools = [
  { name: "Google Search Console", icon: Search, color: "text-[#4285F4]" },
  { name: "Google Analytics", icon: LineChart, color: "text-[#E37400]" },
  { name: "Ahrefs", icon: TrendingUp, color: "text-[#008CD1]" },
  { name: "SEMrush", icon: Award, color: "text-[#FF640D]" },
  { name: "Surfer SEO", icon: Sparkles, color: "text-[#673AB7]" },
  { name: "Frase", icon: FileText, color: "text-[#00C48C]" },
  { name: "ChatGPT", icon: Cpu, color: "text-white" },
  { name: "Claude", icon: Bot, color: "text-[#D97757]" },
  { name: "Grammarly", icon: CheckCircle, color: "text-[#11A860]" },
  { name: "Notion", icon: Layers, color: "text-white" },
  { name: "WordPress", icon: Globe, color: "text-[#21759B]" },
  { name: "Google Trends", icon: Activity, color: "text-[#4285F4]" },
];

export function ContentTechStack() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 border-b border-white/5 bg-black">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
            Editorial & SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500">Tech Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We utilize industry-leading semantic keyword research, copywriting auditing, search console tracking, and AI-assisted generation tools.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all group cursor-default"
            >
              <tool.icon className={`h-5 w-5 ${tool.color} group-hover:scale-110 transition-transform`} />
              <span className="font-semibold text-sm text-foreground/90 text-white">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
