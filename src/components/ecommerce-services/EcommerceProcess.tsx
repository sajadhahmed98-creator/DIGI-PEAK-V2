"use client";

import { motion } from "framer-motion";
import { Search, Compass, PenTool, Layout, Code2, Box, Bug, Rocket, TrendingUp, BarChart3 } from "lucide-react";

const processSteps = [
  { id: "01", title: "Discovery", icon: Search },
  { id: "02", title: "Research", icon: Compass },
  { id: "03", title: "Architecture", icon: PenTool },
  { id: "04", title: "Design", icon: Layout },
  { id: "05", title: "Development", icon: Code2 },
  { id: "06", title: "Product Setup", icon: Box },
  { id: "07", title: "Testing", icon: Bug },
  { id: "08", title: "Launch", icon: Rocket },
  { id: "09", title: "Optimization", icon: TrendingUp },
  { id: "10", title: "Scaling", icon: BarChart3 },
];

export function EcommerceProcess() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Our E-Commerce <span className="text-gradient-secondary">Process.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A 10-step engineering framework designed to eliminate friction and launch a high-converting digital storefront.
            </p>
          </motion.div>
        </div>

        {/* Horizontal scrollable timeline on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-10 hide-scrollbar md:grid md:grid-cols-5 md:gap-6 lg:gap-8 md:overflow-visible">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="shrink-0 w-64 md:w-auto relative"
            >
              <div className="glass p-6 rounded-3xl border border-white/10 h-full hover:border-emerald-500/40 transition-colors group flex flex-col items-center text-center">
                <div className="text-3xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors font-heading mb-4">
                  {step.id}
                </div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors mb-4">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground">{step.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
