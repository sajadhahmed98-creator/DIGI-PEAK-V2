"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const markets = [
  { flag: "🇶🇦", name: "Qatar", type: "Key Market" },
  { flag: "🇦🇪", name: "UAE", type: "Key Market" },
  { flag: "🇸🇦", name: "Saudi Arabia", type: "Key Market" },
  { flag: "🇬🇧", name: "United Kingdom", type: "International" },
  { flag: "🇸🇬", name: "Singapore", type: "Growth Market" },
  { flag: "🇦🇺", name: "Australia", type: "Growth Market" },
  { flag: "🇳🇿", name: "New Zealand", type: "Growth Market" },
  { flag: "🇱🇰", name: "Sri Lanka", type: "Headquarters" },
];

export function GlobalClients() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-secondary/5 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Text */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase">
                <Globe2 className="w-3.5 h-3.5" />
                Global Presence
              </div>
              
              <h2 className="font-heading text-3xl md:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Supporting Businesses Across Multiple Markets
              </h2>
              
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Digipeak works with businesses across multiple international markets, helping brands improve digital visibility, strengthen customer engagement, and accelerate business growth.
              </p>
            </motion.div>
          </div>

          {/* Right Column — Flag Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-4 gap-4">
              {markets.map((market, index) => {
                const isHQ = market.type === "Headquarters";
                return (
                  <motion.div
                    key={market.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`glass p-5 rounded-2xl border text-center transition-all duration-300 group flex flex-col justify-center items-center ${
                      isHQ
                        ? "border-accent-primary/30 bg-white/[0.02]"
                        : "border-white/10 hover:border-accent-primary/20"
                    }`}
                  >
                    <div className="text-3xl md:text-2xl md:text-3xl lg:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 select-none">
                      {market.flag}
                    </div>
                    <h3 className="font-heading font-bold text-white text-sm md:text-base leading-none mb-2">
                      {market.name}
                    </h3>
                    <span className={`text-[9px] uppercase tracking-wider font-mono font-bold ${
                      isHQ ? "text-accent-primary animate-pulse" : "text-muted"
                    }`}>
                      {market.type}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
