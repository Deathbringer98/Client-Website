import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google"
import Navbar from "../components/site/Navbar"
import Footer from "../components/site/Footer"
import "./globals.css"

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body"
})

const titleFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-title"
})

export const metadata = {
  metadataBase: new URL("https://konarrtech.shop"),
  title: {
    default: "Konarr | Precision Ventures in Engineering and Product Development",
    template: "%s | Konarr"
  },
  description:
    "Konarr is a Canadian venture group delivering motorsport engineering, CAD + additive manufacturing, software-hardware development, and applied R&D.",
  keywords: ["Konarr", "engineering", "motorsports", "3D printing", "software hardware", "product development"],
  verification: {
    google: "5610ad44eedc156f"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Konarr | Precision Ventures in Engineering and Product Development",
    description:
      "Engineering-led teams for motorsports, software + hardware systems, additive manufacturing, and applied R&D.",
    url: "https://konarrtech.shop",
    siteName: "Konarr",
    type: "website",
    images: [
      {
        url: "/assets/konarr-stencil-board.jpg",
        width: 1200,
        height: 630,
        alt: "Konarr brand stencil"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Konarr | Engineering + Product Development",
    description: "Build. Test. Ship. Konarr integrates motorsport engineering, CAD + 3D printing, and applied R&D.",
    images: ["/assets/konarr-stencil-board.jpg"]
  }
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Konarr",
  url: "https://konarrtech.shop",
  logo: "https://konarrtech.shop/assets/konarr-logo-white.png",
  email: "Konarr2025@hotmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA"
  },
  sameAs: ["https://github.com/Deathbringer98/Client-Website"]
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Konarr",
  url: "https://konarrtech.shop",
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "Konarr"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${titleFont.variable}`}>
      <body className="font-[var(--font-body)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
