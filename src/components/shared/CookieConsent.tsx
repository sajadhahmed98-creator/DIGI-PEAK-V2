"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Cookie } from "lucide-react";
import { usePathname } from "next/navigation";
import { CookieSettingsModal, CookiePreferences } from "./CookieSettingsModal";

const DEFAULT_PREFS: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const ALL_ACCEPTED_PREFS: CookiePreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
  functional: true,
};

const REJECTED_PREFS: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFS);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Set mounted on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check consent on mount and trigger defaults/saves
  useEffect(() => {
    if (!mounted || pathname === '/digiai') return;

    const consentStatus = localStorage.getItem("cookie_consent");
    const savedPrefs = localStorage.getItem("cookie_preferences");

    if (consentStatus && savedPrefs) {
      try {
        const parsedPrefs = JSON.parse(savedPrefs) as CookiePreferences;
        setPreferences(parsedPrefs);
        // Dispatch consent update to Google Consent Mode
        updateConsentMode(parsedPrefs);
      } catch (e) {
        console.error("Failed to parse saved cookie preferences", e);
        setShowBanner(true);
      }
    } else {
      // If no consent exists, show banner
      setShowBanner(true);
      // Ensure defaults are sent to Consent Mode
      updateConsentMode(DEFAULT_PREFS);
    }
  }, [mounted]);

  const updateConsentMode = (prefs: CookiePreferences) => {
    if (typeof window !== "undefined") {
      const windowWithGtag = window as any;
      if (windowWithGtag.gtag) {
        windowWithGtag.gtag("consent", "update", {
          ad_storage: prefs.marketing ? "granted" : "denied",
          analytics_storage: prefs.analytics ? "granted" : "denied",
          ad_user_data: prefs.marketing ? "granted" : "denied",
          ad_personalization: prefs.marketing ? "granted" : "denied",
        });
        
        // Dispatch a custom event for other scripts (Meta Pixel, LinkedIn, etc.) to listen to
        const event = new CustomEvent("digipeak_cookie_consent_update", { detail: prefs });
        window.dispatchEvent(event);
      } else {
        // Fallback queue if gtag isn't loaded yet
        windowWithGtag.dataLayer = windowWithGtag.dataLayer || [];
        windowWithGtag.dataLayer.push({
          event: "consent_update",
          consent_preferences: prefs
        });
      }
    }
  };

  const handleAcceptAll = () => {
    localStorage.setItem("cookie_consent", "accepted");
    localStorage.setItem("cookie_preferences", JSON.stringify(ALL_ACCEPTED_PREFS));
    setPreferences(ALL_ACCEPTED_PREFS);
    updateConsentMode(ALL_ACCEPTED_PREFS);
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem("cookie_consent", "rejected");
    localStorage.setItem("cookie_preferences", JSON.stringify(REJECTED_PREFS));
    setPreferences(REJECTED_PREFS);
    updateConsentMode(REJECTED_PREFS);
    setShowBanner(false);
  };

  const handleSavePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie_consent", "custom");
    localStorage.setItem("cookie_preferences", JSON.stringify(prefs));
    setPreferences(prefs);
    updateConsentMode(prefs);
    setShowBanner(false);
  };

  if (!mounted || pathname === '/digiai' || !showBanner) return null;

  return (
    <>
      <div className="fixed bottom-6 left-6 z-40 max-w-sm w-[calc(100%-3rem)] transition-all duration-500 animate-in fade-in slide-in-from-bottom-5">
        <div className="glass border border-white/10 rounded-2xl p-5 bg-gradient-to-b from-[#0c0d21]/95 to-[#050816]/95 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/5 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-4">
            {/* Title / Eyebrow */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-accent-primary/20 flex items-center justify-center bg-accent-primary/5">
                <Cookie className="h-4.5 w-4.5 text-accent-primary" />
              </div>
              <h3 className="font-heading text-sm font-bold text-white tracking-tight">
                Privacy Preferences
              </h3>
            </div>

            {/* Description */}
            <p className="text-muted text-[11px] leading-relaxed">
              We use cookies to improve website performance, analytics, security, and user experience. Check our{" "}
              <Link href="/cookie-policy" className="text-accent-primary hover:underline font-semibold">
                Cookie Policy
              </Link>{" "}
              for details.
            </p>

            {/* Button Layout */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={handleAcceptAll}
                className="w-full bg-accent-primary hover:bg-accent-glow text-white font-bold text-[11px] uppercase tracking-wider py-2.5 rounded-full transition-colors cursor-pointer shadow-[0_0_10px_rgba(168,85,247,0.15)]"
              >
                Accept All
              </button>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={handleRejectNonEssential}
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-[10px] uppercase tracking-wider py-2 rounded-full transition-colors cursor-pointer"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full border border-transparent text-muted hover:text-white font-medium text-[11px] flex items-center justify-center hover:underline cursor-pointer"
                >
                  Cookie Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CookieSettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPreferences={preferences}
        onSave={handleSavePreferences}
        onAcceptAll={handleAcceptAll}
        onRejectAll={handleRejectNonEssential}
      />
    </>
  );
}
