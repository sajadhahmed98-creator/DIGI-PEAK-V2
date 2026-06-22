"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Globe, Zap, Users, Layers } from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    year: "2022",
    icon: Calendar,
    title: "Digipeak Founded",
    desc: "Digipeak Agency was established in Sri Lanka with a clear mission: to help businesses build stronger digital foundations through innovation, creativity, and technology.",
    color: "text-accent-primary border-accent-primary/30 bg-accent-primary/[0.03]",
  },
  {
    year: "2023",
    icon: Globe,
    title: "International Expansion",
    desc: "Digipeak began serving clients internationally, extending expertise to the Middle East, Southeast Asia, and beyond — combining cross-market digital knowledge with local business understanding.",
    color: "text-accent-secondary border-accent-secondary/30 bg-accent-secondary/[0.03]",
  },
  {
    year: "2024",
    icon: Zap,
    title: "Full-Service Growth Ecosystem",
    desc: "Evolved into a full-service digital growth partner offering 14+ specialized services including AI solutions, CRM automation, video production, and enterprise-grade web development.",
    color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  },
  {
    year: "Now",
    icon: Layers,
    title: "Serving Businesses Globally",
    desc: <>Today Digipeak serves businesses across <Link href="/locations/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, <Link href="/locations/uae" className="underline hover:text-accent-primary transition-colors">UAE</Link>, <Link href="/locations/saudi-arabia" className="underline hover:text-accent-primary transition-colors">Saudi Arabia</Link>, Singapore, Australia, New Zealand, the UK, and locally in Sri Lanka — building digital ecosystems that generate measurable growth.</>,
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
];

export function OurStory() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Story text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-sm font-semibold text-accent-primary mb-6">
              <MapPin className="w-4 h-4" />
              Headquartered in Sri Lanka
            </div>

            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
              Our Story.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Our Mission.
              </span>
            </h2>

            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                Digipeak Agency was founded in 2022 in Sri Lanka, with a belief that every business — regardless of size or location — deserves access to world-class digital expertise.
              </p>
              <p>
                We started with a focused vision: combine marketing, design, development, and automation into one unified growth ecosystem, rather than forcing businesses to work with multiple disconnected agencies.
              </p>
              <p>
                From Sri Lanka, we serve businesses internationally across <Link href="/locations/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, the <Link href="/locations/uae" className="underline hover:text-accent-primary transition-colors">UAE</Link>, <Link href="/locations/saudi-arabia" className="underline hover:text-accent-primary transition-colors">Saudi Arabia</Link>, Singapore, Australia, New Zealand, and the United Kingdom — bringing the same commitment to quality and growth to every client we work with.
              </p>
              <p>
                We are not just a vendor. We are a long-term growth partner — one that understands business goals, adapts to market changes, and builds digital systems that compound in value over time.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: MapPin, label: "Headquarters: Sri Lanka" },
                { icon: Calendar, label: "Founded: 2022" },
                { icon: Globe, label: "Serving 8+ Markets" },
                { icon: Users, label: "Full-Service Agency" },
              ].map((tag) => (
                <div
                  key={tag.label}
                  className="flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 text-sm text-muted"
                >
                  <tag.icon className="w-3.5 h-3.5 text-accent-primary" />
                  {tag.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-accent-primary/40 via-accent-secondary/20 to-transparent hidden md:block" />

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 md:gap-6"
                >
                  {/* Icon node */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center z-10 ${m.color}`}>
                    <m.icon className="w-5 h-5" />
                  </div>
                  {/* Content */}
                  <div className="glass border border-white/10 rounded-2xl p-5 flex-1 hover:border-accent-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-heading text-xs font-bold text-accent-secondary uppercase tracking-widest">{m.year}</span>
                      <h3 className="font-bold text-white text-sm">{m.title}</h3>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
