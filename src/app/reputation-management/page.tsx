import type { Metadata } from "next";
import Script from "next/script";
import { ReputationHero } from "@/components/reputation-management/ReputationHero";
import { WhyReputationMatters } from "@/components/reputation-management/WhyReputationMatters";
import { ReputationServicesGrid } from "@/components/reputation-management/ReputationServicesGrid";
import { ReputationPerformance } from "@/components/reputation-management/ReputationPerformance";
import { ReputationProcess } from "@/components/reputation-management/ReputationProcess";
import { ReputationTechStack } from "@/components/reputation-management/ReputationTechStack";
import { ReputationVisualSection } from "@/components/reputation-management/ReputationVisualSection";
import { ReputationCaseStudies } from "@/components/reputation-management/ReputationCaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { ReputationFAQ } from "@/components/reputation-management/ReputationFAQ";
import { ReputationCTA } from "@/components/reputation-management/ReputationCTA";

export const metadata: Metadata = {
  title: "Premium Online Reputation Management Agency & ORM Company",
  description: "Digipeak is a results-focused professional reputation management agency specializing in Google Reviews generation, brand monitoring, local SEO citations, and online sentiment repair.",
  keywords: [
    "Reputation Management Qatar", "Online Reputation Management Qatar", "ORM Agency Qatar", 
    "Google Review Management Qatar", "Brand Reputation Management Qatar", "Reputation Management Dubai", 
    "Online Reputation Management Dubai", "ORM Agency UAE", "Reputation Management Saudi Arabia", 
    "Reputation Management Riyadh", "Reputation Management Singapore", "Reputation Management Sydney", 
    "Reputation Management Auckland", "Reputation Management Colombo", "Reputation Management UK", 
    "Google Reviews Management", "Brand Monitoring Services", "Review Management Agency", 
    "Trust Building Services", "Local Reputation Management", "Business Reputation Agency", "Review Generation Services"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/reputation-management',
  },
  openGraph: {
    title: "Premium Online Reputation Management & ORM Company | Digipeak",
    description: "Build customer trust, monitor online sentiment, and improve Google ratings.",
    url: "https://www.digipeak.agency/reputation-management",
    images: ["/og-reputation-management.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Online Reputation Management & ORM Company | Digipeak",
    description: "Build customer trust, monitor online sentiment, and improve Google ratings.",
  }
};

export default function ReputationManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/reputation-management/#webpage",
        "url": "https://www.digipeak.agency/reputation-management",
        "name": "Enterprise Online Reputation Management & ORM Services",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/reputation-management/", "name": "Reputation Management" } }
        ]
      },
      ...[
        "Google Review Generation", "Online Reputation Audits", "Brand Mentions Monitoring", "Sentiment Analysis Systems", "Review Response Services", "Local CIT Listings Citations", "Crisis PR Management"
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
            question: "What is reputation management?", 
            answer: "Online Reputation Management (ORM) is the practice of monitoring, shaping, and improving how your brand or business is perceived online. It involves active review generation on platforms like Google Business Profile and Trustpilot, sentiment listening across social media, responding to customer feedback, and promoting positive client stories to build impenetrable digital trust." 
          },
          { 
            question: "How can reputation management help my business?", 
            answer: "ORM directly impacts client acquisition. Since 93% of prospective buyers read online feedback before purchasing, a strong 5-star listing acts as passive sales collateral. High ratings increase Google search visibility, attract premium customers, reduce purchasing hesitation, and directly lift conversion rates across all your marketing channels." 
          },
          { 
            question: "How do you increase Google reviews?", 
            answer: "We design and integrate automated customer feedback funnels that solicit reviews post-transaction via SMS, Email, or WhatsApp. We build custom landing pages that make it frictionless for users to leave a rating and use private sentiment interceptors to resolve customer issues internally before they turn into public negative comments." 
          },
          { 
            question: "Can you monitor our online reputation?", 
            answer: "Yes. We set up 24/7 brand monitoring using tools like Brand24 and Mention to track brand keywords, competitor listings, and customer sentiment across social networks, forums, blogs, and review sites, sending instant alerts whenever your brand is mentioned." 
          },
          { 
            question: "How long does reputation management take?", 
            answer: "Generating review momentum begins immediately after launching our automated feedback setup (typically within 7 to 14 days). Substantial rating improvements and search engine local map package placement increases typically mature within 30 to 90 days of consistent campaigns." 
          },
          { 
            question: "Can negative reviews be managed?", 
            answer: "Yes, strategically. While platforms rarely delete legitimate reviews, we manage them by setting up professional response playbooks that resolve issues in public view, demonstrating excellent customer service. Additionally, we build robust positive review generation systems that dilute negative comments and push your overall average back up." 
          },
          { 
            question: "Do reviews affect SEO rankings?", 
            answer: "Yes, significantly. Search engines favor trust signals. Google Business Profile reviews are one of the heaviest local search ranking factors. The quantity, rating score, and keyword relevance of reviews directly determine local map placements and map pack visibility." 
          },
          { 
            question: "How do you improve trust online?", 
            answer: "We build social proof systems. This includes creating reviews widgets on key product pages, building high-fidelity client video testimonials, publishing detailed customer success stories, maintaining updated business listings, and securing brand monitoring protocols." 
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
        id="reputation-management-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReputationHero />
      <WhyReputationMatters />
      <ReputationServicesGrid />
      <ReputationPerformance />
      <ReputationProcess />
      <ReputationTechStack />
      <ReputationVisualSection />
      <ReputationCaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="Reputation Standards." 
        description="We implement premium online reputation management setups, local Google listing review campaigns, and 24/7 brand sentiment listening profiles for organizations across the Middle East, APAC, Europe, and globally."
      />
      <ReputationFAQ />
      
      <div className="border-t border-white/5">
        <ReputationCTA />
      </div>
    </>
  );
}
