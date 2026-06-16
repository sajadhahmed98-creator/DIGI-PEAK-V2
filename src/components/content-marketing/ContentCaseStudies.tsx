"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const contentProjects = [
  {
    client: "Fintech Startup",
    type: "SEO Content Campaign",
    metrics: [
      { label: "Traffic Growth", value: "+380% Organic" },
      { label: "Keyword Growth", value: "2,400 ranked" },
      { label: "Lead Growth", value: "+145% Leads" },
      { label: "Authority Score", value: "65 (from 24)" },
    ],
  },
  {
    client: "Healthcare Network",
    type: "Medical Blog Campaign",
    metrics: [
      { label: "Traffic Growth", value: "180k monthly" },
      { label: "Keyword Growth", value: "850 keywords" },
      { label: "Lead Growth", value: "+210% Bookings" },
      { label: "Authority Score", value: "High Trust" },
    ],
  },
  {
    client: "Real Estate Global",
    type: "Authority Content Setup",
    metrics: [
      { label: "Traffic Growth", value: "+240% Session" },
      { label: "Keyword Growth", value: "1,200 ranked" },
      { label: "Lead Growth", value: "+88% Complete" },
      { label: "Authority Score", value: "Market Leader" },
    ],
  },
  {
    client: "Consulting Enterprise",
    type: "Thought Leadership",
    metrics: [
      { label: "Traffic Growth", value: "+150% Views" },
      { label: "Keyword Growth", value: "150 B2B keys" },
      { label: "Lead Growth", value: "40+ Retainers" },
      { label: "Authority Score", value: "CEO Positioning" },
    ],
  },
  {
    client: "Luxe E-Commerce",
    type: "E-Commerce Blog Strategy",
    metrics: [
      { label: "Traffic Growth", value: "+310% Organic" },
      { label: "Keyword Growth", value: "3,500 ranked" },
      { label: "Lead Growth", value: "+48% Sales" },
      { label: "Authority Score", value: "SEO comp. assets" },
    ],
  },
  {
    client: "B2B SaaS Portal",
    type: "Lead Gen Resource Hub",
    metrics: [
      { label: "Traffic Growth", value: "+290% session" },
      { label: "Keyword Growth", value: "650 target keys" },
      { label: "Lead Growth", value: "4.5x Downloads" },
      { label: "Authority Score", value: "Top Industry Hub" },
    ],
  }
];

export function ContentCaseStudies() {
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
              Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500">Case Studies.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Compounding organic traffic growth and brand authority engineered across global target markets.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {contentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Graphic - Search Index List */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <rect x="20" y="20" width="110" height="110" rx="8" fill="none" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="40" y1="50" x2="110" y2="50" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                  <line x1="40" y1="80" x2="90" y2="80" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="110" cy="80" r="3" fill="#f43f5e" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">{project.client}</h3>
                </div>
                <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <div className="text-[9px] text-muted uppercase tracking-wider">{metric.label}</div>
                    <div className="text-sm font-extrabold text-white group-hover:text-amber-400 transition-colors">{metric.value}</div>
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
