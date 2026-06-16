"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Layout, Code2, Users, Database, Repeat, Truck, Box } from "lucide-react";

const ecoServices = [
  { title: "Custom E-Commerce", desc: "Bespoke storefronts built on headless architectures for unmatched speed and infinite scalability.", icon: Code2 },
  { title: "Marketplace Development", desc: "Multi-vendor platforms engineered to handle thousands of sellers, products, and complex payouts.", icon: Layout },
  { title: "B2B Commerce Solutions", desc: "Wholesale portals with custom pricing tiers, bulk ordering, and strict inventory integration.", icon: Users },
  { title: "Subscription Commerce", desc: "Recurring billing engines designed to maximize Customer Lifetime Value (CLV).", icon: Repeat },
  { title: "Dropshipping Systems", desc: "Fully automated fulfillment flows connected directly to your international suppliers.", icon: Truck },
  { title: "Inventory Integration", desc: "Real-time sync between your web store, physical POS, and ERP systems.", icon: Box },
];

export function EcommerceServicesGrid() {
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
              Comprehensive <span className="text-gradient-secondary">E-Commerce Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From robust multi-vendor marketplaces to sophisticated B2B portals, we build systems that handle complex operations effortlessly.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecoServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-colors group flex items-start gap-4"
            >
              <div className="shrink-0 h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300">
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
