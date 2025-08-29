
import React from 'react'
import logo from '../assets/konarr-logotype.png'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto container-px flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Konarr" className="h-6 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#divisions" className="opacity-80 hover:opacity-100">Divisions</a>
          <a href="#about" className="opacity-80 hover:opacity-100">About</a>
          <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
        </div>
        <a href="#contact" className="btn btn-primary text-sm">Work with us</a>
      </nav>
    </header>
  )
}
