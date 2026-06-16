import type { Metadata } from "next";
import Script from "next/script";
import { AIHero } from "@/components/ai-solutions/AIHero";
import { WhyAIMatters } from "@/components/ai-solutions/WhyAIMatters";
import { AIServicesGrid } from "@/components/ai-solutions/AIServicesGrid";
import { AIPerformance } from "@/components/ai-solutions/AIPerformance";
import { AIProcess } from "@/components/ai-solutions/AIProcess";
import { AITechStack } from "@/components/ai-solutions/AITechStack";
import { AICaseStudies } from "@/components/ai-solutions/AICaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { AIFAQ } from "@/components/ai-solutions/AIFAQ";
import { AICTA } from "@/components/ai-solutions/AICTA";

export const metadata: Metadata = {
  title: "AI Solutions & Automation Agency",
  description: "Digipeak builds intelligent AI systems, workflow automations, and custom chatbots that reduce costs and scale operations.",
  keywords: [
    "AI Agency Qatar", "AI Solutions Qatar", "AI Automation Qatar", 
    "AI Development Company Qatar", "Business Automation Qatar", "AI Chatbot Development Qatar", 
    "AI Marketing Automation", "AI Agency Dubai", "AI Automation Dubai", 
    "AI Solutions Saudi Arabia", "AI Development Riyadh", "AI Consulting Qatar", 
    "AI Integration Services", "OpenAI Integration", "AI Business Solutions", 
    "AI Workflow Automation", "AI Customer Support Automation", "AI CRM Automation", 
    "AI Lead Generation Automation", "Enterprise AI Solutions"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/ai-solutions',
  },
  openGraph: {
    title: "AI Solutions & Automation Agency | Digipeak",
    description: "AI Solutions That Automate Growth & Scale Operations.",
    url: "https://www.digipeak.agency/ai-solutions",
    images: ["/og-ai-solutions.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions & Automation Agency | Digipeak",
    description: "AI Solutions That Automate Growth & Scale Operations.",
  }
};

export default function AISolutionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/ai-solutions/#webpage",
        "url": "https://www.digipeak.agency/ai-solutions",
        "name": "Enterprise AI Solutions & Automation",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/ai-solutions/", "name": "AI Solutions" } }
        ]
      },
      ...[
        "AI Chatbot Development", "Workflow Automation", "CRM Automation", "AI Lead Generation", "OpenAI Integration", "Enterprise AI Consulting"
      ].map(serviceType => ({
        "@type": "Service",
        "serviceType": serviceType,
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": ["Qatar", "Doha", "Dubai", "UAE", "Saudi Arabia", "Riyadh", "London", "United Kingdom"]
      })),
      {
        "@type": "FAQPage",
        "mainEntity": [
          { question: "What AI solutions do you provide?", answer: "We provide end-to-end AI automation. This includes custom GPTs, intelligent customer support chatbots (website & WhatsApp), CRM automation, lead qualification workflows, programmatic content generation, and full business intelligence dashboards using advanced language models." },
          { question: "How much does AI automation cost?", answer: "Costs vary based on complexity. A standalone AI customer support chatbot might range from $1,500 to $3,500, while a comprehensive enterprise automation architecture linking your CRM, marketing, and internal data silos can range from $10,000 to $50,000+. We always calculate the ROI during discovery to ensure the system pays for itself." },
          { question: "Can AI integrate with our current CRM?", answer: "Yes. We build intelligent bridges. Whether you use Salesforce, HubSpot, Zoho, Pipedrive, or Airtable, we utilize platforms like Make, Zapier, or direct API webhooks to allow AI to read, write, and update your databases in real-time." },
          { question: "Do you build custom AI chatbots?", answer: "Yes. We do not use off-the-shelf basic bots. We train advanced language models (like OpenAI's GPT-4 or Anthropic's Claude) directly on your company's proprietary data, website content, and PDFs, ensuring it answers questions exactly like your best employee." },
          { question: "How long does AI implementation take?", answer: "A focused chatbot integration can be deployed in 2-3 weeks. Complex enterprise workflows involving multi-system integration, custom Pinecone vector databases, and rigorous safety testing usually take 6-12 weeks from discovery to final deployment." },
          { question: "Can AI truly automate customer support?", answer: "Absolutely. Our AI systems are capable of deflecting up to 80% of tier-1 support tickets. They can instantly answer FAQs, track orders, process returns, and intelligently route complex issues to human agents only when necessary." },
          { question: "What business processes can AI automate?", answer: "Virtually any digital, repetitive task. Examples include: scoring incoming leads and sending them tailored emails, parsing hundreds of resumes, generating weekly social media content, analyzing financial reports to spot trends, or automatically onboarding new clients." },
          { question: "Do you provide OpenAI integrations?", answer: "Yes. As a core part of our stack, we utilize the OpenAI API extensively. We can integrate GPT-4, DALL-E, and Whisper into your existing software, apps, or internal Slack/Teams channels to supercharge your workforce." },
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
        id="ai-solutions-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIHero />
      <WhyAIMatters />
      <AIServicesGrid />
      <AIPerformance />
      <AIProcess />
      <AITechStack />
      <AICaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="AI Deployment." 
        description="We build and deploy intelligent automation architectures for enterprises across the Middle East, APAC, and Europe."
      />
      <AIFAQ />
      
      <div className="border-t border-white/5">
        <AICTA />
      </div>
    </>
  );
}
