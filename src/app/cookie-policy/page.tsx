"use client";

import { LegalPageLayout } from "@/components/shared/LegalPageLayout";

export default function CookiePolicyPage() {
  const seoKeywords = [
    "Cookie Policy",
    "Cookie Preferences",
    "Analytics Cookies",
    "Marketing Cookies"
  ];

  const sections = [
    {
      id: "what-are-cookies",
      title: "1. What Are Cookies",
      content: (
        <>
          <p>
            Cookies are small text files containing a string of alphanumeric characters that are placed on your computer, tablet, or smartphone when you visit a website. They are widely used by website owners to make websites work, or work more efficiently, as well as to provide reporting information.
          </p>
          <p>
            Cookies can be "session cookies" (which are automatically deleted when you close your browser) or "persistent cookies" (which remain on your device for a set period of time or until you manually clear them). Additionally, cookies can be "first-party" (set directly by Digipeak) or "third-party" (set by partners and external service providers).
          </p>
        </>
      ),
    },
    {
      id: "why-we-use-cookies",
      title: "2. Why We Use Cookies",
      content: (
        <>
          <p>
            We use cookies to enhance your browsing experience, secure our platform, measure site performance, and support our advertising outreach. Specifically, cookies allow us to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Keep the website secure and prevent spam or brute-force attacks on our inquiry forms.</li>
            <li>Remember your settings, preferences, and calculations from our digital calculators.</li>
            <li>Understand how you navigate our site so we can optimize layout layouts and load speeds.</li>
            <li>Analyze lead intent and deliver relevant B2B consulting proposals.</li>
            <li>Measure the return on investment (ROI) of our digital marketing and advertising spend.</li>
          </ul>
        </>
      ),
    },
    {
      id: "essential-cookies",
      title: "3. Essential Cookies",
      content: (
        <>
          <p>
            These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as accessing secure areas, database routing, and processing form submissions.
          </p>
          <p>
            Because these cookies are essential for the website to function securely, they are set to "Always Active" and cannot be turned off. If you configure your browser to block these cookies, some parts of our website will not function.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-xs text-left text-muted">
              <thead>
                <tr className="border-b border-white/10 text-white">
                  <th className="py-2 pr-4 font-bold">Cookie Name</th>
                  <th className="py-2 px-4 font-bold">Provider</th>
                  <th className="py-2 px-4 font-bold">Purpose</th>
                  <th className="py-2 pl-4 font-bold">Expiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-white">cookie_consent</td>
                  <td className="py-2.5 px-4">Digipeak</td>
                  <td className="py-2.5 px-4">Stores the user's cookie consent selection state.</td>
                  <td className="py-2.5 pl-4">12 months</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-white">cookie_preferences</td>
                  <td className="py-2.5 px-4">Digipeak</td>
                  <td className="py-2.5 px-4">Stores granular consent selections (Analytics, Marketing, etc.).</td>
                  <td className="py-2.5 pl-4">12 months</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-white">__Host-next-auth.*</td>
                  <td className="py-2.5 px-4">NextAuth</td>
                  <td className="py-2.5 px-4">Secures client sessions and validates anti-CSRF tokens.</td>
                  <td className="py-2.5 pl-4">Session</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "analytics-cookies",
      title: "4. Analytics Cookies",
      content: (
        <>
          <p>
            Analytics cookies collect information about how visitors use our website. They help us understand which pages are the most popular, how users move around the site, and if they encounter any error messages.
          </p>
          <p>
            We use <strong>Google Analytics 4 (GA4)</strong>. All data collected by these cookies is aggregated and anonymized. Analytics cookies will only load if you opt in to "Analytics Cookies" in our preferences panel.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-xs text-left text-muted">
              <thead>
                <tr className="border-b border-white/10 text-white">
                  <th className="py-2 pr-4 font-bold">Cookie Name</th>
                  <th className="py-2 px-4 font-bold">Provider</th>
                  <th className="py-2 px-4 font-bold">Purpose</th>
                  <th className="py-2 pl-4 font-bold">Expiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-white">_ga</td>
                  <td className="py-2.5 px-4">Google Analytics</td>
                  <td className="py-2.5 px-4">Registers a unique ID used to generate statistical data on site usage.</td>
                  <td className="py-2.5 pl-4">2 years</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-white">_ga_*</td>
                  <td className="py-2.5 px-4">Google Analytics</td>
                  <td className="py-2.5 px-4">Used by GA4 to store and count pageviews and session state.</td>
                  <td className="py-2.5 pl-4">2 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "functional-cookies",
      title: "5. Functional Cookies",
      content: (
        <>
          <p>
            These cookies allow our website to remember choices you make (such as your UI theme or preferred location calculations) and provide enhanced, more personal features.
          </p>
          <p>
            They may also be set by third-party providers whose services we have added to our pages (such as live support chat widgets or video embeds). If you do not allow these cookies, some of these services may not function properly.
          </p>
        </>
      ),
    },
    {
      id: "marketing-cookies",
      title: "6. Marketing Cookies",
      content: (
        <>
          <p>
            Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
          </p>
          <p>
            We use pixels and tags from <strong>Google Ads, Meta Pixel, and LinkedIn Insight Tag</strong> to verify conversion events and run retargeting campaigns. These cookies will only load if you explicitly opt in to "Marketing Cookies" in our preferences panel.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-xs text-left text-muted">
              <thead>
                <tr className="border-b border-white/10 text-white">
                  <th className="py-2 pr-4 font-bold">Cookie Name</th>
                  <th className="py-2 px-4 font-bold">Provider</th>
                  <th className="py-2 px-4 font-bold">Purpose</th>
                  <th className="py-2 pl-4 font-bold">Expiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-white">_fbp</td>
                  <td className="py-2.5 px-4">Meta Platforms</td>
                  <td className="py-2.5 px-4">Used by Facebook to deliver advertisement products on their platform.</td>
                  <td className="py-2.5 pl-4">3 months</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-white">UserMatchHistory</td>
                  <td className="py-2.5 px-4">LinkedIn</td>
                  <td className="py-2.5 px-4">Provides professional demographic tracking for ad optimization.</td>
                  <td className="py-2.5 pl-4">30 days</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-white">_gcl_au</td>
                  <td className="py-2.5 px-4">Google Ads</td>
                  <td className="py-2.5 px-4">Used by Google AdSense to experiment with advertisement efficiency.</td>
                  <td className="py-2.5 pl-4">3 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: "managing-preferences",
      title: "7. Managing Cookie Preferences",
      content: (
        <>
          <p>
            We believe in giving you complete control over your data. You can manage your preferences on our website in the following ways:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Consent Panel:</strong> Click on the "Cookie Settings" link in our footer to trigger the preferences modal. You can toggle optional categories on or off, save your preferences, or reset defaults.
            </li>
            <li>
              <strong>Browser Settings:</strong> You can configure your browser to block or delete cookies. Each browser has different settings—check your browser's Help menu for details.
            </li>
            <li>
              <strong>Mobile Identifiers:</strong> On mobile devices, your operating system may offer settings to limit ad tracking or reset advertising identifiers.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "third-party-tracking",
      title: "8. Third Party Tracking Technologies",
      content: (
        <>
          <p>
            In addition to cookies, we may use other tracking technologies, such as web beacons (clear gifs), pixels, or local storage objects (LSOs) to verify email campaigns, tracking conversions, and delivering tailored content.
          </p>
          <p>
            We implement <strong>Google Consent Mode v2</strong> to ensure these third-party trackers adapt to your choices automatically. For example, if you reject marketing, Google Ads will only send anonymous ping data and will not store or read cookies on your device.
          </p>
        </>
      ),
    },
    {
      id: "contact-information",
      title: "9. Contact Information",
      content: (
        <>
          <p>
            If you have any questions regarding our Cookie Policy or our implementation of Google Consent Mode v2, please reach out to our privacy team:
          </p>
          <div className="mt-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
            <p className="font-heading font-bold text-white text-xs mb-1">Digipeak Agency Compliance Office</p>
            <p className="text-xs">Email: <a href="mailto:privacy@digipeak.agency" className="text-accent-primary hover:underline">privacy@digipeak.agency</a></p>
            <p className="text-xs">Contact Page: <a href="https://www.digipeak.agency/contact" className="text-accent-primary hover:underline">https://www.digipeak.agency/contact</a></p>
            <p className="text-xs text-muted mt-2">Physical Location Focus: Qatar • UAE • Sri Lanka • United Kingdom</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Cookie Policy"
      description="Read how Digipeak Agency uses cookies, tracking tags, and consent mode architecture to operate, optimize, and secure our online marketing services."
      lastUpdated="June 10, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
      canonicalPath="/cookie-policy"
    />
  );
}
