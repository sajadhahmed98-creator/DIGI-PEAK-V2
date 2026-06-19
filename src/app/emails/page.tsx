"use client";

import React, { useState } from "react";
import * as templates from "@/data/emailTemplates";

const TEMPLATE_LIST = [
  { id: "leadNotification", name: "New Lead Notification (Internal)" },
  { id: "clientAutoReply", name: "Client Auto Reply" },
  { id: "newsletterAlert", name: "Newsletter Alert (Internal)" },
  { id: "newsletterWelcome", name: "Newsletter Welcome" },
  { id: "proposalSent", name: "Proposal Sent" },
  { id: "meetingConfirmation", name: "Meeting Confirmation" },
  { id: "contactFormNotification", name: "Contact Form Notification (Internal)" }
];

export default function EmailPreviewDashboard() {
  const [activeTab, setActiveTab] = useState("leadNotification");
  const [isMobileView, setIsMobileView] = useState(false);

  const getHtml = () => {
    const key = `${activeTab}Html` as keyof typeof templates;
    return templates[key] || "Select a template";
  };

  return (
    <div className="min-h-screen bg-[#071027] text-white font-sans flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-[#0F172A]">
        <div className="flex items-center gap-3">
          <div className="font-bold text-lg tracking-tight bg-gradient-to-r from-[#D946EF] to-[#6366F1] bg-clip-text text-transparent">
            Digipeak Email System
          </div>
          <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full text-slate-400">Preview Hub</span>
        </div>
        
        {/* Responsive Toggle */}
        <div className="flex items-center gap-2 bg-[#071027] p-1 rounded-lg border border-white/10">
          <button 
            onClick={() => setIsMobileView(false)} 
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${!isMobileView ? 'bg-[#6366F1] text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Desktop
          </button>
          <button 
            onClick={() => setIsMobileView(true)} 
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${isMobileView ? 'bg-[#6366F1] text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Mobile
          </button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r border-white/10 bg-[#0F172A] p-4 flex flex-col gap-2 overflow-y-auto">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">Templates</h2>
          {TEMPLATE_LIST.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === t.id ? 'bg-gradient-to-r from-[#D946EF]/20 to-[#6366F1]/20 border border-[#6366F1] text-white' : 'border border-transparent text-slate-300 hover:bg-white/5'}`}
            >
              {t.name}
            </button>
          ))}
        </aside>

        {/* Preview Panel */}
        <main className="flex-1 bg-[#071027] p-8 flex items-center justify-center overflow-auto">
          <div 
            className="transition-all duration-300 shadow-2xl rounded-2xl overflow-hidden border border-white/15 bg-black"
            style={{ width: isMobileView ? "375px" : "100%", maxWidth: isMobileView ? "375px" : "640px", height: "700px" }}
          >
            <iframe 
              title="Email Preview"
              srcDoc={getHtml()}
              className="w-full h-full border-none bg-[#071027]"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
