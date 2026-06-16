"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Cpu, Shield, Zap, Globe, Layers, Settings, Terminal, Box, Play, Compass, GitBranch, Bot } from "lucide-react";

const tools = [
  { name: "AWS", icon: Server, color: "text-[#FF9900]" },
  { name: "Google Cloud", icon: Cloud, color: "text-[#4285F4]" },
  { name: "Microsoft Azure", icon: Cpu, color: "text-[#0089D6]" },
  { name: "Cloudflare", icon: Shield, color: "text-[#F38020]" },
  { name: "LiteSpeed", icon: Zap, color: "text-[#5BB212]" },
  { name: "WordPress", icon: Globe, color: "text-[#21759B]" },
  { name: "cPanel", icon: Layers, color: "text-[#FF6C2C]" },
  { name: "Plesk", icon: Settings, color: "text-[#00A6F4]" },
  { name: "Linux Servers", icon: Terminal, color: "text-[#FFD133]" },
  { name: "Docker", icon: Box, color: "text-[#2496ED]" },
  { name: "Vercel", icon: Play, color: "text-white" },
  { name: "DigitalOcean", icon: Compass, color: "text-[#0080FF]" },
  { name: "GitHub", icon: GitBranch, color: "text-white" },
  { name: "OpenAI", icon: Bot, color: "text-[#10a37f]" },
];

export function HostingTechStack() {
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
            Infrastructure & Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Tech Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We partner with industry-leading cloud hosts, CDN gateways, version control repositories, and server configurations control dashboards.
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
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all group cursor-default"
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
