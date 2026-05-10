"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/data";

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "API", value: "api" },
];

const ProjectIcon = ({ icon }: { icon: string }) => {
  const icons: Record<string, string> = {
    chart: "M3 3v18h18M7 16l4-4 4 4 4-8",
    palette: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM8 12h8M12 8v8",
    api: "M4 6h16M4 12h16M4 18h7",
    cart: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",
    motion: "M5 12h14M12 5l7 7-7 7",
    lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d={icons[icon] ?? icons.chart} />
    </svg>
  );
};

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>("all");

  const visible = projects.filter(
    (p) => active === "all" || p.category === active
  );

  return (
    <section id="work" className="bg-zinc-950 py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-2">
              Selected work
            </p>
            <h2 className="text-3xl font-black text-white tracking-tight">Projects</h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`text-xs px-3.5 py-1.5 rounded-full border font-mono transition-all ${
                  active === f.value
                    ? "bg-red-800 border-red-700 text-white"
                    : "bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((p) => (
            <a
              key={p.id}
              href={p.link}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 hover:bg-zinc-900 transition-all flex flex-col"
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-red-700 mb-4 group-hover:border-red-800/50 transition-colors">
                <ProjectIcon icon={p.icon} />
              </div>

              <h3 className="text-sm font-bold text-white mb-2">{p.name}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4 flex-1">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono bg-zinc-800 border border-zinc-700/50 text-zinc-500 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                <div className="flex items-center gap-1 text-xs text-zinc-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
                    <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p.stars >= 1000
                    ? `${(p.stars / 1000).toFixed(1)}k`
                    : p.stars}
                </div>
                <span className="text-xs text-red-700 group-hover:text-red-500 transition-colors font-mono">
                  view →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600 px-5 py-2.5 rounded-full transition-all font-mono"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            See all repos on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
