"use client";

import { motion } from "framer-motion";
import { Layout, PenTool, Image, Compass, Play, Globe, Target, Flame, Map, FileText, Heart, Zap } from "lucide-react";

const tools = [
  { name: "Figma", icon: Layout, color: "text-[#F24E1E]" },
  { name: "Adobe XD", icon: PenTool, color: "text-[#FF61F6]" },
  { name: "Photoshop", icon: Image, color: "text-[#31A8FF]" },
  { name: "Illustrator", icon: Compass, color: "text-[#FF9A00]" },
  { name: "Framer", icon: Play, color: "text-white" },
  { name: "Webflow", icon: Globe, color: "text-[#4353FF]" },
  { name: "Maze", icon: Target, color: "text-[#00E1C5]" },
  { name: "Hotjar", icon: Flame, color: "text-[#FF4A00]" },
  { name: "Miro", icon: Map, color: "text-[#FFD000]" },
  { name: "Notion", icon: FileText, color: "text-white" },
  { name: "FigJam", icon: Heart, color: "text-[#E60067]" },
  { name: "ProtoPie", icon: Zap, color: "text-[#ED2C5D]" },
];

export function UiUxTechStack() {
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
            Design Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We utilize industry-leading interface design, prototyping, UX research, and user feedback platforms to deliver exceptional products.
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
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-rose-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)] transition-all group cursor-default"
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
