import type { Metadata } from "next";
import Script from "next/script";
import { VideoHero } from "@/components/video-production/VideoHero";
import { WhyVideoMatters } from "@/components/video-production/WhyVideoMatters";
import { VideoServicesGrid } from "@/components/video-production/VideoServicesGrid";
import { VideoPerformance } from "@/components/video-production/VideoPerformance";
import { VideoProcess } from "@/components/video-production/VideoProcess";
import { VideoTechStack } from "@/components/video-production/VideoTechStack";
import { VideoVisualSection } from "@/components/video-production/VideoVisualSection";
import { VideoCaseStudies } from "@/components/video-production/VideoCaseStudies";
import { GlobalLocations } from "@/components/shared/GlobalLocations";
import { VideoFAQ } from "@/components/video-production/VideoFAQ";
import { VideoCTA } from "@/components/video-production/VideoCTA";

export const metadata: Metadata = {
  title: "Premium Video Production Company & Corporate Media Agency",
  description: "Digipeak is a specialist professional video production company specializing in corporate videos, commercial advertisements, social media reels, and custom motion graphics.",
  keywords: [
    "Video Production Qatar", "Video Production Company Qatar", "Corporate Video Production Qatar", 
    "Commercial Video Production Qatar", "Video Marketing Agency Qatar", "Video Production Dubai", 
    "Corporate Video Production Dubai", "Video Production UAE", "Video Production Saudi Arabia", 
    "Video Production Riyadh", "Video Production Singapore", "Video Production Sydney", 
    "Video Production Auckland", "Video Production Colombo", "Video Production UK", 
    "Professional Video Production", "Commercial Video Production", "Corporate Video Agency", 
    "Promotional Video Production", "Social Media Video Production", "Reels Production Services", 
    "Brand Story Videos", "Product Video Production", "Animation Services", "Motion Graphics Services"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/video-production',
  },
  openGraph: {
    title: "Premium Video Production & Commercial Media Agency | Digipeak",
    description: "Cinematic brand videos, commercial campaigns, and motion graphics that drive results.",
    url: "https://www.digipeak.agency/video-production",
    images: ["/og-video-production.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Video Production & Commercial Media Agency | Digipeak",
    description: "Cinematic brand videos, commercial campaigns, and motion graphics that drive results.",
  }
};

export default function VideoProductionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/video-production/#webpage",
        "url": "https://www.digipeak.agency/video-production",
        "name": "Enterprise Video Production Company & Media Agency",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/video-production/", "name": "Video Production" } }
        ]
      },
      ...[
        "Corporate Video Production", "Commercial Video Production", "Social Media Reels", "Explainer Videos", "Motion Graphics & Animation", "Drone Videography", "Video Post Production"
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
            question: "How much does video production cost?", 
            answer: "The cost of video production depends entirely on the scope of the project, including the type of video, location shoots, script development, animation or motion graphics requirements, editing complexity, and talent sourcing. We provide customized, transparent pricing matrices tailored to your brand's specific creative demands and budget." 
          },
          { 
            question: "Do you create social media reels?", 
            answer: "Yes, we specialize in high-converting, short-form vertical reels, TikToks, and YouTube Shorts. We handle everything from trend analysis and script writing to visual hooks editing, sound transitions, and auto-captions design to maximize engagement and views." 
          },
          { 
            question: "Do you provide drone videography?", 
            answer: "Yes, we offer professional, certified drone videography using top-tier DJI drones. We provide cinematic, high-resolution 4K/8K aerial views for real estate showcases, large scale construction tracking, corporate event footage, and brand commercials." 
          },
          { 
            question: "Can you produce corporate videos?", 
            answer: "Absolutely. We specialize in corporate presentation videos, executive interviews, company profiles, recruitment guides, and internal product explainers designed to scale corporate brand authority and trust globally." 
          },
          { 
            question: "Do you create animated videos?", 
            answer: "Yes, we create custom 2D animated videos, motion graphics banners, explainer reels, and logo animations. We handle narrative outlines, storyboards, character illustration, sound effects integration, and final exports." 
          },
          { 
            question: "How long does production take?", 
            answer: "Timeline depends on the complexity. Simple social media shorts or basic interviews can be compiled in 3 to 7 days. High-end brand documentaries, animated walkthroughs, or complex corporate films typically require 3 to 6 weeks from scripting through pre-production, filming, editing, and final reviews." 
          },
          { 
            question: "Do you provide scripting services?", 
            answer: "Yes. Every video sprint starts with custom script development and conceptual storyboards. Our copywriters structure clear verbal hooks, emotional stories, and precise calls-to-action before we ever power up a camera." 
          },
          { 
            question: "Can you manage video campaigns?", 
            answer: "Yes, we offer complete video marketing integration. We don't just hand over raw files; we manage publishing schedules, design optimized thumbnails, write social captions, run paid video ad campaigns, and track watch-time metrics." 
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
        id="video-production-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VideoHero />
      <WhyVideoMatters />
      <VideoServicesGrid />
      <VideoPerformance />
      <VideoProcess />
      <VideoTechStack />
      <VideoVisualSection />
      <VideoCaseStudies />
      <GlobalLocations 
        title="Global" 
        subtitle="Production Standards." 
        description="We implement premium B2B video marketing campaigns, cinematic corporate films, and viral short-form editing funnels for organizations across the Middle East, APAC, Europe, and globally."
      />
      <VideoFAQ />
      
      <div className="border-t border-white/5">
        <VideoCTA />
      </div>
    </>
  );
}
