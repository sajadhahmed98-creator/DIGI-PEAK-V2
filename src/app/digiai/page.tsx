import type { Metadata } from "next";
import Script from "next/script";
import ClientDigiAI from "./ClientDigiAI";

export const metadata: Metadata = {
  title: "DigiAI – AI Business Growth Assistant | Digipeak",
  description: "Meet DigiAI, Digipeak's AI-powered business growth assistant. Get instant guidance on SEO, branding, web design, automation, and digital marketing.",
  openGraph: {
    title: "DigiAI – AI Business Growth Assistant | Digipeak",
    description: "Meet DigiAI, Digipeak's AI-powered business growth assistant. Get instant guidance on SEO, branding, web design, automation, and digital marketing.",
    url: "https://www.digipeak.agency/digiai",
    siteName: "Digipeak Agency",
    images: [
      {
        url: "https://www.digipeak.agency/og-digiai.jpg", // Mockup OG
        width: 1200,
        height: 630,
        alt: "DigiAI Interface Presentation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function DigiAIPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/digiai/#webpage",
        "url": "https://www.digipeak.agency/digiai",
        "name": "DigiAI – AI Business Growth Assistant",
        "description": "Meet DigiAI, Digipeak's AI-powered business growth assistant.",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.digipeak.agency/digiai/#software",
        "name": "DigiAI",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "AI-powered business growth assistant for instant guidance on SEO, branding, web design, and digital marketing.",
        "provider": {
          "@id": "https://www.digipeak.agency/#organization"
        }
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
        "@type": "BreadcrumbList",
        "@id": "https://www.digipeak.agency/digiai/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.digipeak.agency/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "DigiAI",
            "item": "https://www.digipeak.agency/digiai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.digipeak.agency/digiai/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is DigiAI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DigiAI is a premium AI-powered business growth assistant developed by Digipeak. It helps companies get instant, consultative answers about web design, SEO, branding, and digital marketing strategies."
            }
          },
          {
            "@type": "Question",
            "name": "How does DigiAI work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DigiAI uses advanced natural language processing connected to Digipeak's proprietary knowledge base to analyze your inputs and provide instant, accurate recommendations tailored to your business needs."
            }
          },
          {
            "@type": "Question",
            "name": "Is DigiAI free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, chatting with DigiAI and receiving initial project estimates and recommendations is completely free."
            }
          },
          {
            "@type": "Question",
            "name": "Can DigiAI generate proposals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Once DigiAI understands your requirements, budget, and timeline, it can instantly compile a structured proposal summary and automatically forward it to our human strategy team for rapid fulfillment."
            }
          },
          {
            "@type": "Question",
            "name": "Can DigiAI answer SEO questions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. DigiAI is fully trained on our Enterprise SEO methodologies and can explain our keyword mapping, backlinking, and local SEO services across global markets."
            }
          },
          {
            "@type": "Question",
            "name": "Can DigiAI help with branding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, DigiAI can guide you through our brand identity processes, explaining timelines, deliverables, and costs for logos, brand guidelines, and full corporate rebrands."
            }
          },
          {
            "@type": "Question",
            "name": "Does DigiAI replace consultants?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. DigiAI acts as the first touchpoint to provide instant answers 24/7. Complex projects and detailed strategic execution are always handled by our expert human consultants."
            }
          },
          {
            "@type": "Question",
            "name": "How accurate are responses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DigiAI is highly accurate because it is constrained to our vetted internal knowledge base, ensuring all pricing, timelines, and service descriptions are up to date."
            }
          },
          {
            "@type": "Question",
            "name": "Does DigiAI collect leads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, DigiAI functions as an intelligent lead qualification tool. It can gather your contact details and project scope conversationally and route them securely to our team."
            }
          },
          {
            "@type": "Question",
            "name": "Can DigiAI support international businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, DigiAI supports clients globally. It can even automatically convert our base AED pricing into your local currency, such as USD, QAR, SAR, GBP, or AUD, in real-time."
            }
          },
          {
            "@type": "Question",
            "name": "Can DigiAI analyze websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Currently, DigiAI provides strategic advice based on your textual input rather than live URL crawling, but it can provide deep architectural recommendations for your redesigns."
            }
          },
          {
            "@type": "Question",
            "name": "How do I contact Digipeak directly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can bypass DigiAI at any time by clicking the 'Book Consultation' button, filling out our standard contact form, or reaching out directly via WhatsApp for an immediate human response."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="schema-digiai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientDigiAI />
    </>
  );
}
