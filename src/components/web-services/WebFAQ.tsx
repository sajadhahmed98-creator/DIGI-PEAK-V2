"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export const webFaqs = [
  {
    question: "How much does a custom website cost?",
    answer: "Our web design projects are entirely custom-built for enterprise and mid-market brands. Pricing depends on the complexity (e.g., custom API integrations, headless e-commerce, or corporate lead-gen). After our Discovery phase, we provide a fixed-price proposal tailored to your specific business requirements.",
  },
  {
    question: "How long does it take to design and develop a website?",
    answer: "A standard corporate website takes approximately 4-8 weeks from wireframing to launch. Complex headless e-commerce builds or custom web applications typically range from 8-16 weeks, ensuring rigorous QA and SEO migration protocols are followed.",
  },
  {
    question: "Do you use WordPress or custom code?",
    answer: "We are technology-agnostic. While we build many robust, highly-customized WordPress sites, we also specialize in Next.js, React, Node.js, and headless architectures for projects requiring unmatched speed and security.",
  },
  {
    question: "Will my new website be mobile responsive?",
    answer: "100%. Over 60% of enterprise traffic is mobile. We design mobile-first interfaces that ensure flawless UX and maximum conversion rates across all screen sizes and devices.",
  },
  {
    question: "Do you optimize the new website for SEO?",
    answer: "Yes. Technical SEO is baked into our development architecture. We optimize Core Web Vitals, implement structured data (JSON-LD), ensure clean URL structures, and seamlessly migrate your existing SEO rankings to prevent any traffic drops upon launch.",
  },
  {
    question: "Do you offer Shopify and WooCommerce development?",
    answer: "Absolutely. We build high-converting e-commerce experiences on both Shopify and WooCommerce. We can handle complex catalog migrations, payment gateway integrations, and custom headless storefronts.",
  },
  {
    question: "Will I be able to update the website myself?",
    answer: "Yes. Regardless of the technology stack we use, we implement intuitive Content Management Systems (CMS) and provide comprehensive video training so your team can easily update content, products, and landing pages without coding knowledge.",
  },
  {
    question: "Do you provide website hosting and maintenance?",
    answer: "Yes. We offer military-grade managed hosting on AWS/Vercel, daily backups, 24/7 security monitoring, and continuous technical support to ensure your digital asset remains fast and secure.",
  },
  {
    question: "What happens if I need custom features like a client portal?",
    answer: "We have an in-house team of full-stack engineers capable of building custom web applications, complex API integrations (like Salesforce or HubSpot), bespoke dashboards, and secure client portals.",
  },
  {
    question: "Why should I choose Digipeak over a cheaper freelancer?",
    answer: "A cheap website is an expense; our websites are revenue-generating assets. We bring an entire team of UI/UX designers, full-stack engineers, and senior technical SEOs to guarantee your website not only looks premium but actively scales your business.",
  },
];

export function WebFAQ() {
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
              Web Design <span className="text-gradient-secondary">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Everything you need to know about our web design and development process.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {webFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-cyan-400' : 'text-foreground group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-cyan-400/20 border-cyan-400 text-cyan-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
