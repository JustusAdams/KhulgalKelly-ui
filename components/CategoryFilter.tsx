// components/CategoryFilter.tsx
import Link from "next/link"
import { Category } from "@/lib/api"

interface Props {
  categories: Category[]
  activeSlug?: string
}

export default function CategoryFilter({ categories, activeSlug }: Props) {
  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-2">
        {/* "All" tab */}
        <Link
          href="/shop"
          className={`px-5 py-2 text-xs tracking-[0.2em] uppercase border transition-colors duration-200 ${
            !activeSlug
              ? "bg-stone-900 text-white border-stone-900"
              : "border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900"
          }`}
        >
          All
        </Link>

        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop?category=${cat.slug}`}
            className={`px-5 py-2 text-xs tracking-[0.2em] uppercase border transition-colors duration-200 ${
              activeSlug === cat.slug
                ? "bg-stone-900 text-white border-stone-900"
                : "border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
