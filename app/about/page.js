"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Alex Morgan", role: "CEO & Co-Founder", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", bio: "10+ years in product & engineering." },
  { name: "Sara Lee", role: "Head of Design", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80", bio: "Award-winning UX designer." },
  { name: "James Carter", role: "CTO", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", bio: "Full-stack architect & open-source lover." },
  { name: "Nora Chen", role: "Lead Developer", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80", bio: "Next.js & cloud infrastructure expert." },
  { name: "Liam Park", role: "Marketing Director", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80", bio: "Growth hacker with 8 years experience." },
  { name: "Mia Torres", role: "AI Engineer", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80", bio: "ML researcher turned product builder." },
];

const values = [
  { icon: "🎯", title: "Precision", desc: "Every pixel, every line of code — crafted with obsessive attention to detail." },
  { icon: "🚀", title: "Speed", desc: "We move fast without breaking things. Agile delivery, real results." },
  { icon: "🤝", title: "Partnership", desc: "We&apos;re not vendors — we&apos;re long-term partners invested in your success." },
  { icon: "💡", title: "Innovation", desc: "Always exploring the frontier of tech to keep our clients ahead of the curve." },
  { icon: "🌍", title: "Impact", desc: "Work that matters. We build products that make a real difference." },
  { icon: "🔒", title: "Trust", desc: "Radical transparency and honest communication at every step." },
];

const timeline = [
  { year: "2014", title: "Founded in Cairo", desc: "Two developers with a laptop and a big dream started Nexus." },
  { year: "2016", title: "First 50 Clients", desc: "Word spread fast. We grew to a 10-person team." },
  { year: "2019", title: "Launched SaaS Division", desc: "Built our first white-label platform, now used by 30+ companies." },
  { year: "2022", title: "Global Expansion", desc: "Opened offices in Dubai and London. 40+ team members." },
  { year: "2026", title: "AI-First Future", desc: "Integrating AI across every product we build. The next chapter begins." },
];

export default function AboutPage() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-text", { opacity: 0, y: 70, duration: 1, ease: "power3.out" });
      gsap.from(".about-hero-img", { opacity: 0, scale: 0.85, duration: 1.2, delay: 0.3, ease: "power3.out" });

      gsap.utils.toArray(".gsap-fade").forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 50, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 87%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray(".gsap-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0, y: 60, duration: 0.6, delay: i * 0.07, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        });
      });

      // Timeline line draw
      gsap.from(".timeline-line", {
        scaleY: 0, transformOrigin: "top", duration: 2, ease: "power2.out",
        scrollTrigger: { trigger: ".timeline-section", start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="min-h-screen bg-[#080b14] overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto text-center about-hero-text">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-medium mb-6 uppercase tracking-widest">About Us</span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-none mb-6 tracking-tight">
            We Are <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Nexus</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A passionate team of designers, engineers, and strategists united by one mission — to build digital products that change the game.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-hero-img relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team" className="w-full h-80 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-violet-600 to-pink-600 rounded-2xl p-5 shadow-2xl shadow-violet-500/30">
              <p className="text-white font-extrabold text-3xl">12+</p>
              <p className="text-white/80 text-sm">Years building</p>
            </div>
            <div className="absolute -top-6 -left-6 bg-white/5 backdrop-blur border border-white/15 rounded-2xl p-5">
              <p className="text-white font-extrabold text-3xl">40+</p>
              <p className="text-slate-400 text-sm">Team members</p>
            </div>
          </div>
          <div className="gsap-fade">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-sm font-medium mb-6 uppercase tracking-widest">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              From a Garage to a <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">Global Studio</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              It started in 2014 — two engineers, one laptop, and an unshakeable belief that great software could come from anywhere. Today, Nexus is a full-service digital studio with offices in three countries and 250+ delivered projects.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              We&apos;ve worked with funded startups, Fortune 500 companies, and everything in between. But our approach has never changed: understand the problem deeply, execute with excellence, and always put the user first.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-1 transition-all duration-300">
              Work With Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="gsap-fade text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4 uppercase tracking-widest">Our Values</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">What We <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Believe In</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="gsap-card group bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-cyan-500/40 hover:-translate-y-2 transition-all duration-400">
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-300 transition-colors">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="timeline-section py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="gsap-fade text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium mb-4 uppercase tracking-widest">History</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Our <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">Journey</span></h2>
          </div>
          <div className="relative pl-12">
            <div className="timeline-line absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-pink-500 to-cyan-500" />
            <div className="space-y-12">
              {timeline.map((t) => (
                <div key={t.year} className="gsap-card relative group">
                  <div className="absolute -left-[2.15rem] w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 border-4 border-[#080b14] group-hover:scale-150 transition-transform duration-300" />
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-300">
                    <span className="text-xs text-violet-400 font-bold uppercase tracking-widest mb-1 block">{t.year}</span>
                    <h3 className="text-white font-bold text-xl mb-2">{t.title}</h3>
                    <p className="text-slate-400 text-sm">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-fade text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-4 uppercase tracking-widest">The Team</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Meet the <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Minds</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">Talented people from around the world, united by a passion for craft.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="gsap-card group text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-emerald-500/40 hover:-translate-y-2 transition-all duration-400">
                <div className="relative w-24 h-24 mx-auto mb-5">
                  <img src={m.avatar} alt={m.name} className="w-full h-full rounded-full object-cover ring-2 ring-violet-500/30 group-hover:ring-emerald-500/60 transition-all duration-300" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-emerald-300 transition-colors">{m.name}</h3>
                <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">{m.role}</p>
                <p className="text-slate-400 text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-transparent to-pink-900/20 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto text-center gsap-fade">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Work Together?</span></h2>
          <p className="text-slate-400 text-lg mb-8">Let&apos;s create something you&apos;re proud of.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold text-lg hover:from-violet-500 hover:to-pink-500 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-1 transition-all duration-300">
            Start a Conversation →
          </Link>
        </div>
      </section>
    </main>
  );
}