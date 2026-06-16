"use client";

import { LegalPageLayout } from "@/components/shared/LegalPageLayout";

export default function TermsOfServicePage() {
  const seoKeywords = [
    "Terms of Service",
    "Website Terms and Conditions",
    "Digital Agency Terms",
    "Business Service Terms"
  ];

  const sections = [
    {
      id: "acceptance-of-terms",
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>
            By accessing, browsing, or using the website and online features of Digipeak Agency (“Digipeak,” “we,” “our,” or “us”) at <a href="https://www.digipeak.agency" className="text-accent-primary hover:underline">https://www.digipeak.agency</a>, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you, whether personally or on behalf of an entity, and Digipeak Agency.
          </p>
          <p>
            If you do not agree to all of these Terms of Service, you are strictly prohibited from using our website, digital templates, project calculators, and consulting services. You must cease usage of our platform immediately.
          </p>
        </>
      ),
    },
    {
      id: "website-usage",
      title: "2. Website Usage",
      content: (
        <>
          <p>
            We grant you a limited, non-exclusive, non-transferable, and revocable license to access our platform for professional business research, evaluating our services, and using our public B2B marketing tools.
          </p>
          <p>
            As a condition of your use, you warrant that:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>You will not use the website for any purpose that is unlawful, fraudulent, or prohibited by these Terms.</li>
            <li>You will not attempt to exploit, harm, or disrupt the website's infrastructure, code base, or security systems.</li>
            <li>You will not use automated systems (such as bots, spiders, or scrapers) to extract content or bulk download data without our prior written authorization.</li>
            <li>Any corporate business information you submit through our inquiry forms is accurate, current, and truthful.</li>
          </ul>
        </>
      ),
    },
    {
      id: "service-availability",
      title: "3. Service Availability",
      content: (
        <>
          <p>
            We strive to maintain high platform uptime and keep our digital calculators, resource hubs, and dashboards operational. However, we do not guarantee uninterrupted access to our website.
          </p>
          <p>
            From time to time, access to our services may be temporarily suspended, restricted, or modified without notice due to scheduled server maintenance, technical upgrades, infrastructure repairs, or emergency security patches. We will not be liable for any website downtime or access interruptions.
          </p>
        </>
      ),
    },
    {
      id: "intellectual-property",
      title: "4. Intellectual Property",
      content: (
        <>
          <p>
            All content on this website, including but not limited to source code, databases, website layouts, design tokens, illustrations, graphics, copy, calculators, B2B templates, and brand logos, is the exclusive intellectual property of Digipeak Agency or its licensors.
          </p>
          <p>
            This material is protected by international copyright, trademark, and trade secret laws. You are prohibited from republishing, selling, licensing, duplicating, or distributing our intellectual property without receiving our explicit written consent in advance.
          </p>
        </>
      ),
    },
    {
      id: "client-responsibilities",
      title: "5. Client Responsibilities",
      content: (
        <>
          <p>
            If you enter into a digital marketing, SEO, web design, or custom CRM development project with Digipeak, you agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Provide timely feedback, content approvals, and digital assets required for project milestones.</li>
            <li>Deliver accurate business data, access keys, and host credentials needed for API integrations or tracking setups.</li>
            <li>Act in good faith and cooperate with our agency team to ensure efficient project delivery schedules.</li>
            <li>Ensure that your business practices and submitted content do not violate any local regulations or third-party copyrights.</li>
          </ul>
        </>
      ),
    },
    {
      id: "payment-terms",
      title: "6. Payment Terms",
      content: (
        <>
          <p>
            Fees for our enterprise consulting services, custom SEO packages, and web engineering are defined in specific service agreements, client proposals, or statements of work (SOW).
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Invoicing:</strong> Payment obligations are detailed in your specific contract. Typically, project phases require upfront deposits prior to kicking off work.</li>
            <li><strong>Taxes:</strong> Unless stated otherwise, all quoted fees exclude local taxes, VAT, or withholding duties, which are the client's responsibility.</li>
            <li><strong>Late Payments:</strong> Digipeak reserves the right to suspend ongoing campaign management, hosting services, or project deliverables if invoices remain unpaid past their due date.</li>
          </ul>
        </>
      ),
    },
    {
      id: "limitation-of-liability",
      title: "7. Limitation of Liability",
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law, Digipeak Agency, its directors, employees, or partners shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages.
          </p>
          <p>
            This limitation applies to damages resulting from your use of (or inability to use) our website, errors or omissions in calculators, third-party link redirections, security breaches, loss of business profits, data loss, or fluctuations in search engine rankings (SEO). The website and all B2B resource downloads are provided on an “as-is” and “as-available” basis.
          </p>
        </>
      ),
    },
    {
      id: "service-modifications",
      title: "8. Service Modifications",
      content: (
        <>
          <p>
            Digipeak reserves the right to modify, update, enhance, or discontinue any feature, tool, calculator, or page on our website at any time without notice. We are continuously improving our digital ecosystem and search engine features, and you acknowledge that services may change over time.
          </p>
        </>
      ),
    },
    {
      id: "termination",
      title: "9. Termination",
      content: (
        <>
          <p>
            We reserve the right, in our sole discretion and without liability, to terminate or restrict your access to our website, B2B templates, and tools at any time, with or without notice, if we believe you have breached these Terms of Service or engaged in behavior that harms our brand, platform security, or business interests.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "10. Governing Law",
      content: (
        <>
          <p>
            These Terms of Service and any disputes or claims arising out of your interaction with our platform shall be governed by and construed in accordance with the laws of the <strong>State of Qatar</strong>.
          </p>
          <p>
            Any legal actions, suits, or proceedings arising under these terms shall be subject to the exclusive jurisdiction of the competent courts of Doha, Qatar, although we reserve the right to initiate legal proceedings in any court of competent jurisdiction globally to protect our intellectual property or recover unpaid fees.
          </p>
        </>
      ),
    },
    {
      id: "contact-information",
      title: "11. Contact Information",
      content: (
        <>
          <p>
            If you have any questions or require clarification regarding these Terms of Service, please contact our Legal and Operations Office:
          </p>
          <div className="mt-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
            <p className="font-heading font-bold text-white text-xs mb-1">Digipeak Agency Legal Office</p>
            <p className="text-xs">Email: <a href="mailto:legal@digipeak.agency" className="text-accent-primary hover:underline">legal@digipeak.agency</a></p>
            <p className="text-xs">Contact Page: <a href="https://www.digipeak.agency/contact" className="text-accent-primary hover:underline">https://www.digipeak.agency/contact</a></p>
            <p className="text-xs text-muted mt-2">Physical Location Focus: Qatar • UAE • Sri Lanka • United Kingdom</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Terms of Service"
      description="Read the terms, conditions, and intellectual property rules governing your usage of the Digipeak Agency website, calculators, templates, and B2B services."
      lastUpdated="June 10, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
      canonicalPath="/terms-of-service"
    />
  );
}
