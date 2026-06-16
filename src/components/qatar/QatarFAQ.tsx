"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

export function QatarFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Does Digipeak have a physical office in Qatar?",
      answer: "No, Digipeak operates from our global headquarters in Sri Lanka. We serve Qatar-based businesses remotely using digital project management tools, secure communication channels, and video collaboration. This remote service model allows us to supply top-tier international engineering and digital marketing talent to the GCC region without passing on expensive local overhead costs to our clients."
    },
    {
      question: <>What digital services do you provide for businesses in <Link href="/doha" className="underline hover:text-accent-primary transition-colors">Doha</Link> and across Qatar?</>,
      answer: "We provide a comprehensive suite of high-performance digital services tailored for the Qatari market. These include Search Engine Optimization (SEO), modern Next.js web design and development, custom e-commerce systems, premium branding and visual identity systems, social media management, Google & Meta ads management, business automation, and premium cloud hosting."
    },
    {
      question: "How do we collaborate and communicate during a project?",
      answer: "We ensure complete transparency and structured delivery. We utilize dedicated project portals (like ClickUp), active communication channels (Slack or WhatsApp Business), and regular video updates (Google Meet or Zoom) to coordinate. You also receive direct access to live Looker Studio reporting dashboards showing real-time metrics for all digital campaigns."
    },
    {
      question: "How do you handle contract payments from Qatar?",
      answer: "We accept payments via standard international bank transfers or secure online billing channels. Our contracts are organized around performance-based milestones, meaning invoices are only generated as we achieve predefined project delivery phases, ensuring absolute security and trust."
    },
    {
      question: "Why should a Qatari business choose a remote partner over a local agency?",
      answer: "Working with Digipeak gives you direct access to international specialists and modern technical architectures (like headless React and fast server-side rendering) that local agencies often lack. We eliminate high regional overhead markups, providing premium engineering, transparent analytics, and high-converting creative work at an optimized cost."
    },
    {
      question: "How does your SEO strategy target the local Qatar market?",
      answer: <>We build localized keyword maps targeting high-intent search volumes in <Link href="/doha" className="underline hover:text-accent-primary transition-colors">Doha</Link> and across Qatar. Our SEO work includes writing custom schema structures, managing Google Business Profiles, optimizing localized content, and running local citation campaigns to ensure your company dominates search engine result pages (SERPs).</>
    },
    {
      question: "How do we get started with a custom proposal?",
      answer: "You can initiate the process by visiting our contact page at /contact/ and filling out our multi-step lead system. Our founder and strategy team will audit your current digital channels and organize a video consultation to present a customized technical and marketing proposal."
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
              Qatar Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">FAQ.</span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Frequently asked questions regarding our remote collaboration model, custom services, timelines, and workflows for Qatar-based clients.
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
