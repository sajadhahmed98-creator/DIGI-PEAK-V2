"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

export function BrandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: <>How much does branding cost in <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>?</>, answer: "Branding costs vary significantly based on the scope of the project. A startup logo might range from $1,000 to $3,000, while a comprehensive enterprise brand identity system (including strategy, guidelines, and corporate materials) ranges from $10,000 to $30,000+. We provide custom quotes after our Discovery session." },
    { question: "Why is branding important for businesses?", answer: "Branding is how your market perceives you. Strong branding builds immediate trust, commands premium pricing, reduces customer acquisition costs, and differentiates you from competitors who offer similar services." },
    { question: "What is included in a branding package?", answer: "A comprehensive package typically includes Brand Strategy (positioning, voice), Logo Design (primary, secondary, icons), Visual Identity (typography, color palettes), Brand Guidelines (usage manuals), and Corporate Identity (business cards, letterheads, presentations)." },
    { question: "How long does branding take?", answer: "A professional branding project takes time. A standard identity design takes 4-6 weeks, while a full corporate rebranding including strategy, research, and extensive collateral rollout can take 2-3 months." },
    { question: "Do you provide logo design services?", answer: "Yes, but we rarely design 'just a logo.' A logo without strategy or a supporting visual system is ineffective. We focus on building comprehensive brand identities where the logo is just the cornerstone." },
    { question: "Can you redesign an existing brand?", answer: "Yes. Rebranding is one of our core specialties. We help established companies modernize their visual identity without alienating their existing customer base, ensuring a smooth transition to a more premium positioning." },
    { question: "What is a Brand Guidelines document?", answer: "It is a comprehensive manual (often 30+ pages) that dictates exactly how your brand should be used. It covers logo clear space, correct typography usage, color codes (RGB, CMYK, HEX), and photography styles to ensure consistency across all marketing." },
    { question: "Do you offer packaging design?", answer: "Yes. We design premium retail packaging, custom labels, and unboxing experiences for physical products, specifically tailored for E-Commerce and luxury retail markets." },
    { question: "Will we own the rights to the designs?", answer: "Absolutely. Upon final payment, full intellectual property rights and raw source files (Vector AI, EPS, SVG) are transferred directly to your company." },
    { question: "Do you name companies?", answer: "Yes. Brand naming (Nomenclature) is part of our advanced Brand Strategy phase. We conduct linguistic checks, trademark availability research, and domain availability analysis." },
    { question: "What files will I receive?", answer: "You will receive an organized brand package containing Vector files (AI, EPS, SVG) for infinite scaling, raster files (PNG, JPG) for digital use, and print-ready PDFs, all sorted by colorway (Full color, Black, White)." },
    { question: "How many revisions do we get?", answer: "Our structured process minimizes the need for endless revisions. However, we typically include 2-3 rounds of refinement at each major milestone to ensure the final product perfectly aligns with your vision." },
    { question: "Can you help launch the new brand?", answer: "Yes. We design social media launch templates, website refresh assets, and internal presentation decks to help you unveil the new identity to your employees and the public." },
    { question: "Do you work with startups?", answer: "Yes. We have specific packages tailored for funded startups that need to establish aggressive market authority quickly to secure their next round of funding." },
    { question: "How do we start the branding process?", answer: "It begins with a free Brand Consultation. We discuss your business goals, current market position, and vision, followed by a detailed proposal and timeline." },
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
              Branding <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Common questions about our creative process and brand development.
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
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-violet-400' : 'text-foreground group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-violet-500/20 border-violet-500 text-violet-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
