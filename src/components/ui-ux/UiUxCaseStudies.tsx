"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const uiuxProjects = [
  {
    client: "E-Commerce Enterprise",
    type: "UX Checkout Redesign",
    metrics: [
      { label: "Conversion Growth", value: "+38.5%" },
      { label: "Cart Abandonment", value: "-42%" },
      { label: "Checkout Duration", value: "-90s" },
    ],
  },
  {
    client: "Real Estate Global",
    type: "Property Portal UX",
    metrics: [
      { label: "Search Engagement", value: "+145%" },
      { label: "Lead Form Complete", value: "+54%" },
      { label: "Bounce Rate", value: "-28%" },
    ],
  },
  {
    client: "Fintech SaaS Platform",
    type: "Dashboard System Design",
    metrics: [
      { label: "Task Execution", value: "2.8x Faster" },
      { label: "Active User Retention", value: "+62%" },
      { label: "System Sync", value: "Real-Time" },
    ],
  },
  {
    client: "Telehealth Network",
    type: "Patient Portal App UX",
    metrics: [
      { label: "Onboarding Friction", value: "Eliminated" },
      { label: "Patient Booking", value: "+88%" },
      { label: "User Rating", value: "4.9/5.0" },
    ],
  },
  {
    client: "Luxury Auto Group",
    type: "Corporate Storytelling UI",
    metrics: [
      { label: "Session Duration", value: "+210%" },
      { label: "Interactive Views", value: "+180%" },
      { label: "Digital Inquiries", value: "+45%" },
    ],
  },
  {
    client: "AI Copilot Workspace",
    type: "Generative Platform Canvas",
    metrics: [
      { label: "Prompt Engagement", value: "+125%" },
      { label: "First-Time Success", value: "+75%" },
      { label: "System Load Speed", value: "Instant" },
    ],
  }
];

export function UiUxCaseStudies() {
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
              Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">Case Studies.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real-world digital products and high-converting interfaces designed for massive market growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {uiuxProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-rose-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Graphic - Design Anchor Curve */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <path d="M 10,130 C 50,50 100,50 140,10" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4,4" />
                  <rect x="5" y="125" width="10" height="10" fill="#f43f5e" />
                  <rect x="135" y="5" width="10" height="10" fill="#a855f7" />
                  <circle cx="75" cy="75" r="4" fill="#f43f5e" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-[10px] font-bold text-rose-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">{project.client}</h3>
                </div>
                <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-rose-400/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="text-[10px] text-muted uppercase tracking-wider">{metric.label}</div>
                    <div className="text-base font-extrabold text-white group-hover:text-rose-400 transition-colors">{metric.value}</div>
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
