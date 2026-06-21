"use client";

import { useState, useEffect } from "react";
import { X, Download, Mail, User, Globe, CheckCircle2, RefreshCw } from "lucide-react";

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [gotcha, setGotcha] = useState("");

  useEffect(() => {
    // Check if exit-intent modal has already been shown in this browser session
    const hasBeenShown = sessionStorage.getItem("exit_intent_shown");
    if (hasBeenShown === "true") return;

    // Load initial progressive profile data if available
    if (typeof window !== "undefined") {
      setName(localStorage.getItem("digipeak_user_name") || "");
      setEmail(localStorage.getItem("digipeak_user_email") || "");
      setWebsite(localStorage.getItem("digipeak_user_website") || "");
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if cursor crosses the top boundary of the viewport
      if (e.clientY < 20) {
        setIsOpen(true);
        sessionStorage.setItem("exit_intent_shown", "true");
        // Remove event listener immediately
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !website) return;

    setSubmitting(true);

    try {
      // Dispatch Resource Download lead payload
      await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          website,
          service: "Resource Download",
          resourceName: "GCC Local SEO & Speed Checklist",
          resourceCategory: "SEO",
          leadSource: "exit_intent_popup",
          leadScore: "Warm",
          details: `Lead captured via Exit-Intent modal. Requested B2B Local SEO & Speed Checklist. Website: ${website}`,
          _gotcha: gotcha
        })
      });

      // Save to localStorage for Progressive Profiling
      if (typeof window !== "undefined") {
        localStorage.setItem("digipeak_user_name", name);
        localStorage.setItem("digipeak_user_email", email);
        localStorage.setItem("digipeak_user_website", website);
      }

      // Track analytics event
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ 
          event: "pagespeed_lead_submitted", 
          lead_source: "exit_intent_modal",
          lead_email: email 
        });
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit exit intent lead:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg glass border border-accent-secondary/30 rounded-3xl p-8 bg-gradient-to-br from-[#0b0c1e] via-[#050816] to-[#050816] space-y-6 shadow-2xl animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-muted hover:text-white cursor-pointer bg-white/5 p-1.5 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {!submitted ? (
          <>
            <div className="space-y-2 text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent-secondary">Wait! Don&apos;t Leave Empty-Handed</span>
              <h3 className="font-heading text-2xl font-black text-white">Get the GCC B2B SEO &amp; Speed Roadmap</h3>
              <p className="text-xs text-muted leading-relaxed">
                Before you go, download our proprietary developer checklist to audit schema files, optimize hydration speeds, and secure search indexing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <input type="text" name="_gotcha" value={gotcha} onChange={(e) => setGotcha(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
              
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-accent-secondary" /> Full Name
                </label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sajadh Ahmed"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-accent-secondary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent-secondary" /> Business Email
                </label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@digipeak.agency"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-accent-secondary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-accent-secondary" /> Website URL
                </label>
                <input 
                  type="url" 
                  required
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://yourcompany.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-accent-secondary"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="bg-accent-secondary hover:bg-accent-glow font-bold text-xs uppercase tracking-widest text-white w-full py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.3)] disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Generating Checklist...
                  </>
                ) : (
                  <>
                    Download Free Roadmap
                    <Download className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6 py-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-2xl font-black text-white">Roadmap Download Ready</h3>
              <p className="text-xs text-muted leading-relaxed">
                Thank you! Your custom B2B SEO &amp; Speed checklist is compiled. We have emailed the resource link to <strong>{email}</strong>.
              </p>
            </div>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href="https://www.digipeak.agency/resources/gcc-local-seo-checklist"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider block text-center text-white"
              >
                Open Checklist Directly
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="glass border border-white/10 hover:border-white/20 w-full py-3 text-xs font-bold uppercase tracking-wider text-muted hover:text-white transition-all rounded-full"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
