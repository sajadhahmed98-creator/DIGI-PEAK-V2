"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  TrendingUp, DollarSign, Users, Award, Sparkles, ArrowRight, Download, Send, CheckCircle2, ChevronDown, RefreshCw, HelpCircle
} from "lucide-react";

export function RevenueForecasterClient() {
  // Calculator inputs
  const [traffic, setTraffic] = useState(10000);
  const [conversionRate, setConversionRate] = useState(1.0);
  const [acv, setAcv] = useState(5000);
  const [budget, setBudget] = useState(3000);

  // Lead capture state
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gotcha, setGotcha] = useState("");

  // Accordion active FAQ state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Calculation outputs
  const [currentRevenue, setCurrentRevenue] = useState(0);
  const [projectedRevenue, setProjectedRevenue] = useState(0);
  const [netIncrease, setNetIncrease] = useState(0);
  const [projectedRoi, setProjectedRoi] = useState(0);
  const [currentLeads, setCurrentLeads] = useState(0);
  const [projectedLeads, setProjectedLeads] = useState(0);
  
  // Chart coordinates
  const [projectedPoints, setProjectedPoints] = useState("");
  const [currentPoints, setCurrentPoints] = useState("");

  // Run projections math
  useEffect(() => {
    // Current Monthly baseline
    const currLeads = Math.round(traffic * (conversionRate / 100));
    const currDeals = Math.round(currLeads * 0.10); // Assume default 10% close rate
    const currRev = currDeals * acv;
    
    // Digipeak Optimizations (over 12 months)
    // 1. Traffic scales by 3.5x over 12 months
    const targetTraffic = traffic * 3.5;
    // 2. Conversion rate optimizes to 2.5x current rate, capped between 2.2% and 4.5%
    let targetConv = conversionRate * 2.5;
    if (targetConv < 2.2) targetConv = 2.2;
    if (targetConv > 4.5) targetConv = 4.5;
    
    const projLeads = Math.round(targetTraffic * (targetConv / 100));
    const projDeals = Math.round(projLeads * 0.12); // Optimized close rate 12%
    const projRev = projDeals * acv;

    // Monthly Increase & Annual ROI
    const increase = projRev - currRev;
    // ROI = (Annual Net Increase - Annual Budget Cost) / Annual Budget Cost
    const annualBudget = budget * 12;
    const annualNetIncrease = increase * 12;
    const roi = annualBudget > 0 ? (annualNetIncrease - annualBudget) / annualBudget : 0;

    setCurrentRevenue(currRev);
    setProjectedRevenue(projRev);
    setNetIncrease(increase);
    setProjectedRoi(roi);
    setCurrentLeads(currLeads);
    setProjectedLeads(projLeads);

    // Calculate month-by-month points for 12 months to draw the SVG line chart
    // SVG viewBox is 600 width, 240 height
    // Margin left 50, Margin right 20, Margin top 20, Margin bottom 30
    // Width = 530, Height = 190
    // X scale: Month 1 to Month 12 -> 50 to 580
    // Y scale: Revenue scale -> 210 to 20
    const maxRev = Math.max(projRev * 1.15, 50000);
    const getX = (month: number) => 50 + ((month - 1) / 11) * 530;
    const getY = (rev: number) => 210 - (rev / maxRev) * 190;

    let projPath = "";
    let currPath = "";

    for (let m = 1; m <= 12; m++) {
      // Current path is flat
      const currY = getY(currRev);
      const currX = getX(m);
      if (m === 1) currPath = `M ${currX} ${currY}`;
      else currPath += ` L ${currX} ${currY}`;

      // Projected path scales dynamically (S-curve interpolation)
      const factor = (m - 1) / 11; // 0 to 1
      const smoothFactor = Math.sin((factor * Math.PI) / 2); // smooth sine curve
      const monthTraffic = traffic + (targetTraffic - traffic) * smoothFactor;
      const monthConv = conversionRate + (targetConv - conversionRate) * smoothFactor;
      const monthLeads = monthTraffic * (monthConv / 100);
      const monthDeals = monthLeads * (0.10 + 0.02 * factor); // close rate increases 10% to 12%
      const monthRev = monthDeals * acv;

      const projY = getY(monthRev);
      const projX = getX(m);
      if (m === 1) projPath = `M ${projX} ${projY}`;
      else projPath += ` L ${projX} ${projY}`;
    }

    setProjectedPoints(projPath);
    setCurrentPoints(currPath);

  }, [traffic, conversionRate, acv, budget]);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !websiteUrl) return;

    setIsLoading(true);

    try {
      await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || "Not Provided",
          service: "Revenue & ROI Forecaster",
          company: `Website: ${websiteUrl}`,
          details: `Requested B2B ROI Projections. Inputs -> Traffic: ${traffic}, Conv: ${conversionRate}%, ACV: $${acv}, Budget: $${budget}/mo. Projections -> Current Rev: $${currentRevenue}/mo, Projected Rev: $${projectedRevenue}/mo, Annual ROI: ${(projectedRoi * 100).toFixed(0)}%. Client wants B2B growth proposal.`,
          _gotcha: gotcha
        })
      });
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: 'contact_form_submit', lead_source: 'revenue_forecaster' });
      }
      setIsSubmitted(true);
    } catch (err) {
      console.error("Failed to submit lead:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const faqs = [
    {
      q: "How does the B2B Revenue Forecaster calculate these growth projections?",
      a: "The calculator models growth based on historical agency client campaigns. We forecast traffic scaling by an average of 3.5x over 12 months through structured technical SEO and content siloing. Simultaneously, conversion rates are optimized by an average of 2.5x (capped at 4.5% target) by repairing hydration mismatches, optimizing Largest Contentful Paint (LCP) under 1.2s, and structuring premium visual UX. Close rates are projected to increase from 10% to 12% due to data enrichment and automated CRM nurturing pipelines."
    },
    {
      q: "What is a target B2B landing page conversion rate?",
      a: "While B2B industry averages hover around 1% to 1.5%, high-performing B2B platforms engineered with premium styling, micro-interactions, and progressive forms achieve conversion rates between 2.5% and 5.5%. Digipeak optimizes web structures specifically to achieve these high-converting thresholds."
    },
    {
      q: "How does site performance directly impact B2B conversions and leads?",
      a: "According to Google Search audits, page speeds directly correlate with user drop-offs. A 1-second load lag can drop conversions by up to 20%. Under Core Web Vitals targets, keeping LCP under 1.2s and INP under 200ms ensures frictionless page transitions, boosting form submissions."
    },
    {
      q: "Why is Average Contract Value (ACV) a critical parameter for B2B SEO campaigns?",
      a: "Unlike B2C retail where traffic volume drives revenue, B2B campaigns depend on contract values. If your ACV is $10,000, acquiring just 5 additional closed deals per year through targeted search keywords generates $50,000 in net new revenue, making organic B2B SEO exceptionally high-ROI."
    },
    {
      q: "What is the standard Customer Acquisition Cost (CAC) for B2B SaaS and agency retainers?",
      a: "B2B SaaS and enterprise agencies typically experience CACs ranging from $2,000 to $15,000 depending on search competitiveness. Outranking paid ad keywords with organic B2B search authority reduces overall paid CAC by up to 60% by establishing long-term compounding visibility."
    },
    {
      q: "How does your CRM automation pipeline help sales close more marketing leads?",
      a: "Lead routing lag kills deals. Capturing leads through active API webhooks and routing them to CRM pipelines under 5 minutes increases contact qualification rates by 8x. Automated email journeys continuously nurture prospects, increasing overall close rates."
    },
    {
      q: "What is a healthy Customer Lifetime Value (LTV) to CAC ratio for B2B growth?",
      a: "An LTV:CAC ratio of 3:1 is considered the healthy benchmark for scaling businesses. Ratios above 4:1 indicate high capital efficiency. Investing in custom organic channels and conversion optimization yields lower CAC over time, boosting the LTV:CAC ratio."
    },
    {
      q: "How long does it take for custom web design and SEO campaigns to yield revenue results?",
      a: "Initial crawl and layout optimizations resolve speed issues within weeks. Organic search authority, keyword directory scaling, and content indexing compound over 3 to 6 months. By month 12, the pipeline establishes a stable, predictable lead flow."
    },
    {
      q: "Does local search engine optimization drive enterprise-level B2B inquiries?",
      a: "Yes. Local search intent is highly transactional. Corporate decision-makers in regions like Doha, Dubai, or Auckland search for local partners (e.g., 'Creative Agency Doha' or 'Web Design Dubai'). Optimizing geographic routes captures these high-value retainers."
    },
    {
      q: "Why should we avoid generic DIY website builders like WordPress or Wix for B2B growth?",
      a: "DIY builders suffer from structural code bloat, slow mobile speeds, visual layout shifts, and weak SEO control. They frequently lack native Arabic RTL support and Qatari local payment gateway integrations, which directly damages local search ranking and user trust."
    },
    {
      q: "How do you calculate return on investment (ROI) for marketing campaigns?",
      a: "ROI is calculated as: (Net Profit from Campaign - Campaign Marketing Budget) / Campaign Marketing Budget. For this forecaster, we project annual net new revenue from optimized conversions and traffic relative to your ad/retainer budgets."
    },
    {
      q: "How does bilingual Arabic and English typography design impact conversions in the GCC?",
      a: "GCC B2B searchers toggle between languages. Mirroring layouts for Arabic RTL (Right-to-Left) and English LTR, and selecting modern font weights (like Satoshi paired with optimized Arabic typefaces), prevents UI friction and builds regional credibility."
    },
    {
      q: "What is progressive profiling on B2B capture forms?",
      a: "Progressive profiling dynamically alters form fields for returning visitors. By utilizing cached user data, forms remain short and low-friction (e.g., email only), while CRM enrichment APIs automatically resolve firmographic details in the background."
    },
    {
      q: "What is an XML Sitemap and why is it vital for blog indexing?",
      a: "An XML sitemap is a machine-readable index directory of your URLs. For sites with comprehensive blog catalogs, it lists all articles, publication dates, and hreflang translations, guaranteeing search crawlers discover and index new content instantly."
    },
    {
      q: "How does Digipeak Agency ensure web apps are secure and compliant?",
      a: "We custom-code lightweight React/Next.js frontends without bloated backend databases. We deploy secure HTTPS configurations, configure Cookie Consent banners with Google Consent Mode v2, and enforce strict GDPR and local regulatory compliance."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050816] text-white pt-32 pb-24 px-6 overflow-hidden">
      {/* Dynamic background lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[25%] left-10 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-10 w-[450px] h-[450px] bg-accent-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-1.5 text-xs font-semibold text-accent-primary">
            <TrendingUp className="w-3.5 h-3.5" />
            ROI &amp; Revenue Projection Engine
          </div>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            B2B Revenue <span className="text-gradient-primary">Forecaster</span>
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Model your sales pipeline, scale your organic search traffic, and calculate the ROI of digital conversion optimizations over the next 12 months.
          </p>
        </div>

        {/* Dynamic Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Input Panel (5 columns) */}
          <div className="lg:col-span-5 glass border border-white/5 rounded-3xl p-6 md:p-8 space-y-8">
            <div className="flex items-center gap-2 text-accent-primary border-b border-white/5 pb-4">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-heading text-base font-bold uppercase tracking-wider">Growth Parameters</h3>
            </div>

            <div className="space-y-6">
              {/* Slider 1: Traffic */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> Current Monthly Traffic
                  </span>
                  <span className="font-bold font-mono text-white text-sm bg-white/5 px-2.5 py-1 rounded">
                    {traffic.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="150000" 
                  step="1000"
                  value={traffic} 
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full accent-accent-primary cursor-pointer h-1 bg-white/10 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[10px] text-muted font-mono">
                  <span>1k</span>
                  <span>75k</span>
                  <span>150k</span>
                </div>
              </div>

              {/* Slider 2: Conversion Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" /> Landing Page Conv. Rate
                  </span>
                  <span className="font-bold font-mono text-white text-sm bg-white/5 px-2.5 py-1 rounded">
                    {conversionRate.toFixed(1)}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0.1" 
                  max="5.0" 
                  step="0.1"
                  value={conversionRate} 
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full accent-accent-primary cursor-pointer h-1 bg-white/10 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[10px] text-muted font-mono">
                  <span>0.1%</span>
                  <span>2.5%</span>
                  <span>5.0%</span>
                </div>
              </div>

              {/* Slider 3: ACV */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5" /> Average Contract Value (ACV)
                  </span>
                  <span className="font-bold font-mono text-white text-sm bg-white/5 px-2.5 py-1 rounded">
                    ${acv.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="25000" 
                  step="500"
                  value={acv} 
                  onChange={(e) => setAcv(Number(e.target.value))}
                  className="w-full accent-accent-primary cursor-pointer h-1 bg-white/10 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[10px] text-muted font-mono">
                  <span>$500</span>
                  <span>$12k</span>
                  <span>$25k</span>
                </div>
              </div>

              {/* Slider 4: Budget */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> Monthly Marketing Budget
                  </span>
                  <span className="font-bold font-mono text-white text-sm bg-white/5 px-2.5 py-1 rounded">
                    ${budget.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="15000" 
                  step="500"
                  value={budget} 
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-accent-primary cursor-pointer h-1 bg-white/10 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[10px] text-muted font-mono">
                  <span>$500</span>
                  <span>$7.5k</span>
                  <span>$15k</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 text-[10px] text-muted leading-relaxed">
              *Projections model dynamic 12-month scaling campaigns: Traffic (+250%), conversion rates (+150%), and close rates (+2%) optimized via technical web design and organic authority.
            </div>
          </div>

          {/* Results and Visual Chart (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Projections Dashboard Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass border border-white/5 rounded-2xl p-4 bg-[#0a0d24]/50">
                <span className="text-[10px] text-muted font-medium uppercase tracking-wider block">Projected ROI</span>
                <div className="text-gradient-primary text-xl font-black mt-1 font-mono">
                  {projectedRoi > 0 ? `+${(projectedRoi * 100).toFixed(0)}%` : "0%"}
                </div>
                <span className="text-[9px] text-muted font-mono block mt-0.5">Annual Multiple</span>
              </div>
              <div className="glass border border-white/5 rounded-2xl p-4">
                <span className="text-[10px] text-muted font-medium uppercase tracking-wider block">Net Revenue Lift</span>
                <div className="text-white text-xl font-black mt-1 font-mono">
                  +${netIncrease.toLocaleString()}
                </div>
                <span className="text-[9px] text-muted font-mono block mt-0.5">Per Month Growth</span>
              </div>
              <div className="glass border border-white/5 rounded-2xl p-4">
                <span className="text-[10px] text-muted font-medium uppercase tracking-wider block">Monthly Deals</span>
                <div className="text-white text-xl font-bold mt-1 font-mono">
                  {Math.round(currentLeads * 0.10)} → {Math.round(projectedLeads * 0.12)}
                </div>
                <span className="text-[9px] text-muted font-mono block mt-0.5">Deals Closed</span>
              </div>
              <div className="glass border border-white/5 rounded-2xl p-4">
                <span className="text-[10px] text-muted font-medium uppercase tracking-wider block">Monthly Leads</span>
                <div className="text-white text-xl font-bold mt-1 font-mono">
                  {currentLeads} → {projectedLeads}
                </div>
                <span className="text-[9px] text-muted font-mono block mt-0.5">M1 vs M12 Leads</span>
              </div>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="glass border border-white/5 rounded-3xl p-6 bg-gradient-to-b from-[#0a0d24] to-[#050816] space-y-4">
              <div className="flex justify-between items-center text-xs">
                <h4 className="font-heading font-bold uppercase tracking-wider text-white">12-Month Revenue Projections</h4>
                <div className="flex items-center gap-4 text-[10px]">
                  <span className="flex items-center gap-1.5 text-muted">
                    <span className="w-2.5 h-0.5 bg-muted inline-block" /> Current Path
                  </span>
                  <span className="flex items-center gap-1.5 text-accent-primary font-bold">
                    <span className="w-2.5 h-0.5 bg-accent-primary inline-block" /> Digipeak Path
                  </span>
                </div>
              </div>

              {/* Chart SVG */}
              <div className="relative w-full h-[240px] bg-black/20 rounded-2xl border border-white/[0.03] overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 600 240" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="50" y1="20" x2="580" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="50" y1="83" x2="580" y2="83" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="50" y1="146" x2="580" y2="146" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="50" y1="210" x2="580" y2="210" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
                  
                  {/* Vertical Month markers */}
                  <line x1="50" y1="20" x2="50" y2="210" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <line x1="192.5" y1="20" x2="192.5" y2="210" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="335" y1="20" x2="335" y2="210" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="477.5" y1="20" x2="477.5" y2="210" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="580" y1="20" x2="580" y2="210" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                  {/* Baseline path */}
                  <path 
                    d={currentPoints} 
                    fill="none" 
                    stroke="rgba(161,161,170,0.4)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                    className="transition-all duration-300"
                  />

                  {/* Projected growth path */}
                  <path 
                    d={projectedPoints} 
                    fill="none" 
                    stroke="url(#chart-gradient)" 
                    strokeWidth="3.5" 
                    className="transition-all duration-300"
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* SVG Y-Axis Labels */}
                <div className="absolute top-[20px] left-2 text-[9px] text-muted font-mono font-bold">
                  ${Math.max(projectedRevenue * 1.15, 50000).toLocaleString(undefined, {maximumFractionDigits: 0})}
                </div>
                <div className="absolute top-[115px] left-2 text-[9px] text-muted font-mono">
                  ${(Math.max(projectedRevenue * 1.15, 50000) / 2).toLocaleString(undefined, {maximumFractionDigits: 0})}
                </div>
                <div className="absolute bottom-[30px] left-2 text-[9px] text-muted font-mono">
                  $0
                </div>

                {/* SVG X-Axis Labels */}
                <div className="absolute bottom-1 left-[50px] text-[8px] text-muted font-mono font-bold">M1</div>
                <div className="absolute bottom-1 left-[192.5px] text-[8px] text-muted font-mono">M3</div>
                <div className="absolute bottom-1 left-[335px] text-[8px] text-muted font-mono">M6</div>
                <div className="absolute bottom-1 left-[477.5px] text-[8px] text-muted font-mono">M9</div>
                <div className="absolute bottom-1 left-[570px] text-[8px] text-muted font-mono font-bold">M12</div>
              </div>

              {/* Action Button & Lead Generation Lock */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-muted text-center sm:text-left">
                  Current Monthly Revenue: <strong className="text-white">${currentRevenue.toLocaleString()}</strong> | Projected Month 12: <strong className="text-accent-secondary">${projectedRevenue.toLocaleString()}</strong>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-primary px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-transform cursor-pointer shadow-lg w-full sm:w-auto"
                >
                  Export 12-Month Financial Model
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Lead Capture Modal Overlay */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-lg glass border border-accent-primary/20 rounded-3xl p-8 bg-gradient-to-b from-[#0c0d21] to-[#050816] space-y-6 shadow-2xl animate-in zoom-in-95 duration-200"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button 
                onClick={() => { setShowModal(false); setIsSubmitted(false); }}
                className="absolute top-6 right-6 text-muted hover:text-white cursor-pointer"
                aria-label="Close modal"
              >
                <HelpCircle className="w-5 h-5 rotate-45" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="space-y-2 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-accent-primary/20 text-accent-primary flex items-center justify-center mx-auto mb-2 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-2xl font-black text-white">Unlock Full Financial Model</h3>
                    <p className="text-xs text-muted leading-relaxed">
                      Download the detailed B2B 12-Month Projection Spreadsheet, calculate competitor traffic shares, and book a live strategy session with our growth team.
                    </p>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="space-y-4 pt-2">
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
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent-primary"
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
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Website URL</label>
                      <input 
                        type="url" 
                        required
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="https://yourwebsite.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Phone Number (Optional)</label>
                      <input 
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+94 77 362 4413"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-accent-primary"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-accent-primary hover:bg-accent-glow font-bold text-xs uppercase tracking-widest text-white w-full py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)] disabled:opacity-50"
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Processing Projections...
                        </>
                      ) : (
                        <>
                          Generate &amp; Claim Excel Model
                          <Send className="w-4 h-4" />
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
                    <h3 className="font-heading text-2xl font-black text-white">Spreadsheet Model Ready</h3>
                    <p className="text-xs text-muted leading-relaxed">
                      Thank you! Your custom 12-month projections have been generated. We have sent the detailed Excel sheet and competitor analysis to <strong>{email}</strong>.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-sm mx-auto flex items-center justify-between text-xs">
                    <span className="font-medium text-white">digipeak-b2b-growth-model.xlsx</span>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); alert("Mock download: Spreadsheet file is being prepared and emailed."); }}
                      className="text-accent-primary font-bold flex items-center gap-1 hover:text-white"
                    >
                      <Download className="w-4 h-4" /> Download
                    </a>
                  </div>
                  <div className="pt-4 flex flex-col gap-2">
                    <Link
                      href="/contact"
                      onClick={() => { setShowModal(false); setIsSubmitted(false); }}
                      className="btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider block text-center text-white"
                    >
                      Schedule Proposal Review Call
                    </Link>
                    <button
                      onClick={() => { setShowModal(false); setIsSubmitted(false); }}
                      className="glass border border-white/10 hover:border-white/20 w-full py-3 text-xs font-bold uppercase tracking-wider text-muted hover:text-white transition-all rounded-full"
                    >
                      Return to Forecaster
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SEO In-depth Copy (Targeting Growth Calculators and B2B ROI) */}
        <section className="border-t border-white/5 pt-16 max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-bold text-white leading-tight">
              Scaling B2B Lead Pipelines: The Mathematics of ROI &amp; Conversion Optimization
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              In the B2B enterprise marketplace, organic traffic is vanity if it does not translate into pipeline value. High-performing digital agencies do not simply chase high-volume keyword search queries; they engineer conversion pathways. This <strong>B2B Revenue Growth &amp; ROI Calculator</strong> models the financial impact of deploying strategic <a href="/seo-services">SEO campaigns</a> and custom <a href="/web-design-development">web design development</a> to target decision-makers. By combining traffic scaling with user experience design, organizations reduce their Customer Acquisition Cost (CAC) and compound lifetime returns.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Let us look at the conversion math: If a corporate website receives 10,000 monthly visits but converts them at a standard 1% average rate, the site produces 100 leads. Assuming a 10% sales closing rate, that website accounts for 10 deals. If your ACV is $5,000, monthly revenue stands at $50,000. By optimizing visual layouts, resolving render-blocking code loops, and constructing clean semantic schemas, Digipeak elevates conversion rates to 2.5%. Combined with traffic scaling to 35,000 visits via international search siloing, monthly leads grow to 875, deals rise to 105, and monthly revenue increases to $525,000—a massive 10x scalability curve without increasing paid ad spend.
            </p>
          </div>

          {/* Accordion FAQs (exactly 15) */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-accent-primary" />
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="glass border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors focus:outline-none"
                  >
                    <span className="font-heading text-sm font-bold text-white pr-4">{faq.q}</span>
                    <ChevronDown 
                      className={`w-4 h-4 text-muted flex-shrink-0 transition-transform duration-300 ${
                        activeFaq === idx ? "rotate-180 text-accent-primary" : ""
                      }`} 
                    />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      activeFaq === idx ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                    }`}
                  >
                    <p className="p-6 text-xs leading-relaxed text-muted bg-[#0c0d24]/20">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
