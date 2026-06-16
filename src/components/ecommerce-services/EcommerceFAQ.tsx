"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export const ecoFaqs = [
  {
    question: "Should I choose Shopify or WooCommerce for my store?",
    answer: "Shopify is a fully managed SaaS platform, perfect for brands wanting rapid deployment, built-in security, and low maintenance. WooCommerce is open-source (built on WordPress), offering unlimited customization and lower long-term scaling costs, but requires more technical management. We evaluate your specific operational needs before recommending a platform.",
  },
  {
    question: "How much does a custom E-Commerce store cost?",
    answer: "Costs vary significantly based on complexity. A standard Shopify theme customization might take a few weeks, while a custom headless Shopify Plus build or a complex WooCommerce multi-vendor marketplace with custom API integrations requires enterprise-level investment. We provide transparent pricing after our Discovery phase.",
  },
  {
    question: "What is your typical development timeline?",
    answer: "Standard e-commerce stores can launch in 6-8 weeks. Enterprise builds, headless architectures, or stores requiring complex ERP/inventory integrations typically take 10-16 weeks to ensure rigorous QA and frictionless checkout testing.",
  },
  {
    question: "Do you integrate local payment gateways?",
    answer: "Yes. We integrate global gateways like Stripe and PayPal, as well as region-specific gateways crucial for the GCC (e.g., PayTabs, Checkout.com, Tap) and APAC markets to ensure maximum local conversion rates.",
  },
  {
    question: "How do you handle shipping integrations?",
    answer: "We connect your store directly to major carriers (DHL, FedEx, Aramex) and localized fulfillment centers. This allows for automated shipping rate calculations at checkout, label printing, and real-time tracking for customers.",
  },
  {
    question: "Are there limits to the number of products I can sell?",
    answer: "No. Both Shopify Plus and custom WooCommerce architectures are built to scale infinitely. We have experience managing catalogs with tens of thousands of SKUs, utilizing headless databases to maintain lightning-fast load speeds.",
  },
  {
    question: "Is SEO included in your e-commerce builds?",
    answer: "Technical SEO is foundational to our process. We optimize product schemas (JSON-LD), category architecture, internal linking, and Core Web Vitals to ensure your products rank immediately on Google.",
  },
  {
    question: "Do you provide ongoing store maintenance?",
    answer: "Yes. E-Commerce requires constant monitoring. We offer SLAs covering security updates, plugin management, uptime monitoring, and continuous Conversion Rate Optimization (CRO) testing.",
  },
  {
    question: "What is Conversion Rate Optimization (CRO)?",
    answer: "CRO is the continuous process of A/B testing UI elements, optimizing page speed, and refining the checkout flow to convert a higher percentage of your existing traffic into paying customers, directly increasing your ROI.",
  },
  {
    question: "Can you build multi-currency and multi-lingual stores?",
    answer: "Absolutely. For brands expanding globally, we architect stores that dynamically detect user location, serving localized pricing, currencies, and languages without sacrificing SEO equity.",
  },
];

export function EcommerceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-black">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              E-Commerce <span className="text-gradient-secondary">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Everything you need to know about our enterprise e-commerce development process.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {ecoFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-emerald-400' : 'text-foreground group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
                  {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
