"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const items = [
  {
    title: "Data-Driven Approach",
    desc: "Every marketing campaign, search strategy, and lead generation funnel is structured around absolute data analytics, intent reports, and audience data.",
  },
  {
    title: "Modern Technology",
    desc: "We deploy cutting-edge technical architectures like Next.js, headless architectures, and integrated workflows to ensure maximum web speed and scalability.",
  },
  {
    title: "Creative Excellence",
    desc: "From logos to marketing copy, our design systems are tailored to visual perfection, establishing premium luxury brand appeal.",
  },
  {
    title: "Transparent Communication",
    desc: "We provide access to live Looker Studio reporting dashboards, keeping communication honest, direct, and completely visible.",
  },
  {
    title: "International Experience",
    desc: "Having operated across Middle East and international markets, we translate global design trends into local corporate victories.",
  },
  {
    title: "Business Growth Focus",
    desc: "We prioritize commercial business outcomes — leads, sales volume, customer volume, and ROI — rather than empty vanity impressions.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "We invest ourselves deeply in understanding your corporate culture, providing continuous iteration to support ongoing growth.",
  },
];

export function QatarWhyChoose() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-white/[0.01] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[140px]" />
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
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              <Handshake className="w-3.5 h-3.5" />
              Partnership
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Why Qatar Businesses Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Digipeak.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              Combining world-class creative assets with operational transparency to guarantee a competitive edge.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
              className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent-primary/20 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="font-mono text-xs font-bold text-accent-primary mb-4 block select-none">
                  / 0{index + 1}
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">
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
