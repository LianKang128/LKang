"use client";

import { useEffect, useRef } from "react";
import { personal, stats, techStack } from "@/lib/data";

const statToneStyles = {
  success: {
    card: "border-emerald-400/40 bg-emerald-950/20 shadow-[0_0_32px_#10b9812e]",
    value: "text-emerald-300 drop-shadow-[0_0_12px_#34d399bf]",
    label: "text-emerald-500/70",
  },
  danger: {
    card: "border-red-500/40 bg-red-950/20 shadow-[0_0_32px_#ef444429]",
    value: "text-red-400 drop-shadow-[0_0_12px_#f87171b3]",
    label: "text-red-500/70",
  },
  neutral: {
    card: "border-zinc-800 bg-zinc-900/60",
    value: "text-white",
    label: "text-zinc-600",
  },
};

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
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-zinc-950"
    >
      {/* Animated dot grid background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Red glow blob */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1800px] items-center px-6 pb-16 pt-32 sm:px-10 lg:px-16 lg:pt-40 xl:px-24 xl:pt-44">
        <div className="grid w-full items-center gap-12 md:grid-cols-[1.15fr_0.85fr] lg:gap-20 xl:gap-28">

          {/* LEFT — identity */}
          <div>
            {/* Status pill */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 lg:mb-10">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-zinc-400 lg:text-sm">
                {personal.available ? "Available for work" : "Not available"} · {personal.location}
              </span>
            </div>

            <h1 className="mb-5 text-6xl font-black leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-[10rem]">
              {personal.name.split(" ")[0]}
              <br />
              <span className="text-red-700">{personal.name.split(" ")[1]}</span>
            </h1>

            <p className="mb-8 font-mono text-base tracking-wide text-zinc-500 lg:text-lg">
              {"// "}
              {personal.role}
            </p>

            <p className="mb-10 max-w-2xl text-base leading-relaxed text-zinc-400 lg:text-lg">
              {personal.tagline}
            </p>

            {/* Tech stack pills */}
            <div className="mb-12 flex max-w-2xl flex-wrap gap-3">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-500 transition-colors hover:border-red-800/50 hover:text-zinc-300 lg:text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Profile.pdf"
                className="rounded-full bg-red-800 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-red-700"
              >
                View projects
              </a>
              <a
                href="/resume.pdf"
                className="rounded-full border border-zinc-700 px-7 py-4 text-base text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT — stats */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {stats.map((s) => {
                const tone = statToneStyles[s.tone as keyof typeof statToneStyles] ?? statToneStyles.neutral;
                const cardTone = s.toneStyle === "value" ? statToneStyles.neutral : tone;
                const labelTone = s.toneStyle === "value" ? statToneStyles.neutral : tone;
                const cardClass = s.color?.card ?? cardTone.card;
                const valueClass = s.color?.value ?? tone.value;
                const labelClass = s.color?.label ?? labelTone.label;

                return (
                <div
                  key={s.label}
                  className={`rounded-2xl border p-6 backdrop-blur-sm transition-all xl:p-8 ${cardClass}`}
                >
                  <p className={`text-4xl font-black tracking-tighter xl:text-5xl ${valueClass}`}>
                    {s.value}
                  </p>
                  <p className={`mt-2 font-mono text-xs uppercase tracking-widest lg:text-sm ${labelClass}`}>
                    {s.label}
                  </p>
                </div>
                );
              })}
            </div>

            {/* Profile photo placeholder */}
            <div className="flex items-center gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm xl:p-8">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-xs text-zinc-500">
                {/* Replace with: <Image src="/profile.jpg" alt="..." width={64} height={64} className="rounded-xl object-cover" /> */}
                Photo
              </div>
              <div>
                <p className="text-base font-semibold text-white">{personal.name}</p>
                <p className="mt-1 text-sm text-zinc-500">{personal.role}</p>
                <p className="mt-3 font-mono text-sm text-zinc-600">{personal.email}</p>
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
