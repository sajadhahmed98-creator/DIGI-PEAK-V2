"use client";

import { useState, useEffect, useRef } from "react";
import { X, ShieldCheck, BarChart3, Megaphone, Settings2, RotateCcw } from "lucide-react";

export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPreferences: CookiePreferences;
  onSave: (prefs: CookiePreferences) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
}

export function CookieSettingsModal({
  isOpen,
  onClose,
  initialPreferences,
  onSave,
  onAcceptAll,
  onRejectAll,
}: CookieSettingsModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [prefs, setPrefs] = useState<CookiePreferences>(initialPreferences);

  // Sync preferences when modal opens
  useEffect(() => {
    if (isOpen) {
      setPrefs(initialPreferences);
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden"; // Prevent scrolling behind
    } else {
      dialogRef.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialPreferences]);

  // Handle click outside fallback (light-dismiss)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleLightDismiss = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      
      const rect = dialog.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );

      if (!isInside) {
        onClose();
      }
    };

    dialog.addEventListener("click", handleLightDismiss);
    return () => {
      dialog.removeEventListener("click", handleLightDismiss);
    };
  }, [onClose]);

  const togglePref = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Cannot toggle necessary
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleReset = () => {
    setPrefs({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  };

  const handleSave = () => {
    onSave(prefs);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="p-0 border-0 bg-transparent rounded-3xl overflow-visible max-w-xl w-[calc(100%-2rem)] max-h-[90vh] backdrop:bg-[#020308]/85 backdrop:backdrop-blur-md outline-none"
    >
      <div className="glass border border-white/10 rounded-3xl overflow-hidden bg-gradient-to-b from-[#0c0d21] to-[#050816] shadow-2xl relative flex flex-col max-h-[90vh]">
        {/* Top ambient glow */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-48 h-48 bg-accent-primary/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/5 p-6 relative z-10">
          <div className="flex items-center gap-2.5">
            <Settings2 className="h-5 w-5 text-accent-primary" />
            <h2 className="font-heading text-lg font-bold text-white tracking-tight">
              Cookie Preferences
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close settings"
            className="rounded-full w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 text-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 relative z-10 digiai-scrollbar">
          <p className="text-muted text-xs leading-relaxed">
            Customize how cookies are used on our site. Essential cookies are required to enable basic features, while optional cookies help us improve performance, run marketing campaigns, and integrate dynamic third-party services.
          </p>

          <div className="space-y-4">
            {/* 1. Necessary Cookies */}
            <div className="glass-card flex items-start justify-between p-4.5 rounded-2xl border border-white/5 bg-white/[0.01]">
              <div className="flex gap-3 max-w-[80%]">
                <ShieldCheck className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-sm font-bold text-white">Necessary Cookies</h3>
                  <p className="text-muted text-xs leading-relaxed mt-1">
                    Required for core website operations, security, routing preferences, session storage, and cookie consent state. Cannot be disabled.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider bg-emerald-400/10 px-2 py-0.5 rounded">
                  Always Active
                </span>
              </div>
            </div>

            {/* 2. Analytics Cookies */}
            <div className="glass-card flex items-start justify-between p-4.5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors">
              <div className="flex gap-3 max-w-[80%]">
                <BarChart3 className="h-5 w-5 text-accent-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-sm font-bold text-white">Analytics Cookies</h3>
                  <p className="text-muted text-xs leading-relaxed mt-1">
                    Powered by Google Analytics 4. Helps us measure site visits, traffic sources, content performance, and user engagement anonymously.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => togglePref("analytics")}
                  role="switch"
                  aria-checked={prefs.analytics}
                  className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    prefs.analytics ? "bg-accent-primary" : "bg-white/10"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                      prefs.analytics ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* 3. Marketing Cookies */}
            <div className="glass-card flex items-start justify-between p-4.5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors">
              <div className="flex gap-3 max-w-[80%]">
                <Megaphone className="h-5 w-5 text-accent-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-sm font-bold text-white">Marketing Cookies</h3>
                  <p className="text-muted text-xs leading-relaxed mt-1">
                    Tracks users across Google Ads, Meta Pixel, and LinkedIn Insight Tag. Used to build user profiles, deliver targeted advertising campaigns, and verify ad conversions.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => togglePref("marketing")}
                  role="switch"
                  aria-checked={prefs.marketing}
                  className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    prefs.marketing ? "bg-accent-primary" : "bg-white/10"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                      prefs.marketing ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* 4. Functional Cookies */}
            <div className="glass-card flex items-start justify-between p-4.5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors">
              <div className="flex gap-3 max-w-[80%]">
                <Settings2 className="h-5 w-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-sm font-bold text-white">Functional Cookies</h3>
                  <p className="text-muted text-xs leading-relaxed mt-1">
                    Required for chat systems (e.g. customer support widgets), theme selection, language preferences, and video player controls.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => togglePref("functional")}
                  role="switch"
                  aria-checked={prefs.functional}
                  className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    prefs.functional ? "bg-accent-primary" : "bg-white/10"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                      prefs.functional ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-white/5 p-6 bg-white/[0.01] relative z-10 flex flex-wrap gap-4 items-center justify-between">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset Defaults
          </button>

          <div className="flex gap-3 ml-auto">
            <button
              onClick={handleSave}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              Save Preferences
            </button>
            <button
              onClick={() => {
                onAcceptAll();
                onClose();
              }}
              className="bg-accent-primary hover:bg-accent-glow text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.25)]"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
