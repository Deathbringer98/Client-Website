
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/konarr-logotype.png'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto container-px flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Konarr" className="h-6 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="/#divisions" className="opacity-80 hover:opacity-100">Divisions</a>
          <Link to="/silicon" className="opacity-80 hover:opacity-100">Silicon</Link>
          <Link to="/racing" className="opacity-80 hover:opacity-100">Racing</Link>
          <Link to="/labs" className="opacity-80 hover:opacity-100">Labs</Link>
        </div>
        <a href="/#contact" className="btn btn-primary text-sm">Work with us</a>
      </nav>
    </header>
  )
}
