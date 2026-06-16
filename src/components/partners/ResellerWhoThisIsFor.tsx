"use client";

import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";

const targetAudience = [
  "Marketing Freelancers",
  "Business Consultants",
  "Sales Teams",
  "Lead Generation Specialists",
  "Digital Consultants",
  "Growth Advisors",
  "Business Development Professionals",
  "Entrepreneurs",
  "Independent Sales Agents",
];

export function ResellerWhoThisIsFor() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-4xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Target Groups</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Who This Is For
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Our reseller model is structured for professionals who want to earn high margins by selling growth services.
          </p>
        </div>

        {/* Audience Badges */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {targetAudience.map((audience, i) => (
            <motion.div
              key={audience}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2.5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 shadow-sm"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <UserCheck className="w-3 h-3" />
              </div>
              <span>{audience}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
