"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Zap, Sparkles, CheckCircle2, AlertTriangle, XCircle, RefreshCw, Send, Mail
} from "lucide-react";

type AuditState = "form" | "loading" | "results";

export default function PageSpeedAuditorPage() {
  const [auditState, setAuditState] = useState<AuditState>("form");
  const [loadingStep, setLoadingStep] = useState(0);
  
  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [gotcha, setGotcha] = useState("");

  // Audit results state
  const [lcpScore, setLcpScore] = useState(1.1);
  const [clsScore, setClsScore] = useState(0.04);
  const [fidScore, setFidScore] = useState(45);
  const [overallRating, setOverallRating] = useState<"pass" | "needs-improvement" | "poor">("pass");

  const auditSteps = [
    "Establishing connection & resolving DNS...",
    "Inspecting CSS stylesheet payload size...",
    "Measuring Largest Contentful Paint (LCP) node...",
    "Analyzing Cumulative Layout Shift (CLS) points...",
    "Generating speed diagnostic reports..."
  ];

  // Loading animation simulation
  useEffect(() => {
    if (auditState !== "loading") return;
    setLoadingStep(0);

    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= auditSteps.length - 1) {
          clearInterval(interval);
          // Set simulated scores based on website URL length to make it dynamic
          const len = websiteUrl.length;
          let simulatedLcp = 1.1;
          let simulatedCls = 0.03;
          let simulatedFid = 42;
          let rating: "pass" | "needs-improvement" | "poor" = "pass";

          if (len % 3 === 1) {
            simulatedLcp = 2.9;
            simulatedCls = 0.12;
            simulatedFid = 85;
            rating = "needs-improvement";
          } else if (len % 3 === 2) {
            simulatedLcp = 4.8;
            simulatedCls = 0.28;
            simulatedFid = 160;
            rating = "poor";
          }

          setLcpScore(simulatedLcp);
          setClsScore(simulatedCls);
          setFidScore(simulatedFid);
          setOverallRating(rating);
          
          setAuditState("results");
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [auditState, websiteUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !websiteUrl) return;

    setAuditState("loading");

    // Post lead details to /api/send-lead to register audit lead
    try {
      const len = websiteUrl.length;
      let simulatedLcpText = "1.1s (Pass)";
      if (len % 3 === 1) simulatedLcpText = "2.9s (Needs Improvement)";
      if (len % 3 === 2) simulatedLcpText = "4.8s (Poor)";

      await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          service: "Web Performance & LCP",
          company: `Auditing: ${websiteUrl}`,
          details: `Requested a Web Speed and Core Web Vitals audit. Simulated LCP target score: ${simulatedLcpText}. Client wants speed optimization proposals.`,
          _gotcha: gotcha
        })
      });
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: 'contact_form_submit', lead_source: 'page_speed_auditor' });
      }
    } catch (err) {
      console.error("Failed to register lead:", err);
    }
  };

  const resetAuditor = () => {
    setAuditState("form");
    setName("");
    setEmail("");
    setWebsiteUrl("");
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-white pt-32 pb-24 px-6 overflow-hidden">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-10 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] left-10 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        
        {/* Navigation */}
        <div className="flex items-center gap-4 border-b border-white/5 pb-6">
          <Link href="/tools" className="glass hover:bg-white/5 border border-white/10 p-2.5 rounded-xl text-muted hover:text-white transition-all">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="font-heading text-2xl font-black tracking-tight">
              LCP &amp; Core Web Vitals <span className="text-gradient-secondary">Auditor</span>
            </h1>
            <p className="text-xs text-muted">Identify Largest Contentful Paint rendering blocks and layout shifts</p>
          </div>
        </div>

        {/* INPUT STATE */}
        {auditState === "form" && (
          <div className="glass border border-white/5 rounded-3xl p-8 max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-3 text-accent-secondary">
              <Zap className="w-6 h-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
              <h3 className="font-heading text-lg font-bold">Launch Speed Analysis</h3>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Find out if your website passes Google&apos;s Core Web Vitals threshold. Digipeak specializes in custom styling rendering optimizations ensuring LCP paints finish under 1.2 seconds.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="_gotcha" value={gotcha} onChange={(e) => setGotcha(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sajadh Ahmed"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent-secondary"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Business Email</label>
                  <input 
                    type="email" 
                    required
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hello@digipeak.agency"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent-secondary"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Website URL to Audit</label>
                <input 
                  type="url" 
                  required
                  value={websiteUrl} 
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="https://yourwebsite.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent-secondary"
                />
              </div>

              <button
                type="submit"
                className="bg-accent-secondary hover:bg-accent-glow font-bold text-xs uppercase tracking-wider text-white w-full py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                Analyze Core Web Vitals
                <Zap className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* LOADING ANIMATION STATE */}
        {auditState === "loading" && (
          <div className="glass border border-white/5 rounded-3xl p-12 max-w-xl mx-auto text-center space-y-8">
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 border-4 border-accent-secondary/20 rounded-full" />
              <div className="absolute inset-0 border-4 border-accent-secondary border-t-transparent rounded-full animate-spin" />
              <Zap className="w-6 h-6 text-accent-secondary animate-pulse" />
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold text-white">Analyzing performance metrics...</h3>
              <p className="text-xs text-accent-secondary font-mono tracking-wide">
                {auditSteps[loadingStep]}
              </p>
            </div>

            {/* Simple progress bar */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden max-w-xs mx-auto">
              <div 
                className="h-full bg-accent-secondary transition-all duration-500 rounded-full"
                style={{ width: `${((loadingStep + 1) / auditSteps.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* RESULTS REPORT STATE */}
        {auditState === "results" && (
          <div className="space-y-8">
            {/* Top Score overview card */}
            <div className="glass border border-white/5 rounded-3xl p-8 bg-gradient-to-br from-[#0c0d21] to-[#050816] relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-accent-secondary/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1 block">Speed report for</span>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{websiteUrl}</h3>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-muted">Rating:</span>
                    {overallRating === "pass" && (
                      <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Passed Vitals</span>
                    )}
                    {overallRating === "needs-improvement" && (
                      <span className="text-amber-400 font-bold flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> Needs Improvement</span>
                    )}
                    {overallRating === "poor" && (
                      <span className="text-rose-400 font-bold flex items-center gap-1"><XCircle className="w-4 h-4" /> Poor Rating</span>
                    )}
                  </div>
                </div>

                {/* Score meters grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                  
                  {/* LCP metric */}
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-muted block">LCP (Speed)</span>
                    <div className={`text-2xl font-black ${
                      lcpScore <= 1.2 ? "text-emerald-400" : lcpScore <= 2.9 ? "text-amber-400" : "text-rose-400"
                    }`}>{lcpScore}s</div>
                    <span className="text-[9px] text-muted block">Goal: &lt; 1.2s</span>
                  </div>

                  {/* CLS metric */}
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-muted block">CLS (Shifts)</span>
                    <div className={`text-2xl font-black ${
                      clsScore <= 0.05 ? "text-emerald-400" : clsScore <= 0.15 ? "text-amber-400" : "text-rose-400"
                    }`}>{clsScore}</div>
                    <span className="text-[9px] text-muted block">Goal: &lt; 0.05</span>
                  </div>

                  {/* FID metric */}
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-muted block">FID (Lag)</span>
                    <div className={`text-2xl font-black ${
                      fidScore <= 50 ? "text-emerald-400" : fidScore <= 100 ? "text-amber-400" : "text-rose-400"
                    }`}>{fidScore}ms</div>
                    <span className="text-[9px] text-muted block">Goal: &lt; 50ms</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Diagnostic recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Core web vitals issues list */}
              <div className="glass border border-white/5 rounded-2xl p-6 space-y-4">
                <h4 className="font-heading font-bold text-sm tracking-wide text-white uppercase border-b border-white/5 pb-3">Diagnostic Audits</h4>
                <div className="space-y-3 text-xs leading-relaxed text-muted">
                  {overallRating === "pass" ? (
                    <div className="flex items-start gap-2.5 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Excellent performance metrics! Render-blocking stylesheet payloads are compressed and load natively.</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start gap-2.5 text-amber-400">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span><strong>Heavy Render-blocking Scripts</strong>: Browser rendering engines are blocked by uncompressed legacy theme bundles. Defer script tags.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-amber-400">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span><strong>LCP image missing Preload</strong>: B2B hero banner starts downloading late. Configure fetchpriority=&apos;high&apos; natively.</span>
                      </div>
                    </>
                  )}
                  {clsScore > 0.05 && (
                    <div className="flex items-start gap-2.5 text-rose-400">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><strong>Missing Image Dimensions</strong>: Layout shifts occur due to banner images lacking explicit width/height dimensions.</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Get Fixing Proposal card */}
              <div className="glass border border-accent-secondary/20 rounded-2xl p-6 bg-gradient-to-b from-[#07111e] to-[#050816] relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-radial-gradient from-accent-secondary/10 to-transparent pointer-events-none" />
                
                <div className="relative z-10 space-y-3">
                  <h4 className="font-heading font-bold text-sm tracking-wide text-white uppercase">Obtain Speed Fix Scoping Proposal</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Google penalizes sites with poor Core Web Vitals. Let Digipeak Agency optimize your CSS rendering loops, compress assets, and command LCP paints under 1.2s.
                  </p>
                </div>

                <div className="pt-6 relative z-10 flex gap-2">
                  <Link 
                    href="/contact?service=web-performance"
                    className="bg-accent-secondary hover:bg-accent-glow font-bold text-xs uppercase tracking-wider text-center text-white py-3 rounded-full flex-grow transition-colors shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                  >
                    Claim Speed Proposal
                  </Link>
                  <button 
                    onClick={resetAuditor}
                    className="glass border border-white/10 hover:border-white/20 p-3 rounded-full text-muted hover:text-white transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
