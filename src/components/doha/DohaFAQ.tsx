"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function DohaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you work with businesses in Doha?",
      answer: "Yes, we actively partner with corporate clients, SMEs, and startups across Doha and the wider GCC region. We serve industries including real estate, luxury hospitality, retail, and professional services, helping them build visual authority and dominate local search rankings."
    },
    {
      question: "Can projects be managed remotely?",
      answer: "Absolutely. Digipeak operates from our global headquarters in Sri Lanka, delivering premium services entirely remotely. We coordinate projects via digital project portals (like ClickUp), active messaging channels (Slack or WhatsApp Business), and regular video calls (Google Meet or Zoom). This model eliminates high local GCC overhead costs while providing access to elite international design and development talent."
    },
    {
      question: "Do you offer SEO services in Doha?",
      answer: "Yes, Search Engine Optimization is a core specialty. We build specialized search intent keyword maps, write custom local schemas, build white-hat citation maps, and construct optimized landing layouts to ensure your company outranks competitors in Doha SERPs."
    },
    {
      question: "Can Digipeak build websites for Doha businesses?",
      answer: "Yes, we develop custom high-performance corporate websites and e-commerce stores using modern headless Next.js, React, and server-side configurations. This ensures sub-second page loads, maximum security, and high-converting user interfaces."
    },
    {
      question: "Do you provide branding services?",
      answer: "Yes. We design comprehensive visual identity packages, vector logo structures, typography pairings, color specifications, and brand guideline documents to position your organization as a luxury industry leader in Doha."
    },
    {
      question: "Do you work with startups in Doha?",
      answer: "Yes, we collaborate with ambitious, funded startups looking to establish digital foundations, scale search footprints quickly, and build visual credibility to attract GCC investors and customers."
    },
    {
      question: "How do projects begin?",
      answer: "Collaboration starts when you visit our contact page at /contact/ and submit our multi-step lead system. Our strategy and engineering team will review your business presence, schedule a video discovery call, and present a custom strategic proposal."
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
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
              Doha Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">FAQ.</span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Frequently asked questions regarding our remote collaboration model, custom services, timelines, and workflows for Doha-based clients.
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
