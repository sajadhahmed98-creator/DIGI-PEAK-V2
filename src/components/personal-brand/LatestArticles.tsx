"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import blogPostsData from "@/data/blog_posts.json";

// Type definitions matching the blog post schema
interface Author {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  profileLink: string;
}

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  featuredImage: string;
  publishedDate: string;
  readTime: string;
  author: Author;
}

export function LatestArticles() {
  // Filter and sort Sajadh's posts dynamically
  const articles: BlogPost[] = (blogPostsData as BlogPost[])
    .filter((post) => post.author.name === "Sajadh Ahmed")
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3);

  if (articles.length === 0) return null;

  return (
    <section className="py-12 md:py-20 lg:py-32 px-6 bg-black/50 border-t border-white/5 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-accent-secondary font-mono text-xs font-bold uppercase tracking-widest mb-4 block">
              Publications
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Latest <span className="text-gradient-primary">Articles.</span>
            </h2>
            <p className="text-muted text-lg max-w-xl">
              In-depth analysis and technical guides on search optimization, graphic design systems, and digital marketing strategies.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-white transition-colors"
          >
            Browse all articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass border border-white/8 rounded-3xl overflow-hidden group hover:border-white/15 hover:bg-white/[0.015] transition-all duration-300 flex flex-col h-full"
            >
              <Link href={`/blog/${article.category}/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-white/5 border-b border-white/5">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1280px) 33vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wide text-accent-secondary">
                  {article.category}
                </span>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                      {article.publishedDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-accent-secondary" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white leading-snug group-hover:text-accent-secondary transition-colors line-clamp-2">
                    <Link href={`/blog/${article.category}/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <Link
                    href={`/blog/${article.category}/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-muted hover:text-white transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
