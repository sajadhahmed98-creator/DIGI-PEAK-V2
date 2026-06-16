"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search, Monitor, ShoppingBag, Megaphone, Palette, Bot,
  Smartphone, LayoutTemplate, Workflow, FileText, Video, Mail,
  Shield, Server, ArrowRight
} from "lucide-react";

const services = [
  { icon: Search, label: "SEO Services", href: "/seo-services", color: "text-violet-400 border-violet-500/20 bg-violet-500/10" },
  { icon: Monitor, label: "Web Design & Development", href: "/web-design-development", color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
  { icon: ShoppingBag, label: "E-Commerce Development", href: "/ecommerce-development", color: "text-orange-400 border-orange-500/20 bg-orange-500/10" },
  { icon: Megaphone, label: "Digital Marketing", href: "/digital-marketing", color: "text-rose-400 border-rose-500/20 bg-rose-500/10" },
  { icon: Palette, label: "Branding & Creative", href: "/branding-creative", color: "text-pink-400 border-pink-500/20 bg-pink-500/10" },
  { icon: Bot, label: "AI Solutions", href: "/ai-solutions", color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10" },
  { icon: LayoutTemplate, label: "UI/UX Design", href: "/ui-ux-design", color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10" },
  { icon: Smartphone, label: "Mobile App Development", href: "/mobile-app-development", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { icon: Workflow, label: "CRM & Automation", href: "/crm-automation", color: "text-teal-400 border-teal-500/20 bg-teal-500/10" },
  { icon: FileText, label: "Content Marketing", href: "/content-marketing", color: "text-amber-400 border-amber-500/20 bg-amber-500/10" },
  { icon: Video, label: "Video Production", href: "/video-production", color: "text-red-400 border-red-500/20 bg-red-500/10" },
  { icon: Mail, label: "Email Marketing", href: "/email-marketing", color: "text-sky-400 border-sky-500/20 bg-sky-500/10" },
  { icon: Shield, label: "Reputation Management", href: "/reputation-management", color: "text-green-400 border-green-500/20 bg-green-500/10" },
  { icon: Server, label: "Hosting & Maintenance", href: "/hosting-maintenance", color: "text-slate-400 border-slate-500/20 bg-slate-500/10" },
];

export function WhatWeDo() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Do.
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A complete suite of digital growth services — under one roof, built around your business goals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {services.map((svc, index) => (
            <motion.div
              key={svc.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 7) * 0.06 }}
            >
              <Link
                href={svc.href}
                className={`flex flex-col items-center text-center p-5 rounded-2xl border glass hover:scale-105 transition-all duration-300 group h-full ${svc.color}`}
              >
                <div className={`w-11 h-11 rounded-xl ${svc.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <svc.icon className={`w-5 h-5 ${svc.color.split(" ")[0]}`} />
                </div>
                <span className="text-[11px] font-semibold text-white leading-tight">{svc.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-semibold group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
