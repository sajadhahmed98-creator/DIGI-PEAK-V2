"use client";

import { motion } from "framer-motion";

export function ResellerSEOBlock() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-4xl w-full">
        
        {/* Simple visual separator line */}
        <div className="w-12 h-0.5 bg-indigo-500/35 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-muted leading-relaxed max-w-3xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Digital Marketing &amp; SEO Reseller Program
            </h3>
            <p>
              Looking to scale your service catalog without hiring developers or copywriters?
              Digipeak's digital marketing reseller program enables you to sell premium technical solutions under
              your own margins. We act as your expert delivery partner, allowing you to focus purely on lead generation
              and customer relationships.
            </p>
            <p>
              Our agency reseller program is designed to deliver consistent, data-backed ROI for B2B brands. 
              By partnering with Digipeak as your SEO outsourcing partner, you gain access to an established framework 
              covering technical SEO, local search visibility, page-speed audits, and enterprise-grade code architecture.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Web Design Reseller Partnerships
            </h3>
            <p>
              Fulfill client demands for custom corporate websites, e-commerce storefronts, and business automation 
              pipelines through our website reseller partnership model. We handle scoping, front-end visual mockups, 
              React code engineering, and API integrations behind the scenes.
            </p>
            <p>
              Our white label reseller program fits digital consultants, marketing managers, and independent sales agents. 
              Outsource website development and digital marketing services to an experienced team, and offer modern, 
              high-performance growth solutions that increase retention and capture recurring retainers.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
