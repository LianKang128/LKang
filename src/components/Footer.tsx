import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-zinc-700">
          © 2025 {personal.name} · Built with Next.js &amp; Tailwind
        </p>
        <div className="flex items-center gap-2 font-mono text-sm text-zinc-700">
          <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
          <span>All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
