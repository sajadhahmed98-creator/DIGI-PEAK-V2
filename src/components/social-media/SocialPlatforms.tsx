"use client";

import { motion } from "framer-motion";
import { Camera, Users, Briefcase, Video, MonitorPlay, MessageCircle, Pin, Search, Palette, Layout } from "lucide-react";

const platforms = [
  { name: "Instagram", icon: Camera, color: "text-pink-500" },
  { name: "Facebook", icon: Users, color: "text-[#1877F2]" },
  { name: "LinkedIn", icon: Briefcase, color: "text-[#0A66C2]" },
  { name: "TikTok", icon: Video, color: "text-white" },
  { name: "YouTube", icon: MonitorPlay, color: "text-[#FF0000]" },
  { name: "Threads", icon: MessageCircle, color: "text-white" },
  { name: "Pinterest", icon: Pin, color: "text-[#E60023]" },
  { name: "Google Business", icon: Search, color: "text-[#4285F4]" },
  { name: "Meta Suite", icon: Users, color: "text-blue-400" },
  { name: "Canva", icon: Palette, color: "text-cyan-400" },
  { name: "Adobe CC", icon: Layout, color: "text-red-500" },
];

export function SocialPlatforms() {
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
            Platform & Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We operate across all major social networks utilizing enterprise-grade creation and scheduling tools.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] transition-all group cursor-default"
            >
              <platform.icon className={`h-5 w-5 ${platform.color} group-hover:scale-110 transition-transform`} />
              <span className="font-semibold text-sm text-foreground/90">{platform.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
