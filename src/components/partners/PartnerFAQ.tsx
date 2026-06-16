"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Who can join the referral program?",
    a: "Anyone with a professional network interested in referring businesses. Freelancers, agency owners, business/marketing consultants, entrepreneurs, sales professionals, and networkers are all welcome.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "No. Digipeak handles all technical and project work, including discovery, scoping, proposal writing, web design, SEO engineering, implementation, and long-term delivery updates.",
  },
  {
    q: "When do I receive my commission?",
    a: "After successful project completion and payment confirmation from the referred client. We dispatch rewards immediately upon invoice clearance, subject to terms.",
  },
  {
    q: "Can I refer international clients?",
    a: "Yes. We accept referrals globally. Digipeak acts as a borderless agency, serving corporate and SME clients across Qatar, UAE, Saudi Arabia, UK, Singapore, Australia, and internationally.",
  },
  {
    q: "Is there any joining fee?",
    a: "No. Joining the referral partner program is completely free. There are no registration expenses or ongoing subscription fees.",
  },
];

export function PartnerFAQ() {
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
            Everything you need to know about partnering with Digipeak.
          </p>
        </div>

        {/* FAQ Accordion List */}
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
