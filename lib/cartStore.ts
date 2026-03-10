import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Product } from "./products"

export interface CartStorePrpos {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (id: number) => void
}

export const useCartStore = create<CartStorePrpos>()(
    persist(
        (set) => ({
            cart: [],

            addToCart: (product: Product) =>
                set((state) => {
                    const exists = state.cart.some((p) => p.id === product.id)
                    if (exists) return state // don't add again
                    return { cart: [...state.cart, product] }
                }),

            removeFromCart: (id: number) =>
                set((state) => ({
                    cart: state.cart.filter((p) => p.id !== id)
                }))
        }),
        {
            name: "cart-storage", // key in localStorage
        }
    )
)