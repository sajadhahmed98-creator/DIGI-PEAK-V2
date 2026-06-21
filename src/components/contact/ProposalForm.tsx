"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Globe, User, Briefcase, Mail, Phone, X, Loader2, Calendar, ChevronRight, FileText } from "lucide-react";
import { trackClarityEvent } from "@/components/analytics/MicrosoftClarity";

export function ProposalForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    website: "",
    service: "",
    budget: "",
    timeline: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedUser, setSubmittedUser] = useState({ name: "", email: "" });
  const [formStarted, setFormStarted] = useState(false);

  const serviceOptions = [
    "SEO",
    "Web Design",
    "AI Automation",
    "Lead Generation",
    "Branding",
    "Digital Marketing",
    "Other",
  ];

  const budgetOptions = [
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
  ];

  const timelineOptions = [
    "Immediately",
    "Within 30 Days",
    "Within 90 Days",
    "Researching",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInteraction = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackClarityEvent("proposal_started");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.company ||
      !formData.email ||
      !formData.whatsapp ||
      !formData.website ||
      !formData.service ||
      !formData.budget ||
      !formData.timeline
    ) {
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
          company: formData.company,
          website: formData.website,
          service: formData.service,
          budget: formData.budget,
          leadSource: "Proposal Request Form",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          details: `Target Timeline: ${formData.timeline}
          
Project Details/Notes:
${formData.details || "None provided."}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to submit lead.");
      }

      // Track successful submission events in Microsoft Clarity
      trackClarityEvent("proposal_submitted");
      trackClarityEvent("calendly_opened");

      // Set active funnel for Calendly tracker
      sessionStorage.setItem("active_funnel", "proposal");

      setSubmittedUser({ name: formData.name, email: formData.email });
      setLoading(false);
      setShowModal(true);

      // Reset contact form
      setFormData({
        name: "",
        company: "",
        email: "",
        whatsapp: "",
        website: "",
        service: "",
        budget: "",
        timeline: "",
        details: "",
      });
      setFormStarted(false);
    } catch (err: any) {
      setLoading(false);
      alert(err.message || "An error occurred during submission. Please try again.");
    }
  };

  return (
    <div className="relative z-10 mx-auto max-w-4xl">
      {/* Lead Capture Form Container */}
      <div className="glass p-6 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

        <form onSubmit={handleSubmit} onFocus={handleInteraction} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Row 1: Name & Business Name */}
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
                  <Briefcase className="w-3.5 h-3.5 text-accent-primary" />
                  Business Name <span className="text-accent-primary">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Acme Corp"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone/WhatsApp */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

            {/* Row 3: Website URL & Service required */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="flex flex-col">
                <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-accent-primary" />
                  Service Required <span className="text-accent-primary">*</span>
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-[#050816] border border-white/10 rounded-xl px-3 py-3.5 text-white focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm cursor-pointer"
                >
                  <option value="" disabled className="text-slate-500">Select a service...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s} className="bg-[#050816] text-white">{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Budget & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                  <span className="text-accent-primary font-bold text-sm">$</span>
                  Estimated Monthly Budget <span className="text-accent-primary">*</span>
                </label>
                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full bg-[#050816] border border-white/10 rounded-xl px-3 py-3.5 text-white focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm cursor-pointer"
                >
                  <option value="" disabled className="text-slate-500">Select budget range...</option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b} className="bg-[#050816] text-white">{b}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                  Project Timeline <span className="text-accent-primary">*</span>
                </label>
                <select
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full bg-[#050816] border border-white/10 rounded-xl px-3 py-3.5 text-white focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm cursor-pointer"
                >
                  <option value="" disabled className="text-slate-500">Select timeline...</option>
                  {timelineOptions.map((t) => (
                    <option key={t} value={t} className="bg-[#050816] text-white">{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 5: Project Details */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                Project Details
              </label>
              <textarea
                name="details"
                rows={4}
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Tell us about specific target goals, challenges, or specifications..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm resize-none"
              />
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
                  <span>Submitting Proposal Request...</span>
                </>
              ) : (
                <>
                  <span>Request Custom Proposal</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass rounded-3xl border border-white/10 max-w-4xl w-full text-left relative overflow-hidden shadow-[0_0_50px_rgba(124,92,255,0.25)] flex flex-col md:flex-row my-8"
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

              {/* Left Panel: Pitch/Value Prop */}
              <div className="md:w-[38%] p-8 md:p-10 bg-slate-950/80 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center text-white mb-6 shadow-[0_4px_16px_rgba(168,85,247,0.3)]">
                    <CheckCircle2 className="w-6 h-6 animate-pulse" />
                  </div>
                  
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-primary bg-accent-primary/10 px-2.5 py-1 rounded-full">
                    Request Received
                  </span>
                  
                  <h3 className="font-heading text-2.5xl md:text-3xl font-black text-white mt-4 tracking-tight leading-tight">
                    Proposal Scheduled!
                  </h3>
                  
                  <p className="text-slate-400 text-xs leading-relaxed mt-3">
                    Your custom proposal parameters are registered. Our strategy team is reviewing your project details.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mt-0.5 flex-shrink-0 animate-bounce">
                        <span className="text-[10px] font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Select a Strategy Session</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">Pick a convenient time on the calendar to discuss your objectives live.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mt-0.5 flex-shrink-0">
                        <span className="text-[10px] font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Custom Proposal Walkthrough</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">We will present your tailored scope, deliverables, and exact timelines live.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-[10px] text-slate-500 italic">
                    Prefer email? We'll deliver the first draft proposal to your inbox within 24–48 hours.
                  </p>
                </div>
              </div>

              {/* Right Panel: Calendly Embed */}
              <div className="md:w-[62%] bg-slate-900/40 relative min-h-[550px] md:min-h-[650px] flex flex-col">
                <div className="absolute inset-0 z-0 flex items-center justify-center bg-slate-950/20">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-4 border-accent-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-xs text-slate-400 font-mono">Loading Scheduler...</p>
                  </div>
                </div>

                <iframe
                  src={`https://calendly.com/digipeak-agency/strategy-session?background_color=0f172a&text_color=ffffff&primary_color=7c5cff&name=${encodeURIComponent(submittedUser.name)}&email=${encodeURIComponent(submittedUser.email)}`}
                  width="100%"
                  height="100%"
                  className="relative z-10 border-0 w-full flex-grow min-h-[550px] md:min-h-[650px]"
                  title="Schedule a Proposal Discovery Call with Digipeak"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
