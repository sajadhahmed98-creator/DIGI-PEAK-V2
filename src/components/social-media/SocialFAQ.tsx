"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function SocialFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: "How many posts per month do you create?", answer: "This depends entirely on your strategy and platform focus. A standard engagement package typically includes 12-15 high-quality posts across selected platforms, but we customize frequency based on what the algorithm requires for growth." },
    { question: "Do you create the content or do I have to provide it?", answer: "We are a full-service creative agency. We handle everything from graphic design and copywriting to video editing and motion graphics. While we welcome any assets you have, we produce everything needed to execute the strategy." },
    { question: "Do you manage Instagram?", answer: "Yes, Instagram is a core pillar for most of our B2C and visually-driven B2B clients. We manage Grid curation, Story execution, Reels strategy, and daily community engagement." },
    { question: "Do you manage LinkedIn?", answer: "Absolutely. LinkedIn is the premier platform for our B2B clients. We optimize corporate pages, develop executive thought leadership content, and execute targeted account-based marketing strategies." },
    { question: "How long before we see results?", answer: "While a spike in aesthetic quality and consistency is immediate, meaningful community growth and algorithm traction typically takes 60-90 days. We focus on sustainable, compounding growth over short-term gimmicks." },
    { question: "Do you provide performance reporting?", answer: "Yes. Transparency is critical. You will receive comprehensive monthly reports detailing audience growth, reach, engagement rates, top-performing content, and actionable insights for the following month." },
    { question: "Do you create Reels and TikToks?", answer: "Yes. Short-form video is currently the highest-reach format available. Our creative team produces high-retention Reels, TikToks, and YouTube Shorts natively optimized for each platform's algorithm." },
    { question: "Can you manage multiple accounts?", answer: "Yes. Our enterprise packages cover comprehensive ecosystem management across Instagram, LinkedIn, TikTok, Facebook, and YouTube simultaneously." },
    { question: "Do you reply to comments and DMs?", answer: "Yes. Community management is built into our core packages. We handle daily moderation, reply to comments, engage with followers, and flag customer service inquiries to your internal team." },
    { question: "Will I approve the content before it goes live?", answer: "Always. We operate on a monthly content calendar system. You will receive all creatives and copy for review, feedback, and final approval before anything is published." },
    { question: "How do you learn our brand voice?", answer: "During our Discovery phase, we conduct deep-dive interviews and review existing brand guidelines to develop a comprehensive Tone of Voice document. We ensure every caption sounds authentically like your brand." },
    { question: "Do you do influencer marketing?", answer: "Yes. For clients where it makes strategic sense, we manage influencer outreach, contract negotiation, content brief development, and campaign tracking." },
    { question: "What is your hashtag strategy?", answer: "We utilize a tiered hashtag approach (mixing broad, niche, and branded tags) that we continuously test and rotate based on performance data to maximize algorithmic discovery." },
    { question: "Do you run social media ads as well?", answer: "Yes. While organic social builds the community, paid social scales revenue. Our Performance Marketing division manages hyper-targeted Meta, LinkedIn, and TikTok ad campaigns." },
    { question: "How do we get started?", answer: "It starts with a Discovery call. We analyze your current presence, understand your business goals, and then present a custom proposal and strategic roadmap." },
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
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Everything you need to know about our community management systems.
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
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-pink-400' : 'text-foreground group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-pink-500/20 border-pink-500 text-pink-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
