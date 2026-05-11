"use client";

import { useState } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const [selectedId, setSelectedId] = useState(experience[0].id);

  return (
    <section id="about" className="border-t border-zinc-900 bg-zinc-950 py-28 lg:py-36">
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid gap-12 md:grid-cols-3 xl:gap-16">
          <div>
            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-zinc-600">
              Career
            </p>
            <h2 className="mb-5 text-5xl font-black tracking-tight text-white lg:text-6xl">
              Experience
            </h2>
            <p className="text-base leading-relaxed text-zinc-500 lg:text-lg">
              Select a role to expand it and reveal the tools, learning, location, and
              deeper project details from that chapter.
            </p>

            <div className="mt-10 space-y-4">
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

          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-red-900/60 via-zinc-800 to-zinc-900" />

              {experience.map((exp, i) => {
                const active = selectedId === exp.id;

                return (
                  <div
                    key={exp.id}
                    className="grid grid-cols-[2.5rem_1fr] gap-5 pb-8 last:pb-0"
                  >
                    <div className="relative flex justify-center pt-7">
                      <span
                        className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
                          active
                            ? "border-red-500 bg-red-800 shadow-[0_0_0_8px_rgba(127,29,29,0.18),0_0_28px_rgba(185,28,28,0.35)]"
                            : exp.current
                              ? "border-red-800 bg-zinc-950"
                              : "border-zinc-700 bg-zinc-950"
                        }`}
                      >
                        <span
                          className={`h-3 w-3 rounded-full transition-all duration-500 ${
                            active
                              ? "scale-125 bg-white"
                              : exp.current
                                ? "bg-red-700"
                                : "bg-zinc-700"
                          }`}
                        />
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedId(exp.id)}
                      className={`group block w-full origin-left rounded-2xl border text-left transition-all duration-500 ${
                        active
                          ? "scale-[1.025] border-red-800/70 bg-zinc-900 p-8 shadow-2xl shadow-red-950/20"
                          : "border-zinc-800 bg-zinc-900/40 p-7 opacity-75 hover:scale-[1.01] hover:border-zinc-700 hover:opacity-100"
                      }`}
                      style={{ transitionDelay: `${i * 40}ms` }}
                      aria-pressed={active}
                    >
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
                          active
                            ? "mt-6 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-zinc-800 pt-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                                <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                                  Location
                                </p>
                                <p className="mt-2 text-base font-semibold text-zinc-200">
                                  {exp.location}
                                </p>
                              </div>
                              <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                                <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                                  Company
                                </p>
                                <p className="mt-2 text-base font-semibold text-zinc-200">
                                  {exp.company}
                                </p>
                              </div>
                            </div>

                            <p className="mt-6 text-base leading-relaxed text-zinc-400 lg:text-lg">
                              {exp.detail}
                            </p>

                            <div className="mt-6 grid gap-6 sm:grid-cols-2">
                              <div>
                                <p className="mb-3 font-mono text-sm uppercase tracking-widest text-zinc-600">
                                  Skills used
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {exp.skillsUsed.map((skill) => (
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
                                  {exp.learned.map((item) => (
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

                            <div className="mt-6">
                              <p className="mb-3 font-mono text-sm uppercase tracking-widest text-zinc-600">
                                Highlights
                              </p>
                              <div className="space-y-3">
                                {exp.highlights.map((item) => (
                                  <p
                                    key={item}
                                    className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 text-base leading-relaxed text-zinc-400"
                                  >
                                    {item}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
