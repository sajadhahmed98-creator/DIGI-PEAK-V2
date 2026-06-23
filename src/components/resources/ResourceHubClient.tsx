"use client";

import { useState, useEffect } from "react";
import { 
  Download, Search, ShieldAlert, CheckCircle, ArrowRight, X, FileText, Clock, BarChart2 
} from "lucide-react";

interface Resource {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  downloadType: string;
  downloadUrl: string;
  seoTitle: string;
  seoDescription: string;
  highIntent: boolean;
  readTime?: number;
  downloadCount?: number;
  categoryTags?: string[];
  isFeatured?: boolean;
  isPopular?: boolean;
}

interface ResourceHubClientProps {
  resources: Resource[];
  initialSlug?: string;
}

const CATEGORIES = [
  { id: "all", label: "All Templates" },
  { id: "seo", label: "SEO Checklists" },
  { id: "web-design", label: "Website Checklists" },
  { id: "branding", label: "Branding Templates" },
  { id: "marketing", label: "Marketing Templates" },
  { id: "content-planning", label: "Content Calendars" },
  { id: "social-media", label: "Social Media Kits" },
  { id: "ai-prompt-libraries", label: "AI Prompt Lists" },
  { id: "proposal-templates", label: "B2B Proposals" },
  { id: "business-growth", label: "Growth Guides" },
  { id: "crm-templates", label: "CRM Blueprint" },
  { id: "email-outreach", label: "Email Outreach" }
];

export function ResourceHubClient({ resources, initialSlug }: ResourceHubClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResources, setFilteredResources] = useState<Resource[]>(resources);
  const [activeModalResource, setActiveModalResource] = useState<Resource | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [gotcha, setGotcha] = useState("");
  
  const [emailWarning, setEmailWarning] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");
  const [startedEventFired, setStartedEventFired] = useState(false);

  // Track initialSlug for direct modal popup (landing page context)
  useEffect(() => {
    if (initialSlug) {
      const match = resources.find(r => r.slug === initialSlug);
      if (match) {
        setActiveModalResource(match);
      }
    }
  }, [initialSlug, resources]);

  // Filtering Logic
  useEffect(() => {
    let result = resources;
    if (selectedCategory !== "all") {
      result = result.filter(r => r.category === selectedCategory);
    }
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        r => r.title.toLowerCase().includes(query) || r.description.toLowerCase().includes(query)
      );
    }
    setFilteredResources(result);
  }, [selectedCategory, searchQuery, resources]);

  // GA4 dataLayer event helper
  const pushToDataLayer = (eventName: string, params: any) => {
    if (typeof window !== "undefined") {
      const windowWithDataLayer = window as any;
      windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || [];
      windowWithDataLayer.dataLayer.push({
        event: eventName,
        ...params
      });
      console.log(`[GA4 TRACKING] pushed dataLayer event: ${eventName}`, params);

      // Fallback directly to gtag event if exists
      if (windowWithDataLayer.gtag) {
        windowWithDataLayer.gtag("event", eventName, params);
      }
    }
  };

  const handleInputFocus = () => {
    if (!startedEventFired && activeModalResource) {
      setStartedEventFired(true);
      pushToDataLayer("resource_download_started", {
        resource_id: activeModalResource.id,
        resource_title: activeModalResource.title,
        resource_category: activeModalResource.category,
        resource_format: activeModalResource.downloadType
      });
    }
  };

  // Business Email Validation Rule (No fake/personal domains allowed)
  const validateBusinessEmail = (emailStr: string): boolean => {
    const personalDomains = [
      "gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com",
      "protonmail.com", "zoho.com", "icloud.com", "gmx.com", "yandex.com",
      "mail.com", "proton.me", "live.com", "msn.com", "fastmail.com"
    ];
    const domain = emailStr.split("@")[1]?.toLowerCase().trim();
    if (!domain) return false;
    return !personalDomains.includes(domain);
  };

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailWarning("");

    if (!name || !email) {
      alert("Please fill in your name and corporate email address.");
      return;
    }

    // Enforce Corporate Email
    if (!validateBusinessEmail(email)) {
      setEmailWarning("Please use your corporate work email (e.g., name@company.com) to download this B2B resource.");
      return;
    }

    if (!activeModalResource) return;
    setIsSubmitting(true);

    // Track Submitted Event
    pushToDataLayer("resource_download_submitted", {
      resource_id: activeModalResource.id,
      resource_title: activeModalResource.title,
      resource_category: activeModalResource.category,
      resource_format: activeModalResource.downloadType
    });

    const leadScoreVal = activeModalResource.highIntent ? "Hot" : "Warm";

    // Prepare Payload
    const payload = {
      name,
      email,
      company: company || "",
      website: website || "",
      service: "Resource Download",
      resourceName: activeModalResource.title,
      resourceCategory: activeModalResource.category,
      leadSource: `Resource Gated Form - ${activeModalResource.title}`,
      leadScore: leadScoreVal,
      details: `Client downloaded gated resource: ${activeModalResource.title}. Company: ${company || "Not provided"}, Website: ${website || "Not provided"}.`,
      _gotcha: gotcha
    };

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        // Track Completed Event
        pushToDataLayer("resource_download_completed", {
          resource_id: activeModalResource.id,
          resource_title: activeModalResource.title,
          resource_category: activeModalResource.category,
          resource_format: activeModalResource.downloadType
        });

        setSubmitSuccess(true);
        setDownloadLink(`/api/resources/${activeModalResource.slug}/download`);
      } else {
        alert("Failed to process request. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting gated lead:", err);
      alert("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStrategyCallClick = () => {
    if (activeModalResource) {
      pushToDataLayer("resource_strategy_call", {
        resource_id: activeModalResource.id,
        resource_title: activeModalResource.title,
        resource_category: activeModalResource.category,
        resource_format: activeModalResource.downloadType
      });
    }
  };

  const resetModal = () => {
    setActiveModalResource(null);
    setName("");
    setEmail("");
    setCompany("");
    setWebsite("");
    setEmailWarning("");
    setSubmitSuccess(false);
    setDownloadLink("");
    setStartedEventFired(false);
  };

  return (
    <div className="space-y-12">
      {/* Category Pills & Search Bar Column */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between border-b border-white/5 pb-8">
        
        {/* Category filtering list */}
        <div className="flex flex-wrap gap-2 w-full md:w-3/4">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-accent-primary border-transparent text-white shadow-[0_0_12px_rgba(168,85,247,0.25)]"
                  : "bg-white/5 border-white/10 text-muted hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Live Search Inputs */}
        <div className="relative w-full md:w-1/4">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-muted focus:border-accent-primary focus:outline-none transition-colors"
          />
        </div>

      </div>

      {/* Grid List */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(res => (
            <article 
              key={res.id}
              className="glass border border-white/5 rounded-2xl p-6 hover:border-accent-primary/20 transition-all group flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-white/[0.01] to-transparent"
            >
              {/* Featured glow background */}
              {res.isFeatured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/[0.03] rounded-full blur-[30px] pointer-events-none" />
              )}
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                    <span className="text-[9px] uppercase font-black text-accent-secondary tracking-wider bg-accent-secondary/[0.05] px-2.5 py-1 rounded">
                      {res.category.replace("-", " ")}
                    </span>
                    {res.isFeatured && (
                      <span className="text-[9px] uppercase font-black text-amber-400 tracking-wider bg-amber-400/[0.05] px-2.5 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <span className="text-[9px] font-bold text-white/50 border border-white/10 px-2 py-0.5 rounded">
                    {res.downloadType}
                  </span>
                </div>
                
                <h3 className="font-heading text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-accent-primary transition-colors">
                  {res.title}
                </h3>
                
                <p className="text-muted text-xs leading-relaxed line-clamp-3 mb-4">
                  {res.description}
                </p>

                {/* Read time and download count metadata */}
                <div className="flex items-center gap-4 text-[10px] text-slate-400 mb-6 pb-4 border-b border-white/5">
                  {res.readTime && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent-primary/80" />
                      {res.readTime} min read
                    </span>
                  )}
                  {res.downloadCount && (
                    <span className="flex items-center gap-1">
                      <BarChart2 className="w-3.5 h-3.5 text-accent-secondary/80" />
                      {res.downloadCount.toLocaleString()} downloads
                    </span>
                  )}
                </div>

                {/* Render Category tags if available */}
                {res.categoryTags && res.categoryTags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {res.categoryTags.map((tag, i) => (
                      <span key={i} className="text-[9px] font-medium text-slate-400 bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center border-t border-white/5 pt-4 mt-auto">
                <Link
                  href={`/resources/${res.slug}`}
                  className="text-xs text-muted hover:text-white transition-colors"
                >
                  SEO Page &rarr;
                </Link>
                <button
                  onClick={() => {
                    setStartedEventFired(false);
                    setActiveModalResource(res);
                  }}
                  className="bg-white/5 hover:bg-accent-primary hover:text-white border border-white/10 hover:border-transparent px-4 py-2 rounded-full text-xs font-bold text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_transparent] hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass border border-white/5 rounded-3xl">
          <p className="text-muted text-sm">No downloadable templates found matching your query.</p>
        </div>
      )}

      {/* Gated Modal Wrapper */}
      {activeModalResource && (
        <div className="fixed inset-0 bg-[#020308]/90 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div className="glass border border-accent-primary/20 w-full max-w-lg rounded-3xl p-8 relative overflow-hidden bg-gradient-to-b from-[#0c0d21] to-[#050816]">
            {/* Ambient orb */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent-primary/[0.03] rounded-full blur-[50px] pointer-events-none" />
            
            {/* Close Button */}
            <button 
              onClick={resetModal}
              className="absolute top-6 right-6 text-muted hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitSuccess ? (
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-accent-secondary">
                    <FileText className="w-4 h-4" />
                    Gated Resource Download ({activeModalResource.downloadType})
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Download: {activeModalResource.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed">
                    To maintain our B2B templates database, we require a valid corporate business email to download our growth resources.
                  </p>
                </div>

                <form onSubmit={handleDownloadSubmit} className="space-y-4">
                  <input type="text" name="_gotcha" value={gotcha} onChange={(e) => setGotcha(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
                  
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-white/70">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ahmed Al-Kuwari"
                      value={name}
                      onFocus={handleInputFocus}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-muted focus:border-accent-primary focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-white/70">Corporate Work Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@company.com"
                      value={email}
                      onFocus={handleInputFocus}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-xs text-white placeholder-muted focus:outline-none ${
                        emailWarning ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-accent-primary"
                      }`}
                    />
                    {emailWarning && (
                      <div className="flex items-center gap-1.5 text-red-400 text-[10px] font-medium pt-1 leading-relaxed">
                        <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{emailWarning}</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-white/70">Company Name (Optional)</label>
                      <input 
                        type="text" 
                        placeholder="Qatar Properties"
                        value={company}
                        onFocus={handleInputFocus}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-muted focus:border-accent-primary focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-white/70">Website URL (Optional)</label>
                      <input 
                        type="url" 
                        placeholder="https://company.com"
                        value={website}
                        onFocus={handleInputFocus}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-muted focus:border-accent-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-primary hover:bg-accent-glow disabled:bg-accent-primary/50 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-[0_0_20px_rgba(168,85,247,0.2)] mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Validating Work Email...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Download Resource
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-6 text-center py-6 relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 mb-2">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Resource Ready!</h3>
                <p className="text-muted text-xs leading-relaxed max-w-sm mx-auto">
                  Thank you! Your lead details have been registered. You can retrieve your template PDF immediately below. We also sent a confirmation link to your email.
                </p>
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href={downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    RETRIEVE PDF FILE
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`/book-session?source=resource&slug=${activeModalResource.slug}`}
                    onClick={handleStrategyCallClick}
                    className="w-full bg-[#1b1c3d] hover:bg-[#2c2d5e] border border-6366f1/30 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    Book a Free Strategy Call
                  </a>

                  <button
                    onClick={resetModal}
                    className="text-xs text-muted hover:text-white transition-colors cursor-pointer pt-2"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

// Link placeholder component for client side imports
function Link({ href, children, ...props }: any) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
