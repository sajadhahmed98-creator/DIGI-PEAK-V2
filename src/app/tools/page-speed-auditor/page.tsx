"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Zap, Sparkles, CheckCircle2, AlertTriangle, XCircle, RefreshCw, 
  HelpCircle, ShieldCheck, Award, Eye, FileText, ChevronRight, Gauge
} from "lucide-react";

type AuditState = "form" | "loading" | "results";

interface AuditResult {
  performanceScore: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  metrics: {
    lcp: string;
    cls: string;
    inp: string;
    tbt: string;
    fcp: string;
    speedIndex: string;
  };
  opportunities: {
    renderBlocking: Array<{ url: string; size: string; savings: string }>;
    imageIssues: Array<{ type: "oversized" | "webp_avif" | "lazy_load"; description: string }>;
    seoIssues: Array<{ title: string; description: string }>;
  };
  isMock?: boolean;
}

export default function PageSpeedAuditorPage() {
  const [auditState, setAuditState] = useState<AuditState>("form");
  const [loadingStep, setLoadingStep] = useState(0);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [results, setResults] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Lead Form State (Shown after results)
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [submittingLead, setSubmittingLead] = useState(false);
  const [gotcha, setGotcha] = useState("");

  const auditSteps = [
    "Connecting to Google Lighthouse core engines...",
    "Inspecting render-blocking stylesheet payloads...",
    "Measuring mobile device painting loops...",
    "Analyzing Largest Contentful Paint (LCP) node...",
    "Detecting layout shifts (CLS) and input delays...",
    "Compiling diagnostics and opportunities..."
  ];

  // Rotate loading steps
  useEffect(() => {
    if (auditState !== "loading") return;
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < auditSteps.length - 1 ? prev + 1 : prev));
    }, 1800);
    return () => clearInterval(interval);
  }, [auditState]);

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl) return;

    // Track audit started
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "pagespeed_audit_started", target_url: websiteUrl });
    }

    setAuditState("loading");
    setLoadingStep(0);
    setError(null);

    try {
      const response = await fetch(`/api/pagespeed?url=${encodeURIComponent(websiteUrl)}`);
      if (!response.ok) {
        throw new Error("Audit failed to complete. Serving fallback diagnostics.");
      }
      const data = await response.json();
      setResults(data);
      
      // Track audit completed
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ 
          event: "pagespeed_audit_completed", 
          target_url: websiteUrl,
          performance_score: data.performanceScore
        });
      }
      
      setAuditState("results");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
      setAuditState("form");
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadEmail) return;

    setSubmittingLead(true);

    try {
      const detailsText = `
PageSpeed Auditor Lead Report:
- Audited URL: ${websiteUrl}
- Performance: ${results?.performanceScore}/100
- SEO Score: ${results?.seoScore}/100
- Accessibility: ${results?.accessibilityScore}/100
- Best Practices: ${results?.bestPracticesScore}/100
- Core Web Vitals:
  * LCP: ${results?.metrics.lcp}
  * CLS: ${results?.metrics.cls}
  * INP: ${results?.metrics.inp}
  * TBT: ${results?.metrics.tbt}
  * FCP: ${results?.metrics.fcp}
- Render Blocking Resources: ${results?.opportunities.renderBlocking.length || 0} found.
- Image issues count: ${results?.opportunities.imageIssues.length || 0} detected.
- Diagnostic source: ${results?.isMock ? "Mock Fallback Hashing" : "Real-time Google PSI API"}
      `.trim();

      await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName,
          email: leadEmail,
          service: "Performance Action Plan",
          website: websiteUrl,
          details: detailsText,
          leadSource: "pagespeed_auditor",
          _gotcha: gotcha
        })
      });

      // Track lead submitted
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: "pagespeed_lead_submitted", lead_email: leadEmail });
      }

      setLeadSubmitted(true);
    } catch (err) {
      console.error("Failed to submit performance lead:", err);
    } finally {
      setSubmittingLead(false);
    }
  };

  const resetAuditor = () => {
    setAuditState("form");
    setResults(null);
    setLeadSubmitted(false);
    setLeadName("");
    setLeadEmail("");
  };

  // Helper to color-code overall scores
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-emerald-400 border-emerald-400/20 bg-emerald-500/5";
    if (score >= 50) return "text-amber-400 border-amber-400/20 bg-amber-500/5";
    return "text-rose-400 border-rose-400/20 bg-rose-500/5";
  };

  const getScoreStroke = (score: number) => {
    if (score >= 90) return "stroke-emerald-400";
    if (score >= 50) return "stroke-amber-400";
    return "stroke-rose-400";
  };

  const getScoreIndicator = (score: number) => {
    if (score >= 90) return { text: "Good", icon: CheckCircle2, color: "text-emerald-400" };
    if (score >= 50) return { text: "Needs Improvement", icon: AlertTriangle, color: "text-amber-400" };
    return { text: "Poor", icon: XCircle, color: "text-rose-400" };
  };

  return (
    <div className="relative min-h-screen bg-[#020203] text-white pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-accent-secondary/[0.015] rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-accent-primary/[0.015] rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        
        {/* Navigation / Header */}
        <div className="flex items-center gap-4 border-b border-white/5 pb-8">
          <Link href="/tools" className="glass hover:bg-white/5 border border-white/10 p-3 rounded-xl text-muted hover:text-white transition-all">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-heading text-3xl font-black tracking-tight">
              Real PageSpeed <span className="text-gradient-secondary">Auditor</span>
            </h1>
            <p className="text-sm text-muted">Audited directly via Google PageSpeed Insights API. Pinpoint web performance blocks.</p>
          </div>
        </div>

        {/* INPUT STATE */}
        {auditState === "form" && (
          <div className="glass border border-white/5 rounded-3xl p-8 max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-3 text-accent-secondary">
              <Zap className="w-6 h-6 shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-pulse" />
              <h3 className="font-heading text-xl font-bold">Initiate Core Web Vitals Scrutiny</h3>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Analyze your site&apos;s real-time performance scores, asset optimization recommendations, and Core Web Vitals targets. Enter your website link below.
            </p>

            {error && (
              <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-3 text-rose-400 text-xs">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleAuditSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted block">Website URL to Audit</label>
                <div className="relative">
                  <input 
                    type="url" 
                    required
                    value={websiteUrl} 
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-4 text-sm focus:outline-none focus:border-accent-secondary transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                    <Sparkles className="w-4 h-4 text-accent-secondary" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-accent-secondary hover:bg-accent-glow font-bold text-xs uppercase tracking-wider text-white w-full py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                Analyze Live Performance
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* LOADING STATE */}
        {auditState === "loading" && (
          <div className="glass border border-white/5 rounded-3xl p-12 max-w-xl mx-auto text-center space-y-8">
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 border-4 border-accent-secondary/20 rounded-full" />
              <div className="absolute inset-0 border-4 border-accent-secondary border-t-transparent rounded-full animate-spin" />
              <Gauge className="w-8 h-8 text-accent-secondary animate-pulse" />
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-xl font-bold text-white">Generating Real-time Audit Report...</h3>
              <p className="text-xs text-accent-secondary font-mono tracking-wide">
                {auditSteps[loadingStep]}
              </p>
            </div>

            {/* Simulated progress bar */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden max-w-xs mx-auto">
              <div 
                className="h-full bg-accent-secondary transition-all duration-1000 rounded-full"
                style={{ width: `${((loadingStep + 1) / auditSteps.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* RESULTS REPORT STATE */}
        {auditState === "results" && results && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Top Score Dials Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Performance", score: results.performanceScore },
                { name: "SEO Optimization", score: results.seoScore },
                { name: "Accessibility", score: results.accessibilityScore },
                { name: "Best Practices", score: results.bestPracticesScore }
              ].map((cat, idx) => {
                const isGood = cat.score >= 90;
                const isWarning = cat.score >= 50 && cat.score < 90;
                const strokeColor = isGood ? "stroke-emerald-400" : isWarning ? "stroke-amber-400" : "stroke-rose-400";
                const bgCircle = isGood ? "text-emerald-500/10" : isWarning ? "text-amber-500/10" : "text-rose-500/10";
                
                // SVG dash offset calculation (circumference is 2 * PI * r = 2 * 3.14 * 38 = 238.64)
                const dashArray = 238.64;
                const dashOffset = dashArray - (cat.score / 100) * dashArray;

                return (
                  <div key={idx} className="glass border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center space-y-4">
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">{cat.name}</span>
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="48" cy="48" r="38" strokeWidth="6" className={`stroke-current ${bgCircle}`} fill="transparent" />
                        <circle 
                          cx="48" 
                          cy="48" 
                          r="38" 
                          strokeWidth="6" 
                          className={strokeColor} 
                          fill="transparent" 
                          strokeDasharray={dashArray}
                          strokeDashoffset={dashOffset}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute text-xl font-black font-heading">{cat.score}</div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getScoreColor(cat.score)}`}>
                      {getScoreIndicator(cat.score).text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Core Web Vitals Cards */}
            <div className="glass border border-white/5 rounded-3xl p-8 bg-gradient-to-br from-[#0c0d21] to-[#020203] space-y-6">
              <div>
                <h3 className="font-heading text-lg font-bold text-white">Core Web Vitals Field Metrics</h3>
                <p className="text-xs text-muted">Audited mobile viewport metrics corresponding to Google search ranking algorithms.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {[
                  { label: "LCP (Speed)", val: results.metrics.lcp, limit: "< 2.5s", isPass: parseFloat(results.metrics.lcp) <= 2.5 },
                  { label: "CLS (Layout)", val: results.metrics.cls, limit: "< 0.10", isPass: parseFloat(results.metrics.cls) <= 0.10 },
                  { label: "INP (Latency)", val: results.metrics.inp, limit: "< 200ms", isPass: parseFloat(results.metrics.inp) <= 200 },
                  { label: "TBT (Blocking)", val: results.metrics.tbt, limit: "< 150ms", isPass: parseFloat(results.metrics.tbt) <= 150 },
                  { label: "FCP (First Paint)", val: results.metrics.fcp, limit: "< 1.8s", isPass: parseFloat(results.metrics.fcp) <= 1.8 },
                  { label: "Speed Index", val: results.metrics.speedIndex, limit: "< 3.4s", isPass: parseFloat(results.metrics.speedIndex) <= 3.4 }
                ].map((m, idx) => (
                  <div key={idx} className="border border-white/5 bg-white/[0.02] rounded-xl p-4 flex flex-col justify-between space-y-2">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-wider block">{m.label}</span>
                    <span className={`text-xl font-black ${m.isPass ? "text-emerald-400" : "text-amber-400"}`}>{m.val}</span>
                    <span className="text-[9px] text-muted block">Target: {m.limit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities Rows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Render blocking */}
              <div className="glass border border-white/5 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                  <Zap className="w-4 h-4 text-accent-secondary" />
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider">Render Blocking Assets</h4>
                </div>
                <div className="space-y-4">
                  {results.opportunities.renderBlocking.length > 0 ? (
                    results.opportunities.renderBlocking.map((rb, idx) => (
                      <div key={idx} className="text-xs space-y-1 border-b border-white/[0.02] pb-2 last:border-b-0">
                        <span className="font-mono text-muted block truncate" title={rb.url}>{rb.url.substring(rb.url.lastIndexOf("/") + 1) || rb.url}</span>
                        <div className="flex justify-between text-[10px] text-accent-secondary">
                          <span>Size: {rb.size}</span>
                          <span className="text-amber-400 font-bold">Est: {rb.savings}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-muted">No major render-blocking scripts detected.</p>
                  )}
                </div>
              </div>

              {/* Image Issues */}
              <div className="glass border border-white/5 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                  <Sparkles className="w-4 h-4 text-accent-primary" />
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider">Media &amp; Image Audits</h4>
                </div>
                <div className="space-y-4">
                  {results.opportunities.imageIssues.map((img, idx) => (
                    <div key={idx} className="flex gap-2.5 text-xs">
                      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-muted leading-relaxed">{img.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO Opportunities */}
              <div className="glass border border-white/5 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider">Search Bot Warnings</h4>
                </div>
                <div className="space-y-4">
                  {results.opportunities.seoIssues.map((seo, idx) => (
                    <div key={idx} className="text-xs space-y-1">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        {seo.title}
                      </span>
                      <p className="text-muted leading-relaxed pl-3">{seo.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* LEAD GENERATION CONTAINER */}
            <div className="glass border border-accent-secondary/30 rounded-3xl p-8 bg-gradient-to-br from-[#0c142b] via-[#050816] to-[#020203] relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-accent-secondary/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Left side value pitch */}
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent-secondary">PERFORMANCE REDEMPTION</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-black leading-tight">
                    Want Digipeak to fix these issues?
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Don&apos;t let slow page speeds, oversized media payloads, and layout shifting sink your organic traffic rank. Claim your custom **Performance Action Plan** to accelerate Largest Contentful Paint to under 1.2s.
                  </p>

                  <div className="flex flex-col gap-2 pt-2 text-xs text-muted">
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Full audits of CSS render blocks</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Modern image conversion scope (WebP / AVIF)</span>
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Core Web Vitals (LCP, CLS, INP) path checklist</span>
                  </div>
                </div>

                {/* Right side lead capture form */}
                <div className="glass bg-white/[0.01] border border-white/5 rounded-2xl p-6">
                  {leadSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                        <CheckCircle2 className="w-6 h-6 animate-bounce" />
                      </div>
                      <h4 className="font-heading text-lg font-bold text-white">Performance Plan Claimed</h4>
                      <p className="text-xs text-muted leading-relaxed">
                        We have dispatched your auditor report details to our technical SEO developers. Expect your custom optimization roadmap in your inbox shortly.
                      </p>
                      <button 
                        onClick={resetAuditor}
                        className="text-xs text-accent-secondary font-bold hover:underline pt-2 cursor-pointer"
                      >
                        Run another audit
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleLeadSubmit} className="space-y-4">
                      <input type="text" name="_gotcha" value={gotcha} onChange={(e) => setGotcha(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
                      
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Your Name</label>
                        <input 
                          type="text" 
                          required
                          value={leadName} 
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="Sajadh Ahmed"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent-secondary"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Business Email</label>
                        <input 
                          type="email" 
                          required
                          value={leadEmail} 
                          onChange={(e) => setLeadEmail(e.target.value)}
                          placeholder="hello@digipeak.agency"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent-secondary"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Audited Website</label>
                        <input 
                          type="text" 
                          readOnly 
                          value={websiteUrl} 
                          className="w-full bg-white/[0.02] border border-white/5 text-muted rounded-xl px-4 py-3 text-xs outline-none cursor-not-allowed"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submittingLead}
                        className="bg-accent-secondary hover:bg-accent-glow font-bold text-xs uppercase tracking-wider text-white w-full py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(59,130,246,0.2)] disabled:opacity-50"
                      >
                        {submittingLead ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            Dispatching Request...
                          </>
                        ) : (
                          <>
                            Get My Performance Action Plan
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>

              </div>

              {/* Secondary restart option */}
              <div className="border-t border-white/5 mt-8 pt-4 flex justify-between items-center text-xs text-muted">
                <span>Audited via Google API core</span>
                <button 
                  onClick={resetAuditor}
                  className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Analyze a different page
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
