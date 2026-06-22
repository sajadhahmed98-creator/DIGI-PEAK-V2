"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Who is Sajadh Ahmed?",
    answer: "Sajadh Ahmed is the Founder & Chief Strategist of Digipeak Agency, an enterprise performance marketing and digital engineering consultancy. Based in Colombo, Sri Lanka, Sajadh specializes in architecting high-performance B2B growth funnels, enterprise SEO architectures, conversion rate optimization (CRO), and advanced Next.js web applications that scale client pipeline and authority.",
  },
  {
    question: "What services does Sajadh Ahmed offer?",
    answer: "As Chief Strategist, Sajadh provides high-level growth consulting, enterprise SEO blueprinting, conversion rate optimization (CRO) audits, B2B digital systems architecture, full-funnel customer acquisition strategy, CRM/HubSpot integration mapping, and custom web design and Next.js engineering directions.",
  },
  {
    question: "Where is Sajadh Ahmed located?",
    answer: "Sajadh is headquartered and based in Colombo, Sri Lanka. From this regional hub, he operates digitally, collaborating with corporate clients, startups, and agencies around the globe.",
  },
  {
    question: "Can businesses work remotely with Sajadh Ahmed?",
    answer: <>Absolutely. 100% of international projects are delivered remotely. Sajadh collaborates with businesses across <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, <Link href="/locations/uae" className="underline hover:text-accent-primary transition-colors">UAE</Link>, <Link href="/saudi-arabia" className="underline hover:text-accent-primary transition-colors">Saudi Arabia</Link>, Singapore, Australia, New Zealand, and the United Kingdom using modern collaborative workflows (Slack, WhatsApp, Zoom, email, Figma, and Google Workspace) to ensure seamless delivery.</>,
  },
  {
    question: "What industries does Sajadh Ahmed work with?",
    answer: "Sajadh has collaborated with a wide array of sectors, including luxury retail, e-commerce stores, real estate agencies, hospitality brands, professional corporate services, technology software firms, digital startups, and individual executives looking to scale their personal brand authority.",
  },
  {
    question: "How can I start a project?",
    answer: "To start a project, simply scroll down to the contact form on this page and submit your name, email, company, country, project scope, and budget estimation. Alternatively, you can write directly to hello@digipeak.agency to schedule a brand discovery call.",
  },
];

export function PersonalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 lg:py-32 px-6 border-t border-white/5 bg-white/[0.01] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent-primary/[0.015] rounded-full blur-[120px]" />
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
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/35 bg-accent-secondary/[0.015] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Questions.
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
