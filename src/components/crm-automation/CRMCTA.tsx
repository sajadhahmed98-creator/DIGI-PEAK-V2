"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CRMCTA() {
  return (
    <section className="relative py-24 md:py-16 md:py-24 lg:py-32 overflow-hidden px-6">
      {/* Background with advanced tech visuals */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-600/20 to-teal-600/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center glass p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            Ready To Automate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-purple-500">Your Business Operations?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Let’s build intelligent CRM and automation systems that save time, increase efficiency, and accelerate growth. Get full transparency and 100% cloud sync.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto btn-primary group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 border-none shadow-[0_0_20px_rgba(16,185,129,0.3)] text-white"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/contact"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full border border-white/20 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/10 text-white"
            >
              Book CRM Strategy Call
            </Link>

            <a
              href="https://wa.me/94773624413?text=Hello%20Digipeak%2C%0A%0AI%20would%20like%20to%20discuss%20my%20project%20and%20receive%20a%20proposal."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-8 py-4 text-base font-medium transition-all hover:bg-[#25D366]/20 hover:border-[#25D366]/50 text-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.1)] hover:shadow-[0_0_25px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
