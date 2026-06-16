"use client";

import { motion } from "framer-motion";
import { Server, Settings, Shield, Database, Check } from "lucide-react";

const services = [
  {
    title: "Managed Cloud Hosting",
    icon: Server,
    color: "from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-400",
    description: "Sleek, redundant cloud architecture optimized for speed and high-concurrency scaling.",
    features: [
      "Enterprise Cloud Hosting",
      "VPS & Dedicated Servers",
      "WordPress Specialized Hosting",
      "Custom Server Scaling",
      "CDNs & Cache Configurations",
      "Domain DNS Administrations"
    ]
  },
  {
    title: "Website Maintenance",
    icon: Settings,
    color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-400",
    description: "Hands-off support covering theme, plugin, database, and system core upgrades.",
    features: [
      "CMS & PHP Core Updates",
      "Theme & Plugins Patches",
      "Performance Optimizations",
      "Database Cleanses & Indexes",
      "Visual & Script Bug Fixes",
      "24/7 Priority Support Hooks"
    ]
  },
  {
    title: "Website Security Services",
    icon: Shield,
    color: "from-teal-500/10 to-emerald-500/10 border-teal-500/20 text-teal-400",
    description: "Military-grade shields, firewalls, and active threat sweeps to secure user data.",
    features: [
      "Real-time Threat Monitoring",
      "Enterprise WAF Firewall Setup",
      "Active Malware Cleanups",
      "SSL Certificates Management",
      "Vulnerability Scanning Audits",
      "Vigilant Brute Force Shields"
    ]
  },
  {
    title: "Backup & Recovery Systems",
    icon: Database,
    color: "from-emerald-500/10 to-cyan-500/10 border-emerald-500/20 text-emerald-400",
    description: "Redundant off-site backup storage systems engineered for absolute business continuity.",
    features: [
      "Daily Automated Backups",
      "Off-site Remote Cloud Storage",
      "Disaster Recovery Routines",
      "Data Integrity Checks",
      "Full Restoration Sandboxes",
      "Business Continuity Strategy"
    ]
  }
];

export function HostingServicesGrid() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 bg-black border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Hosting & Support Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We coordinate cloud server optimization, continuous software updates, and active firewall threat mitigation for brands.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`glass p-8 rounded-3xl border bg-gradient-to-br ${service.color.split(' ')[0]} ${service.color.split(' ')[1]} ${service.color.split(' ')[2]} hover:border-cyan-500/40 transition-colors flex flex-col`}
            >
              <div className={`shrink-0 h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${service.color.split(' ')[3]} group-hover:scale-115 transition-all mb-6`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">{service.title}</h3>
              <p className="text-xs text-muted leading-relaxed mb-6 flex-grow">{service.description}</p>
              
              <ul className="space-y-3.5 border-t border-white/5 pt-6 mt-auto">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-xs text-muted">
                    <Check className={`h-4.5 w-4.5 shrink-0 ${service.color.split(' ')[3]}`} />
                    <span className="text-white/80">{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
