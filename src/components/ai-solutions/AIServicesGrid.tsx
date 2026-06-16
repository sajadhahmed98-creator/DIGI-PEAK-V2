"use client";

import { motion } from "framer-motion";
import { MessageSquare, Workflow, Database, Target, FileText, Megaphone, BarChart, Code2, HeadphonesIcon, Settings2 } from "lucide-react";

const aiServices = [
  { title: "AI Chatbots", desc: "Website chatbots, WhatsApp AI bots, customer support bots, and virtual sales assistants.", icon: MessageSquare },
  { title: "AI Automation", desc: "Workflow automation, task execution, process optimization, and smart triggers.", icon: Workflow },
  { title: "CRM Automation", desc: "Lead management, automated follow-ups, customer journey mapping, and sales pipelines.", icon: Database },
  { title: "AI Lead Generation", desc: "Intelligent lead qualification, automated outreach, prospect research, and dynamic lead scoring.", icon: Target },
  { title: "AI Content Systems", desc: "Programmatic content generation, blog automation, social media scheduling, and email generation.", icon: FileText },
  { title: "AI Marketing Systems", desc: "Campaign automation, real-time audience analysis, conversion tracking, and predictive recommendations.", icon: Megaphone },
  { title: "Business Intelligence", desc: "Data analysis, live KPI dashboards, predictive analytics, and deep business insights.", icon: BarChart },
  { title: "OpenAI Integration", desc: "Direct ChatGPT integration, API development, AI assistants, and custom GPT environments.", icon: Code2 },
  { title: "Customer Service AI", desc: "Tier-1 support automation, intelligent ticket management, and dynamic knowledge bases.", icon: HeadphonesIcon },
  { title: "Custom Development", desc: "Bespoke AI applications, enterprise-grade solutions, and advanced custom workflows.", icon: Settings2 },
];

export function AIServicesGrid() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 bg-black border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">AI Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From plug-and-play chatbot integrations to massive custom automation architectures, we engineer systems that do the heavy lifting.
            </p>
          </motion.div>
        </div>

        {/* 10 Card Grid Layout: 2 rows of 4, then center the last 2, or standard grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {aiServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-colors group flex flex-col"
            >
              <div className="shrink-0 h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:bg-cyan-500/20 transition-all duration-300 mb-5">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base mb-2 text-foreground group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-grow">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
