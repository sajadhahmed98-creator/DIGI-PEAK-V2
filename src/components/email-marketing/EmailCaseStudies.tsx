"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const emailProjects = [
  {
    client: "E-Commerce Luxury Retail",
    type: "Klaviyo Lifecycle System",
    metrics: [
      { label: "Revenue Growth", value: "+310% Revenue" },
      { label: "Open Rate Growth", value: "42.5% Open Rate" },
      { label: "Conversion Growth", value: "+56% Orders" },
      { label: "Customer Retention", value: "+48% Repeat LTV" },
    ],
  },
  {
    client: "B2B SaaS Corporation",
    type: "HubSpot Automation Flow",
    metrics: [
      { label: "Revenue Growth", value: "240+ New Leads" },
      { label: "Open Rate Growth", value: "48.2% Open Rate" },
      { label: "Conversion Growth", value: "+180% Meetings" },
      { label: "Customer Retention", value: "Enterprise Scale" },
    ],
  },
  {
    client: "Subscription Service",
    type: "Welcome & VIP Nurture",
    metrics: [
      { label: "Revenue Growth", value: "+145% LTV Boost" },
      { label: "Open Rate Growth", value: "52.1% Open Rate" },
      { label: "Conversion Growth", value: "+45% Repeat Buy" },
      { label: "Customer Retention", value: "+65% Retention" },
    ],
  },
  {
    client: "Tech Gadget Brand",
    type: "Promotional Launch Campaign",
    metrics: [
      { label: "Revenue Growth", value: "$1.2M Revenue" },
      { label: "Open Rate Growth", value: "41.8% Open Rate" },
      { label: "Conversion Growth", value: "+32% Orders" },
      { label: "Customer Retention", value: "Sold Out Launch" },
    ],
  },
  {
    client: "Financial Services",
    type: "Complete Lifecycle Setup",
    metrics: [
      { label: "Revenue Growth", value: "3.8x ROI Boost" },
      { label: "Open Rate Growth", value: "46.5% Open Rate" },
      { label: "Conversion Growth", value: "4.5x CTR Leads" },
      { label: "Customer Retention", value: "+52% Repeat" },
    ],
  },
  {
    client: "Global Business Network",
    type: "Newsletter Retention flow",
    metrics: [
      { label: "Revenue Growth", value: "+240% Signups" },
      { label: "Open Rate Growth", value: "55.8% Open Rate" },
      { label: "Conversion Growth", value: "+120% Premium" },
      { label: "Customer Retention", value: "98% Retained" },
    ],
  }
];

export function EmailCaseStudies() {
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
              Lifecycle <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Case Studies.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Attributed campaign revenue growth, open rate multipliers, and lifecycle value optimizations generated across our enterprise automation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {emailProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Graphic - Inbox Notification Envelope */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <rect x="20" y="30" width="110" height="90" rx="8" fill="none" stroke="#6366f1" strokeWidth="2" />
                  <path d="M 20 38 L 75 75 L 130 38" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="75" cy="90" r="5" fill="#a855f7" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">{project.client}</h3>
                </div>
                <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-400/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <div className="text-[9px] text-muted uppercase tracking-wider">{metric.label}</div>
                    <div className="text-sm font-extrabold text-white group-hover:text-indigo-400 transition-colors">{metric.value}</div>
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
