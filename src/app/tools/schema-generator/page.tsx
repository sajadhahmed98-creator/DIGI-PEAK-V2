"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Code2, Copy, Check, Plus, Trash2, RefreshCw } from "lucide-react";

type SchemaType = "organization" | "person" | "faq" | "breadcrumb";

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function SchemaGeneratorPage() {
  const [schemaType, setSchemaType] = useState<SchemaType>("organization");
  const [copied, setCopied] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  // Organization state
  const [orgName, setOrgName] = useState("Digipeak Agency");
  const [orgUrl, setOrgUrl] = useState("https://www.digipeak.agency");
  const [orgLogo, setOrgLogo] = useState("https://www.digipeak.agency/logo.png");
  const [orgSocial, setOrgSocial] = useState("https://www.linkedin.com/company/digipeakagencyglobal");

  // Person state
  const [personName, setPersonName] = useState("Sajadh Ahmed");
  const [personTitle, setPersonTitle] = useState("Founder");
  const [personUrl, setPersonUrl] = useState("https://www.digipeak.agency/author/sajadh-ahmed");
  const [personBio, setPersonBio] = useState("B2B growth strategist and creative designer.");

  // FAQ state
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    { question: "What services do you provide?", answer: "We provide web design, technical SEO, digital marketing, paid ads, and CRM AI pipeline automation." }
  ]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  // Breadcrumb state
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { name: "Home", url: "https://www.digipeak.agency" },
    { name: "Services", url: "https://www.digipeak.agency/services" }
  ]);
  const [newCrumbName, setNewCrumbName] = useState("");
  const [newCrumbUrl, setNewCrumbUrl] = useState("");

  // Dynamic schema builder
  useEffect(() => {
    let schemaObj: any = {};

    if (schemaType === "organization") {
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${orgUrl}/#organization`,
        "name": orgName,
        "url": orgUrl,
        "logo": orgLogo,
        "sameAs": orgSocial ? [orgSocial] : []
      };
    } else if (schemaType === "person") {
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${personUrl}/#person`,
        "name": personName,
        "jobTitle": personTitle,
        "url": personUrl,
        "description": personBio
      };
    } else if (schemaType === "faq") {
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };
    } else if (schemaType === "breadcrumb") {
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@id": crumb.url,
            "name": crumb.name
          }
        }))
      };
    }

    setGeneratedCode(`<script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n</script>`);
  }, [
    schemaType, orgName, orgUrl, orgLogo, orgSocial,
    personName, personTitle, personUrl, personBio,
    faqItems, breadcrumbs
  ]);

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addFAQ = () => {
    if (!newQuestion || !newAnswer) return;
    setFaqItems([...faqItems, { question: newQuestion, answer: newAnswer }]);
    setNewQuestion("");
    setNewAnswer("");
  };

  const removeFAQ = (idx: number) => {
    setFaqItems(faqItems.filter((_, i) => i !== idx));
  };

  const addBreadcrumb = () => {
    if (!newCrumbName || !newCrumbUrl) return;
    setBreadcrumbs([...breadcrumbs, { name: newCrumbName, url: newCrumbUrl }]);
    setNewCrumbName("");
    setNewCrumbUrl("");
  };

  const removeBreadcrumb = (idx: number) => {
    setBreadcrumbs(breadcrumbs.filter((_, i) => i !== idx));
  };

  const resetFields = () => {
    setOrgName("Digipeak Agency");
    setOrgUrl("https://www.digipeak.agency");
    setOrgLogo("https://www.digipeak.agency/logo.png");
    setOrgSocial("https://www.linkedin.com/company/digipeakagencyglobal");
    setPersonName("Sajadh Ahmed");
    setPersonTitle("Founder");
    setPersonUrl("https://www.digipeak.agency/author/sajadh-ahmed");
    setPersonBio("B2B growth strategist and creative designer.");
    setFaqItems([{ question: "What services do you provide?", answer: "We provide web design, technical SEO, digital marketing, paid ads, and CRM AI pipeline automation." }]);
    setBreadcrumbs([{ name: "Home", url: "https://www.digipeak.agency" }, { name: "Services", url: "https://www.digipeak.agency/services" }]);
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Navigation */}
        <div className="flex items-center justify-between border-b border-white/5 pb-6">
          <div className="flex items-center gap-4">
            <Link href="/tools" className="glass hover:bg-white/5 border border-white/10 p-2.5 rounded-xl text-muted hover:text-white transition-all">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="font-heading text-2xl font-black tracking-tight">
                JSON-LD <span className="text-gradient-primary">Schema Generator</span>
              </h1>
              <p className="text-xs text-muted">Generate error-free B2B rich snippets schema outputs</p>
            </div>
          </div>
          <button 
            onClick={resetFields}
            className="glass hover:bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-bold text-muted hover:text-white flex items-center gap-2 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: INPUT BUILDER PANEL */}
          <div className="lg:col-span-6 glass border border-white/5 rounded-2xl p-6 space-y-6">
            
            {/* Schema Type Switch Tabs */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Select Schema Category</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-4 gap-2">
                {(["organization", "person", "faq", "breadcrumb"] as SchemaType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSchemaType(type)}
                    className={`py-2.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                      schemaType === type
                        ? "bg-accent-primary text-white shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                        : "bg-white/5 border border-white/10 text-muted hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic input form inputs depending on type */}
            <div className="space-y-4 border-t border-white/5 pt-6">
              {schemaType === "organization" && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Organization Name</label>
                    <input 
                      type="text" 
                      value={orgName} 
                      onChange={(e) => setOrgName(e.target.value)} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Website URL</label>
                    <input 
                      type="text" 
                      value={orgUrl} 
                      onChange={(e) => setOrgUrl(e.target.value)} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Logo Image URL</label>
                    <input 
                      type="text" 
                      value={orgLogo} 
                      onChange={(e) => setOrgLogo(e.target.value)} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Social Media Profile URL</label>
                    <input 
                      type="text" 
                      value={orgSocial} 
                      onChange={(e) => setOrgSocial(e.target.value)} 
                      placeholder="e.g. LinkedIn link"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                </div>
              )}

              {schemaType === "person" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Full Name</label>
                      <input 
                        type="text" 
                        value={personName} 
                        onChange={(e) => setPersonName(e.target.value)} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-primary"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Job Title</label>
                      <input 
                        type="text" 
                        value={personTitle} 
                        onChange={(e) => setPersonTitle(e.target.value)} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Profile URL</label>
                    <input 
                      type="text" 
                      value={personUrl} 
                      onChange={(e) => setPersonUrl(e.target.value)} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Short Biography</label>
                    <textarea 
                      value={personBio} 
                      onChange={(e) => setPersonBio(e.target.value)} 
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {schemaType === "faq" && (
                <div className="space-y-4">
                  {/* FAQs list */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">FAQ List</label>
                    {faqItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl text-xs">
                        <div>
                          <strong className="text-white block">Q: {item.question}</strong>
                          <span className="text-muted block mt-1">A: {item.answer}</span>
                        </div>
                        <button 
                          onClick={() => removeFAQ(idx)}
                          className="text-rose-400 hover:text-rose-300 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add Q/A fields */}
                  <div className="border-t border-white/5 pt-4 space-y-3 bg-white/[0.01] p-4 rounded-xl">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent-secondary">Add FAQ Accordion Row</h4>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="Question" 
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white"
                      />
                      <input 
                        type="text" 
                        placeholder="Answer" 
                        value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white"
                      />
                    </div>
                    <button 
                      onClick={addFAQ}
                      className="bg-white/5 border border-white/10 hover:bg-white/10 text-[10px] font-bold uppercase px-4 py-2 rounded-lg text-white transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Row
                    </button>
                  </div>
                </div>
              )}

              {schemaType === "breadcrumb" && (
                <div className="space-y-4">
                  {/* Breadcrumb list */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Breadcrumbs hierarchy</label>
                    <div className="space-y-1">
                      {breadcrumbs.map((crumb, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-white/5 border border-white/10 rounded-xl text-xs">
                          <div>
                            <span className="text-white font-bold">{idx + 1}. {crumb.name}</span>
                            <span className="text-muted block text-[10px] mt-0.5">{crumb.url}</span>
                          </div>
                          <button 
                            onClick={() => removeBreadcrumb(idx)}
                            className="text-rose-400 hover:text-rose-300 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add crumb field */}
                  <div className="border-t border-white/5 pt-4 space-y-3 bg-white/[0.01] p-4 rounded-xl">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent-secondary">Add Breadcrumb Item</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-2">
                      <input 
                        type="text" 
                        placeholder="Page Name (e.g. Home)" 
                        value={newCrumbName}
                        onChange={(e) => setNewCrumbName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white"
                      />
                      <input 
                        type="text" 
                        placeholder="Page URL (e.g. https://...)" 
                        value={newCrumbUrl}
                        onChange={(e) => setNewCrumbUrl(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white"
                      />
                    </div>
                    <button 
                      onClick={addBreadcrumb}
                      className="bg-white/5 border border-white/10 hover:bg-white/10 text-[10px] font-bold uppercase px-4 py-2 rounded-lg text-white transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Crumb
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT: JSON-LD GENERATED PREVIEW */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-accent-primary" /> Generated JSON-LD Code
              </label>
              
              <button
                onClick={copyCode}
                className="bg-accent-primary hover:bg-accent-glow font-bold text-xs uppercase tracking-wider text-white px-5 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_12px_rgba(168,85,247,0.2)]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy Code
                  </>
                )}
              </button>
            </div>

            <div className="relative rounded-2xl border border-white/5 bg-[#080b1e] p-6 max-h-[70vh] overflow-auto text-xs font-mono text-emerald-400 leading-relaxed scroll-smooth digiai-scrollbar">
              <pre className="whitespace-pre-wrap">{generatedCode}</pre>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
