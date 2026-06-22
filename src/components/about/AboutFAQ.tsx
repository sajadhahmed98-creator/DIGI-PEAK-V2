"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Who is Digipeak?",
    answer:
      "Digipeak Agency is a full-service digital growth partner founded in 2022 and headquartered in Sri Lanka. We help businesses grow through web design, SEO, digital marketing, branding, AI solutions, CRM automation, video production, and more — serving clients locally and internationally across multiple markets.",
  },
  {
    question: "Where is Digipeak located?",
    answer: <>Digipeak Agency is headquartered in Sri Lanka. We serve clients across <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, <Link href="/locations/uae" className="underline hover:text-accent-primary transition-colors">UAE</Link>, <Link href="/saudi-arabia" className="underline hover:text-accent-primary transition-colors">Saudi Arabia</Link>, Singapore, Australia, New Zealand, the United Kingdom, and other international markets. Our team works remotely, enabling us to deliver world-class digital services to businesses regardless of geography.</>,
  },
  {
    question: "When was Digipeak founded?",
    answer:
      "Digipeak Agency was founded in 2022. Since then, we have been building our capabilities, expanding our service offering to 14+ specialized digital services, and growing our client base internationally.",
  },
  {
    question: "What services does Digipeak offer?",
    answer:
      "Digipeak offers a comprehensive suite of digital growth services including SEO, web design & development, e-commerce development, digital marketing, social media management, branding & creative, AI solutions, UI/UX design, mobile app development, CRM & automation, content marketing, video production, email marketing, reputation management, and hosting & maintenance.",
  },
  {
    question: "Do you work internationally?",
    answer: <>Yes. While headquartered in Sri Lanka, Digipeak actively serves businesses across <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, <Link href="/locations/uae" className="underline hover:text-accent-primary transition-colors">UAE</Link>, <Link href="/saudi-arabia" className="underline hover:text-accent-primary transition-colors">Saudi Arabia</Link>, Singapore, Australia, New Zealand, the United Kingdom, and other global markets. We work remotely with international clients and understand the specific digital landscape requirements of each market we serve.</>,
  },
  {
    question: "What industries do you serve?",
    answer:
      "Digipeak works with businesses across a wide range of industries including retail, e-commerce, real estate, hospitality, healthcare, professional services, technology, education, and more. Our approach is adaptable to the specific dynamics and competitive environment of each industry we support.",
  },
  {
    question: "How can I start a project?",
    answer:
      "You can start by contacting us through our Contact page or reaching out via WhatsApp. We will schedule an initial consultation to understand your business goals, current digital presence, and growth objectives — then provide a tailored proposal with a clear roadmap and pricing.",
  },
  {
    question: "Who is Sajadh Ahmed?",
    answer:
      "Sajadh Ahmed is the founder of Digipeak Agency. He focuses on helping businesses grow through digital marketing, web development, branding, automation, AI solutions and technology-driven strategies. He believes in combining creativity, innovation, and measurable business growth to help brands build stronger digital foundations.",
  },
];

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-black">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Questions.
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Common questions about Digipeak Agency, our services, team, and how we work with clients globally.
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
              transition={{ duration: 0.5, delay: (index % 5) * 0.08 }}
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
                  className={`font-bold text-lg pr-8 transition-colors ${
                    openIndex === index ? "text-accent-primary" : "text-white group-hover:text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-accent-primary/20 border-accent-primary text-accent-primary"
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
                    <div className="px-6 pb-6 text-muted leading-relaxed border-t border-white/5 pt-4">
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
