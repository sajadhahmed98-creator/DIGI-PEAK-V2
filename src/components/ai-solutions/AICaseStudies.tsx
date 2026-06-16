"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const aiProjects = [
  {
    client: "Healthcare Provider",
    type: "AI Triage & Booking",
    metrics: [
      { label: "Admin Hours Saved", value: "2,400/yr" },
      { label: "Booking Speed", value: "-85%" },
      { label: "Patient Satisfaction", value: "99%" },
    ],
  },
  {
    client: "Real Estate Agency",
    type: "Lead Qualification Bot",
    metrics: [
      { label: "Leads Qualified", value: "24/7" },
      { label: "Response Time", value: "< 5s" },
      { label: "Sales Conversion", value: "+34%" },
    ],
  },
  {
    client: "E-Commerce Enterprise",
    type: "AI Support Assistant",
    metrics: [
      { label: "Tickets Deflected", value: "72%" },
      { label: "Support Cost", value: "-45%" },
      { label: "Resolution Time", value: "Instant" },
    ],
  },
  {
    client: "Recruitment Firm",
    type: "Resume Parsing & Matching",
    metrics: [
      { label: "Screening Time", value: "-90%" },
      { label: "Placement Rate", value: "+45%" },
      { label: "Human Error", value: "0%" },
    ],
  },
  {
    client: "Marketing Agency",
    type: "Content Generation Engine",
    metrics: [
      { label: "Content Output", value: "10x" },
      { label: "Copywriting Cost", value: "-80%" },
      { label: "SEO Traffic Growth", value: "+210%" },
    ],
  },
  {
    client: "B2B SaaS Company",
    type: "CRM Automation Workflow",
    metrics: [
      { label: "Churn Rate", value: "-22%" },
      { label: "Upsell Revenue", value: "+40%" },
      { label: "Manual Data Entry", value: "Eliminated" },
    ],
  }
];

export function AICaseStudies() {
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
              Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Case Studies.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real-world enterprise systems generating massive operational ROI.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {aiProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Graphic - Neural Node */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <path d="M 20 130 L 130 20" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="20" cy="130" r="8" fill="#22d3ee" />
                  <circle cx="130" cy="20" r="12" fill="#a855f7" />
                  <circle cx="75" cy="75" r="5" fill="#22d3ee" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">{project.client}</h3>
                </div>
                <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="text-xs text-muted uppercase tracking-wider">{metric.label}</div>
                    <div className="text-lg font-extrabold text-white group-hover:text-cyan-400 transition-colors">{metric.value}</div>
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
