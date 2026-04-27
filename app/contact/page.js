"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: "📧",
    title: "Email Us",
    value: "hello@nexus.studio",
    sub: "We reply within 24 hours",
    color: "violet",
  },
  {
    icon: "📞",
    title: "Call Us",
    value: "+20 100 000 0000",
    sub: "Sun–Thu, 9AM–6PM (EET)",
    color: "pink",
  },
  {
    icon: "📍",
    title: "Visit Us",
    value: "Cairo, Egypt",
    sub: "Also in Dubai & London",
    color: "cyan",
  },
];

export default function ContactPage() {
  const root = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", { opacity: 0, y: 70, duration: 1, ease: "power3.out" });

      gsap.utils.toArray(".gsap-fade").forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 50, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 87%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray(".info-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0, x: -40, duration: 0.6, delay: i * 0.12, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        });
      });

      gsap.from(".form-card", {
        opacity: 0, x: 40, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".form-card", start: "top 87%", toggleActions: "play none none none" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1800);
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 text-sm";

  return (
    <main ref={root} className="min-h-screen bg-[#080b14] overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto hero-content">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-medium mb-6 uppercase tracking-widest">Contact</span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-none mb-6">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Talk</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
            Tell us about your project. We&apos;d love to hear what you&apos;re building and how we can help make it extraordinary.
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="py-10 px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left: Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map((c) => (
              <div key={c.title} className={`info-card group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-${c.color}-500/50 hover:-translate-y-1 transition-all duration-300`}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{c.icon}</span>
                  <div>
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">{c.title}</p>
                    <p className="text-white font-bold text-base">{c.value}</p>
                    <p className="text-slate-500 text-xs mt-1">{c.sub}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Availability */}
            <div className="info-card bg-gradient-to-br from-violet-600/15 to-pink-600/10 border border-violet-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-semibold">Currently Available</span>
              </div>
              <p className="text-white font-bold text-lg mb-1">Taking on new projects</p>
              <p className="text-slate-400 text-sm">We have capacity for 2 new clients starting May 2026.</p>
            </div>

            {/* Socials */}
            <div className="info-card bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white font-bold mb-4">Find Us Online</p>
              <div className="flex gap-3 flex-wrap">
                {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((s) => (
                  <a key={s} href="#" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold hover:bg-violet-600/20 hover:border-violet-500/50 hover:text-white transition-all duration-300">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="form-card lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-violet-500/30 transition-all duration-300">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-4xl mb-6 animate-bounce">
                  🎉
                </div>
                <h3 className="text-white font-extrabold text-3xl mb-3">Message Sent!</h3>
                <p className="text-slate-400 text-lg max-w-sm">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", budget: "", message: "" }); }} className="mt-8 px-6 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  Send Another →
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-white font-extrabold text-2xl mb-2">Send Us a Message</h2>
                <p className="text-slate-400 text-sm mb-8">Fill in the details and we&apos;ll prepare a custom proposal for you.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 block">Your Name *</label>
                      <input
                        type="text" required placeholder="John Doe"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 block">Email Address *</label>
                      <input
                        type="email" required placeholder="john@company.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 block">Budget Range</label>
                    <select
                      value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={inputClass + " cursor-pointer"}
                    >
                      <option value="" disabled className="bg-[#0d1120]">Select your budget...</option>
                      <option className="bg-[#0d1120]">Under $1,000</option>
                      <option className="bg-[#0d1120]">$1,000 – $5,000</option>
                      <option className="bg-[#0d1120]">$5,000 – $20,000</option>
                      <option className="bg-[#0d1120]">$20,000+</option>
                      <option className="bg-[#0d1120]">Let&apos;s discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 block">Tell Us About Your Project *</label>
                    <textarea
                      required rows={5} placeholder="Describe your project, goals, and timeline..."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  <button
                    type="submit" disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold text-base hover:from-violet-500 hover:to-pink-500 hover:shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : "Send Message →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto gsap-fade">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 h-72 bg-white/5">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-5xl mb-4">📍</span>
              <p className="text-white font-bold text-xl mb-1">Cairo, Egypt</p>
              <p className="text-slate-400 text-sm">New Cairo, 5th Settlement</p>
            </div>
            <div className="absolute top-6 right-6">
              <div className="bg-white/5 backdrop-blur border border-white/15 rounded-xl px-4 py-2">
                <p className="text-white text-xs font-semibold">🌐 Worldwide Remote</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}