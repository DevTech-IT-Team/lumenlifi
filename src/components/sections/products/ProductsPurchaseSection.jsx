import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Star } from 'lucide-react';

export default function ProductsPurchaseSection() {
  return (
    <section
      className="section-wash-navy relative w-full overflow-hidden py-16 sm:py-20"
      aria-labelledby="product-gallery-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="product-gallery-title" className="lumen-h2-light mt-4">
            Purchase Now
          </h2>
          <p className="lumen-body-sm-light mt-3">
            Get the complete RevF System Kit — ships worldwide.
          </p>
        </div>

        <div className="relative z-10 mb-12 rounded-3xl border border-white/15 bg-white/[0.06] p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
                <span className="ml-1 font-mono text-xs text-white/60">4.9 · 128 reviews</span>
              </div>
              <h3 className="lumen-h3">Buy RevF Kit</h3>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <motion.a
                href="https://rzp.io/rzp/vv8HFbfc"
                className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full px-8 text-sm font-bold tracking-wide text-white sm:w-auto"
                style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart size={18} />
                Buy Now
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
