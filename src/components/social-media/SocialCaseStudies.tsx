"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const socialProjects = [
  {
    client: "Luxury Restaurant",
    type: "Instagram & TikTok",
    metrics: [
      { label: "Reach Growth", value: "+450%" },
      { label: "Engagement Growth", value: "3.2x" },
      { label: "Revenue Impact", value: "+45%" },
    ],
  },
  {
    client: "Real Estate Developer",
    type: "LinkedIn & Facebook",
    metrics: [
      { label: "Follower Growth", value: "+210%" },
      { label: "Lead Growth", value: "+185%" },
      { label: "Trust Metrics", value: "High" },
    ],
  },
  {
    client: "E-Commerce Store",
    type: "Social Commerce",
    metrics: [
      { label: "Social Sales", value: "+310%" },
      { label: "Reach Growth", value: "1.2M+" },
      { label: "Engagement Rate", value: "18%" },
    ],
  },
  {
    client: "Medical Center",
    type: "Educational Strategy",
    metrics: [
      { label: "Patient Bookings", value: "+85%" },
      { label: "Community Growth", value: "+15K" },
      { label: "Brand Authority", value: "#1" },
    ],
  },
  {
    client: "Corporate Company",
    type: "B2B Positioning",
    metrics: [
      { label: "LinkedIn Impressions", value: "2M+" },
      { label: "Inbound Leads", value: "+120%" },
      { label: "Engagement Rate", value: "14%" },
    ],
  },
  {
    client: "Beauty Brand",
    type: "Influencer & Reels",
    metrics: [
      { label: "Viral Reach", value: "5.5M" },
      { label: "Follower Growth", value: "+45K" },
      { label: "Direct Sales", value: "+210%" },
    ],
  }
];

export function SocialCaseStudies() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 bg-white/[0.01] relative border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Case Studies.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real community growth and revenue impact across diverse industries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {socialProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Target Graphic */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#ec4899" strokeWidth="4" />
                  <circle cx="100" cy="100" r="20" fill="none" stroke="#ec4899" strokeWidth="4" />
                  <circle cx="100" cy="100" r="5" fill="#ec4899" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">{project.client}</h3>
                </div>
                <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-pink-400/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="text-xs text-muted uppercase tracking-wider">{metric.label}</div>
                    <div className="text-lg font-extrabold text-white group-hover:text-pink-400 transition-colors">{metric.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
