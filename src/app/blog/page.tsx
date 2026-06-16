import type { Metadata } from "next";
import Script from "next/script";
import { BlogHubClient } from "@/components/blog/BlogHubClient";
import postsData from "@/data/blog_posts.json";

export const metadata: Metadata = {
  title: "B2B Performance Blog & Knowledge Hub | Digipeak Agency",
  description:
    "Explore highly technical articles and developer guides covering Web Performance, B2B SEO Strategy, Arabic technical schemas, and secure OpenAI CRM integrations.",
  alternates: {
    canonical: "https://www.digipeak.agency/blog",
  },
  openGraph: {
    title: "B2B Performance Blog & Knowledge Hub | Digipeak Agency",
    description:
      "Highly technical articles and developer guides covering Web Performance, B2B SEO Strategy, and secure OpenAI CRM integrations.",
    url: "https://www.digipeak.agency/blog",
    images: ["/og-blog.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Performance Blog & Knowledge Hub | Digipeak Agency",
    description:
      "Highly technical articles and developer guides covering Web Performance, B2B SEO Strategy, and secure OpenAI CRM integrations.",
  },
};

export default function BlogHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://www.digipeak.agency/blog/#blog",
        name: "Digipeak Agency B2B Knowledge Hub",
        url: "https://www.digipeak.agency/blog",
        description: "Technical articles on Search SEO, Web Performance, and AI automation systems.",
        publisher: {
        "@type": "Organization",
        "@id": "https://www.digipeak.agency/#organization",
        "name": "Digipeak Agency",
        "url": "https://www.digipeak.agency",
        "email": "hello@digipeak.agency",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.digipeak.agency/#logo",
          "url": "https://www.digipeak.agency/logo.png",
          "caption": "Digipeak Agency Logo"
        },
        "description": "Premium Digital Growth Agency specializing in Website Design, SEO, Branding, AI Automation, CRM Systems, Digital Marketing, and Lead Generation.",
        "foundingDate": "2022-01-01",
        "founder": {
          "@type": "Person",
          "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person",
          "name": "Sajadh Ahmed",
          "jobTitle": "Founder",
          "url": "https://www.digipeak.agency/author/sajadh-ahmed"
        },
        "sameAs": [
          "https://www.linkedin.com/company/digipeakagencyglobal",
          "https://www.instagram.com/digipeak.agency",
          "https://www.facebook.com/share/1BC3Xs8zW3/?mibextid=wwXIfr",
          "https://maps.app.goo.gl/9Gp2fifi3A15suaA6"
        ]
      }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.digipeak.agency/blog/#breadcrumbs",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: { "@id": "https://www.digipeak.agency/", name: "Home" },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: { "@id": "https://www.digipeak.agency/blog/", name: "Blog" },
          },
        ],
      }
    ]
  };

  return (
    <>
      <Script
        id="blog-hub-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogHubClient initialPosts={postsData} />
    </>
  );
}
