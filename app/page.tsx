import Hero from "@/components/Hero"
import TrustBadges from "@/components/TrustBadges"
import CategoryShowcase from "@/components/CategoryShowcase"
import ProductGrid from "@/components/ProductGrid"

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBadges />
      <CategoryShowcase />
      <ProductGrid />
    </div>
  )
}
