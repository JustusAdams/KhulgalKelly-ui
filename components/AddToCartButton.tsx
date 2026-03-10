// components/AddToCartButton.tsx
"use client"

import { CartStorePrpos, useCartStore } from "@/lib/cartStore"
import { Product } from "@/lib/products"

export default function AddToCartButton({ product }: { product: Product }) {
  const addToCart = useCartStore((state: CartStorePrpos) => state.addToCart)

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full border border-stone-300 text-stone-700 text-xs tracking-[0.2em] uppercase py-3 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors duration-200"
    >
      Add to Cart
    </button>
  )
}