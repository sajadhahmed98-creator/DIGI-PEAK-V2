"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  {
    title: "Website Development",
    desc: "Deploying high-speed custom Next.js websites built for lead generation.",
  },
  {
    title: "SEO Campaigns",
    desc: "Scaling organic rankings and captured search queries across target markets.",
  },
  {
    title: "Digital Marketing",
    desc: "Engineering performance funnels across Google, LinkedIn, and Meta Ads.",
  },
  {
    title: "Brand Identity Design",
    desc: "Structuring bespoke logo designs, visual assets, and style guides.",
  },
  {
    title: "Social Media Growth",
    desc: "Fostering community networks and high-converting visual grid creatives.",
  },
  {
    title: "AI Automation",
    desc: "Staging autonomous agents and data parsing pipelines for speed.",
  },
  {
    title: "CRM Implementation",
    desc: "Synchronizing HubSpot and Salesforce routing to capture sales opportunities.",
  },
  {
    title: "Content Marketing",
    desc: "Drafting authority copywriting and industry articles that command attention.",
  },
  {
    title: "Business Growth Consulting",
    desc: "Formulating business models and marketing frameworks for expansion.",
  },
];

export function WhyClientsContact() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              Solutions
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Why Businesses Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Digipeak.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              We help international enterprises, growth startups, and regional corporations establish digital market authority and scale revenue.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
              className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent-primary/20 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-6 h-6 rounded-full bg-accent-primary/10 border border-accent-primary/25 flex items-center justify-center flex-shrink-0 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-base md:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
