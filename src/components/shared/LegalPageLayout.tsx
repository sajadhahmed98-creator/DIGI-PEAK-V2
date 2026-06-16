"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUp, ChevronRight, Clock, Calendar } from "lucide-react";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  description: string;
  lastUpdated: string;
  sections: Section[];
  seoKeywords: string[];
  canonicalPath: string;
}

export function LegalPageLayout({
  title,
  description,
  lastUpdated,
  sections,
  seoKeywords,
  canonicalPath,
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [readingTime, setReadingTime] = useState<number>(1);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const fullUrl = `https://www.digipeak.agency${canonicalPath}`;

  // 1. Calculate reading time & track scroll
  useEffect(() => {
    // Estimate reading time (average 200 words per minute)
    const container = document.getElementById("legal-content");
    if (container) {
      const text = container.innerText || "";
      const words = text.trim().split(/\s+/).length;
      setReadingTime(Math.max(1, Math.ceil(words / 200)));
    }

    const handleScroll = () => {
      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }

      // Back to top visibility
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // 2. Active Section Observer
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Find the sections currently intersecting
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting);
      
      if (intersectingEntries.length > 0) {
        // Sort by how far they are from the top of the viewport
        const sorted = intersectingEntries.sort((a, b) => {
          return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
        });
        setActiveSection(sorted[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "-10% 0px -55% 0px", // focus observer on upper-middle viewport area
      threshold: [0, 0.1, 0.2, 0.5, 1.0],
    });

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sections]);

  // 3. Smooth scroll with offset adjustment for fixed navbar
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navbarOffset = 120; // fixed navbar offset
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Structured Data schemas
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.digipeak.agency/#organization",
    "name": "Digipeak Agency",
    "url": "https://www.digipeak.agency",
    "email": "hello@digipeak.agency",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://www.digipeak.agency/#logo",
      "url": "https://www.digipeak.agency/logo.png",
      "caption": "Digipeak Agency Logo"
    },
    "description": "Premium Digital Growth Agency specializing in Website Design, SEO, Branding, AI Automation, CRM Systems, Digital Marketing, and Lead Generation.",
    "foundingDate": "2022-01-01",
    "founder": {
      "@type": "Person",
      "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person",
      "name": "Sajadh Ahmed",
      "jobTitle": "Founder",
      "url": "https://www.digipeak.agency/author/sajadh-ahmed"
    },
    "sameAs": [
      "https://www.linkedin.com/company/digipeakagencyglobal",
      "https://www.instagram.com/digipeak.agency",
      "https://www.facebook.com/share/1BC3Xs8zW3/?mibextid=wwXIfr",
      "https://maps.app.goo.gl/9Gp2fifi3A15suaA6"
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${title} | Digipeak Agency`,
    "description": description,
    "url": fullUrl,
    "inLanguage": "en-US",
    "keywords": seoKeywords.join(", "),
    "author": {
      "@type": "Person",
      "name": "Sajadh Ahmed",
      "jobTitle": "Graphic Designer & Digital Marketer",
      "worksFor": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.digipeak.agency/#organization",
    "name": "Digipeak Agency",
    "url": "https://www.digipeak.agency",
    "email": "hello@digipeak.agency",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://www.digipeak.agency/#logo",
      "url": "https://www.digipeak.agency/logo.png",
      "caption": "Digipeak Agency Logo"
    },
    "description": "Premium Digital Growth Agency specializing in Website Design, SEO, Branding, AI Automation, CRM Systems, Digital Marketing, and Lead Generation.",
    "foundingDate": "2022-01-01",
    "founder": {
      "@type": "Person",
      "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person",
      "name": "Sajadh Ahmed",
      "jobTitle": "Founder",
      "url": "https://www.digipeak.agency/author/sajadh-ahmed"
    },
    "sameAs": [
      "https://www.linkedin.com/company/digipeakagencyglobal",
      "https://www.instagram.com/digipeak.agency",
      "https://www.facebook.com/share/1BC3Xs8zW3/?mibextid=wwXIfr",
      "https://maps.app.goo.gl/9Gp2fifi3A15suaA6"
    ]
  }
    },
    "publisher": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.digipeak.agency/#organization",
    "name": "Digipeak Agency",
    "url": "https://www.digipeak.agency",
    "email": "hello@digipeak.agency",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://www.digipeak.agency/#logo",
      "url": "https://www.digipeak.agency/logo.png",
      "caption": "Digipeak Agency Logo"
    },
    "description": "Premium Digital Growth Agency specializing in Website Design, SEO, Branding, AI Automation, CRM Systems, Digital Marketing, and Lead Generation.",
    "foundingDate": "2022-01-01",
    "founder": {
      "@type": "Person",
      "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person",
      "name": "Sajadh Ahmed",
      "jobTitle": "Founder",
      "url": "https://www.digipeak.agency/author/sajadh-ahmed"
    },
    "sameAs": [
      "https://www.linkedin.com/company/digipeakagencyglobal",
      "https://www.instagram.com/digipeak.agency",
      "https://www.facebook.com/share/1BC3Xs8zW3/?mibextid=wwXIfr",
      "https://maps.app.goo.gl/9Gp2fifi3A15suaA6"
    ]
  }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.digipeak.agency"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": fullUrl
      }
    ]
  };

  return (
    <>
      {/* Schema Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Sticky Progress Bar */}
      <div 
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-purple via-accent-violet to-accent-blue z-50 origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <div className="min-h-screen bg-background relative overflow-hidden py-12 px-6">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-primary/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="mx-auto max-w-7xl relative z-10 pt-8 md:pt-16">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 flex-shrink-0" />
            <span className="text-white font-medium" aria-current="page">
              {title}
            </span>
          </nav>

          {/* Premium Page Header */}
          <header className="border-b border-white/5 pb-10 mb-12">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              {title}
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-3xl mb-8">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-muted font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent-primary" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-secondary" />
                <span>Reading time: {readingTime} min read</span>
              </div>
            </div>
          </header>

          {/* Grid Layout: TOC on left, article on right */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 items-start">
            
            {/* Sticky Table of Contents (Desktop only) */}
            <aside className="hidden lg:block sticky top-28 self-start max-h-[calc(100vh-160px)] overflow-y-auto pr-4 py-2 digiai-scrollbar">
              <h2 className="font-heading text-[11px] uppercase tracking-widest font-bold text-white mb-4">
                Table of Contents
              </h2>
              <nav aria-label="Table of contents">
                <ul className="space-y-3.5 border-l border-white/5 pl-4">
                  {sections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <li key={sec.id}>
                        <a
                          href={`#${sec.id}`}
                          onClick={(e) => scrollToSection(e, sec.id)}
                          className={`block text-xs transition-all duration-300 leading-normal relative ${
                            isActive
                              ? "text-accent-primary font-bold translate-x-1"
                              : "text-muted hover:text-white"
                          }`}
                        >
                          {/* Active marker */}
                          {isActive && (
                            <span className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                          )}
                          {sec.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Article Content */}
            <article 
              id="legal-content" 
              className="max-w-[820px] lg:pl-4 space-y-12"
            >
              {sections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-32 border-b border-white/5 pb-12 last:border-b-0 last:pb-0"
                >
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-3 group">
                    <span className="text-gradient-secondary font-mono text-base font-normal">
                      //
                    </span>
                    {sec.title}
                  </h2>
                  <div className="text-muted text-sm leading-relaxed space-y-4 font-sans select-text">
                    {sec.content}
                  </div>
                </section>
              ))}
            </article>

          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 bg-white/5 hover:bg-accent-primary hover:text-white border border-white/10 hover:border-transparent text-muted p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:-translate-y-1 flex items-center justify-center cursor-pointer group backdrop-blur-md"
        >
          <ArrowUp className="h-4.5 w-4.5 group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
}
