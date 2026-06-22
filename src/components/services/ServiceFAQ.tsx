"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: <>What sets Digipeak apart from other agencies in <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link> & Dubai?</>,
    answer: <>We don't rely on outdated tactics. Our approach combines AI-assisted data models and enterprise-grade technical optimisations to build strong organic visibility in highly competitive markets across <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, the <Link href="/locations/uae" className="underline hover:text-accent-primary transition-colors">UAE</Link>, and <Link href="/saudi-arabia" className="underline hover:text-accent-primary transition-colors">Saudi Arabia</Link>. We measure success by revenue generated, not just traffic.</>,
  },
  {
    question: "Do you offer Custom Web Design Services in Sydney and Auckland?",
    answer: "Yes. Our web design agency operates globally, engineering bespoke, headless architectures (Next.js, Shopify Plus) for brands in Sydney, Auckland, and beyond. We ensure every website loads in under a second and is optimized for maximum conversion rate.",
  },
  {
    question: "What makes your Digital Marketing Agency different for UK brands?",
    answer: "As an AI-Powered Digital Agency, our performance marketing and branding agency services in the UK go beyond basic ad management. We integrate custom CRM automation, machine learning lead qualification, and hyper-targeted Meta/Google campaigns to drastically reduce CPA.",
  },
  {
    question: "How long does it take for your SEO Services in Riyadh or Colombo to show ROI?",
    answer: "While technical SEO improvements can be felt within weeks, building high-intent commercial rankings in competitive regions like Riyadh typically takes 3 to 6 months. Our data-driven organic strategies are built for sustainable, long-term growth.",
  },
  {
    question: "Can your AI Solutions integrate with our existing CMS?",
    answer: "Absolutely. As a top AI marketing agency in Singapore and globally, our teams seamlessly integrate custom AI chatbots, workflow automation, and predictive analytics into enterprise platforms like WordPress VIP, HubSpot, and custom Next.js builds to scale your operations effortlessly.",
  },
];

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 px-6 border-t border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Frequent <span className="text-gradient-primary">Inquiries.</span>
            </h2>
            <p className="text-muted text-lg">
              Answers to common questions regarding our digital marketing, web design, and SEO services globally.
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
