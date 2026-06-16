"use client";

import { motion } from "framer-motion";
import { Search, Camera, Users, Video, Mail, Database, BarChart, Tag } from "lucide-react";

const techStack = [
  { name: "Google Ads", icon: Search, color: "text-[#4285F4]" },
  { name: "Google Analytics 4", icon: BarChart, color: "text-yellow-500" },
  { name: "Google Tag Manager", icon: Tag, color: "text-blue-400" },
  { name: "Meta Ads", icon: Camera, color: "text-[#0668E1]" },
  { name: "LinkedIn Ads", icon: Users, color: "text-[#0077b5]" },
  { name: "TikTok Ads", icon: Video, color: "text-white" },
  { name: "YouTube Ads", icon: Video, color: "text-[#FF0000]" },
  { name: "HubSpot", icon: Database, color: "text-[#ff7a59]" },
  { name: "Mailchimp", icon: Mail, color: "text-[#FFE01B]" },
  { name: "Klaviyo", icon: Mail, color: "text-[#00D632]" },
  { name: "Looker Studio", icon: BarChart, color: "text-blue-500" },
];

export function MarketingTechStack() {
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
            Marketing <span className="text-gradient-primary">Technology Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We utilize enterprise-grade tracking and automation software to ensure absolute data precision and automated scaling.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all group cursor-default"
            >
              <tech.icon className={`h-5 w-5 ${tech.color} group-hover:scale-110 transition-transform`} />
              <span className="font-semibold text-sm text-foreground/90">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
