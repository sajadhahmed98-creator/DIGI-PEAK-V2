"use client";

import { motion } from "framer-motion";
import { ShieldAlert, TrendingUp, Cpu, Globe } from "lucide-react";

const benefits = [
  {
    icon: ShieldAlert,
    title: "100% Client Ownership & NDA",
    desc: "We operate silently behind the scenes. Your client relationships are completely protected under legal NDAs. We never contact your clients directly.",
  },
  {
    icon: TrendingUp,
    title: "Maximize Operational Margins",
    desc: "Scale your revenue streams with zero delivery overhead. Set your pricing and retain high profit margins, backed by our competitive partner rates.",
  },
  {
    icon: Cpu,
    title: "Enterprise Delivery Infrastructure",
    desc: "Get access to a dedicated delivery team of web design developers, SEO auditors, branding strategists, and business automation engineers.",
  },
  {
    icon: Globe,
    title: "Borderless GCC & Global Scale",
    desc: "Leverage our local knowledge and technical capabilities across Doha, Dubai, Riyadh, and global markets to serve complex corporate requirements.",
  }
];

export function PartnerHubBenefits() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">B2B Advantages</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Why Agencies & Consultants Partner With Us
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Remove execution limits, secure higher margins, and scale your client base with a reliable B2B fulfillment backend.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass border border-white/5 bg-white/[0.01] rounded-2.5xl p-6.5 hover:border-indigo-500/20 transition-all duration-300 flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <b.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
