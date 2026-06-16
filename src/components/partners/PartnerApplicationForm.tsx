"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Sparkles, Send, Globe, MessageSquare } from "lucide-react";

export function PartnerApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    industry: "",
    linkedinProfile: "",
    referralPotential: "",
    howHeard: "",
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
      setErrorMsg("You must consent to our partnership validation terms.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        country: formData.country,
        industry: formData.industry,
        website: formData.linkedinProfile,
        referralPotential: formData.referralPotential,
        howHeard: formData.howHeard,
        service: "Referral Partnership",
        details: formData.message,
        leadSource: "Referral Partner Page Form",
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

      const newPartner = {
        id: "partner-" + Date.now(),
        ...formData,
        submittedAt: payload.submissionDate,
      };

      // Retrieve existing partners from simulated local storage DB, push and save
      if (typeof window !== "undefined") {
        const existing = localStorage.getItem("digipeak_partners");
        const partners = existing ? JSON.parse(existing) : [];
        partners.push(newPartner);
        localStorage.setItem("digipeak_partners", JSON.stringify(partners));
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        country: "",
        industry: "",
        linkedinProfile: "",
        referralPotential: "",
        howHeard: "",
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
    <section id="partner-application-form-section" className="py-10 md:py-16 lg:py-20 px-6 relative z-20 scroll-mt-28 bg-black">
      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Partner application</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Apply For Partnership
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Submit your information below. Our team will review your application and establish a custom referral agreement.
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
                Thank you for applying to the Digipeak Referral Partner Program. Our strategy team is reviewing your application details and will get back to you with the custom referral terms in 24 hours.
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
                    placeholder="Sajadh Ahmed"
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
                    placeholder="e.g. Consulting, Design, Freelancer"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* LinkedIn Profile */}
                <div className="flex flex-col">
                  <label htmlFor="linkedinProfile" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    id="linkedinProfile"
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

                {/* Monthly Referral Potential */}
                <div className="flex flex-col">
                  <label htmlFor="referralPotential" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Monthly Referral Potential *</label>
                  <select
                    id="referralPotential"
                    name="referralPotential"
                    required
                    value={formData.referralPotential}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors cursor-pointer min-h-[48px]"
                  >
                    <option value="" disabled>Select potential volume</option>
                    <option value="Occasionally (1-2 referrals / quarter)">Occasionally (1-2 referrals / quarter)</option>
                    <option value="Regularly (1-2 referrals / month)">Regularly (1-2 referrals / month)</option>
                    <option value="High Volume (3+ referrals / month)">High Volume (3+ referrals / month)</option>
                  </select>
                </div>

                {/* How Did You Hear About Us */}
                <div className="flex flex-col md:col-span-2">
                  <label htmlFor="howHeard" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">How Did You Hear About Us?</label>
                  <input
                    type="text"
                    id="howHeard"
                    name="howHeard"
                    value={formData.howHeard}
                    onChange={handleInputChange}
                    placeholder="e.g. Google Search, LinkedIn, Founder Sajadh Ahmed"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors min-h-[48px]"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Introduce Yourself & Your Audience (Message)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share a brief overview of the types of businesses you typically work with or refer..."
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
                  I agree that Digipeak Agency may contact me regarding the Referral Partner Program. I certify that all referral proposals submitted are genuine client introductions.
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
                      Processing Partner Application...
                    </>
                  ) : (
                    <>
                      Apply For Partnership
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
