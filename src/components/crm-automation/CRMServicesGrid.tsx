"use client";

import { motion } from "framer-motion";
import { CheckSquare, Settings, Cpu, Layers, ShieldAlert, Database, Activity, TrendingUp, Bot, MessageSquare } from "lucide-react";

const crmServices = [
  { 
    title: "HubSpot CRM Systems", 
    desc: "Comprehensive HubSpot Setup, optimized Sales Pipeline Automation, Lead Nurturing sequences, and Marketing/Service Hub integrations to align your growth teams.", 
    icon: CheckSquare 
  },
  { 
    title: "Zoho CRM Solutions", 
    desc: "Bespoke Zoho Setup, custom system blueprints, Zoho Flow & Creator automations, and localized lead mapping to maximize daily sales productivity.", 
    icon: Settings 
  },
  { 
    title: "Salesforce Enterprise", 
    desc: "High-end Salesforce CRM cloud architecture, custom APEX development, secure workflows orchestration, and Lightning interfaces tailored for large-scale operations.", 
    icon: Cpu 
  },
  { 
    title: "Pipedrive Setup", 
    desc: "Fast, user-friendly Pipedrive CRM setups, activity-based task tracking, email automation triggers, and streamlined visual deal pipelines.", 
    icon: Layers 
  },
  { 
    title: "Custom CRM Development", 
    desc: "Bespoke internal CRM platforms, customized data fields, role-based visual panels, secure cloud databases, and proprietary business applications.", 
    icon: Database 
  },
  { 
    title: "CRM Data Migration", 
    desc: "Secure, mapped data transfers from legacy platforms. Complete cleanup, data deduplication, and testing with absolutely zero operation downtime.", 
    icon: ShieldAlert 
  },
  { 
    title: "Sales & Lead Automation", 
    desc: "Instant automated responder alerts, smart lead distribution, customized qualification paths, and advanced sales pipeline triggers.", 
    icon: TrendingUp 
  },
  { 
    title: "Workflow Automation", 
    desc: "End-to-end Business Process Automation utilizing n8n, Make, and Zapier to link CRM structures with internal email and calendar networks.", 
    icon: Activity 
  },
  { 
    title: "AI CRM Intelligence", 
    desc: "Smart Lead Scoring models, custom AI follow-ups, predictive client behavior data, and AI Sales Assistants trained on your business datasets.", 
    icon: Bot 
  },
  { 
    title: "WhatsApp & CRM Integrations", 
    desc: "Linking Twilio or WhatsApp Business APIs to trigger instant automated responses, log conversations, and route active chatbot inquiries.", 
    icon: MessageSquare 
  },
];

export function CRMServicesGrid() {
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
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500">CRM & Automation Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We design and implement centralized, automated CRM workflows that eliminate administration friction and scale enterprise sales pipelines.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {crmServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.08 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-colors group flex flex-col lg:col-span-1 md:col-span-1"
            >
              <div className="shrink-0 h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:bg-emerald-500/20 transition-all duration-300 mb-5">
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
