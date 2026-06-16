"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function CareersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      question: "How do I submit my CV to the Digipeak Talent Network?", 
      answer: "You can submit your CV directly through our secure application form above. Simply fill in your contact information, select your position of interest, upload your resume in PDF/Word format, and submit. Your profile will be safely logged in our applicant tracking dashboard." 
    },
    { 
      question: "Can I apply for remote-friendly job opportunities?", 
      answer: "Yes, absolutely. Digipeak operates on a highly flexible, borderless remote-first work model. We encourage applications from talented digital marketers, engineers, and designers worldwide who possess strong self-management skills and a results-driven mindset." 
    },
    { 
      question: "Do you hire digital talent internationally?", 
      answer: "Yes. Our recruitment pipelines capture creative minds globally. We work with clients and deploy resources across Qatar, UAE, Saudi Arabia, the United Kingdom, Singapore, Australia, New Zealand, Sri Lanka, and other emerging global regions." 
    },
    { 
      question: "How long does the recruitment and screening process take?", 
      answer: "Our recruitment team audits submitted profiles daily. If a project fits your background, we typically reach out for an initial interview call within 7 to 14 business days. Otherwise, your details remain stored in our talent database for future matches." 
    },
    { 
      question: "Can I submit my CV for future opportunities even if there is no active job listed?", 
      answer: "Yes. In fact, this Talent Network portal is built specifically for this purpose. Rather than hosting temporary, expired listings, we encourage professionals to submit their portfolios so that our operations managers can source candidates directly from our trusted database as soon as a project goes live." 
    },
    { 
      question: "Do I need creative agency experience to apply?", 
      answer: "While agency experience is a plus, it is not mandatory. We look for technical expertise, a strong sense of ownership, collaborative communication, and a clean professional portfolio that demonstrates your capability to drive growth." 
    },
    { 
      question: "Do your internship opportunities ever turn into full-time roles?", 
      answer: "Yes, frequently. We prioritize promoting talent internally. Interns who demonstrate technical dedication, cultural fit, and performance growth during their internship cycles are regularly offered permanent full-time careers." 
    },
    { 
      question: "How will I know that my application has been successfully received?", 
      answer: "Upon submitting the form, you will receive an immediate visual confirmation message on your screen. Your record is instantly synced to our candidate tracking database, and our operations team is notified of your submission details." 
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
            <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">RECRUITMENT PROTOCOLS</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Recruitment <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Frequently asked questions regarding our talent screening, remote working guidelines, international routing, and future openings.
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
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-accent-primary/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-accent-primary font-bold' : 'text-foreground group-hover:text-white text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-accent-primary/20 border-accent-primary text-accent-primary rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
