"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Cpu, Home, Briefcase, ShoppingBag, 
  GraduationCap, HeartPulse, HardHat, Palmtree, 
  Hammer, Wrench, Factory, Utensils, Building,
  Plus, Minus, HelpCircle, MapPin, ExternalLink,
  ChevronRight, AlertTriangle, TrendingUp, ShieldAlert,
  Zap, MessageSquare, PhoneCall, Bot, Laptop,
  Globe, LineChart, ShieldCheck, CheckCircle2, Star,
  Award, Shield, HelpCircle as HelpIcon, ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { LeadGeneration } from "@/components/home/LeadGeneration";

const iconMap: Record<string, any> = {
  Building2, Cpu, Home, Briefcase, ShoppingBag, 
  GraduationCap, HeartPulse, HardHat, Palmtree, 
  Hammer, Wrench, Factory, Utensils, Building, Laptop,
  Globe, LineChart, ShieldCheck
};

export interface CityData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  badge: string;
  suburbs: string[];
  heroText: string;
  introTitle: string;
  introText: string;
  marketAnalysis: {
    title: string;
    challenges: string;
    competition: string;
    digitalOpportunities: string;
    seoOpportunities: string;
    leadGenOpportunities: string;
  };
  serviceFocus: {
    title: string;
    services: { title: string; desc: string }[];
  };
  seoBlockTitle: string;
  seoBlockParas: string[];
  faqs: { question: string; answer: string }[];
  industries: { name: string; iconName: string }[];
}

interface LocationPageTemplateProps {
  city: CityData;
  allLocations: { name: string; slug: string }[];
  isCountryHub?: boolean;
}

// Utility to deconstruct long paragraphs into SaaS-friendly segments:
// - Summary (1st sentence)
// - Key points (Next 3 sentences)
// - Expanded text (Remainder)
function deconstructParagraph(text: string) {
  if (!text) return { summary: "", keyPoints: [], remaining: "" };
  
  // Split by sentences, preserving periods correctly
  const sentences = text.split(/(?<=\.)\s+/);
  
  const summary = sentences[0] || "";
  const keyPoints = sentences.slice(1, 4).map(s => s.trim()).filter(s => s.length > 0);
  const remaining = sentences.slice(4).join(" ").trim();
  
  return { summary, keyPoints, remaining };
}

export function LocationPageTemplate({ city, allLocations, isCountryHub = false }: LocationPageTemplateProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const crossLinks = allLocations.filter(c => c.slug !== city.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.digipeak.agency/locations/${city.slug}/#webpage`,
        "url": `https://www.digipeak.agency/locations/${city.slug}`,
        "name": `${city.metaTitle} | Digipeak`,
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/locations/", "name": "Locations" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": `https://www.digipeak.agency/locations/${city.slug}/`, "name": `${city.name} Services` } }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.digipeak.agency/#organization",
        "name": "Digipeak Agency",
        "url": "https://www.digipeak.agency"
      },
      {
        "@type": "LocalBusiness",
        "@id": `https://www.digipeak.agency/locations/${city.slug}/#localbusiness`,
        "name": `Digipeak Agency ${city.name}`,
        "image": "https://www.digipeak.agency/og-image.jpg",
        "url": `https://www.digipeak.agency/locations/${city.slug}`,
        "description": city.metaDescription,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressRegion": city.name === "Singapore" ? "Singapore" : "Australia",
          "addressCountry": city.name === "Singapore" ? "SG" : "AU"
        }
      },
      {
        "@type": "Service",
        "@id": `https://www.digipeak.agency/locations/${city.slug}/#service`,
        "name": `Digital Marketing, SEO & Web Design in ${city.name}`,
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": city.name
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": city.faqs.map(faq => ({
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

  const serviceLinks = [
    { title: "SEO Services", link: "/seo-services", desc: "Rank for commercial search terms and attract high-value organic traffic." },
    { title: "Web Design", link: "/web-design-development", desc: "Custom Next.js engineering built for sub-second speeds." },
    { title: "Digital Marketing", link: "/digital-marketing", desc: "Omni-channel growth campaigns focused on ROAS and pipeline growth." },
    { title: "Branding & Creative", link: "/branding-creative", desc: "Cohesive visual identity systems that build market authority." },
    { title: "AI Solutions", link: "/ai-solutions", desc: "Deploy custom LLMs, chatbots, and generative pipelines." },
    { title: "CRM Automation", link: "/crm-automation", desc: "Integrate website lead channels with HubSpot, Salesforce, or Zoho." },
    { title: "Lead Generation", link: "/contact?service=lead-gen", desc: "Automate outbound prospecting and inbound lead qualification." },
    { title: "Photography", link: "/video-production", desc: "Corporate photography, product capture, and executive headshots." },
    { title: "Videography", link: "/video-production", desc: "Cinematic commercial shoots and high-converting video production." },
    { title: "Website Hosting", link: "/hosting-maintenance", desc: "Enterprise cloud hosting, continuous backup, and maintenance packages." }
  ];

  // Deconstruct Market Analysis Paragraphs
  const challengeDec = deconstructParagraph(city.marketAnalysis.challenges);
  const compDec = deconstructParagraph(city.marketAnalysis.competition);
  const digitalDec = deconstructParagraph(city.marketAnalysis.digitalOpportunities);
  const seoDec = deconstructParagraph(city.marketAnalysis.seoOpportunities);
  const leadDec = deconstructParagraph(city.marketAnalysis.leadGenOpportunities);

  // Group and Map the 7 SEO paragraphs into 5 themed Content Blocks
  const seoBlocks = [
    {
      id: "key-insights",
      title: "Key Insights & Architecture",
      dec: deconstructParagraph(city.seoBlockParas[0] + " " + (city.seoBlockParas[5] || ""))
    },
    {
      id: "growth-opps",
      title: "Growth Opportunities",
      dec: deconstructParagraph(city.seoBlockParas[1] || "")
    },
    {
      id: "market-trends",
      title: "Market Trends & Visuals",
      dec: deconstructParagraph(city.seoBlockParas[2] + " " + (city.seoBlockParas[6] || ""))
    },
    {
      id: "tech-seo",
      title: "Technical SEO Advantages",
      dec: deconstructParagraph(city.seoBlockParas[3] || "")
    },
    {
      id: "lead-gen-strat",
      title: "Lead Generation Strategies",
      dec: deconstructParagraph(city.seoBlockParas[4] || "")
    }
  ];

  return (
    <>
      <Script
        id={`schema-${city.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="bg-[#030303] text-white relative overflow-hidden">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-[25vh] right-1/4 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-[30vh] left-10 w-[700px] h-[700px] bg-accent-secondary/5 rounded-full blur-[160px] pointer-events-none z-0" />

        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden pt-40 pb-20 md:pt-56 md:pb-28 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center border-b border-white/5 bg-[radial-gradient(ellipse_80%_60%_at_50%_25%,rgba(131,21,113,0.07)_0%,transparent_70%)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)] pointer-events-none z-1" />
          
          <div className="container relative z-10 max-w-4.5xl mx-auto">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent-primary/20 bg-accent-primary/5 px-4.5 py-1.5 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-8 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
              {city.badge}
            </motion.div>

            {/* Title with Gradient Mask */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5.5xl md:text-4xl md:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05] max-w-4xl mx-auto"
            >
              {city.h1.split(" in ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-purple-400 to-accent-secondary">in {city.name}</span>
            </motion.h1>

            {/* Description - Constrained Reading Width */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light"
            >
              {city.heroText}
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center items-center gap-6 mb-12 text-xs font-mono text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-accent-primary fill-accent-primary" />
                <span>Premium AI Capabilities</span>
              </div>
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent-secondary" />
                <span>Enterprise SLA Guaranteed</span>
              </div>
            </motion.div>

            {/* CTA Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link href={`/contact?location=${city.slug}`} className="btn-primary px-9 py-4 text-xs font-bold uppercase tracking-widest shadow-xl shadow-accent-primary/10 hover:shadow-accent-primary/20 hover:scale-[1.02] transition-all duration-300">
                Get Free Proposal
              </Link>
              <a href="#market-analysis" className="btn-secondary px-9 py-4 text-xs font-bold uppercase tracking-widest border-white/10 hover:border-white/20 bg-white/5 hover:scale-[1.02] transition-all duration-300">
                Explore Market Analysis
              </a>
            </motion.div>

            {/* Districts Grid Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 pt-8 border-t border-white/5 max-w-3.5xl mx-auto"
            >
              <div className="flex flex-wrap justify-center items-center gap-2.5">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mr-2.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-accent-primary" /> Districts:
                </span>
                {city.suburbs.map(sub => (
                  <span key={sub} className="bg-white/[0.02] border border-white/5 px-3 py-1 rounded-full text-xs text-slate-400 hover:text-white hover:border-accent-primary/40 hover:bg-accent-primary/5 transition-all cursor-default font-mono">
                    {sub}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Visual Statistics Row (Stripe-Style Breakout) */}
        <section className="bg-black border-b border-white/5 py-12 relative z-10">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <div>
                <span className="block text-3xl md:text-4.5xl font-bold tracking-tight text-white mb-1.5 font-heading">14+</span>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">B2B Capabilities</span>
              </div>
              <div className="border-l border-white/5 pl-4 md:pl-0 md:border-l-0">
                <span className="block text-3xl md:text-4.5xl font-bold tracking-tight text-white mb-1.5 font-heading">8+</span>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">Global Hubs</span>
              </div>
              <div className="border-t border-white/5 pt-4 md:pt-0 md:border-t-0 md:border-l md:border-white/5">
                <span className="block text-3xl md:text-4.5xl font-bold tracking-tight text-white mb-1.5 font-heading">99.9%</span>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">Uptime SLA</span>
              </div>
              <div className="border-l border-white/5 pl-4 pt-4 md:pt-0 md:border-l-0 md:border-r md:border-white/5">
                <span className="block text-3xl md:text-4.5xl font-bold tracking-tight text-white mb-1.5 font-heading">AI-Core</span>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">Custom LLM Flows</span>
              </div>
              <div className="col-span-2 md:col-span-1 border-t border-white/5 pt-4 md:pt-0 md:border-t-0">
                <span className="block text-3xl md:text-4.5xl font-bold tracking-tight text-white mb-1.5 font-heading">B2B Core</span>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">Enterprise Focus</span>
              </div>
            </div>
          </div>
        </section>

        {/* Alternating Layout Section 1: Intro Text Left / Industries Card Right */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-white/[0.005] border-b border-white/5 relative">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left text column with restricted reading width */}
            <div className="lg:col-span-7 max-w-2.5xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-6">
                Market Context
              </span>
              <h2 className="font-heading text-3xl md:text-4.5xl font-bold tracking-tight mb-8 text-white leading-tight">
                {city.introTitle}
              </h2>
              <div className="space-y-6 text-slate-300 text-[15px] leading-relaxed font-light">
                {city.introText.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            
            {/* Right visual card column */}
            <div className="lg:col-span-5">
              <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent-primary/5 blur-[50px] pointer-events-none rounded-full" />
                
                <h3 className="font-heading text-lg font-bold mb-6 text-white relative z-10 flex items-center gap-2.5">
                  <Building2 className="w-5 h-5 text-accent-primary" />
                  Target Industry Segments
                </h3>
                
                <div className="grid grid-cols-1 gap-2.5 relative z-10">
                  {city.industries.map((ind) => {
                    const IconComp = iconMap[ind.iconName] || Briefcase;
                    return (
                      <div 
                        key={ind.name}
                        className="bg-white/[0.02] border border-white/5 hover:border-accent-primary/20 hover:bg-white/[0.05] rounded-xl p-4 flex items-center justify-between transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="h-9 w-9 shrink-0 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary border border-accent-primary/20 group-hover:bg-accent-primary/25 transition-all">
                            <IconComp className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <span className="font-bold text-sm text-white transition-colors">{ind.name}</span>
                          </div>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-accent-primary transition-colors" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upgraded Market Analysis Section: 5 Deconstructed Cards with Expandable Triggers */}
        <section id="market-analysis" className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black border-b border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16 md:mb-24">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
                Market Analysis
              </span>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                {city.marketAnalysis.title}
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                A structured assessment of commercial constraints, competitive density, and scaling opportunities in the local market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { id: "chall", title: "Local Market Challenges", dec: challengeDec, color: "red-500", icon: AlertTriangle },
                { id: "comp", title: "Competitive Density", dec: compDec, color: "orange-500", icon: ShieldAlert },
                { id: "digital", title: "Digital Opportunities", dec: digitalDec, color: "purple-500", icon: TrendingUp },
                { id: "seo", title: "SEO Potential & Channels", dec: seoDec, color: "purple-500", icon: Zap, colSpan: "lg:col-span-2" },
                { id: "lead", title: "Lead Generation Channels", dec: leadDec, color: "purple-500", icon: MapPin }
              ].map(card => {
                const IconComp = card.icon;
                const isExpanded = expandedCards[card.id] || false;
                return (
                  <div 
                    key={card.id} 
                    className={`glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-${card.color}/30 hover:bg-white/[0.01] transition-all duration-500 relative group ${card.colSpan || ""}`}
                  >
                    <div>
                      {/* Icon */}
                      <div className={`h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mb-6 group-hover:scale-105 transition-transform duration-300`}>
                        <IconComp className="w-5 h-5 text-accent-primary" />
                      </div>
                      
                      {/* Card Title */}
                      <h3 className="font-heading text-lg font-bold text-white mb-4">{card.title}</h3>
                      
                      {/* Bold Summary (1st sentence) */}
                      <p className="text-sm text-white font-bold leading-relaxed mb-4">{card.dec.summary}</p>
                      
                      {/* Key Points bullets (Next 3 sentences) */}
                      <ul className="space-y-2 mb-6">
                        {card.dec.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed font-light">
                            <span className="text-accent-primary font-bold shrink-0 mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Smooth Collapsible Content */}
                      <AnimatePresence>
                        {isExpanded && card.dec.remaining && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-slate-400 leading-loose pt-4 border-t border-white/5 font-light">
                              {card.dec.remaining}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Expand Trigger */}
                    {card.dec.remaining && (
                      <button 
                        onClick={() => toggleCard(card.id)}
                        className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-accent-primary uppercase tracking-widest hover:text-white transition-colors text-left flex items-center gap-1.5"
                      >
                        {isExpanded ? "Collapse Analysis" : "Read full analysis"}
                        <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upgraded Service Grid - Larger, Premium layout, Hover Effects */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-white/[0.003] border-b border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16 md:mb-24">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
                Service Focus
              </span>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                Bespoke Capabilities in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">{city.name}.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Highly targeted B2B service clusters designed to build organic authority and automate pipeline acquisition.
              </p>
            </div>

            {/* Service Grid with clean layouts */}
            <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
              {city.serviceFocus.services.map((svc, i) => (
                <div 
                  key={svc.title}
                  className="glass p-8 md:p-10 rounded-3xl border border-white/5 flex gap-6 hover:border-accent-primary/40 hover:bg-white/[0.01] transition-all duration-300 relative group shadow-lg"
                >
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary border border-accent-primary/20 group-hover:scale-105 transition-transform duration-300">
                    <span className="font-mono font-bold text-sm">0{i+1}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3.5 group-hover:text-accent-primary transition-colors">{svc.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links Matrix */}
            <div className="pt-12 border-t border-white/5">
              <h3 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest text-center mb-8">Quick Service Portals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {serviceLinks.map((svc) => (
                  <Link 
                    href={svc.link} 
                    key={svc.title}
                    className="glass p-5.5 rounded-2xl border border-white/5 hover:border-accent-primary/30 hover:bg-white/5 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-xs text-white mb-2 group-hover:text-accent-primary transition-colors leading-snug">{svc.title}</h4>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-light">{svc.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider text-accent-primary mt-4 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Open Page <ChevronRight className="w-2.5 h-2.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upgraded SEO Content Blocks: 5 Premium Themed Growth Reports with Summaries/Bullets */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black border-b border-white/5 relative">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16 md:mb-24">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-6">
                Market Guide
              </span>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                {city.seoBlockTitle}
              </h2>
              <p className="text-slate-400 text-sm font-mono uppercase tracking-widest">Growth & Authority Report</p>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              {seoBlocks.map((block) => {
                const isExpanded = expandedCards[block.id] || false;
                return (
                  <div 
                    key={block.id} 
                    className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 text-left"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-5 h-5 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-[9px] font-mono text-accent-primary font-bold">
                        ★
                      </span>
                      <h3 className="font-heading font-bold text-lg text-white">{block.title}</h3>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-200 text-sm font-bold leading-relaxed mb-4">{block.dec.summary}</p>

                    {/* Key Highlights */}
                    <ul className="space-y-2 mb-6">
                      {block.dec.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed font-light">
                          <span className="text-accent-primary font-bold shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expandable Rest of Paragraph */}
                    <AnimatePresence>
                      {isExpanded && block.dec.remaining && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-slate-400 leading-loose pt-4 border-t border-white/5 font-light">
                            {block.dec.remaining}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Read More Trigger */}
                    {block.dec.remaining && (
                      <button 
                        onClick={() => toggleCard(block.id)}
                        className="mt-6 pt-4 border-t border-white/5 text-[9px] font-mono text-accent-primary uppercase tracking-widest hover:text-white transition-colors text-left flex items-center gap-1.5"
                      >
                        {isExpanded ? "Collapse Section" : "Expand Full Report"}
                        <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section - Clean Spacing & Rotated Carets */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black border-b border-white/5 relative">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16 md:mb-24">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
                <HelpIcon className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </div>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                {city.name} Local Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">FAQ.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Expert answers regarding our search engine optimization, web engineering, and custom automation options in the local market.
              </p>
            </div>

            <div className="space-y-4.5 max-w-3xl mx-auto">
              {city.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${
                    openIndex === index
                      ? "border-accent-primary/50 shadow-[0_0_35px_rgba(168,85,247,0.1)] bg-white/[0.01]"
                      : "border-white/5 hover:border-white/15"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6.5 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
                  >
                    <span
                      className={`font-heading font-bold text-[15px] md:text-base pr-8 transition-colors ${
                        openIndex === index ? "text-accent-primary" : "text-white"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? "bg-accent-primary/20 border-accent-primary text-accent-primary rotate-180"
                          : "bg-white/5 border-white/10 text-slate-400"
                      }`}
                    >
                      {openIndex === index ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                      >
                        <div className="px-6.5 pb-6 text-slate-400 text-xs md:text-sm leading-loose border-t border-white/5 mt-2 pt-4.5 font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upgraded SaaS Dashboard CTA Conversion Widget */}
        <section className="py-16 md:py-24 lg:py-32 px-6 bg-[radial-gradient(circle_at_bottom,rgba(131,21,113,0.08)_0%,transparent_60%)] border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-primary/5 rounded-full blur-[90px] pointer-events-none z-0" />
          
          <div className="mx-auto max-w-5xl glass p-12 md:p-20 rounded-3.5xl border border-white/10 relative z-10 text-center shadow-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              Free Growth Strategy Session
            </span>
            <h2 className="font-heading text-3xl md:text-5.5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Ready to Dominate the <span className="text-gradient-primary">{city.name} Market?</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              Claim a bespoke digital growth blueprint, custom web performance audit, and CRM integration pipeline analysis valued at $1,500.
            </p>

            <div className="flex flex-wrap gap-4.5 justify-center items-center relative z-20">
              <Link href="/contact" className="btn-primary px-9 py-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-[1.02] transition-transform">
                <PhoneCall className="w-3.5 h-3.5" /> Book Consultation
              </Link>
              <Link href="/contact" className="btn-secondary px-9 py-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-white/10 hover:border-white/20 bg-white/5 hover:scale-[1.02] transition-transform">
                Get Proposal
              </Link>
              <button 
                onClick={() => (window as any).document.getElementById("digiBtn")?.click()}
                className="btn-secondary px-9 py-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-white/10 hover:border-white/20 bg-white/5 hover:scale-[1.02] transition-transform"
              >
                <Bot className="w-3.5 h-3.5 text-accent-primary" /> Talk To Digi AI
              </button>
              <a 
                href="https://wa.me/94773624413?text=Hello%20Digipeak%2C%20I%20would%20like%20to%20discuss%20our%20growth%20strategy%20session%20for%20our%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 hover:border-green-500/30 hover:bg-green-500/10 px-9 py-4 text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 text-slate-400 hover:text-white hover:scale-[1.02]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-green-500" /> WhatsApp Direct
              </a>
            </div>
            
            {/* CTA Trust badging */}
            <div className="mt-12 pt-8 border-t border-white/5 flex justify-center items-center gap-8 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              <span>SLA Secure Data</span>
              <span className="w-1.5 h-1.5 bg-white/10 rounded-full" />
              <span>NDAs Enforced</span>
              <span className="w-1.5 h-1.5 bg-white/10 rounded-full" />
              <span>No Retainer Lock-in</span>
            </div>
          </div>
        </section>

        {/* Cross-linking other location hubs */}
        <section className="py-16 md:py-12 md:py-20 lg:py-24 px-6 bg-white/[0.002]">
          <div className="mx-auto max-w-7xl">
            <h3 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-8 text-center">
              Regional Authority Hub Network
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Regional Coverage Silo */}
              <div className="glass p-6 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white text-sm mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent-primary" />
                  Service Coverage Hubs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {city.name !== "Singapore" && (
                    <Link href="/locations/singapore" className="text-slate-400 hover:text-white transition-colors">
                      Singapore Services
                    </Link>
                  )}
                  {crossLinks.map(c => (
                    <Link key={c.slug} href={c.slug === "australia" ? "/locations/australia" : `/locations/${c.slug}`} className="text-slate-400 hover:text-white transition-colors">
                      {c.name} {c.slug === "australia" || c.slug === "sri-lanka" ? "Hub" : "Services"}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Core Links */}
              <div className="glass p-6 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white text-sm mb-4">
                  Quick Agency Portals
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-400">
                  <Link href="/services" className="hover:text-white transition-colors">Our B2B Services</Link>
                  <Link href="/pricing" className="hover:text-white transition-colors">Digital Pricing</Link>
                  <Link href="/contact" className="hover:text-white transition-colors">Book Consultation</Link>
                  <Link href="/blog" className="hover:text-white transition-colors">B2B Strategy Blog</Link>
                  <Link href="/tools" className="hover:text-white transition-colors">Free B2B Tools</Link>
                  <Link href="/partners" className="hover:text-white transition-colors">Partner Program</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="border-t border-white/5">
          <LeadGeneration />
        </div>
      </main>
    </>
  );
}
