"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-konarr-line/70 bg-konarr-base/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="group inline-flex items-center gap-3">
          <div>
            <Image src="/assets/konarr-logotype.png" alt="Konarr wordmark" width={180} height={40} className="h-auto w-36 md:w-40" />
            <p className="text-xs uppercase tracking-[0.18em] text-konarr-muted">Build. Test. Ship.</p>
          </div>
        </Link>

        <button
          className="inline-flex items-center rounded-lg border border-konarr-line px-3 py-2 text-sm text-konarr-text md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active ? "text-konarr-accent" : "text-konarr-muted hover:text-konarr-text"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="rounded-full border border-konarr-accent/70 bg-konarr-accent/10 px-5 py-2 text-sm font-semibold text-konarr-accent transition hover:bg-konarr-accent hover:text-konarr-base"
          >
            Start a Project
          </Link>
        </nav>
      </div>

      {open && (
        <nav className="space-y-2 border-t border-konarr-line px-6 py-4 md:hidden">
          {navLinks.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm ${
                  active ? "bg-konarr-panel text-konarr-accent" : "text-konarr-muted"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
