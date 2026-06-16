import type { Metadata } from "next";
import Script from "next/script";
import { MobileHero } from "@/components/mobile-apps/MobileHero";
import { WhyMobileAppsMatters } from "@/components/mobile-apps/WhyMobileAppsMatters";
import { MobileServicesGrid } from "@/components/mobile-apps/MobileServicesGrid";
import { MobilePerformance } from "@/components/mobile-apps/MobilePerformance";
import { MobileProcess } from "@/components/mobile-apps/MobileProcess";
import { MobileTechStack } from "@/components/mobile-apps/MobileTechStack";
import { MobileVisualSection } from "@/components/mobile-apps/MobileVisualSection";
import { MobileCaseStudies } from "@/components/mobile-apps/MobileCaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { MobileFAQ } from "@/components/mobile-apps/MobileFAQ";
import { MobileCTA } from "@/components/mobile-apps/MobileCTA";

export const metadata: Metadata = {
  title: "Premium Mobile App Development Company & Custom iOS & Android Agency",
  description: "Digipeak is an award-winning premium mobile app development agency creating custom native iOS, Android, and cross-platform Flutter & React Native applications.",
  keywords: [
    "Mobile App Development Qatar", "Mobile App Development Company Qatar", "App Development Agency Qatar", 
    "Android App Development Qatar", "iOS App Development Qatar", "Custom Mobile App Development", 
    "Flutter App Development", "React Native Development", "Enterprise Mobile Apps", "Mobile App Developers Qatar", 
    "Mobile App Development Dubai", "Mobile App Development Riyadh", "Mobile App Development Saudi Arabia", 
    "Mobile App Development Singapore", "Mobile App Development Sydney", "Mobile App Development Auckland", 
    "Mobile App Development Colombo", "Business Mobile Applications", "Startup App Development", 
    "Ecommerce Mobile Apps", "AI Mobile Applications", "SaaS Mobile Apps", "Cross Platform App Development"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/mobile-app-development',
  },
  openGraph: {
    title: "Premium Mobile App Development Agency | Digipeak",
    description: "Mobile Apps That Scale Businesses & Drive Growth.",
    url: "https://www.digipeak.agency/mobile-app-development",
    images: ["/og-mobile-apps.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Mobile App Development Agency | Digipeak",
    description: "Mobile Apps That Scale Businesses & Drive Growth.",
  }
};

export default function MobileAppDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/mobile-app-development/#webpage",
        "url": "https://www.digipeak.agency/mobile-app-development",
        "name": "Enterprise Mobile App Development Company",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/mobile-app-development/", "name": "Mobile App Development" } }
        ]
      },
      ...[
        "iOS App Development", "Android App Development", "Cross Platform Apps", "E-Commerce Apps", "AI Powered Apps", "SaaS Applications", "On-Demand Applications"
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
            question: "How much does mobile app development cost?", 
            answer: "The cost of building a mobile app depends entirely on features, complexity, design specs, and whether it requires custom server integrations. A focused hybrid prototype or MVP might range from $8,000 to $15,000. Comprehensive native consumer apps, complex on-demand delivery apps, or secure enterprise systems with microservice backends typically cost between $25,000 and $75,000+. We compile detailed cost breakdowns during our discovery phase." 
          },
          { 
            question: "How long does it take to build an app?", 
            answer: "A focused application (MVP or high-fidelity prototype) can be launched in 6 to 10 weeks. A comprehensive B2C custom consumer app or complex enterprise workflow app involving database links, security testing, and store publishing usually requires 12 to 20 weeks. Our methodology splits milestones into fortnightly sprints so you see active progress." 
          },
          { 
            question: "Do you develop iOS and Android apps?", 
            answer: "Yes, we develop for both major platforms. We can build native Swift (iOS) and Kotlin (Android) apps for maximum performance. Alternatively, we build high-performance cross-platform apps using Flutter or React Native, which share a single codebase to cut your development budget and timeline in half while maintaining premium, native-like speed." 
          },
          { 
            question: "Do you use Flutter?", 
            answer: "Yes, Flutter is one of our primary frameworks. Created by Google, Flutter compiles directly to machine code for both iOS and Android, resulting in sub-second loading speeds, pixel-perfect layouts, and highly fluid interactive micro-animations. It's the ideal framework for fast-scaling startups and modern enterprises." 
          },
          { 
            question: "Can you publish apps to app stores?", 
            answer: "Absolutely. Publishing can be highly complex due to strict store guidelines. We handle the entire deployment process, compiling binary bundles, setting up Apple Developer and Google Play Console accounts, writing metadata, designing custom app screenshots, and navigating the review cycles to guarantee approval." 
          },
          { 
            question: "Do you provide app maintenance?", 
            answer: "Yes, we offer ongoing maintenance and support packages. Mobile operating systems release major updates annually (iOS & Android). Our support contracts ensure your application is continually updated to support new SDKs, patched against emerging security threats, optimized for runtime speeds, and quickly updated with new features." 
          },
          { 
            question: "Can you build AI-powered mobile apps?", 
            answer: "Yes, AI integration is a core specialty. We can integrate advanced large language models (like OpenAI's GPT or Claude) to build smart voice assistants, custom chatbot recommendations, automated text parsing, programmatic notification builders, and predictive user behavior models directly inside your app." 
          },
          { 
            question: "Do you create custom business applications?", 
            answer: "Yes. Many of our projects are custom internal applications built specifically to optimize enterprise operations. Examples include field sales agent CRM trackers, geolocated warehouse trackers, automated inventory scanners, and custom ERP management dashboards that sync with legacy company databases." 
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
        id="mobile-app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MobileHero />
      <WhyMobileAppsMatters />
      <MobileServicesGrid />
      <MobilePerformance />
      <MobileProcess />
      <MobileTechStack />
      <MobileVisualSection />
      <MobileCaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="Mobile Standard." 
        description="We craft high-performance mobile applications and custom native software architectures for enterprises across the Middle East, APAC, Europe, and globally."
      />
      <MobileFAQ />
      
      <div className="border-t border-white/5">
        <MobileCTA />
      </div>
    </>
  );
}
