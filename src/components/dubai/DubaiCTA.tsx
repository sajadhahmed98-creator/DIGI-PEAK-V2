"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export function DubaiCTA() {
  return (
    <section className="relative py-24 md:py-16 md:py-24 lg:py-32 overflow-hidden px-6">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center glass p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
            Ready To Grow <br className="hidden sm:inline" />
            Your Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              In Dubai?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's build a strategy that helps your business stand out in one of the world's most competitive markets.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:opacity-90 hover:scale-105 transition-all duration-300 group"
            >
              Get Free Proposal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass border border-white/10 hover:border-accent-primary/30 text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-accent-primary" />
              Contact Digipeak
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
