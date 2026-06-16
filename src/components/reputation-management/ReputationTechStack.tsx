"use client";

import { motion } from "framer-motion";
import { MapPin, Star, CheckCircle, Eye, MessageSquare, LineChart, Shield, Bell, Cpu, Zap, Bot, Settings } from "lucide-react";

const tools = [
  { name: "Google Business Profile", icon: MapPin, color: "text-[#4285F4]" },
  { name: "Google Reviews", icon: Star, color: "text-[#FFE01B]" },
  { name: "Trustpilot", icon: CheckCircle, color: "text-[#00B67A]" },
  { name: "Birdeye", icon: Eye, color: "text-[#00A1FF]" },
  { name: "Podium", icon: MessageSquare, color: "text-[#15E7B2]" },
  { name: "Google Analytics", icon: LineChart, color: "text-[#FF8800]" },
  { name: "Brand24", icon: Shield, color: "text-[#FF3B30]" },
  { name: "Mention", icon: Bell, color: "text-[#8A2BE2]" },
  { name: "HubSpot", icon: Cpu, color: "text-[#FF7A59]" },
  { name: "Zapier", icon: Zap, color: "text-[#FF4A00]" },
  { name: "OpenAI", icon: Bot, color: "text-white" },
  { name: "Review Platforms", icon: Settings, color: "text-[#CCCCCC]" },
];

export function ReputationTechStack() {
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
            Trust & Reputation <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">Tech Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We integrate with top-tier review providers, sentiment listening APIs, and automated outreach webhooks to secure positive user signals.
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
