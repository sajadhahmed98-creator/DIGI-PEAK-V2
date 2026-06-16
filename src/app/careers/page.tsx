import type { Metadata } from "next";
import Script from "next/script";
import { CareersHero } from "@/components/careers/CareersHero";
import { WhyJoinCareers } from "@/components/careers/WhyJoinCareers";
import { GlobalOpportunities } from "@/components/careers/GlobalOpportunities";
import { TalentNetworkForm } from "@/components/careers/TalentNetworkForm";
import { CareersSEOContent } from "@/components/careers/CareersSEOContent";
import { CareersFAQ } from "@/components/careers/CareersFAQ";
import { CareersCTA } from "@/components/careers/CareersCTA";

export const metadata: Metadata = {
  title: "Careers at Digipeak | Digital Marketing, Design & Technology Opportunities",
  description: "Join Digipeak's global talent network and explore future opportunities in digital marketing, SEO, web design, branding, AI solutions, content marketing, CRM, mobile apps and technology.",
  keywords: [
    "Graphic Designer Jobs Qatar", "Graphic Design Careers Qatar", "Digital Marketing Jobs Qatar", 
    "SEO Jobs Qatar", "Social Media Jobs Qatar", "Web Designer Jobs Qatar", "Web Developer Jobs Qatar", 
    "UI UX Designer Jobs Qatar", "Content Writer Jobs Qatar", "AI Specialist Jobs Qatar", 
    "Marketing Careers Qatar", "Agency Careers Qatar", "Creative Agency Jobs", "Remote Digital Marketing Jobs", 
    "Remote Creative Jobs", "Graphic Designer Jobs Dubai", "Digital Marketing Jobs Dubai", 
    "SEO Specialist Jobs UAE", "Marketing Jobs Riyadh", "Creative Jobs Saudi Arabia", 
    "Graphic Designer Jobs Sri Lanka", "Digital Marketing Jobs Sri Lanka", "SEO Jobs Colombo", 
    "Creative Agency Careers Sri Lanka", "Marketing Jobs Singapore", "Digital Marketing Jobs Sydney", 
    "Web Design Careers Auckland", "Remote Agency Careers", "Technology Careers"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/careers',
  },
  openGraph: {
    title: "Careers at Digipeak | Digital Marketing, Design & Tech Opportunities",
    description: "Join our global talent network and shape digital growth solutions.",
    url: "https://www.digipeak.agency/careers",
    images: ["/og-careers.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Digipeak | Digital Marketing, Design & Tech Opportunities",
    description: "Join our global talent network and shape digital growth solutions.",
  }
};

export default function CareersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/careers/#webpage",
        "url": "https://www.digipeak.agency/careers",
        "name": "Careers & Talent Network Portal",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/careers/", "name": "Careers" } }
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
        "name": "Digipeak Agency Global",
        "image": "https://www.digipeak.agency/og-image.jpg",
        "url": "https://www.digipeak.agency"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { 
            "question": "How do I submit my CV to the Digipeak Talent Network?", 
            "answer": "You can submit your CV directly through our secure application form above. Simply fill in your contact information, select your position of interest, upload your resume in PDF/Word format, and submit. Your profile will be safely logged in our applicant tracking dashboard." 
          },
          { 
            "question": "Can I apply for remote-friendly job opportunities?", 
            "answer": "Yes, absolutely. Digipeak operates on a highly flexible, borderless remote-first work model. We encourage applications from talented digital marketers, engineers, and designers worldwide who possess strong self-management skills and a results-driven mindset." 
          },
          { 
            "question": "Do you hire digital talent internationally?", 
            "answer": "Yes. Our recruitment pipelines capture creative minds globally. We work with clients and deploy resources across Qatar, UAE, Saudi Arabia, the United Kingdom, Singapore, Australia, New Zealand, Sri Lanka, and other emerging global regions." 
          },
          { 
            "question": "How long does the recruitment and screening process take?", 
            "answer": "Our recruitment team audits submitted profiles daily. If a project fits your background, we typically reach out for an initial interview call within 7 to 14 business days. Otherwise, your details remain stored in our talent database for future matches." 
          },
          { 
            "question": "Can I submit my CV for future opportunities even if there is no active job listed?", 
            "answer": "Yes. In fact, this Talent Network portal is built specifically for this purpose. Rather than hosting temporary, expired listings, we encourage professionals to submit their portfolios so that our operations managers can source candidates directly from our trusted database as soon as a project goes live." 
          },
          { 
            "question": "Do I need creative agency experience to apply?", 
            "answer": "While agency experience is a plus, it is not mandatory. We look for technical expertise, a strong sense of ownership, collaborative communication, and a clean professional portfolio that demonstrates your capability to drive growth." 
          },
          { 
            "question": "Do your internship opportunities ever turn into full-time roles?", 
            "answer": "Yes, frequently. We prioritize promoting talent internally. Interns who demonstrate technical dedication, cultural fit, and performance growth during their internship cycles are regularly offered permanent full-time careers." 
          },
          { 
            "question": "How will I know that my application has been successfully received?", 
            "answer": "Upon submitting the form, you will receive an immediate visual confirmation message on your screen. Your record is instantly synced to our candidate tracking database, and our operations team is notified of your submission details." 
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
        id="careers-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CareersHero />
      <WhyJoinCareers />
      <GlobalOpportunities />
      <TalentNetworkForm />
      <CareersSEOContent />
      <CareersFAQ />
      
      <div className="border-t border-white/5">
        <CareersCTA />
      </div>
    </>
  );
}
