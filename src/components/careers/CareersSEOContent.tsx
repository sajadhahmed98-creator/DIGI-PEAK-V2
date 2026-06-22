"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Cpu, Network } from "lucide-react";
import Link from "next/link";

export function CareersSEOContent() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 border-t border-white/5 bg-black/60 relative overflow-hidden">
      <div className="mx-auto max-w-5xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-invert max-w-none text-muted leading-relaxed space-y-12"
        >
          {/* Main Introduction */}
          <div>
            <span className="text-accent-secondary font-bold uppercase text-[10px] tracking-widest font-mono block mb-2">Talent Network Resources</span>
            <h2 className="font-heading text-3xl md:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6">
              Empowering Global Tech & Creative Careers.
            </h2>
            <p className="text-base text-muted">
              At Digipeak Agency, we believe that the best work is produced by talent given creative freedom, state-of-the-art tools, and borderless remote flexibility. Our global recruitment network connects world-class digital specialists with high-performing client campaigns. Whether you are looking for digital marketing jobs in <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, full-stack web developer careers in Singapore, or graphic designer jobs in Dubai, our agency serves as the launchpad for your next professional leap.
            </p>
          </div>

          <hr className="border-white/10" />

          {/* Regional Hub Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            
            {/* Column 1: Middle East (GCC) Opportunities */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent-primary" /> GCC Digital Careers & Market Trends
              </h3>
              <p className="text-sm">
                The Middle East is experiencing an unprecedented surge in digital growth. Our teams in <Link href="/doha" className="underline hover:text-accent-primary transition-colors">Doha</Link> and <Link href="/locations/uae/dubai" className="underline hover:text-accent-primary transition-colors">Dubai</Link> manage enterprise SEO strategies and custom application development for major real estate groups and medical facilities.
              </p>
              <ul className="text-xs space-y-2.5 text-muted pl-4 list-disc">
                <li><strong>Marketing Careers <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>:</strong> Demand for Digital Marketing Executives and SEO Specialists in <Link href="/doha" className="underline hover:text-accent-primary transition-colors">Doha</Link> is at an all-time high as firms transition from traditional advertising.</li>
                <li><strong>Graphic Design Careers <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>:</strong> Visual creators are essential to define brand positions and custom packaging for luxury retail clients.</li>
                <li><strong>Creative Careers Saudi Arabia:</strong> Riyadh is expanding its technology borders, making Salesforce and CRM setups critical career pathways.</li>
              </ul>
            </div>

            {/* Column 2: Asia-Pacific & Remote Opportunities */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                <Network className="h-5 w-5 text-accent-secondary" /> APAC & Borderless Remote Work Ecosystems
              </h3>
              <p className="text-sm">
                From Colombo to Auckland, our teams leverage cloud infrastructure to build seamless software deployments. We support borderless collaboration models that let you work from anywhere while building global portfolios.
              </p>
              <ul className="text-xs space-y-2.5 text-muted pl-4 list-disc">
                <li><strong>Technology Careers Singapore:</strong> Scale headless Next.js platforms, cloud systems, and OpenAI integrations as a senior backend engineer.</li>
                <li><strong>Creative Careers Sri Lanka:</strong> Colombo is our creative center, hosting top-tier visual designers, WordPress developers, and video production editors.</li>
                <li><strong>Digital Careers Australia & NZ:</strong> Work with fast-growing brands in Sydney and Auckland, managing accounts and local marketing audits.</li>
              </ul>
            </div>

          </div>

          <hr className="border-white/10" />

          {/* Sector Opportunities */}
          <div className="space-y-6 pt-4">
            <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="h-6 w-6 text-accent-secondary" /> Core Career Verticals At Digipeak
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              
              {/* Digital Marketing & SEO */}
              <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5">
                <h4 className="font-heading font-bold text-white text-sm mb-2">Digital Marketing & SEO</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Join our performance marketing teams. Manage high-ROI Google Ads, scale social media platforms, or deploy technical SEO audits that dominate regional search engine index listings.
                </p>
              </div>

              {/* Graphic Design & UI/UX */}
              <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5">
                <h4 className="font-heading font-bold text-white text-sm mb-2">Graphic Design & UI/UX</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Design digital products. Gather UX research parameters, design premium Figma wireframes, build visual brand guidelines, or animate motion graphics for commercial videos.
                </p>
              </div>

              {/* Web & Mobile Development */}
              <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5">
                <h4 className="font-heading font-bold text-white text-sm mb-2">Web & Mobile App Dev</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Work on modern stacks. Code lightweight React frontends, configure Docker containers on AWS hosting clusters, or develop hybrid mobile app systems with native API routing.
                </p>
              </div>

              {/* CRM, Automation & AI */}
              <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5">
                <h4 className="font-heading font-bold text-white text-sm mb-2">CRM, Automation & AI</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Help build enterprise automation layers. Configure Salesforce/Hubspot sales pipelines, map automated messaging workflows, and integrate custom OpenAI LLMs.
                </p>
              </div>

            </div>
          </div>

          <hr className="border-white/10" />

          {/* Cultural Footer Note */}
          <div className="text-center py-6">
            <h3 className="font-heading text-xl font-bold text-white mb-2">Looking For Future Creative Growth?</h3>
            <p className="text-xs text-muted max-w-xl mx-auto leading-relaxed">
              We continually screen candidates to expand our global network. Even if an active vacancy is not listed, our talent network ensures your profile is matching first in line when new projects launch.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
