"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function VideoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      question: "How much does video production cost?", 
      answer: "The cost of video production depends entirely on the scope of the project, including the type of video, location shoots, script development, animation or motion graphics requirements, editing complexity, and talent sourcing. We provide customized, transparent pricing matrices tailored to your brand's specific creative demands and budget." 
    },
    { 
      question: "Do you create social media reels?", 
      answer: "Yes, we specialize in high-converting, short-form vertical reels, TikToks, and YouTube Shorts. We handle everything from trend analysis and script writing to visual hooks editing, sound transitions, and auto-captions design to maximize engagement and views." 
    },
    { 
      question: "Do you provide drone videography?", 
      answer: "Yes, we offer professional, certified drone videography using top-tier DJI drones. We provide cinematic, high-resolution 4K/8K aerial views for real estate showcases, large scale construction tracking, corporate event footage, and brand commercials." 
    },
    { 
      question: "Can you produce corporate videos?", 
      answer: "Absolutely. We specialize in corporate presentation videos, executive interviews, company profiles, recruitment guides, and internal product explainers designed to scale corporate brand authority and trust globally." 
    },
    { 
      question: "Do you create animated videos?", 
      answer: "Yes, we create custom 2D animated videos, motion graphics banners, explainer reels, and logo animations. We handle narrative outlines, storyboards, character illustration, sound effects integration, and final exports." 
    },
    { 
      question: "How long does production take?", 
      answer: "Timeline depends on the complexity. Simple social media shorts or basic interviews can be compiled in 3 to 7 days. High-end brand documentaries, animated walkthroughs, or complex corporate films typically require 3 to 6 weeks from scripting through pre-production, filming, editing, and final reviews." 
    },
    { 
      question: "Do you provide scripting services?", 
      answer: "Yes. Every video sprint starts with custom script development and conceptual storyboards. Our copywriters structure clear verbal hooks, emotional stories, and precise calls-to-action before we ever power up a camera." 
    },
    { 
      question: "Can you manage video campaigns?", 
      answer: "Yes, we offer complete video marketing integration. We don't just hand over raw files; we manage publishing schedules, design optimized thumbnails, write social captions, run paid video ad campaigns, and track watch-time metrics." 
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
              Video Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Frequently asked questions regarding our filming process, editing, drone videography, and creative timelines.
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
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-red-400' : 'text-foreground group-hover:text-white text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-red-500/20 border-red-500 text-red-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
