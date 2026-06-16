import type { Metadata } from "next";
import Script from "next/script";
import { LocationHero } from "@/components/shared/LocationHero";
import { DubaiBusiness } from "@/components/dubai/DubaiBusiness";
import { DubaiServices } from "@/components/dubai/DubaiServices";
import { DubaiWhyChoose } from "@/components/dubai/DubaiWhyChoose";
import { DubaiIndustries } from "@/components/dubai/DubaiIndustries";
import { DubaiGrowth } from "@/components/dubai/DubaiGrowth";
import { WhySeoMattersDubai } from "@/components/dubai/WhySeoMattersDubai";
import { DubaiFAQ } from "@/components/dubai/DubaiFAQ";
import { DubaiCTA } from "@/components/dubai/DubaiCTA";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Web Design Agency Dubai | Digipeak",
  description: "Digipeak helps businesses across Dubai grow through SEO, web design, branding, digital marketing, AI solutions, content marketing, social media management and business automation services.",
  keywords: [
    "Digital Marketing Agency Dubai", "SEO Company Dubai", "SEO Agency Dubai", 
    "Web Design Company Dubai", "Website Design Dubai", "Branding Agency Dubai", 
    "Social Media Marketing Dubai", "Creative Agency Dubai", "Digital Agency Dubai", 
    "Graphic Design Company Dubai", "AI Solutions Dubai", "Business Automation Dubai", 
    "Mobile App Development Dubai", "UI UX Design Dubai", "Content Marketing Dubai", 
    "Email Marketing Dubai", "Marketing Agency Dubai", "Best Digital Agency Dubai", 
    "Best Marketing Agency Dubai", "Web Development Dubai"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/dubai',
  },
  openGraph: {
    title: "Digital Marketing, SEO & Web Design Agency Dubai | Digipeak",
    description: "Digipeak helps businesses across Dubai grow through SEO, web design, branding, digital marketing, AI solutions, content marketing, social media management and business automation services.",
    url: "https://www.digipeak.agency/dubai",
    images: ["/og-dubai.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, SEO & Web Design Agency Dubai | Digipeak",
    description: "Digipeak helps businesses across Dubai grow through SEO, web design, branding, digital marketing, and business automation services.",
  }
};

export default function DubaiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/dubai/#webpage",
        "url": "https://www.digipeak.agency/dubai",
        "name": "Digital Marketing, SEO & Web Design Services in Dubai",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/dubai/", "name": "Dubai Services" } }
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
        "name": "Digipeak Agency Dubai Services",
        "image": "https://www.digipeak.agency/og-image.jpg",
        "url": "https://www.digipeak.agency/dubai",
        "description": "Premium digital growth and technology agency providing remote services to businesses in Dubai.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AE",
          "addressLocality": "Dubai"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "question": "Do you work with businesses in Dubai?",
            "answer": "Yes, we partner with corporate organizations, startups, and luxury brands across Dubai and the UAE. We serve industries including real estate, hotels, e-commerce, professional firms, and financial entities, helping them build search footprint authority and capture digital leads."
          },
          {
            "question": "Can Digipeak provide services remotely?",
            "answer": "Absolutely. Digipeak operates from our global headquarters in Sri Lanka, delivering all digital marketing, SEO, web design, and automation services remotely. We manage projects using digital systems (such as ClickUp), messaging channels (Slack or WhatsApp), and video calls (Zoom or Google Meet). This remote delivery model allows us to supply elite creative and development talent without high GCC physical overhead costs."
          },
          {
            "question": "Do you offer SEO services in Dubai?",
            "answer": "Yes, Search Engine Optimization is a core strategic specialty. We perform regional search volume analysis, establish localized keyword mapping (targeting Dubai Marina, DIFC, etc.), design custom JSON-LD schema networks, and build citations to help you outrank competitors in organic search."
          },
          {
            "question": "Can you build websites for Dubai businesses?",
            "answer": "Yes, we design and develop custom corporate websites and high-performance e-commerce platforms using headless frameworks like Next.js, React, and server-side systems. This guarantees sub-second speeds, absolute security, and high-converting layouts."
          },
          {
            "question": "Do you provide branding services?",
            "answer": "Yes. We create cohesive visual brand identity suites, vector logos, corporate font sheets, color boards, and brand guideline documentation to position your business as a premium, trusted leader in the Dubai market."
          },
          {
            "question": "Do you work with startups in Dubai?",
            "answer": "Yes, we actively collaborate with funded startups and emerging entrepreneurs who need to quickly establish digital foundations, build visual authority, and capture search intent to secure early-stage growth."
          },
          {
            "question": "How can I get a proposal?",
            "answer": "You can request a custom proposal by visiting our contact page at /contact/ and filling out our multi-step lead system. Our strategy and engineering team will review your business presence, arrange a discovery video call, and provide a tailored strategic roadmap."
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
        id="dubai-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-black text-white relative">
        <LocationHero
          badgeText="Dubai Innovation & Growth Hub"
          titlePrimary="Helping Dubai Businesses"
          titleGradient="Scale Smarter & Faster."
          description="Digipeak works with businesses across Dubai to strengthen digital visibility, attract high-value customers, and accelerate growth."
        />
        <DubaiBusiness />
        <DubaiServices />
        <DubaiWhyChoose />
        <DubaiIndustries />
        <DubaiGrowth />
        <WhySeoMattersDubai />
        <DubaiFAQ />
        
        <div className="border-t border-white/5">
          <DubaiCTA />
        </div>
      </div>
    </>
  );
}
