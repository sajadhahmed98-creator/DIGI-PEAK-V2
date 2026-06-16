"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const appProjects = [
  {
    client: "Retail Brands Group",
    type: "E-Commerce Shopping App",
    metrics: [
      { label: "Conversion Rate", value: "4.2% (+120%)" },
      { label: "Average Cart Value", value: "+38%" },
      { label: "Active Mobile Sales", value: "65% of Total" },
    ],
  },
  {
    client: "Elite Properties",
    type: "Real Estate Geolocator",
    metrics: [
      { label: "Map Lead Forms", value: "+185% Leads" },
      { label: "Property Views", value: "2.4M Views" },
      { label: "Agent Response", value: "< 2 minutes" },
    ],
  },
  {
    client: "HealthCare Plus",
    type: "Telehealth Portal App",
    metrics: [
      { label: "Onboard Drop-Off", value: "-62%" },
      { label: "Doctor Bookings", value: "+140% Increase" },
      { label: "Patient Care Score", value: "4.9/5.0 Stars" },
    ],
  },
  {
    client: "Cognitive AI",
    type: "Voice AI Assistant App",
    metrics: [
      { label: "Daily Active Users", value: "240k DAU" },
      { label: "Task Complete Speed", value: "-75% Duration" },
      { label: "System Uptime", value: "99.99%" },
    ],
  },
  {
    client: "Express Eats",
    type: "On-Demand Delivery App",
    metrics: [
      { label: "Delivery Duration", value: "-12 minutes" },
      { label: "Active Drivers", value: "5,000+ Drivers" },
      { label: "Order Volume", value: "+310%" },
    ],
  },
  {
    client: "Apex Enterprise",
    type: "Employee CRM Portal",
    metrics: [
      { label: "Agent Productivity", value: "+54% Output" },
      { label: "Reporting Delays", value: "Eliminated" },
      { label: "Manual Paperwork", value: "0% Paper" },
    ],
  }
];

export function MobileCaseStudies() {
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
              App <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Case Studies.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Discover real-world mobile applications deployed across App Store & Google Play generating serious business returns.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {appProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Graphic - Phone Layout Outline */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <rect x="35" y="10" width="80" height="130" rx="10" fill="none" stroke="#6366f1" strokeWidth="2" />
                  <line x1="60" y1="130" x2="90" y2="130" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="75" cy="20" r="2" fill="#22d3ee" />
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

              <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="text-[10px] text-muted uppercase tracking-wider">{metric.label}</div>
                    <div className="text-base font-extrabold text-white group-hover:text-indigo-400 transition-colors">{metric.value}</div>
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
