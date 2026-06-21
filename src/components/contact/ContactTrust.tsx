"use client";

import { motion } from "framer-motion";
import {
  TrendingUp, Monitor, Search, Award,
  Cpu, Zap, Smartphone, BookOpen, Sparkles
} from "lucide-react";

const categories = [
  {
    title: "Digital Marketing",
    serviceVal: "Digital Marketing",
    icon: TrendingUp,
    desc: "Paid search, social campaigns, and lead acquisition.",
  },
  {
    title: "Web Design",
    serviceVal: "Web Design & Development",
    icon: Monitor,
    desc: "Premium, responsive, high-speed custom websites.",
  },
  {
    title: "SEO",
    serviceVal: "SEO Services",
    icon: Search,
    desc: "Keyword research, technical audits, and organic rankings.",
  },
  {
    title: "Branding",
    serviceVal: "Branding & Creative",
    icon: Award,
    desc: "Cohesive visual identity systems and brand strategies.",
  },
  {
    title: "AI Solutions",
    serviceVal: "AI Solutions",
    icon: Cpu,
    desc: "AI workflows, intelligent agents, and custom bots.",
  },
  {
    title: "CRM Automation",
    serviceVal: "CRM & Automation",
    icon: Zap,
    desc: "HubSpot/Salesforce flows and webhook routing.",
  },
  {
    title: "Mobile Apps",
    serviceVal: "Mobile App Development",
    icon: Smartphone,
    desc: "Bespoke hybrid and native iOS & Android applications.",
  },
  {
    title: "Content Marketing",
    serviceVal: "Content Marketing",
    icon: BookOpen,
    desc: "SEO copywriting, authority articles, and campaign briefs.",
  },
];

export function ContactTrust() {
  const handleSelectService = (service: string) => {
    // Custom event to communicate pre-selection to the form component
    const event = new CustomEvent("select-contact-service", { detail: { service } });
    window.dispatchEvent(event);

    // Smooth scroll to lead-form
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 border-t border-white/5 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent-primary/[0.015] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/35 bg-accent-secondary/5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Build With Us
            </div>
            <h2 className="font-heading text-2xl md:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              Start Your Next Digital Growth Project
            </h2>
            <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
              Select one of our core capabilities below to pre-fill your request and get started instantly.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                onClick={() => handleSelectService(cat.serviceVal)}
                className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent-primary/30 transition-all duration-300 group flex flex-col justify-between min-h-[180px] cursor-pointer text-left select-none relative overflow-hidden"
              >
                {/* Background light gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-accent-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-accent-primary/40 text-accent-primary transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-white text-base md:text-lg mb-2 group-hover:text-accent-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
