"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  TrendingUp, DollarSign, Users, Award, Sparkles, ArrowRight, Download, Send, CheckCircle2, ChevronDown, RefreshCw, HelpCircle, Briefcase, BarChart3
} from "lucide-react";

export function RevenueForecasterClient() {
  // 5 Sliders State
  const [budget, setBudget] = useState(2500); // Monthly SEO Budget
  const [leadValue, setLeadValue] = useState(250); // Average Lead Value
  const [conversionRate, setConversionRate] = useState(1.5); // Lead Conversion Rate (%)
  const [trafficGrowth, setTrafficGrowth] = useState(8); // Monthly Traffic Growth (%)
  const [cltv, setCltv] = useState(5000); // Average Customer Lifetime Value (CLTV)

  // Constant baseline starting traffic
  const startingTraffic = 5000;

  // Lead capture state
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gotcha, setGotcha] = useState("");

  // Tracking flags to avoid duplicate started event pushes
  const hasStartedTracking = useRef(false);

  // Accordion active FAQ state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Projected milestones data state
  const [milestones, setMilestones] = useState({
    m1: { traffic: 0, leads: 0, customers: 0, revenue: 0, roi: 0 },
    m3: { traffic: 0, leads: 0, customers: 0, revenue: 0, roi: 0 },
    m6: { traffic: 0, leads: 0, customers: 0, revenue: 0, roi: 0 },
    m12: { traffic: 0, leads: 0, customers: 0, revenue: 0, roi: 0 }
  });

  // Chart coordinates path
  const [projectedPoints, setProjectedPoints] = useState("");
  
  // Track start of calculation when sliders are first adjusted
  const trackCalculationStart = () => {
    if (!hasStartedTracking.current) {
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: "roi_calculation_started" });
      }
      hasStartedTracking.current = true;
    }
  };

  // Track completion of calculation (e.g. on slider release)
  const trackCalculationComplete = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ 
        event: "roi_calculation_completed",
        budget,
        lead_value: leadValue,
        conversion_rate: conversionRate,
        traffic_growth: trafficGrowth,
        cltv
      });
    }
  };

  // Perform compounding projections math
  useEffect(() => {
    // We calculate month by month from month 1 to 12
    const data: Array<{
      month: number;
      traffic: number;
      leads: number;
      customers: number;
      revenue: number;
      cumulativeRevenue: number;
      cumulativeCost: number;
      roi: number;
    }> = [];

    let totalRevenue = 0;
    
    // Close rate is mathematically bounded: Average Lead Value / CLTV
    const closeRate = Math.min(1, leadValue / cltv);

    for (let m = 1; m <= 12; m++) {
      // Compounded traffic growth
      const traffic = Math.round(startingTraffic * Math.pow(1 + trafficGrowth / 100, m));
      const leads = Math.round(traffic * (conversionRate / 100));
      const customers = Math.round(leads * closeRate);
      
      // Revenue of this month (using LTV * customers)
      const revenue = Math.round(customers * cltv);
      totalRevenue += revenue;

      const cumulativeCost = budget * m;
      const roi = cumulativeCost > 0 ? Math.round(((totalRevenue - cumulativeCost) / cumulativeCost) * 100) : 0;

      data.push({
        month: m,
        traffic,
        leads,
        customers,
        revenue,
        cumulativeRevenue: totalRevenue,
        cumulativeCost,
        roi
      });
    }

    // Set milestones
    setMilestones({
      m1: data[0],
      m3: data[2],
      m6: data[5],
      m12: data[11]
    });

    // Chart path coordinates
    // SVG viewBox: 600 width, 240 height
    // Margin: left 50, right 20, top 20, bottom 30
    // Width = 530, Height = 190
    // X scale: Month 1 to Month 12 -> 50 to 580
    // Y scale: Revenue scale -> 210 to 20
    const maxRev = Math.max(...data.map(d => d.revenue)) * 1.15 || 10000;
    const getX = (month: number) => 50 + ((month - 1) / 11) * 530;
    const getY = (rev: number) => 210 - (rev / maxRev) * 190;

    let path = "";
    data.forEach((d, idx) => {
      const x = getX(d.month);
      const y = getY(d.revenue);
      if (idx === 0) path = `M ${x} ${y}`;
      else path += ` L ${x} ${y}`;
    });

    setProjectedPoints(path);

  }, [budget, leadValue, conversionRate, trafficGrowth, cltv]);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !websiteUrl) return;

    setIsLoading(true);

    try {
      const detailsText = `
B2B Compounding ROI Forecaster Report:
- Target Website: ${websiteUrl}
- Sliders Settings:
  * Monthly Budget: $${budget}/mo
  * Average Lead Value: $${leadValue}
  * Lead Conversion Rate: ${conversionRate}%
  * Traffic Growth: ${trafficGrowth}%/mo
  * Customer CLTV: $${cltv}
- Projected Milestone (Month 12):
  * Traffic: ${milestones.m12.traffic.toLocaleString()}
  * Leads: ${milestones.m12.leads.toLocaleString()}
  * Customers: ${milestones.m12.customers.toLocaleString()}
  * Monthly Revenue: $${milestones.m12.revenue.toLocaleString()}
  * Project ROI: ${milestones.m12.roi}%
      `.trim();

      await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          whatsapp: phone || "Not Provided",
          service: "Growth Forecast Report",
          website: websiteUrl,
          company: `Website: ${websiteUrl}`,
          details: detailsText,
          leadSource: "revenue_forecaster",
          _gotcha: gotcha
        })
      });

      // Track lead submitted
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: "roi_lead_submitted", lead_email: email });
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Failed to submit ROI forecaster lead:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const faqs = [
    {
      q: "What is the B2B Revenue Forecaster compounding formula?",
      a: "Our forecaster projects traffic compound-growth month-over-month. For instance, an 8% compounding traffic growth rate on a 5,000 starting traffic base scales monthly traffic to over 12,500 visits by month 12. Monthly leads are calculated by applying the Lead Conversion Rate. Closed customers are modeled by applying a contract close rate derived from Average Lead Value relative to Customer Lifetime Value (CLTV)."
    },
    {
      q: "How does the Monthly Traffic Growth rate compound?",
      a: "Unlike linear growth, compounding growth calculates the growth rate of the previous month's total. If starting traffic is 5,000, month 1 grows to 5,400 (at 8% growth). Month 2 grows 8% of 5,400, resulting in 5,832. Over 12 months, this exponential compounding leads to massive scaling output."
    },
    {
      q: "How should I determine my Average Lead Value?",
      a: "Average Lead Value is calculated by dividing total closed-won revenue from digital channels by the total number of marketing-qualified leads (MQLs) generated. If 100 leads yield 10 closed-won contracts worth $50,000 total, your average lead value is $500 ($50,000 / 100)."
    },
    {
      q: "Why is Customer Lifetime Value (CLTV) vital in B2B growth math?",
      a: "CLTV represents the total revenue a business expects to earn from a single client contract over their entire relationship. Having high CLTV allows B2B companies to spend more on customer acquisition (CAC), justifying premium retainers and custom SEO campaigns."
    },
    {
      q: "What is a standard ROI ratio for professional SEO and Web optimization?",
      a: "A healthy marketing ROI ratio is 5:1 (a 500% return). Top-tier organic search marketing combined with conversion-focused Next.js web application designs frequently exceed a 10:1 (1,000%) ROI ratio by month 12, due to compounding organic traffic."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#020203] text-white pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[25%] left-10 w-[500px] h-[500px] bg-accent-primary/[0.015] rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-10 w-[450px] h-[450px] bg-accent-secondary/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-1.5 text-xs font-semibold text-accent-primary">
            <TrendingUp className="w-3.5 h-3.5" />
            ROI &amp; Revenue Projection Engine
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Compounding <span className="text-gradient-primary">ROI Calculator</span>
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Help your business visualize compounding search traffic growth, lead volume changes, and annual digital ROI.
          </p>
        </div>

        {/* Dynamic Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Input Panel (5 columns) */}
          <div className="lg:col-span-5 glass border border-white/5 rounded-3xl p-6 md:p-8 space-y-8">
            <div className="flex items-center gap-2 text-accent-primary border-b border-white/5 pb-4">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider">ROI Input Parameters</h3>
            </div>

            <div className="space-y-6">
              
              {/* Slider 1: Monthly SEO Budget */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> Monthly SEO Budget
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
                  onChange={(e) => { setBudget(Number(e.target.value)); trackCalculationStart(); }}
                  onMouseUp={trackCalculationComplete}
                  onTouchEnd={trackCalculationComplete}
                  className="w-full accent-accent-primary cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] text-muted font-mono">
                  <span>$500</span>
                  <span>$7.5k</span>
                  <span>$15k</span>
                </div>
              </div>

              {/* Slider 2: Average Lead Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5" /> Average Lead Value
                  </span>
                  <span className="font-bold font-mono text-white text-sm bg-white/5 px-2.5 py-1 rounded">
                    ${leadValue.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="5000" 
                  step="10"
                  value={leadValue} 
                  onChange={(e) => { setLeadValue(Number(e.target.value)); trackCalculationStart(); }}
                  onMouseUp={trackCalculationComplete}
                  onTouchEnd={trackCalculationComplete}
                  className="w-full accent-accent-primary cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] text-muted font-mono">
                  <span>$10</span>
                  <span>$2.5k</span>
                  <span>$5k</span>
                </div>
              </div>

              {/* Slider 3: Lead Conversion Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" /> Lead Conversion Rate
                  </span>
                  <span className="font-bold font-mono text-white text-sm bg-white/5 px-2.5 py-1 rounded">
                    {conversionRate.toFixed(1)}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0.1" 
                  max="10.0" 
                  step="0.1"
                  value={conversionRate} 
                  onChange={(e) => { setConversionRate(Number(e.target.value)); trackCalculationStart(); }}
                  onMouseUp={trackCalculationComplete}
                  onTouchEnd={trackCalculationComplete}
                  className="w-full accent-accent-primary cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] text-muted font-mono">
                  <span>0.1%</span>
                  <span>5.0%</span>
                  <span>10.0%</span>
                </div>
              </div>

              {/* Slider 4: Monthly Traffic Growth */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> Monthly Traffic Growth
                  </span>
                  <span className="font-bold font-mono text-white text-sm bg-white/5 px-2.5 py-1 rounded">
                    {trafficGrowth}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  step="1"
                  value={trafficGrowth} 
                  onChange={(e) => { setTrafficGrowth(Number(e.target.value)); trackCalculationStart(); }}
                  onMouseUp={trackCalculationComplete}
                  onTouchEnd={trackCalculationComplete}
                  className="w-full accent-accent-primary cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] text-muted font-mono">
                  <span>1%</span>
                  <span>25%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Slider 5: Average Customer Lifetime Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> Customer Lifetime Value (LTV)
                  </span>
                  <span className="font-bold font-mono text-white text-sm bg-white/5 px-2.5 py-1 rounded">
                    ${cltv.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="100000" 
                  step="500"
                  value={cltv} 
                  onChange={(e) => { setCltv(Number(e.target.value)); trackCalculationStart(); }}
                  onMouseUp={trackCalculationComplete}
                  onTouchEnd={trackCalculationComplete}
                  className="w-full accent-accent-primary cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] text-muted font-mono">
                  <span>$500</span>
                  <span>$50k</span>
                  <span>$100k</span>
                </div>
              </div>

            </div>
          </div>

          {/* Results Display Area (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Compounding Month milestones comparison */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Month 1", data: milestones.m1 },
                { name: "Month 3", data: milestones.m3 },
                { name: "Month 6", data: milestones.m6 },
                { name: "Month 12", data: milestones.m12 }
              ].map((m, idx) => (
                <div key={idx} className="glass border border-white/5 rounded-2xl p-4 bg-[#0a0d24]/50 space-y-3">
                  <span className="text-[10px] text-accent-secondary font-bold uppercase tracking-wider block border-b border-white/5 pb-1">
                    {m.name}
                  </span>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between font-mono">
                      <span className="text-muted text-[10px]">Traffic:</span>
                      <span className="font-bold">{m.data.traffic.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-mono">
                      <span className="text-muted text-[10px]">Leads:</span>
                      <span className="font-bold">{m.data.leads}</span>
                    </div>
                    <div className="flex justify-between font-mono">
                      <span className="text-muted text-[10px]">Customers:</span>
                      <span className="font-bold">{m.data.customers}</span>
                    </div>
                    <div className="flex justify-between font-mono">
                      <span className="text-muted text-[10px]">Rev:</span>
                      <span className="font-bold text-white">${m.data.revenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-mono border-t border-white/5 pt-1 mt-1 text-[10px]">
                      <span className="text-muted">ROI:</span>
                      <span className={`font-bold ${m.data.roi >= 0 ? "text-emerald-400" : "text-rose-400"}`}>{m.data.roi}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Growth Curve Chart */}
            <div className="glass border border-white/5 rounded-3xl p-6 bg-gradient-to-b from-[#0a0d24] to-[#020203] space-y-4">
              <div className="flex justify-between items-center text-xs">
                <h4 className="font-heading font-bold uppercase tracking-wider text-white">Monthly Compounding Revenue Growth Curve</h4>
                <div className="flex items-center gap-1.5 text-accent-primary font-bold text-[10px]">
                  <BarChart3 className="w-3.5 h-3.5" /> Compounding Path
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
                  
                  {/* Vertical markers */}
                  <line x1="50" y1="20" x2="50" y2="210" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <line x1="192.5" y1="20" x2="192.5" y2="210" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="335" y1="20" x2="335" y2="210" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="477.5" y1="20" x2="477.5" y2="210" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="580" y1="20" x2="580" y2="210" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                  {/* Growth path */}
                  <path 
                    d={projectedPoints} 
                    fill="none" 
                    stroke="url(#roi-gradient)" 
                    strokeWidth="4" 
                    className="transition-all duration-300"
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="roi-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Y-Axis Labels */}
                <div className="absolute top-[20px] left-2 text-[9px] text-muted font-mono font-bold">
                  ${(milestones.m12.revenue * 1.15).toLocaleString(undefined, {maximumFractionDigits: 0})}
                </div>
                <div className="absolute top-[115px] left-2 text-[9px] text-muted font-mono">
                  ${((milestones.m12.revenue * 1.15) / 2).toLocaleString(undefined, {maximumFractionDigits: 0})}
                </div>
                <div className="absolute bottom-[30px] left-2 text-[9px] text-muted font-mono">
                  $0
                </div>

                {/* X-Axis Labels */}
                <div className="absolute bottom-1 left-[50px] text-[8px] text-muted font-mono font-bold">Month 1</div>
                <div className="absolute bottom-1 left-[192.5px] text-[8px] text-muted font-mono">Month 3</div>
                <div className="absolute bottom-1 left-[335px] text-[8px] text-muted font-mono font-bold">Month 6</div>
                <div className="absolute bottom-1 left-[565px] text-[8px] text-muted font-mono font-bold">Month 12</div>
              </div>

              {/* Action Banner */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-muted text-center sm:text-left">
                  Annual Compounding ROI Potential: <strong className="text-emerald-400">+{milestones.m12.roi}%</strong>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-transform cursor-pointer shadow-lg w-full sm:w-auto"
                >
                  Get My Custom Growth Forecast
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Lead Capture Modal Overlay */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-lg glass border border-accent-primary/20 rounded-3xl p-8 bg-gradient-to-b from-[#0c0d21] to-[#020203] space-y-6 shadow-2xl animate-in zoom-in-95 duration-200"
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
                    <h3 className="font-heading text-2xl font-black text-white">Claim Custom Growth Plan</h3>
                    <p className="text-xs text-muted leading-relaxed">
                      Secure the compounded ROI workbook generated for your B2B model and arrange a consultation with Digipeak growth engineers.
                    </p>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="space-y-4 pt-2">
                    <input type="text" name="_gotcha" value={gotcha} onChange={(e) => setGotcha(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Phone / WhatsApp</label>
                      <input 
                        type="tel"
                        required
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
                          Processing...
                        </>
                      ) : (
                        <>
                          Get My Custom Growth Forecast
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
                    <h3 className="font-heading text-2xl font-black text-white">Forecast Proposal Queued</h3>
                    <p className="text-xs text-muted leading-relaxed">
                      Thank you! Your growth projections have been submitted. Our strategy consultants will review your site <strong>{websiteUrl}</strong> and prepare a complete roadmap.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-col gap-2">
                    <Link
                      href="/contact"
                      onClick={() => { setShowModal(false); setIsSubmitted(false); }}
                      className="btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider block text-center text-white"
                    >
                      Book Free Strategy Review Call
                    </Link>
                    <button
                      onClick={() => { setShowModal(false); setIsSubmitted(false); }}
                      className="glass border border-white/10 hover:border-white/20 w-full py-3 text-xs font-bold uppercase tracking-wider text-muted hover:text-white transition-all rounded-full"
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
    </div>
  );
}
