import type { Metadata } from "next";
import Script from "next/script";
import { UiUxHero } from "@/components/ui-ux/UiUxHero";
import { WhyUiUxMatters } from "@/components/ui-ux/WhyUiUxMatters";
import { UiUxServicesGrid } from "@/components/ui-ux/UiUxServicesGrid";
import { UiUxPerformance } from "@/components/ui-ux/UiUxPerformance";
import { UiUxProcess } from "@/components/ui-ux/UiUxProcess";
import { UiUxTechStack } from "@/components/ui-ux/UiUxTechStack";
import { UiUxVisualSection } from "@/components/ui-ux/UiUxVisualSection";
import { UiUxCaseStudies } from "@/components/ui-ux/UiUxCaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { UiUxFAQ } from "@/components/ui-ux/UiUxFAQ";
import { UiUxCTA } from "@/components/ui-ux/UiUxCTA";

export const metadata: Metadata = {
  title: "Premium UI/UX Design Agency & Product Design Company",
  description: "Digipeak is a premier UI/UX design agency creating high-converting websites, SaaS interfaces, mobile apps, and custom enterprise design systems.",
  keywords: [
    "UI UX Design Agency Qatar", "UI UX Design Company Qatar", "UX Design Services Qatar", 
    "UI Design Services Qatar", "Mobile App UI Design Qatar", "Website UI Design Qatar", 
    "SaaS UI UX Design", "UX Research Qatar", "User Experience Design", "User Interface Design", 
    "UX Consulting Qatar", "UI UX Agency Dubai", "UI UX Design Riyadh", "UI UX Design Saudi Arabia", 
    "UI UX Design Singapore", "UI UX Design Sydney", "UI UX Design Auckland", "UI UX Design Colombo", 
    "Product Design Agency", "Enterprise UI UX Design", "Conversion Focused Design", 
    "Human Centered Design", "User Journey Optimization", "UX Audit Services", "Figma Design Services"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/ui-ux-design',
  },
  openGraph: {
    title: "Premium UI/UX Design Agency | Digipeak",
    description: "UI/UX Design That Converts Visitors Into Customers.",
    url: "https://www.digipeak.agency/ui-ux-design",
    images: ["/og-ui-ux.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium UI/UX Design Agency | Digipeak",
    description: "UI/UX Design That Converts Visitors Into Customers.",
  }
};

export default function UiUxDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/ui-ux-design/#webpage",
        "url": "https://www.digipeak.agency/ui-ux-design",
        "name": "Enterprise UI/UX Design & Product Agency",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/ui-ux-design/", "name": "UI/UX Design" } }
        ]
      },
      ...[
        "Website UI Design", "Mobile App UI Design", "SaaS Product Design", "UX Research", "Figma Design Services", "UX Audit Services", "Enterprise UI UX Design"
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
            question: "What is UI/UX design?", 
            answer: "UI (User Interface) design focuses on the visual and aesthetic aspects of a digital product—such as color palettes, custom typography, spacing, imagery, and visual structure. UX (User Experience) design is the architectural blueprint—how easily a user navigates the product, structures their objectives, and completes tasks without friction. We combine both disciplines to engineer interfaces that look premium and convert visitors into customers." 
          },
          { 
            question: "Why is UX important for business growth?", 
            answer: "Superior user experience directly boosts your bottom line. Optimized UX lowers customer acquisition costs (CAC), elevates retention rates, minimizes customer support tickets, and increases conversion ratios. Statistical studies show that every $1 spent on professional UX returns up to $100 in business growth—a massive 9,900% ROI driven by conversion-focused layout structures." 
          },
          { 
            question: "How much does UI/UX design cost?", 
            answer: "Our project pricing is customized based on scope, visual complexity, and requirements. Focused marketing website designs or single high-converting landing pages generally range from $2,500 to $5,500. Large-scale SaaS portals, complex corporate software platforms, and mobile apps requiring bespoke modular design systems and deep UX research range from $12,000 to $45,000+. We outline clear delivery stages for all scopes." 
          },
          { 
            question: "Do you design mobile apps?", 
            answer: "Yes, we specialize in high-fidelity mobile app interfaces. We design native iOS and Android experiences using Apple Human Interface Guidelines and Google Material Design frameworks. Every layout we build is fully responsive, optimized for tap targets, and packed with smooth micro-animations that feel premium." 
          },
          { 
            question: "Do you create Figma designs?", 
            answer: "Figma is our primary design workspace. We deliver meticulously structured, pixel-perfect Figma project files. These include automated layout rules (auto-layout), dynamic style tokens, and comprehensive custom component libraries. This allows your internal developers to inspect styles, extract clean assets, and build with absolute efficiency." 
          },
          { 
            question: "Can you redesign existing websites?", 
            answer: "Yes, website redesign is one of our core services. We start by conducting a comprehensive heuristic UX audit to locate drop-off points, performance bottlenecks, and structural friction on your current site. We then engineer a complete aesthetic and structural visual overhaul designed specifically to maximize user engagement and conversions." 
          },
          { 
            question: "How long does UI/UX design take?", 
            answer: "A standard project (such as a multi-page corporate website or conversion landing page) takes about 3 to 5 weeks from discovery to final assets. Massive enterprise CRM dashboards or custom native mobile applications requiring rigorous prototyping, multi-tier flow mapping, and user testing require 8 to 12 weeks." 
          },
          { 
            question: "Do you conduct UX research?", 
            answer: "Absolutely. Human-centered design requires thorough research. We never design based on guesswork. We conduct user interviews, mapping surveys, heatmap audits, heat-mapping assessments, and usability tests to ensure that every button placement, layout flow, and visual token is backed by quantitative data." 
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
        id="ui-ux-design-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UiUxHero />
      <WhyUiUxMatters />
      <UiUxServicesGrid />
      <UiUxPerformance />
      <UiUxProcess />
      <UiUxTechStack />
      <UiUxVisualSection />
      <UiUxCaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="Design Standard." 
        description="We craft high-performing interfaces and user-centered products for enterprises across the Middle East, APAC, Europe, and globally."
      />
      <UiUxFAQ />
      
      <div className="border-t border-white/5">
        <UiUxCTA />
      </div>
    </>
  );
}
