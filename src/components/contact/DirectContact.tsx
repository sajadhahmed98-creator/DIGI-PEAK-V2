"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Clock, MapPin } from "lucide-react";

const channels = [
  {
    title: "Email Inquiry",
    value: "hello@digipeak.agency",
    href: "mailto:hello@digipeak.agency",
    icon: Mail,
    desc: "For general questions, collaborations, or proposal feedback.",
  },
  {
    title: "Official Website",
    value: "www.digipeak.agency",
    href: "https://www.digipeak.agency",
    icon: Globe,
    desc: "Browse our services, portfolio pieces, and case studies.",
  },
  {
    title: "Response Time",
    value: "Within 24–48 Hours",
    icon: Clock,
    desc: "Our client success team reviews incoming briefs daily.",
  },
  {
    title: "Headquarters",
    value: "Sri Lanka",
    icon: MapPin,
    desc: "Operating from Colombo, serving businesses globally.",
  },
];

export function DirectContact() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 bg-transparent relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((ch, index) => {
            const IconComponent = ch.icon;
            const isClickable = !!ch.href;
            
            const cardContent = (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-accent-primary/30 text-accent-primary transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <h3 className="font-mono text-xs font-bold text-muted uppercase tracking-wider mb-2">
                    {ch.title}
                  </h3>
                  <p className="font-heading font-bold text-white text-base md:text-lg mb-3 break-all group-hover:text-accent-primary transition-colors">
                    {ch.value}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
              </>
            );

            return isClickable ? (
              <motion.a
                key={ch.title}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent-primary/20 transition-all duration-300 group flex flex-col justify-between cursor-pointer relative overflow-hidden"
              >
                {cardContent}
              </motion.a>
            ) : (
              <motion.div
                key={ch.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent-primary/10 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
