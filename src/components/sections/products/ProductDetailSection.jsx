import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Cpu, Download, ShoppingCart, Star } from 'lucide-react';

export default function ProductDetailSection({ product, onBack, onAddToCart }) {
  if (!product) return null;

  return (
    <motion.section
      key="detail-view"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl px-4 py-4 sm:px-6"
    >
      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 font-mono text-xs font-bold text-slate-600 transition-colors hover:text-green-700"
      >
        <ArrowLeft size={13} /> BACK TO COMPONENT MARKETPLACE
      </button>

      <div className="relative grid grid-cols-1 items-start gap-10 rounded-3xl border border-slate-200 bg-[#FAFFFB] p-6 shadow-lg sm:p-8 lg:grid-cols-12">
        <div className="pointer-events-none absolute inset-0 bg-radial from-green-500/[0.04] via-transparent to-transparent opacity-60" />

        <div className="relative lg:col-span-5">
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover opacity-80"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 font-mono text-[11px] text-slate-600 shadow-inner">
            <span>SHIPPING SPEED:</span>
            <span className="font-bold text-emerald-700">24-48 HOUR DISPATCH</span>
          </div>
        </div>

        <div className="relative z-10 space-y-5 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase text-slate-600 shadow-inner">
            <Cpu size={12} className="text-green-600" /> COMPONENT LOG: {product.badge}
          </div>

          <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h1 className="lumen-h2 text-slate-950">{product.name}</h1>
              <div className="mt-1 flex items-center gap-1 font-mono text-xs text-orange-600">
                <Star size={12} fill="currentColor" />
                <span>
                  {product.rating} ({product.reviews} customer ratings)
                </span>
              </div>
            </div>
            <span className="lumen-price text-green-700">{product.price}</span>
          </div>

          <p className="font-mono text-xs font-semibold text-orange-700">✓ {product.tagline}</p>

          <div className="rounded-xl border border-slate-200 bg-white p-5 text-xs font-light leading-relaxed text-slate-700 shadow-inner">
            {product.desc}
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
              HARDWARE METRIC SPECIFICATIONS:
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {product.specs
                .concat([
                  'Hardware-isolated channel security encryption',
                  'Reflective barrier isolation bounds containment',
                ])
                .map((item) => (
                  <div key={item} className="flex items-center gap-2 font-mono text-xs text-slate-800">
                    <Check size={13} className="shrink-0 text-green-600" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-6">
            <button
              type="button"
              onClick={onAddToCart}
              className="flex h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-green-200 transition-all hover:opacity-90"
            >
              <ShoppingCart size={14} /> ADD COMPONENT MODULE TO CONFIG
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 font-mono text-xs font-bold uppercase tracking-wider text-slate-600 shadow-inner transition-colors hover:border-slate-300 hover:text-green-800"
            >
              <Download size={13} /> DIAGRAMS (PDF)
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
