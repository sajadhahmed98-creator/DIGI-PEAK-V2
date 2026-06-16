"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, Send, CheckCircle2, Sparkles } from "lucide-react";

interface Post {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  publishedDate: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
  keywords?: string[];
  author: {
    name: string;
    title: string;
    avatar: string;
    profileLink: string;
  };
}

const CATEGORIES = [
  { slug: "all", label: "All Insights" },
  { slug: "seo", label: "SEO" },
  { slug: "web-design", label: "Web Design" },
  { slug: "digital-marketing", label: "Digital Marketing" },
  { slug: "branding", label: "Branding" },
  { slug: "ai-solutions", label: "AI Solutions" },
  { slug: "automation", label: "Automation" },
  { slug: "social-media", label: "Social Media" },
  { slug: "content-marketing", label: "Content Marketing" },
  { slug: "business-growth", label: "Business Growth" },
  { slug: "ecommerce", label: "E-Commerce" },
  { slug: "web-performance", label: "Web Performance" }
];

export function BlogHubClient({ initialPosts }: { initialPosts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gotcha, setGotcha] = useState("");

  // Filter posts
  const filteredPosts = initialPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const searchString = `${post.title} ${post.description} ${(post.tags || []).join(" ")} ${(post.keywords || []).join(" ")} ${post.category}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured post is the first featured post in database (or just first post if none featured)
  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  // Remaining posts in grid
  const gridPosts = filteredPosts.filter((p) => p.id !== (featuredPost?.id || ""));

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/subscribe-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, _gotcha: gotcha }),
      });
      if (res.ok) {
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({ event: 'blog_subscribe', lead_source: 'blog_hub' });
        }
        setIsSubscribed(true);
        setEmail("");
        setName("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      {/* Decorative Blur Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-1/4 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] right-1/4 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[140px]" />
      </div>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-6 text-center border-b border-white/5 bg-gradient-to-b from-[#080b1e] to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-1.5 text-xs font-semibold text-accent-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Topical Authority Hub
          </div>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Cognitive <span className="text-gradient-primary">Dominance Hub</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Highly technical deep-dives on Web Performance, enterprise SEO architecture, Arabic search engine silos, and secure AI pipeline coordinate sales processes.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="sticky top-[80px] z-35 py-6 px-6 bg-[#050816]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Category Filter Horizontal Scroll */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 digiai-scrollbar scroll-smooth w-full md:max-w-[70%]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.slug
                    ? "bg-accent-primary/20 border-accent-primary text-white shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                    : "bg-white/5 border-white/10 text-muted hover:text-white hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-[25%]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-sm text-white placeholder-muted focus:outline-none focus:border-accent-primary focus:bg-white/10 transition-all"
            />
          </div>
        </div>
      </section>

      {/* DigiAI Callout Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-8 relative z-10">
        <div className="glass border border-accent-primary/20 bg-accent-primary/5 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-accent-primary" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Need Instant Answers?</h4>
              <p className="text-muted text-xs">Don't want to read? Ask DigiAI, our AI-powered growth assistant, for instant strategies.</p>
            </div>
          </div>
          <Link href="/digiai" className="btn-primary px-5 py-2 text-xs font-bold whitespace-nowrap flex-shrink-0 flex items-center gap-2">
            Try DigiAI
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20 relative z-10">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-10 md:py-16 lg:py-20">
            <p className="text-muted text-lg">No articles found matching your query.</p>
            <button
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="mt-4 inline-flex items-center gap-2 text-accent-primary text-sm font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            {/* Featured Post Card */}
            {featuredPost && (
              <section className="space-y-4">
                <h2 className="text-xs uppercase tracking-widest text-accent-primary font-bold">Featured Guide</h2>
                <div className="glass border border-white/5 rounded-3xl overflow-hidden relative group hover:border-accent-primary/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 pointer-events-none" />
                  <div className="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-2">
                    {/* Visual Monogram Mockup */}
                    <div className="relative min-h-[300px] bg-gradient-to-br from-[#120800] via-[#2e1800] to-[#1a0f30] flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-white/5">
                      <div className="absolute inset-0 bg-radial-gradient from-accent-primary/10 to-transparent pointer-events-none" />
                      <div className="font-heading text-8xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-accent-primary/15 to-accent-secondary/5 select-none uppercase">
                        {featuredPost.category}
                      </div>
                      <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-accent-primary/20 border border-accent-primary/30 rounded-full text-[10px] uppercase font-bold tracking-wider text-accent-primary">
                        {CATEGORIES.find((c) => c.slug === featuredPost.category)?.label || featuredPost.category}
                      </span>
                    </div>

                    {/* Content Details */}
                    <div className="p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-xs text-muted mb-4">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featuredPost.publishedDate}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featuredPost.readTime}</span>
                        </div>
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-secondary transition-colors duration-300">
                          {featuredPost.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed mb-6">
                          {featuredPost.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5 flex-wrap gap-4">
                        {/* Author info */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center font-bold text-sm text-white">
                            SA
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">{featuredPost.author.name}</div>
                            <div className="text-[10px] text-muted">{featuredPost.author.title}</div>
                          </div>
                        </div>

                        {/* Read Link */}
                        <Link
                          href={`/blog/${featuredPost.category}/${featuredPost.slug}`}
                          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-accent-primary/40 hover:bg-accent-primary/15 px-6 py-3 rounded-full text-xs font-bold text-white transition-all group/btn"
                        >
                          Read Article
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Grid Posts Section */}
            {gridPosts.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-xs uppercase tracking-widest text-accent-secondary font-bold">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gridPosts.map((post) => (
                    <article
                      key={post.id}
                      className="glass border border-white/5 rounded-2xl overflow-hidden hover:border-accent-primary/20 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-accent-secondary">
                            {CATEGORIES.find((c) => c.slug === post.category)?.label || post.category}
                          </span>
                          <span className="text-[10px] text-muted flex items-center gap-1">
                            <Clock className="w-3 h-3" />{post.readTime}
                          </span>
                        </div>
                        <h3 className="font-heading text-lg font-bold text-white tracking-tight mb-2 group-hover:text-accent-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted text-xs leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                      </div>

                      <div className="p-6 pt-0 border-t border-white/5 mt-auto flex items-center justify-between bg-white/[0.01]">
                        <span className="text-[10px] text-muted">{post.publishedDate}</span>
                        <Link
                          href={`/blog/${post.category}/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-primary hover:text-white transition-colors"
                        >
                          Read Guide
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* Newsletter Subscription Card */}
        <section className="glass border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-[#0c0d21] to-[#050816]">
          <div className="absolute inset-0 bg-radial-gradient from-accent-primary/5 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                Subscribe to <span className="text-gradient-primary">Growth Insights</span>
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-md">
                Get high-converting enterprise SEO metrics, Web Performance guides, and custom automation scripts directly in your inbox.
              </p>
            </div>
            <div>
              {isSubscribed ? (
                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-semibold">Subscribed! Check hello@digipeak.agency logs for simulation confirmation.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input type="text" name="_gotcha" value={gotcha} onChange={(e) => setGotcha(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-accent-primary"
                  />
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Business Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-accent-primary"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-accent-primary hover:bg-accent-glow font-bold text-xs uppercase tracking-wider text-white px-6 py-3 rounded-xl transition-all cursor-pointer flex items-center gap-2 flex-shrink-0"
                    >
                      {isSubmitting ? "Joining..." : "Join"}
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
