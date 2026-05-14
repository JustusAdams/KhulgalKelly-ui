// components/AddToCartButton.tsx
// Cart is temporarily hidden — this component renders nothing for now
import { Product } from "@/lib/products"

export default function AddToCartButton({ product }: { product: Product }) {
  // Cart feature is temporarily disabled
  void product
  return null
}
