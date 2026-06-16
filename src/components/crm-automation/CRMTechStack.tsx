"use client";

import { motion } from "framer-motion";
import { Layers, Settings, Cloud, Zap, Network, Table, FileText, Cpu, Mail, MessageCircle, MessageSquare, Shuffle, Calendar } from "lucide-react";

const tools = [
  { name: "HubSpot", icon: CheckSquare, color: "text-[#FF7A59]" },
  { name: "Zoho CRM", icon: Settings, color: "text-[#E61F25]" },
  { name: "Salesforce", icon: Cloud, color: "text-[#00A1E0]" },
  { name: "Pipedrive", icon: Layers, color: "text-[#00B464]" },
  { name: "Make", icon: Shuffle, color: "text-[#E12B9A]" },
  { name: "Zapier", icon: Zap, color: "text-[#FF4A00]" },
  { name: "n8n", icon: Network, color: "text-[#FF6E4A]" },
  { name: "Airtable", icon: Table, color: "text-[#18BFFF]" },
  { name: "Monday.com", icon: Calendar, color: "text-[#FF3D57]" },
  { name: "Notion", icon: FileText, color: "text-white" },
  { name: "OpenAI", icon: Cpu, color: "text-white" },
  { name: "Google Workspace", icon: Mail, color: "text-[#EA4335]" },
  { name: "Microsoft 365", icon: Layers, color: "text-[#00A4EF]" },
  { name: "WhatsApp Business API", icon: MessageCircle, color: "text-[#25D366]" },
  { name: "Twilio", icon: MessageSquare, color: "text-[#F22F46]" },
];

import { CheckSquare } from "lucide-react"; // Make sure to import it explicitly

export function CRMTechStack() {
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
            Automation Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500">Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We build and orchestrate seamless pipelines utilizing industry-leading CRMs, workflow builders, database models, and active messaging interfaces.
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
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all group cursor-default"
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
