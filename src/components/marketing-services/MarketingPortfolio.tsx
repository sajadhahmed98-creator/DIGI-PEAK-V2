"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const marketingProjects = [
  {
    client: "B2B SaaS Platform",
    type: "Google Ads + LinkedIn",
    metrics: [
      { label: "Lead Growth", value: "+312%" },
      { label: "Cost Per Lead", value: "-45%" },
      { label: "Sales Qualified", value: "85%" },
    ],
  },
  {
    client: "E-Commerce Fashion",
    type: "Meta Ads + Performance Max",
    metrics: [
      { label: "ROAS", value: "4.8x" },
      { label: "Revenue (YOY)", value: "+$1.2M" },
      { label: "Customer Acquisition", value: "-22%" },
    ],
  },
  {
    client: "Real Estate Developer",
    type: "Lead Gen Funnel",
    metrics: [
      { label: "Qualified Leads", value: "+450%" },
      { label: "Conversion Rate", value: "12.5%" },
      { label: "Cost Per Booking", value: "-60%" },
    ],
  },
  {
    client: "Healthcare Clinic",
    type: "Local SEO + Google Ads",
    metrics: [
      { label: "Patient Bookings", value: "+210%" },
      { label: "Search Visibility", value: "+350%" },
      { label: "ROI", value: "5.2x" },
    ],
  }
];

export function MarketingPortfolio() {
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
              Featured <span className="text-gradient-primary">Campaigns.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real performance metrics from our highest-converting acquisition funnels.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8">
          {marketingProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Target Graphic */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#f97316" strokeWidth="4" />
                  <circle cx="100" cy="100" r="20" fill="none" stroke="#f97316" strokeWidth="4" />
                  <circle cx="100" cy="100" r="5" fill="#f97316" />
                  <path d="M 100 100 L 20 20" stroke="#f97316" strokeWidth="4" strokeDasharray="5,5" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-2xl font-bold text-white">{project.client}</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-400/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="text-xl md:text-2xl font-extrabold text-white group-hover:text-orange-400 transition-colors mb-1">{metric.value}</div>
                    <div className="text-[10px] md:text-xs text-muted uppercase tracking-wider">{metric.label}</div>
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
