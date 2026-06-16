"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Link as LinkIcon, Share2, MessageSquare, X } from "lucide-react";

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const SHARE_URL = "https://sajathahamed.link/";
const SHARE_TITLE = "Sajadh Ahmed — Founder of Digipeak";
const SHARE_TEXT = "Check out the personal brand authority profile for Sajadh Ahmed, Founder of Digipeak Agency, Graphic Designer & Digital Marketer.";

export function ProfileShareSystem() {
  const [showToast, setShowToast] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  useEffect(() => {
    // Listen for custom trigger events (from Hero or elsewhere)
    const handleTrigger = () => {
      handleNativeShare();
    };

    window.addEventListener("toggle-profile-share", handleTrigger);
    return () => {
      window.removeEventListener("toggle-profile-share", handleTrigger);
    };
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      triggerToast();
    } catch (err) {
      // Direct fallback
      const el = document.createElement("textarea");
      el.value = SHARE_URL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      triggerToast();
    }
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: SHARE_TITLE,
          text: SHARE_TEXT,
          url: SHARE_URL,
        });
      } catch (err) {
        // User cancelled or share failed, fallback to toggling mobile options
        setMobileExpanded(prev => !prev);
      }
    } else {
      setMobileExpanded(prev => !prev);
    }
  };

  // Pre-compiled direct share endpoints
  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(SHARE_URL)}&text=${encodeURIComponent(SHARE_TEXT)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(SHARE_TEXT + " " + SHARE_URL)}`,
    email: `mailto:?subject=${encodeURIComponent(SHARE_TITLE)}&body=${encodeURIComponent(SHARE_TEXT + " " + SHARE_URL)}`,
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3.5 rounded-full glass border border-white/20 shadow-2xl flex items-center gap-2.5 bg-[#050816]/95 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-accent-secondary animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wide text-white">
              Profile link copied successfully.
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP: Right Side Vertical Floating Share Bar */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-[9999]">
        {/* Share Header Icon */}
        <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-accent-primary select-none" title="Share Profile">
          <Share2 className="w-4 h-4" />
        </div>

        {/* Share Buttons */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-accent-secondary/40 hover:-translate-x-1 transition-all duration-300 group"
          title="Share on LinkedIn"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>

        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-accent-primary/40 hover:-translate-x-1 transition-all duration-300 group"
          title="Share on X (Twitter)"
        >
          <TwitterIcon className="w-4 h-4" />
        </a>

        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-accent-secondary/40 hover:-translate-x-1 transition-all duration-300 group"
          title="Share on Facebook"
        >
          <FacebookIcon className="w-4 h-4" />
        </a>

        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-emerald-500/40 hover:-translate-x-1 transition-all duration-300 group"
          title="Share on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
        </a>

        <a
          href={shareLinks.email}
          className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-amber-400/40 hover:-translate-x-1 transition-all duration-300 group"
          title="Share via Email"
        >
          <Mail className="w-4 h-4" />
        </a>

        <button
          onClick={copyToClipboard}
          className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-accent-primary/40 hover:-translate-x-1 transition-all duration-300 cursor-pointer"
          title="Copy Profile Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
      </div>

      {/* MOBILE: Bottom Right Expandable Share Bubble */}
      <div className="lg:hidden fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 font-sans">
        <AnimatePresence>
          {mobileExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="flex flex-col gap-2.5 items-end mb-1"
            >
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white bg-[#050816]/95 backdrop-blur-xl shadow-lg active:scale-95 transition-transform"
                onClick={() => setMobileExpanded(false)}
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>

              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white bg-[#050816]/95 backdrop-blur-xl shadow-lg active:scale-95 transition-transform"
                onClick={() => setMobileExpanded(false)}
              >
                <TwitterIcon className="w-4.5 h-4.5" />
              </a>

              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white bg-[#050816]/95 backdrop-blur-xl shadow-lg active:scale-95 transition-transform"
                onClick={() => setMobileExpanded(false)}
              >
                <FacebookIcon className="w-4.5 h-4.5" />
              </a>

              <a
                href={shareLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white bg-[#050816]/95 backdrop-blur-xl shadow-lg active:scale-95 transition-transform"
                onClick={() => setMobileExpanded(false)}
              >
                <MessageSquare className="w-4.5 h-4.5 text-emerald-400" />
              </a>

              <button
                onClick={() => {
                  copyToClipboard();
                  setMobileExpanded(false);
                }}
                className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white bg-[#050816]/95 backdrop-blur-xl shadow-lg active:scale-95 transition-transform cursor-pointer"
              >
                <LinkIcon className="w-4.5 h-4.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={handleNativeShare}
          className="w-14 h-14 rounded-full cursor-pointer flex items-center justify-center text-white shadow-2xl relative z-10 active:scale-95 transition-transform"
          style={{
            background: "linear-gradient(135deg, var(--color-accent-purple) 0%, var(--color-accent-blue) 100%)",
            boxShadow: "0 4px 20px rgba(168, 85, 247, 0.35)"
          }}
          aria-label="Toggle Share Panel"
        >
          {mobileExpanded ? <X className="w-6 h-6" /> : <Share2 className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
}
