"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Target, PenTool, Zap, Video, Rocket, RefreshCcw, TrendingUp, BarChart3 } from "lucide-react";

const processSteps = [
  { id: "01", title: "Discovery", icon: Search },
  { id: "02", title: "Market Research", icon: MapPin },
  { id: "03", title: "Audience Targeting", icon: Target },
  { id: "04", title: "Strategy Planning", icon: PenTool },
  { id: "05", title: "Campaign Setup", icon: Zap },
  { id: "06", title: "Creative Production", icon: Video },
  { id: "07", title: "Launch", icon: Rocket },
  { id: "08", title: "Optimization", icon: RefreshCcw },
  { id: "09", title: "Scaling", icon: TrendingUp },
  { id: "10", title: "Reporting", icon: BarChart3 },
];

export function MarketingProcess() {
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
              Our Campaign <span className="text-gradient-primary">Process.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A military-grade 10-step framework designed to eliminate ad waste and maximize return on investment.
            </p>
          </motion.div>
        </div>

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
              <div className="glass p-6 rounded-3xl border border-white/10 h-full hover:border-orange-500/40 transition-colors group flex flex-col items-center text-center">
                <div className="text-3xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors font-heading mb-4">
                  {step.id}
                </div>
                <div className="h-12 w-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 transition-colors mb-4">
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
