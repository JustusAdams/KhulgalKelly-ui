// components/Hero.tsx
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Text */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-4">
            Original Art & Collectibles
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-900 leading-tight mb-6">
            Discover Art That Moves You
          </h1>
          <p className="text-stone-500 text-base md:text-lg mb-10 max-w-md leading-relaxed">
            Handcrafted paintings and original art supplies — each piece tells a story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="bg-stone-900 text-white text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-stone-700 transition-colors duration-200 text-center"
            >
              Shop Collection
            </Link>
            <Link
              href="/contact"
              className="border border-stone-900 text-stone-900 text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-stone-900 hover:text-white transition-colors duration-200 text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Decorative block — hidden on small screens */}
        <div className="relative h-72 md:h-96 hidden sm:block">
          <div className="absolute inset-0 bg-stone-300 rounded-sm" />
          <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-stone-900 rounded-sm" />
          <div className="absolute top-8 left-8 right-8 bottom-8 bg-stone-200 rounded-sm flex items-center justify-center">
            <p className="font-serif text-stone-400 text-xl italic">Your art here</p>
          </div>
        </div>

      </div>
    </section>
  )
}