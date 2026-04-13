import Image from "next/image"
import Link from "next/link"

const footerLinks = [
  { href: "/about", label: "Company" },
  { href: "/services", label: "Capabilities" },
  { href: "/contact", label: "Contact" }
]

export default function Footer() {
  return (
    <footer className="border-t border-konarr-line/70 bg-konarr-panelAlt">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <Image src="/assets/konarr-logotype.png" alt="Konarr logotype" width={220} height={48} className="h-auto w-40 md:w-44" />
          <p className="mt-3 max-w-sm text-sm text-konarr-muted">
            Canadian-born engineering group integrating product design, software, and applied R&D for teams that need momentum.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-konarr-muted">Navigate</h4>
          <ul className="mt-4 space-y-3 text-sm text-konarr-text">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-konarr-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-konarr-muted">Contact</h4>
          <p className="mt-4 text-sm text-konarr-text">Calgary, Alberta, Canada</p>
          <a href="mailto:Konarr2025@hotmail.com" className="mt-2 block text-sm text-konarr-accent hover:underline">
            Konarr2025@hotmail.com
          </a>
          <p className="mt-5 text-xs text-konarr-muted">Designed for performance. Built for scale.</p>
        </div>
      </div>
      <div className="border-t border-konarr-line/70 px-6 py-4 text-center text-xs text-konarr-muted md:px-10">
        (c) {new Date().getFullYear()} Konarr. All rights reserved.
      </div>
    </footer>
  )
}
