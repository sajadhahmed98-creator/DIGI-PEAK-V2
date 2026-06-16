"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function ContentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      question: "What is content marketing?", 
      answer: "Content marketing is the strategic creation and distribution of valuable, highly relevant, and consistent written assets (such as search-friendly articles, guides, landing pages, and thought leadership columns). Unlike disruptive outbound ads, content marketing pulls prospective customers to your brand by solving their immediate problems and establishing deep credibility." 
    },
    { 
      question: "How does content marketing help SEO?", 
      answer: "SEO and content are inseparable. Search engines exist to deliver answers. By creating authoritative, well-structured content centered around keyword clusters, pillar pages, and clear search intent, you give search crawlers exactly what they need. Highly helpful, detailed copy naturally earns higher rankings, links, and long-term organic authority." 
    },
    { 
      question: "How many blogs should I publish?", 
      answer: "Frequency depends on your industry competitiveness and goals. For active brand index growth, we recommend publishing 2 to 4 high-quality, comprehensive SEO articles per week. However, quality always triumphs over volume. A single exhaustive, keyword-optimized pillar page will out-rank ten short, low-value blog posts." 
    },
    { 
      question: "Do you provide SEO content writing?", 
      answer: "Yes, we provide end-to-end professional SEO content writing. Our copywriting team combines qualitative user-centric storytelling with deep semantic optimization (using Surfer SEO, SEMrush, and Ahrefs) to write copy that is highly engaging for human readers and perfectly optimized for indexing algorithms." 
    },
    { 
      question: "Do you manage blogs?", 
      answer: "Yes, we offer complete Blog Management. This is a fully hands-off service where we handle audience persona analysis, compile editorial content calendars, write, edit, format, perform internal linking structures, publish directly to your CMS (WordPress, Webflow, Notion), and track ongoing organic ranking metrics." 
    },
    { 
      question: "Can content generate leads?", 
      answer: "Absolutely. Content is a powerful lead generation funnel. By targeting informational searches (middle-of-funnel) and integrating clear conversion calls-to-action, downloadable templates, and customized sales copywriting, we seamlessly guide reader traffic into high-converting lead pipelines." 
    },
    { 
      question: "How long before content ranks?", 
      answer: "New content typically takes 3 to 6 months to mature and claim dominant page 1 rankings. However, for established domains with strong authority, rank indexing can occur in days. We deploy active internal linking networks and request manual search console indexing to accelerate this timeline." 
    },
    { 
      question: "Do you provide content strategy?", 
      answer: "Yes. Every writing sprint begins with a tailored Content Strategy. We map out your target customer personas, analyze competitor gaps, define high-value search intent clusters, prepare editorial calendars, and set up clear key performance indicator (KPI) dashboards." 
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
              Content Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Frequently asked questions regarding our editorial writing process, search optimizations, publishing, and strategy.
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
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-amber-400' : 'text-foreground group-hover:text-white text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-amber-500/20 border-amber-500 text-amber-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
