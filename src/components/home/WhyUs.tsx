"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Trophy, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Data-Driven ROI",
    description: "We don't guess. Every design decision and SEO strategy is backed by hard data to maximize your return on investment.",
    icon: TrendingUp,
  },
  {
    title: "Enterprise Architecture",
    description: "Our websites are built on modern, headless tech stacks ensuring sub-second load times and unmatched security.",
    icon: Zap,
  },
  {
    title: "Design-Led Excellence",
    description: "We craft digital experiences that position your brand as the premium, standout leader in your market.",
    icon: Trophy,
  },
  {
    title: "Long-Term Partnership",
    description: "We operate as an extension of your team, providing 24/7 support and continuous strategic growth.",
    icon: ShieldCheck,
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Why leading brands choose <br />
              <span className="text-gradient-primary">Digipeak.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              We are not just another agency. We are a specialist team of technical SEO engineers, enterprise architects, and performance-focused designers dedicated to building measurable growth for your business.
            </p>
            <ul className="space-y-6">
              {reasons.map((reason, i) => (
                <motion.li 
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
                    <reason.icon className="h-5 w-5 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{reason.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[100px] opacity-20 animate-pulse pointer-events-none" />
              <div className="relative h-full w-full glass rounded-[2rem] border border-white/10 p-8 flex items-center justify-center overflow-hidden">
                {/* Abstract Premium Visual / Graphic Placeholder */}
                <div className="w-full h-full rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center relative shadow-2xl">
                   <div className="absolute w-40 h-40 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                   <div className="absolute w-60 h-60 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                   <ShieldCheck className="h-16 w-16 text-foreground/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
