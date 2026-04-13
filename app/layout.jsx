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
  title: "Konarr | Precision Ventures in Engineering and Product Development",
  description:
    "Konarr is a Canadian venture group delivering motorsport engineering, CAD + additive manufacturing, software-hardware development, and applied R&D.",
  keywords: ["Konarr", "engineering", "motorsports", "3D printing", "software hardware", "product development"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${titleFont.variable}`}>
      <body className="font-[var(--font-body)]">
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
