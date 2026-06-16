"use client";

import { LegalPageLayout } from "@/components/shared/LegalPageLayout";

export default function AccessibilityPage() {
  const seoKeywords = [
    "Website Accessibility",
    "Accessibility Statement",
    "Inclusive Website Design"
  ];

  const sections = [
    {
      id: "accessibility-commitment",
      title: "1. Accessibility Commitment",
      content: (
        <>
          <p>
            At Digipeak Agency, we believe that the internet should be accessible, inclusive, and usable for everyone, regardless of physical ability, cognitive barriers, or technical setup. We are committed to designing and developing our website (<a href="https://www.digipeak.agency" className="text-accent-primary hover:underline">https://www.digipeak.agency</a>) to be accessible to visitors with disabilities.
          </p>
          <p>
            To achieve this, we align our platform's layout and engineering with the <strong>Web Content Accessibility Guidelines (WCAG 2.1)</strong> at the <strong>Level AA</strong> success criteria. These guidelines outline how to make web content more accessible to people with visual, auditory, motor, and cognitive limitations.
          </p>
        </>
      ),
    },
    {
      id: "keyboard-navigation",
      title: "2. Keyboard Navigation",
      content: (
        <>
          <p>
            Our website is fully navigable using a standard keyboard interface alone. Visitors who rely on keyboard navigation can move through our pages, toggle menu dropdowns, fill out inquiry forms, use our project calculators, and close cookie settings modals using simple keys:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Tab:</strong> Moves focus forward to the next interactive link, input, or control.</li>
            <li><strong>Shift + Tab:</strong> Moves focus backward to the previous interactive element.</li>
            <li><strong>Enter / Space:</strong> Activates the focused link, button, or toggle switch.</li>
            <li><strong>Escape (Esc):</strong> Closes active overlays, modals, and mobile drawer menus.</li>
          </ul>
          <p>
            We enforce highly visible focus rings (using borders and subtle glows) on all interactive elements, ensuring that users can visually identify which element has keyboard focus.
          </p>
        </>
      ),
    },
    {
      id: "screen-reader-support",
      title: "3. Screen Reader Support",
      content: (
        <>
          <p>
            We implement semantic HTML5 structures to provide screen reader users (e.g. users of JAWS, NVDA, VoiceOver, or TalkBack) with a clean, structured document layout. Specifically, we enforce:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Proper use of heading structures (<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>) representing clear document hierarchies.</li>
            <li>Descriptive alt text on all images, icons, and illustrations. Decorative graphics are marked with <code>aria-hidden="true"</code> so screen readers ignore them.</li>
            <li>Use of ARIA landmarks and roles (e.g. <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>, <code>role="dialog"</code>) to aid in page navigation.</li>
            <li>Explicit association of form labels and inputs using `id` and `htmlFor` properties.</li>
          </ul>
        </>
      ),
    },
    {
      id: "responsive-design",
      title: "4. Responsive Design Standards",
      content: (
        <>
          <p>
            Our website is built using a fully responsive layout grid that adjusts dynamically to any viewport size, from large desktop monitors to tablets and smartphones. We ensure that:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Users can zoom or scale text up to 200% without breaking page layouts, causing content clipping, or forcing horizontal scrolling.</li>
            <li>Touch targets (buttons, links) are designed with a minimum size of 44x44 CSS pixels to accommodate motor coordination needs.</li>
            <li>Page layouts adapt gracefully when viewports are rotated between landscape and portrait orientations.</li>
          </ul>
        </>
      ),
    },
    {
      id: "color-contrast",
      title: "5. Color Contrast Compliance",
      content: (
        <>
          <p>
            While our site employs a dark luxury design theme (vibrant purple/blue accents on '#050816' backgrounds), we actively monitor contrast ratios to ensure maximum readability.
          </p>
          <p>
            We ensure that all textual content meets or exceeds WCAG AA contrast standards:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Standard body text (below 18pt or 24px) retains a minimum contrast ratio of <strong>4.5:1</strong> against the background.</li>
            <li>Large headings (18pt/24px and above) maintain a minimum contrast ratio of <strong>3:1</strong>.</li>
            <li>Important visual components (such as input borders, buttons, and state indicators) meet a contrast ratio of <strong>3:1</strong>.</li>
          </ul>
        </>
      ),
    },
    {
      id: "accessibility-improvements",
      title: "6. Accessibility Improvements",
      content: (
        <>
          <p>
            We view digital accessibility as an ongoing journey. We regularly review our codebase and audit our design tokens using automated tools (e.g. Lighthouse, Axe DevTools) alongside periodic manual keyboard and screen reader checks.
          </p>
          <p>
            When we identify accessibility bugs or layout shifts, we prioritize resolving them in our deployment pipeline.
          </p>
        </>
      ),
    },
    {
      id: "contact-support",
      title: "7. Contact Accessibility Support",
      content: (
        <>
          <p>
            If you encounter any accessibility barriers on our website, or if you have recommendations on how we can improve the inclusivity of our B2B templates and tools, please contact our support team:
          </p>
          <div className="mt-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
            <p className="font-heading font-bold text-white text-xs mb-1">Digipeak Agency Accessibility Support</p>
            <p className="text-xs">Email: <a href="mailto:accessibility@digipeak.agency" className="text-accent-primary hover:underline">accessibility@digipeak.agency</a></p>
            <p className="text-xs">Support Ticket: <a href="https://www.digipeak.agency/contact" className="text-accent-primary hover:underline">https://www.digipeak.agency/contact</a></p>
            <p className="text-xs text-muted mt-2">We aim to review accessibility feedback and respond with corrective solutions within 5 business days.</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Accessibility Statement"
      description="Read our commitment to digital accessibility, inclusive design standards, WCAG compliance levels, keyboard navigation, and contrast audits."
      lastUpdated="June 10, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
      canonicalPath="/accessibility"
    />
  );
}
