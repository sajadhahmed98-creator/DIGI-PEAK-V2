import type { Metadata } from "next";
import Script from "next/script";
import { LocationHero } from "@/components/shared/LocationHero";
import { DohaBusiness } from "@/components/doha/DohaBusiness";
import { DohaServices } from "@/components/doha/DohaServices";
import { DohaWhyChoose } from "@/components/doha/DohaWhyChoose";
import { DohaIndustries } from "@/components/doha/DohaIndustries";
import { DohaGrowth } from "@/components/doha/DohaGrowth";
import { WhySeoMattersDoha } from "@/components/doha/WhySeoMattersDoha";
import { DohaFAQ } from "@/components/doha/DohaFAQ";
import { DohaCTA } from "@/components/doha/DohaCTA";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Web Design Agency Doha | Digipeak",
  description: "Digipeak helps businesses across Doha grow through SEO, web design, branding, digital marketing, AI solutions, social media management, content marketing and business automation services.",
  keywords: [
    "Digital Marketing Agency Doha", "SEO Company Doha", "SEO Agency Doha", 
    "Web Design Company Doha", "Website Design Doha", "Branding Agency Doha", 
    "Social Media Marketing Doha", "Creative Agency Doha", "Digital Agency Doha", 
    "Graphic Design Company Doha", "AI Solutions Doha", "Business Automation Doha", 
    "Mobile App Development Doha", "UI UX Design Doha", "Content Marketing Doha", 
    "Email Marketing Doha", "Marketing Agency Doha", "Best Digital Agency Doha", 
    "Best Marketing Agency Doha"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/locations/qatar/doha',
  },
  openGraph: {
    title: "Digital Marketing, SEO & Web Design Agency Doha | Digipeak",
    description: "Digipeak helps businesses across Doha grow through SEO, web design, branding, digital marketing, and business automation services.",
    url: "https://www.digipeak.agency/locations/qatar/doha",
    images: ["/og-doha.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, SEO & Web Design Agency Doha | Digipeak",
    description: "Digipeak helps businesses across Doha grow through SEO, web design, branding, digital marketing, and business automation services.",
  }
};

export default function DohaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/locations/qatar/doha/#webpage",
        "url": "https://www.digipeak.agency/locations/qatar/doha",
        "name": "Digital Marketing, SEO & Web Design Services in Doha",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/locations/qatar/doha/", "name": "Doha Services" } }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.digipeak.agency/#organization",
        "name": "Digipeak Agency",
        "url": "https://www.digipeak.agency",
        "email": "hello@digipeak.agency",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.digipeak.agency/#logo",
          "url": "https://www.digipeak.agency/logo.png",
          "caption": "Digipeak Agency Logo"
        },
        "description": "Premium Digital Growth Agency specializing in Website Design, SEO, Branding, AI Automation, CRM Systems, Digital Marketing, and Lead Generation.",
        "foundingDate": "2022-01-01",
        "founder": {
          "@type": "Person",
          "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person",
          "name": "Sajadh Ahmed",
          "jobTitle": "Founder",
          "url": "https://www.digipeak.agency/author/sajadh-ahmed"
        },
        "sameAs": [
          "https://www.linkedin.com/company/digipeakagencyglobal",
          "https://www.instagram.com/digipeak.agency",
          "https://www.facebook.com/share/1BC3Xs8zW3/?mibextid=wwXIfr",
          "https://maps.app.goo.gl/9Gp2fifi3A15suaA6"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.digipeak.agency/#localbusiness",
        "name": "Digipeak Agency Doha Services",
        "image": "https://www.digipeak.agency/og-image.jpg",
        "url": "https://www.digipeak.agency/locations/qatar/doha",
        "description": "Premium digital growth and technology agency providing remote services to businesses in Doha.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "QA",
          "addressLocality": "Doha"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "question": "Do you work with businesses in Doha?",
            "answer": "Yes, we actively partner with corporate clients, SMEs, and startups across Doha and the wider GCC region. We serve industries including real estate, luxury hospitality, retail, and professional services, helping them build visual authority and secure high visibility in local search rankings."
          },
          {
            "question": "Can projects be managed remotely?",
            "answer": "Absolutely. Digipeak operates from our global headquarters in Sri Lanka, delivering premium services entirely remotely. We coordinate projects via digital project portals (like ClickUp), active messaging channels (Slack or WhatsApp Business), and regular video calls (Google Meet or Zoom). This model eliminates high local GCC overhead costs while providing access to premium international design and development talent."
          },
          {
            "question": "Do you offer SEO services in Doha?",
            "answer": "Yes, Search Engine Optimization is a core specialty. We build specialized search intent keyword maps, write custom local schemas, build white-hat citation maps, and construct optimized landing layouts to ensure your company outranks competitors in Doha SERPs."
          },
          {
            "question": "Can Digipeak build websites for Doha businesses?",
            "answer": "Yes, we develop custom high-performance corporate websites and e-commerce stores using modern headless Next.js, React, and server-side configurations. This ensures sub-second page loads, maximum security, and high-converting user interfaces."
          },
          {
            "question": "Do you provide branding services?",
            "answer": "Yes. We design comprehensive visual identity packages, vector logo structures, typography pairings, color specifications, and brand guideline documents to position your organization as a luxury industry leader in Doha."
          },
          {
            "question": "Do you work with startups in Doha?",
            "answer": "Yes, we collaborate with ambitious, funded startups looking to establish digital foundations, scale search footprints quickly, and build visual credibility to attract GCC investors and customers."
          },
          {
            "question": "How do projects begin?",
            "answer": "Collaboration starts when you visit our contact page at /contact/ and submit our multi-step lead system. Our strategy and engineering team will review your business presence, schedule a video discovery call, and present a custom strategic proposal."
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
        id="doha-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-black text-white relative">
        <LocationHero
          badgeText="Doha City Growth Hub"
          titlePrimary="Helping Businesses"
          titleGradient="Across Doha Grow Faster."
          description="Digipeak partners with businesses in Doha to improve online visibility, generate qualified leads, and build sustainable growth."
        />
        <DohaBusiness />
        <DohaServices />
        <DohaWhyChoose />
        <DohaIndustries />
        <DohaGrowth />
        <WhySeoMattersDoha />
        <DohaFAQ />
        
        <div className="border-t border-white/5">
          <DohaCTA />
        </div>
      </div>
    </>
  );
}
