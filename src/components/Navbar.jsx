import { ShoppingCart, Gem } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 grid place-items-center text-white shadow-sm">
            <Gem className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">Lumière Jewels</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#catalog" className="hover:text-slate-900 transition-colors">Catalog</a>
          <a href="#ar" className="hover:text-slate-900 transition-colors">AR Viewer</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition-colors">
          <ShoppingCart className="h-4 w-4" />
          Cart
        </button>
      </div>
    </header>
  );
}
