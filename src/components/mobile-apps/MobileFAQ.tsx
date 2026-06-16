"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function MobileFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      question: "How much does mobile app development cost?", 
      answer: "The cost of building a mobile app depends entirely on features, complexity, design specs, and whether it requires custom server integrations. A focused hybrid prototype or MVP might range from $8,000 to $15,000. Comprehensive native consumer apps, complex on-demand delivery apps, or secure enterprise systems with microservice backends typically cost between $25,000 and $75,000+. We compile detailed cost breakdowns during our discovery phase." 
    },
    { 
      question: "How long does it take to build an app?", 
      answer: "A focused application (MVP or high-fidelity prototype) can be launched in 6 to 10 weeks. A comprehensive B2C custom consumer app or complex enterprise workflow app involving database links, security testing, and store publishing usually requires 12 to 20 weeks. Our methodology splits milestones into fortnightly sprints so you see active progress." 
    },
    { 
      question: "Do you develop iOS and Android apps?", 
      answer: "Yes, we develop for both major platforms. We can build native Swift (iOS) and Kotlin (Android) apps for maximum performance. Alternatively, we build high-performance cross-platform apps using Flutter or React Native, which share a single codebase to cut your development budget and timeline in half while maintaining premium, native-like speed." 
    },
    { 
      question: "Do you use Flutter?", 
      answer: "Yes, Flutter is one of our primary frameworks. Created by Google, Flutter compiles directly to machine code for both iOS and Android, resulting in sub-second loading speeds, pixel-perfect layouts, and highly fluid interactive micro-animations. It's the ideal framework for fast-scaling startups and modern enterprises." 
    },
    { 
      question: "Can you publish apps to app stores?", 
      answer: "Absolutely. Publishing can be highly complex due to strict store guidelines. We handle the entire deployment process, compiling binary bundles, setting up Apple Developer and Google Play Console accounts, writing metadata, designing custom app screenshots, and navigating the review cycles to guarantee approval." 
    },
    { 
      question: "Do you provide app maintenance?", 
      answer: "Yes, we offer ongoing maintenance and support packages. Mobile operating systems release major updates annually (iOS & Android). Our support contracts ensure your application is continually updated to support new SDKs, patched against emerging security threats, optimized for runtime speeds, and quickly updated with new features." 
    },
    { 
      question: "Can you build AI-powered mobile apps?", 
      answer: "Yes, AI integration is a core specialty. We can integrate advanced large language models (like OpenAI's GPT or Claude) to build smart voice assistants, custom chatbot recommendations, automated text parsing, programmatic notification builders, and predictive user behavior models directly inside your app." 
    },
    { 
      question: "Do you create custom business applications?", 
      answer: "Yes. Many of our projects are custom internal applications built specifically to optimize enterprise operations. Examples include field sales agent CRM trackers, geolocated warehouse trackers, automated inventory scanners, and custom ERP management dashboards that sync with legacy company databases." 
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
              App Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Frequently asked questions regarding our mobile app engineering process, frameworks, timelines, and costs.
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
