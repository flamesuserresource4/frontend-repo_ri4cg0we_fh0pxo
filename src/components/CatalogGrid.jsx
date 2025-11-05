import { Gem, Camera } from "lucide-react";

export default function CatalogGrid({ products, onOpenAR, onView3D }) {
  return (
    <section id="catalog" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Featured pieces</h2>
            <p className="mt-2 text-slate-600">Hand-picked designs with exquisite cuts and brilliant clarity.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-2 py-1 text-xs text-slate-700">
                  <Gem className="h-3.5 w-3.5 text-cyan-600" />
                  {p.cut}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">${p.price.toLocaleString()}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onView3D(p)}
                      className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 hover:bg-slate-50"
                    >
                      View 3D
                    </button>
                    <button
                      onClick={() => onOpenAR(p)}
                      className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 text-white px-3 py-1.5 text-xs hover:bg-slate-800"
                    >
                      <Camera className="h-3.5 w-3.5" />
                      View in AR
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
