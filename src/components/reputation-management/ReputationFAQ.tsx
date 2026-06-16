"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function ReputationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      question: "What is reputation management?", 
      answer: "Online Reputation Management (ORM) is the practice of monitoring, shaping, and improving how your brand or business is perceived online. It involves active review generation on platforms like Google Business Profile and Trustpilot, sentiment listening across social media, responding to customer feedback, and promoting positive client stories to build impenetrable digital trust." 
    },
    { 
      question: "How can reputation management help my business?", 
      answer: "ORM directly impacts client acquisition. Since 93% of prospective buyers read online feedback before purchasing, a strong 5-star listing acts as passive sales collateral. High ratings increase Google search visibility, attract premium customers, reduce purchasing hesitation, and directly lift conversion rates across all your marketing channels." 
    },
    { 
      question: "How do you increase Google reviews?", 
      answer: "We design and integrate automated customer feedback funnels that solicit reviews post-transaction via SMS, Email, or WhatsApp. We build custom landing pages that make it frictionless for users to leave a rating and use private sentiment interceptors to resolve customer issues internally before they turn into public negative comments." 
    },
    { 
      question: "Can you monitor our online reputation?", 
      answer: "Yes. We set up 24/7 brand monitoring using tools like Brand24 and Mention to track brand keywords, competitor listings, and customer sentiment across social networks, forums, blogs, and review sites, sending instant alerts whenever your brand is mentioned." 
    },
    { 
      question: "How long does reputation management take?", 
      answer: "Generating review momentum begins immediately after launching our automated feedback setup (typically within 7 to 14 days). Substantial rating improvements and search engine local map package placement increases typically mature within 30 to 90 days of consistent campaigns." 
    },
    { 
      question: "Can negative reviews be managed?", 
      answer: "Yes, strategically. While platforms rarely delete legitimate reviews, we manage them by setting up professional response playbooks that resolve issues in public view, demonstrating excellent customer service. Additionally, we build robust positive review generation systems that dilute negative comments and push your overall average back up." 
    },
    { 
      question: "Do reviews affect SEO rankings?", 
      answer: "Yes, significantly. Search engines favor trust signals. Google Business Profile reviews are one of the heaviest local search ranking factors. The quantity, rating score, and keyword relevance of reviews directly determine local map placements and map pack visibility." 
    },
    { 
      question: "How do you improve trust online?", 
      answer: "We build social proof systems. This includes creating reviews widgets on key product pages, building high-fidelity client video testimonials, publishing detailed customer success stories, maintaining updated business listings, and securing brand monitoring protocols." 
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
              Reputation Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Frequently asked questions regarding our review generation systems, brand sentiment alerts, local SEO rating impacts, and monitoring tools.
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
