"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Globe, ShoppingBag, Building2, Stethoscope, FileText, Store, Link2, Key, Activity } from "lucide-react";

const seoServices = [
  { title: "Technical SEO", desc: "Site speed, crawlability, indexation, schema markup, and headless core web vitals optimization.", icon: Activity },
  { title: "Local SEO", desc: "Dominate the local map pack in your city with hyper-targeted citations and location pages.", icon: MapPin },
  { title: "International SEO", desc: "Hreflang implementation and multi-region targeting for global enterprise dominance.", icon: Globe },
  { title: "E-Commerce SEO", desc: "Product category optimization, faceted navigation control, and Shopify/WooCommerce scaling.", icon: ShoppingBag },
  { title: "Enterprise SEO", desc: "Managing organic search strategies for massive websites with thousands of indexable URLs.", icon: Building2 },
  { title: "SEO Audits", desc: "Comprehensive technical, content, and backlink analysis to uncover critical growth bottlenecks.", icon: Stethoscope },
  { title: "Content SEO", desc: "AI-assisted, human-edited authoritative content clusters that command topical authority.", icon: FileText },
  { title: "Google Business Profile", desc: "Optimizing and managing your GBP for maximum visibility in local commercial searches.", icon: Store },
  { title: "Link Building", desc: "Acquiring high-DR, industry-relevant backlinks through digital PR and outreach.", icon: Link2 },
  { title: "Keyword Research", desc: "Identifying high-intent commercial keywords that drive actual revenue, not just vanity metrics.", icon: Key },
  { title: "Competitor Analysis", desc: "Reverse-engineering your top competitors to steal their traffic share and rankings.", icon: Search },
];

export function SEOServicesGrid() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Comprehensive <span className="text-gradient-secondary">SEO Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Our 11-point holistic SEO framework covers every technical and creative aspect required to dominate search engines.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-accent-primary/50 transition-colors group flex items-start gap-4"
            >
              <div className="shrink-0 h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-secondary group-hover:text-accent-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
