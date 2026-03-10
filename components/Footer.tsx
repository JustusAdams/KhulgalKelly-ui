// components/Footer.tsx
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

        <div>
          <h3 className="font-serif text-white text-xl mb-4">Khulgal Kelly</h3>
          <p className="text-sm leading-relaxed">
            Original paintings and art supplies, crafted with intention. Each piece is one of a kind.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
            <li><Link href="/cart" className="hover:text-white transition-colors">Cart</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>hello@khulgalkelly.com</li>
            <li>Mon – Fri, 9am – 5pm</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-stone-800 px-6 py-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-xs text-stone-600">
        <p>© 2026 Khulgal Kelly. All rights reserved.</p>
        <p>Handcrafted with care</p>
      </div>
    </footer>
  )
}