import type { Metadata } from "next";
import Script from "next/script";
import { LocationHero } from "@/components/shared/LocationHero";
import { SaudiBusiness } from "@/components/saudi/SaudiBusiness";
import { SaudiMarkets } from "@/components/saudi/SaudiMarkets";
import { SaudiServices } from "@/components/saudi/SaudiServices";
import { SaudiWhyChoose } from "@/components/saudi/SaudiWhyChoose";
import { SaudiIndustries } from "@/components/saudi/SaudiIndustries";
import { SaudiVision } from "@/components/saudi/SaudiVision";
import { WhySeoMattersSaudi } from "@/components/saudi/WhySeoMattersSaudi";
import { SaudiFAQ } from "@/components/saudi/SaudiFAQ";
import { SaudiCTA } from "@/components/saudi/SaudiCTA";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Web Design Agency Saudi Arabia | Digipeak",
  description: "Digipeak helps businesses across Saudi Arabia grow through results-focused SEO, custom web design, corporate branding, performance digital marketing, and AI automation solutions.",
  keywords: [
    "Digital Marketing Agency Saudi Arabia", "SEO Company Saudi Arabia", "SEO Agency Saudi Arabia", 
    "Web Design Company Saudi Arabia", "Website Design Saudi Arabia", "Branding Agency Saudi Arabia", 
    "Social Media Marketing Saudi Arabia", "Creative Agency Saudi Arabia", "Digital Agency Saudi Arabia", 
    "AI Solutions Saudi Arabia", "Business Automation Saudi Arabia", "Mobile App Development Saudi Arabia", 
    "UI UX Design Saudi Arabia", "Content Marketing Saudi Arabia", "Email Marketing Saudi Arabia", 
    "Best Digital Agency Saudi Arabia", "Best Marketing Agency Saudi Arabia", "Web Development Saudi Arabia"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/locations/saudi-arabia',
  },
  openGraph: {
    title: "Digital Marketing, SEO & Web Design Agency Saudi Arabia | Digipeak",
    description: "Digipeak helps businesses across Saudi Arabia grow through results-focused SEO, custom web design, corporate branding, performance digital marketing, and AI automation solutions.",
    url: "https://www.digipeak.agency/locations/saudi-arabia",
    images: ["/og-saudi.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, SEO & Web Design Agency Saudi Arabia | Digipeak",
    description: "Digipeak helps businesses across Saudi Arabia grow through digital marketing, web development, branding, and custom technology solutions.",
  }
};

export default function SaudiArabiaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/locations/saudi-arabia/#webpage",
        "url": "https://www.digipeak.agency/locations/saudi-arabia",
        "name": "Digital Marketing, SEO & Web Design Services in Saudi Arabia",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/locations/saudi-arabia/", "name": "Saudi Arabia Services" } }
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
        "name": "Digipeak Agency Saudi Arabia Services",
        "image": "https://www.digipeak.agency/og-image.jpg",
        "url": "https://www.digipeak.agency/locations/saudi-arabia",
        "description": "Premium digital growth and technology agency providing remote services to businesses across Saudi Arabia.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SA",
          "addressLocality": "Riyadh"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "question": "Do you serve businesses in Saudi Arabia?",
            "answer": "Yes, we partner with corporate organizations, holdings, startups, and luxury brands across Riyadh, Jeddah, Dammam, Khobar, and other major Saudi regions. We align digital setups with Vision 2030 digital expansion strategies."
          },
          {
            "question": "Can Digipeak provide services remotely?",
            "answer": "Absolutely. Digipeak operates from our global headquarters in Sri Lanka, delivering all digital marketing, SEO, web design, and automation services remotely. We manage projects using digital systems (such as ClickUp), messaging channels (Slack or WhatsApp), and video calls (Zoom or Google Meet). This remote delivery model allows us to supply premium creative and development talent without high GCC physical overhead costs."
          },
          {
            "question": "Do you offer SEO services in KSA?",
            "answer": "Yes, Search Engine Optimization is a core strategic specialty. We perform regional search volume analysis, establish localized keyword mapping (targeting Riyadh, Jeddah, Dammam, and GCC Arabic terms), design custom JSON-LD schema networks, and build high-authority citations to help you outrank competitors in organic search."
          },
          {
            "question": "Can you build custom corporate websites?",
            "answer": "Yes, we design and develop custom corporate websites and high-performance e-commerce platforms using headless frameworks like Next.js, React, and server-side systems. This guarantees sub-second speeds, absolute security, and high-converting layouts."
          },
          {
            "question": "Do you provide branding and creative assets?",
            "answer": "Yes. We create cohesive visual brand identity suites, vector logos, corporate font sheets, color boards, and brand guideline documentation to position your business as a premium, trusted leader in the Saudi market."
          },
          {
            "question": "Do you work with startups in Saudi Arabia?",
            "answer": "Yes, we actively collaborate with funded startups and emerging entrepreneurs who need to quickly establish digital foundations, build visual authority, and capture search intent to secure early-stage growth."
          },
          {
            "question": "How can I request a custom proposal?",
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
        id="saudi-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-black text-white relative">
        <LocationHero
          badgeText="Saudi Arabia Growth Hub — Vision 2030"
          titlePrimary="Supporting Businesses"
          titleGradient="Across Saudi Arabia Grow Online."
          description="Digipeak collaborates with organizations across Saudi Arabia to accelerate digital footprint visibility and establish brand authority."
        />
        <SaudiBusiness />
        <SaudiMarkets />
        <SaudiServices />
        <SaudiWhyChoose />
        <SaudiIndustries />
        <SaudiVision />
        <WhySeoMattersSaudi />
        <SaudiFAQ />
        
        <div className="border-t border-white/5">
          <SaudiCTA />
        </div>
      </div>
    </>
  );
}
