"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is the difference between Referral, Reseller, and White Label tracks?",
    answer: "The Referral track is for professionals who want to introduce opportunities and earn passive commissions with zero delivery workload. The Reseller track enables consultants and sales groups to sell package services and bill clients directly under custom margins. The White Label track is silent fulfillment outsourcing for agencies: we execute all work behind the scenes under your agency brand.",
  },
  {
    question: "How are commission payouts calculated and distributed?",
    answer: "All commission payouts and reseller discounts are calculated based on finalized, paid client contract values. We process partner payouts via bank transfer or international wire within 15 days of receiving client invoice payments. Note that all commission calculations are estimates; exact percentages depend on the specific project agreement.",
  },
  {
    question: "Do you sign NDAs to protect my agency's clients?",
    answer: "Absolutely. For both White Label and Reseller partnerships, we execute strict B2B Non-Disclosure Agreements (NDAs) prior to onboarding or project scoping. We serve as your silent delivery team and guarantee that we will never pitch directly to your clients or solicit their business.",
  },
  {
    question: "What regions or target markets do you serve borderlessly?",
    answer: "We support clients globally with specialized execution experience in the Middle East GCC region (Qatar, UAE, Saudi Arabia) and international English-speaking markets (UK, Australia, Singapore). Our technical delivery and campaign teams are fully bilingual in English and Arabic.",
  },
  {
    question: "How do we get sales and scoping support for new leads?",
    answer: "For Resellers and Referral partners, our strategists support you with standard scopes of work, technical audits, and cost estimations. Simply submit the lead details to our team, and we will help you draft proposal packages to secure the client.",
  },
  {
    question: "Are there any joining fees or minimum targets to maintain?",
    answer: "No, joining the Digipeak Partner Network is completely free. There are no startup fees, monthly targets, or minimum client volumes required. We are built to scale on demand as your pipeline grows.",
  }
];

export function PartnerHubFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-4xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Questions</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Clear answers about payouts, client ownership, NDA protections, and how we collaborate.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass rounded-2xl border border-white/5 bg-white/[0.005] overflow-hidden"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex justify-between items-center p-6 text-left transition-colors hover:bg-white/[0.02] cursor-pointer"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="font-heading text-sm md:text-base font-semibold text-white">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="text-xs md:text-sm text-muted leading-relaxed">
                          {item.answer}
                        </p>
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
