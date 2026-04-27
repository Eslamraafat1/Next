"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "⚡",
    title: "Web Development",
    desc: "We build blazing-fast, SEO-optimized web applications using Next.js, React, and modern backend stacks. From landing pages to complex SaaS platforms.",
    features: ["Next.js & React", "REST & GraphQL APIs", "CMS Integration", "Performance Optimization"],
    color: "violet",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "User-centered design that converts. We craft wireframes, prototypes, and pixel-perfect interfaces that users love at first glance.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
    color: "pink",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "Cross-platform mobile apps with React Native that feel truly native on iOS and Android. Ship once, run everywhere — without compromising quality.",
    features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
    color: "cyan",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Scalable, secure cloud infrastructure on AWS, GCP, or Azure. CI/CD pipelines, containerization, and 99.9% uptime guaranteed.",
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring & Alerts"],
    color: "amber",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "Bring intelligence to your product. We integrate LLMs, computer vision, recommendation engines, and custom ML models into your existing workflows.",
    features: ["LLM Integration (GPT, Gemini)", "Computer Vision", "Recommendation Systems", "Data Pipelines"],
    color: "emerald",
  },
  {
    icon: "📈",
    title: "SEO & Growth",
    desc: "Data-driven digital marketing that delivers measurable ROI. Technical SEO, content strategy, paid ads, and conversion rate optimization.",
    features: ["Technical SEO Audit", "Content Strategy", "Google Ads", "CRO & A/B Testing"],
    color: "rose",
  },
];

const colorMap = {
  violet: { border: "hover:border-violet-500/50", badge: "bg-violet-500/20 text-violet-300 border-violet-500/30", glow: "group-hover:from-violet-600/8" },
  pink:   { border: "hover:border-pink-500/50",   badge: "bg-pink-500/20 text-pink-300 border-pink-500/30",     glow: "group-hover:from-pink-600/8" },
  cyan:   { border: "hover:border-cyan-500/50",   badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",     glow: "group-hover:from-cyan-600/8" },
  amber:  { border: "hover:border-amber-500/50",  badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",  glow: "group-hover:from-amber-600/8" },
  emerald:{ border: "hover:border-emerald-500/50",badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", glow: "group-hover:from-emerald-600/8" },
  rose:   { border: "hover:border-rose-500/50",   badge: "bg-rose-500/20 text-rose-300 border-rose-500/30",     glow: "group-hover:from-rose-600/8" },
};

const plans = [
  {
    name: "Starter",
    price: "$1,500",
    desc: "Perfect for small businesses and MVPs.",
    features: ["Up to 5 pages", "Responsive Design", "Basic SEO", "1 month support", "Contact Form"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$4,500",
    desc: "For growing companies that need more.",
    features: ["Up to 15 pages", "Custom Design System", "Full SEO Package", "3 months support", "CMS Integration", "Analytics Dashboard", "Performance Audit"],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Tailored solutions for large-scale needs.",
    features: ["Unlimited pages", "Dedicated Team", "AI Integration", "6 months support", "Custom Integrations", "SLA Guarantee", "Priority Support"],
    cta: "Talk to Us",
    highlight: false,
  },
];

const faqs = [
  { q: "How long does a project take?", a: "Most projects take 4–12 weeks depending on scope. We always set clear milestones and keep you updated throughout." },
  { q: "Do you offer ongoing maintenance?", a: "Yes! All plans include support. We also offer monthly retainers for continuous development and updates." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We specialize in redesigns that preserve your SEO equity while delivering a stunning modern experience." },
  { q: "Do you work with international clients?", a: "Yes — we have clients in 20+ countries and work async-first with clear communication protocols." },
  { q: "What's included in the discovery phase?", a: "Stakeholder interviews, competitor analysis, user research, and a full project brief — all before we write a single line of code." },
];

export default function ServicesPage() {
  const root = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", { opacity: 0, y: 70, duration: 1, ease: "power3.out" });

      gsap.utils.toArray(".gsap-fade").forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 50, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 87%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray(".gsap-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0, y: 70, duration: 0.6, delay: i * 0.08, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray(".pricing-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0, y: 80, scale: 0.95, duration: 0.7, delay: i * 0.12, ease: "back.out(1.5)",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="min-h-screen bg-[#080b14] overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-32 px-6 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto hero-content">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-medium mb-6 uppercase tracking-widest">Services</span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-none mb-6 tracking-tight">
            Everything You <br />
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Need to Scale</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            End-to-end digital solutions — design, development, AI, and growth — all under one roof.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold text-lg hover:from-violet-500 hover:to-pink-500 hover:shadow-2xl hover:shadow-violet-500/40 hover:-translate-y-1 transition-all duration-300">
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-fade text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">What We <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Offer</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">Each service is delivered by specialists — not generalists.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const c = colorMap[s.color];
              return (
                <div key={s.title} className={`gsap-card group relative bg-white/5 border border-white/10 rounded-2xl p-7 ${c.border} hover:-translate-y-2 transition-all duration-400 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent transition-all duration-500`} />
                  <span className="text-4xl mb-5 block relative z-10">{s.icon}</span>
                  <h3 className="text-white font-bold text-xl mb-3 relative z-10">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 relative z-10">{s.desc}</p>
                  <ul className="space-y-2 relative z-10">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-slate-300 text-xs">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${s.color === "violet" ? "from-violet-400 to-pink-400" : s.color === "pink" ? "from-pink-400 to-rose-400" : s.color === "cyan" ? "from-cyan-400 to-blue-400" : s.color === "amber" ? "from-amber-400 to-orange-400" : s.color === "emerald" ? "from-emerald-400 to-teal-400" : "from-rose-400 to-pink-400"} shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS BANNER ── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-transparent to-pink-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "01", label: "Discovery & Brief" },
            { num: "02", label: "Design & Prototype" },
            { num: "03", label: "Build & Test" },
            { num: "04", label: "Launch & Support" },
          ].map((step, i) => (
            <div key={step.num} className="gsap-card group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/20">
                {step.num}
              </div>
              <p className="text-white font-semibold text-sm">{step.label}</p>
              {i < 3 && <div className="hidden md:block absolute right-0 top-1/2 w-6 h-0.5 bg-violet-500/40" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="gsap-fade text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium mb-4 uppercase tracking-widest">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Simple, <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">Transparent</span> Pricing</h2>
            <p className="text-slate-400 max-w-xl mx-auto">No hidden fees. No surprises. Just great work at fair prices.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {plans.map((plan) => (
              <div key={plan.name} className={`pricing-card relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${plan.highlight ? "bg-gradient-to-b from-violet-600/20 to-pink-600/10 border-2 border-violet-500/60 shadow-2xl shadow-violet-500/20 scale-105" : "bg-white/5 border border-white/10 hover:border-violet-500/30"}`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white text-xs font-bold shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-5">{plan.desc}</p>
                <div className="text-5xl font-extrabold text-white mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-slate-300 text-sm">
                      <span className="text-emerald-400 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${plan.highlight ? "bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:from-violet-500 hover:to-pink-500 hover:shadow-lg hover:shadow-violet-500/30" : "bg-white/10 text-white hover:bg-white/20 border border-white/15"}`}>
                  {plan.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="gsap-fade text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4 uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Have <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Questions?</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="gsap-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left cursor-pointer group">
                  <span className="text-white font-semibold text-sm md:text-base group-hover:text-violet-300 transition-colors">{faq.q}</span>
                  <span className={`text-violet-400 text-xl font-bold transition-transform duration-300 shrink-0 ml-4 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#080b14] to-pink-900/20 pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-700/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto text-center gsap-fade">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">Not Sure Where to <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Start?</span></h2>
          <p className="text-slate-400 text-lg mb-8">Book a free 30-minute strategy call — no commitment, just clarity.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold text-lg hover:from-violet-500 hover:to-pink-500 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-1 transition-all duration-300">
            Book a Free Call →
          </Link>
        </div>
      </section>
    </main>
  );
}