"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Sparkles } from "lucide-react";

export function ResellerApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    country: "",
    website: "",
    industry: "",
    leadVolume: "",
    preferredServices: "",
    message: "",
    consent: false,
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
      setErrorMsg("You must consent to our reseller program agreement terms.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        company: formData.businessName,
        country: formData.country,
        website: formData.website,
        industry: formData.industry,
        monthlyVolume: formData.leadVolume,
        service: "Reseller Partnership",
        details: `Preferred Services: ${formData.preferredServices}\n\nAdditional Details:\n${formData.message}`,
        leadSource: "Reseller Partner Page Form",
        leadScore: "Warm",
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        submissionDate: new Date().toISOString()
      };

      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Application submission failed.");
      }

      const newReseller = {
        id: "reseller-" + Date.now(),
        ...formData,
        submittedAt: payload.submissionDate,
      };

      // Retrieve existing resellers from simulated database, push and save
      if (typeof window !== "undefined") {
        const existing = localStorage.getItem("digipeak_resellers");
        const resellers = existing ? JSON.parse(existing) : [];
        resellers.push(newReseller);
        localStorage.setItem("digipeak_resellers", JSON.stringify(resellers));
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        fullName: "",
        businessName: "",
        email: "",
        country: "",
        website: "",
        industry: "",
        leadVolume: "",
        preferredServices: "",
        message: "",
        consent: false,
      });
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "An error occurred during submission. Please try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reseller-application-form-section" className="py-10 md:py-16 lg:py-20 px-6 relative z-20 scroll-mt-28 bg-black">
      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Reseller Network Application</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Apply For Reseller Partnership
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Submit your information below to register as a reseller partner. Our partnership team will coordinate with you.
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
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Application Submitted Successfully!</h3>
              <p className="text-muted max-w-md mx-auto leading-relaxed mb-8 text-sm">
                Thank you for applying to the Digipeak Reseller Partnership Program. Our B2B strategy team will review your application details and contact you via email in 24 hours.
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
                    placeholder="Enter your full name"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Business Name */}
                <div className="flex flex-col">
                  <label htmlFor="businessName" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Business Name *</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Enter your business/agency name"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Country */}
                <div className="flex flex-col">
                  <label htmlFor="country" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Country *</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="e.g. Qatar"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Website */}
                <div className="flex flex-col">
                  <label htmlFor="website" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Website</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Industry */}
                <div className="flex flex-col">
                  <label htmlFor="industry" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Your Industry *</label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    placeholder="e.g. Agency, Sales Consultant, Marketing"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Monthly Lead Volume */}
                <div className="flex flex-col">
                  <label htmlFor="leadVolume" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Monthly Lead Volume *</label>
                  <select
                    id="leadVolume"
                    name="leadVolume"
                    required
                    value={formData.leadVolume}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors cursor-pointer min-h-[48px]"
                  >
                    <option value="" disabled>Select expected volume</option>
                    <option value="Occasionally (1-2 projects / month)">Occasionally (1-2 projects / month)</option>
                    <option value="Regularly (3-5 projects / month)">Regularly (3-5 projects / month)</option>
                    <option value="Enterprise (5+ projects / month)">Enterprise (5+ projects / month)</option>
                  </select>
                </div>

                {/* Preferred Services */}
                <div className="flex flex-col">
                  <label htmlFor="preferredServices" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Preferred Services *</label>
                  <input
                    type="text"
                    id="preferredServices"
                    name="preferredServices"
                    required
                    value={formData.preferredServices}
                    onChange={handleInputChange}
                    placeholder="e.g. Web Design, SEO, AI Solutions"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Additional Details (Message)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share details about your target client demographics or custom integration goals..."
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
                  I agree that Digipeak Agency may contact me regarding the Reseller Program. I certify that all projects submitted represent genuine client proposals.
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
                      Processing Reseller Application...
                    </>
                  ) : (
                    <>
                      Apply For Reseller Partnership
                      <Sparkles className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
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
