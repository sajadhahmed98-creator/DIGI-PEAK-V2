"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

export const seoFaqs = [
  {
    question: <>What makes Digipeak a strong SEO partner for businesses in <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link> & Dubai?</>,
    answer: "We combine technical SEO expertise with AI-assisted content strategies to build organic visibility in highly competitive GCC markets. Our focus is on measurable business outcomes — qualified traffic, leads, and revenue — rather than vanity metrics.",
  },
  {
    question: "How long does it take to see results from Enterprise SEO Services?",
    answer: "While technical fixes and indexation optimization can yield ranking bumps within 4-6 weeks, generating compounding, high-intent commercial traffic typically takes 3 to 6 months depending on the keyword difficulty in markets like Sydney or the UK.",
  },
  {
    question: "Do you guarantee #1 rankings on Google?",
    answer: "No reputable agency can guarantee a #1 ranking due to Google's ever-changing algorithm. However, we guarantee the deployment of enterprise-grade technical architectures and data-driven content strategies that historically place our clients in the top 3 positions for their most profitable keywords.",
  },
  {
    question: "What is included in an SEO Audit?",
    answer: "Our SEO Audits cover over 200 checkpoints including Core Web Vitals, server logs, crawl budget allocation, JavaScript rendering, backlink toxicity, topical authority gaps, and competitor reverse-engineering.",
  },
  {
    question: "How does International SEO differ from Local SEO?",
    answer: <>Local SEO focuses on dominating the Map Pack and localized searches (e.g., 'SEO Agency <Link href="/doha" className="underline hover:text-accent-primary transition-colors">Doha</Link>'). International SEO involves complex hreflang architecture, geo-targeting, and multi-lingual content to scale your brand across regions like Singapore, Auckland, and London simultaneously.</>,
  },
  {
    question: "Why do E-Commerce platforms like Shopify need specialized SEO?",
    answer: "E-Commerce SEO requires managing thousands of dynamic URLs, preventing duplicate content from faceted navigation, optimizing crawl budgets, and implementing complex Product schemas to win rich snippets in SERPs.",
  },
  {
    question: "Are your link-building strategies safe from Google penalties?",
    answer: "Absolutely. We strictly adhere to white-hat link acquisition through digital PR, broken link building, and high-quality outreach. We never use PBNs (Private Blog Networks) or toxic link farms.",
  },
  {
    question: "Do you provide transparent SEO reporting?",
    answer: "Yes. You receive access to a live, 24/7 custom dashboard that tracks organic traffic, keyword movement, backlink acquisition, and most importantly, the revenue generated directly from our SEO efforts.",
  },
  {
    question: "Can SEO replace my Google Ads (PPC) spend?",
    answer: "In the long term, yes. SEO traffic is compounding and free per click. Many of our clients drastically reduce or eliminate their paid ad spend once their organic rankings mature, resulting in a much higher overall ROI.",
  },
  {
    question: "How does AI impact your SEO strategies?",
    answer: "We use AI to accelerate data analysis, identify semantic content gaps, predict algorithm shifts, and automate technical auditing. However, all strategy and final content execution are managed by senior SEO engineers to ensure maximum quality.",
  },
];

export function SEOFAQ() {
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
              SEO <span className="text-gradient-primary">Knowledge Base.</span>
            </h2>
            <p className="text-muted text-lg">
              Everything you need to know about our enterprise organic growth strategies.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {seoFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-accent-primary/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-accent-primary' : 'text-foreground group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-accent-primary/20 border-accent-primary text-accent-primary rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
