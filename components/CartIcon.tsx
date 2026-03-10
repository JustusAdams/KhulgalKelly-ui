// components/CartIcon.tsx
"use client"

import Link from "next/link"
import { useCartStore } from "@/lib/cartStore"
import { CartStorePrpos } from "@/lib/cartStore"

export default function CartIcon() {
  const cart = useCartStore((state: CartStorePrpos) => state.cart)

  return (
    <Link href="/cart" className="relative hover:text-stone-900 transition-colors">
      <span className="uppercase tracking-widest">Cart</span>
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-4 bg-stone-900 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-sans">
          {cart.length}
        </span>
      )}
    </Link>
  )
}