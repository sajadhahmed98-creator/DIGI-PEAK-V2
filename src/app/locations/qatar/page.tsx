import type { Metadata } from "next";
import Script from "next/script";
import { LocationHero } from "@/components/shared/LocationHero";
import { QatarBusiness } from "@/components/qatar/QatarBusiness";
import { QatarServices } from "@/components/qatar/QatarServices";
import { QatarWhyChoose } from "@/components/qatar/QatarWhyChoose";
import { DohaSection } from "@/components/qatar/DohaSection";
import { QatarIndustries } from "@/components/qatar/QatarIndustries";
import { WhyMarketingMatters } from "@/components/qatar/WhyMarketingMatters";
import { QatarFAQ } from "@/components/qatar/QatarFAQ";
import { QatarCTA } from "@/components/qatar/QatarCTA";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Web Design Agency Qatar | Digipeak",
  description: "Digipeak is a premium digital agency helping businesses in Qatar and Doha grow online through expert SEO, Next.js web design, custom software development, branding, and AI marketing solutions.",
  keywords: [
    "Digital Marketing Agency Qatar", "SEO Company Qatar", "SEO Agency Qatar", 
    "Web Design Company Qatar", "Website Design Qatar", "Branding Agency Qatar", 
    "Social Media Marketing Qatar", "Digital Agency Qatar", "Creative Agency Qatar", 
    "Graphic Design Company Qatar", "Web Developer Qatar", "SEO Services Qatar", 
    "Doha Digital Marketing", "Doha SEO Agency"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/locations/qatar',
  },
  openGraph: {
    title: "Digital Marketing, SEO & Web Design Agency Qatar | Digipeak",
    description: "Premium digital agency helping businesses in Qatar and Doha grow online through expert SEO, web design, and branding solutions.",
    url: "https://www.digipeak.agency/locations/qatar",
    images: ["/og-qatar.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, SEO & Web Design Agency Qatar | Digipeak",
    description: "Premium digital agency helping businesses in Qatar and Doha grow online through expert SEO, web design, and branding solutions.",
  }
};

export default function QatarPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/locations/qatar/#webpage",
        "url": "https://www.digipeak.agency/locations/qatar",
        "name": "Digital Marketing, SEO & Web Design Services in Qatar",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/locations/qatar/", "name": "Qatar Services" } }
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
        "name": "Digipeak Agency Qatar Services",
        "image": "https://www.digipeak.agency/og-image.jpg",
        "url": "https://www.digipeak.agency/locations/qatar",
        "description": "Premium digital growth and technology agency providing remote services to businesses in Qatar and Doha.",
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
            "question": "Does Digipeak have a physical office in Qatar?",
            "answer": "No, Digipeak operates from our global headquarters in Sri Lanka. We serve Qatar-based businesses remotely using digital project management tools, secure communication channels, and video collaboration. This remote service model allows us to supply top-tier international engineering and digital marketing talent to the GCC region without passing on expensive local overhead costs to our clients."
          },
          {
            "question": "What digital services do you provide for businesses in Doha and across Qatar?",
            "answer": "We provide a comprehensive suite of high-performance digital services tailored for the Qatari market. These include Search Engine Optimization (SEO), modern Next.js web design and development, custom e-commerce systems, premium branding and visual identity systems, social media management, Google & Meta ads management, business automation, and premium cloud hosting."
          },
          {
            "question": "How do we collaborate and communicate during a project?",
            "answer": "We ensure complete transparency and structured delivery. We utilize dedicated project portals (like ClickUp), active communication channels (Slack or WhatsApp Business), and regular video updates (Google Meet or Zoom) to coordinate. You also receive direct access to live Looker Studio reporting dashboards showing real-time metrics for all digital campaigns."
          },
          {
            "question": "How do you handle contract payments from Qatar?",
            "answer": "We accept payments via standard international bank transfers or secure online billing channels. Our contracts are organized around performance-based milestones, meaning invoices are only generated as we achieve predefined project delivery phases, ensuring absolute security and trust."
          },
          {
            "question": "Why should a Qatari business choose a remote partner over a local agency?",
            "answer": "Working with Digipeak gives you direct access to international specialists and modern technical architectures (like headless React and fast server-side rendering) that local agencies often lack. We eliminate high regional overhead markups, providing premium engineering, transparent analytics, and high-converting creative work at an optimized cost."
          },
          {
            "question": "How does your SEO strategy target the local Qatar market?",
            "answer": "We build localized keyword maps targeting high-intent search volumes in Doha and across Qatar. Our SEO work includes writing custom schema structures, managing Google Business Profiles, optimizing localized content, and running local citation campaigns to ensure your company dominates search engine result pages (SERPs)."
          },
          {
            "question": "How do we get started with a custom proposal?",
            "answer": "You can initiate the process by visiting our contact page at /contact/ and filling out our multi-step lead system. Our founder and strategy team will audit your current digital channels and organize a video consultation to present a customized technical and marketing proposal."
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
        id="qatar-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-black text-white relative">
        <LocationHero
          badgeText="Qatar Digital Growth Hub"
          titlePrimary="Helping Businesses"
          titleGradient="Across Qatar Grow Online."
          description="Digipeak partners with businesses across Qatar to improve search visibility, attract qualified customers, and accelerate growth."
        />
        <QatarBusiness />
        <QatarServices />
        <QatarWhyChoose />
        <DohaSection />
        <QatarIndustries />
        <WhyMarketingMatters />
        <QatarFAQ />
        
        <div className="border-t border-white/5">
          <QatarCTA />
        </div>
      </div>
    </>
  );
}
