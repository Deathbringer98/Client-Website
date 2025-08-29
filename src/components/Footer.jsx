
import React from 'react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto container-px flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">© {year} Konarr. All rights reserved.</div>
        <div className="text-white/60 text-sm">Made with precision • Calgary, AB</div>
      </div>
    </footer>
  )
}
