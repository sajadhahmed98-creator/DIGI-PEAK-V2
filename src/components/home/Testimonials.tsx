"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Digipeak transformed our digital presence completely. Our organic traffic grew by 185% in just 6 months, directly translating to enterprise leads.",
    author: "Sarah Jenkins",
    role: "CMO, Aura Luxury Real Estate",
  },
  {
    quote: "The level of technical expertise and design polish is unmatched. They built an architecture that finally allowed us to scale seamlessly globally.",
    author: "David Chen",
    role: "CEO, NexGen FinTech",
  },
  {
    quote: "An absolute powerhouse of an agency. From strategy to execution, every deliverable was world-class and exceeded our ROI expectations.",
    author: "Mohammed Al-Fayed",
    role: "Director, Q-Corp Holdco",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Client <span className="text-gradient-secondary">Testimonials.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the industry leaders we've partnered with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:bg-white/5 transition-colors relative group"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-secondary text-accent-secondary" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-foreground mb-8 font-medium">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/10 border border-white/20 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-foreground">{t.author}</h4>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
