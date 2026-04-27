"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years Experience" },
  { value: "40+", label: "Team Members" },
];

const services = [
  { icon: "⚡", title: "Web Development", desc: "Lightning-fast, scalable web apps built with modern frameworks." },
  { icon: "🎨", title: "UI/UX Design", desc: "Beautiful interfaces that users love and businesses trust." },
  { icon: "📱", title: "Mobile Apps", desc: "Cross-platform apps that feel native on every device." },
  { icon: "☁️", title: "Cloud Solutions", desc: "Reliable, secure infrastructure that scales with your growth." },
  { icon: "🤖", title: "AI Integration", desc: "Smart automation and AI features to supercharge your product." },
  { icon: "📈", title: "SEO & Growth", desc: "Data-driven strategies that bring real traffic and revenue." },
];

const process = [
  { step: "01", title: "Discovery", desc: "We deeply understand your goals, audience, and challenges through workshops and research." },
  { step: "02", title: "Strategy", desc: "A clear roadmap is crafted — priorities, timelines, and success metrics defined." },
  { step: "03", title: "Design", desc: "Pixel-perfect wireframes and high-fidelity designs that wow stakeholders." },
  { step: "04", title: "Build", desc: "Clean, performant code with continuous delivery and real-time progress updates." },
  { step: "05", title: "Launch", desc: "Smooth deployment with monitoring, QA, and post-launch support included." },
];

const testimonials = [
  { name: "Sarah Johnson", role: "CEO, TechVenture", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", quote: "Nexus transformed our product from concept to reality in record time. The quality and attention to detail is unmatched." },
  { name: "Mark Davis", role: "Founder, LaunchPad", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80", quote: "Working with Nexus felt like having a world-class tech team in-house. Results exceeded every expectation." },
  { name: "Aisha Rahman", role: "CTO, ScaleUp Inc", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80", quote: "The animations, the performance, the design — everything was executed flawlessly. Highly recommend." },
];

const tech = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Figma", "GSAP", "Tailwind", "Docker"];

const faqs = [
  { q: "How long does a typical project take?", a: "Most projects range from 4–12 weeks depending on scope. We always set clear milestones upfront." },
  { q: "Do you offer post-launch support?", a: "Yes — we provide 3 months of free maintenance and offer flexible ongoing support packages." },
  { q: "Can you work with our existing codebase?", a: "Absolutely. We're experienced in auditing and extending legacy systems without disruption." },
  { q: "What's your pricing model?", a: "We offer both fixed-price projects and monthly retainers. We'll recommend the best fit after discovery." },
];

function useGSAP(callback) {
  const ctx = useRef(null);
  useEffect(() => {
    ctx.current = gsap.context(callback);
    return () => ctx.current?.revert();
  }, []);
}

export default function Home() {
  const root = useRef(null);

  useGSAP(() => {
    // Hero
    gsap.from(".hero-badge", { opacity: 0, y: -30, duration: 0.8, ease: "back.out(2)" });
    gsap.from(".hero-h1", { opacity: 0, y: 60, duration: 1, delay: 0.2, ease: "power3.out" });
    gsap.from(".hero-sub", { opacity: 0, y: 40, duration: 0.9, delay: 0.5, ease: "power2.out" });
    gsap.from(".hero-btns", { opacity: 0, y: 30, duration: 0.8, delay: 0.7, ease: "power2.out" });
    gsap.from(".hero-img", { opacity: 0, scale: 0.9, duration: 1.2, delay: 0.4, ease: "power3.out" });

    // Scroll animations
    const sections = gsap.utils.toArray(".gsap-fade-up");
    sections.forEach((el) => {
      gsap.from(el, {
        opacity: 0, y: 60, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      });
    });

    const cards = gsap.utils.toArray(".gsap-card");
    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0, y: 80, duration: 0.7, delay: i * 0.08, ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
      });
    });

    // Stats counter
    const counters = gsap.utils.toArray(".stat-val");
    counters.forEach((el) => {
      gsap.from(el, {
        opacity: 0, scale: 0.5, duration: 0.6, ease: "back.out(2)",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });

    // Marquee
    gsap.to(".marquee-inner", { xPercent: -50, duration: 18, ease: "none", repeat: -1 });
  });

  const [openFaq, setOpenFaq] = [null, () => {}];

  return (
    <main ref={root} className="min-h-screen bg-[#080b14] overflow-x-hidden">

      {/* ── 1. HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-700/25 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <span className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Now accepting new clients for Q3 2026
          </span>
          <h1 className="hero-h1 text-6xl md:text-8xl font-extrabold text-white leading-none mb-6 tracking-tight">
            We Build{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Digital
            </span>
            <br />
            Experiences
          </h1>
          <p className="hero-sub text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From bold startups to global enterprises — we design, develop, and scale products that move markets and delight users.
          </p>
          <div className="hero-btns flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold text-lg hover:from-violet-500 hover:to-pink-500 hover:shadow-2xl hover:shadow-violet-500/40 hover:-translate-y-1 transition-all duration-300">
              Start Your Project →
            </Link>
            <Link href="/services" className="px-8 py-4 rounded-2xl bg-white/5 border border-white/15 text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              Explore Services
            </Link>
          </div>
        </div>

        {/* Floating cards */}
        <div className="hero-img absolute left-6 top-1/3 hidden lg:block">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 animate-float">
            <p className="text-xs text-slate-400 mb-1">Projects completed</p>
            <p className="text-2xl font-bold text-white">250+ ✅</p>
          </div>
        </div>
        <div className="hero-img absolute right-6 top-1/3 hidden lg:block">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 animate-float-delay">
            <p className="text-xs text-slate-400 mb-1">Client satisfaction</p>
            <p className="text-2xl font-bold text-white">98% ⭐</p>
          </div>
        </div>
      </section>

      {/* ── 2. MARQUEE / TECH ── */}
      <section className="py-10 border-y border-white/10 overflow-hidden bg-white/[0.02]">
        <div className="marquee-inner flex gap-10 w-max">
          {[...tech, ...tech].map((t, i) => (
            <span key={i} className="text-slate-500 font-semibold text-sm uppercase tracking-widest whitespace-nowrap hover:text-violet-400 transition-colors duration-200 cursor-default">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. STATS ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="gsap-card text-center group">
              <p className="stat-val text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{s.value}</p>
              <p className="text-slate-400 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. SERVICES ── */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4 uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Our <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Services</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">End-to-end digital solutions tailored to your business needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="gsap-card group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-violet-500/50 hover:bg-white/8 hover:-translate-y-2 transition-all duration-400 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-pink-600/0 group-hover:from-violet-600/8 group-hover:to-pink-600/8 transition-all duration-500" />
                <span className="text-4xl mb-5 block">{s.icon}</span>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-violet-300 transition-colors">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-violet-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PROCESS ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-sm font-medium mb-4 uppercase tracking-widest">How We Work</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Our <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">Process</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-pink-500 to-cyan-500 hidden md:block" />
            <div className="space-y-10">
              {process.map((p, i) => (
                <div key={p.step} className="gsap-card relative flex gap-8 items-start group">
                  <div className="relative z-10 hidden md:flex w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                    {p.step}
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 group-hover:border-violet-500/40 transition-all duration-300">
                    <span className="text-xs text-violet-400 font-bold uppercase tracking-widest md:hidden mb-1 block">{p.step}</span>
                    <h3 className="text-white font-bold text-xl mb-2">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SHOWCASE ── */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium mb-4 uppercase tracking-widest">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Selected <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">Work</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80", title: "FinTrack Dashboard", cat: "Web App" },
              { img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80", title: "Bloom E-Commerce", cat: "Design + Dev" },
              { img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80", title: "MediCare Mobile", cat: "Mobile App" },
              { img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80", title: "Venture AI Platform", cat: "AI Integration" },
              { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80", title: "CodeFlow SaaS", cat: "Development" },
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", title: "Analytics Pro", cat: "Web App" },
            ].map((item) => (
              <div key={item.title} className="gsap-card group relative rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/15">
                <div className="h-56 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5 bg-white/5">
                  <span className="text-xs text-violet-400 font-semibold uppercase tracking-wider">{item.cat}</span>
                  <h3 className="text-white font-bold text-lg mt-1">{item.title}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                  <span className="text-white font-semibold flex items-center gap-2">View Case Study →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ── */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-4 uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">What Clients <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Say</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="gsap-card group bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-emerald-500/40 hover:-translate-y-2 transition-all duration-400">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-lg">★</span>)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/40" />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TECH STACK ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="gsap-fade-up mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-medium mb-4 uppercase tracking-widest">Tech Stack</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Built with the <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Best</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {tech.map((t, i) => (
              <div key={i} className="gsap-card px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold hover:bg-violet-600/20 hover:border-violet-500/50 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-default">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="gsap-fade-up text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium mb-4 uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Common <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-[#080b14] to-pink-900/30 pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="gsap-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-sm font-medium mb-6 uppercase tracking-widest">Ready?</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Let&apos;s Build Something <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Amazing</span>
            </h2>
            <p className="text-slate-400 text-xl mb-10">Tell us your vision — we&apos;ll make it real.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-10 py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold text-lg hover:from-violet-500 hover:to-pink-500 hover:shadow-2xl hover:shadow-violet-500/40 hover:-translate-y-1 transition-all duration-300">
                Get a Free Quote →
              </Link>
              <Link href="/about" className="px-10 py-5 rounded-2xl bg-white/5 border border-white/15 text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="gsap-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left cursor-pointer group">
        <span className="text-white font-semibold text-sm md:text-base group-hover:text-violet-300 transition-colors">{faq.q}</span>
        <span className={`text-violet-400 text-xl font-bold transition-transform duration-300 shrink-0 ml-4 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-4">{faq.a}</div>
      )}
    </div>
  );
}