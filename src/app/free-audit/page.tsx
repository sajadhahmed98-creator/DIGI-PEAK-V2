import type { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FreeAuditForm } from "@/components/contact/FreeAuditForm";
import { ContactTrust } from "@/components/contact/ContactTrust";
import { DirectContact } from "@/components/contact/DirectContact";
import { GlobalClients } from "@/components/contact/GlobalClients";
import { WhyClientsContact } from "@/components/contact/WhyClientsContact";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Your Free Website Growth Audit | Digipeak Agency",
  description: "Receive a professional Core Web Vitals, speed, and search visibility audit of your website. Fast, zero-friction lead capture for custom organic blueprints.",
  alternates: {
    canonical: "https://www.digipeak.agency/free-audit",
  },
};

export default function FreeAuditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.digipeak.agency/free-audit/#webpage",
    "url": "https://www.digipeak.agency/free-audit",
    "name": "Get Your Free Website Growth Audit | Digipeak Agency",
    "description": "Lowest friction path to obtain free Core Web Vitals, technical speed, and SEO footprint assessments.",
    "isPartOf": {
      "@id": "https://www.digipeak.agency/#website",
    },
  };

  return (
    <>
      <Script
        id="free-audit-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Free Audit Hero Section */}
      <section className="relative min-h-[60vh] pt-36 pb-12 px-6 flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-secondary/[0.03] rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-primary/[0.015] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/[0.015] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6 select-none">
            <Zap className="w-3 h-3 text-accent-secondary inline" /> Instant Crawl Setup
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Get Your Free Website <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              Growth Audit
            </span>
          </h1>

          <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Receive a professional review of your website performance, SEO opportunities, and growth recommendations.
          </p>

          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:opacity-90 transition-all cursor-pointer group"
          >
            <span>Start Free Audit Request</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Form Anchor */}
      <div id="lead-form" className="scroll-mt-28 bg-black pb-24 px-6">
        <FreeAuditForm />
      </div>

      <ContactTrust />
      <DirectContact />
      <GlobalClients />
      <WhyClientsContact />
      <ContactFAQ />
    </>
  );
}
