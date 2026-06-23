import type { Metadata } from "next";
import Script from "next/script";
import { MarketingHero } from "@/components/marketing-services/MarketingHero";
import { WhyMarketingMatters } from "@/components/marketing-services/WhyMarketingMatters";
import { MarketingServicesGrid } from "@/components/marketing-services/MarketingServicesGrid";
import { GoogleAdsServices } from "@/components/marketing-services/GoogleAdsServices";
import { MetaAdsServices } from "@/components/marketing-services/MetaAdsServices";
import { LeadGenerationSystem } from "@/components/marketing-services/LeadGenerationSystem";
import { MarketingPerformance } from "@/components/marketing-services/MarketingPerformance";
import { MarketingProcess } from "@/components/marketing-services/MarketingProcess";
import { MarketingTechStack } from "@/components/marketing-services/MarketingTechStack";
import { MarketingPortfolio } from "@/components/marketing-services/MarketingPortfolio";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { MarketingFAQ } from "@/components/marketing-services/MarketingFAQ";
import { LeadGeneration } from "@/components/home/LeadGeneration";

export const metadata: Metadata = {
  title: "Premium Digital Marketing Agency | ROI & Lead Generation",
  description: "Digipeak is a performance-driven Digital Marketing Agency specializing in Google Ads, Meta Ads, and Lead Generation for enterprise brands across Qatar, Dubai, and globally.",
  keywords: [
    "Digital Marketing Agency Qatar", "Digital Marketing Agency Doha", "Digital Marketing Agency Dubai", 
    "Digital Marketing UAE", "Digital Marketing Saudi Arabia", "Digital Marketing Riyadh", 
    "Digital Marketing Singapore", "Digital Marketing Sydney", "Digital Marketing Auckland", 
    "Digital Marketing Colombo", "Digital Marketing UK", "Google Ads Management", 
    "Meta Ads Agency", "Facebook Advertising Agency", "Instagram Marketing Agency", 
    "Lead Generation Agency", "Performance Marketing Agency", "ROI Marketing Agency", "Online Advertising Agency"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/digital-marketing',
  },
  openGraph: {
    title: "Premium Digital Marketing Agency | Digipeak",
    description: "Digital Marketing That Drives Revenue, Leads & Growth. Google Ads & Meta Ads Experts.",
    url: "https://www.digipeak.agency/digital-marketing",
    images: ["/og-marketing.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Digital Marketing Agency | Digipeak",
    description: "Digital Marketing That Drives Revenue, Leads & Growth. Google Ads & Meta Ads Experts.",
  }
};

export default function DigitalMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/digital-marketing/#webpage",
        "url": "https://www.digipeak.agency/digital-marketing",
        "name": "Premium Digital Marketing Agency",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/digital-marketing/", "name": "Digital Marketing" } }
        ]
      },
      ...[
        "Google Ads Management", "Meta Ads Agency", "Lead Generation Agency", "Performance Marketing Agency", "Conversion Rate Optimization", "B2B Lead Generation"
      ].map(serviceType => ({
        "@type": "Service",
        "serviceType": serviceType,
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": ["Qatar", "Doha", "Dubai", "UAE", "Saudi Arabia", "Riyadh", "Singapore", "Sydney", "Auckland", "Colombo", "United Kingdom"]
      })),
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            question: "How much should I spend on Google Ads?",
            answer: "Budget depends entirely on your industry's Cost Per Click (CPC) and your revenue goals. We generally recommend a minimum starting budget of $3,000 - $5,000/month.",
          },
          {
            question: "How long before I see results from Performance Marketing?",
            answer: "Unlike SEO which takes months, paid advertising generates immediate traffic. The first 2-4 weeks is the 'learning phase'. Most clients see a stabilized ROAS by month 2.",
          },
          {
            question: "Which platform is best: Google Ads or Facebook Ads?",
            answer: "Google Ads captures 'High Intent' searches, making it ideal for immediate lead generation and B2B. Facebook/Meta Ads creates demand, making it perfect for massive brand awareness.",
          },
          {
            question: "How do you track ROI and Conversions?",
            answer: "We implement advanced server-side tracking using Google Tag Manager, GA4, and Meta Conversions API to track every form submission and purchase.",
          },
          {
            question: "How do you generate B2B leads?",
            answer: "We utilize LinkedIn Ads for account-based marketing and Google Search for high-intent queries, driving traffic to conversion-optimized landing pages.",
          },
          {
            question: "Do you design the ad creatives and landing pages?",
            answer: "Yes. We are a full-funnel agency. We write the ad copy, design the visual creatives, produce video ads, and build dedicated landing pages.",
          },
          {
            question: "What is a Lookalike Audience?",
            answer: "A Lookalike Audience is a Meta Ads feature where we upload a list of your best customers, and AI finds new users with the same purchasing behaviors.",
          },
          {
            question: "What is Performance Max in Google Ads?",
            answer: "Performance Max is Google's AI-driven campaign type that serves ads across all of Google's channels (Search, Display, YouTube, Gmail, Maps) from a single campaign.",
          },
          {
            question: "Do you offer Retargeting?",
            answer: "Absolutely. Over 90% of users don't convert on their first visit. We implement aggressive cross-platform retargeting to stay top-of-mind.",
          },
          {
            question: "How often do you provide performance reports?",
            answer: "We provide 24/7 access to a live Looker Studio dashboard tracking your exact KPIs. Additionally, you'll receive detailed monthly strategy reviews.",
          },
          {
            question: "Can you integrate leads directly into my CRM?",
            answer: "Yes. We use Zapier and native APIs to push leads instantly from Facebook/Google directly into HubSpot, Salesforce, GoHighLevel, or your proprietary CRM.",
          },
          {
            question: "Do you do TikTok or YouTube Advertising?",
            answer: "Yes. For brands targeting Gen Z/Millennials or demonstrating visual products, TikTok and YouTube offer incredibly low CPMs.",
          },
          {
            question: "What happens if a campaign isn't performing?",
            answer: "We monitor accounts daily. If a campaign underperforms, we rapidly pivot by testing new audiences, creatives, or bidding strategies.",
          },
          {
            question: "Do I own my ad accounts?",
            answer: "100%. Transparency is our core value. You retain full admin ownership of your Google Ads, Meta Business Manager, and Analytics accounts.",
          },
          {
            question: "Do you manage marketing automation and email drip campaigns?",
            answer: "Yes. Capturing the lead is only step one. We build automated email/SMS sequences to nurture leads until they are ready to purchase.",
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
        id="marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingHero />
      <WhyMarketingMatters />
      <MarketingServicesGrid />
      <GoogleAdsServices />
      <MetaAdsServices />
      <LeadGenerationSystem />
      <MarketingPerformance />
      <MarketingProcess />
      <MarketingTechStack />
      <MarketingPortfolio />
      <GlobalLocations 
        title="Global" 
        subtitle="Marketing Reach." 
        description="We engineer high-performance customer acquisition engines tailored to scale customer acquisition across the Middle East, APAC, and Europe."
      />
      <MarketingFAQ />
      
      <div className="border-t border-white/5">
        <LeadGeneration />
      </div>
    </>
  );
}
