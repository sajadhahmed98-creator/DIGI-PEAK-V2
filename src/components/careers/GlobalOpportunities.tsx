"use client";

import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import Link from "next/link";

const locations = [
  {
    city: "Doha, Qatar",
    region: "GCC Hub",
    description: "Enterprise local SEO, corporate web design, and digital growth campaigns for prime regional developers.",
    accent: "from-fuchsia-500 to-purple-500",
  },
  {
    city: "Dubai, UAE",
    region: "GCC Hub",
    description: "High-ticket e-commerce development, performance marketing, and conversion optimization setups.",
    accent: "from-purple-500 to-indigo-500",
  },
  {
    city: "Riyadh, Saudi Arabia",
    region: "GCC Hub",
    description: "Enterprise CRM installations, business automation consulting, and digital transformation.",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    city: "London, United Kingdom",
    region: "European Edge",
    description: "Creative branding strategies, corporate video productions, and SaaS product launches.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    city: "Singapore",
    region: "APAC Hub",
    description: "Headless CMS engineering, AI marketing automations, and custom database infrastructures.",
    accent: "from-cyan-500 to-emerald-500",
  },
  {
    city: "Sydney, Australia",
    region: "Oceania Edge",
    description: "Regional business development, localized content creation, and search rankings monitoring.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    city: "Auckland, New Zealand",
    region: "Oceania Edge",
    description: "Website maintenance compliance auditing, accessibility reviews, and design consulting.",
    accent: "from-teal-500 to-pink-500",
  },
  {
    city: "Colombo, Sri Lanka",
    region: "APAC Creative Center",
    description: "Global design sprints, creative copywriting hub, and full-stack software development projects.",
    accent: "from-pink-500 to-rose-500",
  },
  {
    city: "Global Remote",
    region: "Borderless Collective",
    description: "Asynchronous collaboration for specialists who excel at working with global freedom and strict KPIs.",
    accent: "from-rose-500 to-fuchsia-500",
  },
];

export function GlobalOpportunities() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 bg-white/[0.01] relative border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-secondary font-bold uppercase text-xs tracking-widest font-mono">Resilient Global Presence</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Global Talent <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-blue-500">Hubs.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We sync resources across three continents, combining local market understanding with global tech operations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden flex flex-col min-h-[220px]"
            >
              {/* Dynamic Glow Line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${loc.accent} opacity-40 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-bold text-accent-secondary uppercase tracking-wider font-mono">
                    {loc.region}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white mt-1 leading-tight flex items-center gap-1.5">
                    <MapPin className="h-4.5 w-4.5 text-accent-primary" />
                    {loc.city === "Doha, Qatar" ? (
                      <Link href="/doha" className="hover:text-accent-primary transition-colors">Doha, Qatar</Link>
                    ) : (
                      loc.city
                    )}
                  </h3>
                </div>
                <div className="h-7 px-2.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-mono font-bold tracking-wider text-muted group-hover:bg-white/10 group-hover:text-white transition-colors">
                  TALENT POOL ACTIVE
                </div>
              </div>

              <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">{loc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
