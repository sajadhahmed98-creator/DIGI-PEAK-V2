"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function PersonalIntro() {
  return (
    <section className="py-12 md:py-20 lg:py-32 px-6 bg-black/50 border-t border-white/5 relative overflow-hidden">
      {/* Subtle ambient blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent-secondary/[0.015] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — Big visual intro header */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-accent-primary font-mono text-xs font-bold uppercase tracking-widest mb-4">
                Introduction
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Meet <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                  Sajadh Ahmed.
                </span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
            </motion.div>
          </div>

          {/* Right Column — Narrative paragraphs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6 text-muted text-base md:text-lg leading-relaxed"
            >
              <p className="font-semibold text-white text-lg md:text-xl">
                Sajadh Ahmed is a multidisciplinary designer, digital marketer, and the founder of Digipeak.
              </p>
              <p>
                With over 6 years of hands-on experience across the entire creative lifecycle, Sajadh specializes in graphic design, branding, logo design, social media design, website design, digital marketing, photography, videography, and personal branding. Rather than relying on generic corporate templates, he builds tailored visual identity systems and custom web experiences from the ground up.
              </p>
              <p>
                Based in Colombo, Sri Lanka, he collaborates directly with businesses and creators across <Link href="/locations/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, the <Link href="/locations/uae" className="underline hover:text-accent-primary transition-colors">UAE</Link>, <Link href="/locations/saudi-arabia" className="underline hover:text-accent-primary transition-colors">Saudi Arabia</Link>, New Zealand, and globally, turning brand objectives into high-performing digital platforms, cohesive visual campaigns, and authentic search engine authority.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
