"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export const marketingFaqs = [
  {
    question: "How much should I spend on Google Ads?",
    answer: "Budget depends entirely on your industry's Cost Per Click (CPC) and your revenue goals. We generally recommend a minimum starting budget of $3,000 - $5,000/month to generate enough data for the algorithm to optimize effectively, but we calculate custom budget forecasts during our Discovery phase.",
  },
  {
    question: "How long before I see results from Performance Marketing?",
    answer: "Unlike SEO which takes months, paid advertising (Google Ads, Meta Ads) generates immediate traffic. However, the first 2-4 weeks is the 'learning phase' where we A/B test creatives and audiences. Most clients see a stabilized, profitable ROAS by month 2.",
  },
  {
    question: "Which platform is best: Google Ads or Facebook Ads?",
    answer: "Google Ads captures 'High Intent' (people actively searching for your service), making it ideal for immediate lead generation and B2B. Facebook/Meta Ads is 'Disruptive' (creating demand based on demographics/interests), making it perfect for E-Commerce, B2C, and massive brand awareness. We often recommend a hybrid approach.",
  },
  {
    question: "How do you track ROI and Conversions?",
    answer: "We implement advanced server-side tracking using Google Tag Manager, GA4, and Meta Conversions API. We track every form submission, phone call, and e-commerce purchase, tying it back to the exact ad and keyword that generated the sale.",
  },
  {
    question: "How do you generate B2B leads?",
    answer: "We utilize LinkedIn Ads for account-based marketing (ABM) and Google Search for high-intent queries. We drive this traffic to conversion-optimized landing pages offering high-value Lead Magnets (whitepapers, webinars, ROI calculators) in exchange for prospect data.",
  },
  {
    question: "Do you design the ad creatives and landing pages?",
    answer: "Yes. We are a full-funnel agency. We write the ad copy, design the visual creatives, produce video ads, and build the dedicated landing pages to ensure the entire user journey is optimized for conversion.",
  },
  {
    question: "What is a Lookalike Audience?",
    answer: "A Lookalike Audience is a powerful Meta Ads feature where we upload a list of your best existing customers. Facebook's AI then analyzes millions of data points to find completely new users who share the exact same behaviors and purchasing patterns.",
  },
  {
    question: "What is Performance Max in Google Ads?",
    answer: "Performance Max is Google's AI-driven campaign type that serves ads across all of Google's channels (Search, Display, YouTube, Gmail, Maps) from a single campaign. We use it extensively for E-Commerce clients to maximize reach and ROAS.",
  },
  {
    question: "Do you offer Retargeting?",
    answer: "Absolutely. Over 90% of users don't convert on their first visit. We implement aggressive cross-platform retargeting (e.g., they click a Google Ad, then see your video on Instagram) to stay top-of-mind and force the conversion.",
  },
  {
    question: "How often do you provide performance reports?",
    answer: "We provide 24/7 access to a live Looker Studio dashboard tracking your exact KPIs (Spend, Leads, CPA, ROAS). Additionally, you'll receive detailed monthly strategy reviews with your dedicated account manager.",
  },
  {
    question: "Can you integrate leads directly into my CRM?",
    answer: "Yes. We use Zapier and native APIs to push leads instantly from Facebook/Google directly into HubSpot, Salesforce, GoHighLevel, or your proprietary CRM, ensuring your sales team can contact them within minutes.",
  },
  {
    question: "Do you do TikTok or YouTube Advertising?",
    answer: "Yes. For brands targeting Gen Z/Millennials or demonstrating visual products, TikTok and YouTube offer incredibly low CPMs (Cost Per Mille). We handle the video production and campaign management for both.",
  },
  {
    question: "What happens if a campaign isn't performing?",
    answer: "We monitor accounts daily. If a campaign underperforms, we rapidly pivot. We test new audiences, refresh creatives, modify bidding strategies, or adjust landing page copy to bring the CPA back into profitable KPIs.",
  },
  {
    question: "Do I own my ad accounts?",
    answer: "100%. Transparency is our core value. You retain full admin ownership of your Google Ads, Meta Business Manager, and Analytics accounts. We simply request agency access to manage them on your behalf.",
  },
  {
    question: "Do you manage marketing automation and email drip campaigns?",
    answer: "Yes. Capturing the lead is only step one. We build automated email/SMS sequences (using Klaviyo, Mailchimp, or HubSpot) to nurture leads until they are ready to purchase, maximizing your ultimate ROI.",
  },
];

export function MarketingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-t border-white/5 bg-black">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Digital Marketing <span className="text-gradient-primary">FAQ.</span>
            </h2>
            <p className="text-muted text-lg">
              Everything you need to know about our data-driven customer acquisition systems.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {marketingFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              className={`glass border transition-all duration-500 rounded-2xl overflow-hidden ${openIndex === index ? 'border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.15)]' : 'border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-orange-400' : 'text-foreground group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-orange-500/20 border-orange-500 text-orange-400 rotate-180' : 'bg-white/5 border-white/10 text-muted group-hover:text-white'}`}>
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
