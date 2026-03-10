// components/TrustBadges.tsx
export default function TrustBadges() {
  const badges = [
    { icon: "🚚", title: "Free Shipping", desc: "On all orders over $50" },
    { icon: "↩️", title: "14-Day Returns", desc: "Risk-free shopping" },
    { icon: "💬", title: "24/7 Support", desc: "Always here for you" },
    { icon: "🎨", title: "Original Art", desc: "Every piece is authentic" },
  ]

  return (
    <section className="border-y border-stone-200 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {badges.map((b) => (
          <div key={b.title} className="flex items-center gap-3">
            <span className="text-2xl">{b.icon}</span>
            <div>
              <p className="font-semibold text-stone-900 text-sm">{b.title}</p>
              <p className="text-stone-400 text-xs">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}