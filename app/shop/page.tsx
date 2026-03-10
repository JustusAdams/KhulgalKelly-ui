// app/shop/page.tsx
import { getProducts } from "@/lib/api"
import ProductCard from "@/components/ProductCard"
import { Product } from "@/lib/products"

export default async function ShopPage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">

        {/* Header */}
        <div className="mb-10 md:mb-14 border-b border-stone-200 pb-8">
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-2">Collection</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900">Shop Artwork</h1>
            <p className="text-sm text-stone-400">{products.length} works available</p>
          </div>
        </div>

        {/* Grid */}
        {products.length === 0 ? (
          <div className="text-center py-32">
            <p className="font-serif italic text-stone-400 text-xl">No artwork available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}