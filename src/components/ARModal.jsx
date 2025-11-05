import { X, Smartphone } from "lucide-react";

export default function ARModal({ open, onClose, product }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative z-10 w-[92vw] max-w-2xl rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">View in AR</h3>
            {product && (
              <p className="text-sm text-slate-600 mt-0.5">{product.name} • {product.cut} cut</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-2 hover:bg-slate-100"
          >
            <X className="h-5 w-5 text-slate-700" />
          </button>
        </div>

        <div className="p-5 grid md:grid-cols-2 gap-4">
          <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 grid place-items-center">
            <Smartphone className="h-10 w-10 text-slate-400" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-slate-600">
              Use your phone to place this piece into your space. On iOS, you'll see an AR Quick Look. On Android, you'll see a 3D model you can place with your camera.
            </p>
            <div className="mt-4 grid gap-2">
              <a
                href={product?.ar?.usdz || "#"}
                className="rounded-md px-4 py-2 text-sm text-center bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50"
                target="_blank"
                rel="noreferrer"
              >
                Open on iPhone (USDZ)
              </a>
              <a
                href={product?.ar?.glb || "#"}
                className="rounded-md px-4 py-2 text-sm text-center border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 disabled:opacity-50"
                target="_blank"
                rel="noreferrer"
              >
                Open on Android (GLB)
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Tip: If you don't have AR files yet, you can replace these links with your own USDZ/GLB assets later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
