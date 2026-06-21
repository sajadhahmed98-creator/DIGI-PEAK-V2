import type { Metadata } from "next";
import Script from "next/script";
import { EmailHero } from "@/components/email-marketing/EmailHero";
import { WhyEmailMatters } from "@/components/email-marketing/WhyEmailMatters";
import { EmailServicesGrid } from "@/components/email-marketing/EmailServicesGrid";
import { EmailPerformance } from "@/components/email-marketing/EmailPerformance";
import { EmailProcess } from "@/components/email-marketing/EmailProcess";
import { EmailTechStack } from "@/components/email-marketing/EmailTechStack";
import { EmailVisualSection } from "@/components/email-marketing/EmailVisualSection";
import { EmailCaseStudies } from "@/components/email-marketing/EmailCaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { EmailFAQ } from "@/components/email-marketing/EmailFAQ";
import { EmailCTA } from "@/components/email-marketing/EmailCTA";

export const metadata: Metadata = {
  title: "Premium Email Marketing Agency & Automation Company",
  description: "Digipeak is a results-focused professional email marketing agency specializing in lead nurturing flows, B2B campaigns, Klaviyo, and CRM automation setups.",
  keywords: [
    "Email Marketing Qatar", "Email Marketing Agency Qatar", "Email Marketing Services Qatar", 
    "Email Campaign Management Qatar", "Email Automation Qatar", "Email Marketing Dubai", 
    "Email Marketing Agency Dubai", "Email Marketing UAE", "Email Marketing Saudi Arabia", 
    "Email Marketing Riyadh", "Email Marketing Singapore", "Email Marketing Sydney", 
    "Email Marketing Auckland", "Email Marketing Colombo", "Email Marketing UK", 
    "Email Automation Services", "Klaviyo Email Marketing", "Mailchimp Marketing Services", 
    "Email Funnel Agency", "Lead Nurturing Services", "Email Campaign Management", 
    "B2B Email Marketing", "E-Commerce Email Marketing", "CRM Email Automation", "Marketing Automation Agency"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/email-marketing',
  },
  openGraph: {
    title: "Premium Email Marketing & Lifecycle Automation Agency | Digipeak",
    description: "Nurture database lists, optimize conversions, and build automated repeat purchases.",
    url: "https://www.digipeak.agency/email-marketing",
    images: ["/og-email-marketing.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Email Marketing & Lifecycle Automation Agency | Digipeak",
    description: "Nurture database lists, optimize conversions, and build automated repeat purchases.",
  }
};

export default function EmailMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/email-marketing/#webpage",
        "url": "https://www.digipeak.agency/email-marketing",
        "name": "Enterprise Email Marketing Agency & Automation Partner",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/email-marketing/", "name": "Email Marketing" } }
        ]
      },
      ...[
        "Email Campaign Strategy", "Email Copywriting & Design", "Email Automation Workflows", "Welcome Sequence Automation", "Abandoned Cart Recovery Flow", "Newsletter Production Services", "B2B Sales Outreach Nurture"
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
            question: "What is email marketing?", 
            answer: "Email marketing is the strategic practice of sending marketing, newsletter, and automated lifecycle emails directly to a database of subscribers. It is one of the most effective conversion channels because it targets users who have already expressed interest in your brand and allows for hyper-personalized messaging." 
          },
          { 
            question: "How much does email marketing cost?", 
            answer: "The cost of email marketing depends on list size, target delivery frequencies, and post-purchase campaign complexity. We provide comprehensive, custom campaign packages and setup retainers that cover design, copy drafting, segmentation analysis, flow engineering, and continuous reporting optimizations." 
          },
          { 
            question: "What email platform do you recommend?", 
            answer: "We recommend Klaviyo for E-Commerce brands due to its robust Shopify/WooCommerce triggers. For B2B businesses, we recommend HubSpot or ActiveCampaign for seamless alignment with CRM pipeline workflows. However, we have experience working across all major platforms, including Mailchimp, ConvertKit, and Mailerlite." 
          },
          { 
            question: "Do you create email designs?", 
            answer: "Yes, we design fully responsive, high-converting email templates. Our designs are built using clean, modern layouts, visually engaging product displays, clear call-to-action blocks, and fast-loading image assets that are perfectly optimized for both desktop and mobile viewports." 
          },
          { 
            question: "Can you automate our email campaigns?", 
            answer: "Yes, automation is our core specialty. We build end-to-end automated flows, including welcome emails, abandoned cart recovery, post-purchase follow-ups, re-engagement series, and behavior-based custom triggers, so your sales funnel continues to run on autopilot 24/7." 
          },
          { 
            question: "How often should we send emails?", 
            answer: "Frequency depends on your industry and list engagement levels. For active e-commerce brands, sending 2 to 3 targeted newsletters per week is common. For B2B firms, we recommend 1 to 2 high-value thought leadership updates per month. We focus heavily on quality and segmentation to avoid list fatigue and unsubscribe spikes." 
          },
          { 
            question: "Does email marketing still work?", 
            answer: "Absolutely. Email consistently delivers the highest ROI of any digital channel. Unlike public search results and social algorithms which can change overnight, your email list is an owned corporate asset that gives you direct, uninhibited access to your customers' attention." 
          },
          { 
            question: "Can email marketing increase sales?", 
            answer: "Yes, directly. By automating recovery sequences (like abandoned checkouts), upselling previous buyers with relevant product bundles, and nurturing cold list leads with educational thought leadership, email turns passive interest into predictable, repeatable sales." 
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
        id="email-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EmailHero />
      <WhyEmailMatters />
      <EmailServicesGrid />
      <EmailPerformance />
      <EmailProcess />
      <EmailTechStack />
      <EmailVisualSection />
      <EmailCaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="Delivery Standards." 
        description="We implement premium B2B email lead sequences, automated Klaviyo flows, and conversion attribution reports for organizations across the Middle East, APAC, Europe, and globally."
      />
      <EmailFAQ />
      
      <div className="border-t border-white/5">
        <EmailCTA />
      </div>
    </>
  );
}
