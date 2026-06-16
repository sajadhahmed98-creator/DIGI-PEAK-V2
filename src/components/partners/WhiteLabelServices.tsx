"use client";

import { motion } from "framer-motion";
import { 
  Search, Laptop, ShoppingCart, Percent, Camera, Award, 
  Cpu, Layout, Smartphone, Database, PenTool, Video, Mail, 
  Star, Server 
} from "lucide-react";

const fulfillmentServices = [
  { icon: Search, name: "SEO Services", desc: "Keyword research, technical audits, Arabic local SEO, and backlink outreach campaigns." },
  { icon: Laptop, name: "Web Design & Dev", desc: "Premium, ultra-fast headless Next.js websites built with premium glassmorphism layouts." },
  { icon: ShoppingCart, name: "E-Commerce Stores", desc: "High-converting Shopify and WooCommerce checkouts optimized for cart conversion." },
  { icon: Percent, name: "Digital Marketing", desc: "ROI-driven campaign setups and optimizations across Google Ads and Meta Platforms." },
  { icon: Camera, name: "Social Media", desc: "Strategic content grids, creative copy assets, and high-impact Reels/TikTok video editing." },
  { icon: Award, name: "Branding & Creative", desc: "Custom corporate logo designs, visual guidelines, pitch deck templates, and asset kits." },
  { icon: Cpu, name: "AI Solutions", desc: "Bespoke OpenAI pipelines, custom GPT workflow automations, and CRM chat qualification bots." },
  { icon: Layout, name: "UI/UX Design", desc: "Interactive Figma wireframes, detailed visual system architectures, and complete prototypes." },
  { icon: Smartphone, name: "Mobile App Dev", desc: "Premium cross-platform iOS and Android mobile applications engineered on React Native." },
  { icon: Database, name: "CRM & Automation", desc: "Active campaign setups, automated lead qualification, and webhook integrations." },
  { icon: PenTool, name: "Content Marketing", desc: "Search intent blog assets, gated lead magnets, and thought leadership articles." },
  { icon: Video, name: "Video Production", desc: "Corporate explainer animations, video editing, and engaging short-form social reels." },
  { icon: Mail, name: "Email Marketing", desc: "Cart recovery sequences, customer segmentation, and newsletter templates." },
  { icon: Star, name: "Reputation Management", desc: "Google review generation systems, brand sentiment tracking, and PR cleaning." },
  { icon: Server, name: "Hosting & Maintenance", desc: "Managed cloud web hosting, security patches, backups, and sub-second cache tuning." }
];

export function WhiteLabelServices() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Capabilities</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            15 Fulfillment Services Under Your Brand
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            From design to development and digital campaigns, our specialists deliver premium B2B results under your banner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {fulfillmentServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="glass border border-white/5 bg-white/[0.005] rounded-2xl p-5.5 hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xs.5 font-bold text-white mb-1.5 leading-snug">
                    {service.name}
                  </h3>
                </div>
                <p className="text-[11px] text-muted leading-relaxed mt-1">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
