import type { Metadata } from "next";
import Script from "next/script";
import { LocationHero } from "@/components/shared/LocationHero";
import { UaeBusiness } from "@/components/uae/UaeBusiness";
import { UaeRegions } from "@/components/uae/UaeRegions";
import { UaeServices } from "@/components/uae/UaeServices";
import { UaeWhyChoose } from "@/components/uae/UaeWhyChoose";
import { UaeIndustries } from "@/components/uae/UaeIndustries";
import { UaeGrowth } from "@/components/uae/UaeGrowth";
import { WhyMarketingMattersUae } from "@/components/uae/WhyMarketingMattersUae";
import { UaeFAQ } from "@/components/uae/UaeFAQ";
import { UaeCTA } from "@/components/uae/UaeCTA";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Web Design Agency UAE | Digipeak",
  description: "Digipeak helps businesses across the UAE grow through elite SEO, custom web design, corporate branding, performance digital marketing, and AI solutions.",
  keywords: [
    "Digital Marketing Agency UAE", "SEO Company UAE", "SEO Agency UAE", 
    "Web Design Company UAE", "Website Design UAE", "Branding Agency UAE", 
    "Social Media Marketing UAE", "Creative Agency UAE", "Digital Agency UAE", 
    "AI Solutions UAE", "Business Automation UAE", "Mobile App Development UAE", 
    "UI UX Design UAE", "Content Marketing UAE", "Email Marketing UAE", 
    "Best Digital Agency UAE", "Best Marketing Agency UAE", "Web Development UAE"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/uae',
  },
  openGraph: {
    title: "Digital Marketing, SEO & Web Design Agency UAE | Digipeak",
    description: "Digipeak helps businesses across the UAE grow through elite SEO, custom web design, corporate branding, performance digital marketing, and AI solutions.",
    url: "https://www.digipeak.agency/uae",
    images: ["/og-uae.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, SEO & Web Design Agency UAE | Digipeak",
    description: "Digipeak helps businesses across the UAE grow through digital marketing, web development, branding, and custom technology solutions.",
  }
};

export default function UaePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/uae/#webpage",
        "url": "https://www.digipeak.agency/uae",
        "name": "Digital Marketing, SEO & Web Design Services in the UAE",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/uae/", "name": "UAE Services" } }
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
        "name": "Digipeak Agency UAE Services",
        "image": "https://www.digipeak.agency/og-image.jpg",
        "url": "https://www.digipeak.agency/uae",
        "description": "Premium digital growth and technology agency providing remote services to businesses across the United Arab Emirates.",
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
            "question": "Do you serve businesses throughout the UAE?",
            "answer": "Yes, we partner with corporate organizations, startups, and luxury brands across Abu Dhabi, Dubai, Sharjah, Ajman, and all other Emirates. We serve industries including real estate, hotels, e-commerce, professional services, and wealth management."
          },
          {
            "question": "How does your remote delivery model function?",
            "answer": "Digipeak operates from our global headquarters in Sri Lanka, delivering all digital marketing, SEO, web design, and automation services remotely. We manage projects using digital systems (such as ClickUp), messaging channels (Slack or WhatsApp), and video calls (Zoom or Google Meet). This remote delivery model allows us to supply elite creative and development talent without high GCC physical overhead costs."
          },
          {
            "question": "Do you offer SEO services in the UAE?",
            "answer": "Yes, Search Engine Optimization is a core strategic specialty. We perform regional search volume analysis, establish localized keyword mapping (targeting Dubai Marina, Downtown, Abu Dhabi Al Reem Island, etc.), design custom JSON-LD schema networks, and build high-authority citations to help you outrank competitors in organic search."
          },
          {
            "question": "Can you build custom corporate websites?",
            "answer": "Yes, we design and develop custom corporate websites and high-performance e-commerce platforms using headless frameworks like Next.js, React, and server-side systems. This guarantees sub-second speeds, absolute security, and high-converting layouts."
          },
          {
            "question": "Do you provide branding and creative assets?",
            "answer": "Yes. We create cohesive visual brand identity suites, vector logos, corporate font sheets, color boards, and brand guideline documentation to position your business as a premium, trusted leader in the UAE market."
          },
          {
            "question": "Do you work with startups in the UAE?",
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
        id="uae-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-black text-white relative">
        <LocationHero
          badgeText="UAE Regional Growth Hub"
          titlePrimary="Helping Businesses"
          titleGradient="Across The UAE Grow Online."
          description="Digipeak partners with businesses throughout the United Arab Emirates to improve visibility, attract customers, and accelerate growth."
        />
        <UaeBusiness />
        <UaeRegions />
        <UaeServices />
        <UaeWhyChoose />
        <UaeIndustries />
        <UaeGrowth />
        <WhyMarketingMattersUae />
        <UaeFAQ />
        
        <div className="border-t border-white/5">
          <UaeCTA />
        </div>
      </div>
    </>
  );
}
