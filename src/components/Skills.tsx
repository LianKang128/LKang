"use client";

import { useState, useEffect, useRef } from "react";
import { skills } from "@/lib/data";

type SkillCategory = keyof typeof skills;

export default function Skills() {
  const [active, setActive] = useState<SkillCategory>("Frontend");
  const [animate, setAnimate] = useState(true);
  const [barReady, setBarReady] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tabTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [visible, setVisible] = useState(false);

  // Trigger bar animation on section enter
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const frame = requestAnimationFrame(() => {
      setBarReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [active, animationKey, visible]);

  useEffect(() => {
    return () => {
      if (tabTimeoutRef.current) {
        clearTimeout(tabTimeoutRef.current);
      }
    };
  }, []);

  const handleTab = (cat: SkillCategory) => {
    if (tabTimeoutRef.current) {
      clearTimeout(tabTimeoutRef.current);
    }

    setAnimate(false);
    setBarReady(false);

    tabTimeoutRef.current = setTimeout(() => {
      setActive(cat);
      setAnimationKey((key) => key + 1);
      setAnimate(true);
    }, 150);
  };

  return (
    <section id="skills" ref={sectionRef} className="border-t border-zinc-900 bg-zinc-950 py-28 lg:py-36">
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Header */}
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-zinc-600">
            Expertise
          </p>
          <h2 className="text-5xl font-black tracking-tight text-white lg:text-6xl">Skills</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 xl:gap-16">
          {/* Tabs + bars */}
          <div className="md:col-span-2">
            {/* Category tabs */}
            <div className="mb-10 flex flex-wrap gap-3">
              {(Object.keys(skills) as SkillCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleTab(cat)}
                  className={`rounded-lg border px-5 py-3 font-mono text-sm transition-all ${
                    active === cat
                      ? "bg-red-800 border-red-700 text-white"
                      : "bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skill bars */}
            <div className="space-y-7">
              {skills[active].map((skill, i) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-base text-zinc-300">{skill.name}</span>
                    <span className="text-sm text-zinc-600">{skill.pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-900">
                    <div
                      className="h-full bg-red-800 rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: visible && animate && barReady ? `${skill.pct}%` : "0%",
                        transitionDelay: `${i * 80}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side: tools & approach */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 xl:p-8">
              <p className="mb-5 font-mono text-sm uppercase tracking-widest text-zinc-600">
                How I work
              </p>
              {[
                { icon: "⚡", label: "Performance-first", sub: "Every ms counts" },
                { icon: "♿", label: "Accessibility", sub: "WCAG 2.1 AA standard" },
                { icon: "🔒", label: "Security", sub: "OWASP top 10 aware" },
                { icon: "🧪", label: "Test coverage", sub: "Unit + E2E always" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 border-b border-zinc-800/50 py-4 last:border-0">
                  <span className="mt-0.5 text-xl">{item.icon}</span>
                  <div>
                    <p className="text-base font-medium text-zinc-300">{item.label}</p>
                    <p className="mt-1 text-sm text-zinc-600">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 xl:p-8">
              <p className="mb-4 font-mono text-sm uppercase tracking-widest text-zinc-600">
                Currently learning
              </p>
              <div className="flex flex-wrap gap-3">
                {["Rust", "LLM APIs", "Edge Runtime", "WebGPU"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-red-900/30 bg-red-950/40 px-3 py-1.5 font-mono text-sm text-red-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
