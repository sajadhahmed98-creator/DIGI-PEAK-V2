"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Globe, ArrowRight, Share2 } from "lucide-react";


export function PersonalHero() {
  const [shareStatus, setShareStatus] = useState<"idle" | "sharing" | "copied">("idle");

  const handleShare = async () => {
    const shareData = {
      title: "Sajadh Ahmed — Founder of Digipeak",
      text: "Check out Sajadh Ahmed's profile page, Founder of Digipeak Agency.",
      url: "https://www.digipeak.agency/author/sajadh-ahmed",
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        setShareStatus("sharing");
        await navigator.share(shareData);
        setShareStatus("idle");
      } catch (e) {
        setShareStatus("idle");
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setShareStatus("copied");
        setTimeout(() => setShareStatus("idle"), 2500);
      } catch (err) {
        setShareStatus("idle");
      }
    }
  };

  return (
    <section className="relative min-h-0 lg:min-h-screen pt-8 pb-10 lg:pt-32 lg:pb-20 px-6 flex items-center justify-center overflow-hidden bg-black">
      {/* Decorative ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column — Editorial Profile Info */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.015] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6 select-none">
                Founder &amp; Creative
              </div>

              {/* Sajadh Ahmed name */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white mb-4">
                Sajadh{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                  Ahmed
                </span>
              </h1>

              {/* Title / Subheadline */}
              <p className="text-sm sm:text-lg md:text-2xl font-bold text-white mb-5 border-l-2 border-accent-primary pl-4 py-1">
                Founder, Digipeak &bull; Graphic Designer &amp; Digital Marketer
              </p>

              {/* Description */}
              <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                6+ years of creative expertise spanning graphic design, brand identity systems, logo design, social media design, website design, digital marketing, photography, videography, and personal branding.
              </p>

              {/* Metadata details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-md font-mono text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-muted">
                  <MapPin className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  <span>Colombo, Sri Lanka</span>
                </div>
                <a
                  href="https://sajadhahmed.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4 text-accent-secondary flex-shrink-0" />
                  <span>sajadhahmed.com</span>
                </a>
                <a
                  href="mailto:hello@digipeak.agency"
                  className="flex items-center gap-3 text-muted hover:text-white transition-colors sm:col-span-2"
                >
                  <Mail className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  <span>hello@digipeak.agency</span>
                </a>
              </div>

              {/* Connect CTAs */}
              <div className="flex flex-col gap-4 mb-6 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  <a
                    href="https://wa.me/94773624413?text=Hello%20Sajadh%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20and%20receive%20a%20proposal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold hover:-translate-y-0.5 transition-transform"
                  >
                    Contact via WhatsApp
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sajadh-ahmed-6a62641a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass border border-accent-primary/30 hover:bg-accent-primary/[0.03] flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold rounded-full hover:-translate-y-0.5 transition-transform text-white"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full">
                  <a
                    href="https://www.behance.net/sajathahm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass border border-white/10 hover:border-accent-secondary/30 flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium rounded-2xl hover:-translate-y-0.5 transition-transform text-slate-300 hover:text-white"
                  >
                    Behance Portfolio
                  </a>
                  <a
                    href="https://www.instagram.com/aham3dsm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass border border-white/10 hover:border-accent-primary/30 flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium rounded-2xl hover:-translate-y-0.5 transition-transform text-slate-300 hover:text-white"
                  >
                    Instagram
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-muted hover:text-white transition-colors cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5 text-accent-primary" />
                    {shareStatus === "copied" ? (
                      <span className="text-accent-secondary animate-pulse">Link Copied!</span>
                    ) : (
                      "Share Profile"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Black & White Editorial Portrait Image */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] aspect-[4/5] rounded-3xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 glass overflow-hidden group shadow-[0_0_50px_rgba(168,85,247,0.05)] hover:border-accent-primary/20 transition-all duration-500"
            >
              {/* Inner ambient background glow behind portrait */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40">
                <Image
                  src="/sajadh-photo.jpg"
                  alt="Sajadh Ahmed Portrait"
                  fill
                  sizes="(max-width: 1280px) 50vw, 33vw"
                  priority
                  className="object-cover filter grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Tag indicator */}
              <div className="absolute bottom-8 left-8 right-8 glass border border-white/10 rounded-xl p-3 flex items-center justify-between pointer-events-none transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div>
                  <div className="text-[10px] font-mono text-muted uppercase leading-none mb-1">Founder</div>
                  <div className="text-xs font-heading font-bold text-white leading-none">Sajadh Ahmed</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
