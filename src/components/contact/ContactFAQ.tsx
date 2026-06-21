"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How do I start a project?",
    answer: "To initiate a project, simply fill out our multi-step contact form on this page, specifying your business goals, required services, project timeline, and budget estimation. Alternatively, you can email your project brief directly to hello@digipeak.agency. A growth consultant will review the scope and schedule a discovery call.",
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary depending on complexity and scope. Typical web design and development projects range from 4 to 8 weeks, brand identity design systems take 3 to 5 weeks, while marketing campaigns, SEO, and ongoing maintenance operate as retainer-based engagements with monthly milestones.",
  },
  {
    question: "Do you work internationally?",
    answer: <>Yes, Digipeak is a global growth partner. While headquartered in Sri Lanka, we actively support corporate and SME clients across <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, the United Arab Emirates, Saudi Arabia, Singapore, Australia, New Zealand, the United Kingdom, and other international markets. 100% of international coordination is handled via remote communication tools.</>,
  },
  {
    question: "Can we schedule a consultation?",
    answer: "Absolutely. When you submit an inquiry, we review your project scope and follow up with a scheduler link. This allows you to book a free 30-minute discovery call directly with our strategy team.",
  },
  {
    question: "Do you provide custom proposals?",
    answer: "Yes. We do not use standard off-the-shelf templates. Following a discovery call, our strategists assemble a tailored proposal detailing deliverables, timelines, pricing options, and strategic ROI opportunities custom-mapped to your business targets.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes, we work with ambitious, funded startups looking to establish solid digital foundations, scale search footprint quickly, and deploy fast-converting assets to raise capital or win customers.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. Our Hosting & Website Maintenance division provides ongoing managed updates, weekly backups, security audits, database cleaning, server speed tuning, and fast developer support tickets.",
  },
  {
    question: "Can we request multiple services?",
    answer: "Yes, we build integrated systems. Most of our clients bundle services — combining Custom Web Design with SEO Campaigns and performance Paid Advertising to ensure visual and operational compounding results.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent-secondary/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.015] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Contact &amp; Proposal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                FAQs.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass border border-white/10 rounded-2xl overflow-hidden hover:border-accent-primary/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left text-white select-none cursor-pointer"
                >
                  <span className="font-heading font-bold text-base md:text-lg">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-sm md:text-base text-muted leading-relaxed border-t border-white/5 pt-4">
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
