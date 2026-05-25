// components/CategoryShowcase.tsx
import Link from "next/link"

const categories = [
  {
    slug: "paintings",
    label: "Paintings",
    icon: "🖼️",
    desc: "Original hand-painted canvases",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    slug: "shirts",
    label: "Shirts & Apparel",
    icon: "👕",
    desc: "Wearable art you can rock daily",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    slug: "music cover-art",
    label: "Music Cover-Art",
    icon: "🎵",
    desc: "Custom album & single cover designs for artists",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
  {
    slug: "logos",
    label: "Logos",
    icon: "✨",
    desc: "Unique brand identities and professional logo designs",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
]

export default function CategoryShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-10 md:mb-12">
        <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3">Browse by type</p>
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900">More Than Just Paintings</h2>
        <p className="text-stone-500 text-sm mt-3 max-w-md mx-auto">
          From wearable art to studio supplies — explore everything we offer.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop?category=${cat.slug}`}
            className={`group flex flex-col items-center text-center p-6 md:p-8 rounded-sm border ${cat.bg} ${cat.border} hover:shadow-md transition-shadow duration-200`}
          >
            <span className="text-4xl mb-3">{cat.icon}</span>
            <p className="font-serif text-stone-900 text-base md:text-lg mb-1 group-hover:underline underline-offset-2">
              {cat.label}
            </p>
            <p className="text-stone-500 text-xs leading-relaxed hidden sm:block">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
