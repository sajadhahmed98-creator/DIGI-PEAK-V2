"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LineChart, Code2, Megaphone, Share2, PenTool, Cpu, ArrowUpRight, ShoppingCart, Smartphone, Layout, Video, Mail, Star, ShieldCheck, Settings } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

// --- Visual Proof Components ---
const SEOChart = () => (
  <div className="w-full h-24 bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col justify-end overflow-hidden relative mt-4">
    <div className="absolute top-2 left-3 text-xs font-bold text-accent-secondary">Traffic Growth</div>
    <div className="flex items-end gap-1 w-full h-12">
      {[40, 45, 30, 55, 65, 80, 95].map((height, i) => (
        <motion.div 
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className="flex-1 bg-gradient-to-t from-accent-primary to-accent-secondary rounded-t-sm opacity-80"
        />
      ))}
    </div>
  </div>
);

const WebMockup = () => (
  <div className="w-full h-24 bg-background/80 rounded-xl border border-white/10 overflow-hidden relative mt-4 flex flex-col shadow-inner">
    <div className="h-4 bg-white/5 border-b border-white/10 flex items-center px-2 gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
    </div>
    <div className="p-3 flex gap-3 h-full">
      <div className="w-1/3 h-full bg-white/10 rounded-md animate-pulse" />
      <div className="flex-1 flex flex-col gap-2">
        <div className="w-3/4 h-2 bg-white/10 rounded-full" />
        <div className="w-1/2 h-2 bg-white/10 rounded-full" />
        <div className="w-full h-8 bg-white/5 rounded-md mt-auto" />
      </div>
    </div>
  </div>
);

const AdDashboard = () => (
  <div className="w-full h-24 bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col gap-2 mt-4 relative overflow-hidden">
    <div className="flex justify-between items-center">
      <div className="w-1/2 h-3 bg-white/20 rounded-full" />
      <div className="text-xs font-bold text-[#25D366]">+3.8x ROAS</div>
    </div>
    <div className="flex gap-2 h-full">
      <div className="flex-1 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-accent-secondary border-t-transparent animate-spin" />
      </div>
      <div className="flex-1 bg-white/5 rounded-lg border border-white/10 p-2 flex flex-col justify-between">
        <div className="w-full h-1 bg-white/20 rounded-full" />
        <div className="w-3/4 h-1 bg-white/20 rounded-full" />
        <div className="w-1/2 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  </div>
);

const AIWorkflow = () => (
  <div className="w-full h-24 bg-white/5 rounded-xl border border-white/10 p-3 flex items-center justify-between mt-4 relative">
    <div className="absolute inset-0 bg-noise opacity-20" />
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="w-6 h-6 rounded-md bg-accent-primary/20 border border-accent-primary/50 flex items-center justify-center z-10"><Cpu className="w-3 h-3 text-accent-primary" /></motion.div>
    <div className="h-0.5 flex-1 bg-gradient-to-r from-accent-primary to-accent-secondary relative z-0">
      <motion.div animate={{ x: [0, 100] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute top-1/2 -translate-y-1/2 w-4 h-1 bg-white blur-sm rounded-full" />
    </div>
    <div className="w-8 h-8 rounded-full bg-accent-secondary/20 border border-accent-secondary/50 flex items-center justify-center z-10"><div className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" /></div>
  </div>
);

// --- 3D Card Wrapper ---
const TiltCard = ({ children, className }: { children: React.ReactNode, className: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

const detailedServices = [
  {
    id: "seo",
    href: "/seo-services",
    title: "SEO Services",
    description: "Data-driven organic search strategies engineered to capture high-intent commercial traffic globally.",
    icon: LineChart,
    features: ["Technical SEO", "Local SEO", "E-Commerce SEO", "Content SEO"],
    Visual: SEOChart,
  },
  {
    id: "web-design",
    href: "/web-design-development",
    title: "Web Design & Dev",
    description: "Enterprise-grade headless architectures and custom storefronts built for unmatched speed.",
    icon: Code2,
    features: ["Corporate Websites", "Landing Pages", "WordPress", "Optimization"],
    Visual: WebMockup,
  },
  {
    id: "e-commerce",
    href: "/ecommerce-development",
    title: "E-Commerce",
    description: "High-performance Shopify and custom marketplace development focused on conversion.",
    icon: ShoppingCart,
    features: ["Shopify Development", "WooCommerce", "Marketplaces", "Payment Gateways"],
    Visual: WebMockup,
  },
  {
    id: "digital-marketing",
    href: "/digital-marketing",
    title: "Digital Marketing",
    description: "High-ROI paid acquisition campaigns focused on aggressive lead generation and revenue scaling.",
    icon: Megaphone,
    features: ["Google Ads", "Meta Ads", "Lead Generation", "Performance Marketing"],
    Visual: AdDashboard,
  },
  {
    id: "social-media",
    href: "/social-media-management",
    title: "Social Media",
    description: "Strategic brand positioning and community growth across all major social networks.",
    icon: Share2,
    features: ["Instagram Marketing", "LinkedIn Marketing", "Content Creation", "Community"],
    Visual: AdDashboard,
  },
  {
    id: "branding",
    href: "/branding-creative",
    title: "Branding",
    description: "Strategic visual identities that elevate your market positioning and build enterprise trust.",
    icon: PenTool,
    features: ["Logo Design", "Brand Identity", "Brand Guidelines", "Visual Systems"],
    Visual: WebMockup,
  },
  {
    id: "ai-solutions",
    href: "/ai-solutions",
    title: "AI Solutions",
    description: "Custom artificial intelligence integrations to automate operations and scale your business.",
    icon: Cpu,
    features: ["AI Chatbots", "CRM Automation", "Lead Qualification", "Workflow Automation"],
    Visual: AIWorkflow,
  },
  {
    id: "ui-ux",
    href: "/ui-ux-design",
    title: "UI / UX Design",
    description: "User-centric interface design that dramatically improves software adoption and conversion rates.",
    icon: Layout,
    features: ["UX Design", "SaaS Dashboards", "Mobile Interfaces", "Conversion Optimization"],
    Visual: WebMockup,
  },
  {
    id: "mobile-apps",
    href: "/mobile-app-development",
    title: "Mobile Apps",
    description: "Native iOS and Android application development for enterprise solutions and customer portals.",
    icon: Smartphone,
    features: ["iOS Development", "Android Apps", "Flutter", "Enterprise Portals"],
    Visual: WebMockup,
  },
  {
    id: "crm-automation",
    href: "/crm-automation",
    title: "CRM & Automation",
    description: "Seamless sales pipeline engineering and lead automation using industry-leading tools.",
    icon: Settings,
    features: ["HubSpot Setup", "Sales Automation", "Lead Routing", "Workflow Triggers"],
    Visual: AIWorkflow,
  },
  {
    id: "content-marketing",
    href: "/content-marketing",
    title: "Content Marketing",
    description: "Authoritative, SEO-optimized content production that establishes industry leadership.",
    icon: PenTool,
    features: ["SEO Writing", "Blog Management", "Thought Leadership", "Landing Page Copy"],
    Visual: SEOChart,
  },
  {
    id: "video-production",
    href: "/video-production",
    title: "Video Production",
    description: "High-end corporate videography, motion graphics, and engaging social media reels.",
    icon: Video,
    features: ["Promotional Video", "Corporate Reels", "Motion Graphics", "Video Ads"],
    Visual: WebMockup,
  },
  {
    id: "email-marketing",
    href: "/email-marketing",
    title: "Email Marketing",
    description: "Automated retention sequences and high-conversion newsletters to maximize lifetime value.",
    icon: Mail,
    features: ["Email Campaigns", "Lead Nurturing", "Automation Sequences", "Newsletters"],
    Visual: AdDashboard,
  },
  {
    id: "reputation",
    href: "/reputation-management",
    title: "Reputation Management",
    description: "Proactive online review generation and brand monitoring to build impenetrable trust.",
    icon: Star,
    features: ["Google Reviews", "Brand Monitoring", "Trust Building", "Review Systems"],
    Visual: SEOChart,
  },
  {
    id: "hosting",
    href: "/hosting-maintenance",
    title: "Hosting & Maintenance",
    description: "Military-grade website security, managed cloud hosting, and continuous technical support.",
    icon: ShieldCheck,
    features: ["Managed Hosting", "Security Audits", "Daily Backups", "Performance Tuning"],
    Visual: AIWorkflow,
  },
];

export function DetailedServicesGrid() {
  return (
    <section id="services-grid" className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 perspective-1000">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Full-Stack <span className="text-gradient-secondary">Enterprise Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We provide a complete ecosystem of 15 core digital growth services designed to transform ambitious brands into undisputed market leaders globally.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: 1000 }}>
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <TiltCard className="h-full">
                <Link href={service.href} className="block h-full cursor-pointer group">
                  <div 
                    className="glass p-8 rounded-3xl border border-white/10 bg-background/50 backdrop-blur-xl flex flex-col h-full relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] group-hover:border-accent-primary/50"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {/* Animated Gradient Border Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-foreground group-hover:text-accent-primary transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                      <service.icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="font-heading text-2xl font-bold mb-3 transform transition-transform group-hover:translate-x-1">{service.title}</h3>
                    <p className="text-muted leading-relaxed mb-6 flex-grow">{service.description}</p>
                    
                    {/* Abstract Visual Proof */}
                    <div className="mb-6 transform transition-transform group-hover:scale-[1.02]">
                      <service.Visual />
                    </div>
                    
                    <ul className="space-y-3 pt-6 border-t border-white/10 relative z-10">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-foreground/90 transform transition-transform group-hover:translate-x-1" style={{ transitionDelay: `${i * 50}ms` }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent-secondary group-hover:text-white transition-colors">
                        Explore Service
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
