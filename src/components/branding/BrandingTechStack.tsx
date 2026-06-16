"use client";

import { motion } from "framer-motion";
import { PenTool, Image as ImageIcon, Layout, Video, BookOpen, Wand2, MessageSquare, Sparkles, FileText, Palette } from "lucide-react";

const tools = [
  { name: "Adobe Illustrator", icon: PenTool, color: "text-[#FF9A00]" },
  { name: "Photoshop", icon: ImageIcon, color: "text-[#31A8FF]" },
  { name: "Figma", icon: Layout, color: "text-[#F24E1E]" },
  { name: "After Effects", icon: Video, color: "text-[#9999FF]" },
  { name: "InDesign", icon: BookOpen, color: "text-[#FF3366]" },
  { name: "Midjourney", icon: Wand2, color: "text-white" },
  { name: "ChatGPT", icon: MessageSquare, color: "text-[#10A37F]" },
  { name: "Adobe Firefly", icon: Sparkles, color: "text-[#FF0000]" },
  { name: "Notion", icon: FileText, color: "text-white" },
  { name: "Canva Pro", icon: Palette, color: "text-[#00C4CC]" },
];

export function BrandingTechStack() {
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
            Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">Technology.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We utilize the industry's most advanced design software and AI tools to deliver pixel-perfect brand assets.
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
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all group cursor-default"
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
