"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search, Monitor, TrendingUp, Share2, Award, Cpu,
  Fingerprint, Smartphone, Zap, BookOpen, Video, Mail, Shield, Server
} from "lucide-react";

const services = [
  {
    title: "SEO Services Qatar",
    desc: "Targeting high-intent search queries in Qatar and globally to scale organic business leads.",
    link: "/seo-services",
    icon: Search,
  },
  {
    title: "Web Design Qatar",
    desc: "Designing fast-loading, highly-responsive custom websites utilizing modern Next.js and Tailwind.",
    link: "/web-design-development",
    icon: Monitor,
  },
  {
    title: "Digital Marketing Qatar",
    desc: "Deploying high-ROI advertising campaigns across Google, Meta, and LinkedIn targeting Qatari markets.",
    link: "/digital-marketing",
    icon: TrendingUp,
  },
  {
    title: "Social Media Management Qatar",
    desc: "Fostering active brand communities on Instagram, LinkedIn, and TikTok with visual layouts.",
    link: "/social-media-management",
    icon: Share2,
  },
  {
    title: "Branding Qatar",
    desc: "Structuring bespoke visual identity guides, typography, and logo systems that differentiate your brand.",
    link: "/branding-creative",
    icon: Award,
  },
  {
    title: "AI Solutions Qatar",
    desc: "Automating workflows, deploying custom AI chatbots, and integrating smart APIs.",
    link: "/ai-solutions",
    icon: Cpu,
  },
  {
    title: "UI/UX Design Qatar",
    desc: "Creating user-centric wireframes and layouts that optimize user engagement and customer conversion.",
    link: "/ui-ux-design",
    icon: Fingerprint,
  },
  {
    title: "Mobile App Development Qatar",
    desc: "Developing native and hybrid iOS & Android apps built for performance and absolute scalability.",
    link: "/mobile-app-development",
    icon: Smartphone,
  },
  {
    title: "CRM Automation Qatar",
    desc: "Setting up HubSpot and Zoho databases with webhook synchronization for sales teams.",
    link: "/crm-automation",
    icon: Zap,
  },
  {
    title: "Content Marketing Qatar",
    desc: "Producing authority SEO copywriting, blogging guides, and marketing funnels.",
    link: "/content-marketing",
    icon: BookOpen,
  },
  {
    title: "Video Production Qatar",
    desc: "Producing corporate, commercial, and social media reels optimized for high viewer retention.",
    link: "/video-production",
    icon: Video,
  },
  {
    title: "Email Marketing Qatar",
    desc: "Structuring cart recovery and retention newsletter automation grids that nurture customers.",
    link: "/email-marketing",
    icon: Mail,
  },
  {
    title: "Reputation Management Qatar",
    desc: "Monitoring search results, collecting positive reviews, and listening to social sentiment.",
    link: "/reputation-management",
    icon: Shield,
  },
  {
    title: "Hosting & Maintenance Qatar",
    desc: "Managed AWS servers with speed optimization, firewalls, and active developer support.",
    link: "/hosting-maintenance",
    icon: Server,
  },
];

export function QatarServices() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent-primary/[0.015] rounded-full blur-[140px]" />
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
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/35 bg-accent-secondary/[0.015] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
              Solutions
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Targeted Services For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Qatar Brands.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4">
              Explore our localized service capability grid, linking to dedicated authority modules.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="glass p-8 rounded-3xl border border-white/10 hover:border-accent-primary/25 transition-all duration-300 group flex flex-col justify-between min-h-[220px]"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent-primary/30 transition-all duration-300 text-accent-primary group-hover:text-white">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg md:text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-primary group-hover:text-white transition-colors mt-auto relative z-10"
                >
                  Explore Service
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
