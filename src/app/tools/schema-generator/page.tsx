"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Code2, Copy, Check, Plus, Trash2, RefreshCw, Download, 
  HelpCircle, AlertTriangle, CheckCircle2, Info, Network, Calendar, ExternalLink
} from "lucide-react";

type SchemaType = 
  | "local_business"
  | "organization"
  | "faq"
  | "service"
  | "article"
  | "blog_posting"
  | "product"
  | "breadcrumb"
  | "review"
  | "person";

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function SchemaGeneratorPage() {
  const [schemaType, setSchemaType] = useState<SchemaType>("organization");
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [activeTab, setActiveTab] = useState<"code" | "graph">("code");

  // Track if initial generation has happened for analytics
  const hasGeneratedRef = useRef(false);

  // Validation state
  const [validationMessages, setValidationMessages] = useState<{ type: "error" | "warning"; message: string }[]>([]);

  // Form states per type
  // 1. Local Business
  const [lbName, setLbName] = useState("Digipeak Agency Doha");
  const [lbDesc, setLbDesc] = useState("Premium technical SEO and Next.js web development agency.");
  const [lbPhone, setLbPhone] = useState("+974 5555 1234");
  const [lbUrl, setLbUrl] = useState("https://www.digipeak.agency");
  const [lbStreet, setLbStreet] = useState("West Bay, Tower 3");
  const [lbCity, setLbCity] = useState("Doha");
  const [lbPostal, setLbPostal] = useState("00000");
  const [lbCountry, setLbCountry] = useState("QA");
  const [lbPriceRange, setLbPriceRange] = useState("$$$");
  const [lbImage, setLbImage] = useState("https://www.digipeak.agency/images/office.jpg");

  // 2. Organization
  const [orgName, setOrgName] = useState("Digipeak Agency");
  const [orgUrl, setOrgUrl] = useState("https://www.digipeak.agency");
  const [orgLogo, setOrgLogo] = useState("https://www.digipeak.agency/logo.png");
  const [orgSocial, setOrgSocial] = useState("https://www.linkedin.com/company/digipeakagencyglobal");
  const [orgEmail, setOrgEmail] = useState("hello@digipeak.agency");
  const [orgPhone, setOrgPhone] = useState("+971 50 123 4567");

  // 3. FAQ
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    { question: "What is your main service?", answer: "We build premium web designs and optimize speed and B2B schema indexing pipelines." }
  ]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  // 4. Service
  const [srvName, setSrvName] = useState("B2B Search Engine Optimization");
  const [srvDesc, setSrvDesc] = useState("Comprehensive technical audits, speed optimizations, and semantic schema architecture.");
  const [srvProvider, setSrvProvider] = useState("Digipeak Agency");
  const [srvArea, setSrvArea] = useState("Qatar & UAE");

  // 5. Article
  const [artHeadline, setArtHeadline] = useState("Mastering Next.js LCP Speed Optimization");
  const [artDesc, setArtDesc] = useState("How to defer render-blocking styles and improve mobile paint budgets under 1.2s.");
  const [artAuthor, setArtAuthor] = useState("Sajadh Ahmed");
  const [artPublisher, setArtPublisher] = useState("Digipeak");
  const [artLogo, setArtLogo] = useState("https://www.digipeak.agency/logo.png");
  const [artImage, setArtImage] = useState("https://www.digipeak.agency/images/blog-lcp.jpg");
  const [artDate, setArtDate] = useState("2026-06-21");

  // 6. Blog Posting
  const [blogHeadline, setBlogHeadline] = useState("The Future of Core Web Vitals in B2B Search");
  const [blogDesc, setBlogDesc] = useState("Why LCP and INP scores are now primary ranking filters for enterprise software search visibility.");
  const [blogAuthor, setBlogAuthor] = useState("Sajadh Ahmed");
  const [blogDate, setBlogDate] = useState("2026-06-21");
  const [blogImage, setBlogImage] = useState("https://www.digipeak.agency/images/blog-cwv.jpg");
  const [blogBody, setBlogBody] = useState("Core Web Vitals are a vital signal for search ranking algorithms. Here is what you need to change...");

  // 7. Product
  const [prodName, setProdName] = useState("Enterprise SEO Schema Accelerator Pack");
  const [prodImage, setProdImage] = useState("https://www.digipeak.agency/images/schema-pack.jpg");
  const [prodDesc, setProdDesc] = useState("Automated structured data generators and JSON-LD injection models for React frameworks.");
  const [prodBrand, setProdBrand] = useState("Digipeak");
  const [prodPrice, setProdPrice] = useState("1499.00");
  const [prodCurrency, setProdCurrency] = useState("USD");
  const [prodAvailability, setProdAvailability] = useState("InStock");

  // 8. Breadcrumbs
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { name: "Home", url: "https://www.digipeak.agency" },
    { name: "Tools", url: "https://www.digipeak.agency/tools" },
    { name: "Schema Generator", url: "https://www.digipeak.agency/tools/schema-generator" }
  ]);
  const [newCrumbName, setNewCrumbName] = useState("");
  const [newCrumbUrl, setNewCrumbUrl] = useState("");

  // 9. Review
  const [revItem, setRevItem] = useState("Next.js Custom Development Retainer");
  const [revAuthor, setRevAuthor] = useState("Sarah Jenkins");
  const [revRating, setRevRating] = useState(5);
  const [revBody, setRevBody] = useState("The custom styling and speed optimization raised our conversions by 42% in 90 days!");
  const [revDate, setRevDate] = useState("2026-06-15");

  // 10. Person
  const [personName, setPersonName] = useState("Sajadh Ahmed");
  const [personTitle, setPersonTitle] = useState("Founder");
  const [personOrg, setPersonOrg] = useState("Digipeak Agency");
  const [personUrl, setPersonUrl] = useState("https://www.digipeak.agency/author/sajadh-ahmed");
  const [personBio, setPersonBio] = useState("B2B growth strategist, UI/UX expert, and digital architect.");

  // JSON-LD dynamic compiler and validation logic
  useEffect(() => {
    let schemaObj: any = {};
    const msgs: { type: "error" | "warning"; message: string }[] = [];

    switch (schemaType) {
      case "local_business":
        schemaObj = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": lbUrl ? `${lbUrl}/#localbusiness` : undefined,
          "name": lbName,
          "description": lbDesc,
          "telephone": lbPhone,
          "url": lbUrl,
          "priceRange": lbPriceRange,
          "image": lbImage,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": lbStreet,
            "addressLocality": lbCity,
            "postalCode": lbPostal,
            "addressCountry": lbCountry
          }
        };
        // Validation checks
        if (!lbName) msgs.push({ type: "error", message: "'name' is required for LocalBusiness." });
        if (!lbPhone) msgs.push({ type: "warning", message: "'telephone' is highly recommended for LocalBusiness maps listings." });
        if (!lbStreet || !lbCity) msgs.push({ type: "warning", message: "A physical address helps Google index local map packs." });
        break;

      case "organization":
        schemaObj = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": orgUrl ? `${orgUrl}/#organization` : undefined,
          "name": orgName,
          "url": orgUrl,
          "logo": orgLogo,
          "contactPoint": (orgPhone || orgEmail) ? {
            "@type": "ContactPoint",
            "telephone": orgPhone || undefined,
            "email": orgEmail || undefined,
            "contactType": "customer service"
          } : undefined,
          "sameAs": orgSocial ? [orgSocial] : []
        };
        if (!orgName) msgs.push({ type: "error", message: "'name' is required for Organization." });
        if (!orgLogo) msgs.push({ type: "warning", message: "Providing a 'logo' image URL enables logo rich cards in brand search panels." });
        if (!orgUrl) msgs.push({ type: "error", message: "'url' is required for indexing organization references." });
        break;

      case "faq":
        schemaObj = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        };
        if (faqItems.length === 0) {
          msgs.push({ type: "error", message: "FAQ schema requires at least 1 question/answer entity." });
        }
        faqItems.forEach((f, i) => {
          if (!f.question) msgs.push({ type: "error", message: `Question ${i + 1} is empty.` });
          if (!f.answer) msgs.push({ type: "error", message: `Answer ${i + 1} is empty.` });
        });
        break;

      case "service":
        schemaObj = {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": srvName,
          "description": srvDesc,
          "provider": {
            "@type": "LocalBusiness",
            "name": srvProvider
          },
          "areaServed": srvArea ? {
            "@type": "State",
            "name": srvArea
          } : undefined
        };
        if (!srvName) msgs.push({ type: "error", message: "'serviceType' is required for Service schema." });
        if (!srvProvider) msgs.push({ type: "warning", message: "Specifying a 'provider' entity builds provider authority tags." });
        break;

      case "article":
        schemaObj = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": artHeadline,
          "description": artDesc,
          "image": artImage,
          "datePublished": artDate,
          "author": {
            "@type": "Person",
            "name": artAuthor
          },
          "publisher": {
            "@type": "Organization",
            "name": artPublisher,
            "logo": artLogo ? {
              "@type": "ImageObject",
              "url": artLogo
            } : undefined
          }
        };
        if (!artHeadline) msgs.push({ type: "error", message: "'headline' is required for Article rich cards." });
        if (!artImage) msgs.push({ type: "warning", message: "An 'image' URL is required for Google Discover and mobile thumbnail layout." });
        if (!artDate) msgs.push({ type: "warning", message: "'datePublished' helps search crawlers identify content freshnesh." });
        break;

      case "blog_posting":
        schemaObj = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blogHeadline,
          "description": blogDesc,
          "image": blogImage,
          "datePublished": blogDate,
          "author": {
            "@type": "Person",
            "name": blogAuthor
          },
          "articleBody": blogBody
        };
        if (!blogHeadline) msgs.push({ type: "error", message: "'headline' is required for BlogPosting." });
        if (!blogImage) msgs.push({ type: "warning", message: "Thumbnail 'image' link is missing. Critical for Google News listings." });
        break;

      case "product":
        schemaObj = {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": prodName,
          "image": prodImage,
          "description": prodDesc,
          "brand": {
            "@type": "Brand",
            "name": prodBrand
          },
          "offers": {
            "@type": "Offer",
            "price": prodPrice,
            "priceCurrency": prodCurrency,
            "availability": `https://schema.org/${prodAvailability}`
          }
        };
        if (!prodName) msgs.push({ type: "error", message: "'name' is required for Product." });
        if (!prodPrice || isNaN(parseFloat(prodPrice))) msgs.push({ type: "error", message: "Offer price must be a valid numeric representation." });
        break;

      case "breadcrumb":
        schemaObj = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs.map((crumb, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
              "@id": crumb.url,
              "name": crumb.name
            }
          }))
        };
        if (breadcrumbs.length < 2) {
          msgs.push({ type: "warning", message: "BreadcrumbLists should typically contain at least 2 hierarchy levels." });
        }
        break;

      case "review":
        schemaObj = {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Thing",
            "name": revItem
          },
          "author": {
            "@type": "Person",
            "name": revAuthor
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": revRating,
            "bestRating": "5"
          },
          "reviewBody": revBody,
          "datePublished": revDate
        };
        if (!revItem) msgs.push({ type: "error", message: "'itemReviewed' name is required." });
        if (revRating < 1 || revRating > 5) msgs.push({ type: "error", message: "Review rating must reside between 1 and 5." });
        break;

      case "person":
        schemaObj = {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": personUrl ? `${personUrl}/#person` : undefined,
          "name": personName,
          "jobTitle": personTitle,
          "worksFor": personOrg ? {
            "@type": "Organization",
            "name": personOrg
          } : undefined,
          "url": personUrl,
          "description": personBio
        };
        if (!personName) msgs.push({ type: "error", message: "'name' is required for Person profile structures." });
        break;
    }

    const code = `<script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n</script>`;
    setGeneratedCode(code);
    setValidationMessages(msgs);

    // Track schema generated (with debounce/flag checks to avoid cluttering dataLayer on every character press)
    if (!hasGeneratedRef.current) {
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: "schema_generated", schema_type: schemaType });
      }
      hasGeneratedRef.current = true;
    }

  }, [
    schemaType, lbName, lbDesc, lbPhone, lbUrl, lbStreet, lbCity, lbPostal, lbCountry, lbPriceRange, lbImage,
    orgName, orgUrl, orgLogo, orgSocial, orgEmail, orgPhone,
    faqItems, srvName, srvDesc, srvProvider, srvArea,
    artHeadline, artDesc, artAuthor, artPublisher, artLogo, artImage, artDate,
    blogHeadline, blogDesc, blogAuthor, blogDate, blogImage, blogBody,
    prodName, prodImage, prodDesc, prodBrand, prodPrice, prodCurrency, prodAvailability,
    breadcrumbs, revItem, revAuthor, revRating, revBody, revDate,
    personName, personTitle, personOrg, personUrl, personBio
  ]);

  // Reset generated flag when category changes to allow re-triggering analytics track
  useEffect(() => {
    hasGeneratedRef.current = false;
  }, [schemaType]);

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // Track export event
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "schema_exported", export_method: "copy", schema_type: schemaType });
    }
  };

  const downloadCode = () => {
    const blob = new Blob([generatedCode], { type: "application/ld+json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${schemaType}-schema.jsonld`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);

    // Track export event
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "schema_exported", export_method: "download", schema_type: schemaType });
    }
  };

  const trackStrategyCall = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "schema_strategy_call", schema_type: schemaType });
    }
  };

  const addFAQ = () => {
    if (!newQuestion || !newAnswer) return;
    setFaqItems([...faqItems, { question: newQuestion, answer: newAnswer }]);
    setNewQuestion("");
    setNewAnswer("");
  };

  const removeFAQ = (idx: number) => {
    setFaqItems(faqItems.filter((_, i) => i !== idx));
  };

  const addBreadcrumb = () => {
    if (!newCrumbName || !newCrumbUrl) return;
    setBreadcrumbs([...breadcrumbs, { name: newCrumbName, url: newCrumbUrl }]);
    setNewCrumbName("");
    setNewCrumbUrl("");
  };

  const removeBreadcrumb = (idx: number) => {
    setBreadcrumbs(breadcrumbs.filter((_, i) => i !== idx));
  };

  const resetFields = () => {
    // Local business reset
    setLbName("Digipeak Agency Doha");
    setLbDesc("Premium technical SEO and Next.js web development agency.");
    setLbPhone("+974 5555 1234");
    setLbUrl("https://www.digipeak.agency");
    setLbStreet("West Bay, Tower 3");
    setLbCity("Doha");
    setLbPostal("00000");
    setLbCountry("QA");
    setLbPriceRange("$$$");
    setLbImage("https://www.digipeak.agency/images/office.jpg");

    // Organization reset
    setOrgName("Digipeak Agency");
    setOrgUrl("https://www.digipeak.agency");
    setOrgLogo("https://www.digipeak.agency/logo.png");
    setOrgSocial("https://www.linkedin.com/company/digipeakagencyglobal");
    setOrgEmail("hello@digipeak.agency");
    setOrgPhone("+971 50 123 4567");

    // FAQ reset
    setFaqItems([{ question: "What is your main service?", answer: "We build premium web designs and optimize speed and B2B schema indexing pipelines." }]);
    
    // Service reset
    setSrvName("B2B Search Engine Optimization");
    setSrvDesc("Comprehensive technical audits, speed optimizations, and semantic schema architecture.");
    setSrvProvider("Digipeak Agency");
    setSrvArea("Qatar & UAE");

    // Article reset
    setArtHeadline("Mastering Next.js LCP Speed Optimization");
    setArtDesc("How to defer render-blocking styles and improve mobile paint budgets under 1.2s.");
    setArtAuthor("Sajadh Ahmed");
    setArtPublisher("Digipeak");
    setArtLogo("https://www.digipeak.agency/logo.png");
    setArtImage("https://www.digipeak.agency/images/blog-lcp.jpg");
    setArtDate("2026-06-21");

    // Blog reset
    setBlogHeadline("The Future of Core Web Vitals in B2B Search");
    setBlogDesc("Why LCP and INP scores are now primary ranking filters for enterprise software search visibility.");
    setBlogAuthor("Sajadh Ahmed");
    setBlogDate("2026-06-21");
    setBlogImage("https://www.digipeak.agency/images/blog-cwv.jpg");
    setBlogBody("Core Web Vitals are a vital signal for search ranking algorithms. Here is what you need to change...");

    // Product reset
    setProdName("Enterprise SEO Schema Accelerator Pack");
    setProdImage("https://www.digipeak.agency/images/schema-pack.jpg");
    setProdDesc("Automated structured data generators and JSON-LD injection models for React frameworks.");
    setProdBrand("Digipeak");
    setProdPrice("1499.00");
    setProdCurrency("USD");
    setProdAvailability("InStock");

    // Breadcrumbs reset
    setBreadcrumbs([
      { name: "Home", url: "https://www.digipeak.agency" },
      { name: "Tools", url: "https://www.digipeak.agency/tools" },
      { name: "Schema Generator", url: "https://www.digipeak.agency/tools/schema-generator" }
    ]);

    // Review reset
    setRevItem("Next.js Custom Development Retainer");
    setRevAuthor("Sarah Jenkins");
    setRevRating(5);
    setRevBody("The custom styling and speed optimization raised our conversions by 42% in 90 days!");
    setRevDate("2026-06-15");

    // Person reset
    setPersonName("Sajadh Ahmed");
    setPersonTitle("Founder");
    setPersonOrg("Digipeak Agency");
    setPersonUrl("https://www.digipeak.agency/author/sajadh-ahmed");
    setPersonBio("B2B growth strategist, UI/UX expert, and digital architect.");
  };

  // Helper component to display Schema Graph nodes recursively
  const renderGraphNode = (key: string, value: any, depth = 0) => {
    const indentClass = depth === 0 ? "" : "pl-4 border-l border-white/5 ml-2";

    if (value === null || value === undefined) return null;

    if (typeof value === "object" && !Array.isArray(value)) {
      return (
        <div key={key} className={`${indentClass} py-1 text-xs space-y-1`}>
          <div className="flex items-center gap-1.5 text-accent-primary font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
            <span>{key}:</span>
            {value["@type"] && <span className="text-[10px] bg-accent-primary/[0.03] border border-accent-primary/20 text-accent-primary px-1.5 py-0.5 rounded-full font-mono font-medium">{value["@type"]}</span>}
          </div>
          <div className="space-y-1">
            {Object.keys(value).map(k => {
              if (k === "@type") return null;
              return renderGraphNode(k, value[k], depth + 1);
            })}
          </div>
        </div>
      );
    }

    if (Array.isArray(value)) {
      return (
        <div key={key} className={`${indentClass} py-1 text-xs space-y-1`}>
          <span className="text-accent-secondary font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
            {key} (Array[{value.length}])
          </span>
          <div className="space-y-2 pl-2 border-l border-white/5">
            {value.map((val, idx) => renderGraphNode(`[${idx}]`, val, depth + 1))}
          </div>
        </div>
      );
    }

    // Leaf nodes
    const isSpecial = key.startsWith("@");
    const valColor = isSpecial ? "text-accent-primary" : "text-emerald-400";
    return (
      <div key={key} className={`${indentClass} py-1 flex flex-wrap gap-1 items-baseline font-mono text-[11px]`}>
        <span className="text-muted font-bold mr-1">{key}:</span>
        <span className={`${valColor} truncate max-w-xs md:max-w-md`}>
          {typeof value === "string" ? `"${value}"` : String(value)}
        </span>
      </div>
    );
  };

  // Convert script LD-JSON code back to object for visual tree rendering
  const getParsedSchemaObj = () => {
    try {
      const match = generatedCode.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
      if (match && match[1]) {
        return JSON.parse(match[1]);
      }
    } catch (e) {
      return null;
    }
    return null;
  };

  const parsedObj = getParsedSchemaObj();

  return (
    <div className="relative min-h-screen bg-[#020203] text-white pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[-5%] w-[500px] h-[500px] bg-accent-primary/[0.015] rounded-full blur-[140px]" />
        <div className="absolute bottom-[15%] left-[-5%] w-[450px] h-[450px] bg-accent-secondary/[0.015] rounded-full blur-[125px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        
        {/* Navigation & Reset */}
        <div className="flex items-center justify-between border-b border-white/5 pb-6">
          <div className="flex items-center gap-4">
            <Link href="/tools" className="glass hover:bg-white/5 border border-white/10 p-3 rounded-xl text-muted hover:text-white transition-all">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-heading text-3xl font-black tracking-tight">
                Schema Generator <span className="text-gradient-secondary">Pro</span>
              </h1>
              <p className="text-sm text-muted">Model 10 distinct schema types in real-time. Full rich snippets validation.</p>
            </div>
          </div>
          <button 
            onClick={resetFields}
            className="glass hover:bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-bold text-muted hover:text-white flex items-center gap-2 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" /> Reset Form
          </button>
        </div>

        {/* Categories Carousel */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-wider text-muted block">Select Schema Template</label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "local_business", label: "Local Business" },
              { id: "organization", label: "Organization" },
              { id: "faq", label: "FAQ Page" },
              { id: "service", label: "Service" },
              { id: "article", label: "Article" },
              { id: "blog_posting", label: "Blog Posting" },
              { id: "product", label: "Product" },
              { id: "breadcrumb", label: "Breadcrumb" },
              { id: "review", label: "Review" },
              { id: "person", label: "Person Profile" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSchemaType(cat.id as SchemaType)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  schemaType === cat.id
                    ? "bg-accent-secondary text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 border border-white/10 text-muted hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Validation Dashboard Banner */}
        <div className={`p-4 rounded-2xl border ${
          validationMessages.some(m => m.type === "error") 
            ? "bg-rose-500/5 border-rose-500/20 text-rose-400" 
            : validationMessages.length > 0 
              ? "bg-amber-500/5 border-amber-500/20 text-amber-400"
              : "bg-emerald-500/5 border-emerald-500/20 text-emerald-400"
        } flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs`}>
          <div className="flex items-center gap-3">
            {validationMessages.some(m => m.type === "error") ? (
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            ) : validationMessages.length > 0 ? (
              <Info className="w-5 h-5 flex-shrink-0" />
            ) : (
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            )}
            <div>
              <span className="font-bold uppercase tracking-wider block">
                {validationMessages.some(m => m.type === "error") 
                  ? "Schema Validation Failed" 
                  : validationMessages.length > 0 
                    ? "Valid with optimization recommendations"
                    : "Lighthouse Schema Validated"}
              </span>
              <p className="text-[11px] text-muted">
                {validationMessages.length > 0 
                  ? `${validationMessages.length} suggestions identified` 
                  : "Syntax matches Google Rich Snippets requirements."}
              </p>
            </div>
          </div>
          {validationMessages.length > 0 && (
            <div className="flex flex-col gap-1.5 pl-8 md:pl-0">
              {validationMessages.slice(0, 2).map((msg, i) => (
                <span key={i} className="text-[10px] leading-tight block">
                  • {msg.message}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: FORM INPUT BUILDER PANEL */}
          <div className="lg:col-span-6 glass border border-white/5 rounded-3xl p-6 md:p-8 space-y-6">
            
            <h3 className="font-heading text-base font-bold text-white border-b border-white/5 pb-4 uppercase tracking-wider">
              {schemaType.replace("_", " ")} Specifications
            </h3>

            <div className="space-y-4">
              
              {/* Local Business form */}
              {schemaType === "local_business" && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Business Name</label>
                    <input type="text" value={lbName} onChange={e => setLbName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent-secondary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Website URL</label>
                    <input type="url" value={lbUrl} onChange={e => setLbUrl(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent-secondary" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Telephone</label>
                      <input type="text" value={lbPhone} onChange={e => setLbPhone(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Price Range</label>
                      <input type="text" value={lbPriceRange} onChange={e => setLbPriceRange(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Business Showcase Image URL</label>
                    <input type="text" value={lbImage} onChange={e => setLbImage(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="border-t border-white/5 pt-4 space-y-3">
                    <span className="text-[10px] font-bold text-accent-secondary uppercase block">Physical Address Details</span>
                    <div className="space-y-2">
                      <input type="text" placeholder="Street Address" value={lbStreet} onChange={e => setLbStreet(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" />
                      <div className="grid grid-cols-3 gap-2">
                        <input type="text" placeholder="City" value={lbCity} onChange={e => setLbCity(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white" />
                        <input type="text" placeholder="Postal Code" value={lbPostal} onChange={e => setLbPostal(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white" />
                        <input type="text" placeholder="Country Code" value={lbCountry} onChange={e => setLbCountry(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Organization Form */}
              {schemaType === "organization" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Organization Name</label>
                      <input type="text" value={orgName} onChange={e => setOrgName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Website URL</label>
                      <input type="url" value={orgUrl} onChange={e => setOrgUrl(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Logo Image URL</label>
                    <input type="text" value={orgLogo} onChange={e => setOrgLogo(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Social Media Profile Link</label>
                    <input type="text" value={orgSocial} onChange={e => setOrgSocial(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Customer Service Email</label>
                      <input type="email" value={orgEmail} onChange={e => setOrgEmail(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Support Phone Number</label>
                      <input type="text" value={orgPhone} onChange={e => setOrgPhone(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                  </div>
                </div>
              )}

              {/* FAQ Form */}
              {schemaType === "faq" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Accordion List</label>
                    <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
                      {faqItems.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl text-xs">
                          <div>
                            <strong className="text-white block">Q: {item.question}</strong>
                            <span className="text-muted block mt-1">A: {item.answer}</span>
                          </div>
                          <button onClick={() => removeFAQ(idx)} className="text-rose-400 hover:text-rose-300 cursor-pointer">
                            <Trash2 className="w-4.5 h-4.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-white/5 bg-white/[0.01] p-4 rounded-xl space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-secondary block">Add FAQ Row</span>
                    <input type="text" placeholder="Question" value={newQuestion} onChange={e => setNewQuestion(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" />
                    <input type="text" placeholder="Answer" value={newAnswer} onChange={e => setNewAnswer(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" />
                    <button onClick={addFAQ} className="bg-white/5 border border-white/10 hover:bg-white/10 text-[10px] font-bold uppercase px-4 py-2 rounded-lg text-white transition-all cursor-pointer flex items-center gap-1">
                      <Plus className="w-3.5 h-3.5" /> Add Row
                    </button>
                  </div>
                </div>
              )}

              {/* Service Form */}
              {schemaType === "service" && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Service Name</label>
                    <input type="text" value={srvName} onChange={e => setSrvName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Service Description</label>
                    <textarea value={srvDesc} onChange={e => setSrvDesc(e.target.value)} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Provider Company</label>
                      <input type="text" value={srvProvider} onChange={e => setSrvProvider(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Served Area / City</label>
                      <input type="text" value={srvArea} onChange={e => setSrvArea(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                  </div>
                </div>
              )}

              {/* Article Form */}
              {schemaType === "article" && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Article Headline</label>
                    <input type="text" value={artHeadline} onChange={e => setArtHeadline(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Short Description</label>
                    <input type="text" value={artDesc} onChange={e => setArtDesc(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Author Name</label>
                      <input type="text" value={artAuthor} onChange={e => setArtAuthor(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Date Published</label>
                      <input type="date" value={artDate} onChange={e => setArtDate(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Featured Image URL</label>
                    <input type="text" value={artImage} onChange={e => setArtImage(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Publisher Organization</label>
                      <input type="text" value={artPublisher} onChange={e => setArtPublisher(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Publisher Logo URL</label>
                      <input type="text" value={artLogo} onChange={e => setArtLogo(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                  </div>
                </div>
              )}

              {/* Blog Posting Form */}
              {schemaType === "blog_posting" && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Post Headline</label>
                    <input type="text" value={blogHeadline} onChange={e => setBlogHeadline(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Post Author</label>
                      <input type="text" value={blogAuthor} onChange={e => setBlogAuthor(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Date Published</label>
                      <input type="date" value={blogDate} onChange={e => setBlogDate(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Thumbnail Image URL</label>
                    <input type="text" value={blogImage} onChange={e => setBlogImage(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Excerpt / Core Body Text</label>
                    <textarea value={blogBody} onChange={e => setBlogBody(e.target.value)} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                </div>
              )}

              {/* Product Form */}
              {schemaType === "product" && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Product Name</label>
                    <input type="text" value={prodName} onChange={e => setProdName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Brand Name</label>
                      <input type="text" value={prodBrand} onChange={e => setProdBrand(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Product Image URL</label>
                      <input type="text" value={prodImage} onChange={e => setProdImage(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Product Description</label>
                    <textarea value={prodDesc} onChange={e => setProdDesc(e.target.value)} rows={2} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Price</label>
                      <input type="text" value={prodPrice} onChange={e => setProdPrice(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Currency</label>
                      <input type="text" value={prodCurrency} onChange={e => setProdCurrency(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Availability</label>
                      <select value={prodAvailability} onChange={e => setProdAvailability(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white bg-black focus:outline-none">
                        <option value="InStock">In Stock</option>
                        <option value="OutOfStock">Out of Stock</option>
                        <option value="PreOrder">Pre-Order</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Breadcrumb Form */}
              {schemaType === "breadcrumb" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Breadcrumb Hierarchy</label>
                    <div className="space-y-1 max-h-[250px] overflow-y-auto pr-1">
                      {breadcrumbs.map((crumb, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-white/5 border border-white/10 rounded-xl text-xs">
                          <div>
                            <span className="text-white font-bold">{idx + 1}. {crumb.name}</span>
                            <span className="text-muted block text-[10px] mt-0.5">{crumb.url}</span>
                          </div>
                          <button onClick={() => removeBreadcrumb(idx)} className="text-rose-400 hover:text-rose-300 cursor-pointer">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-white/5 bg-white/[0.01] p-4 rounded-xl space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-secondary block">Add Breadcrumb Node</span>
                    <div className="grid grid-cols-2 gap-2">
                      <input type="text" placeholder="Page Name" value={newCrumbName} onChange={e => setNewCrumbName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" />
                      <input type="text" placeholder="Page URL" value={newCrumbUrl} onChange={e => setNewCrumbUrl(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white" />
                    </div>
                    <button onClick={addBreadcrumb} className="bg-white/5 border border-white/10 hover:bg-white/10 text-[10px] font-bold uppercase px-4 py-2 rounded-lg text-white transition-all cursor-pointer flex items-center gap-1">
                      <Plus className="w-3.5 h-3.5" /> Add Crumb
                    </button>
                  </div>
                </div>
              )}

              {/* Review Form */}
              {schemaType === "review" && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Item / Service Reviewed</label>
                    <input type="text" value={revItem} onChange={e => setRevItem(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Reviewer Name</label>
                      <input type="text" value={revAuthor} onChange={e => setRevAuthor(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Rating (1-5)</label>
                      <input type="number" min="1" max="5" value={revRating} onChange={e => setRevRating(Number(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Review Date</label>
                    <input type="date" value={revDate} onChange={e => setRevDate(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Review Excerpt</label>
                    <textarea value={revBody} onChange={e => setRevBody(e.target.value)} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                </div>
              )}

              {/* Person Form */}
              {schemaType === "person" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Full Name</label>
                      <input type="text" value={personName} onChange={e => setPersonName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Job Title</label>
                      <input type="text" value={personTitle} onChange={e => setPersonTitle(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Organization</label>
                      <input type="text" value={personOrg} onChange={e => setPersonOrg(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Profile Link</label>
                      <input type="url" value={personUrl} onChange={e => setPersonUrl(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Professional Biography</label>
                    <textarea value={personBio} onChange={e => setPersonBio(e.target.value)} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none" />
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* RIGHT: JSON-LD CODE PREVIEW & GRAPH VISUALIZATION */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* View Selection tabs */}
            <div className="flex items-center justify-between">
              <div className="flex border-b border-white/5 text-xs">
                <button
                  onClick={() => setActiveTab("code")}
                  className={`px-4 py-2 font-bold transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 ${
                    activeTab === "code" ? "text-accent-secondary border-accent-secondary" : "text-muted border-transparent hover:text-white"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" /> JSON-LD Code
                </button>
                <button
                  onClick={() => setActiveTab("graph")}
                  className={`px-4 py-2 font-bold transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 ${
                    activeTab === "graph" ? "text-accent-secondary border-accent-secondary" : "text-muted border-transparent hover:text-white"
                  }`}
                >
                  <Network className="w-3.5 h-3.5" /> Schema Graph
                </button>
              </div>

              {/* Copy/Download buttons */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={copyCode}
                  className="glass border border-white/10 hover:border-white/20 p-2.5 rounded-xl text-muted hover:text-white transition-all cursor-pointer"
                  title="Copy JSON-LD"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <button 
                  onClick={downloadCode}
                  className="glass border border-white/10 hover:border-white/20 p-2.5 rounded-xl text-muted hover:text-white transition-all cursor-pointer"
                  title="Download JSON-LD"
                >
                  {downloaded ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Code Panel */}
            {activeTab === "code" && (
              <div className="relative rounded-3xl border border-white/5 bg-[#080b1e] p-6 max-h-[500px] overflow-auto text-xs font-mono text-emerald-400 leading-relaxed scroll-smooth digiai-scrollbar">
                <pre className="whitespace-pre-wrap">{generatedCode}</pre>
              </div>
            )}

            {/* Graph Visualizer Panel */}
            {activeTab === "graph" && (
              <div className="rounded-3xl border border-white/5 bg-[#080b1e] p-6 max-h-[500px] overflow-auto scroll-smooth digiai-scrollbar space-y-4">
                <div className="flex items-center justify-between text-xs text-muted border-b border-white/5 pb-2">
                  <span>Visual Nodes Schema Graph</span>
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded font-mono">Structured Tree</span>
                </div>
                <div className="space-y-2">
                  {parsedObj ? (
                    Object.keys(parsedObj).map(key => renderGraphNode(key, parsedObj[key]))
                  ) : (
                    <span className="text-xs text-muted">No schema tree available.</span>
                  )}
                </div>
              </div>
            )}

            {/* Need Help Implementing Schema CTA Card */}
            <div className="glass border border-accent-secondary/30 rounded-3xl p-6 bg-gradient-to-r from-[#0c142b] to-[#020203] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center sm:text-left">
                <h4 className="font-heading font-black text-sm uppercase text-white">Need help implementing schema?</h4>
                <p className="text-xs text-muted leading-relaxed max-w-md">
                  Injecting structured JSON-LD into client-side React frameworks, sitemaps, or regional RTL pages can be complex. Let Digipeak engineers configure it for you.
                </p>
              </div>
              <Link 
                href="/contact?service=technical-seo"
                onClick={trackStrategyCall}
                className="btn-primary px-6 py-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-transform cursor-pointer"
              >
                Book a Strategy Call
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
