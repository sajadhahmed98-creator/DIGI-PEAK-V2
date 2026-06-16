"use client";

import { motion } from "framer-motion";
import { Search, Compass, PenTool, Layout, Code2, Bug, Rocket, TrendingUp } from "lucide-react";

const processSteps = [
  { id: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and enterprise requirements.", icon: Search },
  { id: "02", title: "Research", desc: "Analyzing competitors and mapping out the optimal site architecture for maximum SEO.", icon: Compass },
  { id: "03", title: "Wireframing", desc: "Creating low-fidelity blueprints to establish user flow and conversion pathways.", icon: PenTool },
  { id: "04", title: "UI/UX Design", desc: "Crafting premium, high-fidelity interfaces that establish immediate trust.", icon: Layout },
  { id: "05", title: "Development", desc: "Engineering fast, secure, and scalable headless architectures.", icon: Code2 },
  { id: "06", title: "Testing", desc: "Rigorous QA across all devices, browsers, and load scenarios.", icon: Bug },
  { id: "07", title: "Launch", desc: "Seamless deployment with zero downtime and perfect SEO migration.", icon: Rocket },
  { id: "08", title: "Optimization", desc: "Continuous monitoring and A/B testing to maximize conversion rates.", icon: TrendingUp },
];

export function WebProcess() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 border-y border-white/5 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Our Web Design <span className="text-gradient-secondary">Process.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              An 8-step engineering framework designed to eliminate guesswork and guarantee a high-performance digital product.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-px bg-white/10 z-0" />
          <div className="hidden lg:block absolute top-[280px] left-10 right-10 h-px bg-white/10 z-0" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="glass p-6 rounded-3xl border border-white/10 h-full hover:border-cyan-400/40 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-blue-400 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <span className="text-3xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors font-heading">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
