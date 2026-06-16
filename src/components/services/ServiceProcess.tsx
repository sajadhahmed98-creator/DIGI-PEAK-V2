"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, BarChart3, Maximize } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Audit",
    description: "Deep-dive analysis of your current digital footprint, competitor landscape, and technical SEO architecture.",
    icon: Search,
  },
  {
    num: "02",
    title: "Strategic Blueprint",
    description: "Developing a custom, data-backed strategy mapping out exact technical requirements and conversion pathways.",
    icon: Lightbulb,
  },
  {
    num: "03",
    title: "Flawless Execution",
    description: "Our engineering and creative teams build, deploy, and launch your premium digital assets with precision.",
    icon: Rocket,
  },
  {
    num: "04",
    title: "Optimization & CRO",
    description: "Continuous A/B testing, speed optimization, and performance tweaking based on real-time user data.",
    icon: BarChart3,
  },
  {
    num: "05",
    title: "Global Scaling",
    description: "Expanding your reach into new markets (Dubai, London, Sydney) through aggressive SEO and paid acquisition.",
    icon: Maximize,
  },
];

export function ServiceProcess() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Our Delivery <span className="text-gradient-primary">Methodology.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A proven, 5-step framework designed to eliminate guesswork and guarantee predictable, scalable revenue growth.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-accent-purple/20 via-accent-blue/50 to-accent-blue/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full glass border border-white/20 flex items-center justify-center mb-6 relative bg-background shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                  <step.icon className="h-8 w-8 text-white group-hover:text-accent-primary transition-colors" />
                </div>
                <div className="text-sm font-bold text-accent-secondary mb-2 tracking-widest uppercase">Step {step.num}</div>
                <h3 className="font-bold text-xl mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
