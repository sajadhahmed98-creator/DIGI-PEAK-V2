"use client";

import { motion } from "framer-motion";
import { Search, Stethoscope, Compass, Settings2, BarChart4, TrendingUp } from "lucide-react";

const processSteps = [
  { id: "01", title: "Discovery", desc: "We analyze your business goals, target audience, and current market positioning to establish a baseline.", icon: Search },
  { id: "02", title: "SEO Audit", desc: "A comprehensive technical, content, and backlink audit to identify all existing roadblocks and opportunities.", icon: Stethoscope },
  { id: "03", title: "Strategy", desc: "Developing a tailored, multi-phased SEO roadmap prioritizing high-impact, revenue-driving initiatives.", icon: Compass },
  { id: "04", title: "Implementation", desc: "Executing technical fixes, content clustering, and on-page optimizations across your digital architecture.", icon: Settings2 },
  { id: "05", title: "Optimization", desc: "Continuous A/B testing, SERP monitoring, and UX refinements to maximize click-through and conversion rates.", icon: BarChart4 },
  { id: "06", title: "Growth", desc: "Aggressive link acquisition, digital PR, and sustained content expansion to achieve market dominance.", icon: TrendingUp },
];

export function SEOProcess() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 bg-white/[0.01] border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Our Proven <span className="text-gradient-primary">SEO Methodology.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We don't guess. We deploy a systematic, data-driven 6-step process engineered for absolute search engine dominance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connector Line (visible on large screens) */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-px bg-white/10 z-0" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="glass p-8 rounded-3xl border border-white/10 h-full hover:border-accent-primary/40 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-secondary group-hover:text-accent-primary group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors font-heading">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
