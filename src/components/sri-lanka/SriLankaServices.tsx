"use client";

import { motion } from "framer-motion";
import { 
  Search, Laptop, Code2, TrendingUp, Share2, 
  Palette, Bot, Camera, Video, Server, 
  Users, Target, ShoppingBag, MousePointerClick, Cog
} from "lucide-react";
import Link from "next/link";

const services = [
  { name: "SEO Services", icon: Search, link: "/services/seo" },
  { name: "Web Design", icon: Laptop, link: "/services/web-design" },
  { name: "Web Development", icon: Code2, link: "/services/web-design" },
  { name: "Digital Marketing", icon: TrendingUp, link: "/services/digital-marketing" },
  { name: "Social Media Marketing", icon: Share2, link: "/services/digital-marketing" },
  { name: "Branding", icon: Palette, link: "/services/branding" },
  { name: "AI Solutions", icon: Bot, link: "/services/ai-solutions" },
  { name: "Photography", icon: Camera, link: "/services/photography" },
  { name: "Videography", icon: Video, link: "/services/videography" },
  { name: "Hosting", icon: Server, link: "/services/hosting" },
  { name: "CRM Automation", icon: Users, link: "/services/automation" },
  { name: "Lead Generation", icon: Target, link: "/services/lead-generation" },
  { name: "E-Commerce Development", icon: ShoppingBag, link: "/services/ecommerce" },
  { name: "Google Ads Management", icon: MousePointerClick, link: "/services/digital-marketing" },
  { name: "Business Automation", icon: Cog, link: "/services/automation" },
];

export function SriLankaServices() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Digital Services Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Sri Lanka.</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            As a full-service creative agency and performance marketing firm, we offer end-to-end digital transformation. Our comprehensive suite covers everything from website design to advanced AI automation for Sri Lankan enterprises.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.1 }}
            >
              <Link 
                href={service.link}
                className="glass p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center group hover:bg-white/5 hover:border-accent-primary/30 transition-all h-full"
              >
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 group-hover:border-accent-primary/40 transition-colors">
                  <service.icon className="h-6 w-6 text-muted group-hover:text-accent-primary transition-colors" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground group-hover:text-white transition-colors">
                  {service.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
