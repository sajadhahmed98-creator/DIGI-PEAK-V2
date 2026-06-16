"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Sparkles, Send } from "lucide-react";

export function WhiteLabelApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    country: "",
    website: "",
    industry: "",
    monthlyVolume: "",
    message: "",
    consent: false,
    _gotcha: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      setErrorMsg("You must consent to our partnership validation terms.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        company: formData.company,
        country: formData.country,
        website: formData.website,
        industry: formData.industry,
        monthlyVolume: formData.monthlyVolume,
        service: "White Label Partnership",
        details: formData.message,
        leadSource: "White Label Page Form",
        leadScore: "Warm",
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        submissionDate: new Date().toISOString(),
        _gotcha: formData._gotcha
      };

      // Call API Endpoint
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Application dispatch failed.");
      }

      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: 'contact_form_submit', lead_source: 'white_label_partner' });
      }

      // Simulate API network call lag
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Retrieve existing white label partners from local storage DB, push and save
      if (typeof window !== "undefined") {
        const existing = localStorage.getItem("digipeak_white_label");
        const partners = existing ? JSON.parse(existing) : [];
        partners.push({
          id: "wl-" + Date.now(),
          ...formData,
          submittedAt: payload.submissionDate
        });
        localStorage.setItem("digipeak_white_label", JSON.stringify(partners));
      }

      // Simulated SMTP console log details (No Fake Numbers)
      console.log("%c--- SIMULATING SMTP DISPATCH TO partnerships@digipeak.agency ---", "color: #10b981; font-weight: bold;");
      console.log(`From: ${formData.fullName} <${formData.email}>`);
      console.log(`To: partnerships@digipeak.agency`);
      console.log(`Subject: New White Label Partner Application - ${formData.company}`);
      console.log("Partner Details Payload:", {
        PartnerType: "White Label Partnership",
        Name: formData.fullName,
        Company: formData.company,
        Country: formData.country,
        Website: formData.website,
        Industry: formData.industry,
        MonthlyVolume: formData.monthlyVolume,
        SubmissionDate: payload.submissionDate
      });
      console.log("Partner Message Summary:", formData.message);
      console.log("%c---------------------------------------------------------", "color: #10b981;");

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        company: "",
        country: "",
        website: "",
        industry: "",
        monthlyVolume: "",
        message: "",
        consent: false,
        _gotcha: "",
      });
    } catch (err) {
      console.error(err);
      setErrorMsg("An error occurred during submission. Please try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="whitelabel-application-form-section" className="py-10 md:py-16 lg:py-20 px-6 relative z-20 scroll-mt-28 bg-black">
      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Apply Silent fulfillment</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Apply for White Label Partnership
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Submit your agency information. Our strategy team will review your capabilities and sign NDAs to set up your backend.
          </p>
        </div>

        {/* Application Form Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.01]"
        >
          {submitStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center"
            >
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Application Dispatched!</h3>
              <p className="text-muted max-w-md mx-auto leading-relaxed mb-8 text-sm">
                Thank you for applying to the Digipeak White Label Program. Our partner operations team will get in touch with scoping instructions and mutual NDA drafts in 24 hours.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="btn-primary px-8 py-3.5 text-sm font-semibold text-white cursor-pointer"
              >
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="_gotcha" value={formData._gotcha} onChange={handleInputChange} className="hidden" tabIndex={-1} autoComplete="off" />
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="flex flex-col">
                  <label htmlFor="fullName" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Sajadh Ahmed"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="partner@agency.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Agency Name */}
                <div className="flex flex-col">
                  <label htmlFor="company" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Agency Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Apex Marketing Solutions"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Agency Website */}
                <div className="flex flex-col">
                  <label htmlFor="website" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Agency Website URL *</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://apexagency.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Country */}
                <div className="flex flex-col">
                  <label htmlFor="country" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Country of Operations *</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="e.g. United Arab Emirates"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Industry niche */}
                <div className="flex flex-col">
                  <label htmlFor="industry" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Agency Niche / Industry *</label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    placeholder="e.g. E-Commerce SEO, Web Development"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Monthly Volume */}
                <div className="flex flex-col md:col-span-2">
                  <label htmlFor="monthlyVolume" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Monthly Project Volume Potential *</label>
                  <select
                    id="monthlyVolume"
                    name="monthlyVolume"
                    required
                    value={formData.monthlyVolume}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors cursor-pointer min-h-[48px]"
                  >
                    <option value="" disabled>Select project volume</option>
                    <option value="Starter (1-2 projects / month)">Starter (1-2 projects / month)</option>
                    <option value="Scaling (3-5 projects / month)">Scaling (3-5 projects / month)</option>
                    <option value="Enterprise (6+ projects / month)">Enterprise (6+ projects / month)</option>
                  </select>
                </div>

              </div>

              {/* Message details */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Tell Us About Your Client Demographics & Deliverable Needs</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about the types of client projects you typically manage, your target budgets, and your main fulfillment bottlenecks..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors resize-none"
                />
              </div>

              {/* Consent check */}
              <div className="flex items-start gap-3 mt-4">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleCheckboxChange}
                  className="mt-1 h-4 w-4 accent-accent-primary bg-black border border-white/10 rounded cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-muted leading-relaxed cursor-pointer select-none">
                  I agree that Digipeak Agency may contact me regarding the White Label Agency Partnership. I certify that my agency maintains direct ownership of client relationships.
                </label>
              </div>

              {/* Error alerts */}
              <AnimatePresence>
                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 text-rose-400 text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {errorMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Dispatching B2B Application...
                    </>
                  ) : (
                    <>
                      Apply For White Label Partner
                      <Send className="h-4 w-4 text-white group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
