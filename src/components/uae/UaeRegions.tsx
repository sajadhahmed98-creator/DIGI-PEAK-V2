"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const emirates = [
  {
    name: "Dubai",
    desc: "The global commercial epicentre for real estate, trade, luxury hospitality, and technology innovation.",
    link: "/dubai",
  },
  {
    name: "Abu Dhabi",
    desc: "The capital city driving massive investments in clean energy, heavy industry, finance, and tourism.",
    link: null,
  },
  {
    name: "Sharjah",
    desc: "The cultural and educational center of the UAE with expanding manufacturing and creative industries.",
    link: null,
  },
  {
    name: "Ajman",
    desc: "A growing hub for trade, retail, and manufacturing with active commercial free zones.",
    link: null,
  },
  {
    name: "Ras Al Khaimah",
    desc: "A primary destination for tourism, pharmaceutical industries, construction materials, and trade.",
    link: null,
  },
  {
    name: "Fujairah",
    desc: "The strategic eastern port city handling major maritime bunkering, trade logistics, and manufacturing.",
    link: null,
  },
  {
    name: "Umm Al Quwain",
    desc: "A scaling hub focused on ecotourism, local trade, logistics, and lightweight manufacturing.",
    link: null,
  },
];

export function UaeRegions() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-white/[0.01] border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/35 bg-accent-secondary/[0.015] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Regional Coverage
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Regions We Support <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Across The Emirates.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We provide tailored digital growth, search engine optimization, and enterprise technology services to organizations across all seven emirates.
            </p>
          </motion.div>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {emirates.map((emirate, index) => {
            const isClickable = emirate.link !== null;
            const CardWrapper = isClickable ? Link : "div";
            
            return (
              <motion.div
                key={emirate.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                className="h-full"
              >
                {/* @ts-ignore */}
                <CardWrapper
                  href={emirate.link || "#"}
                  className={`group flex flex-col h-full justify-between glass p-6 md:p-8 rounded-3xl border border-white/5 transition-all duration-300 relative overflow-hidden ${
                    isClickable 
                      ? "hover:border-accent-primary/30 hover:bg-white/5 hover:scale-[1.02] cursor-pointer" 
                      : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-heading font-black text-2xl text-white group-hover:text-accent-primary transition-colors">
                        {emirate.name}
                      </h3>
                      {isClickable && (
                        <ArrowRight className="h-5 w-5 text-accent-secondary group-hover:text-white transition-colors transform group-hover:translate-x-1" />
                      )}
                    </div>
                    <p className="text-muted leading-relaxed text-xs md:text-sm">
                      {emirate.desc}
                    </p>
                  </div>
                  
                  {isClickable && (
                    <div className="mt-8 pt-4 border-t border-white/5 text-xs font-semibold text-accent-secondary group-hover:text-white transition-colors">
                      View Local Page
                    </div>
                  )}
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
