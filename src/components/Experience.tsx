import { experience } from "@/lib/data";

export default function Experience() {
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
              5 years building products across startups, agencies, and enterprise teams.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <p className="mb-2 font-mono text-sm text-zinc-600">Education</p>
                <p className="text-base font-semibold text-zinc-300">
                  B.Sc. Computer Science
                </p>
                <p className="mt-1 text-sm text-zinc-500">Universiti Malaya · 2018</p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <p className="mb-2 font-mono text-sm text-zinc-600">Based in</p>
                <p className="text-base font-semibold text-zinc-300">Kuala Lumpur</p>
                <p className="mt-1 text-sm text-zinc-500">Open to remote worldwide</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative pl-8">
              <div className="absolute bottom-3 left-[6px] top-3 w-px bg-zinc-800" />

              {experience.map((exp, i) => (
                <div key={exp.id} className="relative mb-8 last:mb-0">
                  <div
                    className={`absolute left-[-28px] top-7 h-4 w-4 rounded-full border-2 transition-colors ${
                      exp.current
                        ? "border-red-600 bg-red-700"
                        : "border-zinc-700 bg-zinc-950"
                    }`}
                  />

                  <div
                    className={`rounded-2xl border p-7 transition-colors xl:p-8 ${
                      exp.current
                        ? "border-red-900/30 bg-zinc-900/80"
                        : "border-zinc-800 bg-zinc-900/40"
                    }`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xl font-bold text-white">{exp.role}</p>
                        <p className="mt-1 font-mono text-sm text-red-600">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
