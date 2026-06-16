"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";

const locations = [
  "Qatar", "Dubai", "UAE", "Riyadh", "Saudi Arabia", 
  "Singapore", "Sydney", "Auckland", "Colombo", "United Kingdom"
];

export function GlobalLocations({ 
  title = "Global", 
  subtitle = "Dominance.",
  description = "We execute high-impact digital strategies tailored to dominate local markets across the Middle East, APAC, and Europe."
}: { 
  title?: string, 
  subtitle?: string, 
  description?: string 
}) {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-b border-white/5 bg-white/[0.02] relative overflow-hidden">
      {/* Abstract Map Nodes Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {title} <span className="text-gradient-secondary">{subtitle}</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {locations.map((loc, i) => {
            const isQatar = loc === "Qatar";
            return (
              <motion.div
                key={loc}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {isQatar ? (
                  <Link
                    href="/qatar"
                    className="glass px-6 py-3 rounded-full border border-white/10 flex items-center gap-2 hover:border-accent-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all cursor-pointer text-white"
                  >
                    <MapPin className="h-4 w-4 text-accent-primary" />
                    <span className="font-semibold text-sm md:text-base">{loc}</span>
                  </Link>
                ) : (
                  <div
                    className="glass px-6 py-3 rounded-full border border-white/10 flex items-center gap-2 hover:border-accent-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all cursor-default"
                  >
                    <MapPin className="h-4 w-4 text-accent-primary" />
                    <span className="font-semibold text-sm md:text-base">{loc}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
