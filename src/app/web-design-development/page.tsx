import type { Metadata } from "next";
import Script from "next/script";
import { WebHero } from "@/components/web-services/WebHero";
import { WhyWebsiteMatters } from "@/components/web-services/WhyWebsiteMatters";
import { WebServicesGrid } from "@/components/web-services/WebServicesGrid";
import { WebPerformance } from "@/components/web-services/WebPerformance";
import { WebProcess } from "@/components/web-services/WebProcess";
import { WebTechStack } from "@/components/web-services/WebTechStack";
import { WebPortfolio } from "@/components/web-services/WebPortfolio";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { WebFAQ } from "@/components/web-services/WebFAQ";
import { LeadGeneration } from "@/components/home/LeadGeneration";

export const metadata: Metadata = {
  title: "Premium Web Design & Development Agency | Digipeak",
  description: "Award-winning web design company building high-performance, custom websites and e-commerce stores for brands in Qatar, Dubai, Riyadh, Singapore, and the UK.",
  keywords: [
    "Web Design Company Qatar", "Website Development Company Qatar", "Best Web Design Agency Qatar", 
    "Website Design Doha", "Web Design Company Dubai", "Website Development Dubai", 
    "Web Design Agency Riyadh", "Website Design Saudi Arabia", "Web Design Singapore", 
    "Website Development Sydney", "Web Design Auckland", "Website Design Colombo", 
    "Web Design Agency UK", "Corporate Website Development", "Custom Website Development", 
    "Enterprise Website Design", "E-Commerce Website Development"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/web-design-development',
  },
  openGraph: {
    title: "Premium Web Design & Development Agency | Digipeak",
    description: "Custom Websites Built For Performance, Conversions & Growth.",
    url: "https://www.digipeak.agency/web-design-development",
    images: ["/og-web-design.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Web Design & Development Agency | Digipeak",
    description: "Custom Websites Built For Performance, Conversions & Growth.",
  }
};

export default function WebDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/web-design-development/#webpage",
        "url": "https://www.digipeak.agency/web-design-development",
        "name": "Premium Web Design & Development Agency",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/web-design-development/", "name": "Web Design & Development" } }
        ]
      },
      ...[
        "Corporate Website Design", "Custom Web Development", "Headless E-Commerce Development", "Shopify Development", "WooCommerce Development", "UI/UX Design", "Landing Page Design"
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
            question: "How much does a custom website cost?",
            answer: "Our web design projects are entirely custom-built for enterprise and mid-market brands. Pricing depends on the complexity. After our Discovery phase, we provide a fixed-price proposal tailored to your specific business requirements.",
          },
          {
            question: "How long does it take to design and develop a website?",
            answer: "A standard corporate website takes approximately 4-8 weeks from wireframing to launch. Complex headless e-commerce builds or custom web applications typically range from 8-16 weeks.",
          },
          {
            question: "Do you use WordPress or custom code?",
            answer: "We are technology-agnostic. While we build many robust, highly-customized WordPress sites, we also specialize in Next.js, React, Node.js, and headless architectures.",
          },
          {
            question: "Will my new website be mobile responsive?",
            answer: "100%. Over 60% of enterprise traffic is mobile. We design mobile-first interfaces that ensure flawless UX and maximum conversion rates across all screen sizes and devices.",
          },
          {
            question: "Do you optimize the new website for SEO?",
            answer: "Yes. Technical SEO is baked into our development architecture. We optimize Core Web Vitals, implement structured data (JSON-LD), and ensure clean URL structures.",
          },
          {
            question: "Do you offer Shopify and WooCommerce development?",
            answer: "Absolutely. We build high-converting e-commerce experiences on both Shopify and WooCommerce. We can handle complex catalog migrations and custom headless storefronts.",
          },
          {
            question: "Will I be able to update the website myself?",
            answer: "Yes. Regardless of the technology stack we use, we implement intuitive Content Management Systems (CMS) and provide comprehensive video training so your team can easily update content.",
          },
          {
            question: "Do you provide website hosting and maintenance?",
            answer: "Yes. We offer military-grade managed hosting on AWS/Vercel, daily backups, 24/7 security monitoring, and continuous technical support.",
          },
          {
            question: "Why should I choose Digipeak over a cheaper freelancer?",
            answer: "A cheap website is an expense; our websites are revenue-generating assets. We bring an entire team of UI/UX designers, full-stack engineers, and senior technical SEOs to guarantee your website scales your business.",
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
        id="web-design-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebHero />
      <WhyWebsiteMatters />
      <WebServicesGrid />
      <WebPerformance />
      <WebProcess />
      <WebTechStack />
      <WebPortfolio />
      <GlobalLocations 
        title="Global" 
        subtitle="Web Dominance." 
        description="We engineer high-performance web platforms tailored to dominate enterprise sectors across the Middle East, APAC, and Europe."
      />
      <WebFAQ />
      
      <div className="border-t border-white/5">
        <LeadGeneration />
      </div>
    </>
  );
}
