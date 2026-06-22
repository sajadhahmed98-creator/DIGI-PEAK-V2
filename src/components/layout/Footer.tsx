"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  if (pathname === '/digiai') return null;

  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-background/90 backdrop-blur-xl relative overflow-hidden">
      {/* Subtle Purple Glow behind footer logo area */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-accent-primary/[0.05] to-transparent blur-[120px] pointer-events-none rounded-full" />
      
      <div className="px-4 py-8 sm:px-6 md:py-16 relative z-10">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Logo & Brand Column */}
          <div className="flex flex-col lg:col-span-4 lg:pr-8">
            <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-foreground mb-4 transition-opacity hover:opacity-90">
              <img src="/logo.png" alt="Digipeak Logo" className="w-5 h-5 object-contain" />
              <span>Digipeak <span className="text-gradient-primary">Agency</span></span>
            </Link>
            <p className="text-muted/80 text-[13px] leading-relaxed mb-6 max-w-sm">
              Digipeak helps businesses grow through SEO, web design, branding, AI automation, and lead generation systems across Qatar, UAE, Australia, and global markets.
            </p>
            <div className="text-[13px] text-muted mb-8 flex flex-col gap-2.5">
              <a 
                href="mailto:hello@digipeak.agency" 
                className="hover:text-white transition-colors duration-300 flex items-center gap-2 w-max"
              >
                <svg className="w-4 h-4 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                hello@digipeak.agency
              </a>
              <a 
                href="https://maps.app.goo.gl/9Gp2fifi3A15suaA6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors duration-300 flex items-center gap-2 w-max"
              >
                <svg className="w-4 h-4 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
                Google Business Location
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-auto">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/digipeakagencyglobal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/[0.05] hover:border-accent-primary/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 md:w-4.5 md:h-4.5 text-muted group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* X / Twitter */}
              <a 
                href="https://x.com/digipeak_agency" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/[0.05] hover:border-accent-primary/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-4.5 md:h-4.5 text-muted group-hover:text-white transition-colors duration-300"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1BC3Xs8zW3/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/[0.05] hover:border-accent-primary/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 md:w-4.5 md:h-4.5 text-muted group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/digipeak.agency" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/[0.05] hover:border-accent-primary/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 md:w-4.5 md:h-4.5 text-muted group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              {/* Message (Email) */}
              <a 
                href="mailto:hello@digipeak.agency" 
                className="group w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/[0.05] hover:border-accent-primary/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                aria-label="Message Us"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-4.5 md:h-4.5 text-muted group-hover:text-white transition-colors duration-300"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              {/* Link */}
              <a 
                href="https://www.digipeak.agency" 
                className="group w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/[0.05] hover:border-accent-primary/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                aria-label="Website Link"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-4.5 md:h-4.5 text-muted group-hover:text-white transition-colors duration-300"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </a>
            </div>
          </div>
          
          {/* Link Columns Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-y-10">
            
            {/* Column 1: Company */}
            <div>
              <h4 className="font-heading font-semibold text-white text-[13px] tracking-wide mb-5">Company</h4>
              <ul className="flex flex-col gap-3 text-[13px] text-muted">
                <li><AnimatedLink href="/about">About</AnimatedLink></li>
                <li><AnimatedLink href="/services">Services</AnimatedLink></li>
                <li><AnimatedLink href="/portfolio">Projects</AnimatedLink></li>
                <li><AnimatedLink href="/pricing">Pricing</AnimatedLink></li>
                <li><AnimatedLink href="/contact">Contact</AnimatedLink></li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="font-heading font-semibold text-white text-[13px] tracking-wide mb-5">Services</h4>
              <ul className="flex flex-col gap-3 text-[13px] text-muted">
                <li><AnimatedLink href="/seo-services">Enterprise SEO</AnimatedLink></li>
                <li><AnimatedLink href="/web-design-development">Web Design</AnimatedLink></li>
                <li><AnimatedLink href="/ai-solutions">AI Automation</AnimatedLink></li>
                <li><AnimatedLink href="/branding-creative">Branding</AnimatedLink></li>
                <li><AnimatedLink href="/digital-marketing">Lead Generation</AnimatedLink></li>
              </ul>
            </div>

            {/* Column 3: Markets */}
            <div>
              <h4 className="font-heading font-semibold text-white text-[13px] tracking-wide mb-5">Markets</h4>
              <ul className="flex flex-col gap-3 text-[13px] text-muted">
                <li><AnimatedLink href="/qatar">Qatar</AnimatedLink></li>
                <li><AnimatedLink href="/locations/uae">UAE</AnimatedLink></li>
                <li><AnimatedLink href="/saudi-arabia">Saudi Arabia</AnimatedLink></li>
                <li><AnimatedLink href="/locations/australia">Australia</AnimatedLink></li>
                <li><AnimatedLink href="/locations/sri-lanka">Sri Lanka</AnimatedLink></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h4 className="font-heading font-semibold text-white text-[13px] tracking-wide mb-5">Resources</h4>
              <ul className="flex flex-col gap-3 text-[13px] text-muted">
                <li><AnimatedLink href="/blog">Blog</AnimatedLink></li>
                <li>
                  <Link href="/digiai" className="group relative hover:text-white text-accent-primary transition-colors duration-300 inline-flex items-center gap-1.5 w-max">
                    DigiAI <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
                <li><AnimatedLink href="/case-studies">Case Studies</AnimatedLink></li>
                <li><AnimatedLink href="/resources/gcc-local-seo-checklist">SEO Guides</AnimatedLink></li>
                <li><AnimatedLink href="/resources">Free Resources</AnimatedLink></li>
              </ul>
            </div>

          </div>
        </div>
        
        {/* Bottom Legal Row */}
        <div className="mx-auto max-w-[1400px] mt-10 md:mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted/60 gap-4">
          <p>© {new Date().getFullYear()} Digipeak Agency.</p>
          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2" aria-label="Legal Navigation">
            <AnimatedLink href="/privacy-policy">Privacy Policy</AnimatedLink>
            <AnimatedLink href="/terms-of-service">Terms of Service</AnimatedLink>
            <AnimatedLink href="/cookie-policy">Cookie Policy</AnimatedLink>
            <AnimatedLink href="/accessibility">Accessibility</AnimatedLink>
            <AnimatedLink href="/disclaimer">Disclaimer</AnimatedLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function AnimatedLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative hover:text-white transition-colors duration-300 inline-flex w-max">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-primary/60 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

