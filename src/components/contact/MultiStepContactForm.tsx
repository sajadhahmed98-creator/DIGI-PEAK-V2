"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronRight, ChevronLeft, Upload, Paperclip, X } from "lucide-react";

export function MultiStepContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    company: "",
    website: "",
    country: "",
    city: "",
    service: "",
    monthlyBudget: "",
    projectBudget: "",
    timeline: "",
    details: "",
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
        // Automatically skip to project specifics step if they click a service card
        // or just let them fill Step 1 first (safer to let them fill Step 1 first so they enter name/email)
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

  const services = [
    "SEO Services",
    "Web Design & Development",
    "E-Commerce Development",
    "Digital Marketing",
    "Social Media Management",
    "Branding & Creative",
    "AI Solutions",
    "UI/UX Design",
    "Mobile App Development",
    "CRM & Automation",
    "Content Marketing",
    "Video Production",
    "Email Marketing",
    "Reputation Management",
    "Hosting & Maintenance",
    "General Inquiry",
  ];

  const budgetOptions = [
    "Under $500",
    "$500 – $1,000",
    "$1,000 – $3,000",
    "$3,000 – $5,000",
    "$5,000 – $10,000",
    "$10,000+",
  ];

  const timelines = [
    "Immediate (As soon as possible)",
    "1 — 3 Months",
    "3 — 6 Months",
    "6+ Months",
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
      return formData.name && formData.email && formData.phone;
    }
    if (step === 2) {
      return formData.company && formData.country && formData.city;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    } else {
      alert("Please fill out all required fields for this step.");
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.service || !formData.projectBudget || !formData.details) {
      alert("Please fill out the project specifications.");
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
          whatsapp: formData.whatsapp || "",
          company: formData.company || "",
          country: formData.country || "",
          budget: formData.projectBudget,
          service: formData.service,
          details: `Timeline: ${formData.timeline || "Not selected"}\nWebsite: ${formData.website || "Not provided"}\nCity: ${formData.city || "Not provided"}\nMonthly Budget: ${formData.monthlyBudget || "Not requested"}\n\nProject Details:\n${formData.details}`,
          leadSource: "Client Contact Form",
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
        country: "",
        city: "",
        service: "",
        monthlyBudget: "",
        projectBudget: "",
        timeline: "",
        details: "",
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
        {/* Step indicators */}
        <div className="mb-12 flex justify-between items-center relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/5 z-0" />
          
          {/* Progress bar fill */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary z-0 transition-all duration-500" 
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />

          {[1, 2, 3].map((num) => (
            <div key={num} className="relative z-10 flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold border transition-all duration-300 ${
                  step === num 
                    ? "bg-[#050816] border-accent-primary text-white shadow-[0_0_16px_rgba(168,85,247,0.4)]" 
                    : step > num 
                    ? "bg-gradient-to-r from-accent-primary to-accent-secondary border-transparent text-white" 
                    : "bg-[#050816] border-white/10 text-muted"
                }`}
              >
                {step > num ? "✓" : num}
              </div>
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider mt-2 transition-colors duration-300 ${
                step === num ? "text-accent-primary" : "text-muted"
              }`}>
                {num === 1 ? "Contact" : num === 2 ? "Company" : "Project"}
              </span>
            </div>
          ))}
        </div>

        {/* Lead Capture Form Container */}
        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden min-h-[480px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Form Step Contents */}
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
            <div>
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">Step 1: Contact Details</h3>
                    <p className="text-xs text-muted">Please provide your primary contact information.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                        Full Name <span className="text-accent-primary">*</span>
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

                    {/* Email */}
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
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                        Phone Number <span className="text-accent-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+94 77 362 4413"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="+94 77 362 4413"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">Step 2: Company &amp; Location</h3>
                    <p className="text-xs text-muted">Tell us about your organization and region.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
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

                    {/* Website */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://example.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                      />
                    </div>

                    {/* Country Dropdown */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                        Country <span className="text-accent-primary">*</span>
                      </label>
                      <select
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#050816] text-muted">Select Country</option>
                        {countries.map((c) => (
                          <option key={c} value={c} className="bg-[#050816] text-white">{c}</option>
                        ))}
                      </select>
                    </div>

                    {/* City */}
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
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">Step 3: Project Specifications</h3>
                    <p className="text-xs text-muted">Define the scope, timelines, and budget for your request.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Dropdown */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                        Service Required <span className="text-accent-primary">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#050816] text-muted">Select Service</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#050816] text-white">{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Monthly Budget Dropdown */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                        Monthly Marketing Budget
                      </label>
                      <select
                        name="monthlyBudget"
                        value={formData.monthlyBudget}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm cursor-pointer"
                      >
                        <option value="" className="bg-[#050816] text-muted">No monthly budget required</option>
                        {budgetOptions.map((b) => (
                          <option key={`m-${b}`} value={b} className="bg-[#050816] text-white">{b}</option>
                        ))}
                      </select>
                    </div>

                    {/* Project Budget Dropdown */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                        Project Budget <span className="text-accent-primary">*</span>
                      </label>
                      <select
                        name="projectBudget"
                        required
                        value={formData.projectBudget}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#050816] text-muted">Select Project Budget</option>
                        {budgetOptions.map((b) => (
                          <option key={`p-${b}`} value={b} className="bg-[#050816] text-white">{b}</option>
                        ))}
                      </select>
                    </div>

                    {/* Timeline Dropdown */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                        Project Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#050816] text-muted">Select Timeline</option>
                        {timelines.map((t) => (
                          <option key={t} value={t} className="bg-[#050816] text-white">{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col mt-6">
                    <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                      Project Details <span className="text-accent-primary">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={4}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Briefly describe what you'd like to achieve, target deliverables, or other business details..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm resize-none"
                    />
                  </div>

                  {/* File Upload mock */}
                  <div className="mt-6">
                    <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono block">
                      Project Brief or Attachments
                    </label>
                    
                    {!fileName ? (
                      <div className="relative border border-dashed border-white/15 hover:border-accent-primary/30 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                        <input
                          type="file"
                          onChange={handleFileUpload}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <Upload className="w-6 h-6 text-muted group-hover:text-accent-primary mb-2 transition-colors" />
                        <span className="text-xs text-muted font-medium">Click to select files (PDF, JPG, PNG, DOCX)</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between glass border border-accent-primary/20 rounded-xl p-3 bg-white/[0.02]">
                        <div className="flex items-center gap-2 text-sm text-white">
                          <Paperclip className="w-4 h-4 text-accent-primary" />
                          <span className="truncate max-w-[200px] text-xs font-mono">{fileName}</span>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="text-muted hover:text-white transition-colors cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center justify-between gap-4 mt-12 pt-6 border-t border-white/5">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 active:scale-[0.98] transition-all cursor-pointer text-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-2 bg-white/5 border border-accent-primary/35 text-accent-primary font-semibold px-6 py-3 rounded-xl hover:bg-accent-primary/10 active:scale-[0.98] transition-all cursor-pointer text-sm"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(168,85,247,0.2)] hover:opacity-95 active:scale-[0.98] disabled:opacity-50 transition-all cursor-pointer text-sm"
                >
                  {loading ? (
                    <span>Submitting Project...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
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
                  Proposal Request Staged
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Thank you for contacting Digipeak. Our team will review your inquiry and respond as soon as possible (usually within 24–48 hours). A simulation copy of the SMTP payload has been outputted to your browser console routing to <span className="text-white font-bold font-mono">hello@digipeak.agency</span>.
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
