import Spline from "@splinetool/react-spline";
import { Sparkles } from "lucide-react";

export default function HeroSpline() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-white via-white to-slate-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 text-white px-3 py-1 text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            New: Interactive 3D & AR-ready diamonds
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Discover jewelry that shines in any reality
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl">
            Explore our curated selection of rings, necklaces, and earrings with immersive 3D previews. Try pieces in your space using AR on compatible devices.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm hover:bg-slate-800 transition-colors">
              Browse catalog
            </a>
            <a href="#ar" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white text-slate-900 px-5 py-2.5 text-sm hover:bg-slate-50 transition-colors">
              Launch AR viewer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
