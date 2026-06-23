import { NextRequest, NextResponse } from "next/server";
import PDFDocument from 'pdfkit';
import path from 'path';

// Resource checklists data mapping with optional templateUrl
const RESOURCE_CHECKLISTS: Record<string, {
  title: string;
  category: string;
  intro: string;
  items: Array<{ title: string; desc: string }>;
  templateUrl?: string;
}> = {
  "gcc-local-seo-checklist": {
    title: "GCC Local SEO Checklist",
    category: "Search Engine Optimization",
    intro: "Step-by-step technical framework to build local topical authority, optimize maps ranking factors, and dominate localized organic search results across Dubai, Doha, Riyadh, and GCC markets.",
    items: [
      { title: "Google Business Profile (GBP) Optimization", desc: "Claim, verify, and fill every GBP profile parameter. Set localized categories, write keyword-rich descriptions, and configure target service area polygons." },
      { title: "Local Citation Tracking & Consistency", desc: "Publish NAP (Name, Address, Phone) details consistently across high-authority regional business directories in Qatar, UAE, and Saudi Arabia." },
      { title: "Localized Review Generation Strategy", desc: "Build automated review acquisition sequences. Secure authentic customer testimonials and establish local credibility." },
      { title: "On-Page Local SEO & GCC City Silos", desc: "Structure location landing pages with targeted H1-H3 city structures, localized body content, and natural geographic keyword phrases." },
      { title: "Arabic & RTL Schema Structured Data", desc: "Inject LocalBusiness and Organization JSON-LD schemas. Add Arabic hreflang attributes and validate right-to-left layout search compatibility." },
      { title: "Location-Specific Landing Pages", desc: "Build individual pages for each physical office/store with native local descriptions, embedded maps, and custom contact forms." },
      { title: "Core Web Vitals & Speed Optimization", desc: "Optimize responsive image sizes, lazy-load below-the-fold media, and eliminate Cumulative Layout Shifts to pass mobile Google PageSpeed tests." },
      { title: "Mobile UI Contrast & Tap Targets", desc: "Audit WCAG text contrast ratios (4.5:1 minimum) and ensure tap target sizing (minimum 48x48px) for low-end mobile device users." }
    ]
  },
  "website-launch-checklist": {
    title: "Ultimate B2B Website Launch Checklist",
    category: "Web Development / SEO",
    intro: "The developer and marketer pre-flight checklist. Eliminate 404 redirect loops, missing schemas, security bugs, and analytics tracking errors to ensure a flawless site launch.",
    items: [
      { title: "Technical SEO & Indexability", desc: "Enable search engine crawlers (remove 'noindex' tags), verify robots.txt routing, and validate XML sitemap integrity in Google Search Console." },
      { title: "Metadata Audit", desc: "Write unique meta titles (50-60 characters) and descriptions (150-160 characters) mapping target commercial intent keywords." },
      { title: "Structured Schema Integration", desc: "Inject Product, Article, FAQPage, and BreadcrumbList JSON-LD schemas to earn rich snippet features in Search Engine Result Pages (SERPs)." },
      { title: "Google Analytics 4 & Tag Manager Setup", desc: "Install global tags, configure custom event parameters, verify web property IDs, and test dataLayer triggers." },
      { title: "Lead Form Handoffs & Integrations", desc: "Submit test inquiries across all forms, verify email auto-reply triggers, check Slack/CRM webhook payload delivery." },
      { title: "Mobile Responsiveness & QA", desc: "Test pages across multiple viewpoints, inspect layout boundaries, and ensure mobile hamburger navigation behaves correctly." },
      { title: "Accessibility (WCAG 2.1 AA) Compliance", desc: "Add semantic alt text to images, verify heading hierarchies, and remediate low-contrast text colors." },
      { title: "Performance Benchmarks", desc: "Validate Core Web Vitals. Enable Gzip/Brotli compression, minify CSS/JS files, and leverage browser caching." },
      { title: "Security & Encryption Protocols", desc: "Verify active SSL certificates, force global HTTPS redirects, and evaluate security headers (X-Frame-Options, CSP)." }
    ]
  },
  "seo-audit-template": {
    title: "Professional SEO Audit Template",
    category: "Search Engine Optimization",
    intro: "An agency-grade checklist to diagnose search crawl blockages, evaluate content health, map internal page authority flows, and optimize backlinks.",
    items: [
      { title: "Indexability & Crawl Analysis", desc: "Run a full crawl using Screaming Frog. Identify 301/302 redirect loops, 404 crawl errors, index exclusions, and canonical mismatches." },
      { title: "Content Quality & Keyword Cannibalization", desc: "Map page rankings. Eliminate duplicate content pages, rewrite thin text blocks, and consolidate pages targeting identical keywords." },
      { title: "Internal Linking & Site Architecture", desc: "Identify and link orphan pages. Build strong topical clusters, link high-authority blogs to main services, and optimize anchor texts." },
      { title: "Backlink Profile & Toxic Auditing", desc: "Assess referring domains, monitor anchor distribution, flag toxic link networks, and prepare disavow sheets if necessary." },
      { title: "Core Web Vitals Performance", desc: "Benchmark LCP, INP, and CLS scores. Identify render-blocking assets, database latency delays, and heavy image bundles." },
      { title: "Search Console Gaps Assessment", desc: "Examine Index Coverage reports, monitor mobile usability issues, and check search query crawl trends for CTR drops." }
    ]
  },
  "google-business-profile-checklist": {
    title: "Google Business Profile Optimization Checklist",
    category: "Local SEO / Maps ranking",
    intro: "Maximize your maps pack visibility. Step-by-step optimization roadmap to optimize Google Business Profile parameters and capture localized B2B client inquiries.",
    items: [
      { title: "Profile Verification & Access Control", desc: "Claim, verify, and protect business ownership. Secure primary owner access and configure delegate roles." },
      { title: "Business Name, Address & Phone (NAP)", desc: "Maintain absolute text consistency with your website. Avoid keyword stuffing in business names unless officially registered." },
      { title: "Category Maps & Services Layout", desc: "Select the most accurate primary category and relevant secondary categories. Build detailed service cards with pricing and definitions." },
      { title: "Google Maps Ranking Optimization", desc: "Define precise service area polygons. geotag business images with local coordinates, and update opening hours." },
      { title: "Review Campaigns & Conversational Responses", desc: "Ask clients for reviews using the short profile link. Respond to every review within 24 hours to signal profile activity." },
      { title: "Product Showcase & Post Updates", desc: "Upload product catalogs with high-res photos. Publish updates, promotions, and industry insights at least once a week." }
    ]
  },
  "b2b-lead-generation-playbook": {
    title: "B2B Lead Generation Playbook",
    category: "Performance Marketing / Strategy",
    intro: "Digipeak's proprietary pipeline roadmap. Design high-converting gated landers, execute multi-channel paid ads, and automate CRM lead qualification pipelines.",
    items: [
      { title: "Target Persona & Value Hook Mapping", desc: "Define your ideal client avatar. Design high-value assets (checklists, calculators, audits) to offer in exchange for business emails." },
      { title: "Multi-Channel PPC Acquisition Funnel", desc: "Launch targeted campaign hooks: LinkedIn sponsored contents for enterprise, Google Search ads for commercial queries, Meta retargeting." },
      { title: "Gated Landing Page Optimization", desc: "Implement corporate work email validation, clean form designs, micro-animations, clear privacy policy trust markers." },
      { title: "Lead Scoring & CRM Qualification", desc: "Score leads based on intent, region, and industry. Integrate instant Slack notification alerts for sales teams." },
      { title: "Automated Email & WhatsApp Nurturing", desc: "Deploy immediate auto-replies containing resource files. Set up 3-step email nurture follow-ups with strategy call CTAs." },
      { title: "CRM Pipelines & Conversion Tracking", desc: "Sync leads directly into HubSpot or custom Notion CRMs. Map conversion states (form_submitted, book_session) in Google Analytics 4." }
    ]
  },
  "saas-pricing-strategy-template": {
    title: "SaaS Pricing Strategy Template",
    category: "SaaS Monetization / Strategy",
    intro: "A checklist to optimize pricing tiers and billing models. Align features allocations, analyze seat metrics, and forecast revenue expansion potential.",
    items: [
      { title: "Identify Value Metrics & Unit Pricing", desc: "Select the primary billing metric (e.g. usage, active seats, api credits) that aligns directly with product value delivery." },
      { title: "Define Pricing Tiers (Freemium vs Paid)", desc: "Build feature matrices for Starter, Professional, and Enterprise tiers. Outline concrete entry parameters and conversion hooks." },
      { title: "Crawl Competitors Monetization Models", desc: "Examine pricing models of main SaaS competitors. Map discount frameworks and evaluate entry barriers." },
      { title: "Expansion Revenue & Upgrades Trigger", desc: "Design upgrade notifications, usage warning boundaries, and seamless checkout integrations for self-serve users." }
    ]
  },
  "e-commerce-conversion-audit-sheet": {
    title: "E-Commerce Conversion Audit Sheet",
    category: "Conversion Rate Optimization / Retail",
    intro: "A technical CRO audit checklist built to resolve cart abandonment, product page friction, and checkout leakage across e-commerce platforms.",
    items: [
      { title: "Cart Abandonment Bottlenecks Scan", desc: "Analyze checkout steps. Simplify shipping calculations, display trust badges, and allow guest checkout registration." },
      { title: "Product Page Layout & Micro-copy", desc: "Verify high-contrast Call-to-Actions (Add to Cart), place clear reviews summaries above-the-fold, and add detailed product sizing." },
      { title: "Mobile UI Check & Tap Targets", desc: "Test mobile checkouts on low-end screens. Remove redundant form fields, adjust keyboard layouts for inputs." },
      { title: "Payment Gateways & Local Pricing", desc: "Integrate multiple payment methods (Stripe, Apple Pay, PayPal, GCC gateways like KNET/MyFatoorah) and enable currency selection." }
    ]
  },
  "cro-playbook": {
    title: "B2B Conversion Rate Optimization Playbook",
    category: "Performance Marketing / CRO",
    intro: "Agency playbook mapping high-converting layout elements, trust indicators, form structures, and user engagement loops to scale lead capture.",
    items: [
      { title: "High-Converting Page Grid Layouts", desc: "Place valuable copy blocks and visual audits above the fold, ensuring immediate clarity on what the value hook offers." },
      { title: "Qualified Form Fields Optimization", desc: "Implement business email blockers, reduce required fields to Name/Email, and add optional CRM tags (Company/Website)." },
      { title: "Trust Markers & Social Proof", desc: "Place client logo rows, industry awards, and live client reviews blocks adjacent to call-to-actions." },
      { title: "Interactive Lead Magnets & Quizzes", desc: "Utilize diagnostics calculators, step-by-step selectors, and customized assessments templates to drive engagement." }
    ]
  },
  "seo-content-outline-template": {
    title: "B2B SEO Content Outline Template",
    category: "Content Strategy / Writing",
    intro: "An outline template designed to brief writers with exact search intent maps, target entity lists, heading grids, and internal linking scopes.",
    items: [
      { title: "Search Intent & Topical Analysis", desc: "Identify target search query categories (informational, commercial) and map corresponding user intent requirements." },
      { title: "Keyword & Entity Integration Maps", desc: "Provide target primary, secondary, and long-tail keywords along with semantic entity words (e.g. tools, business terms)." },
      { title: "Heading Hierarchies (H1-H3) Structure", desc: "Define heading clusters containing target keywords. Map outline flow to earn search snippet ranking slots." },
      { title: "Internal Links & CTA Integration", desc: "Map exact internal links to relevant Services/Proposal pages and design explicit in-context call-to-actions." }
    ]
  },
  "whatsapp-automation-blueprint": {
    title: "WhatsApp Marketing & CRM Automation Blueprint",
    category: "CRM Templates / Automation",
    intro: "Step-by-step workflow blueprint to integrate WhatsApp API with your CRM, configure automated reply schedules, and manage marketing campaigns.",
    items: [
      { title: "WhatsApp API Gateway Configuration", desc: "Set up Meta Business Manager credentials, configure webhook receivers, and verify phone numbers." },
      { title: "CRM Sync & Lead Stage Handshakes", desc: "Map triggers in HubSpot or Salesforce to dispatch WhatsApp template alerts when pipeline states update." },
      { title: "Opt-In Setup & Compliance Audit", desc: "Design clean opt-in checkpoints on landing pages to comply with spam protection criteria." },
      { title: "Nurturing Message Sequences Outlines", desc: "Write follow-up templates (e.g. Day 1, Day 3) containing resource download links and booking scheduler links." }
    ]
  },
  "linkedin-lead-generation-templates": {
    title: "LinkedIn Lead Generation Ad Templates",
    category: "Performance Marketing / Paid Ads",
    intro: "B2B sponsored content ad templates layout frameworks, copywriting blueprints, and native lead gen form configurations proven to acquire corporate leads.",
    items: [
      { title: "Ad Copywriting Hook & Body Blueprints", desc: "Write high-contrast problem-solving headlines and body text outlining concrete checklist benefits." },
      { title: "Visual Layouts & Sponsored Cards", desc: "Design premium sponsored content cards emphasizing templates contents (e.g., preview boxes, checked lists)." },
      { title: "Native Lead Gen Form Settings", desc: "Map required fields (Full Name, Work Email, Company) and link your official B2B privacy policy page." },
      { title: "Automated Lead Extraction Webhooks", desc: "Connect LinkedIn API with your CRM via Make.com or HubSpot to trigger immediate auto-replies." }
    ]
  },
  "brand-identity-guidelines-template": {
    title: "Corporate Brand Identity Guidelines Template",
    category: "Branding / Figma",
    intro: "A comprehensive brand playbook outline to establish visual consistency, typography hierarchies, corporate color schemes, and digital layout assets.",
    templateUrl: "https://figma.com/file/mock-brand-guidelines",
    items: [
      { title: "Figma Styles Configuration", desc: "Configure global styles for primary, secondary, and accent colors using HSL values." },
      { title: "Typography Scale & Hierarchy", desc: "Establish clear font sizes, line heights, and weights for headings and body copy." },
      { title: "Logo Usage Guidelines", desc: "Define safe zones, minimum sizing, and incorrect logo placement rules." },
      { title: "UI Component Design System", desc: "Create reusable buttons, forms, navigation menus, and layout grids." }
    ]
  },
  "b2b-marketing-strategy-planner": {
    title: "B2B Performance Marketing Strategy Planner",
    category: "Marketing / Excel",
    intro: "Model customer acquisition costs, allocate budgets across channels, and forecast lead generation funnel outcomes.",
    templateUrl: "https://docs.google.com/spreadsheets/d/mock-strategy-planner",
    items: [
      { title: "CAC & LTV:CAC Forecasting", desc: "Input target Customer Acquisition Cost and Lifetime Value to model unit economics." },
      { title: "Multi-Channel Budget Allocation", desc: "Distribute monthly budgets across Google Search, LinkedIn Ads, and Meta Retargeting." },
      { title: "Conversion Funnel Projections", desc: "Model CTR, landing page conversion rate, and sales qualification ratios." },
      { title: "KPI Dashboards Configuration", desc: "Set up baseline spreadsheets to track cost-per-lead and pipeline velocity monthly." }
    ]
  },
  "b2b-content-editorial-calendar": {
    title: "B2B SEO Content Editorial Calendar",
    category: "Content Strategy / Notion",
    intro: "Coordinate your search engine content machine. Track target keywords, cluster topics, and manage author queues in one place.",
    templateUrl: "https://notion.so/mock-content-calendar",
    items: [
      { title: "Topical Cluster Blueprinting", desc: "Map secondary articles to core service pages to build strong organic topical authority." },
      { title: "Keyword Mapping & Optimization", desc: "Assign primary and secondary keywords to scheduled content pieces." },
      { title: "Content Workflow Management", desc: "Track draft statuses from ideation and writing to review and publication." },
      { title: "SEO Content Brief Creation", desc: "Generate briefings containing user intent, heading structures, and semantic keywords." }
    ]
  },
  "social-media-content-branding-kit": {
    title: "Social Media Content Branding Kit",
    category: "Social Media / Canva",
    intro: "Premium templates for LinkedIn carousels, Instagram infographics, and corporate slides to elevate social media authority.",
    templateUrl: "https://canva.com/design/mock-social-kit",
    items: [
      { title: "LinkedIn Slide Decks", desc: "Design swipeable PDF carousels featuring high-value checklist previews and graphs." },
      { title: "Corporate Presentation Slides", desc: "Access styled presentation slides to pitch services and outline case studies." },
      { title: "Instagram Infographics Grid", desc: "Utilize modular grid layouts to present statistics and digital marketing tips." },
      { title: "Consistent Font & Color Application", desc: "Map corporate branding variables directly to Canva design templates." }
    ]
  },
  "chatgpt-b2b-marketing-prompt-library": {
    title: "ChatGPT B2B Marketing Prompt Library",
    category: "AI Prompt Libraries / PDF",
    intro: "Access engineered system prompts for copywriting, buyer persona building, and ad headline creation.",
    templateUrl: "https://docs.google.com/document/d/mock-prompt-library",
    items: [
      { title: "System Persona Prompts", desc: "Instruct ChatGPT to act as an expert B2B copywriter with strict style guidelines." },
      { title: "Cold Email Outreach Outlines", desc: "Generate persuasive, low-friction cold email sequences targeting corporate managers." },
      { title: "LinkedIn Ad Copy Generators", desc: "Produce multiple headline and body variants optimized for CTR and form submissions." },
      { title: "SEO Content Brief Builders", desc: "Extract semantic entities and structure heading outlines for writers." }
    ]
  },
  "b2b-sales-proposal-template": {
    title: "High-Converting B2B Sales Proposal Template",
    category: "Proposal Templates / PowerPoint",
    intro: "Adapt the exact sales deck structure Digipeak uses to outline project scopes, pricing tiers, and SLA agreements.",
    templateUrl: "https://docs.google.com/presentation/d/mock-sales-proposal",
    items: [
      { title: "Problem Statement & Audit Data", desc: "Outline the prospect's current bottlenecks using Lighthouse and crawling audit data." },
      { title: "Proposed Solution Roadmap", desc: "Present a clear chronological roadmap detailing technical changes and content planning." },
      { title: "Pricing Tiers Feature Matrices", desc: "Build comprehensive pricing cards defining deliverables for Starter and Pro retainers." },
      { title: "Service Level Agreements (SLA)", desc: "Draft standard terms of service, reporting schedules, and communication rules." }
    ]
  },
  "gcc-market-entry-growth-guide": {
    title: "GCC B2B Market Entry & Growth Guide",
    category: "Business Growth / PDF",
    intro: "Unlock scaling opportunities across Gulf hubs (Riyadh, Dubai, Doha) with localized marketing and search strategies.",
    templateUrl: "https://docs.google.com/document/d/mock-growth-guide",
    items: [
      { title: "Arabic Search Silos & Indexing", desc: "Structure dual-language websites with correct hreflang tags for Arabic crawling." },
      { title: "Local PPC Targeting & Ad Spend", desc: "Allocate ad budgets on regional platforms and optimize forms for business contacts." },
      { title: "NAP Citation Directories", desc: "Syndicate address details across high-authority regional business directories in Qatar and UAE." },
      { title: "GCC Lead Nurturing Workflows", desc: "Set up immediate WhatsApp API auto-replies to follow up with local qualified leads." }
    ]
  },
  "sales-pipeline-automation-crm-blueprint": {
    title: "Sales Pipeline CRM Automation Blueprint",
    category: "CRM Templates / Notion",
    intro: "Map your sales qualification stages, automated email notifications, and database sync parameters.",
    templateUrl: "https://notion.so/mock-crm-blueprint",
    items: [
      { title: "Lead Status & Qualification Stages", desc: "Configure pipeline stages: Subscriber, Qualified Lead, Proposal Sent, and Client." },
      { title: "CRM Automatic Notification Rules", desc: "Trigger instant Slack alerts and task creation when prospects submit forms." },
      { title: "Database Sync Webhook Settings", desc: "Sync lead details between custom website frontends and HubSpot/Salesforce APIs." },
      { title: "WhatsApp Nurture API Triggers", desc: "Dispatch automated WhatsApp message sequences when lead statuses change." }
    ]
  },
  "cold-email-outreach-sequences": {
    title: "B2B Cold Email Outreach Sequences",
    category: "Email Outreach / Word",
    intro: "Persuasive cold email templates engineered to bypass gatekeepers and secure strategy sessions with corporate decision-makers.",
    templateUrl: "https://docs.google.com/document/d/mock-outreach-sequences",
    items: [
      { title: "High-CTR Subject Lines", desc: "Write short, personalized, curiosity-inducing subject lines that maximize open rates." },
      { title: "Problem-Centric Value Hooks", desc: "Outline specific operational pain points (e.g. site speed delays) to capture attention." },
      { title: "Low-Friction Call-to-Actions", desc: "End emails with simple, low-commitment requests like booking a 10-minute calendar sync." },
      { title: "Follow-Up Cadence Schedules", desc: "Establish a 3-step follow-up timeline to stay top-of-mind without spamming." }
    ]
  }
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const checklistData = RESOURCE_CHECKLISTS[slug];

    if (!checklistData) {
      return NextResponse.json({ error: "Resource checklist not found" }, { status: 404 });
    }

    // Resolve system Arial font files relative to project root
    const fontRegular = path.join(process.cwd(), 'public/fonts/Arial.ttf');
    const fontBold = path.join(process.cwd(), 'public/fonts/Arial-Bold.ttf');

    // Build PDF Document in memory
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    const chunks: Buffer[] = [];

    const pdfPromise = new Promise<Buffer>((resolve, reject) => {
      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', (err) => reject(err));
    });

    // Register Arial custom TTF fonts
    doc.registerFont('CustomArial', fontRegular);
    doc.registerFont('CustomArialBold', fontBold);

    // --- PDF DRAWING PROCESS ---
    // Premium dark theme background
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#020203');

    // Decorative Glowing Accent Line (top)
    doc.rect(0, 0, doc.page.width, 10).fill('#a855f7');

    // Header Branded logo
    doc.fillColor('#a855f7').fontSize(11).font('CustomArialBold').text('DIGIPEAK AGENCY', 50, 45);
    doc.fillColor('#94a3b8').fontSize(9).font('CustomArial').text('B2B GROWTH RESOURCE CENTER', 180, 47);

    // Separator line
    doc.strokeColor('#ffffff').opacity(0.08).moveTo(50, 68).lineTo(545, 68).stroke().opacity(1);

    // Resource Category & Title
    doc.fillColor('#6366f1').fontSize(9).font('CustomArialBold').text(checklistData.category.toUpperCase(), 50, 90);
    doc.fillColor('#ffffff').fontSize(22).font('CustomArialBold').text(checklistData.title, 50, 105);

    // Intro block
    doc.fillColor('#94a3b8').fontSize(10).font('CustomArial').text(checklistData.intro, 50, 140, { width: 495, lineGap: 3 });

    // Inner Grid Box Background for checks
    doc.strokeColor('#ffffff').opacity(0.08).moveTo(50, 190).lineTo(545, 190).stroke().opacity(1);

    // Render Checklist Items
    let y = 210;
    const itemSpacing = 52;

    checklistData.items.forEach((item, index) => {
      // Draw checkbox square outline
      doc.strokeColor('#a855f7').opacity(0.5).lineWidth(1.5).rect(50, y + 2, 12, 12).stroke().opacity(1);
      
      // If it is the first item, draw a check mark inside for style/illustration
      if (index === 0) {
        doc.strokeColor('#6366f1').lineWidth(2)
           .moveTo(52, y + 8)
           .lineTo(55, y + 11)
           .lineTo(60, y + 4)
           .stroke();
      }

      // Title & Desc text
      doc.fillColor('#ffffff').fontSize(11).font('CustomArialBold').text(item.title, 72, y);
      doc.fillColor('#94a3b8').fontSize(9).font('CustomArial').text(item.desc, 72, y + 15, { width: 470, lineGap: 1 });

      y += itemSpacing;
    });

    // Draw template URL block if present
    if (checklistData.templateUrl) {
      doc.rect(50, 595, 495, 55).fill('#071027');
      doc.strokeColor('#a855f7').opacity(0.3).rect(50, 595, 495, 55).stroke().opacity(1);
      doc.fillColor('#a855f7').fontSize(8).font('CustomArialBold').text('EDITABLE TEMPLATE / RESOURCE URL', 70, 608);
      doc.fillColor('#ffffff').fontSize(9).font('CustomArialBold').text(checklistData.templateUrl, 70, 622);
    }

    // Strategy Call CTA Card (Bottom)
    doc.rect(50, 680, 495, 75).fill('#0b0b0f');
    doc.strokeColor('#6366f1').opacity(0.2).rect(50, 680, 495, 75).stroke().opacity(1);

    doc.fillColor('#a855f7').fontSize(9).font('CustomArialBold').text('accelerate your corporate pipeline'.toUpperCase(), 70, 695);
    doc.fillColor('#ffffff').fontSize(11).font('CustomArialBold').text('Request a Free 1-on-1 Organic Strategy Consultation', 70, 710);
    doc.fillColor('#94a3b8').fontSize(9).font('CustomArial').text('Let our engineers analyze your domain: www.digipeak.agency/book-session', 70, 727);

    // Footer copyright
    doc.strokeColor('#ffffff').opacity(0.08).moveTo(50, 770).lineTo(545, 770).stroke().opacity(1);
    doc.fillColor('#475569').fontSize(8).font('CustomArial').text('© 2026 Digipeak Agency. All rights reserved. Generated programmatically.', 50, 782);
    doc.fillColor('#a855f7').fontSize(8).font('CustomArialBold').text('www.digipeak.agency', 450, 782);

    doc.end();

    const pdfBuffer = await pdfPromise;

    // Return the generated PDF stream
    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="digipeak-${slug}.pdf"`,
        "Cache-Control": "public, max-age=86400"
      }
    });

  } catch (error: any) {
    console.error("Error generating dynamic resource PDF:", error);
    return NextResponse.json({ error: "Failed to generate resource file" }, { status: 500 });
  }
}
