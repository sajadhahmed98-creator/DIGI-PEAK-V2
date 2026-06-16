"use client";

import { motion } from "framer-motion";
import { Search, Users, Layers, Edit3, Cpu, CheckCircle, Rocket, Sliders, BarChart, TrendingUp } from "lucide-react";

const processSteps = [
  { id: "01", title: "Discovery", icon: Search },
  { id: "02", title: "Audience Research", icon: Users },
  { id: "03", title: "Campaign Strategy", icon: Layers },
  { id: "04", title: "Email Design", icon: Edit3 },
  { id: "05", title: "Automation Setup", icon: Cpu },
  { id: "06", title: "Testing", icon: CheckCircle },
  { id: "07", title: "Launch", icon: Rocket },
  { id: "08", title: "Optimization", icon: Sliders },
  { id: "09", title: "Reporting", icon: BarChart },
  { id: "10", title: "Scaling", icon: TrendingUp },
];

export function EmailProcess() {
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
              Our Campaign <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Process.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A comprehensive 10-step automation framework that guarantees perfect inbox deliverability, active listing health, and scalable conversions.
            </p>
          </motion.div>
        </div>

        <div className="flex overflow-x-auto pb-10 hide-scrollbar md:grid md:grid-cols-5 lg:grid-cols-10 gap-3 lg:gap-4 md:overflow-visible">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="shrink-0 w-44 md:w-auto relative"
            >
              <div className="glass p-5 rounded-3xl border border-white/10 h-full hover:border-indigo-500/40 transition-colors group flex flex-col items-center text-center">
                <div className="text-2xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors font-heading mb-3">
                  {step.id}
                </div>
                <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors mb-3">
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
