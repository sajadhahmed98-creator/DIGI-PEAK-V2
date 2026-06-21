"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Globe, Lightbulb, Code2, TrendingUp, Sparkles } from "lucide-react";

const expertise = [
  { icon: Globe, label: "Digital Marketing" },
  { icon: TrendingUp, label: "Business Growth" },
  { icon: Code2, label: "Web Development" },
  { icon: Lightbulb, label: "Brand Strategy" },
  { icon: Sparkles, label: "AI Solutions" },
];

export function FounderSection() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-primary/[0.015] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-secondary/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-sm font-semibold text-accent-primary mb-6">
              <Sparkles className="w-4 h-4" />
              Meet The Founder
            </div>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              The Person Behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Digipeak.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-2 gap-16 items-center">
          {/* Left — Founder card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass border border-accent-primary/20 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-primary/[0.015] rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Avatar placeholder — premium monogram */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  <span className="font-heading text-3xl font-extrabold text-white">SA</span>
                </div>

                <div className="mb-2">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">Sajadh Ahmed</h3>
                  <p className="text-accent-primary font-semibold text-sm uppercase tracking-widest">Founder, Digipeak Agency</p>
                </div>

                <div className="w-12 h-px bg-gradient-to-r from-accent-primary to-transparent my-5" />

                {/* About text */}
                <div className="space-y-4 text-muted leading-relaxed text-sm">
                  <p>
                    Sajadh Ahmed is the founder of Digipeak Agency. His focus is helping businesses grow through digital marketing, web development, branding, automation, AI solutions, and technology-driven strategies.
                  </p>
                  <p>
                    He believes in combining creativity, innovation, and measurable business growth to help brands build stronger digital foundations and compete effectively in modern markets.
                  </p>
                  <p>
                    Through Digipeak, Sajadh brings together a complete ecosystem of digital services — enabling businesses to grow smarter, scale faster, and build lasting digital authority.
                  </p>
                </div>

                {/* Expertise chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {expertise.map((e) => (
                    <div key={e.label} className="flex items-center gap-1.5 glass border border-white/10 rounded-full px-3.5 py-1.5 text-xs text-muted hover:text-white hover:border-accent-primary/30 transition-all">
                      <e.icon className="w-3 h-3 text-accent-primary" />
                      {e.label}
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/sajadh-ahmed-6a62641a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-muted hover:text-accent-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>

                {/* CTA to personal brand page */}
                <div className="mt-8">
                  <Link
                    href="/author/sajadh-ahmed"
                    className="inline-flex items-center gap-2 glass border border-accent-primary/30 rounded-full px-6 py-3 text-sm font-semibold text-accent-primary hover:bg-accent-primary/[0.03] hover:border-accent-primary/50 transition-all group"
                  >
                    Learn More About Sajadh Ahmed
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Founder SEO / personal brand content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4">
                Entrepreneurship &amp; Digital Innovation
              </h3>
              <p className="text-muted leading-relaxed">
                Building a business in the digital era requires more than just technical knowledge — it demands a
                deep understanding of markets, consumer behaviour, and the ability to translate technology into
                real business outcomes. Sajadh founded Digipeak with this philosophy at its core.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4">
                A Unified Approach to Digital Growth
              </h3>
              <p className="text-muted leading-relaxed">
                Rather than offering isolated digital services, Sajadh&apos;s vision for Digipeak is an integrated
                growth ecosystem — where web design, SEO, paid marketing, automation, AI, and branding work
                together as a unified system to compound business results.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4">
                Technology as a Competitive Advantage
              </h3>
              <p className="text-muted leading-relaxed">
                From AI-driven content strategies to CRM automation and modern web architecture, Sajadh focuses
                on ensuring every Digipeak client leverages current technology effectively — turning digital
                infrastructure into a genuine competitive edge in their market.
              </p>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6">
              <div className="text-accent-primary font-mono text-xs font-bold uppercase tracking-widest mb-3">Brand Focus Areas</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Digital Marketing Strategy",
                  "Entrepreneurship",
                  "Business Growth",
                  "Web Development",
                  "Brand Strategy",
                  "AI Solutions",
                  "Technology Innovation",
                  "Digital Transformation",
                ].map((topic) => (
                  <div key={topic} className="flex items-center gap-2 text-xs text-muted">
                    <div className="w-1 h-1 rounded-full bg-accent-secondary flex-shrink-0" />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
