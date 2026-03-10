// app/contact/page.tsx
"use client"

import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit() {
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 py-16 md:py-24">

      <div className="mb-12">
        <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-2">Reach out</p>
        <h1 className="font-serif text-4xl text-stone-900">Contact Us</h1>
      </div>

      {status === "success" ? (
        <div className="border border-stone-200 p-10 text-center">
          <p className="font-serif text-stone-900 text-xl mb-2">Message sent</p>
          <p className="text-stone-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-xs tracking-widest uppercase underline underline-offset-2 text-stone-500 hover:text-stone-900"
          >
            Send another
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="text-xs tracking-widest uppercase text-stone-500 block mb-1">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs tracking-widest uppercase text-stone-500 block mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-xs tracking-widest uppercase text-stone-500 block mb-1">Message</label>
            <textarea
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-stone-200 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors resize-none bg-transparent"
              placeholder="How can we help?"
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === "loading" || !form.name || !form.email || !form.message}
            className="w-full bg-stone-900 text-white text-xs tracking-[0.25em] uppercase py-4 hover:bg-stone-700 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </div>
      )}

      <div className="mt-16 pt-10 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-stone-500">
        <div>
          <p className="font-semibold text-stone-900 mb-1">Email</p>
          <p>hello@khulgalkelly.com</p>
        </div>
        <div>
          <p className="font-semibold text-stone-900 mb-1">Studio Hours</p>
          <p>Mon – Fri, 9am – 5pm</p>
        </div>
      </div>

    </div>
  )
}