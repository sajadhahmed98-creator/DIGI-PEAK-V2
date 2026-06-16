"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, CheckSquare, Rocket, TrendingUp } from "lucide-react";

const processSteps = [
  { id: "01", title: "Discovery & Planning", icon: Search },
  { id: "02", title: "UX/UI Design", icon: PenTool },
  { id: "03", title: "App Development", icon: Code },
  { id: "04", title: "Testing & QA", icon: CheckSquare },
  { id: "05", title: "Launch & Deployment", icon: Rocket },
  { id: "06", title: "Growth & Maintenance", icon: TrendingUp },
];

export function MobileProcess() {
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
              App Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Process.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Our structured 6-step lifecycle ensures secure, clean-code delivery from conceptual strategy to app store deployment.
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
              <div className="glass p-6 rounded-3xl border border-white/10 h-full hover:border-indigo-500/40 transition-colors group flex flex-col items-center text-center">
                <div className="text-3xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors font-heading mb-4">
                  {step.id}
                </div>
                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors mb-4">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-xs lg:text-sm text-foreground text-white leading-tight">{step.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
