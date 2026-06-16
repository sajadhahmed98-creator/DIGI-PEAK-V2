"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, Cpu, TrendingUp, Send, PenTool, Layers, Zap, Share2, LineChart, Bot, Settings } from "lucide-react";

const tools = [
  { name: "Mailchimp", icon: Mail, color: "text-[#FFE01B]" },
  { name: "Klaviyo", icon: Sparkles, color: "text-[#15E7B2]" },
  { name: "HubSpot", icon: Cpu, color: "text-[#FF7A59]" },
  { name: "ActiveCampaign", icon: TrendingUp, color: "text-[#356AE6]" },
  { name: "Brevo", icon: Send, color: "text-[#00A1FF]" },
  { name: "ConvertKit", icon: PenTool, color: "text-[#E63946]" },
  { name: "Mailerlite", icon: Layers, color: "text-[#00CD7E]" },
  { name: "Zapier", icon: Zap, color: "text-[#FF4A00]" },
  { name: "Make", icon: Share2, color: "text-[#8A2BE2]" },
  { name: "Google Analytics", icon: LineChart, color: "text-[#FF8800]" },
  { name: "OpenAI", icon: Bot, color: "text-white" },
  { name: "CRM Integrations", icon: Settings, color: "text-[#CCCCCC]" },
];

export function EmailTechStack() {
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
            Marketing Automation & Email <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Tech Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We integrate industry-leading email providers, automation connectors, and AI generation tools to engineering campaigns.
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
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all group cursor-default"
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
