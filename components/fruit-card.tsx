import Link from "next/link";
import type { Locale, Product } from "@/lib/i18n";

export default function FruitCard({ product, locale, label }: { product: Product; locale: Locale; label: string }) {
  return (
    <Link href={`/${locale}/products/${product.slug}`} className="group block overflow-hidden rounded-[1.75rem] bg-white shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <div className={`relative aspect-[1.08/1] overflow-hidden ${product.tone}`}>
        <img src={product.image} alt={product.name} className="h-full w-full object-cover mix-blend-multiply transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-garden-700 backdrop-blur">{product.category}</span>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold tracking-wider text-gold-500">{product.origin}</p>
        <div className="mt-2 flex items-center justify-between gap-4"><h3 className="text-2xl font-medium tracking-tight text-garden-900">{product.name}</h3><span className="text-garden-700 transition-transform group-hover:translate-x-1">↗</span></div>
        <p className="mt-3 text-sm leading-6 text-garden-900/60">{product.description}</p>
        <span className="mt-5 inline-block text-xs font-bold tracking-wide text-garden-700">{label} →</span>
      </div>
    </Link>
  );
}
