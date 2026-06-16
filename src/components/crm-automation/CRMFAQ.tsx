"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function CRMFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      question: "What CRM is best for my business?", 
      answer: "The best CRM depends on your company size, sales cycle, complexity, and budget. HubSpot is outstanding for marketing-heavy, fast-scaling B2B companies seeking exceptional user adoption. Zoho CRM is highly flexible, cost-effective, and excellent for multi-channel workflows. Salesforce is the gold standard for large enterprises with complex, customizable data models. We analyze your workflows during discovery to recommend the perfect fit." 
    },
    { 
      question: "How much does CRM implementation cost?", 
      answer: "Pricing is fully customized to your business size, database scale, and necessary workflow rules. A clean HubSpot or Zoho Setup for a growing sales team ranges from $3,500 to $7,500. Large-scale enterprise migrations, custom APEX development, multi-platform webhook synchronizations, and advanced n8n/Make orchestration pipelines range from $12,000 to $40,000+. We calculate the ROI metrics beforehand." 
    },
    { 
      question: "Can you migrate from another CRM?", 
      answer: "Yes. CRM data migration is a core specialty. We securely transfer your legacy contacts, accounts, historical emails, custom deals, and task records (whether migrating from spreadsheets, Pipedrive, Zoho, or custom platforms). We map all data structures, execute clean exports, deduplicate contacts, and perform extensive QA testing to ensure a zero-data-loss, zero-downtime transition." 
    },
    { 
      question: "Do you provide HubSpot setup?", 
      answer: "Yes, we are certified HubSpot setup experts. We configure custom pipelines, deal stages, marketing-to-sales handoffs, automated calendar bookings, and marketing nurture emails. We also build custom HubSpot dashboards so managers get complete real-time reports on sales pipeline velocity." 
    },
    { 
      question: "Do you provide Zoho CRM services?", 
      answer: "Absolutely. We provide end-to-end Zoho Setup and customization. This includes writing custom Deluge scripts, mapping automated system blueprints, configuring custom dashboard reports, setting up Zoho Flow webhooks, and linking Zoho Creator for custom internal applications." 
    },
    { 
      question: "Can you automate our sales process?", 
      answer: "Yes, sales automation is a massive revenue driver. We automate the entire journey: from capturing a lead on your website, checking qualify criteria using smart filters, auto-assigning it to your sales agents, setting up task reminders, sending a WhatsApp welcome message, and triggering instant deal updates in your CRM." 
    },
    { 
      question: "Can CRM integrate with WhatsApp?", 
      answer: "Yes. WhatsApp is the #1 communication channel in many markets (like Qatar, Dubai, and Riyadh). We build direct integrations using Twilio or the WhatsApp Business Cloud API. This allows your CRM to instantly log all incoming messages, send automated WhatsApp notification updates to clients, and trigger custom chatbot loops when leads take action." 
    },
    { 
      question: "How long does CRM implementation take?", 
      answer: "A standard CRM Setup and workflow automation project takes 3 to 6 weeks. Complex enterprise deployments involving legacy database migrations, custom API webhooks, extensive team training, and rigorous compliance testing require 8 to 14 weeks from initial audit to final user onboarding." 
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
              CRM & Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Frequently asked questions regarding our CRM setup, process automation, integrations, and pricing.
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
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-emerald-400' : 'text-foreground group-hover:text-white text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
