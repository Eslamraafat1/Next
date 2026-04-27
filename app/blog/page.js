"use client";
import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Technology", "Design", "Business", "Lifestyle", "Development"];

const posts = [
  {
    id: 1,
    title: "The Future of Web Development in 2026",
    excerpt:
      "Explore the cutting-edge technologies reshaping how we build for the web — from AI-assisted coding to edge-first architecture.",
    category: "Technology",
    author: "Alex Morgan",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering UI/UX Design Principles",
    excerpt:
      "Learn the core design principles that separate good interfaces from truly great ones that users love.",
    category: "Design",
    author: "Sara Lee",
    date: "Apr 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Scaling a Startup to $1M ARR",
    excerpt:
      "A founder's honest breakdown of the exact strategies that drove growth from zero to a million in annual revenue.",
    category: "Business",
    author: "James Carter",
    date: "Apr 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Building with Next.js App Router",
    excerpt:
      "A deep dive into the App Router paradigm — layouts, server components, streaming, and everything in between.",
    category: "Development",
    author: "Nora Chen",
    date: "Apr 12, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "The Minimalist Lifestyle Revolution",
    excerpt:
      "How embracing minimalism in both work and life can unlock unprecedented focus, calm, and creativity.",
    category: "Lifestyle",
    author: "Liam Park",
    date: "Apr 10, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "AI Tools That Will Replace Your Workflow",
    excerpt:
      "We tested 30+ AI tools so you don't have to. Here's what's actually worth your time in 2026.",
    category: "Technology",
    author: "Mia Torres",
    date: "Apr 8, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    featured: false,
  },
  {
    id: 7,
    title: "Color Theory for Digital Designers",
    excerpt:
      "Master the language of color — psychology, harmony, contrast, and how to use it to evoke emotion in your designs.",
    category: "Design",
    author: "Ethan Ross",
    date: "Apr 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&q=80",
    featured: false,
  },
  {
    id: 8,
    title: "Remote Work Culture Done Right",
    excerpt:
      "Top distributed teams share their secrets for staying aligned, productive, and genuinely happy while working apart.",
    category: "Business",
    author: "Ava Mitchell",
    date: "Apr 2, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    featured: false,
  },
];

const categoryColors = {
  Technology: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Design: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Business: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Lifestyle: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Development: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredPost = posts.find((p) => p.featured);
  const filteredPosts = posts.filter(
    (p) => !p.featured && (activeCategory === "All" || p.category === activeCategory)
  );

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <main className="min-h-screen bg-[#080b14]">
      {/* ──────────────── HERO ──────────────── */}
      <section className="relative overflow-hidden py-28 px-6 text-center">
        {/* Glowing blobs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-700/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-medium mb-6 tracking-widest uppercase">
            Our Blog
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Ideas Worth{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Sharing
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Deep dives, hot takes, and practical guides from the minds behind the product. New stories every week.
          </p>
        </div>
      </section>

      {/* ──────────────── FEATURED POST ──────────────── */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 cursor-pointer hover:border-violet-500/50 transition-all duration-500 shadow-2xl">
            <div className="relative h-[480px] md:h-[560px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-[#080b14]/60 to-transparent" />
              {/* Featured badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                  ⭐ Featured
                </span>
              </div>
            </div>
            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold mb-4 ${categoryColors[featuredPost.category]}`}>
                {featuredPost.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight max-w-3xl group-hover:text-violet-300 transition-colors duration-300">
                {featuredPost.title}
              </h2>
              <p className="text-slate-300 text-lg mb-6 max-w-2xl">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4">
                <img src={featuredPost.avatar} alt={featuredPost.author} className="w-10 h-10 rounded-full object-cover ring-2 ring-violet-500" />
                <div>
                  <p className="text-white font-semibold text-sm">{featuredPost.author}</p>
                  <p className="text-slate-400 text-xs">{featuredPost.date} · {featuredPost.readTime}</p>
                </div>
                <div className="ml-auto">
                  <span className="flex items-center gap-2 text-violet-400 font-semibold text-sm group-hover:gap-4 transition-all duration-300">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ──────────────── CATEGORY FILTER ──────────────── */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-600 to-pink-600 text-white border-transparent shadow-lg shadow-violet-500/30 scale-105"
                  : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ──────────────── BLOG GRID ──────────────── */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post, i) => (
            <article
              key={post.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-full border text-xs font-semibold ${categoryColors[post.category] || "bg-white/10 text-white border-white/20"}`}>
                  {post.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-violet-300 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author row */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-8 h-8 rounded-full object-cover ring-1 ring-violet-500/50"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-semibold truncate">{post.author}</p>
                    <p className="text-slate-500 text-xs">{post.date}</p>
                  </div>
                  <span className="text-slate-500 text-xs whitespace-nowrap">{post.readTime}</span>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/0 via-transparent to-pink-600/0 group-hover:from-violet-600/5 group-hover:to-pink-600/5 transition-all duration-500 pointer-events-none" />
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-xl font-semibold">No posts in this category yet.</p>
          </div>
        )}
      </section>

      {/* ──────────────── NEWSLETTER ──────────────── */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-[#080b14] to-pink-900/30 pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-sm font-medium mb-6 uppercase tracking-widest">
            Newsletter
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Stay in the{" "}
            <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              Loop
            </span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Get the best articles delivered straight to your inbox — no spam, ever.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-3 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl p-6 text-emerald-300 font-semibold text-lg">
              <span className="text-2xl">🎉</span> You&apos;re subscribed! Welcome aboard.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold hover:from-violet-500 hover:to-pink-500 hover:shadow-lg hover:shadow-violet-500/40 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Subscribe →
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
