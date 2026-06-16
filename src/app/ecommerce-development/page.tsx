import type { Metadata } from "next";
import Script from "next/script";
import { EcommerceHero } from "@/components/ecommerce-services/EcommerceHero";
import { WhyEcommerceMatters } from "@/components/ecommerce-services/WhyEcommerceMatters";
import { EcommerceServicesGrid } from "@/components/ecommerce-services/EcommerceServicesGrid";
import { ShopifyServices } from "@/components/ecommerce-services/ShopifyServices";
import { WooCommerceServices } from "@/components/ecommerce-services/WooCommerceServices";
import { ConversionOptimization } from "@/components/ecommerce-services/ConversionOptimization";
import { EcommercePerformance } from "@/components/ecommerce-services/EcommercePerformance";
import { EcommerceProcess } from "@/components/ecommerce-services/EcommerceProcess";
import { EcommerceTechStack } from "@/components/ecommerce-services/EcommerceTechStack";
import { EcommercePortfolio } from "@/components/ecommerce-services/EcommercePortfolio";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { EcommerceFAQ } from "@/components/ecommerce-services/EcommerceFAQ";
import { LeadGeneration } from "@/components/home/LeadGeneration";

export const metadata: Metadata = {
  title: "Premium E-Commerce Development Agency | Shopify & WooCommerce",
  description: "Digipeak is a leading E-Commerce development agency specializing in Shopify, WooCommerce, and custom headless storefronts for brands in Qatar, Dubai, Riyadh, and globally.",
  keywords: [
    "E-Commerce Development Qatar", "Shopify Development Qatar", "WooCommerce Development Qatar", 
    "E-Commerce Website Development Doha", "Shopify Experts Dubai", "WooCommerce Developers UAE", 
    "E-Commerce Development Saudi Arabia", "Online Store Development Riyadh", "E-Commerce Agency Singapore", 
    "Shopify Development Sydney", "E-Commerce Auckland", "Online Store Development Colombo", 
    "E-Commerce Agency UK", "Custom E-Commerce Development", "Enterprise E-Commerce Solutions", 
    "Marketplace Development", "Shopify Store Design", "WooCommerce Development Services"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/ecommerce-development',
  },
  openGraph: {
    title: "Premium E-Commerce Development Agency | Digipeak",
    description: "E-Commerce Websites Built To Scale Sales. Shopify & WooCommerce Experts.",
    url: "https://www.digipeak.agency/ecommerce-development",
    images: ["/og-ecommerce.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium E-Commerce Development Agency | Digipeak",
    description: "E-Commerce Websites Built To Scale Sales. Shopify & WooCommerce Experts.",
  }
};

export default function EcommercePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/ecommerce-development/#webpage",
        "url": "https://www.digipeak.agency/ecommerce-development",
        "name": "Premium E-Commerce Development Agency",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/ecommerce-development/", "name": "E-Commerce Development" } }
        ]
      },
      ...[
        "Custom E-Commerce Development", "Shopify Development", "Shopify Plus Setup", "WooCommerce Development", "Marketplace Development", "Conversion Rate Optimization", "B2B Commerce Solutions"
      ].map(serviceType => ({
        "@type": "Service",
        "serviceType": serviceType,
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": ["Qatar", "Dubai", "UAE", "Saudi Arabia", "Riyadh", "Singapore", "Sydney", "Auckland", "Colombo", "United Kingdom"]
      })),
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            question: "Should I choose Shopify or WooCommerce for my store?",
            answer: "Shopify is a fully managed SaaS platform, perfect for brands wanting rapid deployment and built-in security. WooCommerce is open-source (built on WordPress), offering unlimited customization. We evaluate your specific needs before recommending a platform.",
          },
          {
            question: "How much does a custom E-Commerce store cost?",
            answer: "Costs vary significantly based on complexity. A standard Shopify theme customization might take a few weeks, while a custom headless Shopify Plus build or a complex WooCommerce marketplace requires enterprise-level investment.",
          },
          {
            question: "What is your typical development timeline?",
            answer: "Standard e-commerce stores can launch in 6-8 weeks. Enterprise builds, headless architectures, or stores requiring complex ERP/inventory integrations typically take 10-16 weeks.",
          },
          {
            question: "Do you integrate local payment gateways?",
            answer: "Yes. We integrate global gateways like Stripe and PayPal, as well as region-specific gateways crucial for the GCC (e.g., PayTabs, Checkout.com, Tap) and APAC markets.",
          },
          {
            question: "How do you handle shipping integrations?",
            answer: "We connect your store directly to major carriers (DHL, FedEx, Aramex) and localized fulfillment centers for automated shipping rate calculations and real-time tracking.",
          },
          {
            question: "Are there limits to the number of products I can sell?",
            answer: "No. Both Shopify Plus and custom WooCommerce architectures are built to scale infinitely. We have experience managing catalogs with tens of thousands of SKUs.",
          },
          {
            question: "Is SEO included in your e-commerce builds?",
            answer: "Technical SEO is foundational to our process. We optimize product schemas (JSON-LD), category architecture, internal linking, and Core Web Vitals to ensure your products rank immediately.",
          },
          {
            question: "Do you provide ongoing store maintenance?",
            answer: "Yes. E-Commerce requires constant monitoring. We offer SLAs covering security updates, plugin management, uptime monitoring, and continuous Conversion Rate Optimization (CRO) testing.",
          },
          {
            question: "What is Conversion Rate Optimization (CRO)?",
            answer: "CRO is the continuous process of A/B testing UI elements, optimizing page speed, and refining the checkout flow to convert a higher percentage of your traffic into paying customers.",
          },
          {
            question: "Can you build multi-currency and multi-lingual stores?",
            answer: "Absolutely. For brands expanding globally, we architect stores that dynamically detect user location, serving localized pricing, currencies, and languages without sacrificing SEO equity.",
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
        id="ecommerce-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EcommerceHero />
      <WhyEcommerceMatters />
      <EcommerceServicesGrid />
      <ShopifyServices />
      <WooCommerceServices />
      <ConversionOptimization />
      <EcommercePerformance />
      <EcommerceProcess />
      <EcommerceTechStack />
      <EcommercePortfolio />
      <GlobalLocations 
        title="Global" 
        subtitle="E-Commerce Reach." 
        description="We engineer high-performance stores tailored to dominate enterprise retail sectors across the Middle East, APAC, and Europe."
      />
      <EcommerceFAQ />
      
      <div className="border-t border-white/5">
        {/* We reuse LeadGeneration as the final CTA block */}
        <LeadGeneration />
      </div>
    </>
  );
}
