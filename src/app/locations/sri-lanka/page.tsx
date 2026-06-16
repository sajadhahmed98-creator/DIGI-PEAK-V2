import type { Metadata } from "next";
import Script from "next/script";
import { LocationHero } from "@/components/shared/LocationHero";
import { SriLankaCities } from "@/components/sri-lanka/SriLankaCities";
import { SriLankaIndustries } from "@/components/sri-lanka/SriLankaIndustries";
import { SriLankaServices } from "@/components/sri-lanka/SriLankaServices";
import { SriLankaFAQ } from "@/components/sri-lanka/SriLankaFAQ";
import { SriLankaSEOContent } from "@/components/sri-lanka/SriLankaSEOContent";
import { LeadGeneration } from "@/components/home/LeadGeneration";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Web Design Agency Sri Lanka | Digipeak",
  description: "Digipeak is a premium digital agency helping businesses across Sri Lanka grow online through expert SEO, Next.js web design, branding, and AI solutions.",
  keywords: [
    "Digital Marketing Agency Sri Lanka", "SEO Agency Sri Lanka", "SEO Company Sri Lanka",
    "Web Design Company Sri Lanka", "Web Development Company Sri Lanka", "Website Design Sri Lanka",
    "Creative Agency Sri Lanka", "Branding Agency Sri Lanka", "AI Agency Sri Lanka", 
    "AI Solutions Sri Lanka", "Social Media Marketing Sri Lanka", "Performance Marketing Agency Sri Lanka",
    "Google Ads Agency Sri Lanka", "Business Growth Agency Sri Lanka", "Photography Services Sri Lanka", 
    "Corporate Photography Sri Lanka", "Videography Services Sri Lanka", "Corporate Videography Sri Lanka",
    "Website Hosting Sri Lanka", "Hosting Company Sri Lanka", "E-Commerce Development Sri Lanka",
    "CRM Automation Sri Lanka", "Business Automation Sri Lanka", "Lead Generation Services Sri Lanka",
    "Digital Transformation Sri Lanka"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/locations/sri-lanka',
  },
  openGraph: {
    title: "Digital Marketing, SEO & Web Design Agency Sri Lanka | Digipeak",
    description: "Premium digital agency helping businesses in Sri Lanka grow online through expert SEO, web design, and branding solutions.",
    url: "https://www.digipeak.agency/locations/sri-lanka",
    images: ["/og-sri-lanka.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, SEO & Web Design Agency Sri Lanka | Digipeak",
    description: "Premium digital agency helping businesses in Sri Lanka grow online through expert SEO, web design, and branding solutions.",
  }
};

export default function SriLankaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/locations/sri-lanka/#webpage",
        "url": "https://www.digipeak.agency/locations/sri-lanka",
        "name": "Digital Marketing, SEO & Web Design Services in Sri Lanka",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/locations/", "name": "Locations" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/locations/sri-lanka/", "name": "Sri Lanka Services" } }
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
        "name": "Digipeak Agency Sri Lanka Services",
        "image": "https://www.digipeak.agency/og-image.jpg",
        "url": "https://www.digipeak.agency/locations/sri-lanka",
        "description": "Premium digital growth and technology agency providing services to businesses across Sri Lanka.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "LK"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.digipeak.agency/locations/sri-lanka/#service",
        "name": "Digital Marketing & Web Design Sri Lanka",
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": "LK"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "question": "Do you provide SEO services across Sri Lanka?",
            "answer": "Yes, we are a leading SEO company in Sri Lanka. We offer comprehensive local and national SEO services, including technical audits, keyword optimization, and link building to ensure your business ranks highly in Google for targeted commercial keywords across all major cities."
          },
          {
            "question": "Do you offer web design services in Colombo and other cities?",
            "answer": "Absolutely. As a premium web design company in Sri Lanka, we build ultra-fast, high-converting Next.js websites for clients in Colombo, Kandy, Gampaha, and nationwide. Our web development focuses on exceptional UI/UX, mobile responsiveness, and technical excellence."
          },
          {
            "question": "Can Digipeak manage social media marketing campaigns in Sri Lanka?",
            "answer": "Yes, our social media marketing agency manages end-to-end campaigns across Facebook, Instagram, LinkedIn, and TikTok. We create localized, high-engagement content and run targeted performance marketing and Google Ads to drive lead generation and sales."
          },
          {
            "question": "Do you provide branding services for businesses?",
            "answer": "As a full-service creative agency, we offer complete brand identity systems. Our branding agency services include logo design, brand strategy, visual guidelines, and corporate identity development to help your business stand out in the competitive Sri Lankan market."
          },
          {
            "question": "Do you offer photography and videography services?",
            "answer": "Yes, we provide professional corporate photography and videography services across Sri Lanka. From high-end commercial shoots, corporate headshots, and product photography to promotional video production, our media team delivers stunning visual assets."
          },
          {
            "question": "Can Digipeak build e-commerce websites?",
            "answer": "Certainly. We specialize in custom e-commerce development in Sri Lanka. Whether you need a headless Shopify build or a custom Next.js storefront, we engineer secure, fast, and highly scalable online stores integrated with local payment gateways."
          },
          {
            "question": "Do you provide website hosting and maintenance services?",
            "answer": "Yes, as a reliable website hosting company in Sri Lanka, we provide enterprise-grade cloud hosting, automated backups, continuous security monitoring, and dedicated maintenance packages to keep your digital assets running flawlessly 24/7."
          },
          {
            "question": "Do you offer AI automation solutions for businesses in Sri Lanka?",
            "answer": "We are a pioneering AI agency in Sri Lanka, offering advanced AI solutions, CRM automation, and business automation workflows. We integrate intelligent chatbots, automated lead nurturing pipelines, and data analytics tools to streamline your operations and accelerate business growth."
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
        id="sri-lanka-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-black text-white relative">
        <LocationHero
          badgeText="Sri Lanka Digital Growth Hub"
          titlePrimary="Digital Growth Solutions"
          titleGradient="Across Sri Lanka"
          description="Helping businesses throughout Sri Lanka grow through expert Web Design, Technical SEO, Performance Digital Marketing, Premium Branding, Custom AI Solutions, High-Engagement Social Media Marketing, Corporate Photography & Videography, Enterprise Hosting, Business Automation, and Targeted Lead Generation."
          primaryCtaText="Get Proposal"
          primaryCtaLink="/contact"
        />
        
        <SriLankaServices />
        <SriLankaCities />
        <SriLankaIndustries />
        <SriLankaSEOContent />
        <SriLankaFAQ />
        
        <div className="border-t border-white/5">
          <LeadGeneration />
        </div>
      </main>
    </>
  );
}
