import { getFeaturedProducts } from "@/lib/api"
import ProductCard from "./ProductCard"
import { Product } from "@/lib/products"
import Link from "next/link"

export default async function ProductGrid() {
  const products = await getFeaturedProducts(3)

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-10 md:mb-14">
        <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">Curated for you</p>
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900">Featured Artwork</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-10 md:mt-14">
        <Link
          href="/shop"
          className="border border-stone-900 text-stone-900 text-xs tracking-[0.25em] uppercase px-12 py-4 hover:bg-stone-900 hover:text-white transition-colors duration-200"
        >
          View All Works
        </Link>
      </div>
    </section>
  )
}