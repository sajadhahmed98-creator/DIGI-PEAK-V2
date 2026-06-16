"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, LineChart, Megaphone, Cpu, PenTool, ShoppingCart, ArrowRight } from "lucide-react";

const services = [
  { title: "Web Design & Development", icon: Code2, href: "/web-design-development" },
  { title: "SEO Services", icon: LineChart, href: "/seo-services" },
  { title: "Digital Marketing", icon: Megaphone, href: "/digital-marketing" },
  { title: "AI Solutions", icon: Cpu, href: "/ai-solutions" },
  { title: "Branding & Creative", icon: PenTool, href: "/branding-creative" },
  { title: "E-Commerce Development", icon: ShoppingCart, href: "/ecommerce-development" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export function ServicesOverview() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-label mb-3">
              <span className="w-4 h-px bg-accent-primary inline-block" />
              Services
            </p>
            <h2
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              className="font-heading text-white"
            >
              Everything you need to grow.
            </h2>
          </div>
          <Link
            href="/services"
            className="group hidden md:inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-white transition-colors whitespace-nowrap"
          >
            View all services
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 2 × 3 grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {services.map((svc) => (
            <motion.div key={svc.title} variants={item}>
              <Link
                href={svc.href}
                className="group flex items-center justify-between p-5 rounded-2xl border border-white/8 bg-white/[0.015] hover:bg-white/[0.04] hover:border-accent-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-primary/40 group-hover:bg-accent-primary/8 transition-all duration-300">
                    <svc.icon className="w-4 h-4 text-muted group-hover:text-accent-primary transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/90 group-hover:text-white transition-colors">
                    {svc.title}
                  </span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-muted/40 group-hover:text-accent-primary group-hover:translate-x-0.5 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile view-all link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-white transition-colors"
          >
            View all services <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
