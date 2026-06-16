"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const hostingProjects = [
  {
    client: "E-Commerce Platform Qatar",
    type: "Managed Cloud Cluster",
    metrics: [
      { label: "Uptime Rating", value: "99.99% Guaranteed" },
      { label: "Page Load Speed", value: "0.8s Average" },
      { label: "Conversion Lift", value: "+45% Checkout Rate" },
      { label: "Bandwidth Used", value: "Auto-Scaled" },
    ],
  },
  {
    client: "Financial Services Riyadh",
    type: "PCI-DSS Cloud Security",
    metrics: [
      { label: "Security Breaches", value: "0 Breaches" },
      { label: "Compliance Score", value: "100% Audit Pass" },
      { label: "Incident Response", value: "<5 min Response" },
      { label: "Backup Integrity", value: "Hourly Backups" },
    ],
  },
  {
    client: "Hospitality Portal Dubai",
    type: "Scaling & Load Balancing",
    metrics: [
      { label: "Peak Traffic", value: "+350% User Spikes" },
      { label: "Server Cost", value: "-40% Overhead" },
      { label: "Response Speed", value: "0.4s Time-to-First-Byte" },
      { label: "Failover Speed", value: "Instant Failover" },
    ],
  },
  {
    client: "Logistics SaaS Singapore",
    type: "Kubernetes Orchestration",
    metrics: [
      { label: "Auto-Scaling Active", value: "Scale to 50+ Nodes" },
      { label: "API Latency", value: "<0.6s Latency" },
      { label: "Uptime SLA", value: "99.99% Verified" },
      { label: "Redundancy Level", value: "Multi-Zone Sync" },
    ],
  },
  {
    client: "Educational Portal Auckland",
    type: "WordPress Core Support",
    metrics: [
      { label: "Plugin Conflicts", value: "0 Conflicts" },
      { label: "Vulnerabilities Resolved", value: "100% Patch Rate" },
      { label: "Update Schedule", value: "Weekly Patches" },
      { label: "SLA Resolution", value: "24/7 SLA" },
    ],
  },
  {
    client: "Real Estate Platform Colombo",
    type: "CDN & Cache Optimization",
    metrics: [
      { label: "Cache Hit Rate", value: "95% Cache Hit" },
      { label: "Page Load Speed", value: "1.2s Average" },
      { label: "Bandwidth Saving", value: "-70% Data Costs" },
      { label: "Global Routing Nodes", value: "120+ Edge Nodes" },
    ],
  },
];

export function HostingCaseStudies() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 bg-white/[0.01] relative border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 font-bold uppercase text-xs tracking-widest font-mono font-bold">PROVEN PERFORMANCES & SLA TRACK RECORDS</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Cloud Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">Case Studies.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real-world server scaling results, speed optimization metrics, and zero-downtime database replication logs managed by our operations team.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {hostingProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-colors group relative overflow-hidden flex flex-col"
            >
              {/* Abstract Graphic - Server Nodes representation */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <rect x="20" y="20" width="110" height="110" rx="8" fill="none" stroke="#06b6d4" strokeWidth="2" />
                  <rect x="35" y="35" width="80" height="25" rx="4" fill="none" stroke="#10b981" strokeWidth="2" />
                  <circle cx="50" cy="47.5" r="4" fill="#06b6d4" />
                  <circle cx="65" cy="47.5" r="4" fill="#10b981" />
                  <rect x="35" y="70" width="80" height="25" rx="4" fill="none" stroke="#10b981" strokeWidth="2" />
                  <circle cx="50" cy="82.5" r="4" fill="#06b6d4" />
                  <circle cx="65" cy="82.5" r="4" fill="#10b981" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-2">{project.type}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">{project.client}</h3>
                </div>
                <div className="shrink-0 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                  <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6 relative z-10 mt-auto">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <div className="text-[9px] text-muted uppercase tracking-wider">{metric.label}</div>
                    <div className="text-sm font-extrabold text-white group-hover:text-cyan-400 transition-colors">{metric.value}</div>
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
