"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Globe, User, Briefcase, Mail, Phone, X, Loader2, Calendar, AlertTriangle, ChevronRight } from "lucide-react";
import { trackClarityEvent } from "@/components/analytics/MicrosoftClarity";
import { CustomScheduler } from "./CustomScheduler";

export function MultiStepContactForm() {
  const [formData, setFormData] = useState({
    website: "",
    name: "",
    email: "",
    whatsapp: "",
    company: "",
  });

  const [preselectedService, setPreselectedService] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedUser, setSubmittedUser] = useState({ name: "", email: "" });
  const [formStarted, setFormStarted] = useState(false);

  // Post-submission qualification wizard state
  const [qualifierStep, setQualifierStep] = useState(1);
  const [qualifierLoading, setQualifierLoading] = useState(false);
  const [qualifierSubmitted, setQualifierSubmitted] = useState(false);
  const [qualifierData, setQualifierData] = useState({
    service: "",
    budget: "",
    timeline: "",
  });

  // Pre-selection listener for Trust Section clicks
  useEffect(() => {
    const handlePreSelect = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.service) {
        setPreselectedService(customEvent.detail.service);
        setQualifierData((prev) => ({ ...prev, service: customEvent.detail.service }));
      }
    };

    window.addEventListener("select-contact-service", handlePreSelect);
    return () => {
      window.removeEventListener("select-contact-service", handlePreSelect);
    };
  }, []);

  // Track when the user starts typing/interacting with the form
  const handleInteraction = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackClarityEvent("form_started");
    }
  };

  // Calendly booking listener removed

  const serviceOptions = [
    { label: "SEO & Search Traffic", val: "SEO Services", desc: "Rank higher on Google search results" },
    { label: "Web Speed & Next.js Dev", val: "Web Design & Development", desc: "Build blazing-fast optimized sites" },
    { label: "AI & Workflow Automation", val: "AI Solutions", desc: "Automate leads and internal tasks" },
    { label: "E-Commerce Systems", val: "E-Commerce Development", desc: "Sleek stores with fast checkout" },
    { label: "Branding & UI/UX Design", val: "Branding & Creative", desc: "Premium visual assets & design" },
    { label: "General Marketing Scale", val: "Digital Marketing", desc: "Social, email, and ad campaigns" }
  ];

  const budgetOptions = [
    { label: "Under $1,000 / mo", val: "$500 – $1,000" },
    { label: "$1,000 – $3,000 / mo", val: "$1,000 – $3,000" },
    { label: "$3,000 – $5,000 / mo", val: "$3,000 – $5,000" },
    { label: "$5,000 – $10,000 / mo", val: "$5,000 – $10,000" },
    { label: "$10,000+ / mo", val: "$10,000+" }
  ];

  const timelines = [
    { label: "Immediate (As soon as possible)", val: "Immediate (As soon as possible)" },
    { label: "Within 1 — 3 Months", val: "1 — 3 Months" },
    { label: "Within 3 — 6 Months", val: "3 — 6 Months" },
    { label: "General planning / sync", val: "6+ Months" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.website || !formData.name || !formData.email || !formData.whatsapp) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          company: formData.company || "",
          website: formData.website,
          leadSource: "B2B Growth Audit Form",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          details: `Requested a Free Growth Audit for domain: ${formData.website}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to submit lead.");
      }

      // Track successful submission events in Microsoft Clarity
      trackClarityEvent("form_submitted");
      trackClarityEvent("scheduler_opened");

      // Save user details for custom scheduler pre-filling
      setSubmittedUser({ name: formData.name, email: formData.email });
      setLoading(false);
      setShowModal(true);

      // Reset contact form
      setFormData({
        website: "",
        name: "",
        email: "",
        whatsapp: "",
        company: "",
      });
      setFormStarted(false);
      // Reset qualifier widget state
      setQualifierStep(1);
      setQualifierSubmitted(false);
    } catch (err: any) {
      setLoading(false);
      alert(err.message || "An error occurred during submission. Please try again or email hello@digipeak.agency.");
    }
  };

  // Submit additional qualification options to /api/update-lead
  const handleQualifierSubmit = async (finalData: typeof qualifierData) => {
    setQualifierLoading(true);
    try {
      const res = await fetch("/api/update-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: submittedUser.name,
          email: submittedUser.email,
          service: finalData.service,
          budget: finalData.budget,
          timeline: finalData.timeline,
        }),
      });

      if (res.ok) {
        setQualifierSubmitted(true);
      }
    } catch (err) {
      console.error("Failed to submit qualification updates", err);
    } finally {
      setQualifierLoading(false);
    }
  };

  const handleSelectService = (val: string) => {
    const updated = { ...qualifierData, service: val };
    setQualifierData(updated);
    setQualifierStep(2);
  };

  const handleSelectBudget = (val: string) => {
    const updated = { ...qualifierData, budget: val };
    setQualifierData(updated);
    setQualifierStep(3);
  };

  const handleSelectTimeline = (val: string) => {
    const updated = { ...qualifierData, timeline: val };
    setQualifierData(updated);
    handleQualifierSubmit(updated);
  };

  return (
    <>
      <section id="lead-form" className="py-24 md:py-16 lg:py-24 px-6 bg-black relative overflow-hidden scroll-mt-24">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-secondary/[0.015] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-primary bg-accent-primary/[0.03] px-3 py-1.5 rounded-full">
            Accelerate Growth
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mt-4 tracking-tight">
            Get Your B2B Organic Growth Blueprint
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Ready to scale? Fill in the simple form below to audit your site's SEO, speed, and conversion gaps in under 30 seconds.
          </p>
        </div>

        {/* Lead Capture Form Container */}
        <div className="glass p-6 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/[0.015] rounded-full blur-3xl pointer-events-none" />

          <form onSubmit={handleSubmit} onFocus={handleInteraction} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Row 1: Website URL */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-accent-primary" />
                  Website / Platform URL <span className="text-accent-primary">*</span>
                </label>
                <input
                  type="url"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://yourcompany.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                />
              </div>

              {/* Row 2: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-accent-primary" />
                    Full Name <span className="text-accent-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-accent-primary" />
                    Email Address <span className="text-accent-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                  />
                </div>
              </div>

              {/* Row 3: Phone/WhatsApp & Business Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-accent-primary" />
                    Phone / WhatsApp <span className="text-accent-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+971 (50) 123-4567"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-accent-primary" />
                    Business Name <span className="text-slate-500 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Corp"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-4 flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Compiling Audit Parameters...</span>
                  </>
                ) : (
                  <>
                    <span>Get My Free Growth Audit</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <div className="text-center mt-3 text-[10px] text-slate-500 tracking-wide uppercase font-mono">
                ✓ Includes Free Strategy Review Session
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

      {/* Success Modal - Placed outside parent stacking context with z-[9999] */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass rounded-3xl border border-white/10 max-w-4xl w-full text-left relative overflow-hidden shadow-[0_0_50px_rgba(124,92,255,0.25)] flex flex-col md:flex-row my-8 z-[10000]"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowModal(false);
                  setSubmittedUser({ name: "", email: "" });
                }}
                className="absolute top-4 right-4 z-20 text-slate-400 hover:text-white transition-colors cursor-pointer bg-slate-900/50 p-2 rounded-full border border-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Panel: DigiAI Smart Lead Qualification */}
              <div className="md:w-[38%] p-8 md:p-10 bg-slate-950/80 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center text-white mb-6 shadow-[0_4px_16px_rgba(168,85,247,0.3)]">
                    <CheckCircle2 className="w-6 h-6 animate-pulse" />
                  </div>
                  
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-primary bg-accent-primary/[0.03] px-2.5 py-1 rounded-full">
                    Lead Captured
                  </span>

                  <h3 className="font-heading text-2xl font-black text-white mt-4 tracking-tight leading-tight">
                    Audit Blueprint Confirmed!
                  </h3>

                  {/* Qualification Wizard */}
                  <div className="mt-8">
                    <AnimatePresence mode="wait">
                      {qualifierLoading ? (
                        <motion.div
                          key="qualifier-loader"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="py-12 flex flex-col items-center justify-center gap-3"
                        >
                          <Loader2 className="w-8 h-8 text-accent-primary animate-spin" />
                          <p className="text-xs text-slate-400 font-mono text-center">Syncing audit preferences...</p>
                        </motion.div>
                      ) : qualifierSubmitted ? (
                        <motion.div
                          key="qualifier-success"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-4"
                        >
                          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                            <div>
                              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">Parameters Configured</h4>
                              <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                                Our AI system has logged your specific goals, budget, and timeline to tailormake your organic blueprint.
                              </p>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                            → Next: Select a slot on the calendar to secure your walkthrough session with our strategist.
                          </p>
                        </motion.div>
                      ) : (
                        <>
                          {qualifierStep === 1 && (
                            <motion.div
                              key="q-step-1"
                              initial={{ opacity: 0, x: 15 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -15 }}
                              className="space-y-4"
                            >
                              <div className="space-y-1">
                                <h4 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
                                  DigiAI Customizer (Step 1/3)
                                </h4>
                                <p className="text-xs text-white font-bold">What is your primary interest area?</p>
                              </div>
                              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 digiai-scrollbar">
                                {serviceOptions.map((opt) => (
                                  <button
                                    key={opt.val}
                                    type="button"
                                    onClick={() => handleSelectService(opt.val)}
                                    className="w-full text-left p-2.5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-accent-primary/30 transition-all text-xs group"
                                  >
                                    <span className="font-bold text-white group-hover:text-accent-primary transition-colors block">
                                      {opt.label}
                                    </span>
                                    <span className="text-[10px] text-slate-500 block mt-0.5">{opt.desc}</span>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {qualifierStep === 2 && (
                            <motion.div
                              key="q-step-2"
                              initial={{ opacity: 0, x: 15 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -15 }}
                              className="space-y-4"
                            >
                              <div className="space-y-1">
                                <h4 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
                                  DigiAI Customizer (Step 2/3)
                                </h4>
                                <p className="text-xs text-white font-bold">Estimated monthly budget?</p>
                              </div>
                              <div className="space-y-2">
                                {budgetOptions.map((opt) => (
                                  <button
                                    key={opt.val}
                                    type="button"
                                    onClick={() => handleSelectBudget(opt.val)}
                                    className="w-full text-left px-4 py-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-accent-primary/30 text-xs font-bold text-white transition-all"
                                  >
                                    {opt.label}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {qualifierStep === 3 && (
                            <motion.div
                              key="q-step-3"
                              initial={{ opacity: 0, x: 15 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -15 }}
                              className="space-y-4"
                            >
                              <div className="space-y-1">
                                <h4 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider">
                                  DigiAI Customizer (Step 3/3)
                                </h4>
                                <p className="text-xs text-white font-bold">Target project timeline?</p>
                              </div>
                              <div className="space-y-2">
                                {timelines.map((opt) => (
                                  <button
                                    key={opt.val}
                                    type="button"
                                    onClick={() => handleSelectTimeline(opt.val)}
                                    className="w-full text-left px-4 py-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-accent-primary/30 text-xs font-bold text-white transition-all flex items-center gap-2"
                                  >
                                    <Calendar className="w-3.5 h-3.5 text-accent-secondary" />
                                    <span>{opt.label}</span>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-[10px] text-slate-500 italic">
                    Prefer email? We'll deliver the standard blueprint to your inbox within 12–24 hours.
                  </p>
                </div>
              </div>

              {/* Right Panel: Custom Scheduler */}
              <div className="md:w-[62%] bg-slate-900/40 relative min-h-[550px] md:min-h-[650px] flex flex-col">
                <CustomScheduler
                  userName={submittedUser.name}
                  userEmail={submittedUser.email}
                  funnelName="contact"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
