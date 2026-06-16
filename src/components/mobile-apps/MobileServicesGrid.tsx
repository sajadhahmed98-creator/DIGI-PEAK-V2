"use client";

import { motion } from "framer-motion";
import { Apple, Smartphone, Layers, ShoppingBag, Layers3, Sparkles, Database, MapPin, ShieldAlert, Search } from "lucide-react";

const mobileServices = [
  { 
    title: "iOS App Development", 
    desc: "Bespoke native iPhone and iPad application design and engineering. Strict compliance with Apple Human Interface Guidelines and end-to-end App Store publishing support.", 
    icon: Apple 
  },
  { 
    title: "Android App Development", 
    desc: "Robust native Android and tablet applications built for ultimate speed, security, and device responsiveness. Flawless Google Play console deployment pipelines.", 
    icon: Smartphone 
  },
  { 
    title: "Cross Platform Apps", 
    desc: "High-efficiency hybrid applications engineered using Flutter and React Native. Ship custom applications to both stores from a single premium, scalable codebase.", 
    icon: Layers 
  },
  { 
    title: "E-Commerce Apps", 
    desc: "Conversion-optimized shopping applications, marketplace apps, custom digital wallets, one-tap Stripe checkout integrations, and loyalty reward features.", 
    icon: ShoppingBag 
  },
  { 
    title: "Business Applications", 
    desc: "Enterprise-grade CRM mobile portals, ERP systems, employee management workflows, offline synchronization, and secure internal operations platforms.", 
    icon: Layers3 
  },
  { 
    title: "AI Powered Apps", 
    desc: "Intelligent applications equipped with localized LLM AI assistants, smart automated recommendations, custom ChatGPT prompts, and speech recognition engines.", 
    icon: Sparkles 
  },
  { 
    title: "SaaS Applications", 
    desc: "Cloud-based subscription platforms, real-time analytics dashboards, microservices-backed backends, and multi-tenant mobile software systems.", 
    icon: Database 
  },
  { 
    title: "On-Demand Applications", 
    desc: "Complex geolocated booking apps, service delivery portals, on-demand marketplaces, and real-time interactive driver tracking maps.", 
    icon: MapPin 
  },
  { 
    title: "App Maintenance", 
    desc: "Continuous service support, system updates, security patches, performance optimization audits, SDK upgrades, and quick bug resolutions.", 
    icon: ShieldAlert 
  },
  { 
    title: "App Store Optimization (ASO)", 
    desc: "Aggressive organic App Store SEO strategy, metadata listing refinement, high-intent keyword positioning, and targeted marketing campaigns.", 
    icon: Search 
  },
];

export function MobileServicesGrid() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 bg-black border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Mobile App Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We engineer custom, high-speed, secure mobile applications designed to optimize enterprise workflows and generate repeat business.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {mobileServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.08 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-colors group flex flex-col lg:col-span-1 md:col-span-1"
            >
              <div className="shrink-0 h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:bg-indigo-500/20 transition-all duration-300 mb-5">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base mb-2 text-foreground group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-xs text-muted leading-relaxed flex-grow">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
