"use client";

import { motion } from "framer-motion";
import { Video, Sparkles, Tv, Image, PenTool, Box, Cpu, Play, Share2, Compass, Camera, Film } from "lucide-react";

const tools = [
  { name: "Adobe Premiere Pro", icon: Video, color: "text-[#9999FF]" },
  { name: "After Effects", icon: Sparkles, color: "text-[#D982FF]" },
  { name: "DaVinci Resolve", icon: Tv, color: "text-[#FF8833]" },
  { name: "Photoshop", icon: Image, color: "text-[#31A8FF]" },
  { name: "Illustrator", icon: PenTool, color: "text-[#FF9A00]" },
  { name: "Cinema 4D", icon: Box, color: "text-[#0055FF]" },
  { name: "Blender", icon: Cpu, color: "text-[#E87D0D]" },
  { name: "CapCut Pro", icon: Play, color: "text-[#00F5D4]" },
  { name: "Frame.io", icon: Share2, color: "text-[#FF3B30]" },
  { name: "DJI Drones", icon: Compass, color: "text-[#00D084]" },
  { name: "Sony Cameras", icon: Camera, color: "text-[#CCCCCC]" },
  { name: "Blackmagic Design", icon: Film, color: "text-[#FFD700]" },
];

export function VideoTechStack() {
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
            Production & Motion <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Tech Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We utilize high-end professional equipment and post-production software to guarantee cinema-grade visual clarity and speed.
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
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-all group cursor-default"
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
