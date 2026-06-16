"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const videoProjects = [
  {
    client: "Luxury Watch Brand",
    type: "Commercial Video Campaign",
    metrics: [
      { label: "Views Generated", value: "1.5M+ Views" },
      { label: "Engagement Growth", value: "+300% Likes" },
      { label: "Lead Generation", value: "+88% Leads" },
      { label: "Brand Awareness", value: "+240% Lift" },
    ],
  },
  {
    client: "Premium Real Estate",
    type: "Cinematic Showcase",
    metrics: [
      { label: "Views Generated", value: "450k+ Views" },
      { label: "Engagement Growth", value: "+180% Shares" },
      { label: "Lead Generation", value: "+120% Leads" },
      { label: "Brand Awareness", value: "+150% Lift" },
    ],
  },
  {
    client: "National Health Network",
    type: "Documentary Awareness Film",
    metrics: [
      { label: "Views Generated", value: "1.2M+ Views" },
      { label: "Engagement Growth", value: "+220% Trust" },
      { label: "Lead Generation", value: "90% Retained" },
      { label: "Brand Awareness", value: "98.4% Rating" },
    ],
  },
  {
    client: "Fintech Corporation",
    type: "Corporate Brand Story Film",
    metrics: [
      { label: "Views Generated", value: "200k+ Views" },
      { label: "Engagement Growth", value: "+140% Views" },
      { label: "Lead Generation", value: "+60% Inbound" },
      { label: "Brand Awareness", value: "CEO Authority" },
    ],
  },
  {
    client: "Smart Home Tech",
    type: "Product Launch Campaign",
    metrics: [
      { label: "Views Generated", value: "800k+ Views" },
      { label: "Engagement Growth", value: "+350% CTR" },
      { label: "Lead Generation", value: "+210% Sales" },
      { label: "Brand Awareness", value: "Launch Success" },
    ],
  },
  {
    client: "B2B SaaS Provider",
    type: "Short Form Social Ads",
    metrics: [
      { label: "Views Generated", value: "3.2M+ Views" },
      { label: "Engagement Growth", value: "+500% Reach" },
      { label: "Lead Generation", value: "4.5x CTR Leads" },
      { label: "Brand Awareness", value: "+400% Followers" },
    ],
  }
];

export function VideoCaseStudies() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 bg-white/[0.01] relative border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
              Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Case Studies.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real-world engagement metrics, views scaling, and direct revenue generated through our visual storytelling strategies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videoProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-red-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Graphic - Camera Viewfinder Frame */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <rect x="20" y="20" width="110" height="110" rx="8" fill="none" stroke="#ef4444" strokeWidth="2" />
                  <path d="M 40 40 L 55 40 M 40 40 L 40 55" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 110 40 L 95 40 M 110 40 L 110 55" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 40 110 L 55 110 M 40 110 L 40 95" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 110 110 L 95 110 M 110 110 L 110 95" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="75" cy="75" r="5" fill="#f59e0b" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">{project.client}</h3>
                </div>
                <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-400/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <div className="text-[9px] text-muted uppercase tracking-wider">{metric.label}</div>
                    <div className="text-sm font-extrabold text-white group-hover:text-red-400 transition-colors">{metric.value}</div>
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
