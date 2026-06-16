"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export function UaeCTA() {
  return (
    <section className="py-20 md:py-28 px-6 bg-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-primary/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center glass p-8 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-mono text-xs font-bold uppercase tracking-widest block mb-4">
            Connect With Our Strategists
          </span>
          
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Ready To Launch Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              UAE Growth Campaign?
            </span>
          </h2>
          
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Arrange a free digital analysis session. We will evaluate your search positioning, inspect load speeds, and draft a structured performance plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="btn-primary w-full sm:w-auto px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              Get Free Proposal <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://wa.me/94773624413?text=Hello%20Digipeak%2C%0A%0AI%20would%20like%20to%20discuss%20my%20project%20and%20receive%20a%20proposal."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] px-8 py-4 text-sm font-medium transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-accent-secondary group-hover:text-white transition-colors" />
              Chat on WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
