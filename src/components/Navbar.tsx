"use client";

import { useState, useEffect } from "react";
import { personal } from "@/lib/data";

const links = [
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = window.innerWidth >= 1280 ? 160 : 128;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const focusLine = window.scrollY + window.innerHeight * 0.4;
      let current = "";

      for (const link of links) {
        const section = document.getElementById(link.id);
        if (section && focusLine >= section.offsetTop) {
          current = link.id;
        }
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 w-full max-w-[1800px] items-center justify-between px-6 sm:px-10 lg:h-28 lg:px-16 xl:h-32 xl:px-24">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight text-white lg:text-3xl xl:text-4xl">
          {personal.name.split(" ")[0]}
          <span className="text-red-700">
            {personal.name.split(" ")[1]?.[0]}
          </span>
          <span className="text-zinc-600">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-14 md:flex lg:gap-16 xl:gap-20">
          {links.map((link) => {
            const active = activeSection === link.id;

            return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(link.id);
              }}
              aria-current={active ? "page" : undefined}
              className={`text-2xl tracking-wide transition-all lg:text-3xl ${
                active
                  ? "scale-110 text-red-500"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {link.label.toLowerCase()}
            </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href={`mailto:${personal.email}`}
          className="hidden items-center gap-3 rounded-full bg-red-800 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-700 md:flex lg:px-10 lg:py-5"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
          Let&apos;s talk
        </a>

        {/* Mobile burger */}
        <button
          className="p-3 text-zinc-400 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span
              className={`block h-0.5 w-9 bg-current transition-all ${menuOpen ? "translate-y-2.5 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-9 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-9 bg-current transition-all ${menuOpen ? "-translate-y-2.5 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-6 border-t border-white/5 bg-zinc-950 px-6 py-8 md:hidden">
          {links.map((link) => {
            const active = activeSection === link.id;

            return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => {
                event.preventDefault();
                setMenuOpen(false);
                scrollToSection(link.id);
              }}
              aria-current={active ? "page" : undefined}
              className={`text-xl transition-colors ${
                active ? "text-red-500" : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label.toLowerCase()}
            </a>
            );
          })}
          <a
            href={`mailto:${personal.email}`}
            className="text-xl font-semibold text-red-500"
          >
            Let&apos;s talk →
          </a>
        </div>
      )}
    </header>
  );
}
