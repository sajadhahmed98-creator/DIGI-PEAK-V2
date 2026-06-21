"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-accent-primary/8 via-accent-secondary/5 to-indigo-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            What Drives{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              Everything We Do.
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Our mission and vision shape every strategy, every campaign, and every client relationship we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass border border-accent-primary/20 rounded-3xl p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/[0.015] rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-accent-primary/15 border border-accent-primary/30 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent-primary" />
              </div>
              <div className="text-accent-primary font-bold text-sm uppercase tracking-widest mb-3 font-mono">Our Mission</div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
                Building Stronger Digital Foundations.
              </h3>
              <p className="text-muted leading-relaxed text-base">
                To help businesses build stronger digital foundations, attract more customers, and achieve
                measurable growth through innovative digital solutions — combining strategy, technology,
                creativity, and performance-driven execution.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass border border-accent-secondary/20 rounded-3xl p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-secondary/[0.015] rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-accent-secondary/15 border border-accent-secondary/30 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-secondary" />
              </div>
              <div className="text-accent-secondary font-bold text-sm uppercase tracking-widest mb-3 font-mono">Our Vision</div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
                A Trusted Global Growth Partner.
              </h3>
              <p className="text-muted leading-relaxed text-base">
                To become a trusted global digital growth partner helping businesses scale through technology,
                creativity, and performance-driven strategies — creating lasting competitive advantages for
                every brand we work with across all markets.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
