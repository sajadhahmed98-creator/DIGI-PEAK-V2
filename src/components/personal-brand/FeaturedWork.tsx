"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <span className="text-accent-primary font-mono text-xs font-bold uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Featured <span className="text-gradient-secondary">Work.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            A showcase of live visual identity systems, brand guidelines, and high-performance digital marketing campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8">
          {[1, 2].map((id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="glass border border-white/8 rounded-3xl aspect-[16/10] w-full p-8 flex flex-col justify-between items-center text-center overflow-hidden relative group hover:border-white/15 transition-all duration-300"
            >
              {/* Decorative design grid inside placeholder */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.04] transition-opacity duration-500"
                style={{
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "24px 24px"
                }}
              />

              <div className="flex-1 flex flex-col justify-center items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-muted group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                  <Lock className="w-5 h-5 text-accent-primary/60" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-heading text-base font-bold text-white/80 group-hover:text-white transition-colors">
                    Case Study #{id}
                  </h3>
                  <p className="text-xs text-muted max-w-xs leading-relaxed">
                    Featured projects and case studies will be published here.
                  </p>
                </div>
              </div>

              {/* Bottom skeleton bar decorations */}
              <div className="w-full space-y-2 relative z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                <div className="w-1/3 h-2 bg-white/10 rounded-full mx-auto" />
                <div className="w-1/2 h-1.5 bg-white/5 rounded-full mx-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
