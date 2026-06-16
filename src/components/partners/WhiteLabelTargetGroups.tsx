"use client";

import { motion } from "framer-motion";
import { Users, PenTool, Layout, FileText } from "lucide-react";

const targetGroups = [
  {
    icon: Users,
    title: "Digital & Creative Agencies",
    desc: "Scale your technical capacity instantly. Take on complex web design, deep SEO, and large-scale branding campaigns without hiring more full-time staff.",
  },
  {
    icon: PenTool,
    title: "Design Studios & Boutiques",
    desc: "Expand your service suite. Offer high-performance Next.js web development and performance SEO services alongside your creative design assets.",
  },
  {
    icon: Layout,
    title: "Marketing Companies",
    desc: "Complete your execution backend. Offer high-converting Shopify store developments, custom AI integrations, and advanced CRMs without a delivery team.",
  },
  {
    icon: FileText,
    title: "Business Consultants",
    desc: "Deliver concrete technical value. Transition your growth strategies into finished, high-performing websites and digital transformation execution pipelines.",
  }
];

export function WhiteLabelTargetGroups() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Ideal partners</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Who Is White Label For?
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Our silent fulfillment backend supports various agencies and professional networks.
          </p>
        </div>

        {/* Targets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {targetGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass border border-white/5 bg-white/[0.005] rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                  <group.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-sm font-bold text-white mb-2 leading-snug">
                  {group.title}
                </h3>
              </div>
              <p className="text-[11px] text-muted leading-relaxed mt-2">
                {group.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
