"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function DohaSection() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Visual / Large editorial heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 animate-pulse"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/35 bg-accent-secondary/5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Capital Focus
              </div>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Digital Solutions <br />
                For Businesses <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                  <Link href="/doha">In Doha.</Link>
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Right Column — Unique narrative paragraphs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6 text-muted text-base md:text-lg leading-relaxed"
            >
              <p className="font-semibold text-white">
                <Link href="/doha" className="underline hover:text-accent-primary transition-colors">Doha</Link> stands as one of the most competitive, high-velocity digital business hubs in the GCC.
              </p>
              <p>
                In a capital driven by rapid visual innovation and digital transformation, growing brands must deploy more than just basic social pages. Online customer acquisition requires custom-built web architectures, hyper-targeted local search campaigns, and cohesive corporate visual branding systems.
              </p>
              <p>
                Digipeak assists businesses in <Link href="/doha" className="underline hover:text-accent-primary transition-colors">Doha</Link> by engineering performance marketing sequences, local SEO schema networks, and responsive layouts that convert regional search queries into qualified buyers. We enable brands in <Link href="/doha" className="underline hover:text-accent-primary transition-colors">Doha</Link> to stand out, command digital authority, and achieve lasting growth.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
