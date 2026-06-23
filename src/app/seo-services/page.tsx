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
  title: "Expert SEO Services & Agency | Digipeak",
  description: "Specialist SEO agency delivering AI-assisted strategies, technical SEO, and measurable organic growth for brands in Qatar, Dubai, Riyadh, Singapore, and the UK.",
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
    title: "Expert SEO Services & Agency | Digipeak",
    description: "AI-powered SEO strategies engineered to increase visibility, authority, and revenue globally.",
    url: "https://www.digipeak.agency/seo-services",
    images: ["/og-seo.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert SEO Services & Agency | Digipeak",
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
        "name": "Expert SEO Services & Agency",
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
            "@type": "Question",
            "name": "What makes Digipeak a strong SEO partner for Qatar & Dubai businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We combine technical SEO expertise with AI-assisted content strategies to build organic visibility in highly competitive GCC markets. Our approach focuses on measurable business outcomes — qualified traffic, leads, and revenue — rather than vanity metrics."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from Enterprise SEO Services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While technical fixes and indexation optimization can yield ranking improvements within 4–6 weeks, building compounding, high-intent commercial traffic typically takes 3 to 6 months depending on keyword difficulty in markets like Sydney or the UK."
            }
          },
          {
            "@type": "Question",
            "name": "Do you guarantee #1 rankings on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No reputable agency can guarantee a #1 ranking due to Google's ever-changing algorithm. We focus on deploying enterprise-grade technical architectures and data-driven content strategies that have historically driven our clients into the top positions for their most profitable keywords."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in an SEO Audit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our SEO Audits cover a comprehensive set of checkpoints including Core Web Vitals, server logs, crawl budget allocation, JavaScript rendering, backlink profile analysis, topical authority gaps, and competitor research."
            }
          },
          {
            "@type": "Question",
            "name": "How does International SEO differ from Local SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local SEO focuses on visibility in the Map Pack and localized searches (e.g., 'SEO Agency Doha'). International SEO involves hreflang architecture, geo-targeting, and multi-lingual content strategies to grow your brand across regions like Singapore, Auckland, and London simultaneously."
            }
          },
          {
            "@type": "Question",
            "name": "Why do E-Commerce platforms like Shopify need specialised SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "E-Commerce SEO requires managing thousands of dynamic URLs, preventing duplicate content from faceted navigation, optimizing crawl budgets, and implementing Product schema markup to earn rich snippets in search results."
            }
          },
          {
            "@type": "Question",
            "name": "Are your link-building strategies safe from Google penalties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We strictly use white-hat link acquisition methods — digital PR, broken link building, and high-quality editorial outreach. We never use private blog networks or toxic link schemes."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide transparent SEO reporting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Clients receive access to a live, custom dashboard tracking organic traffic, keyword movement, backlink acquisition, and revenue generated directly from SEO efforts."
            }
          },
          {
            "@type": "Question",
            "name": "Can SEO replace my Google Ads (PPC) spend?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the long term, yes. SEO traffic is compounding and costs nothing per click once established. Many clients reduce paid ad spend significantly once their organic rankings mature, resulting in a higher overall ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How does AI impact your SEO strategies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use AI to accelerate data analysis, identify semantic content gaps, predict shifts in search intent, and automate technical auditing. All strategy and final content execution are reviewed by senior SEO professionals to ensure quality."
            }
          }
        ]
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
        subtitle="SEO Authority." 
        description="We execute high-impact technical SEO and content strategies tailored to secure high visibility in local search ecosystems across the Middle East, APAC, and Europe."
      />
      <SEOFAQ />
      
      {/* Modify CTA text specifically for this page using wrapper or let the component handle it (we'll reuse as-is for consistency, but wrap in a border) */}
      <div className="border-t border-white/5">
        <LeadGeneration />
      </div>
    </>
  );
}
