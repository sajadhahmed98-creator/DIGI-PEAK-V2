import type { Metadata } from "next";
import Script from "next/script";
import { CRMHero } from "@/components/crm-automation/CRMHero";
import { WhyCRMAppMatters } from "@/components/crm-automation/WhyCRMAppMatters";
import { CRMServicesGrid } from "@/components/crm-automation/CRMServicesGrid";
import { CRMPerformance } from "@/components/crm-automation/CRMPerformance";
import { CRMProcess } from "@/components/crm-automation/CRMProcess";
import { CRMTechStack } from "@/components/crm-automation/CRMTechStack";
import { CRMVisualSection } from "@/components/crm-automation/CRMVisualSection";
import { CRMCaseStudies } from "@/components/crm-automation/CRMCaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { CRMFAQ } from "@/components/crm-automation/CRMFAQ";
import { CRMCTA } from "@/components/crm-automation/CRMCTA";

export const metadata: Metadata = {
  title: "Premium CRM Setup, Salesforce, HubSpot & Business Automation Company",
  description: "Digipeak is a leading CRM automation company specializing in HubSpot setup, Zoho CRM consulting, sales pipelines, workflows, and Salesforce custom integrations.",
  keywords: [
    "CRM Automation Qatar", "CRM Setup Qatar", "CRM Integration Qatar", "CRM Development Qatar", 
    "Business Automation Qatar", "Sales Automation Qatar", "Lead Management System Qatar", "CRM Agency Qatar", 
    "CRM Automation Dubai", "CRM Development Dubai", "CRM Setup UAE", "CRM Solutions Riyadh", 
    "Business Automation Saudi Arabia", "CRM Consulting Singapore", "CRM Automation Sydney", 
    "CRM Solutions Auckland", "CRM Development Colombo", "CRM Agency UK", "HubSpot Setup", 
    "Zoho CRM Setup", "Sales Pipeline Automation", "Lead Nurturing Automation", 
    "Customer Journey Automation", "Business Process Automation", "Workflow Automation", "Enterprise CRM Solutions"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/crm-automation',
  },
  openGraph: {
    title: "Premium CRM Setup & Business Process Automation Agency | Digipeak",
    description: "CRM & Automation Systems That Scale Your Business.",
    url: "https://www.digipeak.agency/crm-automation",
    images: ["/og-crm-automation.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium CRM Setup & Business Process Automation Agency | Digipeak",
    description: "CRM & Automation Systems That Scale Your Business.",
  }
};

export default function CRMAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/crm-automation/#webpage",
        "url": "https://www.digipeak.agency/crm-automation",
        "name": "Enterprise CRM Setup & Workflow Automation Agency",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/crm-automation/", "name": "CRM & Automation" } }
        ]
      },
      ...[
        "HubSpot CRM Setup", "Zoho CRM Setup", "Salesforce Enterprise Setup", "Custom CRM Development", "CRM Data Migration", "Sales & Lead Automation", "Workflow Automation"
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
            question: "What CRM is best for my business?", 
            answer: "The best CRM depends on your company size, sales cycle, complexity, and budget. HubSpot is outstanding for marketing-heavy, fast-scaling B2B companies seeking exceptional user adoption. Zoho CRM is highly flexible, cost-effective, and excellent for multi-channel workflows. Salesforce is the gold standard for large enterprises with complex, customizable data models. We analyze your workflows during discovery to recommend the perfect fit." 
          },
          { 
            question: "How much does CRM implementation cost?", 
            answer: "Pricing is fully customized to your business size, database scale, and necessary workflow rules. A clean HubSpot or Zoho Setup for a growing sales team ranges from $3,500 to $7,500. Large-scale enterprise migrations, custom APEX development, multi-platform webhook synchronizations, and advanced n8n/Make orchestration pipelines range from $12,000 to $40,000+. We calculate the ROI metrics beforehand." 
          },
          { 
            question: "Can you migrate from another CRM?", 
            answer: "Yes. CRM data migration is a core specialty. We securely transfer your legacy contacts, accounts, historical emails, custom deals, and task records (whether migrating from spreadsheets, Pipedrive, Zoho, or custom platforms). We map all data structures, execute clean exports, deduplicate contacts, and perform extensive QA testing to ensure a zero-data-loss, zero-downtime transition." 
          },
          { 
            question: "Do you provide HubSpot setup?", 
            answer: "Yes, we are certified HubSpot setup experts. We configure custom pipelines, deal stages, marketing-to-sales handoffs, automated calendar bookings, and marketing nurture emails. We also build custom HubSpot dashboards so managers get complete real-time reports on sales pipeline velocity." 
          },
          { 
            question: "Do you provide Zoho CRM services?", 
            answer: "Absolutely. We provide end-to-end Zoho Setup and customization. This includes writing custom Deluge scripts, mapping automated system blueprints, configuring custom dashboard reports, setting up Zoho Flow webhooks, and linking Zoho Creator for custom internal applications." 
          },
          { 
            question: "Can you automate our sales process?", 
            answer: "Yes, sales automation is a massive revenue driver. We automate the entire journey: from capturing a lead on your website, checking qualify criteria using smart filters, auto-assigning it to your sales agents, setting up task reminders, sending a WhatsApp welcome message, and triggering instant deal updates in your CRM." 
          },
          { 
            question: "Can CRM integrate with WhatsApp?", 
            answer: "Yes. WhatsApp is the #1 communication channel in many markets (like Qatar, Dubai, and Riyadh). We build direct integrations using Twilio or the WhatsApp Business Cloud API. This allows your CRM to instantly log all incoming messages, send automated WhatsApp notification updates to clients, and trigger custom chatbot loops when leads take action." 
          },
          { 
            question: "How long does CRM implementation take?", 
            answer: "A standard CRM Setup and workflow automation project takes 3 to 6 weeks. Complex enterprise deployments involving legacy database migrations, custom API webhooks, extensive team training, and rigorous compliance testing require 8 to 14 weeks from initial audit to final user onboarding." 
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
        id="crm-automation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CRMHero />
      <WhyCRMAppMatters />
      <CRMServicesGrid />
      <CRMPerformance />
      <CRMProcess />
      <CRMTechStack />
      <CRMVisualSection />
      <CRMCaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="Automation Standard." 
        description="We implement intelligent CRM architectures, cloud integrations, and business workflow automations for organizations across the Middle East, APAC, Europe, and globally."
      />
      <CRMFAQ />
      
      <div className="border-t border-white/5">
        <CRMCTA />
      </div>
    </>
  );
}
