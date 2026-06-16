"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const webProjects = [
  {
    client: "Luxury Real Estate",
    type: "Corporate Website",
    metrics: [
      { label: "Load Speed", value: "-60%" },
      { label: "Lead Capture", value: "+210%" },
      { label: "Bounce Rate", value: "-45%" },
    ],
  },
  {
    client: "National Healthcare",
    type: "Booking Portal",
    metrics: [
      { label: "Mobile Conversions", value: "+340%" },
      { label: "Online Bookings", value: "+185%" },
      { label: "UX Score", value: "98/100" },
    ],
  },
  {
    client: "Global Tech Retailer",
    type: "Headless E-Commerce",
    metrics: [
      { label: "Revenue (YOY)", value: "+$4.2M" },
      { label: "Checkout Drop-off", value: "-30%" },
      { label: "Cart Value", value: "+28%" },
    ],
  },
  {
    client: "Enterprise Construction",
    type: "B2B Lead Generation",
    metrics: [
      { label: "B2B Leads", value: "+450%" },
      { label: "Organic Traffic", value: "+120%" },
      { label: "Cost Per Lead", value: "-65%" },
    ],
  }
];

export function WebPortfolio() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 bg-black relative border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-gradient-secondary">Transformations.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Before and after metrics from our most complex web design and development overhauls.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8">
          {webProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Web Background Graphic */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="200" height="150" viewBox="0 0 200 150">
                  <rect x="50" y="50" width="100" height="60" rx="4" fill="none" stroke="#22d3ee" strokeWidth="4" />
                  <circle cx="65" cy="60" r="3" fill="#22d3ee" />
                  <circle cx="75" cy="60" r="3" fill="#22d3ee" />
                  <circle cx="85" cy="60" r="3" fill="#22d3ee" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-2xl font-bold text-white">{project.client}</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="text-xl md:text-2xl font-extrabold text-[#25D366] mb-1">{metric.value}</div>
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
