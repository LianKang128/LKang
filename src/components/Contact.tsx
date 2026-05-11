import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-900 bg-zinc-950 py-28 lg:py-36">
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 font-mono text-sm uppercase tracking-widest text-zinc-600">
            Get in touch
          </p>
          <h2 className="mb-6 text-5xl font-black leading-tight tracking-tighter text-white md:text-7xl">
            Let&apos;s build something
            <span className="text-red-700"> great</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-zinc-500 lg:text-lg">
            Open to freelance projects, full-time roles, and interesting collaboration.
            Response time: usually within 24h.
          </p>

          <a
            href={`mailto:${personal.email}`}
            className="mb-14 inline-flex items-center gap-3 rounded-full bg-red-800 px-9 py-5 text-base font-semibold text-white transition-colors hover:bg-red-700"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            {personal.email}
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-8">
            {[
              { label: "GitHub", href: personal.github },
              { label: "LinkedIn", href: personal.linkedin },
              { label: "WhatsApp", href: personal.whatsapp },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-zinc-600 transition-colors hover:text-white"
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
