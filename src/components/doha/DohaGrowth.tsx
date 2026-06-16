"use client";

import { motion } from "framer-motion";
import { Sparkles, Compass, ShieldAlert, Cpu } from "lucide-react";

export function DohaGrowth() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent-secondary/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Strategic Growth
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Digital Scaling &amp; Authority <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                For Doha Enterprises.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-accent-primary/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-6">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Growing Online Competition
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              With the expansion of digital channels across the GCC, traditional outbound marketing is no longer enough. Doha companies are investing heavily in server-side Next.js architectures, secure headless systems, and technical search optimizations. Standing out in this crowded marketplace requires an engineering-first growth model.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-accent-secondary/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center text-accent-secondary mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Importance of Search Visibility
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Doha's high-income consumers rely heavily on search engine algorithms to locate trusted luxury providers, clinics, real estate, and financial advisers. Appearing on the first page of Google listings for competitive queries is critical to capturing high-intent commercial buyers directly at the moment of decision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-accent-secondary/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center text-accent-secondary mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Brand Authority &amp; Trust
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Trust is the highest-converting asset in corporate GCC transactions. We build digital confidence by constructing clean branding guides, designing intuitive visual portals, securing lightning-fast load speeds, and aligning all design details to premium international standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-accent-primary/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Lead Generation &amp; Transformation
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              We translate traffic into business pipelines. Through customized landing systems, automated API integrations, and robust CRM systems, we capture high-intent inquiries, automate response systems, and provide scalable opportunities for commercial growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
