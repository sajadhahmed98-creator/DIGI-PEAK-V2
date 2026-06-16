"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function EmailFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      question: "What is email marketing?", 
      answer: "Email marketing is the strategic practice of sending marketing, newsletter, and automated lifecycle emails directly to a database of subscribers. It is one of the most effective conversion channels because it targets users who have already expressed interest in your brand and allows for hyper-personalized messaging." 
    },
    { 
      question: "How much does email marketing cost?", 
      answer: "The cost of email marketing depends on list size, target delivery frequencies, and post-purchase campaign complexity. We provide comprehensive, custom campaign packages and setup retainers that cover design, copy drafting, segmentation analysis, flow engineering, and continuous reporting optimizations." 
    },
    { 
      question: "What email platform do you recommend?", 
      answer: "We recommend Klaviyo for E-Commerce brands due to its robust Shopify/WooCommerce triggers. For B2B businesses, we recommend HubSpot or ActiveCampaign for seamless alignment with CRM pipeline workflows. However, we have deep experience working across all major platforms, including Mailchimp, ConvertKit, and Mailerlite." 
    },
    { 
      question: "Do you create email designs?", 
      answer: "Yes, we design fully responsive, high-converting email templates. Our designs are built using clean, modern layouts, visually engaging product displays, clear call-to-action blocks, and fast-loading image assets that are perfectly optimized for both desktop and mobile viewports." 
    },
    { 
      question: "Can you automate our email campaigns?", 
      answer: "Yes, automation is our core specialty. We build end-to-end automated flows, including welcome emails, abandoned cart recovery, post-purchase follow-ups, re-engagement series, and behavior-based custom triggers, so your sales funnel continues to run on autopilot 24/7." 
    },
    { 
      question: "How often should we send emails?", 
      answer: "Frequency depends on your industry and list engagement levels. For active e-commerce brands, sending 2 to 3 targeted newsletters per week is common. For B2B firms, we recommend 1 to 2 high-value thought leadership updates per month. We focus heavily on quality and segmentation to avoid list fatigue and unsubscribe spikes." 
    },
    { 
      question: "Does email marketing still work?", 
      answer: "Absolutely. Email consistently delivers the highest ROI of any digital channel. Unlike public search results and social algorithms which can change overnight, your email list is an owned corporate asset that gives you direct, uninhibited access to your customers' attention." 
    },
    { 
      question: "Can email marketing increase sales?", 
      answer: "Yes, directly. By automating recovery sequences (like abandoned checkouts), upselling previous buyers with relevant product bundles, and nurturing cold list leads with educational thought leadership, email turns passive interest into predictable, repeatable sales." 
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
              Email Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Frequently asked questions regarding our campaign strategy, automated workflows, design templates, and reporting integrations.
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
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-indigo-400' : 'text-foreground group-hover:text-white text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-indigo-500/20 border-indigo-500 text-indigo-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
