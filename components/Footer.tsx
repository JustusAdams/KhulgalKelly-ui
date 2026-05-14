// components/Footer.tsx
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

        <div>
          <h3 className="font-serif text-white text-xl mb-4">Khulgal Kelly</h3>
          <p className="text-sm leading-relaxed">
            Original paintings, wearables, and art supplies — crafted with intention. Each piece is one of a kind.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Contact</p>
          <ul className="space-y-3 text-sm">
            <li>khulgalkelly@gmail.com</li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-stone-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+233 54 721 1167" className="hover:text-white transition-colors font-medium text-stone-300">
                +233 54 721 1167
              </a>
            </li>
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
