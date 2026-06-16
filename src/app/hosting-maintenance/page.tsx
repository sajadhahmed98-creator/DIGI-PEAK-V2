import type { Metadata } from "next";
import Script from "next/script";
import { HostingHero } from "@/components/hosting-maintenance/HostingHero";
import { WhyHostingMatters } from "@/components/hosting-maintenance/WhyHostingMatters";
import { HostingServicesGrid } from "@/components/hosting-maintenance/HostingServicesGrid";
import { HostingPerformance } from "@/components/hosting-maintenance/HostingPerformance";
import { HostingProcess } from "@/components/hosting-maintenance/HostingProcess";
import { HostingTechStack } from "@/components/hosting-maintenance/HostingTechStack";
import { HostingVisualSection } from "@/components/hosting-maintenance/HostingVisualSection";
import { HostingCaseStudies } from "@/components/hosting-maintenance/HostingCaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { HostingFAQ } from "@/components/hosting-maintenance/HostingFAQ";
import { HostingCTA } from "@/components/hosting-maintenance/HostingCTA";

export const metadata: Metadata = {
  title: "Premium Managed Cloud Hosting & Website Maintenance Services",
  description: "Digipeak is a leading managed hosting & website maintenance company offering 99.99% uptime, security audits, WordPress support, and CDN optimization globally.",
  keywords: [
    "Web Hosting Qatar", "Managed Hosting Qatar", "Website Maintenance Qatar", 
    "WordPress Maintenance Qatar", "Website Support Qatar", "Cloud Hosting Qatar", 
    "Website Security Services Qatar", "Website Maintenance Dubai", "Managed Hosting Dubai", 
    "Website Support UAE", "Website Maintenance Saudi Arabia", "Website Maintenance Riyadh", 
    "Managed Cloud Hosting Singapore", "Website Maintenance Sydney", "Website Support Auckland", 
    "Website Maintenance Colombo", "Website Hosting UK", "Website Security Services", 
    "Managed Website Support", "Enterprise Website Hosting", "AWS Cloud Setup Qatar", "Safe CMS Updates"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/hosting-maintenance',
  },
  openGraph: {
    title: "Premium Managed Cloud Hosting & Website Maintenance | Digipeak",
    description: "Secure AWS cloud scaling, weekly safe plugin updates, and 99.99% system uptime.",
    url: "https://www.digipeak.agency/hosting-maintenance",
    images: ["/og-hosting-maintenance.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Managed Cloud Hosting & Website Maintenance | Digipeak",
    description: "Secure AWS cloud scaling, weekly safe plugin updates, and 99.99% system uptime.",
  }
};

export default function HostingMaintenancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/hosting-maintenance/#webpage",
        "url": "https://www.digipeak.agency/hosting-maintenance",
        "name": "Managed Cloud Hosting & Website Maintenance Services",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/hosting-maintenance/", "name": "Hosting & Maintenance" } }
        ]
      },
      ...[
        "Managed Cloud Hosting", "Website Maintenance & Support", "Cloud Infrastructure Audit", "Vulnerability Patching & Security", "CMS Core & Plugin Updates", "CDN Integration & Caching", "Database Replication & Backup"
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
            "question": "What does your web hosting and maintenance package cover?", 
            "answer": "Our managed cloud hosting and maintenance packages provide end-to-end support, including secure AWS or Google Cloud servers, 24/7 active firewall and security monitoring, weekly visual-compatible core and plugin updates, automated hourly/daily backups, page speed optimizations, instant DNS routing, and dedicated developer support." 
          },
          { 
            "question": "Why is managed cloud hosting better than cheap shared hosting?", 
            "answer": "Shared hosting groups thousands of websites on one server, leaving your site vulnerable to security breaches and slow speeds from neighboring sites. Our managed cloud hosting isolates your website in a dedicated environment with dedicated CPU and RAM resources, assuring ultra-low response latency, 99.99% uptime, and impenetrable security." 
          },
          { 
            "question": "How do you handle CMS core updates and plugin updates safely?", 
            "answer": "We never update plugins or CMS cores directly in production. We clone your website to a staging environment, run automated updates, verify layout integrity and functionality, check for console errors, and then sync the tested patches to production. This ensures 100% update safety and zero visual breakages." 
          },
          { 
            "question": "What is your emergency protocol if my site encounters downtime or an intrusion?", 
            "answer": "We run pro-active uptime monitors checking your site every 60 seconds. If any node failure is detected, our failover protocols automatically route traffic to a secondary live server. In case of malware detection, our 24/7 security response team immediately isolates the threat, cleans files, patches the entry point, and restores a clean backup if needed within minutes." 
          },
          { 
            "question": "Do you migrate our existing site and databases over to your server?", 
            "answer": "Yes, we handle the entire migration process with zero downtime. Our cloud engineers copy your website, media files, and databases to our staging servers, optimize config files, test functionality, configure Cloudflare CDN/SSL certificates, and execute a seamless DNS transition without interrupting your business operations." 
          },
          { 
            "question": "How do server response speed and server location affect SEO rankings?", 
            "answer": "Search engines favor fast sites. Google uses Core Web Vitals (like LCP and INP) as ranking signals. A fast TTFB (Time to First Byte) and close server proximity (like having localized servers in Qatar or GCC region) reduce page-load latency, lowering bounce rates, increasing indexing frequency, and boosting overall SEO visibility." 
          },
          { 
            "question": "Do you offer email server hosting on the same server?", 
            "answer": "We strongly recommend separating website hosting from email hosting to ensure maximum performance and security. We do not host email directly on web servers. Instead, we assist in configuring and managing professional business suites like Google Workspace (Gmail) or Microsoft 365 on your custom domains." 
          },
          { 
            "question": "Do we receive regular server health and maintenance reports?", 
            "answer": "Yes. Every month we send detailed health audits summarizing server uptime logs, visitor traffic data, load speed performance metrics, security scans, database optimization logs, and a list of updated plugins or core patches applied during the month." 
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
        id="hosting-maintenance-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HostingHero />
      <WhyHostingMatters />
      <HostingServicesGrid />
      <HostingPerformance />
      <HostingProcess />
      <HostingTechStack />
      <HostingVisualSection />
      <HostingCaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="Hosting Systems." 
        description="We provision resilient cloud servers, perform weekly software patch updates, configure CDN edge caches, and secure critical databases for enterprise businesses in Qatar, GCC, APAC, UK, and worldwide."
      />
      <HostingFAQ />
      
      <div className="border-t border-white/5">
        <HostingCTA />
      </div>
    </>
  );
}
