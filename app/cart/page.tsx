// app/cart/page.tsx
"use client"

import { CartStorePrpos, useCartStore } from "@/lib/cartStore"
import Price from "@/lib/Price"
import { Product } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const cart = useCartStore((state: CartStorePrpos) => state.cart)
  const removeFromCart = useCartStore((state: CartStorePrpos) => state.removeFromCart)
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0)

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">

        <div className="mb-10 md:mb-12 border-b border-stone-200 pb-6">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-1">Review</p>
          <h1 className="text-3xl md:text-4xl font-serif text-stone-900">Your Cart</h1>
        </div>

        {cart.length === 0 && (
          <div className="text-center py-20 md:py-24">
            <p className="text-stone-400 font-serif italic text-xl mb-6">Your cart is empty</p>
            <Link
              href="/shop"
              className="text-xs tracking-[0.2em] uppercase border border-stone-900 px-8 py-3 hover:bg-stone-900 hover:text-white transition-colors duration-200"
            >
              Browse Artwork
            </Link>
          </div>
        )}

        {cart.length > 0 && (
          <>
            <ul className="divide-y divide-stone-200">
              {cart.map((item: Product) => (
                <li key={item.id} className="flex items-center gap-4 md:gap-6 py-5 md:py-6">

                  {item.image && (
                    <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-stone-900 text-base md:text-lg leading-tight truncate">
                      {item.name}
                    </p>
                    {item.category && (
                      <p className="text-xs tracking-widest uppercase text-stone-400 mt-1">
                        {item.category.name}
                      </p>
                    )}
                    {/* Price shown inline on mobile */}
                    {/* <p className="font-serif text-stone-800 text-base mt-1 md:hidden">
                      ${Number(item.price).toFixed(2)}
                    </p> */}
                    <Price amount={Number(item.price).toFixed(2)} className="font-serif text-stone-800 text-base mt-1 md:hidden"/>
                  </div>

                  {/* Price hidden on mobile, shown on md+ */}
                  {/* <p className="hidden md:block font-serif text-stone-800 text-lg shrink-0">
                    ${Number(item.price).toFixed(2)}
                  </p> */}
                  <Price amount={Number(item.price).toFixed(2)} className="hidden md:block font-serif text-stone-800 text-lg shrink-0"/>


                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                    className="text-stone-300 hover:text-red-400 transition-colors duration-150 shrink-0 text-2xl leading-none">
                    ×
                  </button>

                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-stone-200 pt-8 flex flex-col items-end gap-6">
              <div className="flex items-baseline gap-8">
                <span className="text-xs tracking-[0.25em] uppercase text-stone-400">Total</span>
                {/* <span className="font-serif text-3xl text-stone-900">${total.toFixed(2)}</span> */}
                <Price amount={Number(total.toFixed(2)).toFixed(2)} className="font-serif text-3xl text-stone-900"/>

              </div>
              <button className="w-full sm:w-auto bg-stone-900 text-white text-xs tracking-[0.25em] uppercase px-12 py-4 hover:bg-stone-700 transition-colors duration-200">
                Checkout
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  )
}