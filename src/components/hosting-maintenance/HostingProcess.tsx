"use client";

import { motion } from "framer-motion";
import { Search, Server, Shield, Zap, Bell, Database, Sliders, MessageSquare, FileText } from "lucide-react";

const processSteps = [
  { id: "01", title: "Infrastructure Audit", icon: Search },
  { id: "02", title: "Hosting Review", icon: Server },
  { id: "03", title: "Security Assessment", icon: Shield },
  { id: "04", title: "Optimization Setup", icon: Zap },
  { id: "05", title: "Monitoring Deployment", icon: Bell },
  { id: "06", title: "Backup Config", icon: Database },
  { id: "07", title: "Performance Tuning", icon: Sliders },
  { id: "08", title: "Continuous Support", icon: MessageSquare },
  { id: "09", title: "Reporting & Maintenance", icon: FileText },
];

export function HostingProcess() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Our Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Process.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A comprehensive 9-step hosting audit, security deployment, and server tuning framework that guarantees zero downtime.
            </p>
          </motion.div>
        </div>

        <div className="flex overflow-x-auto pb-10 hide-scrollbar md:grid md:grid-cols-9 md:gap-3 lg:gap-4 md:overflow-visible">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="shrink-0 w-44 md:w-auto relative"
            >
              <div className="glass p-5 rounded-3xl border border-white/10 h-full hover:border-cyan-500/40 transition-colors group flex flex-col items-center text-center">
                <div className="text-2xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors font-heading mb-3">
                  {step.id}
                </div>
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors mb-3">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-[11px] lg:text-xs text-foreground text-white leading-tight">{step.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
