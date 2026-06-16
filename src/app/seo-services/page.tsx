import type { Metadata } from "next";
import Script from "next/script";
import { SEOHero } from "@/components/seo-services/SEOHero";
import { WhySEOMatters } from "@/components/seo-services/WhySEOMatters";
import { SEOServicesGrid } from "@/components/seo-services/SEOServicesGrid";
import { SEOPerformance } from "@/components/seo-services/SEOPerformance";
import { SEOProcess } from "@/components/seo-services/SEOProcess";
import { SEOTechStack } from "@/components/seo-services/SEOTechStack";
import { SEOCaseStudies } from "@/components/seo-services/SEOCaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { SEOFAQ } from "@/components/seo-services/SEOFAQ";
import { LeadGeneration } from "@/components/home/LeadGeneration";

export const metadata: Metadata = {
  title: "Elite SEO Services & Agency | Digipeak",
  description: "Award-winning SEO agency delivering AI-powered strategies, technical SEO, and massive organic growth for brands in Qatar, Dubai, Riyadh, Singapore, and the UK.",
  keywords: [
    "SEO Agency Qatar", "SEO Services Qatar", "Best SEO Company Qatar", "SEO Agency Doha",
    "SEO Agency Dubai", "SEO Services Dubai", "SEO Agency Riyadh", "SEO Company Saudi Arabia",
    "SEO Agency Singapore", "SEO Company Sydney", "SEO Agency Auckland", "SEO Services Colombo",
    "SEO Agency UK", "International SEO Agency", "Enterprise SEO Services"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/seo-services',
  },
  openGraph: {
    title: "Elite SEO Services & Agency | Digipeak",
    description: "AI-powered SEO strategies engineered to increase visibility, authority, and revenue globally.",
    url: "https://www.digipeak.agency/seo-services",
    images: ["/og-seo.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite SEO Services & Agency | Digipeak",
    description: "AI-powered SEO strategies engineered to increase visibility, authority, and revenue globally.",
  }
};

export default function SEOServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/seo-services/#webpage",
        "url": "https://www.digipeak.agency/seo-services",
        "name": "Elite SEO Services & Agency",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/seo-services/", "name": "SEO Services" } }
        ]
      },
      ...[
        "Technical SEO", "Local SEO", "International SEO", "E-Commerce SEO", "Enterprise SEO", "SEO Audits", "Content SEO"
      ].map(serviceType => ({
        "@type": "Service",
        "serviceType": serviceType,
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": ["Qatar", "Dubai", "UAE", "Riyadh", "Saudi Arabia", "Singapore", "Sydney", "Auckland", "Colombo", "United Kingdom"]
      })),
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            question: "What makes Digipeak the Best SEO Agency in Qatar & Dubai?",
            answer: "We bypass standard agency practices by using proprietary AI models to process millions of data points. This allows us to architect content and technical SEO strategies that guarantee market dominance across the hyper-competitive GCC region.",
          },
          {
            question: "How long does it take to see results from Enterprise SEO Services?",
            answer: "While technical fixes and indexation optimization can yield ranking bumps within 4-6 weeks, generating compounding, high-intent commercial traffic typically takes 3 to 6 months depending on the keyword difficulty in markets like Sydney or the UK.",
          },
          {
            question: "Do you guarantee #1 rankings on Google?",
            answer: "No reputable agency can guarantee a #1 ranking due to Google's ever-changing algorithm. However, we guarantee the deployment of enterprise-grade technical architectures and data-driven content strategies that historically place our clients in the top 3 positions for their most profitable keywords.",
          },
          {
            question: "What is included in an SEO Audit?",
            answer: "Our SEO Audits cover over 200 checkpoints including Core Web Vitals, server logs, crawl budget allocation, JavaScript rendering, backlink toxicity, topical authority gaps, and competitor reverse-engineering.",
          },
          {
            question: "How does International SEO differ from Local SEO?",
            answer: "Local SEO focuses on dominating the Map Pack and localized searches (e.g., 'SEO Agency Doha'). International SEO involves complex hreflang architecture, geo-targeting, and multi-lingual content to scale your brand across regions like Singapore, Auckland, and London simultaneously.",
          },
          {
            question: "Why do E-Commerce platforms like Shopify need specialized SEO?",
            answer: "E-Commerce SEO requires managing thousands of dynamic URLs, preventing duplicate content from faceted navigation, optimizing crawl budgets, and implementing complex Product schemas to win rich snippets in SERPs.",
          },
          {
            question: "Are your link-building strategies safe from Google penalties?",
            answer: "Absolutely. We strictly adhere to white-hat link acquisition through digital PR, broken link building, and high-quality outreach. We never use PBNs (Private Blog Networks) or toxic link farms.",
          },
          {
            question: "Do you provide transparent SEO reporting?",
            answer: "Yes. You receive access to a live, 24/7 custom dashboard that tracks organic traffic, keyword movement, backlink acquisition, and most importantly, the revenue generated directly from our SEO efforts.",
          },
          {
            question: "Can SEO replace my Google Ads (PPC) spend?",
            answer: "In the long term, yes. SEO traffic is compounding and free per click. Many of our clients drastically reduce or eliminate their paid ad spend once their organic rankings mature, resulting in a much higher overall ROI.",
          },
          {
            question: "How does AI impact your SEO strategies?",
            answer: "We use AI to accelerate data analysis, identify semantic content gaps, predict algorithm shifts, and automate technical auditing. However, all strategy and final content execution are managed by senior SEO engineers to ensure maximum quality.",
          }
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
        id="seo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SEOHero />
      <WhySEOMatters />
      <SEOServicesGrid />
      <SEOPerformance />
      <SEOProcess />
      <SEOTechStack />
      <SEOCaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="SEO Dominance." 
        description="We execute high-impact technical SEO and content strategies tailored to dominate local search ecosystems across the Middle East, APAC, and Europe."
      />
      <SEOFAQ />
      
      {/* Modify CTA text specifically for this page using wrapper or let the component handle it (we'll reuse as-is for consistency, but wrap in a border) */}
      <div className="border-t border-white/5">
        <LeadGeneration />
      </div>
    </>
  );
}
