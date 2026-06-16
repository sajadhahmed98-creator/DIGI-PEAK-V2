import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { BlogArticleClient } from "@/components/blog/BlogArticleClient";
import postsData from "@/data/blog_posts.json";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

// Pre-render blog posts statically
export async function generateStaticParams() {
  return postsData.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

// Generate dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = postsData.find((p) => p.category === category && p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const url = `https://www.digipeak.agency/blog/${category}/${slug}`;

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: url,
      images: [{ url: post.ogImage || "/og-blog.jpg" }],
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: ["https://www.digipeak.agency/author/sajadh-ahmed"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.ogImage || "/og-blog.jpg"],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { category, slug } = await params;
  const post = postsData.find((p) => p.category === category && p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related articles (same category or recent, excluding current)
  const relatedPosts = postsData
    .filter((p) => p.id !== post.id && (p.category === category || p.category !== category))
    .slice(0, 3);

  const url = `https://www.digipeak.agency/blog/${category}/${slug}`;

  // Build schema graph
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${url}/#breadcrumbs`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": { "@id": "https://www.digipeak.agency/", "name": "Home" }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": { "@id": "https://www.digipeak.agency/blog/", "name": "Blog" }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": { "@id": `https://www.digipeak.agency/blog/${category}/`, "name": category.replace("-", " ") }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": { "@id": url, "name": post.title }
      }
    ]
  };

  const authorSchema = {
    "@type": "Person",
    "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person",
    "name": "Sajadh Ahmed",
    "jobTitle": "Founder & Chief Strategist",
    "url": "https://www.digipeak.agency/author/sajadh-ahmed",
    "description": "Founder of Digipeak Agency, specializing in enterprise SEO, performance marketing, and B2B growth systems."
  };

  const organizationSchema = {
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
      };

  const articleSchema = {
    "@type": ["Article", "TechArticle", "BlogPosting"],
    "@id": `${url}/#article`,
    "isPartOf": { "@id": `${url}/#webpage` },
    "headline": post.title,
    "description": post.description,
    "inLanguage": "en-US",
    "mainEntityOfPage": url,
    "datePublished": post.publishedDate,
    "dateModified": post.updatedDate,
    "author": { "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person" },
    "publisher": { "@id": "https://www.digipeak.agency/#organization" },
    "image": `https://www.digipeak.agency${post.featuredImage}`,
    "keywords": post.keywords ? post.keywords.join(", ") : ""
  };

  const jsonLd: any = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema,
      authorSchema,
      organizationSchema,
      articleSchema
    ]
  };

  // Inject FAQ Schema if questions exist
  if (post.faqs && post.faqs.length > 0) {
    jsonLd["@graph"].push({
      "@type": "FAQPage",
      "@id": `${url}/#faq`,
      "mainEntity": post.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return (
    <>
      <Script
        id="blog-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticleClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
