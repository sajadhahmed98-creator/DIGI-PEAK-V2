"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function AIFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: "What AI solutions do you provide?", answer: "We provide end-to-end AI automation. This includes custom GPTs, intelligent customer support chatbots (website & WhatsApp), CRM automation, lead qualification workflows, programmatic content generation, and full business intelligence dashboards using advanced language models." },
    { question: "How much does AI automation cost?", answer: "Costs vary based on complexity. A standalone AI customer support chatbot might range from $1,500 to $3,500, while a comprehensive enterprise automation architecture linking your CRM, marketing, and internal data silos can range from $10,000 to $50,000+. We always calculate the ROI during discovery to ensure the system pays for itself." },
    { question: "Can AI integrate with our current CRM?", answer: "Yes. We build intelligent bridges. Whether you use Salesforce, HubSpot, Zoho, Pipedrive, or Airtable, we utilize platforms like Make, Zapier, or direct API webhooks to allow AI to read, write, and update your databases in real-time." },
    { question: "Do you build custom AI chatbots?", answer: "Yes. We do not use off-the-shelf basic bots. We train advanced language models (like OpenAI's GPT-4 or Anthropic's Claude) directly on your company's proprietary data, website content, and PDFs, ensuring it answers questions exactly like your best employee." },
    { question: "How long does AI implementation take?", answer: "A focused chatbot integration can be deployed in 2-3 weeks. Complex enterprise workflows involving multi-system integration, custom Pinecone vector databases, and rigorous safety testing usually take 6-12 weeks from discovery to final deployment." },
    { question: "Can AI truly automate customer support?", answer: "Absolutely. Our AI systems are capable of deflecting up to 80% of tier-1 support tickets. They can instantly answer FAQs, track orders, process returns, and intelligently route complex issues to human agents only when necessary." },
    { question: "What business processes can AI automate?", answer: "Virtually any digital, repetitive task. Examples include: scoring incoming leads and sending them tailored emails, parsing hundreds of resumes, generating weekly social media content, analyzing financial reports to spot trends, or automatically onboarding new clients." },
    { question: "Do you provide OpenAI integrations?", answer: "Yes. As a core part of our stack, we utilize the OpenAI API extensively. We can integrate GPT-4, DALL-E, and Whisper into your existing software, apps, or internal Slack/Teams channels to supercharge your workforce." },
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
              AI Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Technical answers regarding integration, capability, and deployment.
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
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-cyan-400' : 'text-foreground group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
