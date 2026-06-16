export interface ServicePackage {
  name: string;
  aedPrice: number | null;
  period: string;
  features: string[];
  popular?: boolean;
  custom?: boolean;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  slug: string;
  items: ServicePackage[];
}

export interface CustomSolution {
  name: string;
  price: number;
  period: string;
  desc: string;
}

export interface CurrencyConfig {
  rate: number;
  symbol: string;
  flag: string;
  label: string;
}

export const currencyConfig: Record<string, CurrencyConfig> = {
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

export const packagesData: Record<string, ServiceData> = {
  seo: {
    title: "SEO Services",
    subtitle: "Command search results and secure high-intent organic traffic.",
    slug: "/seo-services",
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
    slug: "/web-design-development",
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
    slug: "/ecommerce-development",
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
    slug: "/digital-marketing",
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
    slug: "/social-media-management",
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
    slug: "/branding-creative",
    items: [
      { name: "Starter", aedPrice: 399, period: "", features: ["Logo Design", "Brand Identity", "Color System", "Typography", "Brand Guidelines"] },
      { name: "Growth", aedPrice: 899, period: "", popular: true, features: ["Logo Design", "Brand Identity", "Color System", "Typography", "Brand Guidelines", "Visual Mockups", "Stationery Designs", "Vector Raw Files"] },
      { name: "Professional", aedPrice: 1999, period: "", features: ["Logo Design", "Brand Identity", "Color System", "Typography", "Brand Guidelines", "Visual Mockups", "Stationery Designs", "Vector Raw Files", "Full Corporate Rebranding Assets", "Presentation Pitch Deck Template"] },
      { name: "Enterprise", aedPrice: null, period: "", custom: true, features: ["Worldwide Trademark Sourcing Audits", "Luxury Interactive Brand Asset Hubs", "Corporate UI Pattern Design Libraries", "Company Culture Alignment Guidelines", "Packaging Design Prototypes", "Dynamic Motion Logo Signatures"] }
    ]
  }
};

export const customSolutions: CustomSolution[] = [
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

export const digipeakCompanyProfile = {
  name: "Digipeak",
  fullName: "Digipeak Agency",
  tagline: "Your Digital Growth Assistant",
  email: "hello@digipeak.agency",
  careersEmail: "careers@digipeak.agency",
  partnershipsEmail: "partnerships@digipeak.agency",
  phone: "+94 77 362 4413",
  whatsappUrl: "https://wa.me/94773624413",
  website: "https://www.digipeak.agency",
  address: "https://maps.app.goo.gl/9Gp2fifi3A15suaA6",
  socials: {
    linkedin: "https://www.linkedin.com/company/digipeakagencyglobal",
    instagram: "https://www.instagram.com/digipeak.agency",
    facebook: "https://www.facebook.com/share/1BC3Xs8zW3/?mibextid=wwXIfr",
    googleBusiness: "https://maps.app.goo.gl/9Gp2fifi3A15suaA6"
  },
  businessModel: "Premium digital growth retainers, B2B partner networks (Referral, White Label, Reseller), and custom design/development project scopes.",
  founder: {
    name: "Sajadh Ahmed",
    role: "Founder & Chief Strategist",
    experience: "6+ Years",
    skills: ["Chief Strategist", "Graphic Designer", "Digital Marketer", "SEO Strategist", "UI/UX Specialist"],
    personalBrand: "Sajadh Ahmed",
    bio: "Sajadh Ahmed is the founder and Chief Strategist of Digipeak Agency. With over 6+ years of experience as a Chief Strategist, Graphic Designer, Digital Marketer, and SEO Strategist, he leads Digipeak as a premium global growth agency.",
    pageSlug: "/author/sajadh-ahmed",
    profileLink: "https://www.digipeak.agency/author/sajadh-ahmed"
  },
  markets: [
    { country: "Qatar", cities: ["Doha", "Wakra", "Lusail", "Pearl Qatar"] },
    { country: "UAE", cities: ["Dubai", "Abu Dhabi"] },
    { country: "Saudi Arabia", cities: ["Riyadh"] },
    { country: "Sri Lanka", cities: ["Colombo"] },
    { country: "Australia", cities: ["Sydney", "Melbourne", "Brisbane", "Adelaide", "Perth", "Canberra", "Gold Coast"] },
    { country: "New Zealand", cities: ["Auckland", "Wellington"] },
    { country: "Singapore", cities: ["Singapore"] },
    { country: "United Kingdom", cities: ["London"] }
  ],
  coreServices: [
    { name: "Web Design", slug: "/web-design-development", desc: "Bespoke headless architectures built with Next.js, optimized for sub-second page speeds and visual excellence." },
    { name: "Graphic Design", slug: "/branding-creative", desc: "Premium custom graphics, layouts, and print assets for digital and print media." },
    { name: "Branding", slug: "/branding-creative", desc: "Corporate brand design, complete visual identity guidelines, custom pitch decks, and dynamic motion logo signatures." },
    { name: "Logo Design", slug: "/branding-creative", desc: "Bespoke vector logos and complete visual mark identity guidelines." },
    { name: "SEO", slug: "/seo-services", desc: "Command search engine result pages with technical audits, keyword mapping, on-page optimization, and high-authority link building." },
    { name: "Local SEO", slug: "/seo-services", desc: "Dominating local map packs and high-intent local queries across Qatar, UAE, and KSA." },
    { name: "Enterprise SEO", slug: "/seo-services", desc: "Global multi-lingual search strategies for enterprise scaling." },
    { name: "Digital Marketing", slug: "/digital-marketing", desc: "Performance paid acquisition campaigns across Google Ads and Meta (Facebook/Instagram) targeting maximum ROI." },
    { name: "AI Automation", slug: "/ai-solutions", desc: "Custom GPT workflow integration, secure database triggers, and conversational AI lead scoring handlers." },
    { name: "CRM Systems", slug: "/crm-automation", desc: "Active campaign setups, customer pipelines tracking, and automated lead routing webhooks." },
    { name: "Lead Generation", slug: "/contact", desc: "Multi-step high-converting lead qualification forms, resources downloads, and interactive chat builders." },
    { name: "Personal Branding", slug: "/author/sajadh-ahmed", desc: "Executive reputation building, thought leadership content strategies, and profile share setups." }
  ],
  portfolio: [
    {
      name: "Elevate Marketing Group",
      industry: "Digital Marketing & Growth Consulting",
      location: "Dubai, UAE",
      slug: "/case-studies/elevate-marketing-group",
      goals: "Complete digital brand transformation and premium GCC repositioning to attract enterprise-level clients.",
      challenges: "Offering high-quality services but lacking a premium web presence and organic GCC lead generation channels.",
      deliverables: ["Brand Strategy & GCC Visual Identity", "High-performance Next.js Website Development", "CRM & Lead Qualification System", "Social Media templates & brand guidelines"],
      results: "+487% Organic Traffic increase, +312% Qualified Leads generated, and a fully automated sales qualifying pipeline."
    },
    {
      name: "Aura Luxury Real Estate",
      industry: "Real Estate & Brokerage",
      location: "Dubai, UAE",
      goals: "Dominate HNW (High Net Worth) buyer queries and build interactive virtual property portals.",
      challenges: "Extremely high PPC ad costs and general leads showing low budget bounds.",
      deliverables: ["Luxury Property Listing Web Portal", "Interactive GCC Map Filters", "Hyper-targeted Local SEO campaigns", "Bilingual Arabic/English landing pages"],
      results: "+240% increase in HNW property inquiries, $45M+ closed pipeline value in 6 months."
    },
    {
      name: "Alpha Medical Group",
      industry: "Healthcare & Clinics",
      location: "Doha, Qatar",
      goals: "Secure organic local map rankings and modernize clinical patient onboarding flows.",
      challenges: "Outdated legacy website with zero mobile optimization and strict healthcare advertising guidelines.",
      deliverables: ["A11Y Accessible bilingual Patient Portal", "Google Maps Local Pack ranking optimization", "HIPAA-compliant contact forms", "Patient review collection pipelines"],
      results: "1st page organic rankings for 42 high-value local healthcare terms, +185% appointments."
    },
    {
      name: "NexGen FinTech",
      industry: "Financial Services & SaaS",
      location: "London, United Kingdom",
      goals: "Streamline signups, build trust, and design responsive high-fidelity digital dashboards.",
      challenges: "High drop-off rate on standard signup forms and complex onboarding steps.",
      deliverables: ["High-fidelity dashboard UI/UX wireframes", "B2B SEO thought-leadership content hub", "Secure developer api documentation hubs"],
      results: "45% reduction in signup funnel drop-off, +320% organic traffic growth within London/UK."
    },
    {
      name: "Velocity Motors",
      industry: "Automotive (Supercars)",
      location: "Abu Dhabi & Dubai, UAE",
      goals: "Position dealership as Dubai's elite supercar destination and drive acquisition leads.",
      challenges: "Competitor groups dominating social media; need for high visual authority.",
      deliverables: ["Cinematic web design layouts", "Reels social templates sets", "Dealership lead collection automation"],
      results: "140+ high-quality supercar acquisition inquiries within the first 3 months of launch."
    }
  ],
  generalInformation: "Digipeak is a premium, results-oriented digital growth agency. We specialize in delivering high-performance SEO, custom web design, e-commerce stores, social media management, brand identity design, paid advertisements (Google & Meta Ads), CRM automations, and AI integrations. We operate borderlessly, supporting clients globally. We do not work on scripted bots or generic configurations—everything we build is custom, high-speed, and engineered for high-intent conversion.",
  locations: [
    { name: "Qatar / Doha", slug: "/qatar", desc: "We provide high-impact local and international SEO, web design, and digital marketing services to businesses across Doha and the wider Qatar region." },
    { name: "UAE / Dubai", slug: "/dubai", desc: "We serve premium brands, e-commerce giants, and luxury startups in Dubai and all Emirates (Abu Dhabi, Sharjah, etc.) with custom web design and performance paid advertising." },
    { name: "Saudi Arabia / Riyadh", slug: "/saudi-arabia", desc: "Supporting Saudi Vision 2030 digital goals, we deliver enterprise SEO and bilingual (Arabic/English) web architectures for firms in Riyadh and KSA." }
  ],
  careers: {
    title: "Careers & Talent Network",
    info: "We hire global remote talent. Candidates can submit their applications on our /careers page by uploading their CV. Applications are processed instantly and lead notifications are routed to hello@digipeak.agency for immediate review."
  },
  partnerships: {
    title: "B2B Partner Network Programs",
    info: "Digipeak operates a comprehensive B2B Partner Network with three specific programs at /partners/: 1. Referral Partner Program (/partners/referral-partner/): Best for freelancers, consultants, influencers, and business owners looking to earn passive commissions by introducing businesses that need high-end websites, SEO campaigns, or branding. 2. White Label Partnership (/partners/white-label-agency/): A silent fulfillment model for agencies, digital studios, and marketing firms. Digipeak handles all technical delivery (15 service areas) behind the scenes under your brand. 3. Reseller Partnership (/partners/reseller-program/): Enables sales teams, independent consultants, and growth advisors to resell Digipeak's web, SEO, and automation services under their own pricing with live profit margin calculations."
  },
  resources: [
    { name: "GCC B2B Local SEO Checklist", slug: "/resources/gcc-local-seo-checklist", category: "seo", format: "PDF" },
    { name: "Ultimate B2B Website Launch Checklist", slug: "/resources/website-launch-checklist", category: "web-design", format: "Google Sheets" },
    { name: "Corporate Brand Identity Guidelines Template", slug: "/resources/brand-identity-guidelines-template", category: "branding", format: "Figma" },
    { name: "Sales Pipeline CRM Automation Blueprint", slug: "/resources/sales-pipeline-automation-crm-blueprint", category: "crm", format: "Notion" },
    { name: "B2B Performance Marketing Strategy Planner", slug: "/resources/b2b-marketing-strategy-planner", category: "marketing", format: "Excel" }
  ]
};
