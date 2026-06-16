"use client";

import { motion } from "framer-motion";
import { Layout, Building2, UserCircle, Briefcase, ShoppingCart, Code2, Database, LayoutDashboard, Globe2, CreditCard, Server, Box } from "lucide-react";

const categories = [
  {
    title: "Web Design Services",
    description: "Premium visual experiences engineered to build enterprise trust.",
    services: [
      { name: "Corporate Websites", icon: Building2 },
      { name: "Landing Pages", icon: Layout },
      { name: "Portfolio Websites", icon: Briefcase },
      { name: "Personal Brands", icon: UserCircle },
    ]
  },
  {
    title: "Development Services",
    description: "Complex architectures built for unmatched speed and security.",
    services: [
      { name: "Custom Development", icon: Code2 },
      { name: "Headless CMS", icon: Database },
      { name: "API Integrations", icon: Server },
      { name: "Custom Dashboards", icon: LayoutDashboard },
    ]
  },
  {
    title: "E-Commerce Solutions",
    description: "High-converting storefronts optimized for revenue scale.",
    services: [
      { name: "Shopify Development", icon: ShoppingCart },
      { name: "WooCommerce", icon: Globe2 },
      { name: "Custom Marketplaces", icon: Box },
      { name: "Payment Gateways", icon: CreditCard },
    ]
  }
];

export function WebServicesGrid() {
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
              Full-Stack <span className="text-gradient-secondary">Digital Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From premium corporate identities to complex headless e-commerce architectures, we engineer digital platforms that dominate the market.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              {/* Category Gradient Background */}
              <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full transition-opacity duration-500 group-hover:opacity-40
                ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-purple-500' : 'bg-cyan-500'}
              `} />

              <h3 className="font-heading text-2xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-sm text-muted mb-8 leading-relaxed">{category.description}</p>

              <div className="space-y-4 relative z-10">
                {category.services.map((service, i) => (
                  <div key={service.name} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10 transition-colors group/item">
                    <div className={`h-10 w-10 shrink-0 rounded-lg flex items-center justify-center border transition-colors
                      ${index === 0 ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover/item:text-blue-300 group-hover/item:border-blue-400' : 
                        index === 1 ? 'bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover/item:text-purple-300 group-hover/item:border-purple-400' : 
                        'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover/item:text-cyan-300 group-hover/item:border-cyan-400'}
                    `}>
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-foreground/90 group-hover/item:text-white transition-colors">{service.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
