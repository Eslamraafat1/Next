"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl bg-[#080b14]/80">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/60 transition-shadow duration-300">
            <span className="text-white font-extrabold text-sm">N</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Nexus<span className="text-violet-400">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-lg bg-white/10 border border-white/15" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {link.label === "Blog" && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 animate-pulse" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button (desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-semibold hover:from-violet-500 hover:to-pink-500 hover:shadow-lg hover:shadow-violet-500/40 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white/10 text-white border border-white/15"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.label === "Blog" && (
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white text-xs font-bold">
                      New
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-semibold"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}