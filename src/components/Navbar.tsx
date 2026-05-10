"use client";

import { useState, useEffect } from "react";
import { personal } from "@/lib/data";

const links = ["Work", "Skills", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-white text-sm tracking-tight">
          {personal.name.split(" ")[0]}
          <span className="text-red-700">
            {personal.name.split(" ")[1]?.[0]}
          </span>
          <span className="text-zinc-600">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs text-zinc-500 hover:text-white transition-colors tracking-wide"
            >
              {l.toLowerCase()}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={`mailto:${personal.email}`}
          className="hidden md:flex items-center gap-2 bg-red-800 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Let&apos;s talk
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-zinc-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span
              className={`block w-5 h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {l.toLowerCase()}
            </a>
          ))}
          <a
            href={`mailto:${personal.email}`}
            className="text-sm text-red-500 font-semibold"
          >
            Let&apos;s talk →
          </a>
        </div>
      )}
    </header>
  );
}
