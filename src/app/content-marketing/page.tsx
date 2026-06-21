import type { Metadata } from "next";
import Script from "next/script";
import { ContentHero } from "@/components/content-marketing/ContentHero";
import { WhyContentMatters } from "@/components/content-marketing/WhyContentMatters";
import { ContentServicesGrid } from "@/components/content-marketing/ContentServicesGrid";
import { ContentPerformance } from "@/components/content-marketing/ContentPerformance";
import { ContentProcess } from "@/components/content-marketing/ContentProcess";
import { ContentTechStack } from "@/components/content-marketing/ContentTechStack";
import { ContentVisualSection } from "@/components/content-marketing/ContentVisualSection";
import { ContentCaseStudies } from "@/components/content-marketing/ContentCaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { ContentFAQ } from "@/components/content-marketing/ContentFAQ";
import { ContentCTA } from "@/components/content-marketing/ContentCTA";

export const metadata: Metadata = {
  title: "Premium Content Marketing Agency & SEO Copywriting Company",
  description: "Digipeak is a results-focused premium content marketing agency specializing in authoritative blog writing services, SEO copywriting, and thought leadership campaigns.",
  keywords: [
    "Content Marketing Qatar", "Content Marketing Agency Qatar", "SEO Content Writing Qatar", 
    "Blog Writing Services Qatar", "Website Content Writing Qatar", "Copywriting Services Qatar", 
    "Content Marketing Dubai", "SEO Content Agency Dubai", "Content Marketing Riyadh", 
    "Content Writing Saudi Arabia", "Content Marketing Singapore", "Content Marketing Sydney", 
    "Content Marketing Auckland", "Content Marketing Colombo", "Content Marketing UK", 
    "SEO Copywriting Services", "Blog Management Services", "Landing Page Copywriting", 
    "Thought Leadership Content", "Website Copywriting Agency", "Content Strategy Services"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/content-marketing',
  },
  openGraph: {
    title: "Premium Content Marketing & Copywriting Agency | Digipeak",
    description: "Content That Builds Authority, Ranks Higher & Drives Revenue.",
    url: "https://www.digipeak.agency/content-marketing",
    images: ["/og-content-marketing.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Content Marketing & Copywriting Agency | Digipeak",
    description: "Content That Builds Authority, Ranks Higher & Drives Revenue.",
  }
};

export default function ContentMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/content-marketing/#webpage",
        "url": "https://www.digipeak.agency/content-marketing",
        "name": "Enterprise Content Marketing & Copywriting Agency",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/content-marketing/", "name": "Content Marketing" } }
        ]
      },
      ...[
        "SEO Content Writing", "Blog Management", "Website Copywriting", "Landing Page Copywriting", "Thought Leadership Content", "Industry Articles", "Content Strategy"
      ].map(serviceType => ({
        "@type": "Service",
        "serviceType": serviceType,
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": ["Qatar", "Doha", "Dubai", "UAE", "Saudi Arabia", "Riyadh", "Singapore", "Sydney", "Auckland", "Colombo", "London", "United Kingdom"]
      })),
      {
        "@type": "FAQPage",
        "mainEntity": [
          { 
            question: "What is content marketing?", 
            answer: "Content marketing is the strategic creation and distribution of valuable, highly relevant, and consistent written assets (such as search-friendly articles, guides, landing pages, and thought leadership columns). Unlike disruptive outbound ads, content marketing pulls prospective customers to your brand by solving their immediate problems and establishing deep credibility." 
          },
          { 
            question: "How does content marketing help SEO?", 
            answer: "SEO and content are inseparable. Search engines exist to deliver answers. By creating authoritative, well-structured content centered around keyword clusters, pillar pages, and clear search intent, you give search crawlers exactly what they need. Highly helpful, detailed copy naturally earns higher rankings, links, and long-term organic authority." 
          },
          { 
            question: "How many blogs should I publish?", 
            answer: "Frequency depends on your industry competitiveness and goals. For active brand index growth, we recommend publishing 2 to 4 high-quality, comprehensive SEO articles per week. However, quality always triumphs over volume. A single exhaustive, keyword-optimized pillar page will out-rank ten short, low-value blog posts." 
          },
          { 
            question: "Do you provide SEO content writing?", 
            answer: "Yes, we provide end-to-end professional SEO content writing. Our copywriting team combines qualitative user-centric storytelling with deep semantic optimization (using Surfer SEO, SEMrush, and Ahrefs) to write copy that is highly engaging for human readers and perfectly optimized for indexing algorithms." 
          },
          { 
            question: "Do you manage blogs?", 
            answer: "Yes, we offer complete Blog Management. This is a fully hands-off service where we handle audience persona analysis, compile editorial content calendars, write, edit, format, perform internal linking structures, publish directly to your CMS (WordPress, Webflow, Notion), and track ongoing organic ranking metrics." 
          },
          { 
            question: "Can content generate leads?", 
            answer: "Absolutely. Content is a powerful lead generation funnel. By targeting informational searches (middle-of-funnel) and integrating clear conversion calls-to-action, downloadable templates, and customized sales copywriting, we seamlessly guide reader traffic into high-converting lead pipelines." 
          },
          { 
            question: "How long before content ranks?", 
            answer: "New content typically takes 3 to 6 months to mature and claim dominant page 1 rankings. However, for established domains with strong authority, rank indexing can occur in days. We deploy active internal linking networks and request manual search console indexing to accelerate this timeline." 
          },
          { 
            question: "Do you provide content strategy?", 
            answer: "Yes. Every writing sprint begins with a tailored Content Strategy. We map out your target customer personas, analyze competitor gaps, define high-value search intent clusters, prepare editorial calendars, and set up clear key performance indicator (KPI) dashboards." 
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
        id="content-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContentHero />
      <WhyContentMatters />
      <ContentServicesGrid />
      <ContentPerformance />
      <ContentProcess />
      <ContentTechStack />
      <ContentVisualSection />
      <ContentCaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="Editorial Standard." 
        description="We implement premium B2B content strategies, authoritative copy clusters, and conversions copywriting funnels for organizations across the Middle East, APAC, Europe, and globally."
      />
      <ContentFAQ />
      
      <div className="border-t border-white/5">
        <ContentCTA />
      </div>
    </>
  );
}
