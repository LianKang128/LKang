"use client";

import { useState, useEffect, useRef } from "react";
import { skills } from "@/lib/data";

type SkillCategory = keyof typeof skills;

export default function Skills() {
  const [active, setActive] = useState<SkillCategory>("Frontend");
  const [animate, setAnimate] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const handleTab = (cat: SkillCategory) => {
    setAnimate(false);
    setTimeout(() => {
      setActive(cat);
      setAnimate(true);
    }, 150);
  };

  return (
    <section id="skills" ref={sectionRef} className="bg-zinc-950 py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-2">
            Expertise
          </p>
          <h2 className="text-3xl font-black text-white tracking-tight">Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Tabs + bars */}
          <div className="md:col-span-2">
            {/* Category tabs */}
            <div className="flex gap-2 mb-8">
              {(Object.keys(skills) as SkillCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleTab(cat)}
                  className={`text-xs px-4 py-2 rounded-lg border font-mono transition-all ${
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
            <div className="space-y-5">
              {skills[active].map((skill, i) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-zinc-300 font-mono">{skill.name}</span>
                    <span className="text-xs text-zinc-600">{skill.pct}%</span>
                  </div>
                  <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-800 rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: visible && animate ? `${skill.pct}%` : "0%",
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
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">
                How I work
              </p>
              {[
                { icon: "⚡", label: "Performance-first", sub: "Every ms counts" },
                { icon: "♿", label: "Accessibility", sub: "WCAG 2.1 AA standard" },
                { icon: "🔒", label: "Security", sub: "OWASP top 10 aware" },
                { icon: "🧪", label: "Test coverage", sub: "Unit + E2E always" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 py-2.5 border-b border-zinc-800/50 last:border-0">
                  <span className="text-base mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-xs text-zinc-300 font-medium">{item.label}</p>
                    <p className="text-xs text-zinc-600">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-3">
                Currently learning
              </p>
              <div className="flex flex-wrap gap-2">
                {["Rust", "LLM APIs", "Edge Runtime", "WebGPU"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono bg-red-950/40 border border-red-900/30 text-red-400 px-2.5 py-1 rounded-md"
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
