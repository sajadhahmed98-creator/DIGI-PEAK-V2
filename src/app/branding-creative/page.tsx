import type { Metadata } from "next";
import Script from "next/script";
import { BrandingHero } from "@/components/branding/BrandingHero";
import { WhyBrandingMatters } from "@/components/branding/WhyBrandingMatters";
import { BrandingServicesGrid } from "@/components/branding/BrandingServicesGrid";
import { BrandingPerformance } from "@/components/branding/BrandingPerformance";
import { BrandingProcess } from "@/components/branding/BrandingProcess";
import { BrandingTechStack } from "@/components/branding/BrandingTechStack";
import { BrandingCaseStudies } from "@/components/branding/BrandingCaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { BrandingFAQ } from "@/components/branding/BrandingFAQ";
import { BrandingCTA } from "@/components/branding/BrandingCTA";

export const metadata: Metadata = {
  title: "Premium Branding & Creative Agency",
  description: "Digipeak is an award-winning Branding & Creative Agency helping businesses build authority, trust, and premium market positioning.",
  keywords: [
    "Branding Agency Qatar", "Creative Agency Qatar", "Brand Identity Design Qatar", 
    "Logo Design Company Qatar", "Corporate Branding Qatar", "Brand Strategy Agency Qatar", 
    "Branding Agency Dubai", "Creative Agency Dubai", "Branding Agency Saudi Arabia", 
    "Branding Agency Riyadh", "Branding Agency UK", "Branding Agency London", 
    "Premium Branding Agency", "AI-Powered Branding Agency", "Brand Development Company", 
    "Corporate Identity Design Agency", "Visual Identity Design Company", "Brand Positioning Agency", 
    "Rebranding Agency", "Digital Branding Agency"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/branding-creative',
  },
  openGraph: {
    title: "Premium Branding & Creative Agency | Digipeak",
    description: "Build Brands That Command Attention & Create Authority.",
    url: "https://www.digipeak.agency/branding-creative",
    images: ["/og-branding.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Branding & Creative Agency | Digipeak",
    description: "Build Brands That Command Attention & Create Authority.",
  }
};

export default function BrandingCreativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/branding-creative/#webpage",
        "url": "https://www.digipeak.agency/branding-creative",
        "name": "Premium Branding & Creative Agency",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/branding-creative/", "name": "Branding & Creative" } }
        ]
      },
      ...[
        "Branding Agency", "Creative Agency", "Brand Identity Design", "Logo Design", "Corporate Branding", "Brand Strategy", "Rebranding", "Packaging Design"
      ].map(serviceType => ({
        "@type": "Service",
        "serviceType": serviceType,
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": ["Qatar", "Doha", "Dubai", "UAE", "Saudi Arabia", "Riyadh", "London", "United Kingdom"]
      })),
      {
        "@type": "FAQPage",
        "mainEntity": [
          { question: "How much does branding cost in Qatar?", answer: "Branding costs vary significantly based on the scope of the project. A startup logo might range from $1,000 to $3,000, while a comprehensive enterprise brand identity system (including strategy, guidelines, and corporate materials) ranges from $10,000 to $30,000+. We provide custom quotes after our Discovery session." },
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
        ].map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Script
        id="branding-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrandingHero />
      <WhyBrandingMatters />
      <BrandingServicesGrid />
      <BrandingPerformance />
      <BrandingProcess />
      <BrandingTechStack />
      <BrandingCaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="Brand Reach." 
        description="We build iconic corporate identities for enterprise brands across the Middle East, APAC, and Europe."
      />
      <BrandingFAQ />
      
      <div className="border-t border-white/5">
        <BrandingCTA />
      </div>
    </>
  );
}
