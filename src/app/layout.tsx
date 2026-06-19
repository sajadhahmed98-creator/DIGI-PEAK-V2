import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ClientWidgets } from "@/components/layout/ClientWidgets";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";




const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.digipeak.agency'),
  title: {
    default: "Digipeak Agency | Premium Digital Marketing, SEO & Web Design",
    template: "%s | Digipeak Agency"
  },
  description: "Award-winning digital agency delivering enterprise SEO, custom web design, and AI-powered marketing solutions across Qatar, Dubai, Saudi Arabia, and globally.",
  keywords: ["Digital Marketing Agency", "SEO Company", "Web Design Company", "AI Marketing Agency", "Qatar", "Dubai", "Riyadh", "London"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Digipeak Agency | Premium Digital Marketing & SEO",
    description: "Award-winning digital agency delivering enterprise SEO, custom web design, and AI-powered marketing solutions.",
    url: "https://www.digipeak.agency",
    siteName: "Digipeak Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digipeak Agency - Premium Digital Marketing & Web Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digipeak Agency | Premium Digital Marketing",
    description: "Enterprise SEO, custom web design, and AI-powered marketing solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased dark`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" />
        <Script
          id="gtm-consent-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              var consentPrefs = { marketing: false, analytics: false };
              if (typeof window !== 'undefined' && window.localStorage) {
                var saved = window.localStorage.getItem('cookie_preferences');
                if (saved) {
                  try { consentPrefs = JSON.parse(saved); } catch(e) {}
                }
              }
              gtag('consent', 'default', {
                'ad_storage': consentPrefs.marketing ? 'granted' : 'denied',
                'analytics_storage': consentPrefs.analytics ? 'granted' : 'denied',
                'ad_user_data': consentPrefs.marketing ? 'granted' : 'denied',
                'ad_personalization': consentPrefs.marketing ? 'granted' : 'denied'
              });
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-accent-violet/30 selection:text-white">
        <ScrollToTop />
        <ClientWidgets />
        <div className="bg-noise absolute inset-0 z-[-1] pointer-events-none opacity-[0.02]"></div>
        <Navbar />
        <main className="flex-1 flex flex-col pt-24">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-V9H8BCW23Y"} />
        <MicrosoftClarity clarityId={process.env.NEXT_PUBLIC_CLARITY_ID || ""} />
      </body>
    </html>
  );
}
