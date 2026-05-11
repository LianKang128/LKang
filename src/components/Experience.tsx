"use client";

import { useState } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const [selectedId, setSelectedId] = useState(experience[0].id);
  const selected = experience.find((exp) => exp.id === selectedId) ?? experience[0];

  return (
    <section id="about" className="border-t border-zinc-900 bg-zinc-950 py-28 lg:py-36">
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid gap-12 xl:grid-cols-[0.9fr_1.4fr] xl:gap-16">
          <div>
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-zinc-600">
              Career
            </p>
            <h2 className="mb-5 text-5xl font-black tracking-tight text-white lg:text-6xl">
              Experience
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-zinc-500 lg:text-lg">
              Select a role to expand the card and see the tools, learning, location, and
              deeper project details from that chapter.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <p className="mb-2 font-mono text-sm text-zinc-600">Education</p>
                <p className="text-base font-semibold text-zinc-300">
                  B.Sc. Computer Science
                </p>
                <p className="mt-1 text-sm text-zinc-500">Universiti Malaya - 2018</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <p className="mb-2 font-mono text-sm text-zinc-600">Based in</p>
                <p className="text-base font-semibold text-zinc-300">Kuala Lumpur</p>
                <p className="mt-1 text-sm text-zinc-500">Open to remote worldwide</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative pl-8">
              <div className="absolute bottom-3 left-[6px] top-3 w-px bg-zinc-800" />

              {experience.map((exp, i) => {
                const active = selectedId === exp.id;

                return (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setSelectedId(exp.id)}
                    className={`group relative mb-6 block w-full origin-left rounded-2xl border p-6 text-left transition-all duration-500 last:mb-0 ${
                      active
                        ? "scale-[1.03] border-red-800/70 bg-zinc-900 shadow-2xl shadow-red-950/20"
                        : "border-zinc-800 bg-zinc-900/40 opacity-75 hover:scale-[1.01] hover:border-zinc-700 hover:opacity-100"
                    }`}
                    style={{ transitionDelay: `${i * 40}ms` }}
                    aria-pressed={active}
                  >
                    <span
                      className={`absolute left-[-28px] top-7 h-4 w-4 rounded-full border-2 transition-all duration-500 ${
                        active
                          ? "scale-125 border-red-500 bg-red-700 shadow-lg shadow-red-900/50"
                          : exp.current
                            ? "border-red-600 bg-red-700"
                            : "border-zinc-700 bg-zinc-950"
                      }`}
                    />

                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xl font-bold text-white transition-colors group-hover:text-red-100">
                          {exp.role}
                        </p>
                        <p className="mt-1 font-mono text-sm text-red-600">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-2">
                        {exp.current && (
                          <span className="rounded-full border border-red-900/40 bg-red-950/50 px-3 py-1 font-mono text-xs text-red-400">
                            current
                          </span>
                        )}
                        <span className="whitespace-nowrap font-mono text-sm text-zinc-600">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-base leading-relaxed text-zinc-500">{exp.desc}</p>

                    <div
                      className={`grid transition-all duration-500 ${
                        active ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap gap-2 border-t border-zinc-800 pt-5">
                          {exp.skillsUsed.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md border border-red-900/30 bg-red-950/30 px-3 py-1 font-mono text-xs text-red-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div
              key={selected.id}
              className="rounded-2xl border border-red-900/30 bg-zinc-900/70 p-7 shadow-2xl shadow-red-950/10 animate-fade-up xl:p-8"
            >
              <div className="mb-6 flex flex-col gap-4 border-b border-zinc-800 pb-6">
                <div>
                  <p className="font-mono text-sm uppercase tracking-widest text-zinc-600">
                    Selected role
                  </p>
                  <h3 className="mt-2 text-3xl font-black tracking-tight text-white">
                    {selected.role}
                  </h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                      Company
                    </p>
                    <p className="mt-2 text-base font-semibold text-zinc-200">
                      {selected.company}
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                      Location
                    </p>
                    <p className="mt-2 text-base font-semibold text-zinc-200">
                      {selected.location}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-base leading-relaxed text-zinc-400 lg:text-lg">
                {selected.detail}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-3 font-mono text-sm uppercase tracking-widest text-zinc-600">
                    Skills used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1.5 font-mono text-sm text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 font-mono text-sm uppercase tracking-widest text-zinc-600">
                    Learned
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.learned.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-red-900/30 bg-red-950/40 px-3 py-1.5 font-mono text-sm text-red-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-4 font-mono text-sm uppercase tracking-widest text-zinc-600">
                  Highlights
                </p>
                <div className="space-y-3">
                  {selected.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 text-base leading-relaxed text-zinc-400"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
