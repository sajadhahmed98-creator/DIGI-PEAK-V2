"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Globe, Building2, Rocket, MapPin, TrendingUp } from "lucide-react";

interface LocationHeroProps {
  badgeText: string;
  titlePrimary: string;
  titleGradient: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const locationFloatingCards = [
  { icon: MapPin, title: "Local Focus", val: "Regional SEO", color: "text-accent-primary border-accent-primary/20" },
  { icon: TrendingUp, title: "Performance", val: "Data-Driven", color: "text-accent-secondary border-accent-secondary/20" },
  { icon: Rocket, title: "Speed", val: "Ultra-Fast", color: "text-indigo-400 border-indigo-500/20" },
  { icon: Sparkles, title: "Design", val: "Premium", color: "text-emerald-400 border-emerald-500/20" },
];

export function LocationHero({
  badgeText,
  titlePrimary,
  titleGradient,
  description,
  primaryCtaText = "Get Proposal",
  primaryCtaLink = "/contact",
  secondaryCtaText = "Book Consultation",
  secondaryCtaLink = "https://wa.me/94773624413?text=Hello%20Digipeak%2C%0A%0AI%20would%20like%20to%20discuss%20my%20project%20and%20receive%20a%20proposal.",
}: LocationHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-[95vh] flex items-center">
      {/* Background glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-accent-primary/[0.03] blur-[160px]"
        />
        <motion.div
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-accent-secondary/[0.03] blur-[160px]"
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="locationHeroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.4" />
              <circle cx="30" cy="30" r="1" fill="#6366f1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#locationHeroGrid)" />
          </svg>
        </div>
      </div>

      {/* Floating ambient cards */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [-12, 12, -12], rotate: [0, 2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-36 left-[5%] glass p-4 rounded-2xl border border-accent-primary/20 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-md w-48"
        >
          <div className="text-[10px] font-bold text-white uppercase tracking-wider font-mono mb-2">📍 Local Market</div>
          <div className="text-sm font-bold text-accent-primary">Regional Focus</div>
          <div className="text-[9px] text-muted mt-1">Targeted growth strategies</div>
        </motion.div>

        <motion.div
          animate={{ y: [12, -12, 12], rotate: [0, -2, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-32 right-[6%] glass p-4 rounded-2xl border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.15)] backdrop-blur-md w-52"
        >
          <div className="text-[10px] font-bold text-white uppercase tracking-wider font-mono mb-2">🚀 Premium Services</div>
          <div className="space-y-1.5">
            {["Local SEO", "Web Design", "Paid Ads", "Branding"].map((s) => (
              <div key={s} className="text-[9px] text-muted flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-accent-secondary" />
                {s}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 glass px-5 py-2 text-sm font-medium text-muted"
          >
            <Sparkles className="w-4 h-4 text-accent-primary animate-pulse" />
            <span className="text-accent-primary font-bold">{badgeText}</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white"
          >
            {titlePrimary}
            <br className="hidden md:block" />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-indigo-400">
              {titleGradient}
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 text-lg text-muted md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-20"
          >
            <Link
              href={primaryCtaLink}
              className="btn-primary group flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 text-base font-semibold"
            >
              {primaryCtaText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={secondaryCtaLink}
              target={secondaryCtaLink.startsWith("http") ? "_blank" : undefined}
              rel={secondaryCtaLink.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-8 py-4 text-base font-medium transition-all hover:bg-[#25D366]/20 hover:border-[#25D366]/50 text-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" />
              {secondaryCtaText}
            </a>
          </motion.div>

          {/* Floating metric cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mt-2">
            {locationFloatingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                className={`glass p-5 rounded-2xl border ${card.color} flex flex-col items-center justify-center text-center relative group overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <card.icon className={`h-6 w-6 mb-2 ${card.color.split(" ")[0]}`} />
                <div className="font-heading text-2xl font-extrabold text-white mb-1">{card.val}</div>
                <div className="text-[10px] font-semibold text-muted uppercase tracking-wider">{card.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
