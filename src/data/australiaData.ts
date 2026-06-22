export interface CityData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  badge: string;
  heroDesc: string;
  introTitle: string;
  introText: string;
  localContentTitle: string;
  localContentText: string;
  seoBlockTitle: string;
  seoBlockParas: string[];
  industries: { name: string; iconName: string }[];
  faqs: { question: string; answer: string }[];
}

export const australiaHubData = {
  metaTitle: "Digital Marketing, SEO & Web Design Agency Australia | Digipeak",
  metaDescription: "Digipeak is a premium B2B digital growth agency in Australia, driving business performance through custom web design, SEO, branding, and AI automation.",
  h1: "Digital Growth & Technology Partners in Australia",
  badge: "Australia Digital Hub",
  heroDesc: "Empowering Australian enterprises with high-performance Web Engineering, enterprise SEO, custom AI solutions, and automated lead acquisition pipelines across all key commercial markets.",
  introText: "Digipeak operates as a premier digital agency in Australia, serving leading B2B brands, high-growth startups, and established companies. Through our location-specific hubs in Sydney, Melbourne, Brisbane, Perth, Adelaide, the Gold Coast, and Canberra, we deliver targeted expertise that aligns with regional market dynamics, regulatory environments, and customer expectations.",
  seoBlockParas: [
    "Australia's digital economy is expanding rapidly, demanding that businesses adopt sophisticated web design and advanced search engine optimization strategies to remain competitive. As an authority B2B growth partner, Digipeak bridges the gap between complex software engineering and high-performance marketing. We build custom Next.js storefronts, develop comprehensive technical SEO frameworks, and run ROI-driven Google Ads campaigns that convert organic and paid traffic into predictable pipeline revenue.",
    "Our network of city-based hubs ensures that your business receives localized optimization tailored to your immediate market. Whether you require corporate branding and financial-grade security in Sydney, retail e-commerce solutions in Melbourne, tourism-focused customer acquisition on the Gold Coast, or government-compliant professional systems in Canberra, Digipeak has the capability to execute. Explore our regional hubs below to see how we help businesses in your exact location dominate their local search rankings."
  ]
};

export const citiesData: CityData[] = [
  {
    slug: "sydney",
    name: "Sydney",
    metaTitle: "Digital Marketing, SEO & Web Design Agency Sydney | Digipeak",
    metaDescription: "Partner with Digipeak, a leading web design company, SEO agency, and digital marketing agency in Sydney. We build fast Next.js websites & high-ROI B2B strategies.",
    keywords: [
      "Digital Marketing Agency Sydney", "SEO Agency Sydney", "SEO Company Sydney",
      "Web Design Company Sydney", "Website Design Sydney", "Creative Agency Sydney",
      "Branding Agency Sydney", "AI Agency Sydney", "AI Solutions Sydney",
      "Social Media Marketing Sydney", "Google Ads Agency Sydney", "Performance Marketing Sydney",
      "Lead Generation Services Sydney", "CRM Automation Sydney", "Business Automation Sydney",
      "E-Commerce Development Sydney"
    ],
    h1: "Digital Marketing, SEO & Web Design Services in Sydney",
    badge: "Sydney Growth Hub",
    heroDesc: "Drive enterprise performance with Sydney's leading web design company, branding specialist, and search engine optimization team.",
    introTitle: "Sydney's Authority Digital Agency for High-Growth Enterprises",
    introText: "As Sydney's premier digital agency, Digipeak specializes in positioning corporate brands at the forefront of their industries. From the busy financial center of the CBD to the technology hubs in Surry Hills and North Sydney, we engineer custom web architectures and run targeted acquisition programs designed to attract, qualify, and convert enterprise accounts.",
    localContentTitle: "Tailored to Sydney's Competitive B2B & Corporate Landscape",
    localContentText: "Sydney's fast-moving economy requires digital systems that are fast, secure, and visually commanding. We help Sydney finance firms and technology developers establish search engine dominance and streamline operational overhead. By combining premium visual design with custom integrations, we turn digital channels into predictable engines of growth.",
    seoBlockTitle: "Scale Your Footprint with the Leading SEO & Web Design Agency in Sydney",
    seoBlockParas: [
      "Securing market share in Sydney requires more than standard off-the-shelf templates. As a specialized web design company in Sydney, we build headless Next.js platforms that load in under a second and are structurally optimized for search crawlers. When combined with our custom e-commerce development Sydney solutions, we enable businesses to scale transaction volumes without compromising on security or UI/UX quality.",
      "Visibility on Google is a core asset. Our SEO agency in Sydney handles complex technical audits, content strategies, and high-quality link acquisition to ensure your brand ranks for highly commercial terms. Whether you are looking for a Google Ads agency in Sydney to drive instant lead flow, or a branding agency in Sydney to establish a premium corporate identity, Digipeak has the local market experience to deliver exceptional outcomes."
    ],
    industries: [
      { name: "Finance", iconName: "Building2" },
      { name: "Technology", iconName: "Cpu" },
      { name: "Real Estate", iconName: "Home" },
      { name: "Professional Services", iconName: "Briefcase" }
    ],
    faqs: [
      {
        question: "Why should my Sydney business choose Digipeak over a generic agency?",
        answer: "Digipeak is not a generic agency; we are a dedicated technology and performance-driven partner. We do not use bloated templates or outsource critical workflows. We construct custom, high-speed Next.js web applications, execute data-driven SEO campaigns based on commercial search intent, and implement intelligent business automation to optimize your operations in Sydney."
      },
      {
        question: "How does your SEO company in Sydney target commercial search terms?",
        answer: "Our SEO agency in Sydney performs intensive competitor mapping and keyword analysis to find terms with high transactional intent (such as 'Digital Marketing Agency Sydney'). We rebuild your site's site architecture, optimize on-page content, and build high-quality links to earn stable rankings that drive direct sales pipeline value."
      },
      {
        question: "What web design services do you offer for Sydney corporations?",
        answer: "As a specialist web design company in Sydney, we provide custom design, responsive frontend engineering with Next.js, content management integrations, CRM automation syncs, and comprehensive technical maintenance. We ensure every site is lightning-fast, visually premium, and highly secure."
      },
      {
        question: "Can you help automate our Sydney business processes?",
        answer: "Yes, we are a leading AI agency and business automation partner. We integrate CRM systems, develop custom AI tools, configure lead capturing workflows, and deploy customer support chatbots that decrease manual processing costs and scale your team's capability."
      }
    ]
  },
  {
    slug: "melbourne",
    name: "Melbourne",
    metaTitle: "Digital Marketing, SEO & Web Design Agency Melbourne | Digipeak",
    metaDescription: "Partner with Digipeak, a leading web design company, SEO agency, and digital marketing agency in Melbourne. Discover custom Next.js storefronts & local B2B SEO.",
    keywords: [
      "Digital Marketing Agency Melbourne", "SEO Agency Melbourne", "SEO Company Melbourne",
      "Web Design Company Melbourne", "Website Design Melbourne", "Creative Agency Melbourne",
      "Branding Agency Melbourne", "AI Agency Melbourne", "AI Solutions Melbourne",
      "Social Media Marketing Melbourne", "Google Ads Agency Melbourne", "Performance Marketing Melbourne",
      "Lead Generation Services Melbourne", "CRM Automation Melbourne", "Business Automation Melbourne",
      "E-Commerce Development Melbourne"
    ],
    h1: "Digital Marketing, SEO & Web Design Services in Melbourne",
    badge: "Melbourne Growth Hub",
    heroDesc: "Empower your Melbourne business with bespoke web design, tactical search engine optimization, and custom CRM automation.",
    introTitle: "Pioneering Creative & Digital Engineering for Melbourne Brands",
    introText: "As Melbourne's leading digital growth agency, Digipeak blends design sophistication with technical excellence. Serving businesses in Melbourne's CBD, South Yarra, and Fitzroy, we deliver robust web engineering, creative brand transformations, and multi-channel marketing campaigns that generate high-quality pipeline leads.",
    localContentTitle: "Optimized for Melbourne's Dynamic Retail, Tech & Healthcare Sectors",
    localContentText: "Melbourne is a hub for retail innovation, education, and technology. Our team ensures your business stands out through high-performance digital marketing, user-centric e-commerce setups, and custom web applications that support clean user flows and maximize conversion rates.",
    seoBlockTitle: "Drive Search Authority & Sales with Melbourne's Premier SEO Agency",
    seoBlockParas: [
      "In a crowded digital marketplace, page-load speed and design aesthetics define brand credibility. As a premium web design company in Melbourne, we engineer sites using Tailwind CSS and Next.js, guaranteeing responsive design, smooth micro-animations, and fast page load speeds. This technical focus directly supports our search engine optimization campaigns, giving your site an organic ranking advantage.",
      "Our SEO agency in Melbourne focuses on ranking your business for high-volume commercial keywords. We integrate structured schema data, publish high-authority SEO content blocks, and execute targeted Google Ads and performance marketing campaigns that lower client acquisition costs. From branding and identity creation to CRM automation, we provide a complete solution for Melbourne enterprises."
    ],
    industries: [
      { name: "Retail", iconName: "ShoppingBag" },
      { name: "Education", iconName: "GraduationCap" },
      { name: "Healthcare", iconName: "HeartPulse" },
      { name: "Technology", iconName: "Cpu" }
    ],
    faqs: [
      {
        question: "How does your web design company in Melbourne support retail and e-commerce?",
        answer: "We build custom, headless e-commerce storefronts that load instantaneously, reducing checkout friction and increasing average order value. We integrate local payment gateways, inventory platforms, and automated email marketing sequences to keep your business running smoothly."
      },
      {
        question: "What does an SEO company in Melbourne do to increase local search rankings?",
        answer: "We perform technical SEO optimizations, audit your mobile UX, generate local-intent content, and set up LocalBusiness schema tags. We also manage Google Business profiles to ensure your brand displays prominently in local searches and map packs."
      },
      {
        question: "Do you provide branding and creative design services in Melbourne?",
        answer: "Yes, our branding agency services in Melbourne help companies construct distinct identities. We design logos, establish visual guidelines, develop brand strategy documentation, and build clean collateral that communicates quality to your audience."
      },
      {
        question: "What AI agency solutions do you provide for Melbourne companies?",
        answer: "We build and integrate AI solutions such as automated lead triage systems, smart content recommenders, data analytics dashboards, and customer journey automations that enable Melbourne teams to operate more efficiently."
      }
    ]
  },
  {
    slug: "brisbane",
    name: "Brisbane",
    metaTitle: "Digital Marketing, SEO & Web Design Agency Brisbane | Digipeak",
    metaDescription: "Partner with Digipeak, Brisbane's premier web design company, SEO agency, and digital marketing specialist. Build fast websites and rank higher on Google.",
    keywords: [
      "Digital Marketing Agency Brisbane", "SEO Agency Brisbane", "SEO Company Brisbane",
      "Web Design Company Brisbane", "Website Design Brisbane", "Creative Agency Brisbane",
      "Branding Agency Brisbane", "AI Agency Brisbane", "AI Solutions Brisbane",
      "Social Media Marketing Brisbane", "Google Ads Agency Brisbane", "Performance Marketing Brisbane",
      "Lead Generation Services Brisbane", "CRM Automation Brisbane", "Business Automation Brisbane",
      "E-Commerce Development Brisbane"
    ],
    h1: "Digital Marketing, SEO & Web Design Services in Brisbane",
    badge: "Brisbane Growth Hub",
    heroDesc: "Launch optimized Next.js websites and target high-value commercial keywords with Brisbane's expert digital agency.",
    introTitle: "Accelerating Brisbane Businesses with Custom Web Design & SEO",
    introText: "Digipeak is Brisbane's specialist partner for digital transformation. Helping companies in Fortitude Valley, Brisbane CBD, and South Brisbane, we construct high-speed corporate websites, implement CRM automation systems, and deploy search marketing plans that secure long-term digital growth.",
    localContentTitle: "Serving Brisbane's Construction, Tourism & Real Estate Industries",
    localContentText: "Brisbane's development boom demands digital assets that can communicate scale and attract regional prospects. We provide real estate, construction, and tourism businesses with visual portfolios, automated lead capturing forms, and search campaigns that target high-intent local and international buyers.",
    seoBlockTitle: "Dominate Search Results with Brisbane's Expert SEO & Creative Agency",
    seoBlockParas: [
      "To outrank competitors in the Sunshine State, your business needs technical optimization. As a premier SEO company in Brisbane, we optimize your site architecture, eliminate crawler bottlenecks, and craft SEO content blocks that establish topical authority. This drives organic traffic while lowering reliance on rising paid media costs.",
      "As a leading web design company in Brisbane, we build high-converting interfaces using modern layouts. We integrate your web channels with HubSpot, Salesforce, or custom CRM pipelines to ensure every lead is immediately captured and nurtured. From branding identity systems to Google Ads management, we cover all elements of your digital acquisition model."
    ],
    industries: [
      { name: "Construction", iconName: "HardHat" },
      { name: "Tourism", iconName: "Palmtree" },
      { name: "Healthcare", iconName: "HeartPulse" },
      { name: "Real Estate", iconName: "Home" }
    ],
    faqs: [
      {
        question: "What results can we expect from your SEO agency in Brisbane?",
        answer: "We focus on driving commercial intent traffic that converts to sales. Our Brisbane SEO clients typically experience significant gains in search visibility, improvements in keyword rankings for high-intent search phrases, and a steady increase in inbound organic leads."
      },
      {
        question: "How long does custom e-commerce development in Brisbane take?",
        answer: "Development timelines depend on complexity. A custom Next.js or Shopify store usually takes between 6 to 12 weeks. This includes full custom UI/UX design, payment integration, catalog setup, ERP sync, and performance optimization."
      },
      {
        question: "Do you offer Google Ads and PPC management in Brisbane?",
        answer: "Yes, our performance marketing and Google Ads agency in Brisbane structures search campaigns, retargeting funnels, and display ads that generate immediate lead volume with a low customer acquisition cost."
      },
      {
        question: "Can your creative agency in Brisbane help refresh our corporate brand?",
        answer: "Absolutely. We provide comprehensive branding agency services in Brisbane, redesigning brand identities, visual assets, and corporate messaging to align your business with modern customer expectations."
      }
    ]
  },
  {
    slug: "perth",
    name: "Perth",
    metaTitle: "Digital Marketing, SEO & Web Design Agency Perth | Digipeak",
    metaDescription: "Partner with Digipeak, a leading web design company, SEO agency, and digital marketing agency in Perth. High-performance Next.js systems & B2B SEO.",
    keywords: [
      "Digital Marketing Agency Perth", "SEO Agency Perth", "SEO Company Perth",
      "Web Design Company Perth", "Website Design Perth", "Creative Agency Perth",
      "Branding Agency Perth", "AI Agency Perth", "AI Solutions Perth",
      "Social Media Marketing Perth", "Google Ads Agency Perth", "Performance Marketing Perth",
      "Lead Generation Services Perth", "CRM Automation Perth", "Business Automation Perth",
      "E-Commerce Development Perth"
    ],
    h1: "Digital Marketing, SEO & Web Design Services in Perth",
    badge: "Perth Growth Hub",
    heroDesc: "Scale your B2B operations with Perth's premier technical web design, SEO, and business automation agency.",
    introTitle: "Industrial-Grade Digital Engineering for Perth Businesses",
    introText: "Digipeak supports Western Australia's enterprise community from our Perth CBD hub. We build corporate platforms, execute technical SEO strategies, and implement CRM and database systems for mining, construction, engineering, and professional services firms.",
    localContentTitle: "Built for Perth's Heavy Industries & Professional Service Providers",
    localContentText: "Western Australia's markets are highly specialized. We build web assets that clearly present capabilities to institutional clients. By linking high-speed frontend pages with custom database backends, we help Perth firms manage client communication and highlight their project portfolios.",
    seoBlockTitle: "Achieve First-Page Search Rankings with Perth's Leading SEO Agency",
    seoBlockParas: [
      "Organic visibility is critical for B2B engineering and mining service companies looking to secure major contracts. Our SEO agency in Perth focuses on technical search engine optimization, building topical authority for high-value technical keywords, and injecting custom schema tags to ensure your services display clearly in Google search results.",
      "As a specialized web design company in Perth, we design sites that load instantly under challenging conditions, ensuring field operatives and corporate stakeholders can access your site smoothly. From complete brand development and corporate photography integration to automated CRM workflows, we deliver digital solutions that improve operations and sales."
    ],
    industries: [
      { name: "Mining", iconName: "Hammer" },
      { name: "Construction", iconName: "HardHat" },
      { name: "Engineering", iconName: "Wrench" },
      { name: "Professional Services", iconName: "Briefcase" }
    ],
    faqs: [
      {
        question: "How does your Perth web design company build platforms for engineering and mining?",
        answer: "We engineer custom sites that prioritize fast loading speeds, clean layout hierarchies, and accessible project portals. We ensure technical documents, case studies, and services lists are easy to browse for corporate partners."
      },
      {
        question: "Can your SEO agency in Perth help target national and global keywords?",
        answer: "Yes. While we optimize for Perth-specific searches, we construct SEO strategies that capture national and global B2B query volumes, helping you connect with procurement teams worldwide."
      },
      {
        question: "Do you offer CRM and business automation services in Western Australia?",
        answer: "We are an experienced business automation agency. We connect tools like HubSpot or Zoho to your website, set up automated client onboarding, and build internal dashboards to reduce admin tasks."
      },
      {
        question: "How does your performance marketing team measure lead generation success?",
        answer: "We focus on clean data tracking. We measure actual form fills, phone queries, and booked sessions, providing clear reports on customer acquisition costs and campaign ROAS."
      }
    ]
  },
  {
    slug: "adelaide",
    name: "Adelaide",
    metaTitle: "Digital Marketing, SEO & Web Design Agency Adelaide | Digipeak",
    metaDescription: "Adelaide's premier web design company, SEO agency, and digital marketing specialist. Grow your brand with custom websites & data-driven local SEO.",
    keywords: [
      "Digital Marketing Agency Adelaide", "SEO Agency Adelaide", "SEO Company Adelaide",
      "Web Design Company Adelaide", "Website Design Adelaide", "Creative Agency Adelaide",
      "Branding Agency Adelaide", "AI Agency Adelaide", "AI Solutions Adelaide",
      "Social Media Marketing Adelaide", "Google Ads Agency Adelaide", "Performance Marketing Adelaide",
      "Lead Generation Services Adelaide", "CRM Automation Adelaide", "Business Automation Adelaide",
      "E-Commerce Development Adelaide"
    ],
    h1: "Digital Marketing, SEO & Web Design Services in Adelaide",
    badge: "Adelaide Growth Hub",
    heroDesc: "Drive market visibility and digital conversion with Adelaide's expert web design and search optimization team.",
    introTitle: "Unifying Creative Design with Digital Performance in Adelaide",
    introText: "Digipeak is Adelaide's trusted agency for digital strategy, frontend development, and lead acquisition. Serving businesses across Adelaide CBD, Norwood, and Kent Town, we help manufacturers, educators, and retailers modernize their tech stacks and reach larger audiences.",
    localContentTitle: "Engineered for Adelaide's Manufacturing, Education & Retail Markets",
    localContentText: "Adelaide's economy is highly diverse. We configure systems that handle retail e-commerce sales, corporate student enrollment, and technical manufacturing product spec layouts. We combine beautiful typography with clean code to ensure your Adelaide brand looks professional and performs flawlessly.",
    seoBlockTitle: "Increase Organic Leads with Adelaide's SEO & Web Design Company",
    seoBlockParas: [
      "To stand out in Adelaide, your business needs a website that loads quickly and ranks highly on search engines. Our Adelaide web design company builds websites that deliver excellent user experiences and clear conversion paths. We eliminate unnecessary Javascript to keep code clean and fast, directly supporting our search marketing efforts.",
      "As a specialized SEO company in Adelaide, we help you rank for target queries, optimize your product pages, and design landing pages that convert traffic. From branding design to advanced CRM automation, we help Adelaide companies grow their online presence."
    ],
    industries: [
      { name: "Manufacturing", iconName: "Factory" },
      { name: "Healthcare", iconName: "HeartPulse" },
      { name: "Education", iconName: "GraduationCap" },
      { name: "Retail", iconName: "ShoppingBag" }
    ],
    faqs: [
      {
        question: "What makes your Adelaide web design services premium?",
        answer: "We avoid generic builders that slow down your website. We design custom interfaces and write clean code using React and Next.js, resulting in websites that are fast, secure, and built to rank on search engines."
      },
      {
        question: "How do your local SEO services help Adelaide businesses?",
        answer: "We clean up your local directory citations, optimize your Google Business profile, structure local schema tags, and build local links to help Adelaide customers find your business easily."
      },
      {
        question: "Can your AI solutions automate Adelaide business workflows?",
        answer: "Yes. We integrate CRM systems, set up automated customer notification flows, and build custom AI helper scripts to simplify manual administration."
      },
      {
        question: "Do you offer e-commerce web development in South Australia?",
        answer: "We develop fast, responsive e-commerce websites with clear product search tools, custom shopping carts, and secure payment setups that maximize online sales."
      }
    ]
  },
  {
    slug: "gold-coast",
    name: "Gold Coast",
    metaTitle: "Digital Marketing, SEO & Web Design Agency Gold Coast | Digipeak",
    metaDescription: "Partner with Digipeak, a leading web design company, SEO agency, and digital marketing agency on the Gold Coast. Build high-converting sites.",
    keywords: [
      "Digital Marketing Agency Gold Coast", "SEO Agency Gold Coast", "SEO Company Gold Coast",
      "Web Design Company Gold Coast", "Website Design Gold Coast", "Creative Agency Gold Coast",
      "Branding Agency Gold Coast", "AI Agency Gold Coast", "AI Solutions Gold Coast",
      "Social Media Marketing Gold Coast", "Google Ads Agency Gold Coast", "Performance Marketing Gold Coast",
      "Lead Generation Services Gold Coast", "CRM Automation Gold Coast", "Business Automation Gold Coast",
      "E-Commerce Development Gold Coast"
    ],
    h1: "Digital Marketing, SEO & Web Design Services in the Gold Coast",
    badge: "Gold Coast Growth Hub",
    heroDesc: "Attract more customers with web design, high-ROI Google Ads, and local search engine optimization on the Gold Coast.",
    introTitle: "Stunning Design Met with Performance Engineering on the Gold Coast",
    introText: "Digipeak is the Gold Coast's premier agency for high-performing websites and digital marketing. Serving businesses from Southport and Surfers Paradise to Burleigh Heads, we build beautiful, high-converting platforms and run targeted lead campaigns.",
    localContentTitle: "Tailored to the Gold Coast's Tourism, Hospitality & Real Estate Sectors",
    localContentText: "On the Gold Coast, visual appeal is crucial. We combine premium design aesthetics with clean code, offering local hotels, real estate agencies, and retailers visually striking websites that load instantly and convert visitors into leads.",
    seoBlockTitle: "Stand Out in Search Results with a Premier Gold Coast SEO Agency",
    seoBlockParas: [
      "To stand out in the competitive Gold Coast market, your business needs a strong search presence. Our Gold Coast SEO agency conducts technical keyword research, optimizes your local map rankings, and creates highly optimized content that ranks above competitors and drives traffic to your site.",
      "As a leading web design company on the Gold Coast, we ensure your site is built on a modern, fast tech stack. We combine search engine optimization with Google Ads campaigns and social media marketing to capture leads at every stage of the customer journey. We help you scale your business online."
    ],
    industries: [
      { name: "Tourism", iconName: "Palmtree" },
      { name: "Hospitality", iconName: "Utensils" },
      { name: "Real Estate", iconName: "Home" },
      { name: "Retail", iconName: "ShoppingBag" }
    ],
    faqs: [
      {
        question: "How does your Gold Coast web design agency make sites convert better?",
        answer: "We focus on clean layout structure, placing clear call-to-action buttons, optimization for mobile screens, and ensuring fast load speeds so you don't lose potential customers."
      },
      {
        question: "What is your approach to social media marketing on the Gold Coast?",
        answer: "We design engaging visual content and run targeted social media ad campaigns across Instagram, Facebook, and TikTok to build communities and capture high-intent leads."
      },
      {
        question: "How long does it take to rank on Google on the Gold Coast?",
        answer: "SEO is a medium-to-long term strategy. While technical site fixes can yield quick improvements, ranking for competitive local terms typically takes 3 to 6 months of consistent optimization."
      },
      {
        question: "Do you build custom real estate property listing sites?",
        answer: "Yes. We build custom real estate websites that connect directly with your property database, featuring quick search tools, interactive maps, and fast property tour pages."
      }
    ]
  },
  {
    slug: "canberra",
    name: "Canberra",
    metaTitle: "Digital Marketing, SEO & Web Design Agency Canberra | Digipeak",
    metaDescription: "Canberra's premier web design company, SEO agency, and B2B marketing specialist. Secure Next.js web design and government-compliant SEO.",
    keywords: [
      "Digital Marketing Agency Canberra", "SEO Agency Canberra", "SEO Company Canberra",
      "Web Design Company Canberra", "Website Design Canberra", "Creative Agency Canberra",
      "Branding Agency Canberra", "AI Agency Canberra", "AI Solutions Canberra",
      "Social Media Marketing Canberra", "Google Ads Agency Canberra", "Performance Marketing Canberra",
      "Lead Generation Services Canberra", "CRM Automation Canberra", "Business Automation Canberra",
      "E-Commerce Development Canberra"
    ],
    h1: "Digital Marketing, SEO & Web Design Services in Canberra",
    badge: "Canberra Growth Hub",
    heroDesc: "Deploy secure Next.js websites and data-driven B2B search engine optimization in Australia's capital.",
    introTitle: "Secure, High-Performance Web & SEO Solutions for Canberra B2B Brands",
    introText: "Digipeak serves Canberra's business and professional sectors with high-performance web assets. Helping companies in Civic, Barton, and Belconnen, we build secure web systems, configure automation pipelines, and run search campaigns that drive corporate lead acquisition.",
    localContentTitle: "Focused on Canberra's Professional Services, Tech & Public Sectors",
    localContentText: "Canberra requires websites that prioritize security, accessibility, and clean presentation. We build platforms using modern Next.js frameworks that meet strict performance and accessibility standards, helping consultants, technology partners, and firms present their services clearly.",
    seoBlockTitle: "Establish Long-Term Authority with Canberra's Top SEO Company",
    seoBlockParas: [
      "Securing B2B contract leads in Canberra requires a highly visible online presence. Our Canberra SEO company implements targeted search strategies, optimizing technical performance, producing authoritative content blocks, and deploying custom schema integrations to help you rank at the top of Google searches.",
      "As a premier web design company in Canberra, we keep all sites clean, fast, and free of bloated plugins. By combining custom coding with CRM automation tools, we make it simple to track leads and measure campaign success, ensuring you get a solid return on your marketing investment."
    ],
    industries: [
      { name: "Government", iconName: "Building" },
      { name: "Professional Services", iconName: "Briefcase" },
      { name: "Technology", iconName: "Cpu" },
      { name: "Education", iconName: "GraduationCap" }
    ],
    faqs: [
      {
        question: "How does your Canberra web design company approach security?",
        answer: "We build websites using headless Next.js architectures, which removes the database from the public web server, minimizing common web security risks and keeping your assets secure."
      },
      {
        question: "Do your Canberra websites meet accessibility standards?",
        answer: "Yes, we focus on clean markup, correct color contrast, keyboard-friendly navigation, and clear layout structure to ensure a highly accessible web experience."
      },
      {
        question: "What is your approach to B2B lead generation in Canberra?",
        answer: "We create targeted landing pages, build structured contact forms that connect directly with your CRM, and run optimized search campaigns to capture high-value corporate inquiries."
      },
      {
        question: "Can you help our Canberra consultancy automate client onboarding?",
        answer: "Yes. We set up automated email scheduling, connect contract signature tools to your site, and configure database workflows to help save your team time."
      }
    ]
  }
];
