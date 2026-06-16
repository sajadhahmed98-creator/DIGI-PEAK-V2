"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Globe, CreditCard, Mail, Cloud, Database } from "lucide-react";

const ecoStack = [
  { name: "Shopify", icon: ShoppingBag, color: "text-green-400" },
  { name: "Shopify Plus", icon: ShoppingBag, color: "text-emerald-500" },
  { name: "WooCommerce", icon: Globe, color: "text-purple-400" },
  { name: "WordPress", icon: Globe, color: "text-blue-400" },
  { name: "Stripe", icon: CreditCard, color: "text-indigo-400" },
  { name: "PayPal", icon: CreditCard, color: "text-blue-500" },
  { name: "Meta Commerce", icon: Database, color: "text-blue-600" },
  { name: "Klaviyo", icon: Mail, color: "text-teal-400" },
  { name: "Mailchimp", icon: Mail, color: "text-yellow-500" },
  { name: "AWS", icon: Cloud, color: "text-orange-400" },
  { name: "Vercel", icon: Cloud, color: "text-white" },
];

export function EcommerceTechStack() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 border-b border-white/5 bg-black">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            E-Commerce <span className="text-gradient-secondary">Technology Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We integrate industry-leading platforms and payment gateways to ensure a seamless, secure, and highly scalable shopping experience.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {ecoStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all group cursor-default"
            >
              <tech.icon className={`h-5 w-5 ${tech.color} group-hover:scale-110 transition-transform`} />
              <span className="font-semibold text-sm text-foreground/90">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
