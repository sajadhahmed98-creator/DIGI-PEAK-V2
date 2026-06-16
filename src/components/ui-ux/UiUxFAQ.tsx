"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function UiUxFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      question: "What is UI/UX design?", 
      answer: "UI (User Interface) design focuses on the visual and aesthetic aspects of a digital product—such as color palettes, custom typography, spacing, imagery, and visual structure. UX (User Experience) design is the architectural blueprint—how easily a user navigates the product, structures their objectives, and completes tasks without friction. We combine both disciplines to engineer interfaces that look premium and convert visitors into customers." 
    },
    { 
      question: "Why is UX important for business growth?", 
      answer: "Superior user experience directly boosts your bottom line. Optimized UX lowers customer acquisition costs (CAC), elevates retention rates, minimizes customer support tickets, and increases conversion ratios. Statistical studies show that every $1 spent on professional UX returns up to $100 in business growth—a massive 9,900% ROI driven by conversion-focused layout structures." 
    },
    { 
      question: "How much does UI/UX design cost?", 
      answer: "Our project pricing is customized based on scope, visual complexity, and requirements. Focused marketing website designs or single high-converting landing pages generally range from $2,500 to $5,500. Large-scale SaaS portals, complex corporate software platforms, and mobile apps requiring bespoke modular design systems and deep UX research range from $12,000 to $45,000+. We outline clear delivery stages for all scopes." 
    },
    { 
      question: "Do you design mobile apps?", 
      answer: "Yes, we specialize in high-fidelity mobile app interfaces. We design native iOS and Android experiences using Apple Human Interface Guidelines and Google Material Design frameworks. Every layout we build is fully responsive, optimized for tap targets, and packed with smooth micro-animations that feel premium." 
    },
    { 
      question: "Do you create Figma designs?", 
      answer: "Figma is our primary design workspace. We deliver meticulously structured, pixel-perfect Figma project files. These include automated layout rules (auto-layout), dynamic style tokens, and comprehensive custom component libraries. This allows your internal developers to inspect styles, extract clean assets, and build with absolute efficiency." 
    },
    { 
      question: "Can you redesign existing websites?", 
      answer: "Yes, website redesign is one of our core services. We start by conducting a comprehensive heuristic UX audit to locate drop-off points, performance bottlenecks, and structural friction on your current site. We then engineer a complete aesthetic and structural visual overhaul designed specifically to maximize user engagement and conversions." 
    },
    { 
      question: "How long does UI/UX design take?", 
      answer: "A standard project (such as a multi-page corporate website or conversion landing page) takes about 3 to 5 weeks from discovery to final assets. Massive enterprise CRM dashboards or custom native mobile applications requiring rigorous prototyping, multi-tier flow mapping, and user testing require 8 to 12 weeks." 
    },
    { 
      question: "Do you conduct UX research?", 
      answer: "Absolutely. Human-centered design requires thorough research. We never design based on guesswork. We conduct user interviews, mapping surveys, heatmap audits, heat-mapping assessments, and usability tests to ensure that every button placement, layout flow, and visual token is backed by quantitative data." 
    },
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
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
              UI/UX Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Frequently asked questions regarding our design process, pricing, assets, and technologies.
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
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-rose-500/50 shadow-[0_0_30px_rgba(244,63,94,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-rose-400' : 'text-foreground group-hover:text-white text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-rose-500/20 border-rose-500 text-rose-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
                    <div className="px-6 pb-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-2 pt-4">
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
