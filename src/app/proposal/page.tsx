import type { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProposalForm } from "@/components/contact/ProposalForm";
import { ContactTrust } from "@/components/contact/ContactTrust";
import { DirectContact } from "@/components/contact/DirectContact";
import { GlobalClients } from "@/components/contact/GlobalClients";
import { WhyClientsContact } from "@/components/contact/WhyClientsContact";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Custom Proposal | Digipeak Agency",
  description: "Request a bespoke digital growth proposal from Digipeak. Tell us about your website, business objectives, and budget parameters to receive a tailored execution roadmap.",
  alternates: {
    canonical: "https://www.digipeak.agency/proposal",
  },
};

export default function ProposalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.digipeak.agency/proposal/#webpage",
    "url": "https://www.digipeak.agency/proposal",
    "name": "Request Custom Growth Proposal | Digipeak Agency",
    "description": "Scoping portal to request custom SEO, web design, and AI automation proposals from Digipeak Agency.",
    "isPartOf": {
      "@id": "https://www.digipeak.agency/#website",
    },
  };

  return (
    <>
      <Script
        id="proposal-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-premium-dark-glow min-h-screen">
        {/* Proposal Hero Section */}
        <section className="relative min-h-[60vh] pt-36 pb-12 px-6 flex items-center justify-center overflow-hidden bg-transparent">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/[0.03] rounded-full blur-[140px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/[0.015] rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center w-full">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.015] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6 select-none">
              High Intent Scoping
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              Request Your Custom <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Growth Proposal
              </span>
            </h1>

            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Tell us about your business, goals, and project requirements. Our team will review your request and prepare a tailored proposal.
            </p>

            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:opacity-90 transition-all cursor-pointer group"
            >
              <span>Start Your Proposal Request</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        {/* Form Anchor */}
        <div id="lead-form" className="scroll-mt-28 bg-transparent pb-24 px-6">
          <ProposalForm />
        </div>

        <ContactTrust />
        <DirectContact />
        <GlobalClients />
        <WhyClientsContact />
        <ContactFAQ />
      </div>
    </>
  );
}
