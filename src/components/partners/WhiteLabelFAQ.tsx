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
    question: "How does client communication work under White Label?",
    answer: "You manage all client communication, project updates, and direct messaging under your brand. We serve as your silent fulfillment team. If needed, we can provide guidelines, reporting decks, or email templates to help you present technical details to your clients.",
  },
  {
    question: "Do you ever showcase white-label client projects in your portfolio?",
    answer: "Never. All client work completed under a white-label agreement remains strictly confidential. We sign Non-Disclosure Agreements (NDAs) that legally bind us from displaying, discussing, or referencing any white-label project in our public assets or case studies.",
  },
  {
    question: "Can we request custom technical stacks or integrations?",
    answer: "Yes. While we specialize in premium Next.js headless web architectures, custom Shopify/WooCommerce layouts, and Google/Meta Ads campaigns, we can adapt to your specific agency tooling stack, including custom databases, CRM APIs, and custom webhooks.",
  },
  {
    question: "How are project timelines and delivery deadlines managed?",
    answer: "During scoping, we establish strict timeline milestones. Our dedicated project managers track execution metrics and coordinate with your team to ensure all deliverables are handed off on or ahead of the target date.",
  },
  {
    question: "How do we handle client revisions and technical updates?",
    answer: "All projects include a standard revision period. If your client requests changes, simply pass the feedback to our team, and we will update the code, design, or assets under your guidelines.",
  },
  {
    question: "Are there any volume commitments or retainer constraints?",
    answer: "No. You can use our white-label fulfillment services on an ad-hoc project basis or secure dedicated development/SEO retainers for continuous monthly workloads. You scale up or down as you sign new clients.",
  }
];

export function WhiteLabelFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-4xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">White label FAQs</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            White Label Partnership FAQs
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Find details on NDAs, client communication, technical capacity, and wholesale billing structures.
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
