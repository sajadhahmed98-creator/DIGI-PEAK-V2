"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

export function SriLankaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you provide SEO services across Sri Lanka?",
      answer: "Yes, we are a leading SEO company in Sri Lanka. We offer comprehensive local and national SEO services, including technical audits, keyword optimization, and link building to ensure your business ranks highly in Google for targeted commercial keywords across all major cities."
    },
    {
      question: "Do you offer web design services in Colombo and other cities?",
      answer: "Absolutely. As a premium web design company in Sri Lanka, we build ultra-fast, high-converting Next.js websites for clients in Colombo, Kandy, Gampaha, and nationwide. Our web development focuses on exceptional UI/UX, mobile responsiveness, and technical excellence."
    },
    {
      question: "Can Digipeak manage social media marketing campaigns in Sri Lanka?",
      answer: "Yes, our social media marketing agency manages end-to-end campaigns across Facebook, Instagram, LinkedIn, and TikTok. We create localized, high-engagement content and run targeted performance marketing and Google Ads to drive lead generation and sales."
    },
    {
      question: "Do you provide branding services for businesses?",
      answer: "As a full-service creative agency, we offer complete brand identity systems. Our branding agency services include logo design, brand strategy, visual guidelines, and corporate identity development to help your business stand out in the competitive Sri Lankan market."
    },
    {
      question: "Do you offer photography and videography services?",
      answer: "Yes, we provide professional corporate photography and videography services across Sri Lanka. From high-end commercial shoots, corporate headshots, and product photography to promotional video production, our media team delivers stunning visual assets."
    },
    {
      question: "Can Digipeak build e-commerce websites?",
      answer: "Certainly. We specialize in custom e-commerce development in Sri Lanka. Whether you need a headless Shopify build or a custom Next.js storefront, we engineer secure, fast, and highly scalable online stores integrated with local payment gateways."
    },
    {
      question: "Do you provide website hosting and maintenance services?",
      answer: "Yes, as a reliable website hosting company in Sri Lanka, we provide enterprise-grade cloud hosting, automated backups, continuous security monitoring, and dedicated maintenance packages to keep your digital assets running flawlessly 24/7."
    },
    {
      question: "Do you offer AI automation solutions for businesses in Sri Lanka?",
      answer: "We are a pioneering AI agency in Sri Lanka, offering advanced AI solutions, CRM automation, and business automation workflows. We integrate intelligent chatbots, automated lead nurturing pipelines, and data analytics tools to streamline your operations and accelerate business growth."
    }
  ];

  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-black">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
              Sri Lanka Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">FAQ.</span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Common questions about our digital marketing, web development, and creative agency services in Sri Lanka.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${
                openIndex === index
                  ? "border-accent-primary/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span
                  className={`font-bold text-base md:text-lg pr-8 transition-colors ${
                    openIndex === index ? "text-accent-primary" : "text-white group-hover:text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-accent-primary/20 border-accent-primary text-accent-primary rotate-180"
                      : "bg-white/5 border-white/10 text-muted group-hover:text-white"
                  }`}
                >
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
                    <div className="px-6 pb-6 pt-0 text-muted text-xs md:text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
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
