"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Check, AlertCircle, FileText, X, Sparkles, MessageSquare } from "lucide-react";

// Mock candidates to pre-populate if database is empty
export const initialMockCandidates = [
  {
    id: "cand-1",
    fullName: "Faisal Al-Thani",
    email: "faisal.thani@gmail.com",
    phone: "+974 5512 3456",
    country: "Qatar",
    city: "Doha",
    position: "UI/UX Designer",
    experience: "4",
    portfolioUrl: "https://faisaldesigns.co",
    linkedinUrl: "https://linkedin.com/in/faisal-thani",
    expectedSalary: "18,000 QAR",
    availableFrom: "2026-07-01",
    coverLetter: "I am a passionate UI/UX designer with 4 years of experience specializing in custom SaaS products and luxury real estate branding. I love creating micro-animations in Figma and focusing on user journey optimizations.",
    cvFileName: "faisal_thani_resume.pdf",
    cvBase64: "data:application/pdf;base64,JVBERi0xLjQKJ...[Simulated PDF Document]",
    submittedAt: "2026-06-02T14:32:00.000Z",
  },
  {
    id: "cand-2",
    fullName: "Aisha Al-Mansoori",
    email: "aisha.mansoori@gmail.com",
    phone: "+974 6689 0123",
    country: "Qatar",
    city: "Al Wakrah",
    position: "SEO Specialist",
    experience: "6",
    portfolioUrl: "https://aishaseo.com",
    linkedinUrl: "https://linkedin.com/in/aisha-mansoori",
    expectedSalary: "15,000 QAR",
    availableFrom: "Immediate",
    coverLetter: "I specialize in technical SEO auditing and local map pack placements. I have successfully scaled organic traffic by over 200% for GCC-based hospitality clients and retail groups.",
    cvFileName: "aisha_seo_cv.pdf",
    cvBase64: "data:application/pdf;base64,JVBERi0xLjQKJ...[Simulated PDF Document]",
    submittedAt: "2026-06-01T09:15:00.000Z",
  },
  {
    id: "cand-3",
    fullName: "Sarah Jenkins",
    email: "sarah.j@gmail.com",
    phone: "+44 7700 900077",
    country: "United Kingdom",
    city: "London",
    position: "Content Marketing Specialist",
    experience: "5",
    portfolioUrl: "https://sarahjwrites.me",
    linkedinUrl: "https://linkedin.com/in/sarah-j-writes",
    expectedSalary: "£3,800/month",
    availableFrom: "1 month notice",
    coverLetter: "Experienced copywriter and content strategist specializing in B2B SaaS. I write search-intent blog posts, high-converting copy, and manage social channels.",
    cvFileName: "sarah_jenkins_resume.pdf",
    cvBase64: "data:application/pdf;base64,JVBERi0xLjQKJ...[Simulated PDF Document]",
    submittedAt: "2026-06-03T08:20:00.000Z",
  },
  {
    id: "cand-4",
    fullName: "Kasun Perera",
    email: "kasun.p@outlook.com",
    phone: "+94 77 123 4567",
    country: "Sri Lanka",
    city: "Colombo",
    position: "Full Stack Developer",
    experience: "3",
    portfolioUrl: "https://kasun.dev",
    linkedinUrl: "https://linkedin.com/in/kasun-dev",
    expectedSalary: "LKR 350,000",
    availableFrom: "Immediate",
    coverLetter: "Full Stack Engineer with strong experience in Next.js, TailwindCSS, and Node.js. Passionate about page-load speeds, semantic structure, and headless e-commerce builds.",
    cvFileName: "kasun_perera_dev.pdf",
    cvBase64: "data:application/pdf;base64,JVBERi0xLjQKJ...[Simulated PDF Document]",
    submittedAt: "2026-06-03T11:05:00.000Z",
  }
];

export const positionsList = [
  "Graphic Designer",
  "Senior Graphic Designer",
  "UI/UX Designer",
  "Digital Marketing Executive",
  "SEO Specialist",
  "Social Media Manager",
  "Content Creator",
  "Content Marketing Specialist",
  "Web Designer",
  "WordPress Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "AI Automation Specialist",
  "CRM Specialist",
  "Sales Executive",
  "Business Development Executive",
  "Video Editor",
  "Motion Graphics Designer",
  "Account Manager",
  "Customer Support",
  "Internship",
  "Other"
];

export function TalentNetworkForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    position: "",
    experience: "",
    portfolioUrl: "",
    linkedinUrl: "",
    expectedSalary: "",
    availableFrom: "",
    coverLetter: "",
    consent: false,
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvBase64, setCvBase64] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Initialize DB if empty
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("digipeak_candidates");
      if (!stored) {
        localStorage.setItem("digipeak_candidates", JSON.stringify(initialMockCandidates));
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg("File size exceeds 10MB limit.");
        return;
      }
      setCvFile(file);
      setErrorMsg("");

      // Convert to Base64 for localStorage database simulation
      const reader = new FileReader();
      reader.onloadend = () => {
        setCvBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = () => {
    setCvFile(null);
    setCvBase64("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMsg("You must consent to our data processing guidelines.");
      return;
    }
    if (!formData.position) {
      setErrorMsg("Please select the position you are interested in.");
      return;
    }
    if (!cvFile) {
      setErrorMsg("Please upload your CV/Resume.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        whatsapp: formData.phone,
        company: "Candidate (Independent)",
        country: formData.country,
        service: `Career - Talent Network (${formData.position})`,
        details: `City: ${formData.city}\nPosition: ${formData.position}\nExperience: ${formData.experience} years\nPortfolio: ${formData.portfolioUrl || "Not provided"}\nLinkedIn: ${formData.linkedinUrl || "Not provided"}\nExpected Salary: ${formData.expectedSalary || "Not specified"}\nAvailable From: ${formData.availableFrom}\n\nCover Letter:\n${formData.coverLetter}\n\nCV Attachment Name: ${cvFile.name}`,
        leadSource: "Talent Network Form",
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

      const newCandidate = {
        id: "cand-" + Date.now(),
        ...formData,
        cvFileName: cvFile.name,
        cvBase64: cvBase64 || "data:application/pdf;base64,SimulatedMockData",
        submittedAt: payload.submissionDate,
      };

      // Retrieve existing, push and save
      const existing = localStorage.getItem("digipeak_candidates");
      const candidates = existing ? JSON.parse(existing) : [];
      candidates.push(newCandidate);
      localStorage.setItem("digipeak_candidates", JSON.stringify(candidates));

      setSubmitStatus("success");
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        position: "",
        experience: "",
        portfolioUrl: "",
        linkedinUrl: "",
        expectedSalary: "",
        availableFrom: "",
        coverLetter: "",
        consent: false,
      });
      setCvFile(null);
      setCvBase64("");
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "An error occurred during submission. Please try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application-form-section" className="py-12 md:py-20 lg:py-24 px-6 relative z-20 scroll-mt-28 bg-black">
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Talent network submission</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Talent Network.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We're always interested in meeting talented professionals across marketing, design, development, branding, automation and business growth. Submit your CV and our recruitment team will contact you when a suitable opportunity becomes available.
            </p>
          </motion.div>
        </div>

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
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Application Submitted!</h3>
              <p className="text-muted max-w-md mx-auto leading-relaxed mb-8">
                Thank you for submitting your application. Our recruitment team will review your profile and contact you if a suitable opportunity becomes available.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="btn-primary px-8 py-3 text-sm font-semibold text-white"
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
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
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
                    placeholder="name@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +94 77 362 4413"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                  />
                </div>

                {/* Position Dropdown */}
                <div className="flex flex-col">
                  <label htmlFor="position" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Position Interested In *</label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors cursor-pointer"
                  >
                    <option value="" disabled>Select a position</option>
                    {positionsList.map((pos) => (
                      <option key={pos} value={pos} className="bg-black text-white">{pos}</option>
                    ))}
                  </select>
                </div>

                {/* Current Country */}
                <div className="flex flex-col">
                  <label htmlFor="country" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Current Country *</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="e.g. Qatar"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                  />
                </div>

                {/* Current City */}
                <div className="flex flex-col">
                  <label htmlFor="city" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Current City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Doha"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                  />
                </div>

                {/* Years Of Experience */}
                <div className="flex flex-col">
                  <label htmlFor="experience" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Years Of Experience *</label>
                  <input
                    type="number"
                    id="experience"
                    name="experience"
                    required
                    min="0"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g. 3"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                  />
                </div>

                {/* Expected Salary (Optional) */}
                <div className="flex flex-col">
                  <label htmlFor="expectedSalary" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Expected Salary (Optional)</label>
                  <input
                    type="text"
                    id="expectedSalary"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    placeholder="e.g. 15,000 QAR/month"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                  />
                </div>

                {/* Portfolio URL */}
                <div className="flex flex-col">
                  <label htmlFor="portfolioUrl" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Portfolio URL</label>
                  <input
                    type="url"
                    id="portfolioUrl"
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleInputChange}
                    placeholder="https://yourportfolio.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                  />
                </div>

                {/* LinkedIn URL */}
                <div className="flex flex-col">
                  <label htmlFor="linkedinUrl" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                  />
                </div>

                {/* Available From */}
                <div className="flex flex-col md:col-span-2">
                  <label htmlFor="availableFrom" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Available From *</label>
                  <input
                    type="text"
                    id="availableFrom"
                    name="availableFrom"
                    required
                    value={formData.availableFrom}
                    onChange={handleInputChange}
                    placeholder="e.g. Immediate, 1 Month Notice, Specific Date (July 1st, 2026)"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                  />
                </div>

              </div>

              {/* Cover Letter */}
              <div className="flex flex-col">
                <label htmlFor="coverLetter" className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Cover Letter (Brief Pitch) *</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  required
                  rows={4}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Introduce yourself and explain why you want to join the Digipeak Global Talent Network..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors resize-none"
                />
              </div>

              {/* CV Upload */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">Upload CV / Resume *</span>
                
                {!cvFile ? (
                  <label className="border-2 border-dashed border-white/10 hover:border-accent-primary/50 transition-colors rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer bg-white/[0.005]">
                    <Upload className="h-8 w-8 text-muted mb-2 animate-bounce" />
                    <span className="text-sm font-semibold text-white">Click or drag resume file to upload</span>
                    <span className="text-xs text-muted mt-1">PDF, DOC, DOCX up to 10MB</span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="flex items-center justify-between p-4 rounded-xl border border-accent-primary/20 bg-accent-primary/5">
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-accent-primary" />
                      <div>
                        <p className="text-sm font-semibold text-white truncate max-w-md">{cvFile.name}</p>
                        <p className="text-xs text-muted">{(cvFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-rose-500/20 hover:border-rose-500/50 hover:text-rose-400 transition-all text-white cursor-pointer"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Consent Checkbox */}
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
                  I consent to Digipeak Agency storing my contact details, career profile, and resume attachments in their recruitment database to evaluate my suitability for future job openings.
                </label>
              </div>

              {/* Error messages */}
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
                      Uploading CV & Processing...
                    </>
                  ) : (
                    <>
                      Submit Application
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
