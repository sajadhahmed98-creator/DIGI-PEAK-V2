"use client";

import { motion } from "framer-motion";
import { 
  Layers, Edit, BookOpen, Cpu, Target, UserPlus, 
  Filter, Heart, RotateCcw, Sparkles, Settings, ShoppingBag 
} from "lucide-react";

const emailServices = [
  { 
    title: "Email Strategy", 
    desc: "Bespoke database segmentations, subscriber list-building models, content calendars, and conversion funnel strategies.", 
    icon: Layers 
  },
  { 
    title: "Campaign Management", 
    desc: "End-to-end creative copywriting, responsive HTML template design, list cleansing, scheduling, and A/B split testing.", 
    icon: Edit 
  },
  { 
    title: "Newsletter Marketing", 
    desc: "Engaging editorial columns, expert thought leadership updates, and educational digests to build deep relationship trust.", 
    icon: BookOpen 
  },
  { 
    title: "Email Automation", 
    desc: "Behavior-triggered lifecycle flow setups, lead status tag actions, and operational transactional notification systems.", 
    icon: Cpu 
  },
  { 
    title: "Lead Nurturing", 
    desc: "Qualifying prospects, scheduling automated product onboarding checklists, and driving demo call bookings.", 
    icon: Target 
  },
  { 
    title: "Welcome Sequences", 
    desc: "Instant onboarding journeys that welcome new newsletter signups, introduce core products, and deliver initial bonuses.", 
    icon: UserPlus 
  },
  { 
    title: "Sales Funnels", 
    desc: "Multi-step conversion email sequences, checkout recovery paths, time-limited bonuses, and high-converting copy funnels.", 
    icon: Filter 
  },
  { 
    title: "Customer Retention", 
    desc: "Targeted post-purchase onboarding guides, feedback surveys, repeat customer VIP perks, and subscription renewal flows.", 
    icon: Heart 
  },
  { 
    title: "Reactivation Campaigns", 
    desc: "Identifying and re-engaging passive or cold subscribers to restore deliverability and rescue sales leads.", 
    icon: RotateCcw 
  },
  { 
    title: "Promotional Campaigns", 
    desc: "Seasonal sale announcements, high-impact flash promotions, product launch events, and countdown notifications.", 
    icon: Sparkles 
  },
  { 
    title: "CRM Email Automation", 
    desc: "Seamless synchronization of email triggers with Salesforce, Zoho CRM, and HubSpot pipeline status changes.", 
    icon: Settings 
  },
  { 
    title: "E-Commerce Email Marketing", 
    desc: "Tailored Klaviyo integrations for Shopify and WooCommerce, engineering abandoned cart sequences and post-purchase upsells.", 
    icon: ShoppingBag 
  },
];

export function EmailServicesGrid() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 bg-black border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Email Marketing Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We design, write, and automate conversion-focused email funnels that turn list subscribers into lifetime brand advocates.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emailServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-colors group flex flex-col"
            >
              <div className="shrink-0 h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:bg-indigo-500/20 transition-all duration-300 mb-5">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base mb-2 text-foreground group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-xs text-muted leading-relaxed flex-grow">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
