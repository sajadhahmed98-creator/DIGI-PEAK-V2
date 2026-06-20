"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronRight, ChevronLeft, Upload, Paperclip, X, Globe, AlertTriangle, DollarSign, Calendar, User, Briefcase } from "lucide-react";

export function MultiStepContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    company: "",
    website: "",
    country: "Qatar", // Default
    city: "",
    service: "",
    monthlyBudget: "",
    projectBudget: "",
    timeline: "",
    details: "",
    bottleneck: "", // Added diagnostic field
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Pre-selection listener for Trust Section clicks
  useEffect(() => {
    const handlePreSelect = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.service) {
        setFormData((prev) => ({ ...prev, service: customEvent.detail.service }));
      }
    };

    window.addEventListener("select-contact-service", handlePreSelect);
    return () => {
      window.removeEventListener("select-contact-service", handlePreSelect);
    };
  }, []);

  const countries = [
    "Qatar",
    "UAE",
    "Saudi Arabia",
    "United Kingdom",
    "Singapore",
    "Australia",
    "New Zealand",
    "Sri Lanka",
    "Other",
  ];

  const serviceOptions = [
    { label: "SEO & Search Traffic", val: "SEO Services", desc: "Rank higher on Google search results" },
    { label: "Web Speed & Next.js Dev", val: "Web Design & Development", desc: "Build blazing-fast optimized sites" },
    { label: "AI & Workflow Automation", val: "AI Solutions", desc: "Automate leads and internal tasks" },
    { label: "E-Commerce Systems", val: "E-Commerce Development", desc: "Sleek stores with fast checkout" },
    { label: "Branding & UI/UX Design", val: "Branding & Creative", desc: "Premium visual assets & design" },
    { label: "General Marketing Scale", val: "Digital Marketing", desc: "Social, email, and ad campaigns" }
  ];

  const bottleneckOptions = [
    { label: "Slow page load speed / poor Web Vitals", val: "Slow Page Speed" },
    { label: "Low search visibility & keyword rankings", val: "Low SEO Search Traffic" },
    { label: "High drop-off rates on contact forms", val: "High Form Drop-off" },
    { label: "Outdated brand visuals / digital layout", val: "Outdated Visuals" },
    { label: "Not sure / need a complete system audit", val: "Need Complete Audit" }
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const removeFile = () => {
    setFileName(null);
  };

  const validateStep = () => {
    if (step === 1) {
      return formData.website && formData.service;
    }
    if (step === 2) {
      return formData.company && formData.country && formData.city && formData.bottleneck;
    }
    if (step === 3) {
      return formData.projectBudget && formData.timeline;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    } else {
      alert("Please select the required options to continue.");
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please provide your name and email to receive the blueprint.");
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
          whatsapp: formData.phone || formData.whatsapp || "",
          company: formData.company || "",
          country: formData.country || "",
          budget: formData.projectBudget,
          service: formData.service,
          details: `Timeline: ${formData.timeline || "Not selected"}
Website URL: ${formData.website || "Not provided"}
City: ${formData.city || "Not provided"}
Current Traffic Bottleneck: ${formData.bottleneck || "Not selected"}

Project Details/Notes:
${formData.details || "None provided."}`,
          leadSource: "B2B Growth Quiz Form",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to submit lead.");
      }

      setLoading(false);
      setShowModal(true);
      
      // Reset form states
      setFormData({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        company: "",
        website: "",
        country: "Qatar",
        city: "",
        service: "",
        monthlyBudget: "",
        projectBudget: "",
        timeline: "",
        details: "",
        bottleneck: "",
      });
      setFileName(null);
      setStep(1);
    } catch (err: any) {
      setLoading(false);
      alert(err.message || "An error occurred during submission. Please try again or email hello@digipeak.agency.");
    }
  };

  return (
    <section id="lead-form" className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black relative overflow-hidden scroll-mt-24">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-primary bg-accent-primary/10 px-3 py-1.5 rounded-full">Interactive Diagnostic</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mt-4 tracking-tight">Get Your B2B Organic Growth Blueprint</h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">Answer 4 quick questions to receive a tailored speed and search performance roadmap for your platform.</p>
        </div>

        {/* Step indicators */}
        <div className="mb-12 flex justify-between items-center relative max-w-md mx-auto">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/5 z-0" />
          
          {/* Progress bar fill */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary z-0 transition-all duration-500" 
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />

          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="relative z-10 flex flex-col items-center">
              <div 
                className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold border transition-all duration-300 ${
                  step === num 
                    ? "bg-[#050816] border-accent-primary text-white shadow-[0_0_16px_rgba(168,85,247,0.4)]" 
                    : step > num 
                    ? "bg-gradient-to-r from-accent-primary to-accent-secondary border-transparent text-white" 
                    : "bg-[#050816] border-white/10 text-muted"
                }`}
              >
                {step > num ? "✓" : num}
              </div>
              <span className={`text-[9px] font-mono font-bold uppercase tracking-wider mt-2 transition-colors duration-300 ${
                step === num ? "text-accent-primary" : "text-muted"
              }`}>
                {num === 1 ? "Goal" : num === 2 ? "Audit" : num === 3 ? "Scope" : "Contact"}
              </span>
            </div>
          ))}
        </div>

        {/* Lead Capture Form Container */}
        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Form Step Contents */}
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
            <div>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ x: 15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -15, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white mb-2 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-accent-primary" />
                        Step 1: Select Growth Target & Domain
                      </h3>
                      <p className="text-xs text-muted">We will evaluate your platform address and compile a preliminary organic crawl report.</p>
                    </div>

                    <div className="space-y-4">
                      {/* Web URL input */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                          Platform Domain / Website URL <span className="text-accent-primary">*</span>
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

                      {/* Clickable service cards */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold text-white uppercase tracking-wider mb-3 font-mono">
                          What is your primary growth goal? <span className="text-accent-primary">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {serviceOptions.map((s) => (
                            <button
                              key={s.val}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, service: s.val }))}
                              className={`text-left p-3 rounded-xl border transition-all text-sm group ${
                                formData.service === s.val
                                  ? "bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-accent-primary shadow-[0_0_12px_rgba(168,85,247,0.1)]"
                                  : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                              }`}
                            >
                              <div className="font-bold text-white group-hover:text-accent-primary transition-colors">{s.label}</div>
                              <div className="text-[11px] text-muted mt-0.5">{s.desc}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ x: 15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -15, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-accent-primary" />
                        Step 2: Diagnosis & Company Info
                      </h3>
                      <p className="text-xs text-muted">Identify current search and layout roadblocks restricting client acquisition.</p>
                    </div>

                    <div className="space-y-4">
                      {/* Bottleneck selectors */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold text-white uppercase tracking-wider mb-3 font-mono">
                          What is holding back your platform's conversion? <span className="text-accent-primary">*</span>
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {bottleneckOptions.map((b) => (
                            <button
                              key={b.val}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, bottleneck: b.val }))}
                              className={`text-left px-4 py-3 rounded-xl border transition-all text-xs font-semibold flex justify-between items-center ${
                                formData.bottleneck === b.val
                                  ? "bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-accent-primary text-white"
                                  : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04] text-slate-300"
                              }`}
                            >
                              <span>{b.label}</span>
                              {formData.bottleneck === b.val && <span className="text-accent-primary font-mono font-black">&bull; SELECTED</span>}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Company & Location grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                            Company Name <span className="text-accent-primary">*</span>
                          </label>
                          <input
                            type="text"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="e.g. Acme Corp"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                              Country <span className="text-accent-primary">*</span>
                            </label>
                            <select
                              name="country"
                              required
                              value={formData.country}
                              onChange={handleInputChange}
                              className="w-full bg-black border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm cursor-pointer"
                            >
                              {countries.map((c) => (
                                <option key={c} value={c} className="bg-[#050816] text-white">{c}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div className="flex flex-col">
                            <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                              City <span className="text-accent-primary">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              required
                              value={formData.city}
                              onChange={handleInputChange}
                              placeholder="e.g. Doha"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ x: 15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -15, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white mb-2 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-accent-primary" />
                        Step 3: Budget & Timeline
                      </h3>
                      <p className="text-xs text-muted">Determine project investment parameters and launch schedule thresholds.</p>
                    </div>

                    <div className="space-y-6">
                      {/* Budget options */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold text-white uppercase tracking-wider mb-3 font-mono">
                          What is your monthly budget allocation? <span className="text-accent-primary">*</span>
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {budgetOptions.map((b) => (
                            <button
                              key={b.val}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, projectBudget: b.val }))}
                              className={`text-center p-3 rounded-xl border transition-all text-xs font-bold ${
                                formData.projectBudget === b.val
                                  ? "bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-accent-primary text-white"
                                  : "bg-white/[0.02] border-white/5 hover:border-white/15 text-slate-300"
                              }`}
                            >
                              {b.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Timelines */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold text-white uppercase tracking-wider mb-3 font-mono">
                          Target project timeline <span className="text-accent-primary">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {timelines.map((t) => (
                            <button
                              key={t.val}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, timeline: t.val }))}
                              className={`text-left px-4 py-3 rounded-xl border transition-all text-xs font-semibold flex items-center gap-2 ${
                                formData.timeline === t.val
                                  ? "bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-accent-primary text-white"
                                  : "bg-white/[0.02] border-white/5 hover:border-white/15 text-slate-300"
                              }`}
                            >
                              <Calendar className={`w-4 h-4 ${formData.timeline === t.val ? 'text-accent-primary' : 'text-slate-400'}`} />
                              <span>{t.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ x: 15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -15, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white mb-2 flex items-center gap-2">
                        <User className="w-5 h-5 text-accent-primary" />
                        Step 4: Unlock Your Growth Blueprint
                      </h3>
                      <p className="text-xs text-muted">Who should we compile and send the technical audit report to?</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                            Your Name <span className="text-accent-primary">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                          />
                        </div>

                        <div className="flex flex-col">
                          <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                            Email Address <span className="text-accent-primary">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                          />
                        </div>
                      </div>

                      {/* Phone / Whatsapp */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 (50) 123-4567"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                        />
                      </div>

                      {/* Optional details */}
                      <div className="flex flex-col">
                        <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                          Add optional project details or focus areas
                        </label>
                        <textarea
                          name="details"
                          rows={3}
                          value={formData.details}
                          onChange={handleInputChange}
                          placeholder="Tell us about specific target keywords, competitors, or CMS bottlenecks you want analyzed..."
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm resize-none text-xs"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center justify-between gap-4 mt-12 pt-6 border-t border-white/5">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/10 active:scale-[0.98] transition-all cursor-pointer text-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-2 bg-white/5 border border-accent-primary/35 text-accent-primary font-semibold px-5 py-2.5 rounded-xl hover:bg-accent-primary/10 active:scale-[0.98] transition-all cursor-pointer text-xs"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold px-7 py-3 rounded-xl shadow-[0_4px_16px_rgba(168,85,247,0.2)] hover:opacity-95 active:scale-[0.98] disabled:opacity-50 transition-all cursor-pointer text-xs"
                >
                  {loading ? (
                    <span>Compiling Blueprint...</span>
                  ) : (
                    <>
                      <span>Generate My Blueprint</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass p-8 md:p-10 rounded-3xl border border-accent-primary/20 max-w-md w-full text-center relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)]"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-muted hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-6 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Blueprint Requested!
                </h3>
                <p className="text-muted text-xs leading-relaxed mb-6">
                  Thank you, your B2B Organic Growth Roadmap has been staged. Our strategy team is running a Lighthouse speed audit and keyword gap analysis on your domain. We will email your blueprint report within <span className="text-white font-bold">12–24 hours</span>.
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  Return to Page
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
