"use client";

import { LegalPageLayout } from "@/components/shared/LegalPageLayout";

export default function PrivacyPolicyPage() {
  const seoKeywords = [
    "Privacy Policy Digipeak",
    "Digital Marketing Agency Privacy Policy",
    "Website Privacy Policy Qatar",
    "Business Website Privacy Policy"
  ];

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: (
        <>
          <p>
            Welcome to Digipeak Agency (“we,” “our,” or “us”). We are committed to protecting your privacy and securing your personal and professional business data. This Privacy Policy describes how we collect, use, process, and disclose your information when you visit and interact with our website (<a href="https://www.digipeak.agency" className="text-accent-primary hover:underline">https://www.digipeak.agency</a>), use our digital marketing calculators, download our B2B resources, or communicate with our consulting team.
          </p>
          <p>
            By accessing our platform or submitting your business information, you consent to the data collection and usage practices described in this policy. We align our data processing activities with international privacy standards, including the General Data Protection Regulation (GDPR), the Qatar Personal Data Privacy Law (Law No. 13 of 2016), and the California Consumer Privacy Act (CCPA).
          </p>
        </>
      ),
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      content: (
        <>
          <p>
            We collect information that you actively provide to us as well as data that is automatically generated during your visit to our platform.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Directly Submitted Information:</strong> When you request a proposal, download a B2B resource, calculate a project scope, or submit a form, we collect your name, corporate email address, phone number, company name, industry, country, and specific project details.
            </li>
            <li>
              <strong>Automatically Collected Data:</strong> When you navigate our platform, we automatically collect log data such as your IP address, browser type, operating system, referring URLs, pages visited, links clicked, time spent, and geographic location.
            </li>
            <li>
              <strong>Cookie and Tracking Data:</strong> We utilize cookies, web beacons, and pixels to collect interaction data. For details on how we use these tools, please refer to Section 4 and our Cookie Policy.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "how-information-is-used",
      title: "3. How Information Is Used",
      content: (
        <>
          <p>
            We process your information based on legitimate business interests, the fulfillment of contract terms, and explicit user consent. Specifically, we use your data to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Provide, operate, and maintain our premium agency services and B2B growth tools.</li>
            <li>Evaluate and score inbound B2B marketing leads to deliver personalized consulting proposals.</li>
            <li>Communicate directly with you regarding project inquiries, scheduled growth calls, and service updates.</li>
            <li>Send newsletters, educational content, and promotional offers (only if you have opted in).</li>
            <li>Analyze user behavior trends to improve website interface design, responsiveness, and conversion rates.</li>
            <li>Detect, prevent, and address technical bugs, security threats, and spam.</li>
          </ul>
        </>
      ),
    },
    {
      id: "cookies-tracking-technologies",
      title: "4. Cookies & Tracking Technologies",
      content: (
        <>
          <p>
            Digipeak uses cookies—small text files stored on your device—to recognize your browser and remember preferences. We split our cookie usage into essential, analytics, functional, and marketing cookies.
          </p>
          <p>
            We respect your privacy choices. Optional cookies will not load on your browser unless you explicitly consent via our Cookie Preferences banner. You can modify, customize, or reset your consent choices at any time using the Cookie Settings panel link located in our footer.
          </p>
        </>
      ),
    },
    {
      id: "analytics-services",
      title: "5. Analytics Services",
      content: (
        <>
          <p>
            We use third-party analytics services, primarily <strong>Google Analytics 4 (GA4)</strong>, to monitor and analyze web traffic and platform engagement. GA4 helps us measure user behavior in an aggregated and anonymized form, including scroll depth, tool usage, page views, and resource downloads.
          </p>
          <p>
            This data helps us optimize our Content Delivery Network (CDN) and interface load speeds. These analytics scripts only load if you consent to "Analytics Cookies" in your preferences.
          </p>
        </>
      ),
    },
    {
      id: "marketing-advertising",
      title: "6. Marketing & Advertising Technologies",
      content: (
        <>
          <p>
            To reach prospective clients and optimize our enterprise advertising campaigns, we deploy marketing tags from external advertising networks, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Google Ads:</strong> Measures advertising conversions and serves retargeting ads based on previous website interactions.</li>
            <li><strong>Meta Pixel:</strong> Tracks user actions on our site to measure Facebook/Instagram ad campaigns and build custom lookalike audiences.</li>
            <li><strong>LinkedIn Insight Tag:</strong> Provides demographic insights about professional business visitors and measures B2B lead generation campaign conversions.</li>
          </ul>
          <p>
            We deploy <strong>Google Consent Mode v2</strong>. If you reject marketing cookies, these platforms operate in a restricted, non-personalized mode, and no tracking scripts will write or read cookies for advertising purposes.
          </p>
        </>
      ),
    },
    {
      id: "data-storage-security",
      title: "7. Data Storage & Security",
      content: (
        <>
          <p>
            The security of your information is a top priority at Digipeak. We implement appropriate technical and organizational measures to safeguard your personal data from unauthorized access, loss, alteration, or disclosure.
          </p>
          <p>
            All submitted form data is encrypted in transit using Secure Socket Layer (SSL/TLS) technology and stored behind secure firewalls. We restrict access to your information to authorized staff members who require it to provide consulting services or manage platform maintenance. However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </>
      ),
    },
    {
      id: "third-party-services",
      title: "8. Third Party Services",
      content: (
        <>
          <p>
            Our website may contain links to external sites or integrate third-party applications (e.g. video hosts, calendar booking systems). This Privacy Policy applies strictly to our own platform. We are not responsible for the privacy practices, content, or cookie policies of third-party websites. We encourage you to review the privacy notices of any third-party services you access.
          </p>
        </>
      ),
    },
    {
      id: "user-rights",
      title: "9. User Rights",
      content: (
        <>
          <p>
            Depending on your location, you hold specific statutory rights regarding your personal information under applicable data protection laws. These rights include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Right to Access:</strong> The right to request copies of your personal data held by us.</li>
            <li><strong>Right to Rectification:</strong> The right to request correction of any inaccurate or incomplete information.</li>
            <li><strong>Right to Erasure (Right to be Forgotten):</strong> The right to request that we delete your personal data under certain conditions.</li>
            <li><strong>Right to Restrict or Object to Processing:</strong> The right to limit how we use your data or object to our processing.</li>
            <li><strong>Right to Data Portability:</strong> The right to request transfer of your data to another service provider.</li>
            <li><strong>Right to Withdraw Consent:</strong> The right to withdraw your consent to optional cookie usage or marketing updates at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact our Compliance Officer at the email provided in Section 12. We will respond to your request within 30 days.
          </p>
        </>
      ),
    },
    {
      id: "international-data-transfers",
      title: "10. International Data Transfers",
      content: (
        <>
          <p>
            Digipeak operates globally, with core markets across Qatar, UAE, Saudi Arabia, the United Kingdom, Singapore, Australia, and Sri Lanka. Your information may be transferred to, stored, and processed in countries outside your own where our servers or service providers are located.
          </p>
          <p>
            When we transfer data internationally, we utilize approved data transfer mechanisms, such as Standard Contractual Clauses (SCCs), to guarantee that your personal information receives a high level of protection.
          </p>
        </>
      ),
    },
    {
      id: "data-retention",
      title: "11. Data Retention",
      content: (
        <>
          <p>
            We retain personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including satisfying legal, accounting, reporting, or regulatory compliance requirements.
          </p>
          <p>
            B2B lead data and form submissions are retained for up to 24 months from the last active interaction, unless a longer retention period is required by contract or local law. Anonymized web analytics data is stored in accordance with GA4 default retention periods (typically 14 months).
          </p>
        </>
      ),
    },
    {
      id: "contact-information",
      title: "12. Contact Information",
      content: (
        <>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact our Data Protection and Compliance Team:
          </p>
          <div className="mt-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
            <p className="font-heading font-bold text-white text-xs mb-1">Digipeak Agency Compliance Office</p>
            <p className="text-xs">Email: <a href="mailto:privacy@digipeak.agency" className="text-accent-primary hover:underline">privacy@digipeak.agency</a></p>
            <p className="text-xs">Website Support: <a href="https://www.digipeak.agency/contact" className="text-accent-primary hover:underline">https://www.digipeak.agency/contact</a></p>
            <p className="text-xs text-muted mt-2">Physical Location Focus: Qatar • UAE • Sri Lanka • United Kingdom</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="Learn how Digipeak Agency collects, protects, processes, and manages personal and professional B2B user information. Enterprise data trust framework."
      lastUpdated="June 10, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
      canonicalPath="/privacy-policy"
    />
  );
}
