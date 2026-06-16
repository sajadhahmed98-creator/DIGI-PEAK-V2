import type { Metadata } from "next";
import Script from "next/script";
import { SocialHero } from "@/components/social-media/SocialHero";
import { WhySocialMatters } from "@/components/social-media/WhySocialMatters";
import { SocialServicesGrid } from "@/components/social-media/SocialServicesGrid";
import { ContentCreationServices } from "@/components/social-media/ContentCreationServices";
import { SocialGrowthSystem } from "@/components/social-media/SocialGrowthSystem";
import { SocialPerformance } from "@/components/social-media/SocialPerformance";
import { SocialProcess } from "@/components/social-media/SocialProcess";
import { SocialPlatforms } from "@/components/social-media/SocialPlatforms";
import { SocialCaseStudies } from "@/components/social-media/SocialCaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { SocialFAQ } from "@/components/social-media/SocialFAQ";
import { SocialCTA } from "@/components/social-media/SocialCTA";

export const metadata: Metadata = {
  title: "Premium Social Media Management Agency",
  description: "Digipeak is an award-winning Social Media Management Agency helping ambitious brands build authority, engagement, and revenue globally.",
  keywords: [
    "Social Media Management Qatar", "Social Media Agency Doha", "Social Media Marketing Qatar", 
    "Instagram Marketing Qatar", "Facebook Marketing Qatar", "LinkedIn Marketing Agency", 
    "Social Media Management Dubai", "Social Media Agency UAE", "Social Media Management Saudi Arabia", 
    "Social Media Agency Riyadh", "Social Media Marketing Singapore", "Social Media Marketing Sydney", 
    "Social Media Marketing Auckland", "Social Media Management Colombo", "Social Media Agency UK"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/social-media-management',
  },
  openGraph: {
    title: "Premium Social Media Management Agency | Digipeak",
    description: "Social Media That Builds Authority, Engagement & Revenue.",
    url: "https://www.digipeak.agency/social-media-management",
    images: ["/og-social.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Social Media Management Agency | Digipeak",
    description: "Social Media That Builds Authority, Engagement & Revenue.",
  }
};

export default function SocialMediaManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/social-media-management/#webpage",
        "url": "https://www.digipeak.agency/social-media-management",
        "name": "Premium Social Media Management Agency",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/social-media-management/", "name": "Social Media Management" } }
        ]
      },
      ...[
        "Social Media Management", "Instagram Marketing", "Facebook Marketing", "LinkedIn Marketing", "TikTok Management", "Content Creation", "Community Management"
      ].map(serviceType => ({
        "@type": "Service",
        "serviceType": serviceType,
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": ["Qatar", "Doha", "Dubai", "UAE", "Saudi Arabia", "Riyadh", "Singapore", "Sydney", "Auckland", "Colombo", "United Kingdom"]
      })),
      {
        "@type": "FAQPage",
        "mainEntity": [
          { question: "How many posts per month do you create?", answer: "This depends entirely on your strategy and platform focus. A standard engagement package typically includes 12-15 high-quality posts across selected platforms, but we customize frequency based on what the algorithm requires for growth." },
          { question: "Do you create the content or do I have to provide it?", answer: "We are a full-service creative agency. We handle everything from graphic design and copywriting to video editing and motion graphics. While we welcome any assets you have, we produce everything needed to execute the strategy." },
          { question: "Do you manage Instagram?", answer: "Yes, Instagram is a core pillar for most of our B2C and visually-driven B2B clients. We manage Grid curation, Story execution, Reels strategy, and daily community engagement." },
          { question: "Do you manage LinkedIn?", answer: "Absolutely. LinkedIn is the premier platform for our B2B clients. We optimize corporate pages, develop executive thought leadership content, and execute targeted account-based marketing strategies." },
          { question: "How long before we see results?", answer: "While a spike in aesthetic quality and consistency is immediate, meaningful community growth and algorithm traction typically takes 60-90 days. We focus on sustainable, compounding growth over short-term gimmicks." },
          { question: "Do you provide performance reporting?", answer: "Yes. Transparency is critical. You will receive comprehensive monthly reports detailing audience growth, reach, engagement rates, top-performing content, and actionable insights for the following month." },
          { question: "Do you create Reels and TikToks?", answer: "Yes. Short-form video is currently the highest-reach format available. Our creative team produces high-retention Reels, TikToks, and YouTube Shorts natively optimized for each platform's algorithm." },
          { question: "Can you manage multiple accounts?", answer: "Yes. Our enterprise packages cover comprehensive ecosystem management across Instagram, LinkedIn, TikTok, Facebook, and YouTube simultaneously." },
          { question: "Do you reply to comments and DMs?", answer: "Yes. Community management is built into our core packages. We handle daily moderation, reply to comments, engage with followers, and flag customer service inquiries to your internal team." },
          { question: "Will I approve the content before it goes live?", answer: "Always. We operate on a monthly content calendar system. You will receive all creatives and copy for review, feedback, and final approval before anything is published." },
          { question: "How do you learn our brand voice?", answer: "During our Discovery phase, we conduct deep-dive interviews and review existing brand guidelines to develop a comprehensive Tone of Voice document. We ensure every caption sounds authentically like your brand." },
          { question: "Do you do influencer marketing?", answer: "Yes. For clients where it makes strategic sense, we manage influencer outreach, contract negotiation, content brief development, and campaign tracking." },
          { question: "What is your hashtag strategy?", answer: "We utilize a tiered hashtag approach (mixing broad, niche, and branded tags) that we continuously test and rotate based on performance data to maximize algorithmic discovery." },
          { question: "Do you run social media ads as well?", answer: "Yes. While organic social builds the community, paid social scales revenue. Our Performance Marketing division manages hyper-targeted Meta, LinkedIn, and TikTok ad campaigns." },
          { question: "How do we get started?", answer: "It starts with a Discovery call. We analyze your current presence, understand your business goals, and then present a custom proposal and strategic roadmap." },
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
        id="social-media-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SocialHero />
      <WhySocialMatters />
      <SocialServicesGrid />
      <ContentCreationServices />
      <SocialGrowthSystem />
      <SocialPerformance />
      <SocialProcess />
      <SocialPlatforms />
      <SocialCaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="Social Reach." 
        description="We build localized and global social media strategies for enterprise brands across the Middle East, APAC, and Europe."
      />
      <SocialFAQ />
      
      <div className="border-t border-white/5">
        <SocialCTA />
      </div>
    </>
  );
}
