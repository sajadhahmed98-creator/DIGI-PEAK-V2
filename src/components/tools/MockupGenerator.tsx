import React, { useState } from "react";
import { CreditCard, UtensilsCrossed, Coffee, Newspaper } from "lucide-react";

interface MockupGeneratorProps {
  qrDataUrl: string;
}

type MockType = "card" | "menu" | "cup" | "poster";

export function MockupGenerator({ qrDataUrl }: MockupGeneratorProps) {
  const [activeMock, setActiveMock] = useState<MockType>("card");

  const mocks = [
    { id: "card", label: "Business Card", icon: CreditCard },
    { id: "menu", label: "Restaurant Menu", icon: UtensilsCrossed },
    { id: "cup", label: "Coffee Cup", icon: Coffee },
    { id: "poster", label: "Billboard Poster", icon: Newspaper },
  ];

  return (
    <div className="glass border border-white/5 p-6 rounded-3xl space-y-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Live Mockup Preview</h4>
          <p className="text-xs text-muted">See your QR code in real-world layouts</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {mocks.map((m) => {
          const Icon = m.icon;
          const isActive = activeMock === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setActiveMock(m.id as MockType)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                isActive
                  ? "bg-accent-primary border-accent-primary text-white"
                  : "bg-white/[0.02] border-white/5 text-muted hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Visual Render Window */}
      <div className="relative aspect-video rounded-2xl bg-[#030712] border border-white/5 flex items-center justify-center overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

        {/* 1. Business Card Mockup */}
        {activeMock === "card" && (
          <div className="w-72 h-44 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-white/10 p-6 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.5)] relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-xs font-black tracking-wider text-white font-heading">DIGIPEAK</span>
                <span className="text-[8px] text-accent-primary block tracking-wider uppercase">Enterprise Client Link</span>
              </div>
              <div className="w-16 h-16 bg-white p-1 rounded-lg shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={qrDataUrl || "/logo.png"} alt="QR preview" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="space-y-0.5 mt-auto">
              <span className="text-[10px] text-white font-bold block">Sajadh Ahmed</span>
              <span className="text-[8px] text-muted block">Founder &amp; Digital Strategist</span>
            </div>
          </div>
        )}

        {/* 2. Menu Mockup */}
        {activeMock === "menu" && (
          <div className="w-52 h-64 rounded-xl bg-stone-900 border border-amber-900/20 p-5 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.6)] relative">
            <div className="text-center space-y-1 border-b border-amber-900/10 pb-2">
              <span className="text-[10px] font-black tracking-widest text-amber-500 font-heading block">THE BISTRO</span>
              <span className="text-[7px] text-stone-500 tracking-wider block">SCAN TO ORDER &amp; PAY</span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 py-4">
              <div className="w-20 h-20 bg-white p-1 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={qrDataUrl || "/logo.png"} alt="QR preview" className="w-full h-full object-contain" />
              </div>
              <span className="text-[7px] text-stone-400 font-bold block">Contactless Digital Menu</span>
            </div>

            <div className="text-center text-[6px] text-stone-600 border-t border-amber-900/10 pt-2 uppercase tracking-widest">
              Lusail Marina, Doha
            </div>
          </div>
        )}

        {/* 3. Coffee Cup Mockup */}
        {activeMock === "cup" && (
          <div className="relative flex flex-col items-center">
            {/* Cup Shape Wrapper */}
            <div className="w-40 h-52 bg-gradient-to-b from-[#111] to-[#222] border-x border-t border-white/10 rounded-b-[40px] flex flex-col items-center justify-center shadow-2xl relative p-4">
              {/* Cup sleeve */}
              <div className="absolute top-[28%] w-full h-20 bg-gradient-to-b from-amber-900/20 to-amber-900/10 border-y border-amber-900/10 flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-white p-0.5 rounded-lg shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={qrDataUrl || "/logo.png"} alt="QR preview" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="absolute top-2 w-32 h-1 bg-white/5 rounded-full" />
            </div>
            {/* Lid */}
            <div className="w-44 h-4 bg-stone-800 border border-white/10 rounded-t-lg -mb-0.5" />
          </div>
        )}

        {/* 4. Poster Mockup */}
        {activeMock === "poster" && (
          <div className="w-64 h-72 rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-950 border border-white/10 p-5 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-2">
              <span className="text-[8px] bg-accent-primary/20 border border-accent-primary/30 px-2 py-0.5 rounded-full text-accent-primary font-bold inline-block">
                UPCOMING EXHIBITION
              </span>
              <h5 className="text-sm font-bold text-white font-heading tracking-tight leading-snug">
                Future of AI Automation &amp; Scale
              </h5>
              <p className="text-[8px] text-muted">
                Join Digipeak at the West Bay Conference Hall for Doha Tech Week.
              </p>
            </div>

            <div className="flex items-end justify-between border-t border-white/5 pt-4 mt-auto">
              <div className="space-y-1">
                <span className="text-[7px] text-muted uppercase tracking-wider block font-bold">Location</span>
                <span className="text-[8px] text-white block">Doha, Qatar</span>
              </div>
              <div className="w-16 h-16 bg-white p-1 rounded-lg shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={qrDataUrl || "/logo.png"} alt="QR preview" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
