"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Clock,
  LayoutGrid,
  Globe,
  TrendingUp,
  Award,
  Layers,
  MessageCircle,
} from "lucide-react";

const categories = [
  { icon: Globe, label: "SEO Campaigns" },
  { icon: Layers, label: "Web Design & Dev" },
  { icon: TrendingUp, label: "Digital Marketing" },
  { icon: Award, label: "Branding & Creative" },
  { icon: LayoutGrid, label: "E-Commerce" },
  { icon: Sparkles, label: "AI Solutions" },
];

const stats = [
  { val: "150+", label: "Projects Completed" },
  { val: "18+", label: "Countries Served" },
  { val: "96%", label: "Client Retention Rate" },
  { val: "4.9★", label: "Average Rating" },
];

export function PortfolioPlaceholder() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-52 md:pb-36 px-6 min-h-screen flex items-center">
      {/* Background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 h-[700px] w-[700px] -translate-y-1/3 translate-x-1/3 rounded-full bg-accent-primary/10 blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] translate-y-1/3 -translate-x-1/3 rounded-full bg-accent-secondary/10 blur-[160px]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="portfolioGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#portfolioGrid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 glass px-5 py-2.5 text-sm font-medium"
          >
            <Clock className="w-4 h-4 text-accent-primary animate-pulse" />
            <span className="text-accent-primary font-bold tracking-wide">Portfolio — Launching Soon</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-4xl md:text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white"
          >
            Client Projects &{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary">
              Success Stories
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4 text-lg text-muted md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            We are currently documenting our completed client engagements with full permission and verified results. 
            Our portfolio will feature real projects, real data, and authentic outcomes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-12 text-base text-muted/70 max-w-xl mx-auto italic"
          >
            No placeholder work. No fictional projects. Only verified client success.
          </motion.p>

          {/* Project Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                className="flex items-center gap-2 glass border border-white/10 rounded-full px-5 py-2.5 text-sm text-muted hover:text-white hover:border-accent-primary/30 transition-all duration-300"
              >
                <cat.icon className="w-4 h-4 text-accent-primary" />
                <span>{cat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Placeholder cards — coming soon grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-16"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                className="glass border border-white/5 rounded-2xl overflow-hidden group relative"
              >
                {/* Placeholder thumbnail */}
                <div className="h-44 bg-gradient-to-br from-white/3 to-white/5 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5" />
                  <div className="w-12 h-12 rounded-xl border border-white/10 glass flex items-center justify-center opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                    <Sparkles className="w-6 h-6 text-accent-primary" />
                  </div>
                  {/* Shimmer animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="h-3 w-2/3 rounded-full bg-white/8 mb-3" />
                  <div className="h-2.5 w-full rounded-full bg-white/5 mb-2" />
                  <div className="h-2.5 w-4/5 rounded-full bg-white/5 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 rounded-full bg-accent-primary/10 border border-accent-primary/20" />
                    <div className="h-6 w-12 rounded-full bg-accent-secondary/10 border border-accent-secondary/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mb-16"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="glass border border-white/10 rounded-2xl p-5 text-center"
              >
                <div className="font-heading text-3xl font-extrabold text-white mb-1">{s.val}</div>
                <div className="text-xs text-muted uppercase tracking-wider font-semibold">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="glass border border-accent-primary/20 rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-accent-primary/15 border border-accent-primary/30 flex items-center justify-center mx-auto mb-6">
                <Award className="w-7 h-7 text-accent-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                Want to Become One of Our First Featured Success Stories?
              </h2>
              <p className="text-muted mb-8 leading-relaxed">
                Partner with Digipeak and become part of our verified client portfolio. 
                Get a detailed proposal tailored to your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold"
                >
                  Get Proposal
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/94773624413?text=Hello%20Digipeak%2C%0A%0AI%20would%20like%20to%20discuss%20my%20project%20and%20receive%20a%20proposal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/5 text-white"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
