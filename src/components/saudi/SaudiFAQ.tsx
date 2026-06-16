"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do you serve businesses in Saudi Arabia?",
    answer: "Yes, we partner with corporate organizations, holdings, startups, and luxury brands across Riyadh, Jeddah, Dammam, Khobar, and other major Saudi regions. We align digital setups with Vision 2030 digital expansion strategies.",
  },
  {
    question: "Can Digipeak provide services remotely?",
    answer: "Absolutely. Digipeak operates from our global headquarters in Sri Lanka, delivering all digital marketing, SEO, web design, and automation services remotely. We manage projects using digital systems (such as ClickUp), messaging channels (Slack or WhatsApp), and video calls (Zoom or Google Meet). This remote delivery model allows us to supply elite creative and development talent without high GCC physical overhead costs.",
  },
  {
    question: "Do you offer SEO services in KSA?",
    answer: "Yes, Search Engine Optimization is a core strategic specialty. We perform regional search volume analysis, establish localized keyword mapping (targeting Riyadh, Jeddah, Dammam, and GCC Arabic terms), design custom JSON-LD schema networks, and build high-authority citations to help you outrank competitors in organic search.",
  },
  {
    question: "Can you build custom corporate websites?",
    answer: "Yes, we design and develop custom corporate websites and high-performance e-commerce platforms using headless frameworks like Next.js, React, and server-side systems. This guarantees sub-second speeds, absolute security, and high-converting layouts.",
  },
  {
    question: "Do you provide branding and creative assets?",
    answer: "Yes. We create cohesive visual brand identity suites, vector logos, corporate font sheets, color boards, and brand guideline documentation to position your business as a premium, trusted leader in the Saudi market.",
  },
  {
    question: "Do you work with startups in Saudi Arabia?",
    answer: "Yes, we actively collaborate with funded startups and emerging entrepreneurs who need to quickly establish digital foundations, build visual authority, and capture search intent to secure early-stage growth.",
  },
  {
    question: "How can I request a custom proposal?",
    answer: "You can request a custom proposal by visiting our contact page at /contact/ and filling out our multi-step lead system. Our strategy and engineering team will review your business presence, arrange a discovery video call, and provide a tailored strategic roadmap.",
  },
];

export function SaudiFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black relative">
      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              Information
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Find answers to common questions regarding our Saudi remote services, design systems, and SEO delivery models.
            </p>
          </motion.div>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 md:p-8 text-left text-white outline-none cursor-pointer"
                >
                  <span className="font-heading font-bold text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 text-white transition-colors">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-muted text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
