"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function HostingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      question: "What does your web hosting and maintenance package cover?", 
      answer: "Our managed cloud hosting and maintenance packages provide end-to-end support, including secure AWS or Google Cloud servers, 24/7 active firewall and security monitoring, weekly visual-compatible core and plugin updates, automated hourly/daily backups, page speed optimizations, instant DNS routing, and dedicated developer support." 
    },
    { 
      question: "Why is managed cloud hosting better than cheap shared hosting?", 
      answer: "Shared hosting groups thousands of websites on one server, leaving your site vulnerable to security breaches and slow speeds from neighboring sites. Our managed cloud hosting isolates your website in a dedicated environment with dedicated CPU and RAM resources, assuring ultra-low response latency, 99.99% uptime, and impenetrable security." 
    },
    { 
      question: "How do you handle CMS core updates and plugin updates safely?", 
      answer: "We never update plugins or CMS cores directly in production. We clone your website to a staging environment, run automated updates, verify layout integrity and functionality, check for console errors, and then sync the tested patches to production. This ensures 100% update safety and zero visual breakages." 
    },
    { 
      question: "What is your emergency protocol if my site encounters downtime or an intrusion?", 
      answer: "We run pro-active uptime monitors checking your site every 60 seconds. If any node failure is detected, our failover protocols automatically route traffic to a secondary live server. In case of malware detection, our 24/7 security response team immediately isolates the threat, cleans files, patches the entry point, and restores a clean backup if needed within minutes." 
    },
    { 
      question: "Do you migrate our existing site and databases over to your server?", 
      answer: "Yes, we handle the entire migration process with zero downtime. Our cloud engineers copy your website, media files, and databases to our staging servers, optimize config files, test functionality, configure Cloudflare CDN/SSL certificates, and execute a seamless DNS transition without interrupting your business operations." 
    },
    { 
      question: "How do server response speed and server location affect SEO rankings?", 
      answer: "Search engines favor fast sites. Google uses Core Web Vitals (like LCP and INP) as ranking signals. A fast TTFB (Time to First Byte) and close server proximity (like having localized servers in Qatar or GCC region) reduce page-load latency, lowering bounce rates, increasing indexing frequency, and boosting overall SEO visibility." 
    },
    { 
      question: "Do you offer email server hosting on the same server?", 
      answer: "We strongly recommend separating website hosting from email hosting to ensure maximum performance and security. We do not host email directly on web servers. Instead, we assist in configuring and managing professional business suites like Google Workspace (Gmail) or Microsoft 365 on your custom domains." 
    },
    { 
      question: "Do we receive regular server health and maintenance reports?", 
      answer: "Yes. Every month we send detailed health audits summarizing server uptime logs, visitor traffic data, load speed performance metrics, security scans, database optimization logs, and a list of updated plugins or core patches applied during the month." 
    },
  ];

  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-black">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 font-bold uppercase text-xs tracking-widest font-mono font-bold">ANYTHING YOU NEED TO KNOW ABOUT CLOUD OPS</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Hosting & Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Common questions regarding our secure cloud migrations, plugin update safe zones, CDN configurations, and server scaling.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-cyan-400' : 'text-foreground group-hover:text-white text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
                  {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
