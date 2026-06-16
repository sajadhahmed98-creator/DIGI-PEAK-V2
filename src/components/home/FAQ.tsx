"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
// We need to use standard React hooks instead of framer-motion/client since it's a client component
import * as React from "react";
import Link from "next/link";

const faqs = [
  {
    question: <>Why are you considered the best digital marketing agency in <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link> and Dubai?</>,
    answer: "We are an engineering-first agency. While others focus purely on aesthetics, we build enterprise-grade, headless web architectures combined with data-driven SEO strategies that guarantee measurable ROI and dominant market positioning.",
  },
  {
    question: "How long does custom website design and development take?",
    answer: "A standard premium website project takes between 4 to 8 weeks from discovery to launch. Enterprise platforms and custom AI solutions may take 12+ weeks depending on complexity.",
  },
  {
    question: "Do you guarantee results for your SEO services?",
    answer: "We guarantee the implementation of world-class, white-hat technical SEO services and content strategies that historically drive significant organic growth for our clients. Due to search engine algorithm volatility, no ethical agency can guarantee specific keyword rankings.",
  },
  {
    question: "Do you offer web design and SEO services in London, Sydney, or Singapore?",
    answer: <>Yes, we are a global agency with primary target markets in <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, <Link href="/uae" className="underline hover:text-accent-primary transition-colors">UAE</Link>, <Link href="/saudi-arabia" className="underline hover:text-accent-primary transition-colors">Saudi Arabia</Link>, Australia, Singapore, and the UK. Our distributed team allows us to provide 24/7 support and localized marketing strategies for these regions.</>,
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions.</span>
          </h2>
          <p className="text-muted text-lg">
            Everything you need to know about partnering with Digipeak.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none"
              >
                <span className="font-bold text-lg text-foreground pr-8">{faq.question}</span>
                <div className="shrink-0 h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary transition-transform">
                  {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
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
