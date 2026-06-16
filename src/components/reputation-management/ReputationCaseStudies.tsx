"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const reputationProjects = [
  {
    client: "Specialized Medical Clinic",
    type: "Medical Review System",
    metrics: [
      { label: "Review Growth", value: "+420% Reviews" },
      { label: "Rating Improvement", value: "4.9★ Average" },
      { label: "Lead Growth", value: "+145% Bookings" },
      { label: "Trust Score Increase", value: "High Trust" },
    ],
  },
  {
    client: "Elite Restaurant Group",
    type: "Gastronomy Listings Audit",
    metrics: [
      { label: "Review Growth", value: "+320% Reviews" },
      { label: "Rating Improvement", value: "4.8★ Average" },
      { label: "Lead Growth", value: "+56% Table Bookings" },
      { label: "Trust Score Increase", value: "Popular Choice" },
    ],
  },
  {
    client: "Real Estate Developers",
    type: "Developer Citations & GBP",
    metrics: [
      { label: "Review Growth", value: "+240% Reviews" },
      { label: "Rating Improvement", value: "4.9★ Average" },
      { label: "Lead Growth", value: "+88% Leads" },
      { label: "Trust Score Increase", value: "+85% Trust Lift" },
    ],
  },
  {
    client: "Luxury Auto Dealership",
    type: "Luxury Brand Sentiment Repair",
    metrics: [
      { label: "Review Growth", value: "+150% Mentions" },
      { label: "Rating Improvement", value: "4.7★ Average" },
      { label: "Lead Growth", value: "+60% CTR Sales" },
      { label: "Trust Score Increase", value: "Luxe Shielded" },
    ],
  },
  {
    client: "Multi-Location Retail Franchise",
    type: "Multi-Listing Franchise ORM",
    metrics: [
      { label: "Review Growth", value: "120+ Listings synced" },
      { label: "Rating Improvement", value: "4.8★ Average" },
      { label: "Lead Growth", value: "4.5x Store Visits" },
      { label: "Trust Score Increase", value: "Clean Corporate" },
    ],
  },
  {
    client: "B2B Logistics Provider",
    type: "SMB Citation Optimization",
    metrics: [
      { label: "Review Growth", value: "+300% Reviews" },
      { label: "Rating Improvement", value: "4.9★ Average" },
      { label: "Lead Growth", value: "+210% Calls" },
      { label: "Trust Score Increase", value: "Top Local Map" },
    ],
  }
];

export function ReputationCaseStudies() {
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
              Reputation <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">Case Studies.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Attributed search listings traffic lifts, star rating multipliers, and positive sentiment gains generated across our enterprise partners.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reputationProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Graphic - Star Rating */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <rect x="20" y="20" width="110" height="110" rx="8" fill="none" stroke="#f59e0b" strokeWidth="2" />
                  <polygon points="75,40 85,60 107,63 91,78 95,100 75,89 55,100 59,78 43,63 65,60" fill="none" stroke="#10b981" strokeWidth="2" />
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
