"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import { Check, ArrowRight, HelpCircle, Sparkles, MessageCircle, ChevronDown, CheckCircle2 } from "lucide-react";

// 1. Currency Configuration
const currencyConfig: Record<string, { rate: number; symbol: string; flag: string; label: string }> = {
  AED: { rate: 1.0, symbol: "AED ", flag: "🇦🇪", label: "UAE Dirham" },
  QAR: { rate: 0.99, symbol: "QAR ", flag: "🇶🇦", label: "Qatari Riyal" },
  SAR: { rate: 1.02, symbol: "SAR ", flag: "🇸🇦", label: "Saudi Riyal" },
  USD: { rate: 0.27, symbol: "$", flag: "🇺🇸", label: "US Dollar" },
  GBP: { rate: 0.21, symbol: "£", flag: "🇬🇧", label: "British Pound" },
  SGD: { rate: 0.36, symbol: "S$", flag: "🇸🇬", label: "Singapore Dollar" },
  AUD: { rate: 0.41, symbol: "A$", flag: "🇦🇺", label: "Australian Dollar" },
  NZD: { rate: 0.45, symbol: "NZ$", flag: "🇳🇿", label: "New Zealand Dollar" },
  LKR: { rate: 81.0, symbol: "Rs. ", flag: "🇱🇰", label: "Sri Lankan Rupee" },
};

// 2. Package Definitions
const packagesData = {
  seo: {
    title: "SEO Services",
    subtitle: "Command search results and secure high-intent organic traffic.",
    items: [
      { name: "Starter", aedPrice: 499, period: "/mo", features: ["Keyword Research", "Technical SEO", "On-Page SEO", "Local SEO", "Monthly Reporting", "Google Business Optimization"] },
      { name: "Growth", aedPrice: 999, period: "/mo", popular: true, features: ["Keyword Research", "Technical SEO", "On-Page SEO", "Local SEO", "Monthly Reporting", "Google Business Optimization", "Competitor Tracking", "Content Gap Analysis"] },
      { name: "Professional", aedPrice: 1999, period: "/mo", features: ["Keyword Research", "Technical SEO", "On-Page SEO", "Local SEO", "Monthly Reporting", "Google Business Optimization", "Competitor Tracking", "Content Gap Analysis", "Dedicated SEO Account Manager", "Backlink Outreach"] },
      { name: "Enterprise", aedPrice: null, period: "", custom: true, features: ["Custom Keyword Maps", "Deep Infrastructure Audits", "Arabic Local Search Expansion", "International SEO Sync", "Hourly Core Web Vitals Monitoring", "Looker Studio Custom Portals"] }
    ]
  },
  web: {
    title: "Web Design & Dev",
    subtitle: "High-performance websites built for sub-second speeds and conversion.",
    items: [
      { name: "Landing Page", aedPrice: 499, period: "", features: ["Custom Design", "Mobile Responsive", "SEO Foundation", "Contact Forms", "Fast Loading", "Analytics Setup"] },
      { name: "Business Website", aedPrice: 1499, period: "", popular: true, features: ["Custom Design", "Mobile Responsive", "SEO Foundation", "Contact Forms", "Fast Loading", "Analytics Setup", "CMS Backend Access", "Up to 10 Pages", "5 Custom Email Addresses"] },
      { name: "Professional Website", aedPrice: 2999, period: "", features: ["Custom Design", "Mobile Responsive", "SEO Foundation", "Contact Forms", "Fast Loading", "Analytics Setup", "CMS Backend Access", "Up to 25 Pages", "10 Custom Email Addresses", "Interactive Dynamic UI Mockups"] },
      { name: "Enterprise", aedPrice: null, period: "", custom: true, features: ["Bespoke Headless Architectures", "Secure Database Integration", "Custom API Webhook Links", "Multi-Language Sync", "Dedicated Dev Support Retainer", "Automated Speed Audits"] }
    ]
  },
  ecommerce: {
    title: "E-Commerce",
    subtitle: "High-speed digital store setups optimized for cart conversion.",
    items: [
      { name: "Starter Store", aedPrice: 1499, period: "", features: ["Shopify", "WooCommerce", "Payment Gateway", "Product Upload", "Speed Optimization", "Conversion Optimization"] },
      { name: "Growth Store", aedPrice: 2999, period: "", popular: true, features: ["Shopify", "WooCommerce", "Payment Gateway", "Product Upload", "Speed Optimization", "Conversion Optimization", "Up to 100 Products", "Standard CRM Link", "Abandoned Cart Automation"] },
      { name: "Professional Store", aedPrice: 4999, period: "", features: ["Shopify", "WooCommerce", "Payment Gateway", "Product Upload", "Speed Optimization", "Conversion Optimization", "Unlimited Products", "Advanced CRM Link", "Abandoned Cart Automation", "Multi-Currency Checkout Support"] },
      { name: "Enterprise", aedPrice: null, period: "", custom: true, features: ["Custom Headless Commerce (Next.js)", "ERP Inventory Core Webhook Syncs", "Bespoke Customer Account Portals", "Advanced Subscription Logic", "Server-Side Tracking Optimization", "24/7 Commerce Support Retainer"] }
    ]
  },
  marketing: {
    title: "Digital Marketing",
    subtitle: "Performance-driven paid acquisition campaigns designed to maximize ROI.",
    items: [
      { name: "Starter", aedPrice: 699, period: "/mo", features: ["Google Ads", "Meta Ads", "Campaign Management", "Reporting", "Optimization"] },
      { name: "Growth", aedPrice: 1499, period: "/mo", popular: true, features: ["Google Ads", "Meta Ads", "Campaign Management", "Reporting", "Optimization", "A/B Testing", "Retargeting Funnels", "Weekly Updates"] },
      { name: "Professional", aedPrice: 2999, period: "/mo", features: ["Google Ads", "Meta Ads", "Campaign Management", "Reporting", "Optimization", "A/B Testing", "Retargeting Funnels", "Weekly Updates", "Creative Ad Design Copy", "Dedicated PPC Analyst"] },
      { name: "Enterprise", aedPrice: null, period: "", custom: true, features: ["Multi-Channel Corporate Budgets", "Server-Side Pixel Trackers (GA4/Meta)", "B2B Lead Funnel Webhook Syncs", "Automated Ad Copy Generation Hubs", "Competitor Bid Intercept Scripts", "Monthly Looker Dashboard Audits"] }
    ]
  },
  social: {
    title: "Social Media",
    subtitle: "Brand-defining social assets, strategy, and audience growth.",
    items: [
      { name: "Starter", aedPrice: 599, period: "/mo", features: ["Content Planning", "Posting", "Community Management", "Stories", "Reels", "Analytics"] },
      { name: "Growth", aedPrice: 1299, period: "/mo", popular: true, features: ["Content Planning", "Posting", "Community Management", "Stories", "Reels", "Analytics", "Custom Design Grids", "Copywriting", "Monthly Strategy Sync"] },
      { name: "Professional", aedPrice: 2499, period: "/mo", features: ["Content Planning", "Posting", "Community Management", "Stories", "Reels", "Analytics", "Custom Design Grids", "Copywriting", "Monthly Strategy Sync", "Video Reels Editing (Up to 10)", "Influencer Sourcing Support"] },
      { name: "Enterprise", aedPrice: null, period: "", custom: true, features: ["Full Omnichannel Media Execution", "Corporate Brand Voice Guidelines", "Custom Photography Art Direction", "PR Channel Network Management", "Community Crisis Escalation Systems", "Quarterly Brand Resonance Audits"] }
    ]
  },
  branding: {
    title: "Branding",
    subtitle: "Corporate brand design and visual identity packages that command authority.",
    items: [
      { name: "Starter", aedPrice: 399, period: "", features: ["Logo Design", "Brand Identity", "Color System", "Typography", "Brand Guidelines"] },
      { name: "Growth", aedPrice: 899, period: "", popular: true, features: ["Logo Design", "Brand Identity", "Color System", "Typography", "Brand Guidelines", "Visual Mockups", "Stationery Designs", "Vector Raw Files"] },
      { name: "Professional", aedPrice: 1999, period: "", features: ["Logo Design", "Brand Identity", "Color System", "Typography", "Brand Guidelines", "Visual Mockups", "Stationery Designs", "Vector Raw Files", "Full Corporate Rebranding Assets", "Presentation Pitch Deck Template"] },
      { name: "Enterprise", aedPrice: null, period: "", custom: true, features: ["Worldwide Trademark Sourcing Audits", "Luxury Interactive Brand Asset Hubs", "Corporate UI Pattern Design Libraries", "Company Culture Alignment Guidelines", "Packaging Design Prototypes", "Dynamic Motion Logo Signatures"] }
    ]
  }
};

// 3. Custom Solutions
const customSolutions = [
  { name: "AI Solutions", price: 999, period: "", desc: "Custom GPT pipelines, webhook CRM integrations, and automated client support chat handlers." },
  { name: "UI/UX Design", price: 799, period: "", desc: "High-fidelity Figma wireframes, fully mapped user journeys, and custom interactive prototypes." },
  { name: "Mobile App Development", price: 2999, period: "", desc: "Bespoke iOS and Android mobile applications built on premium native React Native frameworks." },
  { name: "CRM & Automation", price: 999, period: "", desc: "Active campaign setups, automated lead qualification, and customer pipeline webhook triggers." },
  { name: "Content Marketing", price: 499, period: "", desc: "Search intent blog assets, high-authority thought pieces, and lead-gen landing pages." },
  { name: "Video Production", price: 799, period: "", desc: "Modern corporate video editing, animated visual explainers, and engaging social reel sets." },
  { name: "Email Marketing", price: 399, period: "", desc: "Tailored conversion email sequences, newsletter template designs, and list segmentation setups." },
  { name: "Reputation Management", price: 499, period: "", desc: "Feedback loop automations, brand sentiment trackers, and online PR asset cleaning." },
  { name: "Hosting & Maintenance", price: 49, period: "/month", desc: "Managed cloud web hosting, sub-second performance caching, and fast developer ticketing support." }
];

// 4. Comparison Table Elements
const comparisonFeatures = [
  { name: "Strategy Discovery Call", starter: "✓ Included", growth: "✓ Included", professional: "✓ Included", enterprise: "✓ Custom Blueprint" },
  { name: "Initial Project Consultation", starter: "✓ 1 Session", growth: "✓ 2 Sessions", professional: "✓ Unlimited Syncs", enterprise: "✓ Executive Advisory" },
  { name: "Pillar Competitor Mapping", starter: "—", growth: "✓ Included", professional: "✓ Included", enterprise: "✓ Advanced Intelligence" },
  { name: "Client Support Access", starter: "Email Support", growth: "Slack Channel Support", professional: "Priority Support (Slack + WhatsApp)", enterprise: "24/7 Developer SLA Support" },
  { name: "Progress Reporting Metrics", starter: "Monthly PDF", growth: "Monthly Interactive PDF", professional: "Live Looker Studio Dashboard", enterprise: "Looker Studio + Weekly Syncs" },
  { name: "Continuous Performance Optimization", starter: "—", growth: "✓ Monthly Caching", professional: "✓ Weekly Audits", enterprise: "✓ Real-time Script Tuning" },
  { name: "Quality Assurance Auditing", starter: "✓ Single Stage", growth: "✓ Multi-Stage Review", professional: "✓ Comprehensive Stage", enterprise: "✓ ISO Alignment Review" }
];

// 5. Reasons to Choose Digipeak
const whyChooseReason = [
  "Transparent Pricing", "Global Experience", "Dedicated Support", "Scalable Solutions", 
  "AI-Powered Systems", "Growth-Focused Strategies", "No Hidden Costs", "Custom Business Solutions"
];

// 6. FAQs
const pricingFaqs = [
  { q: "How does pricing work?", a: "We operate on flat-fee project pricing and flat-rate monthly retainer packages. Each package specifies transparent deliverables with absolutely no hidden costs or fees." },
  { q: "Can packages be customized?", a: "Absolutely. We routinely blend service pillars (e.g. SEO Retainers with Shopify Maintenance) to design unified custom campaigns matching your precise milestones." },
  { q: "Do you work internationally?", a: "Yes. Headquartered in Sri Lanka, Digipeak is a borderless global growth partner. We support enterprise and growth brands across Qatar, the UAE, Saudi Arabia, Singapore, Australia, New Zealand, the UK, and beyond." },
  { q: "Can I upgrade later?", a: "Yes. You can scale your project scopes or monthly campaigns upwards at any time. Any changes will be calculated pro-rata in your billing cycles." },
  { q: "Do you offer monthly retainers?", a: "Yes. SEO, digital marketing, social media, and website maintenance are structured as predictable monthly retainers to ensure continuous growth optimizations." },
  { q: "How quickly can projects start?", a: "Standard campaigns start within 7 to 10 business days of proposal clearance and deposit confirmation. Enterprise custom solutions require an initial onboarding mapping week." },
  { q: "Do you offer ongoing support?", a: "Yes, our dedicated Web Maintenance & Hosting division provides 24/7 server monitoring, speed caching, database cleaning, and developer support SLAs." }
];

export default function PricingPage() {
  const [selectedCurrency, setSelectedCurrency] = useState("AED");
  const [activeTab, setActiveTab] = useState<keyof typeof packagesData>("seo");
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  // Read saved currency selection from local storage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("digipeak_currency");
      if (saved && currencyConfig[saved]) {
        setSelectedCurrency(saved);
      }
    }
  }, []);

  const changeCurrency = (code: string) => {
    setSelectedCurrency(code);
    setCurrencyDropdownOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("digipeak_currency", code);
    }
  };

  // Price formatting helper
  const formatPriceVal = (aedVal: number | null) => {
    if (aedVal === null) return "Custom Quote";
    const conf = currencyConfig[selectedCurrency] || currencyConfig.AED;
    const converted = aedVal * conf.rate;
    
    if (selectedCurrency === "LKR") {
      // Round to nearest 1,000 for LKR
      return `${conf.symbol}${ (Math.round(converted / 1000) * 1000).toLocaleString() }`;
    }
    
    return `${conf.symbol}${Math.round(converted).toLocaleString()}`;
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/pricing/#webpage",
        "url": "https://www.digipeak.agency/pricing",
        "name": "Digital Marketing, SEO & Web Design Pricing | Digipeak",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
        "description": "Explore transparent pricing for SEO, web design, branding, AI solutions, social media management, content marketing and business growth services."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/pricing/", "name": "Pricing" } }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-accent-primary/10 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase"
          >
            Transparent Packages
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-3xl mx-auto"
          >
            Premium Digital Services <br />
            <span className="text-gradient-primary">Built For Serious Growth.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-muted text-base md:text-lg leading-relaxed font-normal"
          >
            Flexible packages designed for startups, SMEs, growing businesses and enterprise brands across Qatar, UAE, Saudi Arabia, Sri Lanka and global markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2 shadow-lg">
              Get Free Proposal <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] px-8 py-4 text-sm font-medium transition-all duration-300">
              Talk To An Expert
            </Link>
          </motion.div>
        </div>

        {/* Currency Switcher component */}
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-6 z-25">
          <div className="text-center md:text-left">
            <h3 className="font-heading font-semibold text-white text-sm">Select Your Preferred Currency</h3>
            <p className="text-xs text-muted mt-1">Rates are synced globally for consistent transparent pricing.</p>
          </div>
          
          {/* Custom Select Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/20 text-white font-medium text-sm transition-all shadow-md min-w-[180px] justify-between cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span>{currencyConfig[selectedCurrency]?.flag}</span>
                <span>{selectedCurrency}</span>
                <span className="text-[10px] text-muted font-normal">({currencyConfig[selectedCurrency]?.label})</span>
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-muted transition-transform duration-300 ${currencyDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {currencyDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 bottom-full mb-2.5 w-60 rounded-2xl glass border border-white/10 bg-[#050816] shadow-2xl p-2 z-50 max-h-[300px] overflow-y-auto"
                >
                  {Object.keys(currencyConfig).map((code) => (
                    <button
                      key={code}
                      onClick={() => changeCurrency(code)}
                      className={`flex items-center justify-between w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
                        selectedCurrency === code 
                          ? "bg-accent-primary/10 text-accent-primary" 
                          : "text-muted hover:text-white hover:bg-white/[0.02]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{currencyConfig[code].flag}</span>
                        <span>{code}</span>
                        <span className="text-[10px] font-normal text-muted">({currencyConfig[code].label})</span>
                      </span>
                      {selectedCurrency === code && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY TABS & PRICING CARDS */}
      <section className="pb-32 px-6 relative z-10">
        <div className="mx-auto max-w-7xl">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="glass p-1.5 rounded-full border border-white/5 flex gap-1 overflow-x-auto max-w-full no-scrollbar">
              {(Object.keys(packagesData) as Array<keyof typeof packagesData>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === key
                      ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-md shadow-accent-primary/15"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {packagesData[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {packagesData[activeTab].items.map((pkg, idx) => {
              const isEnterprise = !!pkg.custom;
              
              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`relative flex flex-col h-full rounded-3xl p-8 border bg-white/[0.005] hover:bg-white/[0.02] hover:-translate-y-1.5 transition-all duration-400 group overflow-hidden ${
                    pkg.popular 
                      ? "border-accent-primary/40 shadow-[0_0_40px_rgba(168,85,247,0.1)] bg-accent-primary/[0.01]" 
                      : "border-white/10"
                  }`}
                >
                  {/* Decorative Gradient glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Popular Tag */}
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 rounded-full border border-accent-primary/20 bg-accent-primary/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider font-mono text-accent-primary flex items-center gap-1 shadow-sm shadow-accent-primary/10">
                      <Sparkles className="w-2.5 h-2.5" /> Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-white font-heading text-lg font-bold group-hover:text-accent-primary transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-muted mt-1 leading-normal pr-8">
                      {isEnterprise ? "Custom tailored strategy for corporate brands." : `Ideal scope for standard growth.`}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 border-b border-white/5 pb-6">
                    <div className="flex items-baseline">
                      <span className="text-white font-heading text-3xl font-extrabold tracking-tight">
                        {isEnterprise ? "Custom Quote" : formatPriceVal(pkg.aedPrice)}
                      </span>
                      {!isEnterprise && pkg.period && (
                        <span className="text-muted text-xs font-semibold ml-1">
                          {pkg.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 flex-grow mb-8 text-xs text-muted leading-relaxed">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-accent-secondary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-bold transition-all ${
                        pkg.popular
                          ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-md shadow-accent-primary/10 hover:shadow-accent-primary/25"
                          : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                      }`}
                    >
                      {isEnterprise ? "Request Proposal" : "Choose Package"}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CUSTOM SOLUTIONS ADDONS SECTION */}
      <section className="py-12 md:py-20 lg:py-24 border-t border-white/5 bg-white/[0.005] px-6 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[300px] bg-accent-secondary/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-accent-primary font-bold uppercase text-[10px] tracking-widest font-mono">Specialized Add-ons</span>
            <h2 className="font-heading text-2xl md:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mt-2 mb-4 text-white">
              Custom Enterprise Solutions &amp; Integrations
            </h2>
            <p className="text-muted text-sm md:text-base max-w-lg mx-auto">
              Need specialized technical services? Supplement your standard campaigns with our premium custom solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customSolutions.map((solution, i) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass p-6 rounded-2xl border border-white/5 bg-white/[0.005] hover:bg-white/[0.02] hover:border-accent-secondary/20 hover:scale-[1.01] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-accent-secondary transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mb-6 max-w-xs pr-4">
                    {solution.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-muted block leading-none">Starting from</span>
                    <span className="text-white font-heading font-bold text-sm leading-tight mt-1 inline-block">
                      {formatPriceVal(solution.price)}{solution.period}
                    </span>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-1 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-[10px] font-bold text-white transition-all"
                  >
                    Request Proposal
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE DIGIPEAK PILLARS */}
      <section className="py-12 md:py-20 lg:py-24 border-t border-white/5 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-accent-primary font-bold uppercase text-[10px] tracking-widest font-mono">Core Values</span>
              <h2 className="font-heading text-2xl md:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mt-2 mb-4 text-white">
                Transparent Execution. <br />
                <span className="text-gradient-primary">Undisputed Value.</span>
              </h2>
              <p className="text-muted text-sm md:text-base leading-relaxed mb-8 max-w-md">
                We believe in authentic partnerships with transparent delivery schedules, absolute cost transparency, and performance-based marketing strategies.
              </p>
            </div>
            
            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseReason.map((reason, i) => (
                <div 
                  key={reason}
                  className="flex items-center gap-3 glass p-4 rounded-xl border border-white/5 bg-white/[0.003]"
                >
                  <div className="h-6 w-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-white text-xs font-semibold">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING COMPARISON TABLE SECTION */}
      <section className="py-12 md:py-20 lg:py-24 border-t border-white/5 px-6 relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent-primary font-bold uppercase text-[10px] tracking-widest font-mono font-semibold">Detailed Grid</span>
            <h2 className="font-heading text-2xl md:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mt-2 text-white">
              What&apos;s Included In Every Package
            </h2>
          </div>

          {/* Table Container */}
          <div className="w-full overflow-x-auto rounded-3xl border border-white/10 glass bg-white/[0.002]">
            <table className="w-full border-collapse text-left min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-muted font-mono text-[10px] font-bold uppercase tracking-wider bg-white/[0.02]">
                  <th className="p-6">Core Service Deliverable</th>
                  <th className="p-6">Starter</th>
                  <th className="p-6">Growth</th>
                  <th className="p-6">Professional</th>
                  <th className="p-6">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-xs text-muted leading-relaxed">
                {comparisonFeatures.map((feat, index) => (
                  <tr 
                    key={feat.name} 
                    className={`border-b border-white/5 transition-colors hover:bg-white/[0.01] ${
                      index % 2 === 0 ? "bg-white/[0.002]" : ""
                    }`}
                  >
                    <td className="p-6 font-semibold text-white">{feat.name}</td>
                    <td className="p-6">{feat.starter}</td>
                    <td className="p-6 text-accent-secondary font-medium">{feat.growth}</td>
                    <td className="p-6 text-accent-primary font-semibold">{feat.professional}</td>
                    <td className="p-6 text-white font-semibold">{feat.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. CUSTOM SOLUTIONS CTA */}
      <section className="py-10 md:py-16 lg:py-20 border-t border-white/5 bg-gradient-to-tr from-accent-primary/3 via-transparent to-accent-secondary/3 px-6">
        <div className="mx-auto max-w-4xl text-center glass p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-xl">
          <h2 className="font-heading text-2xl md:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            Need A Custom Solution?
          </h2>
          <p className="text-muted text-xs md:text-sm max-w-md mx-auto leading-relaxed mb-8">
            Every business is different. Let&apos;s build a custom strategy tailored to your exact operational and revenue goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
              Request Proposal <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-12 md:py-20 lg:py-24 border-t border-white/5 px-6 bg-background">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-accent-primary font-bold uppercase text-[10px] tracking-widest font-mono">FAQ</span>
            <h2 className="font-heading text-2xl md:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mt-2 text-white">
              Pricing FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {pricingFaqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass p-6 rounded-2xl border border-white/10"
              >
                <h3 className="font-heading font-bold text-white text-sm md:text-base mb-2.5 flex items-start gap-2 pr-4">
                  <HelpCircle className="w-4 h-4 text-accent-secondary shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-muted leading-relaxed pl-6 max-w-3xl">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-12 md:py-20 lg:py-24 border-t border-white/5 relative overflow-hidden bg-background px-6">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent-primary/10 blur-[130px] pointer-events-none rounded-full" />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Ready To Grow Your Business?
          </h2>
          <p className="text-muted text-xs md:text-sm max-w-md mx-auto leading-relaxed mb-10">
            Let&apos;s build a strategy designed for long-term growth. Request your proposal or call our experts today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2 shadow-lg">
              Get Proposal <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] px-8 py-4 text-sm font-medium transition-all duration-300">
              Talk To An Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
