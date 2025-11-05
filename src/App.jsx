import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSpline from "./components/HeroSpline";
import CatalogGrid from "./components/CatalogGrid";
import ARModal from "./components/ARModal";

function App() {
  const products = useMemo(
    () => [
      {
        id: "r1",
        name: "Celeste Solitaire Ring",
        description: "18K white gold • 1.2ct center stone",
        cut: "Brilliant",
        price: 4890,
        image:
          "https://images.unsplash.com/photo-1603565816278-c05f3f6a8d0e?q=80&w=1200&auto=format&fit=crop",
        ar: {
          usdz: "#",
          glb: "#",
        },
      },
      {
        id: "n1",
        name: "Aurora Halo Necklace",
        description: "Platinum • pavé setting",
        cut: "Princess",
        price: 6290,
        image:
          "https://images.unsplash.com/photo-1615198432048-94fb0ef0a536?q=80&w=1200&auto=format&fit=crop",
        ar: { usdz: "#", glb: "#" },
      },
      {
        id: "e1",
        name: "Luna Drop Earrings",
        description: "14K rose gold • pear cut",
        cut: "Pear",
        price: 2790,
        image:
          "https://images.unsplash.com/photo-1611130458289-0d61e0b1c9e0?q=80&w=1200&auto=format&fit=crop",
        ar: { usdz: "#", glb: "#" },
      },
    ],
    []
  );

  const [arOpen, setArOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openAR = (item) => {
    setSelected(item);
    setArOpen(true);
    // ensure AR anchor visible if user came from hero CTA
    const el = document.getElementById("ar");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const view3D = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <HeroSpline />

      <CatalogGrid products={products} onOpenAR={openAR} onView3D={view3D} />

      <section id="ar" className="relative py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Try pieces with AR</h3>
                <p className="mt-2 text-slate-600">
                  Open any item in augmented reality to visualize scale, sparkle, and setting in your real environment. Works on most modern iOS and Android devices.
                </p>
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => openAR(products[0])}
                    className="rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800"
                  >
                    Launch AR with a sample
                  </button>
                  <a
                    href="#catalog"
                    className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
                  >
                    Choose a different item
                  </a>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200">
                {/* Decorative gradient overlay that won't block interactions */}
                <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_30%_20%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(80%_60%_at_80%_50%,rgba(99,102,241,0.2),transparent_60%)] pointer-events-none" />
                <iframe
                  title="How AR works"
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/aqz-KE-bpKQ?rel=0&controls=0&modestbranding=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="about" className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-500">
          <p>
            Crafted with care by Lumière Jewels. 3D hero powered by Spline. Replace sample images and AR links with your own assets when ready.
          </p>
        </div>
      </footer>

      <ARModal open={arOpen} onClose={() => setArOpen(false)} product={selected} />
    </div>
  );
}

export default App;
