"use client";

import { motion } from "framer-motion";
import { Cpu, Bot, MessageSquare, Box, Link, Workflow, Layers, Database, Table, MessageCircle, Cloud } from "lucide-react";

// Lucide doesn't have exact brand icons for all AI tools, so we use precise generic equivalents that match the brand identity logically.
const tools = [
  { name: "OpenAI", icon: Cpu, color: "text-white" },
  { name: "ChatGPT", icon: Bot, color: "text-[#10A37F]" },
  { name: "Claude", icon: MessageSquare, color: "text-[#D97757]" },
  { name: "Gemini", icon: Cloud, color: "text-[#4285F4]" },
  { name: "Make", icon: Workflow, color: "text-[#9C27B0]" },
  { name: "Zapier", icon: Zap, color: "text-[#FF4A00]" },
  { name: "n8n", icon: Network, color: "text-[#FF6E4A]" },
  { name: "LangChain", icon: Link, color: "text-white" },
  { name: "Pinecone", icon: Layers, color: "text-[#0000FF]" },
  { name: "Supabase", icon: Database, color: "text-[#3ECF8E]" },
  { name: "Airtable", icon: Table, color: "text-[#F1E51E]" },
  { name: "HubSpot", icon: Box, color: "text-[#FF7A59]" },
  { name: "Salesforce", icon: Cloud, color: "text-[#00A1E0]" },
  { name: "Notion AI", icon: FileText, color: "text-white" },
  { name: "WhatsApp API", icon: MessageCircle, color: "text-[#25D366]" },
];

import { Zap, Network, FileText } from "lucide-react"; // Import missing icons

export function AITechStack() {
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
            AI Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We build with the world's most advanced Large Language Models and enterprise orchestration platforms.
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
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all group cursor-default"
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
