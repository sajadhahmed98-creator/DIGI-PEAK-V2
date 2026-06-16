"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Who can join the reseller program?",
    a: "Anyone capable of generating business opportunities for digital services. Marketing freelancers, business consultants, sales teams, and independent sales agents are all welcome to apply.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "No. Digipeak handles delivery and execution entirely behind the scenes, allowing you to focus on your core sales and networking strengths.",
  },
  {
    q: "Can I set my own pricing?",
    a: "Yes. You control your pricing strategy and profit margins. We invoice you at flat partner reseller rates, and you bill the client at your chosen rate.",
  },
  {
    q: "Is there a joining fee?",
    a: "No. The reseller program is completely free to join with zero hidden signup or ongoing subscription costs.",
  },
  {
    q: "Can I sell internationally?",
    a: "Yes. International opportunities are welcome. We coordinate projects globally remotely, ensuring top-tier service delivery across all geographical markets.",
  },
  {
    q: "Do you provide partner support?",
    a: "Yes. We provide sales enablement materials, technical scoping guidelines, and direct communication support to help active partners close digital opportunities.",
  },
];

export function ResellerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-4xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">FAQ</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Everything you need to know about reselling Digipeak B2B services.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass border border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left text-white font-semibold cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4.5 h-4.5 text-indigo-400 shrink-0" />
                    <span className="text-sm md:text-base leading-snug">{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-xs md:text-sm text-muted leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
