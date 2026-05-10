import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="about" className="bg-zinc-950 py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left label */}
          <div>
            <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-2">
              Career
            </p>
            <h2 className="text-3xl font-black text-white tracking-tight mb-4">
              Experience
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              5 years building products across startups, agencies, and enterprise teams.
            </p>

            <div className="mt-8 space-y-3">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs font-mono text-zinc-600 mb-1">Education</p>
                <p className="text-sm text-zinc-300 font-semibold">B.Sc. Computer Science</p>
                <p className="text-xs text-zinc-500">Universiti Malaya · 2018</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs font-mono text-zinc-600 mb-1">Based in</p>
                <p className="text-sm text-zinc-300 font-semibold">Kuala Lumpur</p>
                <p className="text-xs text-zinc-500">Open to remote worldwide</p>
              </div>
            </div>
          </div>

          {/* Right: timeline */}
          <div className="md:col-span-2">
            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-[5px] top-3 bottom-3 w-px bg-zinc-800" />

              {experience.map((exp, i) => (
                <div key={exp.id} className="relative mb-6 last:mb-0">
                  {/* Dot */}
                  <div
                    className={`absolute left-[-19px] top-5 w-3 h-3 rounded-full border-2 transition-colors ${
                      exp.current
                        ? "bg-red-700 border-red-600"
                        : "bg-zinc-950 border-zinc-700"
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`border rounded-2xl p-5 transition-colors ${
                      exp.current
                        ? "bg-zinc-900/80 border-red-900/30"
                        : "bg-zinc-900/40 border-zinc-800"
                    }`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <p className="text-sm font-bold text-white">{exp.role}</p>
                        <p className="text-xs text-red-600 mt-0.5 font-mono">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {exp.current && (
                          <span className="text-[10px] bg-red-950/50 border border-red-900/40 text-red-400 px-2 py-0.5 rounded-full font-mono">
                            current
                          </span>
                        )}
                        <span className="text-xs text-zinc-600 font-mono whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">{exp.desc}</p>
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
