"use client";

import { LegalPageLayout } from "@/components/shared/LegalPageLayout";

export default function DisclaimerPage() {
  const seoKeywords = [
    "Website Disclaimer",
    "Business Disclaimer",
    "Marketing Disclaimer"
  ];

  const sections = [
    {
      id: "general-information",
      title: "1. General Information Disclaimer",
      content: (
        <>
          <p>
            The information, calculators, resource downloads, and case studies provided on the Digipeak Agency website (<a href="https://www.digipeak.agency" className="text-accent-primary hover:underline">https://www.digipeak.agency</a>) are for general informational and educational purposes only.
          </p>
          <p>
            While we make every effort to verify the accuracy, completeness, and timeliness of the material published on our platform, all content is provided on an “as-is” basis without warranties of any kind, express or implied. Digipeak assumes no responsibility or liability for errors, inaccuracies, or omissions in any part of the website content.
          </p>
        </>
      ),
    },
    {
      id: "marketing-results",
      title: "2. Marketing Results Disclaimer",
      content: (
        <>
          <p>
            Any case studies, client testimonials, performance metrics, or screenshots of ranking growth (SEO) displayed on this website represent historical results achieved for specific businesses.
          </p>
          <p>
            These examples are illustrative and are not intended to represent, warrant, or guarantee that your business will achieve similar results. The success of any digital marketing campaign, web optimization, or lead-generation strategy is dependent on numerous variables, including local market competition, product demand, budget size, algorithm updates, and external economic conditions.
          </p>
        </>
      ),
    },
    {
      id: "no-guaranteed-results",
      title: "3. No Guaranteed Results",
      content: (
        <>
          <p>
            Digipeak Agency does not guarantee search engine rankings, web traffic increases, lead volumes, or sales conversion rates. Search engine algorithms (specifically Google, Bing, and social channels) are proprietary systems that undergo frequent, unannounced updates.
          </p>
          <p>
            While our enterprise SEO strategies and web layouts are engineered in accordance with modern best practices, past performance is not indicative of future outcomes. You acknowledge that organic search visibility is subject to volatility outside of our direct control.
          </p>
        </>
      ),
    },
    {
      id: "third-party-content",
      title: "4. Third Party Content Disclaimer",
      content: (
        <>
          <p>
            Our website may feature articles, links, resources, or widgets provided by third parties. Redirections to external websites do not imply an endorsement or recommendation of their products, claims, or policies.
          </p>
          <p>
            We have no control over the accuracy, security, or reliability of third-party platforms. Any transactions, agreements, or interactions you enter into with external providers are strictly between you and that third party.
          </p>
        </>
      ),
    },
    {
      id: "professional-advice",
      title: "5. Professional Advice Disclaimer",
      content: (
        <>
          <p>
            The tools, B2B templates, and content provided on our website do not constitute professional legal, tax, financial, or specific corporate advice.
          </p>
          <p>
            While our B2B resources and checklists are designed by digital marketing experts to assist in business planning, you should consult with qualified professionals (such as legal counsel or financial advisors) before entering into contracts, declaring tax liabilities, or adopting legal compliance terms based on our templates.
          </p>
        </>
      ),
    },
    {
      id: "limitation-of-liability",
      title: "6. Limitation of Liability",
      content: (
        <>
          <p>
            In no event shall Digipeak Agency, its subsidiaries, employees, or directors be held liable for any loss, injury, or damage—including but not limited to direct, indirect, special, consequential, or punitive damages—arising out of your access to, reliance on, or use of the tools, calculators, templates, and information provided on this website.
          </p>
        </>
      ),
    },
    {
      id: "contact-information",
      title: "7. Contact Information",
      content: (
        <>
          <p>
            If you have any questions or require additional details regarding the disclaimers outlined on this page, please reach out to our team:
          </p>
          <div className="mt-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
            <p className="font-heading font-bold text-white text-xs mb-1">Digipeak Agency Corporate Relations</p>
            <p className="text-xs">Email: <a href="mailto:hello@digipeak.agency" className="text-accent-primary hover:underline">hello@digipeak.agency</a></p>
            <p className="text-xs">Website Contact: <a href="https://www.digipeak.agency/contact" className="text-accent-primary hover:underline">https://www.digipeak.agency/contact</a></p>
            <p className="text-xs text-muted mt-2">Physical Location Focus: Qatar • UAE • Sri Lanka • United Kingdom</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Disclaimer"
      description="Read the general, financial, marketing, and performance disclaimers governing the information, calculator outputs, and downloadable templates on our site."
      lastUpdated="June 10, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
      canonicalPath="/disclaimer"
    />
  );
}
