"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, LineChart, Megaphone, PenTool, Cpu, ShoppingCart, Activity, Smartphone, Inbox, BarChart2, ShieldAlert, HeartHandshake, Eye } from "lucide-react";

const services = [
  {
    title: "SEO Services Dubai",
    desc: "Targeting high-value search queries locally and globally in Dubai to scale organic inquiries and search authority.",
    icon: LineChart,
    href: "/seo-services",
  },
  {
    title: "Web Design Dubai",
    desc: "Bespoke corporate website designs built on Next.js for lightning-fast speeds and premium visual layouts.",
    icon: Code2,
    href: "/web-design-development",
  },
  {
    title: "Digital Marketing Dubai",
    desc: "Deploying high-performance campaigns across Google and major social networks to acquire premium customers.",
    icon: Megaphone,
    href: "/digital-marketing",
  },
  {
    title: "Social Media Management Dubai",
    desc: "Crafting stunning content templates, community plans, and organic strategies tailored to Dubai's social landscape.",
    icon: Eye,
    href: "/social-media-management",
  },
  {
    title: "Branding Dubai",
    desc: "Comprehensive visual branding, guidelines, vector logo files, and assets to position your brand as a luxury leader.",
    icon: PenTool,
    href: "/branding-creative",
  },
  {
    title: "AI Solutions Dubai",
    desc: "Integrating custom automation structures, predictive systems, and AI models into daily enterprise processes.",
    icon: Cpu,
    href: "/ai-solutions",
  },
  {
    title: "UI/UX Design Dubai",
    desc: "Designing responsive interfaces, interactive prototypes, and frictionless user flows for modern digital systems.",
    icon: Activity,
    href: "/ui-ux-design",
  },
  {
    title: "Mobile App Development Dubai",
    desc: "Engineering premium cross-platform iOS and Android mobile apps using Flutter for smooth performance.",
    icon: Smartphone,
    href: "/mobile-app-development",
  },
  {
    title: "CRM Automation Dubai",
    desc: "Architecting HubSpot, Salesforce, or custom WhatsApp Business CRM systems to track pipelines and automate leads.",
    icon: HeartHandshake,
    href: "/crm-automation",
  },
  {
    title: "Content Marketing Dubai",
    desc: "Authoring authoritative articles, blog posts, whitepapers, and reports that drive local search visibility.",
    icon: ShoppingCart,
    href: "/content-marketing",
  },
  {
    title: "Video Production Dubai",
    desc: "Producing corporate introductory videos, social ads, and cinematic product animations.",
    icon: BarChart2,
    href: "/video-production",
  },
  {
    title: "Email Marketing Dubai",
    desc: "Developing automated newsletter triggers, conversion-focused sequences, and visual nurture workflows.",
    icon: Inbox,
    href: "/email-marketing",
  },
  {
    title: "Reputation Management Dubai",
    desc: "Monitoring search reviews, managing local trust signals, and tracking brand sentiment across digital channels.",
    icon: ShieldAlert,
    href: "/reputation-management",
  },
  {
    title: "Hosting & Maintenance Dubai",
    desc: "Providing managed cloud hosting, Core Web Vitals checks, weekly system backups, and regular security patches.",
    icon: Code2,
    href: "/hosting-maintenance",
  },
];

export function DubaiServices() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-white/[0.01] border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Our Digital Growth Services In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Dubai.
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We design specialized technology frameworks and marketing funnels to capture, engage, and convert audiences for Dubai brands.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col h-full glass p-8 rounded-3xl transition-all duration-500 hover:bg-white/5 relative overflow-hidden border border-white/10 hover:border-accent-primary/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] cursor-pointer"
                >
                  {/* Premium Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent-primary/50 group-hover:bg-accent-primary/10 transition-all duration-300 transform group-hover:-translate-y-1">
                    <Icon className="h-6 w-6 text-foreground group-hover:text-accent-primary transition-colors" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold mb-3 transform transition-transform duration-300 group-hover:translate-x-1 text-white">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-8 flex-grow text-xs md:text-sm">
                    {service.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/10 relative z-10 w-full">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent-secondary group-hover:text-white transition-colors">
                      Explore Capability{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
