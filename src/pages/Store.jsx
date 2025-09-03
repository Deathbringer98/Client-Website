import React from 'react'
import { Link } from 'react-router-dom'
import raceImg from '../assets/racing-konarr.png'
import StoreNavbar from '../components/StoreNavbar.jsx'

export default function Store() {
  return (
    <div>
      <StoreNavbar />
      <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto container-px">
        <h1 className="text-2xl md:text-3xl font-semibold">Konarr Store</h1>
        <p className="text-white/70 mt-1">Select a division to browse products.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Link to="/store/racing" className="group">
            <div className="bg-konarr-card border border-white/10 rounded-2xl overflow-hidden">
              <div className="aspect-[16/9] bg-black/60">
                <img src={raceImg} alt="Konarr Racing" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Konarr Racing</h3>
                  <span className="text-xs text-white/60 uppercase">Shop</span>
                </div>
                <p className="text-sm text-white/60 mt-1">Suits, team apparel, and track hardware.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
    </div>
  )
}
