"use client";

import { motion } from "framer-motion";
import { Camera, Briefcase, MonitorPlay, Video, PenTool, Layout, Presentation, MessageCircle, Hash, BarChart3, Users, Image as ImageIcon } from "lucide-react";

const socialServices = [
  { title: "Instagram Management", desc: "Grid curation, Reels strategy, and story execution.", icon: Camera },
  { title: "LinkedIn Management", desc: "B2B thought leadership and professional networking.", icon: Briefcase },
  { title: "TikTok Management", desc: "Viral short-form video strategies for Gen Z/Millennial reach.", icon: Video },
  { title: "YouTube Management", desc: "Long-form content optimization and channel growth.", icon: MonitorPlay },
  { title: "Facebook Management", desc: "Community building and targeted audience engagement.", icon: Users },
  { title: "Content Strategy", desc: "Data-driven editorial calendars and campaign planning.", icon: PenTool },
  { title: "Graphic Design", desc: "Premium bespoke visuals that align perfectly with brand identity.", icon: Layout },
  { title: "Video Content", desc: "High-retention video production for all social formats.", icon: Presentation },
  { title: "Content Creation", desc: "End-to-end production of photography, copy, and visual assets.", icon: ImageIcon },
  { title: "Community Management", desc: "Active daily engagement, DM responses, and comment moderation.", icon: MessageCircle },
  { title: "Hashtag Strategy", desc: "Algorithmic optimization for maximum organic discovery.", icon: Hash },
  { title: "Performance Reporting", desc: "Transparent analytics tracking reach, engagement, and ROI.", icon: BarChart3 },
];

export function SocialServicesGrid() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Comprehensive <span className="text-gradient-primary">Social Services.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We provide full-spectrum management across every major platform, ensuring your brand message is cohesive, engaging, and algorithmic-friendly.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-colors group flex flex-col"
            >
              <div className="shrink-0 h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:bg-purple-500/20 transition-all duration-300 mb-5">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base mb-2 text-foreground group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-grow">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
