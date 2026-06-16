"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const brandingProjects = [
  {
    client: "Luxury Brand",
    type: "Rebranding & Packaging",
    metrics: [
      { label: "Brand Premium", value: "+45%" },
      { label: "Market Share", value: "+12%" },
      { label: "Perceived Value", value: "High" },
    ],
  },
  {
    client: "Healthcare Brand",
    type: "Corporate Identity",
    metrics: [
      { label: "Patient Trust", value: "+85%" },
      { label: "Local Recognition", value: "#1" },
      { label: "Brand Equity", value: "+120%" },
    ],
  },
  {
    client: "Corporate Brand",
    type: "B2B Positioning",
    metrics: [
      { label: "Deal Size", value: "+35%" },
      { label: "Trust Metrics", value: "+210%" },
      { label: "Lead Quality", value: "Enterprise" },
    ],
  },
  {
    client: "Technology Startup",
    type: "Visual Identity & UI",
    metrics: [
      { label: "Series A Funding", value: "Secured" },
      { label: "User Acquisition", value: "+300%" },
      { label: "Media Mentions", value: "+50" },
    ],
  },
  {
    client: "E-Commerce Brand",
    type: "Brand Strategy",
    metrics: [
      { label: "Conversion Rate", value: "+2.4x" },
      { label: "Customer Loyalty", value: "+45%" },
      { label: "Social Following", value: "+150K" },
    ],
  },
  {
    client: "Restaurant Brand",
    type: "Identity & Signage",
    metrics: [
      { label: "Foot Traffic", value: "+85%" },
      { label: "Social Shares", value: "Viral" },
      { label: "Revenue Growth", value: "+110%" },
    ],
  }
];

export function BrandingCaseStudies() {
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
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">Case Studies.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Strategic visual identities that transformed businesses into industry leaders.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {brandingProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-violet-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Graphic - Hexagon for Branding structure */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <polygon points="75,20 125,45 125,105 75,130 25,105 25,45" fill="none" stroke="#8b5cf6" strokeWidth="4" />
                  <polygon points="75,40 108,56 108,94 75,110 42,94 42,56" fill="none" stroke="#8b5cf6" strokeWidth="2" />
                  <circle cx="75" cy="75" r="5" fill="#8b5cf6" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">{project.client}</h3>
                </div>
                <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="text-xs text-muted uppercase tracking-wider">{metric.label}</div>
                    <div className="text-lg font-extrabold text-white group-hover:text-violet-400 transition-colors">{metric.value}</div>
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
