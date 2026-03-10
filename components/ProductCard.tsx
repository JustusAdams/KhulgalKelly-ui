// components/ProductCard.tsx
import { Product } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "./AddToCartButton"

const API_BASE = process.env.API_BASE

export default function ProductCard({ product }: { product: Product }) {
  const imageUrl = `${API_BASE}${product.image}`

  return (
    <div className="group">

      {/* Image container */}
      <div className="relative overflow-hidden bg-stone-100 aspect-square mb-4">
        <Link href={`/product/${product.id}`}>
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        {product.category && (
          <span className="absolute top-3 left-3 bg-white text-stone-700 text-xs tracking-widest uppercase px-2 py-1">
            {product.category.name}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-serif text-stone-900 text-lg leading-tight hover:underline underline-offset-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-stone-700 font-medium shrink-0">${product.price}</p>
      </div>

      <AddToCartButton product={{ ...product, image: imageUrl }} />

    </div>
  )
}