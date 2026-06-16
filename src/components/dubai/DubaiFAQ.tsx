"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function DubaiFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you work with businesses in Dubai?",
      answer: "Yes, we partner with corporate organizations, startups, and luxury brands across Dubai and the UAE. We serve industries including real estate, hotels, e-commerce, professional firms, and financial entities, helping them build search footprint authority and capture digital leads."
    },
    {
      question: "Can Digipeak provide services remotely?",
      answer: "Absolutely. Digipeak operates from our global headquarters in Sri Lanka, delivering all digital marketing, SEO, web design, and automation services remotely. We manage projects using digital systems (such as ClickUp), messaging channels (Slack or WhatsApp), and video calls (Zoom or Google Meet). This remote delivery model allows us to supply elite creative and development talent without high GCC physical overhead costs."
    },
    {
      question: "Do you offer SEO services in Dubai?",
      answer: "Yes, Search Engine Optimization is a core strategic specialty. We perform regional search volume analysis, establish localized keyword mapping (targeting Dubai Marina, DIFC, etc.), design custom JSON-LD schema networks, and build citations to help you outrank competitors in organic search."
    },
    {
      question: "Can you build websites for Dubai businesses?",
      answer: "Yes, we design and develop custom corporate websites and high-performance e-commerce platforms using headless frameworks like Next.js, React, and server-side systems. This guarantees sub-second speeds, absolute security, and high-converting layouts."
    },
    {
      question: "Do you provide branding services?",
      answer: "Yes. We create cohesive visual brand identity suites, vector logos, corporate font sheets, color boards, and brand guideline documentation to position your business as a premium, trusted leader in the Dubai market."
    },
    {
      question: "Do you work with startups in Dubai?",
      answer: "Yes, we actively collaborate with funded startups and emerging entrepreneurs who need to quickly establish digital foundations, build visual authority, and capture search intent to secure early-stage growth."
    },
    {
      question: "How can I get a proposal?",
      answer: "You can request a custom proposal by visiting our contact page at /contact/ and filling out our multi-step lead system. Our strategy and engineering team will review your business presence, arrange a discovery video call, and provide a tailored strategic roadmap."
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
              Dubai Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">FAQ.</span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Frequently asked questions regarding our remote collaboration model, services, and proposal processes for Dubai clients.
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
