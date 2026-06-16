"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const crmProjects = [
  {
    client: "Luxury Real Estate",
    type: "Real Estate CRM Automation",
    metrics: [
      { label: "Time Saved", value: "35 hrs/wk" },
      { label: "Revenue Growth", value: "+44% Deals" },
      { label: "Lead Growth", value: "+180% Leads" },
      { label: "Efficiency", value: "+60% Speed" },
    ],
  },
  {
    client: "Healthcare Clinics",
    type: "Appointment Automation",
    metrics: [
      { label: "Time Saved", value: "24 hrs/wk" },
      { label: "Revenue Growth", value: "+30% Bookings" },
      { label: "Lead Growth", value: "Zero No-Shows" },
      { label: "Efficiency", value: "+75% Automated" },
    ],
  },
  {
    client: "B2B SaaS Enterprise",
    type: "Lead Gen Automation",
    metrics: [
      { label: "Time Saved", value: "40 hrs/wk" },
      { label: "Revenue Growth", value: "+54% Upsell" },
      { label: "Lead Growth", value: "+210% Leads" },
      { label: "Efficiency", value: "Instant Triage" },
    ],
  },
  {
    client: "Financial Advisory",
    type: "Sales Pipeline Optimization",
    metrics: [
      { label: "Time Saved", value: "18 hrs/wk" },
      { label: "Revenue Growth", value: "+38% Margins" },
      { label: "Lead Growth", value: "98% Retained" },
      { label: "Efficiency", value: "Clean Records" },
    ],
  },
  {
    client: "Global Logistics",
    type: "Support Desk Automation",
    metrics: [
      { label: "Time Saved", value: "50 hrs/wk" },
      { label: "Revenue Growth", value: "-45% Overhead" },
      { label: "Lead Growth", value: "85% Deflected" },
      { label: "Efficiency", value: "24/7 Operations" },
    ],
  },
  {
    client: "E-Commerce Logistics",
    type: "E-Commerce Workflow Setup",
    metrics: [
      { label: "Time Saved", value: "30 hrs/wk" },
      { label: "Revenue Growth", value: "+48% Orders" },
      { label: "Lead Growth", value: "+125% Retargeted" },
      { label: "Efficiency", value: "100% Synced" },
    ],
  }
];

export function CRMCaseStudies() {
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
              Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500">Case Studies.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real-world systems delivering compounding operational productivity and lead-to-revenue efficiency.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {crmProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Graphic - Workflow Nodes */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <path d="M 20 20 L 75 75 L 130 130" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
                  <circle cx="20" cy="20" r="10" fill="#10b981" />
                  <circle cx="75" cy="75" r="6" fill="#14b8a6" />
                  <circle cx="130" cy="130" r="12" fill="#a855f7" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">{project.client}</h3>
                </div>
                <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <div className="text-[9px] text-muted uppercase tracking-wider">{metric.label}</div>
                    <div className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition-colors">{metric.value}</div>
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
