"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  {
    title: "Business Growth",
    desc: "Crafting acquisition pathways designed to expand corporate market share and increase client counts.",
  },
  {
    title: "Digital Transformation",
    desc: "Auditing legacy operations and migrating systems to fast modern cloud infrastructure.",
  },
  {
    title: "Online Visibility",
    desc: "Scaling search engine rankings for competitive regional keywords to capture active buyer intent.",
  },
  {
    title: "Customer Acquisition",
    desc: "Optimizing conversion funnels, landing pages, and lead forms to lower customer acquisition costs.",
  },
  {
    title: "Brand Building",
    desc: "Establishing luxury visual identities, packaging systems, and typography rules for premium appeal.",
  },
  {
    title: "Marketing Performance",
    desc: "Nurturing paid advertising channels on search and social to achieve optimal ROI ratios.",
  },
  {
    title: "Technology Adoption",
    desc: "Integrating state-of-the-art frameworks, responsive structures, and custom APIs.",
  },
  {
    title: "Business Automation",
    desc: "Staging webhook configurations, automated follow-up paths, and CRM database synchronization.",
  },
];

export function QatarBusiness() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-white/[0.01] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent-secondary/[0.015] rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Header Description Left */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="text-accent-primary font-mono text-xs font-bold uppercase tracking-widest">
                GCC Operations
              </div>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Supporting Modern Businesses Across Qatar
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
            </motion.div>
          </div>

          {/* Authentic remote operations description Right */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted text-base md:text-lg leading-relaxed space-y-6"
            >
              <p>
                As an international digital growth agency, Digipeak serves businesses across Qatar remotely from our creative headquarters in Sri Lanka. We collaborate with growth-oriented Qatar brands to translate business objectives into high-performing digital systems.
              </p>
              <p>
                Our cross-border model combines global design standards and technical experience with remote coordination, ensuring Qatar-based enterprises receive high-tier digital assets without regional limits.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
              className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent-primary/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-white text-base md:text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
