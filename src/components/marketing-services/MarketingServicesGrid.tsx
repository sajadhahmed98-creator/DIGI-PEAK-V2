"use client";

import { motion } from "framer-motion";
import { Search, Camera, Video, Target, LayoutTemplate, Workflow, MousePointerClick, RefreshCcw } from "lucide-react";

const marketingServices = [
  { title: "Google Ads Management", desc: "Dominate search intent with highly optimized Search, Display, and Performance Max campaigns.", icon: Search },
  { title: "Meta Ads Management", desc: "Scale revenue through hyper-targeted Facebook and Instagram advertising.", icon: Camera },
  { title: "Lead Generation Campaigns", desc: "End-to-end B2B and B2C systems designed to capture high-quality prospect data.", icon: Target },
  { title: "Sales Funnels", desc: "Psychologically engineered landing pages that convert cold traffic into buyers.", icon: LayoutTemplate },
  { title: "Marketing Automation", desc: "CRM integrations and automated email sequences to nurture leads 24/7.", icon: Workflow },
  { title: "Conversion Optimization", desc: "Continuous A/B testing of creatives, copy, and landing pages to lower CPA.", icon: MousePointerClick },
  { title: "Remarketing Campaigns", desc: "Strategic cross-platform retargeting to capture lost sales and improve ROI.", icon: RefreshCcw },
  { title: "YouTube & TikTok Ads", desc: "Engaging video ad campaigns to build massive brand awareness and direct response.", icon: Video },
];

export function MarketingServicesGrid() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Full-Funnel <span className="text-gradient-primary">Digital Marketing.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We deploy aggressive, multi-channel marketing strategies designed to surround your target audience and force conversions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-colors group flex flex-col"
            >
              <div className="shrink-0 h-12 w-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] group-hover:bg-orange-500/20 transition-all duration-300 mb-6">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-grow">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
