"use client";

import { motion } from "framer-motion";
import { Magnet, LayoutTemplate, Link as LinkIcon, Database, Mail, RefreshCcw } from "lucide-react";

const leadSteps = [
  { id: "01", title: "Lead Magnets", icon: Magnet, desc: "Irresistible offers that trade high-value content for prospect data." },
  { id: "02", title: "Landing Pages", icon: LayoutTemplate, desc: "High-speed, conversion-focused pages that eliminate distraction." },
  { id: "03", title: "Sales Funnels", icon: LinkIcon, desc: "Psychological user journeys that guide prospects to purchase." },
  { id: "04", title: "CRM Integration", icon: Database, desc: "Automated routing of qualified leads directly to your sales team." },
  { id: "05", title: "Email Automation", icon: Mail, desc: "Trigger-based drip campaigns that nurture leads 24/7." },
  { id: "06", title: "Retargeting", icon: RefreshCcw, desc: "Strategic follow-ups capturing users who didn't convert initially." },
];

export function LeadGenerationSystem() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              The Lead Generation <span className="text-gradient-primary">System.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We don't just run ads. We build end-to-end customer acquisition engines that automatically capture, qualify, and nurture enterprise leads.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="glass p-8 rounded-3xl border border-white/10 h-full hover:border-orange-500/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors font-heading pointer-events-none">
                  {step.id}
                </div>
                
                <div className="h-14 w-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all mb-6 relative z-10">
                  <step.icon className="h-6 w-6" />
                </div>
                
                <h3 className="font-bold text-xl text-foreground mb-3 relative z-10">{step.title}</h3>
                <p className="text-muted leading-relaxed relative z-10">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
