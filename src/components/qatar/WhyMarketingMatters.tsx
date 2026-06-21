"use client";

import { motion } from "framer-motion";
import { Search, Megaphone, Target, ShieldCheck, Award, TrendingUp, BarChart3 } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    title: "Local Search Visibility",
    desc: <>Ensure your brand dominates local search results in <Link href="/qatar" className="underline hover:text-accent-secondary transition-colors">Qatar</Link>. With structured local SEO strategies, your business becomes the immediate choice for clients actively searching in <Link href="/doha" className="underline hover:text-accent-secondary transition-colors">Doha</Link> and across the region.</>,
    icon: Search,
  },
  {
    title: "Brand Awareness",
    desc: "Build a premium digital presence that commands attention. We design unified campaigns and luxury visual branding that make your business recognizable and memorable in Qatar's competitive market.",
    icon: Megaphone,
  },
  {
    title: "Lead Generation",
    desc: "Transform traffic into measurable business pipelines. We build automated lead generation funnels, premium landing pages, and search campaigns that capture high-intent commercial inquiries.",
    icon: Target,
  },
  {
    title: "Customer Trust",
    desc: "Establish founder credibility and company authority. Through clear communication, technical excellence, and clean designs, we build the digital confidence needed to win high-value corporate deals.",
    icon: ShieldCheck,
  },
  {
    title: "Competitive Advantage",
    desc: "Outpace competitors stuck in traditional workflows. By deploying modern Next.js websites, fast speed optimizations, and advanced marketing funnels, you secure an unmatched technological edge.",
    icon: Award,
  },
  {
    title: "Long-Term Growth",
    desc: "Move away from temporary marketing spikes. We build permanent organic traffic loops, domain authority systems, and automation frameworks that deliver compounding business returns over time.",
    icon: TrendingUp,
  },
];

export function WhyMarketingMatters() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
              <BarChart3 className="w-3.5 h-3.5 text-accent-secondary" />
              Marketing Impact
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Why Digital Marketing Matters <br className="hidden sm:inline" />
              For Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Qatar Business.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              Modern search and digital marketing systems are no longer luxury options—they are the key drivers of customer acquisition in the GCC region.
            </p>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
                className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent-secondary/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-secondary group-hover:bg-accent-secondary/[0.03] group-hover:border-accent-secondary/30 transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
