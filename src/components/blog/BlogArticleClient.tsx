"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { 
  Calendar, Clock, ArrowLeft, Share2, Copy, Check, MessageSquare, Send, Mail, Sparkles, Download 
} from "lucide-react";
import resourcesData from "@/data/resources.json";

interface FAQ {
  question: string;
  answer: string;
}

interface Post {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
    profileLink: string;
  };
  body: string;
  faqs?: FAQ[];
}

export function BlogArticleClient({ post, relatedPosts }: { post: Post; relatedPosts: Post[] }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [headings, setHeadings] = useState<{ title: string; id: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  // Find category-matched lead magnet resource
  const getLeadMagnet = () => {
    let matchedSlug = "";
    if (post.category === "seo") {
      matchedSlug = "gcc-local-seo-checklist";
    } else if (post.category === "web-performance" || post.category === "web-design") {
      matchedSlug = "website-launch-checklist";
    } else if (post.category === "ai-solutions") {
      matchedSlug = "sales-pipeline-automation-crm-blueprint";
    }
    return resourcesData.find(r => r.slug === matchedSlug);
  };
  
  const leadMagnet = getLeadMagnet();

  // Extract headings from HTML string for TOC
  useEffect(() => {
    const rawHtml = post.body;
    const headingRegex = /<(h2|h3)>(.*?)<\/\1>/g;
    const extracted: { title: string; id: string; level: number }[] = [];
    let match;
    
    while ((match = headingRegex.exec(rawHtml)) !== null) {
      const level = match[1] === "h2" ? 2 : 3;
      const title = match[2].replace(/<[^>]*>/g, ""); // strip inner HTML tags
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      extracted.push({ title, id, level });
    }
    setHeadings(extracted);
  }, [post.body]);

  // Handle scroll progress and active heading highlight
  useEffect(() => {
    const handleScroll = () => {
      // 1. Reading Progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 2. Active Heading Highlight
      const headingElements = headings.map((h) => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
      let currentActive = "";
      
      for (const el of headingElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          currentActive = el.id;
        } else {
          break;
        }
      }
      setActiveId(currentActive || (headings[0]?.id || ""));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const copyToClipboard = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pre-process body to inject ids into h2 and h3 elements dynamically
  const getProcessedBody = () => {
    let processed = post.body;
    processed = processed.replace(/<h2>(.*?)<\/h2>/g, (_, title) => {
      const id = title.replace(/<[^>]*>/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return `<h2 id="${id}" class="font-heading text-2xl md:text-3xl font-bold text-white mt-12 mb-6 scroll-mt-28 border-l-4 border-accent-primary pl-4 py-1">${title}</h2>`;
    });
    processed = processed.replace(/<h3>(.*?)<\/h3>/g, (_, title) => {
      const id = title.replace(/<[^>]*>/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return `<h3 id="${id}" class="font-heading text-xl font-semibold text-white mt-8 mb-4 scroll-mt-28">${title}</h3>`;
    });
    return processed;
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      {/* Dynamic Reading Progress Bar */}
      <div 
        className="fixed top-[80px] left-0 h-1 bg-gradient-to-r from-accent-primary via-accent-glow to-accent-secondary z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Decorative Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-10 w-[500px] h-[500px] bg-accent-primary/[0.015] rounded-full blur-[140px]" />
        <div className="absolute top-[60%] right-10 w-[400px] h-[400px] bg-accent-secondary/[0.015] rounded-full blur-[120px]" />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Knowledge Hub
        </Link>

        {/* Hero Meta Section */}
        <section className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/[0.03] px-4 py-1.5 text-xs font-semibold text-accent-secondary mb-6 capitalize">
            {post.category.replace("-", " ")}
          </div>
          <h1 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-8">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 border-y border-white/5 py-6">
            <div className="flex items-center gap-6 flex-wrap text-xs text-muted">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Published: {post.publishedDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Sharing buttons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all cursor-pointer border border-white/10"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Copied URL!
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    Share Article
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Two-Column Reader Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* STICKY TABLE OF CONTENTS (Sidebar) */}
          <aside className="lg:col-span-3 hidden lg:block sticky top-28 self-start max-h-[80vh] overflow-y-auto pr-4 digiai-scrollbar">
            <h4 className="font-heading font-bold text-sm tracking-wide text-white uppercase mb-4">Table Of Contents</h4>
            <div className="w-8 h-1 bg-accent-primary rounded-full mb-6" />
            <nav className="space-y-3 text-xs" aria-label="Table of contents">
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className={`block transition-all hover:text-white leading-relaxed ${
                    h.level === 3 ? "pl-4 text-[11px]" : "font-medium"
                  } ${
                    activeId === h.id 
                      ? "text-accent-primary border-l border-accent-primary pl-2 font-bold" 
                      : "text-muted"
                  }`}
                >
                  {h.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* MAIN ARTICLE BODY CONTENT */}
          <article className="lg:col-span-6 space-y-12">
            {/* MOBILE COLLAPSIBLE TOC */}
            {headings.length > 0 && (
              <div className="lg:hidden mb-2">
                <details className="glass border border-white/10 rounded-xl group overflow-hidden bg-white/[0.02]">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-heading font-bold text-sm text-white select-none list-none [&::-webkit-details-marker]:hidden">
                    Table Of Contents
                    <svg className="w-4 h-4 transition-transform group-open:rotate-180 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 border-t border-white/5 pt-4">
                    <nav className="space-y-3 text-xs max-h-[50vh] overflow-y-auto digiai-scrollbar pr-2" aria-label="Mobile Table of contents">
                      {headings.map((h) => (
                        <a
                          key={`mob-${h.id}`}
                          href={`#${h.id}`}
                          className={`block transition-all hover:text-white leading-relaxed ${
                            h.level === 3 ? "pl-4 text-[11px]" : "font-medium"
                          } ${
                            activeId === h.id 
                              ? "text-accent-primary border-l-2 border-accent-primary pl-2 font-bold" 
                              : "text-muted border-l-2 border-transparent pl-2"
                          }`}
                        >
                          {h.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                </details>
              </div>
            )}

            <div 
              ref={contentRef}
              className="prose prose-invert max-w-none text-muted leading-relaxed space-y-6 text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: getProcessedBody() }}
            />

            {/* In-content Gated Lead Magnet Card (Smart Category Matching) */}
            {leadMagnet && (
              <div className="glass border border-accent-primary/20 rounded-2xl p-6 relative overflow-hidden bg-gradient-to-r from-[#0d0e25] to-[#050816] mb-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/[0.015] rounded-full blur-[30px] pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-accent-primary tracking-widest block">Free Resource Asset ({leadMagnet.downloadType})</span>
                    <h4 className="font-heading font-bold text-white text-base">{leadMagnet.title}</h4>
                    <p className="text-muted text-xs leading-relaxed max-w-md">
                      Accelerate your B2B conversions. Download this verified growth template instantly.
                    </p>
                  </div>
                  <Link 
                    href={`/resources/${leadMagnet.slug}`}
                    className="bg-accent-primary hover:bg-accent-glow font-bold text-xs uppercase tracking-wider text-white px-5 py-3.5 rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-colors shadow-[0_0_15px_rgba(168,85,247,0.2)] cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download Free
                  </Link>
                </div>
              </div>
            )}

            {/* In-content WhatsApp Conversion CTA Card */}
            <div className="glass border border-accent-secondary/20 rounded-2xl p-6 relative overflow-hidden bg-gradient-to-r from-[#07111e] to-[#050816]">
              <div className="absolute inset-0 bg-radial-gradient from-[#3b82f6]/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h4 className="font-heading font-bold text-white text-base mb-1">Discuss Live with Digital Architects</h4>
                  <p className="text-muted text-xs">Instantly coordinate B2B scoping or technical solutions on WhatsApp.</p>
                </div>
                <a 
                  href="https://wa.me/94773624413?text=Hello%20Digipeak%2C%0A%0AI%20am%20reading%20your%20article%20on%20${post.title}%20and%20would%20like%20to%20receive%20a%20scoping%20proposal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 font-bold text-xs uppercase tracking-wider text-white px-5 py-3 rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Author Profile Box */}
            <div className="glass border border-white/5 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center font-extrabold text-xl text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] flex-shrink-0">
                  SA
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-heading text-lg font-bold text-white">{post.author.name}</h4>
                    <p className="text-accent-primary font-semibold text-xs uppercase tracking-widest">{post.author.title}</p>
                  </div>
                  <p className="text-muted text-xs leading-relaxed">
                    {post.author.bio}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link 
                      href={post.author.profileLink}
                      className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-white hover:text-accent-primary transition-colors"
                    >
                      View Full Profile
                      <ArrowLeft className="w-3 h-3 rotate-180" />
                    </Link>
                    <span className="text-white/20">•</span>
                    <Link href="/services" className="text-[11px] uppercase tracking-wider font-bold text-muted hover:text-white transition-colors">
                      Explore Services
                    </Link>
                    <span className="text-white/20">•</span>
                    <Link href="/locations/australia" className="text-[11px] uppercase tracking-wider font-bold text-muted hover:text-white transition-colors">
                      Global Reach
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion Section (FAQ Schema mapped) */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="space-y-4">
                <h4 className="font-heading font-bold text-lg text-white">Frequently Asked Questions</h4>
                <div className="space-y-3">
                  {post.faqs.map((faq, index) => (
                    <div key={index} className="glass border border-white/5 rounded-xl p-5">
                      <h5 className="font-heading font-bold text-sm text-white mb-2">{faq.question}</h5>
                      <p className="text-muted text-xs leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* RIGHT COLUMN: GET PROPOSAL SIDEBAR PANEL */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 self-start space-y-6">
            <div className="glass border border-accent-primary/20 rounded-2xl p-6 bg-gradient-to-b from-[#0c0d21] to-[#050816] relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-accent-primary/10 to-transparent pointer-events-none" />
              <div className="relative z-10 space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-primary/20 text-accent-primary mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-white text-lg">Secure Growth Proposal</h4>
                <p className="text-muted text-xs leading-relaxed">
                  Ready to audit your technical metrics or launch a high-performance channel? Book a session now.
                </p>
                <div className="space-y-2 pt-2">
                  <Link 
                    href="/contact" 
                    className="btn-primary w-full py-3 text-xs uppercase tracking-wider font-bold text-center block text-white"
                  >
                    Get B2B Proposal
                  </Link>
                  <Link 
                    href="/pricing"
                    className="glass border border-white/10 hover:border-accent-primary/30 w-full py-3 text-xs uppercase tracking-wider font-bold text-center block text-muted hover:text-white transition-all rounded-full"
                  >
                    View Pricing
                  </Link>
                </div>
                
                <div className="pt-6 border-t border-white/10 mt-6 text-left">
                   <h5 className="font-heading font-bold text-sm text-white mb-3">Core Technical Capabilities</h5>
                   <div className="flex flex-col gap-2.5">
                     <Link href="/mobile-app-development" className="text-xs text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-accent-secondary" /> Enterprise Mobile Apps
                     </Link>
                     <Link href="/content-marketing" className="text-xs text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-accent-secondary" /> B2B Content Marketing
                     </Link>
                     <Link href="/email-marketing" className="text-xs text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-accent-secondary" /> Automated Email Sequences
                     </Link>
                     <Link href="/hosting-maintenance" className="text-xs text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-accent-secondary" /> Secure Managed Hosting
                     </Link>
                     <Link href="/reputation-management" className="text-xs text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-accent-secondary" /> Corporate Reputation
                     </Link>
                     <Link href="/partners/white-label-agency" className="text-xs text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-accent-secondary" /> Agency White Label
                     </Link>
                     <Link href="/partners/reseller-program" className="text-xs text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-accent-secondary" /> SEO Reseller Program
                     </Link>
                   </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 text-left">
                   <h5 className="font-heading font-bold text-sm text-white mb-3">Global Markets</h5>
                   <div className="flex flex-col gap-2.5">
                     <Link href="/locations/australia" className="text-xs text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-accent-primary" /> Australia Hub
                     </Link>
                     <Link href="/qatar" className="text-xs text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-accent-primary" /> Qatar (Doha)
                     </Link>
                     <Link href="/uae" className="text-xs text-muted hover:text-accent-primary transition-colors flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-accent-primary" /> UAE (Dubai)
                     </Link>
                   </div>
                </div>
              </div>
            </div>
          </aside>

        </div>

        {/* RELATED ARTICLES SECTION */}
        {relatedPosts.length > 0 && (
          <section className="pt-16 border-t border-white/5 space-y-6">
            <h3 className="font-heading text-xl font-bold text-white">Related Technical Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((r) => (
                <article 
                  key={r.id} 
                  className="glass border border-white/5 rounded-2xl p-6 hover:border-accent-primary/20 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] text-accent-secondary uppercase font-bold tracking-wider mb-2 block">{r.category}</span>
                    <h4 className="font-heading font-bold text-white mb-2 line-clamp-2 group-hover:text-accent-primary transition-colors">{r.title}</h4>
                    <p className="text-muted text-xs leading-relaxed line-clamp-2 mb-4">{r.description}</p>
                  </div>
                  <Link 
                    href={`/blog/${r.category}/${r.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-accent-primary font-bold hover:text-white transition-colors mt-auto"
                  >
                    Read Guide
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
