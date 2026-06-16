"use client";

import { motion } from "framer-motion";
import { Search, Map, Cpu, Code2, Network, Rocket } from "lucide-react";

const processSteps = [
  { id: "01", title: "Discovery & Audit", icon: Search },
  { id: "02", title: "Process Mapping", icon: Map },
  { id: "03", title: "Automation Strategy", icon: Cpu },
  { id: "04", title: "AI Development", icon: Code2 },
  { id: "05", title: "Integration & Testing", icon: Network },
  { id: "06", title: "Launch & Optimization", icon: Rocket },
];

export function AIProcess() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Implementation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Architecture.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A rigorous 6-step deployment methodology ensuring zero disruption to your existing operations during integration.
            </p>
          </motion.div>
        </div>

        <div className="flex overflow-x-auto pb-10 hide-scrollbar md:grid md:grid-cols-6 md:gap-4 lg:gap-6 md:overflow-visible">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="shrink-0 w-56 md:w-auto relative"
            >
              <div className="glass p-6 rounded-3xl border border-white/10 h-full hover:border-cyan-500/40 transition-colors group flex flex-col items-center text-center">
                <div className="text-3xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors font-heading mb-4">
                  {step.id}
                </div>
                <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors mb-4">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm lg:text-base text-foreground">{step.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
