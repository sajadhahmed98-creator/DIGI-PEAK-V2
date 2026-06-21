"use client";

import { motion } from "framer-motion";
import { Sparkles, Compass, ShieldAlert, Cpu } from "lucide-react";

export function SaudiVision() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent-secondary/[0.015] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.015] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Strategic Growth
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Digital Scaling &amp; Authority <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                For Saudi Enterprises.
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
            <div className="w-12 h-12 rounded-2xl bg-accent-primary/[0.03] border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-6">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Vision 2030 Digital-First Mandate
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              As Saudi Arabia pushes aggressively toward digital-first economies under Vision 2030, corporate groups and holdings are leaving legacy portals behind. Saturated GCC markets require server-side Next.js sites, clean layouts, and strict technical search optimizations to establish authority.
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
            <div className="w-12 h-12 rounded-2xl bg-accent-secondary/[0.03] border border-accent-secondary/20 flex items-center justify-center text-accent-secondary mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Local Authority &amp; Consumer Trust
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Saudi consumer segments research and validate business credibility online before converting. Building organic search rankings and premium visual identities secures immediate brand trust in Riyadh, Jeddah, and the Eastern Province.
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
            <div className="w-12 h-12 rounded-2xl bg-accent-secondary/[0.03] border border-accent-secondary/20 flex items-center justify-center text-accent-secondary mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Ecosystem &amp; Webhook Linkages
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Translating traffic into a steady stream of corporate inquiries requires solid tech integrations. We connect headless CMS structures, client-side calculator systems, automated contact forms, and custom WhatsApp Business CRM systems to capture leads immediately.
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
            <div className="w-12 h-12 rounded-2xl bg-accent-primary/[0.03] border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Data-Backed Performance Analytics
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Monitoring marketing ad budgets and technical search indexes requires data transparency. We align campaign data points within unified Looker Studio reporting dashboards, allowing your teams to review conversion metrics and scale budgets dynamically.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
