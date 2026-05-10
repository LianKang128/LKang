import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-4">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-tight">
            Let&apos;s build something
            <span className="text-red-700"> great</span>
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Open to freelance projects, full-time roles, and interesting collaboration.
            Response time: usually within 24h.
          </p>

          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-3 bg-red-800 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors mb-12"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            {personal.email}
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            {[
              { label: "GitHub", href: personal.github },
              { label: "LinkedIn", href: personal.linkedin },
              { label: "Twitter", href: personal.twitter },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-600 hover:text-white transition-colors font-mono"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
