import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

import { QRClientWrapper } from "@/components/tools/QRClientWrapper";

export const metadata: Metadata = {
  title: "Free AI QR Code Generator with Logo | Digipeak Agency",
  description:
    "Generate custom high-resolution QR codes instantly. Customize colors, rounded dots, custom eyes, upload your logo, and export to print-ready SVG, PNG, or PDF. No signup required.",
  alternates: {
    canonical: "https://www.digipeak.agency/tools/qr-code-generator",
  },
  openGraph: {
    title: "Free AI QR Code Generator with Logo | Digipeak Agency",
    description:
      "Generate custom high-resolution QR codes instantly. Customize colors, rounded dots, custom eyes, upload your logo, and export to print-ready SVG, PNG, or PDF.",
    url: "https://www.digipeak.agency/tools/qr-code-generator",
    images: ["/og-resources.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI QR Code Generator with Logo | Digipeak Agency",
    description:
      "Generate custom high-resolution QR codes instantly. Customize colors, rounded dots, custom eyes, upload your logo, and export to print-ready SVG, PNG, or PDF.",
  },
};

export default function QRCodeGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://www.digipeak.agency/tools/qr-code-generator/#webapp",
        "name": "Digipeak Premium AI QR Code Generator",
        "url": "https://www.digipeak.agency/tools/qr-code-generator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        },
        "description": "High-performance, customizable QR code generator with real-time editing, vector export support, dynamic logo embedding, and instant contrast-health evaluation.",
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.digipeak.agency/#organization",
          "name": "Digipeak Agency",
          "url": "https://www.digipeak.agency",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.digipeak.agency/logo.png"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.digipeak.agency/tools/qr-code-generator/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": { "@id": "https://www.digipeak.agency/", "name": "Home" }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": { "@id": "https://www.digipeak.agency/tools", "name": "Tools" }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": { "@id": "https://www.digipeak.agency/tools/qr-code-generator", "name": "QR Code Generator" }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://www.digipeak.agency/tools/qr-code-generator/#howto",
        "name": "How to Create a Custom QR Code with Logo",
        "description": "Step-by-step instructions to design, customize, test, and export a high-resolution branded QR code for free.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Select QR Code Type",
            "text": "Choose from Website URL, Text, WiFi credentials, vCard, WhatsApp message, Google Reviews link, or PDF files.",
            "url": "https://www.digipeak.agency/tools/qr-code-generator/#step1"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Enter Details",
            "text": "Type or paste your destination link or fields. The QR code live preview will update instantly.",
            "url": "https://www.digipeak.agency/tools/qr-code-generator/#step2"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Customize Styling & Logo",
            "text": "Select dots shape (dots, squares), eye styles, configure colors or gradients, and upload your high-res logo.",
            "url": "https://www.digipeak.agency/tools/qr-code-generator/#step3"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Review Health Score & Download",
            "text": "Check the scanning health score (contrast and error-correction). Export instantly to high-resolution PNG, SVG, or print-ready PDF.",
            "url": "https://www.digipeak.agency/tools/qr-code-generator/#step4"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="qr-generator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative min-h-screen bg-[#020203] text-white pt-28 md:pt-36 pb-24 px-4 md:px-8 overflow-hidden">
        {/* Visual Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-1/4 w-[600px] h-[600px] bg-accent-primary/[0.02] rounded-full blur-[160px]" />
          <div className="absolute top-[40%] right-1/4 w-[500px] h-[500px] bg-accent-secondary/[0.02] rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-16">
          {/* Header Title Section */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-1.5 text-xs font-semibold text-accent-primary animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              Enterprise AI Tool Ecosystem
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight leading-none">
              Free AI <span className="text-gradient-primary">QR Code</span> Generator
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Generate custom, high-resolution vector QR codes in real-time. Upload your logo, customize dot patterns, review live accessibility scores, and download print-ready formats instantly.
            </p>
          </div>

          <QRClientWrapper />

          {/* Rich Authority SEO Resource Content */}
          <div className="border-t border-white/5 pt-20 max-w-4xl mx-auto space-y-16 text-muted-foreground">
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white font-heading tracking-tight">
                What is a QR Code and How Does It Work?
              </h2>
              <p className="text-base leading-relaxed">
                A <strong>QR Code</strong> (Quick Response Code) is a two-dimensional matrix barcode originally designed in 1994 for the automotive industry in Japan. Unlike traditional one-dimensional barcodes that only store numbers horizontally, QR codes encode alphanumeric details both vertically and horizontally. This allows them to store up to <strong>7,089 numeric characters</strong> or <strong>4,296 alphanumeric characters</strong>.
              </p>
              <p className="text-base leading-relaxed">
                When a smartphone camera or optical scanner reads a QR code, it processes three large square markers in the corners (known as <em>position detection patterns</em>). These markers tell the software the orientation, angle, and boundaries of the code, enabling instant scanning from 360 degrees. Inside the grid, smaller black and white square modules represent binary data (zeros and ones) mapped directly to your URL, text, or configuration payload.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white font-heading tracking-tight">
                Static vs. Dynamic QR Codes: What's the Difference?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass border border-white/5 p-6 rounded-2xl space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-primary" /> Static QR Codes
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Static QR codes encode the destination payload directly into the matrix module layout. Once generated, the content is permanently locked and cannot be edited. Because all parameters are hardcoded, a longer URL or larger dataset will result in a denser, more complex grid of dots.
                  </p>
                  <ul className="text-xs space-y-2 text-muted list-disc list-inside">
                    <li>Ideal for WiFi networks, plain text, and permanent links.</li>
                    <li>No external redirection dependencies or servers.</li>
                    <li>Scan speed remains constant for simple, short URLs.</li>
                  </ul>
                </div>

                <div className="glass border border-white/5 p-6 rounded-2xl space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-secondary" /> Dynamic QR Codes
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Dynamic QR codes store a short redirect link pointing to a proxy server instead of the final destination. When scanned, the server instantly routes the visitor to the destination URL. This architecture allows you to update the destination URL at any time without changing the physical QR code.
                  </p>
                  <ul className="text-xs space-y-2 text-muted list-disc list-inside">
                    <li>Edit destination URLs anytime after printing.</li>
                    <li>Track real-time scans, devices, locations, and browser data.</li>
                    <li>Minimal pixel density makes them easier to scan from far distances.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white font-heading tracking-tight">
                Enterprise Industry Use Cases for Custom QR Codes
              </h2>
              <p className="text-base leading-relaxed">
                Modern businesses utilize customizable branded QR codes across a wide spectrum of physical-to-digital touchpoints to drive conversions, reduce frictions, and automate customer journeys.
              </p>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">1. Restaurants &amp; Hospitality</h4>
                  <p className="text-sm leading-relaxed">
                    Post-pandemic, dynamic QR codes on table tents and menus have become an industry standard. Linking directly to digital menus, order sheets, or reviews allows restaurants to update prices and items instantly in real-time, reducing printing costs while collecting customer contact details for loyalty programs.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">2. Real Estate &amp; Agencies</h4>
                  <p className="text-sm leading-relaxed">
                    Real estate agents place high-resolution QR codes directly on lawn signs, brochures, and window posters. Buyers scan to view virtual property tours, structural floor plans, and instantly book showings or message the broker on WhatsApp, capturing highly qualified leads when local interest is peak.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">3. Healthcare &amp; Medical Clinics</h4>
                  <p className="text-sm leading-relaxed">
                    Clinics and hospitals position secure QR codes in reception areas for contactless patient check-ins, medical intake forms, billing systems, and access to medical history portals. This reduces processing backlogs, improves medical record accuracy, and secures data collection.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">4. Retail, E-Commerce &amp; Product Packaging</h4>
                  <p className="text-sm leading-relaxed">
                    E-commerce brands embed custom QR codes with brand logos directly on shipping boxes, thank-you inserts, and product tags. Scanning invites customers to join VIP lists, redeem warranty registrations, watch video tutorials, reorder items with a click, or post Google reviews.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white font-heading tracking-tight">
                QR Code Best Practices: Size, Contrast, and Placement
              </h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  To maximize conversion rates and prevent scanning issues in physical layouts, follow these essential design parameters:
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    <strong className="text-white">Minimum Physical Size:</strong> A QR code should never be printed smaller than <strong>2.0 x 2.0 cm (0.8 x 0.8 inches)</strong>. For larger assets (billboards, posters), calculate the ideal size using a 10:1 ratio (distance divided by 10). For example, a poster scanned from a distance of 3 meters requires a QR code width of at least 30 cm.
                  </li>
                  <li>
                    <strong className="text-white">Strict Color Contrast:</strong> Always keep a high contrast ratio between the foreground dots and the background. Avoid light gray, yellow, or pastel foregrounds. If using custom gradients, ensure both ends of the gradient are significantly darker than the background (or vice versa) to satisfy optical scanner contrast requirements.
                  </li>
                  <li>
                    <strong className="text-white">Maintain the Quiet Zone:</strong> The quiet zone is the blank border margin surrounding the QR code. This space isolates the matrix patterns from neighboring text, image elements, and packaging graphics. Keep this boundary clear (our generator applies a default, secure padding automatically).
                  </li>
                  <li>
                    <strong className="text-white">Choose the Right File Format:</strong> For digital screens, standard <strong>PNG</strong> or <strong>WEBP</strong> files at 72–150 DPI work perfectly. For print materials (packaging, apparel, business cards, signage), always download the vector <strong>SVG</strong> format. Vector formats scale infinitely without pixelation, guaranteeing clean printing margins.
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-white font-heading tracking-tight">
                Frequently Asked Questions (FAQ)
              </h2>
              <div className="space-y-6 divide-y divide-white/5 text-sm">
                <div className="pt-6 space-y-2">
                  <h5 className="font-semibold text-white">Do these QR codes expire?</h5>
                  <p>No. All QR codes generated using our tool are 100% static and direct. They connect directly to your URL or text payload, meaning they will function permanently without limits or expiration dates.</p>
                </div>
                <div className="pt-6 space-y-2">
                  <h5 className="font-semibold text-white">Can I change the destination link of a printed QR code?</h5>
                  <p>For static QR codes, no. Since the URL is hardcoded into the visual grid, you cannot edit the link without changing the physical image. To enable editing after printing, you must generate a dynamic QR code that uses a redirection service.</p>
                </div>
                <div className="pt-6 space-y-2">
                  <h5 className="font-semibold text-white">Are there any scan limits?</h5>
                  <p>Our generator provides unlimited free scans and zero download restrictions. We do not apply any watermarks, subscription models, or hidden download gates.</p>
                </div>
                <div className="pt-6 space-y-2">
                  <h5 className="font-semibold text-white">Why is my QR code not scanning?</h5>
                  <p>Scanning failures are usually caused by three factors: low color contrast between the background and foreground, insufficient margins around the code (Quiet Zone), or a high-density URL printed in a physical size that is too small for standard cameras to resolve.</p>
                </div>
                <div className="pt-6 space-y-2">
                  <h5 className="font-semibold text-white">Can I add my business logo?</h5>
                  <p>Yes. You can upload any standard PNG, JPG, or SVG logo file. Our tool allows you to scale the logo size and overlay it cleanly in the center of the QR code with custom error correction adjustments.</p>
                </div>
              </div>
            </section>

            {/* Lead Generation & Internal Linking CTA Section */}
            <div className="glass border border-accent-primary/20 bg-accent-primary/[0.02] p-8 rounded-3xl space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold text-white font-heading">
                  Scale Your Lead Capture &amp; Digital Infrastructure
                </h3>
                <p className="text-sm leading-relaxed max-w-2xl">
                  Building QR campaigns is just the first step. To capture high-value leads and convert organic traffic, you need a high-speed, conversion-optimized digital environment. Let our specialists audit your current performance, build custom dynamic platforms, or automate your CRM workflows.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/proposal"
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center gap-2"
                  >
                    Get Free Strategy Proposal <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/free-audit"
                    className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    Audit Website Performance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
