"use client";

import { useEffect, useRef } from "react";
import { personal, stats, techStack } from "@/lib/data";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle animated dot grid on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 28;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing + spacing / 2;
          const y = r * spacing + spacing / 2;
          const dist = Math.sqrt(
            Math.pow(x - canvas.width * 0.3, 2) + Math.pow(y - canvas.height * 0.5, 2)
          );
          const wave = Math.sin(dist / 40 - t * 1.5) * 0.5 + 0.5;
          const alpha = wave * 0.12;
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139,43,43,${alpha})`;
          ctx.fill();
        }
      }

      t += 0.02;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-zinc-950 flex flex-col justify-center overflow-hidden"
    >
      {/* Animated dot grid background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Red glow blob */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — identity */}
          <div>
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-zinc-400 font-mono">
                {personal.available ? "Available for work" : "Not available"} · {personal.location}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-4">
              {personal.name.split(" ")[0]}
              <br />
              <span className="text-red-700">{personal.name.split(" ")[1]}</span>
            </h1>

            <p className="font-mono text-zinc-500 text-sm mb-6 tracking-wide">
              // {personal.role}
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-8">
              {personal.tagline}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-500 px-2.5 py-1 rounded-md hover:border-red-800/50 hover:text-zinc-300 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="#work"
                className="bg-red-800 hover:bg-red-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                View projects
              </a>
              <a
                href="/resume.pdf"
                className="border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white text-sm px-6 py-3 rounded-full transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT — stats */}
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 backdrop-blur-sm"
                >
                  <p className="text-3xl font-black text-white tracking-tighter">
                    {s.value}
                  </p>
                  <p className="text-xs text-zinc-600 mt-1 uppercase tracking-widest font-mono">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Profile photo placeholder */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 backdrop-blur-sm flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 text-xs shrink-0">
                {/* Replace with: <Image src="/profile.jpg" alt="..." width={64} height={64} className="rounded-xl object-cover" /> */}
                Photo
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{personal.name}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{personal.role}</p>
                <p className="text-zinc-600 text-xs mt-2 font-mono">{personal.email}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-zinc-700 font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-700 to-transparent" />
      </div>
    </section>
  );
}
