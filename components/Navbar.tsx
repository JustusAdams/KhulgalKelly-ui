// components/Navbar.tsx
"use client"

import Link from "next/link"
import CartIcon from "./CartIcon"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">

      {/* Announcement bar */}
      <div className="bg-stone-900 text-white text-center text-xs tracking-widest py-2 uppercase">
        Free shipping on all orders over $50
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="font-serif text-2xl text-stone-900 tracking-tight">
          Khulgal Kelly
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-stone-600">
          <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-stone-900 transition-colors">Shop</Link>
          <Link href="/contact" className="hover:text-stone-900 transition-colors">Contact</Link>
          <CartIcon />
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-4">
          <CartIcon />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-stone-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm tracking-widest uppercase text-stone-600">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-stone-900 transition-colors py-2">Home</Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)} className="hover:text-stone-900 transition-colors py-2">Shop</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-stone-900 transition-colors py-2">Contact</Link>
        </div>
      )}

    </header>
  )
}