"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, X } from "lucide-react";

export function PersonalContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    details: "",
    budget: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const budgetOptions = [
    "Under $1,000",
    "$1,000 — $2,500",
    "$2,500 — $5,000",
    "$5,000 — $10,000",
    "$10,000+",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details || !formData.budget) {
      alert("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    // Simulate database write & SMTP notification delay
    setTimeout(() => {
      // Print detailed SMTP simulation log in browser console
      console.log("%c[SMTP SYSTEM] OUTBOUND EMAIL DISPATCH", "color: #a855f7; font-weight: bold; font-size: 14px;");
      console.log(`To: hello@digipeak.agency`);
      console.log(`From: web-inbound@sajadhahmed.me`);
      console.log(`Subject: New Personal Brand Consultation Request - ${formData.name}`);
      console.log(`Body: 
        -----------------------------------
        Name: ${formData.name}
        Email: ${formData.email}
        Company: ${formData.company || "Not provided"}
        Country: ${formData.country || "Not provided"}
        Budget: ${formData.budget}
        
        Project Details:
        ${formData.details}
        -----------------------------------
      `);

      setLoading(false);
      setShowModal(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        country: "",
        details: "",
        budget: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-24 lg:py-32 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              Connect
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Exceptional.
              </span>
            </h2>
            <p className="text-muted text-sm md:text-base max-w-lg mx-auto">
              Ready to take your brand or digital presence to the next tier? Fill out the brief details below to start a consultation.
            </p>
          </motion.div>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          {/* Subtle inside gradient glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                  Full Name <span className="text-accent-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
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
                <label htmlFor="email" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                  Email Address <span className="text-accent-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <label htmlFor="company" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Acme Corp"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col">
                <label htmlFor="country" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="e.g. Qatar"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm"
                />
              </div>
            </div>

            {/* Budget Range Selection */}
            <div className="flex flex-col">
              <label htmlFor="budget" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                Project Budget Range <span className="text-accent-primary">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-[#050816] text-muted">Select Budget Range</option>
                {budgetOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#050816] text-white">{opt}</option>
                ))}
              </select>
            </div>

            {/* Project Details */}
            <div className="flex flex-col">
              <label htmlFor="details" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                Project Scope &amp; Details <span className="text-accent-primary">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={5}
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Briefly describe what you'd like to build or solve..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.05] transition-all text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold py-4 rounded-xl shadow-[0_4px_16px_rgba(168,85,247,0.25)] hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-300 cursor-pointer"
            >
              {loading ? (
                <span>Dispatching Inquiry...</span>
              ) : (
                <>
                  <span>Send Consultation Request</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass p-8 md:p-10 rounded-3xl border border-accent-primary/20 max-w-md w-full text-center relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)]"
            >
              {/* Outer close button */}
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
                  Request Received
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Thank you! Your brand consultation inquiry has been submitted. An email summary has been routed to <span className="text-white font-bold font-mono">hello@digipeak.agency</span>. We will review the details and get back to you shortly.
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
