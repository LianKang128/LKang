import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-700 font-mono">
          © 2025 {personal.name} · Built with Next.js &amp; Tailwind
        </p>
        <div className="flex items-center gap-1 text-xs text-zinc-700 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
          <span>All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
